import { useEffect, useState } from 'react'

const IndiaDetails = {
  West: [
    {
      contact: '+91 8484932054',
      state: 'Mumbai',
      link: '/mumbai/',
    },
    {
      contact: '+91 8956051536',
      state: 'Thane',
      link: '/thane/',
    },
    {
      contact: '+91 8956083026',
      state: 'Pune',
      link: '/pune/',
    },
    {
      contact: '+91 9513631084',
      state: 'Ahmedabad',
      link: '/ahmedabad/',
    },
  ],
  North: [
    {
      state: 'Jaipur',
      contact: '+91 7428096032',
      link: '/',
    },
    {
      state: 'Delhi',
      contact: '+91 8448515861',
      link: '/delhi/',
    },
    {
      state: 'Gurgaon',
      contact: '+91 7428292896',
      link: '/gurgaon/',
    },
    // {
    //   state: 'Chandigarh',
    //   contact: '',
    //   link: '/',
    // },
    {
      state: 'Noida',
      contact: '+91 7428292896',
      link: '/',
    },
    {
      state: 'Patna',
      contact: '+91 8929763494',
      link: '/',
    },
    {
      state: 'Lucknow',
      contact: '+91 7290092186',
      link: '/lucknow/',
    },
    {
      state: 'Dehradun',
      contact: '+91 7303656855',
      link: '/dehradun/',
    },
  ],
  South: [
    {
      state: 'Bangalore Koramangala',
      contact: '+91 6364921385',
      link: '/bangalore/',
    },
    {
      state: 'Chennai',
      contact: '+91 6366370388',
      link: '/chennai/',
    },
    {
      state: 'Hyderabad',
      contact: '+91 9148629802',
      link: '/hyderabad/',
    },
    {
      state: 'Cochin',
      contact: '+91 7353470666',
      link: '/cochin/',
    },
    {
      state: 'Bangalore Marathahali',
      contact: '+91 6364921384',
      link: '/bangalore/',
    },
    {
      state: 'Coimbatore',
      contact: '+91 7353470666',
      link: '/coimbatore/',
    },
  ],
  East: [
    {
      state: 'Kolkata',
      contact: '+91 9513630678',
      link: '/kolkata/',
    },
  ],
}

const IndiaFooter = () => {
  const [direction, setDirection] = useState('West')
  useEffect(() => {
    // console.log(direction)
  }, [direction])
  return (
    <div id="indiacountry">
      <div className="rows">
        <div className="container_footer_selector">
          {Object.keys(IndiaDetails).map((name, idx) => {
            return (
              <li
                role="button"
                id="west"
                className={`${
                  direction == name
                    ? 'mobilestateselected7'
                    : 'mobilestatenumber8'
                } ${idx == 0 && 'golradius'} ${
                  idx == Object.keys(IndiaDetails).length - 1 && 'golradius2'
                }`}
              >
                <span
                  role="button"
                  onClick={() => {
                    setDirection(name)
                  }}
                >
                  {name}
                </span>
              </li>
            )
          })}
        </div>
      </div>

      <div id="footer-number-ww">
        <div className="footer-number-w">
          {IndiaDetails[direction].map((center) => {
            return (
              <div className="footer-number-inside">
                <a href={center.link} id="paraOne">
                  {center.state}
                </a>
                <a href={`tel:${center.contact}`} id="paraPhoneOne">
                  {center.contact}
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <div id="footer-number-nn">
        <div className="footer-number-n">
          <div className="footer-number-inside">
            <p id="paraThree"></p>
            <a href="tel:+9174728292896" id="paraPhoneThree">
              +91{' '}
            </a>
          </div>
          <div className="footer-number-inside">
            <p id="paraThree"></p>
            <a href="tel:+917206051509" id="paraPhoneThree">
              +91{' '}
            </a>
          </div>
          <div className="footer-number-inside">
            <p id="paraThree">Noida</p>
            <a href="tel:+917428292896" id="paraPhoneThree">
              +91{' '}
            </a>
          </div>
          <div className="footer-number-inside">
            <p id="paraThree">Lucknow</p>
            <a href="tel:+917290092186" id="paraPhoneThree">
              +91 7290092186
            </a>
          </div>
          <div className="footer-number-inside">
            <p id="paraThree">Dehradun</p>
            <a href="tel:+917303656855" id="paraPhoneThree">
              +91 7303656855
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IndiaFooter
