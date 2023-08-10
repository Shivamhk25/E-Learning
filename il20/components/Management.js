import React from 'react'
import styles from '../styles/Aboutus.module.css'

function Management(props) {
  return (
    <>
      <div className={`${styles.row_mng} ${styles.aboutswipermobile}`}>
        <div className={styles.advisory_carousal_mainn}>
          <div className={styles.advisory_carousall}>
            <div>
              <div style={{ height: '136px' }}>
                <img
                  src={props.img}
                  alt="suresh"
                  style={{
                    position: 'relative',
                    top: '-50px',
                    left: '25%',
                    borderRadius: '50%',
                  }}
                  height="120px"
                  width="120px"
                />
              </div>
              <div className={styles.advisory_bottomm}>
                <h1>{props.name}</h1>
                <p>{props.designation}</p>
              </div>
              <div
                style={{
                  height: '136px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <a href={props.href}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/aboutus/Group(4).svg"
                    alt="Nikhil-Barshikar 1"
                    style={{
                      position: 'relative',
                      top: '72px',
                      borderRadius: '50%',
                    }}
                    height="40px"
                    width="40px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Management
