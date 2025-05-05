export type AccessTokenResponse = {
  access_token: string
  expires_in: number
  'not-before-policy': number
  refresh_expires_in: number
  scope: string
  token_type: 'Bearer'
}

export type XPTGender = 'male' | 'female' | 'undefined' | 'diverse'

export const XPTAppointment = {
  THC_ON_SITE : 'thc_on_site',
  THC_VIDEO_EG : 'thc_video_eg',
  THC_VIDEO : 'thc_video',
  CBD_VIDEO : 'cbd_video',
  NO_APPOINTMENT : 'no_appointment',
  UNMAPPED_APPOINTMENT : 'unmapped_appointment',
}
export type XPTAppointmentType = keyof typeof XPTAppointment
