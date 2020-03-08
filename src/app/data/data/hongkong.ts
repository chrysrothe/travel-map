import { Destination } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const hongkong: Destination = {
    key: DestinationEnum.HongKong,
    location: {
        latlng: new google.maps.LatLng(22.319087, 114.085439),
        zoom: 12,
    },
    name: 'HongKong',
    slogan: 'The most expensive city in the world',
    picture: '../assets/pictures/hongkong/lg/the_peak_2.jpg',
    date: new Date(2017, 6),
    spots: [
        {
            name: 'The Peak',
            picture: '../assets/pictures/hongkong/lg/the_peak.jpg',
            marker: {
                location: new google.maps.LatLng(22.270880, 114.151004),
                options: {
                    icon: {
                        url: '../assets/pictures/hongkong/sm/the_peak_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.HongKong,
        },
        {
            name: 'The Peak',
            picture: '../assets/pictures/hongkong/lg/the_peak_2.jpg',
            marker: {
                location: new google.maps.LatLng(22.270977, 114.150721),
                options: {
                    icon: {
                        url: '../assets/pictures/hongkong/sm/the_peak_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.HongKong,
        },
        {
            name: 'Avenue of Comic Stars',
            picture: '../assets/pictures/hongkong/lg/comic_stars.jpg',
            marker: {
                location: new google.maps.LatLng(22.300882, 114.171519),
                options: {
                    icon: {
                        url: '../assets/pictures/hongkong/sm/comic_stars_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.HongKong,
        },
    ],
};
