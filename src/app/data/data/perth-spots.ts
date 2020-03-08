import { Spot } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const perthSpots: Spot[] = [
    {
        name: 'Skyline of Perth',
        picture: '../assets/pictures/australia/lg/perth_skyline.jpg',
        marker: {
            location: new google.maps.LatLng(-31.956734, 115.851097),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/perth_skyline_sm.jpg',
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
        name: 'Kings Park and Botanic Garden',
        picture: '../assets/pictures/australia/lg/kings_park.jpg',
        marker: {
            location: new google.maps.LatLng(-31.959582, 115.843425),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/kings_park_sm.jpg',
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
        name: 'Heirisson Island',
        picture: '../assets/pictures/australia/lg/kangaroo_island.jpg',
        marker: {
            location: new google.maps.LatLng(-31.9648397, 115.8814176),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/kangaroo_island_sm.jpg',
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
        name: 'Sunset at Scarborough Beach',
        picture: '../assets/pictures/australia/lg/scarborough_beach_sunset.jpg',
        marker: {
            location: new google.maps.LatLng(-31.8944023, 115.7553263),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/scarborough_beach_sunset_sm.jpg',
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
        name: 'Qoukkas on Rottnest Island',
        picture: '../assets/pictures/australia/lg/quokka.jpg',
        marker: {
            location: new google.maps.LatLng(-32.006294, 115.528005),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/quokka_sm.jpg',
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
        name: 'Australia Day in Perth',
        picture: '../assets/pictures/australia/lg/australia_day.jpg',
        marker: {
            location: new google.maps.LatLng(-31.961765, 115.867526),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/australia_day_sm.jpg',
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
