import IOffice from "./offices";
interface IPartner {
      id: number
      urlName: string
      organization: string
      customerLocations: string
      willWorkRemotely: boolean
      website?: string
      services: string
      offices: IOffice[]
  }

export default IPartner;