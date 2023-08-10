import React, { useRef, useEffect, useState } from 'react'
import Program from '../json/program.json'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Image from 'next/image'

function imarticusnews() {
  const ref = useRef()
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
  })
  return (
    <div>
      <div className="news news_main" style={{}}>
        <div
          className
          style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}
        >
          <div className="award-main">
            <h1 className="award_title2">Press Coverage</h1>
            <div>
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
                {Program.news_arr.map(function (news) {
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
    </div>
  )
}

export default imarticusnews
