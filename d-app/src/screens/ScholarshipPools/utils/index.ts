import { IScholarshipPool } from "../models";


export const USD_TO_ADA = 2.32 //US dollar to ada as of 6 October 2022;
export const FEES_PERCENTATGE_SAMPLE_DATA = .1;
export const SITE_VISITED_LS_KEY = "SITE_VISITED";

export const DonationNftMap_SAMPLE_DATA = {
    100: "https://esquire-sg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/08/13151028/nft-fashion-luxury-sneakers-crypto-blockchain-style-menswear-esquire-singapore-esquiresg-cover-740x370.jpg",
    500: "https://causeartist.com/wp-content/uploads/2022/02/cool-points-club-nft-digital-asset.png",
    1000: "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2022/06/clon-coolcats-instagram-2-gID_1.png",
    1500: "https://www.actu-juridique.fr/app/uploads/2022/05/AdobeStock_481992223-1024x683.jpeg",
}
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