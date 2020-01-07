import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic07 from '../assets/images/pic07.jpg'

const About = props => (
  <Layout>
    <Helmet>
      <title>About Us</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>About Us</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan.Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. 
            tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. 
            Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing
             eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
          </p>
        </header>

        
        <section>
          <h2>Our Team</h2>
          <h4>Bringing you the guidance you need, when you need it.</h4>
          <div className="box alt">
            <div className="row gtr-50 gtr-uniform">
              <div className="col-12">
                <span className="image fit">
                  <img src={pic07} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic02} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic03} alt="" />
                </span>
              </div>
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic04} alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default About
