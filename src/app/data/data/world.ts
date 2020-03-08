import { Destination } from '../models/destination.model';
import { canada } from './canada';
import { singapore } from './singapore';
import { DestinationEnum } from '../enums/destination.enum';

export const world: Destination = {
    key: DestinationEnum.World,
    location: {
        latlng: new google.maps.LatLng(3.571952303381702, 21.018709281328256),    
        zoom: 2,
    },
    name: 'World',
    slogan: 'There are so more places to visit',
    destinations: [
        canada,
        singapore,
    ]
};
