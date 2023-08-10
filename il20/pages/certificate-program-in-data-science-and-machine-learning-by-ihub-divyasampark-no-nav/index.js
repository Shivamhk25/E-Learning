import React, { useRef, useEffect, useState } from 'react'
import Layout from '../../components/Layoutnext'
import { configs, countryCodes } from '../../constants'
import Ihubchildata from '../../components/iHub_iit_roorkee/Ihubchildata'
import EnquireForm from '../../components/Forms/Formtype1-Nm-Em-Con-Loc'
import Modal from '../../components/UI/Modal/Modal'

const Iit_Roorkee_no_nav = (props) => {
  const toggleModal = (eventValues) => {
    if (eventValues && eventValues.download) {
      setDownloadBrochure(eventValues.download)
      setBrochureUrl(eventValues.url)
    } else {
      setDownloadBrochure(false)
      setBrochureUrl(null)
    }
    setFormModal((prevState) => !prevState)
  }

  const [formModal, setFormModal] = useState(false)
  const [downloadBrochure, setDownloadBrochure] = useState(false)
  const [brochureUrl, setBrochureUrl] = useState()

  //this has no layout - since this is a no-nav page
  return (
    <>
      {formModal && (
        <Modal toggleModal={toggleModal}>
          <EnquireForm
            toggleModal={toggleModal}
            formValue={1}
            downloadBrochure={downloadBrochure}
            brochureUrl={brochureUrl}
            propsdata={props.propsdata.allData}
          />
        </Modal>
      )}
      <Ihubchildata
        propsdata={props.propsdata.allData}
        toggleModal={toggleModal}
        style={{ marginTop: '0px' }}
      />
    </>
  )
}
export default Iit_Roorkee_no_nav

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
