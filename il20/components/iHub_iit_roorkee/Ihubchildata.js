import React, { useRef, useEffect, useState } from 'react'
import { GetCourseLSKeyByPath } from '../../services/helper'
import Head from 'next/head'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles from '../../styles/pgB&F.module.css'
// import styles from '../../styles/Aboutus.module.css'
import Image from 'next/image'
import { Accordion } from 'react-bootstrap'
import Header from '../../components/iHub_iit_roorkee/Header'

import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/Formtype1-Nm-Em-Con-Loc'
import EmbeddedEnquireForm from '../../components/Forms/EmbedableForm1-Nm-Em-Con-Loc'
import PaymentModalTabs from '../../components/iHub_iit_roorkee/PaymentModalTabs'
import SimilarPrograms from '../../components/pgBandF/SimilarPrograms'
import dataArr from '../../json/program.json'
// import Header_addon_script from '../../components/header_addon_script'
import { GetSpecificdata } from '../../services/helper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Navigation, Pagination } from 'swiper'

function Ihubchildata({
  toggleModal,
  downloadBrochure,
  brochureUrl,
  formModal,
  style,
  propsdata,
}) {
  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const [load, setLoad] = useState(false)

  const [paymentModal, setPaymentModal] = useState(false)
  const [facultyModal, setFacultyModal] = useState(false)
  const [studentModal, setStudentModal] = useState(false)
  const [facultyId, setFacultyId] = useState()
  const [aboutId, setAboutId] = useState()
  const [aboutModal, setAboutModal] = useState(false)
  const [certificateModal, setCertificateModal] = useState(false)
  const [pagedata, setPagedata] = useState('')

  const INDEX_IN_PROGRAM = 1
  const PROGRAM =
    'iHub DivyaSampark, IIT Roorkee Professional Certification in Data Science and Machine Learning'
  const PROGRAM_PATH_NAME =
    '/certificate-program-in-data-science-and-machine-learning-by-ihub-divyasampark/'

  const openPaymentModal = (e) => {
    setPaymentModal((prevState) => !prevState)
  }
  useEffect(() => {
    setLoad(true)
    localStorage.setItem(
      'areaofinterest',
      GetCourseLSKeyByPath(propsdata, PROGRAM_PATH_NAME)
    )

    let webpagedata = GetSpecificdata(
      propsdata,
      GetCourseLSKeyByPath(propsdata, PROGRAM_PATH_NAME)
    )
    setPagedata(webpagedata)
  }, [])

  return (
    <>
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
          href="https://imarticus.org/certificate-program-in-data-science-and-machine-learning-by-ihub-divyasampark/"
        />
        <link
          rel="icon"
          href="https://cdn.pegasus.imarticus.org/imarticus_2/favicon4.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
        {/* <Header_addon_script /> */}
      </Head>

      {paymentModal && (
        <Modal>
          <PaymentModalTabs toggleModal={openPaymentModal} />
        </Modal>
      )}
      {facultyModal && (
        <Modal toggleModal={facultyModal}>
          <div
            className="industry-project-popup-ctnr"
            style={{ display: 'block' }}
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

            <div className={`row ${styles.facultyCard}`}>
              <div className="col-3 align-self-center">
                <a href=" ">
                  <img
                    src={
                      'https://cdn.pegasus.imarticus.org/' +
                      dataArr.iit_roorkee.faculty[facultyId].img
                    }
                  ></img>
                </a>
              </div>
              <div className="col-9" style={{ padding: '12px 0' }}>
                <p className={styles.cardTitle}>
                  {' '}
                  {dataArr.iit_roorkee.faculty[facultyId].name}
                </p>
                <p
                  className={styles.cardTitle}
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '20px',
                  }}
                >
                  {dataArr.iit_roorkee.faculty[facultyId].department}
                </p>
                <p
                  className={styles.cardTitle}
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '20px',
                  }}
                >
                  {dataArr.iit_roorkee.faculty[facultyId].college}
                </p>
                <p className={styles.cardText}>
                  {dataArr.iit_roorkee.faculty[facultyId].data}
                </p>
              </div>
            </div>
          </div>
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
                      dataArr.iit_roorkee.testimonial[facultyId].imgMore
                    }
                  ></img>
                </a>
              </div>
              <div className="col-9" style={{ padding: '12px 0' }}>
                <p className={styles.cardTitle}>
                  {' '}
                  {dataArr.iit_roorkee.testimonial[facultyId].name}
                </p>
                <p
                  className={styles.cardTitle}
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '20px',
                  }}
                >
                  {dataArr.iit_roorkee.testimonial[facultyId].company}
                </p>

                <p className={styles.cardText}>
                  {dataArr.iit_roorkee.testimonial[facultyId].content}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {certificateModal && (
        <Modal toggleModal={facultyModal}>
          <div
            className="industry-project-popup-ctnr"
            style={{ display: 'block', backgroundColor: '' }}
          >
            {' '}
            <div
              onClick={() => {
                setCertificateModal(false)
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
            <div
              style={{
                width: '100%',
                height: '70%',
                padding: '10vh 5vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <img src="https://cdn.pegasus.imarticus.org/iit_roorkee/iHub_Certificate_Web_Tab.png"></img>
            </div>
          </div>
        </Modal>
      )}
      {aboutModal && (
        <Modal toggleModal={aboutModal}>
          <div
            className="industry-project-popup-ctnr"
            style={{ display: 'block' }}
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

            <div className={`row ${styles.facultyCard}`}>
              <div className="col-3 align-self-center">
                <a href=" ">
                  <img
                    src={
                      'https://cdn.pegasus.imarticus.org/' +
                      dataArr.iit_roorkee.about_partner.data1[aboutId].img
                    }
                  ></img>
                </a>
              </div>
              <div className="col-9" style={{ padding: '12px 0' }}>
                <p className={styles.cardTitle}>
                  {' '}
                  {dataArr.iit_roorkee.about_partner.data1[aboutId].name}
                </p>
                <p
                  className={styles.cardTitle}
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '20px',
                  }}
                >
                  {dataArr.iit_roorkee.about_partner.data1[aboutId].backgroud}
                </p>

                <p className={styles.cardText}>
                  {dataArr.iit_roorkee.about_partner.data1[aboutId].data}
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
      <Header toggleModal={toggleModal} style={style} pagedata={pagedata} />
      <div className={styles.ourAlumni}>
        <h1 className={styles1.alumniHeader}>Our Alumni work at</h1>
        <div className={styles1.alumni}>
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
            {dataArr.iit_roorkee.alumini.map((img) => {
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
            styles.ourPrograms_mobiles
          }
          style={{ paddingBottom: '40px' }}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src={`https://cdn.pegasus.imarticus.org/iit_roorkee/capgemini.webp`}
                    height="46"
                    width="120"
                    style={{ objectFit: 'contain' }}
                    alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                  />
                </td>
                <td>
                  <img
                    src={`https://cdn.pegasus.imarticus.org/iit_roorkee/kpmg.webp`}
                    height="46"
                    width="120"
                    style={{ objectFit: 'contain' }}
                    alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src={`https://cdn.pegasus.imarticus.org/iit_roorkee/tesco.webp`}
                    height="46"
                    width="120"
                    style={{ objectFit: 'contain' }}
                    alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                  />
                </td>
                <td>
                  <img
                    src={`https://cdn.pegasus.imarticus.org/iit_roorkee/fractal.webp`}
                    height="46"
                    width="120"
                    style={{ objectFit: 'contain' }}
                    alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src={`https://cdn.pegasus.imarticus.org/iit_roorkee/EY.webp`}
                    height="46"
                    width="120"
                    style={{ objectFit: 'contain' }}
                    alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                  />
                </td>
                <td>
                  <img
                    src={`https://cdn.pegasus.imarticus.org/iit_roorkee/tata.webp`}
                    height="46"
                    width="120"
                    style={{ objectFit: 'contain' }}
                    alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src={`https://cdn.pegasus.imarticus.org/iit_roorkee/tiger.webp`}
                    height="46"
                    width="120"
                    style={{ objectFit: 'contain' }}
                    alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                  />
                </td>
                <td>
                  <img
                    src={`https://cdn.pegasus.imarticus.org/iit_roorkee/accenture.webp`}
                    height="46"
                    width="120"
                    style={{ objectFit: 'contain' }}
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
          <div className={styles1.aboutcontainerdiv2}>
            <div>
              <h2 className={styles1.aboutHeader}>
                {dataArr.iit_roorkee.about_course.header}
              </h2>
            </div>
            <div>
              <p className={styles1.aboutpara}>
                {dataArr.iit_roorkee.about_course.data}
              </p>
            </div>
            <div>
              <p className={styles1.aboutpara}>
                {dataArr.iit_roorkee.about_course.data1}
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
                {dataArr.iit_roorkee.certificate.map((data) => {
                  return (
                    <SwiperSlide>
                      <div className={styles1.aboutCard1}>
                        <div className={styles1.aboutCard3}>
                          <div>
                            <img
                              style={{ margin: '24px 0px 0px 12px' }}
                              src={
                                'https://cdn.pegasus.imarticus.org/' + data.icon
                              }
                            ></img>
                          </div>
                          <div>
                            <p className={styles1.aboutpara1}>
                              {data.icon_head}
                            </p>
                          </div>
                          <div>
                            <p className={styles1.aboutpara2}>
                              {data.icon_data}
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: '40px',
              marginBottom: '60px',
            }}
          >
            <button
              onClick={toggleModal}
              className=""
              style={{
                background: '#035642',
                width: '182px',
                border: 'none',
                height: '56px',
                borderRadius: '8px',
              }}
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
        <div className={styles1.partnermainconatiner}>
          <div style={{ margin: '40px 0px 0px 8vw' }}>
            <h3 className={styles1.partnerheadermain}>About The Partnership</h3>
          </div>
          <div className={styles1.partnercontainerdiv1}>
            <div className={styles1.partnercontainerdiv2}>
              <div style={{ width: '100%' }}>
                <img
                  style={{
                    objectFit: 'fill',
                    borderRadius: '6px',
                    width: '100%',
                  }}
                  src={
                    'https://cdn.pegasus.imarticus.org/' +
                    dataArr.iit_roorkee.about_partner.img
                  }
                ></img>
              </div>
              <div className={styles1.partnercontainerdiv4}>
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
                  About iHUB DivyaSampark @IIT Roorkee
                </h4>
                <div>
                  <p className={styles1.aboutpara}>
                    {dataArr.iit_roorkee.about_partner.data}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles1.partnercontainerdiv3}>
              {dataArr.iit_roorkee.about_partner.data1.map((data, index) => {
                return (
                  <div className={styles1.partnerCard}>
                    <div>
                      <img
                        className={styles1.partnerImage}
                        src={'https://cdn.pegasus.imarticus.org/' + data.img}
                      ></img>
                    </div>
                    <div className={styles1.partnerCard1}>
                      <h4 className={styles1.partnerheader}>{data.name}</h4>
                      <p className={styles1.partnerpara3}>{data.backgroud}</p>
                      <div className={styles1.partnerWeb}>
                        <p className={styles1.partnerpara2}>
                          {data.data.substring(0, 150)}
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
                      <div className={styles1.partnerMobile}>
                        <p className={styles1.partnerpara2}>
                          {data.data.substring(0, 80)}
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
      <div className={styles1.curriculumHighlightss}>
        <div className={'row justify-content-between ' + styles.row}>
          <div className="col-lg-12 col-sm-12 align-self-start">
            <h2 className={styles.curriculumHeader}>Curriculum Highlights</h2>
          </div>
          <div
            className={
              'col-lg-12 col-sm-12 align-self-end ' +
              styles.downloadBrochure_mobiles
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
            >
              Download Brochure{' '}
              <span>
                <img src="https://cdn.pegasus.imarticus.org/pgBandF/Download (9).webp" />
              </span>{' '}
            </button>
          </div>
        </div>
        <div className={'row ' + styles.row}>
          <div className="col-lg-8 col-sm-12">
            {dataArr.iit_roorkee.course.map((data) => {
              return (
                <div className={styles.modules}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className={styles1.accHeader}>
                        {data.head}
                        <br />
                      </Accordion.Header>
                      <Accordion.Body
                        style={{ padding: '10px 10px 0 10px !important' }}
                      >
                        <ul style={{ padding: '20px 0px 0px 50px' }}>
                          {data.data.map((data1) => {
                            return <li>{data1.data1}</li>
                          })}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              )
            })}
          </div>
          <div className={'col-lg-4 col-sm-12 ' + styles1.formmainihub}>
            <EmbeddedEnquireForm
              toggleModal={toggleModal}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              courseName={GetCourseLSKeyByPath(propsdata, PROGRAM_PATH_NAME)}
              propsdata={propsdata}
            />
          </div>
        </div>
        <div style={{ marginTop: '40px', marginLeft: '10px' }}>
          <h4
            style={{
              fontFamily: 'Source Sans Pro',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '34px',
              lineHeight: '40px',
              display: 'flex',
              alignItems: 'center',
              color: '#3C4852',
            }}
          >
            Languages & Tools Covered:
          </h4>
          <div className={styles1.curriWeb}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: '30px 0px 0px -40px',
                width: '100%',
              }}
            >
              {dataArr.iit_roorkee.language_img.map((img) => {
                return (
                  <div
                    style={{
                      width: '200px',
                      height: '50px',
                      marginLeft: '20px',
                    }}
                  >
                    <img
                      src={'https://cdn.pegasus.imarticus.org/' + img.img}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles1.curriMobile}>
            <Swiper
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              slidesPerGroup={1}
              slidesPerView={'auto'}
              style={{ paddingBottom: '10px', paddingTop: '40px' }}
            >
              {dataArr.iit_roorkee.language_img.map((img) => {
                return (
                  <SwiperSlide>
                    <div
                      style={{
                        height: '50px',
                      }}
                    >
                      <img
                        style={{ objectFit: 'fill' }}
                        src={'https://cdn.pegasus.imarticus.org/' + img.img}
                      ></img>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <div className={styles1.partnercontainerdiv}>
        <div className={styles1.partnermainconatiner}>
          <div style={{ margin: '40px 0px 0px 8vw' }}>
            <h4
              className={styles1.partnerheadermain}
              style={{ fontSize: '34px' }}
            >
              Projects that you will work on{' '}
            </h4>
          </div>
          <div style={{ width: '80%', margin: '40px 0px 0px 8vw' }}>
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
              Get an opportunity to work on real-world projects, and case
              studies that will give you an overview of the data science and
              machine learning fields and provide you with the necessary
              technical skills.
            </p>
          </div>

          <div className={styles1.projectWeb}>
            <div className={styles1.projectcontainerdiv3}>
              {dataArr.iit_roorkee.project.map((data) => {
                return (
                  <div className={styles1.projectCard1}>
                    <div className={styles1.projectCard}>
                      <div>
                        <img
                          style={{
                            width: '100%',
                            objectFit: 'contain',
                            borderRadius: '8px',
                          }}
                          src={'https://cdn.pegasus.imarticus.org/' + data.img}
                        ></img>
                      </div>
                      <h4
                        style={{
                          fontFamily: 'Source Sans Pro',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          fontSize: '16px',
                          lineHeight: '22px',
                          textTransform: 'uppercase',
                          margin: '16px 0px 0px 16px',
                        }}
                      >
                        {data.head}
                      </h4>
                      <div style={{ margin: '16px 0px 0px 16px' }}>
                        {data.points.map((data1) => {
                          return (
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                margin: '16px 0px 0px 0px',
                              }}
                            >
                              <input type="checkbox" checked />
                              <p
                                className={styles1.projectpara2}
                                style={{ marginLeft: '8px' }}
                              >
                                {data1.data}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles1.projectMobile}>
            <Swiper
              style={{ paddingBottom: '10px', marginLeft: '4px' }}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
              className="testimonial-crousel-swiper"
            >
              {dataArr.iit_roorkee.project.map((data) => {
                return (
                  <SwiperSlide>
                    <div className={styles1.projectCard1}>
                      <div className={styles1.projectCard}>
                        <div>
                          <img
                            style={{
                              width: '100%',
                              objectFit: 'contain',
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
                            fontSize: '16px',
                            lineHeight: '22px',
                            textTransform: 'uppercase',
                            margin: '16px 0px 0px 16px',
                          }}
                        >
                          {data.head}
                        </h4>
                        <div style={{ margin: '16px 0px 0px 16px' }}>
                          {data.points.map((data1) => {
                            return (
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'flex-start',
                                  margin: '16px 0px 0px 0px',
                                }}
                              >
                                <input type="checkbox" checked />
                                <p
                                  className={styles1.projectpara2}
                                  style={{ marginLeft: '8px' }}
                                >
                                  {data1.data}
                                </p>
                              </div>
                            )
                          })}
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
              marginTop: '100px',
            }}
          >
            <button className={styles1.partnerbutton} onClick={toggleModal}>
              <span className={styles1.partnerbuttontext}>Apply Here</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.whatCanIBecome} style={{ padding: '80px 10%' }}>
        <h4
          className={styles.alumniHeader}
          style={{ marginBottom: '40px !important' }}
        >
          What Can I Become?
        </h4>
        <div className={styles1.row} style={{ marginTop: '70px' }}>
          <div className="">
            <img
              src="https://cdn.pegasus.imarticus.org/iit_roorkee/Group11.webp"
              width="90%"
              height="400px"
              className={styles1.imageMobile}
            />
          </div>

          <div className={styles1.becomeWeb}>
            <div className={styles1.become}>
              <img
                src="https://cdn.pegasus.imarticus.org/iit_roorkee/Group17.webp"
                style={{ objectFit: 'contain' }}
              ></img>
            </div>
          </div>

          <div className={styles1.becomeMobile}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                margin: '20px 0px 0px -20px',
                width: '100%',
              }}
            >
              {dataArr.iit_roorkee.become.map((data) => {
                return (
                  <div style={{ marginTop: '20px', width: '100%' }}>
                    <img
                      src={'https://cdn.pegasus.imarticus.org' + data.img}
                    ></img>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <h4
          className={styles.alumniHeader}
          style={{ marginBottom: '40px !important', marginTop: '120px' }}
        >
          How will I learn?
        </h4>
        <br />
        <div className={styles1.becomeWeb1}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              marginTop: '32px',
            }}
          >
            <img src="https://cdn.pegasus.imarticus.org/iit_roorkee/becomeImage.webp"></img>
          </div>
        </div>
        <div className={styles1.becomeMobile1}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              marginTop: '16px',
            }}
          >
            <img src="https://cdn.pegasus.imarticus.org/iit_roorkee/Group2818.webp"></img>
          </div>
        </div>
      </div>
      <div className={styles1.partnercontainerdiv}>
        <div className={styles1.certificatecontainerdiv}>
          <div className={styles1.certiMainconatiner}>
            <div style={{ margin: '40px 0px 0px 8vw' }}>
              <h3 className={styles1.certificateheadermain}>
                Certificate Program in Data Science and Machine Learning
              </h3>
            </div>
            <div className={styles1.certiHeading}>
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
                Upon successful completion of the program, you will earn a
                Certificate issued collectively by iHUB DivyaSampark @ IIT
                Roorkee, Department of Science & Technology (DST) and Imarticus
                Learning. It will add considerable value to your profile and
                help your career evolve in the right direction.
              </p>
            </div>
            <div className={styles1.certicontainerdiv3}>
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
            className={styles1.certificateMainleftimg}
            style={{ position: 'relative' }}
          >
            <img
              src="https://cdn.pegasus.imarticus.org/iit_roorkee/iHub_Certificate_Web_Tab.png"
              className={styles1.certificateleftimg}
            ></img>
            <img
              src="https://cdn.pegasus.imarticus.org/iit_roorkee/zoom_out.webp"
              className={styles1.partnerZoom}
              onClick={() => {
                setCertificateModal(true)
              }}
            ></img>
          </div>
        </div>
      </div>
      <div className={styles.faculty}>
        <h4 className={styles.facultyHead}>Faculty</h4>
        <br />
        <br />
        <div className={styles1.facultyWeb}>
          <div className={'row ' + styles.row}>
            <div
              className=""
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                gap: '40px',
                width: '100%',
              }}
            >
              {dataArr.iit_roorkee.faculty.map((data, index) => {
                return (
                  <div className="card">
                    <div className={styles1.facultyCard4}>
                      <div className={styles1.facultyCard4Image}>
                        <a href="">
                          <img
                            src={
                              'https://cdn.pegasus.imarticus.org/' + data.img
                            }
                            style={{
                              borderRadius: '8px',

                              objectFit: 'fill',
                            }}
                          ></img>
                        </a>
                      </div>
                      <div className="" style={{ padding: '12px 0px 0px 2vw' }}>
                        <p className={styles.cardTitle}>{data.name}</p>
                        <p
                          className={styles.cardTitle}
                          style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '20px',
                          }}
                        >
                          {data.department}
                        </p>
                        <p
                          className={styles.cardTitle}
                          style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '20px',
                          }}
                        >
                          {data.college}
                        </p>
                        <p className={styles.cardText}>
                          {data.data.substring(0, 200)}
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
        <div className={styles1.facultyMobile}>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerGroup={1}
            slidesPerView={'auto'}
          >
            {dataArr.iit_roorkee.faculty.map((data, index) => {
              return (
                <SwiperSlide>
                  <div className={styles1.facultyCard1}>
                    <div className={styles1.facultyCard}>
                      <div className={styles1.facultyCard4}>
                        <div className={styles1.facultyCard4Image}>
                          <a href="">
                            <img
                              src={
                                'https://cdn.pegasus.imarticus.org/' + data.img
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
                          style={{ padding: '12px 0 0px 2vw' }}
                        >
                          <p className={styles.cardTitle}>{data.name}</p>
                          <p
                            className={styles.cardTitle}
                            style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              lineHeight: '20px',
                            }}
                          >
                            {data.department}
                          </p>
                          <p
                            className={styles.cardTitle}
                            style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              lineHeight: '20px',
                            }}
                          >
                            {data.college}
                          </p>
                          <p className={styles.cardText}>
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
            {dataArr.iit_roorkee.faculty.map((data, index) => {
              return (
                <SwiperSlide>
                  <div className={styles1.facultyNewCard1}>
                    <div className={styles1.facultyNewCard}>
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
                            width: '120px',
                            height: '130px',
                            objectFit: 'fill',
                            borderRadius: '8px',
                          }}
                          src={'https://cdn.pegasus.imarticus.org/' + data.img}
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
                      </p>
                      <p
                        className={styles1.partnerpara2}
                        style={{ margin: '10px 0px 0px 20px' }}
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
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      <div style={{ padding: '60px 10%' }}>
        <div className={styles.feeOuter}>
          <p className={styles.feeHead}>Program Fee</p>
          <p className={styles.fee}>₹ 1,00,000 + GST</p>
          {/* <p className={styles.fee} style={{ fontSize: '40px' }}>
              (Inclusive of all taxes)
            </p> */}
          <p className={styles.viewPlans} onClick={openPaymentModal}>
            View Payment Plans
          </p>
        </div>
        <br />
        <br />

        <br />
        <button
          onClick={toggleModal}
          className={`${styles.enquireNow} ${styles.button}`}
        >
          Enquire now
        </button>
      </div>
      <div className={styles1.partnercontainerdiv}>
        <div className={styles1.partnermainconatiner}>
          <div
            style={{
              margin: '40px 0px 0px 0px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <h5 className={styles1.testimonialheader}>
              We Develop The Leaders Of Tomorrow
            </h5>
          </div>
          <div
            style={{
              width: '100%',
              margin: '40px 0px 0px 0px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <p className={styles1.testimonialpara2}>
              Read about a few success stories that were created with Imarticus
              Learning.
            </p>
          </div>
          <div className={styles1.testimonialWeb}>
            <div className={styles1.testcontainerdiv3}>
              {dataArr.iit_roorkee.testimonial.map((data, index) => {
                const extraContent = (
                  <div>
                    <p className="extra-content">{data.content}</p>
                  </div>
                )
                return (
                  <div className={styles1.testCard}>
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
                          src={'https://cdn.pegasus.imarticus.org/' + data.img}
                        ></img>
                      </div>
                      <div style={{ marginTop: '16px', marginLeft: '8px' }}>
                        <p className={styles1.testimonialpara}>{data.name}</p>
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
                      <img src={data.img1} style={{ paddingTop: '10px' }}></img>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles1.testimonialMobile}>
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
              className="testimonial-crousel-swiper"
            >
              {dataArr.iit_roorkee.testimonial.map((data, index) => {
                const extraContent = (
                  <div>
                    <p className="extra-content">{data.content}</p>
                  </div>
                )
                return (
                  <SwiperSlide>
                    <div className={styles1.testCard1}>
                      <div className={styles1.testCard}>
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
              marginTop: '120px',
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
      <div className="faqs" style={{ padding: '60px 10%' }}>
        <h5 className={styles.facultyHead}>Wait! I have some questions</h5>
        <br />
        <br />
        <h5 className={styles.aboutProgram}>Eligibility</h5>
        <br />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Is this the right course for me?
            </Accordion.Header>
            <Accordion.Body style={{ margin: '20px' }}>
              <p>This program is built for:</p>
              <ol>
                <li>
                  Early and mid-level professionals interested in gaining a
                  relevant and cutting-edge perspective on data science and
                  machine learning for better career prospects or meeting
                  organizational goals
                </li>
                <li>
                  Professionals and leaders who aspire to lead data-driven
                  disruptions in businesses across various domains like retail,
                  healthcare, supply chain, etc.
                </li>
                <li>
                  Any tech-savvy individual who wants to learn data science and
                  machine learning
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Do I need programming experience?
            </Accordion.Header>
            <Accordion.Body style={{ margin: '20px' }}>
              The course covers Python programming from scratch so it doesn’t
              expect programming expertise. However, basic programming knowledge
              will help you pick up the concepts faster. If you do not have
              programming exposure at all, you will have to put extra effort
              into learning programming concepts.
            </Accordion.Body>
          </Accordion.Item>
          <br />
          <br />
        </Accordion>
        <h5 className={styles.aboutProgram}>About Program</h5>
        <br />
        {dataArr.iit_roorkee.QnA.map((data, ind) => {
          return (
            <Accordion defaultActiveKey={ind}>
              <Accordion.Item eventKey={ind}>
                <Accordion.Header>{data.head}</Accordion.Header>
                <Accordion.Body style={{ margin: '20px' }}>
                  {data.data}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )
        })}
        <Accordion>
          <Accordion.Item eventKey="7">
            <Accordion.Header>What is the payment structure?</Accordion.Header>
            <Accordion.Body style={{ margin: '20px' }}>
              <p>What is the payment structure?</p>
              <p>
                You will be able to book your seat by paying the registration
                fee of INR 10,000. For the rest of the program fee you will get
                three options:
              </p>
              <ol>
                <li>One-time full payment</li>
                <li>EMI loan payment</li>
                <li>Imarticus instalment payment</li>
              </ol>
              <p>
                Check “View Plans” for details on the payment options and
                structures.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  )
}

export default Ihubchildata
