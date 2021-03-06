import { Destination } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

import { canada } from './canada';
import { singapore } from './singapore';
import { hongkong } from './hongkong';
import { macau } from './macau';
import { australia } from './australia';
import { cambodia } from './cambodia';
import { switzerland } from './switzerland';

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
        switzerland,
        cambodia,
        singapore,
        macau,
        hongkong,
        australia,
    ],
};
