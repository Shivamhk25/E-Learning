import { useEffect, useState } from 'react'
import Locations from '../../json/masterLocationsAndAreaOfInterest.json'
import Program from '../../json/program.json'
import { leadApiHelper } from '../../services/formLeadApiHelper'
import { ValidateLSKey } from '../../services/helper'
import Loader from '../UI/Loader/Loader'
import CountryCodes from './CountryCodes'
import axios from 'axios'
import GetLeadSource from '../Getleadsource'
import { configs, countryCodes } from '../../constants'
import styles from '../../styles/contact.module.css'

function getParameterByName(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results
  if (typeof window !== `undefined`) {
    results = regex.exec(window.location.search)
  }
  // console.log({ results }, typeof results)
  if (results == undefined) return ''
  return decodeURIComponent(results[1].replace(/\+/g, ' '))
}
function EmbedableForm6({
  toggleModal,
  downloadBrochure,
  brochureUrl,
  propsdata,
}) {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [cerror, setError] = useState()
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [locationValue, setLocation] = useState('')
  const [countryValue, setCountry] = useState('')
  const [locationID, setLocationID] = useState('')
  const [areaofinterestValue, setAreaofinterest] = useState('')

  var source = getParameterByName('utm_source')
  var medium = getParameterByName('utm_medium')
  var campaign = getParameterByName('utm_campaign')
  var utmTerm = getParameterByName('utm_term')
  var campaigntype = getParameterByName('utm_campaigntype')
  var utmPlacement = getParameterByName('utm_placement')
  var utmAdGroup = getParameterByName('utm_adgroup')
  var campaignName = getParameterByName('UTM_campaignName')
  var campaignName2 = getParameterByName('utm_campaignname')

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
      // console.log(response)
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
    // console.log('leadScore', leadSource)

    leadSource =
      localStorage.getItem('UTM_source') != ''
        ? GetLeadSource({
            utmSource: localStorage.getItem('UTM_source'),
            utmCampaignType: localStorage.getItem('UTM_channel'),
            utmMedium: localStorage.getItem('UTM_medium'),
          })
        : ''

    localStorage.setItem('leadSource', leadSource)
    // console.log('leadScore', leadSource)

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
  }, [])

  useEffect(() => {
    setCountryCode(countryCodes[countryValue])
  }, [countryValue])

  let device = ''
  var windowWidth
  if (typeof window !== `undefined`) {
    windowWidth = parseInt(window.innerWidth)
    // console.log(windowWidth)
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
        mx_Campaign_Program: localStorage.getItem('utm_campaignname'),
        mx_utm_medium: localStorage.getItem('UTM_medium'),
        mx_Website_Source_Campaign: localStorage.getItem('UTM_source'),
        mx_keyword_utm_term: localStorage.getItem('UTM_utmTerm'),
        Source: localStorage.getItem('leadSource') || leadSource,
        mx_country: countryValue,
        mx_Lead_Source_Detail: localStorage.getItem('leadSource') || leadSource,
        mx_lead_device: device,
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
      setLoading(false)

      if (window) {
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('contact', contact)
        localStorage.setItem('phone', contact)
        localStorage.setItem('location', locationValue)
        localStorage.setItem('countryCode', countryCode)
        localStorage.setItem('locationid', locationID)
        localStorage.setItem('areaofinterest', areaofinterestValue)
      }
      if (downloadBrochure) {
        window.open(brochureUrl)
      }
      //   toggleModal()
      window.open('/thank-you', '_self')
    } catch (error) {
      setLoading(false)

      setError(error)
    }
  }

  return (
    <>
      {loading && <Loader />}
      <div className={styles.embedableform6maincontainer}>
        <form onSubmit={submitHandler} className={styles.formboxembedable}>
          <div className>
            <h3 className={styles.formheading}>Request More Information</h3>
          </div>

          <div className="enquire_box_space">
            <div className={styles.forminputcontr}>
              <input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                className={styles.formfullname}
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
                className={styles.forminputmail}
                placeholder="Enter Email ID*"
                id="EmailAddress"
                onChange={(e) => setEmail(e.target.value)}
                name="EmailAddress"
                required
                maxLength={320}
              />
            </div>
          </div>
          <div className={styles.mobile_number_input}>
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
                  className={styles.formcontactno}
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

          <div className="form-inpt-contnr enquire_box_space">
            <select
              value={areaofinterestValue}
              onChange={(e) => setAreaofinterest(e.target.value)}
              className={styles.formareainterest}
              name="areaofinterest"
              id="areaofinterest"
            >
              <option value="" disabled selected>
                Preferred Program
              </option>
              {propsdata &&
                propsdata.length > 0 &&
                propsdata.map((data) => (
                  <option
                    key={data.leadsquareProgramKey}
                    value={data.leadsquareProgramKey}
                  >
                    {data.programName}
                  </option>
                ))}
            </select>
          </div>

          <div className={styles.formsubmitbtnpluscheck}>
            <div
              className=""
              style={{ display: 'flex', alignItems: 'center', width: '100%' }}
            >
              <input
                type="checkbox"
                style={{ marginRight: '10px' }}
                className={styles.formcheckbttninp}
                id="scales"
                name="scales"
                defaultChecked
              />
              <label
                htmlFor="scales"
                style={{
                  color: 'rgba(60, 72, 82, 0.75)',
                  fontSize: '16px',
                  lineHeight: '22px',
                }}
                className={styles.formbtncheckbtntext}
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
            <div className="">
              <button
                type="submit"
                className={styles.formsendmsgbtn}
                id="request-otp-button"
                style={{}}
              >
                Submit
              </button>
            </div>
          </div>

          <div
            submit-error
            className="form-bottom-alerts form-bottom-alert-error center"
          >
            {cerror && <h1 className="error_msg_bottom">{cerror}</h1>}
          </div>
        </form>
      </div>
    </>
  )
}

export default EmbedableForm6
