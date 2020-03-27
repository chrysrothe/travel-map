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
        {
            name: 'Golden-mantled ground squirrel',
            picture: '../assets/pictures/canada/lg/golden_mantled_squirrel.jpg',
            marker: {
                location: new google.maps.LatLng(51.407809, -116.239474),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/golden_mantled_squirrel_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
            cannotBeTitle: true,
        },
        {
            name: 'Herbert Lake',
            picture: '../assets/pictures/canada/lg/herbert_lake.jpg',
            marker: {
                location: new google.maps.LatLng(51.460720, -116.224009),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/herbert_lake_sm.jpg',
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
            name: 'Bow Lake',
            picture: '../assets/pictures/canada/lg/bow_lake.jpg',
            marker: {
                location: new google.maps.LatLng(51.680528, -116.462656),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/bow_lake_sm.jpg',
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
            name: 'Peyto Lake',
            picture: '../assets/pictures/canada/lg/peyto_lake.jpg',
            marker: {
                location: new google.maps.LatLng(51.717116, -116.506608),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/peyto_lake_sm.jpg',
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
            name: 'Rainbow at Peyto Lake',
            picture: '../assets/pictures/canada/lg/peyto_lake_rainbow.jpg',
            marker: {
                location: new google.maps.LatLng(51.717124, -116.506855),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/peyto_lake_rainbow_sm.jpg',
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
            name: 'Nature',
            picture: '../assets/pictures/canada/lg/nature.jpg',
            marker: {
                location: new google.maps.LatLng(52.110545, -116.972977),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/nature_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
            cannotBeTitle: true,
        },
        {
            name: 'Athabasca Falls',
            picture: '../assets/pictures/canada/lg/athabasca_falls.jpg',
            marker: {
                location: new google.maps.LatLng(52.664288, -117.883880),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/athabasca_falls_sm.jpg',
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
            name: 'Second Bridge, Maligne Canyon',
            picture: '../assets/pictures/canada/lg/maligne_canyon.jpg',
            marker: {
                location: new google.maps.LatLng(52.920271, -118.002812),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/maligne_canyon_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Canada,
            cannotBeTitle: true,
        },
        {
            name: 'Moose',
            picture: '../assets/pictures/canada/lg/moose.jpg',
            marker: {
                location: new google.maps.LatLng(52.836095, -117.718311),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/moose_sm.jpg',
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
            name: 'Maligne lake',
            picture: '../assets/pictures/canada/lg/maligne_lake.jpg',
            marker: {
                location: new google.maps.LatLng(52.728371, -117.637530),
                options: {
                    icon: {
                        url: '../assets/pictures/canada/sm/maligne_lake_sm.jpg',
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
