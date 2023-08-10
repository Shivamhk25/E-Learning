import React from 'react'
import styleCSS from '!!raw-loader!../styles/collaboration.css'
const fixCSS = `}${styleCSS}{`
import Head from 'next/head'
import Program from '../json/program.json'
import Carousel from 'react-bootstrap/Carousel'

function HiringPartner() {
  return (
    <div style={{ margin: '0 auto', boxSizing: 'border-box' }}>
      <div>
        <div className="collab academic">
          <div className style={{ textAlign: 'center' }}>
            <div className="row no-margin hiringpartnermain">
              <div className="hiringpartnerheading">
                <h1>We've Partnered With Leading Institutions</h1>
                {/* <h2>A World Of Opportunities For You</h2> */}
              </div>
              <Carousel variant="dark">
                {Program.hiringpartners.map(function (img) {
                  return (
                    <Carousel.Item>
                      <img
                        src={img.img}
                        height={1}
                        width={1}
                        className="collaborationimg3"
                        layout="responsive"
                      />
                    </Carousel.Item>
                  )
                  // <div className="collaboration_carousal_main_div">
                  //   <div className="collaborationcarousaldiv">
                  //     <amp-img  />
                  //   </div>
                  // </div>
                })}
              </Carousel>

              {/* {Program.hiringpartners.map(function(img){
                    return (
                      <div className="collaboration_carousal_main_div">
                        <div className="collaborationcarousaldiv">
                          <amp-img src={img.img} height={1} width={1} className="collaborationimg3" layout="responsive" />
                        </div>
                      </div>
                    );
                  })} */}

              {/* <button slot="prev-arrow" className="carousel-prev" aria-label="Previous" style={{display: 'none'}} />
                  <button slot="next-arrow" className="carousel-next" aria-label="Next" style={{display: 'none'}} /> */}
              {/* </amp-base-carousel> */}
              {/* </div> */}
              {/* <div className="mobile_image_carousal">
                  
                  {Program.hiringpartners.map(function(img){
                      return (
                        <div className="">
                          <div className="collaborationcarousaldiv">
                            <amp-img src={img.img} height="56" width="158" />
                          </div>
                        </div>
                      );
                    })}                
                  
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HiringPartner
