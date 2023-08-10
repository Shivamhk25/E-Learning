import React, { useRef, useEffect, useState } from 'react'
import { GetCourseLSKeyByPath } from '../../services/helper'
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import style from '../../styles/fsd.module.css'
import style1 from '../../styles/iit_roorkee_cybersecurity.module.css'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles from '../../styles/pgB&F.module.css'
import style2 from '../../styles/iit_roorkee_dm.module.css'
import styles2 from '../../styles/financial-services-capital-markets-management-program-iim-indore.module.css'
import Image from 'next/image'
import { Accordion } from 'react-bootstrap'
import Header from '../../components/fsd/Header'
import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/Formtype3-Nm-Em-Con-Loc-MoL'
import SimilarPrograms from '../../components/pgBandF/SimilarPrograms'
import dataArr from '../../json/program.json'

import { configs, countryCodes } from '../../constants'
import EmbeddedEnquireForm from '../../components/Forms/EmbedableForm5-Nm-Em-Con-Loc'
import { GetSpecificdata } from '../../services/helper'
import { useSpring, animated as a, b } from 'react-spring'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Navigation, Pagination } from 'swiper'

const Fsd = (props) => {
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
  const [pagedata, setPagedata] = useState('')
  const [aboutParent, setAboutParent] = useState(false)

  const [certificateModal, setCertificateModal] = useState(false)
  const PROGRAM = 'Full Stack Developer Pro'
  const PROGRAM_PATH_NAME = '/full-stack-developer-pro/'

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
      GetCourseLSKeyByPath(props.propsdata.allData, PROGRAM_PATH_NAME)
    )

    let webpagedata = GetSpecificdata(
      props.propsdata.allData,
      GetCourseLSKeyByPath(props.propsdata.allData, PROGRAM_PATH_NAME)
    )
    setPagedata(webpagedata)
  }, [])
  const [facultydata, setFacultydata] = useState(true)
  const [facultydataindex, setFacultydataindex] = useState([1])
  const [facultymobindex, setFacultymobindex] = useState()
  const [animeStyle, setAnimeStyle] = useState({
    opacity: '1',
    transform: 'scale(1.5)',
  })

  return (
    <>
      <Layout toggleModal={toggleModal} propsdata={props.propsdata.allData}>
        <Head>
          <title>{pagedata.programTitle}</title>
          <meta name="description" content={pagedata.metaDescription} />
          <meta name="keywords" content={pagedata.metaKeyword} />
          <meta property="og:title" content={pagedata.ogTitle} />
          <meta property="og:description" content={pagedata.ogDescription} />
          <meta property="og:url" content="https://imarticus.org/" />
          <meta
            property="og:image"
            content="https://cdn.pegasus.imarticus.org/imarticus_2/FACEBOOK-open-graph.jpg"
          />
          <meta property="product:brand" content="Imarticus Learning" />
          <link
            rel="canonical"
            href="https://imarticus.org/full-stack-developer-pro/"
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
        {aboutParent && (
          <Modal toggleModal={aboutParent}>
            <div
              className={styles2.industry_project_popup_ctnr1}
              style={{ display: 'block', borderRadius: '8px' }}
            >
              <div
                onClick={() => {
                  setAboutParent(false)
                }}
                style={{ float: 'right' }}
                role="button"
                className={styles2.crossArrow}
                tabindex="0"
              >
                <img
                  height="15"
                  width="15"
                  alt="close"
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/close.svg"
                />
              </div>

              <div
                className={styles2.partnerCardpopup}
                style={{ paddingBottom: '16px' }}
              >
                <div>
                  <p
                    className={styles2.cardText1}
                    style={{ marginTop: '20px' }}
                  >
                    {dataArr.fsd.facultydatashow[facultymobindex].description}
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        )}
        {certificateModal && (
          <Modal toggleModal={facultyModal}>
            <div
              className={styles2.industry_project_popup_ctnr}
              style={{ display: 'block', backgroundColor: '' }}
            >
              {' '}
              <div
                onClick={() => {
                  setCertificateModal(false)
                }}
                style={{ float: 'right', padding: '16px 16px 0 0' }}
                role="button"
                class="close_arrow_pointer"
                tabindex="0"
                className={styles2.crossPad}
              >
                <img
                  height="15"
                  width="15"
                  alt="close"
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/close.svg"
                />
              </div>
              <div className={styles2.certipopWeb}>
                <img
                  src="https://cdn.pegasus.imarticus.org/Fsd/FSD-Certificate-1.webp"
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                ></img>
              </div>
              <div className={styles2.certipopMobile}>
                <img
                  src="https://cdn.pegasus.imarticus.org/Fsd/FSD-Certificate-1.webp"
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                ></img>
              </div>
            </div>
          </Modal>
        )}

        {formModal && (
          <Modal toggleModal={toggleModal}>
            <EnquireForm
              toggleModal={toggleModal}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              courseName={GetCourseLSKeyByPath(
                props.propsdata.allData,
                PROGRAM_PATH_NAME
              )}
              propsdata={props.propsdata.allData}
            />
          </Modal>
        )}
        <Header toggleModal={toggleModal} pagedata={pagedata} />
        <div>
          <div className={style.ourAlumni}>
            <h1 className={styles.alumniHeader}>Our Alumni work at</h1>
            <div className={style.desktop}>
              <Swiper
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                slidesPerView={10}
                className="hiringpartnercarousal_next"
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                {dataArr.fsd.alumini.map((img) => {
                  return (
                    <SwiperSlide>
                      <div className="collaboration_carousal_main_div">
                        <div
                          className="collaborationcarousaldivfsd"
                          style={{ padding: '0 10px', display: 'flex' }}
                        >
                          <div className={style.animateimg}>
                            <Image
                              src={img.img}
                              height="80"
                              width="170"
                              objectFit="contain"
                              layout="fixed"
                              className={style.bw}
                              alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div
              className={
                styles.onMobileOnlyImg +
                ' row ' +
                styles.row +
                ' ' +
                styles.ourPrograms_mobiles
              }
            >
              <table>
                <tbody>
                  <div className={style.animateimg}>
                    <tr>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/Rapido.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/Goldman%20Sach.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/EY.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/Societe.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/accenture.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/capgemini.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/Slice.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/amazon.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/Walmart.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/tesco.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/JPMorgan.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/Samsung.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/PWC.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                      <td>
                        <img
                          src={`https://cdn.pegasus.imarticus.org/Fsd/partners/Swiggy.webp`}
                          className={style.bw}
                          style={{ objectFit: 'contain' }}
                          alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                        />
                      </td>
                    </tr>
                  </div>
                </tbody>
              </table>
            </div>
          </div>

          {/* section 3 ================================================ */}
          <div className={style.career}>
            <div className={style.main}>
              <div className={style.careerHeading}>
                <h3>We Supercharge Your Career</h3>
              </div>
              <div className={style.careerCard}>
                <div>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    slidesPerGroup={1}
                    slidesPerView={'auto'}
                    className="light-grey-color-swiper-2"
                  >
                    {dataArr.fsd.careercard.map((data) => {
                      return (
                        <SwiperSlide>
                          <div className={styles1.aboutCard}>
                            <div className={style.cardData}>
                              <div className={style.cardimage}>
                                <img
                                  src={
                                    'https://cdn.pegasus.imarticus.org/' +
                                    data.student
                                  }
                                ></img>
                              </div>
                              <div className={style.name}>
                                <p>{data.name}</p>
                              </div>
                              <div className={style.designation}>
                                <p>{data.desg}</p>
                              </div>
                              <div className={style.arrow}>
                                <img
                                  src={
                                    'https://cdn.pegasus.imarticus.org/' +
                                    data.arrow
                                  }
                                ></img>
                              </div>
                              <div className={style.company}>
                                <img
                                  src={
                                    'https://cdn.pegasus.imarticus.org/' +
                                    data.company
                                  }
                                  height="30px"
                                ></img>
                              </div>
                              <div className={style.branch}>
                                <p>{data.branch}</p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>

          {/* section 4 ================================================ */}

          <div className={style.section4}>
            <div className={style.sec4main}>
              <div className={style.heading}>
                <h3>Join The Best Full Stack Developer Course</h3>
              </div>
              <div className={style.para}>
                <p>{dataArr.fsd.joinfsd}</p>
              </div>
              <div className={style.desktop1}>
                <div className={style.box}>
                  {dataArr.fsd.joinfsdbox.map((data) => {
                    return (
                      <div className={style.aboutbox}>
                        <div className={style.mybox}>
                          <div>
                            <img
                              src={
                                'https://cdn.pegasus.imarticus.org/' +
                                data.boximg
                              }
                            ></img>
                          </div>
                          <div className={style.boxheading}>
                            <p>{data.heading}</p>
                          </div>
                          <div className={style.boxdata}>
                            <p>{data.data}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className={style.box}>
                  {dataArr.fsd.joinfsdbox2.map((data) => {
                    return (
                      <div className={style.aboutbox}>
                        <div className={style.mybox2}>
                          <div>
                            <img
                              src={
                                'https://cdn.pegasus.imarticus.org/' +
                                data.boximg
                              }
                            ></img>
                          </div>
                          <div className={style.boxheading}>
                            <p>{data.heading}</p>
                          </div>
                          <div className={style.boxdata}>
                            <p>{data.data}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={style.tab1}>
                <div className={style.box}>
                  {dataArr.fsd.joinfsdboxtab.map((data) => {
                    return (
                      <div className={style.aboutbox}>
                        <div className={style.mybox}>
                          <div>
                            <img
                              src={
                                'https://cdn.pegasus.imarticus.org/' +
                                data.boximg
                              }
                            ></img>
                          </div>
                          <div className={style.boxheading}>
                            <p>{data.heading}</p>
                          </div>
                          <div className={style.boxdata}>
                            <p>{data.data}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className={style.box}>
                  {dataArr.fsd.joinfsdboxtab2.map((data) => {
                    return (
                      <div className={style.aboutbox}>
                        <div className={style.mybox2}>
                          <div>
                            <img
                              src={
                                'https://cdn.pegasus.imarticus.org/' +
                                data.boximg
                              }
                            ></img>
                          </div>
                          <div className={style.boxheading}>
                            <p>{data.heading}</p>
                          </div>
                          <div className={style.boxdata}>
                            <p>{data.data}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className={style.box}>
                  {dataArr.fsd.joinfsdboxtab3.map((data) => {
                    return (
                      <div className={style.aboutbox}>
                        <div className={style.mybox2}>
                          <div>
                            <img
                              src={
                                'https://cdn.pegasus.imarticus.org/' +
                                data.boximg
                              }
                            ></img>
                          </div>
                          <div className={style.boxheading}>
                            <p>{data.heading}</p>
                          </div>
                          <div className={style.boxdata}>
                            <p>{data.data}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={style.mobile1}>
                <div className={style.box}>
                  {dataArr.fsd.joinfsdbox.map((data) => {
                    return (
                      <div className={style.aboutbox}>
                        <div className={style.mybox}>
                          <div>
                            <img
                              src={
                                'https://cdn.pegasus.imarticus.org/' +
                                data.boximg
                              }
                            ></img>
                          </div>
                          <div className={style.boxheading}>
                            <p>{data.heading}</p>
                          </div>
                          <div className={style.boxdata}>
                            <p>{data.data}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className={style.box}>
                  {dataArr.fsd.joinfsdbox2.map((data) => {
                    return (
                      <div className={style.aboutbox}>
                        <div className={style.mybox2}>
                          <div>
                            <img
                              src={
                                'https://cdn.pegasus.imarticus.org/' +
                                data.boximg
                              }
                            ></img>
                          </div>
                          <div className={style.boxheading}>
                            <p>{data.heading}</p>
                          </div>
                          <div className={style.boxdata}>
                            <p>{data.data}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={style.enrollbtn}>
                <button className={style.enroll_button} onClick={toggleModal}>
                  <span className={style.enroll_buttontext}>Enrol Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* section 5 ============================================= */}
          <div className={style.curriculum}>
            <div className={style.sec5heading}>
              <h3>Who is this course for?</h3>
            </div>
            <div className={style.sec5para}>
              <p>
                Candidates with the following prerequisites can apply for Full
                Stack Development certification courses:
              </p>
            </div>
            <div className={style.desktop1}>
              <div className={style.curriculumbox}>
                {dataArr.fsd.sec5box.map((data) => {
                  return (
                    <div className={style.sec5box}>
                      <div className={style.mysec5box}>
                        <div>
                          <img
                            src={
                              'https://cdn.pegasus.imarticus.org/' + data.boximg
                            }
                          ></img>
                        </div>
                        <div className={style.sec5boxdata}>
                          <p>{data.data}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={style.tab1}>
              <div className={style.curriculumbox}>
                {dataArr.fsd.sec5boxtab1.map((data) => {
                  return (
                    <div className={style.sec5box}>
                      <div className={style.mysec5box}>
                        <div>
                          <img
                            src={
                              'https://cdn.pegasus.imarticus.org/' + data.boximg
                            }
                          ></img>
                        </div>
                        <div className={style.sec5boxdata}>
                          <p>{data.data}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className={style.curriculumbox}>
                {dataArr.fsd.sec5boxtab2.map((data) => {
                  return (
                    <div className={style.sec5box}>
                      <div className={style.mysec5box}>
                        <div>
                          <img
                            src={
                              'https://cdn.pegasus.imarticus.org/' + data.boximg
                            }
                          ></img>
                        </div>
                        <div className={style.sec5boxdata}>
                          <p>{data.data}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={style.mobile1}>
              <div className={style.curriculumbox}>
                {dataArr.fsd.sec5boxmobile.map((data) => {
                  return (
                    <div className={style.sec5box}>
                      <div className={style.mysec5box}>
                        <div>
                          <img
                            src={
                              'https://cdn.pegasus.imarticus.org/' + data.boximg
                            }
                          ></img>
                        </div>
                        <div className={style.sec5boxdata}>
                          <p>{data.data}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* curriculum-data*/}
            <div className={style.curriculum_heading}>
              <h3>Curriculum</h3>
            </div>
            <div className={style.curriculumsec}>
              <div className={style.accordionsection}>
                <div
                  className={`${styles2.curriMobileMargin} ${style.accordionfsd}`}
                >
                  {dataArr.fsd.curriculum.map((data, index) => {
                    return (
                      <div>
                        <div style={{ height: '23px' }}></div>
                        <Accordion
                          defaultActiveKey="0"
                          style={{
                            boxShadow: '0px 0px 16px rgba(60, 72, 82, 0.1)',
                            borderRadius: '8px',
                          }}
                        >
                          <Accordion.Item
                            eventKey="0"
                            style={{ border: 'none' }}
                          >
                            <Accordion.Header>
                              <div className={styles2.accHeader}>
                                <h1 className={style.accHeader1}>
                                  {data.head}
                                </h1>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className={style.accordiondata}>
                                {data.data.map((data1) => {
                                  return (
                                    <>
                                      <div className={style.accordionlist}>
                                        <div className={style.leftacc}>
                                          <img src="https://cdn.pegasus.imarticus.org/Fsd/P.webp"></img>
                                        </div>
                                        <div className={style.rightacc}>
                                          <p>{data1.list}</p>
                                        </div>
                                      </div>
                                    </>
                                  )
                                })}
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={`${style.contactform}`}>
                <div className={style.sticky}>
                  <div
                    style={{ marginTop: '22px' }}
                    className={style.contactus}
                  >
                    <EmbeddedEnquireForm
                      toggleModal={toggleModal}
                      downloadBrochure={downloadBrochure}
                      brochureUrl={brochureUrl}
                      courseName={GetCourseLSKeyByPath(
                        props.propsdata.allData,
                        PROGRAM_PATH_NAME
                      )}
                      propsdata={props.propsdata.allData}
                    />
                  </div>
                  <div className={style.coursedetailss}></div>
                </div>
              </div>
            </div>
          </div>

          {/* section 6 ================================================= */}
          <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
            <div className={style1.tools}>
              <div className={style.toolheading}>
                <h2>Tools & Technologies Covered</h2>
              </div>
              <div>
                <Swiper
                  loop={true}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  slidesPerGroup={1}
                  slidesPerView={'auto'}
                  style={{ paddingTop: '10px' }}
                >
                  {dataArr.fsd.tools.map((data) => {
                    return (
                      <SwiperSlide>
                        <div style={{ width: '200px' }}>
                          <div
                            style={{ width: '170px', height: '80px' }}
                            className={`${style.toolimages} ${style.animateimg}`}
                          >
                            <img
                              className={style.bw}
                              src={
                                'https://cdn.pegasus.imarticus.org/' + data.img
                              }
                            ></img>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          {/* section 6 ================================================= */}
          <div className={style.desktop}>
            <div className={style.projects}>
              <div className={style.projectsmain}>
                <div className={style.projectheading}>
                  <h3>Industry-specific Projects</h3>
                </div>

                <div className={style.projectcards}>
                  <Swiper
                    style={{ paddingBottom: '40px' }}
                    modules={[Navigation, Pagination]}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    slidesPerGroup={1}
                    slidesPerView={'auto'}
                    className="light-blue-color-swiper"
                  >
                    {dataArr.fsd.projects.map((data) => {
                      return (
                        <>
                          <SwiperSlide>
                            <div style={{ width: '300px' }}>
                              <div
                                className={style.container}
                                style={{
                                  backgroundImage: 'url(' + data.img + ')',
                                }}
                              >
                                <div className={style.containergradient}>
                                  <div className={style.projecttopic}>
                                    <p>{data.head}</p>
                                    <div className={style.toggletext}>
                                      <div className={style.animebox}>
                                        <hr className={style.divider2}></hr>
                                        <div className={style.projectdetail}>
                                          <p> {data.data} </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </>
                      )
                    })}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </Swiper>
                </div>
              </div>

              <div className={style.enrollbtn_2}>
                <button className={style.enroll_button} onClick={toggleModal}>
                  <span className={style.enroll_buttontext}>Enrol Now</span>
                </button>
              </div>
            </div>
          </div>

          <div className={style.mobile}>
            <div className={style.projects}>
              <div className={style.projectsmain}>
                <div className={style.projectheading}>
                  <h3>Industry-specific Projects</h3>
                </div>
                <div className={style.projectcards}>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    slidesPerGroup={1}
                    slidesPerView={'auto'}
                    className="light-blue-color-swiper"
                    style={{ paddingBottom: '40px' }}
                  >
                    {dataArr.fsd.projectsmob.map((data) => {
                      return (
                        <SwiperSlide>
                          <div style={{ width: '300px' }}>
                            <div
                              style={{
                                backgroundImage: 'url(' + data.img + ')',
                              }}
                              className={style.pcard}
                            >
                              <div className={style.capstone}>
                                <div className={style.projecttopic}>
                                  <p>{data.head}</p>
                                </div>
                                <hr className={style.divider2}></hr>
                                <div className={style.projectdetail}>
                                  <p>{data.data}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </Swiper>
                </div>

                <div className={style.enrollbtn_2}>
                  <button className={style.enroll_button} onClick={toggleModal}>
                    <span className={style.enroll_buttontext}>Enrol Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* section 7 ======================================================================*/}
          <div className={style.certificate}>
            <div className={style.certisections}>
              <div className={style.certileft}>
                <div className={style.certiheading}>
                  <h3>Will I Get Certified?</h3>
                </div>
                <div className={style.certidata}>
                  <p>
                    Upon successfully completing this program, you’ll earn a
                    Full Stack Developer Pro certificate.
                  </p>
                </div>
                <div className={style.enrollbtn_certi}>
                  <button className={style.enroll_button} onClick={toggleModal}>
                    <span className={style.enroll_buttontext}>Enrol Now</span>
                  </button>
                </div>
              </div>
              <div className={style.certiright}>
                <div
                  className={style.certificateMainleftimg}
                  style={{ position: 'relative' }}
                >
                  <img
                    className={`${style.certiimg} ${style.desktop}`}
                    src="https://cdn.pegasus.imarticus.org/Fsd/c.webp"
                  ></img>
                  <img
                    src="https://cdn.pegasus.imarticus.org/Fsd/cm.webp"
                    className={`${style2.certificateleftimgMobile_fsd} ${style.mobile}`}
                  ></img>
                  <img
                    src="https://cdn.pegasus.imarticus.org/iit_roorkee/zoom_out.webp"
                    className={style.partnerZoom_fsd}
                    onClick={() => {
                      setCertificateModal(true)
                    }}
                  ></img>
                </div>
              </div>
            </div>
          </div>

          {/* section leaders ========================================================= */}
          <div className={style.leaders}>
            <div className={style.leadermain}>
              <div className={style.leaderheading}>
                <h3>Success Stories Created With Imarticus </h3>
              </div>
              <div className={style.desktop}>
                <div className={style.leadercards}>
                  <Swiper
                    style={{ paddingBottom: '40px' }}
                    modules={[Navigation, Pagination]}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    slidesPerGroup={1}
                    slidesPerView={'auto'}
                    className="light-blue-color-swiper"
                  >
                    {dataArr.fsd.leaders.map((data) => {
                      return (
                        <SwiperSlide>
                          <div style={{ width: '300px' }}>
                            <div className={style.leadermycard}>
                              <div className={style.cardsec}>
                                <div className={style.cardimg}>
                                  <img
                                    className={style.leaderimage}
                                    src={
                                      'https://cdn.pegasus.imarticus.org/' +
                                      data.img
                                    }
                                  ></img>
                                </div>
                                <div className={style.cardhead}>
                                  <p>{data.heading}</p>
                                </div>
                                <div className={style.carddetails}>
                                  <p>{data.details.d1}</p>
                                  <p>{data.details.d2}</p>
                                  <p>{data.details.d3}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </Swiper>
                </div>
              </div>
              <div className={style.mobile}>
                <Swiper
                  style={{ paddingBottom: '40px' }}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  slidesPerGroup={1}
                  slidesPerView={'auto'}
                  className="swiper-award-crousel2"
                >
                  {dataArr.fsd.leaders.map((data) => {
                    return (
                      <SwiperSlide>
                        <>
                          <div style={{ width: '300px' }}>
                            <div className={style.leadermycard}>
                              <div className={style.cardsec}>
                                <div className={style.cardimg}>
                                  <img
                                    className={style.leaderimage}
                                    src={
                                      'https://cdn.pegasus.imarticus.org/' +
                                      data.img
                                    }
                                  ></img>
                                </div>
                                <div className={style.cardhead}>
                                  <p>{data.heading}</p>
                                </div>
                                <div className={style.carddetails}>
                                  <p>{data.details.d1}</p>
                                  <p>{data.details.d2}</p>
                                  <p>{data.details.d3}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
              <div className={style.enrollbtn_leader}>
                <button className={style.enroll_button} onClick={toggleModal}>
                  <span className={style.enroll_buttontext}>
                    Prepare To Succeed
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* section best ============================================================= */}
          {/* {alert("Default facultyIndex ::: "+facultydataindex)} */}
          <div className={style.learn}>
            <div className={style.learnhead}>
              <h3>Learn From The Best</h3>
            </div>
            <div className={style.desktop}>
              <div className={style.learnStudent}>
                {dataArr.fsd.facultydatashow.map((data, index) => {
                  // alert(index + "index" + facultydataindex);
                  return (
                    <>
                      <div className={style.studentimg}>
                        {/* <img className={style.students} src='https://cdn.pegasus.imarticus.org/Fsd/s.webp'></img> */}

                        <img
                          id={`first-${index}`}
                          style={
                            index == facultydataindex
                              ? animeStyle
                              : { opacity: 0.5, transform: 'scale(1)' }
                          }
                          className={style.students}
                          src={data.img}
                          onClick={() => {
                            console.log(index, 'one')
                            setFacultydataindex(index)
                            setFacultydata(true)
                            setAnimeStyle({
                              opacity: '1',
                              transform: 'scale(1.5)',
                            })
                            // setImageopacity('1')
                            // setImagetransform('scale(1.5)')
                          }}
                        ></img>
                      </div>
                    </>
                  )
                })}
              </div>
              {facultydata && (
                <div>
                  <div className={style.studentname}>
                    <p>{dataArr.fsd.facultydatashow[facultydataindex].name}</p>
                  </div>
                  <div className={style.studentdetail}>
                    <p>
                      {
                        dataArr.fsd.facultydatashow[facultydataindex]
                          .description
                      }
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className={style.mobile}>
              <Swiper
                style={{ paddingBottom: '40px' }}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
                className="swiper-award-crousel2"
              >
                {dataArr.fsd.facultydatashow.map((data, index) => {
                  // alert(index + "index" + facultydataindex);
                  return (
                    <>
                      <SwiperSlide>
                        <div style={{ width: '500px' }}>
                          <div className={style.learnStudent}>
                            <div className={style.studentimg}>
                              {/* <img className={style.students} src='https://cdn.pegasus.imarticus.org/Fsd/s.webp'></img> */}
                              <img
                                className={style.students}
                                src={data.img}
                              ></img>
                            </div>
                          </div>
                          <div className={style.studentname}>
                            <p>{data.name}</p>
                          </div>
                          <div className={style.studentdetail}>
                            <p>
                              {aboutParent
                                ? data.description
                                : data.description.substring(0, 260)}
                              <span
                                className={styles.seeMore}
                                style={{ color: '#0f5644' }}
                                onClick={() => {
                                  setAboutParent((prev) => !prev)
                                  setFacultymobindex(index)
                                }}
                              >
                                ...See More
                              </span>
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  )
                })}
              </Swiper>
            </div>
          </div>

          {/* section career ========================================================= */}
          <div className={style.careersupport}>
            <div className={style.careermain}>
              <div className={style.careersupportsec}>
                <div className={style.leftcareersupport}>
                  <div className={style.careersupportheading}>
                    <h3>Grow with Imarticus learning</h3>
                  </div>
                  <div className={style.careersupportdata}>
                    <p>
                      We’re focused on giving you an integrated learning
                      experience. With our one-of-its-kind career support
                      services, we continue to support you as you take a step
                      into your career with a renewed perspective. Get access to
                      over 500+ placement partners and explore unlimited
                      opportunities.
                    </p>
                  </div>
                </div>
                <div className={style.desktop1}>
                  <div className={style.rightcareersupport}>
                    <div className={style.multicard}>
                      <div className={style.leftcol}>
                        <div className={style.jobcard}>
                          <div className={style.cardlogo}>
                            <img src="https://cdn.pegasus.imarticus.org/Fsd/icon1.webp"></img>
                          </div>
                          <div className={style.assurance}>
                            <p>Money Back Guarantee</p>
                          </div>
                          <div className={style.assurancedata}>
                            <p>
                              We’re confident about the benefits of our job
                              guarantee program, we will get you hired or we
                              will give you your money back.
                            </p>
                          </div>
                        </div>
                        <div className={style.jobcard}>
                          <div className={style.cardlogo}>
                            <img src="https://cdn.pegasus.imarticus.org/Fsd/ICON2.webp"></img>
                          </div>
                          <div className={style.assurance}>
                            <p>Profile Enhancement</p>
                          </div>
                          <div className={style.assurancedata}>
                            <p>
                              We assist you in building a robust portfolio to
                              ensure that your profile always catches the eye of
                              prospective employers.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={style.rightcol}>
                        <div className={style.jobcard}>
                          <div className={style.cardlogo}>
                            <img src="https://cdn.pegasus.imarticus.org/Fsd/ICON3.webp"></img>
                          </div>
                          <div className={style.assurance}>
                            <p>Resume Building</p>
                          </div>
                          <div className={style.assurancedata}>
                            <p>
                              Redesign your resume with professional help and
                              highlight your strengths in the best possible way.
                            </p>
                          </div>
                        </div>
                        <div className={style.jobcard}>
                          <div className={style.cardlogo}>
                            <img src="https://cdn.pegasus.imarticus.org/Fsd/ICON4.webp"></img>
                          </div>
                          <div className={style.assurance}>
                            <p>Interview Prep</p>
                          </div>
                          <div className={style.assurancedata}>
                            <p>
                              We’ve analysed the most commonly asked interview
                              questions and built a training module with mock
                              interviews that will confidently prepares you for
                              job interviews.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.mobile1}>
                  <Swiper
                    style={{}}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerGroup={1}
                    slidesPerView={'auto'}
                    className="testimonial-crousel-swiper"
                  >
                    {dataArr.fsd.careersupport.map((data) => {
                      return (
                        <SwiperSlide>
                          <>
                            <div style={{ width: '300px' }}>
                              <div className={style.jobcard}>
                                <div className={style.cardlogo}>
                                  <img
                                    src={
                                      'https://cdn.pegasus.imarticus.org/' +
                                      data.img
                                    }
                                  ></img>
                                </div>
                                <div className={style.assurance}>
                                  <p>{data.head}</p>
                                </div>
                                <div className={style.assurancedata}>
                                  <p>{data.data}</p>
                                </div>
                              </div>
                            </div>
                          </>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </div>
                <div className={style.tab1}>
                  <Swiper
                    spaceBetween={26}
                    style={{ paddingBottom: '10px' }}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerGroup={1}
                    slidesPerView={'auto'}
                    className="testimonial-crousel-swiper"
                  >
                    {dataArr.fsd.careersupport.map((data) => {
                      return (
                        <SwiperSlide>
                          <>
                            <div style={{ width: '300px' }}>
                              <div className={style.jobcard}>
                                <div className={style.cardlogo}>
                                  <img
                                    src={
                                      'https://cdn.pegasus.imarticus.org/' +
                                      data.img
                                    }
                                  ></img>
                                </div>
                                <div className={style.assurance}>
                                  <p>{data.head}</p>
                                </div>
                                <div className={style.assurancedata}>
                                  <p>{data.data}</p>
                                </div>
                              </div>
                            </div>
                          </>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>

          {/* hackathons ==================================================================== */}
          <div className={style.hackathons}>
            <div className={style.hackathonmain}>
              <div className={style.hackathonsections}>
                <div className={style.lefthackathon}>
                  <div className={style.participate}>
                    <h3>Participate in the national-level coding hackathon</h3>
                  </div>
                  <div className={style.participatePoints}>
                    {dataArr.fsd.hackathons.map((data) => {
                      return (
                        <div className={style.pointsection}>
                          <div className={style.tick}>
                            <img
                              src={
                                'https://cdn.pegasus.imarticus.org/' + data.img
                              }
                            ></img>
                          </div>
                          <div className={style.participatelist}>
                            <p>{data.list}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className={style.righthackathon}>
                  <div className={style.hackathonheading}>
                    <h3>Top 3 Hackathon Winners</h3>
                  </div>
                  <div className={style.hackathonwinners}>
                    <img src="https://cdn.pegasus.imarticus.org/Fsd/Hackathon.webp"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* program fees =============================================================================== */}
          <div className={style.programfees}>
            <div className={style.feemain}>
              <div className={style.feesections}>
                <div className={style.feeleft}>
                  <div className={style.fee}>
                    <div className={style.feeheading}>
                      <h3>Program Fee</h3>
                    </div>
                    <div className={style.amount}>
                      <p>₹ 1,19,000</p>
                    </div>
                    <div className={style.enquirebtn}>
                      <button
                        className={style.enquire_button}
                        onClick={toggleModal}
                      >
                        <span className={style.enquire_buttontext}>
                          Enquire Now
                        </span>
                      </button>
                    </div>
                  </div>
                  <hr className={style.divider}></hr>
                  <div className={style.emi}>
                    <div className={style.emiheading}>
                      <h3>EMI starting at</h3>
                    </div>
                    <div className={style.emiamount}>
                      <p>
                        ₹ 8,069<span>/month</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={style.feeright}>
                  <div className={style.feerightdetail}>
                    <div className={style.detailpara}>
                      <p>
                        We have partnered with the following financing companies
                        to provide competitive finance options at 0% interest
                        rate with no hidden costs
                      </p>
                    </div>
                    <div className={style.feepartner}>
                      <div className={style.bajaj}>
                        <img
                          className={style.bw2}
                          src="https://cdn.pegasus.imarticus.org/Fsd/Bajaj%20Finserv.webp"
                        ></img>
                      </div>
                      <div className={style.zest}>
                        <img
                          className={style.bw2}
                          src="https://cdn.pegasus.imarticus.org/Fsd/zest.webp"
                        ></img>
                      </div>
                    </div>
                    <div className={style.feetable}>
                      <table>
                        <tr>
                          <th>Registration Fees - Rs. 25,000 </th>
                          <th>Loan Amount - Rs. 94,000</th>
                        </tr>
                        <tr>
                          <td>
                            <span>Rs. 15,667</span>
                            <br /> 6-month EMI (Zero Cost EMI)
                          </td>
                          <td>
                            <span>Instalment 1</span> <br />
                            Rs.47,000 (Day 0){' '}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Rs. 10,445</span>
                            <br />
                            9-month EMI (Zero Cost EMI)
                          </td>
                          <td style={{ borderBottom: 'none' }}>
                            <span>Instalment 2</span> <br />
                            Rs.47,000 (Day 45)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Rs. 8,069</span>
                            <br /> 12-month EMI{' '}
                          </td>
                          <td style={{ borderTop: 'none' }}></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* faq ======================================================================== */}
          <div className={style.faq}>
            <div className={style.faqhead}>
              <h3>I have some questions</h3>
            </div>
            <h6 className={styles2.aboutProgram}>About The Program</h6>
            <Accordion>
              <Accordion.Item style={{ border: 'none !important' }}>
                <Accordion.Header style={{ borderBottom: '1px solid #E5E5E5' }}>
                  What is the learning methodology for this course and how is it
                  unique?
                </Accordion.Header>
                <Accordion.Body style={{ margin: '16px 20px' }}>
                  This program is a thoroughly engaging, full-time course
                  dedicated to helping you get a high-paying job in the
                  Software/IT industry. This is what your weekly learning plan
                  will look like:
                  <ul>
                    <li>
                      Monday to Thursday: Daily 3 hours of learning from the
                      faculty in online mode
                    </li>
                    <li>
                      Monday to Thursday: 1 hour of doubt resolution and support
                      session with the Teaching Assistant in online mode
                    </li>
                    <li>
                      Saturday & Sunday: Daily 2.5 hours of practice and
                      hands-on sessions by the Teaching Assistant in the
                      classroom/online mode
                    </li>
                  </ul>
                  <p>
                    As these sessions will be delivered live there will be
                    continuous engagement. You will be able to get your doubts
                    resolved immediately. You will get any additional support
                    from the TA. You will also learn from the queries asked by
                    your peers. You will work on multiple real-world projects to
                    sharpen your full-stack development skills. You will be
                    assessed regularly and the Program Manager will discuss your
                    progress to ensure you are on track with the agreed
                    objective.
                  </p>
                  <br></br>
                  <p>
                    We will also run coding challenges and hackathons through
                    our Community initiative – Skillenza - to create a
                    competitive learning environment and expose you to
                    real-world problems.{' '}
                  </p>
                  <br></br>
                  <p>
                    At the end of the program, you will get a personalised
                    learning track for interview preparations. You will polish
                    the key skills to prepare for interview opportunities.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {dataArr.fsd.QnA.map((data, ind) => {
              return (
                <Accordion>
                  <Accordion.Item
                    style={{ border: 'none !important' }}
                    eventKey={ind}
                  >
                    <Accordion.Header
                      style={{ borderBottom: '1px solid #E5E5E5' }}
                    >
                      {data.head}
                    </Accordion.Header>
                    <Accordion.Body style={{ margin: '16px 20px' }}>
                      {data.data}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              )
            })}

            <Accordion>
              <Accordion.Item
                eventKey="1"
                style={{ border: 'none !important' }}
              >
                <Accordion.Header style={{ borderBottom: '1px solid #E5E5E5' }}>
                  What is the refund policy?
                </Accordion.Header>
                <Accordion.Body style={{ margin: '16px 20px' }}>
                  You can check our refund policy{' '}
                  <a
                    style={{
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: '#3c4852',
                    }}
                    href="https://imarticus.org/refund-policy/"
                  >
                    here.
                  </a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item
                eventKey="1"
                style={{ border: 'none !important' }}
              >
                <Accordion.Header style={{ borderBottom: '1px solid #E5E5E5' }}>
                  What is a hackathon? How does it help?
                </Accordion.Header>
                <Accordion.Body style={{ margin: '16px 20px' }}>
                  A hackathon is an online competition where candidates solve a
                  complex business problem within a limited timeframe. Our
                  hackathons give you the opportunity to compete with numerous
                  students and stand out from the crowd. Hackathons are known to
                  inculcate a critical thinking capability in full-stack
                  aspirants and push them to perform better. Hiring managers
                  prefer to hire winners of such coding hackathons. You will
                  participate in two hackathons delivered by our Community
                  initiative – Skillenza.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item
                eventKey="1"
                style={{ border: 'none !important' }}
              >
                <Accordion.Header style={{ borderBottom: '1px solid #E5E5E5' }}>
                  How will the Program Manager help me during the program?
                </Accordion.Header>
                <Accordion.Body style={{ margin: '16px 20px' }}>
                  The program manager will work closely with you throughout the
                  course to facilitate a better learning experience by resolving
                  your queries and connecting you with trainers and industry
                  experts. They will also discuss your progress, grades,
                  attendance, and other key elements associated with your
                  progress. They will provide the guidance and support you need
                  to meet your career objectives.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <h6 className={styles2.aboutProgram}>Eligibility & Admission</h6>
            <Accordion>
              <Accordion.Item style={{ border: 'none !important' }}>
                <Accordion.Header style={{ borderBottom: '1px solid #E5E5E5' }}>
                  What are the eligibility criteria for admission?
                </Accordion.Header>
                <Accordion.Body style={{ margin: '16px 20px' }}>
                  You are eligible for the program if -<br></br>
                  You are a recent graduate/postgraduate in STEM (CS, IT,
                  Electronics) with >50% marks.
                  <br></br>
                  You are an experienced professional (up to 3 years) in
                  non-development IT roles (like QA, testers, and IT support)
                  <br></br> and your current salary is >4 LPA
                  <br></br>
                  Your profile will be reviewed to check eligibility and you
                  will have to pass the admission test.
                  <br></br>
                  Basic knowledge of at least 1 programming language is
                  mandatory for admission.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {dataArr.fsd.QnA2.map((data, ind) => {
              return (
                <Accordion>
                  <Accordion.Item
                    style={{ border: 'none !important' }}
                    eventKey={ind}
                  >
                    <Accordion.Header
                      style={{ borderBottom: '1px solid #E5E5E5' }}
                    >
                      {data.head}
                    </Accordion.Header>
                    <Accordion.Body style={{ margin: '16px 20px' }}>
                      {data.data}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              )
            })}

            <h6 className={styles2.aboutProgram}>
              Career Services And Placement
            </h6>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item
                eventKey="0"
                style={{ border: 'none !important' }}
              >
                <Accordion.Header style={{ borderBottom: '1px solid #E5E5E5' }}>
                  What is covered in the Career Services?
                </Accordion.Header>
                <Accordion.Body style={{ margin: '16px 20px' }}>
                  Our career services provide strong support to our students to
                  prepare themselves for job opportunities. It includes the
                  following:
                  <ul>
                    <li>
                      {' '}
                      Guaranteed Interview Opportunities: Attend multiple
                      interview opportunities with our hiring partners to get
                      the most suitable job for you.
                    </li>

                    <li>
                      Resume-building: Redesign your CV to create the best
                      profile and get noticed by hiring managers of your dream
                      job companies.
                    </li>

                    <li>
                      Profile Enhancement: Enhance your profile with a GitHub
                      project portfolio and Hackathon results, standing out in
                      the crowd.
                    </li>

                    <li>
                      Interview Preparation Workshop: Learn best practices,
                      practice interview questions and attend mock interview
                      rounds with our industry experts to ace the real
                      interviews.
                    </li>

                    <li>
                      Career Mentoring: Resolve all your career-related queries
                      in a 1:1 session with an industry expert.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion>
              <Accordion.Item
                eventKey="1"
                style={{ border: 'none !important' }}
              >
                <Accordion.Header style={{ borderBottom: '1px solid #E5E5E5' }}>
                  What are the eligibility criteria for placements?
                </Accordion.Header>
                <Accordion.Body style={{ margin: '16px 20px' }}>
                  In order to be eligible for job placement, candidates must
                  meet the following criteria:
                  <ul>
                    <li>
                      Overall grades should be at least 60% in the course
                      (candidates below 60% marks will not get a placement
                      guarantee)
                    </li>
                    <li>
                      Pass the mock interviews and capstone project evaluation
                    </li>
                    <li>
                      Have an average attendance of at least 80% for each module
                      of the course
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion>
              <Accordion.Item
                eventKey="1"
                style={{ border: 'none !important' }}
              >
                <Accordion.Header style={{ borderBottom: '1px solid #E5E5E5' }}>
                  How does the placement process work?
                </Accordion.Header>
                <Accordion.Body style={{ margin: '16px 20px' }}>
                  The students are assessed throughout the program and the
                  assessments are graded. Once the student has completed the
                  program, the final grades are published. All students meeting
                  the placement eligibility criteria get access to our placement
                  platform where the relevant jobs are posted. The students
                  should apply to every job and attend all interviews they are
                  shortlisted for (as directed by the career services team).
                  <br></br>
                  The student will also participate in career drives powered by
                  Skillenza. The career services period is valid for 6 months
                  after completion of the program. We will closely support the
                  students to ensure they get access to the right career
                  opportunities and get placed with a minimum salary of 5L in a
                  full-stack/software development job role.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion>
              <Accordion.Item
                eventKey="1"
                style={{ border: 'none !important' }}
              >
                <Accordion.Header style={{ borderBottom: '1px solid #E5E5E5' }}>
                  Can I get disqualified from career services during the Career
                  Services period?
                </Accordion.Header>
                <Accordion.Body style={{ margin: '16px 20px' }}>
                  The candidate will get disqualified for any placement support
                  if:
                  <ul>
                    <li>
                      The candidate fails any background check from their
                      previous employers/institutes
                    </li>
                    <li>
                      The candidate does not follow up with the recruiter for an
                      opportunity and is not present for a digital/in-person
                      interview{' '}
                    </li>
                    <li>
                      The candidate accepts a job opportunity outside the career
                      services platform before the 6-month guarantee period is
                      over
                    </li>
                    <li>
                      The candidate is not open to relocation to any other city
                      or turns down an offer because of work-from-office or
                      shift timings
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion>
              <Accordion.Item
                eventKey="1"
                style={{ border: 'none !important' }}
              >
                <Accordion.Header style={{ borderBottom: '1px solid #E5E5E5' }}>
                  What happens if I do not get any placement after completing
                  the program?
                </Accordion.Header>
                <Accordion.Body style={{ margin: '16px 20px' }}>
                  The candidate needs to complete the program and should have
                  applied for the jobs as described by the career services team.
                  If they have done everything and have not received an offer
                  for a qualifying position within the guaranteed period of 6
                  months from course completion, they are eligible for a fee
                  refund. They will have to fill out the refund request form.
                  The refund request form must be submitted to the career
                  services team within 30 days after the end of the career
                  services period. Refunds, upon approval, will be processed
                  within 30 business days to the original source of payment.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div
            style={{ maxWidth: '1450px', margin: '0 auto' }}
            className={style.similiarProgram_fsd}
          >
            {/* <SimilarPrograms
              propsdata={props.propsdata.allData}
              programid={'SimilarProgramTag_FSD'}
            /> */}
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Fsd

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
