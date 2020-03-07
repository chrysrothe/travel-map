export interface Marker {
    location: google.maps.LatLng;
    options: {
        icon: Icon;
    };
}

export interface Icon {
    url: string;
    scaledSize: {
        width: number;
        height: number;
    };
}