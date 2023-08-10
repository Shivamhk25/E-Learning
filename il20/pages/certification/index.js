import React, { useRef, useEffect, useState } from 'react'
import styleCSS from '!!raw-loader!../../styles/index.css'
import styleCSS3 from '!!raw-loader!../../styles/coursepage.css'
import styleCSS4 from '!!raw-loader!../../styles/ourprogram.css'
import styleCSS5 from '!!raw-loader!../../styles/enquireform.css'
import styleCSS6 from '!!raw-loader!../../styles/collaboration.css'

const fixCSS = `}${styleCSS},${styleCSS3},${styleCSS4},${styleCSS5},${styleCSS6}{`
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import Imarticusnews from '../../components/imarticusnews'
import Centerofexcellence2 from '../../components/centerofexcellence2'
import Advisory from '../../components/Advisory'
import Blogimarticus from '../../components/blogimarticus'
import Webinarimarticus from '../../components/webinarimarticus'
import Salesbanner from '../../components/salesbanner'
import Program from '../../json/program.json'
import Image from 'next/image'
import Accordion from 'react-bootstrap/Accordion'
import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/Formtype4-Nm-Em-Con-Loc-AoI-MoL'
import { configs, countryCodes } from '../../constants'
import { GetProgramsAsPerTagName } from '../../services/helper'
import Styles from '../../styles/Webinarimarticus.module.css'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Autoplay } from 'swiper'

