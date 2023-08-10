import React, { useRef, useEffect, useState } from 'react'
import Program from '../../json/program.json'
import Image from 'next/image'
import styles from '../../styles/pgB&F.module.css'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles2 from '../../styles/financial-services-capital-markets-management-program-iim-indore.module.css'
import { GetProgramsAsPerTagName } from '../../services/helper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export default function SimilarPrograms({ propsdata, programid }) {
  const [width, setWidth] = useState()
  useEffect(() => {
    setWidth(window.innerWidth)
  })
  return (
    <>
      <div className="award-excellence-main">
        <h6 className={'award_title ' + ' ' + styles.simProgHeader}>
          Similar Programs
        </h6>
      </div>

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
        {propsdata &&
          propsdata.length > 0 &&
          GetProgramsAsPerTagName(propsdata, programid).map((course) => (
            <SwiperSlide>
              <div
                className="card"
                style={{
                  marginRight: '40px',
                  width: '270px',
                  height: '464px',
                  borderRadius: '8px',
                  overflow: 'auto',
                }}
              >
                <div
                  className="card-image"
                  style={{
                    background: `url(${course.img})`,
                    backgroundSize: 'cover',
                  }}
                >
                  {console.log(course.img)}
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
                      {console.log(course.img2)}
                    </div>
                    <div className="smaller-card-div-text">
                      <p>{course.program}</p>
                      {console.log(course.program)}
                    </div>
                  </div>
                </div>

                <div className="card-main-finance-banking">
                  <div className="card-body mt-3">
                    <h3
                      className={styles.similarCardTitle}
                      style={{
                        marginBottom: 'auto',
                        textTransform: 'none',
                        marginTop: '16px',
                      }}
                    >
                      {course.programName.length > 30
                        ? course.programName.slice(0, 70) + ''
                        : course.programName}
                    </h3>
                    <div
                      style={{
                        display: 'block',
                        position: 'absolute',
                        top: '240px',
                        marginTop: '8px',
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
                        <p className="course_desc">{course.duration1}</p>
                      ) : (
                        <br />
                      )}
                      {course.duration2 ? (
                        <p className="course_desc">{course.duration2}</p>
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
                        <p className="coursetagrating">{course.rating}</p>
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
          ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </>
  )
}
