import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import { GetProgramsAsPerTagName } from '../services/helper'

function Navbarnext({ openModal, propsdata }) {
  console.log(propsdata, 'dataaaa')
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [show2, setShow2] = useState(false)
  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)

  const [toggleMenuBar, setMenuBar] = useState(false)
  const [showFloater, setShowFloter] = useState(false)

  let displayOn = {
      display: 'block',
    },
    displayOff = {
      display: 'none',
    }
  useEffect(() => {
    var myScrollFunc = function () {
      var y = window.scrollY
      if (y >= 800) {
        setShowFloter(true)
      } else {
        setShowFloter(false)
      }
    }
    window.addEventListener('scroll', myScrollFunc)
  })

  return (
    <div>
      <div>
        <div>
          <div style={{ margin: '0 auto' }}>
            <header className="headerbar">
              <div className="mobile-nav" id="mobile-view">
                <div
                  className="navbar-trigger"
                  role="button"
                  tabIndex={0}
                  variant="primary"
                  onClick={handleShow2}
                >
                  <img
                    alt=""
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/menu.png"
                    height="14.06px"
                    width="20px"
                  />
                </div>
                <div className="mobnav-img">
                  <a href="/">
                    <img
                      alt="Logo"
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/imarticusmoblogo.svg"
                      height={28}
                      width={137}
                    />
                  </a>
                </div>
                <button
                  className="buttonP"
                  variant="primary"
                  onClick={handleShow}
                >
                  <p className="btnp">Programs</p>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/chevron-up.svg"
                    height={24}
                    width={24}
                  ></img>
                </button>
                {/*  */}

                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Programs</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <nav className="nav">
                      <ul className="label">
                        <li className="nav-item nav-dropdown navlink_border_bottom">
                          <Accordion defaultActiveKey="0" className="dropdown">
                            <Accordion.Item
                              eventKey="0"
                              className="allProgramFinancemob2"
                            >
                              <Accordion.Header>
                                <img
                                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/moneybag.svg"
                                  alt="money-bag"
                                  className="mobilefinance"
                                  height="32px"
                                  width="32px"
                                />
                                <p className="navbar-drop-down-text">FINANCE</p>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="mobileCourse">
                                  <div className="mobileCoursediv">
                                    <p className="mobileCourseheading">
                                      JOB ASSURED PROGRAMS
                                    </p>
                                    {propsdata &&
                                      propsdata.length > 0 &&
                                      GetProgramsAsPerTagName(
                                        propsdata,
                                        'FINANCE'
                                      )
                                        .filter(
                                          (data) =>
                                            data.program ==
                                            'Job Assured Program'
                                        )
                                        .map((data) => (
                                          <div className="courseboxmain courseboxmain2">
                                            <div className="coursebox2">
                                              <img
                                                src={data.navlogo}
                                                className="mobileplogo"
                                                alt="london stock exchange"
                                                height="64px"
                                                width="64px"
                                              ></img>
                                            </div>
                                            <div className="coursedesc">
                                              <a
                                                className="course_link"
                                                href={data.link}
                                              >
                                                <p className="coursename">
                                                  {data.programName}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                        ))}
                                  </div>

                                  <div className="mobileCoursediv">
                                    <p className="mobileCourseheading">
                                      CERTIFICATION COURSES
                                    </p>
                                    {propsdata &&
                                      propsdata.length > 0 &&
                                      GetProgramsAsPerTagName(
                                        propsdata,
                                        'FINANCE'
                                      )
                                        .filter(
                                          (data) =>
                                            data.program ==
                                            'Certification Course'
                                        )
                                        .map((data) => (
                                          <div className="courseboxmain courseboxmain2">
                                            <div className="coursebox2">
                                              <img
                                                src={data.navlogo}
                                                className="mobileplogo"
                                                alt="london stock exchange"
                                                height="64px"
                                                width="64px"
                                              ></img>
                                            </div>
                                            <div className="coursedesc">
                                              <a
                                                className="course_link"
                                                href={data.link}
                                              >
                                                <p className="coursename">
                                                  {data.programName}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                        ))}
                                  </div>

                                  <div className="mobileCoursediv">
                                    <p className="mobileCourseheading">
                                      EXECUTIVE PROGRAMS
                                    </p>

                                    {propsdata &&
                                      propsdata.length > 0 &&
                                      GetProgramsAsPerTagName(
                                        propsdata,
                                        'FINANCE'
                                      )
                                        .filter(
                                          (data) =>
                                            data.program == 'Executive Program'
                                        )
                                        .map((data) => (
                                          <div className="courseboxmain courseboxmain2">
                                            <div className="coursebox2">
                                              <img
                                                src={data.navlogo}
                                                className="mobileplogo"
                                                alt="london stock exchange"
                                                height="64px"
                                                width="64px"
                                              ></img>
                                            </div>
                                            <div className="coursedesc">
                                              <a
                                                className="course_link"
                                                href={data.link}
                                              >
                                                <p className="coursename">
                                                  {data.programName}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                        ))}

                                    <div
                                      className="mobileCoursediv"
                                      style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                      }}
                                    >
                                      <div className="explorebuttonmain">
                                        <a
                                          href="/finance/"
                                          className="domainbtnf"
                                        >
                                          <p className="explorebutton">
                                            Explore Finance
                                          </p>
                                          <div className="sprite circlearrow" />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item
                              eventKey="1"
                              className="allProgramFinancemob2"
                            >
                              <Accordion.Header>
                                <img
                                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/piechart.svg"
                                  className="mobilefinance"
                                  alt="pie chart"
                                  height="32px"
                                  width="32px"
                                />
                                <p className="navbar-drop-down-text">
                                  ANALYTICS
                                </p>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="mobileCourse">
                                  <div className="mobileCoursediv">
                                    <p className="mobileCourseheading">
                                      JOB ASSURED PROGRAMS
                                    </p>
                                    {propsdata &&
                                      propsdata.length > 0 &&
                                      GetProgramsAsPerTagName(
                                        propsdata,
                                        'ANALYTICS'
                                      )
                                        .filter(
                                          (data) =>
                                            data.program ==
                                            'Job Assured Program'
                                        )
                                        .map((data) => (
                                          <div className="courseboxmain courseboxmain2">
                                            <div className="coursebox2">
                                              <img
                                                src={data.navlogo}
                                                className="mobileplogo"
                                                alt="london stock exchange"
                                                height="64px"
                                                width="64px"
                                              ></img>
                                            </div>
                                            <div className="coursedesc">
                                              <a
                                                className="course_link"
                                                href={data.link}
                                              >
                                                <p className="coursename">
                                                  {data.programName}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                        ))}
                                  </div>

                                  <div className="mobileCoursediv">
                                    <p className="mobileCourseheading">
                                      CERTIFICATION COURSES
                                    </p>
                                    {propsdata &&
                                      propsdata.length > 0 &&
                                      GetProgramsAsPerTagName(
                                        propsdata,
                                        'ANALYTICS'
                                      )
                                        .filter(
                                          (data) =>
                                            data.program ==
                                            'Certification Course'
                                        )
                                        .map((data) => (
                                          <div className="courseboxmain courseboxmain2">
                                            <div className="coursebox2">
                                              <img
                                                src={data.navlogo}
                                                className="mobileplogo"
                                                alt="london stock exchange"
                                                height="64px"
                                                width="64px"
                                              ></img>
                                            </div>
                                            <div className="coursedesc">
                                              <a
                                                className="course_link"
                                                href={data.link}
                                              >
                                                <p className="coursename">
                                                  {data.programName}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                        ))}
                                  </div>

                                  <div
                                    className="mobileCoursediv"
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <div className="explorebuttonmain">
                                      <a
                                        href="/analytics/"
                                        className="domainbtnf"
                                      >
                                        <p className="explorebutton">
                                          Explore Analytics
                                        </p>
                                        <div className="sprite circlearrow" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item
                              eventKey="3"
                              className="allProgramFinancemob2"
                            >
                              <Accordion.Header>
                                <img
                                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/brain.svg"
                                  alt="brain power"
                                  className="mobilefinance"
                                  height="32px"
                                  width="32px"
                                />
                                <p className="navbar-drop-down-text">
                                  TECHNOLOGY
                                </p>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="mobileCourse">
                                  <div className="mobileCoursediv">
                                    <p className="mobileCourseheading">
                                      JOB ASSURED PROGRAMS
                                    </p>
                                    {propsdata &&
                                      propsdata.length > 0 &&
                                      GetProgramsAsPerTagName(
                                        propsdata,
                                        'TECHNOLOGY'
                                      )
                                        .filter(
                                          (data) =>
                                            data.program ==
                                            'Job Assured Program'
                                        )
                                        .map((data) => (
                                          <div className="courseboxmain courseboxmain2">
                                            <div className="coursebox2">
                                              <img
                                                src={data.navlogo}
                                                className="mobileplogo"
                                                alt="london stock exchange"
                                                height="64px"
                                                width="64px"
                                              ></img>
                                            </div>
                                            <div className="coursedesc">
                                              <a
                                                className="course_link"
                                                href={data.link}
                                              >
                                                <p className="coursename">
                                                  {data.programName}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                        ))}
                                  </div>
                                  <div className="mobileCoursediv">
                                    <p className="mobileCourseheading">
                                      CERTIFICATION COURSES
                                    </p>
                                    {propsdata &&
                                      propsdata.length > 0 &&
                                      GetProgramsAsPerTagName(
                                        propsdata,
                                        'TECHNOLOGY'
                                      )
                                        .filter(
                                          (data) =>
                                            data.program ==
                                            'Certification Course'
                                        )
                                        .map((data) => (
                                          <div className="courseboxmain courseboxmain2">
                                            <div className="coursebox2">
                                              <img
                                                src={data.navlogo}
                                                className="mobileplogo"
                                                alt="london stock exchange"
                                                height="64px"
                                                width="64px"
                                              ></img>
                                            </div>
                                            <div className="coursedesc">
                                              <a
                                                className="course_link"
                                                href={data.link}
                                              >
                                                <p className="coursename">
                                                  {data.programName}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                        ))}
                                  </div>
                                  <div className="mobileCoursediv">
                                    <p className="mobileCourseheading">
                                      EXECUTIVE PROGRAMS
                                    </p>
                                    {propsdata &&
                                      propsdata.length > 0 &&
                                      GetProgramsAsPerTagName(
                                        propsdata,
                                        'TECHNOLOGY'
                                      )
                                        .filter(
                                          (data) =>
                                            data.program == 'Executive Program'
                                        )
                                        .map((data) => (
                                          <div className="courseboxmain courseboxmain2">
                                            <div className="coursebox2">
                                              <img
                                                src={data.navlogo}
                                                className="mobileplogo"
                                                alt="london stock exchange"
                                                height="64px"
                                                width="64px"
                                              ></img>
                                            </div>
                                            <div className="coursedesc">
                                              <a
                                                className="course_link"
                                                href={data.link}
                                              >
                                                <p className="coursename">
                                                  {data.programName}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                        ))}
                                  </div>

                                  <div
                                    className="mobileCoursediv"
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <div className="explorebuttonmain">
                                      <a
                                        href="/technology/"
                                        className="domainbtnf"
                                      >
                                        <p className="explorebutton">
                                          Explore Technology
                                        </p>
                                        <div className="sprite circlearrow" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item
                              eventKey="4"
                              className="allProgramFinancemob2"
                            >
                              <Accordion.Header>
                                <img
                                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/rocket.svg"
                                  alt="rocket"
                                  className="mobilefinance"
                                  height="32px"
                                  width="32px"
                                />
                                <p className="navbar-drop-down-text">
                                  MARKETING
                                </p>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="mobileCourse">
                                  <div className="mobileCoursediv">
                                    <p className="mobileCourseheading">
                                      JOB ASSURED PROGRAMS
                                    </p>
                                    {propsdata &&
                                      propsdata.length > 0 &&
                                      GetProgramsAsPerTagName(
                                        propsdata,
                                        'MARKETING'
                                      )
                                        .filter(
                                          (data) =>
                                            data.program ==
                                            'Job Assured Program'
                                        )
                                        .map((data) => (
                                          <div className="courseboxmain courseboxmain2">
                                            <div className="coursebox2">
                                              <img
                                                src={data.navlogo}
                                                className="mobileplogo"
                                                alt="london stock exchange"
                                                height="64px"
                                                width="64px"
                                              ></img>
                                            </div>
                                            <div className="coursedesc">
                                              <a
                                                className="course_link"
                                                href={data.link}
                                              >
                                                <p className="coursename">
                                                  {data.programName}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                        ))}
                                  </div>
                                  <div className="mobileCoursediv">
                                    <p className="mobileCourseheading">
                                      CERTIFICATION COURSES
                                    </p>
                                    {propsdata &&
                                      propsdata.length > 0 &&
                                      GetProgramsAsPerTagName(
                                        propsdata,
                                        'MARKETING'
                                      )
                                        .filter(
                                          (data) =>
                                            data.program ==
                                            'Certification Course'
                                        )
                                        .map((data) => (
                                          <div className="courseboxmain courseboxmain2">
                                            <div className="coursebox2">
                                              <img
                                                src={data.navlogo}
                                                className="mobileplogo"
                                                alt="london stock exchange"
                                                height="64px"
                                                width="64px"
                                              ></img>
                                            </div>
                                            <div className="coursedesc">
                                              <a
                                                className="course_link"
                                                href={data.link}
                                              >
                                                <p className="coursename">
                                                  {data.programName}
                                                </p>
                                              </a>
                                            </div>
                                          </div>
                                        ))}
                                  </div>
                                  <div
                                    className="mobileCoursediv"
                                    style={{
                                      display: 'flex',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <div className="explorebuttonmain">
                                      <a
                                        href="/marketing/"
                                        className="domainbtnf"
                                      >
                                        <p className="explorebutton">
                                          Explore Marketing
                                        </p>
                                        <div className="sprite circlearrow" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </li>
                      </ul>
                    </nav>
                  </Offcanvas.Body>
                </Offcanvas>

                <Offcanvas show={show2} onHide={handleClose2} placement="start">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <nav className="nav">
                      <ul className="label">
                        <li className="nav-item nav-dropdown">
                          <Accordion defaultActiveKey="0" className="dropdown">
                            <Accordion.Item
                              eventKey="0"
                              className="allProgramFinancemob3"
                            >
                              <Accordion.Header>
                                Career Support
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="mobileCourse">
                                  <div className="mobileCoursediv">
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/careers-services/"
                                      >
                                        Career Services
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/placement/"
                                      >
                                        Placement
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/mentorship/"
                                      >
                                        Mentorship
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/hackathon/"
                                      >
                                        Hackathon
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/imarticus-networking/"
                                      >
                                        Imarticus Networking
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/alumni-network/"
                                      >
                                        Alumni Benefits
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/testimonials/"
                                      >
                                        Testimonials
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/data-science-club/"
                                      >
                                        Data Science club
                                      </a>
                                    </li>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item
                              eventKey="1"
                              className="allProgramFinancemob3"
                            >
                              <Accordion.Header>Discover</Accordion.Header>
                              <Accordion.Body>
                                <div className="mobileCourse">
                                  <div className="mobileCoursediv">
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/about-imarticus/"
                                      >
                                        About Us
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/women-in-stem-bootcamp/"
                                      >
                                        Women In STEM Boot Camp
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/leadership/"
                                      >
                                        Leadership{' '}
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/reviews-and-ratings/"
                                      >
                                        Review & Ratings{' '}
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/learning-methodology/"
                                      >
                                        Learning Methodology{' '}
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/refer-and-earn/"
                                      >
                                        Refer and Earn{' '}
                                      </a>
                                    </li>
                                    {/* <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/scholarship/"
                                      >
                                        Scholarship
                                      </a>
                                    </li> */}
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/certified-investment-banking-achievers-club/"
                                      >
                                        CIBOP Achievers 2020-2021
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/Imarticus-analytics-webinar/"
                                      >
                                        Analytics Webinar
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/Imarticus-marketing-webinar/"
                                      >
                                        Marketing Webinar
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/webinar-cloud-blockchain-iot-developer-software-engineering/"
                                      >
                                        Technology Webinar
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/Imarticus-finance-webinar/"
                                      >
                                        Finance Webinar
                                      </a>
                                    </li>
                                    {/* <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/Learn-Data-Analytics/"
                                      >
                                        I-ACE
                                      </a>
                                    </li> */}
                                    <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="https://blog.imarticus.org/"
                                      >
                                        Blog
                                      </a>
                                    </li>
                                    {/* <li>
                                      <a
                                        className="mobileCourseheading"
                                        href="/Imarticus-BFF-banking-and-finance-forever/"
                                      >
                                        Banking And Finance Forever
                                      </a>
                                    </li> */}
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </li>
                        <li className="nav-item nav-dropdown">
                          <header className="allProgramFinancemob">
                            <a className="mobile_link" href="/contact/">
                              For Recruiters
                            </a>
                          </header>
                        </li>
                        <li className="nav-item nav-dropdown">
                          <header className="allProgramFinancemob">
                            <a className="mobile_link" href="/corporate/">
                              For Enterprise
                            </a>
                          </header>
                        </li>
                        <li className="nav-item nav-dropdown mobileloginbutton">
                          <div className="mobilelogin">
                            <a
                              href="https://pegasus.imarticus.org/dashboard"
                              target="_blank"
                            >
                              Login
                            </a>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <nav className="web-nav-main">
                <div className="web-nav">
                  <div className="mobnav-img">
                    <a href="/">
                      <img
                        alt="Logo"
                        src="https://cdn.pegasus.imarticus.org/imarticus_2/imarticusmoblogo.svg"
                        height="39.73"
                        width="194.13"
                      />
                    </a>
                  </div>
                  <div
                    onMouseEnter={() => setMenuBar(true)}
                    onMouseLeave={() => setMenuBar(false)}
                    className="hp-crs-dropdown hide-max-width-767 "
                    tabIndex={0}
                    role="button"
                  >
                    All Programs
                    <label
                      style={{ marginLeft: '8px' }}
                      className="crs-cls-dd-icon"
                    >
                      <svg width="18px" height="12px" viewBox="0 0 17 10">
                        <g
                          id="Page-2"
                          stroke="#fff"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="Mobile-1"
                            transform="translate(-260.000000, -1589.000000)"
                            fill="#ffff"
                            stroke="#ffff"
                          >
                            <path
                              d="M275.846924,1590.15471 C275.640021,1589.94843 275.303742,1589.94843 275.097324,1590.15471 L268.507269,1596.73751 L261.904778,1590.15471 C261.697713,1589.94843 261.361435,1589.94843 261.155177,1590.15471 C260.948274,1590.36035 260.948274,1590.69562 261.155177,1590.90206 L268.119305,1597.84525 C268.222838,1597.94831 268.352213,1598 268.494025,1598 C268.6234,1598 268.765373,1597.94831 268.868906,1597.84525 L275.83368,1590.90206 C276.053181,1590.69562 276.053181,1590.36035 275.846924,1590.15471 Z"
                              id="Fill-1-Copy"
                            />
                          </g>
                        </g>
                      </svg>
                    </label>
                    <label
                      style={{ marginLeft: '8px' }}
                      className="hide-crs-dd"
                    >
                      <svg width="18px" height="12px" viewBox="0 0 17 10">
                        <g
                          id="Web-Responsive-Copy"
                          stroke="#fff"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id={2}
                            transform="translate(-494.000000, -35.000000)"
                            fill="#fff"
                            stroke="#fff"
                          >
                            <path
                              d="M509.846924,36.1547109 C509.640021,35.9484297 509.303742,35.9484297 509.097324,36.1547109 L502.507269,42.7375138 L495.904778,36.1547109 C495.697713,35.9484297 495.361435,35.9484297 495.155177,36.1547109 C494.948274,36.360348 494.948274,36.6956154 495.155177,36.9020577 L502.119305,43.8452488 C502.222838,43.9483089 502.352213,44 502.494025,44 C502.6234,44 502.765373,43.9483089 502.868906,43.8452488 L509.83368,36.9020577 C510.053181,36.6956154 510.053181,36.360348 509.846924,36.1547109 Z"
                              id="Fill-1"
                              transform="translate(502.500000, 40.000000) scale(1, -1) translate(-502.500000, -40.000000) "
                            />
                          </g>
                        </g>
                      </svg>
                    </label>
                    <div
                      className={`hide-crs-dd`}
                      style={toggleMenuBar ? displayOn : displayOff}
                    >
                      <div
                        onMouseEnter={() => setMenuBar(false)}
                        className="mega-menu-overlay"
                      ></div>
                      <div className="crs-dropdown">
                        <ul className="no-list-style crs-ul-list">
                          <li
                            className="h4-bold-font-size crs-dd-ul-head  li-nohover"
                            style={{ paddingTop: '16px' }}
                          >
                            OUR DOMAINS
                          </li>
                          <li className="crs-main-list active">
                            <div
                              style={{ marginTop: '34px' }}
                              className="allprogramfinance financeprogram"
                              id="colorChange1"
                            >
                              <div
                                className="sprite money"
                                style={{ marginLeft: '16px' }}
                              />
                              <p>FINANCE</p>
                              <div
                                className="sprite whitearrow"
                                style={{ marginRight: '25px' }}
                              />
                            </div>
                            <ul className="no-list-style crs-sublist">
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                }}
                              >
                                <div className="allprogrammargin">
                                  <h1>JOB ASSURED PROGRAMS</h1>
                                  {propsdata &&
                                    propsdata.length > 0 &&
                                    GetProgramsAsPerTagName(
                                      propsdata,
                                      'FINANCE'
                                    )
                                      .filter(
                                        (data) =>
                                          data.program == 'Job Assured Program'
                                      )
                                      .map((data) => (
                                        <div className="courseboxmain">
                                          <div className="coursebox">
                                            <img
                                              src={data.navlogo}
                                              className="mobileplogo"
                                              alt="london stock exchange"
                                              height="64px"
                                              width="64px"
                                            ></img>
                                          </div>
                                          <div className="coursedesc">
                                            <a
                                              className="course_link"
                                              href={data.link}
                                            >
                                              <p className="coursename">
                                                {data.programName}
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      ))}
                                </div>
                                <div className="allprogrammargin">
                                  <h1>CERTIFICATION COURSES</h1>
                                  {propsdata &&
                                    propsdata.length > 0 &&
                                    GetProgramsAsPerTagName(
                                      propsdata,
                                      'FINANCE'
                                    )
                                      .filter(
                                        (data) =>
                                          data.program == 'Certification Course'
                                      )
                                      .map((data) => (
                                        <div className="courseboxmain">
                                          <div className="coursebox">
                                            <img
                                              src={data.navlogo}
                                              className="mobileplogo"
                                              alt="london stock exchange"
                                              height="64px"
                                              width="64px"
                                            ></img>
                                          </div>
                                          <div className="coursedesc">
                                            <a
                                              className="course_link"
                                              href={data.link}
                                            >
                                              <p className="coursename">
                                                {data.programName}
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      ))}
                                </div>
                                <div className="allprogrammargin">
                                  <h1>EXECUTIVE PROGRAMS</h1>
                                  {propsdata &&
                                    propsdata.length > 0 &&
                                    GetProgramsAsPerTagName(
                                      propsdata,
                                      'FINANCE'
                                    )
                                      .filter(
                                        (data) =>
                                          data.program == 'Executive Program'
                                      )
                                      .map((data) => (
                                        <div className="courseboxmain">
                                          <div className="coursebox">
                                            <img
                                              src={data.navlogo}
                                              className="mobileplogo"
                                              alt="london stock exchange"
                                              height="64px"
                                              width="64px"
                                            ></img>
                                          </div>
                                          <div className="coursedesc">
                                            <a
                                              className="course_link"
                                              href={data.link}
                                            >
                                              <p className="coursename">
                                                {data.programName}
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      ))}
                                </div>
                                <div className="allprogrammargin allprogramdisplay">
                                  <h2>QUICK LINKS</h2>
                                  <div className="linksmain border-bottom">
                                    <a
                                      href="https://blog.imarticus.org/category/finance/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>Explore blogs</h2>
                                        <p>Begin learning on the go</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain border-bottom"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/reviews-and-ratings/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>Read reviews</h2>
                                        <p>How we're changing careers</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain border-bottom"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/placement/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>View placements</h2>
                                        <p>How we focus on success</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/webinar-cloud-blockchain-iot-developer-software-engineering/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h3>Attend Webinars</h3>
                                        <p>Learn from the experts</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="explore-nav">
                                <p className="explore-text">
                                  Explore through our most trending finance
                                  programs, designed by top industry experts
                                </p>
                                <div className="explorebuttonmain">
                                  <a
                                    href="/finance/"
                                    style={{ marginRight: '0 !important' }}
                                    className="explorebutton d-flex w-100 justify-content-around"
                                  >
                                    <p
                                      style={{
                                        paddingTop: '7px',
                                        fontSize: '18px',
                                        color: '#fff',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                      }}
                                    >
                                      Explore Finance
                                    </p>
                                    <div
                                      style={{ marginLeft: '10px' }}
                                      className="sprite circlearrow"
                                    />
                                  </a>
                                </div>
                              </div>
                            </ul>
                          </li>
                          <li className="crs-main-list">
                            <div
                              className="allprogramfinance"
                              id="colorChange2"
                            >
                              <div
                                className="sprite graph"
                                style={{ marginLeft: '16px' }}
                              ></div>
                              <p>ANALYTICS</p>
                              <div
                                className="sprite whitearrow"
                                style={{ marginRight: '25px' }}
                              />
                            </div>
                            <ul className="no-list-style crs-sublist">
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                }}
                              >
                                <div className="allprogrammargin2">
                                  <h1>JOB ASSURED PROGRAMS</h1>
                                  {propsdata &&
                                    propsdata.length > 0 &&
                                    GetProgramsAsPerTagName(
                                      propsdata,
                                      'ANALYTICS'
                                    )
                                      .filter(
                                        (data) =>
                                          data.program == 'Job Assured Program'
                                      )
                                      .map((data) => (
                                        <div className="courseboxmain">
                                          <div className="coursebox">
                                            <img
                                              src={data.navlogo}
                                              className="mobileplogo"
                                              alt="london stock exchange"
                                              height="64px"
                                              width="64px"
                                            ></img>
                                          </div>
                                          <div className="coursedesc">
                                            <a
                                              className="course_link"
                                              href={data.link}
                                            >
                                              <p className="coursename">
                                                {data.programName}
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      ))}
                                </div>
                                <div className="allprogrammargin2">
                                  <h1>CERTIFICATION COURSES</h1>
                                  {propsdata &&
                                    propsdata.length > 0 &&
                                    GetProgramsAsPerTagName(
                                      propsdata,
                                      'ANALYTICS'
                                    )
                                      .filter(
                                        (data) =>
                                          data.program == 'Certification Course'
                                      )
                                      .map((data) => (
                                        <div className="courseboxmain">
                                          <div className="coursebox">
                                            <img
                                              src={data.navlogo}
                                              className="mobileplogo"
                                              alt="london stock exchange"
                                              height="64px"
                                              width="64px"
                                            ></img>
                                          </div>
                                          <div className="coursedesc">
                                            <a
                                              className="course_link"
                                              href={data.link}
                                            >
                                              <p className="coursename">
                                                {data.programName}
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      ))}
                                </div>

                                {/* <div className="allprogrammargin">
                                <h1>W PROGRAMS</h1>
                                
                                <div className="courseboxmain">
                                  <div className="coursebox sprite bimtechlogo" />
                                  <div className="coursedesc">
                                    <a className="course_link" href="/pgdm-in-fintech-ai-and-data-science-by-bimtech/">
                                      <p className="coursename">BIMTECH PGDM In AI &amp; Data Science</p>
                                      >
                                    </a>
                                  </div>
                                </div>
                                
                              </div> */}
                                <div className="allprogrammargin allprogramdisplay">
                                  <h2>QUICK LINKS</h2>
                                  <div className="linksmain border-bottom">
                                    <a
                                      href="https://blog.imarticus.org/category/finance/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>Explore blogs</h2>
                                        <p>Begin learning on the go</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain border-bottom"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/reviews-and-ratings/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>Read reviews</h2>
                                        <p>How we're changing careers</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain border-bottom"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/placement/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>View placements</h2>
                                        <p>How we focus on success</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/webinar-cloud-blockchain-iot-developer-software-engineering/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h3>Attend Webinars</h3>
                                        <p>Learn from the experts</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="explore-nav">
                                <p className="explore-text">
                                  Explore through our most trending analytics
                                  programs, designed by top industry experts
                                </p>
                                <div className="explorebuttonmain">
                                  <a
                                    href="/analytics/"
                                    className="explorebutton d-flex w-100 justify-content-around"
                                  >
                                    <p
                                      style={{
                                        paddingTop: '7px',
                                        fontSize: '18px',
                                        color: '#fff',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                      }}
                                    >
                                      Explore Analytics
                                    </p>
                                    <div
                                      style={{ marginLeft: '10px' }}
                                      className="sprite circlearrow"
                                    />
                                  </a>
                                </div>
                              </div>
                            </ul>
                          </li>
                          <li className="crs-main-list">
                            <div
                              className="allprogramfinance"
                              id="colorChange3"
                            >
                              <div
                                className="sprite brain"
                                style={{ marginLeft: '16px' }}
                              />
                              <p>TECHNOLOGY</p>
                              <div
                                className="sprite whitearrow"
                                style={{ marginRight: '25px' }}
                              />
                            </div>
                            <ul className="no-list-style crs-sublist">
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                }}
                              >
                                <div className="allprogrammargin">
                                  <h1>JOB ASSURED PROGRAMS</h1>
                                  {propsdata &&
                                    propsdata.length > 0 &&
                                    GetProgramsAsPerTagName(
                                      propsdata,
                                      'TECHNOLOGY'
                                    )
                                      .filter(
                                        (data) =>
                                          data.program == 'Job Assured Program'
                                      )
                                      .map((data) => (
                                        <div className="courseboxmain">
                                          <div className="coursebox">
                                            <img
                                              src={data.navlogo}
                                              className="mobileplogo"
                                              alt="london stock exchange"
                                              height="64px"
                                              width="64px"
                                            ></img>
                                          </div>
                                          <div className="coursedesc">
                                            <a
                                              className="course_link"
                                              href={data.link}
                                            >
                                              <p className="coursename">
                                                {data.programName}
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      ))}
                                </div>

                                <div className="allprogrammargin">
                                  <h1>CERTIFICATION COURSES</h1>
                                  {propsdata &&
                                    propsdata.length > 0 &&
                                    GetProgramsAsPerTagName(
                                      propsdata,
                                      'TECHNOLOGY'
                                    )
                                      .filter(
                                        (data) =>
                                          data.program == 'Certification Course'
                                      )
                                      .map((data) => (
                                        <div className="courseboxmain">
                                          <div className="coursebox">
                                            <img
                                              src={data.navlogo}
                                              className="mobileplogo"
                                              alt="london stock exchange"
                                              height="64px"
                                              width="64px"
                                            ></img>
                                          </div>
                                          <div className="coursedesc">
                                            <a
                                              className="course_link"
                                              href={data.link}
                                            >
                                              <p className="coursename">
                                                {data.programName}
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      ))}
                                </div>
                                <div className="allprogrammargin">
                                  <h1>EXECUTIVE PROGRAMS</h1>
                                  {propsdata &&
                                    propsdata.length > 0 &&
                                    GetProgramsAsPerTagName(
                                      propsdata,
                                      'TECHNOLOGY'
                                    )
                                      .filter(
                                        (data) =>
                                          data.program == 'Executive Program'
                                      )
                                      .map((data) => (
                                        <div className="courseboxmain">
                                          <div className="coursebox">
                                            <img
                                              src={data.navlogo}
                                              className="mobileplogo"
                                              alt="london stock exchange"
                                              height="64px"
                                              width="64px"
                                            ></img>
                                          </div>
                                          <div className="coursedesc">
                                            <a
                                              className="course_link"
                                              href={data.link}
                                            >
                                              <p className="coursename">
                                                {data.programName}
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      ))}
                                </div>

                                <div className="allprogrammargin allprogramdisplay">
                                  <h2>QUICK LINKS</h2>
                                  <div className="linksmain border-bottom">
                                    <a
                                      href="https://blog.imarticus.org/category/finance/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>Explore blogs</h2>
                                        <p>Begin learning on the go</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain border-bottom"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/reviews-and-ratings/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>Read reviews</h2>
                                        <p>How we're changing careers</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain border-bottom"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/placement/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>View placements</h2>
                                        <p>How we focus on success</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/webinar-cloud-blockchain-iot-developer-software-engineering/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h3>Attend Webinars</h3>
                                        <p>Learn from the experts</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="explore-nav">
                                <p className="explore-text">
                                  Explore through our most trending technology
                                  programs, designed by top industry experts
                                </p>
                                <div className="explorebuttonmain">
                                  <a
                                    href="/technology/"
                                    className="explorebutton d-flex w-100 justify-content-around"
                                  >
                                    <p
                                      style={{
                                        paddingTop: '7px',
                                        fontSize: '18px',
                                        color: '#fff',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                      }}
                                    >
                                      Explore Technology
                                    </p>
                                    <div
                                      style={{ marginLeft: '10px' }}
                                      className="sprite circlearrow"
                                    />
                                  </a>
                                </div>
                              </div>
                            </ul>
                          </li>
                          <li className="crs-main-list">
                            <div
                              className="allprogramfinance"
                              id="colorChange4"
                            >
                              <div
                                className="sprite rocket"
                                style={{ marginLeft: '16px' }}
                              />
                              <p>MARKETING</p>
                              <div
                                className="sprite whitearrow"
                                style={{ marginRight: '25px' }}
                              />
                            </div>
                            <ul className="no-list-style crs-sublist">
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                }}
                              >
                                <div className="allprogrammargin2">
                                  <h1>JOB ASSURED PROGRAMS</h1>
                                  {propsdata &&
                                    propsdata.length > 0 &&
                                    GetProgramsAsPerTagName(
                                      propsdata,
                                      'MARKETING'
                                    )
                                      .filter(
                                        (data) =>
                                          data.program == 'Job Assured Program'
                                      )
                                      .map((data) => (
                                        <div className="courseboxmain">
                                          <div className="coursebox">
                                            <img
                                              src={data.navlogo}
                                              className="mobileplogo"
                                              alt="london stock exchange"
                                              height="64px"
                                              width="64px"
                                            ></img>
                                          </div>
                                          <div className="coursedesc">
                                            <a
                                              className="course_link"
                                              href={data.link}
                                            >
                                              <p className="coursename">
                                                {data.programName}
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      ))}
                                </div>
                                <div className="allprogrammargin2">
                                  <h1>CERTIFICATION COURSES</h1>
                                  {propsdata &&
                                    propsdata.length > 0 &&
                                    GetProgramsAsPerTagName(
                                      propsdata,
                                      'MARKETING'
                                    )
                                      .filter(
                                        (data) =>
                                          data.program == 'Certification Course'
                                      )
                                      .map((data) => (
                                        <div className="courseboxmain">
                                          <div className="coursebox">
                                            <img
                                              src={data.navlogo}
                                              className="mobileplogo"
                                              alt="london stock exchange"
                                              height="64px"
                                              width="64px"
                                            ></img>
                                          </div>
                                          <div className="coursedesc">
                                            <a
                                              className="course_link"
                                              href={data.link}
                                            >
                                              <p className="coursename">
                                                {data.programName}
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      ))}
                                </div>
                                <div className="allprogrammargin allprogramdisplay">
                                  <h2>QUICK LINKS</h2>
                                  <div className="linksmain border-bottom">
                                    <a
                                      href="https://blog.imarticus.org/category/finance/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>Explore blogs</h2>
                                        <p>Begin learning on the go</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain border-bottom"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/reviews-and-ratings/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>Read reviews</h2>
                                        <p>How we're changing careers</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain border-bottom"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/placement/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h2>View placements</h2>
                                        <p>How we focus on success</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                  <div
                                    className="linksmain"
                                    style={{ marginTop: '16px' }}
                                  >
                                    <a
                                      href="https://imarticus.org/webinar-cloud-blockchain-iot-developer-software-engineering/"
                                      className="quicklinkanchor"
                                    >
                                      <div className="linkdesc">
                                        <h3>Attend Webinars</h3>
                                        <p>Learn from the experts</p>
                                      </div>
                                      <div className="sprite blackarrow" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="explore-nav">
                                <p className="explore-text">
                                  Explore through our most trending marketing
                                  programs, designed by top industry experts
                                </p>
                                <div className="explorebuttonmain">
                                  <a
                                    href="/marketing/"
                                    className="explorebutton d-flex w-100 justify-content-around"
                                  >
                                    <p
                                      style={{
                                        paddingTop: '7px',
                                        fontSize: '18px',
                                        color: '#fff',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                      }}
                                    >
                                      Explore Marketing
                                    </p>
                                    <div
                                      style={{ marginLeft: '10px' }}
                                      className="sprite circlearrow"
                                    />
                                  </a>
                                </div>
                              </div>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-links">
                  <ul>
                    <li>
                      <div className="dropdown sidespacing">
                        <button className="dropbtn contentcenter">
                          Career Support
                          <label
                            style={{ marginLeft: '8px' }}
                            className="crs-cls-dd-icon"
                          >
                            <svg width="18px" height="12px" viewBox="0 0 17 10">
                              <g
                                id="Page-2"
                                stroke="#3c4852"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="Mobile-1"
                                  transform="translate(-260.000000, -1589.000000)"
                                  fill="#3c4852"
                                  stroke="#3c4852"
                                >
                                  <path
                                    d="M275.846924,1590.15471 C275.640021,1589.94843 275.303742,1589.94843 275.097324,1590.15471 L268.507269,1596.73751 L261.904778,1590.15471 C261.697713,1589.94843 261.361435,1589.94843 261.155177,1590.15471 C260.948274,1590.36035 260.948274,1590.69562 261.155177,1590.90206 L268.119305,1597.84525 C268.222838,1597.94831 268.352213,1598 268.494025,1598 C268.6234,1598 268.765373,1597.94831 268.868906,1597.84525 L275.83368,1590.90206 C276.053181,1590.69562 276.053181,1590.36035 275.846924,1590.15471 Z"
                                    id="Fill-1-Copy"
                                  />
                                </g>
                              </g>
                            </svg>
                          </label>
                          <label
                            style={{ marginLeft: '8px' }}
                            className="hide-crs-dd"
                          >
                            <svg width="18px" height="12px" viewBox="0 0 17 10">
                              <g
                                id="Web-Responsive-Copy"
                                stroke="#3c4852"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id={2}
                                  transform="translate(-494.000000, -35.000000)"
                                  fill="#3c4852"
                                  stroke="#3c4852"
                                >
                                  <path
                                    d="M509.846924,36.1547109 C509.640021,35.9484297 509.303742,35.9484297 509.097324,36.1547109 L502.507269,42.7375138 L495.904778,36.1547109 C495.697713,35.9484297 495.361435,35.9484297 495.155177,36.1547109 C494.948274,36.360348 494.948274,36.6956154 495.155177,36.9020577 L502.119305,43.8452488 C502.222838,43.9483089 502.352213,44 502.494025,44 C502.6234,44 502.765373,43.9483089 502.868906,43.8452488 L509.83368,36.9020577 C510.053181,36.6956154 510.053181,36.360348 509.846924,36.1547109 Z"
                                    id="Fill-1"
                                    transform="translate(502.500000, 40.000000) scale(1, -1) translate(-502.500000, -40.000000) "
                                  />
                                </g>
                              </g>
                            </svg>
                          </label>
                        </button>
                        <div className="dropdown-content dropdown-contentheight">
                          <a className="course_link" href="/careers-services/">
                            Career Services
                          </a>
                          <a className="course_link" href="/placement/">
                            Placement
                          </a>
                          <a className="course_link" href="/mentorship/">
                            Mentorship
                          </a>
                          <a className="course_link" href="/hackathon/">
                            Hackathon
                          </a>
                          <a
                            className="course_link"
                            href="/imarticus-networking/"
                          >
                            Imarticus Networking
                          </a>
                          <a className="course_link" href="/alumni-network/">
                            Alumni Benefits
                          </a>
                          <a className="course_link" href="/testimonials/">
                            Testimonials
                          </a>
                          <a className="course_link" href="/data-science-club/">
                            Data Science club
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown">
                        <button className="dropbtn contentcenter">
                          Discover
                          <label
                            style={{ marginLeft: '8px' }}
                            className="crs-cls-dd-icon"
                          >
                            <svg width="18px" height="12px" viewBox="0 0 17 10">
                              <g
                                id="Page-2"
                                stroke="#3c4852"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id="Mobile-1"
                                  transform="translate(-260.000000, -1589.000000)"
                                  fill="#3c4852"
                                  stroke="#3c4852"
                                >
                                  <path
                                    d="M275.846924,1590.15471 C275.640021,1589.94843 275.303742,1589.94843 275.097324,1590.15471 L268.507269,1596.73751 L261.904778,1590.15471 C261.697713,1589.94843 261.361435,1589.94843 261.155177,1590.15471 C260.948274,1590.36035 260.948274,1590.69562 261.155177,1590.90206 L268.119305,1597.84525 C268.222838,1597.94831 268.352213,1598 268.494025,1598 C268.6234,1598 268.765373,1597.94831 268.868906,1597.84525 L275.83368,1590.90206 C276.053181,1590.69562 276.053181,1590.36035 275.846924,1590.15471 Z"
                                    id="Fill-1-Copy"
                                  />
                                </g>
                              </g>
                            </svg>
                          </label>
                          <label
                            style={{ marginLeft: '8px' }}
                            className="hide-crs-dd"
                          >
                            <svg width="18px" height="12px" viewBox="0 0 17 10">
                              <g
                                id="Web-Responsive-Copy"
                                stroke="#3c4852"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  id={2}
                                  transform="translate(-494.000000, -35.000000)"
                                  fill="#3c4852"
                                  stroke="#3c4852"
                                >
                                  <path
                                    d="M509.846924,36.1547109 C509.640021,35.9484297 509.303742,35.9484297 509.097324,36.1547109 L502.507269,42.7375138 L495.904778,36.1547109 C495.697713,35.9484297 495.361435,35.9484297 495.155177,36.1547109 C494.948274,36.360348 494.948274,36.6956154 495.155177,36.9020577 L502.119305,43.8452488 C502.222838,43.9483089 502.352213,44 502.494025,44 C502.6234,44 502.765373,43.9483089 502.868906,43.8452488 L509.83368,36.9020577 C510.053181,36.6956154 510.053181,36.360348 509.846924,36.1547109 Z"
                                    id="Fill-1"
                                    transform="translate(502.500000, 40.000000) scale(1, -1) translate(-502.500000, -40.000000) "
                                  />
                                </g>
                              </g>
                            </svg>
                          </label>
                        </button>
                        <div className="dropdown-content dropdown-contentheight">
                          <a className="course_link" href="/about-imarticus/">
                            About Us
                          </a>
                          <a
                            className="course_link"
                            href="/women-in-stem-bootcamp/"
                          >
                            Women In STEM Boot Camp
                          </a>
                          <a className="course_link" href="/leadership/">
                            Leadership{' '}
                          </a>
                          <a
                            className="course_link"
                            href="/reviews-and-ratings/"
                          >
                            Review and Ratings{' '}
                          </a>
                          <a
                            className="course_link"
                            href="/learning-methodology/"
                          >
                            Learning Methodology{' '}
                          </a>
                          <a className="course_link" href="/refer-and-earn/">
                            Refer and Earn{' '}
                          </a>
                          {/* <a className="course_link" href="/scholarship/">
                            Scholarship
                          </a> */}
                          <a
                            className="course_link"
                            href="/certified-investment-banking-achievers-club/"
                          >
                            CIBOP Achievers 2020-2021
                          </a>
                          <a
                            className="course_link"
                            href="/Imarticus-analytics-webinar/"
                          >
                            Analytics Webinar
                          </a>
                          <a
                            className="course_link"
                            href="/Imarticus-marketing-webinar/"
                          >
                            Marketing Webinar
                          </a>
                          <a
                            className="course_link"
                            href="/webinar-cloud-blockchain-iot-developer-software-engineering/"
                          >
                            Technology Webinar
                          </a>
                          <a
                            className="course_link"
                            href="/Imarticus-finance-webinar/"
                          >
                            Finance Webinar
                          </a>
                          {/* <a
                            className="course_link"
                            href="/Learn-Data-Analytics/"
                          >
                            I-ACE
                          </a> */}
                          <a
                            className="course_link"
                            href="https://blog.imarticus.org/"
                          >
                            Blog
                          </a>
                          {/* <a
                            className="course_link"
                            href="/Imarticus-BFF-banking-and-finance-forever/"
                          >
                            Banking And Finance Forever
                          </a> */}
                          {/* <a className="course_link" href="/universitydegree/">W Programs</a> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown1 navlinkhidden">
                        <a href="/contact/" className="dropbtn">
                          For Recruiters
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown1 navlinkhidden">
                        <a href="/corporate/" className="dropbtn">
                          For Enterprise
                        </a>
                      </div>
                    </li>
                    <li>
                      <div style={{ display: 'flex', paddingLeft: '24px' }}>
                        <div style={{ height: '48px' }}>
                          <a href="https://pegasus.imarticus.org/">
                            <button
                              className="btnlogin"
                              type="button"
                              style={{ cursor: 'pointer', justifySelf: 'end' }}
                            >
                              <p>Login</p>
                            </button>
                          </a>
                        </div>
                        <div style={{ display: 'flex', alignSelf: 'center' }}>
                          <a
                            href="https://api.whatsapp.com/send?phone=918788619733&text=Hello%20Imarticus%20Learning,%20Please%20let%20me%20know%20more%20about%20Analytics,%20Finance,%20Technology%20and%20Marketing%20offerings"
                            target="_blank"
                          >
                            <img
                              alt="whatsapp icon"
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/whatsappicon.svg"
                              height="32px"
                              width="32px"
                              style={{ marginLeft: '40px' }}
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>

            {/* mobile */}
          </div>
          {/* floater */}
          <div style={{ margin: '0 auto' }}>
            {/* <amp-script script="scroll" > */}
            <div
              className={`floter ${showFloater ? `show` : `hide`}`}
              id="advertisement"
              // amp-fx="float-in-bottom"
            >
              {/* <a href="tel:+91-9319746164" style={{textDecoration: "none"}} >
              <button className="floater_button1">
                <p>
                  <img src="https://cdn.pegasus.imarticus.org/imarticus_2/phonelogo.svg" alt="call imarticus" width={20} height={20} >
                  </img>
                  +91-9319746164</p>
              </button>
            </a> */}
              <button className="floater_button2" onClick={openModal}>
                <img
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/phoneloggreen.svg"
                  width={20}
                  height={20}
                  alt="phone"
                ></img>
                <p>Request a Callback</p>
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=918788619733&text=Hello%20Imarticus%20Learning,%20Please%20let%20me%20know%20more%20about%20Analytics,%20Finance,%20Technology%20and%20Marketing%20offerings"
                style={{ textDecoration: 'none' }}
                target="_blank"
              >
                <button className="floater_button3">
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/whatsappicon2.svg"
                    width={20}
                    height={20}
                    alt="whatsapp"
                  ></img>
                  <p>Say Hi! on Whatsapp</p>
                </button>
              </a>
            </div>
            <div
              className="floter_mobile"
              // amp-fx="float-in-bottom"
            >
              <button className="floater_button_mob1" onClick={openModal}>
                <img
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/phonelogo.svg"
                  width={20}
                  height={20}
                  alt="phone"
                ></img>
                <p>Contact</p>
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=918788619733&text=Hello%20Imarticus%20Learning,%20Please%20let%20me%20know%20more%20about%20Analytics,%20Finance,%20Technology%20and%20Marketing%20offerings"
                style={{ textDecoration: 'none' }}
              >
                <button className="floater_button_mob2">
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/whatsappicon2.svg"
                    width={20}
                    height={20}
                    alt="whatsapp"
                  ></img>
                  <p>Chat</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbarnext
