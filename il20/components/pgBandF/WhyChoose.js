import Image from 'next/image'
import styles from '../../styles/pgB&F.module.css'
import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

export default function WhyChoose({ toggleModal }) {
  return (
    <div
      className={
        styles.paddingOnTab +
        ' ' +
        styles.paddingGLobalOnWeb +
        ' ' +
        styles.whyChoosePostGraduateDiv +
        ' ' +
        styles.paddingOnMobile
      }
      style={{
        background: 'rgba(221, 233, 237, 0.35)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <h1
        className={styles.whyChooseHeader}
        style={{ ...styles.alumniHeader, textAlign: 'left' }}
      >
        Why choose the postgraduate program in banking and finance?
      </h1>
      <p className={styles.whyChoosePostGraduate + ' ' + styles.desc_margin}>
        This 300+ hours Postgraduate Program in Banking and Finance equips you
        with the domain skill-sets and soft skills required for a successful
        career in Retail Banking, NBFCs and FinTech. This is an assured
        placement program, where your responsibility is to upskill, complete the
        course successfully and earn your certification while we align you with
        opportunities in the industry.
      </p>
      <br />
      <br />
      <div className={`row ${styles.onWebImg} ${styles.row}`}>
        <div style={{ display: 'flex !important' }}>
          <div className={'col-4 ' + styles.col4webPadding}>
            <div className={`${styles.card} w-100`}>
              <img
                class={styles.card_img_top}
                src={`https://cdn.pegasus.imarticus.org/pgBandF/icon1.webp`}
                alt="Card image cap"
                height="55px"
                width="55px"
              />
              <div class="card-body">
                <h5 className={styles.pgProgramCardHeader}>Get Hired</h5>
                <p className={styles.pgProgramCardText}>
                  Our program comes with a job guarantee! With over 8000+
                  learners placed with a 60% salary hike, you can get placed in
                  entry-level roles at leading banks, NBFCs, FinTech companies,
                  KPOs, etc.
                </p>
              </div>
            </div>
          </div>
          <div className={'col-4 ' + styles.col4webPadding}>
            <div
              className={`${styles.card} w-100`}
              style={{ overflow: 'auto' }}
            >
              <img
                class={styles.card_img_top}
                src={`https://cdn.pegasus.imarticus.org/pgBandF/icon-Group.webp`}
                alt="Card image cap"
                height="55px"
                width="55px"
              />
              <div class="card-body">
                <h5 className={styles.pgProgramCardHeader}>
                  Learn Job-Relevant Skills
                </h5>
                <p className={styles.pgProgramCardText}>
                  Get an in-depth understanding of various functions within the
                  retail banking sales and operations like retail liability and
                  retail asset products, NRI banking products, trends in banking
                  branch operations and investment products like mutual funds,
                  insurance, equities and fixed income securities. The program
                  also provides a high-level overview of tax planning and
                  personal finance planning.
                </p>
              </div>
            </div>
          </div>
          <div className={'col-4 ' + styles.col4webPadding}>
            <div className={`${styles.card} w-100`}>
              <img
                class={styles.card_img_top}
                src={`https://cdn.pegasus.imarticus.org/pgBandF/icon-Frame_1.webp`}
                alt="Card image cap"
                height="55px"
                width="55px"
              />
              <div class="card-body">
                <h5 className={styles.pgProgramCardHeader}>Learn Live</h5>
                <p className={styles.pgProgramCardText}>
                  Live facilitated instruction is proven to provide the best
                  learning outcomes. Make the most of your investment and learn
                  in our state-of-art physical classrooms pan-India.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <p className={styles.excited}>Excited?</p> */}
        <br />
        <br />
        <button
          onClick={toggleModal}
          className={`${styles.applyHere} ${styles.button} d-flex align-self-center`}
        >
          Apply Here
        </button>
      </div>

      <div className={styles.onTabImg}>
        <Swiper
          style={{ paddingBottom: '10px', marginLeft: '4px' }}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerGroup={1}
          slidesPerView={'auto'}
        >
          <SwiperSlide>
            <div style={{ width: '100%' }}>
              <div
                className={`${styles.card} ${styles.cardOnTab} w-75`}
                style={{ margin: '0 10px !important' }}
              >
                <img
                  class={styles.card_img_top}
                  src={`https://cdn.pegasus.imarticus.org/pgBandF/icon1.webp`}
                  alt="Card image cap"
                  height="55px"
                  width="55px"
                />
                <div class="card-body">
                  <h5 className={styles.pgProgramCardHeader}>Get Hired</h5>
                  <p className={styles.pgProgramCardText}>
                    Our program comes with a job guarantee! With over 8000+
                    learners placed with a 60% salary hike, you can get placed
                    in entry-level roles at leading banks, NBFCs, FinTech
                    companies, KPOs, etc.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: '100%' }}>
              <div className={`${styles.card} ${styles.cardOnTab} w-75`}>
                <img
                  class={styles.card_img_top}
                  src={`https://cdn.pegasus.imarticus.org/pgBandF/icon-Group.webp`}
                  alt="Card image cap"
                  height="55px"
                  width="55px"
                />
                <div class="card-body">
                  <h5 className={styles.pgProgramCardHeader}>
                    Learn Job-Relevant Skills
                  </h5>
                  <p className={styles.pgProgramCardText}>
                    Get an in-depth understanding of various functions within
                    the retail banking sales and operations like retail
                    liability and retail asset products, NRI banking products,
                    trends in banking branch operations and investment products
                    like mutual funds, insurance, equities and fixed income
                    securities. The program also provides a high-level overview
                    of tax planning and personal finance planning.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: '100%' }}>
              <div className={`${styles.card} ${styles.cardOnTab} w-75`}>
                <img
                  class={styles.card_img_top}
                  src={`https://cdn.pegasus.imarticus.org/pgBandF/icon-Frame_1.webp`}
                  alt="Card image cap"
                  height="55px"
                  width="55px"
                />
                <div class="card-body">
                  <h5 className={styles.pgProgramCardHeader}>Learn Live</h5>
                  <p className={styles.pgProgramCardText}>
                    Live facilitated instruction is proven to provide the best
                    learning outcomes. Make the most of your investment and
                    learn in our state-of-art physical classrooms pan-India.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <br />
        <br />

        <button
          onClick={toggleModal}
          className={`${styles.applyHere} ${styles.button} d-flex align-self-center`}
        >
          Apply Here
        </button>
      </div>

      <div className={styles.onMobileOnlyImg}>
        <div
          className
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div className={'award-main ' + styles.award_main_mobiles}>
            <Swiper
              style={{ paddingBottom: '10px', marginLeft: '4px' }}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerGroup={1}
              slidesPerView={'auto'}
            >
              <SwiperSlide>
                <div style={{ width: '100%', overflow: 'auto' }}>
                  <div
                    className={`${styles.card} ${styles.cardOnTab} w-75`}
                    style={{ margin: '0 10px !important' }}
                  >
                    <img
                      class={styles.card_img_top}
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/icon1.webp`}
                      alt="Card image cap"
                      height="55px"
                      width="55px"
                    />
                    <div class="card-body">
                      <h5 className={styles.pgProgramCardHeader}>Get Hired</h5>
                      <p className={styles.pgProgramCardText}>
                        Our program comes with a job guarantee! With over 8000+
                        learners placed with a 60% salary hike, you can get
                        placed in entry-level roles at leading banks, NBFCs,
                        FinTech companies, KPOs, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ width: '100%', overflow: 'scroll' }}>
                  <div className={`${styles.card} ${styles.cardOnTab} w-75`}>
                    <img
                      class={styles.card_img_top}
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/icon-Group.webp`}
                      alt="Card image cap"
                      height="55px"
                      width="55px"
                    />
                    <div class="card-body">
                      <h5 className={styles.pgProgramCardHeader}>
                        Learn Job-Relevant Skills
                      </h5>
                      <p className={styles.pgProgramCardText}>
                        Get an in-depth understanding of various functions
                        within the retail banking sales and operations like
                        retail liability and retail asset products, NRI banking
                        products, trends in banking branch operations and
                        investment products like mutual funds, insurance,
                        equities and fixed income securities. The program also
                        provides a high-level overview of tax planning and
                        personal finance planning.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={{ width: '100%', overflow: 'scroll' }}>
                  <div className={`${styles.card} ${styles.cardOnTab} w-75`}>
                    <img
                      class={styles.card_img_top}
                      src={`https://cdn.pegasus.imarticus.org/pgBandF/icon-Frame_1.webp`}
                      alt="Card image cap"
                      height="55px"
                      width="55px"
                    />
                    <div class="card-body">
                      <h5 className={styles.pgProgramCardHeader}>Learn Live</h5>
                      <p className={styles.pgProgramCardText}>
                        Live facilitated instruction is proven to provide the
                        best learning outcomes. Make the most of your investment
                        and learn in our state-of-art physical classrooms
                        pan-India.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <button
          onClick={toggleModal}
          className={`${styles.applyHere} ${styles.button} d-flex align-self-center`}
        >
          Apply Here
        </button>
      </div>
    </div>
  )
}
