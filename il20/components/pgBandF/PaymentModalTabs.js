import { Tabs, Tab } from 'react-bootstrap'
import styles from '../../styles/pgB&F.module.css'

const PaymentModalTabs = ({ toggleModal }) => {
  return (
    <div className={`industry-project-popup-ctnr ${styles.modalParent}`}>
      <div className="row">
        {/* <div className="col-lg-12"> */}
        <div>
          <Tabs
            defaultActiveKey="feestruc"
            id="uncontrolled-tab-example"
            className={`mb-3 ${styles.nav2}`}
          >
            <Tab
              className={styles.nav_item2}
              eventKey="feestruc"
              title="Program fee structure"
            >
              <div style={{ padding: '0 10px' }}>
                <ProgramFeeStructure />
              </div>
            </Tab>
            <Tab
              className={styles.nav_item2}
              eventKey="paymentsched"
              title="Payment schedule"
            >
              <div style={{ padding: '0 10px' }}>
                <PaymentSchedule />
              </div>
              {/* Payment schedule */}
            </Tab>
            <Tab
              className={styles.nav_item2}
              eventKey="fullfee"
              title="Full fee payment plan"
            >
              <div style={{ padding: '0 10px' }}>
                <TotalFeePayment />
              </div>
              {/* Full fee payment plan */}
            </Tab>
          </Tabs>
          {/* <hr />
          <button
            style={{
              float: 'right',
              background: '#035642',
              borderRadius: '8px',
              fontFamily: 'Source Sans Pro',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '24px',
              alignItems: 'center',
              textAlign: 'center',
              color: '#ffffff',
              padding: '10px',
            }}
            onClick={toggleModal}
          >
            Close
          </button> */}
          {/* </div> */}
        </div>
        <div
          style={{ position: 'absolute', right: '10px', width: 'fit-content' }}
          align="right"
          role="button"
          className="close_arrow_pointer"
          tabIndex={0}
          onClick={toggleModal}
        >
          <img
            height={15}
            width={15}
            alt="close"
            className
            src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/close.svg"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default PaymentModalTabs

const ProgramFeeStructure = () => {
  return (
    <>
      <br />
      <p className={styles.admissionFeesText}>Admission Fees: ₹ 1,20,000</p>
      <br />
      <br />
      <table className={styles.paymentTable}>
        <thead>
          <tr>
            <th className={styles.paymentTableHeader}>
              EP in Investment Banking and Capital Markets
            </th>
            <th className={styles.paymentTableHeader}>Payment</th>
          </tr>
        </thead>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles.paymentTableData}>
              Program Base Fee <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td className={styles.paymentTableData}>Rs. 1,20,000</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const PaymentSchedule = () => {
  return (
    <>
      <br />
      <p className={styles.admissionFeesText}>Admission Fees: ₹ 1,20,000</p>
      <br />
      <br />
      <table className={styles.paymentTable}>
        <thead>
          <tr>
            <th className={styles.paymentTableHeader}></th>
            <th className={styles.paymentTableHeader}>Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.paymentTableData}>
              Registration fee <br />
              {/* (including Rs. 2,000 + GST application fees that is
               non-refundable) */}
            </td>
            <td className={styles.paymentTableData}>Rs. 10,000</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const TotalFeePayment = () => {
  return (
    <>
      <div
        className="d-flex"
        style={{ height: '150px', padding: '30px', flexDirection: 'column' }}
      >
        <h4 className={`align-self-center ${styles.h4}`} align="center">
          Total Fee Payment
        </h4>
        <h2 className={`align-self-center ${styles.h2}`} align="center">
          ₹ 1,20,000
        </h2>
      </div>
    </>
  )
}
