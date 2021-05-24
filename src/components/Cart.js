import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { addResizeListenerIsMobile, isMobile } from "./../shared/services/responsive.service"

import styles from './cart.module.scss'

const lossImages = ["/img/loss1.jpg", "/img/loss2.jpg", "/img/loss3.jpg", "/img/loss4.jpg", "/img/loss5.jpg"]
var timeout

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowImage: false,
      showImageLink: "",
      isMobile: isMobile()
    }
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleHideImage() {
    clearInterval(timeout)
    this.setState({
      isShowImage: false,
      showImageLink: "",
    })
  }

  handleShowImage() {
    const index = this.getRandomIntInclusive(0, 4)

    this.setState({
      isShowImage: true,
      showImageLink: lossImages[index],
    })

    clearInterval(timeout)
    timeout = setTimeout(function () {
      this.setState({
        isShowImage: false,
        showImageLink: "",
      })
    }.bind(this), 4000)
  }

  componentDidMount() {
    addResizeListenerIsMobile(this, "isMobile")
  }

  render() {
    const { isMobile, isShowImage, showImageLink } = this.state

    return <React.Fragment>
      <Link to="/" className={styles.back} />
      <div className={!isMobile ? styles.cartBlock : styles.cartMobileBlock}>
        <Link to="/" className={styles.closeButton} />

        <div className={styles.contentBlock}>
          <div className={styles.listContentBlock}>

            <div className={styles.itemListBlock} onClick={this.handleShowImage.bind(this)}>
              <img className={styles.iconItemLB} src={"/img/als-icon.png"} alt="folder-icon" />
              <span className={styles.nameItemLB}>Art.lebedev</span>
            </div>

            <div className={styles.itemListBlock} onClick={this.handleShowImage.bind(this)}>
              <img className={styles.iconItemLB} src={"/img/binance-icon.png"} alt="folder-icon" />
              <span className={styles.nameItemLB}>Binance</span>
            </div>

            <div className={styles.itemListBlock} onClick={this.handleShowImage.bind(this)}>
              <img className={styles.iconItemLB} src={"/img/kat-icon.png"} alt="folder-icon" />
              <span className={styles.nameItemLB}>CTAC kowka</span>
            </div>

            <div className={styles.itemListBlock} onClick={this.handleShowImage.bind(this)}>
              <img className={styles.iconItemLB} src={"/img/godaddy.jpg"} alt="folder-icon" />
              <span className={styles.nameItemLB}>GoDaddy</span>
            </div>

            <div className={styles.itemListBlock} onClick={this.handleShowImage.bind(this)}>
              <img className={styles.iconItemLB} src={"/img/google-icon.png"} alt="folder-icon" />
              <span className={styles.nameItemLB}>Google</span>
            </div>

            <div className={styles.itemListBlock} onClick={this.handleShowImage.bind(this)}>
              <img className={styles.iconItemLB} src={"/img/microsoft-icon.png"} alt="folder-icon" />
              <span className={styles.nameItemLB}>Microsoft</span>
            </div>

            <div className={styles.itemListBlock} onClick={this.handleShowImage.bind(this)}>
              <img className={styles.iconItemLB} src={"/img/mtc.jpg"} alt="folder-icon" />
              <span className={styles.nameItemLB}>MTC</span>
            </div>

            <div className={styles.itemListBlock} onClick={this.handleShowImage.bind(this)}>
              <img className={styles.iconItemLB} src={"/img/pp.png"} alt="folder-icon" />
              <span className={styles.nameItemLB}>PayPal</span>
            </div>

            <div className={styles.itemListBlock} onClick={this.handleShowImage.bind(this)}>
              <img className={styles.iconItemLB} src={"/img/tesla-icon.png"} alt="folder-icon" />
              <span className={styles.nameItemLB}>Tesla</span>
            </div>

            <div className={styles.itemListBlock} onClick={this.handleShowImage.bind(this)}>
              <img className={styles.iconItemLB} src={"/img/visa.png"} alt="folder-icon" />
              <span className={styles.nameItemLB}>VISA</span>
            </div>

            <div className={styles.itemListBlock} onClick={this.handleShowImage.bind(this)}>
              <img className={styles.iconItemLB} src={"/img/youtube-icon.png"} alt="folder-icon" />
              <span className={styles.nameItemLB}>Youtube</span>
            </div>

          </div>
        </div>

        {
          isShowImage
            ? <div className={styles.showImage} onClick={this.handleHideImage.bind(this)}>
              <img src={showImageLink} alt="" />
            </div>
            : null
        }

        <h1 className={styles.title}>Cart</h1>
        <span className={styles.address}>Cart</span>
        <span className={styles.count}>Objects: 11</span>
      </div>
    </React.Fragment>
  }
}

export default Cart;