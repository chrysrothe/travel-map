import { Destination } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';
import { perthSpots } from './perth-spots';
import { sydneySpots } from './sydney-spots';

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
       ...perthSpots,
       ...sydneySpots,
    ],
};
