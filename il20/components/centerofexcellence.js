import React, { useRef, useEffect, useState } from 'react'
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
    <>
      <div className="news news_main">
        <div
          className
          style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}
        >
          <div className="award-main">
            <div className="center-excellence-main">
              <h6 className="award_title">Excel With Imarticus</h6>
            </div>
            <div>
              <Swiper
                spaceBetween={26}
                style={{
                  paddingBottom: '10px',
                  marginLeft: '4px',
                  width: 'auto',
                }}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
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
            <button onClick={onClick} className="news-bottom-div">
              <p>Explore More</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default imarticusnews
