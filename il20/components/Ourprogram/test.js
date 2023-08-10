;<section style={{ background: '#ffff' }}>
  <div
    style={{ margin: '0 auto', boxSizing: 'border-box', maxWidth: '1300px' }}
  >
    <div id="courses" style={{ boxSizing: 'border-box' }}>
      <h1 className="course-detail-titles2 sec-heading">
        Our Marketing Programs
      </h1>
      <amp-state id="cost"></amp-state>

      {/* web view */}
      <div className="rowourprogram">
        <ul className="select">
          <amp-selector
            id="ampSelector"
            layout="container"
            data-amp-bind-selected="course_selected.selected"
            on="select:AMP.setState({course_selected:{selected:event.targetOption}, 'err_msg' : event.response.message ? '' : '' , 'props' : {
                            'loader_class' : 'hidden', 'otp_lightbox_error_class' : 'hidden'} })"
          >
            <li
              role="button"
              option={0}
              className="course-detail-info-title center-all-768 button selected"
              data-amp-bind-class="course_selected.selected==0? 'course-detail-info-title center-all-768 selected button' : 'course-detail-info-title center-all-768 button'"
              selected
            >
              <span role="button">Digital Marketing</span>
              <svg
                style={{ marginLeft: 'auto' }}
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                {' '}
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />{' '}
              </svg>
            </li>
            <li
              role="button"
              option={1}
              className="course-detail-info-title center-all-768 button "
              data-amp-bind-class="course_selected.selected==1? 'course-detail-info-title center-all-768 selected button' : 'course-detail-info-title center-all-768 button'"
            >
              <span role="button">For Executives</span>
              <svg
                style={{ marginLeft: 'auto' }}
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />{' '}
              </svg>
            </li>
            <li
              role="button"
              option={2}
              className="course-detail-info-title center-all-768 button "
              data-amp-bind-class="course_selected.selected==2? 'course-detail-info-title center-all-768 selected button' : 'course-detail-info-title center-all-768 button'"
            >
              <span role="button">For UnderGraduates</span>
              <svg
                style={{ marginLeft: 'auto' }}
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />{' '}
              </svg>
            </li>
          </amp-selector>
        </ul>

        <div className="cards">
          <div className="course-row">
            {/* <h1 data-amp-bind-text="course_selected.selected"></h1> */}
            {Program.financecourses_arr.map(function (course) {
              return (
                <div
                  data-amp-bind-class={`course_selected.selected==${course.index} ? 'card': 'no-display'`}
                >
                  <div
                    className="card"
                    data-amp-bind-class={`course_selected.selected==${course.index} ? '': 'no-display'`}
                  >
                    <div
                      className="card-image"
                      style={{
                        background: `url(${course.img})`,
                        backgroundSize: 'cover',
                      }}
                    >
                      <div className="smaller-card-div">
                        <div className="between-line smaller-card-div-img">
                          <amp-img
                            src={course.img2}
                            height="30px"
                            width="80px"
                          ></amp-img>
                        </div>
                        <div className="smaller-card-div-text">
                          <p>{course.program}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="card-body">
                        <h1 className="main" style={{ marginBottom: 'auto' }}>
                          {course.name}
                        </h1>
                        <p className="description_text">{course.description}</p>

                        <div className="course_rating">
                          <p className="course_desc">
                            {course.duration} | Weekend |{' '}
                            {course.online ? 'Online' : 'Offline'}
                          </p>
                          <p className="course_ugc_titled">
                            {course.ugctitled ? 'UGC Entitled' : ''}{' '}
                          </p>
                          <div className="course_star">
                            <amp-img
                              src="https://cdn.pegasus.imarticus.org/imarticus_2/stargroup2.svg"
                              alt=""
                              width="175px"
                              height="20px"
                            ></amp-img>
                          </div>
                        </div>

                        <div className="more">
                          <div>
                            <div className="apply_button">
                              <a href={course.link}>Apply Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="mobiletab-ourprogram">
        <amp-accordion animate="">
          <section
            oon="expand: AMP.setState({expandp1: true, 'err_msg' : '' , 'props' : {
                            'loader_class' : 'hidden','otp_lightbox_success_class' : 'hidden' ,
                            'otp_lightbox_error_class' : 'hidden'}}); collapse: AMP.setState({expandp1: false})"
          >
            <header className="porgram-heading">
              <h1>Digital Marketing</h1>
              <amp-img
                id="ourprogram-svg"
                src="https://cdn.pegasus.imarticus.org/imarticus_2/chevron-updark.svg"
                height="24px"
                width="24px"
                style={{ transition: 'all 0.3s' }}
                data-amp-bind-class="expandp1? 'rotate': ''"
              />
            </header>
            <div className="program-porgrams">
              <amp-base-carousel
                mixed-length="true"
                id="ourProgramCarousal1"
                snap-align="center"
                layout="responsive"
                width={5}
                height={1}
                heights="300px"
                advance-count="(min-width: 992px) 2,(min-width: 768px) 1, 1"
                style={{
                  padding: '2.2% 60px',
                  height: '500px',
                  width: '100%',
                  marginTop: '44px',
                }}
                slide={0}
                data-amp-bind-slide="ourProgramsliderIndicator1.currSlide"
                on="slideChange:AMP.setState({ourProgramsliderIndicator1.currSlide: {currSlide: event.index}})"
              >
                {Program.financecourses_arr
                  .filter((course) => course.index == 0)
                  .map(function (course) {
                    return (
                      <div className="ourprogramcard_main">
                        <div className="ourprogramcard">
                          <div
                            className="card-image"
                            style={{
                              background: `url(${course.img})`,
                              backgroundSize: 'cover',
                            }}
                          >
                            <div className="smaller-card-div">
                              <div className="between-line smaller-card-div-img">
                                <amp-img
                                  src={course.img2}
                                  height="30px"
                                  width="80px"
                                ></amp-img>
                              </div>
                              <div className="smaller-card-div-text">
                                <p>{course.program}</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="card-body">
                              <h1
                                className="course_name"
                                style={{ marginBottom: 'auto' }}
                              >
                                {course.name}
                              </h1>
                              <p className="description_text">
                                {course.description}
                              </p>

                              <div className="course_rating">
                                <p className="course_desc">
                                  {course.duration} | Weekend |{' '}
                                  {course.online ? 'Online' : 'Offline'}
                                </p>
                                <p className="course_ugc_titled">
                                  {course.ugctitled ? 'UGC Entitled' : ''}{' '}
                                </p>
                                <div className="course_star">
                                  <amp-img
                                    src="https://cdn.pegasus.imarticus.org/imarticus_2/stargroup2.svg"
                                    alt=""
                                    width="175px"
                                    height="20px"
                                  ></amp-img>
                                </div>
                              </div>

                              <div className="more">
                                <div>
                                  <div className="apply_button">
                                    <a href={course.link}>Apply Now</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                <button
                  slot="prev-arrow"
                  className="carousel-prev"
                  aria-label="Previous"
                  style={{ display: 'none' }}
                />
                <button
                  slot="next-arrow"
                  className="carousel-next"
                  aria-label="Next"
                  style={{ display: 'none' }}
                />
              </amp-base-carousel>
              <div className="ourprogramtab-control" style={{ width: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto',
                  }}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    on="tap:ourProgramCarousal1.prev()"
                  >
                    <amp-img
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/awardarrow.svg"
                      width="56px"
                      height="56px"
                      layout="flex-item"
                      style={{ transform: 'rotate(180deg)' }}
                    />
                  </div>
                  <div
                    style={{
                      width: '230px',
                      height: '8px',
                      background: 'rgba(33, 42, 57, 0.15)',
                      borderRadius: '32px',
                      position: 'relative',
                      padding: 0,
                      boxShadow: 'none',
                      marginLeft: '17px',
                      marginRight: '17px',
                    }}
                  >
                    <div
                      className="slider slider0"
                      data-amp-bind-class="'slider slider' + (ourProgramsliderIndicator1.currSlide)"
                    >
                      {' '}
                    </div>
                    <div
                      tabIndex={0}
                      role="button"
                      className="slider slider0"
                      style={{
                        height: '250%',
                        width: '50%',
                        opacity: 0,
                        top: '-75%',
                      }}
                      on="tap:ourProgramCarousal1.prev()"
                    />
                    <div
                      tabIndex={1}
                      role="button"
                      className="slider slider4"
                      style={{
                        height: '250%',
                        width: '50%',
                        opacity: 0,
                        top: '-75%',
                      }}
                      on="tap:ourProgramCarousal1.next()"
                    />
                  </div>
                  <div
                    tabIndex={1}
                    role="button"
                    on="tap:ourProgramCarousal1.next()"
                  >
                    <amp-img
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/awardarrow.svg"
                      width="56px"
                      height="56px"
                      layout="flex-item"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            on="expand: AMP.setState({expandp2: true, 'err_msg' : '' , 'props' : {
                            'loader_class' : 'hidden','otp_lightbox_success_class' : 'hidden' ,
                            'otp_lightbox_error_class' : 'hidden'}}); collapse: AMP.setState({expandp2: false})"
          >
            <header className="porgram-heading">
              <h1>For Executives</h1>
              <amp-img
                id="ourprogram-svg"
                src="https://cdn.pegasus.imarticus.org/imarticus_2/chevron-updark.svg"
                height="24px"
                width="24px"
                style={{ transition: 'all 0.3s' }}
                data-amp-bind-class="expandp2? 'rotate': ''"
              />
            </header>
            <div className="program-porgrams">
              <amp-base-carousel
                mixed-length="true"
                id="ourProgramCarousal2"
                snap-align="center"
                layout="responsive"
                width={5}
                height={1}
                heights="300px"
                advance-count="(min-width: 992px) 2,(min-width: 768px) 1, 1"
                style={{
                  padding: '2.2% 60px',
                  height: '500px',
                  width: '100%',
                  marginTop: '44px',
                }}
                slide={0}
                data-amp-bind-slide="ourProgramsliderIndicator2.currSlide"
                on="slideChange:AMP.setState({ourProgramsliderIndicator2.currSlide: {currSlide: event.index}})"
              >
                {Program.financecourses_arr
                  .filter((course) => course.index == 1)
                  .map(function (course) {
                    return (
                      <div className="ourprogramcard_main">
                        <div className="ourprogramcard">
                          <div
                            className="card-image"
                            style={{
                              background: `url(${course.img})`,
                              backgroundSize: 'cover',
                            }}
                          >
                            <div className="smaller-card-div">
                              <div className="between-line smaller-card-div-img">
                                <amp-img
                                  src={course.img2}
                                  height="30px"
                                  width="80px"
                                ></amp-img>
                              </div>
                              <div className="smaller-card-div-text">
                                <p>{course.program}</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="card-body">
                              <h1
                                className="course_name"
                                style={{ marginBottom: 'auto', height: '65px' }}
                              >
                                {course.name}
                              </h1>
                              <p className="description_text">
                                {course.description}
                              </p>

                              <div className="course_rating">
                                <p className="course_desc">
                                  {course.duration} | Weekend |{' '}
                                  {course.online ? 'Online' : 'Offline'}
                                </p>
                                <p className="course_ugc_titled">
                                  {course.ugctitled ? 'UGC Entitled' : ''}{' '}
                                </p>
                                <div className="course_star">
                                  <amp-img
                                    src="https://cdn.pegasus.imarticus.org/imarticus_2/stargroup2.svg"
                                    alt=""
                                    width="175px"
                                    height="20px"
                                  ></amp-img>
                                </div>
                              </div>

                              <div className="more">
                                <div>
                                  <div className="apply_button">
                                    <a href={course.link}>Apply Now</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                <button
                  slot="prev-arrow"
                  className="carousel-prev"
                  aria-label="Previous"
                  style={{ display: 'none' }}
                />
                <button
                  slot="next-arrow"
                  className="carousel-next"
                  aria-label="Next"
                  style={{ display: 'none' }}
                />
              </amp-base-carousel>
              <div className="ourprogramtab-control" style={{ width: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto',
                  }}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    on="tap:ourProgramCarousal2.prev()"
                  >
                    <amp-img
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/awardarrow.svg"
                      width="56px"
                      height="56px"
                      layout="flex-item"
                      style={{ transform: 'rotate(180deg)' }}
                    />
                  </div>
                  <div
                    style={{
                      width: '230px',
                      height: '8px',
                      background: 'rgba(33, 42, 57, 0.15)',
                      borderRadius: '32px',
                      position: 'relative',
                      padding: 0,
                      boxShadow: 'none',
                      marginLeft: '17px',
                      marginRight: '17px',
                    }}
                  >
                    <div
                      className="slider slider0"
                      data-amp-bind-class="'slider slider' + (ourProgramsliderIndicator2.currSlide)"
                    >
                      {' '}
                    </div>
                    <div
                      tabIndex={0}
                      role="button"
                      className="slider slider0"
                      style={{
                        height: '250%',
                        width: '50%',
                        opacity: 0,
                        top: '-75%',
                      }}
                      on="tap:ourProgramCarousal2.prev()"
                    />
                    <div
                      tabIndex={1}
                      role="button"
                      className="slider slider4"
                      style={{
                        height: '250%',
                        width: '50%',
                        opacity: 0,
                        top: '-75%',
                      }}
                      on="tap:ourProgramCarousal2.next()"
                    />
                  </div>
                  <div
                    tabIndex={1}
                    role="button"
                    on="tap:ourProgramCarousal2.next()"
                  >
                    <amp-img
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/awardarrow.svg"
                      width="56px"
                      height="56px"
                      layout="flex-item"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            on="expand: AMP.setState({expandp3: true, 'err_msg' : '' , 'props' : {
                            'loader_class' : 'hidden','otp_lightbox_success_class' : 'hidden' ,
                            'otp_lightbox_error_class' : 'hidden'}}); collapse: AMP.setState({expandp3: false})"
          >
            <header className="porgram-heading">
              <h1>For UnderGraduates</h1>
              <amp-img
                id="ourprogram-svg"
                src="https://cdn.pegasus.imarticus.org/imarticus_2/chevron-updark.svg"
                height="24px"
                width="24px"
                style={{ transition: 'all 0.3s' }}
                data-amp-bind-class="expandp3? 'rotate': ''"
              />
            </header>
            <div className="program-porgrams">
              <amp-base-carousel
                mixed-length="true"
                id="ourProgramCarousal3"
                snap-align="center"
                layout="responsive"
                width={5}
                height={1}
                heights="300px"
                advance-count="(min-width: 992px) 2,(min-width: 768px) 1, 1"
                style={{
                  padding: '2.2% 60px',
                  height: '500px',
                  width: '100%',
                  marginTop: '44px',
                }}
                slide={0}
                data-amp-bind-slide="ourProgramsliderIndicator3.currSlide"
                on="slideChange:AMP.setState({ourProgramsliderIndicator3.currSlide: {currSlide: event.index}})"
              >
                {Program.financecourses_arr
                  .filter((course) => course.index == 2)
                  .map(function (course) {
                    return (
                      <div className="ourprogramcard_main">
                        <div className="ourprogramcard">
                          <div
                            className="card-image"
                            style={{
                              background: `url(${course.img})`,
                              backgroundSize: 'cover',
                            }}
                          >
                            <div className="smaller-card-div">
                              <div className="between-line smaller-card-div-img">
                                <amp-img
                                  src={course.img2}
                                  height="30px"
                                  width="80px"
                                ></amp-img>
                              </div>
                              <div className="smaller-card-div-text">
                                <p>{course.program}</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="card-body">
                              <h1
                                className="course_name"
                                style={{ marginBottom: 'auto', height: '65px' }}
                              >
                                {course.name}
                              </h1>
                              <p className="description_text">
                                {course.description}
                              </p>

                              <div className="course_rating">
                                <p className="course_desc">
                                  {course.duration} | Weekend |{' '}
                                  {course.online ? 'Online' : 'Offline'}
                                </p>
                                <p className="course_ugc_titled">
                                  {course.ugctitled ? 'UGC Entitled' : ''}{' '}
                                </p>
                                <div className="course_star">
                                  <amp-img
                                    src="https://cdn.pegasus.imarticus.org/imarticus_2/stargroup2.svg"
                                    alt=""
                                    width="175px"
                                    height="20px"
                                  ></amp-img>
                                </div>
                              </div>

                              <div className="more">
                                <div>
                                  <div className="apply_button">
                                    <a href={course.link}>Apply Now</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                <button
                  slot="prev-arrow"
                  className="carousel-prev"
                  aria-label="Previous"
                  style={{ display: 'none' }}
                />
                <button
                  slot="next-arrow"
                  className="carousel-next"
                  aria-label="Next"
                  style={{ display: 'none' }}
                />
              </amp-base-carousel>
              <div className="ourprogramtab-control" style={{ width: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 'auto',
                  }}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    on="tap:ourProgramCarousal3.prev()"
                  >
                    <amp-img
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/awardarrow.svg"
                      width="56px"
                      height="56px"
                      layout="flex-item"
                      style={{ transform: 'rotate(180deg)' }}
                    />
                  </div>
                  <div
                    style={{
                      width: '230px',
                      height: '8px',
                      background: 'rgba(33, 42, 57, 0.15)',
                      borderRadius: '32px',
                      position: 'relative',
                      padding: 0,
                      boxShadow: 'none',
                      marginLeft: '17px',
                      marginRight: '17px',
                    }}
                  >
                    <div
                      className="slider slider0"
                      data-amp-bind-class="'slider slider' + (ourProgramsliderIndicator3.currSlide)"
                    >
                      {' '}
                    </div>
                    <div
                      tabIndex={0}
                      role="button"
                      className="slider slider0"
                      style={{
                        height: '250%',
                        width: '50%',
                        opacity: 0,
                        top: '-75%',
                      }}
                      on="tap:ourProgramCarousal3.prev()"
                    />
                    <div
                      tabIndex={1}
                      role="button"
                      className="slider slider4"
                      style={{
                        height: '250%',
                        width: '50%',
                        opacity: 0,
                        top: '-75%',
                      }}
                      on="tap:ourProgramCarousal3.next()"
                    />
                  </div>
                  <div
                    tabIndex={1}
                    role="button"
                    on="tap:ourProgramCarousal3.next()"
                  >
                    <amp-img
                      src="https://cdn.pegasus.imarticus.org/imarticus_2/awardarrow.svg"
                      width="56px"
                      height="56px"
                      layout="flex-item"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </amp-accordion>
      </div>
    </div>
  </div>
</section>
