import React, { Component } from 'react';

import { isMobile } from "./../shared/services/responsive.service"

import { withFiles } from "../shared/containers/containerFiles"
import { withDoc } from "../shared/containers/containerDoc"

import styles from './doc.module.scss'

class Doc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: isMobile()
    }
  }

  render() {
    const { onCloseDoc, openFile, doc } = this.props
    const { isMobile } = this.state

    return <div className={!isMobile ? styles.docBlock : styles.docMobileBlock}>
      <button className={styles.closeButton} onClick={onCloseDoc} />

      <div className={styles.docContent}>
        <div className={styles.docWrapper}>
        </div>
        <div className={styles.docControls}>
          <a href={`${doc.dUrl}`} download className={styles.download}>Download</a>
        </div>
      </div>

      <h1 className={styles.title}>{doc.name}</h1>
      <span className={styles.address}>{openFile.name} / {doc.name}</span>
    </div>
  }
}

export default withDoc(withFiles(Doc));