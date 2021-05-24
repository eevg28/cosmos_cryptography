import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { get, isNull } from 'lodash'
import { Link } from 'react-router-dom'

import {
  likeServiceRecord,
  dislikeServiceRecord,
  listenServiceRecord,
  recordServiceRecord,
  downloadServiceRecord,
} from "../shared/services/requestService"

import { withRecords } from "../shared/containers/containerRecords"

import styles from './record.module.scss'

const localStorageName = "twoGeeseRecords"
const localStorageDefault = {
  like: false,
  dislike: false,
  listen: false,
  download: false,
}

class Record extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
      dislikes: 0,
      listens: 0,
      localStorageData: {},
      record: null,
    }
  }

  handleLike() {
    const recordId = this.props.match.params.record
    const { localStorageData } = this.state

    if (!localStorageData[recordId].like && !localStorageData[recordId].dislike) {
      likeServiceRecord.request({ id: recordId })
        .then((result) => {
          localStorageData[recordId].like = true
          localStorage.setItem(localStorageName, JSON.stringify(localStorageData))

          const data = result.data
          this.setState({
            likes: data[recordId].like
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  handleDislike() {
    const recordId = this.props.match.params.record
    const { localStorageData } = this.state

    if (!localStorageData[recordId].dislike && !localStorageData[recordId].like) {
      dislikeServiceRecord.request({ id: recordId })
        .then((result) => {
          localStorageData[recordId].dislike = true
          localStorage.setItem(localStorageName, JSON.stringify(localStorageData))

          const data = result.data
          this.setState({
            dislikes: data[recordId].dislike
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  handleListen() {
    const recordId = this.props.match.params.record
    const { localStorageData } = this.state

    if (!localStorageData[recordId].listen) {
      listenServiceRecord.request({ id: recordId })
        .then((result) => {
          localStorageData[recordId].listen = true
          localStorage.setItem(localStorageName, JSON.stringify(localStorageData))

          const data = result.data
          this.setState({
            listens: data[recordId].listen
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  handleDownload() {
    const recordId = this.props.match.params.record
    const { localStorageData } = this.state

    if (!localStorageData[recordId].download) {
      downloadServiceRecord.request({ id: recordId })
        .then((result) => {
          localStorageData[recordId].download = true
          localStorage.setItem(localStorageName, JSON.stringify(localStorageData))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  componentDidMount() {
    const { records } = this.props
    const recordId = this.props.match.params.record

    records.map((item, index) => {
      if (item.id == recordId)
        this.setState({
          record: item
        })
    })

    recordServiceRecord.request({ id: recordId })
      .then((result) => {
        const data = result.data

        let localStorageData = !!localStorage.getItem(localStorageName)
          ? JSON.parse(localStorage.getItem(localStorageName))
          : {}

        if (isNull(get(localStorageData, [recordId], null))) {
          localStorageData[recordId] = { ...localStorageDefault }
          localStorage.setItem(localStorageName, JSON.stringify(localStorageData))
        }

        this.setState({
          likes: data.like,
          dislikes: data.dislike,
          listens: data.listen,
          localStorageData: localStorageData,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { likes, dislikes, listens, localStorageData, record } = this.state

    return record
      ? <React.Fragment>
        <Link to="/records" className={styles.back} />
        <div className={styles.recordMobileBlock}>
          <Link to="/records" className={styles.closeButton} />

          <div className={styles.recordContent}>
            <div className={styles.recordWrapper}>
              <ReactAudioPlayer
                src={record.url}
                onPlay={this.handleListen.bind(this)}
                controls
                style={{ width: '100%' }}
              />
            </div>
            <div className={styles.recordControls}>
              <span className={styles.recordViews}>Play: {listens}</span>
              <a href={record.dUrl} download className={styles.download}>Download</a>
              <button
                className={get(localStorageData, [record.id, "like"], false) ? styles.likeButtonSelected : styles.likeButton}
                onClick={this.handleLike.bind(this)}
                disabled={get(localStorageData, [record.id, "dislike"], false) || get(localStorageData, [record.id, "like"], false)}
              >
                {likes}
                <img src="/img/like-s-icon.png" alt="like-icon" />
              </button>
              <button
                className={get(localStorageData, [record.id, "dislike"], false) ? styles.disLikeButtonSelected : styles.disLikeButton}
                onClick={this.handleDislike.bind(this)}
                disabled={get(localStorageData, [record.id, "dislike"], false) || get(localStorageData, [record.id, "like"], false)}
              >
                <img src="/img/dislike-s-icon.png" alt="like-icon" />
                {dislikes}
              </button>
            </div>
          </div>

          <h1 className={styles.title}>{record.name}</h1>
          <span className={styles.address}>Records / {record.name}</span>
        </div>
      </React.Fragment>
      : null
  }
}

export default withRecords(Record);