import { Tabs, Tab } from 'react-bootstrap'
import styles from '../../styles/pgB&F.module.css'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles2 from '../../styles/financial-services-capital-markets-management-program-iim-indore.module.css'
const PaymentModalTabs = ({ toggleModal }) => {
  return (
    <div className={`industry-project-popup-ctnr ${styles2.modalParent}`}>
      <div className="row">
        {/* <div className="col-lg-12"> */}
        <div
          style={{
            position: 'absolute',
            right: '-2px',
            top: '10px',
            width: 'fit-content',
          }}
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
        <div style={{ width: '100%' }}>
          <Tabs
            defaultActiveKey="feestruc"
            id="uncontrolled-tab-example"
            className={`mb-3 ${styles.nav2}`}
            style={{ borderRadius: '8px' }}
          >
            <Tab
              className={styles.nav_item2}
              eventKey="feestruc"
              title="Program Fee Structure"
              style={{ borderRadius: '8px' }}
            >
              <div style={{ borderRadius: '8px' }} className={styles2.tablePad}>
                <PaymentSchedule />
              </div>
            </Tab>
            <Tab
              className={styles.nav_item2}
              eventKey="paymentsched"
              title="Payment Schedule"
            >
              <div className={styles2.tablePad}>
                <ProgramFeeStructure />
              </div>
              {/* Payment schedule */}
            </Tab>
            <Tab
              className={styles.nav_item2}
              eventKey="fullfee"
              title="Full Fee Payment Plan"
            >
              <div className={styles2.tablePad}>
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
      </div>
    </div>
  )
}

export default PaymentModalTabs

const ProgramFeeStructure = () => {
  return (
    <>
      {/* <p className={styles.admissionFeesText}>
        Admission Fees: ₹ 1,00,000 + GST
      </p>
      <p className={styles.admissionFeesText}>
        Amount with GST: ₹ 1,18,000
      </p>
      <p className={styles.admissionFeesText}>Registration Fees: ₹ 25000 + GST</p> */}
      {/* <p className={styles2.paymentHeader}>Application Fees: ₹ 3,000</p>
      <p className={styles2.paymentHeader} style={{ marginTop: '8px' }}>
        Programme Fees: ₹ 3,70,000
      </p>
      <p className={styles2.paymentHeader} style={{ marginTop: '8px' }}>
        Registration Fees: ₹ 10,000
      </p> */}
      <table className={styles.paymentTable} style={{ marginTop: '14px' }}>
        <thead>
          <tr>
            <th
              className={styles2.paymentTableData}
              style={{ fontWeight: '600' }}
            >
              Postgraduate Certificate Programme for Emerging CFOs
            </th>
            <th
              className={styles2.paymentTableData}
              style={{ fontWeight: '600' }}
            >
              Payment
            </th>
          </tr>
        </thead>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles2.paymentTableData}>
              Registration fee (including Rs. 3,000 + GST non-refundable
              application fee)
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td
              className={styles2.paymentTableData}
              style={{ fontWeight: '600', padding: '6px 16px' }}
            >
              Rs. 43,000 + GST
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td className={styles2.paymentTableData}>
              1st Instalment (within 2 weeks)
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td
              className={styles2.paymentTableData}
              style={{ fontWeight: '600', padding: '6px 16px' }}
            >
              Rs. 85,000 + GST
            </td>
          </tr>
        </tbody>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles2.paymentTableData}>
              2nd Instalment (by 10th November 2022)
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td
              className={styles2.paymentTableData}
              style={{ fontWeight: '600', padding: '6px 16px' }}
            >
              Rs. 1,00,000 + GST
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={styles2.paymentTableData} style={{ width: '75%' }}>
              3rd Instalment (by 10th January 2023)
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td
              className={styles2.paymentTableData}
              style={{ fontWeight: '600', padding: '6px 16px', width: '25%' }}
            >
              Rs. 1,00,000 + GST
            </td>
          </tr>
        </tbody>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles2.paymentTableData}>
              4th Instalment (by 10th March 2023)
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td
              className={styles2.paymentTableData}
              style={{ fontWeight: '600', padding: '6px 16px' }}
            >
              Rs. 45,000 + GST
            </td>
          </tr>
        </tbody>
        {/* <tbody>
          <tr>
            <td className={styles2.paymentTableData}>
              Instalment 5 (May 5th, 2023)
              <br />
            </td>
            <td
              className={styles2.paymentTableData}
              style={{ fontWeight: '600', padding: '6px 16px' }}
            >
              Rs. 10,000 + GST
            </td>
          </tr>
        </tbody> */}
        {/* <tbody>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              Installment 3 (Day 60)
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
            <th
              className={styles2.paymentTableData}
              style={{ fontWeight: '600' }}
            >
              Postgraduate Certificate Programme for Emerging CFOs
            </th>
            <th
              className={styles2.paymentTableData}
              style={{ fontWeight: '600' }}
            >
              Payment
            </th>
          </tr>
        </thead>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles2.paymentTableData}>
              Application Fee (One-time app processing fee)
              <br />
              {/* (including Rs. 2,000 + GST application fees that is
               non-refundable) */}
            </td>
            <td
              className={styles2.paymentTableData}
              style={{ fontWeight: '600' }}
            >
              Rs. 3,000
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={styles2.paymentTableData}>
              Program Base Fee (Includes books/study material cost and campus
              visit fee)
              <br />
              {/* (including Rs. 2,000 + GST application fees that is
               non-refundable) */}
            </td>
            <td
              className={styles2.paymentTableData}
              style={{ fontWeight: '600' }}
            >
              Rs. 3,70,000
            </td>
          </tr>
        </tbody>
        {/* <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles2.paymentTableData}>
              IIM Indore Executive Alumni Registration Fee
              <br />
            </td>
            <td
              className={styles2.paymentTableData}
              style={{ fontWeight: '600' }}
            >
              Rs. 10,000
            </td>
          </tr>
        </tbody> */}
        <tbody>
          <tr>
            <td
              className={styles2.paymentTableData}
              style={{ fontWeight: '600', width: '70%' }}
            >
              Total Program Fee
              <br />
              {/* (including Rs. 2,000 + GST application fees that is
               non-refundable) */}
            </td>
            <td
              className={styles2.paymentTableData}
              style={{ fontWeight: '600', width: '30%' }}
            >
              Rs. 3,73,000 + GST
            </td>
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
        style={{
          padding: '30px 0px 30px 15px',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <h4 className={`align-self-center ${styles.h4}`} align="center">
          Total Fee Payment
        </h4>
        <h2 className={`align-self-center ${styles.h2}`} align="center">
          ₹3,73,000 + GST
        </h2>
        <h2
          className={`align-self-center ${styles.h2}`}
          align="center"
          style={{ fontSize: '23px' }}
        >
          (Pay in single go)
        </h2>
      </div>
    </>
  )
}
