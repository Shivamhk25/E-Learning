import React from 'react'
import styleCSS from '!!raw-loader!../styles/footer.css'
const fixCSS = `}${styleCSS}{`
import FooterAppLink from './FooterAppLink'
import FooterLocation from './FooterLocations'
import Accordion from 'react-bootstrap/Accordion'
import { useEffect, useState } from 'react'
import Script from 'next/script'
import { GetProgramsAsPerTagName } from '../services/helper'
// import { getSpecific, getGenaric } from './serside'

function Footernew({ propsdata }) {
  useEffect(() => {
    if (window && window.screen.width > 500) {
      //zendesk
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.innerHTML =
        'window.$zopim||(function(d, s) {var z = $zopim = function(c) {z._.push(c)},$ = z.s =d.createElement(s),e = d.getElementsByTagName(s)[0];z.set = function(o) {z.set._.push(o)};z._ = [];z.set._ = [];$.async = !0;$.setAttribute("charset", "utf-8");$.src = "https://v2.zopim.com/?3IwiQ35RNopTlDu9J6l39tJbuj1THRke";z.t = +new Date;$.type = "text/javascript";e.parentNode.insertBefore($, e)})(document, "script");'
      setTimeout(function () {
        document.body.appendChild(script)
      }, 4000)
    }
  }, [])

  return (
    <>
      <div>
        <div style={{ margin: '0 auto', width: '100%' }}>
          <div className="newfooter">
            <div className=" layout-1">
              <div className="ulWidth">
                <img
                  alt="Imarticus Logo"
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/footerlogo.svg"
                  width="72px"
                  height="72px"
                  layout="fixed"
                  style={{ cursor: 'pointer' }}
                />
                <h4
                  style={{
                    color: '#68C29D',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    marginTop: '32px',
                    marginBottom: '10px',
                  }}
                >
                  Follow Us
                </h4>
                <div className="social-main">
                  <div className="social1">
                    <a
                      href="https://www.facebook.com/ImarticusLearning/"
                      target="_blank"
                    >
                      <img
                        style={{
                          marginRight: '8px',
                          marginBottom: '8px',
                          cursor: 'pointer',
                        }}
                        alt="Facebook Social Link"
                        src="https://cdn.pegasus.imarticus.org/imarticus_2/fblogo.svg"
                        width="30px"
                        height="30px"
                        layout="fixed"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/imarticuslearning/mycompany/"
                      target="_blank"
                    >
                      <img
                        alt="linkedin Social Link"
                        src="https://cdn.pegasus.imarticus.org/imarticus_2/linkedinlogo.svg"
                        width="30px"
                        height="30px"
                        layout="fixed"
                        style={{ marginRight: '9%', cursor: 'pointer' }}
                      />
                    </a>
                  </div>
                  <div className="social1">
                    <a
                      href="https://www.instagram.com/imarticus/"
                      target="_blank"
                    >
                      <img
                        style={{ marginRight: '8px', cursor: 'pointer' }}
                        alt="Instagram Social Link"
                        src="https://cdn.pegasus.imarticus.org/imarticus_2/instalogo.svg"
                        width="30px"
                        height="30px"
                        layout="fixed"
                      />
                    </a>
                    <a href="https://twitter.com/imarticus/" target="_blank">
                      <img
                        alt="twitter Social Link"
                        src="https://cdn.pegasus.imarticus.org/imarticus_2/twitterlogo.svg"
                        width="30px"
                        height="30px"
                        layout="fixed"
                        style={{ cursor: 'pointer' }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ulWidth1">
                <ul className="ulwidth8">
                  <h4>TRENDING FINANCE PROGRAMS </h4>
                  {propsdata &&
                    propsdata.length > 0 &&
                    GetProgramsAsPerTagName(propsdata, 'FINANCE').map(
                      (data) => (
                        <li>
                          <a href={data.link}>{data.programName}</a>
                        </li>
                      )
                    )}
                </ul>
                <ul className="ulwidth8">
                  <h4>TRENDING MARKETING PROGRAMS</h4>
                  {propsdata &&
                    propsdata.length > 0 &&
                    GetProgramsAsPerTagName(propsdata, 'MARKETING').map(
                      (data) => (
                        <li>
                          <a href={data.link}>{data.programName}</a>
                        </li>
                      )
                    )}
                </ul>
              </div>
              <div className="ulWidth2">
                <ul className="ulwidth8">
                  <h4>TRENDING ANALYTICS PROGRAMS</h4>
                  {propsdata &&
                    propsdata.length > 0 &&
                    GetProgramsAsPerTagName(propsdata, 'ANALYTICS').map(
                      (data) => (
                        <li>
                          <a href={data.link}>{data.programName}</a>
                        </li>
                      )
                    )}
                </ul>
                <ul className="ulwidth8">
                  <h4>TRENDING TECHNOLOGY PROGRAMS</h4>
                  {propsdata &&
                    propsdata.length > 0 &&
                    GetProgramsAsPerTagName(propsdata, 'TECHNOLOGY').map(
                      (data) => (
                        <li>
                          <a href={data.link}>{data.programName}</a>
                        </li>
                      )
                    )}
                </ul>
              </div>
              <div className="ulWidth4">
                <ul className="ulwidth8">
                  <h4>SUPPORT</h4>
                  <li>
                    <a href="/about-imarticus/">About Us</a>
                  </li>
                  <li>
                    <a href="/contact/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/become-an-admission-partner/">
                      Admission Partner
                    </a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions/">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="/Privacy-policy/">Privacy Policy</a>
                  </li>
                </ul>
                <ul>
                  <h4>LEARN ON THE GO!</h4>
                  <div>
                    <div className="andriod_box">
                      <a
                        className="andriod_link"
                        href="https://play.google.com/store/apps/details?id=com.imarticus"
                      >
                        <img
                          src="https://cdn.pegasus.imarticus.org/imarticus_2/android.svg"
                          width={20}
                          height={20}
                        ></img>
                        <p>Get Android App</p>
                      </a>
                    </div>
                    <div className="ios_box">
                      <a
                        className="andriod_link"
                        href="https://apps.apple.com/in/app/imarticus-learning/id1479035797"
                      >
                        <img
                          src="https://cdn.pegasus.imarticus.org/imarticus_2/apple.svg"
                          width={20}
                          height={20}
                        ></img>
                        <p>Get iOS App</p>
                      </a>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div className="mobile-footer1">
              <Accordion defaultActiveKey="0" className="dropdown2">
                <Accordion.Item eventKey="0" className="footeraccordionnew">
                  <Accordion.Header className="accordion-footer-header">
                    TRENDING FINANCE PROGRAMS
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="footer-ans2">
                      {propsdata &&
                        propsdata.length > 0 &&
                        GetProgramsAsPerTagName(propsdata, 'FINANCE').map(
                          (data) => (
                            <li>
                              <a href={data.link}>{data.programName}</a>
                            </li>
                          )
                        )}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="footeraccordionnew">
                  <Accordion.Header className="accordion-footer-header">
                    TRENDING ANALYTICS PROGRAMS
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="footer-ans2">
                      {propsdata &&
                        propsdata.length > 0 &&
                        GetProgramsAsPerTagName(propsdata, 'ANALYTICS').map(
                          (data) => (
                            <li>
                              <a href={data.link}>{data.programName}</a>
                            </li>
                          )
                        )}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="footeraccordionnew">
                  <Accordion.Header className="accordion-footer-header">
                    TRENDING TECHNOLOGY PROGRAMS{' '}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="footer-ans2">
                      {propsdata &&
                        propsdata.length > 0 &&
                        GetProgramsAsPerTagName(propsdata, 'TECHNOLOGY').map(
                          (data) => (
                            <li>
                              <a href={data.link}>{data.programName}</a>
                            </li>
                          )
                        )}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="footeraccordionnew">
                  <Accordion.Header className="accordion-footer-header">
                    TRENDING MARKETING PROGRAMS
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="footer-ans2">
                      {propsdata &&
                        propsdata.length > 0 &&
                        GetProgramsAsPerTagName(propsdata, 'MARKETING').map(
                          (data) => (
                            <li>
                              <a href={data.link}>{data.programName}</a>
                            </li>
                          )
                        )}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="footeraccordionnew">
                  <Accordion.Header className="accordion-footer-header">
                    Support
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="footer-ans2">
                      <li>
                        <a href="/about-imarticus/">About Us</a>
                      </li>
                      <li>
                        <a href="/contact/">Contact Us</a>
                      </li>
                      <li>
                        <a href="/become-an-admission-partner/">
                          Admission Partner
                        </a>
                      </li>
                      <li>
                        <a href="/terms-and-conditions/">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="/Privacy-policy/">Privacy Policy</a>
                      </li>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* mobile end */}
              <FooterAppLink />

              {/* mobile2 */}
              <FooterLocation />
            </div>
            <div style={{ paddingBottom: '4%', marginRight: '-2%' }}>
              <div className="separator-line" />
              <div>
                <div className="layout-2">
                  <div className="gp-details">
                    <h2
                      className="global-presence"
                      style={{ paddingBottom: '3%' }}
                    >
                      GLOBAL PRESENCE
                    </h2>
                    <div style={{}}>
                      <div className="Countrytitle">
                        <div>
                          <h4
                            className="country-india"
                            style={{
                              color: '#fff',
                              paddingBottom: '2%',
                              marginBottom: '0px',
                              fontWeight: '600',
                              textDecoration: 'underline',
                            }}
                          >
                            INDIA
                          </h4>
                          <div className="CountryIndiaDetails">
                            <ul className="westdetail statedetail">
                              <h3
                                className="westdetailtitle"
                                style={{
                                  color: '#68C29D',
                                  fontSize: '18px',
                                  fontWeight: 600,
                                  fontStyle: 'normal',
                                }}
                              >
                                WEST
                              </h3>
                              <li className="marginRightFooterWest">
                                <a href="/mumbai/"> Mumbai</a> <br />
                                <a href="tel:+918484932054">+91 8484932054</a>
                              </li>
                              <li>
                                <a href="/thane/">Thane</a> <br />
                                <a href="tel:+918956051536">+91 8956051536</a>
                              </li>
                              <li>
                                <a href="/pune/"> Pune</a> <br />
                                <a href="tel:+918956083026">+91 8956083026</a>
                              </li>
                              <li>
                                <a href="/ahmedabad/"> Ahmedabad</a> <br />
                                <a href="tel:+919513631084">+91 9513631084</a>
                              </li>
                            </ul>
                            <ul className="northdetail statedetail">
                              <h3
                                className="northdetailtitle"
                                style={{
                                  color: '#68C29D',
                                  fontSize: '18px',
                                  fontWeight: 600,
                                  fontStyle: 'normal',
                                }}
                              >
                                NORTH
                              </h3>
                              <li>
                                <a href="/">Jaipur</a> <br />
                                <a href="tel:+917428096032">+91 7428096032</a>
                              </li>
                              <li>
                                <a href="/delhi/">Delhi</a> <br />
                                <a href="tel:+918448515861">+91 8448515861</a>
                              </li>
                              <li>
                                <a href="/gurgaon/"> Gurgaon </a>
                                <br />{' '}
                                <a href="tel:+917428292896">+91 7428292896</a>
                              </li>
                              {/* <li>
                                <a href="/"> Chandigarh </a>
                                <br />{' '}
                              </li> */}
                            </ul>
                            <ul className="northdetail statedetail">
                              <h3
                                className="northdetailtitle"
                                style={{
                                  color: '#1d4644',
                                  fontSize: '18px',
                                  fontWeight: 600,
                                  fontStyle: 'normal',
                                }}
                              >
                                .
                              </h3>
                              <li>
                                <a href="/"> Noida </a>
                                <br />{' '}
                                <a href="tel:+917428292896">+91 7428292896</a>
                              </li>
                              <li>
                                <a href="/"> Patna </a>
                                <br />{' '}
                                <a href="tel:+918929763494 ">+91 8929763494 </a>
                              </li>
                              <li>
                                <a href="/lucknow/"> Lucknow </a>
                                <br />{' '}
                                <a href="tel:+917290092186">+91 7290092186</a>
                              </li>
                              <li>
                                <a href="/dehradun/"> Dehradun </a>
                                <br />{' '}
                                <a href="tel:+917303656855">+91 7303656855</a>
                              </li>
                            </ul>
                            <ul className="southdetail statedetail">
                              <h3
                                className="southdetailtitle"
                                style={{
                                  color: '#68C29D',
                                  fontSize: '18px',
                                  fontWeight: 600,
                                  fontStyle: 'normal',
                                }}
                              >
                                SOUTH
                              </h3>
                              <li>
                                <a href="/bangalore/">Bangalore Koramangala</a>
                                <br />{' '}
                                <a href="tel:+916364921385">+91 6364921385</a>
                              </li>
                              <li>
                                <a href="/bangalore/">Bangalore Marathahalli</a>
                                <br />{' '}
                                <a href="tel:+916364921384">+91 6364921384</a>
                              </li>
                              <li>
                                <a href="/chennai/"> Chennai</a> <br />
                                <a href="tel:+916366370388">+91 6366370388</a>
                              </li>
                            </ul>
                            <ul className="southdetail statedetail">
                              <h3
                                className="southdetailtitle"
                                style={{
                                  color: '#1d4644',
                                  fontSize: '18px',
                                  fontWeight: 600,
                                  fontStyle: 'normal',
                                }}
                              >
                                .
                              </h3>
                              <li>
                                <a href="/hyderabad/">Hyderabad</a>
                                <br />{' '}
                                <a href="tel:+919148629802">+91 9148629802</a>
                              </li>
                              <li>
                                <a href="/coimbatore/">Coimbatore</a>
                                <br />{' '}
                                <a href="tel:+916366448758">+91 6366448758</a>
                              </li>
                              <li>
                                <a href="/cochin/">Cochin</a> <br />
                                <a href="tel:+917353470666">+91 7353470666</a>
                              </li>
                            </ul>
                            <ul className="southdetail statedetail">
                              <h3
                                className="southdetailtitle"
                                style={{
                                  color: '#68C29D',
                                  fontSize: '18px',
                                  fontWeight: 600,
                                  fontStyle: 'normal',
                                }}
                              >
                                EAST
                              </h3>
                              <li>
                                <a href="/kolkata/">Kolkata</a>
                                <br /> <a href="tel:+">+91 9513630678</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="dubaicountry">
                          <div className="country-uae-details">
                            <h4
                              style={{
                                color: '#fff',
                                fontSize: '18px',
                                fontWeight: 600,
                                fontStyle: 'normal',
                                marginBottom: '9%',
                                textDecoration: 'underline',
                              }}
                            >
                              UAE
                            </h4>
                            <ul className="dubaidetail">
                              <li className="dubaidetailtitle">Dubai</li>
                              <div>
                                <a
                                  href="tel:+971565114477"
                                  className="uae-mobile"
                                >
                                  {' '}
                                  +971 565114477
                                </a>
                              </div>
                              <br />
                              <li className="dubaidetailtitle">
                                Our Partner
                                <br />
                                <a
                                  href="https://imperiumme.com/"
                                  target="_blank"
                                  className="uae-mobile"
                                >
                                  {' '}
                                  IMPERIUM Middle East
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <div className="country-uae-details">
                              <h4
                                style={{
                                  color: '#fff',
                                  fontSize: '18px',
                                  fontWeight: 600,
                                  fontStyle: 'normal',
                                  marginBottom: '9%',
                                  marginTop: '14%',
                                  textDecoration: 'underline',
                                }}
                              >
                                ONLINE
                              </h4>
                              <div style={{ paddingBottom: '12px' }}>
                                <ul className="dubaidetail">
                                  <li className="dubaidetailtitle">
                                    FinTech Certification
                                  </li>
                                  <div>
                                    <a
                                      href="tel:+91-8882007788"
                                      className="uae-mobile"
                                    >
                                      +91 8882007788
                                    </a>
                                  </div>
                                </ul>
                                <ul className="dubaidetail">
                                  <li className="dubaidetailtitle">
                                    Online Analytics
                                  </li>
                                  <div>
                                    <a
                                      href="tel:+91-9513166751"
                                      className="uae-mobile"
                                    >
                                      +91 9513166751
                                    </a>
                                  </div>
                                </ul>
                                <ul className="dubaidetail">
                                  <li className="dubaidetailtitle">
                                    Online Finance
                                  </li>
                                  <div>
                                    <a
                                      href="tel:+91-9319746164"
                                      className="uae-mobile"
                                    >
                                      +91 9319746164
                                    </a>
                                  </div>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="separator-line2" />
            </div>
            {/* <div className="bottom-section">
                <div className="separator-line3" />
                <h4 className="want-to-know" style={{}}>
                  WANT TO KNOW MORE?
                </h4>
                <div className="call-btn">
                  <div className="request-call ">
                    <button className="RequestCallBtn widFooter ajay" on="tap:my-lightbox-userInfo">
                      <a className='requestcall' style={{display: 'flex', alignItems: 'center', color: '#3C4852', fontSize: '18px'}}>
                        Request a callback
                        <img className="rightarrow lazyload" src="https://cdn.pegasus.imarticus.org/imarticus_2/arrowdark.svg" alt="Rightarrow" layout="intrinsic" width="8.49px" height="14.14px" />
                      </a>
                    </button>
                  </div>
                  <div className="whatsapp-call">
                    <button className="WhtsappBtn widFooter">
                      <a className="whatsapphi" href="https://api.whatsapp.com/send?phone=917304556383&text=Hello%20Imarticus%20Learning,%20Please%20let%20me%20know%20more%20about%20Analytics,%20Finance,%20Technology%20and%20Marketing%20offerings" target="_blank" style={{display: 'flex', alignItems: 'center', marginLeft: '8px'}}>
                        <img className="leftimg lazyload" src="https://cdn.pegasus.imarticus.org/imarticus_2/whatsappicon2.svg" alt="Whatsappimg" layout="intrinsic" width={24} height={24} style={{marginLeft: '8px'}}>
                        </img>
                        Say Hi! on Whatsapp
                        <img className="rightarrow lazyload" src="https://cdn.pegasus.imarticus.org/imarticus_2/arrow.svg" alt="Rightarrow" layout="intrinsic" width="8.49px" height="14.14px" />
                      </a>
                    </button>
                  </div>
                </div>
              </div> */}
            <div className="copyright">
              <p style={{}}>
                Copyright © 2022 Imarticus Learning Pvt. Ltd., All rights
                reserved.
              </p>
              <div className="copyright-p">
                <a
                  className="policyhover"
                  href="/terms-and-conditions/"
                  style={{ paddingRight: '50px' }}
                >
                  Terms of Use
                </a>
                <a className="policyhover" href="/Privacy-policy/">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footernew
