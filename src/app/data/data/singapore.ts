import { Destination } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const singapore: Destination = {
    key: DestinationEnum.Singapore,
    location: {
        latlng: new google.maps.LatLng(1.3500583219037285, 103.86564515872486),
        zoom: 11,
    },
    name: 'Singapore',
    slogan: 'What a modern city',
    picture: '../assets/pictures/singapore/lg/singapore_1.jpg',
    date: new Date(2017, 6),
    spots: [
        {
            name: 'Gardens by the Bay',
            picture: '../assets/pictures/singapore/lg/singapore_1.jpg',
            marker: {
                location: new google.maps.LatLng(1.2846603205205258, 103.86526817107705),
                options: {
                    icon: {
                        url: '../assets/pictures/singapore/sm/singapore_1_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Singapore,
        },
        {
            name: 'Marlon',
            picture: '../assets/pictures/singapore/lg/singapore_2.jpg',
            marker: {
                location: new google.maps.LatLng(1.2868368990056418, 103.85475652154672),
                options: {
                    icon: {
                        url: '../assets/pictures/singapore/sm/singapore_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Singapore,
        },
    ],
};
