import styles from '../../styles/pgB&F.module.css'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import style from '../../styles/iit_roorkee_dm.module.css'
import style2 from '../../styles/iit_roorkee_cybersecurity.module.css'

export default function Header({ toggleModal, pagedata, style }) {
  console.log(pagedata, 'dattatatatattatata')
  return (
    <>
      <div
        className={styles1.sec_1 + ' ' + styles1.onTabAndWebImg}
        style={style}
      >
        <div className={styles1.headericon}>
          <div>
            <img
              src="https://cdn.pegasus.imarticus.org/iit_roorkee/iHub_new_quality.webp"
              style={{ width: '144px', objectFit: 'contain' }}
            ></img>
          </div>
          <div style={{ marginTop: '17px', marginLeft: '20px' }}>
            <img
              src="https://cdn.pegasus.imarticus.org/iit_roorkee/DST_new_quality.webp"
              style={{ width: '170px', height: '120px', objectFit: 'contain' }}
            ></img>
          </div>
        </div>
        <div style={{ paddingTop: '3vh' }}>
          <h1 className={styles1.sec_para}>
            Certificate Program in
            <br />
            Data Science and Machine Learning
          </h1>
          <h2 className={styles1.sec_para1}>
            Created with iHUB DivyaSampark @IIT Roorkee
          </h2>
          <p className={styles1.sec1_para}>
            Make data-driven decisions using data science skills
          </p>
        </div>
        <p className={styles1.deadline}>
          Application Deadline: {pagedata.applicationDeadline}
        </p>
        <div style={{ marginBottom: '10px', marginTop: '20px' }}>
          <button
            onClick={() =>
              toggleModal({
                download: true,
                url: pagedata.brochureFileName,
              })
            }
            className={styles.sec1_buttons}
          >
            Download Brochure
          </button>
          <button
            onClick={toggleModal}
            className={styles.sec1_buttons_applyNow}
          >
            Apply Now
          </button>
        </div>
        <div className={'row ' + styles1.externalDiv}>
          <div
            className={
              'col-3 d-flex justify-content-around align-items-center ' +
              styles.border_right
            }
          >
            <div className={styles1.calendar}></div>
            <p className={styles.externalDivHeader}>
              Start Date
              <span className={styles.externalDivHeaderPara}>
                <br />
                {pagedata.startDate}
              </span>
            </p>
            {/* <div className={styles.externalDivSeperator}></div> */}
          </div>
          <div
            className={
              'col-3 d-flex justify-content-center align-items-center ' +
              styles.border_right
            }
          >
            <div className={styles.modeOfTraining}></div>
            <p className={styles.externalDivHeader}>
              Mode of Training
              <span className={styles.externalDivHeaderPara}>
                <br />
                Live Online Training
              </span>
            </p>
            {/* <div className={styles.externalDivSeperator}></div> */}
          </div>
          <div
            className={
              'col-3 d-flex justify-content-center align-items-center ' +
              styles.border_right
            }
          >
            <div className={styles.students}></div>
            <p className={styles.externalDivHeader}>
              Class Schedule
              <span className={styles.externalDivHeaderPara}>
                <br />
                Saturday & Sunday
              </span>
            </p>
            {/* <div className={styles.externalDivSeperator}></div> */}
          </div>
          <div
            className={
              'col-3  d-flex justify-content-center align-items-center '
            }
          >
            <div className={styles1.time}></div>
            <p className={styles1.externalDivHeader}>
              Duration
              <span className={styles.externalDivHeaderPara}>
                <br />5 Months
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles1.sec_1_mobiles + ' ' + styles.onMobileOnlyImg}>
        <div>
          <div className={styles1.headericon}>
            <div style={{ marginTop: '10px' }}>
              <img
                src="https://cdn.pegasus.imarticus.org/iit_roorkee/iHub_new_quality.webp"
                style={{ objectFit: 'contain', width: '144px' }}
              ></img>
            </div>
            <div style={{ marginTop: '30px', marginLeft: '20px' }}>
              <img
                src="https://cdn.pegasus.imarticus.org/iit_roorkee/DST_new_quality.webp"
                style={{ objectFit: 'contain', height: '110px' }}
              ></img>
            </div>
          </div>

          <h1
            className={styles.sec_para_mobiles}
            style={{
              fontWeight: 'bold',
              marginTop: '12px',
              fontSize: '28px',
              lineHeight: '34px',
            }}
          >
            Certificate Program in
            <br />
            Data Science and Machine
            <br />
            Learning
          </h1>
          <h2
            className={styles1.sec_para1}
            style={{ marginLeft: '10px', fontSize: '20px', lineHeight: '28px' }}
          >
            Created with iHUB Divyasampark @IIT Roorkee
          </h2>
          <p className={styles.sec1_para_mobiles}>
            Make data-driven decisions using data science skills
          </p>
        </div>
        <div className={styles1.buttonGroup_mobiles}>
          <p className={styles1.deadline}>
            Application Deadline: {pagedata.applicationDeadline}
          </p>
          <button
            onClick={() =>
              toggleModal({
                download: true,
                url: pagedata.brochureFileName,
              })
            }
            className={styles.sec1_buttons}
          >
            Download Brochure
          </button>
          <button
            onClick={toggleModal}
            className={styles.sec1_buttons_applyNow}
          >
            Apply Now
          </button>
        </div>
      </div>
      <div className={styles.fourIcons + ' ' + styles.onMobileOnlyImg}>
        <table>
          <tbody>
            <tr>
              <td
                style={{
                  borderBottom: '0.5px solid grey',
                  borderRight: '0.5px solid grey',
                  width: '49%',
                }}
              >
                <div
                  className={styles.calendar}
                  style={{ height: '50px', width: '100%' }}
                ></div>
                <p
                  className={styles.externalDivHeader}
                  style={{
                    fontSize: '16px',
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  Start Date
                  <span
                    className={styles.externalDivHeaderPara}
                    style={{ fontSize: '18px' }}
                  >
                    <br />
                    {pagedata.startDate}
                  </span>
                </p>
              </td>
              <td style={{ borderBottom: '0.5px solid grey' }}>
                <div
                  className={styles.modeOfTraining}
                  style={{ height: '50px', width: '100%' }}
                ></div>
                <p
                  className={styles.externalDivHeader}
                  style={{
                    fontSize: '16px',
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  Mode of Training
                  <span
                    className={styles.externalDivHeaderPara}
                    style={{ fontSize: '18px' }}
                  >
                    <br />
                    Live Online Training
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  borderRight: '0.5px solid grey',
                  verticalAlign: 'bottom',
                }}
              >
                <div
                  className={styles.students}
                  style={{ height: '50px', width: '100%' }}
                ></div>
                <p
                  className={styles.externalDivHeader}
                  style={{
                    fontSize: '16px',
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  Class Schedule
                  <span
                    className={styles.externalDivHeaderPara}
                    style={{ fontSize: '18px' }}
                  >
                    <br />
                    Saturday & <br />
                    Sunday
                  </span>
                </p>
              </td>
              <td style={{ verticalAlign: 'inherit' }}>
                <div
                  className={styles.time}
                  style={{ height: '50px', width: '100%' }}
                ></div>
                <p
                  className={styles.externalDivHeader}
                  style={{
                    fontSize: '16px',
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  Duration
                  <span
                    className={styles.externalDivHeaderPara}
                    style={{ fontSize: '18px' }}
                  >
                    <br />5 Months
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
