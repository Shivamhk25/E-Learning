import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layoutnext'
import styles from '../../styles/refund-policy.module.css'
import { configs } from '../../constants'

const Refund_Policy = (props) => {
  return (
    <>
      <Layout propsdata={props.propsdata.allData}>
        <Head>
          <title>Imarticus Learning’s Refund Policy | Imarticus Learning</title>
          <meta
            name="description"
            content="Read Imarticus’ refund policy to understand the processes and eligibility to apply for a refund."
          />
          <meta name="keywords" content="Imarticus Learning, Refund Policy" />
          <meta
            property="og:title"
            content="Imarticus Learning’s Refund Policy | Imarticus Learning"
          />
          <meta
            property="og:description"
            content="Read Imarticus’ refund policy to understand the processes and eligibility to apply for a refund."
          />
          <meta
            property="og:url"
            content="https://imarticus.org/refund-policy/"
          />
          <meta
            property="og:image"
            content="https://cdn.pegasus.imarticus.org/imarticus_2/FACEBOOK-open-graph.jpg"
          />
          <meta property="product:brand" content="Imarticus Learning" />
          <link rel="canonical" href="https://imarticus.org/refund-policy/" />
          <link
            rel="icon"
            href="https://cdn.pegasus.imarticus.org/imarticus_2/favicon4.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <div className={styles.main_container}>
          <div>
            <h1 className={styles.main_heading}>Imarticus Refund Policy</h1>
            <p className={styles.main_para} style={{ marginTop: '16px' }}>
              Imarticus refund policy (“Refund Policy”) is designed to be fair
              and equitable to all. The Refund Policy is communicated to
              participants prior to enrolling in a course via the Imarticus’
              website, and once enrolled in a course or program, through our
              Learning Management System (Pegasus).
            </p>
            <p className={styles.main_para} style={{ marginTop: '8px' }}>
              To request a refund for a course, participants must adhere to the
              Refund Policy and procedures for such request as described below.
            </p>
          </div>
          <div className={styles.main_container_div}>
            <h1 className={styles.main_heading1}>1. Refund Process</h1>
            <p className={styles.main_para}>
              To request a refund for a course, the participant submits the
              request to withdraw from the course to Imarticus along with any
              required documents. Imarticus reviews the request to approve or
              reject the refund request based on its eligibility defined in
              Section 3. Imarticus informs the participant about the refund
              decision, amount and timeline.
            </p>
          </div>
          <div className={styles.main_container_div}>
            <h1 className={styles.main_heading1}>
              2. Refundable and non-refundable fees
            </h1>
            <p className={styles.main_para}>
              Imarticus Course fees for all courses includes two components:
            </p>
            <ul style={{ marginTop: '6px' }}>
              <li className={styles.main_para}>Refundable fees</li>
              <li className={styles.main_para}>Non-refundable fees</li>
              <p
                className={styles.main_para}
                style={{ marginTop: '6px', marginLeft: '-32px' }}
              >
                Non-refundable fees include Application fees, Registration fees
                and Administration fees.
              </p>
              <p
                className={styles.main_para}
                style={{ marginTop: '6px', marginLeft: '16px' }}
              >
                Non-refundable fees = Registration fees + Application fees (if
                applicable) + Administration fees
              </p>
              <p
                className={styles.main_para}
                style={{ marginTop: '6px', marginLeft: '-32px' }}
              >
                While Registration fees and Application fees vary from course to
                course, the Administration fees are fixed for every course at
                INR 5,000.
              </p>
              <p
                className={styles.main_para}
                style={{ marginTop: '6px', marginLeft: '16px' }}
              >
                Non-refundable fees = Registration fees + Application fees (if
                applicable) + INR 5,000
              </p>
              <p
                className={styles.main_para}
                style={{ marginTop: '6px', marginLeft: '-32px' }}
              >
                The remaining fee (Course fees – Non-refundable fees) is
                considered as Refundable fees.
              </p>
            </ul>
          </div>
          <div className={styles.main_container_div}>
            <h1 className={styles.main_heading1}>3. Refund Eligibility</h1>
            <p className={styles.main_para}>
              The course participant can raise a refund request for one (or
              more) the following reasons if the participant decides not to
              pursue the course further.
            </p>
            <ul style={{ marginTop: '6px' }}>
              <li className={styles.main_para}>
                If the course does not commence within 45 days of the stated
                course commencement date and the participant decides not to
                pursue the course, the participant should raise the refund
                request before the actual course commencement date. The
                participants will be eligible for 100% refund of Refundable fees
                as mentioned in Section 2. If the refund request is raised after
                the actual course commencement date, the participant will not be
                eligible for refund.
              </li>
              <li className={styles.main_para}>
                If Imarticus terminates the course before the course completion
                date, all participants will be eligible for 100% refund of full
                Course fees as mentioned in Section 2.
              </li>
              <li className={styles.main_para}>
                No refund or credit to the participants once the course has
                commenced.
              </li>
            </ul>
          </div>
          <div className={styles.main_container_div}>
            <h1 className={styles.main_heading1}>4. Refund Timeline</h1>
            <p className={styles.main_para}>
              Refunds of course fees, if applicable, will be paid to
              participants within twenty one (21) days from the date that
              Imarticus receives the participant’s written notice of withdrawal
              with complete documentation.
            </p>
          </div>
          <div>
            <h1 className={styles.main_heading1}>Important Points</h1>
            <ul style={{ marginTop: '6px' }}>
              <li className={styles.main_para}>
                Refunds will be paid directly to the participant only.
              </li>
              <li className={styles.main_para}>
                Imarticus reserves the right, in its sole discretion, to dismiss
                a participant from a course at any time and provide a refund to
                the participant pursuant to the stated refund policy above.
                Participants who are dismissed from a course due to a violation
                of Imartius’ Code of Conduct are not entitled to any refund.
              </li>
              <li className={styles.main_para}>
                Imarticus reserves the right to revise the terms & conditions of
                this policy without any prior notice.
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Refund_Policy

export async function getStaticProps() {
  const res = await fetch(
    `${configs.MARKETING_ENDPOINT}/marketingopspanelpublic/get_all_fields_website`,
    {
      headers: {
        skey: configs.skey,
      },
    }
  )
  // console.log(res, "res");
  const data = await res.json()
  return {
    props: {
      propsdata: data.data,
    },
  }
}
