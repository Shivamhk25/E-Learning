import React, { useRef, useEffect, useState } from 'react'
import { CheckArrowByScreenWidth } from '../../services/helper'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles from '../../styles/webinar-page.module.css'
import Image from 'next/image'

import dataArr from '../../json/program.json'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export default function StaticSection({ setFormModal }) {
  const ref = useRef()
  const ref2 = useRef()
  const [load, setLoad] = useState(false)
  const [screenWidth, setScreenWidth] = useState()

  const toggleModal = () => {
    setFormModal((prevState) => !prevState)
  }

  useEffect(() => {
    setLoad(true)
    setScreenWidth(window.innerWidth)
  }, [])

  return (
    <>
      <div className={styles.MainDivOuter} style={{ backgroundColor: 'white' }}>
        <div>
          <div className={styles.excelMainDiv}>
            <h3
              className={styles.excelMainHeader}
              style={{ marginBottom: '0px' }}
            >
              Press Coverage
            </h3>
          </div>
          <div className={styles.excelMainDiv1}>
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
            >
              {dataArr.news_arr.map(function (news) {
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
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>
          <div className={styles.ReadMore}>
            <a
              href="https://blog.imarticus.org/news-and-events/"
              target="_blank"
              style={{ margin: 'auto', textDecoration: 'none' }}
            >
              <button className="news-bottom-div">
                <p>Read More</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        className={styles.MainDivOuter}
        style={{ background: 'rgba(221, 233, 237, 0.35)', width: '100%' }}
      >
        <div>
          <div className={styles.freeMainDiv1} style={{ paddingBottom: '0px' }}>
            <h3
              className={styles.excelMainHeader}
              style={{ marginBottom: '0px' }}
            >
              Excel with Imarticus
            </h3>
          </div>
          <div className={styles.excelMainDiv1}>
            <Swiper
              spaceBetween={26}
              style={{
                paddingBottom: '10px',
              }}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
            >
              <SwiperSlide>
                <div
                  className="container-div"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(18, 85, 226, 0.85), rgba(18, 85, 226, 0.85)) ,url(https://cdn.pegasus.imarticus.org/imarticus_2/imarticusexcellecne.webp)',
                  }}
                >
                  <div className="container-div-excellence">
                    <a
                      style={{}}
                      href="https://blog.imarticus.org/category/analytics/"
                    >
                      Explore Analytics Resources
                    </a>
                    <div
                      style={{
                        position: 'relative',
                        height: '32px',
                        width: '32px',
                      }}
                    >
                      <Image
                        src="/imarticus_2/circlearrowwhite.svg"
                        alt="circle-arrow Analytics"
                        layout="fill"
                        objectFit="fill"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="container-div"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(219, 154, 79, 0.85),rgba(219, 154, 79, 0.85)) ,url(https://cdn.pegasus.imarticus.org/imarticus_2/imarticusexcellence2.webp)',
                  }}
                >
                  <div className="container-div-excellence">
                    <a
                      style={{}}
                      href="https://blog.imarticus.org/category/finance/"
                    >
                      Explore Finance Resources
                    </a>
                    <div
                      style={{
                        position: 'relative',
                        height: '32px',
                        width: '32px',
                      }}
                    >
                      <Image
                        src="/imarticus_2/circlearrowwhite.svg"
                        alt="circle-arrow Finance"
                        layout="fill"
                        objectFit="fill"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="container-div"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(48, 114, 126, 0.85), rgba(48, 114, 126, 0.85)), url(https://cdn.pegasus.imarticus.org/imarticus_2/imarticusexcellence3.webp)',
                  }}
                >
                  <div className="container-div-excellence">
                    <a
                      style={{}}
                      href="https://blog.imarticus.org/category/technology/"
                    >
                      Explore Technology Resources
                    </a>
                    <div
                      style={{
                        position: 'relative',
                        height: '32px',
                        width: '32px',
                      }}
                    >
                      <Image
                        src="/imarticus_2/circlearrowwhite.svg"
                        alt="circle-arrow technology"
                        layout="fill"
                        objectFit="fill"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="container-div"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(128, 153, 205, 0.85), rgba(128, 153, 205, 0.85)),url(https://cdn.pegasus.imarticus.org/imarticus_2/imarticusexcellence4.webp)',
                  }}
                >
                  <div className="container-div-excellence">
                    <a
                      style={{}}
                      href="https://blog.imarticus.org/category/marketing/"
                    >
                      Explore Marketing Resources
                    </a>
                    <div
                      style={{
                        position: 'relative',
                        height: '32px',
                        width: '32px',
                      }}
                    >
                      <Image
                        src="/imarticus_2/circlearrowwhite.svg"
                        alt="circle-arrow marketing"
                        layout="fill"
                        objectFit="fill"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className={styles.aboutEnquire2}
            style={{ marginBottom: '0px', position: 'relative' }}
          >
            <button onClick={toggleModal} className={styles.excelButton}>
              <div
                className={styles1.partnerbuttontext}
                style={{ color: 'white' }}
              >
                Join Our Community
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
