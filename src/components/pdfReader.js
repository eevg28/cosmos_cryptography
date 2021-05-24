import React, { Component } from 'react';
import { get, has } from 'lodash'
import { Link } from "react-router-dom";
// import PDFViewer from 'pdf-viewer-reactjs'
// import { Document, Page } from 'react-pdf';

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// import { Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';


import { addResizeListenerIsMobile, isMobile } from "../shared/services/responsive.service"

import styles from './pdfReader.module.scss'

const title = "PDFReader"

const options = {};

class PdfReader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: isMobile(),
      pageNumber: 1
    }

    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this)
  }

  componentDidMount() {
    addResizeListenerIsMobile(this, "isMobile")
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({
      pageNumber: numPages
    });
  }

  render() {
    const { isMobile, pageNumber } = this.state
    const pathSimple = has(this, ["props", "match", "params", "pdf"])
    const path = get(this, ["props", "match", "params", "pdf"], get(this, ["props", "match", "params", "nftpdf"]), "")

    console.log("pageNumber", pageNumber)

    return <React.Fragment>
      <Link to={pathSimple ? "/" : "/nft"} className={pathSimple ? styles.back : styles.backChild} />
      <div className={!isMobile ? styles.pdfReaderBlock : styles.pdfReaderMobileBlock}>
        <Link to={pathSimple ? "/" : "/nft"} className={styles.closeButton} />
        <div className={styles.contentBlock}>
          <div className={styles.listContentBlock}>

            {/* <Document
              file={`${decodeURIComponent(path)}`}
              onLoadSuccess={this.onDocumentLoadSuccess}
              options={options}
              className={styles.pdf}
            >
              {
                Array.from(
                  new Array(pageNumber),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                    />
                  ),
                )
              }
            </Document> */}

          </div>
        </div>

        <h1 className={styles.title}>{title}</h1>
      </div>
    </React.Fragment>
  }
}

export default PdfReader