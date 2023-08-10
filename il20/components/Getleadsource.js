function GetLeadSource(props) {
  if (props.utmSource !== null && props.utmMedium !== null) {
    var utmCampaignType = props.utmCampaignType.toLowerCase()
    var utmSource = props.utmSource.toLowerCase()
    var utmMedium = props.utmMedium.toUpperCase()
    // console.log(utmSource,utmMedium ,utmCampaignType)
  }
  if (utmCampaignType === 'youtube' && utmMedium === 'CPC')
    return 'Website - Youtube'
  else if (utmCampaignType === 'search' && utmMedium === 'CPC')
    return 'Website - Google Ads'
  else if (utmCampaignType === 'display' && utmMedium === 'CPC')
    return 'Website - Google Ads Display'
  else if (utmCampaignType === 'remarketing' && utmMedium === 'CPC')
    return 'Website - Google Ads Remarketing'
  else if (utmCampaignType === 'quora' && utmMedium === 'CPC')
    return 'Website - Quora Ads'
  else if (utmCampaignType === 'facebook' && utmMedium === 'CPC')
    return 'Website - Facebook Ads'
  else if (utmCampaignType === 'linkedin' && utmMedium === 'CPC')
    return 'Website - Linkedin Ads'
  else if (utmCampaignType === 'moneycontrol' && utmMedium === 'CPC')
    return 'Website - Moneycontrol Ads'
  else if (utmCampaignType === 'bing' && utmMedium === 'CPC')
    return 'Website - Bing Ads'
  else if (utmCampaignType === 'adroll' && utmMedium === 'CPC')
    return 'Website - Adroll Ads'
  else if (utmCampaignType === 'facebook group' && utmMedium === 'ORGANIC')
    return 'Website - Facebook Group'
  else if (utmCampaignType === 'twitter' && utmMedium === 'CPC')
    return 'Website - Twitter Ads'
  else if (utmCampaignType === 'facebook' && utmMedium === 'ORGANIC')
    return 'Website - Facebook'
  else if (utmCampaignType === 'linkedin' && utmMedium === 'ORGANIC')
    return 'Website - Linkedin'
  else if (utmCampaignType === 'twitter' && utmMedium === 'ORGANIC')
    return 'Website - Twitter'
  else if (utmCampaignType === 'gmail' && utmMedium === 'CPC')
    return 'Website - Google Ads Gmail'
  else if (utmCampaignType === 'dsa' && utmMedium === 'CPC')
    return 'Website - Google Ads DSA'
  else if (utmCampaignType === 'sdc' && utmMedium === 'CPC')
    return 'Website - Google Ads SDC'
  else if (utmCampaignType === 'sd' && utmMedium === 'CPC')
    return 'Website - Google Ads SD'
  else if (utmCampaignType === 'affiliates' && utmMedium === 'CPC')
    return 'Affiliate Marketing'
  else if (
    utmCampaignType === 'native' &&
    utmMedium === 'CPC' &&
    utmSource === 'taboola'
  )
    return 'Website - Taboola'
  else if (
    utmCampaignType === 'native' &&
    utmMedium === 'CPC' &&
    utmSource === 'outbrain'
  )
    return 'Website - Outbrain'
  else if (
    utmCampaignType === 'native' &&
    utmMedium === 'CPC' &&
    utmSource === 'criteo'
  )
    return 'Website - Criteo'
  else if (utmCampaignType === 'timescolombia' && utmMedium === 'AFFILIATE')
    return 'Timescolombia'
  else if (utmCampaignType === 'native' && utmMedium === 'CPC')
    return 'Native Advertising'
  else if (utmCampaignType === 'referral' && utmMedium === 'ORGANIC')
    return 'Website'
  else if (utmCampaignType === 'Organic' && utmMedium === 'ORGANIC')
    return 'Website'
  else if (utmCampaignType === ' ' && utmMedium === ' ') return 'Website'
  else if (utmCampaignType === 'vcommission' && utmMedium === 'VCOMMISSION')
    return 'VCommission'
  else if (utmCampaignType === 'mailer' && utmMedium === 'EMAIL')
    return 'Mailer - Internal Lite'
  else if (utmCampaignType === 'Addtitans' && utmMedium === 'CPC')
    return 'Addtitans'
  else if (
    utmSource === 'zirca' &&
    utmCampaignType === 'zirca' &&
    utmMedium === 'AFFILIATE'
  )
    return 'Zirca'
  else if (
    (utmSource === 'freshersworld' || utmSource === 'fresherworld') &&
    (utmMedium === 'CPC' || utmMedium === 'AFFILIATE')
  )
    return 'Freshersworld'
  else if (
    utmCampaignType === 'freshersworld' &&
    utmMedium === 'CPC' &&
    utmSource === 'freshersworld'
  )
    return 'Freshersworld'
  else if (
    utmCampaignType === 'collegedunia' &&
    utmMedium === 'AFFILIATE' &&
    utmSource === 'collegedunia'
  )
    return 'collegedunia'
  else if (utmCampaignType === 'sendy' && utmMedium === 'EMAIL') return 'Sendy'
  else if (utmCampaignType === 'LS-lite-mailers' && utmMedium === 'EMAIL')
    return 'LS lite mailers'
  else if (utmCampaignType === 'phonepe' && utmMedium === 'AFFILIATE')
    return 'phonepe'
  else if (utmCampaignType === 'whatsapp-internal' && utmMedium === 'WHATSAPP')
    return 'whatsapp-internal'
  else if (utmCampaignType === 'sms-internal' && utmMedium === 'SMS')
    return 'sms-internal'
  else if (utmCampaignType === 'internal-mailer' && utmMedium === 'EMAIL')
    return 'internal-mailer'
  else if (utmSource === 'facebook' && utmMedium === 'SOCIAL')
    return 'Website-Facebook'
  else if (utmSource === 'twitter' && utmMedium === 'SOCIAL')
    return 'Website-Twitter'
  else if (utmSource === 'linkedin' && utmMedium === 'SOCIAL')
    return 'Website-Linkedin'
  else if (utmSource === 'instagram' && utmMedium === 'SOCIAL')
    return 'Website-Instagram'
  else if (utmSource === 'pinterest' && utmMedium === 'SOCIAL')
    return 'Website-Pinterest'
  else if (utmSource === 'adimaginz' && utmCampaignType === 'adimaginz')
    return 'Adimaginz'
  else if (
    utmCampaignType === 'performancemax' &&
    utmMedium === 'CPC' &&
    utmSource === 'google'
  )
    return 'PerformanceMax'
  else if (
    utmCampaignType === 'careervira' &&
    utmMedium === 'CPC' &&
    utmSource === 'careervira'
  )
    return 'careervira'
  else if (
    utmCampaignType === 'skillenza-featured-activity' &&
    utmMedium === 'IN-APP-AD' &&
    utmSource === 'featured-activity'
  )
    return 'skillenza-Featured-Activity'
  else if (
    utmCampaignType === 'skillenza-internal-checkpoint' &&
    utmMedium === 'IN-APP-AD' &&
    utmSource === 'internal-checkpoint'
  )
    return 'skillenza-Internal-Checkpoint'
  else if (
    utmCampaignType === 'skillenza-beat' &&
    utmMedium === 'IN-APP-AD' &&
    utmSource === 'beat'
  )
    return 'Skillenza-Beat'
  else if (
    utmCampaignType === 'skillenza-home' &&
    utmMedium === 'IN-APP-AD' &&
    utmSource === 'home'
  )
    return 'Skillenza-Home'
  else if (
    utmCampaignType === 'skillenza-in-app-activity' &&
    utmMedium === 'IN-APP-AD' &&
    utmSource === 'activity'
  )
    return 'Skillenza-in-app-Activity'
  else if (
    utmCampaignType === 'skillenza-inApp' &&
    utmMedium === 'IN-APP-AD' &&
    utmSource === 'test'
  )
    return 'Skillenza-InApp'
  else if (
    utmCampaignType === 'skillenza-email' &&
    utmMedium === 'EMAIL' &&
    utmSource === 'direct'
  )
    return 'Skillenza-Email'
  else if (
    utmCampaignType === 'skillenza-email' &&
    utmMedium === 'EMAIL' &&
    utmSource === 'activity'
  )
    return 'Skillenza-Email'
  else if (
    utmCampaignType === 'skillenza-sms' &&
    utmMedium === 'SMS' &&
    utmSource === 'direct'
  )
    return 'Skillenza-SMS'
  else if (
    utmCampaignType === 'skillenza-sms' &&
    utmMedium === 'SMS' &&
    utmSource === 'test'
  )
    return 'Skillenza-SMS'
  else if (
    utmCampaignType === 'skillenza-sms' &&
    utmMedium === 'SMS' &&
    utmSource === 'activity'
  )
    return 'Skillenza-SMS'
  else if (
    utmCampaignType === 'skillenza-linkedin' &&
    utmMedium === 'LINKEDIN' &&
    utmSource === 'organic'
  )
    return 'Skillenza-linkedin'
  else if (
    utmCampaignType === 'skillenza-twitter' &&
    utmMedium === 'TWITTER' &&
    utmSource === 'organic'
  )
    return 'Skillenza-twitter'
  else if (
    utmCampaignType === 'skillenza-insta' &&
    utmMedium === 'INSTA' &&
    utmSource === 'organic'
  )
    return 'Skillenza-insta'
  else if (
    utmCampaignType === 'skillenza-whatsapp' &&
    utmMedium === 'WHATSAPP' &&
    utmSource === 'organic'
  )
    return 'Skillenza-whatsapp'
  else if (
    utmCampaignType === 'skillenza-telegram' &&
    utmMedium === 'TELEGRAM' &&
    utmSource === 'organic'
  )
    return 'Skillenza-telegram'
  else if (
    utmCampaignType === 'skillenza-facebook' &&
    utmMedium === 'FACEBOOK' &&
    utmSource === 'organic'
  )
    return 'Skillenza-facebook'
  else if (
    utmCampaignType === 'skillenza-discord' &&
    utmMedium === 'DISCORD' &&
    utmSource === 'organic'
  )
    return 'Skillenza-discord'
  else if (
    utmCampaignType === 'skillenza-menubar' &&
    utmMedium === 'MENUBAR' &&
    utmSource === 'organic'
  )
    return 'Skillenza-menubar'
  else if (
    utmCampaignType === 'skillenza-menubar' &&
    utmMedium === 'MENY-BAR' &&
    utmSource === 'skillenza'
  )
    return 'Skillenza-menubar'
  else return 'Website'
}

export default GetLeadSource
