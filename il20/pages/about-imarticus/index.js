import React, { useRef, useEffect, useState } from 'react'
import styleCSS from '!!raw-loader!../../styles/index.css'
import styleCSS3 from '!!raw-loader!../../styles/coursepage.css'
import styleCSS4 from '!!raw-loader!../../styles/ourprogram.css'
import styleCSS5 from '!!raw-loader!../../styles/enquireform.css'
import styleCSS6 from '!!raw-loader!../../styles/collaboration.css'
import Award_recogniation from '../../components/award_reogniationnext'
const fixCSS = `}${styleCSS},${styleCSS3},${styleCSS4},${styleCSS5},${styleCSS6}{`
import Advisory from '../../components/Advisory'
import Management from '../../components/Management'
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import Image from 'next/image'
import Program from '../../json/program.json'
import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/GenericForm-Nm-Em-Con-Loc'

import styles from '../../styles/Aboutus.module.css'
import styles1 from '../../styles/advisory.module.css'
import Organization from '../../components/Organization'
import { configs, countryCodes } from '../../constants'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Autoplay } from 'swiper'

const AboutUs = (props) => {
  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref6 = useRef()
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
  })

  const ref7 = useRef()
  const ref8 = useRef()
  const ref9 = useRef()
  const ref10 = useRef()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [formModal, setFormModal] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  //defaut value false;
  const [brochureUrl, setBrochureUrl] = useState()
  //event values is an object
  const toggleModal = (eventValues) => {
    if (eventValues && eventValues.download) {
      setDownloadBrochure(eventValues.download)
      setBrochureUrl(eventValues.url)
    } else {
      setDownloadBrochure(false)
      setBrochureUrl(null)
    }
    setFormModal((prevState) => !prevState)
  }
  return (
    <>
      <Head>
        <title>
          Finance, Analytics, Marketing and Technology Courses - Imarticus
          Learning
        </title>
        <meta
          name="description"
          content="Imarticus Learning is India’s leading professional financial services andbusiness analytics educational institute offering classroom as well as online programs across India"
        />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Finance, Analytics, Marketing and Technology Courses - Imarticus Learning"
        />
        <meta
          property="og:description"
          content="Imarticus Learning is India’s leading professional financial services andbusiness analytics educational institute offering classroom as well as online programs across India"
        />
        <meta property="og:url" content="https://imarticus.org/" />
        <meta
          property="og:image"
          content="https://cdn.pegasus.imarticus.org/imarticus_2/FACEBOOK-open-graph.jpg"
        />
        <meta property="product:brand" content="Imarticus Learning" />
        <link rel="canonical" href="https://imarticus.org/about-imarticus/" />
        <link
          rel="icon"
          href="https://cdn.pegasus.imarticus.org/imarticus_2/favicon4.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <style amp-custom>{`
              ${fixCSS}
            `}</style>
      </Head>
      <Layout toggleModal={toggleModal} propsdata={props.propsdata.allData}>
        {formModal && (
          <Modal toggleModal={toggleModal}>
            <EnquireForm
              toggleModal={toggleModal}
              formValue={1}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              propsdata={props.propsdata.allData}
              subject={'B2B Lead'}
            />
          </Modal>
        )}

        <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
          <div className={styles.sec_1}>
            <div style={{ paddingTop: '6rem' }}>
              <h1>
                About <br /> <span>Imarticus</span>
              </h1>
            </div>
            <div className={styles.sec1_para}>
              <p>
                At Imarticus, we believe that learning is a lifelong process. By
                organizing knowledge with advanced technology and making
                learning accessible, our goal is to prepare our global learning
                community for a futuristic, tech-driven society.{' '}
              </p>
            </div>
            <div className={styles.learnmore}>
              <button className={styles.sec_1_btn} onClick={toggleModal}>
                Learn More
              </button>
            </div>
            <div className={styles.row}>
              <div className={styles.col_1}>
                <img
                  className={styles.sec1img}
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/sec1-a.svg"
                />
                <br />
                <h2 className={styles.border}>300+</h2>
                <p>COMPANIES</p>
              </div>
              <div className={styles.col_1}>
                <img
                  className={styles.sec1img}
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/sec1-b.svg"
                />
                <br />
                <h2 className={styles.border}>35K+</h2>
                <p>LEARNERS</p>
              </div>
              <div className={styles.col_1}>
                <img
                  className={styles.sec1img}
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Seca.webp"
                />
                <br />
                <h2>54%</h2>
                <p>AVERAGE SALARY HIKE</p>
              </div>
              <div className={styles.col_1}>
                <img
                  className={styles.sec1img}
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/sec1-d.svg"
                />
                <br />
                <h2 className={styles.border}>85%</h2>
                <p>PLACEMENT RECORD</p>
              </div>
              <div className={styles.col_1}>
                <img
                  className={styles.sec1img}
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Seca1.webp"
                />
                <br />
                <h2>14</h2>
                <p>LAKH HIGHEST SALARY</p>
              </div>
            </div>
          </div>
          {/* section two new */}
          <div className={styles.sec_two_new}>
            <div className={styles.rowsec2}>
              <div className={styles.col_2new}>
                <h2>
                  Our <br />
                  Mission
                </h2>
                <p>
                  Our mission is to “develop the leaders of tomorrow by
                  delivering purposeful learning experiences.”
                </p>
              </div>

              <div className={`${styles.col_2new}  ${styles.boxx}`}>
                <div className={styles.col2box}></div>
                <div className={styles.col2box2}>
                  {/* <img
                  className={styles.playbtn}
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group 1228.svg"
                /> */}
                </div>
              </div>
            </div>
          </div>

          {/* section two */}
          <div
            className={styles.mobile}
            style={{ backgroundColor: 'white', paddingBottom: '160px' }}
          ></div>

          <div className={styles.sec2b}>
            <div className={styles.row3}>
              <div className={styles.columna}>
                <div className={styles.card}>
                  <h3>What Do we do?</h3>
                  <div className={styles.sub_headind}>
                    <p>
                      We bring high-quality education from premier universities
                      around the world and develop rigorous programs that are
                      experiential, valuable and progressive.
                    </p>
                    <br />
                    <p>
                      By primarily focusing on hands-on and experiential
                      knowledge, we balance in-class learning and practical
                      experiences.
                    </p>{' '}
                  </div>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.sectioncard}>
                  {/* <img className={styles.cardimage} src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/sec2-a.svg"
                        /> */}
                  <div className={styles.cardimage}>
                    <img
                      className={styles.cardimg}
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/sec2-a.svg"
                    />
                  </div>
                  <div className={styles.cardheading}>For Individuals</div>
                  <div className={styles.card_bottom}>
                    {/* <div className={styles.ulmain}>
                    <div className={styles.leftimg}>
                      <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group%202750.svg" ></img>
                    </div>
                    <div className={styles.rightdata}>
                        <p>Identify career prospects</p>
                    </div>
                  </div> */}
                    <div className={styles.mylist}>
                      <div className={styles.mainlist}>
                        <div style={{ width: '17.08px' }}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group%202750.svg"></img>
                        </div>
                        <div className={styles.listdata}>
                          <p>Identify career prospects </p>
                        </div>
                      </div>
                      <div
                        className={styles.mainlist}
                        style={{ paddingTop: '8px' }}
                      >
                        <div style={{ width: '17.08px' }}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group%202750.svg"></img>
                        </div>
                        <div className={styles.listdata}>
                          <p>Improve employability</p>
                        </div>
                      </div>
                      <div
                        className={styles.mainlist}
                        style={{ paddingTop: '8px' }}
                      >
                        <div style={{ width: '17.08px' }}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group%202750.svg"></img>
                        </div>
                        <div className={styles.listdata}>
                          <p>Build customised career plans</p>
                        </div>
                      </div>
                      <div
                        className={styles.mainlist}
                        style={{ paddingTop: '8px' }}
                      >
                        <div style={{ width: '17.08px' }}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group%202750.svg"></img>
                        </div>
                        <div>
                          <p className={styles.listdata}>
                            Ensure essential training and skill development{' '}
                          </p>
                        </div>
                      </div>
                      <div
                        className={styles.mainlist}
                        style={{ paddingTop: '8px' }}
                      >
                        <div style={{ width: '17.08px' }}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group%202750.svg"></img>
                        </div>
                        <div className={styles.listdata}>
                          <p>Provide industry-recognized certifications</p>
                        </div>
                      </div>
                    </div>
                    {/* <ul>
                      <li>
                        <img rsc="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group%202750.svg"></img>
                        Identify career prospects
                      </li>
                      <br />
                      <li>Improve employability</li>
                      <br />
                      <li>Build customised career plans</li>
                      <br />
                      <li>Ensure essential training and skill development</li>
                      <br />
                      <li>Provide industry-recognized certifications</li>
                    </ul> */}
                  </div>
                </div>
                <div className={styles.card_button}>
                  <button className={styles.cardbtn} onClick={toggleModal}>
                    Enquire Now
                  </button>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.sectioncard}>
                  <div className={styles.cardimage}>
                    <img
                      className={styles.cardimg}
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/sec2-b.svg"
                    />
                  </div>
                  <div className={styles.cardheading}>For Corporates</div>
                  <div className={styles.card_bottom}>
                    <div className={styles.mylist}>
                      <div className={styles.mainlist}>
                        <div style={{ width: '17.08px' }}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group%202750.svg"></img>
                        </div>
                        <div className={styles.listdata}>
                          <p>Analyze upskilling requirements </p>
                        </div>
                      </div>
                      <div
                        className={styles.mainlist}
                        style={{ paddingTop: '8px' }}
                      >
                        <div style={{ width: '17.08px' }}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group%202750.svg"></img>
                        </div>
                        <div className={styles.listdata}>
                          <p>Build customised training plans </p>
                        </div>
                      </div>
                      <div
                        className={styles.mainlist}
                        style={{ paddingTop: '8px' }}
                      >
                        <div style={{ width: '17.08px' }}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group%202750.svg"></img>
                        </div>
                        <div className={styles.listdata}>
                          <p>
                            Deliver programs aligned with the organizational
                            mission{' '}
                          </p>
                        </div>
                      </div>
                      <div
                        className={styles.mainlist}
                        style={{ paddingTop: '8px' }}
                      >
                        <div style={{ width: '17.08px' }}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group%202750.svg"></img>
                        </div>
                        <div>
                          <p className={styles.listdata}>
                            Transform the workforce using quantifiable measures
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.card_button}>
                  <button className={styles.cardbtn} onClick={toggleModal}>
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* section 3 */}

          <div className={styles.sec3}>
            <div style={{ paddingBottom: '11px' }}>
              <h4>Imarticus Infinity Edge</h4>
            </div>
            <div className={styles.sec4_para}>
              <p>
                Become limitless with infinite possibilities.
                <br />
                Our leading-edge training programs enable individual and
                organizational growth through a consistent and holistic
                approach.
              </p>
            </div>
            <div className={styles.box_row}>
              <div className={styles.box_column}>
                <h2>Mentorship</h2>
                <p className={styles.box_data}>
                  Education is most effective when learners and trainers share a
                  common goal. Our accomplished faculty is dedicated to your
                  success and will guide you along the way.{' '}
                </p>
              </div>
            </div>
            <div className={styles.box_row}>
              <div className={`${styles.box_columnc}  ${styles.bc_2}`}>
                <div className={styles.bcdata}>
                  <img
                    className={styles.bcimg}
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group 2760.svg"
                  />
                  150+
                  <p className={styles.bcsubdata}>Academic Mentors</p>
                </div>
              </div>
              <div className={`${styles.box_columnc}  ${styles.bc_3}`}>
                <div className={styles.bcdata}>
                  <img
                    className={styles.bcimg}
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Vector(1).svg"
                  />
                  350+
                  <p className={styles.bcsubdata}>Industry Mentors</p>
                </div>
              </div>
            </div>
            <div
              className={styles.mobile}
              style={{ width: '393px', height: '62px' }}
            ></div>
          </div>

          <div className={styles.journey}>
            <h5 className={styles.j_heading}>Our Journey</h5>
            <div
              className={`${styles.image_jr}  ${styles.desktopjourney}`}
              style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
            >
              <img
                className={styles.imgjr}
                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group_2834_Web.webp"
                alt="infographic"
                height="400px"
                width="100%"
              />
            </div>
            <div
              className={`${styles.image_jr}  ${styles.tabjourney}`}
              style={{ paddingTop: '24px', paddingBottom: '4rem' }}
            >
              <img
                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group_1794.jpg"
                alt="infographic"
                height="400px"
                width="auto"
              />
            </div>
            <div
              className={`${styles.image_jr}  ${styles.mobilejourney}`}
              style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
            >
              <img
                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group_2833_mob.webp"
                alt="infographic"
                height="500px"
                width="auto"
              />
            </div>
          </div>

          {/* section 5 */}

          <div className={styles.trusted_org}>
            <div className={styles.org_card}>
              <div className={styles.org_head}>
                <h1>Trusted by Organizations Worldwide</h1>
              </div>
              <div className={`${styles.row_org} ${styles.desktop}`}>
                <div className={styles.column_test}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Societe%20generale.webp"
                    alt="Societe"
                    height="73px"
                    width="100%"
                  />
                </div>
                <div className={styles.column_test}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ABkpmg-1.webp"
                    alt="kpmg-logo"
                    height="73px"
                    width="100%"
                  />
                </div>
                <div className={styles.column_test}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ABRBS.webp"
                    alt="RBS"
                    height="73px"
                    width="100%"
                  />
                </div>
                <div className={styles.column_test}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ABUBS.webp"
                    alt="UBS"
                    height="73px"
                    width="100%"
                  />
                </div>
                <div className={styles.column_test}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ABTata%20.webp"
                    alt="UBS"
                    height="73px"
                    width="100%"
                  />
                </div>
              </div>
              <div className={`${styles.row_org2} ${styles.desktop}`}>
                <div className={styles.column_test}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ABhsbc.webp"
                    alt="hsbc"
                    height="90px"
                    width="100%"
                  />
                </div>
                <div className={styles.column_test}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ABcapgemini-1.webp"
                    alt="capgemini"
                    height="73px"
                    width="100%"
                  />
                </div>
                {/* <div className={styles.column_test}>
                <img
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/KPMG 1.svg"
                  alt="KPMG 1"
                  height="73px"
                  width="143px"
                />
              </div> */}
                <div className={styles.column_test}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Goldman.webp"
                    alt="Goldman"
                    height="73px"
                    width="151px"
                  />
                </div>
                <div className={styles.column_test}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ABFractel.webp"
                    alt="IIT-Roorkee 1"
                    height="73px"
                    width="100%"
                  />
                </div>
                <div className={styles.column_test}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ABtesco-1.webp"
                    alt="Digitas-Logo- 1"
                    height="73px"
                    width="100%"
                  />
                </div>
              </div>
              {/* mobile view */}
              <div className={`${styles.row_org} ${styles.mobile}`}>
                <div className={styles.orgimage}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group Png.webp"
                    alt="organizations"
                  />
                </div>
              </div>

              <div className={styles.org_btn}>
                <button className={styles.sec_2_btn} onClick={toggleModal}>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className={styles.sec4}>
            <div className={styles.row_mngt}>
              <div className={styles.column_mngt}>
                <div className={styles.card_mngt}>
                  <h1 className={styles.heading_mngt}>Our Management Team</h1>
                  <div className={styles.sub_headind_mngt}>
                    <p>
                      Driven by the mission to bridge the industry-academia gap,
                      Imarticus Learning is guided by an experienced and
                      innovative management team. They bring collective
                      ingenuity and acumen to the organization by pursuing
                      excellence in their respective fields and helping the
                      organization grow under their leadership.
                    </p>{' '}
                  </div>
                </div>
              </div>
              <div
                className={`${styles.column_mngt}   ${styles.secnd} ${styles.desktopManagement}`}
              >
                <div className={styles.advisory_carousal_mainn}>
                  <div className={styles.advisory_carousall}>
                    <div>
                      <div style={{ height: '136px' }}>
                        <img
                          src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Nikhil-Barshikar 1.webp"
                          alt="Nikhil-Barshikar 1"
                          style={{
                            position: 'relative',
                            top: '-50px',
                            left: '28%',
                            borderRadius: '50%',
                          }}
                          className={styles.ceo}
                          height="112px"
                          width="112px"
                        />
                      </div>

                      <div className={styles.advisory_bottomm}>
                        <h1>NIKHIL BARSHIKAR</h1>
                        <p>Managing Director</p>
                      </div>
                      <div
                        style={{
                          height: '136px',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <a href="https://www.linkedin.com/in/nikhil-barshikar-3647425/">
                          <img
                            src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                            alt="Nikhil-Barshikar 1"
                            style={{
                              position: 'relative',
                              top: '72px',
                              borderRadius: '50%',
                            }}
                            height="40px"
                            width="40px"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.column_mngt}  ${styles.secnd} ${styles.desktopManagement}`}
              >
                <div className={styles.advisory_carousal_mainn}>
                  <div className={styles.advisory_carousall}>
                    <div>
                      <div style={{ height: '136px' }}>
                        <img
                          src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/sonya.webp"
                          alt="sonya"
                          style={{
                            position: 'relative',
                            top: '-50px',
                            left: '28%',
                            borderRadius: '50%',
                          }}
                          className={styles.ceo}
                          height="112px"
                          width="112px"
                        />
                      </div>
                      <div className={styles.advisory_bottomm}>
                        <h1>SONYA HOOJA</h1>
                        <p>Chief Operating Officer</p>
                      </div>
                      <div
                        style={{
                          height: '136px',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <a href="https://in.linkedin.com/in/sonyahooja/">
                          <img
                            src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                            alt="Nikhil-Barshikar 1"
                            style={{
                              position: 'relative',
                              top: '72px',
                              borderRadius: '50%',
                            }}
                            height="40px"
                            width="40px"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- */}

            {/* ------------- */}
            <div className={`${styles.row_mng}   ${styles.desktopManagement}`}>
              <div className={styles.column_mng}>
                <div className={styles.advisory_carousal_mainn}>
                  <div className={styles.advisory_carousall}>
                    <div>
                      <div style={{ height: '136px' }}>
                        <img
                          src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/suresh.webp"
                          alt="suresh"
                          style={{
                            position: 'relative',
                            top: '-50px',
                            left: '28%',
                            borderRadius: '50%',
                          }}
                          height="112px"
                          width="112px"
                        />
                      </div>
                      <div className={styles.advisory_bottomm}>
                        <h1>SURESH RAO</h1>
                        <p>Executive Director</p>
                      </div>
                      <div
                        style={{
                          height: '136px',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <a href="https://www.linkedin.com/in/suresh-rao-9725021/">
                          <img
                            src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                            alt="linkedin"
                            style={{
                              position: 'relative',
                              top: '72px',
                              borderRadius: '50%',
                            }}
                            height="40px"
                            width="40px"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.column_mng}>
                <div className={styles.advisory_carousal_mainn}>
                  <div className={styles.advisory_carousall}>
                    <div>
                      <div style={{ height: '136px' }}>
                        <img
                          src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/apurva.webp"
                          alt="apurva"
                          style={{
                            position: 'relative',
                            top: '-50px',
                            left: '28%',
                            borderRadius: '50%',
                          }}
                          height="112px"
                          width="112px"
                        />
                      </div>
                      <div className={styles.advisory_bottomm}>
                        <h1>APURVA SHETH</h1>
                        <p>Executive Director</p>
                      </div>
                      <div
                        style={{
                          height: '136px',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <a href="https://www.linkedin.com/in/shethapurva/">
                          <img
                            src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                            alt="linkedin"
                            style={{
                              position: 'relative',
                              top: '72px',
                              borderRadius: '50%',
                            }}
                            height="40px"
                            width="40px"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.column_mng}>
                <div className={styles.advisory_carousal_mainn}>
                  <div className={styles.advisory_carousall}>
                    <div>
                      <div style={{ height: '136px' }}>
                        <img
                          src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/shikha.webp"
                          alt="shikha"
                          style={{
                            position: 'relative',
                            top: '-50px',
                            left: '28%',
                            borderRadius: '50%',
                          }}
                          height="112px"
                          width="112px"
                        />
                      </div>
                      <div className={styles.advisory_bottomm}>
                        <h1>SHIKHA SETHI</h1>
                        <p>Executive Director</p>
                      </div>
                      <div
                        style={{
                          height: '136px',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <a href="https://www.linkedin.com/in/shikha-sethi-77731b26/">
                          <img
                            src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                            alt="linkedin"
                            style={{
                              position: 'relative',
                              top: '72px',
                              borderRadius: '50%',
                            }}
                            height="40px"
                            width="40px"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.column_mng}>
                <div className={styles.advisory_carousal_mainn}>
                  <div className={styles.advisory_carousall}>
                    <div>
                      <div style={{ height: '136px' }}>
                        <img
                          src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ravikiran.webp"
                          alt="ravikiran"
                          style={{
                            position: 'relative',
                            top: '-50px',
                            left: '28%',
                            borderRadius: '50%',
                          }}
                          height="112px"
                          width="112px"
                        />
                      </div>
                      <div className={styles.advisory_bottomm}>
                        <h1>RAVIKIRAN PEESAPATI</h1>
                        <p>Executive Director & Retail Head</p>
                      </div>
                      <div
                        style={{
                          height: '136px',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <a href="https://www.linkedin.com/in/ravi-kiran-peesapati-27aa37a/">
                          <img
                            src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                            alt="linkedin"
                            style={{
                              position: 'relative',
                              top: '72px',
                              borderRadius: '50%',
                            }}
                            height="40px"
                            width="40px"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ paddingTop: '6rem' }}
              className={styles.desktopManagement}
            >
              <div className={styles.row_mng}>
                <div className={styles.column_mng}>
                  <div className={styles.advisory_carousal_mainn}>
                    <div className={styles.advisory_carousall}>
                      <div>
                        <div style={{ height: '136px' }}>
                          <img
                            src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/sridhar.webp"
                            alt="sridhar"
                            style={{
                              position: 'relative',
                              top: '-50px',
                              left: '28%',
                              borderRadius: '50%',
                            }}
                            height="112px"
                            width="112px"
                          />
                        </div>
                        <div className={styles.advisory_bottomm}>
                          <h1>SRIDHAR NAGARAJACHAR</h1>
                          <p>Executive Director & CEO Online Business</p>
                        </div>
                        <div
                          style={{
                            height: '136px',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <a href="https://www.linkedin.com/in/sridhar-nagarajachar/">
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                              alt="linkedin"
                              style={{
                                position: 'relative',
                                top: '72px',
                                borderRadius: '50%',
                              }}
                              height="40px"
                              width="40px"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.column_mng}>
                  <div className={styles.advisory_carousal_mainn}>
                    <div className={styles.advisory_carousall}>
                      <div>
                        <div style={{ height: '136px' }}>
                          <img
                            src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/joy.webp"
                            alt="joy"
                            style={{
                              position: 'relative',
                              top: '-50px',
                              left: '28%',
                              borderRadius: '50%',
                            }}
                            height="112px"
                            width="112px"
                          />
                        </div>
                        <div className={styles.advisory_bottomm}>
                          <h1>JOY PAREKH</h1>
                          <p>Product Head</p>
                        </div>
                        <div
                          style={{
                            height: '136px',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <a href="https://in.linkedin.com/in/joyparekh">
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                              alt="linkedin"
                              style={{
                                position: 'relative',
                                top: '72px',
                                borderRadius: '50%',
                              }}
                              height="40px"
                              width="40px"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.column_mng}>
                  <div className={styles.advisory_carousal_mainn}>
                    <div className={styles.advisory_carousall}>
                      <div>
                        <div style={{ height: '136px' }}>
                          <img
                            src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/akshat.webp"
                            alt="akshat"
                            style={{
                              position: 'relative',
                              top: '-50px',
                              left: '28%',
                              borderRadius: '50%',
                            }}
                            height="112px"
                            width="112px"
                          />
                        </div>
                        <div className={styles.advisory_bottomm}>
                          <h1>AKSHAT GOEL</h1>
                          <p>Chief Technology Officer</p>
                        </div>
                        <div
                          style={{
                            height: '136px',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <a href="https://www.linkedin.com/in/akshatgoel/">
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                              alt="linkedin"
                              style={{
                                position: 'relative',
                                top: '72px',
                                borderRadius: '50%',
                              }}
                              height="40px"
                              width="40px"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.column_mng}>
                  <div className={styles.advisory_carousal_mainn}>
                    <div className={styles.advisory_carousall}>
                      <div>
                        <div style={{ height: '136px' }}>
                          <img
                            src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ritesh.webp"
                            alt="ritesh"
                            style={{
                              position: 'relative',
                              top: '-50px',
                              left: '28%',
                              borderRadius: '50%',
                            }}
                            height="112px"
                            width="112px"
                          />
                        </div>
                        <div className={styles.advisory_bottomm}>
                          <h1>RITESH SINGH</h1>
                          <p>Growth Head</p>
                        </div>
                        <div
                          style={{
                            height: '136px',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <a href="https://in.linkedin.com/in/riteshnathsingh/">
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                              alt="linkedin"
                              style={{
                                position: 'relative',
                                top: '72px',
                                borderRadius: '50%',
                              }}
                              height="40px"
                              width="40px"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* tab management */}

              <div className={styles.tabManagement}>
                <div className={styles.maintabmanagement}>
                  <div className={styles.leftcard}>
                    <div className={styles.advisory_carousal_mainn}>
                      <div className={styles.advisory_carousall}>
                        <div>
                          <div style={{ height: '136px' }}>
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Nikhil-Barshikar 1.webp"
                              alt="Nikhil-Barshikar 1"
                              style={{
                                position: 'relative',
                                top: '-50px',
                                left: '28%',
                                borderRadius: '50%',
                              }}
                              className={styles.ceo}
                              height="112px"
                              width="112px"
                            />
                          </div>

                          <div className={styles.advisory_bottomm}>
                            <h1>NIKHIL BARSHIKAR</h1>
                            <p>Managing Director</p>
                          </div>
                          <div
                            style={{
                              height: '136px',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <a href="https://www.linkedin.com/in/nikhil-barshikar-3647425/">
                              <img
                                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                                alt="Nikhil-Barshikar 1"
                                style={{
                                  position: 'relative',
                                  top: '72px',
                                  borderRadius: '50%',
                                }}
                                height="40px"
                                width="40px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightcard}>
                    <div className={styles.advisory_carousal_mainn}>
                      <div className={styles.advisory_carousall}>
                        <div>
                          <div style={{ height: '136px' }}>
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/sonya.webp"
                              alt="sonya"
                              style={{
                                position: 'relative',
                                top: '-50px',
                                left: '28%',
                                borderRadius: '50%',
                              }}
                              className={styles.ceo}
                              height="112px"
                              width="112px"
                            />
                          </div>
                          <div className={styles.advisory_bottomm}>
                            <h1>SONYA HOOJA</h1>
                            <p>Chief Operating Officer</p>
                          </div>
                          <div
                            style={{
                              height: '136px',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <a href="https://in.linkedin.com/in/sonyahooja/">
                              <img
                                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                                alt="Nikhil-Barshikar 1"
                                style={{
                                  position: 'relative',
                                  top: '72px',
                                  borderRadius: '50%',
                                }}
                                height="40px"
                                width="40px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.tabManagement}
                style={{ paddingTop: '48px' }}
              >
                <div className={styles.maintabmanagement}>
                  <div className={styles.leftcard}>
                    <div className={styles.advisory_carousal_mainn}>
                      <div className={styles.advisory_carousall}>
                        <div>
                          <div style={{ height: '136px' }}>
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/suresh.webp"
                              alt="apurva"
                              style={{
                                position: 'relative',
                                top: '-50px',
                                left: '28%',
                                borderRadius: '50%',
                              }}
                              height="112px"
                              width="112px"
                            />
                          </div>
                          <div className={styles.advisory_bottomm}>
                            <h1>SURESH RAO</h1>
                            <p>Executive Director</p>
                          </div>
                          <div
                            style={{
                              height: '136px',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <a href="https://www.linkedin.com/in/suresh-rao-9725021/">
                              <img
                                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                                alt="linkedin"
                                style={{
                                  position: 'relative',
                                  top: '72px',
                                  borderRadius: '50%',
                                }}
                                height="40px"
                                width="40px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightcard}>
                    <div className={styles.advisory_carousal_mainn}>
                      <div className={styles.advisory_carousall}>
                        <div>
                          <div style={{ height: '136px' }}>
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/apurva.webp"
                              alt="apurva"
                              style={{
                                position: 'relative',
                                top: '-50px',
                                left: '28%',
                                borderRadius: '50%',
                              }}
                              height="112px"
                              width="112px"
                            />
                          </div>
                          <div className={styles.advisory_bottomm}>
                            <h1>APURVA SHETH</h1>
                            <p>Executive Director</p>
                          </div>
                          <div
                            style={{
                              height: '136px',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <a href="https://www.linkedin.com/in/shethapurva/">
                              <img
                                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                                alt="linkedin"
                                style={{
                                  position: 'relative',
                                  top: '72px',
                                  borderRadius: '50%',
                                }}
                                height="40px"
                                width="40px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.tabManagement}
                style={{ paddingTop: '48px' }}
              >
                <div className={styles.maintabmanagement}>
                  <div className={styles.leftcard}>
                    <div className={styles.advisory_carousal_mainn}>
                      <div className={styles.advisory_carousall}>
                        <div>
                          <div style={{ height: '136px' }}>
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/shikha.webp"
                              alt="apurva"
                              style={{
                                position: 'relative',
                                top: '-50px',
                                left: '28%',
                                borderRadius: '50%',
                              }}
                              height="112px"
                              width="112px"
                            />
                          </div>
                          <div className={styles.advisory_bottomm}>
                            <h1>SHIKHA SETHI</h1>
                            <p>Executive Director</p>
                          </div>
                          <div
                            style={{
                              height: '136px',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <a href="https://www.linkedin.com/in/shikha-sethi-77731b26/">
                              <img
                                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                                alt="linkedin"
                                style={{
                                  position: 'relative',
                                  top: '72px',
                                  borderRadius: '50%',
                                }}
                                height="40px"
                                width="40px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightcard}>
                    <div className={styles.advisory_carousal_mainn}>
                      <div className={styles.advisory_carousall}>
                        <div>
                          <div style={{ height: '136px' }}>
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ravikiran.webp"
                              alt="apurva"
                              style={{
                                position: 'relative',
                                top: '-50px',
                                left: '28%',
                                borderRadius: '50%',
                              }}
                              height="112px"
                              width="112px"
                            />
                          </div>
                          <div className={styles.advisory_bottomm}>
                            <h1>RAVIKIRAN PEESAPATI</h1>
                            <p>Executive Director & Retail Head</p>
                          </div>
                          <div
                            style={{
                              height: '136px',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <a href="https://www.linkedin.com/in/ravi-kiran-peesapati-27aa37a/">
                              <img
                                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                                alt="linkedin"
                                style={{
                                  position: 'relative',
                                  top: '72px',
                                  borderRadius: '50%',
                                }}
                                height="40px"
                                width="40px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.tabManagement}
                style={{ paddingTop: '48px' }}
              >
                <div className={styles.maintabmanagement}>
                  <div className={styles.leftcard}>
                    <div className={styles.advisory_carousal_mainn}>
                      <div className={styles.advisory_carousall}>
                        <div>
                          <div style={{ height: '136px' }}>
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/sridhar.webp"
                              alt="apurva"
                              style={{
                                position: 'relative',
                                top: '-50px',
                                left: '28%',
                                borderRadius: '50%',
                              }}
                              height="112px"
                              width="112px"
                            />
                          </div>
                          <div className={styles.advisory_bottomm}>
                            <h1>SRIDHAR NAGARAJACHAR</h1>
                            <p>Executive Director & CEO Online Business</p>
                          </div>
                          <div
                            style={{
                              height: '136px',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <a href="https://www.linkedin.com/in/sridhar-nagarajachar/">
                              <img
                                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                                alt="linkedin"
                                style={{
                                  position: 'relative',
                                  top: '72px',
                                  borderRadius: '50%',
                                }}
                                height="40px"
                                width="40px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightcard}>
                    <div className={styles.advisory_carousal_mainn}>
                      <div className={styles.advisory_carousall}>
                        <div>
                          <div style={{ height: '136px' }}>
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/joy.webp"
                              alt="apurva"
                              style={{
                                position: 'relative',
                                top: '-50px',
                                left: '28%',
                                borderRadius: '50%',
                              }}
                              height="112px"
                              width="112px"
                            />
                          </div>
                          <div className={styles.advisory_bottomm}>
                            <h1>JOY PAREKH</h1>
                            <p>Product Head</p>
                          </div>
                          <div
                            style={{
                              height: '136px',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <a href="https://in.linkedin.com/in/joyparekh">
                              <img
                                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                                alt="linkedin"
                                style={{
                                  position: 'relative',
                                  top: '72px',
                                  borderRadius: '50%',
                                }}
                                height="40px"
                                width="40px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.tabManagement}
                style={{ paddingTop: '48px' }}
              >
                <div className={styles.maintabmanagement}>
                  <div className={styles.leftcard}>
                    <div className={styles.advisory_carousal_mainn}>
                      <div className={styles.advisory_carousall}>
                        <div>
                          <div style={{ height: '136px' }}>
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/akshat.webp"
                              alt="apurva"
                              style={{
                                position: 'relative',
                                top: '-50px',
                                left: '28%',
                                borderRadius: '50%',
                              }}
                              height="112px"
                              width="112px"
                            />
                          </div>
                          <div className={styles.advisory_bottomm}>
                            <h1>AKSHAT GOEL</h1>
                            <p>Chief Technology Officer</p>
                          </div>
                          <div
                            style={{
                              height: '136px',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <a href="https://www.linkedin.com/in/akshatgoel/">
                              <img
                                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                                alt="linkedin"
                                style={{
                                  position: 'relative',
                                  top: '72px',
                                  borderRadius: '50%',
                                }}
                                height="40px"
                                width="40px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rightcard}>
                    <div className={styles.advisory_carousal_mainn}>
                      <div className={styles.advisory_carousall}>
                        <div>
                          <div style={{ height: '136px' }}>
                            <img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/ritesh.webp"
                              alt="apurva"
                              style={{
                                position: 'relative',
                                top: '-50px',
                                left: '28%',
                                borderRadius: '50%',
                              }}
                              height="112px"
                              width="112px"
                            />
                          </div>
                          <div className={styles.advisory_bottomm}>
                            <h1>RITESH SINGH</h1>
                            <p>Growth Head</p>
                          </div>
                          <div
                            style={{
                              height: '136px',
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <a href="https://in.linkedin.com/in/riteshnathsingh/">
                              <img
                                src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                                alt="linkedin"
                                style={{
                                  position: 'relative',
                                  top: '72px',
                                  borderRadius: '50%',
                                }}
                                height="40px"
                                width="40px"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}

              <div className={styles.mobileManagement}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  pagination={{ clickable: true }}
                  slidesPerGroup={1}
                  slidesPerView={'auto'}
                  id="ourProgramCarousal1"
                  className="testimonial_crousel_paginationand"
                >
                  {Program.management_arr.map(function (advisor) {
                    return (
                      <SwiperSlide>
                        <Management
                          img={advisor.img}
                          name={advisor.name}
                          designation={advisor.designation}
                          href={advisor.href}
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </div>
          </div>

          <div
            className="news"
            style={{ backgroundColor: 'rgba(60, 72, 82, 0.04);' }}
          >
            <div
              className
              style={{
                maxWidth: '1300px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <div className="advisory_title">
                <div className="advisory_main">
                  <h1>Our Advisory Council</h1>
                  <p>
                    Our panel consists of renowned experts and industry veterans
                    whose decisions have been monumental in directing the course
                    of various industries.
                  </p>
                </div>
                <Swiper
                  spaceBetween={26}
                  // style={{ paddingBottom: '10px', marginLeft: '4px' }}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  slidesPerGroup={1}
                  slidesPerView={'auto'}
                  id="advisorCarousel"
                >
                  {Program.adviosor_arr.map(function (advisor) {
                    return (
                      <SwiperSlide className="advisory_carousal_main">
                        <div className="advisory_carousal">
                          <div style={{ overflow: 'auto' }}>
                            <div style={{ height: '136px' }}>
                              <div className="advisory_top">
                                <div className="advisory_top_inside">
                                  <Image
                                    src={advisor.img}
                                    height="112px"
                                    width="112px"
                                    layout="fixed"
                                  />
                                  {/* <Image1
                                    src="/imarticus_2/linkedin.svg"
                                    alt=""
                                    height="24px"
                                    width="24px"
                                    style={{
                                      position: 'absolute',
                                      bottom: '0px',
                                      right: '0px',
                                    }}
                                  /> */}
                                </div>
                              </div>
                            </div>
                            <div className="advisory_bottom">
                              <h4>{advisor.name}</h4>
                              <p>{advisor.designation}</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </div>
          </div>

          {/* ------------------------ */}
          {/* media */}
          <div className={styles.mymedia}>
            <div className={styles.mediaheading}>
              <h3>Press Coverage</h3>
            </div>
            <div className={styles.mainMedia}>
              <a
                style={{ textDecoration: 'none' }}
                href="http://bweducation.businessworld.in/article/IIM-Lucknow-And-Imarticus-Learning-Launch-Management-Program-In-Financial-Services-And-Capital-Markets/12-01-2022-417434/"
              >
                <div className={styles.leftsecmedia}>
                  <div className={styles.mediaImg}></div>
                  <div className={styles.mediaData}>
                    <div className={styles.medialogo}>
                      <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Mask_Group12.webp"></img>
                    </div>
                    <div className={styles.subdata}>
                      <p>
                        To strengthen professionals’ skillsets and understanding
                        of Financial Services, IIM Lucknow and Imarticus
                        Learning, In...
                      </p>
                    </div>
                    <div className={styles.publish}>
                      <p>Published Date: 10th October 2021</p>
                    </div>
                  </div>
                </div>
              </a>

              <div className={`${styles.rightsecmedia}  ${styles.desktop}`}>
                <div className={styles.mainright}>
                  <div className={styles.mediasection}>
                    <a
                      style={{ textDecoration: 'none' }}
                      href="https://www.ndtv.com/education/iit-roorkee-begin-2nd-batch-of-supply-chain-management-course-for-professionals-from-apr-23"
                    >
                      <div className={styles.mainsection}>
                        <div className={styles.sectionimg}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/ndtv.webp"></img>
                        </div>
                        <div className={styles.sectionData}>
                          <p>
                            Indian Institute of Technology (IIT) Roorkee, in
                            partnership with professional education firm
                            Imarticus Learning will...
                          </p>
                        </div>
                        <div className={styles.mediaDate}>
                          <div className={styles.dateData}>
                            <p>
                              16 February
                              <br /> 2022
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles.mediasection}>
                    <a
                      style={{ textDecoration: 'none' }}
                      href="https://indianexpress.com/article/education/im-calcutta-launches-executive-program-in-investment-banking-and-capital-markets-www-iimcal-ac-in-ldp-epibcm-7754537/"
                    >
                      <div className={styles.mainsection}>
                        <div className={styles.sectionimg}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/indianexpress.webp"></img>
                        </div>
                        <div className={styles.sectionData}>
                          <p>
                            The Indian Institute of Management, Calcutta (IIM)
                            has launched an Executive Programme in Investment
                            Banking and Capit...
                          </p>
                        </div>
                        <div className={styles.mediaDate}>
                          <div className={styles.dateData}>
                            <p>
                              04 February
                              <br /> 2022
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles.mediasection}>
                    <a
                      style={{ textDecoration: 'none' }}
                      href="https://www.educationtimes.com/article/careers-management/83066748/market-has-more-jobs-for-consumer-insight-analysts"
                    >
                      <div className={styles.mainsection}>
                        <div className={styles.sectionimg}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/image04.webp"></img>
                        </div>
                        <div className={styles.sectionData}>
                          <p>
                            With customers being the core of any business
                            enterprise, studying customer preferences, needs and
                            behaviors is critic...
                          </p>
                        </div>
                        <div className={styles.mediaDate}>
                          <div className={styles.dateData}>
                            <p>
                              31 March
                              <br /> 2022
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles.mediasection}>
                    <a
                      style={{ textDecoration: 'none' }}
                      href="https://yourstory.com/herstory/2020/09/woman-entrepreneur-skilling-gap-edtech-startup"
                    >
                      <div className={styles.mainsection}>
                        <div className={styles.sectionimg}>
                          <img src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/image_22.webp"></img>
                        </div>
                        <div className={styles.sectionData}>
                          <p>
                            This Woman Entrepreneur is Bridging The Gap Between
                            Formal Education and Industry Needs!
                          </p>
                        </div>
                        <div className={styles.mediaDate}>
                          <div className={styles.dateData}>
                            <p>
                              10 October
                              <br /> 2021
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className={`${styles.rightsecmedia}  ${styles.mobile}`}>
                <div className={styles.mediacard}>
                  <a
                    style={{ textDecoration: 'none' }}
                    href="https://www.ndtv.com/education/iit-roorkee-begin-2nd-batch-of-supply-chain-management-course-for-professionals-from-apr-23"
                  >
                    <img
                      style={{ width: '100%' }}
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group12841.webp"
                    ></img>
                  </a>
                </div>
                <div className={styles.mediacard}>
                  <a
                    style={{ textDecoration: 'none' }}
                    href="https://indianexpress.com/article/education/im-calcutta-launches-executive-program-in-investment-banking-and-capital-markets-www-iimcal-ac-in-ldp-epibcm-7754537/"
                  >
                    <img
                      style={{ width: '100%' }}
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group2838.webp"
                    ></img>
                  </a>
                </div>
                <div className={styles.mediacard}>
                  <a
                    style={{ textDecoration: 'none' }}
                    href="https://www.educationtimes.com/article/careers-management/83066748/market-has-more-jobs-for-consumer-insight-analysts"
                  >
                    <img
                      style={{ width: '100%' }}
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group2837.webp"
                    ></img>
                  </a>
                </div>
                <div className={styles.mediacard}>
                  <a
                    style={{ textDecoration: 'none' }}
                    href="https://yourstory.com/herstory/2020/09/woman-entrepreneur-skilling-gap-edtech-startup"
                  >
                    <img
                      style={{ width: '100%' }}
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group_2836.webp"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* moment of honour */}
          <Award_recogniation aboutname="Moments Of Honour" />
        </div>
      </Layout>
    </>
  )
}

export default AboutUs

export async function getStaticProps() {
  const res = await fetch(
    `${configs.MARKETING_ENDPOINT}/marketingopspanelpublic/get_all_fields_website`,
    {
      headers: {
        skey: configs.skey,
      },
    }
  )
  // console.log(res, 'res')
  const data = await res.json()

  return {
    props: {
      propsdata: data.data,
    },
  }
}
