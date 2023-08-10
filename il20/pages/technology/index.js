import React, { useRef, useEffect, useState } from 'react'
import styleCSS from '!!raw-loader!../../styles/index.css'
import styleCSS1 from '!!raw-loader!../../styles/navbarcss.css'
import styleCSS2 from '!!raw-loader!../../styles/footer.css'
import styleCSS3 from '!!raw-loader!../../styles/domainpageheade.css'
import styleCSS4 from '!!raw-loader!../../styles/ourprogram.css'
import styleCSS5 from '!!raw-loader!../../styles/enquireform.css'
import styleCSS6 from '!!raw-loader!../../styles/collaboration.css'

const fixCSS = `}${styleCSS},${styleCSS1},${styleCSS2},${styleCSS3},${styleCSS4},${styleCSS5},${styleCSS6}{`
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import Blogimarticus from '../../components/blogimarticus'
import Webinarimarticus from '../../components/webinarimarticus'
import Salesbanner from '../../components/salesbanner'
import Program from '../../json/program.json'
import Image from 'next/image'
import Accordion from 'react-bootstrap/Accordion'
import Advisory from '../../components/Advisory'
import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/Formtype4-Nm-Em-Con-Loc-AoI-MoL'
import { configs, countryCodes } from '../../constants'
import { GetProgramsAsPerTagName } from '../../services/helper'
import Typist from 'react-typist'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { Autoplay } from 'swiper'

