import React from 'react'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles from '../../styles/webinar-page.module.css'

export default function Header({ data, setFormModal }) {
  const toggleModal = () => {
    setFormModal((prevState) => !prevState)
  }
  return (
    <>
      <div
        className={styles.MainDivWeb}
        style={{ backgroundImage: `url(${data.HeaderImage.imageWeb})` }}
      >
        <div className={styles.MainDiv1}>
          <h1 className={styles.MainHeader1}>
            {data.subheading ? data.subheading : ''}
          </h1>
          <div>
            <h1 className={styles.MainHeader2}>{data.heading}</h1>
          </div>
          <div className={styles.MainDiv21}>
            <h1 className={styles.MainHeader3}>
              {data.WebinarDateAndTime.split(',')[0]}
            </h1>
          </div>
          <div>
            <h1 className={styles.MainHeader3}>
              {data.WebinarDateAndTime.split(',')[1]}
            </h1>
          </div>
          <div className={styles.aboutEnquire4} style={{ marginBottom: '0px' }}>
            <button
              onClick={toggleModal}
              className={styles.partnerbutton}
              style={{ background: '#035642', border: 'none' }}
            >
              <span
                className={styles1.partnerbuttontext}
                style={{ color: 'white' }}
              >
                Register Now
              </span>
            </button>
          </div>
        </div>
        <div className={styles.MainDiv2}>
          <div className={styles.MainspeakerCard}>
            <div className={styles.MainspeakerCardDiv}>
              <h2 className={styles.MainspeakerHead}>SPEAKER</h2>
            </div>
            <div className={styles.MainspeakerCardDiv1}>
              {data.SpeakerInfo.map((data) => {
                return (
                  <div className={styles.MainspeakerCardDiv2}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                      }}
                    >
                      <img
                        src={data.image}
                        style={{ width: '90px', height: '80px' }}
                      ></img>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '16px',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '70%',
                      }}
                    >
                      <h2
                        className={styles.speakerName}
                        style={{ marginTop: '0px', marginBottom: '0px' }}
                      >
                        {data.name}
                      </h2>
                      <p
                        className={styles.speakerBackground}
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          margin: '4px 0px 0px 0px',
                          textAlign: 'start',
                        }}
                      >
                        {data.about}
                      </p>
                    </div>

                    {/* <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <div className={styles.speakerNameBorder}></div>
            </div> */}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {data.AlumniInfo.length > 0 && (
          <div className={styles.MainDiv3}>
            <h2 className={styles.MainInteractHeader}>
              Interact With Our alumni
            </h2>
          </div>
        )}
        {data.AlumniInfo.length > 0 && (
          <div className={styles.MainDiv4}>
            <div className={styles.MainDiv4Big}>
              {data.AlumniInfo.map((data) => {
                return (
                  <div className={styles.MainDiv4Small}>
                    <img
                      src={data.image}
                      width="78"
                      height="78"
                      layout="fixed"
                      objectFit="contain"
                    />
                    <h3
                      className={styles.MainspeakerHead}
                      style={{ textTransform: 'capitalize' }}
                    >
                      {data.name}
                    </h3>
                    <h3 className={styles.MainspeakerHead1}>{data.about}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
      <div
        className={styles.MainDivTab}
        style={{ backgroundImage: `url(${data.HeaderImage.imageTab})` }}
      >
        <div className={styles.MainDiv1}>
          <h1 className={styles.MainHeader1}>
            {data.subheading ? data.subheading : ''}
          </h1>
          <div>
            <h1 className={styles.MainHeader2}>{data.heading}</h1>
          </div>
          <div className={styles.MainDiv21}>
            <h1 className={styles.MainHeader3}>
              {data.WebinarDateAndTime.split(',')[0]}
            </h1>
          </div>
          <div>
            <h1 className={styles.MainHeader3}>
              {data.WebinarDateAndTime.split(',')[1]}
            </h1>
          </div>
          <div className={styles.aboutEnquire4} style={{ marginBottom: '0px' }}>
            <button
              onClick={toggleModal}
              className={styles.partnerbutton}
              style={{ background: '#035642', border: 'none' }}
            >
              <span
                className={styles1.partnerbuttontext}
                style={{ color: 'white' }}
              >
                Register Now
              </span>
            </button>
          </div>
        </div>
        <div className={styles.MainDiv2}>
          <div className={styles.MainspeakerCard}>
            <div className={styles.MainspeakerCardDiv}>
              <h2 className={styles.MainspeakerHead}>SPEAKER</h2>
            </div>
            <div className={styles.MainspeakerCardDiv1}>
              {data.SpeakerInfo.map((data) => {
                return (
                  <div className={styles.MainspeakerCardDiv2}>
                    <div>
                      <img
                        src={data.image}
                        style={{ width: '136px', height: '97px' }}
                      ></img>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '16px',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                      }}
                    >
                      <h2
                        className={styles.speakerName}
                        style={{ marginTop: '0px', marginBottom: '0px' }}
                      >
                        {data.name}
                      </h2>
                      <p
                        className={styles.speakerBackground}
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          margin: '8px 0px 0px 0px',
                          textAlign: 'start',
                        }}
                      >
                        {data.about}
                      </p>
                    </div>

                    {/* <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <div className={styles.speakerNameBorder}></div>
              </div> */}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {data.AlumniInfo.length > 1 && (
          <div className={styles.MainDiv3}>
            <h2 className={styles.MainInteractHeader}>
              Interact With Our alumni
            </h2>
          </div>
        )}
        {data.AlumniInfo.length > 1 && (
          <div className={styles.MainDiv4}>
            <div className={styles.MainDiv4Big}>
              {data.AlumniInfo.map((data) => {
                return (
                  <div className={styles.MainDiv4Small}>
                    <img
                      src={data.image}
                      width="78"
                      height="78"
                      layout="fixed"
                      objectFit="contain"
                    />
                    <h3
                      className={styles.MainspeakerHead}
                      style={{ textTransform: 'capitalize' }}
                    >
                      {data.name}
                    </h3>
                    <h3 className={styles.MainspeakerHead1}>{data.about}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
      <div
        className={styles.MainDivMobile}
        style={{ backgroundImage: `url(${data.HeaderImage.imageMobile})` }}
      >
        <div className={styles.MainDiv1}>
          <h1 className={styles.MainHeader1}>
            {data.subheading ? data.subheading : ''}
          </h1>
          <div>
            <h1 className={styles.MainHeader2}>{data.heading}</h1>
          </div>
          <div className={styles.MainDiv21}>
            <h1 className={styles.MainHeader3}>
              {data.WebinarDateAndTime.split(',')[0]}
            </h1>
          </div>
          <div>
            <h1 className={styles.MainHeader3}>
              {data.WebinarDateAndTime.split(',')[1]}
            </h1>
          </div>
          <div className={styles.aboutEnquire4} style={{ marginBottom: '0px' }}>
            <button
              onClick={toggleModal}
              className={styles.partnerbutton}
              style={{ background: '#035642', border: 'none' }}
            >
              <span
                className={styles1.partnerbuttontext}
                style={{ color: 'white' }}
              >
                Register Now
              </span>
            </button>
          </div>
        </div>
        <div className={styles.MainDiv2}>
          <div className={styles.MainspeakerCard}>
            <div className={styles.MainspeakerCardDiv}>
              <h2 className={styles.MainspeakerHead}>SPEAKER</h2>
            </div>
            <div className={styles.MainspeakerCardDiv1}>
              {data.SpeakerInfo.map((data) => {
                return (
                  <div className={styles.MainspeakerCardDiv2}>
                    <div>
                      <img
                        src={data.image}
                        style={{ width: '136px', height: '97px' }}
                      ></img>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '16px',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                      }}
                    >
                      <h2
                        className={styles.speakerName}
                        style={{ marginTop: '0px', marginBottom: '0px' }}
                      >
                        {data.name}
                      </h2>
                      <p
                        className={styles.speakerBackground}
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          margin: '8px 0px 0px 0px',
                          textAlign: 'start',
                        }}
                      >
                        {data.about}
                      </p>
                    </div>

                    {/* <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <div className={styles.speakerNameBorder}></div>
              </div> */}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {data.AlumniInfo.length > 0 && (
          <div className={styles.MainDiv3}>
            <h2 className={styles.MainInteractHeader}>
              Interact With Our alumni
            </h2>
          </div>
        )}
        {data.AlumniInfo.length > 0 && (
          <div className={styles.MainDiv4}>
            <div className={styles.MainDiv4Big}>
              {data.AlumniInfo.map((data) => {
                return (
                  <div className={styles.MainDiv4Small}>
                    <img
                      src={data.image}
                      width="78"
                      height="78"
                      layout="fixed"
                      objectFit="contain"
                    />
                    <h3
                      className={styles.MainspeakerHead}
                      style={{ textTransform: 'capitalize' }}
                    >
                      {data.name}
                    </h3>
                    <h3 className={styles.MainspeakerHead1}>{data.about}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
