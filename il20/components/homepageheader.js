import React from 'react'
import styles from '../styles/Homeheader.module.css'

function Homepageheader({ onClick }) {
  return (
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'Source Sans Pro',
      }}
    >
      <div
        className={styles.maincontainer}
        style={{ paddingLeft: '8%', paddingRight: '7%', paddingTop: '40px' }}
      >
        <div className={styles.header_main_text_img}>
          <div className={styles.text_main}>
            <div className={styles.middletext}>
              <h1>
                Let’s Supercharge <br /> Your Career
              </h1>
              <p>Empowering a new generation of professionals.</p>
            </div>
            <div className={styles.header_icon_data}>
              <div className={styles.header_data}>
                <div>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/homepageheadericon3.svg"
                    width="1"
                    height="1"
                    layout="responsive"
                    alt="data icon placements"
                    className={styles.icon_style}
                  ></img>
                </div>
                <div>
                  <h4>56,000+</h4>
                  <p>Placements</p>
                </div>
              </div>
              <div className={styles.header_data}>
                <div>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/homepageheadericon2.svg"
                    width="1"
                    height="1"
                    layout="responsive"
                    alt="data icon Carrer-transition"
                    className={styles.icon_style}
                  ></img>
                </div>
                <div>
                  <h4>45,000+</h4>
                  <p>Career Transitions</p>
                </div>
              </div>
              <div className={styles.header_data}>
                <div>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/homepageheadericon1.svg"
                    width="1"
                    height="1"
                    layout="responsive"
                    alt="data icon Hiring partner"
                    className={styles.icon_style}
                  ></img>
                </div>
                <div>
                  <h4>500+</h4>
                  <p>Hiring Partners</p>
                </div>
              </div>
            </div>
            <div className={styles.middlebutton} style={{ paddingTop: '48px' }}>
              <a onClick={onClick}>
                <button className={styles.btnexplore}>
                  <p>Enquire Now</p>
                </button>
              </a>
            </div>
          </div>
          <div className={styles.image_main}>
            <img
              src="https://cdn.pegasus.imarticus.org/imarticus_2/imarticusheader5.webp"
              layout="responsive"
              alt="Banking, Finance & Technology Courses"
              className={styles.main_img}
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepageheader
