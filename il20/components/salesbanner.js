import Head from 'next/head'
import React from 'react'
import styleCSS from '!!raw-loader!../styles/salesbanner.css'
const fixCSS = `}${styleCSS}{`

function salesbanner() {
  return (
    <div>
      <Head>
        <style amp-custom>{`
              ${fixCSS}
            `}</style>
      </Head>
      <div>
        <section className="saleweb">
          <div className="sale-banner">
            <amp-img
              src="https://cdn.pegasus.imarticus.org/imarticus_2/GIFTRegistrationBanner.webp"
              alt="sales banner"
              height="400px"
              width="1170px"
            />
          </div>
        </section>
        <div className="mobiledev" style={{ marginBottom: '60px' }}>
          <amp-img
            src="https://cdn.pegasus.imarticus.org/imarticus_2/salemobile.webp"
            alt=""
            height="400px"
            width="360px"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

export default salesbanner
