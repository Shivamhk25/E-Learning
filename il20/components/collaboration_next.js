import React, { useRef, useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Image from 'next/image'
import Program from '../json/program.json'

function collaboration() {
  return (
    <>
      <div style={{ margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{}}>
          <div className="collab academic">
            <div className style={{ textAlign: 'center' }}>
              <div className="no-margin hiringpartnermain">
                <div className="hiringpartnerheading3 hiringpartnerimagediv">
                  <h4>
                    We’ve Partnered With Leading Institutions And Corporations
                  </h4>
                </div>
                {/* <div class="collaborationdisplaynone"> */}
                <Swiper
                  // spaceBetween={50}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  slidesPerView={10}
                  className="hiringpartnercarousal2"
                  style={{ paddingBottom: '45px', paddingTop: '40px' }}
                  id="collaborationdisplaynone"
                >
                  {Program.collaborationcarousal.map(function (img) {
                    return (
                      <SwiperSlide>
                        <div className="collaboration_carousal_main_div">
                          <div className="collaborationcarousaldiv2">
                            <Image
                              src={img.img}
                              layout="fill"
                              objectFit="contain"
                              alt="Imarticus Learning KPMG AI & ML IITG IIM LSE"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
                {/* </div> */}
                <div className="mobile_image_carousal">
                  {Program.collaborationcarousal.map(function (img, idx) {
                    if (idx > 9) {
                      return
                    }
                    return (
                      <div className="">
                        <div className="collaborationcarousaldiv2">
                          <Image
                            src={img.img}
                            alt="Imarticus Learning KPMG AI & ML IITG IIM LSE"
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

export default collaboration
