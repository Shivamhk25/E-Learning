import styles from '../../styles/pgB&F.module.css'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles2 from '../../styles/financial-services-capital-markets-management-program-iim-indore.module.css'

export default function Header({ toggleModal, propsdata }) {
  console.log(propsdata, 'launch date data from props')
  return (
    <>
      <div className={styles2.sec_1 + ' ' + styles1.onTabAndWebImg}>
        <div className={styles2.sec_main_1_sec}>
          <div className={styles2.sec_main_1}>
            <div className={styles2.MainHead}>
              <div className={styles2.headericon}>
                <div>
                  <img
                    src="https://cdn.pegasus.imarticus.org/iim_indore/IIM Indore logo.svg"
                    style={{
                      width: '205px',
                      objectFit: 'contain',
                      height: '60px',
                    }}
                  ></img>
                </div>
              </div>
              <div className={styles2.courseName}>
                <h1 className={styles2.sec_para} style={{ width: '100%' }}>
                  Postgraduate Certificate
                </h1>
                <h1
                  className={styles2.sec_para}
                  style={{ width: '100%', marginTop: '-10px' }}
                >
                  Programme for Emerging CFOs
                </h1>
                <p className={styles1.sec1_para} style={{ color: '#3C4852' }}>
                  Master new-age financial skills with IIM Indore
                </p>
              </div>
            </div>
            {/* <div className={styles2.headerImage}>
              <img
                src="https://cdn.pegasus.imarticus.org/iim_indore/MainImage.webp"
                style={{ objectfit: 'contain', width: '98%' }}
              />
            </div> */}
          </div>
          <p className={styles2.sec1_para2}>
            Application Deadline: {propsdata.applicationDeadline}
          </p>
          <div style={{ marginTop: '16px', marginLeft: '-12px' }}>
            <button
              onClick={() =>
                toggleModal({
                  download: true,
                  url: propsdata.brochureFileName,
                })
              }
              className={styles2.sec1_buttons}
            >
              Download Brochure
            </button>
            <button
              onClick={toggleModal}
              className={styles2.sec1_buttons_applyNow}
            >
              Apply Now
            </button>
          </div>
        </div>

        <div className={'row ' + styles1.externalDiv}>
          <div
            className={
              'col-3 d-flex justify-content-center align-items-center ' +
              styles.border_right
            }
          >
            <div className={styles2.calendar}></div>
            <p
              className={styles.externalDivHeader}
              style={{ width: '50%', marginLeft: '4%' }}
            >
              Start Date
              <span className={styles2.externalDivHeaderPara}>
                <br />
                {propsdata.startDate}
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
            <div className={styles2.modeOfTraining}></div>
            <p className={styles.externalDivHeader}>
              Mode of Training
              <span className={styles2.externalDivHeaderPara}>
                <br />
                Live Online + Campus Immersion
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
            <div className={styles2.students}></div>
            <p className={styles.externalDivHeader}>
              Class Schedule
              <span className={styles2.externalDivHeaderPara}>
                <br />
                Saturday and Sunday
              </span>
            </p>
            {/* <div className={styles.externalDivSeperator}></div> */}
          </div>
          <div
            className={
              'col-2  d-flex justify-content-center align-items-center '
            }
          >
            <div className={styles2.time}></div>
            <p className={styles1.externalDivHeader}>
              Duration
              <span className={styles2.externalDivHeaderPara}>
                <br />
                12 months
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles2.sec_1_mobiles + ' ' + styles.onMobileOnlyImg}>
        <div className={styles2.sec_main_1_sec}>
          <div className={styles2.sec_main_1}>
            <div>
              <div className={styles2.headericon}>
                <div>
                  <img
                    src="https://cdn.pegasus.imarticus.org/iim_indore/IIM Indore logo.svg"
                    style={{
                      width: '205px',
                      objectFit: 'contain',
                      height: '60px',
                    }}
                  ></img>
                </div>
              </div>
              <div className={styles2.courseName}>
                <h1 className={styles2.sec_para} style={{ width: '100%' }}>
                  Postgraduate Certificate Programme for Emerging CFOs
                </h1>
                <p className={styles2.sec1_para}>
                  Master new-age financial skills with IIM Indore
                </p>
              </div>
            </div>
            {/* <div className={styles2.headerImage}>
              <img
                src="https://cdn.pegasus.imarticus.org/iim_indore/MainImage.webp"
                style={{ objectfit: 'contain', width: '100%', height: '100%' }}
              />
            </div> */}
          </div>
        </div>
        <div style={{ marginTop: '90px', marginLeft: '24px' }}>
          <p className={styles2.sec1_para2}>
            Application Deadline: {propsdata.applicationDeadline}
          </p>
          <div className={styles2.buttonGroup_mobiles}>
            <button
              onClick={() =>
                toggleModal({
                  download: true,
                  url: propsdata.brochureFileName,
                })
              }
              className={styles2.sec1_buttons}
            >
              Download Brochure
            </button>
            <button
              onClick={toggleModal}
              className={styles2.sec1_buttons_applyNow}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.fourIcons + ' ' + styles.onMobileOnlyImg}
        style={{ padding: '14px 20px 16px 20px', marginTop: '28px' }}
      >
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
                  style={{ height: '50px', width: '100%', marginLeft: '0px' }}
                ></div>
                <p
                  className={styles1.externalDivHeader}
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
                    {propsdata.startDate}
                  </span>
                </p>
              </td>
              <td style={{ borderBottom: '0.5px solid grey' }}>
                <div
                  className={styles.modeOfTraining}
                  style={{ height: '50px', width: '100%', marginLeft: '5%' }}
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
                    style={{ fontSize: '17px' }}
                  >
                    <br />
                    Live Online + Campus Immersion
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
                  style={{ height: '50px', width: '100%', marginLeft: '5%' }}
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
                    Saturday and
                    <br />
                    Sunday
                  </span>
                </p>
              </td>
              <td style={{ verticalAlign: 'inherit' }}>
                <div
                  className={styles.time}
                  style={{
                    height: '50px',
                    width: '100%',
                    marginLeft: '5%',
                    marginTop: '-13px',
                  }}
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
                    <br />
                    12 months
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
