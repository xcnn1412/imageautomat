declare module "thai-address-database" {
  // district = ตำบล/แขวง, amphoe = อำเภอ/เขต, province = จังหวัด
  export type ThaiAddress = { district: string; amphoe: string; province: string; zipcode: string }
  export function searchAddressByDistrict(q: string): ThaiAddress[]
  export function searchAddressByAmphoe(q: string): ThaiAddress[]
  export function searchAddressByProvince(q: string): ThaiAddress[]
  export function searchAddressByZipcode(q: string): ThaiAddress[]
  export function splitAddress(fullAddress: string): (ThaiAddress & { addressRest: string }) | null
}
