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
            name: 'Angkor Wat Temple',
            picture: '../assets/pictures/cambodia/lg/angkor_wat_2.jpg',
            marker: {
                location: new google.maps.LatLng(13.411953, 103.864149),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/angkor_wat_2_sm.jpg',
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
        {
            name: 'Tonle Om Brigde',
            picture: '../assets/pictures/cambodia/lg/tonle_om_gate.jpg',
            marker: {
                location: new google.maps.LatLng(13.426781, 103.859427),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/tonle_om_gate_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Tonle Om Brigde',
            picture: '../assets/pictures/cambodia/lg/tonle_om_gate_2.jpg',
            marker: {
                location: new google.maps.LatLng(13.427199, 103.859601),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/tonle_om_gate_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Bayon Temple',
            picture: '../assets/pictures/cambodia/lg/bayon_4.jpg',
            marker: {
                location: new google.maps.LatLng(13.440618, 103.858804),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/bayon_4_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Bayon Temple',
            picture: '../assets/pictures/cambodia/lg/bayon_4.jpg',
            marker: {
                location: new google.maps.LatLng(13.440618, 103.858804),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/bayon_4_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Budda Faces, Bayon Temple',
            picture: '../assets/pictures/cambodia/lg/bayon.jpg',
            marker: {
                location: new google.maps.LatLng(13.441056, 103.858723),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/bayon_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Budda Face, Bayon Temple',
            picture: '../assets/pictures/cambodia/lg/bayon_2.jpg',
            marker: {
                location: new google.maps.LatLng(13.441391, 103.858711),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/bayon_2_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
            cannotBeTitle: true,
        },
        {
            name: 'Bayon Temple',
            picture: '../assets/pictures/cambodia/lg/bayon_3.jpg',
            marker: {
                location: new google.maps.LatLng(13.441322, 103.859875),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/bayon_3_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Baphuon Temple',
            picture: '../assets/pictures/cambodia/lg/baphuon_2.jpg',
            marker: {
                location: new google.maps.LatLng(13.443584, 103.856680),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/baphuon_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Baphuon Temple',
            picture: '../assets/pictures/cambodia/lg/baphuon.jpg',
            marker: {
                location: new google.maps.LatLng(13.443828, 103.856366),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/baphuon_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Baphuon Temple',
            picture: '../assets/pictures/cambodia/lg/baphuon_3.jpg',
            marker: {
                location: new google.maps.LatLng(13.443578, 103.856509),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/baphuon_3_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Phimeanakas Temple',
            picture: '../assets/pictures/cambodia/lg/phimeanakas.jpg',
            marker: {
                location: new google.maps.LatLng(13.445680, 103.855940),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/phimeanakas_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Terrace of Elephants',
            picture: '../assets/pictures/cambodia/lg/terrace_elephants_3.jpg',
            marker: {
                location: new google.maps.LatLng(13.446136, 103.858772),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/terrace_elephants_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Nature',
            picture: '../assets/pictures/cambodia/lg/nature.jpg',
            marker: {
                location: new google.maps.LatLng(13.672983, 104.026803),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/nature_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Spider, Kbal Spean Trail',
            picture: '../assets/pictures/cambodia/lg/spider.jpg',
            marker: {
                location: new google.maps.LatLng(13.680985, 104.022000),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/spider_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Centipede, Kbal Spean Trail',
            picture: '../assets/pictures/cambodia/lg/centipede.jpg',
            marker: {
                location: new google.maps.LatLng(13.682680, 104.018892),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/centipede_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Kbal Spean Trail',
            picture: '../assets/pictures/cambodia/lg/kbal_trail.jpg',
            marker: {
                location: new google.maps.LatLng(13.684630, 104.017954),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/kbal_trail_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: '1000 Lingas, Kbal Spean',
            picture: '../assets/pictures/cambodia/lg/lingas.jpg',
            marker: {
                location: new google.maps.LatLng(13.685723, 104.016294),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/lingas_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: '1000 Lingas, Kbal Spean',
            picture: '../assets/pictures/cambodia/lg/lingas_2.jpg',
            marker: {
                location: new google.maps.LatLng(13.685638, 104.016345),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/lingas_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: '1000 Lingas, Kbal Spean',
            picture: '../assets/pictures/cambodia/lg/lingas_3.jpg',
            marker: {
                location: new google.maps.LatLng(13.685650, 104.016271),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/lingas_3_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
            cannotBeTitle: true,
        },
        {
            name: 'Kbal Spean',
            picture: '../assets/pictures/cambodia/lg/kbal.jpg',
            marker: {
                location: new google.maps.LatLng(13.686286, 104.015676),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/kbal_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Kbal Spean',
            picture: '../assets/pictures/cambodia/lg/kbal_2.jpg',
            marker: {
                location: new google.maps.LatLng(13.686299, 104.015598),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/kbal_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Waterfall, Kbal Spean',
            picture: '../assets/pictures/cambodia/lg/waterfall.jpg',
            marker: {
                location: new google.maps.LatLng(13.686854, 104.015301),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/waterfall_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Durian Roundabout, Kampot',
            picture: '../assets/pictures/cambodia/lg/kampot.jpg',
            marker: {
                location: new google.maps.LatLng(10.610425, 104.181325),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/kampot_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Kampot',
            picture: '../assets/pictures/cambodia/lg/kampot_3.jpg',
            marker: {
                location: new google.maps.LatLng(10.609108, 104.177522),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/kampot_3_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Between Kampot and Kreb',
            picture: '../assets/pictures/cambodia/lg/kampot_2.jpg',
            marker: {
                location: new google.maps.LatLng(10.602659, 104.235278),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/kampot_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Bokor National Park',
            picture: '../assets/pictures/cambodia/lg/bokor.jpg',
            marker: {
                location: new google.maps.LatLng(10.604494, 104.103502),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/bokor_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Bokor National Park',
            picture: '../assets/pictures/cambodia/lg/bokor_2.jpg',
            marker: {
                location: new google.maps.LatLng(10.605057, 104.101419),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/bokor_2_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
            cannotBeTitle: true,
        },
        {
            name: 'Bokor National Park',
            picture: '../assets/pictures/cambodia/lg/bokor_3.jpg',
            marker: {
                location: new google.maps.LatLng(10.630047, 104.096626),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/bokor_3_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
            cannotBeTitle: true,
        },
        {
            name: 'Bokor National Park',
            picture: '../assets/pictures/cambodia/lg/bokor_4.jpg',
            marker: {
                location: new google.maps.LatLng(10.629185, 104.094773),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/bokor_4_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
            cannotBeTitle: true,
        },
        {
            name: 'Bokor National Park',
            picture: '../assets/pictures/cambodia/lg/bokor_5.jpg',
            marker: {
                location: new google.maps.LatLng(10.609423, 104.103983),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/bokor_5_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Bokor Mart, Bokor National Park',
            picture: '../assets/pictures/cambodia/lg/bokor_6.jpg',
            marker: {
                location: new google.maps.LatLng(10.620835, 104.078516),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/bokor_6_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Kep Beach',
            picture: '../assets/pictures/cambodia/lg/kep_beach.jpg',
            marker: {
                location: new google.maps.LatLng(10.478931, 104.294252),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/kep_beach_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'White Lady Statue',
            picture: '../assets/pictures/cambodia/lg/white_lady.jpg',
            marker: {
                location: new google.maps.LatLng(10.477647, 104.295679),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/white_lady_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
            cannotBeTitle: true,
        },
        {
            name: 'Kep Crab Statue',
            picture: '../assets/pictures/cambodia/lg/kep_crab.jpg',
            marker: {
                location: new google.maps.LatLng(10.476247, 104.299409),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/kep_crab_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Kep National Park',
            picture: '../assets/pictures/cambodia/lg/kep_mt.jpg',
            marker: {
                location: new google.maps.LatLng(10.490137, 104.305383),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/kep_mt_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Kep National Park',
            picture: '../assets/pictures/cambodia/lg/kep_mt_2.jpg',
            marker: {
                location: new google.maps.LatLng(10.493416, 104.304155),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/kep_mt_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Otres Beach',
            picture: '../assets/pictures/cambodia/lg/otres_beach.jpg',
            marker: {
                location: new google.maps.LatLng(10.573553, 103.550393),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/otres_beach_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Otres Beach',
            picture: '../assets/pictures/cambodia/lg/otres_beach_2.jpg',
            marker: {
                location: new google.maps.LatLng(10.583717, 103.542878),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/otres_beach_2_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
            cannotBeTitle: true,
        },
        {
            name: 'Otres Beach',
            picture: '../assets/pictures/cambodia/lg/otres_beach_3.jpg',
            marker: {
                location: new google.maps.LatLng(10.569616, 103.552461),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/otres_beach_3_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
        {
            name: 'Lions Roundabout, Sihanoukville',
            picture: '../assets/pictures/cambodia/lg/lions_roundabout.jpg',
            marker: {
                location: new google.maps.LatLng(10.610560, 103.523621),
                options: {
                    icon: {
                        url: '../assets/pictures/cambodia/sm/lions_roundabout_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Cambodia,
        },
    ],
};


