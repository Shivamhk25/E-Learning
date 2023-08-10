import { Tabs, Tab } from 'react-bootstrap'
import style from '../../styles/iit_roorkee_dm.module.css'
import styles from '../../styles/pgB&F.module.css'
import styles1 from '../../styles/common_css_iim_indore_iit_roorkee.module.css'
import styles2 from '../../styles/financial-services-capital-markets-management-program-iim-indore.module.css'
const PaymentModalTabs = ({ toggleModal }) => {
  return (
    <div className={`industry-project-popup-ctnr ${styles2.modalParent}`}>
      <div className="row">
        {/* <div className="col-lg-12"> */}
        <div>
          <Tabs
            defaultActiveKey="feestruc"
            id="uncontrolled-tab-example"
            className={`mb-3 ${styles.nav2}`}
            style={{ borderRadius: '8px' }}
          >
            <Tab
              className={styles.nav_item2}
              eventKey="feestruc"
              title="Program fee structure"
              style={{ borderRadius: '8px' }}
            >
              <div
                style={{ borderRadius: '8px' }}
                className={style.paymentPadding}
              >
                <PaymentSchedule />
              </div>
            </Tab>
            <Tab
              className={styles.nav_item2}
              eventKey="paymentsched"
              title="Payment schedule"
            >
              <div className={style.paymentPadding}>
                <ProgramFeeStructure />
              </div>
              {/* Payment schedule */}
            </Tab>
            <Tab
              className={styles.nav_item2}
              eventKey="fullfee"
              title="Full fee payment plan"
            >
              <div style={{ padding: '0px 0px 0px -20px' }}>
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
          className={style.crossPadding}
          tabIndex={0}
          onClick={toggleModal}
        >
          <img
            height={15}
            width={15}
            alt="close"
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
      {/* <p className={styles.admissionFeesText}>
        Admission Fees: ₹ 1,00,000 + GST
      </p>
      <p className={styles.admissionFeesText}>
        Amount with GST: ₹ 1,18,000
      </p>
      <p className={styles.admissionFeesText}>Registration Fees: ₹ 25000 + GST</p> */}

      <p className={styles2.paymentHeader} style={{ marginTop: '36px' }}>
        Admission Fees: ₹ 1,25,000 + GST
      </p>
      <table
        className={styles.paymentTable}
        style={{ marginTop: '36px', marginBottom: '48px' }}
      >
        <thead>
          <tr>
            <th
              className={styles.paymentTableHeader}
              style={{ padding: '6px' }}
            >
              Advanced Certification in Digital Marketing and MarTech
            </th>
            <th
              className={styles.paymentTableHeader}
              style={{ padding: '6px' }}
            >
              Payment
            </th>
          </tr>
        </thead>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              Program fees
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td
              className={styles.paymentTableData}
              style={{ fontWeight: '600', padding: '6px' }}
            >
              Rs. 125,000 + GST
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              Registration fees
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td
              className={styles.paymentTableData}
              style={{ fontWeight: '600', padding: '6px' }}
            >
              Rs. 25,000 + GST
            </td>
          </tr>
        </tbody>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              1st installment (Day 0)
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td
              className={styles.paymentTableData}
              style={{ fontWeight: '600', padding: '6px' }}
            >
              Rs. 50,000 + GST
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              2nd installment (Day 30)
              <br />
              {/* (Includes study material cost and campus visit fee) */}
            </td>
            <td
              className={styles.paymentTableData}
              style={{ fontWeight: '600', padding: '6px' }}
            >
              Rs. 50,000 + GST
            </td>
          </tr>
        </tbody>

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
      <p className={styles2.paymentHeader} style={{ marginTop: '40px' }}>
        Admission Fees: ₹ 1,25,000 + GST
      </p>
      <br />
      <table
        className={styles.paymentTable}
        style={{ marginTop: '10px', marginBottom: '48px' }}
      >
        <thead>
          <tr>
            <th
              className={styles.paymentTableHeader}
              style={{ padding: '6px' }}
            >
              Advanced Certification in Digital Marketing and MarTech
            </th>
            <th
              className={styles.paymentTableHeader}
              style={{ padding: '6px' }}
            >
              Payment
            </th>
          </tr>
        </thead>
        <tbody style={{ background: 'rgba(71, 195, 207, 0.15)' }}>
          <tr>
            <td className={styles.paymentTableData} style={{ padding: '6px' }}>
              Program Fees
              <br />
              {/* (including Rs. 2,000 + GST application fees that is
               non-refundable) */}
            </td>
            <td
              className={styles.paymentTableData}
              style={{ fontWeight: '600', padding: '6px' }}
            >
              Rs. 1,25,000 + GST
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
          padding: '30px 0px 30px 5px',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <h4 className={`align-self-center ${styles.h4}`} align="center">
          Total Fee Payment
        </h4>
        <h2 className={`align-self-center ${styles.h2}`} align="center">
          ₹ 1,25,000 + GST
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
