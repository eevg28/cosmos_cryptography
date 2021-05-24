import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Pc from "./Pc"
import Panel from "./Panel"

const App = () => {
  return (
    <React.Fragment>

      <Router>
        <Route exact path={["/",
          "/videos",
          "/videos/:video",
          "/files",
          "/records/:record",
          "/records",
          "/cart",
          "/icq",
          "/nft",
          "/nft/:name",
          "/path-:path",
          "/nft/whitepaper",
          "/nft/wp1",
          "/nft/pp",
          "/nft/whitepaper/path-:pathwhitepaper",
          "/pdf-:pdf",
          "/nft/pdf-:nftpdf",
        ]} component={Pc} />
        <Route exact path="/panel" component={Panel} />
      </Router>

      <div style={{ display: 'none' }}>
        <img src="/img/window.jpg" />
        <img src="/img/window-mobile.jpg" />
        <img src="/img/window-icq.jpg" />
        <img src="/img/window-large.jpg" />
        <img src="/img/pusk-block.png" />
        <img src="/img/window-medium.jpg" />
        <img src="/img/window-notepad.png" />
        <img src="/img/window-notepad-mobile.png" />
        <img src="/img/folder-icon.png" />
        <img src="/img/folder-null-icon.png" />
        <img src="/img/video-icon.png" />
        <img src="/img/audio-file-icon.png" />
        <img src="/img/als-icon.png" />
        <img src="/img/binance-icon.png" />
        <img src="/img/kat-icon.png" />
        <img src="/img/godaddy.jpg" />
        <img src="/img/google-icon.png" />
        <img src="/img/microsoft-icon.png" />
        <img src="/img/mtc.jpg" />
        <img src="/img/pp.png" />
        <img src="/img/tesla-icon.png" />
        <img src="/img/visa.png" />
        <img src="/img/youtube-icon.png" />
      </div>

    </React.Fragment>
  )
}

export default App;