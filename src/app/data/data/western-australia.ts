import { Spot } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const westernAustraliaSpots: Spot[] = [
    {
        name: 'GinGin',
        picture: '../assets/pictures/australia/lg/gin_gin.jpg',
        marker: {
            location: new google.maps.LatLng(-31.348625, 115.904552),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/gin_gin_sm.jpg',
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
        name: 'The Pinnacles',
        picture: '../assets/pictures/australia/lg/pinnacles.jpg',
        marker: {
            location: new google.maps.LatLng(-30.606503, 115.159685),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/pinnacles_sm.jpg',
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
        name: 'The Pinnacles Desert',
        picture: '../assets/pictures/australia/lg/pinnacles_overview.jpg',
        marker: {
            location: new google.maps.LatLng(-30.600801, 115.158708),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/pinnacles_overview_sm.jpg',
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
        name: 'Island Rock',
        picture: '../assets/pictures/australia/lg/island_rock.jpg',
        marker: {
            location: new google.maps.LatLng(-27.82333, 114.1102483),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/island_rock_sm.jpg',
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
        name: 'Shell House, Kalbarri Western Australia',
        picture: '../assets/pictures/australia/lg/shell_house.jpg',
        marker: {
            location: new google.maps.LatLng(-27.803104, 114.117444),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/shell_house_sm.jpg',
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
        name: 'Shell House, Kalbarri Western Australia',
        picture: '../assets/pictures/australia/lg/natures_window.jpg',
        marker: {
            location: new google.maps.LatLng(-27.5531783, 114.445692),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/natures_window_sm.jpg',
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
        name: 'Little Lagoon Western Australia',
        picture: '../assets/pictures/australia/lg/blue_lagoon.jpg',
        marker: {
            location: new google.maps.LatLng(-27.5531783, 114.445692),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/blue_lagoon_sm.jpg',
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
