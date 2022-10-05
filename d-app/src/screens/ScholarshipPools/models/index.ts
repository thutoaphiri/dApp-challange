export interface IScholarshipPool {
    schoolDetails: ISchoolDetails
    donationDetails: IDonationDetails
}

export interface ISchoolDetails {
    schoolName: string
    schoolImage: string
    schoolFullDetailsUrl: string
}

export interface IDonationDetails {
    numberOfPeopleDonated: number
    donationRoundDaysLeft: number
    numberOfFundedScholarships: number
    numberOfAvailablePupilsToFund: number
    costToFundNextPupil: number
}