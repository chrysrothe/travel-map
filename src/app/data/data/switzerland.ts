import { Destination } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const switzerland: Destination = {
    key: DestinationEnum.Switzerland,
    location: {
        latlng: new google.maps.LatLng(47.560968, 7.590322),
        zoom: 8,
    },
    name: 'Switzerland',
    slogan: '',
    picture: '../assets/pictures/basel/lg/basel1.jpg',
    date: new Date(2019, 6),
    spots: [
        {
            name: 'Old Middle Bridge',
            picture: '../assets/pictures/basel/lg/old_bridge.jpg',
            marker: {
                location: new google.maps.LatLng(47.560968, 7.590322),
                options: {
                    icon: {
                        url: '../assets/pictures/basel/sm/old_bridge_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Switzerland,
        },
        {
            name: 'View on Old Middle Bridge From Wettsteinbrücke',
            picture: '../assets/pictures/basel/lg/basel1.jpg',
            marker: {
                location: new google.maps.LatLng(47.556518, 7.596050),
                options: {
                    icon: {
                        url: '../assets/pictures/basel/sm/basel1_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Switzerland,
        },
    ],
};
