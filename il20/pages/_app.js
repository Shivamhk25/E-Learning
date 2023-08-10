import '../styles/globals.css'
// import '../styles/headercss.css'
import '../styles/index.css'
import '../styles/navbarcss.css'
import '../styles/footer.css'
import '../styles/ourprogram.css'
import '../styles/enquireform.css'
import '../styles/aboutimarticus.css'
import '../styles/certicourse.css'
import '../styles/collaboration.css'
import '../styles/imarticusnews.css'
import '../styles/testimonial.css'
import '../styles/enquireform.css'
import '../styles/carrertransformation.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/Carousel/carousel.css'

import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  //   useEffect(() => {
  //     import("bootstrap/dist/js/bootstrap");
  //   },
  //  []);

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="28bhVVSPQXm7LkMsD4lUqNpwhEmKv9zYFBvX5Nb_gaU"
        />
      </Head>
      {/* LeadSquared Tracking Code Start    */}
      <Script type="text/javascript" src="https://web.mxradon.com/t/Tracker.js">
        {`
      pidTracker('7764');`}
      </Script>
      {/* LeadSquared Tracking Code End   */}

      {/*  Google Tag Manager    */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-985758930" />
      <Script id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())

      gtag('config', 'AW-985758930')
  `}
      </Script>
      <Script>
        {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NR2ZB7T');`}
      </Script>
      {/* End Google Tag Manager  */}
      <body>
        <Script>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NR2ZB7T"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </Script>
      </body>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
