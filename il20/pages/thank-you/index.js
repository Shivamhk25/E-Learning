import React from 'react'
import { configs } from '../../constants'
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import styles from '../../styles/thankyou.module.css'
import Image from 'next/image'
import Thankyouform from '../../components/Thankyouform'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

function index(props) {
  const [formModal, setFormModal] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  let router = useRouter()
  const [email, setEmail] = useState('')
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
    setEmail(localStorage.getItem('email'))
  }, [])

  return (
    <>
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

      <Script
        type="text/javascript"
        src="https://www.googletagmanager.com/gtag/js?id=AW-985758930"
      >
        {`
        window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
       gtag('event', 'conversion', {
      'send_to': 'AW-985758930/C52lCL621gYQ0vmF1gM',
      'value': 1.0,
      'currency': 'INR',
      'transaction_id': ''
     })

     ${console.log('conversion Script running')}
  `}
      </Script>

      {email && (
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []
        dataLayer.push({
          'event':'form_submit_enhance',
          'enhanced_conversion_data': {
            "email": ${email}
          }
        })
          ${console.log('data layer push email', email)}
        `,
          }}
        />
      )}

      <Layout toggleModal={toggleModal} propsdata={props.propsdata.allData}>
        <div className={styles.mainComponent}>
          <div className={styles.illustraterdiv}>
            <div>
              <h1 className={styles.tagline}>
                We have received your inquiry. <br /> Please provide us with
                more details so that we can better assist you.
              </h1>
            </div>
            <div className={styles.illustraterimage}>
              <Image
                src="/thank_you/Thankyoupageillustrature.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.formMainContainer}>
            <Thankyouform />
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
  // console.log(res, "res");
  const data = await res.json()
  return {
    props: {
      propsdata: data.data,
    },
  }
}
