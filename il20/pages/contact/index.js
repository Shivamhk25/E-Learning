import React from 'react'
import { useState } from 'react'
import Layout from '../../components/Layoutnext'
import Head from 'next/head'
import { configs } from '../../constants'
import EnquireForm from '../../components/Forms/Formtype2-Nm-Em-Con-Loc-AoI'
import EnquireFrom2 from '../../components/Forms/GenericForm-Nm-Em-Con-Loc'
import Modal from '../../components/UI/Modal/Modal'
import styles from '../../styles/contact.module.css'
import Header from '../../components/contact/Header'
import Image from 'next/image'
import dataarr from '../../json/program.json'
import { GetProgramsAsPerTagName } from '../../services/helper'

function index(props) {
  const [formModal, setFormModal] = useState(false)
  const [formModal2, setFormModal2] = useState(false)
  const [formModal3, setFormModal3] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  const [brochureUrl, setBrochureUrl] = useState()
  const [firstarray, setFirstarray] = useState(true)
  const [secondarray, setSecondarray] = useState(false)
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

  const toggleModal2 = (eventValues) => {
    if (eventValues && eventValues.download) {
      setDownloadBrochure(eventValues.download)
      setBrochureUrl(eventValues.url)
    } else {
      setDownloadBrochure(false)
      setBrochureUrl(null)
    }
    setFormModal2((prevState) => !prevState)
  }

  const toggleModal3 = (eventValues) => {
    if (eventValues && eventValues.download) {
      setDownloadBrochure(eventValues.download)
      setBrochureUrl(eventValues.url)
    } else {
      setDownloadBrochure(false)
      setBrochureUrl(null)
    }
    setFormModal3((prevState) => !prevState)
  }

  const displayarray = () => {
    setSecondarray(true)
    setFirstarray(false)
  }

  return (
    <>
      <Head>
        <title>
          Contact Us - Online Training Courses & Education Programs | Imarticus
          Learning
        </title>

        <meta
          name="description"
          content="Imarticus Learning offers a range of Finance, Analytics, Technology, Fintech, & Business Analysis certification courses with placement assistance to help you advance your career"
        />
        <meta
          name="keywords"
          content="imarticus, imarticus learning, finance courses, analytic courses, technology courses"
        />
        <meta
          property="og:title"
          content="Online Training Courses & Education Programs Imarticus Learning"
        />
        <meta
          property="og:description"
          content="Imarticus Learning offers a range of Finance, Analytics, Technology, Fintech, & Business Analysis certification courses with placement assistance to help you advance your career"
        />
        <meta property="og:url" content="https://imarticus.org/" />
        <meta
          property="og:image"
          content="https://cdn.pegasus.imarticus.org/imarticus_2/FACEBOOK-open-graph.jpg"
        />
        <meta property="product:brand" content="Imarticus Learning" />
        <link rel="canonical" href="https://imarticus.org/" />
        <link
          rel="icon"
          href="https://cdn.pegasus.imarticus.org/imarticus_2/favicon4.png"
        />
      </Head>
      <Layout toggleModal={toggleModal} propsdata={props.propsdata.allData}>
        {formModal && (
          <Modal toggleModal={toggleModal}>
            <EnquireForm
              toggleModal={toggleModal}
              formValue={1}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              propsdata={GetProgramsAsPerTagName(
                props.propsdata.allData,
                'Active LeadGen Programs'
              )}
            />
          </Modal>
        )}

        {formModal2 && (
          <Modal toggleModal={toggleModal2}>
            <EnquireFrom2
              toggleModal={toggleModal2}
              formValue={1}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              subject={'B2B Lead'}
            />
          </Modal>
        )}
        {formModal3 && (
          <Modal toggleModal={toggleModal3}>
            <EnquireFrom2
              toggleModal={toggleModal3}
              formValue={1}
              downloadBrochure={downloadBrochure}
              brochureUrl={brochureUrl}
              subject={'Instructor Lead'}
            />
          </Modal>
        )}

        <Header propsdata={props.propsdata.allData} />
        <div className={styles.enquiremaindiv}>
          <div className={styles.enquirefirstbox}>
            <h1>Enquire</h1>
          </div>
          <div
            className={styles.enquiresecondbox}
            style={{ borderBottom: '8px solid #2E87C8;' }}
          >
            <div className={styles.enquiresvgs}>
              <Image
                src="/contact/handshake.svg"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <h1>For Business</h1>
            <button onClick={toggleModal2} className={styles.enquirebtnenq}>
              Enquire Now
            </button>
          </div>
          <div
            className={styles.enquiresecondbox}
            style={{ borderBottom: '8px solid #13AED2;' }}
          >
            <div className={styles.enquiresvgs}>
              <Image
                src="/contact/onlineclass.svg"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <h1>Become our Instructor</h1>
            <button onClick={toggleModal3} className={styles.enquirebtnenq}>
              Enquire Now
            </button>
          </div>
          <div
            className={styles.enquiresecondbox}
            style={{ borderBottom: '8px solid #8DD6EB;' }}
          >
            <div className={styles.enquiresvgs}>
              <Image
                src="/contact/suitcase.svg"
                objectFit="contain"
                layout="fill"
              />
            </div>
            <h1>Career</h1>
            <button onClick={toggleModal} className={styles.enquirebtnenq}>
              Enquire Now
            </button>
          </div>
        </div>

        <div className={styles.thirdcontainermain}>
          <div className={styles.thridmaindiv}>
            <h1 className={styles.thirdcontainerheading}>
              Imarticus Learning Centers
            </h1>
            <div>
              <div className={styles.countryunderline}>
                <div className={styles.countrynameflagdiv}>
                  <div className={styles.indianflag}>
                    <Image
                      src="/contact/Indiaflag.svg"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <h1 className={styles.indiaheading}>INDIA</h1>
                </div>
              </div>

              <div className={styles.displaywebview}>
                <div className={styles.countrymaincontactdiv}>
                  {dataarr.contact_page.indialocationcenter.map(
                    (data, index) => {
                      return (
                        <div className={styles.contactmaindiv}>
                          <div className={styles.conatactstatename}>
                            <h1>{data.state}</h1>
                            <p>{data.substate}</p>
                          </div>
                          <div className={styles.contactaddress}>
                            <p>{data.address}</p>
                          </div>
                          <div className={styles.contactbottom}>
                            <div className={styles.contactphoneno}>
                              <a
                                style={{
                                  textDecoration: 'none',
                                  display: 'flex',
                                  gap: '10px',
                                }}
                                href={`tel:${data.number}`}
                              >
                                <div className={styles.contactphonelogo}>
                                  <Image
                                    src="/contact/telephone.svg"
                                    objectFit="contain"
                                    layout="fill"
                                  />
                                </div>
                                <p className={styles.contactnumber}>
                                  {data.number}
                                </p>
                              </a>
                            </div>
                            <div lassName={styles.contactphoneno}>
                              <div className={styles.contactbottomdir}>
                                <a
                                  style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    gap: '12px',
                                  }}
                                  href={data.location}
                                  target="_blank"
                                >
                                  <div className={styles.contactphonelogo}>
                                    <Image
                                      src="/contact/locationpointer.svg"
                                      objectFit="contain"
                                      layout="fill"
                                    />
                                  </div>
                                  <p className={styles.contactdirection}>
                                    Direction
                                  </p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>

              <div className={styles.displaymobileview}>
                {firstarray ? (
                  <div className={styles.countrymaincontactdiv}>
                    {dataarr.contact_page.indialocationcenter
                      .slice(0, 4)
                      .map((data, index) => {
                        return (
                          <div className={styles.contactmaindiv}>
                            <div className={styles.conatactstatename}>
                              <h1>{data.state}</h1>
                              <p>{data.substate}</p>
                            </div>
                            <div className={styles.contactaddress}>
                              <p>{data.address}</p>
                            </div>
                            <div className={styles.contactbottom}>
                              <div className={styles.contactphoneno}>
                                <a
                                  style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    gap: '10px',
                                  }}
                                  href={`tel:${data.number}`}
                                >
                                  <div className={styles.contactphonelogo}>
                                    <Image
                                      src="/contact/telephone.svg"
                                      objectFit="contain"
                                      layout="fill"
                                    />
                                  </div>
                                  <p className={styles.contactnumber}>
                                    {data.number}
                                  </p>
                                </a>
                              </div>
                              <div lassName={styles.contactphoneno}>
                                <div className={styles.contactbottomdir}>
                                  <a
                                    style={{
                                      textDecoration: 'none',
                                      display: 'flex',
                                      gap: '12px',
                                    }}
                                    href={data.location}
                                    target="_blank"
                                  >
                                    <div className={styles.contactphonelogo}>
                                      <Image
                                        src="/contact/locationpointer.svg"
                                        objectFit="contain"
                                        layout="fill"
                                      />
                                    </div>
                                    <p className={styles.contactdirection}>
                                      Direction
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                ) : (
                  ''
                )}

                {secondarray ? (
                  <div className={styles.countrymaincontactdiv}>
                    {dataarr.contact_page.indialocationcenter.map(
                      (data, index) => {
                        return (
                          <div className={styles.contactmaindiv}>
                            <div className={styles.conatactstatename}>
                              <h1>{data.state}</h1>
                              <p>{data.substate}</p>
                            </div>
                            <div className={styles.contactaddress}>
                              <p>{data.address}</p>
                            </div>
                            <div className={styles.contactbottom}>
                              <div className={styles.contactphoneno}>
                                <a
                                  style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    gap: '10px',
                                  }}
                                  href={`tel:${data.number}`}
                                >
                                  <div className={styles.contactphonelogo}>
                                    <Image
                                      src="/contact/telephone.svg"
                                      objectFit="contain"
                                      layout="fill"
                                    />
                                  </div>
                                  <p className={styles.contactnumber}>
                                    {data.number}
                                  </p>
                                </a>
                              </div>
                              <div lassName={styles.contactphoneno}>
                                <div className={styles.contactbottomdir}>
                                  <a
                                    style={{
                                      textDecoration: 'none',
                                      display: 'flex',
                                      gap: '12px',
                                    }}
                                    href={data.location}
                                    target="_blank"
                                  >
                                    <div className={styles.contactphonelogo}>
                                      <Image
                                        src="/contact/locationpointer.svg"
                                        objectFit="contain"
                                        layout="fill"
                                      />
                                    </div>
                                    <p className={styles.contactdirection}>
                                      Direction
                                    </p>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }
                    )}
                  </div>
                ) : (
                  ''
                )}

                {firstarray ? (
                  <div className={styles.seemorediv}>
                    <button
                      onClick={displayarray}
                      className={styles.seemorebutton}
                    >
                      See More
                    </button>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>

            <div className={styles.UAEdiv}>
              <div className={styles.countryunderline}>
                <div className={styles.countrynameflagdiv}>
                  <div className={styles.indianflag}>
                    <Image
                      src="/contact/UAEflag.svg"
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                  <h1 className={styles.indiaheading}>DUBAI</h1>
                </div>
              </div>
              <div className={styles.countrymaincontactdiv}>
                {dataarr.contact_page.internationallocationcenter.map(
                  (data, index) => {
                    return (
                      <div className={styles.contactmaindiv}>
                        <div className={styles.conatactstatename}>
                          <h1>{data.state}</h1>
                          <p>{data.substate}</p>
                        </div>
                        <div className={styles.contactaddress}>
                          <p>{data.address}</p>
                        </div>
                        <div className={styles.contactbottom}>
                          <a
                            style={{
                              textDecoration: 'none',
                              display: 'flex',
                              gap: '10px',
                            }}
                            href={`tel:${data.number}`}
                          >
                            <div className={styles.contactphonelogo}>
                              <Image
                                src="/contact/telephone.svg"
                                objectFit="contain"
                                layout="fill"
                              />
                            </div>
                            <p className={styles.contactnumber}>
                              {data.number}
                            </p>
                          </a>
                          <div className={styles.contactphoneno}>
                            <a
                              style={{
                                textDecoration: 'none',
                                display: 'flex',
                                gap: '10px',
                              }}
                              href={`tel:${data.number2}`}
                            >
                              <div className={styles.contactphonelogo}>
                                <Image
                                  src="/contact/telephone.svg"
                                  objectFit="contain"
                                  layout="fill"
                                />
                              </div>
                              <p className={styles.contactnumber}>
                                {data.number2}
                              </p>
                            </a>
                          </div>
                          <div lassName={styles.contactphoneno}>
                            <div className={styles.contactbottomdir}>
                              <a
                                style={{
                                  textDecoration: 'none',
                                  display: 'flex',
                                  gap: '12px',
                                }}
                                href={data.location}
                                target="_blank"
                              >
                                <div className={styles.contactphonelogo}>
                                  <Image
                                    src="/contact/locationpointer.svg"
                                    objectFit="contain"
                                    layout="fill"
                                  />
                                </div>
                                <p className={styles.contactdirection}>
                                  Direction
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default index

export async function getStaticProps() {
  const res = await fetch(
    `${configs.MARKETING_ENDPOINT}/marketingopspanelpublic/get_all_fields_website`,
    {
      headers: {
        skey: configs.skey,
      },
    }
  )
  const data = await res.json()

  return {
    props: {
      propsdata: data.data,
    },
  }
}
