import { Spot } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const sydneySpots: Spot[] = [
    {
        name: 'Sydney Opera House',
        picture: '../assets/pictures/australia/lg/opera_house_botanical_garden.jpg',
        marker: {
            location: new google.maps.LatLng(-33.859610, 151.221517),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/opera_house_botanical_garden_sm.jpg',
                    scaledSize: {
                        height: 50,
                        width: 75,
                    },
                }
            },
        },
        destinatonKey: DestinationEnum.Australia,
    },
    {
        name: 'Sydney Opera House with Skyline',
        picture: '../assets/pictures/australia/lg/opera_house.jpg',
        marker: {
            location: new google.maps.LatLng(-33.854312, 151.213223),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/opera_house_sm.jpg',
                    scaledSize: {
                        height: 50,
                        width: 75,
                    },
                },
            },
        },
        destinatonKey: DestinationEnum.Australia,
    },
    {
        name: 'Collins Beach',
        picture: '../assets/pictures/australia/lg/collins_beach.jpg',
        marker: {
            location: new google.maps.LatLng(-33.808337, 151.290652),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/collins_beach_sm.jpg',
                    scaledSize: {
                        height: 50,
                        width: 75,
                    },
                },
            },
        },
        destinatonKey: DestinationEnum.Australia,
    },
]
