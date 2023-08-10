import React from 'react'
import Image from 'next/image'

function Certicoursenext() {
  return (
    <>
      <div>
        <div className="web-view">
          <div className="certiCourses course_background" id="mouseTar">
            <a href="/job-assured-programs/" className="course-images-div2">
              <div id="mouseTarget2">
                <p className="main_heading">JOB ASSURED PROGRAMS</p>
                <div className="course_desc_div">
                  <p className="course_descr">
                    Move ahead in your career with job guarantee programs
                  </p>
                  <div className="explore_div">
                    <p className="page_route">
                      <p className="explore_tag">Explore</p>
                      <div
                        style={{
                          position: 'relative',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <Image
                          src="/imarticus_2/circlearrowwhite.svg"
                          layout="fill"
                          objectFit="fill"
                          alt="circle white arrow"
                        />
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href="/certification/" className="course-images-div1">
              <div id="mouseTarget">
                <p className="main_heading">CERTIFICATION COURSES</p>
                <div className="course_desc_div">
                  <p className="course_descr">
                    Earn certifications from leading institutions
                  </p>
                  <div className="explore_div">
                    <p className="page_route">
                      <p className="explore_tag">Explore</p>
                      <div
                        style={{
                          position: 'relative',
                          width: '32px',
                          height: '32px',
                        }}
                      >
                        <Image
                          src="/imarticus_2/circlearrowwhite.svg"
                          layout="fill"
                          objectFit="fill"
                          alt="circle white arrow"
                        />
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* <div className="course-images-div3" id="mouseTarget3">
              <a href="/universitydegree/" className="main_heading">UNIVERSITY DEGREE PROGRAM</a>
              <div className="course_desc_div">
                <a href="/universitydegree/" className="course_descr">Earn globally recognized certifications from leading universities.</a>
                <div className="explore_div">
                  <a className="page_route" href="/universitydegree/">
                    <p className="explore_tag">Explore</p>
                    <img src="https://cdn.pegasus.imarticus.org/imarticus_2/circlearrowwhite.svg" width={32} height={32} />
                  </a>
                </div>
              </div>
            </div>  */}
          </div>
        </div>
        <div className="mobile-tab-view">
          <div
            className="certi-mobile-1"
            style={{
              background:
                'url(https://cdn.pegasus.imarticus.org/imarticus_2/jobassuranceheader.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="mobile_course_div">
              <h1>Job Assured Programs</h1>
              <a className="arrow_link" href="/job-assured-programs/">
                <div
                  style={{
                    height: '32px',
                    width: '32px',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/imarticus_2/circlearrowwhite.svg"
                    layout="fill"
                    objectFit="fill"
                    alt="circle white arrow"
                  />
                </div>
              </a>
            </div>
          </div>
          <div
            className="certi-mobile-1"
            style={{
              background:
                'url(https://cdn.pegasus.imarticus.org/imarticus_2/certificationheader.webp)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="mobile_course_div">
              <h1>Certification Courses</h1>
              <a className="arrow_link" href="/certification/">
                <div
                  style={{
                    height: '32px',
                    width: '32px',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/imarticus_2/circlearrowwhite.svg"
                    layout="fill"
                    objectFit="fill"
                    alt="circle white arrow"
                  />
                </div>
              </a>
            </div>
          </div>
          {/* <div className="certi-mobile-1" style={{background: 'url(https://cdn.pegasus.imarticus.org/imarticus_2/universityheader.webp)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="mobile_course_div">
              <h1>University Degree Programs</h1>
              <a className="arrow_link" href="/universitydegree/">
                <img src="https://cdn.pegasus.imarticus.org/imarticus_2/circlearrowwhite.svg" height={32} width={32} />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Certicoursenext
