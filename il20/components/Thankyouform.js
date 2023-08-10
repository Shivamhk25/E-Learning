import React from 'react'
import { useEffect, useState } from 'react'
import styles from '../styles/thankyou.module.css'
import Image from 'next/image'
import Loader from './UI/Loader/Loader'
import thankyoupage from '../json/program.json'
import { leadApiHelper } from '../services/formLeadApiHelper'
import { useRouter } from 'next/router'

function Thankyouform() {
  const [linkedin, setLinkedin] = useState('')
  const [error, setError] = useState()
  const [higherQualification, setHigherQualification] = useState('')
  const [jobFunction, setJobFunction] = useState('')
  const [professionalExp, setProfessionalExp] = useState('')
  const [callingtime, setCallingtime] = useState('')
  const [preferedbatch, setPreferedbatch] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      const data = await leadApiHelper({
        FirstName:
          localStorage.getItem('name') || localStorage.getItem('firstName'),
        EmailAddress: localStorage.getItem('email'),
        Phone: localStorage.getItem('phone'),
        CountryCode: localStorage.getItem('countryCode') || 91,
        mx_Program_3:
          localStorage.getItem('areaofinterest') ||
          localStorage.getItem('SelectedProgramName'),
        mx_Website_Page_URL: window.location.href,
        HTTPReferrerURL: document.referrer,
        mx_Experience: professionalExp,
        linkedInId: linkedin,
        mx_Current_job_function: jobFunction,
        mx_Book_a_time_slot: callingtime,
        mx_H_Qualification: higherQualification,
        mx_Mode_of_Delivery: preferedbatch,
      })
      setLoading(false)
      //   window.open('/thank-you', '_self')
      router.back()
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }

  return (
    <>
      {loading && <Loader />}
      <div className={styles.formboxcontainer}>
        <div>
          <h1 className={styles.formboxheading}>Enter Your Details</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div className="enquire_box_space">
            <div className="form-inpt-contnr">
              <select
                onChange={(e) => setHigherQualification(e.target.value)}
                value={higherQualification}
                className={`${styles.form_input} ${styles.thankyouinput} ${
                  styles.thankyouinputarrow
                } ${styles.thankyouinput} ${
                  higherQualification
                    ? styles.thankyouinputlight
                    : styles.thankyouinputdark
                }`}
                name="Highest Qualification"
                id="Highest Qualification"
                required
              >
                <option value="" disabled selected>
                  Academic Stream
                </option>
                {thankyoupage.thankyoupage.highestQualification.map((item) => {
                  return (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="enquire_box_space">
            <div className="form-inpt-contnr">
              <select
                onChange={(e) => setJobFunction(e.target.value)}
                value={jobFunction}
                className={`${styles.form_input} ${styles.thankyouinput} ${
                  styles.thankyouinputarrow
                } ${styles.thankyouinput} ${
                  jobFunction
                    ? styles.thankyouinputlight
                    : styles.thankyouinputdark
                }`}
                name="Job Function"
                id="Job Function"
                required
              >
                <option value="" disabled selected>
                  Job Function
                </option>
                {thankyoupage.thankyoupage.JobFunction.map((item) => {
                  return (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="enquire_box_space">
            <div className="form-inpt-contnr">
              <select
                onChange={(e) => setPreferedbatch(e.target.value)}
                value={preferedbatch}
                className={`${styles.form_input} ${styles.thankyouinput} ${
                  styles.thankyouinputarrow
                } ${styles.thankyouinput} ${
                  preferedbatch
                    ? styles.thankyouinputlight
                    : styles.thankyouinputdark
                }`}
                name="Preferd Batch"
                id="Preferd Batch"
                required
              >
                <option value="" disabled selected>
                  Preferred Batch
                </option>
                {thankyoupage.thankyoupage.PreferredBatch.map((item) => {
                  return (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="enquire_box_space">
            <div className="form-inpt-contnr">
              <input
                type="text"
                value={linkedin}
                className={`${styles.form_input} ${styles.thankyouinput} ${styles.thankyouinput}`}
                placeholder="LinkedIn URL (Optional)"
                id="Linkedin"
                onChange={(e) => setLinkedin(e.target.value)}
                name="Linkedin"
                maxLength={320}
              />
            </div>
          </div>
          <div className="enquire_box_space">
            <div className="form-inpt-contnr">
              <select
                onChange={(e) => setProfessionalExp(e.target.value)}
                value={professionalExp}
                className={`${styles.form_input} ${styles.thankyouinput} ${
                  styles.thankyouinputarrow
                } ${
                  professionalExp
                    ? styles.thankyouinputlight
                    : styles.thankyouinputdark
                }`}
                name="Professiona Experience"
                id="professionalExp"
                required
              >
                <option value="" disabled selected>
                  Professional Experience (No. of years)
                </option>
                {thankyoupage.thankyoupage.ProfessionalExperience.map(
                  (item) => {
                    return (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    )
                  }
                )}
              </select>
            </div>
          </div>
          <div className="enquire_box_space">
            <div className="form-inpt-contnr">
              <select
                onChange={(e) => setCallingtime(e.target.value)}
                value={callingtime}
                className={`${styles.form_input} ${styles.thankyouinput} ${
                  styles.thankyouinputarrow
                } ${
                  callingtime
                    ? styles.thankyouinputlight
                    : styles.thankyouinputdark
                }`}
                name="Best Time To Call"
                id="callingtime"
                required
              >
                <option value="" disabled selected>
                  Best Time To Call
                </option>
                {thankyoupage.thankyoupage.BestTimeToCall.map((item) => {
                  return (
                    <option key={item.value} value={item.value}>
                      {item.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>

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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="submit"
              className={styles.thanksubmitbtn}
              id="request-otp-button"
              style={{}}
            >
              Submit Your Enquiry
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
      <div className={styles.bottomtagdiv}></div>
    </>
  )
}

export default Thankyouform
