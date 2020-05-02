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
        name: 'Habour Bridge',
        picture: '../assets/pictures/australia/lg/habour_bridge.jpg',
        marker: {
            location: new google.maps.LatLng(-33.853081, 151.210551),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/habour_bridge_sm.jpg',
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
        name: 'View from Habour Bridge',
        picture: '../assets/pictures/australia/lg/habour_bridge_view.jpg',
        marker: {
            location: new google.maps.LatLng(-33.851175, 151.212708),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/habour_bridge_view_sm.jpg',
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
        name: 'Botanical Gardens',
        picture: '../assets/pictures/australia/lg/botanical_gardens.jpg',
        marker: {
            location: new google.maps.LatLng(-33.863495, 151.217953),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/botanical_gardens_sm.jpg',
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
    {
        name: 'Chinese Garden, Sydney',
        picture: '../assets/pictures/australia/lg/chinese_garden.jpg',
        marker: {
            location: new google.maps.LatLng(-33.876478, 151.202785),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/chinese_garden_sm.jpg',
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
        name: 'Chinese Garden, Sydney',
        picture: '../assets/pictures/australia/lg/chinese_garden_2.jpg',
        marker: {
            location: new google.maps.LatLng(-33.876177, 151.202607),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/chinese_garden_2_sm.jpg',
                    scaledSize: {
                        height: 75,
                        width: 50,
                    },
                },
            },
        },
        cannotBeTitle: true,
        destinatonKey: DestinationEnum.Australia,
    },
];
