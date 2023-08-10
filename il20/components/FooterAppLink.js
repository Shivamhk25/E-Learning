const FooterAppLink = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '223px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h4
        style={{
          fontSize: '24px',
          fontWeight: 600,
          color: '#fff',
          marginBottom: '24px',
        }}
      >
        LEARN ON THE GO!
      </h4>
      {/* <img alt="" src="https://cdn.pegasus.imarticus.org/imarticus_2/group.svg" height="80px"
              width="156px" layout="fixed" style="cursor: pointer;"></img> */}
      <div>
        <div className="andriod_box">
          <a
            className="andriod_link"
            href="https://play.google.com/store/apps/details?id=com.imarticus"
          >
            <img
              src="https://cdn.pegasus.imarticus.org/imarticus_2/android.svg"
              width={20}
              height={20}
            ></img>
            <p>Get Android App</p>
          </a>
        </div>
        <div className="ios_box">
          <a
            className="andriod_link"
            href="https://apps.apple.com/in/app/imarticus-learning/id1479035797"
          >
            <img
              src="https://cdn.pegasus.imarticus.org/imarticus_2/apple.svg"
              width={20}
              height={20}
            ></img>
            <p>Get iOS App</p>
          </a>
        </div>
      </div>
    </div>
  )
}
export default FooterAppLink
