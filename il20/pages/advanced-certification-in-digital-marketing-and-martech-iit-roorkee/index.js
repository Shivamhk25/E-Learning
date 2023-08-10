import React, { useRef, useEffect, useState } from 'react'
import { GetCourseLSKeyByPath } from '../../services/helper'
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles from '../../styles/pgB&F.module.css'
import styles2 from '../../styles/financial-services-capital-markets-management-program-iim-indore.module.css'
import style from '../../styles/iit_roorkee_dm.module.css'

import Image from 'next/image'
import { Accordion } from 'react-bootstrap'
import Header from '../../components/iit_roorkee_dm/Header'

import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/Formtype1-Nm-Em-Con-Loc'
import EmbeddedEnquireForm from '../../components/Forms/EmbedableForm1-Nm-Em-Con-Loc'
import PaymentModalTabs from '../../components/iit_roorkee_dm/PaymentModalTabs'
import SimilarPrograms from '../../components/pgBandF/SimilarPrograms'
import dataArr from '../../json/program.json'
import { configs, countryCodes } from '../../constants'
import { GetSpecificdata } from '../../services/helper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Navigation, Pagination } from 'swiper'

const Iim_Indore = (props) => {
  const [load, setLoad] = useState(false)

  const [formModal, setFormModal] = useState(false)
  const [paymentModal, setPaymentModal] = useState(false)
  const [facultyModal, setFacultyModal] = useState(false)
  const [studentModal, setStudentModal] = useState(false)
  const [seeMoreRightModal, setSeeMoreRightModal] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  const [brochureUrl, setBrochureUrl] = useState()
  const [facultyId, setFacultyId] = useState()
  const [aboutId, setAboutId] = useState()
  const [aboutParent, setAboutParent] = useState(false)
  const [aboutModal, setAboutModal] = useState(false)
  const [certificateModal, setCertificateModal] = useState(false)
  const [pagedata, setPagedata] = useState('')

  const INDEX_IN_PROGRAM = 4
  const PROGRAM =
    'IIT Roorkee Advanced Certification in Digital Marketing and MarTech'
  const PROGRAM_PATH_NAME =
    '/advanced-certification-in-digital-marketing-and-martech-iit-roorkee/'

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

  return (
    <>
      <Layout toggleModal={toggleModal} propsdata={props.propsdata.allData}>
        <Head>
          <title>
            Advanced Certification in Digital Marketing & MarTech By IIT Roorkee
            | Imarticus Learning
          </title>
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
            href="https://imarticus.org/advanced-certification-in-digital-marketing-and-martech-iit-roorkee/"
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
        {facultyModal && (
          <Modal toggleModal={facultyModal}>
            <div
              className={styles2.industry_project_popup_ctnr1}
              style={{ display: 'block', borderRadius: '8px' }}
            >
              <div
                onClick={() => {
                  setFacultyModal(false)
                }}
                style={{ float: 'right', padding: '20px 20px 0 0' }}
                role="button"
                class="close_arrow_pointer"
                tabindex="0"
              >
                <img
                  height="15"
                  width="15"
                  alt="close"
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/close.svg"
                />
              </div>
              <div className={styles2.FacultypopWeb}>
                <div
                  className={`row ${styles.facultyCard}`}
                  style={{ paddingBottom: '24px' }}
                >
                  <div
                    className="col-3 align-self-center"
                    style={{ width: '20%' }}
                  >
                    <a href=" ">
                      <img
                        style={{ borderRadius: '8px', width: '100%' }}
                        src={
                          'https://cdn.pegasus.imarticus.org/' +
                          dataArr.iitR_dm.faculty[facultyId].img
                        }
                      ></img>
                    </a>
                  </div>
                  <div className="col-9" style={{}}>
                    <p className={styles.cardTitle}>
                      {' '}
                      {dataArr.iitR_dm.faculty[facultyId].name}
                    </p>
                    <p
                      className={styles2.cardText1}
                      style={{ marginTop: '16px' }}
                    >
                      {dataArr.iitR_dm.faculty[facultyId].data}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={styles2.FacultypopMobile}
                style={{ paddingBottom: '24px' }}
              >
                <div style={{ width: '80px', heigh: '80px' }}>
                  <a href=" ">
                    <img
                      style={{ borderRadius: '8px' }}
                      src={
                        'https://cdn.pegasus.imarticus.org/' +
                        dataArr.iitR_dm.faculty[facultyId].img
                      }
                    ></img>
                  </a>
                </div>
                <div style={{ width: '80%' }}>
                  <p className={styles.cardTitle}>
                    {' '}
                    {dataArr.iitR_dm.faculty[facultyId].name}
                  </p>
                  <p
                    className={styles2.cardText1}
                    style={{ marginTop: '16px' }}
                  >
                    {dataArr.iitR_dm.faculty[facultyId].data}
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
                  src="https://cdn.pegasus.imarticus.org/iit_roorkee_dm/930700C.webp"
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                ></img>
              </div>
              <div className={styles2.certipopMobile}>
                <img
                  src="https://cdn.pegasus.imarticus.org/iit_roorkee_dm/IIt Dm-certificate 2 (1).webp"
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                ></img>
              </div>
            </div>
          </Modal>
        )}
        {aboutModal && (
          <Modal toggleModal={aboutModal}>
            <div
              className={styles2.industry_project_popup_ctnr1}
              style={{ display: 'block', borderRadius: '8px' }}
            >
              <div
                onClick={() => {
                  setAboutModal(false)
                }}
                style={{ float: 'right', padding: '20px 20px 0 0' }}
                role="button"
                class="close_arrow_pointer"
                tabindex="0"
              >
                <img
                  height="15"
                  width="15"
                  alt="close"
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/close.svg"
                />
              </div>

              <div className={styles2.FacultypopWeb}>
                <div className={`row`} style={{ padding: '20px' }}>
                  <div className="col-3 align-self-center">
                    <a href=" ">
                      <img
                        src={
                          'https://cdn.pegasus.imarticus.org/' +
                          dataArr.iitR_dm.faculty2[aboutId].img
                        }
                        style={{ width: '100%' }}
                      ></img>
                    </a>
                  </div>
                  <div className="col-9" style={{ padding: '12px 0' }}>
                    <p className={styles.cardTitle}>
                      {' '}
                      {dataArr.iitR_dm.faculty2[aboutId].name}
                    </p>
                    <p
                      className={styles.cardTitle}
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        lineHeight: '20px',
                        marginTop: '8px',
                      }}
                    >
                      {dataArr.iitR_dm.faculty2[aboutId].background}
                    </p>

                    <p
                      className={styles2.cardText1}
                      style={{
                        marginTop: '8px',
                      }}
                    >
                      {dataArr.iitR_dm.faculty2[aboutId].data}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={styles2.FacultypopMobile}
                style={{ paddingBottom: '24px' }}
              >
                <div style={{ width: '100px', height: '100px' }}>
                  <a href=" ">
                    <img
                      style={{ borderRadius: '8px' }}
                      src={
                        'https://cdn.pegasus.imarticus.org/' +
                        dataArr.iitR_dm.faculty2[aboutId].img
                      }
                    ></img>
                  </a>
                </div>
                <div style={{ marginTop: '8px', width: '90%' }}>
                  <p className={styles.cardTitle}>
                    {' '}
                    {dataArr.iitR_dm.faculty2[aboutId].name}
                  </p>
                  <p
                    className={styles.cardTitle}
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                      marginTop: '8px',
                    }}
                  >
                    {dataArr.iitR_dm.faculty2[aboutId].background}
                  </p>

                  <p
                    className={styles2.cardText1}
                    style={{
                      marginTop: '8px',
                    }}
                  >
                    {dataArr.iitR_dm.faculty2[aboutId].data}
                  </p>
                </div>
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
        <Header toggleModal={toggleModal} data={dataArr} propsdata={pagedata} />
        <div className={style.ourAlumni}>
          <h3 className={style.alumniHeader}>Our Alumni work at</h3>
          {load && (
            <div className={style.alumni}>
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
                  height: '140px',
                  paddingTop: '20px',
                }}
              >
                {dataArr.iitR_dm.alumini.map((img) => {
                  return (
                    <SwiperSlide>
                      <div
                        className="collaboration_carousal_main_div"
                        style={{ padding: '0px' }}
                      >
                        <div
                          className="collaborationcarousaldiv2"
                          style={{ padding: '0 10px', display: 'flex' }}
                        >
                          <Image
                            src={img.img}
                            height="56"
                            width="100"
                            objectFit="contain"
                            layout="fixed"
                            alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          )}
          <div
            className={
              styles.onMobileOnlyImg +
              ' row ' +
              styles.row +
              ' ' +
              styles2.ourPrograms_mobiles
            }
            style={{ paddingBottom: '48px' }}
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_dm/alumini.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_dm/alumini1.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_dm/alumini2.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_dm/alumini3.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_dm/alumini4.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_dm/alumini5.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>

                <tr
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%',
                    marginLeft: '23vw',
                  }}
                >
                  <td style={{ width: '100%' }}>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_dm/image115.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'rgba(221, 233, 237, 0.35)',
            width: '100%',
          }}
        >
          <div className={styles1.aboutcontainerdiv1}>
            <div className={style.aboutcontainerdiv2}>
              <div>
                <h2 className={styles2.aboutHeader}>
                  About Our Advanced Certification In Digital Marketing And
                  MarTech
                </h2>
              </div>
              <div>
                <p
                  className={styles1.aboutpara}
                  style={{
                    marginTop: '24px',
                    fontSize: '18px',
                    lineHeight: '24px',
                  }}
                >
                  In the era of digital transformation, businesses rely on
                  technology and digital channels to connect with existing and
                  potential consumers. Technological advancements are creating a
                  constant need for skilled professionals who are well versed in
                  digital marketing and possess the ability to learn and adapt
                  in an ever-changing field. We’ve created this up-to-date
                  digital marketing and MarTech course with IIT Roorkee for
                  digital marketing aspirants who want to learn the fundamentals
                  of digital marketing including social media, SEO and affiliate
                  marketing from a premier institution.
                </p>
              </div>
            </div>
            <div>
              <div className={style.uniqueMain}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  pagination={{ clickable: true }}
                  slidesPerGroup={1}
                  slidesPerView={'auto'}
                >
                  {dataArr.iitR_dm.about.map((data) => {
                    return (
                      <SwiperSlide>
                        <div className={styles2.aboutCard1}>
                          <div
                            className={styles2.aboutCard}
                            style={{
                              height: '326px',
                              marginTop: '0px',
                              position: 'relative',
                              overflow: 'auto',
                            }}
                          >
                            <div
                              style={{
                                width: '48px',
                                height: '48px',
                                position: 'relative',
                                margin: '16px 0px 0px 20px',
                              }}
                            >
                              <Image
                                layout="fill"
                                objectFit="contain"
                                src={data.img}
                              ></Image>
                            </div>
                            <div>
                              <p
                                className={styles1.aboutpara1}
                                style={{
                                  margin: '0px 12px 0px 20px',
                                  position: 'absolute',
                                  top: '80px',
                                }}
                              >
                                {data.head}
                              </p>
                            </div>
                            <div>
                              <p
                                className={styles1.aboutpara2}
                                style={{
                                  margin: '0px 12px 0px 20px',
                                  opacity: '.75',
                                  fontSize: '18px',
                                  lineHeight: '24px',
                                  position: 'absolute',
                                  top: '130px',
                                }}
                              >
                                {data.data}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </div>

            <div className={style.aboutEnquire} style={{ marginBottom: '0px' }}>
              <button
                onClick={toggleModal}
                className={style.partnerbutton}
                style={{ background: '#035642' }}
              >
                <span
                  className={styles1.partnerbuttontext}
                  style={{ color: 'white' }}
                >
                  Enquire Now
                </span>
              </button>
            </div>
            <div className={style.aboutContainer}>
              <div className={style.aboutContainer1}>
                <div className={style.aboutContainer13}>
                  <div className={style.aboutContainerImage}>
                    <img
                      src="https://cdn.pegasus.imarticus.org/iit_roorkee_dm/logo.webp"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                      }}
                    ></img>
                  </div>
                </div>
                <div
                  className={style.aboutContainer13}
                  style={{ marginTop: '0px' }}
                >
                  <div className={style.aboutContainer11}>
                    <div className={style.aboutContainerMain}>
                      <p className={style.aboutContainerMainHead}>#4</p>
                      <div className={style.aboutContainerMainHead1}>
                        <div className={style.aboutContainerMainRank}>
                          Overall Category
                        </div>
                        <div className={style.aboutContainerMainRank1}>
                          NIRF Ranking 2021
                        </div>
                      </div>
                    </div>
                    <div className={style.aboutContainerMain}>
                      <p className={style.aboutContainerMainHead}>#5</p>
                      <div className={style.aboutContainerMainHead1}>
                        <div className={style.aboutContainerMainRank}>
                          Management
                        </div>
                        <div className={style.aboutContainerMainRank1}>
                          NIRF Ranking 2021
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.aboutContainerMain1}>
                <p className={style.aboutContainerMain1para}>
                  {' '}
                  Discover premium education standards that set you apart:
                </p>
                <div className={style.aboutMargin}>
                  {dataArr.iitR_dm.uniqueData.map((data) => {
                    return (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          marginTop: '6px',
                        }}
                      >
                        <Image
                          src={'/iit_roorkee_dm/Group571.png'}
                          height="16"
                          width="16"
                          style={{ borderRadius: '4px' }}
                          layout="fixed"
                          objectFit="contain"
                        />
                        <p className={style.aboutContainerMain1para2}>
                          {data.data}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: 'white', width: '100%' }}>
          <div className={styles1.aboutcontainerdiv1}>
            <div className={style.aboutcontainerdiv2}>
              <div>
                <h3 className={styles2.aboutHeader}>
                  Looking for a Unique Digital Marketing and MarTech Course?
                </h3>
              </div>
              <div>
                <p
                  className={styles1.aboutpara}
                  style={{
                    marginTop: '24px',
                    fontSize: '18px',
                    lineHeight: '24px',
                  }}
                >
                  This 4.5-month digital marketing and MarTech program is
                  uniquely designed by the IIT faculty and industry leaders to
                  help you learn the functioning of the modern digital marketing
                  industry, the use of technology and digital marketing channels
                  like social media, emails, paid and organic search. This
                  comprehensive digital marketing course will enable you to
                  streamline your marketing processes, build digital marketing
                  strategies and provide means to help businesses reach their
                  target audience.
                </p>
              </div>
            </div>
            <div className={style.uniqueMain}>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
              >
                {dataArr.iitR_dm.unique.map((data, index) => {
                  return (
                    <SwiperSlide>
                      <div
                        className={styles2.aboutCard1}
                        style={{ overflow: 'auto' }}
                      >
                        <div
                          className={styles2.aboutCard}
                          style={{
                            border: '2px dashed #68C29D',
                            height: '376px',
                            position: 'relative',
                            marginTop: '0px',
                          }}
                        >
                          <div
                            style={{
                              width: '64px',
                              height: '64px',
                              position: 'relative',
                              margin: '36px 0px 0px 24px',
                            }}
                          >
                            <Image
                              layout="fill"
                              objectFit="contain"
                              src={data.img}
                            ></Image>
                          </div>
                          <div>
                            <p
                              className={styles1.aboutpara1}
                              style={{
                                margin: '0px 24px 0px 24px',
                                position: 'absolute',
                                top: '124px',
                              }}
                            >
                              {data.head}
                            </p>
                          </div>
                          <div>
                            <p
                              className={styles1.aboutpara2}
                              style={{
                                margin: '0px 24px 0px 24px',
                                opacity: '.75',
                                fontSize: '18px',
                                lineHeight: '24px',
                                position: 'absolute',
                                top: '188px',
                              }}
                            >
                              {data.data}
                            </p>
                          </div>
                        </div>
                        {index - 3 ? (
                          <div className={style.triangleMain}></div>
                        ) : (
                          <div
                            className={style.triangleMain}
                            style={{ display: 'none' }}
                          ></div>
                        )}
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>

            <div className={style.aboutEnquire}>
              <button
                onClick={toggleModal}
                className={style.partnerbutton}
                style={{ background: '#035642' }}
              >
                <span
                  className={styles1.partnerbuttontext}
                  style={{ color: 'white' }}
                >
                  Apply Here
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles2.curriculumHighlightss}>
          <div className={'row justify-content-between ' + styles.row}>
            <div className="col-lg-12 col-sm-12 align-self-start">
              <h3 className={styles.curriculumHeader}>Curriculum Highlights</h3>
            </div>
            <div
              className={
                'col-lg-12 col-sm-12 align-self-end ' +
                styles2.downloadBrochure_mobiles
              }
            >
              <button
                onClick={() =>
                  toggleModal({
                    download: true,
                    url: pagedata.brochureFileName,
                  })
                }
                className={`${styles.downloadBro} ${styles.button}`}
                style={{ height: '56px', alignItems: 'center' }}
              >
                Download Brochure{' '}
                <span
                  style={{
                    marginLeft: '16px',
                    marginTop: '6px',
                  }}
                >
                  <Image
                    src="/pgBandF/Download (9).webp"
                    width="24px"
                    height="24px"
                    layout="fixed"
                    objectFit="contain"
                  />
                </span>{' '}
              </button>
            </div>
          </div>
          <div className={'row ' + styles.row}>
            <div className="col-lg-8 col-sm-12">
              <div className={styles2.curriMobileMargin}>
                {dataArr.iitR_dm.course.map((data, index) => {
                  return (
                    <div>
                      <h3
                        style={{
                          fontFamily: 'Source Sans Pro',
                          fontStyle: 'normal',
                          fontWeight: 700,
                          fontSize: '28px',
                          lineHeight: '34px',
                          display: 'flex',
                          alignItems: 'center',
                          color: '#3C4852',
                          margin: '40px 0px 20px 0px',
                        }}
                      >
                        Module {index + 1}
                      </h3>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" style={{ border: 'none' }}>
                          <Accordion.Header style={{ background: '#E7F0F4' }}>
                            <div className={styles2.accHeader}>
                              <h3 className={styles2.accHeader1}>
                                {data.head}
                              </h3>

                              <p className={styles2.accHeader2}>
                                {data.duration}
                              </p>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className={styles2.accPara1}>
                              {data.data.map((data1) => {
                                return (
                                  <>
                                    {data1.data ? (
                                      <li style={{ fontWeight: '700' }}>
                                        {data1.data1}
                                      </li>
                                    ) : (
                                      <li>{data1.data1}</li>
                                    )}
                                  </>
                                )
                              })}
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={'col-lg-4 col-sm-12 ' + style.iitrdmembedableformf}>
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
          </div>
        </div>
        <div style={{ backgroundColor: 'white', width: '100%' }}>
          <div className={styles2.proMain}>
            <div className={style.projectHeaderDiv12}>
              <h4 className={styles2.projectheadermain}>
                Projects that you will work on{' '}
              </h4>
            </div>
            <div className={style.projectParaDiv12}>
              <p
                style={{
                  fontFamily: 'Source Sans Pro',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '18px',
                  lineHeight: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#3C4852',
                }}
              >
                Case studies give you a sneak peek into the marketing strategies
                being used by large brands to retain their competitive
                advantage. We have partnered with industrial stalwarts to
                understand their decision-making process and the resulting
                impact of their marketing strategies.
              </p>
            </div>
            <div className={style.projectMain}>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
              >
                {dataArr.iitR_dm.project.map((data) => {
                  return (
                    <SwiperSlide>
                      <div className={style.projectCard1}>
                        <div className={style.projectCard}>
                          <div className={style.projectCardImage}>
                            <Image
                              layout="fill"
                              objectFit="fill"
                              src={data.img}
                            ></Image>
                          </div>
                          <h4 className={style.projectCardHeader}>
                            {data.head}
                          </h4>

                          <div>
                            <p className={style.projectCardPara}>
                              {data.points.data}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>

            <div className={style.aboutEnquire}>
              <button
                className={style.partnerbutton}
                style={{ background: '#035642' }}
                onClick={toggleModal}
              >
                <span
                  className={styles1.partnerbuttontext}
                  style={{ color: 'white' }}
                >
                  Apply Here
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles1.partnercontainerdiv}>
          <div className={style.certificatecontainerdiv}>
            <div className={style.certiMainconatiner}>
              <div className={style.projectHeaderDiv}>
                <h3
                  className={styles2.projectheadermain}
                  style={{ color: 'white' }}
                >
                  Will i get certified?
                </h3>
              </div>
              <div className={style.projectParaDiv}>
                <p
                  style={{
                    fontFamily: 'Source Sans Pro',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                  }}
                >
                  Upon successfully completing this program, you’ll earn an
                  Advanced Certification in Digital Marketing and MarTech that
                  is co-branded by our knowledge partner, IIT Roorkee. This
                  Advanced Certification in Digital Marketing and MarTech will
                  add considerable value to your professional credentials.
                </p>
              </div>
              <div className={style.certicontainerdiv3}>
                <div className={styles1.certicontainerdiv4}>
                  <div>
                    <img
                      src="https://cdn.pegasus.imarticus.org/pgBandF/Group 784.webp"
                      style={{
                        borderRadius: '8px',
                        width: '56px',
                        height: '56px',
                      }}
                    ></img>
                  </div>
                  <div className={styles1.projecticontext}>
                    Earn your Certificate
                  </div>
                </div>
                <div className={styles1.certicontainerdiv4}>
                  <div>
                    <img
                      src="https://cdn.pegasus.imarticus.org/pgBandF/Group 785.webp"
                      style={{
                        borderRadius: '8px',
                        width: '56px',
                        height: '56px',
                      }}
                    ></img>
                  </div>
                  <div className={styles1.projecticontext}>
                    Share your Achievements
                  </div>
                </div>
              </div>
            </div>
            <div
              className={style.certificateMainleftimg}
              style={{ position: 'relative' }}
            >
              <img
                src="https://cdn.pegasus.imarticus.org/iit_roorkee_dm/930700C.webp"
                className={style.certificateleftimg}
              ></img>
              <img
                src="https://cdn.pegasus.imarticus.org/iit_roorkee_dm/IIt Dm-certificate 2 (1).webp"
                className={style.certificateleftimgMobile}
              ></img>
              <img
                src="https://cdn.pegasus.imarticus.org/iit_roorkee/zoom_out.webp"
                className={style.partnerZoom}
                onClick={() => {
                  setCertificateModal(true)
                }}
              ></img>
            </div>
          </div>
        </div>

        <div className={style.grow}>
          <h4 className={style.careerSupportHeader}>
            Grow with Imarticus Learning
          </h4>
          <p className={style.careerSupportText}>
            We are focused on giving you an integrated learning experience. With
            our one-of-its-kind career support services, we continue to support
            you as you take a step into your career with a renewed perspective.
            With our training, you will be able to explore unlimited
            opportunities in the digital marketing and MarTech sector.
          </p>
          <br />
          <br />
          <img
            className={styles.onWebImg}
            src="https://cdn.pegasus.imarticus.org/iit_roorkee_dm/Group1189.webp"
            style={{
              objectFit: 'contain',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}
          />
          <img
            className={styles.onTabImg}
            src="https://cdn.pegasus.imarticus.org/iit_roorkee_dm/Group1189.webp"
            style={{
              objectFit: 'contain',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}
          />
          <img
            className={styles.onMobileOnlyImg}
            src="https://cdn.pegasus.imarticus.org/iit_roorkee_dm/Mobileviewassest.webp"
            style={{ objectFit: 'contain', marginTop: '-20px' }}
            height="940px"
            width="100%"
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={() =>
                toggleModal({
                  download: true,
                  url: 'https://cdn.pegasus.imarticus.org/brochure/Annual-Placement-Report-2020-2021.pdf',
                })
              }
              className={`${styles.button} ${style.growMargin} `}
            >
              Download Career Report{' '}
              <img src="https://cdn.pegasus.imarticus.org/pgBandF/Download (9).webp" />{' '}
            </button>
          </div>
        </div>

        <div className={style.faculty}>
          <h5 className={style.facultyHead}>Faculty</h5>
          <div className={style.facultyWeb}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
              spaceBetween={30}
              className="light-grey-color-swiper"
            >
              {dataArr.iitR_dm.faculty.map((data, index) => {
                return (
                  <SwiperSlide>
                    <div
                      className="card"
                      style={{ borderRadius: '8px', overflow: 'auto' }}
                    >
                      <div className={styles2.facultyCard4}>
                        <div
                          className={styles1.facultyCard4Image}
                          style={{
                            padding: '8px 0px 0px 8px',
                            width: '35%',
                            height: '100%',
                          }}
                        >
                          <img
                            src={
                              'https://cdn.pegasus.imarticus.org/' + data.img
                            }
                            style={{
                              borderRadius: '8px',
                              height: '80%',
                              width: '100%',
                              objectFit: 'fill',
                            }}
                          ></img>
                        </div>
                        <div
                          className=""
                          style={{
                            padding: '24px 18px 8px 16px',
                            width: '100%',
                          }}
                        >
                          <p className={styles.cardTitle}>{data.name}</p>
                          {/* <p
                          className={styles.cardTitle}
                          style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '20px',
                          }}
                        >
                          {data.department}
                        </p> */}
                          {/* <p
                          className={styles.cardTitle}
                          style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '20px',
                          }}
                        >
                          {data.college}
                        </p> */}
                          <p
                            className={styles.cardText}
                            style={{ marginTop: '10px' }}
                          >
                            {data.data.substring(0, 350)}
                            <span
                              className={styles.seeMore}
                              style={{ color: '#0f5644' }}
                              onClick={() => {
                                setFacultyId(index)
                                setFacultyModal(true)
                                console.log(facultyId)
                              }}
                            >
                              {data.data.length < 350 ? '' : '...See More'}
                            </span>
                          </p>
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
          <div
            className={styles1.facultyMobile1}
            style={{ paddingLeft: '16px' }}
          >
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
            >
              {dataArr.iitR_dm.faculty.map((data, index) => {
                return (
                  <SwiperSlide>
                    <div className={styles2.facultyNewCard1}>
                      <div className={styles2.facultyNewCard}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: '16px',
                          }}
                        >
                          <img
                            style={{
                              width: '130px',
                              height: '150px',
                              objectFit: 'fill',
                              borderRadius: '8px',
                            }}
                            src={
                              'https://cdn.pegasus.imarticus.org/' + data.img
                            }
                          ></img>
                        </div>

                        <h4
                          style={{
                            fontFamily: 'Source Sans Pro',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '18px',
                            lineHeight: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#3C4852',
                            margin: '10px 0px 0px 20px',
                          }}
                        >
                          {data.name}
                        </h4>
                        {/* <p
                          style={{
                            fontFamily: 'Source Sans Pro',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#3C4852',
                            marginLeft: '20px',
                          }}
                        >
                          {data.department}
                        </p>
                        <p
                          style={{
                            fontFamily: 'Source Sans Pro',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#3C4852',
                            marginLeft: '20px',
                          }}
                        >
                          {data.college}
                        </p> */}
                        <p
                          className={styles1.partnerpara2}
                          style={{
                            margin: '10px 10px 0px 20px',
                            fontSize: '14px',
                            lineHeight: '20px',
                          }}
                        >
                          {data.data.substring(0, 270)}
                          <span
                            className={styles.seeMore}
                            style={{ color: '#035642' }}
                            onClick={() => {
                              setFacultyId(index)
                              setFacultyModal(true)
                              console.log(facultyId)
                            }}
                          >
                            {data.data.length < 270 ? '' : '...See More'}
                          </span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>

        <div className={styles1.partnercontainerdiv}>
          <h4 className={style.facultyHeader}>
            About the IIT Roorkee - Imarticus Learning Partnership
          </h4>
          <div className={style.facultyMain}>
            {dataArr.iitR_dm.faculty2.map((data, index) => {
              return (
                <div className={style.partnerCard}>
                  <div className={style.partnerImage}>
                    <img
                      style={{
                        objectFit: 'fill',
                        width: '100%',
                        height: '100%',
                        borderRadius: '8px',
                      }}
                      src={'https://cdn.pegasus.imarticus.org/' + data.img}
                    ></img>
                  </div>
                  <div className={style.partnerCard1}>
                    <h4 className={styles1.partnerheader}>{data.name}</h4>
                    <p className={style.partnerpara3}>{data.background}</p>
                    {/* <div className={styles2.partnerWeb}>
                      <p className={styles2.partnerpara2}>
                        {data.head}
                        <span
                              className={styles.seeMore}
                              style={{ color: '#0f5644' }}
                              onClick={() => {
                                setAboutId(index)
                                setAboutModal(true)
                              }}
                            >
                              ...See More
                            </span>
                      </p>
                    </div> */}
                    <div className={style.partnerWeb2}>
                      <p className={style.partnerpara2}>
                        {data.data.substring(0, 130)}
                        <span
                          className={styles.seeMore}
                          style={{ color: '#0f5644' }}
                          onClick={() => {
                            setAboutId(index)
                            setAboutModal(true)
                          }}
                        >
                          ...See More
                        </span>
                      </p>
                    </div>
                    <div className={style.partnerMobile}>
                      <p className={style.partnerpara2}>
                        {data.data.substring(0, 210)}
                        <span
                          className={styles.seeMore}
                          style={{ color: '#0f5644' }}
                          onClick={() => {
                            setAboutId(index)
                            setAboutModal(true)
                          }}
                        >
                          ...See More
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={style.feeSection}>
          <div className={styles.feeOuter}>
            <p className={styles2.feeHead}>Program Fee</p>
            <p className={styles2.fee}>₹1,25,000 + GST </p>
            {/* <p className={styles.fee} style={{ fontSize: '40px' }}>
              (Inclusive of all taxes)
            </p> */}
            <p
              className={styles2.viewPlans}
              onClick={openPaymentModal}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              View Payment Plans
            </p>
          </div>
          <br />
          <br />

          <button
            onClick={toggleModal}
            className={`${styles.enquireNow} ${styles.button}`}
            style={{
              width: '180px',
              height: '56px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            Enquire now
          </button>
        </div>
        <div className={styles2.QaMain}>
          <h5 className={styles.facultyHead}>Wait! I have some questions</h5>

          <h6 className={styles2.aboutProgram}>About Program</h6>

          {dataArr.iitR_dm.QnA.map((data, ind) => {
            return (
              <Accordion>
                <Accordion.Item eventKey={ind}>
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

          <h6 className={styles2.aboutProgram}>Program Fees</h6>
          {dataArr.iitR_dm.QnA2.map((data, ind) => {
            return (
              <Accordion>
                <Accordion.Item eventKey={ind}>
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
        </div>
        <div className={styles2.similiarProgram}>
          <SimilarPrograms
            propsdata={props.propsdata.allData}
            programid={'MARKETING'}
          />
        </div>
      </Layout>
    </>
  )
}
export default Iim_Indore

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
