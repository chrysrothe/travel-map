import { Destination } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const macau: Destination = {
    key: DestinationEnum.Macau,
    location: {
        latlng: new google.maps.LatLng(22.185574, 113.498153),
        zoom: 12,
    },
    name: 'Macau',
    slogan: '',
    picture: '../assets/pictures/macau/lg/ruins.jpg',
    date: new Date(2017, 6),
    spots: [
        {
            name: 'Ruins of St. Paul\'s',
            picture: '../assets/pictures/macau/lg/ruins.jpg',
            marker: {
                location: new google.maps.LatLng(22.197679, 113.540826),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/ruins_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
        },
        {
            name: 'Ruins of St. Paul\'s',
            picture: '../assets/pictures/macau/lg/ruins_2.jpg',
            marker: {
                location: new google.maps.LatLng(22.197558, 113.540749),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/ruins_2_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
            cannotBeTitle: true,
        },
        {
            name: 'Ruins of St. Paul\'s',
            picture: '../assets/pictures/macau/lg/ruins_3.jpg',
            marker: {
                location: new google.maps.LatLng(22.197586, 113.540516),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/ruins_3_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
            cannotBeTitle: true,
        },
        {
            name: 'Monte do Forte',
            picture: '../assets/pictures/macau/lg/monte_fort.jpg',
            marker: {
                location: new google.maps.LatLng(22.196645, 113.541989),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/monte_fort_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
        },
        {
            name: 'Monte do Forte',
            picture: '../assets/pictures/macau/lg/grand_lisboa.jpg',
            marker: {
                location: new google.maps.LatLng(22.196775, 113.542671),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/grand_lisboa_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
            cannotBeTitle: true,
        },
        {
            name: 'View on Grand Lisboa Casino, Monte do Forte',
            picture: '../assets/pictures/macau/lg/grand_lisboa_2.jpg',
            marker: {
                location: new google.maps.LatLng(22.196713, 113.542397),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/grand_lisboa_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
        },
        {
            name: 'View from Monte do Forte',
            picture: '../assets/pictures/macau/lg/monte_fort_2.jpg',
            marker: {
                location: new google.maps.LatLng(22.197534, 113.542561),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/monte_fort_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
        },
        {
            name: 'Temple at Casa Garden',
            picture: '../assets/pictures/macau/lg/temple.jpg',
            marker: {
                location: new google.maps.LatLng(22.200574, 113.538619),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/temple_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
            cannotBeTitle: true,
        },
        {
            name: 'Temple at Casa Garden',
            picture: '../assets/pictures/macau/lg/temple_2.jpg',
            marker: {
                location: new google.maps.LatLng(22.200448, 113.538762),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/temple_2_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
            cannotBeTitle: true,
        },
        {
            name: 'View at City, Casa Garden',
            picture: '../assets/pictures/macau/lg/city.jpg',
            marker: {
                location: new google.maps.LatLng(22.201141, 113.539543),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/city_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
        },
        {
            name: 'View at City, Casa Garden',
            picture: '../assets/pictures/macau/lg/city_2.jpg',
            marker: {
                location: new google.maps.LatLng(22.201044, 113.539575),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/city_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
        },
        {
            name: 'Casa Garden',
            picture: '../assets/pictures/macau/lg/casa_garden.jpg',
            marker: {
                location: new google.maps.LatLng(22.200141, 113.539370),
                options: {
                    icon: {
                        url: '../assets/pictures/macau/sm/casa_garden_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Macau,
        },
    ],
};
