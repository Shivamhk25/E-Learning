import styles from '../../styles/pgB&F.module.css'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles2 from '../../styles/financial-services-capital-markets-management-program-iim-indore.module.css'
import style from '../../styles/iit_roorkee_dm.module.css'
import Image from 'next/image'

export default function Header({ toggleModal, propsdata }) {
  return (
    <>
      <div className={style.sec_1 + ' ' + styles1.onTabAndWebImg}>
        <div className={style.sec_main_1_sec}>
          <div className={style.sec_main_1}>
            <div className={styles2.MainHead}>
              <div className={styles2.headericon}>
                <div>
                  <img
                    src="https://cdn.pegasus.imarticus.org/iit_roorkee_dm/Asset1.png"
                    style={{
                      width: '284px',
                      objectFit: 'contain',
                      height: '70px',
                    }}
                  ></img>
                </div>
              </div>
              <div className={style.courseName}>
                <div className={style.courseNameWeb}>
                  <h1 className={style.sec_para} style={{ width: '100%' }}>
                    Advanced Certification In Digital Marketing
                  </h1>
                  <h1
                    className={style.sec_para}
                    style={{ width: '100%', marginTop: '-4px' }}
                  >
                    And MarTech By IIT Roorkee
                  </h1>
                </div>
                <div className={style.courseNameMobile}>
                  <h1 className={style.sec_para} style={{ width: '100%' }}>
                    Advanced Certification In Digital Marketing And
                  </h1>
                  <h1
                    className={style.sec_para}
                    style={{ width: '100%', marginTop: '-4px' }}
                  >
                    MarTech By IIT Roorkee
                  </h1>
                </div>

                <h2 className={style.sec1_para}>
                  Excel in Digital Marketing and MarTech
                </h2>
              </div>
            </div>
            <div className={style.headerImage}>
              <Image
                src="iit_roorkee_dm/iitr.webp"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <p className={style.sec1_para2}>
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
              style={{ border: '2px solid #FFFFFF', background: 'none' }}
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
          <div className={style.border_right}>
            <div className={style.modeOfTraining}></div>
            <p className={style.externalDivHeader} style={{ width: '60%' }}>
              Mode of Training
              <span className={style.externalDivHeaderPara}>
                <br />
                Live Online Training
              </span>
            </p>
            {/* <div className={styles.externalDivSeperator}></div> */}
          </div>
          <div className={style.border_right}>
            <div className={style.students}></div>
            <p className={style.externalDivHeader} style={{ width: '48%' }}>
              Class Schedule
              <span className={style.externalDivHeaderPara}>
                <br />
                Saturday and Sunday
              </span>
            </p>
            {/* <div className={styles.externalDivSeperator}></div> */}
          </div>
          <div className={style.border_right} style={{ borderRight: 'none' }}>
            <div className={style.time}></div>
            <p className={style.externalDivHeader} style={{ width: '37%' }}>
              Duration
              <span className={style.externalDivHeaderPara}>
                <br />
                4.5 months
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={style.sec_1_mobiles + ' ' + styles.onMobileOnlyImg}>
        <div>
          <div className={styles2.sec_main_1}>
            <div>
              <div className={styles2.headericon}>
                <div>
                  <img
                    src="https://cdn.pegasus.imarticus.org/iit_roorkee_dm/Asset1.png"
                    style={{
                      width: '284px',
                      objectFit: 'contain',
                      height: '70px',
                    }}
                  ></img>
                </div>
              </div>
              <div className={style.courseName}>
                <h1
                  className={style.sec_para}
                  style={{ width: '100%', color: 'white' }}
                >
                  Advanced Certification in digital marketing and marTech by IIT
                  roorkee
                </h1>
                <h2 className={style.sec1_para}>
                  Excel in Digital Marketing and MarTech
                </h2>
              </div>
            </div>
            <div className={style.headerImage}>
              <img
                src="https://cdn.pegasus.imarticus.org/iit_roorkee_dm/iitr.webp"
                style={{ objectfit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
        <div style={{ color: 'white' }}>
          <p className={style.sec1_para2}>
            Application Deadline: {propsdata.applicationDeadline}
          </p>
          <div
            className={styles2.buttonGroup_mobiles}
            style={{ marginTop: '24px' }}
          >
            <button
              onClick={() =>
                toggleModal({
                  download: true,
                  url: propsdata.brochureFileName,
                })
              }
              className={styles2.sec1_buttons}
              style={{ border: '2px solid #FFFFFF', background: 'none' }}
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
        style={{ padding: '14px 20px 16px 20px' }}
      >
        <table>
          <tbody>
            <tr>
              <td
                style={{
                  borderBottom: '1px solid rgba(60, 72, 82, 0.25)',
                  borderRight: '1px solid rgba(60, 72, 82, 0.25)',
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
                    fontWeight: '400',
                    lineHeight: '22px',
                  }}
                >
                  Start Date
                  <span
                    className={styles.externalDivHeaderPara}
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      lineHeight: '24px',
                    }}
                  >
                    <br />
                    {propsdata.startDate}
                  </span>
                </p>
              </td>
              <td style={{ borderBottom: '1px solid rgba(60, 72, 82, 0.25)' }}>
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
                    fontWeight: '400',
                    lineHeight: '22px',
                  }}
                >
                  Mode of Training
                  <span
                    className={styles.externalDivHeaderPara}
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      lineHeight: '24px',
                    }}
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
                  borderRight: '1px solid rgba(60, 72, 82, 0.25)',
                  verticalAlign: 'bottom',
                  height: '0px',
                }}
              >
                <div
                  className={styles.students}
                  style={{
                    height: '50px',
                    width: '100%',
                    marginLeft: '5%',
                    marginTop: '15px',
                  }}
                ></div>
                <p
                  className={styles.externalDivHeader}
                  style={{
                    fontSize: '16px',
                    textAlign: 'center',
                    width: '100%',
                    fontWeight: '400',
                    lineHeight: '22px',
                  }}
                >
                  Class Schedule
                  <span
                    className={styles.externalDivHeaderPara}
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      lineHeight: '24px',
                    }}
                  >
                    <br />
                    Saturday and
                    <br />
                    Sunday
                  </span>
                </p>
              </td>
              <td style={{ verticalAlign: 'inherit', height: '0px' }}>
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
                    fontWeight: '400',
                    lineHeight: '22px',
                  }}
                >
                  Duration
                  <span
                    className={styles.externalDivHeaderPara}
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      lineHeight: '24px',
                    }}
                  >
                    <br />
                    4.5 Months
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
