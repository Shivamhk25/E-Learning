import { useState } from 'react'
import IndiaFooter from './IndiaCountryFooter'

const FooterLocation = () => {
  const [location, setLocation] = useState('India')
  return (
    <section>
      <div style={{ border: '0.5px solid #fff', marginBottom: '48px' }} />
      <h4
        style={{
          fontSize: '18px',
          fontWeight: 600,
          fontStyle: 'normal',
          color: '#fff',
          marginBottom: '40px',
        }}
      >
        GLOBAL PRESENCE
      </h4>
      <div className="countrynamediv">
        <h4
          className={
            location == 'India' ? 'selectedcountry' : 'unselectedcountry'
          }
          id="india"
          onClick={() => setLocation('India')}
        >
          INDIA
        </h4>
        <h4
          className={
            location == 'UAE' ? 'selectedcountry' : 'unselectedcountry'
          }
          id="uae"
          onClick={() => setLocation('UAE')}
        >
          UAE
        </h4>
        <h4
          className={
            location == 'ONLINE' ? 'selectedcountry' : 'unselectedcountry'
          }
          id="ONLINE"
          onClick={() => setLocation('ONLINE')}
        >
          ONLINE
        </h4>
      </div>
      {location == 'India' && <IndiaFooter />}
      {location == 'UAE' && (
        <div
          id="uaecountry"
          style={{ paddingBottom: '30px', textAlign: 'center' }}
        >
          <div>
            <h1
              style={{
                fontSize: '16px',
                fontWeight: 'normal',
                color: '#fff',
                marginBottom: '2px',
              }}
            >
              Dubai
            </h1>
            <a
              href="tel:+971 56114477"
              style={{
                fontSize: '16px',
                fontWeight: 'normal',
                color: '#fff',
                marginBottom: '48px',
                textDecoration: 'none',
              }}
            >
              +971 56114477
            </a>
          </div>
          <br />
          <div>
            <h1
              style={{
                fontSize: '16px',
                fontWeight: 'normal',
                color: '#fff',
                marginBottom: '2px',
              }}
            >
              Our Partner
            </h1>
            <a
              style={{ marginLeft: '0px' }}
              target="_blank"
              href="https://imperiumme.com/"
              className="uae-mobile"
            >
              {' '}
              IMPERIUM <br /> Middle East
            </a>
          </div>
        </div>
      )}
      {location == 'ONLINE' && (
        <div className="onlinemobnumber" id="uaecountry">
          <div>
            <h1
              style={{ fontSize: '16px', fontWeight: 'normal', color: '#fff' }}
            >
              FinTech Certification
            </h1>
            <a
              href="tel:+91-8882007788"
              style={{
                fontSize: '16px',
                fontWeight: 'normal',
                color: '#fff',
                marginBottom: '48px',
                textDecoration: 'none',
              }}
            >
              +91 8882007788
            </a>
          </div>
          <div>
            <h1
              style={{ fontSize: '16px', fontWeight: 'normal', color: '#fff' }}
            >
              Online Analytics
            </h1>
            <a
              href="tel:+91-9513166751"
              style={{
                fontSize: '16px',
                fontWeight: 'normal',
                color: '#fff',
                marginBottom: '48px',
                textDecoration: 'none',
              }}
            >
              +91 9513166751
            </a>
          </div>
          <div>
            <h1
              style={{ fontSize: '16px', fontWeight: 'normal', color: '#fff' }}
            >
              Online Finance
            </h1>
            <a
              href="tel:+91-9319746164"
              style={{
                fontSize: '16px',
                fontWeight: 'normal',
                color: '#fff',
                marginBottom: '48px',
                textDecoration: 'none',
              }}
            >
              +91 9319746164
            </a>
          </div>
        </div>
      )}
      <div style={{ border: '0.5px solid #fff' }} />
    </section>
  )
}
export default FooterLocation
