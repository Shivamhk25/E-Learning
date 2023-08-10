import Image from 'next/image'
import React from 'react'

export const Carrertransformationnext = ({
  onClick,
  heading,
  subheading,
  cta_name,
  setdata,
}) => {
  if (setdata) {
    return (
      <>
        <section className="carrertransformation">
          <div className="carrertransformationmaindiv">
            <div className="carrermaintrans">
              <div className="carrertext">
                <h1>{heading}</h1>
                <p>{subheading}</p>
              </div>
              <div style={{ display: 'flex' }}>
                <button
                  className="carrerdownloadbtn"
                  onClick={onClick}
                  type="button"
                  style={{ cursor: 'pointer' }}
                >
                  <h2>{cta_name}</h2>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src="/imarticus_2/download.svg"
                      layout="fill"
                      objectFit="fill"
                      alt="download carrer report"
                    ></Image>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Carrertransformationnext
