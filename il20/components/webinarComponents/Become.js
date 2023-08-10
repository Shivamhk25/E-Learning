import React from 'react'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles from '../../styles/webinar-page.module.css'
import Image from 'next/image'

export default function Become({ data, setFormModal }) {
  const toggleModal = () => {
    setFormModal((prevState) => !prevState)
  }
  return (
    <div
      className={styles.MainDivOuter}
      style={{
        backgroundColor: 'white',
      }}
    >
      <div
        className={styles.aboutcontainerdiv4}
        style={{ background: 'rgba(65, 64, 66, 0.05)' }}
      >
        <div className={styles.beocomecontainerdiv2}>
          <div className={styles.beocomecontainerdiv2Main}>
            <h2 className={styles.aboutHeader}>{data.heading}</h2>
          </div>
          <div className={styles.becomeMainIcon}>
            {data.Description.map((data) => {
              return (
                <div className={styles.becomeMain}>
                  <Image
                    src={'/webinar_page/tick%20(1).webp'}
                    height="24"
                    width="24"
                    layout="fixed"
                  />
                  <p className={styles.becomepara}>{data.point}</p>
                </div>
              )
            })}
          </div>
          <div className={styles.aboutEnquire1}>
            <button
              onClick={toggleModal}
              className={styles.partnerbutton1}
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
        <div className={styles.becomeImageWeb}>
          <div className={styles.becomeImageDiv}>
            <img src={data.image.imageWeb} layout="fill"></img>
          </div>
        </div>
        <div className={styles.becomeImageTab}>
          <div className={styles.becomeImageDiv}>
            <img src={data.image.imageTab} layout="fill"></img>
          </div>
        </div>
        <div className={styles.aboutImageMobile}>
          <div className={styles.becomeImageDiv}>
            <img
              src={data.image.imageMobile}
              style={{ width: '100%', height: '100%' }}
              layout="fill"
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}
