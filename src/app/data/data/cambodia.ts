import { Destination } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const cambodia: Destination = {
    key: DestinationEnum.Cambodia,
    location: {
        latlng: new google.maps.LatLng(12.5008332,104.7913594),
        zoom: 7,
    },
    name: 'Cambodia',
    slogan: 'Home of the biggest religious temple',
    picture: '../assets/pictures/cambodia/lg/angkor_wat.jpg',
    date: new Date(2017, 6),
    spots: [
        {
            name: 'Angkor Wat Temple',
            picture: '../assets/pictures/cambodia/lg/angkor_wat.jpg',
            marker: {
                location: new google.maps.LatLng(13.412606, 103.862422),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/angkor_wat_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Little Monkey',
            picture: '../assets/pictures/cambodia/lg/monkey2.jpg',
            marker: {
                location: new google.maps.LatLng(13.411446, 103.866839),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/monkey_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            cannotBeTitle: true,
            destinatonKey: DestinationEnum.Cambodia,
        },
    ],
};
