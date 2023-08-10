import React from 'react'
import styles from '../styles/Aboutus.module.css'

function Organization(props) {
  return (
    <>
      <div className={styles.row_mng}>
        <div className={styles.advisory_carousal_mainn}>
          <div>
            <div style={{ height: '136px' }}>
              <img src={props.img} alt="suresh" height="150px" width="160px" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Organization