export default function Home(props) {
  const [selectedIndex, setSelectedIndex] = useState('FINANCE')
  const [formModal, setFormModal] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  const [brochureUrl, setBrochureUrl] = useState()
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
    <div style={{ fontFamily: 'Source Sans Pro' }}>
      <Layout toggleModal={toggleModal} propsdata={props.propsdata.allData}>
        <Head>
          <title>
            Certification Courses For Professionals & Executives | Imarticus
            Learning
          </title>
          <meta
            name="description"
            content="For almost a decade, Imarticus Learning has been committed to delivering programs that are innovative and outcome-focused. Master any domain with our certification programs."
          />
          <meta
            name="keywords"
            content="imarticus, imarticus learning, finance courses, analytic courses, technology courses"
          />
          <meta
            property="og:title"
            content="Online Training Courses & Education Programs Imarticus Learning"
          />
          <meta
            property="og:description"
            content="Imarticus Learning offers a range of Finance, Analytics, Technology, Fintech, & Business Analysis certification courses with placement assistance to help you advance your career"
          />
          <meta property="og:url" content="https://imarticus.org/" />
          <meta
            property="og:image"
            content="https://cdn.pegasus.imarticus.org/imarticus_2/FACEBOOK-open-graph.jpg"
          />
          <meta property="product:brand" content="Imarticus Learning" />
          <link rel="canonical" href="https://imarticus.org/certification/" />
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

        {formModal && (
          <Modal toggleModal={toggleModal}>
            <EnquireForm
              toggleModal={toggleModal}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              propsdata={props.propsdata.allData}
              propsid="Certification Course"
            />
          </Modal>
        )}
        {/* header */}
        <div
          className="image-container"
          style={{ width: '100%', boxSizing: 'border-box' }}
        >
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div className="middle-text">
              <h1>CERTIFICATION COURSES</h1>
              <p>
                For almost a decade, Imarticus Learning has been committed to
                delivering programs that are innovative and outcome-focused.
                With our certification programs, you can specialize in your
                field of choice and earn certifications from leading
                institutions around the world.{' '}
              </p>
            </div>
            <div className="header_icon_data">
              <div className="header_data">
                <div>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/homepageheadericon3.svg"
                    layout="responsive"
                    className="icon_style displayblock"
                  />
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/bag.svg"
                    layout="responsive"
                    className="icon_style displaynone"
                  />
                </div>
                <div>
                  <h1>56,000+</h1>
                  <p>Placements</p>
                </div>
              </div>
              <div className="header_data">
                <div>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/homepageheadericon2.svg"
                    layout="responsive"
                    className="icon_style displayblock"
                  />
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/Group (1).svg"
                    layout="responsive"
                    className="icon_style displaynone"
                  />
                </div>
                <div>
                  <h1>45,000+</h1>
                  <p>Career Transitions</p>
                </div>
              </div>
              <div className="header_data">
                <div>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/homepageheadericon1.svg"
                    width="1"
                    height="1"
                    layout="responsive"
                    className="icon_style displayblock"
                  />
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/handfold.svg"
                    width="1"
                    height="1"
                    layout="responsive"
                    className="icon_style displaynone"
                  />
                </div>
                <div>
                  <h1>500+</h1>
                  <p>Hiring Partners</p>
                </div>
              </div>
            </div>
            <div className="middle-button">
              <button
                className="btn2"
                onClick={toggleModal}
                type="button"
                style={{ cursor: 'pointer' }}
              >
                <p>Enquire Now</p>
              </button>
            </div>
          </div>
        </div>

        {/* hiring partner */}
        <div style={{ margin: '0 auto', boxSizing: 'border-box' }}>
          <div>
            <div className="collab academic">
              <div className style={{ textAlign: 'center' }}>
                <div className="no-margin hiringpartnermain">
                  <div className="hiringpartnerheading">
                    <h1>500+ Multinational Hiring Partners</h1>
                    <h2>A World Of Opportunities For You</h2>
                  </div>
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
                    {Program.hiringpartners.map(function (img) {
                      return (
                        <SwiperSlide>
                          <div className="collaboration_carousal_main_div">
                            <div className="collaborationcarousaldiv">
                              <Image
                                src={img.img}
                                width="136px"
                                height="56px"
                                layout="fixed"
                                objectFit="contain"
                                alt="Imarticus Learning KPMG AI & ML IITG IIM LSE"
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                  {/* </div> */}
                  <div className="mobile_image_carousal">
                    {Program.hiringpartners.map(function (img, idx) {
                      if (idx > 7) {
                        return
                      }
                      return (
                        <div className="">
                          <div className="collaborationcarousaldiv">
                            <Image
                              src={img.img}
                              alt="Hiring Partners Opportunities"
                              height="56"
                              width="158"
                              layout="fixed"
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sales banner */}
        {/* <Salesbanner/> */}

        {/* ideal candidate */}
        <div className="news ideal_candiate_img" style={{}}>
          <div
            className
            style={{
              maxWidth: '1300px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div className="ideal_candidate_header">
              <div>
                <h1 className="ideal_title">
                  Master Any Domain With Our Certification Programs
                </h1>
              </div>
              <div className="master_webcard">
                {Program.mastering_arr.map(function (master, index) {
                  return (
                    <div className="mastering_card_main">
                      <div className="mastering_card_circle">
                        <Image
                          src={master.img2}
                          alt=""
                          height="40"
                          width="40"
                          layout="responsive"
                          className="mastering_img"
                        />
                      </div>
                      <h1>{master.title}</h1>
                      <p>{master.desc}</p>
                    </div>
                  )
                })}
              </div>
              <div className="master_carousal_card">
                <Swiper
                  // style={{ paddingBottom: '10px', marginLeft: '4px' }}
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  slidesPerGroup={1}
                  slidesPerView={'auto'}
                  className={Styles.webinar_swipercarouselpagination}
                  id="webinarcarousal"
                >
                  {Program.mastering_arr.map(function (master, index) {
                    return (
                      <SwiperSlide>
                        <div style={{ width: '300px', marginTop: '36px' }}>
                          <div className="mastering_card_main">
                            <div className="mastering_card_circle">
                              <Image
                                src={master.img2}
                                alt=""
                                height="40"
                                width="40"
                                layout="responsive"
                                className="mastering_img"
                              />
                            </div>
                            <h1 style={{ overflow: 'auto' }}>{master.title}</h1>
                            <p style={{ overflow: 'auto' }}>{master.desc}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* our program */}
        <section className="ourprogramspacing" style={{ background: '' }}>
          <div
            style={{
              margin: '0 auto',
              boxSizing: 'border-box',
              maxWidth: '1300px',
            }}
          >
            <div id="courses" style={{ boxSizing: 'border-box' }}>
              <h1 className="course-detail-titles2 sec-heading">
                Our Programs
              </h1>

              {/* web view */}
              <div className="rowourprogram">
                <ul className="select">
                  <div id="ampSelector" layout="container">
                    <li
                      role="button"
                      option={0}
                      onClick={() => setSelectedIndex('FINANCE')}
                      className={`course-detail-info-title center-all-768 button ${
                        selectedIndex == 'FINANCE' && 'selected'
                      }`}
                    >
                      <span role="button">FINANCE</span>
                      <svg
                        style={{ marginLeft: 'auto' }}
                        xmlns="http://www.w3.org/2000/svg"
                        alt="Finance"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />{' '}
                      </svg>
                    </li>
                    <li
                      role="button"
                      option={1}
                      onClick={() => setSelectedIndex('ANALYTICS')}
                      className={`course-detail-info-title center-all-768 button ${
                        selectedIndex == 'ANALYTICS' && 'selected'
                      }`}
                    >
                      <span role="button">ANALYTICS</span>
                      <svg
                        style={{ marginLeft: 'auto' }}
                        xmlns="http://www.w3.org/2000/svg"
                        alt="Analytics"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />{' '}
                      </svg>
                    </li>
                    <li
                      role="button"
                      option={2}
                      onClick={() => setSelectedIndex('TECHNOLOGY')}
                      className={`course-detail-info-title center-all-768 button ${
                        selectedIndex == 'TECHNOLOGY' && 'selected'
                      }`}
                      data-amp-bind-class="course_selected.selected==2? 'course-detail-info-title center-all-768 selected button' : 'course-detail-info-title center-all-768 button'"
                    >
                      <span role="button">TECHNOLOGY</span>
                      <svg
                        style={{ marginLeft: 'auto' }}
                        xmlns="http://www.w3.org/2000/svg"
                        alt="Technology"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />{' '}
                      </svg>
                    </li>
                    <li
                      role="button"
                      option={2}
                      onClick={() => setSelectedIndex('MARKETING')}
                      className={`course-detail-info-title center-all-768 button ${
                        selectedIndex == 'MARKETING' && 'selected'
                      }`}
                      data-amp-bind-class="course_selected.selected==2? 'course-detail-info-title center-all-768 selected button' : 'course-detail-info-title center-all-768 button'"
                    >
                      <span role="button">MARKETING</span>
                      <svg
                        style={{ marginLeft: 'auto' }}
                        xmlns="http://www.w3.org/2000/svg"
                        alt="Technology"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />{' '}
                      </svg>
                    </li>
                  </div>
                </ul>

                <div className="cards">
                  <div className="course-row">
                    {props.propsdata.allData &&
                      props.propsdata.allData.length > 0 &&
                      props.propsdata.allData
                        .filter(
                          (course) => course.program == 'Certification Course'
                        )
                        .map((course) => (
                          <div
                            className={
                              course.tag.indexOf(selectedIndex) > -1
                                ? ''
                                : 'no-display'
                            }
                          >
                            <div className="card">
                              <div
                                className="card-image"
                                style={{
                                  background: `url(${course.img})`,
                                  backgroundSize: 'cover',
                                }}
                              >
                                <div className="smaller-card-div">
                                  <div className="between-line smaller-card-div-img">
                                    <Image
                                      src={course.img2}
                                      alt="course insititute"
                                      height="30px"
                                      width="80px"
                                      layout="fixed"
                                      objectFit="contain"
                                    />
                                  </div>
                                  <div className="smaller-card-div-text">
                                    <p>{course.program}</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="card-body">
                                  <h1
                                    className="main"
                                    style={{ marginBottom: 'auto' }}
                                  >
                                    {course.programName}
                                  </h1>
                                  <p className="description_text">
                                    {course.description}
                                  </p>

                                  <div className="course_rating">
                                    <p className="course_desc">
                                      {course.duration1}
                                    </p>
                                    <p className="course_desc">
                                      {course.duration2}
                                    </p>
                                    <p className="course_ugc_titled">
                                      {course.ugctitled ? 'UGC Entitled' : ''}{' '}
                                    </p>
                                    <div className="course_star">
                                      <Image
                                        src={course.star}
                                        alt=""
                                        width="80px"
                                        height="20px"
                                        layout="fixed"
                                      />
                                      <p className="coursetagrating">
                                        {course.rating}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="more">
                                    <div>
                                      <div className="apply_button">
                                        <a
                                          className="linkhovercolor"
                                          href={course.link}
                                        >
                                          Know More
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              </div>

              {/* mobile view */}
              <div className="mobiletab-ourprogram">
                <Accordion defaultActiveKey="1" className="dropdownourprogram">
                  <Accordion.Item eventKey="1" className="ourProgramaccordion">
                    <Accordion.Header>
                      <p className="navbar-drop-down-text">FINANCE</p>
                    </Accordion.Header>
                    <Accordion.Body className="ourprogramaccans">
                      <Swiper
                        spaceBetween={26}
                        style={{ paddingBottom: '10px', marginLeft: '4px' }}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerGroup={1}
                        slidesPerView={'auto'}
                        id="ourProgramCarousal1"
                      >
                        {props.propsdata.allData &&
                          props.propsdata.allData.length > 0 &&
                          GetProgramsAsPerTagName(
                            props.propsdata.allData,
                            'FINANCE'
                          )
                            .filter(
                              (course) =>
                                course.program == 'Certification Course'
                            )
                            .map((course) => (
                              <SwiperSlide className="ourprogramcard_main">
                                <div className="ourprogramcard">
                                  <div
                                    className="card-image"
                                    style={{
                                      background: `url(${course.img})`,
                                      backgroundSize: 'cover',
                                    }}
                                  >
                                    <div className="smaller-card-div">
                                      <div className="between-line smaller-card-div-img">
                                        <Image
                                          src={course.img2}
                                          alt="course insititute"
                                          height="30px"
                                          width="80px"
                                          layout="fixed"
                                          objectFit="contain"
                                        ></Image>
                                      </div>
                                      <div className="smaller-card-div-text">
                                        <p>{course.program}</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="card-body">
                                      <h1
                                        className="course_name"
                                        style={{ marginBottom: 'auto' }}
                                      >
                                        {course.programName}
                                      </h1>
                                      <p className="description_text">
                                        {course.description}
                                      </p>

                                      <div className="course_rating">
                                        <p className="course_desc">
                                          {course.duration1}
                                        </p>
                                        <p className="course_desc">
                                          {course.duration2}
                                        </p>
                                        <p className="course_ugc_titled">
                                          {course.ugctitled
                                            ? 'UGC Entitled'
                                            : ''}{' '}
                                        </p>
                                        <div className="course_star">
                                          <Image
                                            src={course.star}
                                            alt=""
                                            width="80px"
                                            height="20px"
                                            layout="fixed"
                                          ></Image>
                                          <p className="coursetagrating">
                                            {course.rating}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="more">
                                        <div>
                                          <div className="apply_button">
                                            <a
                                              className="linkhovercolor"
                                              href={course.link}
                                            >
                                              Know More
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                      </Swiper>
                      <div className="mobile_carousal_link">
                        <a href="/finance/">Explore our Finance Programs</a>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="ourProgramaccordion">
                    <Accordion.Header>
                      <p className="navbar-drop-down-text">ANALYTICS</p>
                    </Accordion.Header>
                    <Accordion.Body className="ourprogramaccans">
                      <Swiper
                        spaceBetween={26}
                        style={{ paddingBottom: '10px', marginLeft: '4px' }}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerGroup={1}
                        slidesPerView={'auto'}
                        id="ourProgramCarousal1"
                      >
                        {props.propsdata.allData &&
                          props.propsdata.allData.length > 0 &&
                          GetProgramsAsPerTagName(
                            props.propsdata.allData,
                            'ANALYTICS'
                          )
                            .filter(
                              (course) =>
                                course.program == 'Certification Course'
                            )
                            .map((course) => (
                              <SwiperSlide className="ourprogramcard_main">
                                <div className="ourprogramcard">
                                  <div
                                    className="card-image"
                                    style={{
                                      background: `url(${course.img})`,
                                      backgroundSize: 'cover',
                                    }}
                                  >
                                    <div className="smaller-card-div">
                                      <div className="between-line smaller-card-div-img">
                                        <Image
                                          src={course.img2}
                                          alt="course insititute"
                                          height="30px"
                                          width="80px"
                                          layout="fixed"
                                          objectFit="contain"
                                        ></Image>
                                      </div>
                                      <div className="smaller-card-div-text">
                                        <p>{course.program}</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="card-body">
                                      <h1
                                        className="course_name"
                                        style={{ marginBottom: 'auto' }}
                                      >
                                        {course.programName}
                                      </h1>
                                      <p className="description_text">
                                        {course.description}
                                      </p>

                                      <div className="course_rating">
                                        <p className="course_desc">
                                          {course.duration1}
                                        </p>
                                        <p className="course_desc">
                                          {course.duration2}
                                        </p>
                                        <p className="course_ugc_titled">
                                          {course.ugctitled
                                            ? 'UGC Entitled'
                                            : ''}{' '}
                                        </p>
                                        <div className="course_star">
                                          <Image
                                            src={course.star}
                                            alt=""
                                            width="80px"
                                            height="20px"
                                            layout="fixed"
                                          ></Image>
                                          <p className="coursetagrating">
                                            {course.rating}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="more">
                                        <div>
                                          <div className="apply_button">
                                            <a
                                              className="linkhovercolor"
                                              href={course.link}
                                            >
                                              Know More
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                      </Swiper>
                      <div className="mobile_carousal_link">
                        <a href="/analytics/">Explore our Analytics Programs</a>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="ourProgramaccordion">
                    <Accordion.Header>
                      <p className="navbar-drop-down-text">TECHNOLOGY</p>
                    </Accordion.Header>
                    <Accordion.Body className="ourprogramaccans">
                      <Swiper
                        spaceBetween={26}
                        style={{ paddingBottom: '10px', marginLeft: '4px' }}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerGroup={1}
                        slidesPerView={'auto'}
                        id="ourProgramCarousal1"
                      >
                        {props.propsdata.allData &&
                          props.propsdata.allData.length > 0 &&
                          GetProgramsAsPerTagName(
                            props.propsdata.allData,
                            'TECHNOLOGY'
                          )
                            .filter(
                              (course) =>
                                course.program == 'Certification Course'
                            )
                            .map((course) => (
                              <SwiperSlide className="ourprogramcard_main">
                                <div className="ourprogramcard">
                                  <div
                                    className="card-image"
                                    style={{
                                      background: `url(${course.img})`,
                                      backgroundSize: 'cover',
                                    }}
                                  >
                                    <div className="smaller-card-div">
                                      <div className="between-line smaller-card-div-img">
                                        <Image
                                          src={course.img2}
                                          alt="course insititute"
                                          height="30px"
                                          width="80px"
                                          layout="fixed"
                                          objectFit="contain"
                                        ></Image>
                                      </div>
                                      <div className="smaller-card-div-text">
                                        <p>{course.program}</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="card-body">
                                      <h1
                                        className="course_name"
                                        style={{ marginBottom: 'auto' }}
                                      >
                                        {course.programName}
                                      </h1>
                                      <p className="description_text">
                                        {course.description}
                                      </p>

                                      <div className="course_rating">
                                        <p className="course_desc">
                                          {course.duration1}
                                        </p>
                                        <p className="course_desc">
                                          {course.duration2}
                                        </p>
                                        <p className="course_ugc_titled">
                                          {course.ugctitled
                                            ? 'UGC Entitled'
                                            : ''}{' '}
                                        </p>
                                        <div className="course_star">
                                          <Image
                                            src={course.star}
                                            alt=""
                                            width="80px"
                                            height="20px"
                                            layout="fixed"
                                          ></Image>
                                          <p className="coursetagrating">
                                            {course.rating}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="more">
                                        <div>
                                          <div className="apply_button">
                                            <a
                                              className="linkhovercolor"
                                              href={course.link}
                                            >
                                              Know More
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                      </Swiper>
                      <div className="mobile_carousal_link">
                        <a href="/technology/">
                          Explore our Technology Programs
                        </a>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className="ourProgramaccordion">
                    <Accordion.Header>
                      <p className="navbar-drop-down-text">MARKETING</p>
                    </Accordion.Header>
                    <Accordion.Body className="ourprogramaccans">
                      <Swiper
                        spaceBetween={26}
                        style={{ paddingBottom: '10px', marginLeft: '4px' }}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerGroup={1}
                        slidesPerView={'auto'}
                        id="ourProgramCarousal1"
                      >
                        {props.propsdata.allData &&
                          props.propsdata.allData.length > 0 &&
                          GetProgramsAsPerTagName(
                            props.propsdata.allData,
                            'MARKETING'
                          )
                            .filter(
                              (course) =>
                                course.program == 'Certification Course'
                            )
                            .map((course) => (
                              <SwiperSlide className="ourprogramcard_main">
                                <div className="ourprogramcard">
                                  <div
                                    className="card-image"
                                    style={{
                                      background: `url(${course.img})`,
                                      backgroundSize: 'cover',
                                    }}
                                  >
                                    <div className="smaller-card-div">
                                      <div className="between-line smaller-card-div-img">
                                        <Image
                                          src={course.img2}
                                          alt="course insititute"
                                          height="30px"
                                          width="80px"
                                          layout="fixed"
                                          objectFit="contain"
                                        ></Image>
                                      </div>
                                      <div className="smaller-card-div-text">
                                        <p>{course.program}</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div className="card-body">
                                      <h1
                                        className="course_name"
                                        style={{ marginBottom: 'auto' }}
                                      >
                                        {course.programName}
                                      </h1>
                                      <p className="description_text">
                                        {course.description}
                                      </p>

                                      <div className="course_rating">
                                        <p className="course_desc">
                                          {course.duration1}
                                        </p>
                                        <p className="course_desc">
                                          {course.duration2}
                                        </p>
                                        <p className="course_ugc_titled">
                                          {course.ugctitled
                                            ? 'UGC Entitled'
                                            : ''}{' '}
                                        </p>
                                        <div className="course_star">
                                          <Image
                                            src={course.star}
                                            alt=""
                                            width="80px"
                                            height="20px"
                                            layout="fixed"
                                          ></Image>
                                          <p className="coursetagrating">
                                            {course.rating}
                                          </p>
                                        </div>
                                      </div>

                                      <div className="more">
                                        <div>
                                          <div className="apply_button">
                                            <a
                                              className="linkhovercolor"
                                              href={course.link}
                                            >
                                              Know More
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                      </Swiper>
                      <div className="mobile_carousal_link">
                        <a href="/marketing/">Explore our Marketing Programs</a>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* carrer trans */}
        <div
          className="news carrer_top_main"
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0 5%',
              }}
            >
              <h6 className="carrertransheading">
                Transform Your Career With Imarticus
              </h6>
              <Swiper
                // style={{ paddingBottom: '10px', marginLeft: '4px' }}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
                className={Styles.webinar_swipercarouselpagination}
                id="webinarcarousal"
              >
                {Program.carrertrans_arr.map(function (carrertrans) {
                  return (
                    <SwiperSlide style={{ width: '300px' }}>
                      <div
                        style={{
                          height: '384px',
                          width: '270px',
                          background: '#FFFFFF',
                          borderRadius: '8px',
                          boxSizing: 'border-box',
                          border: '0.5px solid rgba(33, 42, 57, 0.25)',
                        }}
                        id="carousal"
                      >
                        <div
                          className="certificate_card_main"
                          style={{ overflow: 'auto' }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              height: '151px',
                              paddingTop: '20px',
                            }}
                          >
                            <Image
                              src={carrertrans.img1}
                              alt=""
                              height="72px"
                              width="72px"
                              layout="fixed"
                            />
                            <h1
                              style={{
                                fontSize: '24px',
                                fontWeight: 600,
                                fontStyle: 'normal',
                                color: '#3C4852',
                              }}
                            >
                              {carrertrans.name}
                            </h1>
                          </div>
                          <div
                            style={{
                              width: '270px',
                              height: '98px',
                              background:
                                'url(https://cdn.pegasus.imarticus.org/imarticus_2/Green.svg)',
                            }}
                          >
                            <p
                              style={{
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                textTransform: 'uppercase',
                                textAlign: 'center',
                                alignItems: 'center',
                                color: '#FFF',
                                opacity: '0.75',
                                paddingTop: '18px',
                                paddingBottom: '9px',
                              }}
                            >
                              Before Imarticus Learning
                            </p>
                            <h1
                              style={{
                                fontSize: '18px',
                                fontWeight: 600,
                                fontStyle: 'normal',
                                color: '#FFF',
                                textAlign: 'center',
                                alignItems: 'center',
                              }}
                            >
                              {carrertrans.before}
                            </h1>
                          </div>
                          <div style={{ height: '135px' }}>
                            <p
                              style={{
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                textTransform: 'uppercase',
                                textAlign: 'center',
                                alignItems: 'center',
                                color: '#3C4852',
                                opacity: '0.75',
                                paddingTop: '15px',
                                paddingBottom: '5px',
                              }}
                            >
                              AFTER IMARTICUS Learning
                            </p>
                            <h1
                              style={{
                                fontSize: '18px',
                                fontWeight: 600,
                                fontStyle: 'normal',
                                color: '#3C4852',
                                textAlign: 'center',
                                alignItems: 'center',
                                marginBottom: '18px',
                              }}
                            >
                              {carrertrans.after}
                            </h1>
                            <Image
                              src={carrertrans.img2}
                              alt=""
                              height="42px"
                              width="208px"
                              layout="fixed"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </Swiper>
              <div
                style={{
                  display: 'flex',
                  width: '180px',
                  height: '56px',
                  borderRadius: '8px',
                  background: '#035642',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  cursor: 'pointer',
                  marginTop: '40px',
                }}
                onClick={toggleModal}
              >
                <p
                  style={{
                    fontStyle: 'normal',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    fontFamily: 'Source Sans Pro',
                  }}
                >
                  Sign up
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* partner review */}
        <div
          className="news"
          style={{
            background:
              'url(https://cdn.pegasus.imarticus.org/imarticus_2/partnerbackground.webp)',
          }}
        >
          <div
            className
            style={{
              maxWidth: '1300px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div className="parnter_header">
              <h6>What Our Partners Have To Say</h6>
              <div>
                <Swiper
                  spaceBetween={26}
                  style={{ paddingBottom: '10px', marginLeft: '4px' }}
                  modules={[Navigation, Pagination]}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  pagination={{ clickable: true }}
                  slidesPerGroup={1}
                  slidesPerView={'auto'}
                  className="window-carousal"
                  id="partnerCarousel"
                >
                  {Program.partnersay_arr.map(function (partner) {
                    return (
                      <SwiperSlide className="partner_carousal_card_main">
                        <div className="partner_carousal_card">
                          <div className="partner_carousal_upper">
                            <div
                              style={{ position: 'absolute', width: '175px' }}
                            >
                              <div className="partner_carousal_top2">
                                <div>
                                  <img
                                    src={partner.img1}
                                    alt=""
                                    height="120px"
                                    width="120px"
                                    style={{
                                      marginLeft: '16px',
                                      marginTop: '16px',
                                    }}
                                  />
                                </div>
                              </div>
                              <div
                                style={{
                                  paddingLeft: '12px',
                                  textAlign: 'initial',
                                }}
                              >
                                <h4 className="partner_name">{partner.name}</h4>
                                <p className="partner_desig">{partner.desig}</p>
                              </div>
                            </div>
                            <div className="partner_carousal_bottom">
                              <div className="partner_carousal_bottom_left">
                                <Image
                                  src={partner.img2}
                                  alt=""
                                  height="58px"
                                  width="180px"
                                  layout="fixed"
                                />
                              </div>
                              <div className="carousal_card_text">
                                <p>
                                  {partner.desc.length > 261
                                    ? partner.desc.slice(0, 261) + '...'
                                    : partner.desc}
                                </p>
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

              <Swiper
                spaceBetween={26}
                style={{ paddingBottom: '10px', marginLeft: '4px' }}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
                className="mobile-carousal"
                id="partnerCarousel2"
              >
                {Program.partnersay_arr.map(function (partner) {
                  return (
                    <SwiperSlide className="partner_mobile_carousal_main">
                      <div className="partner_mobile_carousal">
                        <div className="partner_mobile_carousal_upper">
                          <div>
                            <div className="toggleModalpartner_carousal_top">
                              <div>
                                <img
                                  src={partner.img1}
                                  alt=""
                                  height="162px"
                                  width="162px"
                                  style={{ marginTop: '20px' }}
                                />
                              </div>
                              <div>
                                <h4 className="partner_name">{partner.name}</h4>
                                <p className="partner_desig">{partner.desig}</p>
                              </div>
                            </div>
                          </div>
                          <div style={{}}>
                            <div
                              style={{
                                marginTop: '24px',
                                marginBottom: '11px',
                              }}
                            >
                              <Image
                                src={partner.img2}
                                alt=""
                                height="58px"
                                width="180px"
                                layout="fixed"
                              />
                            </div>
                            <div className="carousal_card_text">
                              <p>{partner.desc}</p>
                            </div>
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

        {/* advisory council */}
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
              <div className="advisory_apply_btn_main">
                <p className="advisory_apply_btn_main_p"></p>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="advisory_apply_btn"
                  style={{ cursor: 'pointer' }}
                >
                  <p>Learn More</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog */}
        <Blogimarticus />

        {/* webinar */}
        <Webinarimarticus />

        {/* imarticusnews */}
        <Imarticusnews />

        {/* center of excellence */}
        <Centerofexcellence2 onClick={toggleModal} />

        {/* QA */}
        {/* <section style={{maxWidth: '1300px', margin: '0 auto'}}>
            <div style={{margin: 'auto'}}>
            <h1 className="qaheading">Wait! I Have Some Questions</h1>
            </div>
            <div className="qa_main">
            <h1 className="QA_header">About Program</h1>
            {Program.certificationqa.filter(certificationqa=>certificationqa.index==0).map(function(course, index){
                return(
                  <Accordion className="qadropdown" >
                    <Accordion.Item eventKey="0" className="questionanswer" >
                        <Accordion.Header>{course.question}</Accordion.Header>
                        <Accordion.Body>
                        <p>{course.answer}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                  );
              })}
                
            </div>
            <div className="qa_main">
            <h1 className="QA_header">Selection Process</h1>
            {Program.certificationqa.filter(certificationqa=>certificationqa.index==1).map(function(course, index){
                return(
                  <Accordion className="qadropdown" >
                    <Accordion.Item eventKey="0" className="questionanswer" >
                        <Accordion.Header>{course.question}</Accordion.Header>
                        <Accordion.Body>
                        <p>{course.answer}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                );
            })}
            </div>
            <div className="qa_main">
            <h1 className="QA_header">Program Fee</h1>
            {Program.certificationqa.filter(certificationqa=>certificationqa.index==2).map(function(course, index){
                return(
                  <Accordion className="qadropdown" >
                    <Accordion.Item eventKey="0" className="questionanswer" >
                        <Accordion.Header>{course.question}</Accordion.Header>
                        <Accordion.Body>
                        <p>{course.answer}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                );
            })}
            </div>
            <div style={{marginBottom: '104px'}}>
            <h1 className="QA_header">Schedule Details</h1>
            {Program.certificationqa.filter(certificationqa=>certificationqa.index==3).map(function(course, index){
                return(
                  <Accordion className="qadropdown" >
                    <Accordion.Item eventKey="0" className="questionanswer" >
                        <Accordion.Header>{course.question}</Accordion.Header>
                        <Accordion.Body>
                        <p>{course.answer}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                );
            })}
            </div> 
            </section> */}
      </Layout>
    </div>
  )
}

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
