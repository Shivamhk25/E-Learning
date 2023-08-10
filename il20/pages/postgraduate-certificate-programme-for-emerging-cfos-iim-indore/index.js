import React, { useRef, useEffect, useState } from 'react'
import { GetCourseLSKeyByPath } from '../../services/helper'
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles from '../../styles/pgB&F.module.css'
import styles2 from '../../styles/financial-services-capital-markets-management-program-iim-indore.module.css'
import Image from 'next/image'
import { Accordion } from 'react-bootstrap'
import Header from '../../components/iim_indore/Header'

import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/Formtype1-Nm-Em-Con-Loc'
import EmbeddedEnquireForm from '../../components/Forms/EmbedableForm1-Nm-Em-Con-Loc'
import PaymentModalTabs from '../../components/iim_indore/PaymentModalTabs'
import SimilarPrograms from '../../components/pgBandF/SimilarPrograms'
import dataArr from '../../json/program.json'
import { GetSpecificdata } from '../../services/helper'
import { configs, countryCodes } from '../../constants'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Navigation, Pagination } from 'swiper'

const Iim_Indore = (props) => {
  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
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

  const INDEX_IN_PROGRAM = 1
  const PROGRAM =
    'IIM Indore Postgraduate Certificate Programme for Emerging CFOs'
  const PROGRAM_PATH_NAME =
    '/postgraduate-certificate-programme-for-emerging-cfos-iim-indore/'

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
            href="https://imarticus.org/postgraduate-certificate-programme-for-emerging-cfos-iim-indore/"
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
                        style={{ borderRadius: '8px' }}
                        src={
                          'https://cdn.pegasus.imarticus.org/' +
                          dataArr.iim_indore.faculty[facultyId].img
                        }
                      ></img>
                    </a>
                  </div>
                  <div className="col-9" style={{}}>
                    <p className={styles.cardTitle}>
                      {' '}
                      {dataArr.iim_indore.faculty[facultyId].name}
                    </p>
                    <p
                      className={styles2.cardText1}
                      style={{ marginTop: '16px' }}
                    >
                      {dataArr.iim_indore.faculty[facultyId].data}
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
                        dataArr.iim_indore.faculty[facultyId].img
                      }
                    ></img>
                  </a>
                </div>
                <div style={{ width: '80%' }}>
                  <p className={styles.cardTitle}>
                    {' '}
                    {dataArr.iim_indore.faculty[facultyId].name}
                  </p>
                  <p
                    className={styles2.cardText1}
                    style={{ marginTop: '16px' }}
                  >
                    {dataArr.iim_indore.faculty[facultyId].data}
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        )}
        {aboutParent && (
          <Modal toggleModal={facultyModal}>
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
                    {dataArr.iim_indore.partner.head}
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
                  src="https://cdn.pegasus.imarticus.org/iim_indore/IIM%20Indore%20certificate%20Web.webp"
                  style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                ></img>
              </div>
              <div className={styles2.certipopMobile}>
                <img
                  src="https://cdn.pegasus.imarticus.org/iim_indore/IIM%20Indore%20certificate%20Mob.webp"
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
                <div className={`row ${styles.facultyCard}`}>
                  <div className="col-3 align-self-center">
                    <a href=" ">
                      <img
                        src={
                          'https://cdn.pegasus.imarticus.org/' +
                          dataArr.iim_indore.partner.card[aboutId].img
                        }
                      ></img>
                    </a>
                  </div>
                  <div className="col-9" style={{ padding: '12px 0' }}>
                    <p className={styles.cardTitle}>
                      {' '}
                      {dataArr.iim_indore.partner.card[aboutId].name}
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
                      {dataArr.iim_indore.partner.card[aboutId].background}
                    </p>

                    <p
                      className={styles2.cardText1}
                      style={{
                        marginTop: '8px',
                      }}
                    >
                      {dataArr.iim_indore.partner.card[aboutId].head}
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
                        dataArr.iim_indore.partner.card[aboutId].img
                      }
                    ></img>
                  </a>
                </div>
                <div style={{ marginTop: '-40px', width: '90%' }}>
                  <p className={styles.cardTitle}>
                    {' '}
                    {dataArr.iim_indore.partner.card[aboutId].name}
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
                    {dataArr.iim_indore.partner.card[aboutId].background}
                  </p>

                  <p
                    className={styles2.cardText1}
                    style={{
                      marginTop: '8px',
                    }}
                  >
                    {dataArr.iim_indore.partner.card[aboutId].head}
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
        <div className={styles.ourAlumni}>
          <h1 className={styles1.alumniHeader}>Our Alumni work at</h1>
          <div className={styles2.alumni}>
            <Swiper
              // spaceBetween={50}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              slidesPerView={10}
              className="hiringpartnercarousal2"
              style={{ paddingBottom: '10px', paddingTop: '40px' }}
              id="collaborationdisplaynone"
            >
              {dataArr.iim_indore.alumini.map((img) => {
                return (
                  <SwiperSlide>
                    <div className="collaboration_carousal_main_div">
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
            style={{ paddingBottom: '40px' }}
          >
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iim_indore/accenture(1).webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iim_indore/amazon.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iim_indore/flipkart(1).webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iim_indore/gensuite.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iim_indore/hsbc.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iim_indore/icici.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iim_indore/kpmg.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/iim_indore/nestle.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles1.aboutcontainerdiv}>
          <div className={styles1.aboutcontainerdiv1}>
            <div className={styles2.aboutcontainerdiv2}>
              <div>
                <h2 className={styles2.aboutHeader}>
                  About The Postgraduate Certificate Programme for Emerging CFOs
                </h2>
              </div>
              <div>
                <p className={styles1.aboutpara} style={{ marginTop: '24px' }}>
                  The Postgraduate Certificate Programme for Emerging CFOs is a
                  specialised finance program created with IIM Indore. Designed
                  for professionals with over five years of experience, this
                  12-month program offers a comprehensive understanding of
                  financial services and management. Delivered by the IIM Indore
                  faculty, this robust program will prepare you for the CFO role
                  by equipping you with strategic, analytical, and tech-focused
                  skills. It takes a progressive approach by focusing on
                  financial technology, strategic thinking, Fintech, business
                  valuation, and risk management to enable a new generation
                  CFOs.
                </p>
              </div>
            </div>
            <div>
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
                  className="light-grey-color-swiper"
                >
                  {dataArr.iim_indore.about.map((data) => {
                    return (
                      <SwiperSlide>
                        <div className={styles2.aboutCard1}>
                          <div className={styles2.aboutCard}>
                            <div>
                              <img
                                style={{ margin: '24px 0px 0px 16px' }}
                                src={
                                  'https://cdn.pegasus.imarticus.org/' +
                                  data.img
                                }
                              ></img>
                            </div>
                            <div>
                              <p
                                className={styles1.aboutpara1}
                                style={{ margin: '24px 16px 0px 16px' }}
                              >
                                {data.head}
                              </p>
                            </div>
                            <div>
                              <p
                                className={styles1.aboutpara2}
                                style={{
                                  margin: '16px 16px 0px 16px',
                                  opacity: '.75',
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
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </Swiper>
              </div>
            </div>

            {/*  */}
            <div className={styles2.aboutEnquire}>
              <button
                onClick={toggleModal}
                className={styles2.partnerbutton}
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
          </div>
        </div>
        <div className={styles2.new_image}>
          <div className={styles2.new_image_tab}>
            <img
              src="https://cdn.pegasus.imarticus.org/iim_indore/newAboutImage.webp"
              objectFit="contain"
            />
          </div>
          <div className={styles2.new_image_mobile}>
            <img
              src="https://cdn.pegasus.imarticus.org/iim_indore/new_imagesMObile2.png"
              objectFit="contain"
              width="100%"
            />
          </div>
        </div>
        <div className={styles1.partnercontainerdiv}>
          <div className={styles2.partnermainconatiner}>
            <div>
              <h3 className={styles2.partnerheadermain}>
                About IIM Indore - Imarticus Collaboration
              </h3>
            </div>
            <div className={styles2.partnercontainerdiv1}>
              <div className={styles2.MainPartner}>
                <div className={styles2.partnerCard}>
                  <div className={styles2.partnerCardImage}>
                    <img
                      style={{
                        objectFit: 'fill',
                        width: '100%',
                        height: '100%',
                      }}
                      src={
                        'https://cdn.pegasus.imarticus.org/iim_indore/image.png'
                      }
                    ></img>
                  </div>
                  <div className={styles2.partnerCard12}>
                    <h4
                      className={styles1.partnerheader}
                      style={{ borderBottom: 'none' }}
                    >
                      About IIM Indore
                    </h4>
                    <div className={styles2.partnerWebMain}>
                      <p
                        className={styles2.partnerpara2}
                        style={{ marginTop: '0px' }}
                      >
                        {' '}
                        {dataArr.iim_indore.partner.head}
                      </p>
                    </div>
                    <div className={styles2.partnerMobile1}>
                      <p
                        className={styles2.partnerpara2}
                        style={{ marginTop: '0px' }}
                      >
                        {aboutParent
                          ? dataArr.iim_indore.partner.head
                          : dataArr.iim_indore.partner.head.substring(0, 460)}
                        <span
                          className={styles.seeMore}
                          style={{ color: '#0f5644' }}
                          onClick={() => {
                            setAboutParent((prev) => !prev)
                          }}
                        >
                          ...See More
                        </span>
                      </p>
                    </div>
                    <div className={styles2.partnerMobile11}>
                      <p
                        className={styles2.partnerpara2}
                        style={{ marginTop: '0px' }}
                      >
                        {aboutParent
                          ? dataArr.iim_indore.partner.head
                          : dataArr.iim_indore.partner.head.substring(0, 260)}
                        <span
                          className={styles.seeMore}
                          style={{ color: '#0f5644' }}
                          onClick={() => {
                            setAboutParent((prev) => !prev)
                          }}
                        >
                          ...See More
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles2.MainPartnerMobile}>
                <div
                  className={styles2.partnercontainerdiv2}
                  style={{ borderRadius: '12px', marginLeft: '0px' }}
                >
                  <div style={{ width: '100%' }}>
                    <img
                      className={styles2.aboutMainImage}
                      src={
                        'https://cdn.pegasus.imarticus.org/' +
                        dataArr.iim_indore.partner.img
                      }
                    ></img>
                  </div>
                  <div className={styles2.partnercontainerdiv4}>
                    <h4
                      style={{
                        fontFamily: 'Source Sans Pro',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '20px',
                        lineHeight: '28px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      About IIM Indore
                    </h4>
                    <div>
                      <p
                        className={styles1.aboutpara}
                        style={{ marginTop: '15px' }}
                      >
                        {aboutParent
                          ? dataArr.iim_indore.partner.head
                          : dataArr.iim_indore.partner.head.substring(0, 650)}
                        <span
                          className={styles.seeMore}
                          style={{ color: '#0f5644' }}
                          onClick={() => {
                            setAboutParent((prev) => !prev)
                          }}
                        >
                          ...See More
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles2.partnercontainerdiv3}>
                {dataArr.iim_indore.partner.card.map((data, index) => {
                  return (
                    <div className={styles2.partnerCard}>
                      <div className={styles2.partnerCardImage}>
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
                      <div className={styles2.partnerCard1}>
                        <h4 className={styles1.partnerheader}>{data.name}</h4>
                        <p className={styles2.partnerpara3}>
                          {data.background}
                        </p>
                        <div className={styles2.partnerWeb}>
                          <p className={styles2.partnerpara2}>
                            {data.head}
                            {/* <span
                              className={styles.seeMore}
                              style={{ color: '#0f5644' }}
                              onClick={() => {
                                setAboutId(index)
                                setAboutModal(true)
                              }}
                            >
                              ...See More
                            </span> */}
                          </p>
                        </div>
                        <div className={styles2.partnerWeb2}>
                          <p className={styles2.partnerpara2}>
                            {data.head.substring(0, 150)}
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
                        <div className={styles2.partnerMobile}>
                          <p className={styles2.partnerpara2}>
                            {data.head.substring(0, 100)}
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
          </div>
        </div>
        <div className={styles2.curriculumHighlightss}>
          <div className={'row justify-content-between ' + styles.row}>
            <div className="col-lg-12 col-sm-12 align-self-start">
              <h2 className={styles.curriculumHeader}>Curriculum Highlights</h2>
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
                style={{ alignItems: 'center' }}
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
                {dataArr.iim_indore.course.map((data, index) => {
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
            <div className={'col-lg-4 col-sm-12 ' + styles1.formmaiimindore}>
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

        <div className={styles1.partnercontainerdiv}>
          <div className={styles1.certificatecontainerdiv}>
            <div className={styles2.certiMainconatiner}>
              <div className={styles2.projectHeaderDiv}>
                <h3
                  className={styles2.projectheadermain}
                  style={{ color: 'white' }}
                >
                  Will i get certified?
                </h3>
              </div>
              <div className={styles2.projectParaDiv}>
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
                  Upon completing this program, you'll earn a Certificate of
                  Successful Completion in the Postgraduate Certificate
                  Programme for Emerging CFOs by IIM Indore. This will add
                  considerable value to your professional credentials.
                  Candidates will not qualify for successful completion if they
                  have an 'F' grade in 50% of the courses or/and overall
                  attendance for the program is less than 75%.
                </p>
              </div>
              <div className={styles2.certicontainerdiv3}>
                <div className={styles1.certicontainerdiv4}>
                  <div>
                    <img
                      src="https://cdn.pegasus.imarticus.org/pgBandF/Group 784.webp"
                      style={{ borderRadius: '8px' }}
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
                      style={{ borderRadius: '8px' }}
                    ></img>
                  </div>
                  <div className={styles1.projecticontext}>
                    Share your Achievements
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles2.certificateMainleftimg}
              style={{ position: 'relative' }}
            >
              <img
                src="https://cdn.pegasus.imarticus.org/iim_indore/Certificate.webp"
                className={styles2.certificateleftimg}
              ></img>
              <img
                src="https://cdn.pegasus.imarticus.org/iim_indore/IIM%20Indore%20certificate%20Mob.webp"
                className={styles2.certificateleftimgMobile}
              ></img>
              <img
                src="https://cdn.pegasus.imarticus.org/iit_roorkee/zoom_out.webp"
                className={styles2.partnerZoom}
                onClick={() => {
                  setCertificateModal(true)
                }}
              ></img>
            </div>
          </div>
        </div>
        <div className={styles2.faculty}>
          <h4 className={styles2.facultyHead}>Program Directors</h4>
          <br />
          <br />
          <div className={styles2.facultyWeb}>
            <div className={'row ' + styles.row}>
              <div
                className=""
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                {dataArr.iim_indore.faculty.map((data, index) => {
                  return (
                    <div
                      className="card"
                      style={{ borderRadius: '8px', marginLeft: '30px' }}
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
                            {data.data.substring(0, 390)}
                            <span
                              className={styles.seeMore}
                              style={{ color: '#0f5644' }}
                              onClick={() => {
                                setFacultyId(index)
                                setFacultyModal(true)
                                console.log(facultyId)
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
          </div>

          <div className={styles2.facultyMobile}>
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
            >
              {dataArr.iim_indore.faculty.map((data, index) => {
                return (
                  <SwiperSlide>
                    <div className={styles1.facultyCard1}>
                      <div className={styles1.facultyCard}>
                        <div className={styles1.facultyCard4}>
                          <div className={styles1.facultyCard4Image}>
                            <a href="">
                              <img
                                src={
                                  'https://cdn.pegasus.imarticus.org/' +
                                  data.img
                                }
                                style={{
                                  borderRadius: '8px',

                                  objectFit: 'fill',
                                }}
                              ></img>
                            </a>
                          </div>
                          <div
                            className="col-9"
                            style={{ padding: '12px 18px 0px 16px' }}
                          >
                            <p className={styles.cardTitle}>{data.name}</p>

                            <p
                              className={styles.cardText}
                              style={{ marginTop: '20px' }}
                            >
                              {data.data.substring(0, 200)}
                              <span
                                className={styles.seeMore}
                                style={{ color: '#035642' }}
                                onClick={() => {
                                  setFacultyId(index)
                                  setFacultyModal(true)
                                  console.log(facultyId)
                                }}
                              >
                                ...See More
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          <div className={styles1.facultyMobile1}>
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
            >
              {dataArr.iim_indore.faculty.map((data, index) => {
                return (
                  <SwiperSlide>
                    <div className={styles2.facultyNewCard1}>
                      <div
                        className={styles2.facultyNewCard}
                        style={{ overflow: 'scroll' }}
                      >
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
                            ...See More
                          </span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          {/* <div
            className="mobile-controls"
            style={{ width: '100%', marginTop: '40px' }}
          >
            <div
              className={`${styles.mobile_controls_prev} mobile-controls-prev`}
              style={{ display: 'flex', gap: '20px' }}
            >
              <div
                className="curson_pointer"
                onClick={() => ref4.current.prev()}
              >
                <Image
                  src="/imarticus_2/awardarrow.svg"
                  width="56"
                  height="56"
                  layout="fixed"
                  className="leftArrow"
                />
              </div>
              <div
                className="curson_pointer"
                onClick={() => ref4.current.next()}
              >
                <Image
                  src="/imarticus_2/awardarrow.svg"
                  width="56"
                  height="56"
                  layout="fixed"
                />
              </div>
            </div>
          </div> */}
        </div>
        <div className={styles2.feeSection}>
          <div className={styles.feeOuter}>
            <p className={styles2.feeHead}>Program Fee</p>
            <p className={styles2.fee}>₹3,73,000 + GST </p>
            {/* <p className={styles.fee} style={{ fontSize: '40px' }}>
              (Inclusive of all taxes)
            </p> */}
            <p className={styles2.viewPlans} onClick={openPaymentModal}>
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

          <h5 className={styles2.aboutProgram}>About Program</h5>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is the benefit of IIM Indore Executive Alumni Status?
              </Accordion.Header>
              <Accordion.Body style={{ margin: '16px 20px' }}>
                <p>
                  As IIM Indore Executive alumni, participants can avail of the
                  following benefits:
                </p>
                <ul>
                  <li>
                    Receipt of all program brochures and newsletters from IIM
                    Indore (MDP Office).
                  </li>
                  <li>
                    Lifelong access to a network of distinguished IIM Indore
                    Executive Alumni.
                  </li>
                  <li>
                    Access to the IIM Indore Campus Library (onsite access).
                  </li>
                  <li>Official IIM Indore email address</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            {dataArr.iim_indore.QnA.map((data, ind) => {
              return (
                <Accordion>
                  <Accordion.Item eventKey={ind}>
                    <Accordion.Header
                    // style={{ borderBottom: '1px solid #E5E5E5' }}
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
          </Accordion>

          <h5 className={styles2.aboutProgram}>Eligibility</h5>

          <Accordion defaultActiveKey="0">
            <Accordion.Item>
              <Accordion.Header>
                What are the minimum eligibility criteria?
              </Accordion.Header>
              <Accordion.Body style={{ margin: '16px 20px' }}>
                <p>
                  The candidate must have either of the following UG
                  Qualification:
                </p>
                <ol>
                  <li>Diploma (10+2+3)</li>
                  <li>Bachelor's Degree or equivalent (10+2+3) or (10+2+4)</li>
                </ol>
                <p>
                  It's also open for candidates with two years of Master's
                  Degree or equivalent from a recognized University (such as
                  UGC, AICTE, DEC, AIU, State Government, etc.) in any
                  discipline with a minimum of 50% aggregate marks.
                </p>
                <p>
                  Candidates require a minimum of 5 years of work experience
                  post-completion of the qualifying education mentioned above.
                </p>
                <p>
                  Freshers with professional qualifications like
                  CA/ICWA/CS/CFA/CFP will also be considered.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <h5 className={styles2.aboutProgram}>Program Fees</h5>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                What is the instalment schedule for paying the course fee?
              </Accordion.Header>
              <Accordion.Body
                style={{ margin: '16px 20px' }}
                className={styles2.tableBody}
              >
                <table width="100%">
                  <tr>
                    <th className={styles2.tableTd}></th>
                    <th className={styles2.tableTd}></th>
                    <th className={styles2.tableTd}>Due Date</th>
                  </tr>
                  {dataArr.iim_indore.QnA3.map((data) => {
                    return (
                      <tr>
                        <td
                          className={styles2.tableTd}
                          style={{ width: '40%' }}
                        >
                          {data.data1} <div>{data.data4}</div>
                        </td>
                        <td
                          className={styles2.tableTd}
                          style={{ width: '15%' }}
                        >
                          {' '}
                          {data.data2}
                        </td>
                        <td
                          className={styles2.tableTd}
                          style={{ width: '40%' }}
                        >
                          {' '}
                          {data.data3}
                        </td>
                      </tr>
                    )
                  })}
                </table>
              </Accordion.Body>
            </Accordion.Item>
            {dataArr.iim_indore.QnA2.map((data, ind) => {
              return (
                <Accordion>
                  <Accordion.Item eventKey={ind}>
                    <Accordion.Header>{data.head}</Accordion.Header>
                    <Accordion.Body style={{ margin: '16px 20px' }}>
                      {data.data}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              )
            })}
          </Accordion>
        </div>
        <div className={styles2.similiarProgram}>
          <SimilarPrograms
            propsdata={props.propsdata.allData}
            programid={'FINANCE'}
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

  const data = await res.json()
  return {
    props: {
      propsdata: data.data,
    },
  }
}
