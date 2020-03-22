import { Spot } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const kununurraSpots: Spot[] = [
    {
        name: 'Sunset at Kelly\'s Knob',
        picture: '../assets/pictures/australia/lg/kellys_knob.jpg',
        marker: {
            location: new google.maps.LatLng(-15.765275, 128.742432),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/kellys_knob_sm.jpg',
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
        name: 'Kangaroo, Kelly\'s Knob',
        picture: '../assets/pictures/australia/lg/kellys_knob_kangaroo.jpg',
        marker: {
            location: new google.maps.LatLng(-15.764987, 128.740983),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/kellys_knob_kangaroo_sm.jpg',
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
        name: 'Kununurra',
        picture: '../assets/pictures/australia/lg/kununurra.jpg',
        marker: {
            location: new google.maps.LatLng(-15.773577, 128.745458),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/kununurra_sm.jpg',
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
        name: 'Mirima National Park',
        picture: '../assets/pictures/australia/lg/mirima.jpg',
        marker: {
            location: new google.maps.LatLng(-15.768201, 128.750982),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/mirima_sm.jpg',
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
        name: 'Mirima National Park',
        picture: '../assets/pictures/australia/lg/mirima_2.jpg',
        marker: {
            location: new google.maps.LatLng(-15.767035, 128.750050),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/mirima_2_sm.jpg',
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
        name: 'Sitting on the edge, Mirima National Park',
        picture: '../assets/pictures/australia/lg/wall.jpg',
        marker: {
            location: new google.maps.LatLng(-15.761245, 128.751734),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/wall_sm.jpg',
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
        name: 'Boab Tree',
        picture: '../assets/pictures/australia/lg/boab_tree.jpg',
        marker: {
            location: new google.maps.LatLng(-15.794547, 128.689542),
            options: {
                icon: {
                    url: '../assets/pictures/australia/sm/boab_tree_sm.jpg',
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
