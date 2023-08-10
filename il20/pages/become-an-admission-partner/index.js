import React, { useRef, useEffect, useState } from 'react'

import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import styles from '../../styles/authorised-admission-partner.module.css'
import Image from 'next/image'
import { Accordion } from 'react-bootstrap'
import Header from '../../components/AaP/Header'
import Program from '../../json/program.json'
import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/GenericForm-Nm-Em-Con-Loc'
import SimilarPrograms from '../../components/pgBandF/SimilarPrograms'
import dataArr from '../../json/program.json'
import { configs, countryCodes } from '../../constants'

const Aap = (props) => {
  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const [load, setLoad] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [formModal, setFormModal] = useState(false)
  const [paymentModal, setPaymentModal] = useState(false)
  const [facultyModal, setFacultyModal] = useState(false)
  const [seeMoreRightModal, setSeeMoreRightModal] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  const [brochureUrl, setBrochureUrl] = useState()
  const [facultyId, setFacultyId] = useState()
  const [aboutId, setAboutId] = useState()
  const [aboutModal, setAboutModal] = useState(false)
  const [certificateModal, setCertificateModal] = useState(false)

  const AssuredProgram = 'Job Assured Program'
  // const INDEX_IN_PROGRAM =
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
  const openPaymentModal = (e) => {
    setPaymentModal((prevState) => !prevState)
  }
  useEffect(() => {
    setLoad(true)
    localStorage.setItem(
      'areaofinterest',
      'Certification in Data Science and Machine Learning'
    )
  }, [])

  return (
    <>
      <Layout toggleModal={toggleModal} propsdata={props.propsdata.allData}>
        <Head>
          <title>
            Become An Imarticus Admission Partner | Build Your Business With
            Imarticus
          </title>
          <meta
            name="description"
            content="Join us in our endeavour to establish a robust ecosystem for education in India. As a partner, you will gain access to promote Imarticus' leading programs and be instrumental in changing the education landscape with us."
          />
          <meta
            name="keywords"
            content="
          imarticus admission partner, finance courses, analytics courses, job assured programs, educational institute, edtech company"
          />
          <meta
            property="og:title"
            content="Become An Imarticus Admission Partner | Build Your Business With Imarticus"
          />
          <meta
            property="og:description"
            content="Join us in our endeavour to establish a robust ecosystem for education in India. As a partner, you will gain access to promote Imarticus' leading programs and be instrumental in changing the education landscape with us."
          />
          <meta property="og:url" content="https://imarticus.org/" />
          <meta
            property="og:image"
            content="https://cdn.pegasus.imarticus.org/imarticus_2/FACEBOOK-open-graph.jpg"
          />
          <meta property="product:brand" content="Imarticus Learning" />
          <link
            rel="canonical"
            href="https://imarticus.org/become-an-admission-partner/"
          />
          <link
            rel="icon"
            href="https://cdn.pegasus.imarticus.org/imarticus_2/favicon4.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        {paymentModal && (
          <Modal>
            <PaymentModalTabs toggleModal={openPaymentModal} />
          </Modal>
        )}

        {formModal && (
          <Modal toggleModal={toggleModal}>
            <EnquireForm
              toggleModal={toggleModal}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              subject={'ACP Lead'}
            />
          </Modal>
        )}

        <Header />
        <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
          <div className={styles.section2}>
            <div className={styles.mainsec2}>
              <div className={styles.leftsec2}>
                <div className={styles.grow}>
                  <h2>{dataArr.Acp_page.section2.heading}</h2>
                </div>
              </div>
              <div className={styles.rightsec2}>
                <div className={styles.datasec2}>
                  <p>{dataArr.Acp_page.section2.data} </p>
                </div>
                <div className={styles.numbers}>
                  <div className={styles.num_a}>
                    <div className={styles.data}>
                      <img
                        src={
                          'https://cdn.pegasus.imarticus.org/Aap-landing-page/Vector2.svg'
                        }
                      ></img>
                      {dataArr.Acp_page.section2.numbers[0]}{' '}
                    </div>
                    <p className={styles.span_a}>
                      {dataArr.Acp_page.section2.numberdata[0]}
                    </p>
                  </div>
                  <div className={styles.num_b}>
                    <div className={styles.data}>
                      <img
                        src={
                          'https://cdn.pegasus.imarticus.org/Aap-landing-page/Group(5).svg'
                        }
                      ></img>
                      {dataArr.Acp_page.section2.numbers[1]}
                    </div>
                    <p className={styles.span_a}>
                      {dataArr.Acp_page.section2.numberdata[1]}
                    </p>
                  </div>
                  <div className={styles.num_c}>
                    <div className={styles.data}>
                      <img
                        src={
                          'https://cdn.pegasus.imarticus.org/Aap-landing-page/Group(6).svg'
                        }
                      ></img>
                      {dataArr.Acp_page.section2.numbers[2]}
                    </div>
                    <p className={styles.span_a}>
                      {dataArr.Acp_page.section2.numberdata[2]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section 3 */}

          <div className={styles.section3}>
            <div className={styles.rowsec3}>
              <div className={styles.columnsec3a}>
                <div className={styles.main}>
                  <div>
                    <div className={styles.headingsec3}>
                      <h2>{dataArr.Acp_page.section3.heading}</h2>
                    </div>
                  </div>
                  <div>
                    <div className={styles.datasec3}>
                      <p>
                        Partner with the industry's most reputed education
                        ecosystem, Imarticus Learning. At Imarticus, we are
                        dedicated to bringing progressive and future-focused
                        education to our students.
                        <br />
                        With over 1,00,000 learners and 500 partnerships with
                        leading institutions and corporations, gain access to an
                        extensive network of opportunities.
                        <br />
                        Join us as an admission partner in our efforts to
                        provide top of the line programs and assured placements
                        to aspiring candidates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.columnsec3b}></div>
            </div>
          </div>

          {/* section 4 */}
          <div className={styles.section4}>
            <div className={styles.mainsec4}>
              <div className={styles.leftimage}>
                <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_2907_Web.webp"></img>
              </div>
              <div className={styles.business}>
                <div className={styles.headingsec4}>
                  <h2>{dataArr.Acp_page.section4.heading}</h2>
                </div>
                <div className={styles.pointsSec4}>
                  <div className={styles.mainpoints}>
                    <div className={styles.leftimg}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_2870.svg"></img>
                    </div>
                    <div className={styles.rightdata}>
                      <p>{dataArr.Acp_page.section4.points[0]}</p>
                    </div>
                  </div>
                  <div
                    className={styles.mainpoints}
                    style={{ paddingTop: '16px' }}
                  >
                    <div className={styles.leftimg}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_2870.svg"></img>
                    </div>
                    <div className={styles.rightdata}>
                      <p>{dataArr.Acp_page.section4.points[1]}</p>
                    </div>
                  </div>
                  <div
                    className={styles.mainpoints}
                    style={{ paddingTop: '16px' }}
                  >
                    <div className={styles.leftimg}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_2870.svg"></img>
                    </div>
                    <div className={styles.rightdata}>
                      <p>{dataArr.Acp_page.section4.points[2]}</p>
                    </div>
                  </div>
                  <div
                    className={styles.mainpoints}
                    style={{ paddingTop: '16px' }}
                  >
                    <div className={styles.leftimg}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_2870.svg"></img>
                    </div>
                    <div className={styles.rightdata}>
                      <p>{dataArr.Acp_page.section4.points[3]}</p>
                    </div>
                  </div>
                  <div
                    className={styles.mainpoints}
                    style={{ paddingTop: '16px' }}
                  >
                    <div className={styles.leftimg}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_2870.svg"></img>
                    </div>
                    <div className={styles.rightdata}>
                      <p>{dataArr.Acp_page.section4.points[4]}</p>
                    </div>
                  </div>
                  <div
                    className={styles.mainpoints}
                    style={{ paddingTop: '16px' }}
                  >
                    <div className={styles.leftimg}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_2870.svg"></img>
                    </div>
                    <div className={styles.rightdata}>
                      <p>{dataArr.Acp_page.section4.points[5]}</p>
                    </div>
                  </div>
                  <div
                    className={styles.mainpoints}
                    style={{ paddingTop: '16px' }}
                  >
                    <div className={styles.leftimg}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_2870.svg"></img>
                    </div>
                    <div className={styles.rightdata}>
                      <p>{dataArr.Acp_page.section4.points[6]}</p>
                    </div>
                  </div>
                  <div
                    className={styles.mainpoints}
                    style={{ paddingTop: '16px' }}
                  >
                    <div className={styles.leftimg}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_2870.svg"></img>
                    </div>
                    <div className={styles.rightdata}>
                      <p> {dataArr.Acp_page.section4.points[7]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section 5 */}
          <div className={styles.section5}>
            <div className={styles.innercard}>
              <div className={styles.authorized}>
                <h2>{dataArr.Acp_page.section5.heading}</h2>
              </div>
              <div className={styles.points}>
                <ul>
                  <li>{dataArr.Acp_page.section5.points[0]}</li>
                  <li>{dataArr.Acp_page.section5.points[1]}</li>
                  <li>{dataArr.Acp_page.section5.points[2]}</li>
                  <li>{dataArr.Acp_page.section5.points[3]}</li>
                  <li>{dataArr.Acp_page.section5.points[4]}</li>
                  <li>{dataArr.Acp_page.section5.points[5]}</li>
                  <li>{dataArr.Acp_page.section5.points[6]}</li>
                </ul>
              </div>
              <div className={styles.sec5button}>
                <button className={styles.learnbutton} onClick={toggleModal}>
                  <span className={styles.learnbuttontext}>Learn More</span>
                </button>
              </div>
            </div>
          </div>

          {/* section 6 */}
          <div className={styles.section6}>
            <div className={styles.mainsec6}>
              <div className={styles.leftsec6}>
                <div className={styles.connected}>
                  <h3>{dataArr.Acp_page.section6.heading}</h3>
                </div>
                <div className={styles.leftdata}>
                  <p>
                    Imarticus is the only Edtech company that provides a
                    holistic learning experience with a complete ecosystem of
                    programs, resources and technologies in an integrated
                    approach. We continuously develop comprehensive solutions to
                    suit the changing times, needs and demands of the learners
                    to accelerate student achievement.
                    <br /> We offer online and in-class programs at twelve
                    centres, including Mumbai, Pune, Delhi, Bangalore, Lucknow,
                    Hyderabad, Chennai, Jaipur, Patna, Coimbatore, Kolkata and
                    Ahmedabad. We're renowned for our state of the art
                    facilities and foremost programs in the fields of banking,
                    finance, fintech, analytics, data science, artificial
                    intelligence, and machine learning.
                  </p>
                </div>
              </div>
              <div
                style={{ textAlign: 'right' }}
                className={`${styles.rightImg} ${styles.desktop}`}
              >
                <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_2909_Web.webp"></img>
              </div>
              <div className={`${styles.rightImg} ${styles.mobile}`}>
                <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_2908.webp"></img>
              </div>
            </div>
          </div>

          {/* section7 */}
          <div className={styles.section7}>
            <div className={styles.innersec7}>
              <div className={styles.mainsec7}>
                <div className={styles.leftsec7}>
                  <div className={styles.headingsec7}>
                    <h4>{dataArr.Acp_page.section7.heading}</h4>
                  </div>
                  <div className={styles.imarticusimg}>
                    <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/logo_(2).svg"></img>
                  </div>
                </div>
                <div className={styles.rightsec7}>
                  <div className={styles.datasec7}>
                    <p>
                      As an Authorised Admission Partner, you would enjoy all
                      the benefits and leverage our extensive network with
                      Imarticus.
                      <br />
                      Join us in our endeavour to establish a robust ecosystem
                      for education in India.
                    </p>
                  </div>
                  <div className={styles.sec7button}>
                    <button
                      className={styles.learnbutton}
                      onClick={toggleModal}
                    >
                      <span className={styles.learnbuttontext}>Apply Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* section 8 */}
          <div className={styles.section8}>
            <div className={styles.mainsec8}>
              <div className={styles.leftsec8}>
                <img
                  className={styles.desktop}
                  style={{ borderRadius: '8px' }}
                  src="https://cdn.pegasus.imarticus.org/Aap-landing-page/web.webp"
                ></img>
                <img
                  className={styles.mobile}
                  style={{ borderRadius: '8px' }}
                  src="https://cdn.pegasus.imarticus.org/Aap-landing-page/mobile.webp"
                ></img>
              </div>
              <div className={styles.rightsec8}>
                <div className={styles.eligibility}>
                  <h2>{dataArr.Acp_page.section8.heading}</h2>
                </div>
                <div className={styles.pointsSec8}>
                  <div className={styles.mainpoint8}>
                    <div className={styles.leftside}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_152.svg"></img>
                    </div>
                    <div className={styles.rightside}>
                      <p>
                        Office space of about{' '}
                        <span style={{ fontWeight: 'bold' }}>
                          300 to 500 sq ft.
                        </span>{' '}
                        in a commercial or a semi-commercial space.
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.mainpoint8}
                    style={{ paddingTop: '8px' }}
                  >
                    <div className={styles.leftside}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_152.svg"></img>
                    </div>
                    <div className={styles.rightside}>
                      <p>{dataArr.Acp_page.section8.points[0]}</p>
                    </div>
                  </div>
                  <div
                    className={styles.mainpoint8}
                    style={{ paddingTop: '8px' }}
                  >
                    <div className={styles.leftside}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_152.svg"></img>
                    </div>
                    <div className={styles.rightside}>
                      <p>{dataArr.Acp_page.section8.points[1]}</p>
                    </div>
                  </div>
                  <div
                    className={styles.mainpoint8}
                    style={{ paddingTop: '8px' }}
                  >
                    <div className={styles.leftside}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_152.svg"></img>
                    </div>
                    <div className={styles.rightside}>
                      <p>{dataArr.Acp_page.section8.points[2]}</p>
                    </div>
                  </div>
                  <div
                    className={styles.mainpoint8}
                    style={{ paddingTop: '8px' }}
                  >
                    <div className={styles.leftside}>
                      <img src="https://cdn.pegasus.imarticus.org/Aap-landing-page/Group_152.svg"></img>
                    </div>
                    <div className={styles.rightside}>
                      <p>{dataArr.Acp_page.section8.points[3]}</p>
                    </div>
                  </div>
                </div>

                {/* 


 */}
                <div className={styles.note}>
                  <h3>{dataArr.Acp_page.section8.note}</h3>
                  <p>
                    We will be happy to discuss and share our detailed terms and
                    conditions before the agreement process.
                    <br />
                    Admission Partners cannot collect fees or any other charges
                    from the students or candidates. Imarticus will manage all
                    fees and payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sec8button}>
            <button className={styles.sec8_button} onClick={toggleModal}>
              <span className={styles.sec8_buttontext}>Apply Now</span>
            </button>
          </div>

          {/* section 9 */}
          <div>
            <div className={styles.offeringsec}>
              <SimilarPrograms
                propsdata={props.propsdata.allData}
                programid={'Job Assured Program'}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Aap

export async function getStaticProps() {
  const res = await fetch(
    `${configs.MARKETING_ENDPOINT}/marketingopspanelpublic/get_all_fields_website`,
    {
      headers: {
        skey: configs.skey,
      },
    }
  )
  // console.log(res, "res");
  const data = await res.json()
  return {
    props: {
      propsdata: data.data,
    },
  }
}
