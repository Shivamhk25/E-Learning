import React, { useRef, useEffect, useState } from 'react'
import style from '../../styles/fsd.module.css'
import styles from '../../styles/authorised-admission-partner.module.css'
import Typist from 'react-typist'
import Image from 'next/image'

export default function Header({ toggleModal, pagedata }) {
  const [count, setCount] = useState(1)

  console.log(pagedata + 'jbhfjghejghejghejj')
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log('Count: ' + count)
    setCount(1)
  }, [count])
  return (
    <>
      <div className={style.page}>
        <div className={style.mycontainer}>
          <div className={style.section1}>
            <div className={style.leftsec}>
              <div className={style.heading}>
                <h1>Full Stack Developer Pro</h1>
              </div>
              <div className={style.subheading}>
                <div className={style.leftpoint}>
                  <img src="https://cdn.pegasus.imarticus.org/Fsd/Greentick.webp"></img>
                  <span>Land a job or get your money back</span>
                </div>
              </div>
              <div className={style.skillenza}>
                <div className={style.community}>
                  <p>Our Community:</p>
                </div>
                <div className={style.logo}>
                  <img src="https://cdn.pegasus.imarticus.org/Fsd/Layer_1-2WEB.webp"></img>
                </div>
              </div>
              <div className={style.text}>
                <h3>Learn</h3>
              </div>
              <div className={style.animate}>
                <h3>
                  {count ? (
                    <Typist loop onTypingDone={() => setCount(0)}>
                      <span>End-to-end development</span>
                      <Typist.Backspace count={22} delay={800} />
                      <span> Data structures & algorithms</span>
                      <Typist.Backspace count={28} delay={800} />
                      <span>Java programming</span>
                      <Typist.Backspace count={16} delay={800} />
                    </Typist>
                  ) : (
                    ''
                  )}
                </h3>
              </div>
              <div className={style.job}>
                <h3>with a job-guarantee program</h3>
              </div>

              <div className={style.btngrp}>
                <button
                  onClick={() =>
                    toggleModal({
                      download: true,
                      url: pagedata.brochureFileName,
                    })
                  }
                  className={style.sec1_buttons}
                >
                  Download Brochure
                </button>
                <button
                  onClick={toggleModal}
                  className={style.sec1_buttons_applyNow}
                >
                  Apply Now
                </button>
              </div>
            </div>
            <div className={`${style.rightsec} ${style.desktop1}`}>
              <img src="https://cdn.pegasus.imarticus.org/Fsd/Group%203144.webp"></img>
            </div>
            <div className={`${style.rightsec} ${style.mobile1}`}>
              <img src="https://cdn.pegasus.imarticus.org/Fsd/Group%203145.webp"></img>
            </div>
            <div className={`${style.rightsec} ${style.tab1}`}>
              <img src="https://cdn.pegasus.imarticus.org/Fsd/Group%203146.webp"></img>
            </div>
          </div>

          <div className={style.desktop}>
            <div className={style.points}>
              <div className={styles.num_a}>
                <div className={style.data}>
                  <img
                    src={'https://cdn.pegasus.imarticus.org/Fsd/I1.webp'}
                  ></img>
                  1500+
                </div>
                <p className={style.span_a}>Students Placed</p>
              </div>
              <div className={styles.num_b}>
                <div className={style.data}>
                  <img
                    src={'https://cdn.pegasus.imarticus.org/Fsd/CLock.svg'}
                  ></img>
                  450
                </div>
                <p className={style.span_a}>Learning Hours</p>
              </div>
              <div className={styles.num_b}>
                <div className={style.data}>
                  <img
                    src={'https://cdn.pegasus.imarticus.org/Fsd/I2.webp'}
                  ></img>
                  24
                  <span style={{ fontSize: '16px', lineHeight: '0px' }}>
                    LPA
                  </span>
                </div>
                <p className={style.span_a}>Highest Salary</p>
              </div>
              <div className={styles.num_b}>
                <div className={style.data}>
                  <img
                    src={'https://cdn.pegasus.imarticus.org/Fsd/I3.webp'}
                  ></img>
                  80%
                </div>
                <p className={style.span_a}>Average Salary Hike</p>
              </div>
              <div className={styles.num_cfsd}>
                <div className={style.data}>
                  <img
                    src={'https://cdn.pegasus.imarticus.org/Fsd/I4.webp'}
                  ></img>
                  500+
                </div>
                <p className={style.span_a}>Hiring Partners</p>
              </div>
            </div>
          </div>
          <div className={style.mobile}>
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>
              <img src="https://cdn.pegasus.imarticus.org/Fsd/Group%203147.webp"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
