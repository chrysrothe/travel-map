import { Spot } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const blueMountainsSpots: Spot[] = [
    {
        name: 'Three Sisters, Blue Mountains',
        picture: '../assets/pictures/australia/lg/3_sisters.jpg',
        marker: {
            location: new google.maps.LatLng(-33.733058, 150.312770),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/3_sisters_sm.jpg',
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
        name: 'Cockatoo, Blue Mountains',
        picture: '../assets/pictures/australia/lg/cockatoo.jpg',
        marker: {
            location: new google.maps.LatLng(-33.72804, 150.30431),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/cockatoo_sm.jpg',
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
        name: 'Cockatoo, Blue Mountains',
        picture: '../assets/pictures/australia/lg/cockatoo_2.jpg',
        marker: {
            location: new google.maps.LatLng(-33.72804, 150.30431),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/cockatoo_2_sm.jpg',
                    scaledSize: {
                        height: 50,
                        width: 75,
                    },
                },
            },
        },
        destinatonKey: DestinationEnum.Australia,
    },
];
