import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { addResizeListenerIsMobile, isMobile } from "../shared/services/responsive.service"

import styles from './whitePaper.module.scss'
import './gameBootstrap.scss'
import './whitePaperInner.scss'

const title = "WhitePaper"

class TokenGame extends Component {
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
      <div className={!isMobile ? styles.tokenGameBlock : styles.tokenGameMobileBlock}>
        <Link to="/nft" className={styles.closeButton} />
        <div className={styles.contentBlock}>
          <div className={styles.listContentBlock}>

            <section id="token" className="token">
              <div className="container">

                <div className="section-title aos-init aos-animate" data-aos="fade-up">
                  <h2>Token</h2>
                </div>

                <div className="row content">
                  <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                    <p><strong>50% of token supply burned to Vitalik as a gesture of peace. </strong></p>
                    <p>Following the path of the Shiba Inu, half of the Dogelon (ELON) token supply was immediately burned to Vitalik Buterin, to ensure a fair distribution from the very start.</p>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <p><strong>50% of token supply permanently locked in Uniswap liquidity pool.</strong> </p>
                    <p>Half of the token supply was immediately added to the Uniswap ELON and ETH pair then <Link to={`/nft/whitepaper/path-${encodeURIComponent('https://etherscan.io/tx/0x968cb7688f70ed0e078d2e2aa7e98c2ccb8e4460e17fa8aa40447ce8836857d6')}`}>locked forever</Link>. This ensures there is no way to remove any starting liquidity from the Uniswap pool therefore removing any possibility of initial liquidity drawdown by the devs.</p>
                  </div>
                </div>

              </div>
            </section>

            <section id="about" className="about">
              <div className="container">

                <div className="section-title aos-init aos-animate" data-aos="fade-up">
                  <h2>About</h2>
                </div>

                <div className="row aos-init aos-animate" data-aos="fade-up">
                  <p>
                    Dear Earth Citizens,
<br /><br />

                    As you may know, I have dedicated my life to ensuring that humanity becomes a multi-planetary species.

                    This involves work on four front: interplanetary flight, terraforming the planet, sending settlers, and creating an interplanetary currency.

                    I am excited to announce today the launch of our forefront in our mission to Mars. The first interplanetary currency: Dogelon.


<br /><br />
                      Technically, it is is a fork of Dogecoin, in the same sense that a knife is a fork of a spoon.

                      I have named it after the capital city of Mars: Dogelon (pronounced Dog-a-lon, not Doge Elon because that would be arrogant).

                      The ticker is Dogelon (ELON), which should help prevent any confusion.

                      I am launching this currency today, in anticipation of bringing the first settlers to Mars, for a very specific reason: To help people take the trip with me.

                      A lot of good people have hopes of one day reaching the Moon.

<br /><br />
                        In my opinion, of course, this is a very low aspiration. We want to reach Mars and beyond.

                        However, many of those good people are rugged, or buy scam tokens that can't be sold.

                        For this reason, the Dogelon community pledges to send tokens over time to victims of rugs and scams, so that the worst day of their trading life can be turned into their best. And after some time, they will be able to join us on our regular flights to Mars....
	  </p>
                </div>

              </div>
              <section>


                <section id="faq" className="faq">
                  <div className="container">

                    <div className="section-title aos-init aos-animate" data-aos="fade-up">
                      <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="row faq-item d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                      <div className="col-lg-5">
                        <i className="ri-question-line"></i>
                        <h4>What is Dogelon?</h4>
                      </div>
                      <div className="col-lg-7">
                        <p>
                          Think of Dogelon as a fair universal currency for the people. Everywhere.

                          It is not a meme currency like Doge, Shiba, or Cardano. This is a real project that will be constantly evolving.

                          And that begins with undoing the damage done by scammers, schemers, and bad actors.

                          You may have some questions.
            </p>
                      </div>
                    </div>

                    <div className="row faq-item d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                      <div className="col-lg-5">
                        <i className="ri-question-line"></i>
                        <h4>Was there a presale?</h4>
                      </div>
                      <div className="col-lg-7">
                        <p>
                          No, as I mentioned, it’s a “fair” universal currency. There was no presale. No one has tokens. Besides Vitalik Buterin. I sent half to him. As a thank you.
            </p>
                      </div>
                    </div>

                    <div className="row faq-item d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                      <div className="col-lg-5">
                        <i className="ri-question-line"></i>
                        <h4>Where can I get Dogelon?</h4>
                      </div>
                      <div className="col-lg-7">
                        <p>

                          The Uniswap link is here: <Link to={`/nft/whitepaper/path-${encodeURIComponent('https://app.uniswap.org/#/swap?outputCurrency=0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3')}`}>Uniswap</Link>.<br />

                                    The contract address is: <Link to={`/nft/whitepaper/path-${encodeURIComponent('https://etherscan.io/token/0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3')}`}>0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3</Link>.

<br />


                        </p>
                      </div>
                    </div>

                    <div className="row faq-item d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                      <div className="col-lg-5">
                        <i className="ri-question-line"></i>
                        <h4>What are the tokenomics?</h4>
                      </div>
                      <div className="col-lg-7">
                        <p>
                          1,000,000,000,000,000 ELON were created.<br />

                                        50 percent were sent to Vitalik Buterin.<br />

                                          50 percent were permanently locked with Ether on Uniswap.<br />

                                            The community is encouraged to airdrop Dogelon tokens to victims of rugs and scams. It’s important to give back and build community trust. <br />
                        </p>
                      </div>
                    </div>

                    <div className="row faq-item d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                      <div className="col-lg-5">
                        <i className="ri-question-line"></i>
                        <h4>I got rugged. Do I get an airdrop?</h4>
                      </div>
                      <div className="col-lg-7">
                        <p>
                          I leave this up to the community to determine. Otherwise, people will just be getting rugged to get some Dogelon. I expect this currency to be more coveted than not just Ethereum but also Dogecoin. Which I shall from this day forward be referring to as Test Doge.
            </p>
                      </div>
                    </div>

                    <div className="row faq-item d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                      <div className="col-lg-5">
                        <i className="ri-question-line"></i>
                        <h4>Are you really Elon?</h4>
                      </div>
                      <div className="col-lg-7">
                        <p>
                          Yes, my name is Elon.
            </p>
                      </div>
                    </div>

                  </div>
                </section>


              </section></section>

          </div>
        </div>

        <h1 className={styles.title}>{title}</h1>
      </div>
    </React.Fragment>
  }
}

export default TokenGame