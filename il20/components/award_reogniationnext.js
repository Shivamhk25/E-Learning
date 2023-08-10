import React, { useRef, useEffect, useState } from 'react'
import Program from '../json/program.json'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

function award_recogniation(props) {
  return (
    <>
      <div
        className="news news_main"
        style={{ backgroundColor: 'rgba(60, 72, 82, 0.06)' }}
      >
        <div
          className
          style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}
        >
          <div className="award-main2">
            <div className="award-excellence-main">
              <h6 className="award_title">{props.name}</h6>
              <h6 className="about_title">{props.aboutname}</h6>
            </div>
            <div>
              <Swiper
                spaceBetween={26}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                slidesPerView={'auto'}
                className="grey-color-swiper-3"
              >
                {Program.award_rr.map(function (award) {
                  return (
                    <SwiperSlide>
                      <div className="award_card_main">
                        <div className="award_card_main1">
                          <div>
                            <h5>{award.desc}</h5>
                          </div>
                          <div className="award_card_img2">
                            <div style={{ height: '50px', width: '140px' }}>
                              <Image
                                src={award.img}
                                alt="award-achivement"
                                layout="fill"
                                objectFit="contain"
                              />
                            </div>
                          </div>
                          <div
                            className="award_card_bottom2"
                            style={{ backgroundColor: '#0177A0' }}
                          ></div>
                        </div>
                        <div className="award_card_img2">
                          <Image
                            src={award.img}
                            alt="award-achivement"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <div
                          className="award_card_bottom2"
                          style={{ backgroundColor: '#0177A0' }}
                        />
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
      </div>
    </>
  )
}

export default award_recogniation
