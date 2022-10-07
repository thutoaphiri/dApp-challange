import { IScholarshipPool } from "../models";


export const USD_TO_ADA = 2.32 //US dollar to ada as of 6 October 2022;
export const FEES_PERCENTATGE_SAMPLE_DATA = .1;

export const scholarshipPools_SAMPLE_DATA: Array<IScholarshipPool> =[
    {
        schoolDetails: {
            schoolName: "Kagumo High School",
            schoolImage: "https://www.newportacademy.com/wp-content/uploads/NA_Resource_Scared-of-School_Interior_JPG-1024x570.jpg",
            schoolFullDetailsUrl: "https://directed.dev"
        },
        donationDetails: {
            numberOfAvailablePupilsToFund: 1,
            numberOfFundedScholarships: 23,
            numberOfPeopleDonated: 120,
            costToFundNextPupil: 300,
            donationRoundDaysLeft: 33
        }
    },
    {
        schoolDetails: {
            schoolName: "Strathmore High School",
            schoolImage: "https://thumbs.dreamstime.com/b/graduate-graduation-pretty-african-female-college-classmates-37038816.jpg",
            schoolFullDetailsUrl: "https://directed.dev"
        },
        donationDetails: {
            numberOfAvailablePupilsToFund: 12,
            numberOfFundedScholarships: 23,
            numberOfPeopleDonated: 1,
            costToFundNextPupil: 300,
            donationRoundDaysLeft: 1
        }
    },
    {
        schoolDetails: {
            schoolName: "HS Junior School",
            schoolImage: "https://cms-tc.pbskids.org/parents/articles/Back-to-School-Tips-for-Parents.jpg",
            schoolFullDetailsUrl: "https://directed.dev"
        },
        donationDetails: {
            numberOfAvailablePupilsToFund: 10,
            numberOfFundedScholarships: 10,
            numberOfPeopleDonated: 70,
            costToFundNextPupil: 500,
            donationRoundDaysLeft: 17
        }
    },
    {
        schoolDetails: {
            schoolName: "Strathmore High School",
            schoolImage: "https://thumbs.dreamstime.com/b/graduate-graduation-pretty-african-female-college-classmates-37038816.jpg",
            schoolFullDetailsUrl: "https://directed.dev"
        },
        donationDetails: {
            numberOfAvailablePupilsToFund: 12,
            numberOfFundedScholarships: 23,
            numberOfPeopleDonated: 1,
            costToFundNextPupil: 300,
            donationRoundDaysLeft: 1
        }
    },
];

export enum EScholarshipPoolsScreens {
    DONATION_POOLS = "pools",
    MAKE_DONATION = "make donation"
}