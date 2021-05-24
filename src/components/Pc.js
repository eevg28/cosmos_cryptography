import React, { useState, useEffect } from 'react';
import { Link, Switch, BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import { withVideos } from '../shared/containers/containerVideos'
import { withPlayer } from './../shared/containers/containerPlayer'
import { withFiles } from '../shared/containers/containerFiles'
import { withDoc } from './../shared/containers/containerDoc'
import { withRecords } from '../shared/containers/containerRecords'
import { withRecord } from '../shared/containers/containerRecord'
import { withCart } from './../shared/containers/containerCart'
import { withPusk } from './../shared/containers/containerPusk'
import { withIcq } from './../shared/containers/containerIcq'

import Player from './Player'
import Videos from './Videos'
import Files from './Files'
import Records from './Records'
import Record from './Record'
import Cart from './Cart'
import Pusk from './Pusk'
import Icq from './Icq'
import Games from './Games'
import WhitePaper from './WhitePaper'
import Iframe from './Iframe'
import PdfReader from './pdfReader'
import Wp1 from './WhitePaper1'
import Pp from './Pp'

import styles from './pc.module.scss'

export const telegram = encodeURIComponent('https://t.me/joinchat/2tN1sUx8mQJlYjMy');
export const instagram = encodeURIComponent('https://instagram.com/eevg28/');
export const twitter = encodeURIComponent('http://twitter.com/eevg28');

const backs = [
  '/img/main-back.jpg',
  '/img/back1.jpg',
  '/img/mib2.jpg',
  '/img/mib3.jpg',
  '/img/mib1.png',
]

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Pc = (props) => {
  const date = new Date()
  const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  const [back, setBack] = useState(0);
  const [hours, setHour] = useState(h);
  const [minutes, setMinute] = useState(m);
  const { onOpenPusk, onClosePusk, isOpenPusk } = props

  useEffect(() => {
    setBack(getRandomIntInclusive(0, 3))
  }, {});

  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${backs[back]})` }} >
      <div className={styles.back}>
        <div className={styles.itemsWorkSpace}>
          <div className={styles.itemSpace}>
            <NavLink to="/videos" className={styles.buttonSpace} activeClassName={styles.buttonSpaceActive}>
              <img src="/img/comp-icon.png" alt="comp-icon" />
              <span>Disk X</span>
            </NavLink>
          </div>
          <div className={styles.itemSpace}>
            <NavLink to="/records" className={styles.buttonSpace} activeClassName={styles.buttonSpaceActive}>
              <img src="/img/audios-icon.png" alt="audios-icon" />
              <span>Disk Y</span>
            </NavLink>
          </div>
          <div className={styles.itemSpace}>
            <NavLink to="/files" className={styles.buttonSpace} activeClassName={styles.buttonSpaceActive}>
              <img src="/img/disk-icon.png" alt="Disk-icon" />
              <span>Disk Z</span>
            </NavLink>
          </div>
          <div className={styles.itemSpace}>
            <NavLink to="/icq" className={styles.buttonSpace} activeClassName={styles.buttonSpaceActive}>
              <img src="/img/icq-icon.png" alt="icq-icon" />
              <span>ICQ</span>
            </NavLink>
          </div>
          <div className={styles.itemSpace}>
            <Link to={`/path-${telegram}`} className={styles.buttonSpace}>
              <img src="/img/telegram-white-icon.png" alt="telegram-icon" />
              <span>Telegram</span>
            </Link>
          </div>
          <div className={styles.itemSpace}>
            <Link to={`/path-${instagram}`} className={styles.buttonSpace}>
              {/* <a target="_blank" href="https://instagram.com/eevg28/" className={styles.buttonSpace}> */}
              <img src="/img/instagram-icon.png" alt="telegram-icon" />
              <span>Instagram</span>
              {/* </a> */}
            </Link>
          </div>
          <div className={styles.itemSpace}>
            <Link to={`/path-${twitter}`} className={styles.buttonSpace}>
              {/* <a target="_blank" href="http://twitter.com/eevg28" className={styles.buttonSpace}> */}
              <img src="/img/twitter-icon.png" alt="telegram-icon" />
              <span>Twitter</span>
              {/* </a> */}
            </Link>
          </div>
          {/* <div className={styles.itemSpace}>
            <button className={styles.buttonSpace}>
              <img src="/img/xyz-icon.jpg" alt="XYZ-icon" />
              <span>XYZ</span>
            </button>
          </div> */}
          <div className={styles.itemSpace}>
            <div className={styles.buttonSpace}>
              <img src="/img/yo-icon.png" alt="Yo!-icon" />
              <span>Yo!net</span>
            </div>
          </div>
          <div className={styles.itemSpace}>
            <NavLink to="/nft" className={`${styles.buttonSpace} ${styles.nftButton}`}>
              <img src="/img/nft.gif" alt="notepad-icon" />
              <span>NFT</span>
            </NavLink>
          </div>
        </div>
        <div className={styles.itemSpaceCart}>
          <NavLink to="/cart" className={styles.buttonSpace} activeClassName={styles.buttonSpaceActive}>
            <img src="/img/cart-icon.png" alt="cart-icon" />
            <span>Cart</span>
          </NavLink>
        </div>

        <Route path="/videos/:video" component={Player} />
        <Route path="/videos" component={Videos} />

        <Route path="/files" component={Files} />

        <Route path="/records/:record" component={Record} />
        <Route path="/records" component={Records} />

        <Route path="/cart" component={Cart} />

        <Route path="/icq" component={Icq} />

        <Route path="/nft" component={Games} />
        <Route path="/nft/wp1" component={Wp1} />
        <Route path="/nft/pp" component={Pp} />
        <Route path="/nft/whitepaper" component={WhitePaper} />
        <Route path={["/path-:path", "/nft/whitepaper/path-:pathwhitepaper"]} component={Iframe} />

        <Route path={["/pdf-:pdf", "/nft/pdf-:nftpdf",]} component={PdfReader} />

        {
          isOpenPusk
            ? <React.Fragment>
              <Pusk />
              <div className={styles.puskWhiteSpace} onClick={onClosePusk} />
            </React.Fragment>
            : null
        }
      </div>


      <div className={styles.pusk}>
        <div className={styles.puskMenuWrapper}>
          <button className={!isOpenPusk ? styles.puskButton : styles.puskButtonActive} onClick={isOpenPusk ? onClosePusk : onOpenPusk}></button>
        </div>
        <div className={styles.puskTimeWrapper}>
          <span className={styles.puskTime}>{hours}:{minutes}</span>
        </div>
      </div>
    </div >
  )
}

export default withVideos(withCart(withPlayer(withPusk(withIcq(withRecords(withRecord(withFiles(withDoc(Pc)))))))));