import React, { useRef, useEffect, useState } from 'react'
import { CheckArrowByScreenWidth } from '../../services/helper'
import styles from '../../styles/webinar-page.module.css'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export default function Career(data) {
  const ref2 = useRef()
  const [load, setLoad] = useState(false)
  const [screenWidth, setScreenWidth] = useState()

  useEffect(() => {
    setLoad(true)
    setScreenWidth(window.innerWidth)
  }, [])

  return (
    <>
      {data.data.CareerEnableOrDisable && (
        <div style={{ background: 'rgba(221, 233, 237, 0.35)' }}>
          <div className={styles.careerMain}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <h6 className={styles.careerHeader}>
                Career transformations by imarticus
              </h6>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
                id="webinarcarousal"
              >
                {data.data.career.map((carrertrans) => {
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
                      >
                        <div className="certificate_card_main">
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
                            <img
                              src={carrertrans.image}
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
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                              }}
                            >
                              <img
                                src={carrertrans.image1}
                                height="42px"
                                width="208px"
                                layout="fixed"
                                objectFit="contain"
                                style={{ objectFit: 'contain' }}
                              />
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
          </div>
        </div>
      )}
    </>
  )
}
