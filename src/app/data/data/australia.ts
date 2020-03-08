import { Destination } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const australia: Destination = {
    key: DestinationEnum.Australia,
    location: {
        latlng: new google.maps.LatLng(-24.936257, 126.575615),
        zoom: 5,
    },
    name: 'Australia',
    slogan: 'Where you meet some of the weirdest animals',
    picture: '../assets/pictures/australia/lg/kings_park.jpg',
    date: new Date(2015, 8),
    spots: [
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
    ],
};
