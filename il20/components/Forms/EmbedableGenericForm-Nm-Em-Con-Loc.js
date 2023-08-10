import Image from 'next/image'
import { useEffect, useState } from 'react'
import Locations from '../../json/masterLocationsAndAreaOfInterest.json'
import Program from '../../json/program.json'
import { genericFormLeadApiHelper } from '../../services/genericFormLeadApiHelper'
import { GetDeviceWidth } from '../../services/helper'
import {
  GetProgramCentricLocationArrayByProgramObject,
  ValidateLSKey,
  GetCourseObjectByLSKey,
} from '../../services/helper'
import Loader from '../UI/Loader/Loader'
import CountryCodes from './CountryCodes'
import axios from 'axios'
import GetLeadSource from '../Getleadsource'
import configs from '../../constants'
import styles from '../../styles/pgB&F.module.css'
import style from '../../styles/Aap.module.css'

const EnquireFormService = ({
  locationvalue = Locations,
  toggleModal,
  locationsData = Locations.center,
  subject,
}) => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState()
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [countryCode, setCountryCode] = useState(91)
  const [locationValue, setLocation] = useState('')
  const [stateValue, setState] = useState('')
  const [countryValue, setCountry] = useState('')

  let device = GetDeviceWidth()

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)

      let dataToSend = {
        FirstName: name,
        mx_Training_Location: locationValue,
        CountryCode: countryCode,
        Phone: contact,
        EmailAddress: email,
        mx_Training_Location: stateValue == '' ? locationValue : stateValue,
        mx_Website_Page_URL: window.location.href,
      }
      if (subject) {
        dataToSend['Subject'] = subject
      }
      const maildata = await genericFormLeadApiHelper(dataToSend)

      // console.log(data, "maildata:::::::::::::::::");

      // toggleModal()
      window.open('/b2b-thankyou', '_self')
    } catch (error) {
      setLoading(false)

      setError(error)
    }
  }

  return (
    <>
      {loading && <Loader />}
      <>
        {/* <div className="industry-project-popup-ctnr"> */}
        {/* <div className="enquire_form_illustrater">
          <img
            src="https://cdn.pegasus.imarticus.org/imarticus_2/enquireformillustrator.svg"
            alt="imarticus illustrator"
            width={378}
            height={368}
          ></img>
        </div> */}
        <div
          className={style.enquire_form_main_aap}
          style={{ width: '100%', padding: '0px !important' }}
        >
          <form onSubmit={submitHandler} className={style.form_aap}>
            <div className={style.top_closing_button_aap}>
              <h3
                style={{ fontSize: '24px !important' }}
                className={styles.formHeader}
              >
                Get In Touch
              </h3>
              {/* <div
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
              </div> */}
            </div>

            <div className={style.enquire_box_space_aap}>
              <div className="form-inpt-contnr">
                <input
                  value={name}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="form-inpt enquireFormInputAap w-100"
                  placeholder="Full Name*"
                  id="FirstName"
                  name="FirstName"
                  required
                  maxLength={50}
                />
              </div>
            </div>
            <div className={style.enquire_box_space_aap}>
              <div className="form-inpt-contnr">
                <input
                  type="email"
                  value={email}
                  className="form-inpt enquireFormInputAap w-100"
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
                  value={countryCode}
                  onChange={(e) => setCountryCode(+e.target.value)}
                  styles={styles}
                  formcountrycode={styles.formcountrycode}
                />
              </div>
              <div className={style.enquire_box_space_aap}>
                <div className="form-inpt-contnr">
                  <input
                    type="tel"
                    value={contact}
                    className="form-inpt enquireFormInput2 w-100"
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
                value={locationValue}
                onChange={(e) => setLocation(e.target.value)}
                className="form-inpt enquireFormInputAap w-100"
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

            {/* )} */}

            {locationValue === 'Other' && (
              <div className="form-inpt-contnr enquire_box_space">
                <select
                  value={stateValue}
                  onChange={(e) => setState(e.target.value)}
                  className="form-inpt enquireFormInputAap"
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
                  fontSize: '14px',
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
            <div className="submit_button" style={{ textAlign: 'center' }}>
              <button
                type="submit"
                className="cus-btn user-form-submit form-submit-text enquireFormButton"
                id="request-otp-button"
                style={{}}
              >
                Next
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
        {/* <div className="bottom_color" /> */}
      </>
    </>
  )
}
export default EnquireFormService
