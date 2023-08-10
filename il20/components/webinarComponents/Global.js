import React, { useRef, useEffect, useState } from 'react'
import { CheckArrowByScreenWidth } from '../../services/helper'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles3 from '../../styles/pgB&F.module.css'
import styles from '../../styles/webinar-page.module.css'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export default function Global({ data, data1, setFormModal }) {
  console.log(data, 'res')
  const [load, setLoad] = useState(false)
  const [screenWidth, setScreenWidth] = useState()
  const ref3 = useRef()
  let CardLength = data1.filter((c) =>
    data.Description.some((obj) => obj.point === c.programName)
  ).length
  console.log(CardLength, 'res')
  const toggleModal = () => {
    setFormModal((prevState) => !prevState)
  }

  useEffect(() => {
    setLoad(true)
    setScreenWidth(window.innerWidth)
  }, [])

  return (
    <>
      <div
        className={styles.MainDivOuter}
        style={{
          backgroundColor: 'white',
        }}
      >
        <div>
          <div
            className={styles.speakerMainDiv}
            style={{ marginBottom: '0px' }}
          >
            <h2 className={styles.aboutHeader}>{data.heading}</h2>
          </div>
          <div
            className={styles.speakerMainDiv}
            style={{ marginTop: '0px', marginBottom: '0px' }}
          >
            <p className={styles.coursepara}>{data.subheading}</p>
          </div>
          <div className={styles.courseCard}>
            <Swiper
              style={{ paddingBottom: '10px', marginLeft: '4px' }}
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
              id="ourProgramCarousal1"
            >
              {data1
                .filter((c) =>
                  data.Description.some((obj) => obj.point === c.programName)
                )
                .map(function (course) {
                  return (
                    <SwiperSlide>
                      <div
                        className="card"
                        style={{
                          marginRight: '40px',
                          width: '270px',
                          height: '464px',
                          borderRadius: '8px',
                        }}
                      >
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

                        <div className="card-main-finance-banking">
                          <div className="card-body mt-3">
                            <h1
                              className={styles3.similarCardTitle}
                              style={{
                                marginBottom: 'auto',
                                textTransform: 'none',
                                marginTop: '16px',
                              }}
                            >
                              {course.programTitle.length > 30
                                ? course.programTitle.slice(0, 100) + ''
                                : course.programTitle}
                            </h1>
                            <div
                              style={{
                                display: 'block',
                                marginTop: '4px',
                              }}
                            >
                              <p className="description_text">
                                {course.description.length > 50
                                  ? course.description.slice(0, 100) + ''
                                  : course.description}
                              </p>
                            </div>

                            <div
                              className=""
                              style={{
                                display: 'block',
                                position: 'absolute',
                                bottom: '42px',
                              }}
                            >
                              {course.duration1 ? (
                                <p className="course_desc">
                                  {course.duration1}
                                </p>
                              ) : (
                                <br />
                              )}
                              {course.duration2 ? (
                                <p className="course_desc">
                                  {course.duration2}
                                </p>
                              ) : (
                                <br />
                              )}
                              <p className="course_ugc_titled">
                                {course.ugctitled ? 'UGC Entitled' : ''}{' '}
                              </p>
                              <div className="course_star">
                                <Image
                                  src={course.star}
                                  alt=""
                                  width="80px"
                                  height="20px"
                                />
                                <p className="coursetagrating">
                                  {course.rating}
                                </p>
                              </div>
                            </div>
                            <div className="more">
                              <div
                                className="apply_button"
                                style={{
                                  display: 'block',
                                  position: 'absolute',
                                  bottom: '12px',
                                }}
                                // style={{display: 'block', position: 'inherit'}}
                              >
                                <a
                                  className="linkhovercolor"
                                  href={course.link}
                                  style={{ verticalAlign: 'middle' }}
                                >
                                  Know More
                                </a>
                              </div>
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
          <div className={styles.aboutEnquire3} style={{ marginBottom: '0px' }}>
            <button
              onClick={toggleModal}
              className={styles.partnerbutton}
              style={{ background: '#035642' }}
            >
              <span
                className={styles1.partnerbuttontext}
                style={{ color: 'white' }}
              >
                Register Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
