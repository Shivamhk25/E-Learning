import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react'
import Locations from '../../json/masterLocationsAndAreaOfInterest.json'
import Program from '../../json/program.json'
import { leadApiHelper } from '../../services/formLeadApiHelper'
import {
  GetProgramCentricLocationArrayByProgramObject,
  ValidateLSKey,
  GetCourseObjectByLSKey,
  CheckIfUTMIsOTPEnabled,
} from '../../services/helper'

import Loader from '../UI/Loader/Loader'
import CountryCodes from './CountryCodes'
import axios from 'axios'
import GetLeadSource from '../Getleadsource'
import ReCAPTCHA from 'react-google-recaptcha'
import Otpmodal from '../partials/Otpmodal'
import { configs, countryCodes } from '../../constants'
import styles from '../../styles/pgB&F.module.css'

function getParameterByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results
  if (typeof window !== `undefined`) {
    results = regex.exec(window.location.search)
  }
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

const EnquireForm = ({
  locationvalue = Locations,
  locationsData = Locations.center,
  toggleModal,
  downloadBrochure,
  brochureUrl,
  page,
  courseName = courseName || '',
  propsdata,
}) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState()
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [countryCode, setCountryCode] = useState()
  const [locationValue, setLocation] = useState('')
  const [stateValue, setState] = useState('')
  const [countryValue, setCountry] = useState('')
  const [locationID, setLocationID] = useState('')
  const [modeoflearningID, setModeoflearningID] = useState('')
  const [areaofinterestValue, setAreaofinterest] = useState('')
  const [
    shouldEnableRecaptchaAndVerifyOTPForm,
    setShouldEnableRecaptchaAndVerifyOTPForm,
  ] = useState(false)
  const [isLeadSubmitButtonDisabled, setIsLeadSubmitButtonDisabled] =
    useState(true)
  const [showVerifyOTPForm, setShowVerifyOTPForm] = useState(false)
  const [requestId, setRequestID] = useState('')

  var program_obj = GetCourseObjectByLSKey(propsdata, courseName)

  //For Recaptcha
  const recaptchaRef = React.createRef()
  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) {
      return
    }
    setIsLeadSubmitButtonDisabled(false)
    recaptchaRef.current.reset()
  }

  if (
    courseName &&
    program_obj &&
    program_obj['locationNames'] &&
    program_obj['locationNames'].length > 0
  ) {
    locationsData = GetProgramCentricLocationArrayByProgramObject(program_obj)

    locationsData.push({
      value: 'Other',
      name: 'Other',
    })
  }

  var source = getParameterByName('utm_source')
  var medium = getParameterByName('utm_medium')
  var campaign = getParameterByName('utm_campaign')
  var utmTerm = getParameterByName('utm_term')
  var campaigntype = getParameterByName('utm_campaigntype')
  var utmPlacement = getParameterByName('utm_placement')
  var utmAdGroup = getParameterByName('utm_adgroup')
  var campaignName = getParameterByName('UTM_campaignName')
  var campaignName2 = getParameterByName('utm_campaignname')

  //Custom Function To get leadSource
  let leadSource =
    source !== ''
      ? GetLeadSource({
          utmSource: source,
          utmCampaignType: campaigntype,
          utmMedium: medium,
        })
      : 'Website'

  const getlocation = async () => {
    try {
      const response = await axios.get(
        `${configs.API_ENDPOINT}/leadsquare/location`
      )
      console.log(response)
      setLocation(response.data.data.closestCenter)
      setLocationID(response.data.data.locationID)
      setCountry(response.data.data.country)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (
      source != '' ||
      medium != '' ||
      campaign != '' ||
      utmTerm != '' ||
      campaigntype != ''
    ) {
      localStorage.setItem('UTM_source', source)
      localStorage.setItem('UTM_medium', medium)
      localStorage.setItem('UTM_campaign', campaign)
      localStorage.setItem('UTM_utmTerm', utmTerm)
      localStorage.setItem('UTM_channel', campaigntype)
    }
    if (utmPlacement != '') {
      localStorage.setItem('UTM_utmPlacement', utmPlacement)
    }
    if (utmAdGroup != '') {
      localStorage.setItem('UTM_utmAdGroup', utmAdGroup)
    }
    if (campaignName != '') {
      localStorage.setItem('UTM_campaignName', campaignName)
    }
    if (campaignName2 != '') {
      localStorage.setItem('utm_campaignname', campaignName2)
    }
    if (localStorage.getItem('UTM_source') != null) {
      leadSource = GetLeadSource({
        utmSource: localStorage.getItem('UTM_source'),
        utmCampaignType: localStorage.getItem('UTM_channel'),
        utmMedium: localStorage.getItem('UTM_medium'),
      })
    }
    console.log('leadScore', leadSource)

    leadSource =
      localStorage.getItem('UTM_source') != ''
        ? GetLeadSource({
            utmSource: localStorage.getItem('UTM_source'),
            utmCampaignType: localStorage.getItem('UTM_channel'),
            utmMedium: localStorage.getItem('UTM_medium'),
          })
        : ''

    localStorage.setItem('leadSource', leadSource)
    console.log('leadScore', leadSource)

    //for recaptcha
    let channel = localStorage.getItem('UTM_channel')
      ? localStorage.getItem('UTM_channel').toLowerCase()
      : 'null'
    if (CheckIfUTMIsOTPEnabled(channel)) {
      setShouldEnableRecaptchaAndVerifyOTPForm(true)
    } else {
      setShouldEnableRecaptchaAndVerifyOTPForm(false)
      setIsLeadSubmitButtonDisabled(false)
    }

    if (window) {
      setName(localStorage.getItem('name') || '')
      setEmail(localStorage.getItem('email') || '')
      setContact(localStorage.getItem('contact') || '')
      setAreaofinterest(localStorage.getItem('areaofinterest') || '')
      if (localStorage.getItem('c_state')) {
        setLocation(localStorage.getItem('location'))
        setLocationID(localStorage.getItem('locationid') || '')
      } else {
        getlocation()
      }
    }
    if (courseName) {
      setAreaofinterest(courseName)
    }
  }, [])

  useEffect(() => {
    setCountryCode(countryCodes[countryValue])
  }, [countryValue])

  let device = ''
  var windowWidth
  if (typeof window !== `undefined`) {
    windowWidth = parseInt(window.innerWidth)
    console.log(windowWidth)
  }
  if (windowWidth > 1200) device = 'Desktop'
  else if (windowWidth > 520) device = 'Tablet'
  else device = 'Mobile'

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      const data = await leadApiHelper({
        FirstName: name,
        mx_Training_Location: locationValue,
        mx_Location_ID: locationID,
        CountryCode: countryCode || 91,
        Phone: contact,
        EmailAddress: email,
        mx_Website_Page_URL: window.location.href,
        HTTPReferrerURL: document.referrer,
        mx_Mode_of_Delivery: modeoflearningID,
        mx_Training_Location: stateValue == '' ? locationValue : stateValue,
        mx_Campaign_Program: localStorage.getItem('utm_campaignname'),
        mx_utm_medium: localStorage.getItem('UTM_medium'),
        mx_Website_Source_Campaign: localStorage.getItem('UTM_source'),
        mx_keyword_utm_term: localStorage.getItem('UTM_utmTerm'),
        Source: localStorage.getItem('leadSource') || leadSource,
        mx_country: countryValue,
        mx_Lead_Source_Detail: localStorage.getItem('leadSource') || leadSource,
        mx_lead_device: device,
        mx_Book_a_time_slot: 'none',
        mx_free_Demo_Requested: localStorage.getItem('demo-count'),
        mx_ad_group: localStorage.getItem('UTM_utmAdGroup'),
        mx_Campaign_type: localStorage.getItem('UTM_channel'),
        leadsource: localStorage.getItem('leadSource') || leadSource,
        mx_Program_from_website: ValidateLSKey(propsdata, areaofinterestValue)
          ? areaofinterestValue
          : '',
        mx_Program_3: ValidateLSKey(propsdata, areaofinterestValue)
          ? areaofinterestValue
          : '',
      })

      setRequestID(data.RequestID)
      setLoading(false)

      if (window) {
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('contact', contact)
        localStorage.setItem('phone', contact)
        localStorage.setItem('location', locationValue)
        localStorage.setItem('countryCode', countryCode || 91)
        localStorage.setItem('locationid', locationID)
        localStorage.setItem('modeoflearning', modeoflearningID)
        localStorage.setItem('stateValue', stateValue)
      }
      if (downloadBrochure) {
        window.open(brochureUrl)
      }

      if (shouldEnableRecaptchaAndVerifyOTPForm) {
        if (countryCode == '91') {
          setShowVerifyOTPForm(true)
        } else {
          toggleModal()
          window.open('/thank-you', '_self')
        }
      } else {
        toggleModal()
        window.open('/thank-you', '_self')
      }
    } catch (error) {
      setLoading(false)

      setError(error)
    }
  }

  return (
    <>
      {loading && <Loader />}
      {showVerifyOTPForm ? (
        <Otpmodal toggleModal={toggleModal} RequestID={requestId} />
      ) : (
        <div className="industry-project-popup-ctnr">
          <div className="enquire_form_illustrater">
            <img
              src="https://cdn.pegasus.imarticus.org/imarticus_2/enquireformillustrator.svg"
              alt="imarticus illustrator"
              width={378}
              height={368}
            ></img>
          </div>
          <div className="enquire_form_main">
            <form onSubmit={submitHandler}>
              <div className="top_closing_button">
                <h3 className="blc enquireFormheading">
                  Ready to transform your career?
                </h3>
                <div
                  role="button"
                  className="close_arrow_pointer"
                  tabIndex={0}
                  onClick={toggleModal}
                >
                  <img
                    height={15}
                    width={15}
                    alt="close"
                    className
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/close.svg"
                  ></img>
                </div>
              </div>

              <div className="enquire_box_space">
                <div className="form-inpt-contnr">
                  <input
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    className="form-inpt enquireFormInput"
                    placeholder="Full Name*"
                    id="FirstName"
                    name="FirstName"
                    required
                    maxLength={50}
                  />
                </div>
              </div>
              <div className="enquire_box_space">
                <div className="form-inpt-contnr">
                  <input
                    type="email"
                    value={email}
                    className="form-inpt enquireFormInput"
                    placeholder="Enter Email ID*"
                    id="EmailAddress"
                    onChange={(e) => setEmail(e.target.value)}
                    name="EmailAddress"
                    required
                    maxLength={320}
                  />
                </div>
              </div>
              <div className="mobile_number_input">
                <div className>
                  <CountryCodes
                    country={countryValue}
                    value={countryCode}
                    onChange={(e) => setCountryCode(+e.target.value)}
                    styles={styles}
                    formcountrycode={styles.formcountrycode}
                  />
                </div>
                <div className="enquire_box_space">
                  <div className="form-inpt-contnr">
                    <input
                      type="tel"
                      value={contact}
                      className="form-inpt enquireFormInput2"
                      placeholder="Contact Number*"
                      onChange={(e) => setContact(e.target.value)}
                      name="Phone"
                      id="Phone"
                      required
                      maxLength={20}
                    />
                  </div>
                </div>
              </div>

              {/* mode of training */}
              <div className="form-inpt-contnr enquire_box_space">
                <select
                  value={modeoflearningID}
                  onChange={(e) => setModeoflearningID(e.target.value)}
                  className="form-inpt enquireFormInput"
                  name="modeoflearning"
                  id="modeoflearning"
                  required
                >
                  <option>Mode of Training</option>
                  <option key="Classroom" value="Classroom">
                    Classroom
                  </option>
                  {page !== 'PGBandF' ? (
                    <option key="Online" value="Online">
                      Live Online Training
                    </option>
                  ) : (
                    ''
                  )}
                </select>
              </div>

              {modeoflearningID === 'Classroom' && (
                <div className="form-inpt-contnr enquire_box_space">
                  <select
                    value={locationValue}
                    onChange={(e) => setLocation(e.target.value)}
                    className="form-inpt enquireFormInput"
                    name="c_state"
                    id="c_state"
                    required
                  >
                    <option>Select Closest Location</option>
                    {locationsData.map((item) => {
                      return (
                        <option key={item.value} value={item.value}>
                          {item.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
              )}

              {locationValue === 'Other' && (
                <div className="form-inpt-contnr enquire_box_space">
                  <select
                    value={stateValue}
                    onChange={(e) => setState(e.target.value)}
                    className="form-inpt enquireFormInput"
                    name="c_state"
                    id="c_state"
                    required
                  >
                    <option>Select Your State</option>
                    {locationvalue.state.map((item) => {
                      return (
                        <option key={item.value} value={item.value}>
                          {item.name}
                        </option>
                      )
                    })}
                    <optgroup label="Union Territories">
                      {locationvalue.UnionTerritories.map((item) => {
                        return (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        )
                      })}
                    </optgroup>
                  </select>
                </div>
              )}

              <div className="enquireCheckbox__next">
                <input
                  type="checkbox"
                  style={{ marginRight: '10px' }}
                  id="scales"
                  name="scales"
                  defaultChecked
                />
                <label
                  htmlFor="scales"
                  style={{
                    color: 'rgba(60, 72, 82, 0.75)',
                    fontSize: '16px',
                    lineHeight: '24px',
                  }}
                >
                  I accept the{' '}
                  <a
                    style={{ textDecoration: 'none' }}
                    href="/terms-and-conditions/"
                  >
                    <span style={{ color: '#0c6baa' }}>Terms & Conditions</span>
                  </a>
                </label>
              </div>

              {shouldEnableRecaptchaAndVerifyOTPForm && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    // size="invisible"
                    sitekey={configs.RECAPTCHA_KEY}
                    onChange={onReCAPTCHAChange}
                  />
                </div>
              )}

              <div className="submit_button">
                <button
                  type="submit"
                  className="cus-btn user-form-submit form-submit-text enquireFormButton"
                  id="request-otp-button"
                  style={{}}
                  disabled={isLeadSubmitButtonDisabled}
                >
                  Submit
                </button>
              </div>
              <div
                submit-error
                className="form-bottom-alerts form-bottom-alert-error center"
              >
                {error && <p className="error_msg_bottom">{error}</p>}
              </div>
            </form>
          </div>
          <div className="bottom_color" />
        </div>
      )}
    </>
  )
}
export default EnquireForm
