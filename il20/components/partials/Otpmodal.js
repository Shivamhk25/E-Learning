import React from 'react'
import Loader from '../UI/Loader/Loader'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { configs, otptimer } from '../../constants'

function Otpmodal({ toggleModal, RequestID }) {
  const [loading, setLoading] = useState(false)
  const [otpNumber, setOtpNumber] = useState('')
  const [error, setError] = useState()
  const [seconds, setSeconds] = useState(
    localStorage.getItem('sec') || otptimer.second
  )
  const [minutes, setMinutes] = useState(
    localStorage.getItem('min') || otptimer.minute
  )
  const [aid, setAid] = useState('')

  function updateTime() {
    if (minutes == 0 && seconds == 0) {
      setSeconds(0)
      setMinutes(5)
    } else {
      if (seconds == 0) {
        localStorage.setItem('min', minutes - 1)
        localStorage.setItem('sec', 59)
        setMinutes((minutes) => minutes - 1)
        setSeconds(59)
      } else {
        localStorage.setItem('sec', seconds - 1)
        setSeconds((seconds) => seconds - 1)
      }
    }
  }

  const getOtp = async () => {
    try {
      const response = await axios.post(
        `${configs.OTP_ENDPOINT}/api/account/amp_request_otp_v18`,
        {
          c_code: localStorage.getItem('countryCode'),
          p_no: localStorage.getItem('contact'),
          email: localStorage.getItem('email'),
          name: localStorage.getItem('name'),
        }
      )
      setAid(response.data.data.Account._id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOtp()
  }, [])

  useEffect(() => {
    const token = setTimeout(updateTime, 1000)
    return function cleanUp() {
      clearTimeout(token)
    }
  })

  const submitOtpHandler = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      const data = await axios.post(
        `${configs.OTP_ENDPOINT}/api/account/eckhp_v_otp_w`,
        {
          otp: otpNumber,
          aid: aid,
        }
      )

      try {
        const data2 = await axios.post(
          `${configs.API_ENDPOINT}/leadsquare/otp_verify_user`,
          {
            RelatedProspectId: RequestID,
            lsnote: 'OTP has been verified',
          }
        )
      } catch (error) {
        console.log(error)
      }

      window.open('/thank-you', '_self')
      localStorage.setItem('min', 4)
      localStorage.setItem('sec', 59)
    } catch (error) {
      setLoading(false)
      setError(error.response.data.message)
    }
  }

  const resendotp = () => {
    getOtp()
    setMinutes(4)
    setSeconds(59)
    localStorage.setItem('min', otptimer.minute)
    localStorage.setItem('sec', otptimer.second)
  }

  return (
    <>
      {loading && <Loader />}
      <div className="industry-project-popup-ctnr-otp">
        <div
          onClick={toggleModal}
          style={{ position: 'absolute', right: '20px', cursor: 'pointer' }}
        >
          <img
            height={15}
            width={15}
            alt="close"
            className
            src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/close.svg"
          ></img>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '64px',
          }}
        >
          <img
            src="https://cdn.pegasus.imarticus.org/b2b/OTP.svg"
            alt=""
            width={120}
            height={120}
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <h1
            style={{ fontWeight: '700', fontSize: '20px', lineHeight: '56px' }}
          >
            Verify Mobile Number
          </h1>
          <p
            style={{ fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}
          >
            Enter the 6 digit OTP sent to <br /> +91-
            {localStorage.getItem('contact')}
          </p>
        </div>

        <div
          className="enquire_form_main"
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '18px',
            width: '100%',
          }}
        >
          <form onSubmit={submitOtpHandler}>
            <div className="">
              <div className="enquire_box_space">
                <div className="form-inpt-contnr">
                  <input
                    // value={otp}
                    type="text"
                    style={{ textAlign: 'center' }}
                    onChange={(e) => setOtpNumber(e.target.value)}
                    className="form-inpt enquireFormInput"
                    placeholder="0-0-0-0-0-0"
                    id="Otp"
                    name="Otp"
                    required
                    maxLength={6}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ color: '#68c29d' }}>
                  {minutes}:{seconds}
                </p>
                <div style={{ position: 'absolute', right: '20px' }}>
                  <p
                    onClick={resendotp}
                    style={{
                      fontSize: '14px',
                      color: 'rgba(60, 72, 82, 0.5)',
                      cursor: 'pointer',
                    }}
                  >
                    Resend OTP
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="cus-btn user-form-submit form-submit-text enquireFormButton"
                id="request-otp-button"
                style={{ marginTop: '32px', marginBottom: '18px' }}
              >
                Submit
              </button>
            </div>
            <div
              submit-error
              className="form-bottom-alerts form-bottom-alert-error center"
            >
              {error && (
                <p
                  className="err or_msg_bottom"
                  style={{ paddingBottom: '20px' }}
                >
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="bottom_color" />
      </div>
    </>
  )
}

export default Otpmodal
