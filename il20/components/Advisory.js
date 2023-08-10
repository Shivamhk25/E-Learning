import React from 'react'
import Image from 'next/image'

function Advisory(props) {
  return (
    <div className="advisory_carousal_main">
      <div className="advisory_carousal">
        <div style={{ overflow: 'auto' }}>
          <div style={{ height: '136px' }}>
            <div className="advisory_top">
              <div className="advisory_top_inside">
                <Image
                  src={props.img}
                  alt=""
                  height="112px"
                  width="112px"
                  layout="fixed"
                />
                <a href={props.href}>
                  <img
                    src="https://cdn.pegasus.imarticus.org/imarticus_2/linkedin.svg"
                    alt=""
                    height="24px"
                    width="24px"
                    style={{
                      position: 'absolute',
                      bottom: '0px',
                      right: '0px',
                    }}
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="advisory_bottom">
            <h1>{props.name}</h1>
            <p>{props.designation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advisory
