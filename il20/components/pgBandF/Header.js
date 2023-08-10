import styles from '../../styles/pgB&F.module.css'

export default function Header({ toggleModal, propsdata }) {
  return (
    <>
      <div
        className={
          styles.sec_1 +
          ' ' +
          styles.onTabAndWebImg +
          ' ' +
          styles.paddingGLobalOnWeb +
          ' ' +
          styles.onSixHundredPlusScreens
        }
      >
        <div style={{ paddingTop: '8rem' }}>
          <h1
            className={styles.sec_para}
            style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
          >
            Postgraduate Program in
            <br />
            Banking and Finance
          </h1>
        </div>
        <div>
          <p className={styles.sec1_para}>
            A job guarantee program for a successful <br />
            banking and finance career.{' '}
          </p>
        </div>
        <div className={styles.sec2}></div>
        <div style={{ marginBottom: '30px' }}>
          <button
            onClick={() =>
              toggleModal({
                download: true,
                url: propsdata.brochureFileName,
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
            Apply now
          </button>
        </div>
        <div className={'row ' + styles.externalDiv}>
          <div
            className={
              'col-3 d-flex justify-content-around align-items-center ' +
              styles.border_right
            }
          >
            <div className={styles.calendar}></div>
            <p className={styles.externalDivHeader}>
              Start Date
              <span className={styles.externalDivHeaderPara}>
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
            <div className={styles.modeOfTraining}></div>
            <p className={styles.externalDivHeader}>
              Mode of Training
              <span className={styles.externalDivHeaderPara}>
                <br />
                Classroom Training
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
              For whom
              <span className={styles.externalDivHeaderPara}>
                <br />
                Recent Graduates and Professionals
              </span>
            </p>
            {/* <div className={styles.externalDivSeperator}></div> */}
          </div>
          <div
            className={
              'col-2  d-flex justify-content-center align-items-center ' +
              styles.onWebImg
            }
          >
            <div className={styles.time}></div>
            <p className={styles.externalDivHeader}>
              Duration
              <span className={styles.externalDivHeaderPara}>
                <br />4 Months
              </span>
            </p>
          </div>
          <div
            className={
              'col-3  d-flex justify-content-center align-items-center ' +
              styles.onTabFlexImg
            }
          >
            <div className={styles.time}></div>
            <p className={styles.externalDivHeader}>
              Duration
              <span className={styles.externalDivHeaderPara}>
                <br />4 Months
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.sec_1_mobiles + ' ' + styles.onMobileOnlyImg}>
        <div style={{ paddingTop: '5rem' }}>
          <h1
            className={styles.sec_para_mobiles}
            style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
          >
            Postgraduate
            <br />
            Program in
            <br />
            Banking and Finance
          </h1>
        </div>
        <p className={styles.sec1_para_mobiles}>
          A job guarantee program for a successful banking and finance career.{' '}
        </p>
        <div
          style={{
            marginTop: '300px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div className={styles.sec2}></div>
        </div>
        <div
          className={styles.buttonGroup_mobiles}
          style={{ marginBottom: '30px' }}
        >
          <button
            onClick={() =>
              toggleModal({
                download: true,
                url: propsdata.brochureFileName,
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
            Apply now
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
                    {propsdata.startDate}
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
                    Classroom Training
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
                  For whom
                  <span
                    className={styles.externalDivHeaderPara}
                    style={{ fontSize: '18px' }}
                  >
                    <br />
                    Recent Graduates <br />
                    and Professionals
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
                    <br />4 Months
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
