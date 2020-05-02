import { Destination } from '../models/destination.model';
import { DestinationEnum } from '../enums/destination.enum';

export const singapore: Destination = {
    key: DestinationEnum.Singapore,
    location: {
        latlng: new google.maps.LatLng(1.3500583219037285, 103.86564515872486),
        zoom: 11,
    },
    name: 'Singapore',
    slogan: 'What a modern city',
    picture: '../assets/pictures/singapore/lg/singapore_1.jpg',
    date: new Date(2017, 6),
    spots: [
        {
            name: 'Gardens by the Bay',
            picture: '../assets/pictures/singapore/lg/singapore_1.jpg',
            marker: {
                location: new google.maps.LatLng(1.2846603205205258, 103.86526817107705),
                options: {
                    icon: {
                        url: '../assets/pictures/singapore/sm/singapore_1_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Singapore,
        },
        {
            name: 'Gardens by the Bay',
            picture: '../assets/pictures/singapore/lg/gardens_by_the_bay.jpg',
            marker: {
                location: new google.maps.LatLng(1.283814, 103.864120),
                options: {
                    icon: {
                        url: '../assets/pictures/singapore/sm/gardens_by_the_bay_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Singapore,
        },
        {
            name: 'Skywalk, Gardens by the Bay',
            picture: '../assets/pictures/singapore/lg/skywalk.jpg',
            marker: {
                location: new google.maps.LatLng(1.282056, 103.863725),
                options: {
                    icon: {
                        url: '../assets/pictures/singapore/sm/skywalk_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Singapore,
        },
        {
            name: 'Cloud Forest, Gardens by the Bay',
            picture: '../assets/pictures/singapore/lg/cloud_forest.jpg',
            marker: {
                location: new google.maps.LatLng(1.284115, 103.865582),
                options: {
                    icon: {
                        url: '../assets/pictures/singapore/sm/cloud_forest_sm.jpg',
                        scaledSize: {
                            height: 75,
                            width: 50,
                        },
                    }
                },
            },
            cannotBeTitle: true,
            destinatonKey: DestinationEnum.Singapore,
        },
        {
            name: 'Cloud Forest, Gardens by the Bay',
            picture: '../assets/pictures/singapore/lg/cloud_forest_2.jpg',
            marker: {
                location: new google.maps.LatLng(1.284065, 103.866376),
                options: {
                    icon: {
                        url: '../assets/pictures/singapore/sm/cloud_forest_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    }
                },
            },
            destinatonKey: DestinationEnum.Singapore,
        },
        {
            name: 'Merlion',
            picture: '../assets/pictures/singapore/lg/singapore_2.jpg',
            marker: {
                location: new google.maps.LatLng(1.2868368990056418, 103.85475652154672),
                options: {
                    icon: {
                        url: '../assets/pictures/singapore/sm/singapore_2_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Singapore,
        },
        {
            name: 'Merlion',
            picture: '../assets/pictures/singapore/lg/merlion.jpg',
            marker: {
                location: new google.maps.LatLng(1.286856, 103.854138),
                options: {
                    icon: {
                        url: '../assets/pictures/singapore/sm/merlion_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Singapore,
        },
        {
            name: 'Marina Bay Sands',
            picture: '../assets/pictures/singapore/lg/marina_bay_sands.jpg',
            marker: {
                location: new google.maps.LatLng(1.282564, 103.857767),
                options: {
                    icon: {
                        url: '../assets/pictures/singapore/sm/marina_bay_sands_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Singapore,
        },
        {
            name: 'Marina Bay Sands at night',
            picture: '../assets/pictures/singapore/lg/marina_bay_sands_night.jpg',
            marker: {
                location: new google.maps.LatLng(1.284603, 103.858138),
                options: {
                    icon: {
                        url: '../assets/pictures/singapore/sm/marina_bay_sands_night_sm.jpg',
                        scaledSize: {
                            height: 50,
                            width: 75,
                        },
                    },
                },
            },
            destinatonKey: DestinationEnum.Singapore,
        },
    ],
};



