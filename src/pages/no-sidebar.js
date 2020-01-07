import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic07 from '../assets/images/pic07.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

const LeftSidebar = props => (
  <Layout>
    <Helmet>
      <title>Right Sidebar - Landed by HTML5 UP</title>
      <meta name="description" content="Right Sidebar Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>About Us</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>

        <section id="content">
          <a href="#" className="image fit">
            <img src={pic07} alt="" />
          </a>
          <h3>Dolore Amet Consequat</h3>
          <p>
            Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est.
            Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus
            justo. Cras vel neque eros. Vestibulum diam quam, mollis at magna
            consectetur non, malesuada quis augue. Morbi tincidunt pretium
            interdum est. Curabitur mi justo, tincidunt vel eros ullamcorper,
            porta cursus justo. Cras vel neque eros. Vestibulum diam cubilia
            adipiscing interdum aliquet aliquet placerat cubilia accumsan cep
            ante nullam adipiscing tortor odio. Iaculis adipiscing accumsan
            nascetur in cras. Lacinia placerat.
          </p>
          <p>
            Vestibulum diam quam, mollis at consectetur non, malesuada quis
            augue. Morbi tincidunt pretium interdum. Morbi mattis elementum
            orci, nec dictum porta cursus justo. Quisque ultricies lorem in
            ligula condimentum, et egestas turpis sagittis. Cras ac nunc urna.
            Nullam eget lobortis purus. Phasellus vitae tortor non est placerat
            tristique faucibus magna adipiscing aliquet blandit nisi dolor
            accumsan nascetur lorem. Vis enim. Curae. Mi arcu vis aliquam ipsum
            non accumsan ac mi faucibus amet eu accumsan erat interdum semper
            accumsan. Eu sagittis tellus accumsan neque lorem penatibus in
            porttitor. Vivamus commodo curae. Condimentum lobortis praesent id
            ac lorem. Lorem vis ipsum dolor feugiat consequat dolore adipiscing.
          </p>
        </section>

        <section>
          <h2>Our Team</h2>
          <h4>Bringing you the guidance you need when you need it.</h4>
          <div className="box alt">
            <div className="row gtr-50 gtr-uniform">
              <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={pic09} alt="" />
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
                  <img src={pic09} alt="" />
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
                  <img src={pic09} alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default LeftSidebar
