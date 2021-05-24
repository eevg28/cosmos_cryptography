import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { get, isNull } from 'lodash'

import { addResizeListenerIsMobile, isMobile } from "../shared/services/responsive.service"

import { withVideos } from "../shared/containers/containerVideos"
import { withPlayer } from "../shared/containers/containerPlayer"

import styles from './videos.module.scss'

const title = "Videos"

class Videos extends Component {
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
    const { onCloseVideos, videos, openVideo, onOpenVideo, onCloseVideo, onOpenPlayer } = this.props
    const { isMobile } = this.state

    return !isMobile
      ? <React.Fragment>
        <Link to="/" className={styles.backClick} />
        <div className={styles.videosBlock}>
          <Link to="/" className={styles.closeButton} />

          <div className={styles.listBlock}>
            {
              videos.length > 0
                ? videos.map(folder => {
                  return (
                    <div
                      className={
                        folder.id !== 0
                          ? get(openVideo, ["id"], null) !== folder.id
                            ? styles.itemListBlock
                            : styles.itemListBlockActive
                          : styles.itemListBlockClosed
                      }
                      key={folder.id}
                      onClick={folder.id !== 0
                        ? get(openVideo, ["id"], null) !== folder.id
                          ? onOpenVideo.bind(this, folder)
                          : onCloseVideo
                        : () => { }
                      }
                    >
                      <img
                        className={folder.videos.length != 0 ? styles.iconItemLB : styles.iconItemLBEmpty}
                        src={folder.videos.length > 0 ? "/img/folder-icon.png" : "/img/folder-null-icon.png"}
                        alt="folder-icon"
                      />
                      <span className={styles.nameItemLB}>{folder.name} {folder.videos.length == 0 ? "(empty)" : null}</span>
                    </div>
                  )
                })
                : <span className={styles.nullListBlock}>No any folder</span>
            }
          </div>
          <div className={styles.contentBlock}>
            {
              !isNull(openVideo)
                ? openVideo.videos.length !== 0
                  ? <div className={styles.videosList}>
                    <div className={styles.listContentBlock}>
                      {
                        openVideo.videos.map(video => {
                          return (
                            <Link className={styles.itemListBlock} key={video.id} to={`/videos/${video.id}`}>
                              <img className={styles.iconItemLB} src="/img/video-icon.png" alt="video-icon" />
                              <span className={styles.nameItemLB}>{video.name}</span>
                            </Link>
                          )
                        })
                      }
                    </div>
                  </div>
                  : <span className={styles.nullListBlock}>Emply folder
                    <button className={styles.back} onClick={onCloseVideo}>Back</button>
                  </span>
                :
                videos.length > 0
                  ? <div className={styles.listContentBlock}>
                    {
                      videos.map(folder => {
                        return (
                          <div
                            className={folder.id !== 0 ? styles.itemListBlock : styles.itemListBlockClosed}
                            key={folder.id}
                            onClick={folder.id !== 0
                              ? get(openVideo, ["id"], null) !== folder.id
                                ? onOpenVideo.bind(this, folder)
                                : onCloseVideo
                              : () => { }
                            }
                          >
                            <img
                              className={folder.videos.length != 0 ? styles.iconItemLB : styles.iconItemLBEmpty}
                              src={folder.videos.length > 0 ? "/img/folder-icon.png" : "/img/folder-null-icon.png"}
                              alt="folder-icon"
                            />
                            <span className={styles.nameItemLB}>{folder.name} {folder.videos.length == 0 ? "(empty)" : null}</span>
                          </div>
                        )
                      })
                    }
                    {
                      videos[0].videos.map(video => {
                        return (
                          <Link className={styles.itemListBlock} key={video.id} to={`/videos/${video.id}`}>
                            <img className={styles.iconItemLB} src="/img/video-icon.png" alt="video-icon" />
                            <span className={styles.nameItemLB}>{video.name}</span>
                          </Link>
                        )
                      })
                    }

                  </div>
                  : <span className={styles.nullListBlock}>No any folder</span>
            }
          </div>

          <h1 className={styles.title}>{title}</h1>
          <span className={styles.address}>{title}</span>
          <span className={styles.count}>Objects: {videos.length}</span>
        </div >
      </React.Fragment>
      : <React.Fragment>
        <Link to="/" className={styles.backClick} />
        <div className={styles.videosMobileBlock}>
          <Link to="/" className={styles.closeButton} />
          <div className={styles.contentBlock}>
            {
              !isNull(openVideo)
                ? <div className={styles.backUp}>
                  <div className={styles.backButton} onClick={onCloseVideo}>
                    <img className={styles.iconItemLB} src="/img/folder-icon.png" alt="folder-icon" />
                    <span className={styles.nameItemLB}>Back to Folders</span>
                  </div>
                </div>
                : null
            }
            {
              !isNull(openVideo)
                ? openVideo.videos.length !== 0
                  ? <div className={styles.videosList}>
                    <div className={styles.listContentBlock}>
                      {
                        openVideo.videos.map(video => {
                          return (
                            <Link className={styles.itemListBlock} key={video.id} to={`/videos/${video.id}`}>
                              <img className={styles.iconItemLB} src="/img/video-icon.png" alt="video-icon" />
                              <span className={styles.nameItemLB}>{video.name}</span>
                            </Link>
                          )
                        })
                      }
                    </div>
                  </div>
                  : <span className={styles.nullListBlock}>Emply folder
                <button className={styles.back} onClick={onCloseVideo}>Back</button>
                  </span>
                :
                videos.length > 0
                  ? <div className={styles.listContentBlock}>
                    {
                      videos.map(folder => {
                        return (
                          <div
                            className={folder.id !== 0 ? styles.itemListBlock : styles.itemListBlockClosed}
                            key={folder.id}
                            onClick={folder.id !== 0
                              ? get(openVideo, ["id"], null) !== folder.id
                                ? onOpenVideo.bind(this, folder)
                                : onCloseVideo
                              : () => { }
                            }
                          >
                            <img
                              className={folder.videos.length != 0 ? styles.iconItemLB : styles.iconItemLBEmpty}
                              src={folder.videos.length > 0 ? "/img/folder-icon.png" : "/img/folder-null-icon.png"}
                              alt="folder-icon"
                            />
                            <span className={styles.nameItemLB}>{folder.name} {folder.videos.length == 0 ? "(empty)" : null}</span>
                          </div>
                        )
                      })
                    }
                    {
                      videos[0].videos.map(video => {
                        return (
                          <Link className={styles.itemListBlock} key={video.id} to={`/videos/${video.id}`}>
                            <img className={styles.iconItemLB} src="/img/video-icon.png" alt="video-icon" />
                            <span className={styles.nameItemLB}>{video.name}</span>
                          </Link>
                        )
                      })
                    }
                  </div>
                  : <span className={styles.nullListBlock}>No any folder</span>
            }
          </div>

          <h1 className={styles.title}>{title}</h1>
          <span className={styles.address}>{title} {!isNull(openVideo) ? ` / ${openVideo.name}` : ``}</span>
          <span className={styles.count}>Objects: {isNull(openVideo) ? videos.length : openVideo.videos.length}</span>
        </div>
      </React.Fragment>
  }
}

export default withVideos(withPlayer(Videos));