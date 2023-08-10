import Program from '../json/program.json'
import MasterLocationsAndAreaOfInterest from '../json/masterLocationsAndAreaOfInterest.json'

export const ValidateLSKey = (coursearr, lskey) => {
  // console.log(lskey, 'lskey')
  if (coursearr.filter((c) => c.leadsquareProgramKey == lskey)) {
    return true
  }
  return false
}

export const GetCourseObjectByLSKey = (coursearr, lskey) => {
  console.log('====================================')
  console.log(coursearr)
  console.log('====================================')
  console.log(lskey)
  let data = coursearr.filter((c) => c.leadsquareProgramKey == lskey)
  if (data.length == 0) {
    return null
  }

  return data[0]
}

export const GetCourseLSKeyByPath = (coursearr, path) => {
  let data = coursearr.filter((c) => c.link == path)
  if (data.length == 0) {
    return null
  }
  return data[0].leadsquareProgramKey
}

export const GetAllCourseValues = () => {
  let all_course_values = []
  for (var coursevalue in Program.all_courses_object) {
    all_course_values.push(coursevalue)
  }

  return all_course_values
}

/*
typical values:
input - CIBOP

output - [{'Delhi' : 'Delhi}, {'Mumbai' : 'Mumbai' }]
*/
export const GetProgramCentricLocationArrayByProgramObject = (program_obj) => {
  const centerValueByName = {}

  for (var i = 0; i < MasterLocationsAndAreaOfInterest.center.length; i++) {
    const centerName = MasterLocationsAndAreaOfInterest.center[i]['name']
    const centerValue = MasterLocationsAndAreaOfInterest.center[i]['value']

    centerValueByName[centerName] = centerValue
  }

  let finalLocationArrayForProgram = []
  const programSpecificLocationNames = program_obj['locationNames']
  for (var i = 0; i < programSpecificLocationNames.length; i++) {
    finalLocationArrayForProgram.push({
      name: programSpecificLocationNames[i],
      value: centerValueByName[programSpecificLocationNames[i]],
    })
  }

  return finalLocationArrayForProgram
}
export const CheckArrowByScreenWidth = (width, size, CardSize) => {
  return width / (CardSize + 10) <= size
}
export const GetProgramsAsPerTagName = (coursearr, tag, tag2) => {
  let data = coursearr.filter((c) => {
    if (tag && tag2) {
      return c.tag.includes(tag) && c.tag.includes(tag2)
    }
    return c.tag.includes(tag)
  })
  if (data.length == 0) {
    return null
  }
  return data.sort((a, b) => (a['createdAt'] > b['createdAt'] ? 1 : -1))
}

//data[0] = because it will give only one specific page data
export const GetSpecificdata = (coursearr, sCode) => {
  let data = coursearr.filter((c) => c.leadsquareProgramKey == sCode)
  if (data.length == 0) {
    return null
  }
  return data[0]
}
export const GetDeviceWidth = () => {
  let device = '',
    windowWidth
  if (typeof window !== `undefined`) {
    windowWidth = parseInt(window.innerWidth)
    console.log(windowWidth)
  }
  if (windowWidth > 1200) device = 'Desktop'
  else if (windowWidth > 520) device = 'Tablet'
  else device = 'Mobile'
}

export const GetWebinarByName = (webinarData, name) => {
  let data = webinarData.filter((data) => data.ProgramName === name)
  if (data.length == 0) {
    return null
  }
  console.log(data)
  return data[0]
}

export const CheckIfUTMIsOTPEnabled = (channel) => {
  if (
    channel == 'freshersworld' ||
    channel == 'iimjobs' ||
    channel == 'phonepe' ||
    channel == 'timescolombia' ||
    channel == 'remarketing' ||
    channel == 'display' ||
    channel == 'sms-internal' ||
    channel == 'whatsapp-internal' ||
    channel == 'internal-mailer' ||
    channel == 'discovery' ||
    channel == 'discoveryads' ||
    channel == 'performancemax' ||
    channel == 'bigtrunk'
  ) {
    return true
  } else {
    return false
  }
}
