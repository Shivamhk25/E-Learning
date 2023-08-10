import React, { useRef, useEffect, useState } from 'react'
import {
  GetWebinarByName,
  CheckArrowByScreenWidth,
} from '../../services/helper'
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import styleCSS from '!!raw-loader!../../styles/index.css'
import styleCSS3 from '!!raw-loader!../../styles/coursepage.css'
import styleCSS4 from '!!raw-loader!../../styles/ourprogram.css'
import styleCSS5 from '!!raw-loader!../../styles/enquireform.css'
import styleCSS6 from '!!raw-loader!../../styles/collaboration.css'

const fixCSS = `}${styleCSS},${styleCSS3},${styleCSS4},${styleCSS5},${styleCSS6}{`
import Modal from '../../components/UI/Modal/Modal'
import DynamicMxProgram3Form from '../../components/Forms/Formtype6-Nm-Em-Con-Loc'
import dataArr from '../../json/program.json'
import { configs } from '../../constants'

import Header from '../../components/webinarComponents/Header'
import About from '../../components/webinarComponents/About'
import Become from '../../components/webinarComponents/Become'
import Career from '../../components/webinarComponents/Career'
import Global from '../../components/webinarComponents/Global'
import Speaker from '../../components/webinarComponents/Speaker'
import StaticSection from '../../components/webinarComponents/StaticSection'

const Webinar_Marketing_Page = (props) => {
  const [load, setLoad] = useState(false)

  const [formModal, setFormModal] = useState(false)
  const [screenWidth, setScreenWidth] = useState()
  const [data, setData] = useState()

  const PROGRAM = 'Marketing Webinar'
  console.log(GetWebinarByName(props.webinardata.data, PROGRAM), 'data')

  // const PROGRAM_PATH_NAME =
  //   '/advanced-certification-in-digital-marketing-and-martech-iit-roorkee/'

  const toggleModal = () => {
    setFormModal((prevState) => !prevState)
  }
  useEffect(() => {
    setLoad(true)
    localStorage.setItem(
      'areaofinterest',
      GetWebinarByName(props.webinardata.data, PROGRAM).Header
        .leadsquareWebinarKey
    )
    setData(GetWebinarByName(props.webinardata.data, PROGRAM))
    setScreenWidth(window.innerWidth)
  }, [])

  return (
    <>
      {load && (
        <Layout toggleModal={toggleModal} propsdata={props.propsdata.allData}>
          <Head>
            <title>{data.Header.MetaTitle}</title>
            <meta name="description" content={data.Header.Metadescription} />
            <meta name="og:description" content={data.Header.Metadescription} />
            <meta name="keywords" content={data.Header.MetaKeywords} />
            <meta
              property="og:image"
              content="https://cdn.pegasus.imarticus.org/imarticus_2/FACEBOOK-open-graph.jpg"
            />
            <meta property="product:brand" content="Imarticus Learning" />
            <link rel="canonical" href={data.Header.CanonicalTag} />
            <link
              rel="icon"
              href="https://cdn.pegasus.imarticus.org/imarticus_2/favicon4.png"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
              rel="stylesheet"
            ></link>
            <style amp-custom>{`
              ${fixCSS}
            `}</style>
          </Head>

          {formModal && (
            <Modal toggleModal={toggleModal}>
              <DynamicMxProgram3Form
                toggleModal={toggleModal}
                mxProgram3Value={
                  GetWebinarByName(props.webinardata.data, PROGRAM).Header
                    .leadsquareWebinarKey
                }
                leadsquareSourceKey={data.Header.leadsquareWebinarSourceKey}
              />
            </Modal>
          )}
          <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
            <Header data={data.Header} setFormModal={setFormModal} />
            <About data={data.webinar} setFormModal={setFormModal} />
            <Become data={data.CTA} setFormModal={setFormModal} />
            <Speaker data={data.Header} />
            <Career data={data.Career} />
            <Global
              data={data.global}
              data1={props.propsdata.allData}
              setFormModal={setFormModal}
            />
            <StaticSection setFormModal={setFormModal} />
          </div>
        </Layout>
      )}
    </>
  )
}
export default Webinar_Marketing_Page

export async function getStaticProps() {
  const res = await fetch(
    `${configs.MARKETING_ENDPOINT}/marketingopspanelpublic/get_all_fields_webinar`,
    {
      headers: {
        skey: configs.skey,
      },
    }
  )
  console.log(res, 'data')
  const res1 = await fetch(
    `${configs.MARKETING_ENDPOINT}/marketingopspanelpublic/get_all_fields_website`,
    {
      headers: {
        skey: configs.skey,
      },
    }
  )
  console.log(res1, 'data1')
  const data = await res.json()
  const data1 = await res1.json()
  return {
    props: {
      webinardata: data.data,
      propsdata: data1.data,
    },
  }
}
