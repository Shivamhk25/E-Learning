import styles from '../../styles/authorised-admission-partner.module.css'
import EnquireForm2 from '../Forms/EmbedableGenericForm-Nm-Em-Con-Loc'
import dataArr from '../../json/program.json'
export default function Header({ toggleModal }) {
  return (
    <>
      <div className={styles.section1}>
        <div style={{ maxWidth: '1450px', margin: '0 auto' }}>
          <div className={styles.row_sec1}>
            <div className={styles.column_sec1}>
              <div className={styles.heading}>
                <h1>{dataArr.Acp_page.section1.heading}</h1>
              </div>
            </div>
            <div className={styles.column_sec1}>
              <div className={styles.bannerCard}>
                <EnquireForm2
                  toggleModal={toggleModal}
                  courseName={''}
                  subject={'ACP Lead'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
