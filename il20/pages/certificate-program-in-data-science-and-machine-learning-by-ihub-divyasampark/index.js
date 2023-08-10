import React, { useRef, useEffect, useState } from 'react'
import Layout from '../../components/Layoutnext'
import { configs, countryCodes } from '../../constants'
import Ihubchildata from '../../components/iHub_iit_roorkee/Ihubchildata'
import EnquireForm from '../../components/Forms/Formtype1-Nm-Em-Con-Loc'
import Modal from '../../components/UI/Modal/Modal'
import SimilarPrograms from '../../components/pgBandF/SimilarPrograms'

const Iit_Roorkee = (props) => {
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

  return (
    <>
      <Layout toggleModal={toggleModal} propsdata={props.propsdata.allData}>
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
        />
        <div className="similarPrograms" style={{ padding: '60px 10%' }}>
          <SimilarPrograms
            propsdata={props.propsdata.allData}
            programid={'ANALYTICS'}
          />
        </div>
      </Layout>
    </>
  )
}
export default Iit_Roorkee

export async function getStaticProps() {
  const res = await fetch(
    `${configs.MARKETING_ENDPOINT}/marketingopspanelpublic/get_all_fields_website`,
    {
      headers: {
        skey: configs.skey,
      },
    }
  )

  const data = await res.json()
  // console.log(data, "res");
  return {
    props: {
      propsdata: data.data,
    },
  }
}
