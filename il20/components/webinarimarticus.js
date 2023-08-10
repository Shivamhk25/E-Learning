import React, { useRef, useEffect, useState } from 'react'
import Program from '../json/program.json'
import Styles from '../styles/Webinarimarticus.module.css'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

function blogimarticus() {
  return (
    <div
      className={Styles.news}
      style={{ backgroundColor: 'rgba(60, 72, 82, 0.06)' }}
    >
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 0.5%' }}>
        <div className={Styles.webniar_main}>
          <div className={Styles.webniar_heading}>
            <h6>Experience Holistic Learning With Imarticus </h6>
            <p className={Styles.web_text}>
              Stay in the know by attending informative webinars and events.
            </p>
          </div>

          <div className={Styles.webinar_webdev}>
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
              // className={Styles.webinar_swipercarouselpagination}
              className="webinarcarousal"
            >
              {Program.webinararr.map(function (webinar) {
                return (
                  <SwiperSlide style={{ width: '600px' }}>
                    <div className={Styles.webniar_card}>
                      <div>
                        <Image
                          src={webinar.img}
                          alt=""
                          height="284"
                          width="270"
                          className={Styles.webinar_img}
                          layout="fixed"
                        />
                      </div>
                      <div className={Styles.webniar_data}>
                        <p>{webinar.department}</p>
                        <h4>
                          {webinar.title.length > 40
                            ? webinar.title.slice(0, 40) + '...'
                            : webinar.title}
                        </h4>
                        <h2>{webinar.date}</h2>
                        <h3>{webinar.webinar}</h3>
                        <a
                          href={webinar.link}
                          className={Styles.webinar_applynow}
                        >
                          <h5>{webinar.apply}</h5>
                          <Image
                            src="/imarticus_2/pgpprogrram/sidearrowgreeb.svg"
                            height="24"
                            width="24"
                            layout="fixed"
                          />
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

          <Swiper
            spaceBetween={26}
            // style={{ paddingBottom: '10px', marginLeft: '4px' }}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerGroup={1}
            slidesPerView={'auto'}
            className={Styles.mobile_carousal_webniar}
            id="webniarCarousel"
          >
            {Program.webinararr.map(function (webinar) {
              return (
                <SwiperSlide className={Styles.webniar_caroudal_main}>
                  <div className={Styles.webniar_carousal_div}>
                    <div>
                      <div style={{}}>
                        <Image
                          src={webinar.img}
                          alt=""
                          width="270"
                          height="222"
                          layout="fixed"
                          style={{ borderRadius: '8px' }}
                        />
                      </div>
                      <div className={Styles.webniar_carousal_data}>
                        <p>{webinar.department}</p>
                        <h1>
                          {webinar.title.length > 40
                            ? webinar.title.slice(0, 40) + '...'
                            : webinar.title}
                        </h1>
                        <h2>{webinar.date}</h2>
                        <h3>{webinar.webinar}</h3>
                        <a
                          href={webinar.link}
                          className={Styles.webinar_applynow2}
                        >
                          <h4>{webinar.apply}</h4>
                          <Image
                            src="/imarticus_2/pgpprogrram/sidearrowgreeb.svg"
                            height="24"
                            width="24"
                            layout="fixed"
                          />
                        </a>
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
  )
}

export default blogimarticus
