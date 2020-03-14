import { Marker } from './marker.model';
import { DestinationEnum } from '../enums/destination.enum';

export interface Destination {
    key: DestinationEnum;
    name: string;
    location: Location;
    date?: Date;
    slogan?: string;
    spots?: Spot[];
    picture?: string;
    destinations?: Destination[];
}

export interface Spot {
    name: string;
    picture: string;
    marker: Marker;
    destinatonKey?: DestinationEnum;
    cannotBeTitle?: boolean;
}

export interface Location {
    latlng: google.maps.LatLng;
    zoom: number;
}
