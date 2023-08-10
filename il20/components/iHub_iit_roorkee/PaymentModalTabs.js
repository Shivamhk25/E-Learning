import { Tabs, Tab } from 'react-bootstrap'
import styles from '../../styles/pgB&F.module.css'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'

const PaymentModalTabs = ({ toggleModal }) => {
  return (
    <div className={`industry-project-popup-ctnr ${styles1.modalParent}`}>
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
              title="EMI Plans"
              style={{}}
            >
              <div style={{ padding: '0px 10px' }}>
                <PaymentSchedule />
              </div>
            </Tab>
            <Tab
              className={styles.nav_item2}
              eventKey="paymentsched"
              title="Instalment Plans"
            >
              <div style={{ padding: '0 10px' }}>
                <ProgramFeeStructure />
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
      {/* <p className={styles.admissionFeesText}>
        Admission Fees: ₹ 1,00,000 + GST
      </p>
      <p className={styles.admissionFeesText}>
        Amount with GST: ₹ 1,18,000
      </p>
      <p className={styles.admissionFeesText}>Registration Fees: ₹ 25000 + GST</p> */}

      <table className={styles.paymentTable} style={{ marginTop: '10px' }}>
        <thead>
          <tr>
            <th
              className={styles.paymentTableHeader}
              style={{ padding: '6px' }}
            >
              Certificate Program in Data Science and Machine Learning
            </th>
            <th className={styles.paymentTableHeader}>Amount</th>
          </tr>
        </thead>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              Program fees
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td className={styles.paymentTableData}>Rs. 1,00,000 + GST</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              Registration fees
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td className={styles.paymentTableData}>Rs. 25,000 + GST</td>
          </tr>
        </tbody>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              Instalment 1 (Day 0)
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td className={styles.paymentTableData}>Rs. 40,000 + GST</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              Instalment 2 (Day 30)
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td className={styles.paymentTableData}>Rs. 35,000 + GST</td>
          </tr>
        </tbody>
        {/* <tbody>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              Instalment 3 (Day 60)
              <br />
              
            </td>
            <td className={styles.paymentTableData}>Rs. 35,000 + GST</td>
          </tr>
        </tbody> */}
      </table>
    </>
  )
}

const PaymentSchedule = () => {
  return (
    <>
      <br />

      <table className={styles.paymentTable} style={{ marginTop: '10px' }}>
        <thead>
          <tr>
            <th className={styles.paymentTableHeader}>
              Certificate Program in Data Science and Machine Learning
            </th>
            <th className={styles.paymentTableHeader}>Amount</th>
          </tr>
        </thead>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              Admission fees
              <br />
              {/* (including Rs. 2,000 + GST application fees that is
               non-refundable) */}
            </td>
            <td className={styles.paymentTableData}>Rs. 1,00,000 + GST</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              Registration fees
              <br />
              {/* (including Rs. 2,000 + GST application fees that is
               non-refundable) */}
            </td>
            <td className={styles.paymentTableData}>Rs. 25,000 + GST</td>
          </tr>
        </tbody>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              5 month (zero cost EMI)
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td className={styles.paymentTableData}>Rs. 17,700</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              6 Month EMI
              <br />
              {/* (including Rs. 2,000 + GST application fees that is
               non-refundable) */}
            </td>
            <td className={styles.paymentTableData}>Rs. 14,898</td>
          </tr>
        </tbody>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              9 Month EMI
              <br />
              {/* (including Rs. 2,000 + GST application fees that is
               non-refundable) */}
            </td>
            <td className={styles.paymentTableData}>Rs. 10,227</td>
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
          ₹ 1,00,000 + GST
        </h2>
        <h2
          className={`align-self-center ${styles.h2}`}
          align="center"
          style={{ fontSize: '24px' }}
        >
          (Pay in single go)
        </h2>
      </div>
    </>
  )
}
