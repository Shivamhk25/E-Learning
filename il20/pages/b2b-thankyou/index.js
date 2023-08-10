import React, { useRef, useEffect, useState } from 'react'
import styleCSS from '!!raw-loader!../../styles/index.css'
import styleCSS3 from '!!raw-loader!../../styles/coursepage.css'
import styleCSS4 from '!!raw-loader!../../styles/ourprogram.css'
import styleCSS5 from '!!raw-loader!../../styles/enquireform.css'
import styleCSS6 from '!!raw-loader!../../styles/collaboration.css'
const fixCSS = `}${styleCSS},${styleCSS3},${styleCSS4},${styleCSS5},${styleCSS6}{`
import style from '../../styles/acp-thankyou.module.css'
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import { configs, countryCodes } from '../../constants'

const ACP_ThankYOu = (props) => {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
  })

  return (
    <>
      <Layout propsdata={props.propsdata.allData}>
        <Head>
          <title>Thankyou</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta property="og:title" content="ThankYou" />
          <meta property="og:description" content="" />
          <meta property="og:url" content="https://imarticus.org/" />
          <meta
            property="og:image"
            content="https://cdn.pegasus.imarticus.org/imarticus_2/FACEBOOK-open-graph.jpg"
          />
          <meta property="product:brand" content="Imarticus Learning" />
          <link rel="canonical" href="https://imarticus.org/acp-thankyou/" />
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
        <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'Source Sans Pro' }}>
            <div className={style.maincontainer}>
              <div className={style.containerr}>
                <div className={style.heading}>
                  <h1>Thank you for getting in touch</h1>
                </div>
                <div className={style.para}>
                  <p>Let’s connect!</p>
                </div>
                <div className={style.icons}>
                  <a
                    href="https://www.facebook.com/ImarticusLearning/"
                    target="_blank"
                  >
                    <img src="https://cdn.pegasus.imarticus.org/Acp-Thankyou/facebook.svg"></img>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/imarticuslearning/mycompany/"
                    target="_blank"
                  >
                    <img src="https://cdn.pegasus.imarticus.org/Acp-Thankyou/linkedin.svg"></img>
                  </a>
                  <a
                    href="https://www.instagram.com/imarticus/"
                    target="_blank"
                  >
                    <img src="https://cdn.pegasus.imarticus.org/Acp-Thankyou/Instagram.svg"></img>
                  </a>
                  <a href="https://twitter.com/imarticus/" target="_blank">
                    <img src="https://cdn.pegasus.imarticus.org/Acp-Thankyou/twitter.svg"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ACP_ThankYOu

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
