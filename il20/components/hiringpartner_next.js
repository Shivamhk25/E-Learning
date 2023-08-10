import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import Program from '../json/program.json'

function hiringpartner() {
  return (
    <>
      <div style={{ margin: '0 auto', boxSizing: 'border-box' }}>
        <div>
          <div className="collab academic">
            <div className style={{ textAlign: 'center' }}>
              <div className="no-margin hiringpartnermain">
                <div className="hiringpartnerheading">
                  <h3>500+ Multinational Hiring Partners</h3>
                  <h2>A World Of Opportunities For You</h2>
                </div>
                <Swiper
                  // spaceBetween={50}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  slidesPerView={10}
                  className="hiringpartnercarousal_next"
                  style={{ paddingBottom: '45px', marginTop: '40px' }}
                  id="collaborationdisplaynone"
                >
                  {Program.hiringpartners.map(function (img) {
                    return (
                      <SwiperSlide>
                        <div className="collaboration_carousal_main_div">
                          <div className="collaborationcarousaldiv">
                            <Image
                              className="hiringpartner_child"
                              src={img.img}
                              layout="fill"
                              objectFit="contain"
                              alt="Hiring Partners Opportunities"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                {/* </div> */}
                <div className="mobile_image_carousal">
                  {Program.hiringpartners.map(function (img, idx) {
                    if (idx > 7) {
                      return
                    }
                    return (
                      <div className="">
                        <div className="collaborationcarousaldiv">
                          <Image
                            className="hiringpartner_child"
                            src={img.img}
                            alt="Hiring Partners Opportunities"
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default hiringpartner
