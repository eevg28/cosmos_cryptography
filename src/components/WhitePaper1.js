import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { addResizeListenerIsMobile, isMobile } from "../shared/services/responsive.service"

import styles from './wp1.module.scss'

const title = "WhitePaper1"

class Wp1 extends Component {
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
      <div className={!isMobile ? styles.wp1Block : styles.wp1MobileBlock}>
        <Link to="/nft" className={styles.closeButton} />

        <a href="/docs/WhitePaper1.pdf" download className={styles.downloadButton}>Download</a>

        <div className={styles.contentBlock}>
          <div className={styles.listContentBlock}>
            <img src="/img/wp1/WhitePaper1-01.jpg" />
            <img src="/img/wp1/WhitePaper1-02.jpg" />
            <img src="/img/wp1/WhitePaper1-03.jpg" />
            <img src="/img/wp1/WhitePaper1-04.jpg" />
            <img src="/img/wp1/WhitePaper1-05.jpg" />
            <img src="/img/wp1/WhitePaper1-06.jpg" />
            <img src="/img/wp1/WhitePaper1-07.jpg" />
            <img src="/img/wp1/WhitePaper1-08.jpg" />
            <img src="/img/wp1/WhitePaper1-09.jpg" />
            <img src="/img/wp1/WhitePaper1-10.jpg" />
            <img src="/img/wp1/WhitePaper1-11.jpg" />
            <img src="/img/wp1/WhitePaper1-12.jpg" />
            <img src="/img/wp1/WhitePaper1-13.jpg" />
            <img src="/img/wp1/WhitePaper1-14.jpg" />
            <img src="/img/wp1/WhitePaper1-15.jpg" />
            <img src="/img/wp1/WhitePaper1-16.jpg" />
            <img src="/img/wp1/WhitePaper1-17.jpg" />
            <img src="/img/wp1/WhitePaper1-18.jpg" />
            <img src="/img/wp1/WhitePaper1-19.jpg" />
            <img src="/img/wp1/WhitePaper1-20.jpg" />
            <img src="/img/wp1/WhitePaper1-21.jpg" />
            <img src="/img/wp1/WhitePaper1-22.jpg" />
            <img src="/img/wp1/WhitePaper1-23.jpg" />
            <img src="/img/wp1/WhitePaper1-24.jpg" />
          </div>
        </div>

        <h1 className={styles.title}>{title}</h1>
      </div>
    </React.Fragment>
  }
}

export default Wp1