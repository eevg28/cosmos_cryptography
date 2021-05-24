import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { addResizeListenerIsMobile, isMobile } from "../shared/services/responsive.service"

import { withRecords } from "../shared/containers/containerRecords"
import { withRecord } from "../shared/containers/containerRecord"

import styles from './records.module.scss'

const title = "Records"

class Records extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: isMobile()
    }
  }

  componentDidMount() {
    addResizeListenerIsMobile(this, "isMobile")
  }

  render() {
    const { onCloseRecords, records, onOpenRecord } = this.props
    const { isMobile } = this.state

    return <React.Fragment>
      <Link to="/" className={styles.back} />
      <div className={!isMobile ? styles.recordsBlock : styles.recordsMobileBlock}>
        <Link to="/" className={styles.closeButton} />
        <div className={styles.contentBlock}>
          {
            records.length > 0
              ? <div className={styles.listContentBlock}>
                {
                  records.map(record => {
                    return (
                      <Link className={styles.itemListBlock} key={record.id} to={`/records/${record.id}`}>
                        <img className={styles.iconItemLB} src="/img/audio-file-icon.png" alt="audio-icon" />
                        <span className={styles.nameItemLB}>{record.name}</span>
                      </Link>
                    )
                  })
                }
              </div>
              : <span className={styles.nullListBlock}>No records</span>
          }
        </div>

        <h1 className={styles.title}>{title}</h1>
        <span className={styles.address}>{title}</span>
        <span className={styles.count}>Objects: {records.length}</span>
      </div>
    </React.Fragment>
  }
}

export default withRecords(withRecord(Records));