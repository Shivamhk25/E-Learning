import React from 'react'
import styles from '../../styles/contact.module.css'
import EmbedableForm6 from '../Forms/EmbedableForm6-Nm-Em-Con-Loc-AoI'
import { GetProgramsAsPerTagName } from '../../services/helper'

function Header({ propsdata }) {
  return (
    <>
      <div className={styles.headermaincontainer}>
        <div className={styles.headertextbox}>
          <h1 className={styles.headerheading}>CONTACT US</h1>
          <p className={styles.headerdescription}>
            Suggestions, questions or comments? Reach out to us. We’d be happy
            to help.
          </p>
        </div>
        <div className={styles.headerformcomponent}>
          <EmbedableForm6
            propsdata={GetProgramsAsPerTagName(
              propsdata,
              'Active LeadGen Programs'
            )}
          />
        </div>
      </div>
      <div className={styles.secondheadermaincomp}>
        <div className={styles.secondheadermainsecond}>
          <h1 className={styles.secondkeeptouch}>Keep In Touch</h1>
          <h1 className={styles.secondheadq}>Headquaters</h1>
          <p className={styles.secondadderess}>
            Imarticus Learning, 5th Floor, B-Wing, Kaledonia, HDIL Building,
            Sahar <br /> Rd. Andheri East, Mumbai, Maharashtra- 400069.
          </p>
          <h1 className={styles.secondemail}>Email Us</h1>
          <p className={styles.secondcontactmail}>info@imarticus.com</p>
          <div className={styles.secondsocialicon}>
            <a
              href="https://www.facebook.com/ImarticusLearning/"
              target="_blank"
            >
              <img
                style={{
                  cursor: 'pointer',
                }}
                alt="Facebook Social Link"
                src="https://cdn.pegasus.imarticus.org/imarticus_2/fblogo.svg"
                width="30px"
                height="30px"
                layout="fixed"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/imarticuslearning/mycompany/"
              target="_blank"
            >
              <img
                alt="linkedin Social Link"
                src="https://cdn.pegasus.imarticus.org/imarticus_2/linkedinlogo.svg"
                width="30px"
                height="30px"
                layout="fixed"
                style={{ cursor: 'pointer' }}
              />
            </a>
            <a href="https://www.instagram.com/imarticus/" target="_blank">
              <img
                style={{ cursor: 'pointer' }}
                alt="Instagram Social Link"
                src="https://cdn.pegasus.imarticus.org/imarticus_2/instalogo.svg"
                width="30px"
                height="30px"
                layout="fixed"
              />
            </a>
            <a href="https://twitter.com/imarticus/" target="_blank">
              <img
                alt="twitter Social Link"
                src="https://cdn.pegasus.imarticus.org/imarticus_2/twitterlogo.svg"
                width="30px"
                height="30px"
                layout="fixed"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
