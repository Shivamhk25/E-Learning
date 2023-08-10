import React, { useRef, useEffect, useState } from 'react'
import Program from '../json/program.json'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Image from 'next/image'

function Testimonialnext() {
  const ref = useRef()
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
  })
  return (
    <>
      <section className="testimonials testimonials3">
        <div
          className
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              rowGap: '1.5rem',
            }}
            className="testimonial-main"
          >
            <div className="title_heading">
              <h3 className="title-small">
                We Develop The Leaders Of Tomorrow
              </h3>
              <h4 className="desc desc2">
                Read about a few success stories that were created with
                Imarticus Learning.
              </h4>
            </div>
            <div className="row">
              {Program.studentReviews.map(function (review, idx) {
                if (idx > 7) {
                  return
                }
                return (
                  <div className="card">
                    <div className="topRow">
                      <div className="dp">
                        <Image
                          src={review.img}
                          layout="fill"
                          objectFit="contain"
                          alt="testimonial review"
                        />
                        {/* <Image
                            className="badge"
                            src="/imarticus_2/linkedin.svg"
                            width="18px"
                            height="18px"
                            alt="inkedin profile"
                          /> */}
                      </div>
                      <div className="credentials">
                        <h6>{review.name}</h6>
                        <p>{review.org}</p>
                      </div>
                    </div>
                    <p className="comment">{review.text}</p>
                    <div style={{ display: 'flex' }}>
                      {/* {new Array(review.stars).fill().map(function(star){
                          return( */}
                      <div
                        style={{
                          position: 'relative',
                          width: '80px',
                          height: '16px',
                        }}
                      >
                        <Image
                          src={review.stars}
                          layout="fill"
                          objectFit="fill"
                        ></Image>
                      </div>

                      {/* );
                        })} */}
                      <p className="studentreviewrating">{review.rating}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="testimonal-carousal">
              <Swiper
                spaceBetween={26}
                style={{ paddingBottom: '10px', marginLeft: '4px' }}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerGroup={1}
                slidesPerView={'auto'}
                className="testimonial-crousel-swiper"
              >
                {Program.studentReviews.map(function (review, ind) {
                  return (
                    <SwiperSlide className="card_main">
                      <div className="card">
                        <div className="topRow">
                          <div className="dp">
                            <Image
                              src={review.img}
                              layout="fill"
                              objectFit="contain"
                              alt="testimonial imarticus review"
                            />
                          </div>
                          <div className="credentials">
                            <h6>{review.name}</h6>
                            <p>{review.org}</p>
                          </div>
                        </div>
                        <p className="comment">{review.text}</p>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                          }}
                        >
                          <div
                            style={{
                              position: 'relative',
                              width: '80px',
                              height: '16px',
                            }}
                          >
                            <Image
                              src={review.stars}
                              layout="fill"
                              objectFit="fill"
                            ></Image>
                          </div>

                          <p className="studentreviewrating">{review.rating}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonialnext
