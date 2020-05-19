import React from 'react'

import { isAuthenticated } from '../../lib/auth'

class About extends React.Component {


  // * function to push the user to the register page 
  handleClick = () => {
    this.props.history.push('/register')
  }

  render() {
    return (
      <>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                KEBB Clothes
           </h1>
              <h2 className="subtitle">
                A place to borrow, lend & be inspired.
      </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h3 className="title">Our Mission</h3>
            <h4 className="subtitle">
              In a world where fast fashion is destroying the planet we are on a mission to connect people and strive for a more sustainable future. KEBB gives you the chance to let others enjoy your clothes as much as you do.
      </h4>
          </div>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <img src="https://img.huffingtonpost.com/asset/5c94befb230000c800e9f38b.jpeg?ops=scalefit_720_noupscale&format=webp" alt="woman lookin at clothes" />
                </div>
                <div className="column">
                  <h4>HOW IT WORKS</h4>
                  <ul>
                    <li>Browse through all the items uploaded online</li>
                    <li>See something you like? Drop the owner a direct message requesting to borrow</li>
                    <li>Upload your on clothes & start making money on your wardobe.</li>
                  </ul>
                  <img src="https://lh3.googleusercontent.com/proxy/34ciFi1bLpunFzRFL2tACkTvInTCQXFHrzx6C2FqrSHtT-U2aPO5jTlYw_PvaIgbNuHE027Oie_izY9XUGaJ3DBX0rxqBmQ_lB_q4zNWtNACh9lUuk2mMBObUbhui9c20rTq-F8m6aijhWGfY6KJhsVD0BezerWM04d7" alt="clothes" />
                </div>
              </div>
            </div>

            <div className="container">
              <p>Join us now and see where your new wardrobe could take you!</p>
              <div className="container">
                {!isAuthenticated() &&
                  <button className="button is fullwidth"
                    onClick={this.handleClick}
                  >Join Us Now</button>}
              </div>

            </div>
          </section>
        </section>
      </>
    )
  }
}

export default About