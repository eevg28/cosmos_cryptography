import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { addResizeListenerIsMobile, isMobile } from "../shared/services/responsive.service"

import styles from './pp.module.scss'

const title = "PiratePaper"

class Pp extends Component {
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
    const { isMobile } = this.state

    return <React.Fragment>
      <Link to="/nft" className={styles.back} />
      <div className={!isMobile ? styles.ppBlock : styles.ppMobileBlock}>
        <Link to="/nft" className={styles.closeButton} />
        <a href="/docs/PiratePaper.pdf" download className={styles.downloadButton}>Download</a>

        <div className={styles.contentBlock}>
          <div className={styles.listContentBlock}>
            <img src="/img/pp/PiratePaper-01.jpg" />
            <img src="/img/pp/PiratePaper-02.jpg" />
            <img src="/img/pp/PiratePaper-03.jpg" />
            <img src="/img/pp/PiratePaper-04.jpg" />
            <img src="/img/pp/PiratePaper-05.jpg" />
            <img src="/img/pp/PiratePaper-06.jpg" />
            <img src="/img/pp/PiratePaper-07.jpg" />
            <img src="/img/pp/PiratePaper-08.jpg" />
            <img src="/img/pp/PiratePaper-09.jpg" />
            <img src="/img/pp/PiratePaper-10.jpg" />
            <img src="/img/pp/PiratePaper-11.jpg" />
            <img src="/img/pp/PiratePaper-12.jpg" />
            <img src="/img/pp/PiratePaper-13.jpg" />
            <img src="/img/pp/PiratePaper-14.jpg" />
            <img src="/img/pp/PiratePaper-15.jpg" />
            <img src="/img/pp/PiratePaper-16.jpg" />
            <img src="/img/pp/PiratePaper-17.jpg" />
          </div>
        </div>

        <h1 className={styles.title}>{title}</h1>
      </div>
    </React.Fragment>
  }
}

export default Pp