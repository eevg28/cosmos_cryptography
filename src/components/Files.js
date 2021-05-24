import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { get, isNull } from 'lodash'

import { addResizeListenerIsMobile, isMobile } from "../shared/services/responsive.service"

import { withFiles } from "../shared/containers/containerFiles"

import styles from './files.module.scss'

const title = "Files"

class Files extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showImageLink: "",
      isMobile: isMobile()
    }
  }

  handleHideImage() {
    this.setState({
      showImageLink: "",
    })
  }

  handleShowImage(imageLink) {
    this.setState({
      showImageLink: imageLink,
    })
  }

  componentDidMount() {
    addResizeListenerIsMobile(this, "isMobile")
  }

  render() {
    const { onCloseFiles, files, openFile, onOpenFile, onCloseFile } = this.props
    const { isMobile, showImageLink } = this.state

    return !isMobile
      ? <React.Fragment>
        <Link to="/" className={styles.back} />
        <div className={styles.filesBlock}>
          <Link to="/" className={styles.closeButton} />

          <div className={styles.listBlock}>
            {
              files.length > 0
                ? files.map(file => {
                  return (
                    <div className={get(openFile, ["id"], null) !== file.id ? styles.itemListBlock : styles.itemListBlockActive} key={file.id} onClick={get(openFile, ["id"], null) !== file.id ? onOpenFile.bind(this, file) : onCloseFile}>
                      <img
                        className={styles.iconItemLB}
                        src={file.data.length > 0 ? "/img/folder-icon.png" : "/img/folder-null-icon.png"}
                        alt="folder-icon"
                      />
                      <span className={styles.nameItemLB}>{file.name} {file.data.length == 0 ? "(empty)" : null}</span>
                    </div>
                  )
                })
                : <span className={styles.nullListBlock}>No any folder</span>
            }
          </div>
          <div className={styles.contentBlock}>
            {
              !isNull(openFile)
                ? openFile.data.length !== 0
                  ? <div className={styles.filesList}>
                    <div className={styles.listContentBlock}>
                      {
                        openFile.data.map(file => {
                          return openFile.type === "doc"
                            ? <div className={styles.itemListBlock} key={file.id}>
                              <img className={styles.iconItemLB} src="/img/doc-icon.png" alt="file-icon" />
                              <span className={styles.nameItemLB}>{file.name}</span>
                              <a href={`${file.dUrl}`} download className={styles.download}>Download</a>
                            </div>
                            : openFile.type === "picture"
                              ? <div className={styles.itemListBlock} key={file.id} onClick={this.handleShowImage.bind(this, file.url)}>
                                <img className={styles.iconItemLB} src="/img/picture-icon.jpg" alt="file-icon" />
                                <span className={styles.nameItemLB}>{file.name}</span>
                              </div>
                              : null
                        })
                      }
                    </div>
                  </div>
                  : <span className={styles.nullListBlock}>Emply folder</span>
                :
                files.length > 0
                  ? <div className={styles.listContentBlock}>
                    {
                      files.map(file => {
                        return (
                          <div className={styles.itemListBlock} key={file.id} onClick={get(openFile, ["id"], null) !== file.id ? onOpenFile.bind(this, file) : onCloseFile}>
                            <img
                              className={styles.iconItemLB}
                              src={file.data.length > 0 ? "/img/folder-icon.png" : "/img/file-null-icon.png"}
                              alt="folder-icon"
                            />
                            <span className={styles.nameItemLB}>{file.name} {file.data.length == 0 ? "(empty)" : null}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                  : <span className={styles.nullListBlock}>No any folder</span>
            }
          </div>

          {
            showImageLink.length > 0
              ? <div className={styles.showImage} onClick={this.handleHideImage.bind(this)}>
                <img src={showImageLink} alt="" />
              </div>
              : null
          }

          <h1 className={styles.title}>{title}</h1>
          <span className={styles.address}>{title} {!isNull(openFile) ? ` / ${openFile.name}` : ``}</span>
          <span className={styles.count}>Objects: {isNull(openFile) ? files.length : openFile.data.length}</span>
        </div>
      </React.Fragment>
      : <React.Fragment>
        <Link to="/" className={styles.back} />
        <div className={styles.filesMobileBlock}>
          <Link to="/" className={styles.closeButton} />
          <div className={styles.contentBlock}>
            {
              !isNull(openFile)
                ? <div className={styles.backUp}>
                  <div className={styles.backButton} onClick={onCloseFile}>
                    <img className={styles.iconItemLB} src="/img/folder-icon.png" alt="folder-icon" />
                    <span className={styles.nameItemLB}>Back to Folders</span>
                  </div>
                </div>
                : null
            }
            {
              !isNull(openFile)
                ? openFile.data.length !== 0
                  ? <div className={styles.filesList}>
                    <div className={styles.listContentBlock}>
                      {
                        openFile.data.map(file => {
                          return openFile.type === "doc"
                            ? <div className={styles.itemListBlock} key={file.id}>
                              <img className={styles.iconItemLB} src="/img/doc-icon.png" alt="file-icon" />
                              <span className={styles.nameItemLB}>{file.name}</span>
                              <a href={`${file.dUrl}`} download className={styles.download}>Download</a>
                            </div>
                            : openFile.type === "picture"
                              ? <div className={styles.itemListBlock} key={file.id} onClick={this.handleShowImage.bind(this, file.url)}>
                                <img className={styles.iconItemLB} src="/img/picture-icon.jpg" alt="file-icon" />
                                <span className={styles.nameItemLB}>{file.name}</span>
                              </div>
                              : null
                        })
                      }
                    </div>
                  </div>
                  : <span className={styles.nullListBlock}>Emply folder</span>
                :
                files.length > 0
                  ? <div className={styles.listContentBlock}>
                    {
                      files.map(file => {
                        return (
                          <div className={styles.itemListBlock} key={file.id} onClick={get(openFile, ["id"], null) !== file.id ? onOpenFile.bind(this, file) : onCloseFile}>
                            <img
                              className={styles.iconItemLB}
                              src={file.data.length > 0 ? "/img/folder-icon.png" : "/img/folder-null-icon.png"}
                              alt="folder-icon"
                            />
                            <span className={styles.nameItemLB}>{file.name} {file.data.length == 0 ? "(empty)" : null}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                  : <span className={styles.nullListBlock}>No any folder</span>
            }
          </div>

          <h1 className={styles.title}>{title}</h1>
          <span className={styles.address}>{title} {!isNull(openFile) ? ` / ${openFile.name}` : ``}</span>
          <span className={styles.count}>Objects: {isNull(openFile) ? files.length : openFile.data.length}</span>

          {
            showImageLink.length > 0
              ? <div className={styles.showImage} onClick={this.handleHideImage.bind(this)}>
                <img src={showImageLink} alt="" />
              </div>
              : null
          }
        </div>
      </React.Fragment>
  }
}

export default withFiles(Files);