import React, { useRef, useEffect, useState } from 'react'
import Program from '../json/program.json'
import Styles from '../styles/Blogimarticus.module.css'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

function blogimarticus({ category }) {
  return (
    <div>
      <div className={Styles.news} style={{ backgroundColor: '#FFF' }}>
        <div
          style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}
        >
          <div className={Styles.blog_main_div}>
            <h6>Blogs</h6>
            <div>
              <Swiper
                spaceBetween={26}
                // style={{ paddingBottom: '10px', marginLeft: '4px' }}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
                className={Styles.window_carousal_blog}
                id="blogCarousel"
              >
                {Program.blog_arr
                  .filter((blog) => {
                    if (!category) return true
                    return blog.category == category
                  })
                  .map(function (blog) {
                    return (
                      <SwiperSlide className={Styles.blog_card_main}>
                        <a href={blog.link}>
                          <div
                            className={Styles.blog_card}
                            style={{
                              background: `url(${blog.backgroundimag})`,
                            }}
                          >
                            <div
                              className={Styles.blog_card_top}
                              style={{
                                backgroundColor: `${blog.backgroundcolor}`,
                              }}
                            >
                              <div className={Styles.blog_card_text}>
                                <h4>{blog.desc}</h4>
                              </div>
                              <div className={Styles.blog_card_bottom}>
                                <p>{blog.date}</p>
                                <a href={blog.link}>
                                  <Image
                                    src="/imarticus_2/circlearrowwhite.svg"
                                    height="32px"
                                    width="32px"
                                    layout="fixed"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </a>
                      </SwiperSlide>
                    )
                  })}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </Swiper>
            </div>

            <div>
              <Swiper
                spaceBetween={26}
                style={{ paddingBottom: '10px', marginLeft: '4px' }}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
                className={Styles.mobile_carousal_blog}
                id="blogCarousel2"
              >
                {Program.blog_arr
                  .filter((blog) => {
                    if (!category) return true
                    return blog.category == category
                  })
                  .map(function (blog) {
                    return (
                      <SwiperSlide className={Styles.mobile_blog_carousal_main}>
                        <a href={blog.link}>
                          <div
                            className={Styles.mobile_carousal_div}
                            style={{
                              background: `url(${blog.backgroundimag})`,
                            }}
                          >
                            <div
                              className={Styles.mobile_carousal}
                              style={{
                                backgroundColor: `${blog.backgroundcolor}`,
                              }}
                            >
                              <div className={Styles.mobile_carousal_top}>
                                <h1>{blog.desc}</h1>
                              </div>
                              <div className={Styles.mobile_carousal_bottom}>
                                <p>{blog.date}</p>
                                <a href={blog.link}>
                                  <img
                                    src="https://cdn.pegasus.imarticus.org/imarticus_2/circlearrowwhite.svg"
                                    height="32px"
                                    width="32px"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </a>
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
            </div>

            <a
              style={{ margin: 'auto', textDecoration: 'none' }}
              href="https://blog.imarticus.org/"
            >
              <button
                type="button"
                className={Styles.window_button_blog}
                style={{ cursor: 'pointer' }}
              >
                <p>Explore More</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default blogimarticus
