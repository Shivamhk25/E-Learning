import Head from 'next/head'
import React from 'react'
import { useEffect, useState } from 'react'
import Ourprogram from '../components/Ourprogram/OurProgram'
import Homepageheader from '../components/homepageheader'
import axios from 'axios'
import Modal from '../components/UI/Modal/Modal'
import EnquireForm from '../components/Forms/Formtype2-Nm-Em-Con-Loc-AoI'
import Layout from '../components/Layoutnext'
import Aboutimarticusnext from '../components/aboutimarticusnext'
import Certicoursenext from '../components/certicoursenext'
import Carrertransformationnext from '../components/carrertransformationnext'
import Testimonialnext from '../components/testimonialnext'
import Imarticusnews from '../components/imarticusnews_next'
import Award_recogniation from '../components/award_reogniationnext'
import Centerofexcellence_next from '../components/centerofexcellence_next'
import Hiringpartner from '../components/hiringpartner_next'
import Collaboration from '../components/collaboration_next'
import { configs, countryCodes } from '../constants'
import { GetProgramsAsPerTagName } from '../services/helper'

export default function Home(props) {
  // console.log(configs.skey)
  const [formModal, setFormModal] = useState(false)
  const [otModel, setOtpModel] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  //defaut value false;
  const [brochureUrl, setBrochureUrl] = useState()
  //event values is an object
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

  const toggleOtpModel = (eventValues) => {
    setOtpModel((prevState) => !prevState)
  }
  // console.log('::::::::::::::::::::::::', props.propsdata.allData)

  return (
    <div>
      <Head>
        <title>
          Online Training Courses & Education Programs | Imarticus Learning
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
        <Homepageheader onClick={toggleModal} />
        <Collaboration />
        <Ourprogram propsdata={props.propsdata.allData} />
        <Certicoursenext />
        <Aboutimarticusnext onClick={toggleModal} />
        <Hiringpartner />
        <Carrertransformationnext
          setdata
          heading="We Have An 80% Placement Success Rate"
          subheading="Learn more about how we’ve been impacting thousands of careers."
          cta_name="Download Career Report"
          onClick={() =>
            toggleModal({
              download: true,
              url: 'https://cdn.pegasus.imarticus.org/brochure/Anual_Placement_Report-2021-2022.pdf',
            })
          }
        />
        <Testimonialnext />
        <Imarticusnews />
        <Award_recogniation name="Moments Of Honour" />

        <Centerofexcellence_next onClick={toggleModal} />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `${configs.MARKETING_ENDPOINT}/marketingopspanelpublic/get_all_fields_website`,
    {
      headers: {
        skey: configs.skey,
      },
    }
  )
  // console.log(res, 'res')
  const data = await res.json()

  return {
    props: {
      propsdata: data.data,
    },
  }
}
