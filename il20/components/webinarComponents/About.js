import React, { useState } from 'react'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles from '../../styles/webinar-page.module.css'
import Modal from '../../components/UI/Modal/Modal'

export default function About({ data, setFormModal }) {
  const [become, setBecome] = useState(false)

  const toggleModal = () => {
    setFormModal((prevState) => !prevState)
  }
  return (
    <>
      {become && (
        <Modal toggleModal={become}>
          <div className={styles.BecomePopMain}>
            <div style={{ backgroundColor: '#097273', borderRadius: '8px' }}>
              <div
                onClick={() => {
                  setBecome(false)
                }}
                style={{ float: 'right', padding: '8px 16px 0 0' }}
                className={styles.cross}
              >
                <img
                  alt="close"
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/close.svg"
                />
              </div>
              <div className={styles.becomePop}>
                <p className={styles.aboutparaPop}> {data.content}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <div
        className={styles.MainDivOuter}
        style={{
          backgroundColor: 'white',
        }}
      >
        <div className={styles.aboutcontainerdiv1}>
          <div className={styles.aboutcontainerdiv2}>
            <h2 className={styles.aboutHeader}>{data.heading}</h2>
            <p className={styles.aboutpara}>
              {data.content.substring(0, 610)}{' '}
              <span
                onClick={() => {
                  setBecome(true)
                }}
                className={styles.viewMore}
                style={{
                  color: '#0B8ADE',
                  fontWeight: 700,
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
              >
                {data.content.length <= 610 ? '' : '...View More'}
              </span>
            </p>
            <p className={styles.aboutparaMobile}>{data.content}</p>
            <div
              className={styles.aboutEnquireNew}
              style={{ marginBottom: '0px' }}
            >
              <button
                onClick={toggleModal}
                className={styles.partnerbutton}
                style={{ background: '#035642' }}
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
          <div className={styles.aboutImageWeb}>
            <div className={styles.aboutImageDiv}>
              <div>
                <img
                  src={data.image.imageWeb}
                  style={{
                    borderRadius: '150px 0px 0px 150px',
                    position: 'absolute',
                    right: '56px',
                  }}
                ></img>
              </div>
              <div className={styles.aboutImageDivSec1}>
                <div className={styles.aboutImageDivSec}></div>
              </div>
            </div>
          </div>
          <div className={styles.aboutImageTab}>
            <div className={styles.aboutImageDiv}>
              <img src={data.image.imageTab} layout="fill"></img>
            </div>
          </div>
          <div className={styles.aboutImageMobile}>
            <div className={styles.aboutImageDiv}>
              <img
                src={data.image.imageMobile}
                style={{ width: '100%', height: '100%' }}
                layout="fill"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
