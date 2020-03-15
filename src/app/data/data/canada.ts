import { Destination } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const canada: Destination = {
    key: DestinationEnum.Canada,
    location: {
        latlng: new google.maps.LatLng(51.01363017310777, -121.02266082399416),
        zoom: 7,
    },
    name: 'Canada',
    picture: '../assets/pictures/canada/lg/canada_1.jpg',
    slogan: 'Epic Road Trip through the Rockies',
    date: new Date(2019, 8),
    spots: [
        {
            name: 'Lakeshore, Summerland',
            picture: '../assets/pictures/canada/lg/canada_1.jpg',
            marker: {
                location: new google.maps.LatLng(49.608919, -119.651983),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/canada_1_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Wap Lake',
            picture: '../assets/pictures/canada/lg/canada_2.jpg',
            marker: {
                location: new google.maps.LatLng(50.860680, -118.550876),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/canada_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Lookout, Mt Revelstoke National Park',
            picture: '../assets/pictures/canada/lg/canada_3.jpg',
            marker: {
                location: new google.maps.LatLng(51.008016, -118.187226),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/canada_3_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Mt Revelstoke National Park',
            picture: '../assets/pictures/canada/lg/canada_4.jpg',
            marker: {
                location: new google.maps.LatLng(51.047146, -118.143825),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/canada_4_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Mt Revelstoke National Park',
            picture: '../assets/pictures/canada/lg/canada_5.jpg',
            marker: {
                location: new google.maps.LatLng(51.062060, -118.130177),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/canada_5_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Glacier National Park',
            picture: '../assets/pictures/canada/lg/canada_6.jpg',
            marker: {
                location: new google.maps.LatLng(51.250531, -117.469835),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/canada_6_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Glacier National Park',
            picture: '../assets/pictures/canada/lg/canada_7.jpg',
            marker: {
                location: new google.maps.LatLng(51.251599, -117.470384),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/canada_7_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Bow River',
            picture: '../assets/pictures/canada/lg/canada_8.jpg',
            marker: {
                location: new google.maps.LatLng(51.281956, -115.944504),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/canada_8_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Cascade of Time Garden, Banff',
            picture: '../assets/pictures/canada/lg/canada_9.jpg',
            marker: {
                location: new google.maps.LatLng(51.171369, -115.571927),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/canada_9_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Bow Falls, Banff',
            picture: '../assets/pictures/canada/lg/bow_falls.jpg',
            marker: {
                location: new google.maps.LatLng(51.166688, -115.560701),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/bow_falls_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Bow River, Banff',
            picture: '../assets/pictures/canada/lg/banff_river.jpg',
            marker: {
                location: new google.maps.LatLng(51.165988, -115.558179),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/banff_river_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Bow River, Banff',
            picture: '../assets/pictures/canada/lg/banff_river_2.jpg',
            marker: {
                location: new google.maps.LatLng(51.173486, -115.574636),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/banff_river_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Brewster Creek, Banff',
            picture: '../assets/pictures/canada/lg/banff_river_3.jpg',
            marker: {
                location: new google.maps.LatLng(51.157324, -115.664206),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/banff_river_3_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Lake Louise',
            picture: '../assets/pictures/canada/lg/lake_louise.jpg',
            marker: {
                location: new google.maps.LatLng(51.417263, -116.221889),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/lake_louise_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Lake Louise',
            picture: '../assets/pictures/canada/lg/lake_louise_2.jpg',
            marker: {
                location: new google.maps.LatLng(51.416574, -116.224958),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/lake_louise_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
        {
            name: 'Fairmont Chateau, Lake Louise',
            picture: '../assets/pictures/canada/lg/lake_louise_3.jpg',
            marker: {
                location: new google.maps.LatLng(51.413845, -116.230264),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/lake_louise_3_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
        },
    ],
};
