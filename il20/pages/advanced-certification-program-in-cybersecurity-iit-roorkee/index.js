import React, { useRef, useEffect, useState } from 'react'
import { GetCourseLSKeyByPath } from '../../services/helper'
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles from '../../styles/pgB&F.module.css'
import styles2 from '../../styles/financial-services-capital-markets-management-program-iim-indore.module.css'
import style from '../../styles/iit_roorkee_dm.module.css'
import style1 from '../../styles/iit_roorkee_cybersecurity.module.css'
import Image from 'next/image'
import { Accordion } from 'react-bootstrap'
import Header from '../../components/iit_roorkee_cs/Header'

import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/Formtype1-Nm-Em-Con-Loc'
import EmbeddedEnquireForm from '../../components/Forms/EmbedableForm1-Nm-Em-Con-Loc'
import PaymentModalTabs from '../../components/iit_roorkee_cs/Payment.Modal.Tabs'
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

const iit_roorkee_cs = (props) => {
  const [load, setLoad] = useState(false)

  const [formModal, setFormModal] = useState(false)
  const [paymentModal, setPaymentModal] = useState(false)
  const [facultyModal, setFacultyModal] = useState(false)
  const [studentModal, setStudentModal] = useState(false)
  const [csProgramModal, setCsProgramModal] = useState(false)
  const [seeMoreRightModal, setSeeMoreRightModal] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  const [brochureUrl, setBrochureUrl] = useState()
  const [facultyId, setFacultyId] = useState()
  const [aboutId, setAboutId] = useState()
  const [aboutParent, setAboutParent] = useState(false)
  const [aboutModal, setAboutModal] = useState(false)
  const [certificateModal, setCertificateModal] = useState(false)
  const [pagedata, setPagedata] = useState('')

  const INDEX_IN_PROGRAM = 3
  const PROGRAM = 'IIT Roorkee Advanced Certification Program in Cybersecurity'
  const PROGRAM_PATH_NAME =
    '/advanced-certification-program-in-cybersecurity-iit-roorkee/'

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
            href="https://imarticus.org/advanced-certification-program-in-cybersecurity-iit-roorkee/"
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
        {studentModal && (
          <Modal toggleModal={studentModal}>
            <div
              className="industry-project-popup-ctnr"
              style={{ display: 'block' }}
            >
              <div
                onClick={() => {
                  setStudentModal(false)
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

              <div className={`row ${styles.facultyCard}`}>
                <div className="col-3 align-self-center">
                  <a href=" ">
                    <img
                      src={
                        'https://cdn.pegasus.imarticus.org/' +
                        dataArr.iit_roorkee_cs.testimonials[facultyId].imgMore
                      }
                    ></img>
                  </a>
                </div>
                <div className="col-9" style={{ padding: '12px 0' }}>
                  <p className={styles.cardTitle}>
                    {' '}
                    {dataArr.iit_roorkee_cs.testimonials[facultyId].name}
                  </p>
                  <p
                    className={styles.cardTitle}
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      lineHeight: '20px',
                    }}
                  >
                    {dataArr.iit_roorkee_cs.testimonials[facultyId].company}
                  </p>

                  <p className={styles.cardText}>
                    {dataArr.iit_roorkee_cs.testimonials[facultyId].content}
                  </p>
                </div>
              </div>
            </div>
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
                          dataArr.iit_roorkee_cs.faculty[facultyId].img
                        }
                      ></img>
                    </a>
                  </div>
                  <div className="col-9" style={{}}>
                    <p className={styles.cardTitle}>
                      {' '}
                      {dataArr.iit_roorkee_cs.faculty[facultyId].name}
                    </p>
                    <p className={styles.cardTitle}>
                      {' '}
                      {dataArr.iit_roorkee_cs.faculty[facultyId].desg}
                    </p>
                    <p
                      className={styles2.cardText1}
                      style={{ marginTop: '16px' }}
                    >
                      {dataArr.iit_roorkee_cs.faculty[facultyId].data}
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
                        dataArr.iit_roorkee_cs.faculty[facultyId].img
                      }
                    ></img>
                  </a>
                </div>
                <div style={{ width: '80%' }}>
                  <p className={styles.cardTitle}>
                    {' '}
                    {dataArr.iit_roorkee_cs.faculty[facultyId].name}
                  </p>
                  <p className={styles.cardTitle}>
                    {' '}
                    {dataArr.iit_roorkee_cs.faculty[facultyId].desg}
                  </p>
                  <p
                    className={styles2.cardText1}
                    style={{ marginTop: '16px' }}
                  >
                    {dataArr.iit_roorkee_cs.faculty[facultyId].data}
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        )}

        {csProgramModal && (
          <Modal toggleModal={csProgramModal}>
            <div
              className={styles2.industry_project_popup_ctnr_cs}
              style={{ display: 'block', borderRadius: '8px' }}
            >
              <div
                onClick={() => {
                  setCsProgramModal(false)
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
                  <div className="col-12" style={{}}>
                    <p
                      className={styles2.cardText1}
                      style={{ marginTop: '16px' }}
                    >
                      {dataArr.iit_roorkee_cs.about[facultyId].data}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={styles2.FacultypopMobile}
                style={{ paddingBottom: '24px' }}
              >
                <div style={{ width: '80px', heigh: '80px' }}></div>
                <div style={{ width: '80%' }}>
                  <p
                    className={styles2.cardText1}
                    style={{ marginTop: '16px' }}
                  >
                    {dataArr.iit_roorkee_cs.about[facultyId].data}
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
                  src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Web_certificate.webp"
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                ></img>
              </div>
              <div className={styles2.certipopMobile}>
                <img
                  src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Web_certificate.webp"
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
                          dataArr.iit_roorkee_cs.faculty2[aboutId].img
                        }
                        style={{ width: '100%' }}
                      ></img>
                    </a>
                  </div>
                  <div className="col-9" style={{ padding: '12px 0' }}>
                    <p className={styles.cardTitle}>
                      {' '}
                      {dataArr.iit_roorkee_cs.faculty2[aboutId].name}
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
                      {dataArr.iit_roorkee_cs.faculty2[aboutId].background}
                    </p>

                    <p
                      className={styles2.cardText1}
                      style={{
                        marginTop: '8px',
                      }}
                    >
                      {dataArr.iit_roorkee_cs.faculty2[aboutId].data}
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
                        dataArr.iit_roorkee_cs.faculty2[aboutId].img
                      }
                    ></img>
                  </a>
                </div>
                <div style={{ marginTop: '8px', width: '90%' }}>
                  <p className={styles.cardTitle}>
                    {' '}
                    {dataArr.iit_roorkee_cs.faculty2[aboutId].name}
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
                    {dataArr.iit_roorkee_cs.faculty2[aboutId].background}
                  </p>

                  <p
                    className={styles2.cardText1}
                    style={{
                      marginTop: '8px',
                    }}
                  >
                    {dataArr.iit_roorkee_cs.faculty2[aboutId].data}
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
        <Header toggleModal={toggleModal} pagedata={pagedata} />
        <div className={style.ourAlumni}>
          <h3 className={style.alumniHeader}>Our Alumni work at</h3>
          <div className={style.alumni}>
            <Swiper
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              slidesPerView={10}
              style={{ paddingBottom: '45px', paddingTop: '40px' }}
            >
              {dataArr.iit_roorkee_cs.alumini.map((img) => {
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
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_cs/ey1.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Group.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Group_2826.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Group_2908.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_cs/image_9.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_cs/image_114.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_cs/pwc_1.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Vector.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>

                {/* <tr
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '50%',
                    marginLeft: '23vw',
                  }}
                >
                  <td style={{ width: '100%' }}>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_dm/image%20115%20(1).webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td style={{ width: '100%' }}>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iit_roorkee_dm/image%20115%20(1).webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr> */}
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
                  About Our Advanced Certification Program in Cyber Security
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
                  Our Advanced Certification Program in Cyber Security will
                  prepare you for an exciting cyber security career by teaching
                  you networking and information security fundamentals, ethical
                  hacking, cloud security, application security and incident
                  handling. Created in partnership with CEC, IIT Roorkee, this
                  program will equip you with the most in-demand security tools
                  and skills. With rigorous lab sessions on real-world problems
                  throughout the course, you will explore the world of ethical
                  hacking, cloud security, application security and network
                  security.
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
                  {dataArr.iit_roorkee_cs.about.map((data, index) => {
                    return (
                      <SwiperSlide>
                        <div className={styles2.aboutCard1}>
                          <div
                            className={styles2.aboutCard}
                            style={{
                              height: '408px',
                              marginTop: '0px',
                              position: 'relative',
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
                              <p className={styles1.aboutpara1_cs}>
                                {data.head + '                          '}
                              </p>
                            </div>
                            <div>
                              <p
                                className={styles1.aboutpara2_cs}
                                style={{ marginTop: '32px' }}
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
            <div className={style1.aboutContainer}>
              <div className={style1.aboutContainer1}>
                <div className={style1.aboutContainer13}>
                  <div className={style1.aboutContainerImage}>
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
                  className={style1.aboutContainer13}
                  style={{ marginTop: '0px' }}
                >
                  <div className={style1.aboutContainer11}>
                    <div className={style1.aboutContainerMain}>
                      <p className={style1.aboutContainerMainHead}>#6</p>
                      <div className={style1.aboutContainerMainHead1}>
                        <div className={style1.aboutContainerMainRank}>
                          Engineering
                        </div>
                        <div className={style1.aboutContainerMainRank1}>
                          NIRF Ranking 2021
                        </div>
                      </div>
                    </div>
                    <div className={style1.aboutContainerMain}>
                      <p className={style1.aboutContainerMainHead}>#7</p>
                      <div className={style1.aboutContainerMainHead1}>
                        <div className={style1.aboutContainerMainRank}>
                          Overall
                        </div>
                        <div className={style1.aboutContainerMainRank1}>
                          NIRF Ranking 2021
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style1.aboutContainerMain1}>
                <p className={style1.aboutContainerMain1para}>
                  {' '}
                  Discover premium education standards that set you apart:
                </p>
                <div className={style1.aboutMargin}>
                  {dataArr.iit_roorkee_cs.listItem.map((data) => {
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
                {dataArr.iit_roorkee_cs.course.map((data, index) => {
                  return (
                    <div>
                      <h1
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
                      </h1>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" style={{ border: 'none' }}>
                          <Accordion.Header style={{ background: '#E7F0F4' }}>
                            <div className={styles2.accHeader}>
                              <h1 className={styles2.accHeader1}>
                                {data.head}
                              </h1>

                              {/* <p className={styles2.accHeader2}>
                                {data.duration}
                              </p> */}
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className={styles2.accPara1}>
                              {data.data.map((data1) => {
                                return (
                                  <>
                                    {data1.data ? (
                                      <li
                                        style={{
                                          fontWeight: '400',
                                          fontSize: '18px',
                                        }}
                                      >
                                        {data1.data1}
                                      </li>
                                    ) : (
                                      <li
                                        style={{
                                          fontWeight: '400',
                                          fontSize: '18px',
                                        }}
                                      >
                                        {data1.data1}
                                      </li>
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
            <div
              className={'col-lg-4 col-sm-12 ' + style1.iitrcybersecurityform}
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
          </div>
        </div>

        <div className={style1.tools}>
          <div className={style1.toolheading}>
            <h2>Tools Covered</h2>
          </div>
          <div className={style1.desktop}>
            <div className={style1.toolimages}>
              <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/burpsuite.webp"></img>
              <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/tor.webp"></img>
              <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Aircrack.svg"></img>
              <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/metasploit_rapid7_banner_1.webp"></img>
              <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/qualys.webp"></img>
            </div>
          </div>
          <div className={style1.mobile}>
            <Swiper
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              slidesPerView={'auto'}
            >
              {dataArr.iit_roorkee_cs.language_img.map((img) => {
                return (
                  <SwiperSlide>
                    <div style={{ width: '300px' }}>
                      <div className={style1.toolimages}>
                        <img
                          src={'https://cdn.pegasus.imarticus.org/' + img.img}
                        ></img>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>

        <div className={style1.section6}>
          <div className={style1.heading}>
            <h2>Projects that you will work on </h2>
          </div>
          <div className={style1.sec6data}>
            <p>
              You will work on various real-world business projects throughout
              the course to learn how to apply cyber security techniques and
              technology. The following are some examples of potential projects.
            </p>
          </div>
          <div className={style1.desktop_project}>
            <div className={style1.mainsec6}>
              <div className={style1.maincard}>
                <div className={style1.mainimg}>
                  <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Rectangle_165.webp"></img>
                </div>
                <div className={style1.cardsec}>
                  <div className={style1.cardheading}>
                    <h3>Design automated operating detector on the network</h3>
                  </div>
                  <div className={style1.carddata}>
                    <p>
                      Recognise Operating System present at devices in a
                      network. Using TCP/IP stack fingerprinting by crafting
                      custom TCP and UDP packets and analysing their responses.
                      It can also be used for analyzing vendor name, OS name, OS
                      generation, device type etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className={style1.maincard}>
                <div className={style1.mainimg}>
                  <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Rectangle%20382.webp"></img>
                </div>
                <div className={style1.cardsec}>
                  <div className={style1.cardheading}>
                    <h3>Build port scanner</h3>
                  </div>
                  <div className={style1.carddata}>
                    <p>
                      Building a port scanner that can probe a server or host
                      for open ports. This application should have capabilities
                      to verify the security policies of the networks and
                      identify network services running on a host.
                    </p>
                  </div>
                </div>
              </div>
              <div className={style1.maincard}>
                <div className={style1.mainimg}>
                  <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Rectangle_385.webp"></img>
                </div>
                <div className={style1.cardsec}>
                  <div className={style1.cardheading}>
                    <h3>
                      Automated browser/ system credential dumper hardware
                    </h3>
                  </div>
                  <div className={style1.carddata}>
                    <p>
                      An automated tool that can be planted on HID device to
                      retrieve lots of passwords stored on a local computer.
                      Each software stores its passwords using different
                      techniques (plaintext, APIs, custom algorithms, databases,
                      etc.).
                    </p>
                  </div>
                </div>
              </div>
              <div className={style1.maincard}>
                <div className={style1.mainimg}>
                  <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Rectangle%20388.webp"></img>
                </div>
                <div className={style1.cardsec}>
                  <div className={style1.cardheading}>
                    <h3>Keylogger</h3>
                  </div>
                  <div className={style1.carddata}>
                    <p>
                      Developing Keylogger that should not be detected by
                      security program in the world. Keyloggers are programs
                      used to silently record keystrokes that can be part of a
                      parental control program or as a nefarious program used by
                      remote hackers to steal information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style1.mobile_project}>
            <div className={style1.mainsec6}>
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
                spaceBetween={30}
                className="testimonial-crousel-swiper"
              >
                <SwiperSlide>
                  <div className={style1.maincard}>
                    <div className={style1.mainimg}>
                      <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Rectangle_165.webp"></img>
                    </div>
                    <div className={style1.cardsec}>
                      <div className={style1.cardheading}>
                        <h3>
                          Design automated operating detector on the network
                        </h3>
                      </div>
                      <div className={style1.carddata}>
                        <p>
                          Recognise Operating System present at devices in a
                          network. Using TCP/IP stack fingerprinting by crafting
                          custom TCP and UDP packets and analysing their
                          responses. It can also be used for analyzing vendor
                          name, OS name, OS generation, device type etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={style1.maincard}>
                    <div className={style1.mainimg}>
                      <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Rectangle%20382.webp"></img>
                    </div>
                    <div className={style1.cardsec}>
                      <div className={style1.cardheading}>
                        <h3>Build port scanner</h3>
                      </div>
                      <div className={style1.carddata}>
                        <p>
                          Building a port scanner that can probe a server or
                          host for open ports. This application should have
                          capabilities to verify the security policies of the
                          networks and identify network services running on a
                          host.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={style1.maincard}>
                    <div className={style1.mainimg}>
                      <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Rectangle_385.webp"></img>
                    </div>
                    <div className={style1.cardsec}>
                      <div className={style1.cardheading}>
                        <h3>
                          Automated browser/ system credential dumper hardware
                        </h3>
                      </div>
                      <div className={style1.carddata}>
                        <p>
                          An automated tool that can be planted on HID device to
                          retrieve lots of passwords stored on a local computer.
                          Each software stores its passwords using different
                          techniques (plaintext, APIs, custom algorithms,
                          databases, etc.).
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={style1.maincard}>
                    <div className={style1.mainimg}>
                      <img src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Rectangle%20388.webp"></img>
                    </div>
                    <div className={style1.cardsec}>
                      <div className={style1.cardheading}>
                        <h3>Keylogger</h3>
                      </div>
                      <div className={style1.carddata}>
                        <p>
                          Developing Keylogger that should not be detected by
                          security program in the world. Keyloggers are programs
                          used to silently record keystrokes that can be part of
                          a parental control program or as a nefarious program
                          used by remote hackers to steal information.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div
            style={{ marginBottom: '0px !important' }}
            className={style.aboutEnquire}
          >
            <button className={styles1.partnerbutton} onClick={toggleModal}>
              <span className={styles1.partnerbuttontext}>Apply Here</span>
            </button>
          </div>
        </div>
        {/* <div style={{ backgroundColor: 'white', width: '100%' }}>
          <div className={styles2.proMain}>
            <div className={style.projectHeaderDiv12}>
              <h4 className={styles2.projectheadermain}>
                Projects that you will work on{' '}
              </h4>
            </div>
            <div className={style1.projectParaDiv12}>
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
                You will work on various real-world business projects throughout the course to learn how to apply cyber security techniques and technology. The following are some examples of potential projects.
              </p>
            </div>
            <div className={style1.projectMain}>
            </div>
            <div className={styles2.weba_new_controls1}>
              <div
                tabIndex={0}
                role="button"
                onClick={() => ref5.current.prev()}
                className="web-prev-button"
                style={{ marginRight: '24px' }}
              >
                <Image
                  src="/imarticus_2/awardarrow.svg"
                  width="40px"
                  height="40px"
                  layout="fixed"
                  className="leftArrow"
                />
              </div>
              <div
                tabIndex={1}
                role="button"
                onClick={() => ref5.current.next()}
                className="web-next-button"
              >
                <Image
                  src="/imarticus_2/awardarrow.svg"
                  width="40px"
                  height="40px"
                  layout="fixed"
                />
              </div>
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
        </div> */}
        <div
          className={
            styles.whatCanIBecome +
            ' ' +
            styles.paddingGLobalOnWeb +
            ' ' +
            styles.paddingOnMobile +
            ' ' +
            styles.paddingOnTab
          }
          style={{ paddingTop: '104px', paddingBottom: '104px' }}
        >
          <p
            className={styles.alumniHeader}
            style={{ marginBottom: '64px !important' }}
          >
            What Can I Become?
          </p>
          <div className={'row ' + styles.row}>
            <div className="col-lg-5 col-sm-12">
              <img
                src="https://cdn.pegasus.imarticus.org/pgBandF/icon-Frame%20(1).webp"
                width="100%"
                height="452px"
                className={styles.imageOnSmaller}
              />
            </div>
            <div className="col-lg-7 col-sm-12">
              <div className={'row ' + styles.row + ' ' + styles.onTabMt_50}>
                <div
                  style={{ textTransform: 'uppercase' }}
                  className={`${styles.tags}`}
                >
                  IT Security Analyst
                </div>
                <div
                  style={{ textTransform: 'uppercase' }}
                  className={`${styles.tags}`}
                >
                  Security Analyst
                </div>
                <div
                  style={{ textTransform: 'uppercase' }}
                  className={`${styles.tags}`}
                >
                  Penetration Tester
                </div>
                <div
                  style={{ textTransform: 'uppercase' }}
                  className={`${styles.tags}`}
                >
                  Cloud Security Analyst
                </div>
                <div
                  style={{ textTransform: 'uppercase' }}
                  className={`${styles.tags}`}
                >
                  Cyber Security Consultant
                </div>
                <div
                  style={{ textTransform: 'uppercase' }}
                  className={`${styles.tags}`}
                >
                  Network Security Engineer
                </div>
                <div
                  style={{ textTransform: 'uppercase' }}
                  className={`${styles.tags}`}
                >
                  Application Security Analyst
                </div>
              </div>
              <div
                style={{ paddingTop: '72px' }}
                className={'row ' + styles.row + ' ' + styles.onWebImg}
              >
                <img
                  src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Group635w.webp"
                  width={'100%'}
                  height={'190px'}
                  alt="image"
                />
              </div>
              <div
                className={'row ' + styles.row + ' ' + styles.onMobileOnlyImg}
                style={{ marginTop: '20px' }}
              >
                <img
                  src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Group1372_m.webp"
                  width={'100%'}
                  height={'192px'}
                  alt="image"
                />
              </div>
            </div>
          </div>

          <button
            onClick={toggleModal}
            className={`${styles.applyHere_cs} ${styles.button}`}
          >
            Sign Up
          </button>
        </div>

        <div className={styles1.partnercontainerdiv}>
          <div className={style.certificatecontainerdiv_cs}>
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
                  Advanced Certification Program in Cyber Security co-branded by
                  CEC, IIT Roorkee. This advanced certification in cyber
                  security will add considerable value to your professional
                  credentials.
                </p>
              </div>
              <div className={style.certicontainerdiv3_cs}>
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
                src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Web_certificate.webp"
                className={style1.certificateleftimg}
              ></img>
              <img
                src="https://cdn.pegasus.imarticus.org/iit_roorkee_cs/Web_certificate.webp"
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

        <div className={style.faculty}>
          <h5 className={style.facultyHead}>Faculty</h5>

          <div className={style1.facultyMobile}>
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
              spaceBetween={30}
              className="light-grey-color-swiper"
            >
              {dataArr.iit_roorkee_cs.faculty.map((data, index) => {
                return (
                  <SwiperSlide>
                    <div className="card" style={{ borderRadius: '8px' }}>
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
                          <p
                            style={{
                              fontFamily: 'Source Sans Pro',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              fontSize: '16px',
                              lineHeight: '22px',
                              display: 'flex',
                              alignItems: 'center',
                              color: '#3C4852',
                              paddingTop: '8px',
                            }}
                          >
                            {data.desg}
                          </p>
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
                            {data.data.substring(0, 250)}
                            <span
                              className={styles.seeMore}
                              style={{ color: '#0f5644' }}
                              onClick={() => {
                                setFacultyId(index)
                                setFacultyModal(true)
                                console.log(facultyId)
                              }}
                            >
                              {data.data.length < 250 ? '' : '...See More'}
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
              {dataArr.iit_roorkee_cs.faculty.map((data, index) => {
                return (
                  <SwiperSlide>
                    <div className={styles2.facultyNewCard1}>
                      <div className={styles2.facultyNewCard_cs}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: '8px',
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
                            margin: '9px 0px 0px 20px',
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
                          style={{
                            fontFamily: 'Source Sans Pro',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#3C4852',
                            margin: '8px 0px 0px 20px',
                          }}
                        >
                          {data.desg}
                        </p>
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

        <div className={style.feeSection}>
          <div className={styles.feeOuter}>
            <p className={styles2.feeHead}>Program Fee</p>
            <p className={styles2.fee}>₹1,40,000 + GST </p>
            <p className={styles2.fee_cs}>EMI starting from ₹11,987/- month</p>
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

        <div className={styles1.partnercontainerdiv}>
          <div className={styles1.partnermainconatiner_cs}>
            <div
              style={{
                padding: '40px 0px 0px 0px',
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <h5 className={styles1.testimonialheader}>
                We Develop The Leaders Of Tomorrow
              </h5>
            </div>
            <div
              style={{
                width: '100%',
                padding: '24px 0px 0px 0px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <p className={styles1.testimonialpara2_cs}>
                Read about a few success stories that were created with
                Imarticus Learning.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className={styles1.testimonialWeb}>
                <div className={styles1.testcontainerdiv3_cs}>
                  {dataArr.iit_roorkee_cs.testimonials.map((data, index) => {
                    const extraContent = (
                      <div>
                        <p className="extra-content">{data.content}</p>
                      </div>
                    )
                    return (
                      <div className={styles1.testCard_cs}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                          }}
                        >
                          <div>
                            <img
                              style={{
                                width: '80%',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                margin: '16px 0px 0px 16px',
                              }}
                              src={
                                'https://cdn.pegasus.imarticus.org/' + data.img
                              }
                            ></img>
                          </div>
                          <div style={{ marginTop: '16px', marginLeft: '8px' }}>
                            <p className={styles1.testimonialpara}>
                              {data.name}
                            </p>
                            <p className={styles1.testimonialpara1}>
                              {data.company}
                            </p>
                          </div>
                        </div>
                        <div
                          style={{
                            width: '90%',
                            height: '60%',
                            margin: '16px 0px 0px 16px',
                          }}
                        >
                          {data.content.substring(0, 200)}
                          <span
                            className={styles.seeMore}
                            style={{ color: '#0f5644' }}
                            onClick={() => {
                              setFacultyId(index)
                              setStudentModal(true)
                              console.log(facultyId)
                            }}
                          >
                            ...See More
                          </span>

                          {/* <div>
                          <br/>
                        <a onClick={()=>{setReadMore(!readMore)}}><p>Read More</p></a>
                          <br/>
                        {readMore && extraContent}
                        </div> */}
                        </div>

                        <div
                          style={{
                            position: 'absolute',
                            bottom: '0px',
                            margin: '0px 0px 10px 16px',
                          }}
                        >
                          <img
                            src={data.img1}
                            style={{ paddingTop: '10px' }}
                          ></img>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={styles1.testimonialMobile_cs}>
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
                className="testimonial-crousel-swiper"
              >
                {' '}
                {dataArr.iit_roorkee_cs.testimonials.map((data, index) => {
                  const extraContent = (
                    <div>
                      <p className="extra-content">{data.content}</p>
                    </div>
                  )
                  return (
                    <SwiperSlide>
                      <div className={styles1.testCard1}>
                        <div className={styles1.testCard_cs}>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                            }}
                          >
                            <div>
                              <img
                                style={{
                                  width: '80%',
                                  objectFit: 'contain',
                                  borderRadius: '8px',
                                  margin: '16px 0px 0px 16px',
                                }}
                                src={
                                  'https://cdn.pegasus.imarticus.org/' +
                                  data.img
                                }
                              ></img>
                            </div>
                            <div
                              style={{ marginTop: '16px', marginLeft: '8px' }}
                            >
                              <p className={styles1.testimonialpara}>
                                {data.name}
                              </p>
                              <p className={styles1.testimonialpara1}>
                                {data.company}
                              </p>
                            </div>
                          </div>
                          <div
                            style={{
                              width: '90%',
                              height: '60%',
                              margin: '16px 0px 0px 16px',
                            }}
                          >
                            {data.data.substring(0, 200)}
                            <span
                              className={styles.seeMore}
                              style={{ color: '#0f5644' }}
                              onClick={() => {
                                setFacultyId(index)
                                setStudentModal(true)
                                console.log(facultyId)
                              }}
                            >
                              ...See More
                            </span>
                            {/* {data.data}
                            <div>
                          <br/>
                        <a onClick={()=>{setReadMore(!readMore)}}><p>Read More</p></a>
                          <br/>
                        {readMore && extraContent}
                        </div> */}
                          </div>
                          <br />
                          <div
                            style={{
                              position: 'absolute',
                              bottom: '0px',
                              margin: '0px 0px 10px 16px',
                            }}
                          >
                            <img
                              src={data.img1}
                              style={{ paddingTop: '10px' }}
                            ></img>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '78px',
              }}
            >
              <a href="/testimonials/">
                <button className={styles1.partnerbutton}>
                  <span className={styles1.partnerbuttontext}>Read More</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={style1.Qasection}>
          <h5 className={styles.facultyHead}>Wait! I have some questions</h5>

          <h6 className={styles2.aboutProgram}>About Program</h6>

          {dataArr.iit_roorkee_cs.QnA.map((data, ind) => {
            return (
              <Accordion>
                <Accordion.Item eventKey={ind}>
                  <Accordion.Header>{data.head}</Accordion.Header>
                  <Accordion.Body style={{ padding: '10px 20px !important' }}>
                    {data.data}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )
          })}

          <h6 className={styles2.aboutProgram}>Eligibility</h6>
          {dataArr.iit_roorkee_cs.QnA2.map((data, ind) => {
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
          {dataArr.iit_roorkee_cs.QnA3.map((data, ind) => {
            return (
              <Accordion>
                <Accordion.Item eventKey={ind}>
                  <Accordion.Header
                    style={{ borderBottom: '0px solid #E5E5E5' }}
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
        <div className={style1.similiarProgram_cs}>
          <SimilarPrograms
            propsdata={props.propsdata.allData}
            programid={'IITR CYBERSECURITY'}
          />
        </div>
      </Layout>
    </>
  )
}
export default iit_roorkee_cs

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
