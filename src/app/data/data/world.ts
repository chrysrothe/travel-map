import { Destination } from '../models/destination.model';
import { canada } from './canada';
import { singapore } from './singapore';

export const world: Destination = {
    key: 'world',
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
