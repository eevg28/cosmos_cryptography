import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { get, has, isNull } from 'lodash'

import { addResizeListenerIsMobile, isMobile } from "./../shared/services/responsive.service"
import {
  likeServiceVideo,
  dislikeServiceVideo,
  viewServiceVideo,
  videoServiceVideo,
  downloadServiceVideo,
  saveProgressServiceVideo,
} from "../shared/services/requestService"

import { withVideos } from "../shared/containers/containerVideos"
import { withPlayer } from "../shared/containers/containerPlayer"

import styles from './player.module.scss'

const localStorageName = "twoGeeseVideos"
const localStorageDefault = {
  progress: 0,
  like: false,
  dislike: false,
  view: false,
  download: false,
}

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
      dislikes: 0,
      views: 0,
      localStorageData: {},
      isMobile: isMobile(),
      video: null,
    }
  }

  handleLike() {
    const videoId = this.props.match.params.video
    const { localStorageData } = this.state

    if (!localStorageData[videoId].like && !localStorageData[videoId].dislike) {
      likeServiceVideo.request({ id: videoId })
        .then((result) => {
          localStorageData[videoId].like = true
          localStorage.setItem(localStorageName, JSON.stringify(localStorageData))

          const data = result.data
          this.setState({
            likes: data[videoId].like
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  handleDislike() {
    const videoId = this.props.match.params.video
    const { localStorageData } = this.state

    if (!localStorageData[videoId].dislike && !localStorageData[videoId].like) {
      dislikeServiceVideo.request({ id: videoId })
        .then((result) => {
          localStorageData[videoId].dislike = true
          localStorage.setItem(localStorageName, JSON.stringify(localStorageData))

          const data = result.data
          this.setState({
            dislikes: data[videoId].dislike
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  handleView() {
    const videoId = this.props.match.params.video
    const { localStorageData } = this.state

    if (!localStorageData[videoId].view) {
      viewServiceVideo.request({ id: videoId })
        .then((result) => {
          localStorageData[videoId].view = true
          localStorage.setItem(localStorageName, JSON.stringify(localStorageData))

          const data = result.data
          this.setState({
            views: data[videoId].view
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  handleDownload() {
    const videoId = this.props.match.params.video
    const { localStorageData } = this.state

    if (!localStorageData[videoId].download) {
      downloadServiceVideo.request({ id: videoId })
        .then((result) => {
          localStorageData[videoId].download = true
          localStorage.setItem(localStorageName, JSON.stringify(localStorageData))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  componentWillUnmount() {
    const videoId = this.props.match.params.video
    const { localStorageData } = this.state

    localStorageData[videoId].progress = this.player.getCurrentTime()
    localStorage.setItem(localStorageName, JSON.stringify(localStorageData))
  }

  componentDidMount() {
    const { player, videos } = this.props
    const videoId = this.props.match.params.video

    videos.map((item, index) => {
      if (item.id == videoId)
        this.setState({
          video: item
        })
    })

    addResizeListenerIsMobile(this, "isMobile")

    videoServiceVideo.request({ id: videoId })
      .then((result) => {
        const data = result.data

        let localStorageData = !!localStorage.getItem(localStorageName)
          ? JSON.parse(localStorage.getItem(localStorageName))
          : {}

        if (isNull(get(localStorageData, [videoId], null))) {
          localStorageData[videoId] = { ...localStorageDefault }
          localStorage.setItem(localStorageName, JSON.stringify(localStorageData))
        }

        this.player.seekTo(localStorageData[videoId].progress, "seconds")

        this.setState({
          likes: data.like,
          dislikes: data.dislike,
          views: data.view,
          localStorageData: localStorageData,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  ref = player => {
    this.player = player
  }

  render() {
    const { onClosePlayer, openVideo } = this.props
    const { views, likes, dislikes, localStorageData, isMobile, video } = this.state

    return video
      ? <React.Fragment>
        <Link to="/" className={styles.back} />
        <div className={!isMobile ? styles.playerBlock : styles.playerMobileBlock}>
          <Link to="/videos" className={styles.closeButton} />

          <div className={styles.playerContent}>
            <div className={styles.playerWrapper}>
              {
                !isMobile
                  ?
                  <ReactPlayer
                    ref={this.ref}
                    url={video.url}
                    controls={true}
                    volume={0.5}
                    width={550}
                    height={310}
                    onPlay={this.handleView.bind(this)}
                  />
                  :
                  <ReactPlayer
                    ref={this.ref}
                    url={video.url}
                    controls={true}
                    volume={0.8}
                    width={315}
                    height={250}
                    onPlay={this.handleView.bind(this)}
                  />
              }
            </div>
            <div className={styles.playerControls}>
              <span className={styles.playerViews}>Views: {views}</span>
              <a href={`${video.dUrl}`} download className={styles.download} onClick={this.handleDownload.bind(this)}>Download</a>
              <button
                className={get(localStorageData, [video.id, "like"], false) ? styles.likeButtonSelected : styles.likeButton}
                onClick={this.handleLike.bind(this)}
                disabled={get(localStorageData, [video.id, "dislike"], false) || get(localStorageData, [video.id, "like"], false)}
              >
                {likes}
                <img src="/img/like-s-icon.png" alt="like-icon" />
              </button>
              <button
                className={get(localStorageData, [video.id, "dislike"], false) ? styles.disLikeButtonSelected : styles.disLikeButton}
                onClick={this.handleDislike.bind(this)}
                disabled={get(localStorageData, [video.id, "dislike"], false) || get(localStorageData, [video.id, "like"], false)}
              >
                <img src="/img/dislike-s-icon.png" alt="like-icon" />
                {dislikes}
              </button>
            </div>
          </div>

          <h1 className={styles.title}>{video.name}</h1>
          <span className={styles.address}>{has(openVideo, ["name"]) ? `${openVideo.name} / ` : ""}{video.name}</span>
        </div>
      </React.Fragment>
      : null
  }
}

export default withPlayer(withVideos(Player));