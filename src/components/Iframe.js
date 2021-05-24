import React, { Component } from 'react';
import { get, has } from 'lodash'
import { Link } from "react-router-dom";
import { telegram, instagram, twitter } from "./Pc"

import { addResizeListenerIsMobile, isMobile } from "../shared/services/responsive.service"

import styles from './iframe.module.scss'
const title = "Browser"

class Iframe extends Component {
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
    const pathSimple = has(this, ["props", "match", "params", "path"])
    const path = get(this, ["props", "match", "params", "path"], get(this, ["props", "match", "params", "pathwhitepaper"]), "")

    const urlPath = new URL(decodeURIComponent(path))
    const linkTitle = urlPath.hostname + urlPath.pathname

    return <React.Fragment>
      <Link to={pathSimple ? "/" : "/nft/whitepaper"} className={pathSimple ? styles.back : styles.backChild} />
      <div className={!isMobile ? styles.iframeBlock : styles.iframeMobileBlock}>
        <Link to={pathSimple ? "/" : "/nft/whitepaper"} className={styles.closeButton} />
        <div className={styles.contentBlock}>
          <iframe id="site" className={styles.contentIframe} src={decodeURIComponent(path)}>
            Your system doesn't support my Browser... go link please

          <a href={decodeURIComponent(path)} target="_blank">{decodeURIComponent(path)}</a>
          </iframe>

          <div className={styles.backInstruction}>
            {
              urlPath.hostname === 't.me'
                ? <div style={{ padding: "10px" }}>
                  <p>ошибка {`<-`} старый интернет не даёт остаться дома, iframe все такое.</p>
                  <p>решение {`<-`} тапай по адресной строке и все гуд. а так в ближайших планах объедение проекта с рядом других соцсетей, затем дружественное слияние с cosmos либо поглощение))</p>
                  <p>ошибка {`<-`} старый интернет блокирует остаться дома.</p>
                  <p>ориентир ~ пару месяцев.</p>
                  <p>__</p>
                  <p>TEL наша межгалактическая трансорбитальная станция 🏴‍☠️ 👻</p>
                </div>
                : null
            }
            {
              urlPath.hostname === 'instagram.com'
                ? <div style={{ padding: "10px" }}>
                  <p>ошибка {`<-`} старый интернет не даёт остаться дома, iframe все такое.</p>
                  <p>решение {`<-`} тапай по адресной строке и все гуд. а так в ближайших планах объедение  проекта с рядом других соцсетей, затем дружественное слияние с cosmos либо поглощение))</p>
                  <p>ориентир ~ пару месяцев.</p>
                  <p>__</p>
                  <p>INS фоточки, сторизы там не больше двух-четырёх в день, дальше платно.</p>
                  <p>-^ отбирай лучшее 😉</p>
                </div>
                : null
            }
            {
              urlPath.hostname === 'twitter.com'
                ? <div style={{ padding: "10px" }}>
                  <p>ошибка {`<-`} старый интернет не даёт остаться дома, iframe все такое.</p>
                  <p>решение {`<-`} тапай по адресной строке и все гуд. а так в ближайших планах объедение проекта с рядом других соцсетей, затем дружественное слияние с cosmos либо поглощение))</p>
                  <p>ориентир ~ пару месяцев.</p>
                  <p>__</p>
                  <p>TWT (TWTR) мне нужен для инвестиционки.</p>
                  <p>девочкам можно попустить ☺️</p>
                </div>
                : null
            }

          </div>
        </div>

        <span className={styles.address}><a href={decodeURIComponent(path)} target="_blank">{linkTitle}</a></span>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </React.Fragment>
  }
}

export default Iframe