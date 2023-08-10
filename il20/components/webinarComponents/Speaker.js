import React, { useState } from 'react'
import styles from '../../styles/webinar-page.module.css'
import Modal from '../../components/UI/Modal/Modal'

export default function Speaker(data) {
  const [speaker, setSpeaker] = useState(false)
  const [speakerindex, setSpeakerindex] = useState()
  return (
    <>
      {speaker && (
        <Modal toggleModal={speaker}>
          <div className={styles.BecomePopMain}>
            <div style={{ backgroundColor: '#097273', borderRadius: '8px' }}>
              <div
                onClick={() => {
                  setSpeaker(false)
                }}
                style={{ float: 'right', padding: '8px 16px 0 0' }}
                className={styles.cross}
              >
                <img
                  alt="close"
                  src="https://cdn.pegasus.imarticus.org/imarticus_2/allprogrambutton/close.svg"
                />
              </div>
              <div className={styles.speakerCardPop}>
                <div
                  className={styles.speakerCard}
                  style={{ borderRadius: '8px', position: 'relative' }}
                >
                  {/* <div className={styles.speakerCardDiv}>
                <h2 className={styles.speakerHead}>SPEAKER</h2>
              </div> */}
                  <div className={styles.speakerImageDiv}>
                    <img
                      src={data.data.SpeakerInfo[speakerindex].image}
                      width="128px"
                      height="127px"
                      layout="fixed"
                      objectFit="contain"
                    ></img>
                  </div>
                  <h2 className={styles.speakerName}>
                    {data.data.SpeakerInfo[speakerindex].name}
                  </h2>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <div className={styles.speakerNameBorder}></div>
                  </div>
                  <p className={styles.speakerBackground}>
                    {data.data.SpeakerInfo[speakerindex].about}
                  </p>
                </div>
                <p
                  className={styles.aboutparaPop}
                  style={{
                    marginLeft: '16px',
                    width: '70%',
                    textAlign: 'start',
                  }}
                >
                  {data.data.SpeakerInfo[speakerindex].speaker}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <div
        className={styles.MainDivOuter}
        style={{
          backgroundColor: 'white',
        }}
      >
        <div className={styles.speakerMainDiv}>
          {data.data.SpeakerInfo.map((data, index) => {
            return (
              <div className={styles.speakerMain}>
                <div className={styles.speakerMain1}>
                  <div className={styles.speakerCard}>
                    {/* <div className={styles.speakerCardDiv}>
                <h2 className={styles.speakerHead}>SPEAKER</h2>
              </div> */}
                    <div className={styles.speakerImageDiv}>
                      <img
                        src={data.image}
                        width="128px"
                        height="127px"
                        layout="fixed"
                        objectFit="contain"
                      ></img>
                    </div>
                    <h2 className={styles.speakerName}>{data.name}</h2>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%',
                      }}
                    >
                      <div className={styles.speakerNameBorder}></div>
                    </div>
                    <p className={styles.speakerBackground}>{data.about}</p>
                  </div>
                </div>
                <div className={styles.speakerMain2}>
                  <h2 className={styles.aboutHeader}>About the speaker</h2>
                  <p className={styles.aboutpara}>
                    {' '}
                    {data.speaker.substring(0, 330)}{' '}
                    <span
                      onClick={() => {
                        setSpeaker(true)
                        setSpeakerindex(index)
                      }}
                      className={styles.viewMore}
                      style={{
                        color: '#0B8ADE',
                        fontWeight: 700,
                        fontSize: '18px',
                        cursor: 'pointer',
                      }}
                    >
                      {data.speaker.length <= 330 ? '' : '...View More'}
                    </span>
                  </p>
                  <p className={styles.aboutparaMobile}>{data.speaker}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
