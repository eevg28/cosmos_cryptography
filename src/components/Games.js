import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { addResizeListenerIsMobile, isMobile } from "../shared/services/responsive.service"

import styles from './games.module.scss'

const title = "NFT"
const whitePaper1 = encodeURIComponent(`${window.location.origin}/docs/WhitePaper1.pdf`);
const piratePaper = encodeURIComponent(`${window.location.origin}/docs/PiratePaper.pdf`);
// const whitePaper1 = encodeURIComponent(`${window.location.origin}/docs/WhitePaper1.pdf`);
// const piratePaper = encodeURIComponent(`${window.location.origin}/docs/PiratePaper.pdf`);

class Games extends Component {
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
      <Link to="/" className={styles.back} />
      <div className={!isMobile ? styles.gamesBlock : styles.gamesMobileBlock}>
        <Link to="/" className={styles.closeButton} />
        <div className={styles.contentBlock}>
          <div className={styles.listContentBlock}>

            {/* <Link to="/nft/whitepaper" className={styles.itemListBlock}>
              <img className={styles.iconItemLB} src="/img/notepad-icon.png" alt="file-icon" />
              <span className={styles.nameItemLB}>WhitePaper</span>
            </Link> */}

            <Link to="/nft/wp1" className={styles.itemListBlock}>
              <img className={styles.iconItemLB} src="/img/notepad-icon.png" alt="file-icon" />
              <span className={styles.nameItemLB}>WhitePaper1</span>
            </Link>

            <Link to="/nft/pp" className={styles.itemListBlock}>
              <img className={styles.iconItemLB} src="/img/notepad-icon.png" alt="file-icon" />
              <span className={styles.nameItemLB}>PiratePaper</span>
            </Link>

            {/* <Link to={`/nft/pdf-"${piratePaper}`} className={styles.itemListBlock}>
              <img className={styles.iconItemLB} src="/img/notepad-icon.png" alt="file-icon" />
              <span className={styles.nameItemLB}>PiratePaper</span>
            </Link> */}

            <div className={styles.itemListBlock}>
              <img className={styles.iconItemLB} src="/img/cannabis.png" alt="file-icon" />
              <span className={styles.nameItemLB}>Cannabis</span>
            </div>

            <div className={`${styles.itemListBlock} ${styles.disabledItems}`}>
              <img className={styles.iconItemLB} src="/img/loveis.png" alt="file-icon" />
              <span className={styles.nameItemLB}>LoveIs</span>
            </div>

            <div className={`${styles.itemListBlock} ${styles.disabledItems}`}>
              <img className={styles.iconItemLB} src="/img/mario.jpg" alt="file-icon" />
              <span className={styles.nameItemLB}>Mario</span>
            </div>

            <div className={`${styles.itemListBlock} ${styles.disabledItems}`}>
              <img className={styles.iconItemLB} src="/img/pokemon.png" alt="file-icon" />
              <span className={styles.nameItemLB}>Pokemon</span>
            </div>

            <div className={`${styles.itemListBlock} ${styles.disabledItems}`}>
              <img className={styles.iconItemLB} src="/img/r.jpg" alt="file-icon" />
              <span className={styles.nameItemLB}>Etc</span>
            </div>

            <div className={styles.itemListBlock}>
              <img className={styles.iconItemLB} src="/img/simpsons.png" alt="file-icon" />
              <span className={styles.nameItemLB}>Simpsons</span>
            </div>

            <div className={styles.itemListBlock}>
              <img className={styles.iconItemLB} src="/img/tekken.jpg" alt="file-icon" />
              <span className={styles.nameItemLB}>Tekken</span>
            </div>

            <div className={`${styles.itemListBlock} ${styles.disabledItems}`}>
              <img className={styles.iconItemLB} src="/img/underground2.jpg" alt="file-icon" />
              <span className={styles.nameItemLB}>Underground 2</span>
            </div>
          </div>
        </div>

        <h1 className={styles.title}>{title}</h1>
        <span className={styles.address}>{title}</span>
        <span className={styles.count}>Objects: 2</span>
      </div >
    </React.Fragment >
  }
}

export default Games