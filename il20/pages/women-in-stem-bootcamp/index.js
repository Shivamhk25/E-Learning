import React, { useRef, useEffect, useState } from 'react'
import { GetCourseLSKeyByPath } from '../../services/helper'
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import style from '../../styles/fsd-campaign.module.css'
import styles2 from '../../styles/financial-services-capital-markets-management-program-iim-indore.module.css'
import Image from 'next/image'
import Modal from '../../components/UI/Modal/Modal'
import EnquireForm from '../../components/Forms/Formtype3-Nm-Em-Con-Loc-MoL'
import dataArr from '../../json/program.json'
import { configs, countryCodes } from '../../constants'
import { GetSpecificdata } from '../../services/helper'

const Fsd_campaign = (props) => {
  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const ref5 = useRef()
  const [load, setLoad] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [formModal, setFormModal] = useState(false)

  const [seeMoreRightModal, setSeeMoreRightModal] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  const [brochureUrl, setBrochureUrl] = useState()
  const [facultyId, setFacultyId] = useState()
  const [aboutId, setAboutId] = useState()
  const [aboutModal, setAboutModal] = useState(false)
  const [pagedata, setPagedata] = useState('')

  const PROGRAM = 'Full Stack Developer Pro'
  const PROGRAM_PATH_NAME = '/full-stack-developer-pro/'

  const AssuredProgram = 'Job Assured Program'
  // const INDEX_IN_PROGRAM =
  const toggleModal = (eventValues) => {
    if (eventValues && eventValues.download) {
      setDownloadBrochure(eventValues.download)
      setBrochureUrl(eventValues.url)
    } else {
      setDownloadBrochure(false)
      setBrochureUrl(null)
    }
    setFormModal((prevState) => !prevState)
  }

  useEffect(() => {
    setLoad(true)
    localStorage.setItem(
      'areaofinterest',
      GetCourseLSKeyByPath(props.propsdata.allData, PROGRAM_PATH_NAME)
    )

    let webpagedata = GetSpecificdata(
      props.propsdata.allData,
      GetCourseLSKeyByPath(props.propsdata.allData, PROGRAM_PATH_NAME)
    )
    setPagedata(webpagedata)
  }, [])

  return (
    <>
      <Layout toggleModal={toggleModal} propsdata={props.propsdata.allData}>
        <Head>
          <title>Women in STEM Bootcamp</title>
          <meta
            name="description"
            content="Join a free boot camp on full-stack development with Skillenza"
          />
          <meta
            name="keywords"
            content="Full stack development course, become a full stack developer"
          />
          <meta property="og:title" content="Women in STEM Bootcamp" />
          <meta
            property="og:description"
            content="Join a free boot camp on full-stack development with Skillenza"
          />
          <meta property="og:url" content="https://imarticus.org/" />
          <meta
            property="og:image"
            content="https://cdn.pegasus.imarticus.org/imarticus_2/FACEBOOK-open-graph.jpg"
          />
          <meta property="product:brand" content="Imarticus Learning" />
          <link
            rel="canonical"
            href="https://imarticus.org/women-in-stem-bootcamp/"
          />
          <link
            rel="icon"
            href="https://cdn.pegasus.imarticus.org/imarticus_2/favicon4.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        {formModal && (
          <Modal toggleModal={toggleModal}>
            <EnquireForm
              toggleModal={toggleModal}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              courseName={GetCourseLSKeyByPath(
                props.propsdata.allData,
                PROGRAM_PATH_NAME
              )}
              propsdata={props.propsdata.allData}
            />
          </Modal>
        )}

        <div className={style.bootcamp}>
          <div className={style.bootcampmain}>
            <div className={style.section1}>
              <div className={style.leftsection}>
                <div className={style.heading}>
                  <h1>Women In STEM Boot Camp</h1>
                </div>
                <div className={style.startdate}>
                  <p>Date: 20th August 2022 - 21st August 2022</p>
                  <p>Time: 9:30 AM to 5:30 PM</p>
                </div>
                <div className={style.desktop}>
                  <div className={style.register}>
                    <button
                      className={style.register_button}
                      onClick={toggleModal}
                    >
                      <span className={style.register_buttontext}>
                        Register Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={style.rightsection}>
                <div className={`${style.image1} ${style.desktop1}`}>
                  <Image src="Fsd_campaign/SV1.webp" layout="fill"></Image>
                </div>
                <div className={`${style.image1} ${style.tab1}`}>
                  <Image
                    src="Fsd_campaign/mob_tab/Framet.webp"
                    layout="fill"
                  ></Image>
                </div>
                <div className={`${style.image1} ${style.mobile1}`}>
                  <Image
                    src="Fsd_campaign/mob_tab/Frame.webp"
                    layout="fill"
                  ></Image>
                </div>
              </div>
            </div>
            <div className={style.mobile}>
              <div className={style.register}>
                <button className={style.register_button} onClick={toggleModal}>
                  <span className={style.register_buttontext}>
                    Register Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* section 2 ========================================================= */}
        <div className={style.event}>
          <div className={style.eventmain}>
            <div className={style.eventleft}>
              <div className={style.eventheading}>
                <h2>About The Event</h2>
              </div>
              <div className={style.eventpara}>
                <p>
                  Female developers are the future. Women are breaking down
                  barriers and gender stereotypes all over the world, so why not
                  in full-stack development? To overcome gender disparity and
                  support female techies, Imarticus Learning is hosting a free
                  boot camp on full-stack development with Skillenza. The goal
                  is to empower women in India to excel in their careers in
                  technology. All participants will be able to develop
                  applications and improve their portfolios and careers. Our
                  world-class instructors will provide an exceptional learning
                  experience as well as industry knowledge.
                </p>
              </div>
            </div>
            <div className={style.eventright}>
              <div className={style.eventimage}>
                <Image src="Fsd_campaign/SV2.webp" layout="fill"></Image>
              </div>
            </div>
          </div>
          <div className={style.eventbtn}>
            <button className={style.eventbtn_button} onClick={toggleModal}>
              <span className={style.eventbtn_buttontext}>
                {' '}
                Let’s Move Ahead Together
              </span>
            </button>
          </div>
        </div>
        {/* section 3 ================================================================== */}
        <div className={style.topics}>
          <div className={style.topicsmain}>
            <div className={style.topicheading}>
              <h3>Topics covered during the Women In STEM Boot Camp</h3>
            </div>
            <div className={style.topic_points}>
              {dataArr.fsdcampaign.topiclist.map((data) => {
                return (
                  <div className={style.pointsmain}>
                    <div className={style.lefttick}>
                      <div>
                        <img src={data.img}></img>
                      </div>
                    </div>
                    <div className={style.rightlist}>
                      <p>{data.point}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className={style.registerbtn2}>
              <button className={style.register_button2} onClick={toggleModal}>
                <span className={style.register_buttontext2}>
                  {' '}
                  Register Now
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* section 4 ========================================================= */}
        <div className={style.career}>
          <div className={style.careermain}>
            <div className={style.careerleft}>
              <div className={style.careerheading}>
                <h3>Career Benefits</h3>
              </div>
              <div className={style.career_points}>
                {dataArr.fsdcampaign.careerlist.map((data) => {
                  return (
                    <div className={style.pointsmain}>
                      <div className={style.lefttick}>
                        <div>
                          <img src={data.img}></img>
                        </div>
                      </div>
                      <div className={style.rightlist}>
                        <p>{data.point}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className={style.registerbtn3}>
                <button
                  className={style.register_button2}
                  onClick={toggleModal}
                >
                  <span className={style.register_buttontext2}>
                    {' '}
                    Register Now
                  </span>
                </button>
              </div>
            </div>
            <div className={style.careerright}>
              <div className={`${style.careerimage} ${style.desktop1}`}>
                <Image src="Fsd_campaign/Frame.webp" layout="fill"></Image>
              </div>
              <div className={`${style.careerimage} ${style.tab1}`}>
                <Image src="Fsd_campaign/Framet.webp" layout="fill"></Image>
              </div>
              <div className={`${style.careerimage} ${style.mobile1}`}>
                <Image src="Fsd_campaign/Framem1.webp" layout="fill"></Image>
              </div>
            </div>
          </div>
        </div>
        {/* section 5============================================================ */}
        <div className={style.agenda}>
          <div className={style.agendamain}>
            <div className={style.agendaheading}>
              <h3>Agenda</h3>
            </div>
            <div className={style.day}>
              <p>Day 1</p>
            </div>
            <div className={style.thead}>
              <p className={style.time}>Time</p>
              <p className={style.Topic}>Topic</p>
              <p className={style.Type}>Type of Event</p>
            </div>
            {dataArr.fsdcampaign.agenda.map((data) => {
              return (
                <div className={style.tdata}>
                  <p
                    style={{ background: `${data.color}` }}
                    className={style.timedata}
                  >
                    {data.time}
                  </p>
                  <p className={style.Topicdata}>{data.topic[0]}</p>
                  <p className={style.Typedata}>{data.event[0]}</p>
                </div>
              )
            })}

            <div className={style.day}>
              <p>Day 2</p>
            </div>
            <div className={style.thead}>
              <p className={style.time}>Time</p>
              <p className={style.Topic}>Topic</p>
              <p className={style.Type}>Type of Event</p>
            </div>
            {dataArr.fsdcampaign.agenda.map((data) => {
              return (
                <div className={style.tdata}>
                  <p
                    style={{ background: `${data.color}` }}
                    className={style.timedata}
                  >
                    {data.time}
                  </p>
                  <p className={style.Topicdata}>{data.topic[1]}</p>
                  <p className={style.Typedata}>{data.event[1]}</p>
                </div>
              )
            })}
          </div>
        </div>
        {/* section 6= ======================================================== */}
        <div className={style.eligibility}>
          <div className={style.eligiblehead}>
            <h3>Eligibility</h3>
          </div>
          <div className={style.eligiblepara}>
            <p>
              All women working professionals with up to 3 years of experience
              and engineering or information technology college students are
              welcome.
            </p>
          </div>
        </div>

        {/* section 7= ======================================================== */}
        <div className={style.reward}>
          <div className={style.rewardmain}>
            <div className={style.rewardleft}>
              <div className={style.rewardhead}>
                <h3>Rewards</h3>
              </div>
              <div className={style.rewardpara}>
                <p>
                  Top developers will get a 100% scholarship. 2nd and 3rd rank
                  holders will get a fee waiver.
                </p>
              </div>
              <div className={style.tnc}>
                <p>T&C.</p>
                <hr></hr>
                <div className={style.tncdata}>
                  <p>
                    Imarticus Learning reserves all the rights to use, publish
                    or remove the content received on all our platforms. The
                    decision of the Imarticus Learning shall be final and
                    binding in all matters. Any dispute will fall under the
                    jurisdiction of Mumbai. To know more -
                  </p>
                  <a
                    href="https://cdn.pegasus.imarticus.org/Fsd_campaign/T&C_Women_Coder.pdf"
                    style={{ textDecoration: 'none ! important' }}
                  >
                    <p>
                      <b>Click here</b>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className={style.rewardright}>
              <div className={style.rewardimage}>
                <div className={style.desktop}>
                  <Image
                    src="Fsd_campaign/FSD-Women-Coder-Goodies-W.webp"
                    layout="fill"
                  ></Image>
                </div>
                <div className={style.mobile}>
                  <Image
                    src="Fsd_campaign/FSD-Women-Coder-Goodies-4_m.webp"
                    layout="fill"
                  ></Image>
                </div>
              </div>
              <div className={style.imagedata}>
                <p>
                  All pictures shown are for illustration purpose only. Actual
                  product and color may vary. Valid for limited time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* section 8 ========================================================= */}
        <div className={style.quote}>
          <div className={style.quotemain}>
            <div className={style.comma}>
              <Image src="Fsd_campaign/comma.webp" layout="fill"></Image>
            </div>
            <div className={style.quotedata}>
              <h3>
                There is no limit to what we, as women, can accomplish.
                <br></br>
                <span>-Michelle Obama</span>
              </h3>
            </div>
            <div className={style.comma2}>
              <Image src="Fsd_campaign/aa.webp" layout="fill"></Image>
            </div>
          </div>
        </div>

        {/* section 9 =========================================================== */}
        <div className={style.about}>
          <div className={style.abouthead}>
            <h3>About our FSD Program</h3>
          </div>
          <div className={style.aboutdata}>
            <p>
              Our Full Stack Developer Pro course will teach you the specifics
              of data structures and algorithms, java programming and end-to-end
              development. You will gain technical expertise in front-end and
              back-end programming during this six-month program, laying the
              groundwork for a rewarding career as a full-stack web developer.
              The program comes with a job guarantee with a minimum salary of 5
              lacs. The curriculum is built around a cutting-edge teaching
              strategy that will enable you to master coding and build new-age
              web applications. To know more, visit our
              <a
                style={{ textDecoration: 'none' }}
                href="https://imarticus.org/full-stack-developer-pro/"
              >
                {' '}
                FSD program
              </a>
              .
            </p>
          </div>
          <div className={style.registerbtn4}>
            <button className={style.register_button2} onClick={toggleModal}>
              <span className={style.register_buttontext2}> Register Now</span>
            </button>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Fsd_campaign

export async function getStaticProps() {
  const res = await fetch(
    `${configs.MARKETING_ENDPOINT}/marketingopspanelpublic/get_all_fields_website`,
    {
      headers: {
        skey: configs.skey,
      },
    }
  )
  // console.log(res, "res");
  const data = await res.json()
  return {
    props: {
      propsdata: data.data,
    },
  }
}