export default function Home(props) {
  const [selectedIndex, setSelectedIndex] = useState('CYBERSECURITY')
  const [formModal, setFormModal] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  const [brochureUrl, setBrochureUrl] = useState()
  const [count, setCount] = useState(1)

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

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log('Count: ' + count)
    setCount(1)
  }, [count])

  return (
    <div style={{ fontFamily: 'Source Sans Pro' }}>
      <Layout toggleModal={toggleModal} propsdata={props.propsdata.allData}>
        <Head>
          <title>
            Technology Online Courses & Certifications | Imarticus Learning
          </title>
          <meta
            name="description"
            content="Our innovative technology programs will help you stay abreast of the latest developments in the fields of technology, computer science and applied sciences. Enrol Now!"
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
          <link rel="canonical" href="https://imarticus.org/technology/" />
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
              propsid="TECHNOLOGY"
            />
          </Modal>
        )}
        {/* header */}
        <div
          className="image-container-technology"
          style={{ width: '100%', boxSizing: 'border-box' }}
        >
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div className="finance_top_h">
              <img
                src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/brain.svg"
                width={56}
                height={56}
              ></img>
              <h1>TECHNOLOGY</h1>
            </div>
            <div className="finance_header_middle">
              <p>
                Imarticus Learning’s innovative technology programs will help
                you stay abreast of the latest developments in the fields of
                technology, computer science and applied sciences.
              </p>
            </div>
            <div className="domain_header_main">
              <div className="domain_header_icon">
                <img
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/pgpprogrram/globegrowth.svg"
                  height="40"
                  width="48"
                ></img>
                <div>
                  <h3>8.5% till 2023</h3>
                  <p>Global Growth Rate</p>
                </div>
              </div>
              <div className="domain_header_icon">
                <img
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/salarynew.svg"
                  height="40"
                  width="40"
                ></img>
                <div>
                  <h3>45%</h3>
                  <p>Average Salary Hike</p>
                </div>
              </div>
            </div>
            <div>
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

        {/* alumni */}
        <div style={{ margin: '0 auto', boxSizing: 'border-box' }}>
          <div>
            <div className="collab academic">
              <div className style={{ textAlign: 'center' }}>
                <div className="no-margin hiringpartnermain">
                  <div className="hiringpartnerheading">
                    <h3>500+ Multinational Hiring Partners</h3>
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
        {/* banner */}
        {/* <Salesbanner/> */}

        {/* technology program */}
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
                Our Technology Programs
              </h1>

              {/* web view */}
              <div className="rowourprogram">
                <ul className="select">
                  <div id="ampSelector" layout="container">
                    <li
                      role="button"
                      option={1}
                      onClick={() => setSelectedIndex('CYBERSECURITY')}
                      className={`course-detail-info-title center-all-768 button ${
                        selectedIndex == 'CYBERSECURITY' && 'selected'
                      }`}
                    >
                      <span role="button">CYBER SECURITY</span>
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
                      option={3}
                      onClick={() => setSelectedIndex('FINTECH')}
                      className={`course-detail-info-title center-all-768 button ${
                        selectedIndex == 'FINTECH' && 'selected'
                      }`}
                    >
                      <span role="button">FINTECH</span>
                      <svg
                        style={{ marginLeft: 'auto' }}
                        xmlns="http://www.w3.org/2000/svg"
                        alt="Marketing"
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
                        .filter((course) => course.tag.includes('TECHNOLOGY'))
                        .map((course) => {
                          return (
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
                          )
                        })}
                  </div>
                </div>
              </div>

              {/* mobile view */}
              <div className="mobiletab-ourprogram">
                <Accordion defaultActiveKey="1" className="dropdownourprogram">
                  <Accordion.Item eventKey="1" className="ourProgramaccordion">
                    <Accordion.Header>
                      <p className="navbar-drop-down-text">CYBER SECURITY</p>
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
                            'CYBERSECURITY'
                          ).map((course) => (
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
                                        {course.ugctitled ? 'UGC Entitled' : ''}{' '}
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
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className="ourProgramaccordion">
                    <Accordion.Header>
                      <p className="navbar-drop-down-text">FINTECH</p>
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
                            'FINTECH',
                            'TECHNOLOGY'
                          ).map((course) => (
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
                                        {course.ugctitled ? 'UGC Entitled' : ''}{' '}
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
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* speak to our advisor */}
        <section className="seakadvisor">
          <div className="speackmaindiv">
            <div className="speakmain">
              <div className="speak_text">
                <p>Become An</p>
              </div>
              <div className="speak_text1">
                {count ? (
                  <Typist loop onTypingDone={() => setCount(0)}>
                    <span>iot engineer</span>
                    <Typist.Backspace count={13} delay={800} />
                    <span>machine learning engineer</span>
                    <Typist.Backspace count={29} delay={800} />
                    <span>blockchain developer</span>
                    <Typist.Backspace count={21} delay={800} />
                  </Typist>
                ) : (
                  ''
                )}
              </div>

              <div>
                <button
                  className="btnspeakadvisor"
                  onClick={toggleModal}
                  type="button"
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/Call.svg"
                    width={24}
                    height={24}
                  ></img>
                  <h2>Speak to our Program Advisor</h2>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="seakadvisor">
          <div className="speackmaindiv">
            <div className="speakmain4" onClick={toggleModal}></div>
          </div>
        </section> */}

        {/* why join imarticus */}
        <section className="joinimarticus">
          <div className="joinimarticus_main">
            <div className="joinimarticusdiv">
              <div className="join_imarticus_img">
                <p className="join_title">Why choose</p>
                <h1 className="join_title2">Imarticus?</h1>
                <img
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/joinimarticusmainimg.webp"
                  className="joinimarticusimg"
                ></img>
              </div>
              <div className="join_imarticus_text">
                <div className="jointext_main">
                  <div>
                    <img
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/joinimarticusicon1.svg"
                      className="joinimarticusicon"
                    ></img>
                  </div>
                  <div className="joininnertext">
                    <h1>Trusted By Industry Leaders</h1>
                    <p>
                      We have forged trusted partnerships with global leaders to
                      develop industry approved learning material, deliver
                      world-class training, and offer internationally-recognized
                      certifications.
                    </p>
                  </div>
                </div>
                <div className="jointext_main">
                  <div>
                    <img
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/joinimarticusicon2.svg"
                      className="joinimarticusicon"
                    ></img>
                  </div>
                  <div className="joininnertext">
                    <h1>Job-Assured Programs </h1>
                    <p>
                      We’re committed to your success and our job guarantee
                      courses ensure that you achieve your dream job through our
                      career services.
                    </p>
                  </div>
                </div>
                <div className="jointext_main">
                  <div>
                    <img
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/joinimarticusicon3.svg"
                      className="joinimarticusicon"
                    ></img>
                  </div>
                  <div className="joininnertext">
                    <h1>Driving Growth Through Innovation</h1>
                    <p>
                      Our goal is to provide an integrated learning experience
                      with progressive curriculums, future-centric training
                      programs and the latest technology.
                    </p>
                  </div>
                </div>
                <div className="jointext_main">
                  <div>
                    <img
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/joinimarticusicon4.svg.svg"
                      className="joinimarticusicon"
                    ></img>
                  </div>
                  <div className="joininnertext">
                    <h1>Futuristic And Tailored Programs </h1>
                    <p>
                      With the challenges and opportunities of evolving
                      industries, we adapt to offer you the best education and
                      reskilling solutions.
                    </p>
                  </div>
                </div>
                <div className="jointext_main" style={{ border: 'none' }}>
                  <div>
                    <img
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/joinimarticusicon5.svg"
                      className="joinimarticusicon"
                    ></img>
                  </div>
                  <div className="joininnertext">
                    <h1>Measurable Business Outcomes </h1>
                    <p>
                      We’ve built robust models and strategic solutions that
                      include immersive learning environments and are known to
                      deliver measurable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* partner says */}
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

        {/* advisorcouncil */}
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

        {/* testimonial */}

        <section className="testimonials">
          <div
            className
            style={{
              maxWidth: '1300px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div className="testimonial-main">
              <div className="title_heading">
                <h1 className="title-small2">
                  Our Former Students Think We're Awesome!
                </h1>
                <h4 className="title_desc">
                  Read about a few success stories that were created with
                  Imarticus Learning.
                </h4>
              </div>
              <div className="testimonal-carousals">
                <Swiper
                  spaceBetween={26}
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
                  {Program.studentReviews
                    .filter((review) => review.org == 'PGA')
                    .map(function (review, ind) {
                      return (
                        <SwiperSlide className="card_main">
                          <div className="card">
                            <div className="topRow">
                              <div className="dp">
                                <Image
                                  src={review.img}
                                  width="64px"
                                  height="64px"
                                  layout="fixed"
                                  alt="testimonial imarticus review"
                                />
                              </div>
                              <div className="credentials">
                                <h6>{review.name}</h6>
                                <p>{review.org}</p>
                              </div>
                            </div>
                            <p className="comment">{review.text}</p>
                            <div style={{ display: 'flex' }}>
                              <Image
                                src={review.stars}
                                width="80px"
                                height="16px"
                                layout="fixed"
                              ></Image>

                              <p className="studentreviewrating">
                                {review.rating}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </Swiper>
              </div>
              <div className="formerstundet_bottom">
                <a href="/testimonials/" style={{ textDecoration: 'none' }}>
                  <button
                    className="btnformerStundet"
                    type="button"
                    style={{ cursor: 'pointer' }}
                  >
                    <p>Read More</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* placement */}
        <div className="financeplacement_main">
          <div className style={{ margin: '0 auto', textAlign: 'center' }}>
            <div className="placement_backimg">
              <div className="placement_content">
                <div className="placement_text">
                  <h3>Work With Leading Organizations</h3>
                  <p>
                    Imarticus Learning has placed more than 56,000 students in
                    various industries.
                  </p>
                  <div>
                    <button
                      className="btnfinanceplacement"
                      onClick={() =>
                        toggleModal({
                          download: true,
                          url: 'https://cdn.pegasus.imarticus.org/brochure/Annual-Placement-Report-2020-2021.pdf',
                        })
                      }
                      type="button"
                      style={{ cursor: 'pointer' }}
                    >
                      <h4 className="btnfinanceplacement-h2">
                        Download Placement Report
                      </h4>
                      <Image
                        src="/imarticus_2/download2.svg"
                        width={24}
                        height={24}
                        layout="fixed"
                      />
                    </button>
                  </div>
                </div>
                <div class="placement_images">
                  {Program.placement.map(function (company, pla) {
                    return (
                      <div class="placement_img_div">
                        <Image
                          src={company.img}
                          width="135"
                          height="58"
                          layout="fixed"
                        />
                      </div>
                    )
                  })}
                </div>
                <div className="placement_display_block">
                  <Swiper
                    spaceBetween={50}
                    loop={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    slidesPerView={10}
                    style={{ paddingBottom: '45px', paddingTop: '40px' }}
                    className="placementpartnercarousal"
                  >
                    {Program.placement.map(function (company, pla) {
                      return (
                        <SwiperSlide>
                          <div className="placement_img_div">
                            <Image
                              src={company.img}
                              width="135px"
                              height="58px"
                              layout="fixed"
                            />
                          </div>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* webinar */}
        <Webinarimarticus />

        {/* Blog */}
        <Blogimarticus category="technology" />

        {/* News */}
        <div className="news news_main" style={{}}>
          <div
            className
            style={{
              maxWidth: '1300px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div className="award-main3">
              <h1 className="award_title2">Press Coverage</h1>
              <Swiper
                spaceBetween={26}
                style={{ paddingBottom: '10px', marginLeft: '4px' }}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
              >
                {Program.news_arr.map(function (news) {
                  return (
                    <SwiperSlide className="swiper-crousel-width">
                      <div className="carousal-insides-div">
                        <div
                          style={{
                            width: '270px',
                            height: '152px',
                            position: 'relative',
                          }}
                        >
                          <Image
                            src={news.img1}
                            alt="imarticus-news press coverage"
                            layout="fill"
                            objectFit="fill"
                            style={{ borderRadius: '8px' }}
                          />
                        </div>
                        <div
                          style={{
                            width: '214px',
                            height: '50px',
                            position: 'relative',
                            marginTop: '10px',
                          }}
                        >
                          <Image
                            src={news.img2}
                            alt="imarticus-news press coverage"
                            layout="fill"
                            objectFit="fill"
                          />
                        </div>
                        <div className="news-text-div">
                          <a href={news.link}>
                            {news.desc.length > 118
                              ? news.desc.slice(0, 118) + '...'
                              : news.desc}
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>

              <a
                href="https://blog.imarticus.org/news-and-events/"
                style={{ margin: 'auto', textDecoration: 'none' }}
              >
                <button className="news-bottom-div">
                  <p>Read More</p>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* QA */}
        {/* <section style={{maxWidth: '1300px', margin: '0 auto'}}>
            <div style={{margin: 'auto'}}>
            <h1 className="qaheading">Wait! I Have Some Questions</h1>
            </div>
            <div className="qa_main">
            <h1 className="QA_header">About Program</h1>
            {Program.financeqa.filter(financeqa=>financeqa.index==0).map(function(course, index){
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
            {Program.financeqa.filter(financeqa=>financeqa.index==1).map(function(course, index){
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
            {Program.financeqa.filter(financeqa=>financeqa.index==2).map(function(course, index){
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
            {Program.financeqa.filter(financeqa=>financeqa.index==3).map(function(course, index){
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
