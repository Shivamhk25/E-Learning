import React, { useRef, useEffect, useState } from 'react'
import { GetCourseLSKeyByPath } from '../../services/helper'
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import styles from '../../styles/pgB&F.module.css'
// import styles from '../../styles/Aboutus.module.css'
import Image from 'next/image'
import { Accordion } from 'react-bootstrap'
import CountryCodes from '../../components/Forms/CountryCodes'
import Header from '../../components/pgBandF/Header'
import Program from '../../json/program.json'

import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/Formtype5-Nm-Em-Con-Loc'
import EmbeddedEnquireForm from '../../components/Forms/EmbedableForm5-Nm-Em-Con-Loc'
import WhyChoose from '../../components/pgBandF/WhyChoose'
import PaymentModalTabs from '../../components/pgBandF/PaymentModalTabs'
import SimilarPrograms from '../../components/pgBandF/SimilarPrograms'
import { configs, countryCodes } from '../../constants'
import { GetSpecificdata } from '../../services/helper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Autoplay } from 'swiper'

const PROGRAM_PATH_NAME = '/post-graduate-program-banking-and-finance/'
const program = 'Postgraduate Program in Banking and Finance'
const INDEX_IN_PROGRAM = 1

const PG_BandF = (props) => {
  const [load, setLoad] = useState(false)

  const [formModal, setFormModal] = useState(false)
  const [paymentModal, setPaymentModal] = useState(false)
  const [seeMoreLeftModal, setSeeMoreLeftModal] = useState(false)
  const [seeMoreRightModal, setSeeMoreRightModal] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  const [brochureUrl, setBrochureUrl] = useState()
  const [pagedata, setPagedata] = useState('')

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
  const toggleSeeMoreLeftModal = (e) => {
    setSeeMoreLeftModal((prevState) => !prevState)
  }
  const toggleSeeMoreRightModal = (e) => {
    setSeeMoreRightModal((prevState) => !prevState)
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

  console.log(pagedata, ':::::::::::::pagedata')

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
            href="https://imarticus.org/post-graduate-program-banking-and-finance/"
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

        {seeMoreLeftModal && (
          <Modal toggleModal={toggleSeeMoreLeftModal}>
            <div
              className="industry-project-popup-ctnr"
              style={{ display: 'block' }}
            >
              <div
                // style={{ float: 'right', padding: '20px 20px 0 0' }}
                role="button"
                class="close_arrow_pointer"
                tabindex="0"
              >
                <img
                  onClick={toggleSeeMoreLeftModal}
                  height="15"
                  width="15"
                  alt="close"
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/close.svg"
                  style={{ float: 'right', margin: '25px 25px 0 0' }}
                />
                <div className={`row ${styles.facultyCard} w-100 text-center`}>
                  <div className="col-lg-3 col-sm-12 align-self-center">
                    <a href=" https://www.linkedin.com/in/shikhi-pandey-57204814/">
                      <img src="https://cdn.pegasus.imarticus.org/pgBandF/Faculty-1-linkedin.webp"></img>
                    </a>
                  </div>
                  <div
                    className="col-lg-9 col-sm-12"
                    style={{ padding: '12px 0' }}
                  >
                    <p className={styles.cardTitle}>Ms. Shikhi Pandey</p>
                    <p className={styles.cardText}>
                      A banking professional with over 20 years of experience in
                      Operations Management, Service Excellence Management
                      including quality and compliance. Shikhi has undertaken
                      academic delivery for various corporates for more than ten
                      years. Her training experience entails training employees
                      of various Banks on soft skills and Banking domain
                      including application software Finacle. She has a Post
                      Graduate Diploma in Advance Banking and Management from
                      Narsee Monjee Institute of Management, Mumbai. Shikhi is
                      also a Certified Associate of Indian Institute of Bankers
                      (CAIIB) and a Certified Bank Trainer from National
                      Institute of Banking Management (NIBM) Pune.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
        {seeMoreRightModal && (
          <Modal toggleModal={toggleSeeMoreRightModal}>
            <div
              className="industry-project-popup-ctnr"
              style={{ display: 'block' }}
            >
              <div
                // style={{ float: 'right', padding: '20px 20px 0 0' }}
                role="button"
                class="close_arrow_pointer"
                tabindex="0"
              >
                <img
                  onClick={toggleSeeMoreRightModal}
                  height="15"
                  width="15"
                  alt="close"
                  style={{ float: 'right', margin: '25px 25px 0 0' }}
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/close.svg"
                />
                <div className={`row ${styles.facultyCard} text-center w-100`}>
                  <div className="col-lg-3 col-sm-12 align-self-center">
                    {/* <a href=" https://www.linkedin.com/in/shikhi-pandey-57204814/"> */}
                    <img src="https://cdn.pegasus.imarticus.org/pgBandF/Faculty-2.webp"></img>
                    {/* </a> */}
                  </div>
                  <div
                    className="col-lg-9 col-sm-12"
                    style={{ padding: '12px 0' }}
                  >
                    <p className={styles.cardTitle}>Mr. Venkatesan</p>
                    <p className={styles.cardText}>
                      Mr. Venkatesan is an Imarticus faculty with prior retail
                      banking experience. He has worked in Retail Banking
                      Branches PAN India in various capacities for the last 22
                      years. His knowledge & experience is in Banking HR related
                      activities such as Recruitment, Training and also in
                      Retail Banking Operations. Besides Banking industry
                      experience he has also worked as a Mentor cum Trainer in
                      premier education institutions like ICICI Academy for
                      Skills and NIIT. Venkatesan holds a Masters degree in
                      Commerce along with CAIIB Banking Professional degree.
                    </p>
                  </div>
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
        {paymentModal && (
          <Modal>
            <PaymentModalTabs toggleModal={openPaymentModal} />
          </Modal>
        )}
        <Header toggleModal={toggleModal} propsdata={pagedata} />
        <div
          className={
            styles.paddingGLobalOnWeb +
            ' ' +
            styles.paddingOnTab +
            ' ' +
            styles.paddingOnMobile
          }
          style={{ paddingTop: '80px' }}
        >
          <h1 className={styles.alumniHeader + ' ' + styles.m_b_OnMobile}>
            Our Alumni work at
          </h1>
          {load && (
            <div
              className={
                styles.onTabAndWebImg + ' ' + styles.onSixHundredPlusScreens
              }
            >
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
                style={{ paddingBottom: '45px', paddingTop: '40px' }}
                id="collaborationdisplaynone"
              >
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image\ 100.webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image\ 101\ (1).webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image%2068.webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image%2067.webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image%20102%20(1).webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image%20103%20(1).webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image\ 100.webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image\ 101\ (1).webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image%2068.webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image%2067.webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image%20102%20(1).webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="collaboration_carousal_main_div">
                    <div
                      className="collaborationcarousaldiv2"
                      style={{ padding: '0 10px' }}
                    >
                      <img
                        src={`https://cdn.pegasus.imarticus.org/pgBandF/image%20103%20(1).webp`}
                        alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          )}
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
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/KotakSmaller.webp`}
                      height="56"
                      width="132px"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/AxisSmaller.webp`}
                      height="56"
                      width="120"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/ICICISmaller.webp`}
                      height="38"
                      width="120"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/GenpactSmaller.webp`}
                      height="26"
                      width="100"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/HDFCSmaller.webp`}
                      height="46"
                      width="120"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/MotilalSmaller.webp`}
                      height="46"
                      width="120"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <WhyChoose toggleModal={toggleModal} />

        <div
          className={
            styles.curriculumHighlights +
            ' ' +
            styles.paddingGLobalOnWeb +
            ' ' +
            styles.paddingOnTab +
            ' ' +
            styles.paddingOnMobile
          }
          style={{ padding: '80px' }}
        >
          <div className={'row justify-content-between ' + styles.row}>
            <div className="col-lg-12 col-sm-12 align-self-start">
              <p className={styles.curriculumHeader}>Curriculum Highlights</p>
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
              <div className={styles.modules}>
                <p className={styles.currModules}>Module 1</p>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accHeader}>
                      <p className={styles.accMainHeader}>
                        Retail Banking
                        <br />
                        <span className={styles.accSubHeader}>70 hours</span>
                      </p>
                    </Accordion.Header>
                    <Accordion.Body
                      style={{ padding: '10px 10px 0 10px !important' }}
                    >
                      <ul>
                        <li>Introduction to Banking</li>
                        <li>Retail Liability Products</li>
                        <li>Retail Asset Product</li>
                        <li>Other Products</li>
                        <li>NRI Products</li>
                        <li>Payment Services</li>
                        <li>Branch Operations</li>
                        <li>Regulatory Environment</li>
                        <li>Trends in Banking</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className={styles.modules}>
                <p className={styles.currModules}>Module 2</p>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accHeader}>
                      <p className={styles.accMainHeader}>
                        Introduction to Financial System & Investment Products
                        <br />
                        <span className={styles.accSubHeader}>54 hours</span>
                      </p>
                    </Accordion.Header>
                    <Accordion.Body
                      style={{ padding: '10px 10px 0 10px !important' }}
                    >
                      <ul>
                        <li>Financial System Overview</li>
                        <li>Securities Market Overview</li>
                        <li>Introduction to Investment</li>
                        <li>Equity as an Asset Class</li>
                        <li>Investing in Fixed Income Securities</li>
                        <li>Mutual Funds</li>
                        <li>
                          Life & General Insurance Products and Positioning
                        </li>
                        <li>Introduction to Personal Financial Planning</li>
                        <li>Introduction to Tax Planning</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className={styles.modules}>
                <p className={styles.currModules}>Module 3(Integrated)</p>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accHeader}>
                      <p className={styles.accMainHeader}>
                        Soft Skills
                        <br />
                        <span className={styles.accSubHeader}>100 hours</span>
                      </p>
                    </Accordion.Header>
                    <Accordion.Body
                      style={{ padding: '10px 10px 0 10px !important' }}
                    >
                      <ul>
                        <li>Soft Skills Foundation and Campus to Corporate</li>
                        <li>Cardinals of Communication</li>
                        <li>Honing Communication</li>
                        <li>Curating and Perfecting Communication</li>
                        <li>Corporate and Business Etiquette</li>
                        <li>Customer Service</li>
                        <li>Business Writing</li>
                        <li>Art of Presentation</li>
                        <li>Sales and Negotiation</li>
                        <li>Group Discussion Hacks</li>
                        <li>Personal Grooming</li>
                        <li>Interview Preparation - HR</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className={styles.modules}>
                <div className={styles.mockInter}>
                  <p className={styles.accMainHeader}>
                    Mock Interview
                    <br />
                    <span className={styles.mockInterSpan}>80 hours</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
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
                <div className={`${styles.tags}`}>
                  BUSINESS MANAGEMENT ASSOCIATE
                </div>
                <div className={`${styles.tags}`}>
                  BANKING OPERATIONS MANAGER
                </div>
                <div className={`${styles.tags}`}>VALUE BANKER</div>
                <div className={`${styles.tags}`}>
                  REGULATORY MONITORING ASSOCIATE
                </div>
                <div className={`${styles.tags}`}>CLIENT SERVICING MANAGER</div>
                <div className={`${styles.tags}`}>RELATIONSHIP MANAGER</div>
                <div className={`${styles.tags}`}>RELATIONSHIP OFFICER</div>
                <div className={`${styles.tags}`}>BANK OFFICER</div>
              </div>
              <div className={'row ' + styles.row + ' ' + styles.onWebImg}>
                <img
                  src="https://cdn.pegasus.imarticus.org/pgBandF/Group 635.webp"
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
                  src="https://cdn.pegasus.imarticus.org/pgBandF/Group 1372.png"
                  width={'100%'}
                  height={'192px'}
                  alt="image"
                />
              </div>
            </div>
          </div>

          <p
            className={styles.seeYourself}
            style={{ marginTop: '30px !important' }}
          >
            See yourself in one of these role?
          </p>
          <br />
          <button
            onClick={toggleModal}
            className={`${styles.applyHere} ${styles.button}`}
          >
            Sign Up
          </button>
        </div>

        <div
          className={
            styles.getCertified +
            ' ' +
            styles.paddingGLobalOnWeb +
            ' ' +
            styles.willGetCertifiedMobileDiv +
            ' ' +
            styles.paddingCLRonMobile +
            ' ' +
            styles.paddingOnTab
          }
          style={{ paddingTop: '80px', paddingBottom: '80px' }}
        >
          <div className={'row '}>
            <div className="col-lg-7 col-sm-12">
              <p className={styles.willGetCertified}>Will I get certified?</p>
              <p
                className={
                  styles.willGetCertifiedText + ' ' + styles.desc_margin
                }
              >
                Upon completion, you will earn a professional certificate in
                banking and finance that will add considerable value and help
                your career evolve in the right direction.
              </p>
              <br />
              <div className={'row ' + styles.onWebImg}>
                <div style={{ display: 'flex !important' }}>
                  <div
                    className="col-lg-1 col-md-3 col-sm-6 "
                    style={{ width: '10%' }}
                  >
                    <img
                      className="align-self-end"
                      src="https://cdn.pegasus.imarticus.org/pgBandF/Group 784.webp"
                      height={'56px'}
                      width={'56px'}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div
                    className={`col-lg-2 col-md-3 col-sm-6 align-self-center ${styles.certificateText}`}
                    style={{
                      margin: '0 !important',
                      paddingLeft: '20px !important',
                    }}
                  >
                    Earn your Certificate
                  </div>
                  <div className="col-lg-2"></div>
                  <div
                    className="col-lg-1 col-md-3 col-sm-6"
                    style={{ width: '10%' }}
                  >
                    <img
                      className="align-self-end"
                      src="https://cdn.pegasus.imarticus.org/pgBandF/Group 785.webp"
                      height={'56px'}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div
                    className={`col-lg-4 col-md-3 col-sm-6 align-self-center ${styles.certificateText}`}
                    style={{
                      margin: '0 !important',
                      paddingLeft: '20px !important',
                    }}
                  >
                    Share your Achievements
                  </div>
                </div>
              </div>
              <div className={styles.onTabImg}>
                <div className={styles.certifiedIconsTabs}>
                  <img
                    className="align-self-end"
                    src="https://cdn.pegasus.imarticus.org/pgBandF/Group 784.webp"
                    height={'56px'}
                    style={{ objectFit: 'contain' }}
                  />
                  <span
                    style={{
                      marginLeft: '20px',
                      marginTop: '10px',
                      color: 'white',
                    }}
                  >
                    Earn your certificate
                  </span>
                  <span style={{ marginLeft: '50px' }}></span>
                  <img
                    className="align-self-end"
                    src="https://cdn.pegasus.imarticus.org/pgBandF/Group 785.webp"
                    height={'56px'}
                    style={{ objectFit: 'contain' }}
                  />
                  <span
                    style={{
                      marginLeft: '20px',
                      marginTop: '10px',
                      color: 'white',
                    }}
                  >
                    Share your Achievements
                  </span>
                </div>
              </div>
              <div
                className={styles.onMobileOnlyImg + ' ' + styles.willGetCertify}
              >
                <table style={{ marginBottom: '30px' }}>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          className="align-self-end"
                          src="https://cdn.pegasus.imarticus.org/pgBandF/Group 784.webp"
                          height={'56px'}
                          style={{ objectFit: 'contain' }}
                        />
                      </td>
                      <td style={{ color: 'white' }}>Earn your certificate</td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          className="align-self-end"
                          src="https://cdn.pegasus.imarticus.org/pgBandF/Group 785.webp"
                          height={'56px'}
                          style={{ objectFit: 'contain' }}
                        />
                      </td>
                      <td style={{ color: 'white' }}>
                        Share your Achievements
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-5 col-sm-12" style={{ height: '300px' }}>
              <img
                className="align-self-end"
                src="https://cdn.pegasus.imarticus.org/pgBandF/Banking-&-Finance-Certificate 1.webp"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className={'row ' + styles.OnWebMargin}>
            <div className="col-lg-5 col-sm-12">
              <img
                src="https://cdn.pegasus.imarticus.org/pgBandF/Group 2721.webp"
                style={{ width: '100% !important', objectFit: 'contain' }}
                className={styles.onTabMt_50}
              />
            </div>
            <div
              className={
                'col-lg-7 col-sm-12 align-self-center ' + styles.m_t_OnMobile
              }
            >
              <p className={styles.certifiedSecText}>
                You will also get certified on Mutual Funds by National
                Institute of Securities Markets (NISM) as a part of this
                program. This is the NISM Series V A - Mutual Fund Distribution
                certificate which will allow you to build expertise in Mutual
                Funds.
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            styles.willLearn +
            ' ' +
            styles.paddingGLobalOnWeb +
            ' ' +
            styles.paddingOnMobile +
            ' ' +
            styles.paddingOnTab
          }
        >
          <p className={styles.willLearnHeader}>How Will You Learn?</p>
          <p className={styles.willLearnText + ' ' + styles.desc_margin}>
            Through real-world scenarios and hands-on assignments, you will get
            an understanding of the industry more cohesively and practically,
            with an ability to contribute to the workplace from day one.
          </p>
          <br />
          <br />
          <div className="row">
            <div
              className={'col-lg-4 col-md-4 col-sm-12 ' + styles.onMobileIcons}
            >
              <img
                src="https://cdn.pegasus.imarticus.org/pgBandF/icon-Frame%20(2).webp"
                style={{ width: '56px' }}
              />
              <br />
              <br />
              <p className={styles.learnSubHead}>Case studies:</p>
              <br />
              <p className={styles.learnSubText}>
                Real-world use cases and complex business scenarios that prepare
                you to transition from academics to the industry.
              </p>
            </div>
            <div
              className={'col-lg-4 col-md-4 col-sm-12 ' + styles.onMobileIcons}
            >
              <img
                src="https://cdn.pegasus.imarticus.org/pgBandF/Group (1).webp"
                style={{ width: '56px' }}
              />
              <br />
              <br />
              <p className={styles.learnSubHead}>Assessments and Teach-back:</p>
              <br />
              <p className={styles.learnSubText}>
                Assignments, tests and quizzes internalize key concepts, while
                teach-back sessions demonstrate the accuracy of knowledge.
              </p>
            </div>
            <div
              className={'col-lg-4 col-md-4 col-sm-12 ' + styles.onMobileIcons}
            >
              <img
                src="https://cdn.pegasus.imarticus.org/pgBandF/Group (2).webp"
                style={{ width: '56px' }}
              />
              <br />
              <br />
              <p className={styles.learnSubHead}>Industry Interactions:</p>
              <br />
              <p className={styles.learnSubText}>
                Make presentations on real-life events and understand how market
                dynamics affect financial markets. Attend guest lectures from
                industry experts to reinforce theoretical learning.
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            styles.careerSupport +
            ' ' +
            styles.paddingCLRonMobile +
            ' ' +
            styles.paddingOnTab
          }
          style={{ padding: '80px 10%' }}
        >
          <p className={styles.careerSupportHeader}>
            What Career Support Will I Get?
          </p>
          <p className={styles.careerSupportText + ' ' + styles.desc_margin}>
            You learn and successfully complete the certification, we place.
            Enhance your career by leveraging our 400+ partnerships with
            top-tier hiring firms in the banking and finance industry
          </p>
          <br />
          <br />
          <img
            className={styles.onWebImg}
            src="https://cdn.pegasus.imarticus.org/pgBandF/Group%201189%20(1).webp"
            style={{ objectFit: 'contain' }}
          />
          <img
            className={styles.onTabImg}
            src="https://cdn.pegasus.imarticus.org/pgBandF/Group%201189%20(1).webp"
            style={{ objectFit: 'contain' }}
          />
          <img
            className={styles.onMobileOnlyImg}
            src="https://cdn.pegasus.imarticus.org/pgBandF/Linked%20Cards.webp"
            style={{ objectFit: 'contain' }}
            height="1116px"
            width="100%"
          />
          <br />
          <br />
          <br />
          <button
            onClick={() =>
              toggleModal({
                download: true,
                url: 'https://cdn.pegasus.imarticus.org/brochure/Annual-Placement-Report-2020-2021.pdf',
              })
            }
            className={`${styles.careerReport} ${styles.button}`}
          >
            Download Career Report{' '}
            <img src="https://cdn.pegasus.imarticus.org/pgBandF/Download (9).webp" />{' '}
          </button>
        </div>

        <div
          className={
            styles.placementPartner +
            ' ' +
            styles.paddingOnMobile +
            ' ' +
            styles.paddingOnTab
          }
        >
          <p className={styles.placementPartnerHead}>Placement Partners</p>
          <div className={styles.onWebAndTabImg}>
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
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/image 101 (1).webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/StandardChartered.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/GoldmanSachs.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/Morgan.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/Edelweiss.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/image%2068.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/image 101 (1).webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/StandardChartered.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/GoldmanSachs.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/Morgan.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/Edelweiss.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="collaboration_carousal_main_div">
                  <div
                    className="collaborationcarousaldiv2"
                    style={{ padding: '0 10px' }}
                  >
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/image%2068.webp`}
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </div>
                </div>
              </SwiperSlide>
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
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/MotilalSmaller.webp`}
                      height="56"
                      width="132px"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/StandardSmaller.webp`}
                      height="56"
                      width="120"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/GoldmanSmaller.webp`}
                      height="38"
                      width="120"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/MorganSmaller.webp`}
                      height="26"
                      width="100"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/EdelweissSmaller.webp`}
                      height="46"
                      width="120"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                  <td>
                    <img
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/KotakSmaller.webp`}
                      height="46"
                      width="120"
                      alt="Imarticus Learingin KPMG Ai & ML IITG IIM LSE"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ padding: '0px 10%' }} className={styles.paddingOnTab}>
          <p className={styles.joinBankingHead}>
            How can I join the Banking and Finance course?
          </p>
          <p className={styles.joinBankingText + ' ' + styles.desc_margin}>
            This course is tailor-made for those who want to build a career in
            retail banking or financial services. If you’re looking to get a
            head start on your next job or upskill to get a promotion, this is
            the course for you. Offering 300+ hours of in-depth skill
            enhancement and industry training, this placement-focused
            Postgraduate Program in Banking and Finance is the best course for
            your finance and banking career.
          </p>
          <br />
          <br />

          <img
            className={styles.onWebImg}
            src="https://cdn.pegasus.imarticus.org/pgBandF/Group 2805.webp"
            height={'192px'}
            style={{ objectFit: 'contain' }}
          />
          <div className={styles.onTabFlexImg} style={{ display: 'flex' }}>
            <div>
              <img
                height={'192px'}
                width={'95%'}
                src={
                  'https://cdn.pegasus.imarticus.org/pgBandF/Group 2640.webp'
                }
              />
            </div>
            <div>
              <img
                height={'192px'}
                width={'95%'}
                src={
                  'https://cdn.pegasus.imarticus.org/pgBandF/Group 2637 (1).webp'
                }
              />
            </div>
            <div>
              <img
                height={'192px'}
                width={'95%'}
                src={
                  'https://cdn.pegasus.imarticus.org/pgBandF/Group 2638.webp'
                }
              />
            </div>
            <div>
              <img
                height={'192px'}
                width={'95%'}
                src={
                  'https://cdn.pegasus.imarticus.org/pgBandF/Group 2639.webp'
                }
              />
            </div>
          </div>
          <div
            className={styles.tabScreenWhyChoose + ' ' + styles.onMobileOnlyImg}
          >
            <div
              className
              style={{
                maxWidth: '1300px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <div className={'award-main ' + styles.award_main_mobiles}>
                <Swiper
                  style={{ paddingBottom: '10px', marginLeft: '4px' }}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  slidesPerGroup={1}
                  slidesPerView={'auto'}
                >
                  <SwiperSlide>
                    <div style={{ width: '200px', overflow: 'scroll' }}>
                      <img
                        height={'192px'}
                        width={'170px'}
                        src={
                          'https://cdn.pegasus.imarticus.org/pgBandF/Group 2640.webp'
                        }
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div style={{ width: '200px', overflow: 'scroll' }}>
                      <img
                        height={'192px'}
                        width={'170px'}
                        src={
                          'https://cdn.pegasus.imarticus.org/pgBandF/Group 2637 (1).webp'
                        }
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div style={{ width: '200px', overflow: 'scroll' }}>
                      <img
                        height={'192px'}
                        width={'170px'}
                        src={
                          'https://cdn.pegasus.imarticus.org/pgBandF/Group 2638.webp'
                        }
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div style={{ width: '200px', overflow: 'scroll' }}>
                      <img
                        height={'192px'}
                        width={'170px'}
                        src={
                          'https://cdn.pegasus.imarticus.org/pgBandF/Group 2639.webp'
                        }
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* </div> */}
          </div>

          <div></div>
        </div>

        <div
          style={{ padding: '104px 10%' }}
          className={styles.paddingOnMobile + ' ' + styles.paddingOnTab}
        >
          <div className={styles.feeOuter}>
            <p className={styles.feeHead}>Program Fee</p>
            <p className={styles.fee}>₹1,20,000</p>
            <p className={styles.emiText}>EMI starting from ₹11,189 / month</p>
            <p
              className={styles.viewPlans}
              onClick={openPaymentModal}
              style={{ textTransform: 'capitalize' }}
            >
              view payment plans
            </p>
          </div>
          <br />
          <br />
          <p className={styles.needAdvice}>
            Need Advice? Our admissions team is here to help.
          </p>
          <br />
          <button
            onClick={toggleModal}
            className={`${styles.enquireNow} ${styles.button}`}
          >
            Enquire now
          </button>
        </div>

        <div
          className={
            styles.faculty +
            ' ' +
            styles.paddingCLRonMobile +
            ' ' +
            styles.paddingOnTab
          }
        >
          <p className={styles.facultyHead}>Faculty</p>
          <br />
          <br />
          <div className={styles.onWebImg}>
            <div className={'row ' + styles.row}>
              <div className="col-6">
                <div className="card">
                  <div className={'row ' + styles.row}>
                    <div className="col-3" style={{ padding: '15px 0 0 15px' }}>
                      <a href="https://www.linkedin.com/in/shikhi-pandey-57204814/">
                        <img src="https://cdn.pegasus.imarticus.org/pgBandF/Faculty-1-linkedin.webp"></img>
                      </a>
                    </div>
                    <div className="col-9" style={{ padding: '25px' }}>
                      <p className={styles.cardTitle}>Ms. Shikhi Pandey</p>
                      <p className={styles.cardText}>
                        A banking professional with over 20 years of experience
                        in Operations’ Management, Service Excellence Management
                        including quality and compliance. Shikhi has undertaken
                        academic delivery for various corporates for more than
                        ten years. Her training experience entails training
                        employees of various Banks on soft skills and Banking
                        domain
                        <span
                          onClick={toggleSeeMoreLeftModal}
                          className={styles.seeMore}
                        >
                          ...See More
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <div className={'row ' + styles.row}>
                    <div className="col-3" style={{ padding: '15px 0 0 15px' }}>
                      <img src="https://cdn.pegasus.imarticus.org/pgBandF/Group 2806.webp"></img>
                    </div>
                    <div className="col-9" style={{ padding: '25px' }}>
                      <p className={styles.cardTitle}>Mr. Venkatesan</p>
                      <p className={styles.cardText}>
                        Mr. Venkatesan is an Imarticus faculty with prior retail
                        banking experience. He has worked in Retail Banking
                        Branches PAN India in various capacities for the last 22
                        years. His knowledge & experience is in Banking HR
                        related activities such as Recruitment, Training and
                        also in Retail Banking Operations. Besides Banking
                        industry experience he has also worked as a
                        <span
                          onClick={toggleSeeMoreRightModal}
                          className={styles.seeMore}
                        >
                          ...See More
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.onMobileOnlyImg}>
            <Swiper
              style={{ paddingBottom: '10px', marginLeft: '4px' }}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
            >
              <SwiperSlide>
                <div style={{ width: '100%', overflow: 'scroll' }}>
                  <div className={'card ' + styles.facultyCardOnMobile}>
                    <div
                      className="row"
                      style={{ padding: '20px 0', margin: '0', width: '100%' }}
                    >
                      <div className="col-12 text-center align-self-center">
                        <a href="https://www.linkedin.com/in/shikhi-pandey-57204814/">
                          <img src="https://cdn.pegasus.imarticus.org/pgBandF/Faculty-1-linkedin.webp"></img>
                        </a>
                      </div>
                      <div className="col-12 text-center">
                        <p className={styles.cardTitle}>Ms. Shikhi Pandey</p>
                        <p className={styles.cardText}>
                          A banking professional with over 20 years of
                          experience in Operations’ Management, Service
                          Excellence Management including quality and
                          compliance. Shikhi has undertaken academic delivery
                          for various corporates for more than ten years.{' '}
                          <span
                            onClick={toggleSeeMoreLeftModal}
                            className={styles.seeMore}
                          >
                            ...See More
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ width: '100%', overflow: 'scroll' }}>
                  <div className={'card ' + styles.facultyCardOnMobile}>
                    <div
                      className="row"
                      style={{ padding: '20px 0', margin: '0', width: '100%' }}
                    >
                      <div className="col-12 text-center align-self-center">
                        <img src="https://cdn.pegasus.imarticus.org/pgBandF/Group 2806.webp"></img>
                      </div>
                      <div className="col-12 text-center">
                        <p className={styles.cardTitle}>Mr. Venkatesan</p>
                        <p className={styles.cardText}>
                          Mr. Venkatesan is an Imarticus faculty with prior
                          retail banking experience. He has worked in Retail
                          Banking Branches PAN India in various capacities for
                          the last 22 years. His knowledge & experience is in
                          Banking HR related activities such as Recruitment,
                          Training and
                          <span
                            onClick={toggleSeeMoreRightModal}
                            className={styles.seeMore}
                          >
                            ...See More
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className={styles.onTabImg}>
            <Swiper
              style={{ paddingBottom: '10px', marginLeft: '4px' }}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
            >
              <SwiperSlide>
                <div
                  className="col-6"
                  style={{ width: '600px', overflow: 'scroll' }}
                >
                  <div
                    className="card"
                    style={{ width: '580px', overflow: 'auto' }}
                  >
                    <div className={'row ' + styles.row}>
                      <div
                        className="col-3"
                        style={{ padding: '15px 0 0 15px' }}
                      >
                        <a href="https://www.linkedin.com/in/shikhi-pandey-57204814/">
                          <img src="https://cdn.pegasus.imarticus.org/pgBandF/Faculty-1-linkedin.webp"></img>
                        </a>
                      </div>
                      <div className="col-9" style={{ padding: '25px' }}>
                        <p className={styles.cardTitle}>Ms. Shikhi Pandey</p>
                        <p className={styles.cardText}>
                          A banking professional with over 20 years of
                          experience in Operations’ Management, Service
                          Excellence Management including quality and
                          compliance. Shikhi has undertaken academic delivery
                          for various corporates for more than ten years. Her
                          training experience entails training employees of
                          various Banks on soft skills and Banking domain
                          including application so
                          <span
                            onClick={toggleSeeMoreLeftModal}
                            className={styles.seeMore}
                          >
                            ...See More
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="col-6"
                  style={{ width: '600px', overflow: 'scroll' }}
                >
                  <div className="card" style={{ width: '580px' }}>
                    <div className={'row ' + styles.row}>
                      <div
                        className="col-3"
                        style={{ padding: '15px 0 0 15px' }}
                      >
                        <img src="https://cdn.pegasus.imarticus.org/pgBandF/Group 2806.webp"></img>
                      </div>
                      <div className="col-9" style={{ padding: '25px' }}>
                        <p className={styles.cardTitle}>Mr. Venkatesan</p>
                        <p className={styles.cardText}>
                          Mr. Venkatesan is an Imarticus faculty with prior
                          retail banking experience. He has worked in Retail
                          Banking Branches PAN India in various capacities for
                          the last 22 years. His knowledge & experience is in
                          Banking HR related activities such as Recruitment,
                          Training and also in Retail Banking Operations.
                          Besides Banking industry experience he has also worked
                          as a
                          <span
                            onClick={toggleSeeMoreRightModal}
                            className={styles.seeMore}
                          >
                            ...See More
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div
          className={
            'faqs ' + styles.paddingOnMobile + ' ' + styles.paddingOnTab
          }
          style={{ padding: '104px 10%' }}
        >
          <p className={styles.facultyHead}>Wait! I have some questions</p>
          <br />
          <br />
          <p className={styles.aboutProgram}>About Program</p>
          <br />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is the format of the program?
              </Accordion.Header>
              <Accordion.Body style={{ padding: '10px 20px !important' }}>
                This is a 300+ hours classroom training program that provides
                aspirants with in-depth exposure to products, processes and
                operations for roles in retail banking and financial services.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What is the duration of the program?
              </Accordion.Header>
              <Accordion.Body style={{ padding: '10px 20px !important' }}>
                This is a 4-month program if done full-time on weekdays. Classes
                will be conducted from Tuesday to Friday, for 4 hours every day.
                Please contact the nearest Imarticus center for more
                information.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What certificates do I get in this program?
              </Accordion.Header>
              <Accordion.Body style={{ padding: '10px 20px !important' }}>
                Participants who have successfully completed the program and
                have met the attendance requirements will receive a Postgraduate
                Program in Banking and Finance certification.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What study material will be provided to me for the program?
              </Accordion.Header>
              <Accordion.Body style={{ padding: '10px 20px !important' }}>
                The core learning will happen via 300+ hours of classroom
                lectures at the center where you register. You will also have
                access to additional study material like video recordings of
                previous virtual classes, PowerPoint presentations, case
                studies, quizzes and e-Books on the learning portal. You will be
                given extended access to a fully integrated online learning
                portal where all your learning material will be uploaded. You
                will need to log in to the learning portal using the credentials
                provided to you and navigate through the portal.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <br />
          <br />
          <p className={styles.aboutProgram}>Eligibility</p>
          <br />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is the minimum eligibility requirement for the program?
              </Accordion.Header>
              <Accordion.Body style={{ padding: '10px 20px !important' }}>
                Candidates with a minimum of 50% marks in
                graduation/postgraduation are eligible to apply to the program.
                Candidates will also be required to pass an admission test to be
                enrolled in the program.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What sort of jobs will I get after completing the program?
              </Accordion.Header>
              <Accordion.Body style={{ padding: '10px 20px !important' }}>
                Candidates will be taking up entry-level roles in the banking
                and financial services industry.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What is the eligibility criteria for placements?
              </Accordion.Header>
              <Accordion.Body style={{ padding: '10px 20px !important' }}>
                <ol>
                  <li>
                    Average communication skills: Students must be able to
                    converse in basic English. Should be able to understand
                    lectures delivered in English.
                  </li>
                  <li>
                    Dynamic individuals and ready to work in CASA Sales/Field
                    sales profiles.
                  </li>
                  <li>Age should be less than 25 Yrs.</li>
                  <li>
                    Any full-time graduation completed with 50% and above.
                  </li>
                  <li>Clear the certification with at least 60% and above.</li>
                  <li>Attendance must be above 80%</li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <br />
          <br />
          <p className={styles.aboutProgram}>Program Fees</p>
          <br />
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What are the fees for the program?
              </Accordion.Header>
              <Accordion.Body style={{ padding: '10px 20px !important' }}>
                The Postgraduate Program in Banking and Finance costs INR
                120,000. You can pay by credit card, debit card or net banking
                from all leading banks. We offer EMI loan options as well.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Can I land retail banking jobs after doing this course?
              </Accordion.Header>
              <Accordion.Body style={{ padding: '10px 20px !important' }}>
                Yes, you can. Imarticus’ placement assurance system ensures that
                every successful student from this course gets placed in the
                industry’s top-tier firms. This course is designed to give you
                as much practical knowledge as food for thought, to encourage
                out-of-the-box thinking and future-oriented ideation.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion>
            <Accordion.Item eventKey={11}>
              <Accordion.Header style={{ borderBottom: '1px solid #E5E5E5' }}>
                What is the refund policy?
              </Accordion.Header>
              <Accordion.Body style={{ margin: '16px 20px' }}>
                To know more about the Imarticus Refund policy{' '}
                <a
                  href="/refund-policy"
                  style={{ color: 'black', fontWeight: 600 }}
                >
                  Click here.
                </a>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div
          className={'similarPrograms ' + styles.paddingOnTab}
          style={{ padding: '0px 10% 104px 10%' }}
        >
          <SimilarPrograms
            propsdata={props.propsdata.allData}
            programid={'FINANCE'}
          />
        </div>
      </Layout>
    </>
  )
}

export default PG_BandF

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
