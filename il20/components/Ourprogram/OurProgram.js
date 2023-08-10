import React, { useState, useRef, useEffect, createRef } from 'react'
import Program from '../../json/program.json'
import Helper from '../../services/helper'
import Accordion from 'react-bootstrap/Accordion'
import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/Formtype1-Nm-Em-Con-Loc'
import EnquireForm2 from '../../components/Forms/Formtype2-Nm-Em-Con-Loc-AoI'
import EnquireForm3 from '../../components/Forms/Formtype3-Nm-Em-Con-Loc-MoL'
import EnquireForm4 from '../../components/Forms/Formtype4-Nm-Em-Con-Loc-AoI-MoL'
import EnquireForm5 from '../../components/Forms/Formtype5-Nm-Em-Con-Loc'
import Image from 'next/image'
import { GetProgramsAsPerTagName } from '../../services/helper'

function ourprogram({ propsdata }) {
  const [selectedIndex, setSelectedIndex] = useState('TOP PROGRAMS')
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
  })

  const [formModal, setFormModal] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  //defaut value false;
  const [brochureUrl, setBrochureUrl] = useState()
  const [courseForm, setCourseForm] = useState('')
  const [courseName, setCourseName] = useState('')
  //event values is an object
  const toggleModal = (eventValues) => {
    console.log('eventValues :::::::: ', eventValues)
    if (eventValues && eventValues.download) {
      setDownloadBrochure(eventValues.download)
      setBrochureUrl(eventValues.url)
    } else {
      setDownloadBrochure(false)
      setBrochureUrl(null)
    }
    setFormModal((prevState) => !prevState)
    // setCourseForm(eventValues.currentTarget.id)
  }

  return (
    <section
      className="ourprogramspacing"
      style={{ background: 'rgba(60, 72, 82, 0.04)' }}
    >
      {formModal && (
        <Modal toggleModal={toggleModal}>
          {courseForm == 'type1' ? (
            <EnquireForm
              toggleModal={toggleModal}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              courseName={courseName}
              propsdata={propsdata}
            />
          ) : courseForm == 'type2' ? (
            <EnquireForm2
              toggleModal={toggleModal}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              courseName={courseName}
              propsdata={propsdata}
            />
          ) : courseForm == 'type3' ? (
            <EnquireForm3
              toggleModal={toggleModal}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              courseName={courseName}
              propsdata={propsdata}
            />
          ) : courseForm == 'type4' ? (
            <EnquireForm4
              toggleModal={toggleModal}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              courseName={courseName}
              propsdata={propsdata}
            />
          ) : courseForm == 'type5' ? (
            <EnquireForm5
              toggleModal={toggleModal}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              courseName={courseName}
              propsdata={propsdata}
            />
          ) : (
            // :
            // (courseForm == 'type2') ?
            //   <EnquireForm1
            //   toggleModal={toggleModal}
            //   formValue={1}
            //   downloadBrochure={downloadBrochure}
            //   brochureUrl={brochureUrl}
            // />
            ``
          )}
        </Modal>
      )}
      <div
        id="imarticusprogram"
        style={{
          margin: '0 auto',
          boxSizing: 'border-box',
          maxWidth: '1300px',
        }}
      >
        <div id="courses" style={{ boxSizing: 'border-box' }}>
          <h1 className="course-detail-titles sec-heading">Our Programs</h1>
          {/* web view */}
          <div className="rowourprogram">
            <ul className="select">
              <div id="ampSelector" layout="container">
                <li
                  role="button"
                  option={0}
                  onClick={() => setSelectedIndex('TOP PROGRAMS')}
                  className={`course-detail-info-title center-all-768 button ${
                    selectedIndex == 'TOP PROGRAMS' && 'selected'
                  }`}
                >
                  <span role="button">TOP PROGRAMS</span>
                  <svg
                    style={{ marginLeft: 'auto' }}
                    xmlns="http://www.w3.org/2000/svg"
                    alt="Top Programs"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    course
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />{' '}
                  </svg>
                </li>
                <li
                  role="button"
                  option={1}
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
                  option={2}
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
                  option={3}
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
                  option={4}
                  onClick={() => setSelectedIndex('MARKETING')}
                  className={`course-detail-info-title center-all-768 button ${
                    selectedIndex == 'MARKETING' && 'selected'
                  }`}
                  data-amp-bind-class="course_selected.selected==3? 'course-detail-info-title center-all-768 selected button' : 'course-detail-info-title center-all-768 button'"
                >
                  <span role="button">MARKETING</span>
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
                {/* {Program.ourprograms_indexes.map((key) => {
                  {return propsdata && propsdata.length > 0 && propsdata.map((course) => {
                    if (course.leadsquareProgramKey.toString() == key.value.toString()) {  
                      return ( */}
                {propsdata &&
                  propsdata.length > 0 &&
                  GetProgramsAsPerTagName(propsdata, selectedIndex).map(
                    (course) => {
                      return (
                        <div>
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
                                    width="95px"
                                    height="30px"
                                    src={course.img2}
                                    alt="course insititute"
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
                                <h2
                                  className="main"
                                  style={{
                                    marginBottom: 'auto',
                                    textTransform: 'none',
                                  }}
                                >
                                  {course.programName}
                                </h2>
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
                                    <div className="course_star_main">
                                      <Image
                                        src={course.star}
                                        alt=""
                                        layout="fill"
                                        objectFit="fill"
                                      />
                                    </div>

                                    <p className="coursetagrating">
                                      {course.rating}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="more">
                                <div>
                                  <div
                                    onClick={() => {
                                      toggleModal()
                                      setCourseName(course.leadsquareProgramKey)
                                      setCourseForm(course.form)
                                    }}
                                  >
                                    <button
                                      className="apply_button_index"
                                      href={course.link}
                                    >
                                      Apply Now
                                    </button>
                                  </div>
                                </div>
                                <div className="more">
                                  <div>
                                    <div className="apply_buttonn">
                                      <a
                                        className="linkhovercolor_index"
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
                        //       )
                        //     }
                        //   })}

                        // })}
                      )
                    }
                  )}
              </div>
            </div>
          </div>

          {/* mobile view */}
          <div className="mobiletab-ourprogram">
            <Accordion
              defaultActiveKey={['5']}
              alwaysOpen
              className="dropdownourprogram"
            >
              <Accordion.Item eventKey="5" className="ourProgramaccordion">
                <Accordion.Header>
                  <p className="navbar-drop-down-text">TOP PROGRAMS</p>
                </Accordion.Header>
                <Accordion.Body className="ourprogramaccans_index">
                  {load && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                      }}
                    >
                      {propsdata &&
                        propsdata.length > 0 &&
                        GetProgramsAsPerTagName(propsdata, 'TOP PROGRAMS').map(
                          (course) => (
                            <div className="ourprogramcard_main">
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
                                    <h2
                                      className="course_name"
                                      style={{ marginBottom: 'auto' }}
                                    >
                                      {course.programName}
                                    </h2>
                                    <p className="description_text">
                                      {course.description}
                                    </p>

                                    <div className="course_rating">
                                      <p className="course_desc">
                                        {course.duration1}
                                      </p>
                                      <p className="course_desc">
                                        {course.duration2}
                                      </p>{' '}
                                      <p className="course_ugc_titled">
                                        {course.ugctitled ? 'UGC Entitled' : ''}{' '}
                                      </p>
                                      <div className="course_star">
                                        <Image
                                          src={course.star}
                                          alt=""
                                          width="80px"
                                          height="20px"
                                        ></Image>
                                        <p className="coursetagrating">
                                          {course.rating}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="more">
                                      <div>
                                        <div
                                          onClick={() => {
                                            toggleModal()
                                            setCourseName(
                                              course.leadsquareProgramKey
                                            )
                                            setCourseForm(course.form)
                                          }}
                                        >
                                          <button
                                            className="apply_button_index"
                                            href={course.link}
                                          >
                                            Apply Now
                                          </button>
                                        </div>
                                        <div className="apply_buttonn">
                                          <a
                                            className="linkhovercolor_index"
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
                        )}
                    </div>
                  )}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="ourProgramaccordion">
                <Accordion.Header>
                  <p className="navbar-drop-down-text">FINANCE</p>
                </Accordion.Header>
                <Accordion.Body className="ourprogramaccans_index">
                  {load && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                      }}
                    >
                      {propsdata &&
                        propsdata.length > 0 &&
                        GetProgramsAsPerTagName(propsdata, 'FINANCE').map(
                          (course) => (
                            <div className="ourprogramcard_main">
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
                                        width="95px"
                                        height="30px"
                                        alt="course insititute"
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
                                    <h2
                                      className="course_name"
                                      style={{ marginBottom: 'auto' }}
                                    >
                                      {course.programName}
                                    </h2>
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
                                        <div className="course_star_main">
                                          <Image
                                            src={course.star}
                                            alt=""
                                            layout="fill"
                                            objectFit="contain"
                                          ></Image>
                                        </div>

                                        <p className="coursetagrating">
                                          {course.rating}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="more">
                                      <div>
                                        <div
                                          onClick={() => {
                                            toggleModal()
                                            setCourseName(
                                              course.leadsquareProgramKey
                                            )
                                            setCourseForm(course.form)
                                          }}
                                        >
                                          <button
                                            className="apply_button_index"
                                            href={course.link}
                                          >
                                            Apply Now
                                          </button>
                                        </div>
                                        <div className="apply_buttonn">
                                          <a
                                            className="linkhovercolor_index"
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
                        )}
                    </div>
                  )}
                  {/* <div
                    className="ourprogramtab-control"
                    style={{ width: '100%' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                        gap: '20px',
                      }}
                    >
                      <div onClick={() => ref.current.prev()}>
                        <Image
                          src="/imarticus_2/awardarrow.svg"
                          width="56px"
                          height="56px"
                          layout="fixed"
                          className="leftArrow"
                        />
                      </div>
                      <div onClick={() => ref.current.next()}>
                        <Image
                          src="/imarticus_2/awardarrow.svg"
                          width="56px"
                          height="56px"
                          layout="fixed"
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className="mobile_carousal_link">
                    <a href="/finance/">Explore our Finance Programs</a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="ourProgramaccordion">
                <Accordion.Header>
                  <p className="navbar-drop-down-text">ANALYTICS</p>
                </Accordion.Header>
                <Accordion.Body className="ourprogramaccans_index">
                  {load && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                      }}
                    >
                      {propsdata &&
                        propsdata.length > 0 &&
                        GetProgramsAsPerTagName(propsdata, 'ANALYTICS').map(
                          (course) => (
                            <div className="ourprogramcard_main">
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
                                        width="105px"
                                        height="35px"
                                        src={course.img2}
                                        alt="course insititute"
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
                                    <h2
                                      className="course_name"
                                      style={{
                                        marginBottom: 'auto',
                                        textTransform: 'none',
                                      }}
                                    >
                                      {course.programName}
                                    </h2>
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
                                        <div
                                          onClick={() => {
                                            toggleModal()
                                            setCourseName(
                                              course.leadsquareProgramKey
                                            )
                                            setCourseForm(course.form)
                                          }}
                                        >
                                          <button
                                            className="apply_button_index"
                                            href={course.link}
                                          >
                                            Apply Now
                                          </button>
                                        </div>
                                        <div className="apply_buttonn">
                                          <a
                                            className="linkhovercolor_index"
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
                        )}
                    </div>
                  )}
                  {/* <div
                    className="ourprogramtab-control"
                    style={{ width: '100%' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                        gap: '20px',
                      }}
                    >
                      <div onClick={() => ref2.current.prev()}>
                        <Image
                          src="/imarticus_2/awardarrow.svg"
                          width="56px"
                          height="56px"
                          layout="fixed"
                          className="leftArrow"
                        />
                      </div>
                      <div onClick={() => ref2.current.next()}>
                        <Image
                          src="/imarticus_2/awardarrow.svg"
                          width="56px"
                          height="56px"
                          layout="fixed"
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className="mobile_carousal_link">
                    <a href="/analytics/">Explore our Analytics Programs</a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="ourProgramaccordion">
                <Accordion.Header>
                  <p className="navbar-drop-down-text">TECHNOLOGY</p>
                </Accordion.Header>
                <Accordion.Body className="ourprogramaccans_index">
                  {load && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                      }}
                    >
                      {propsdata &&
                        propsdata.length > 0 &&
                        GetProgramsAsPerTagName(propsdata, 'TECHNOLOGY').map(
                          (course) => (
                            <div className="ourprogramcard_main">
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
                                        width="95px"
                                        height="30px"
                                        src={course.img2}
                                        alt="course insititute"
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
                                    <h2
                                      className="course_name"
                                      style={{ marginBottom: 'auto' }}
                                    >
                                      {course.programName}
                                    </h2>
                                    <p className="description_text">
                                      {course.description}
                                    </p>

                                    <div className="course_rating">
                                      <p className="course_desc">
                                        {course.duration1}
                                      </p>
                                      <p className="course_desc">
                                        {course.duration2}
                                      </p>{' '}
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
                                        <div
                                          onClick={() => {
                                            toggleModal()
                                            setCourseName(
                                              course.leadsquareProgramKey
                                            )
                                            setCourseForm(course.form)
                                          }}
                                        >
                                          <button
                                            className="apply_button_index"
                                            href={course.link}
                                          >
                                            Apply Now
                                          </button>
                                        </div>
                                        <div className="apply_buttonn">
                                          <a
                                            className="linkhovercolor_index"
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
                        )}
                    </div>
                  )}
                  {/* <div
                    className="ourprogramtab-control"
                    style={{ width: '100%' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                        gap: '20px',
                      }}
                    >
                      <div onClick={() => ref3.current.prev()}>
                        <Image
                          src="/imarticus_2/awardarrow.svg"
                          width="56px"
                          height="56px"
                          layout="fixed"
                          className="leftArrow"
                        />
                      </div>
                      <div onClick={() => ref3.current.next()}>
                        <Image
                          src="/imarticus_2/awardarrow.svg"
                          width="56px"
                          height="56px"
                          layout="fixed"
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className="mobile_carousal_link">
                    <a href="/technology/">Explore our Technology Programs</a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="ourProgramaccordion">
                <Accordion.Header>
                  <p className="navbar-drop-down-text">MARKETING</p>
                </Accordion.Header>
                <Accordion.Body className="ourprogramaccans_index">
                  {load && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                      }}
                    >
                      {propsdata &&
                        propsdata.length > 0 &&
                        GetProgramsAsPerTagName(propsdata, 'MARKETING').map(
                          (course) => (
                            <div className="ourprogramcard_main">
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
                                        width="95px"
                                        height="30px"
                                        src={course.img2}
                                        alt="course insititute"
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
                                    <h2
                                      className="course_name"
                                      style={{ marginBottom: 'auto' }}
                                    >
                                      {course.programName}
                                    </h2>
                                    <p className="description_text">
                                      {course.description}
                                    </p>

                                    <div className="course_rating">
                                      <p className="course_desc">
                                        {course.duration1}
                                      </p>
                                      <p className="course_desc">
                                        {course.duration2}
                                      </p>{' '}
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
                                        <div
                                          onClick={() => {
                                            toggleModal()
                                            setCourseName(
                                              course.leadsquareProgramKey
                                            )
                                            setCourseForm(course.form)
                                          }}
                                        >
                                          <button
                                            className="apply_button_index"
                                            href={course.link}
                                          >
                                            Apply Now
                                          </button>
                                        </div>
                                        <div className="apply_buttonn">
                                          <a
                                            className="linkhovercolor_index"
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
                        )}
                    </div>
                  )}
                  {/* <div
                    className="ourprogramtab-control"
                    style={{ width: '100%' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                        gap: '20px',
                      }}
                    >
                      <div onClick={() => ref4.current.prev()}>
                        <Image
                          src="/imarticus_2/awardarrow.svg"
                          width="56px"
                          height="56px"
                          layout="fixed"
                          className="leftArrow"
                        />
                      </div>
                      <div onClick={() => ref4.current.next()}>
                        <Image
                          src="/imarticus_2/awardarrow.svg"
                          width="56px"
                          height="56px"
                          layout="fixed"
                        />
                      </div>
                    </div>
                  </div> */}
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
  )
}

export default ourprogram
