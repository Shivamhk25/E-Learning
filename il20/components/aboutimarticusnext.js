import React from 'react'
import Image from 'next/image'

function Aboutimarticusnext({ onClick }) {
  return (
    <>
      <section className="aboutImarticus aboutImarticus3">
        <div className="main">
          <h4>About</h4>
          <h3 className="title">Imarticus Learning</h3>
          <div className="rowing">
            <div className="info">
              <p className="desc">
                At Imarticus, we believe that learning is a lifelong process. By
                organizing knowledge with advanced technology and making
                learning accessible, our goal is to prepare our global learning
                community for a futuristic, tech-driven society.{' '}
              </p>
              {/* <p className="desc">Keen to know more about us?</p> */}
              <span onClick={onClick} className="cta-white cta-white2">
                Learn More
              </span>
            </div>
            <div className="statsnext">
              <div className="fourstatcard">
                <div className="statCardnext aboutcardborderb">
                  <img
                    className="about_desc_img2 display_block"
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/degreelogo.svg"
                    width="1"
                    height="1"
                    layout="fill"
                    alt="Learners"
                  />
                  <img
                    className="about_desc_img2 display_hidden"
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/degreelogodark.svg"
                    width="1"
                    height="1"
                    layout="fill"
                  />
                  <div className="about-data">
                    <h3 className="number">10,00,000+</h3>
                    <p className="name">Learners</p>
                  </div>
                </div>
                <div className="statCardnext">
                  <img
                    className="about_desc_img2 display_block"
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/bag.svg"
                    width="1"
                    height="1"
                    layout="fill"
                    alt="placements"
                  />
                  <img
                    className="about_desc_img2 display_hidden"
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/homepageheadericon3.svg"
                    width="1"
                    height="1"
                    layout="fill"
                  />
                  <div className="about-data">
                    <h3 className="number">56,000+</h3>
                    <p className="name">Placements</p>
                  </div>
                </div>
              </div>
              <div className="fourstatcard">
                <div className="statCardnext aboutcardborderb">
                  <img
                    className="about_desc_img2 display_block"
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/peopleframe.svg"
                    width="1"
                    height="1"
                    layout="fill"
                    alt="verified job transitions"
                  />
                  <img
                    className="about_desc_img2 display_hidden"
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/peopleframedark.svg"
                    width="1"
                    height="1"
                    layout="fill"
                  />
                  <div className="about-data">
                    <h3 className="number">45,000+</h3>
                    <p className="name">Verified Job Transitions</p>
                  </div>
                </div>
                <div className="statCardnext">
                  <img
                    className="about_desc_img2 display_block"
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/incrementgraph.svg"
                    width="1"
                    height="1"
                    layout="fill"
                    alt="average salary hike"
                  />
                  <img
                    className="about_desc_img2 display_hidden"
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/incrementgraphdark.svg"
                    width="1"
                    height="1"
                    layout="fill"
                  />
                  <div className="about-data">
                    <h3 className="number">67%</h3>
                    <p className="name">Average Salary Hike</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="aboutbottomdiv">
        <div
          className="reviewmaindiv"
          style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}
        >
          <div className="reviews">
            <p className="reviewDesc">
              Trusted By Millions Of Learners Around The World
            </p>
            <div className="ratings">
              <div className="rating">
                <div>
                  <div
                    style={{
                      alignItems: 'center',
                      position: 'relative',
                      height: '64px',
                      width: '168px',
                      marginTop: '16px',
                      marginLeft: '24px',
                    }}
                  >
                    <Image
                      src="/imarticus_2/Google.webp"
                      alt="google rating"
                      layout="fill"
                      objectFit="fill"
                    />
                  </div>
                  <div className="tech_giant_rating">
                    <Image
                      src="/imarticus_2/stargroup.svg"
                      alt="star rating"
                      layout="fill"
                      objectFit="fill"
                    />
                    <p>4.5</p>
                  </div>
                </div>
              </div>
              <div className="rating">
                <div>
                  <div
                    style={{
                      height: '40px',
                      width: '168px',
                      marginTop: '28px',
                      marginLeft: '24px',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src="/imarticus_2/facebook.webp"
                      layout="fill"
                      objectFit="fill"
                      alt="facebook rating"
                    />
                  </div>
                  <div className="tech_giant_rating">
                    <Image
                      src="/imarticus_2/stargroup.svg"
                      alt="star rating"
                      layout="fill"
                      objectFit="fill"
                    />
                    <p>4.3</p>
                  </div>
                </div>
              </div>
              {/* <div className="rating">
                <div>
                  <div className="tech_giant_logo">
                    <Image
                      src="/imarticus_2/JustDial_Logo.webp"
                      height={40}
                      width={168}
                      style={{ marginTop: "22px" }}
                      alt="just dial rating"
                    />
                  </div>
                  <div className="tech_giant_rating">
                    <Image
                      src="/imarticus_2/stargroup.svg"
                      width={128}
                      height={28}
                      alt="star rating"
                    />
                    <p>4.5</p>
                  </div>
                </div>
              </div> */}
              <div className="rating">
                <div>
                  <div
                    className="tech_giant_logo"
                    style={{
                      width: '168px',
                      height: '100px',
                      position: 'relative',
                      marginLeft: '24px',
                    }}
                  >
                    <Image
                      src="/imarticus_2/Google_Play.webp"
                      layout="fill"
                      objectFit="fill"
                      alt="google playstore rating"
                    />
                  </div>
                  <div className="tech_giant_rating">
                    <Image
                      src="/imarticus_2/stargroup.svg"
                      alt="star rating"
                      layout="fill"
                      objectFit="fill"
                    />
                    <p>4.4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutimarticusnext
