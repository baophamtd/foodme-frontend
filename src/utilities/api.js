const querystring = require('querystring');
const moment = require('moment');
const Restaurant = require('./restaurant.object');
const WEATHER_API_KEY = 'a3a61defc8d1a149a9276e19249fd38d';
const END_POINT = 'http://localhost:3000';

let restaurantsTemp =   [
        {
            "_id": "5c7844966ba2e3aece082492",
            "place_id": "ChIJd6oXrIHLj4ARwyyGw0nVEqk",
            "address": "1092 N 1st St, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": []
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 28
                        },
                        {
                            "hour": 12,
                            "percentage": 56
                        },
                        {
                            "hour": 13,
                            "percentage": 43
                        },
                        {
                            "hour": 14,
                            "percentage": 12
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 25
                        },
                        {
                            "hour": 18,
                            "percentage": 43
                        },
                        {
                            "hour": 19,
                            "percentage": 46
                        },
                        {
                            "hour": 20,
                            "percentage": 30
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 25
                        },
                        {
                            "hour": 12,
                            "percentage": 38
                        },
                        {
                            "hour": 13,
                            "percentage": 32
                        },
                        {
                            "hour": 14,
                            "percentage": 15
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 19
                        },
                        {
                            "hour": 18,
                            "percentage": 39
                        },
                        {
                            "hour": 19,
                            "percentage": 45
                        },
                        {
                            "hour": 20,
                            "percentage": 28
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 23
                        },
                        {
                            "hour": 12,
                            "percentage": 58
                        },
                        {
                            "hour": 13,
                            "percentage": 59
                        },
                        {
                            "hour": 14,
                            "percentage": 25
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 25
                        },
                        {
                            "hour": 18,
                            "percentage": 39
                        },
                        {
                            "hour": 19,
                            "percentage": 42
                        },
                        {
                            "hour": 20,
                            "percentage": 31
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 30
                        },
                        {
                            "hour": 12,
                            "percentage": 72
                        },
                        {
                            "hour": 13,
                            "percentage": 52
                        },
                        {
                            "hour": 14,
                            "percentage": 14
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 11
                        },
                        {
                            "hour": 18,
                            "percentage": 37
                        },
                        {
                            "hour": 19,
                            "percentage": 60
                        },
                        {
                            "hour": 20,
                            "percentage": 41
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 34
                        },
                        {
                            "hour": 12,
                            "percentage": 68
                        },
                        {
                            "hour": 13,
                            "percentage": 53
                        },
                        {
                            "hour": 14,
                            "percentage": 20
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 16
                        },
                        {
                            "hour": 18,
                            "percentage": 57
                        },
                        {
                            "hour": 19,
                            "percentage": 100
                        },
                        {
                            "hour": 20,
                            "percentage": 75
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 22
                        },
                        {
                            "hour": 12,
                            "percentage": 35
                        },
                        {
                            "hour": 13,
                            "percentage": 41
                        },
                        {
                            "hour": 14,
                            "percentage": 36
                        },
                        {
                            "hour": 15,
                            "percentage": 24
                        },
                        {
                            "hour": 16,
                            "percentage": 20
                        },
                        {
                            "hour": 17,
                            "percentage": 42
                        },
                        {
                            "hour": 18,
                            "percentage": 84
                        },
                        {
                            "hour": 19,
                            "percentage": 98
                        },
                        {
                            "hour": 20,
                            "percentage": 62
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "XsE2L-fhUblfhz-LP-qQvQ",
            "likes": null,
            "location": {
                "lat": 37.356257,
                "lng": -121.904974
            },
            "name": "Danbi Korean Restaurant",
            "photos": [
                {
                    "height": 3120,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113118788705835303297/photos\">John Lin</a>"
                    ],
                    "photo_reference": "CmRaAAAAJroHysdSlzMWPqe6PnhcK9x71dXAwy0tiujb6dvl3U5Bp57mhoWBQla8LW8x8JzFmDhI1z88kYM4KoG4ulfQkBed3YGDl42HY6V810NHEcHNmmiwsrc_XsktlLyss1P6EhBuCd0rDPB1K41p6tyskSJwGhS32t3VVhAZESGjFO26ItVK0wz10g",
                    "width": 4160
                },
                {
                    "height": 2620,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101914927410313536501/photos\">Mika&#39;ele Keni&#39;</a>"
                    ],
                    "photo_reference": "CmRaAAAA3ig-AKvA21sjpwmf7N0xLlxprcOSdxSba34IxAKhxeQO6p4KxVpuFchJGZS0-w7UdieewIFfRDxWfZVMN6fW4LV_EIkENNI3atf7mQ2ANOPcB6B0d3Kckj1OXe5Gawx9EhCrL2pXnfI16IPH-mxhlEQNGhR8bkhX33bpmMq3BKSxFV3Zd9fbkg",
                    "width": 4656
                },
                {
                    "height": 1512,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105850299848495352316/photos\">Vernon Liang</a>"
                    ],
                    "photo_reference": "CmRaAAAAogSocPI1JVbuh61n9N0WiJq_Rc-FpaBM57aXRQvYl6oZJvYyuRrMrHUr1SLnkcb0F5PjCjlvvF7TmEn7bxS2yI3ZYl0ZJYN4AWxIklATwVv-yfBNFASRtXdEOHS_6IMTEhBHXYjHm9SYnMb8jaAq_gsSGhR85igQNUDyGPSw9zPNpfSTqqEWPw",
                    "width": 2688
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/118128965110160575448/photos\">Narene Lonh</a>"
                    ],
                    "photo_reference": "CmRaAAAAi5LTc58NzREYcBx7UBuqixU_YD6CLAV5vRNf0fsAOWFsWrz4gaxitsDE-UR0e50qPqWy_bbvDkpNg07qNuOcv-ArXQmoMBDgK5wKIaF0GfJdUXS4zESNVAYQJY37kRKpEhDAFt-mFUpDZSl2DTn2C58wGhSUCLUkGOhJMWNoi7H1R-5CbP0uzw",
                    "width": 5312
                },
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117960725785586771568/photos\">M Roman Khalil</a>"
                    ],
                    "photo_reference": "CmRaAAAAk81tEJVU7uvXR9JSg0Rkvype4OP5FigZSqzrfRl0cXCnzRxLuPkKbl8-77-ye7SLAnbaS4SpbgzpgKLMfO54QDlyBkHTQLflMbH-0Y7I0SFUw984dXohfu1YNpRDqMbQEhBPRdnzjyX8bW26Lk5-F6wwGhRdIptdB4QWkX4YUeEWzizC8lKXKA",
                    "width": 1920
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113786927402281717126/photos\">Josh Perlstein</a>"
                    ],
                    "photo_reference": "CmRaAAAADdcdNaHrxSpC9fxD9nIheRHjgot51jBwzvtqB1mOdaKgdvi-6NenGxHY4Elw66MvoTOu6L-P1BXTmHQuxAo6ClT_wfKBFAJLDYe9Sfy57VIyya2R9JqE79ZU3Vbgmxj_EhD59OQYOakXYSL-iDM5zBkGGhRNpcYcfYMSL1Q5w123mtrFy6SMNg",
                    "width": 4048
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107127468315336545075/photos\">Francisco Ramírez</a>"
                    ],
                    "photo_reference": "CmRaAAAANGF8y44G269KC65VRf8X-w8Y6IadFls1wY1-RH3mITdCc8aK_JGlGkKlUHBfCaX3ViHzT5Gy5qTAWUFHR1eEmDB79lsE1DUN9TYFv5AeX6UCr7U737jII9mWNFBQJL81EhDYt3extsCJNCOhSwao4594GhQc8ags1rLX-z_FVbvT5Y3LA470yQ",
                    "width": 4032
                },
                {
                    "height": 2448,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106690935547187180086/photos\">Sam Jacob Dev</a>"
                    ],
                    "photo_reference": "CmRaAAAAWs5CTydhp5rxE2HDCevtx-sWbVB7MNltbHciPXIdxz2VHUCMVdHsGzt6gM0BRDN4mN06ON8U0xAR63OvuZTfLZb047fhlTIggnnU_tgWRfU2xFgUEYHnwFH6b7zl82GMEhCvaxwFgGRjVIGlkXkCSEqtGhQjUhQqZma7ZLeFq58C_hqJkbqC9Q",
                    "width": 3264
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101966878389459198925/photos\">Weiying Li</a>"
                    ],
                    "photo_reference": "CmRaAAAABYITeLKmIgQ4gP2tjztCtib6I90jFwRtuW9yFzzx3j3cO1rii9B8SzoaCnO6qUcmX7R6P8eudeCJ4Fr_5-wUSR6HvE6xPM-abH94ygT6_kH890E2X4EtCad4Nx6iJ514EhA-1UTXhu5Mo38kgsliCkUvGhTkbkeCaJdn-hC5ThKip3k8MPFV4w",
                    "width": 4048
                },
                {
                    "height": 1440,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103054137936297848362/photos\">daniel kim</a>"
                    ],
                    "photo_reference": "CmRaAAAAGZA9YasMuLXA4YCv35V7NI2OW2dHfw9sqgR8n1OnnLM-WN1tunBV1MsEfL253R_V_w6zFghYZl90K0txo2M_Vp6YLxVfBjkgsqEH8pfkH1PSDUSuPYIqbpwsrYLxEd_LEhCVlQQBtJfATocwL_5xaReKGhRNGx2JeF1HET2ghX7dr1KVppQYng",
                    "width": 2560
                }
            ],
            "price": 2,
            "rating": 4.5,
            "types": [
                {
                    "alias": "korean",
                    "title": "Korean"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "7.4 mi",
                    "value": 11843
                },
                "duration": {
                    "text": "12 mins",
                    "value": 711
                },
                "durationInTraffic": {
                    "text": "12 mins",
                    "value": 709
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 3.521307945251465,
            "predicted_action": 2
        },
        {
            "_id": "5c6e44a86ba2e3aecee18873",
            "place_id": "ChIJe8Hvh7YtjoARkxrUB_d18kc",
            "address": "4898 San Felipe Rd, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 15
                        },
                        {
                            "hour": 12,
                            "percentage": 31
                        },
                        {
                            "hour": 13,
                            "percentage": 36
                        },
                        {
                            "hour": 14,
                            "percentage": 25
                        },
                        {
                            "hour": 15,
                            "percentage": 18
                        },
                        {
                            "hour": 16,
                            "percentage": 34
                        },
                        {
                            "hour": 17,
                            "percentage": 67
                        },
                        {
                            "hour": 18,
                            "percentage": 84
                        },
                        {
                            "hour": 19,
                            "percentage": 67
                        },
                        {
                            "hour": 20,
                            "percentage": 32
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": []
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 13
                        },
                        {
                            "hour": 12,
                            "percentage": 16
                        },
                        {
                            "hour": 13,
                            "percentage": 15
                        },
                        {
                            "hour": 14,
                            "percentage": 10
                        },
                        {
                            "hour": 15,
                            "percentage": 9
                        },
                        {
                            "hour": 16,
                            "percentage": 23
                        },
                        {
                            "hour": 17,
                            "percentage": 45
                        },
                        {
                            "hour": 18,
                            "percentage": 41
                        },
                        {
                            "hour": 19,
                            "percentage": 36
                        },
                        {
                            "hour": 20,
                            "percentage": 49
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 13
                        },
                        {
                            "hour": 12,
                            "percentage": 16
                        },
                        {
                            "hour": 13,
                            "percentage": 13
                        },
                        {
                            "hour": 14,
                            "percentage": 7
                        },
                        {
                            "hour": 15,
                            "percentage": 6
                        },
                        {
                            "hour": 16,
                            "percentage": 13
                        },
                        {
                            "hour": 17,
                            "percentage": 24
                        },
                        {
                            "hour": 18,
                            "percentage": 34
                        },
                        {
                            "hour": 19,
                            "percentage": 35
                        },
                        {
                            "hour": 20,
                            "percentage": 26
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 14
                        },
                        {
                            "hour": 12,
                            "percentage": 21
                        },
                        {
                            "hour": 13,
                            "percentage": 24
                        },
                        {
                            "hour": 14,
                            "percentage": 21
                        },
                        {
                            "hour": 15,
                            "percentage": 15
                        },
                        {
                            "hour": 16,
                            "percentage": 12
                        },
                        {
                            "hour": 17,
                            "percentage": 18
                        },
                        {
                            "hour": 18,
                            "percentage": 38
                        },
                        {
                            "hour": 19,
                            "percentage": 50
                        },
                        {
                            "hour": 20,
                            "percentage": 39
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 9
                        },
                        {
                            "hour": 12,
                            "percentage": 10
                        },
                        {
                            "hour": 13,
                            "percentage": 12
                        },
                        {
                            "hour": 14,
                            "percentage": 12
                        },
                        {
                            "hour": 15,
                            "percentage": 15
                        },
                        {
                            "hour": 16,
                            "percentage": 23
                        },
                        {
                            "hour": 17,
                            "percentage": 38
                        },
                        {
                            "hour": 18,
                            "percentage": 54
                        },
                        {
                            "hour": 19,
                            "percentage": 61
                        },
                        {
                            "hour": 20,
                            "percentage": 53
                        },
                        {
                            "hour": 21,
                            "percentage": 35
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 7
                        },
                        {
                            "hour": 12,
                            "percentage": 16
                        },
                        {
                            "hour": 13,
                            "percentage": 23
                        },
                        {
                            "hour": 14,
                            "percentage": 26
                        },
                        {
                            "hour": 15,
                            "percentage": 27
                        },
                        {
                            "hour": 16,
                            "percentage": 34
                        },
                        {
                            "hour": 17,
                            "percentage": 57
                        },
                        {
                            "hour": 18,
                            "percentage": 87
                        },
                        {
                            "hour": 19,
                            "percentage": 100
                        },
                        {
                            "hour": 20,
                            "percentage": 79
                        },
                        {
                            "hour": 21,
                            "percentage": 41
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "1S2iCoW7fwTnF0yxHs4Zaw",
            "likes": null,
            "location": {
                "lat": 37.2999129,
                "lng": -121.7715969
            },
            "name": "Milan Italiano",
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114156057841605211208/photos\">Kien Lam</a>"
                    ],
                    "photo_reference": "CmRaAAAAgBkBlmQQ3XZlgi3QUB7hfWaOrRphsjWtXNI8VT586R7pU7lj6FAB91AZhVHEzXvIpuIO8xjjd1Ivt5LnVFwjPTT0ahcahYHsaztwZhFYstdbNVheBkOQ-eBrt5_fQ273EhBkOHk9Myr40L5XcTGQqPUZGhTw8OKnOgd3RhmbPNAzsHo4qYSfFQ",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111737788480361540768/photos\">Monte Wright</a>"
                    ],
                    "photo_reference": "CmRaAAAAdzfA94sFmm7O3MXNvM2Ou-6bybLsQtWl1-wJEIGoXOi7guOmOEHnOT1UjMVRO7QsUiJo9xQxhqKRv2Z0T9XAm44BQ0CWi-T_-g4ZWMBvJN7B1E-VuKsUYmJ3FI2LXZa1EhB_zZVJTWNhHTnRtpxf3PIbGhR4FizsyYla0pPE3pXy-4162eevng",
                    "width": 3024
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114156057841605211208/photos\">Kien Lam</a>"
                    ],
                    "photo_reference": "CmRaAAAA72ERH_sMXVRotQFAHlDi2wz4ykyAX74K0qWaXeW-YkoGzL1MBxvI_Wev7cL1fS_PsUBq9G-samKVcPse4FW2q5yIv4liNrtoQzLdmzAsqZn-Pz0I_vJEAQ5H6_jnCJMaEhDkXbHiUPRjG4IjoP1582NvGhRWB8-AJSKM6f8Gw9oLTvJp_9Ej6g",
                    "width": 3024
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111737788480361540768/photos\">Monte Wright</a>"
                    ],
                    "photo_reference": "CmRaAAAAUs7E3TxKV8pwO0rFJjJdlRFRvH0euYuelcMUrT8JiQfKK8bcwMIrWPQR6PGw_MOz2qTDv2z7O4ocmZ2QPxLkXVtVyKmBCTW0h6MJOmdk8-NH0Mp2IRLRe9Rp-ZaXA0edEhCTBvlQMDdmpdpcPNjdCDwyGhRx7gF6jm1WowYYSGrJKFHHx6SS8w",
                    "width": 4032
                },
                {
                    "height": 1539,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115039261023412033665/photos\">Lucille Gaska</a>"
                    ],
                    "photo_reference": "CmRaAAAAJLOW7K8HL69e53tBgG4bWXUsLZuadiEYk3IxRbY_8kGA3bsnK-MdrTUBroEo3oDGI6DrKbJgWbfiztuBZCe6Zm8bZ8yJI16CGMThC_9fCJypHApQSf-JKBUrgJE2hhWEEhD5MsIP8AU3xC1Qvu5FsvuQGhTgRHOwPrenmlsqPZGguh-GuFqLNQ",
                    "width": 2048
                },
                {
                    "height": 3515,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103795045491632849262/photos\">Anna Cruz</a>"
                    ],
                    "photo_reference": "CmRaAAAA_-B4l3h0upZzx_7wExzhjCK4e4Hc5Nmw38B24N0uK1McAWNAlYIIDO7ZUuV6McquFoYroNtJ99yoRfcLDMp65gRLe08ylRvHsTJ8TEI_zN-d5TFiuSyxF1UyebmOzZjkEhCXRHOlpKUgdLdDNNL36wL4GhQXdcxd4lXv70yOy8XH7Herq2bvOw",
                    "width": 2704
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104815507187635446592/photos\">Bella Awdisho</a>"
                    ],
                    "photo_reference": "CmRaAAAAMzvj6dIcVRMLNngXfAZoeipDUWbzv6PkMS2aPz1UUNI-6NKHx8yRdHlGwm9p6L9yQnMHJhINxB7y2dPTonpAmhMipbgIWYX-VF_BakWc4C57-V9TRvu14zWTsHXWMd9BEhApmEEc10CCMmKGxeD07h7eGhQnE-oQ-NDAaMjvWbAoVaD0KsZvZg",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111737788480361540768/photos\">Monte Wright</a>"
                    ],
                    "photo_reference": "CmRaAAAAYhaV1jIJeaNlwc9dVBridPMCcXKw86dxha-Jpnd9QIHWFw6baOkPGIrm0Wmdj3BE-h2Wg0dFj9ISsQ5Ww3_hE6qDu0P31rPcGWquat3Due1ljyYEfloGBw6-oGPWhLOIEhBw0tXKe0f1EMZlR5jNCUQAGhTbVczteS5k35ndHLyuNcDW1oDW7Q",
                    "width": 3024
                },
                {
                    "height": 2048,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115039261023412033665/photos\">Lucille Gaska</a>"
                    ],
                    "photo_reference": "CmRaAAAAl8eGTjdI1f6f7Bb08NBSpeZdrMN39QDXSEi6Bnm8FU40zuK5v_ETy1W0CXAyBlNjbjtIAB8HBzIfWrHazaCiDJ75t57jZcWJ_Aju11m6LG98paqRYuU8b-OlcjFRRWOOEhAOD_WgUO0hzwungDLN91dbGhRiMSJ4tWYuewcE2PyYhG0nZyrlbA",
                    "width": 2048
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100691976887744162052/photos\">J Fang</a>"
                    ],
                    "photo_reference": "CmRaAAAADtuXy1NEgLyhLXGy033-hgDUPMbVSSAHL9ry7KWlryTaDoG-2ECVeIq1I5rTvcCwSGbATj__tInecuOUygWDA7UHek0ANBOs0ZY7zN8oBEdARFnnFDMIjbY0AVkgDEuPEhAwRWxOaT-oGM3O6u6qpZtUGhTT-0vws26-bU1tao9-nFElz3lOtg",
                    "width": 3024
                }
            ],
            "price": 3,
            "rating": 4,
            "types": [
                {
                    "alias": "italian",
                    "title": "Italian"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "5.4 mi",
                    "value": 8616
                },
                "duration": {
                    "text": "12 mins",
                    "value": 706
                },
                "durationInTraffic": {
                    "text": "12 mins",
                    "value": 710
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 4.384152412414551,
            "predicted_action": 2
        },
        {
            "_id": "5c6dd8d86ba2e3aecedff41e",
            "place_id": "ChIJZXPuq0syjoAR8Y9FHnWb86o",
            "address": "547 W Capitol Expy, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 0
                        },
                        {
                            "hour": 12,
                            "percentage": 0
                        },
                        {
                            "hour": 13,
                            "percentage": 48
                        },
                        {
                            "hour": 14,
                            "percentage": 66
                        },
                        {
                            "hour": 15,
                            "percentage": 66
                        },
                        {
                            "hour": 16,
                            "percentage": 61
                        },
                        {
                            "hour": 17,
                            "percentage": 75
                        },
                        {
                            "hour": 18,
                            "percentage": 99
                        },
                        {
                            "hour": 19,
                            "percentage": 97
                        },
                        {
                            "hour": 20,
                            "percentage": 62
                        },
                        {
                            "hour": 21,
                            "percentage": 25
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 11
                        },
                        {
                            "hour": 12,
                            "percentage": 22
                        },
                        {
                            "hour": 13,
                            "percentage": 33
                        },
                        {
                            "hour": 14,
                            "percentage": 37
                        },
                        {
                            "hour": 15,
                            "percentage": 34
                        },
                        {
                            "hour": 16,
                            "percentage": 35
                        },
                        {
                            "hour": 17,
                            "percentage": 45
                        },
                        {
                            "hour": 18,
                            "percentage": 56
                        },
                        {
                            "hour": 19,
                            "percentage": 56
                        },
                        {
                            "hour": 20,
                            "percentage": 41
                        },
                        {
                            "hour": 21,
                            "percentage": 22
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 15
                        },
                        {
                            "hour": 12,
                            "percentage": 23
                        },
                        {
                            "hour": 13,
                            "percentage": 30
                        },
                        {
                            "hour": 14,
                            "percentage": 32
                        },
                        {
                            "hour": 15,
                            "percentage": 30
                        },
                        {
                            "hour": 16,
                            "percentage": 28
                        },
                        {
                            "hour": 17,
                            "percentage": 38
                        },
                        {
                            "hour": 18,
                            "percentage": 56
                        },
                        {
                            "hour": 19,
                            "percentage": 64
                        },
                        {
                            "hour": 20,
                            "percentage": 48
                        },
                        {
                            "hour": 21,
                            "percentage": 23
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 19
                        },
                        {
                            "hour": 12,
                            "percentage": 28
                        },
                        {
                            "hour": 13,
                            "percentage": 33
                        },
                        {
                            "hour": 14,
                            "percentage": 33
                        },
                        {
                            "hour": 15,
                            "percentage": 32
                        },
                        {
                            "hour": 16,
                            "percentage": 33
                        },
                        {
                            "hour": 17,
                            "percentage": 43
                        },
                        {
                            "hour": 18,
                            "percentage": 66
                        },
                        {
                            "hour": 19,
                            "percentage": 76
                        },
                        {
                            "hour": 20,
                            "percentage": 54
                        },
                        {
                            "hour": 21,
                            "percentage": 23
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 21
                        },
                        {
                            "hour": 12,
                            "percentage": 32
                        },
                        {
                            "hour": 13,
                            "percentage": 38
                        },
                        {
                            "hour": 14,
                            "percentage": 36
                        },
                        {
                            "hour": 15,
                            "percentage": 29
                        },
                        {
                            "hour": 16,
                            "percentage": 28
                        },
                        {
                            "hour": 17,
                            "percentage": 41
                        },
                        {
                            "hour": 18,
                            "percentage": 60
                        },
                        {
                            "hour": 19,
                            "percentage": 65
                        },
                        {
                            "hour": 20,
                            "percentage": 46
                        },
                        {
                            "hour": 21,
                            "percentage": 22
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 28
                        },
                        {
                            "hour": 12,
                            "percentage": 48
                        },
                        {
                            "hour": 13,
                            "percentage": 57
                        },
                        {
                            "hour": 14,
                            "percentage": 48
                        },
                        {
                            "hour": 15,
                            "percentage": 33
                        },
                        {
                            "hour": 16,
                            "percentage": 29
                        },
                        {
                            "hour": 17,
                            "percentage": 45
                        },
                        {
                            "hour": 18,
                            "percentage": 72
                        },
                        {
                            "hour": 19,
                            "percentage": 87
                        },
                        {
                            "hour": 20,
                            "percentage": 77
                        },
                        {
                            "hour": 21,
                            "percentage": 49
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 28
                        },
                        {
                            "hour": 12,
                            "percentage": 51
                        },
                        {
                            "hour": 13,
                            "percentage": 66
                        },
                        {
                            "hour": 14,
                            "percentage": 63
                        },
                        {
                            "hour": 15,
                            "percentage": 52
                        },
                        {
                            "hour": 16,
                            "percentage": 55
                        },
                        {
                            "hour": 17,
                            "percentage": 77
                        },
                        {
                            "hour": 18,
                            "percentage": 100
                        },
                        {
                            "hour": 19,
                            "percentage": 97
                        },
                        {
                            "hour": 20,
                            "percentage": 69
                        },
                        {
                            "hour": 21,
                            "percentage": 35
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "cCKea_ufuGcxI14fhe84vw",
            "likes": null,
            "location": {
                "lat": 37.2758545677726,
                "lng": -121.852952245369
            },
            "name": "Cha Cha Sushi",
            "photos": [
                {
                    "height": 3120,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115427276160359939749/photos\">Clifford Aldan</a>"
                    ],
                    "photo_reference": "CmRaAAAA6xriCpRWtF346Ub764JJuMzaft5uUegrdq066-W7v74pT6snlCoR9-dll7FOhHq5WRcRQwxgExks9OywZd7EBU6SUccjRRW3bW6r3gZXwlfqJeEYSi3100bMk_5AXmBYEhCjSkTJ_qgfa_rwywewuk3eGhTaVvFV4FnoXVr19_HhZiaKc4Dkvw",
                    "width": 4160
                },
                {
                    "height": 4048,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114773419423390304710/photos\">Radhika Kanapur</a>"
                    ],
                    "photo_reference": "CmRaAAAAXQF1h3qfwqA9IOTzIH-2UvlSPqISMmAnaFM6mla2qlIHORxS5v5hLkGAJm2ZD-2YP6bLzvL_wl5wHIF_ixS4uGIuyGQ9tcRoesFGmZDAQy9V-EpBfJoxANhRnLXtB7RSEhBxu1TAiSw3x2g_It7h1UHTGhSpPNGIDSogSPwx7zFxLExCVCQK_g",
                    "width": 3036
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101839682262193572073/photos\">romeo</a>"
                    ],
                    "photo_reference": "CmRaAAAAVuJLmdmwQvGNHwIupbnpZZOaNTghRCUzVRsSO_jmUmY9nipzRB-qixesHwUGJFI-rOuqgB4OAGTCBzvtpgxAzA7X3e0oBrvtznJ23Tw5cFA2OVU6thGMrlDZymQaLfZyEhCPYzykACQQh6ucAKkH_AezGhTDrt_iCfuHrHIvhIXalWFjjpEq6g",
                    "width": 3024
                },
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103680461433585494134/photos\">M Romero</a>"
                    ],
                    "photo_reference": "CmRZAAAA1Miz4SPp7krBOlV--Xu46FRpgbFn2yf1sujIdk0m3kwZGGX8Fo4y3EafVYtq5vmJHyqGfK742RfpOr4ACArVrL7Q6YI72cMrwW1R6xI20dfmmyWwVOGDkfP--vWR78brEhAQWTCB-iKS0CRvauWMOvelGhTaTqfKMZ4ElChOsxaKWKVaCO08gw",
                    "width": 1920
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109817107482358525993/photos\">Phil Tadio, Jr.</a>"
                    ],
                    "photo_reference": "CmRaAAAAcE_LnpA1IeGaYxUnCJ3-93zFcTnt_GQk92u_ib5YUyu1iw3c47EsPnASPOuOyp5G7eBEFmNMX5Q70AmRW-zb8u_lbxCZfzDP51LxnwQQ34R-9lnET6m0jYbf9wp9KvlgEhBbq0SjDZGAQzrW8dNO4Pz9GhQ50vwY5kU62rc2nxYVvecD31352w",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110510772505305465499/photos\">pushpita shrestha</a>"
                    ],
                    "photo_reference": "CmRaAAAAYmLrFJfdyZXsRJsRYKXunLjofJul_ro4BxFKefShxExFonO-0IWhMKcZgtXBV_chc8gpWa6fPaRgND2UaOwkoxC8hbQgtRJ6MU3w_Ifc1IQUvhfRlcXeGHvdc1RXO0NxEhAKIFfZClgMx8Lh96PCA0XDGhQNtlZvc_DFwJ8axMhzKuNOnEpbEQ",
                    "width": 4032
                },
                {
                    "height": 3120,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115427276160359939749/photos\">Clifford Aldan</a>"
                    ],
                    "photo_reference": "CmRaAAAA8AFGRiljpAa__kBsLuimeVbv3JIRprUAr5LD9ab-T0Pxh_ef_EZTWROsnkYCgYxSZT0r9sfnflJyygGZinkgH0-IWPyaTqjHi0gLsQFouoJDB7RTNjlMnGpO0tXfVqXlEhB5Civ4_Qrg3iRBiLniX1pYGhSVK9JU9YLWd5fSINHZssoEx4VmvA",
                    "width": 4160
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101839682262193572073/photos\">romeo</a>"
                    ],
                    "photo_reference": "CmRaAAAAuQciKFZu_Xvl1cxfi1esoxWFq_gPuUeetkIM797QVf40cPyqYF78UXaLe-lDJU5xiWUS69J1suo_0eLkeJsVb77HbPZ7mONwL9QbAszfwiv5kvuo7rs5mMY6OGRpKB8wEhB-uGVFhcyyl1WG4Yh1tBJOGhSRgmsh7EMDgu96BpV1rn8WIRjGKw",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101839682262193572073/photos\">romeo</a>"
                    ],
                    "photo_reference": "CmRaAAAAVb4RLJhpvTJH5HPnWpMe4TalGWDyZeJyEDH9LquXlv7nGTmo2VVQEXBCdyHGzvqOffEJqJNynZyNjumvZhhBN2WHJ8ZMp6Mx6A-YP-LjwFQl5khsN-1tT8lyI7vytZZ8EhAHfHNsv7gUdGPRqvEsYiiiGhTc5FEr73i0JQaa3_ddoufIYNNZjQ",
                    "width": 4032
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105671425403342133576/photos\">Rudolf Pham</a>"
                    ],
                    "photo_reference": "CmRaAAAAPrYvg45SctUES_OZwqNCCNdeLM2yJskwtajIdcTA5VttTcH6ipac2MK4JlGZslcdr-qaFCOJGe3WQl43F6TY-civFwIJCuG3-1aTjcjGp5fn9qfGKspd090sn5KlKbVhEhBG_1iHCb1kpk60lx330qrpGhTwFyA-5IjciUIYo_bOuzuJFINRxg",
                    "width": 4048
                }
            ],
            "price": 2,
            "rating": 4,
            "types": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "japanese",
                    "title": "Japanese"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "4.4 mi",
                    "value": 7001
                },
                "duration": {
                    "text": "12 mins",
                    "value": 692
                },
                "durationInTraffic": {
                    "text": "11 mins",
                    "value": 687
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 3.9969141483306885,
            "predicted_action": 2
        },
        {
            "_id": "5c78444c6ba2e3aece082348",
            "place_id": "ChIJ2T4Vbn4tjoARh_fM1VyR9do",
            "address": "969 Story Rd, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 16
                        },
                        {
                            "hour": 10,
                            "percentage": 40
                        },
                        {
                            "hour": 11,
                            "percentage": 75
                        },
                        {
                            "hour": 12,
                            "percentage": 100
                        },
                        {
                            "hour": 13,
                            "percentage": 97
                        },
                        {
                            "hour": 14,
                            "percentage": 70
                        },
                        {
                            "hour": 15,
                            "percentage": 37
                        },
                        {
                            "hour": 16,
                            "percentage": 24
                        },
                        {
                            "hour": 17,
                            "percentage": 27
                        },
                        {
                            "hour": 18,
                            "percentage": 37
                        },
                        {
                            "hour": 19,
                            "percentage": 37
                        },
                        {
                            "hour": 20,
                            "percentage": 27
                        },
                        {
                            "hour": 21,
                            "percentage": 13
                        },
                        {
                            "hour": 22,
                            "percentage": 5
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 8
                        },
                        {
                            "hour": 11,
                            "percentage": 32
                        },
                        {
                            "hour": 12,
                            "percentage": 59
                        },
                        {
                            "hour": 13,
                            "percentage": 45
                        },
                        {
                            "hour": 14,
                            "percentage": 16
                        },
                        {
                            "hour": 15,
                            "percentage": 2
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 5
                        },
                        {
                            "hour": 18,
                            "percentage": 10
                        },
                        {
                            "hour": 19,
                            "percentage": 16
                        },
                        {
                            "hour": 20,
                            "percentage": 16
                        },
                        {
                            "hour": 21,
                            "percentage": 10
                        },
                        {
                            "hour": 22,
                            "percentage": 5
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 8
                        },
                        {
                            "hour": 11,
                            "percentage": 24
                        },
                        {
                            "hour": 12,
                            "percentage": 40
                        },
                        {
                            "hour": 13,
                            "percentage": 29
                        },
                        {
                            "hour": 14,
                            "percentage": 10
                        },
                        {
                            "hour": 15,
                            "percentage": 2
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 2
                        },
                        {
                            "hour": 18,
                            "percentage": 5
                        },
                        {
                            "hour": 19,
                            "percentage": 5
                        },
                        {
                            "hour": 20,
                            "percentage": 2
                        },
                        {
                            "hour": 21,
                            "percentage": 8
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 16
                        },
                        {
                            "hour": 12,
                            "percentage": 40
                        },
                        {
                            "hour": 13,
                            "percentage": 29
                        },
                        {
                            "hour": 14,
                            "percentage": 8
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 0
                        },
                        {
                            "hour": 18,
                            "percentage": 13
                        },
                        {
                            "hour": 19,
                            "percentage": 16
                        },
                        {
                            "hour": 20,
                            "percentage": 8
                        },
                        {
                            "hour": 21,
                            "percentage": 13
                        },
                        {
                            "hour": 22,
                            "percentage": 8
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 2
                        },
                        {
                            "hour": 11,
                            "percentage": 13
                        },
                        {
                            "hour": 12,
                            "percentage": 32
                        },
                        {
                            "hour": 13,
                            "percentage": 35
                        },
                        {
                            "hour": 14,
                            "percentage": 18
                        },
                        {
                            "hour": 15,
                            "percentage": 5
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 0
                        },
                        {
                            "hour": 18,
                            "percentage": 5
                        },
                        {
                            "hour": 19,
                            "percentage": 8
                        },
                        {
                            "hour": 20,
                            "percentage": 8
                        },
                        {
                            "hour": 21,
                            "percentage": 5
                        },
                        {
                            "hour": 22,
                            "percentage": 5
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 5
                        },
                        {
                            "hour": 11,
                            "percentage": 21
                        },
                        {
                            "hour": 12,
                            "percentage": 43
                        },
                        {
                            "hour": 13,
                            "percentage": 37
                        },
                        {
                            "hour": 14,
                            "percentage": 13
                        },
                        {
                            "hour": 15,
                            "percentage": 2
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 0
                        },
                        {
                            "hour": 18,
                            "percentage": 8
                        },
                        {
                            "hour": 19,
                            "percentage": 29
                        },
                        {
                            "hour": 20,
                            "percentage": 54
                        },
                        {
                            "hour": 21,
                            "percentage": 43
                        },
                        {
                            "hour": 22,
                            "percentage": 16
                        },
                        {
                            "hour": 23,
                            "percentage": 2
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 5
                        },
                        {
                            "hour": 10,
                            "percentage": 24
                        },
                        {
                            "hour": 11,
                            "percentage": 51
                        },
                        {
                            "hour": 12,
                            "percentage": 70
                        },
                        {
                            "hour": 13,
                            "percentage": 70
                        },
                        {
                            "hour": 14,
                            "percentage": 62
                        },
                        {
                            "hour": 15,
                            "percentage": 43
                        },
                        {
                            "hour": 16,
                            "percentage": 29
                        },
                        {
                            "hour": 17,
                            "percentage": 40
                        },
                        {
                            "hour": 18,
                            "percentage": 70
                        },
                        {
                            "hour": 19,
                            "percentage": 86
                        },
                        {
                            "hour": 20,
                            "percentage": 72
                        },
                        {
                            "hour": 21,
                            "percentage": 43
                        },
                        {
                            "hour": 22,
                            "percentage": 16
                        },
                        {
                            "hour": 23,
                            "percentage": 5
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "IbOKhiMc9ciqgSjLBUnSIg",
            "likes": null,
            "location": {
                "lat": 37.33175,
                "lng": -121.85805
            },
            "name": "Pho Ha Noi",
            "photos": [
                {
                    "height": 2336,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105537031752340677237/photos\">Harry Nguyen</a>"
                    ],
                    "photo_reference": "CmRaAAAAIcxQ_WvhMfP_eutftjMvyd4hbuyFcc6ciaLSPR21S1IgSMjaFkeYbE274SaOpt8clIDAx_52mGLK989VDqzCywEwOnQxH5GGyDAgS-aKPqEX31gwI2fk0jUf1S4XH3jcEhAd9QR8fD9FyGpngP_V2bngGhQq0Tr7Emibzra22bYZLAR4-1o0Yw",
                    "width": 3113
                },
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108035467146465556117/photos\">Tuan Dao</a>"
                    ],
                    "photo_reference": "CmRaAAAA_TPVOq7CE5gbXymRfHY6Xw1OezafmC-hs87Q7EuOIRxwHLOQkxyzGYY-Nc3EXfizBJkE7ZD4b7Qc8FPrpNEXO8ljZFm_IyO3fJX_uWu447t31NggKjfNSvcLgOuWOvO5EhBEPi7BPIE2191sAYsO2WF_GhT-9NPVsHjz3Y_hzOU78sWnb_tB8g",
                    "width": 4032
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106120122803532575615/photos\">Jason DePerro</a>"
                    ],
                    "photo_reference": "CmRaAAAATjSf_PvFeiQAdgwC8TDWPL3yJePq7e09ApcPv7cr4ld8TH52eyNqlWPHtMF4u0lCVFtF1_fsUCb9I6IK9LYedctNNQIxCmWf0k6QGkDno6_4-YN3Z1B5ud0oyN7BK0wpEhBGl02eM-bHcXrWVy-PS5tpGhTycH2tE7D6iftrh4ljk1TTC40cww",
                    "width": 4048
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108563487399496565285/photos\">高偉珉</a>"
                    ],
                    "photo_reference": "CmRaAAAASSG-GoptWuD3GwGi_tiERaRvyqJN-dzmary5MWff4P_mHUvuf27ZbSzujbbLlKiVJzhRJKtmxRxcbk3FAW3giLWRJcYcTsf1GLmTnFwUVlj8hm564I14R4gNrHrOHxGhEhCPn3nPGxPUg-wgRJ7P9zCbGhRX919FGdmvybT6eVEOyEnrPnsQQw",
                    "width": 4032
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106120122803532575615/photos\">Jason DePerro</a>"
                    ],
                    "photo_reference": "CmRaAAAAwuULA4l0sjhZ2PIq_6PZmHw9siPTaieJOudhew4U_s6UIrRbT4mA7ppds5NS-j510PlOaYGcVEiT7i-H3ly7PQynY-5xmP8MjFjLD6fe4018qlxYFaGhGJovpKz9gNnjEhC7OdG4q8BDXSixynYrzsd4GhS4fCbhc-vgmaZhRN69u-yj4N6cdw",
                    "width": 4048
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105505929818478530204/photos\">Vincent Chan</a>"
                    ],
                    "photo_reference": "CmRaAAAA6v3PHxLHyTJ4hUp2D-PgUl-vb2tNT0cB8Hx6uX4X0o7iHxCPYJwojMizRdUwFN7IWAQ9mZkR8GGtGoJnGaF9OPo40hXkLYVfzxUemkAzL6JRwa8Fy4s6eICDAv4-s1hnEhDKSAWYWBNZChariqSHdcIwGhTPlbKTvdVCytPjVnfpKwKUiFShHA",
                    "width": 4048
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100190519854750487303/photos\">Conrad Paz</a>"
                    ],
                    "photo_reference": "CmRaAAAA0mlGRYPsRHbPNzZEdYgHD9Gq7xN17xVh9ftiKLDXTmKhD4k3l4TJGCIdcHSahN6ebH1NlP5E60GRRptiYKdG5lfSmCD9yJvHQxp4a1dNUDKMVefjQs-1czMxlLyipZ0nEhCah6IAIZWMdAXYWzBqDIc0GhSF0js6BCwybOb90PShQbthk-u5AQ",
                    "width": 4032
                },
                {
                    "height": 3008,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116815253051172834998/photos\">Chris Chu</a>"
                    ],
                    "photo_reference": "CmRaAAAA4ohzsnXHtJ29BhRPl1XTJMoOOQdRjLZwsbUmIaaU_BqizZlE6BEJzehDm9s_0Z7YGwLO-n-pTvw21A76UXIAi9-kLkuuecjZLPWARpghHZb61zmAOIS2VGRvi6v4gsOJEhBD5yWBf2Fifo7Iy0NAz5caGhSYYJNI_q5nWl4tab8x8tlhFcmliQ",
                    "width": 4000
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108320224573839197933/photos\">Randy F.</a>"
                    ],
                    "photo_reference": "CmRaAAAAUt3YGwlC4Jt9IY1Sl5LduBkBoGlfPtd7__2Qtzbcv_LP5Vk7BzVsvIc-VVxjjeA5BXqmz1aKSIPE2sQV7RWynUCJ_P-m_HpQq2SM0DIvAqKfh9iwKklcgMtftXMd55rZEhBVvnQc-4hGw0GlAsOXHHC2GhTLpTeSdSFXA7CaJWSV9OcbB-Zi8g",
                    "width": 4608
                },
                {
                    "height": 2952,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107144822012638035228/photos\">Yoshika Hedberg</a>"
                    ],
                    "photo_reference": "CmRaAAAA_AgAbxsW0MADRi46YRnvdAkkM-lEShNNWGh1jXt73QKDlM2rt9p8eDZMn7F6j3xwJzBfaVEnqusTbEDbf_2SvEORrVcaPFVjjeAhoJyM4UxcN3mAhKNuvVRiH5EtktB5EhBUw_1ldlpoHiMcLvgrG8oVGhQpklqwyFq2reNVAEdE0cBhKwnY4w",
                    "width": 5248
                }
            ],
            "price": 2,
            "rating": 3.5,
            "types": [
                {
                    "alias": "vietnamese",
                    "title": "Vietnamese"
                },
                {
                    "alias": "noodles",
                    "title": "Noodles"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "1.9 mi",
                    "value": 3087
                },
                "duration": {
                    "text": "6 mins",
                    "value": 388
                },
                "durationInTraffic": {
                    "text": "7 mins",
                    "value": 447
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 3.9194300174713135,
            "predicted_action": 2
        },
        {
            "_id": "5c6e44a86ba2e3aecee18840",
            "place_id": "ChIJQ7-pkKTMj4AROiaA6W6MTPs",
            "address": "167 W San Fernando St, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 0
                        },
                        {
                            "hour": 12,
                            "percentage": 19
                        },
                        {
                            "hour": 13,
                            "percentage": 42
                        },
                        {
                            "hour": 14,
                            "percentage": 32
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 21
                        },
                        {
                            "hour": 18,
                            "percentage": 39
                        },
                        {
                            "hour": 19,
                            "percentage": 41
                        },
                        {
                            "hour": 20,
                            "percentage": 24
                        },
                        {
                            "hour": 21,
                            "percentage": 8
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 4
                        },
                        {
                            "hour": 12,
                            "percentage": 10
                        },
                        {
                            "hour": 13,
                            "percentage": 6
                        },
                        {
                            "hour": 14,
                            "percentage": 0
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 9
                        },
                        {
                            "hour": 18,
                            "percentage": 16
                        },
                        {
                            "hour": 19,
                            "percentage": 20
                        },
                        {
                            "hour": 20,
                            "percentage": 19
                        },
                        {
                            "hour": 21,
                            "percentage": 12
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 8
                        },
                        {
                            "hour": 12,
                            "percentage": 16
                        },
                        {
                            "hour": 13,
                            "percentage": 14
                        },
                        {
                            "hour": 14,
                            "percentage": 0
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 9
                        },
                        {
                            "hour": 18,
                            "percentage": 21
                        },
                        {
                            "hour": 19,
                            "percentage": 29
                        },
                        {
                            "hour": 20,
                            "percentage": 25
                        },
                        {
                            "hour": 21,
                            "percentage": 14
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 9
                        },
                        {
                            "hour": 12,
                            "percentage": 18
                        },
                        {
                            "hour": 13,
                            "percentage": 16
                        },
                        {
                            "hour": 14,
                            "percentage": 0
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 10
                        },
                        {
                            "hour": 18,
                            "percentage": 26
                        },
                        {
                            "hour": 19,
                            "percentage": 40
                        },
                        {
                            "hour": 20,
                            "percentage": 34
                        },
                        {
                            "hour": 21,
                            "percentage": 17
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 10
                        },
                        {
                            "hour": 12,
                            "percentage": 22
                        },
                        {
                            "hour": 13,
                            "percentage": 18
                        },
                        {
                            "hour": 14,
                            "percentage": 0
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 16
                        },
                        {
                            "hour": 18,
                            "percentage": 30
                        },
                        {
                            "hour": 19,
                            "percentage": 38
                        },
                        {
                            "hour": 20,
                            "percentage": 32
                        },
                        {
                            "hour": 21,
                            "percentage": 18
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 12
                        },
                        {
                            "hour": 12,
                            "percentage": 26
                        },
                        {
                            "hour": 13,
                            "percentage": 26
                        },
                        {
                            "hour": 14,
                            "percentage": 0
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 21
                        },
                        {
                            "hour": 18,
                            "percentage": 43
                        },
                        {
                            "hour": 19,
                            "percentage": 60
                        },
                        {
                            "hour": 20,
                            "percentage": 59
                        },
                        {
                            "hour": 21,
                            "percentage": 39
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 0
                        },
                        {
                            "hour": 12,
                            "percentage": 32
                        },
                        {
                            "hour": 13,
                            "percentage": 35
                        },
                        {
                            "hour": 14,
                            "percentage": 19
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 43
                        },
                        {
                            "hour": 18,
                            "percentage": 80
                        },
                        {
                            "hour": 19,
                            "percentage": 100
                        },
                        {
                            "hour": 20,
                            "percentage": 80
                        },
                        {
                            "hour": 21,
                            "percentage": 43
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "QJJd1N0QjQgUtv4hIuhqGg",
            "likes": null,
            "location": {
                "lat": 37.3330206602097,
                "lng": -121.892091400545
            },
            "name": "Taurinus Brazilian Steak House",
            "photos": [
                {
                    "height": 2322,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105809552287643437726/photos\">Marcos Candido</a>"
                    ],
                    "photo_reference": "CmRaAAAAORmJ1TihUQjuFcUBqH-tQeSUky5GFnQS2R0tn5DSU6W1L7En0_atugtTinzyp4hS2XERINzV3Cg8hYu58aztYKPxNsHeuJ8shSlmQqguCCfezQuTIOm2uTqMyIUQr6EREhCcBUeGrYFdoFJSrq1qDrTwGhRH-dwGlu3wSVdZeWezKK30aUcw0w",
                    "width": 4128
                },
                {
                    "height": 641,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113185020132069238522/photos\">Taurinus Brazilian Steak House</a>"
                    ],
                    "photo_reference": "CmRaAAAAHD_E0bLiGJd8QdvsD6A82OrP6UKmexCSCudpiuZskbpzhh0EQMDLChcsmd5kvH9AoIiA57PFaOenOI1hNcNOJlZejxXMGK4N_0fPRzJ27Kiz5Jb0rUKhJnmly_nWy5WOEhBfxE5Ty2xmJO54afF34IoQGhSBn8IhPScK-QD6BPITDu2MvA6RTQ",
                    "width": 960
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110593201244106614981/photos\">Tre Retter</a>"
                    ],
                    "photo_reference": "CmRaAAAAj-VPVXoncQKyy5FXrLeNJ3WBksa3Fd3-LW50W4Hwq_Z1xDI4q8R4mgbaSzcHFa3RbAX2wwTqpxIiRQsBpsuxI6RZyaRuyrQ86_hG3E5qVSDND-If_3Xes3xeer51pP8gEhBOfZQaqVbV3jBztju7lZd0GhRm_7wzOBvwZVHmrNM0COcW9yHs1A",
                    "width": 4048
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108481046464471306006/photos\">John Dyke</a>"
                    ],
                    "photo_reference": "CmRaAAAALhzZoTn-ry8757043MJqAvaLMeWvGeP5gXrR2jjgwXfTGgQ4y52iK2h5gjv928extUnXI-LlsFtuDrePflQcD-kvMJjWJKCYeBrx-AV8JGk8Lki-NhU0OFQGxkxO4e6qEhCeu9nUh69yMOiah5e1d6shGhR667R-kJia8wauiVWIF5ISoUwqXw",
                    "width": 5184
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111686439476489875447/photos\">Rafael Orozco</a>"
                    ],
                    "photo_reference": "CmRaAAAAfLpgRA4i-KYAnqId-hmIWKaXgUuIcosOYArUdipnyU1D-xFXpIpJkVzWdVBgoDqeeHY1T3tOijWQrLGzQSzqjKCDMDT20Ep826Hno4X-Hfhil6Qg-9S9tteG5vZE5oDhEhCmkn_5L-52eKNGnP1NhYwEGhQhW7yYTIBJj49Ja-e6-hhmpv6juw",
                    "width": 5312
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106841050763598923717/photos\">Feng Lili</a>"
                    ],
                    "photo_reference": "CmRZAAAAtM9U8ll-rI7v81GGXWUbNV0OVTQePM0U2Xt-sxbpvlwQhJ6Api6yz-rWxxJRltGZB_WouZogJBpPnzwUtbksk8Cvis8AUdykQ9WIEFEHH9qlfXHNGyC_BuHRXCx1moW-EhDYZZMIP5KmmEj6s3D-Gk2kGhTyXeczqyphZzwoDxUOdu9i4CC9hg",
                    "width": 4032
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108481046464471306006/photos\">John Dyke</a>"
                    ],
                    "photo_reference": "CmRaAAAAr7qQc7TEC4bFiG58c5B7qiAKklEYpcXeUqLcCj7Y87SqZexTV7ZY6KVmPCZGZ99HBOIjEndQGDHH5wCV_z7T19zSC9NwWatWdO__hDog91iOseSP2VtupSE0IEqDLETkEhDeLP4d0j0Yr4MqzmGkuldDGhSrsfd6C-XLJ6gqZGM4ZZLRklOyCQ",
                    "width": 5184
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106841050763598923717/photos\">Feng Lili</a>"
                    ],
                    "photo_reference": "CmRZAAAAt-26oytiA31kyHb_n-HPPEtqHRMq5P0CJSkvEhHT6oAXy5mQcOr6bfdnHvGS4GKwizlEbt5NDJhiT1w-TBf3Hz3PDJ79poZvc6lTzknud0DeKCn68hXlfIXbt9yv5R9REhDBXBRMgRqs4pKq0R3NJBNZGhRJa92abIlXcOb5M_OfuJ6qLzcNEw",
                    "width": 3024
                },
                {
                    "height": 2976,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117867708287313725528/photos\">shota shibasaki</a>"
                    ],
                    "photo_reference": "CmRaAAAAHX7W5QTH_1qofVPbX2ccBsfbLHnfzYvp5gIO3arva7jLbJ2dScSDX4IEPDzXmxZyVFGgB3p0WFn2RzZ1ImCagESV6FljbkhKb1OjspUfx5i8h7Jlc3LjsxEswTKsIe60EhBqBYUG9KH3reWI5bPIDT17GhTBLK9jCHvmGdlyO-gYTPXhafK9xA",
                    "width": 3968
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111686439476489875447/photos\">Rafael Orozco</a>"
                    ],
                    "photo_reference": "CmRaAAAAbMqKSpXOvUvHjrkfVv02mKuHloQOpFxboOEgX5AWjmBNMpBr4ybyxB_M3owiL6YMqw_jL8h0PIeldrN-9tvxZsJbi_w69YwOuzULvJZ06rXzHzEplRQ0ksIK70WQIQnoEhBIr5zdNP3Iu6hU6DDJX9WcGhTy_1lSPzl1BzYG8Zp8Qbfp_kR-Pw",
                    "width": 5312
                }
            ],
            "price": 3,
            "rating": 4,
            "types": [
                {
                    "alias": "brazilian",
                    "title": "Brazilian"
                },
                {
                    "alias": "steak",
                    "title": "Steakhouses"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "6.3 mi",
                    "value": 10104
                },
                "duration": {
                    "text": "11 mins",
                    "value": 662
                },
                "durationInTraffic": {
                    "text": "11 mins",
                    "value": 640
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 3.844947099685669,
            "predicted_action": 2
        },
        {
            "_id": "5ca449636ba2e3aeceabbe1a",
            "place_id": "ChIJR8Gmg4EyjoARs94Valehx8s",
            "address": "3005 Silver Creek Rd, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 35
                        },
                        {
                            "hour": 11,
                            "percentage": 65
                        },
                        {
                            "hour": 12,
                            "percentage": 90
                        },
                        {
                            "hour": 13,
                            "percentage": 89
                        },
                        {
                            "hour": 14,
                            "percentage": 65
                        },
                        {
                            "hour": 15,
                            "percentage": 36
                        },
                        {
                            "hour": 16,
                            "percentage": 20
                        },
                        {
                            "hour": 17,
                            "percentage": 30
                        },
                        {
                            "hour": 18,
                            "percentage": 54
                        },
                        {
                            "hour": 19,
                            "percentage": 54
                        },
                        {
                            "hour": 20,
                            "percentage": 27
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 13
                        },
                        {
                            "hour": 11,
                            "percentage": 35
                        },
                        {
                            "hour": 12,
                            "percentage": 48
                        },
                        {
                            "hour": 13,
                            "percentage": 35
                        },
                        {
                            "hour": 14,
                            "percentage": 18
                        },
                        {
                            "hour": 15,
                            "percentage": 16
                        },
                        {
                            "hour": 16,
                            "percentage": 20
                        },
                        {
                            "hour": 17,
                            "percentage": 18
                        },
                        {
                            "hour": 18,
                            "percentage": 15
                        },
                        {
                            "hour": 19,
                            "percentage": 39
                        },
                        {
                            "hour": 20,
                            "percentage": 25
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 9
                        },
                        {
                            "hour": 11,
                            "percentage": 41
                        },
                        {
                            "hour": 12,
                            "percentage": 49
                        },
                        {
                            "hour": 13,
                            "percentage": 20
                        },
                        {
                            "hour": 14,
                            "percentage": 13
                        },
                        {
                            "hour": 15,
                            "percentage": 18
                        },
                        {
                            "hour": 16,
                            "percentage": 19
                        },
                        {
                            "hour": 17,
                            "percentage": 16
                        },
                        {
                            "hour": 18,
                            "percentage": 21
                        },
                        {
                            "hour": 19,
                            "percentage": 30
                        },
                        {
                            "hour": 20,
                            "percentage": 24
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 14
                        },
                        {
                            "hour": 11,
                            "percentage": 20
                        },
                        {
                            "hour": 12,
                            "percentage": 24
                        },
                        {
                            "hour": 13,
                            "percentage": 23
                        },
                        {
                            "hour": 14,
                            "percentage": 17
                        },
                        {
                            "hour": 15,
                            "percentage": 12
                        },
                        {
                            "hour": 16,
                            "percentage": 11
                        },
                        {
                            "hour": 17,
                            "percentage": 19
                        },
                        {
                            "hour": 18,
                            "percentage": 30
                        },
                        {
                            "hour": 19,
                            "percentage": 31
                        },
                        {
                            "hour": 20,
                            "percentage": 19
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 16
                        },
                        {
                            "hour": 11,
                            "percentage": 25
                        },
                        {
                            "hour": 12,
                            "percentage": 30
                        },
                        {
                            "hour": 13,
                            "percentage": 28
                        },
                        {
                            "hour": 14,
                            "percentage": 21
                        },
                        {
                            "hour": 15,
                            "percentage": 13
                        },
                        {
                            "hour": 16,
                            "percentage": 10
                        },
                        {
                            "hour": 17,
                            "percentage": 19
                        },
                        {
                            "hour": 18,
                            "percentage": 36
                        },
                        {
                            "hour": 19,
                            "percentage": 36
                        },
                        {
                            "hour": 20,
                            "percentage": 19
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 9
                        },
                        {
                            "hour": 11,
                            "percentage": 31
                        },
                        {
                            "hour": 12,
                            "percentage": 49
                        },
                        {
                            "hour": 13,
                            "percentage": 41
                        },
                        {
                            "hour": 14,
                            "percentage": 22
                        },
                        {
                            "hour": 15,
                            "percentage": 16
                        },
                        {
                            "hour": 16,
                            "percentage": 16
                        },
                        {
                            "hour": 17,
                            "percentage": 20
                        },
                        {
                            "hour": 18,
                            "percentage": 42
                        },
                        {
                            "hour": 19,
                            "percentage": 58
                        },
                        {
                            "hour": 20,
                            "percentage": 30
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 34
                        },
                        {
                            "hour": 11,
                            "percentage": 67
                        },
                        {
                            "hour": 12,
                            "percentage": 96
                        },
                        {
                            "hour": 13,
                            "percentage": 100
                        },
                        {
                            "hour": 14,
                            "percentage": 74
                        },
                        {
                            "hour": 15,
                            "percentage": 44
                        },
                        {
                            "hour": 16,
                            "percentage": 31
                        },
                        {
                            "hour": 17,
                            "percentage": 38
                        },
                        {
                            "hour": 18,
                            "percentage": 48
                        },
                        {
                            "hour": 19,
                            "percentage": 45
                        },
                        {
                            "hour": 20,
                            "percentage": 29
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "fbXYaD4Z55J903-3mVOVsA",
            "likes": null,
            "location": {
                "lat": 37.3094701427092,
                "lng": -121.813761499475
            },
            "name": "Hue Restaurant",
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111992745418422588191/photos\">Duy Tran</a>"
                    ],
                    "photo_reference": "CmRaAAAAhYucNt2b2WmLQAPIQ-et4FCTQlKG07Av-rzqo3DgjGoZo_2kCd1N4F0Abz3G2LJn6N0HALajf0oQ83aP0SaCy-MJThRZLpvRT9H5ejyPRIT30hAbnqd9suA7bxr2fzmLEhCAm_vCnd65NEgGsC1m6tpgGhQ_gzulQ499wwmbORn96ccGFRVvkQ",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117359942912413334934/photos\">Larry Lam</a>"
                    ],
                    "photo_reference": "CmRaAAAAwnaggBXQISJRG31K6RDwBdUUz5e1-2qsB_Nizqz4Stya2jIiylaFF_XSFHTdJj8EONx0XdSi16SXdDUAj_P_bZ91uxZV7hB7Uvgw26-P9j_HUeNwP-i_5XZe0dHENE-8EhCRFCJRjiczBPLJnpsktj1qGhROOjth7V0e0HOGQe2EFiYXBf3YaA",
                    "width": 3024
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112018508741700131593/photos\">K Truong</a>"
                    ],
                    "photo_reference": "CmRaAAAAZYx_mMxYUl5OX5cVmtC2eBp7wHOIj0yta5-EUV2FGL_sTw3J-Hm8dtL07uIem3IcdUkB9tqetYNIniPRZdjgOpDHxJpaqsWbxP9qQBs7otw73YWBEYd_zXAKy7PxFmnQEhARedDqz-7q6JajdtbgQoETGhSUjDDtqO2w7wKKCG4q5pRfSOAlmg",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102572962659486933291/photos\">Ivy Leung</a>"
                    ],
                    "photo_reference": "CmRaAAAAFG_BcVF68H6i7GvBafG1nnvESJwjLIt0UOkNghLUbuky-_Mp9HobzMmrpR9mCTEyOZMxQzQZF7FL09l-mC2M4vHwquOxPzTsq6Fr9gD7s_H84gM3IWAO87zK5dUma8V8EhBhaknrA8AkLGD2PQVDqSGCGhT_aONtxM6qKVZU_App8C5hpkq0Zg",
                    "width": 3024
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103360254227855649775/photos\">Lady Diana Pineda</a>"
                    ],
                    "photo_reference": "CmRaAAAAEp97_OnhQ-h2qO-2Noy-mHYaGin67cziFTBPLH3mzRD6dhcI6qSQEvdQWDP546niV93BHhU8Syx1dHd3ZEvk0OmFwXtlL4y4iAIDk4ftWGp7K50UrhzvkP4rrG4h1jVJEhCln5Xw6zcxGiC6tpz4e7XvGhTAPrdtrolrHYUm5lgkwevQ6K3dYQ",
                    "width": 3024
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107790228146897233035/photos\">John Pham</a>"
                    ],
                    "photo_reference": "CmRaAAAAnPnjVe7pv6AH4ma0nCbdYSl1iFg_5nI3q3exgv1Vi596U7d2LvEVaQuxgY6wBRDwcDYylD33hpuGbAMLxpsSWTdDCn5wWtsWrRyF2iAwC1BMa4Ruhx_BSFVbQxN55MdmEhB148YJPtg2O0uHC_tC_tZhGhR9wQ18ibfF8yS53tBwTv1Shwb4Lw",
                    "width": 4048
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113130207287764497766/photos\">Patrick Linkous</a>"
                    ],
                    "photo_reference": "CmRaAAAAmUmYvGdjFxHOyzWeD4d707c6zbaUGQBbWh2cykmqy1U4EGS-HfXdKDfe7YlS88K7-CQrxgrH4I6kCZsG7mjbBSYudirp3hdj59V_g4FiWxyBCepa7Wz_IkoPy128JsdxEhAXnrsYzHf2moVKu9Q6IuK8GhQenxMvgO2QAlRVEGQ1ml9O2WXUcw",
                    "width": 4032
                },
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103054137936297848362/photos\">daniel kim</a>"
                    ],
                    "photo_reference": "CmRaAAAAlP60ygMgQjVUHrHDKR3VBJywLigZOds-dSUuTOn6lpjjzyMoto7LUocX1oUx7HOfsv1gjZ4l4LL0qTspg8CSBvwkJbX4fOTpIRaDVRHnEvTjIszLIBUIFGtmdksiomQhEhB3H-Uw5x-Nu_Phs2tGwAXuGhTdv78VdJrAOLMP5iIDf6dz66usEg",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111992745418422588191/photos\">Duy Tran</a>"
                    ],
                    "photo_reference": "CmRaAAAASLie6fBw0FIU09zIiLILKEndEpWDuTHMIk5zVNSMZhoYlqOjSL4Rpz1lR_Qh8IEyczYw8xm5wcX8jpx03C_P5ChoxOLK8CiN76Qt4RHPvAgBYnWVS4ulqhjkdtX5t7RvEhD8RhA6LDIkNbW_ZT8IDY2uGhTNgx_a9ERedG1GntsHWJj0WkmXkw",
                    "width": 4032
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102528923927978099938/photos\">Ben Nguyen</a>"
                    ],
                    "photo_reference": "CmRaAAAAGedibjoYyYH18CvzUaiiJaqOvbtwXE3hZQp9vkdgwSgHZAwKtL3F0BXEl4hcrPC3EQ4I0_7L5LJHoHo_dbTD8BmcNeayzm3xlzm9o7hDRyI_8NZ2SRmRB5hiJzLaT5XPEhCmzTygfjWstQaPWkcdM9TRGhRe8yXa_zsCcbYs4SejTGKxPteShQ",
                    "width": 4048
                }
            ],
            "price": 2,
            "rating": 4,
            "types": [
                {
                    "alias": "vietnamese",
                    "title": "Vietnamese"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "2.3 mi",
                    "value": 3656
                },
                "duration": {
                    "text": "8 mins",
                    "value": 501
                },
                "durationInTraffic": {
                    "text": "9 mins",
                    "value": 519
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 3.826023817062378,
            "predicted_action": 2
        },
        {
            "_id": "5c730d2f6ba2e3aecef3c8ab",
            "place_id": "ChIJ1Z_3Id_Ij4ARFkIKYjV1-Y4",
            "address": "182 Ranch Dr, Milpitas",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": []
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 28
                        },
                        {
                            "hour": 12,
                            "percentage": 52
                        },
                        {
                            "hour": 13,
                            "percentage": 58
                        },
                        {
                            "hour": 14,
                            "percentage": 40
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 33
                        },
                        {
                            "hour": 18,
                            "percentage": 67
                        },
                        {
                            "hour": 19,
                            "percentage": 76
                        },
                        {
                            "hour": 20,
                            "percentage": 48
                        },
                        {
                            "hour": 21,
                            "percentage": 17
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 36
                        },
                        {
                            "hour": 12,
                            "percentage": 50
                        },
                        {
                            "hour": 13,
                            "percentage": 44
                        },
                        {
                            "hour": 14,
                            "percentage": 26
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 13
                        },
                        {
                            "hour": 18,
                            "percentage": 52
                        },
                        {
                            "hour": 19,
                            "percentage": 88
                        },
                        {
                            "hour": 20,
                            "percentage": 66
                        },
                        {
                            "hour": 21,
                            "percentage": 22
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 44
                        },
                        {
                            "hour": 12,
                            "percentage": 68
                        },
                        {
                            "hour": 13,
                            "percentage": 51
                        },
                        {
                            "hour": 14,
                            "percentage": 18
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 25
                        },
                        {
                            "hour": 18,
                            "percentage": 54
                        },
                        {
                            "hour": 19,
                            "percentage": 72
                        },
                        {
                            "hour": 20,
                            "percentage": 61
                        },
                        {
                            "hour": 21,
                            "percentage": 31
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 41
                        },
                        {
                            "hour": 12,
                            "percentage": 64
                        },
                        {
                            "hour": 13,
                            "percentage": 54
                        },
                        {
                            "hour": 14,
                            "percentage": 24
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 17
                        },
                        {
                            "hour": 18,
                            "percentage": 41
                        },
                        {
                            "hour": 19,
                            "percentage": 64
                        },
                        {
                            "hour": 20,
                            "percentage": 67
                        },
                        {
                            "hour": 21,
                            "percentage": 45
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 45
                        },
                        {
                            "hour": 12,
                            "percentage": 69
                        },
                        {
                            "hour": 13,
                            "percentage": 65
                        },
                        {
                            "hour": 14,
                            "percentage": 37
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 11
                        },
                        {
                            "hour": 18,
                            "percentage": 37
                        },
                        {
                            "hour": 19,
                            "percentage": 78
                        },
                        {
                            "hour": 20,
                            "percentage": 100
                        },
                        {
                            "hour": 21,
                            "percentage": 78
                        },
                        {
                            "hour": 22,
                            "percentage": 37
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 16
                        },
                        {
                            "hour": 12,
                            "percentage": 40
                        },
                        {
                            "hour": 13,
                            "percentage": 58
                        },
                        {
                            "hour": 14,
                            "percentage": 48
                        },
                        {
                            "hour": 15,
                            "percentage": 23
                        },
                        {
                            "hour": 16,
                            "percentage": 11
                        },
                        {
                            "hour": 17,
                            "percentage": 17
                        },
                        {
                            "hour": 18,
                            "percentage": 40
                        },
                        {
                            "hour": 19,
                            "percentage": 70
                        },
                        {
                            "hour": 20,
                            "percentage": 85
                        },
                        {
                            "hour": 21,
                            "percentage": 71
                        },
                        {
                            "hour": 22,
                            "percentage": 42
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "AOID716IwZk142q7VnicDA",
            "likes": null,
            "location": {
                "lat": 37.42783,
                "lng": -121.92021
            },
            "name": "Banana Leaf Restaurant",
            "photos": [
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102127816559576392189/photos\">Tammy Liu</a>"
                    ],
                    "photo_reference": "CmRaAAAAQUXjDRjCnMcPMONkJbcpnFNZwjiGGUlazPXl4nyxlJjHe2KfVYZqFwHqk-AeI73wjFaMCutUreKGaks8F-G1QRY_YVfAcdlqiXk_0kbScQIy50mNXCztBln3pLeKUEzSEhAtPazIPKU9kB6Qo9l8uE5CGhTuIWDHxxGMuvCfT9HZ7Fe41vvm3w",
                    "width": 4032
                },
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104714439265889558081/photos\">Hai Tang</a>"
                    ],
                    "photo_reference": "CmRaAAAAANdrZTPl2kRiPm_MgZr3lN3rSivaO9FJdiqSOJ3ur4nwAFa94nzLXPBzieqo1M4XLCArh_hHDphWbrCAiaDT0VNyeH9d739fssoq_Ot7XFKA7it9HNPSex9w654ci62iEhBZ99xc98Uuuua6MBeA_lo5GhQ3Uf0Hdjc7himdL9a4ej1nCofRZg",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113655390942710367023/photos\">Derek Leong</a>"
                    ],
                    "photo_reference": "CmRaAAAALmot-0kVYqC4KOoEt8YGPrgL2hf4wRrkWZsrce33WR83SBscwYQ5ocITDIx0cKUhrbFw36fYrUNrgC6SLWEP5gVAbVGaoPKEMC4Bts9m3tEoRAOmehIrTkQixJTOLpKCEhA0gSIsBxS5JYksMYlVjMlnGhQNh-Bt07SilhUl2hawVxnsNkzj2A",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103268566938799707052/photos\">Tom Y</a>"
                    ],
                    "photo_reference": "CmRaAAAAUhQyQQ6fT10YHqhFGHX5G_Rh36GTRRI-nLol3VeEYMyngr7Ax5LP0uT4KDbBTfpbIMu_bLnnHAXBOIomujVWcIpATpH_lG9mEdEw7wqXl43MtEKHlW5wCzNEc5uRSFAPEhClG_BxIHWxOPPr9NKzP-PbGhTtuaGL9xqIDKSF6I3KSlxABxwb2Q",
                    "width": 3024
                },
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102127816559576392189/photos\">Tammy Liu</a>"
                    ],
                    "photo_reference": "CmRaAAAAcloDp9jyDrkBZN65y2u1-VZv01gE5qEatHJXa2p-SPkz6LELAQs4gVhoyKfsDaoTi-VfQ_2juPDFAy44tOYXo-_Kuwht75lssV0hDarQYJgAQlhY-hjRt1KlIyek28VmEhDd2EpuT0UOzgM8LJWdZo4wGhRyKdGXuZobBo1SBScySeOPGdN1WA",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112521419891051517391/photos\">Nomad Nabs</a>"
                    ],
                    "photo_reference": "CmRaAAAAn9SyFOcf73t8HGplqmpgpSU6cRmC8dxWIcUybqIXcVw7AyxVTgRtDX5sIzZOKLqMHeWP-4MkI_SA4RIqlpIWakOP87YDheFv5RInR5x9kWiJoOHx573OkFZ8xFZH8_C1EhDt9j8aw-1kLfI2m768Iv63GhTDX5iswU7N5_7Y_lWD8YNhwNddWw",
                    "width": 3024
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116249253521530510916/photos\">Luke Honnen</a>"
                    ],
                    "photo_reference": "CmRaAAAAAnegYWLJLoG3OlWixFVKVd35-Ggb4JSU2mDdE5nKamPB9FglcajfXpB3lHXbMUSUc4pIh5hP_bNvj-K0gkSsk9KXgddkhSOTjDEAKvCVpAjaQvV5tlJ-_zv4fayjIOM1EhAr6xyhuEGnrjye03Ans6UIGhR-uACPXO1L0dRXxcQGXPxwfvzBzw",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111737788480361540768/photos\">Monte Wright</a>"
                    ],
                    "photo_reference": "CmRaAAAASi3uU2mwRVywY4GnDCMdX6odF35XhtsS_coWGi1TfGiDSYYGQQehIiyQrrHeF_yGEzzupMU3Iw-HA7NyHnzLrz8Y9vYJ_axhaEs7I_aKr07OfYgA7blAcDukXgvJKqtTEhDe5fp_dn4THLwD2XmV5TEvGhRDoUCSv4IbGn1AKf9-F3ge5T7N4g",
                    "width": 3024
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114755141393170995154/photos\">Janet Kuo</a>"
                    ],
                    "photo_reference": "CmRaAAAALFdkJDI5_NaHw1vOqVQh1j4hTX19kKbHaJjVuIH26_yR4ecmoN-fJwwtw0CpNivriiBo9G6unugroq6YWIjKmeC2_JyH3Pp5zfoT45fN0X5VOr-vRs9dspp7obqg9oKxEhA9ewaupqbjPfioOCEKqm7LGhRXLi1R39snCEP5ke0iBycAIZfN0A",
                    "width": 4032
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106672985669452288539/photos\">Bernard Chau</a>"
                    ],
                    "photo_reference": "CmRaAAAA0drOPeDGvC6c_Jiov0uWAcXD-sb2Ze6kgyAjgQvW5UnM1ckAF7Vsr_4rWcK3P6J-85JhY7GFjipae8_lAsDHSPdTok814OzVHRjGb71YG6p90Xa7R3rZo3t96GQ1EF5OEhBcadtH0Js9W6dfYHKcCAjQGhRLIGlAcwvGxGiWflpLHgObGvuSGA",
                    "width": 4048
                },
                "https://s3-media4.fl.yelpcdn.com/bphoto/p_AP0TjhitsAQH4A_QzKOw/o.jpg",
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102127816559576392189/photos\">Tammy Liu</a>"
                    ],
                    "photo_reference": "CmRaAAAAQUXjDRjCnMcPMONkJbcpnFNZwjiGGUlazPXl4nyxlJjHe2KfVYZqFwHqk-AeI73wjFaMCutUreKGaks8F-G1QRY_YVfAcdlqiXk_0kbScQIy50mNXCztBln3pLeKUEzSEhAtPazIPKU9kB6Qo9l8uE5CGhTuIWDHxxGMuvCfT9HZ7Fe41vvm3w",
                    "width": 4032
                },
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104714439265889558081/photos\">Hai Tang</a>"
                    ],
                    "photo_reference": "CmRaAAAAANdrZTPl2kRiPm_MgZr3lN3rSivaO9FJdiqSOJ3ur4nwAFa94nzLXPBzieqo1M4XLCArh_hHDphWbrCAiaDT0VNyeH9d739fssoq_Ot7XFKA7it9HNPSex9w654ci62iEhBZ99xc98Uuuua6MBeA_lo5GhQ3Uf0Hdjc7himdL9a4ej1nCofRZg",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113655390942710367023/photos\">Derek Leong</a>"
                    ],
                    "photo_reference": "CmRaAAAALmot-0kVYqC4KOoEt8YGPrgL2hf4wRrkWZsrce33WR83SBscwYQ5ocITDIx0cKUhrbFw36fYrUNrgC6SLWEP5gVAbVGaoPKEMC4Bts9m3tEoRAOmehIrTkQixJTOLpKCEhA0gSIsBxS5JYksMYlVjMlnGhQNh-Bt07SilhUl2hawVxnsNkzj2A",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103268566938799707052/photos\">Tom Y</a>"
                    ],
                    "photo_reference": "CmRaAAAAUhQyQQ6fT10YHqhFGHX5G_Rh36GTRRI-nLol3VeEYMyngr7Ax5LP0uT4KDbBTfpbIMu_bLnnHAXBOIomujVWcIpATpH_lG9mEdEw7wqXl43MtEKHlW5wCzNEc5uRSFAPEhClG_BxIHWxOPPr9NKzP-PbGhTtuaGL9xqIDKSF6I3KSlxABxwb2Q",
                    "width": 3024
                },
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102127816559576392189/photos\">Tammy Liu</a>"
                    ],
                    "photo_reference": "CmRaAAAAcloDp9jyDrkBZN65y2u1-VZv01gE5qEatHJXa2p-SPkz6LELAQs4gVhoyKfsDaoTi-VfQ_2juPDFAy44tOYXo-_Kuwht75lssV0hDarQYJgAQlhY-hjRt1KlIyek28VmEhDd2EpuT0UOzgM8LJWdZo4wGhRyKdGXuZobBo1SBScySeOPGdN1WA",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112521419891051517391/photos\">Nomad Nabs</a>"
                    ],
                    "photo_reference": "CmRaAAAAn9SyFOcf73t8HGplqmpgpSU6cRmC8dxWIcUybqIXcVw7AyxVTgRtDX5sIzZOKLqMHeWP-4MkI_SA4RIqlpIWakOP87YDheFv5RInR5x9kWiJoOHx573OkFZ8xFZH8_C1EhDt9j8aw-1kLfI2m768Iv63GhTDX5iswU7N5_7Y_lWD8YNhwNddWw",
                    "width": 3024
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116249253521530510916/photos\">Luke Honnen</a>"
                    ],
                    "photo_reference": "CmRaAAAAAnegYWLJLoG3OlWixFVKVd35-Ggb4JSU2mDdE5nKamPB9FglcajfXpB3lHXbMUSUc4pIh5hP_bNvj-K0gkSsk9KXgddkhSOTjDEAKvCVpAjaQvV5tlJ-_zv4fayjIOM1EhAr6xyhuEGnrjye03Ans6UIGhR-uACPXO1L0dRXxcQGXPxwfvzBzw",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111737788480361540768/photos\">Monte Wright</a>"
                    ],
                    "photo_reference": "CmRaAAAASi3uU2mwRVywY4GnDCMdX6odF35XhtsS_coWGi1TfGiDSYYGQQehIiyQrrHeF_yGEzzupMU3Iw-HA7NyHnzLrz8Y9vYJ_axhaEs7I_aKr07OfYgA7blAcDukXgvJKqtTEhDe5fp_dn4THLwD2XmV5TEvGhRDoUCSv4IbGn1AKf9-F3ge5T7N4g",
                    "width": 3024
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114755141393170995154/photos\">Janet Kuo</a>"
                    ],
                    "photo_reference": "CmRaAAAALFdkJDI5_NaHw1vOqVQh1j4hTX19kKbHaJjVuIH26_yR4ecmoN-fJwwtw0CpNivriiBo9G6unugroq6YWIjKmeC2_JyH3Pp5zfoT45fN0X5VOr-vRs9dspp7obqg9oKxEhA9ewaupqbjPfioOCEKqm7LGhRXLi1R39snCEP5ke0iBycAIZfN0A",
                    "width": 4032
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106672985669452288539/photos\">Bernard Chau</a>"
                    ],
                    "photo_reference": "CmRaAAAA0drOPeDGvC6c_Jiov0uWAcXD-sb2Ze6kgyAjgQvW5UnM1ckAF7Vsr_4rWcK3P6J-85JhY7GFjipae8_lAsDHSPdTok814OzVHRjGb71YG6p90Xa7R3rZo3t96GQ1EF5OEhBcadtH0Js9W6dfYHKcCAjQGhRLIGlAcwvGxGiWflpLHgObGvuSGA",
                    "width": 4048
                },
                "https://s3-media4.fl.yelpcdn.com/bphoto/p_AP0TjhitsAQH4A_QzKOw/o.jpg",
                "https://s3-media2.fl.yelpcdn.com/bphoto/uLimvnqx54pZhYLDcTglVg/o.jpg"
            ],
            "price": 2,
            "rating": 4,
            "types": [
                {
                    "alias": "mexican",
                    "title": "Mexican"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "11.4 mi",
                    "value": 18412
                },
                "duration": {
                    "text": "16 mins",
                    "value": 985
                },
                "durationInTraffic": {
                    "text": "16 mins",
                    "value": 980
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 3.765235662460327,
            "predicted_action": 2
        },
        {
            "_id": "5c78444c6ba2e3aece08234a",
            "place_id": "ChIJPfhSqqyxdzERw14Vg7bzLGw",
            "address": "960 Story Rd, San Jose",
            "busy_hours": null,
            "dislikes": null,
            "favorited": null,
            "id": "QoTVD76JIThR7sKMvv1fXg",
            "likes": null,
            "location": {
                "lat": 37.3305969,
                "lng": -121.8564065
            },
            "name": "Phu Quy",
            "photos": [
                {
                    "height": 810,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109563403909369877892/photos\">tắc kè bông</a>"
                    ],
                    "photo_reference": "CmRaAAAAvxM91_ulWeb3IkWOUWAgbWiFJKEKwLTNefFcGrvnXp_7N-fEOpNOHXNNHnTKpu7kFhKLTtsMEEq8ouc7P5UTb5TNg-iz9sQ1qLv0ESzD-z8iGBQseKhxpQFqZxV-WrAwEhAV2J0eOeey3GcTjSbDUFqxGhS5-Cln6vAssWgE2EWBAXTgsWjnjg",
                    "width": 1080
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102610383134641597084/photos\">Thiệu Văn</a>"
                    ],
                    "photo_reference": "CmRaAAAAc0CBSgodIt24Dc-UPzeIItEbCfcgHqFNerOJW661AckeRdzbM8Dr6K5tbRhC2LAD4RtRkvTokXyxYskcJX_ZFvJULkGzF2nMg9VvFP_F5e4nT3HFoSeM2FCUdr2vJOb4EhDazc_QOvw0Z75LH9Sme2bgGhTWq8bjQUQa3R9VzUXueWmyADVc_g",
                    "width": 4032
                },
                {
                    "height": 810,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109563403909369877892/photos\">tắc kè bông</a>"
                    ],
                    "photo_reference": "CmRaAAAAmJWg3EN4qbMLECIKnACtNsp9O31-n0lrKFMyXz4yeBIEx9J2LZvuIFrtq7R6ZQ5_TKUQ7X9XHeRAA96EciarBg-FmfMLoPQYpiqYj5DvD6H_dPe0IMjS-iTgmQTk6BVsEhBwTfH8JneWFz0zotYOk_Z4GhSeDIRoRw81wGnOABGK6ZVfwrY4Zw",
                    "width": 1080
                },
                {
                    "height": 720,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109563403909369877892/photos\">tắc kè bông</a>"
                    ],
                    "photo_reference": "CmRaAAAAGtEx7SyMULAZ4GgIF-no9BKqPbmDGuYgxYK0z-2Os8LGFGTwUx231HSjmdLtxTcTKSPcK3CNiLbfjx8lNKzjygflhCx_N8vSqEDp9PlSRRVKlrQtEf6VvhDl15gwwuahEhD90WYOjXnzwfGrKO69GS1RGhT1nBfgT31AEhoHysOMP04OHNzRHw",
                    "width": 1080
                },
                {
                    "height": 1362,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100600326160400702458/photos\">Hien hoang van</a>"
                    ],
                    "photo_reference": "CmRaAAAAFSaTVcHlgzH6YqJpz2sFmntiAmiyc3CYzX-wSo7_65rn4cva2XbJXB-eaAmwKj-YlVWkbibYRazFKAd3teXldU1MORxkWU52E7vwBRP4ZGVS4I-f0oHdGOkKQdMS165fEhBUU6npTrL49Si0SwnZi-_IGhSfc5KNhQ6FEhh1HCYnn5TYWbh6bg",
                    "width": 2048
                },
                {
                    "height": 1061,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112984468479856923259/photos\">thanh van nguyen</a>"
                    ],
                    "photo_reference": "CmRaAAAAQzxX-92akFpz2voLZdfAnEYcuhKhB8lcyGfwvrwTaWeLuPuMTGoKx9GLLh48Vw8dRhVOofK6OWOILydrUZMLXNxXTadOVlKIPnDfOhImw2t-cwY31G-zR-O8k-etqguZEhCjqiXpeewIr7dFXgf4YfzRGhTy9WGJ3wmYQqpjLUHraWPMWyuyrw",
                    "width": 1886
                },
                {
                    "height": 391,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109563403909369877892/photos\">tắc kè bông</a>"
                    ],
                    "photo_reference": "CmRaAAAA2pmU-L1Zka1v3ikbIFrRmbAU5QzCpfp6F2HYNf_-78kiMiQgE6mNNTyAT14tBRqbfImyLrVJ1OTH6q16Z_rgygpLdSX9HBrdl9w17Phpot_AmxVhQSj8EJEMg0zK8ZIKEhB7LbiM3h3FZcEAZkSjHbARGhTqOyF8BfmDwNGMbOLLC1gIuJMqAw",
                    "width": 606
                },
                {
                    "height": 1440,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116515441437568329443/photos\">QUOC QUYEN Diep</a>"
                    ],
                    "photo_reference": "CmRaAAAAnjoShuQ8tKKTUxpNnrjQHtnOPK616zkoiPdEh955zz5HKnmVOPVB37bm_vETySlxTxzb4mt4UiWIyqkJ3lzJRevvbMwPSkfIy0XpoRkLKthLhKaQjhvYekx6gNgA_1spEhDRn6pLWTBkYd1KnsjAaDdOGhT7zzf9vUPhb9MJ_LVT9ict42r8wA",
                    "width": 2560
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106713804263104648226/photos\">Thanh Diep chi</a>"
                    ],
                    "photo_reference": "CmRaAAAAN2syR3g4tXlFR277a5qW80GGigdg8VN5KeEF79S5vHphV_jiTOV8-s6p-m6BIrnNurNpzPkJCbzNM6y_vVMlKOzQCMxvOSck5JbG68LHbQqbKEYuhSIdPCzzKD3SlidNEhAW6cJ9sJOHZyZV_KZEbJsPGhS-pTmKAdC6j2hVuPj4AqMvAozZ8Q",
                    "width": 4032
                },
                {
                    "height": 1920,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102381319348044575705/photos\">C Q</a>"
                    ],
                    "photo_reference": "CmRaAAAAyz13Y1uVGNvjcC0hcEESywC3USdVa4feBaOiNcfO5aPl3S-5N7IfFCKl5JSCxwQbGXopebhbR5cqDIyOI09kwOeBE8w1pkuGRk4D2E5n-j_kmS8HC7RpsDwMfr28dxiIEhAN9rMCWAbkQRNOtOmfbgG7GhR07YMI-fl-ONuyNr5z3yOueq7I0A",
                    "width": 1080
                }
            ],
            "price": 1,
            "rating": 4,
            "types": [
                {
                    "alias": "vietnamese",
                    "title": "Vietnamese"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {},
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 3.606635570526123,
            "predicted_action": 2
        },
        {
            "_id": "5ca51f3f6ba2e3aeceaf96c6",
            "place_id": "ChIJy_QRh7otjoARs8RioJl25U4",
            "address": "2850 Quimby Rd, San Jose",
            "busy_hours": null,
            "dislikes": null,
            "favorited": null,
            "id": "uN2L_3jCXR3smvxIR7Ha4g",
            "likes": null,
            "location": {
                "lat": 37.3243,
                "lng": -121.79793
            },
            "name": "Bloom Tea House",
            "photos": [
                {
                    "height": 4155,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117545765296219559203/photos\">Bloom Tea House</a>"
                    ],
                    "photo_reference": "CmRaAAAArUHVCVIbosEGI2wp0NVRarM_uTdL8PaRDddKy0xf68UfmoECSmAs16nZIJ5Tz6uXe8Ia2tZ8yZKEFK454-p_JiaIwwsv0oRvPBuf958C91X_TxGXn71GJnEqm-YzyiRIEhCuj-H9ODoni5oVdgx86gNqGhQkryNLI6ZJrBXyBeRW2Ybd6sbXZQ",
                    "width": 4161
                }
            ],
            "price": 0,
            "rating": 5,
            "types": [
                {
                    "alias": "tea",
                    "title": "Tea Rooms"
                },
                {
                    "alias": "cafes",
                    "title": "Cafes"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "2.9 mi",
                    "value": 4679
                },
                "duration": {
                    "text": "10 mins",
                    "value": 601
                },
                "durationInTraffic": {
                    "text": "10 mins",
                    "value": 586
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 4.0373663902282715,
            "predicted_action": 2
        },
        {
            "_id": "5c783fe86ba2e3aece081012",
            "place_id": "ChIJ7XhmUaLMj4ARlxuA2ZcMbVg",
            "address": "51 North San Pedro Street, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 0
                        },
                        {
                            "hour": 12,
                            "percentage": 17
                        },
                        {
                            "hour": 13,
                            "percentage": 32
                        },
                        {
                            "hour": 14,
                            "percentage": 46
                        },
                        {
                            "hour": 15,
                            "percentage": 56
                        },
                        {
                            "hour": 16,
                            "percentage": 66
                        },
                        {
                            "hour": 17,
                            "percentage": 76
                        },
                        {
                            "hour": 18,
                            "percentage": 81
                        },
                        {
                            "hour": 19,
                            "percentage": 71
                        },
                        {
                            "hour": 20,
                            "percentage": 49
                        },
                        {
                            "hour": 21,
                            "percentage": 26
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 7
                        },
                        {
                            "hour": 12,
                            "percentage": 12
                        },
                        {
                            "hour": 13,
                            "percentage": 15
                        },
                        {
                            "hour": 14,
                            "percentage": 13
                        },
                        {
                            "hour": 15,
                            "percentage": 11
                        },
                        {
                            "hour": 16,
                            "percentage": 15
                        },
                        {
                            "hour": 17,
                            "percentage": 26
                        },
                        {
                            "hour": 18,
                            "percentage": 37
                        },
                        {
                            "hour": 19,
                            "percentage": 38
                        },
                        {
                            "hour": 20,
                            "percentage": 28
                        },
                        {
                            "hour": 21,
                            "percentage": 14
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 4
                        },
                        {
                            "hour": 12,
                            "percentage": 11
                        },
                        {
                            "hour": 13,
                            "percentage": 14
                        },
                        {
                            "hour": 14,
                            "percentage": 11
                        },
                        {
                            "hour": 15,
                            "percentage": 6
                        },
                        {
                            "hour": 16,
                            "percentage": 9
                        },
                        {
                            "hour": 17,
                            "percentage": 21
                        },
                        {
                            "hour": 18,
                            "percentage": 37
                        },
                        {
                            "hour": 19,
                            "percentage": 44
                        },
                        {
                            "hour": 20,
                            "percentage": 35
                        },
                        {
                            "hour": 21,
                            "percentage": 18
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 6
                        },
                        {
                            "hour": 12,
                            "percentage": 12
                        },
                        {
                            "hour": 13,
                            "percentage": 13
                        },
                        {
                            "hour": 14,
                            "percentage": 10
                        },
                        {
                            "hour": 15,
                            "percentage": 7
                        },
                        {
                            "hour": 16,
                            "percentage": 11
                        },
                        {
                            "hour": 17,
                            "percentage": 27
                        },
                        {
                            "hour": 18,
                            "percentage": 45
                        },
                        {
                            "hour": 19,
                            "percentage": 52
                        },
                        {
                            "hour": 20,
                            "percentage": 39
                        },
                        {
                            "hour": 21,
                            "percentage": 19
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 5
                        },
                        {
                            "hour": 12,
                            "percentage": 9
                        },
                        {
                            "hour": 13,
                            "percentage": 11
                        },
                        {
                            "hour": 14,
                            "percentage": 12
                        },
                        {
                            "hour": 15,
                            "percentage": 12
                        },
                        {
                            "hour": 16,
                            "percentage": 20
                        },
                        {
                            "hour": 17,
                            "percentage": 40
                        },
                        {
                            "hour": 18,
                            "percentage": 60
                        },
                        {
                            "hour": 19,
                            "percentage": 64
                        },
                        {
                            "hour": 20,
                            "percentage": 53
                        },
                        {
                            "hour": 21,
                            "percentage": 31
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 9
                        },
                        {
                            "hour": 12,
                            "percentage": 18
                        },
                        {
                            "hour": 13,
                            "percentage": 23
                        },
                        {
                            "hour": 14,
                            "percentage": 20
                        },
                        {
                            "hour": 15,
                            "percentage": 15
                        },
                        {
                            "hour": 16,
                            "percentage": 21
                        },
                        {
                            "hour": 17,
                            "percentage": 42
                        },
                        {
                            "hour": 18,
                            "percentage": 68
                        },
                        {
                            "hour": 19,
                            "percentage": 85
                        },
                        {
                            "hour": 20,
                            "percentage": 79
                        },
                        {
                            "hour": 21,
                            "percentage": 55
                        },
                        {
                            "hour": 22,
                            "percentage": 28
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 0
                        },
                        {
                            "hour": 12,
                            "percentage": 25
                        },
                        {
                            "hour": 13,
                            "percentage": 43
                        },
                        {
                            "hour": 14,
                            "percentage": 49
                        },
                        {
                            "hour": 15,
                            "percentage": 48
                        },
                        {
                            "hour": 16,
                            "percentage": 60
                        },
                        {
                            "hour": 17,
                            "percentage": 87
                        },
                        {
                            "hour": 18,
                            "percentage": 100
                        },
                        {
                            "hour": 19,
                            "percentage": 90
                        },
                        {
                            "hour": 20,
                            "percentage": 74
                        },
                        {
                            "hour": 21,
                            "percentage": 54
                        },
                        {
                            "hour": 22,
                            "percentage": 29
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "ff790e11aa2b475e7e65632bcc59f8554ff981c5",
            "likes": null,
            "location": {
                "lat": 37.336045,
                "lng": -121.893779
            },
            "name": "The Old Spaghetti Factory",
            "photos": [
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107034503442569886916/photos\">Steven Bui</a>"
                    ],
                    "photo_reference": "CmRaAAAAydjaYXIZ1DFN2Qbn82g_T_QUYKT-6i5_TtphiozJV1ZzYpTVejDV-qzBb1zcoMnhpX7FVxDBkjbGIXX9AdatQ8PPPczylrx30TMzlBu3aSji6-pY9C6ylpI9HFBE9ZjBEhAWgPX2ZLp7QMMSQytLqeKyGhR0JGGdb2cGI_cjdWraxeZzC8Q6fg",
                    "width": 4032
                },
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106725841391078322318/photos\">Mark Nehring</a>"
                    ],
                    "photo_reference": "CmRaAAAApG7QkhFivOgcbg14EqrtiAhpD4ch4ouUvTcDeqHAlhAjkF1iNUf_tA-bK5Uxg_c_gYijQPJeCsCsmCsCpMXJrDcu1oZP24z3RMSph11T09WppzFGIMt1Lh-4rOIqvtREEhDWPkLw42TgQuWYsas-COfhGhQMO6Rdi52GKHx49IKtucHyVdT6vQ",
                    "width": 4032
                },
                {
                    "height": 1536,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113660967261643454248/photos\">Bill Hodgson</a>"
                    ],
                    "photo_reference": "CmRaAAAAobjzFLVJSraNiwSCfQrbywdOjhvWTQ5J0m2a0eMVW_UGG5gWskNrqcsqzzisvbN7lO8D0j6EG8l56Vk61RcgawjHIdBm_cUXe2Lqm2sU5lJ_zRa-ReuYqX1mtKgPvF5jEhDryFpUzTp28rVaKnKQLIClGhQBqcLCq0LGJ05JrebL3ggkooaBdA",
                    "width": 2048
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102840354656389570750/photos\">Nelson Bradley</a>"
                    ],
                    "photo_reference": "CmRaAAAASSFntjmv1VkQUvrtPEc_lPe48Ukx4D1JMWbHrFX_srsRidVaWAEhKCHm01WikJSZlXaCuC2RzJhAi3a4eTQYxx2B_DBlkM0P-hPRc-9wprbdBCkJGrnSRb6OcSROFgVVEhD6sbKMq8VihKW9kkt6DOcqGhR7KjiZCVR4iNaL9ZT5Q-vpie1uwA",
                    "width": 4048
                },
                {
                    "height": 2752,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117995335416437278187/photos\">Joe G</a>"
                    ],
                    "photo_reference": "CmRaAAAAbdTzWcd9GueI_mC3xVSO42H8lR9TF3thFoFTa0_axaD8dRvWXglo9oZRAUeMIO4LxDR_m3K_dItGBN1T5x08yqcFmElsEMilt2WH8Gx3BgGQFAt8XJGzBrnaiLqs0VA4EhCVj-FMtTsRcPufzGxeU1PqGhQWbRp1_ojJCWSkGndd_1oGcK257Q",
                    "width": 4896
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111198782071201278108/photos\">kamec8</a>"
                    ],
                    "photo_reference": "CmRaAAAAgQ09jDXmtO1oDhqM0UhM9kJjOgMntwe_Cno-eW4MCgoyUi3ghdNZehrkLtrw3yEtSvK8s0tQwLFtkGVYvaxm-YhPEjh5a8FYNhJOQQtXF6FLsFslUF6IhE9cPksUTVKNEhD2TyiFy0rum7cgHap7Y5LnGhQ9Sm6O1B3jv2CWTBoB7y453RoJ8g",
                    "width": 3024
                },
                {
                    "height": 599,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112588635679437736657/photos\">The Old Spaghetti Factory</a>"
                    ],
                    "photo_reference": "CmRaAAAAimOyQMmeMyyfs0k4QAXS8BCROVidh1nRd7r1M5xPixTrcXe71fdGd3Clu2DkHWkRKXU9ShQ5jdWLp6D5vJ4Qn20pPi4AB788doeaHNGSrlxC-3mCJ6N75uoy7ykYgbO5EhD5kj6FTdChzcN9nRbe3q78GhQX9_A6p7jrneGjdLifBjD6ggaBzQ",
                    "width": 900
                },
                {
                    "height": 2448,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105609617249306884585/photos\">søren troest</a>"
                    ],
                    "photo_reference": "CmRaAAAA-dzJPer-uYHhpS6pCxPPKjGsobp2SVL5dlZh0JxKUA5G0MylD8ZVQvywMHK21Dnw_t9vdhiez_3KYNp2UxxF1qkfecTzvwVxIs5Ef6Cr_OdY5RSVbHDUBTs_H43MCz2XEhDcQRx6pzejfgOiROvXa0zqGhSs8F23LSM8jhEu3DTq3iLOkWDyMQ",
                    "width": 3264
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102840354656389570750/photos\">Nelson Bradley</a>"
                    ],
                    "photo_reference": "CmRaAAAAMnX9qCHceKIvvT3dTPnO-aovBEvBTS63yXymgLxKOAxy3BMz9HxfW52WTfN0LBFmiOZvEO76Y9dEo_C4AKI8d-V4dV7cd_zanSZx9FX1eDp0sVq0wO-CZlEZFc_tI_qmEhCw7Le6-QA3hE8GMLkLT628GhTOe-k_NXPKHJdl4N_NgBfxwGiofA",
                    "width": 4048
                },
                {
                    "height": 2448,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105609617249306884585/photos\">søren troest</a>"
                    ],
                    "photo_reference": "CmRaAAAATbRV-CMXB-LrtXUAUBE18GKKvj9jEpqA8HLDLsd2Rv7_qvw4sWb_ByHJO4w0in2L79dVREAw2R4PZ5KITD-lbD5biOsJNPMErc9Dt0Lz429z3TljTWoh30yunpi5aH-1EhAw1jO4vP5xUF958VAQbc4dGhT-PYTlExjDjb-Xt9UESV0cMDilEg",
                    "width": 3264
                },
                "https://s3-media1.fl.yelpcdn.com/bphoto/DZuE_RmnZ75_7RhNX2UCiA/o.jpg",
                "https://s3-media1.fl.yelpcdn.com/bphoto/DZuE_RmnZ75_7RhNX2UCiA/o.jpg",
                "https://s3-media1.fl.yelpcdn.com/bphoto/DZuE_RmnZ75_7RhNX2UCiA/o.jpg"
            ],
            "price": 2,
            "rating": 4.00625,
            "types": [
                {
                    "alias": "tradamerican",
                    "title": "American (Traditional)"
                },
                {
                    "alias": "pubs",
                    "title": "Pubs"
                },
                {
                    "alias": "gastropubs",
                    "title": "Gastropubs"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "6.5 mi",
                    "value": 10402
                },
                "duration": {
                    "text": "11 mins",
                    "value": 675
                },
                "durationInTraffic": {
                    "text": "11 mins",
                    "value": 655
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 3.511021614074707,
            "predicted_action": 2
        },
        {
            "_id": "5c7f2bcd6ba2e3aece20edfc",
            "place_id": "ChIJKSzgrWIyjoARjd7DAB_TPnU",
            "address": "1071 E Capitol Expy, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 18
                        },
                        {
                            "hour": 12,
                            "percentage": 33
                        },
                        {
                            "hour": 13,
                            "percentage": 43
                        },
                        {
                            "hour": 14,
                            "percentage": 42
                        },
                        {
                            "hour": 15,
                            "percentage": 44
                        },
                        {
                            "hour": 16,
                            "percentage": 60
                        },
                        {
                            "hour": 17,
                            "percentage": 78
                        },
                        {
                            "hour": 18,
                            "percentage": 84
                        },
                        {
                            "hour": 19,
                            "percentage": 84
                        },
                        {
                            "hour": 20,
                            "percentage": 65
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 22
                        },
                        {
                            "hour": 12,
                            "percentage": 39
                        },
                        {
                            "hour": 13,
                            "percentage": 43
                        },
                        {
                            "hour": 14,
                            "percentage": 34
                        },
                        {
                            "hour": 15,
                            "percentage": 35
                        },
                        {
                            "hour": 16,
                            "percentage": 42
                        },
                        {
                            "hour": 17,
                            "percentage": 35
                        },
                        {
                            "hour": 18,
                            "percentage": 48
                        },
                        {
                            "hour": 19,
                            "percentage": 58
                        },
                        {
                            "hour": 20,
                            "percentage": 38
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 16
                        },
                        {
                            "hour": 12,
                            "percentage": 28
                        },
                        {
                            "hour": 13,
                            "percentage": 33
                        },
                        {
                            "hour": 14,
                            "percentage": 29
                        },
                        {
                            "hour": 15,
                            "percentage": 20
                        },
                        {
                            "hour": 16,
                            "percentage": 15
                        },
                        {
                            "hour": 17,
                            "percentage": 22
                        },
                        {
                            "hour": 18,
                            "percentage": 39
                        },
                        {
                            "hour": 19,
                            "percentage": 48
                        },
                        {
                            "hour": 20,
                            "percentage": 37
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 16
                        },
                        {
                            "hour": 12,
                            "percentage": 28
                        },
                        {
                            "hour": 13,
                            "percentage": 38
                        },
                        {
                            "hour": 14,
                            "percentage": 41
                        },
                        {
                            "hour": 15,
                            "percentage": 35
                        },
                        {
                            "hour": 16,
                            "percentage": 28
                        },
                        {
                            "hour": 17,
                            "percentage": 33
                        },
                        {
                            "hour": 18,
                            "percentage": 51
                        },
                        {
                            "hour": 19,
                            "percentage": 53
                        },
                        {
                            "hour": 20,
                            "percentage": 30
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 17
                        },
                        {
                            "hour": 12,
                            "percentage": 32
                        },
                        {
                            "hour": 13,
                            "percentage": 29
                        },
                        {
                            "hour": 14,
                            "percentage": 22
                        },
                        {
                            "hour": 15,
                            "percentage": 23
                        },
                        {
                            "hour": 16,
                            "percentage": 27
                        },
                        {
                            "hour": 17,
                            "percentage": 36
                        },
                        {
                            "hour": 18,
                            "percentage": 44
                        },
                        {
                            "hour": 19,
                            "percentage": 41
                        },
                        {
                            "hour": 20,
                            "percentage": 29
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 12
                        },
                        {
                            "hour": 12,
                            "percentage": 23
                        },
                        {
                            "hour": 13,
                            "percentage": 34
                        },
                        {
                            "hour": 14,
                            "percentage": 38
                        },
                        {
                            "hour": 15,
                            "percentage": 35
                        },
                        {
                            "hour": 16,
                            "percentage": 35
                        },
                        {
                            "hour": 17,
                            "percentage": 50
                        },
                        {
                            "hour": 18,
                            "percentage": 79
                        },
                        {
                            "hour": 19,
                            "percentage": 99
                        },
                        {
                            "hour": 20,
                            "percentage": 91
                        },
                        {
                            "hour": 21,
                            "percentage": 60
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 10
                        },
                        {
                            "hour": 12,
                            "percentage": 35
                        },
                        {
                            "hour": 13,
                            "percentage": 49
                        },
                        {
                            "hour": 14,
                            "percentage": 40
                        },
                        {
                            "hour": 15,
                            "percentage": 41
                        },
                        {
                            "hour": 16,
                            "percentage": 53
                        },
                        {
                            "hour": 17,
                            "percentage": 68
                        },
                        {
                            "hour": 18,
                            "percentage": 89
                        },
                        {
                            "hour": 19,
                            "percentage": 100
                        },
                        {
                            "hour": 20,
                            "percentage": 83
                        },
                        {
                            "hour": 21,
                            "percentage": 49
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "DDEblHqu-Yt0Up_shqEEuA",
            "likes": null,
            "location": {
                "lat": 37.3013497,
                "lng": -121.8223909
            },
            "name": "Bonchon - Silver Creek",
            "photos": [
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101396613469860707162/photos\">Daniela Munoz</a>"
                    ],
                    "photo_reference": "CmRaAAAAjlRJ1LLb2lU6eqBt_Gsr1-vCoueyFRSBzDzI9xskNygcgv3lbPpcrVMhU5soLQe3TdGuhqKBr50vulv4IOogxgtbZC4KuUe-7vj2U0yNaaTzsUZzNvtvRSyn0PYxkwQwEhBzVIdFgBW3220Et6llM8gmGhQeGV6t57x3gYrRgc4b4RqIRcUzew",
                    "width": 1920
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115339729353762503866/photos\">Evelyn Lopez</a>"
                    ],
                    "photo_reference": "CmRaAAAAjcxmQaHpR25Bp4JWtMVeNG5AkmZRbYV6vrbwR5ju3U9eetKCrLSaTd-6p0-jJdthz11zjcmRMxEJfdqD9lqD3M2HzmV1cXjA26VgHTMNestv6RCOoQAacG2ZeppXHrlDEhD9hgkNs3aP7-iLqq5GkBKhGhQKhFHw9rOCVc7YWKpFR72EijQFKA",
                    "width": 3024
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108105931609309321508/photos\">Charles Li</a>"
                    ],
                    "photo_reference": "CmRaAAAA4n1VyhSddQ7aQJDmEJvmTpsIzY4kfxf4VJdJ0374c0Lanlql9gVAcCSm0V_XMAV5i7ZCfwR5W0BZMECwo5uW0Uts9NdVN46ktb87Nin4A-KQIplBlW_Z-SFzT72ZzzadEhCqQGiIall3W5AqFM-1-gS1GhRndy1Ts5WPVin_2niMJCRcINos6Q",
                    "width": 3024
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102840354656389570750/photos\">Nelson Bradley</a>"
                    ],
                    "photo_reference": "CmRaAAAAOtqGykVBZxWGRYSRUID4aggrBdyuOL9CGBPTSdoLzyhSho6ssiTYSZIrEd2EFq3G12MWOXFJezKGveIVTvmjbzJo0kSjIxB3lQlPjOMSSyXggfnIMzOf4i_Ku3F1_8-IEhB3EH1N91MHYGNeSsoogLpwGhSz5VHsUKGf6Uca6MYr2TDhJiK5_Q",
                    "width": 4048
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115339729353762503866/photos\">Evelyn Lopez</a>"
                    ],
                    "photo_reference": "CmRaAAAASeskig2hKP1yV0mfmMLXTkhiuxMpSLwTu3azOVgUAB8g3qDZjRHXKKbqwn3it5mgfbVcLLev1ms6H7CEIegVedHD4CSzMzUKgFL_BMbIbw0qmSJf0n04Ypmi0i5adxaJEhAJOTtHb9y1BNPggW17Cqw6GhRkNR2NST8-T6VkiVN_SEnsNT9Q4A",
                    "width": 3024
                },
                {
                    "height": 1920,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105285416907483358582/photos\">Jameson Uy</a>"
                    ],
                    "photo_reference": "CmRaAAAATwL2YX7UbuIKfwLVtybnj1skKHag2LTUb0qYZaJbwoIuRgw5tpaPX6A012LzZlbY8NoYczqOOPCCv32MmdPrYm9zkfQTp6CjP31ZiP5kVy6IEdpSqzaB99jEmkTwAI6SEhCkraP8FJHYQD6niSBSUGxeGhR-iLL5v3hABPKom_SFVWmNxHJfmg",
                    "width": 1080
                },
                {
                    "height": 1280,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105469374892018285199/photos\">Jaimie I</a>"
                    ],
                    "photo_reference": "CmRaAAAA5_ENP39_AT-u9yRzgPiW2K93iBe0ZPz2VNBi-qkUTTKE5mZYBYtjmfLsfobz507cOAMoNdPDZPHKoZqmMzkc2MOSxAQH0-igTk07VRcBCwoBbhvHlp6zOYQjri1SYBwQEhDxXp4_gVwjt3rwiN3uwJaDGhQkcXSc7M86x2Pa9S_hfYL64vwVdg",
                    "width": 720
                },
                {
                    "height": 1960,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112496172840479342961/photos\">matthew le</a>"
                    ],
                    "photo_reference": "CmRaAAAAqgXJ_Kgh8fYo0EQ5v6G1g2k0ldNN8dbobnj4i_xOaixufp6ofeN3IqcRRVGze6EFrquhn061a11YFNlH0xNMnQgHoNiROEcS7bOiQPzf5SW6663KDeJ3FePA7_PvCEVbEhCVsIWXPASbtsuDXeHX3YbvGhRCJSeNudvhLs7lzTouy_HkW8p0Rg",
                    "width": 4032
                },
                {
                    "height": 1920,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116541461594725941150/photos\">Brian Dang</a>"
                    ],
                    "photo_reference": "CmRaAAAAHORonrOG2Zy7uIYjDCvh244ISG0KKO3MG1o-q0M_q05eMR5n6sq8sPsE8IA42Ku85pHrqBPyh98iIO3TigOjIlaPBh8ZqNljPdR7ZYSNLSMzPg6bG5FhwhhZcOKeN2IIEhCLB_c1c5urgD8M3H1hDBUFGhRHrbCLl-igStxqE2az9k1K9A2-Xg",
                    "width": 1080
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114756149653639335086/photos\">kevin vuong</a>"
                    ],
                    "photo_reference": "CmRaAAAA7ch8xqXYB4_8GQz-o3wiHVwvVBal6cClttq_GFNcca9IXjgQXdD_smgj-7xhs9ZgfO9EiMPNLBOJKnCKpVhjt5zvLjDVyHXdmNzb7fB8A59enU_hVLUO1kYY9m-vr0RFEhAREaDoJy9WVC5Fd9YlZTN2GhQS9CpvfoKL6tDHdwUGhvEz0KdZfQ",
                    "width": 3024
                }
            ],
            "price": 2,
            "rating": 3,
            "types": [
                {
                    "alias": "chicken_wings",
                    "title": "Chicken Wings"
                },
                {
                    "alias": "korean",
                    "title": "Korean"
                },
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "1.8 mi",
                    "value": 2854
                },
                "duration": {
                    "text": "5 mins",
                    "value": 329
                },
                "durationInTraffic": {
                    "text": "5 mins",
                    "value": 328
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 3.485687494277954,
            "predicted_action": 2
        },
        {
            "_id": "5c78413c6ba2e3aece0815d6",
            "place_id": "ChIJO_BWqUUzjoARcVxlUnDl8M4",
            "address": "577 W Alma Ave, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 22
                        },
                        {
                            "hour": 12,
                            "percentage": 64
                        },
                        {
                            "hour": 13,
                            "percentage": 94
                        },
                        {
                            "hour": 14,
                            "percentage": 79
                        },
                        {
                            "hour": 15,
                            "percentage": 55
                        },
                        {
                            "hour": 16,
                            "percentage": 67
                        },
                        {
                            "hour": 17,
                            "percentage": 95
                        },
                        {
                            "hour": 18,
                            "percentage": 100
                        },
                        {
                            "hour": 19,
                            "percentage": 70
                        },
                        {
                            "hour": 20,
                            "percentage": 32
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 25
                        },
                        {
                            "hour": 12,
                            "percentage": 55
                        },
                        {
                            "hour": 13,
                            "percentage": 55
                        },
                        {
                            "hour": 14,
                            "percentage": 25
                        },
                        {
                            "hour": 15,
                            "percentage": 9
                        },
                        {
                            "hour": 16,
                            "percentage": 20
                        },
                        {
                            "hour": 17,
                            "percentage": 45
                        },
                        {
                            "hour": 18,
                            "percentage": 62
                        },
                        {
                            "hour": 19,
                            "percentage": 48
                        },
                        {
                            "hour": 20,
                            "percentage": 21
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 10
                        },
                        {
                            "hour": 12,
                            "percentage": 32
                        },
                        {
                            "hour": 13,
                            "percentage": 47
                        },
                        {
                            "hour": 14,
                            "percentage": 25
                        },
                        {
                            "hour": 15,
                            "percentage": 13
                        },
                        {
                            "hour": 16,
                            "percentage": 13
                        },
                        {
                            "hour": 17,
                            "percentage": 27
                        },
                        {
                            "hour": 18,
                            "percentage": 52
                        },
                        {
                            "hour": 19,
                            "percentage": 50
                        },
                        {
                            "hour": 20,
                            "percentage": 20
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 35
                        },
                        {
                            "hour": 12,
                            "percentage": 54
                        },
                        {
                            "hour": 13,
                            "percentage": 41
                        },
                        {
                            "hour": 14,
                            "percentage": 17
                        },
                        {
                            "hour": 15,
                            "percentage": 9
                        },
                        {
                            "hour": 16,
                            "percentage": 17
                        },
                        {
                            "hour": 17,
                            "percentage": 28
                        },
                        {
                            "hour": 18,
                            "percentage": 36
                        },
                        {
                            "hour": 19,
                            "percentage": 36
                        },
                        {
                            "hour": 20,
                            "percentage": 27
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 33
                        },
                        {
                            "hour": 12,
                            "percentage": 51
                        },
                        {
                            "hour": 13,
                            "percentage": 28
                        },
                        {
                            "hour": 14,
                            "percentage": 10
                        },
                        {
                            "hour": 15,
                            "percentage": 13
                        },
                        {
                            "hour": 16,
                            "percentage": 22
                        },
                        {
                            "hour": 17,
                            "percentage": 31
                        },
                        {
                            "hour": 18,
                            "percentage": 35
                        },
                        {
                            "hour": 19,
                            "percentage": 32
                        },
                        {
                            "hour": 20,
                            "percentage": 24
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 43
                        },
                        {
                            "hour": 12,
                            "percentage": 86
                        },
                        {
                            "hour": 13,
                            "percentage": 60
                        },
                        {
                            "hour": 14,
                            "percentage": 16
                        },
                        {
                            "hour": 15,
                            "percentage": 6
                        },
                        {
                            "hour": 16,
                            "percentage": 18
                        },
                        {
                            "hour": 17,
                            "percentage": 48
                        },
                        {
                            "hour": 18,
                            "percentage": 79
                        },
                        {
                            "hour": 19,
                            "percentage": 75
                        },
                        {
                            "hour": 20,
                            "percentage": 41
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 22
                        },
                        {
                            "hour": 12,
                            "percentage": 59
                        },
                        {
                            "hour": 13,
                            "percentage": 85
                        },
                        {
                            "hour": 14,
                            "percentage": 68
                        },
                        {
                            "hour": 15,
                            "percentage": 44
                        },
                        {
                            "hour": 16,
                            "percentage": 45
                        },
                        {
                            "hour": 17,
                            "percentage": 66
                        },
                        {
                            "hour": 18,
                            "percentage": 79
                        },
                        {
                            "hour": 19,
                            "percentage": 70
                        },
                        {
                            "hour": 20,
                            "percentage": 44
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "ZMdteLcR8y2N-oJAd9cmEg",
            "likes": null,
            "location": {
                "lat": 37.3092867427984,
                "lng": -121.887104945135
            },
            "name": "Souvlaki's Greek Skewers",
            "photos": [
                {
                    "height": 1836,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104926213687547289887/photos\">Chad Tenturier</a>"
                    ],
                    "photo_reference": "CmRaAAAAcEUvrFnXEVymm7oa5EOxaiIX5Mb9S85HFTRozaUhW8yHjbR7-ncb6rlMqHii6vIB3aW6T2L-4dgU9CLvK5jPo2ItylYBRsumHHdrH0OnqzlKuloqU4zAGAz4zSD_Uy9mEhAUYXahnplNyHuaEdo03l92GhQ3E6uPitdpRI8_yiCKCATBBcsT9Q",
                    "width": 3264
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101839682262193572073/photos\">romeo</a>"
                    ],
                    "photo_reference": "CmRaAAAAC1CVh2GkqYqC95FY8o4k82K25EetKD7E-3wI1_myxm4cDEqtixVl1NE-JcnlPW-cgWnPNkZA0pF4voNqXCrggv6aICMf_zdQC4yW6POzlwlV4wQ438DrrTUTQwWTMyt2EhAbg_8KVAPex-qfNioNJWifGhRXRelLFGSpWPbeJU-oWlbxm_7jhw",
                    "width": 4032
                },
                {
                    "height": 4160,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113107287227812384646/photos\">Lily Kuang</a>"
                    ],
                    "photo_reference": "CmRaAAAAE3NYjB0Mz4TRi5oAN8mT0yRD-jasEHSGspPIOAPOVSFOe6mvbi9tyY_cM059L20ICmSgkCA4BkwEmuySBq1VFSHR9Ol4nYvHzhp0-SLMCc2yVdzV7fT2295YuHGraOhXEhD7KwGXAqjTHzV_vTI0GYcXGhR-BVyPz6A3NlwLRreaXKcLXJRglw",
                    "width": 3120
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112586149667607531498/photos\">Martin Stein</a>"
                    ],
                    "photo_reference": "CmRZAAAAeaUgtS6QNAmKqnXWXML_Wsq3Cjb1kJ6sopMXPbNhYr4KgixYSZwlpSFxm_Em6k3Z-M3XWfKHYNK84qLjDwVjgWSNkMFdWMRMfZmtDzFeM_dgWK5rvWmVotBXcJym4FthEhCmXq6Z9CoxF2hijlvbX4wHGhRG5qHaSWCDM_qZG16liGH68OnNsw",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109215060724464419008/photos\">Ju Haghverdian</a>"
                    ],
                    "photo_reference": "CmRaAAAAhxPpYk75oEmmJOGDv2Nj6b6r08lhpbChrCcSVOht68bdSVrCMKsIC11R_zbbgmaqMedrNt5x7vasz1HEFlmD83wQJ7NaGJ6McQvlVTc4U1ZqtzbLD1TTKc7TmTRrt85TEhC5III_awt68Yb8EI06ariXGhT-eHdNmPYOv0TxJiDVZ_rGcfFB8w",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102061417916399109361/photos\">Michael Powell</a>"
                    ],
                    "photo_reference": "CmRaAAAAzBGu10ghithtN9r_voKkpy5PRsRuIkFnRS6v_EzQsxqaEFT2f3R_kbym-GZOVcP9A04qo2QXb6ddXiQyrbqMXzCCIL3NihEga4ZyHELwhk2L2uV_cWfHes1cHgsauAg7EhBHYc6uaZ5mhOcIuLgysgQyGhS5onk1tGTJqn7h7-173PkkcXKVIQ",
                    "width": 4032
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115863542173244424623/photos\">devesh srivastava</a>"
                    ],
                    "photo_reference": "CmRaAAAA4SqjW0D3RsFSZl7VnwFgRncsk-xumRYWembteXBF0ueixxjF-WTZN6CAh02YRpebqeIPhHpKQCxdzxqviab5ELjduX_tKQl9rEgLpzKwCN4VtebHJJVq1E94nFZGbH58EhABLboSnhHyd5vInJGLhKYXGhTYpkmeC9pQHkSeCaZmDQlej6CIDw",
                    "width": 4608
                },
                {
                    "height": 2160,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112558246117709843437/photos\">Sarah Chan</a>"
                    ],
                    "photo_reference": "CmRaAAAAES-aN5ZlHoh4IOhmj8riIGpjAd0XZFdJugRp5F3yBkZLBHouhGJUSWxFQl3cMdeJN3wWF6wc8yQ9J7CJUdh18OQCYAcuXhWywIMuLhDsGuVdB9RQFVoqnpC4kFmpggfREhBe2ts78zf_BUgArDaDgGp8GhTUSbsNZ9NRFhUth4TxS-NnJ0A5-w",
                    "width": 3840
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116753570914923106466/photos\">Le-An Tran</a>"
                    ],
                    "photo_reference": "CmRaAAAArH8m9t-EdmYHBoLT9nS_nwqOsK5HBcCymiHhyyiSb-Rr1PN5dKmxKvZCmgNb_d9CqBtbsIpHxYaxCvCRJx5IkZpbu-xO7KaD2AC5a2WFu5Md3MX0xqpSqzKEnkBvh2hiEhAiU6PtGl4VKnnLvuw0ef5jGhQxffCKYrVZDzDC3FxjVPxoJGzQAw",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104503202462196043271/photos\">C Pizzle</a>"
                    ],
                    "photo_reference": "CmRaAAAA22zmCn0plkxw43nZJctl9sYI14vpLaPH6pBN2yhx-Aqwe7TZyu4bmeAzjIRR_IQbFHnC9pXS8CF1HwToVt56N-iUKrYoiQGMz90uQ9lwiXJDMvMUTaHQDMqiLha1PB2eEhDep_Qrha7HCpxLPdi2l5BcGhRXtkXCq5MOxbBwFMtJonWEeWRfiQ",
                    "width": 3024
                }
            ],
            "price": 2,
            "rating": 4.5,
            "types": [
                {
                    "alias": "greek",
                    "title": "Greek"
                },
                {
                    "alias": "mediterranean",
                    "title": "Mediterranean"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "6.6 mi",
                    "value": 10574
                },
                "duration": {
                    "text": "10 mins",
                    "value": 618
                },
                "durationInTraffic": {
                    "text": "11 mins",
                    "value": 651
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 3.1989355087280273,
            "predicted_action": 2
        },
        {
            "_id": "5c78413c6ba2e3aece0815bd",
            "place_id": "ChIJG95A7vUyjoARZh5q_D4TokI",
            "address": "2895 Senter Rd, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 10
                        },
                        {
                            "hour": 9,
                            "percentage": 28
                        },
                        {
                            "hour": 10,
                            "percentage": 46
                        },
                        {
                            "hour": 11,
                            "percentage": 66
                        },
                        {
                            "hour": 12,
                            "percentage": 94
                        },
                        {
                            "hour": 13,
                            "percentage": 100
                        },
                        {
                            "hour": 14,
                            "percentage": 66
                        },
                        {
                            "hour": 15,
                            "percentage": 30
                        },
                        {
                            "hour": 16,
                            "percentage": 23
                        },
                        {
                            "hour": 17,
                            "percentage": 40
                        },
                        {
                            "hour": 18,
                            "percentage": 42
                        },
                        {
                            "hour": 19,
                            "percentage": 21
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 2
                        },
                        {
                            "hour": 9,
                            "percentage": 8
                        },
                        {
                            "hour": 10,
                            "percentage": 21
                        },
                        {
                            "hour": 11,
                            "percentage": 36
                        },
                        {
                            "hour": 12,
                            "percentage": 41
                        },
                        {
                            "hour": 13,
                            "percentage": 32
                        },
                        {
                            "hour": 14,
                            "percentage": 19
                        },
                        {
                            "hour": 15,
                            "percentage": 13
                        },
                        {
                            "hour": 16,
                            "percentage": 17
                        },
                        {
                            "hour": 17,
                            "percentage": 20
                        },
                        {
                            "hour": 18,
                            "percentage": 17
                        },
                        {
                            "hour": 19,
                            "percentage": 10
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 1
                        },
                        {
                            "hour": 9,
                            "percentage": 5
                        },
                        {
                            "hour": 10,
                            "percentage": 18
                        },
                        {
                            "hour": 11,
                            "percentage": 39
                        },
                        {
                            "hour": 12,
                            "percentage": 52
                        },
                        {
                            "hour": 13,
                            "percentage": 43
                        },
                        {
                            "hour": 14,
                            "percentage": 23
                        },
                        {
                            "hour": 15,
                            "percentage": 8
                        },
                        {
                            "hour": 16,
                            "percentage": 7
                        },
                        {
                            "hour": 17,
                            "percentage": 18
                        },
                        {
                            "hour": 18,
                            "percentage": 27
                        },
                        {
                            "hour": 19,
                            "percentage": 21
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 4
                        },
                        {
                            "hour": 10,
                            "percentage": 18
                        },
                        {
                            "hour": 11,
                            "percentage": 44
                        },
                        {
                            "hour": 12,
                            "percentage": 53
                        },
                        {
                            "hour": 13,
                            "percentage": 31
                        },
                        {
                            "hour": 14,
                            "percentage": 15
                        },
                        {
                            "hour": 15,
                            "percentage": 17
                        },
                        {
                            "hour": 16,
                            "percentage": 13
                        },
                        {
                            "hour": 17,
                            "percentage": 12
                        },
                        {
                            "hour": 18,
                            "percentage": 20
                        },
                        {
                            "hour": 19,
                            "percentage": 14
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 4
                        },
                        {
                            "hour": 9,
                            "percentage": 12
                        },
                        {
                            "hour": 10,
                            "percentage": 23
                        },
                        {
                            "hour": 11,
                            "percentage": 32
                        },
                        {
                            "hour": 12,
                            "percentage": 33
                        },
                        {
                            "hour": 13,
                            "percentage": 24
                        },
                        {
                            "hour": 14,
                            "percentage": 14
                        },
                        {
                            "hour": 15,
                            "percentage": 8
                        },
                        {
                            "hour": 16,
                            "percentage": 9
                        },
                        {
                            "hour": 17,
                            "percentage": 11
                        },
                        {
                            "hour": 18,
                            "percentage": 12
                        },
                        {
                            "hour": 19,
                            "percentage": 9
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 2
                        },
                        {
                            "hour": 9,
                            "percentage": 7
                        },
                        {
                            "hour": 10,
                            "percentage": 15
                        },
                        {
                            "hour": 11,
                            "percentage": 28
                        },
                        {
                            "hour": 12,
                            "percentage": 37
                        },
                        {
                            "hour": 13,
                            "percentage": 35
                        },
                        {
                            "hour": 14,
                            "percentage": 25
                        },
                        {
                            "hour": 15,
                            "percentage": 13
                        },
                        {
                            "hour": 16,
                            "percentage": 7
                        },
                        {
                            "hour": 17,
                            "percentage": 13
                        },
                        {
                            "hour": 18,
                            "percentage": 27
                        },
                        {
                            "hour": 19,
                            "percentage": 24
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 7
                        },
                        {
                            "hour": 9,
                            "percentage": 18
                        },
                        {
                            "hour": 10,
                            "percentage": 37
                        },
                        {
                            "hour": 11,
                            "percentage": 58
                        },
                        {
                            "hour": 12,
                            "percentage": 73
                        },
                        {
                            "hour": 13,
                            "percentage": 72
                        },
                        {
                            "hour": 14,
                            "percentage": 57
                        },
                        {
                            "hour": 15,
                            "percentage": 37
                        },
                        {
                            "hour": 16,
                            "percentage": 26
                        },
                        {
                            "hour": 17,
                            "percentage": 37
                        },
                        {
                            "hour": 18,
                            "percentage": 53
                        },
                        {
                            "hour": 19,
                            "percentage": 34
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "fAP9E7YkOLnRvH4h7xSvBw",
            "likes": null,
            "location": {
                "lat": 37.29768,
                "lng": -121.83822
            },
            "name": "Banh Cuon Tay Ho",
            "photos": [
                {
                    "height": 3984,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108869583526392729161/photos\">Tlako Youalehekatl</a>"
                    ],
                    "photo_reference": "CmRaAAAAmnstKdHwLEtb9sxjH87yM10HkN2yOxCS-vVcRKdEneAkWCp-52Hu2rzGRLruDhwnmf641FpPLMAhXi1uSHwGet6efW4GG0Sywfe9VGBkhBt4pgJyqo8f4e62b88L4n8BEhBYTMlMFMyCFRHRILyaJQY3GhSJr2ojNYNUNjTDH0ONjwK8eCreyQ",
                    "width": 2988
                },
                {
                    "height": 1960,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111509740307767367700/photos\">Yen Nguyen - LVC</a>"
                    ],
                    "photo_reference": "CmRaAAAA-oFC54zSmJ2Z2SeyemihWcKKHhNUqKTCeSVqmYiMJeEtFP5vrNs9w3s7_7AwgD3KxmqjReCvBmWFsfzm11tzZupR15U0cAYbpi_V3F9qOdFaxBwsdzfwtZz4lfBMmLbfEhCQntVGWnbel72NaCxAZC3nGhSoErdMB2eDTFLCQC_GF6IOw9i_VA",
                    "width": 4032
                },
                {
                    "height": 2560,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116645425022531302773/photos\">Steve Kwok</a>"
                    ],
                    "photo_reference": "CmRaAAAAvBPmCmirTfaun-RuZj5chEgq2sKglpPH6BendnnssZ8MUJuD-xzzKCt1wf9EWkhScJQ6fkHzSXAXHrAOlPMdy5nNVHc6Y0645gSQbYAVTKZV1VVVXlifVE5mmyy8AAAoEhDBI4hDyPVd7Y1wATZG_566GhSGrE57BkWmNSxryJnkPEZ_WLsOGQ",
                    "width": 2560
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103405190643755982422/photos\">Yolanda Clausen</a>"
                    ],
                    "photo_reference": "CmRaAAAAB5yvaM_Si0w7Q9UXgmyfs8JRlOimfqc4HoyVR5vupoDmdRYqLGsiNyjL_n0ICKAPBtaX7RCL1mCEMUl1DqQjP1lycqh7ARWFC0_C9f3LNM0D3bvLmesdr6Hc52G8q2MrEhDZ2j_xMOLUA7gFMEQh4qmFGhTV_8Kd-Q_gaAFj2McqQPRlqY4JXQ",
                    "width": 4032
                },
                {
                    "height": 1440,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110532010819201494307/photos\">danh dan</a>"
                    ],
                    "photo_reference": "CmRaAAAAy31wHDXxo4UEDrFa11kwzx-qSe-EWwsabpHj8uQLeluJU3J9-9s9KdjIZ6foqhjoVsrjOO-77ceHvzFNJZhXUcYb9B4iLkvANz9nZKKU5blXrE5GYUO0eSWN0CBAK2rMEhB5Dy9qwmfz5-zgGUsENfuDGhTy1t1no6UPc21owDsNrqyUU-O1yg",
                    "width": 2560
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110419834635456533897/photos\">Pauline Levu</a>"
                    ],
                    "photo_reference": "CmRaAAAAWChX04HHUIgX6ObbO-KWozNiSBK51L1PFHJtRMLaJuxzjLYzpYBEi9axo3hCy0ss0ZQR9UB7W87248n7KexwuXhMq51TSgClsRwCxjwnRVwviZAo-jlwCp6LaCl7Vq7VEhCtdwCjtMG5cRW132ZuRNCSGhQwEvy9X_y0kNC3Yk7NDqRoEHNO1A",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100172538887797103430/photos\">Minna Kim</a>"
                    ],
                    "photo_reference": "CmRaAAAAjvz241PL5-NO8rmIKKQOVcTuWZ3_dJsPkSDF7FePFZqrlezsxMii0jlFvxIF_xDp7v6lu6xlWMgctDThuP4yPAXxUHMqQLv6FBPfs4sAWmigLV7-e1rOThf2NdP_ZNmaEhBCIH9mZZCskJSxs3owopYyGhSek6m3nOpXUxV5phJO8WjoG9HqwA",
                    "width": 4032
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108320224573839197933/photos\">Randy F.</a>"
                    ],
                    "photo_reference": "CmRaAAAA5BO76ighOK_QKIwcofGm2wRQaQv11kFrpGx6rF20K5pDgJs5jvMH3nvkDjGeLbDmRRIUPURGFOHFjOKJ8PhrtBD4M37E9I-253E00gFyTEHtYKjWjcEUTDtmqT2w52lpEhAJ3lPrTU_pVNMV3fxYD-CHGhRtakK7M1hu9rtv5jwzpojvsQyIjg",
                    "width": 4608
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107671872559570689598/photos\">Vincent Tran</a>"
                    ],
                    "photo_reference": "CmRaAAAAYyhdriVLF0djiQIQWRNLOGKV1sfugdYqI-fd9KJyEYVVOqAwt_wo9QgN3o0mwymaM7PPwAcpWMdK4vHs5OB-QufygaOMPupGUOuWRvcwVIenCbervWbMdoInpqV9CY8fEhDrGOBWvUtnyXlBywgUMqqeGhQCx0OYYUQNzPM8MhhPhDUTQVWKuA",
                    "width": 3024
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111026626505110966861/photos\">Tony Warner</a>"
                    ],
                    "photo_reference": "CmRaAAAAzsJqmkZ_rlDG1lbDHC__kduJmso6IMQiupyw6VwYdT41Up_sZAfK2oGXnPwQeEAsmAyg8gaVPRn7310afn0bbRx75f6X5vOXcWuNK8d66pdMLfV1nAMomKaRZvr6TB1aEhDgtn_Z5End3b0mGNjwKdeSGhTkbJU7wEoodHmhSeNHdS67qBs1kg",
                    "width": 4032
                }
            ],
            "price": 1,
            "rating": 4,
            "types": [
                {
                    "alias": "vietnamese",
                    "title": "Vietnamese"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "1.6 mi",
                    "value": 2533
                },
                "duration": {
                    "text": "6 mins",
                    "value": 385
                },
                "durationInTraffic": {
                    "text": "6 mins",
                    "value": 383
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 2.9951727390289307,
            "predicted_action": 2
        },
        {
            "_id": "5c8c60836ba2e3aece51788a",
            "place_id": "ChIJsblcaPAyjoARFZzvplCAV58",
            "address": "2597 Senter Rd, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 20
                        },
                        {
                            "hour": 12,
                            "percentage": 31
                        },
                        {
                            "hour": 13,
                            "percentage": 38
                        },
                        {
                            "hour": 14,
                            "percentage": 41
                        },
                        {
                            "hour": 15,
                            "percentage": 38
                        },
                        {
                            "hour": 16,
                            "percentage": 34
                        },
                        {
                            "hour": 17,
                            "percentage": 43
                        },
                        {
                            "hour": 18,
                            "percentage": 70
                        },
                        {
                            "hour": 19,
                            "percentage": 91
                        },
                        {
                            "hour": 20,
                            "percentage": 75
                        },
                        {
                            "hour": 21,
                            "percentage": 38
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 9
                        },
                        {
                            "hour": 12,
                            "percentage": 15
                        },
                        {
                            "hour": 13,
                            "percentage": 18
                        },
                        {
                            "hour": 14,
                            "percentage": 16
                        },
                        {
                            "hour": 15,
                            "percentage": 13
                        },
                        {
                            "hour": 16,
                            "percentage": 16
                        },
                        {
                            "hour": 17,
                            "percentage": 26
                        },
                        {
                            "hour": 18,
                            "percentage": 35
                        },
                        {
                            "hour": 19,
                            "percentage": 37
                        },
                        {
                            "hour": 20,
                            "percentage": 29
                        },
                        {
                            "hour": 21,
                            "percentage": 16
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 7
                        },
                        {
                            "hour": 12,
                            "percentage": 12
                        },
                        {
                            "hour": 13,
                            "percentage": 9
                        },
                        {
                            "hour": 14,
                            "percentage": 9
                        },
                        {
                            "hour": 15,
                            "percentage": 13
                        },
                        {
                            "hour": 16,
                            "percentage": 11
                        },
                        {
                            "hour": 17,
                            "percentage": 11
                        },
                        {
                            "hour": 18,
                            "percentage": 27
                        },
                        {
                            "hour": 19,
                            "percentage": 44
                        },
                        {
                            "hour": 20,
                            "percentage": 43
                        },
                        {
                            "hour": 21,
                            "percentage": 23
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": []
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 5
                        },
                        {
                            "hour": 12,
                            "percentage": 9
                        },
                        {
                            "hour": 13,
                            "percentage": 13
                        },
                        {
                            "hour": 14,
                            "percentage": 15
                        },
                        {
                            "hour": 15,
                            "percentage": 16
                        },
                        {
                            "hour": 16,
                            "percentage": 15
                        },
                        {
                            "hour": 17,
                            "percentage": 16
                        },
                        {
                            "hour": 18,
                            "percentage": 25
                        },
                        {
                            "hour": 19,
                            "percentage": 39
                        },
                        {
                            "hour": 20,
                            "percentage": 41
                        },
                        {
                            "hour": 21,
                            "percentage": 26
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 9
                        },
                        {
                            "hour": 12,
                            "percentage": 15
                        },
                        {
                            "hour": 13,
                            "percentage": 17
                        },
                        {
                            "hour": 14,
                            "percentage": 15
                        },
                        {
                            "hour": 15,
                            "percentage": 10
                        },
                        {
                            "hour": 16,
                            "percentage": 10
                        },
                        {
                            "hour": 17,
                            "percentage": 27
                        },
                        {
                            "hour": 18,
                            "percentage": 63
                        },
                        {
                            "hour": 19,
                            "percentage": 93
                        },
                        {
                            "hour": 20,
                            "percentage": 86
                        },
                        {
                            "hour": 21,
                            "percentage": 49
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 20
                        },
                        {
                            "hour": 12,
                            "percentage": 29
                        },
                        {
                            "hour": 13,
                            "percentage": 37
                        },
                        {
                            "hour": 14,
                            "percentage": 41
                        },
                        {
                            "hour": 15,
                            "percentage": 36
                        },
                        {
                            "hour": 16,
                            "percentage": 27
                        },
                        {
                            "hour": 17,
                            "percentage": 39
                        },
                        {
                            "hour": 18,
                            "percentage": 74
                        },
                        {
                            "hour": 19,
                            "percentage": 100
                        },
                        {
                            "hour": 20,
                            "percentage": 82
                        },
                        {
                            "hour": 21,
                            "percentage": 41
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "FGYV8BiXWwM6d-AY_Keazw",
            "likes": null,
            "location": {
                "lat": 37.3029506197842,
                "lng": -121.843790782278
            },
            "name": "Lau Hai San",
            "photos": [
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103266873820945161126/photos\">William Bryson</a>"
                    ],
                    "photo_reference": "CmRaAAAAQTKVAeRcHYyZxg2D53fqgsQlAOApTPm4Ip6HRSZmTk2gH-c3y5i8iY7PwIG9V7lwQ4m88TDn1LfSgHq2mtMWDgGZF12yuzmQBtXOA6vETkCgguciBRy5z1cVovFW1DetEhCMsSVArS7o7_9-t_QHXujxGhSza-e6BkXmF2lruR9gniG8MQmuvg",
                    "width": 3024
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110008290059151922043/photos\">Rachelle Chau</a>"
                    ],
                    "photo_reference": "CmRaAAAAm9JQ64-NiDYi9qwa08y-4Hovay4FLgd51JsnybYAmeFj-_n4d1uE6VWyCjt-td5YIYarYXvjAjW1FUVjuAxFRmHFibRWsP2sBK1Y1Wr9-u6KukPVUUfnKzd_-Z3X8aVoEhBtXhynyQeHS8PbWm3yQdBYGhSCwFAH0bw24gae7Fxw-g-Xv0i2KQ",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103266873820945161126/photos\">William Bryson</a>"
                    ],
                    "photo_reference": "CmRaAAAAQcXjE8tR12uojAfocCDfb0Ui9eXWFC8ko6VJl2yvuZ1OX_hRMObAEJbyxM5sHoR1hWZSXhkDgNFJGpj4y8r1C_LhgK7yGmoUBgmN_vZ7FeIjcbbD_KMkAwdSisPxrOO4EhBJDGL0hopFWp0RU5ToskL1GhTNZiQL23Hx5pjuhnxZUyVrwizveA",
                    "width": 3024
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108320224573839197933/photos\">Randy F.</a>"
                    ],
                    "photo_reference": "CmRaAAAA7cWwL5Uwhw8v-qjFYpWM42lqCmkV28lgrxRIxw4yn9eDP97m4yI5Q3ryzRJ45I8Z1yXJKaQADbGEcqVyFythYoMkKIqhK9aqhwNIeDXys7fD4_8qFr3OEjMv6xPW6ASZEhD4aYHP4_OGJ3rwb7KqOwXQGhT6h6wztdHupkaT7NXE81-0y9x22g",
                    "width": 4608
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103422070468749230903/photos\">Kimngan Ho</a>"
                    ],
                    "photo_reference": "CmRaAAAAtBIPSFC4IaDinWFoYxIqdl8kXuyg2QObs1431zJqB-ysZ7kxjSbjJrp-cfLHSA4Y03VEN4ftQMjAWNy3QiUQ5wCtCJsLETK659q9Icp3mzD7F0PpUYQ5NECZMG_GWEJTEhDuLnf0e0StR11UoTegaqbTGhS2i2pifLC1cyo5-1GGbeDDljy0Mw",
                    "width": 3024
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108320224573839197933/photos\">Randy F.</a>"
                    ],
                    "photo_reference": "CmRaAAAAlPfxeoUytWqxw_bfAh6FIoDSvQDdr_AKnwyce1NlgOVVeCLzh-kUl2Jmlk9pz0Zzj0OIagtdpB2mfLWbpr_rSLgfjigdXmLPYpEh5y-iJDRTv_34XegjQ2OtoarKF0XvEhB1cLHDvBeKKXf87DZT4KQaGhSiHU3ZtemMbbhNBt8B7-a8SeovHw",
                    "width": 4608
                },
                {
                    "height": 1932,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112446032433113742464/photos\">Tuan Vu</a>"
                    ],
                    "photo_reference": "CmRaAAAANpvuQPuPbOuXzjbnOM2HzvSHqWW0Tcj7kOVK9_nhziecis9mFP5CAeXbfCFXyzMKqMZmZD1z5O09vGJxtxj9YNYuZPkYYhYIPxZyhvaBNcaAnSLS-xO-7VKNZV0FduRCEhAVN_R7HwXFjdJ8Y2nAWUkOGhSdwpQRmxIFR0zI1NDYupfvMIlb7Q",
                    "width": 2576
                },
                {
                    "height": 1836,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114530618353942567186/photos\">Jorge RG</a>"
                    ],
                    "photo_reference": "CmRaAAAA1nGNLKyhtPu3JUjF1VJHTRsaSuTKwCJVZGUWVcXcQEdm6nNHf2G5HNDE1yNa_UwZyHPkOS18eXanlBTdyj0LdlzZeug1HJZ7ofcC93VkfnAHGqB-oOwCUUJQpZE0dRzQEhBObV81XUugvalsSrkPcbksGhTBdKQn03iUrEasvekRDDXvp0dhVg",
                    "width": 3264
                },
                {
                    "height": 2160,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112984568834896583834/photos\">David Nguyen</a>"
                    ],
                    "photo_reference": "CmRaAAAAK4jgTDABf-J4XRQrd-SnGvFzwW7LoYSlOw8gUjAv5GYSMlNrcP7qgcWop-fwvfcedfcASUXfVGJlyhA0wC4omRjIz9bZst8PWvFoJ99dpySSRvwCQ3Mf3xgBTZm0ghljEhAPTJnWMiYD024UgT0ODG_3GhS6-QeF4Pt0C8-DImGmxzpkaifUyw",
                    "width": 2880
                },
                {
                    "height": 4048,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115725651126199965086/photos\">Ifthikar Talha</a>"
                    ],
                    "photo_reference": "CmRaAAAA4jBuBWrLfN4Kt5qRkn5BROZDW0ixov0dFjI6RT5iaJTXFiJAmfQriaI1op8xil7EjN8sK9u19nePy2GYbkMRSr8ubeWAQai5tvk3rbo2jw_kGeyRGshcWYkQWN2LqetIEhBqDv4yHRf-0M2T0KcFWwKKGhSkSRFF2UT7tbBWVZlP-Rn0Wif-vQ",
                    "width": 3036
                }
            ],
            "price": 2,
            "rating": 4,
            "types": [
                {
                    "alias": "vietnamese",
                    "title": "Vietnamese"
                },
                {
                    "alias": "hotpot",
                    "title": "Hot Pot"
                },
                {
                    "alias": "seafood",
                    "title": "Seafood"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "1.1 mi",
                    "value": 1739
                },
                "duration": {
                    "text": "4 mins",
                    "value": 261
                },
                "durationInTraffic": {
                    "text": "5 mins",
                    "value": 298
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 2.969686985015869,
            "predicted_action": 2
        },
        {
            "_id": "5c78444c6ba2e3aece08233f",
            "place_id": "ChIJA8CeoCrNj4ARdYjNwdKNDY4",
            "address": "979 Story Rd, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 48
                        },
                        {
                            "hour": 12,
                            "percentage": 80
                        },
                        {
                            "hour": 13,
                            "percentage": 100
                        },
                        {
                            "hour": 14,
                            "percentage": 93
                        },
                        {
                            "hour": 15,
                            "percentage": 74
                        },
                        {
                            "hour": 16,
                            "percentage": 58
                        },
                        {
                            "hour": 17,
                            "percentage": 58
                        },
                        {
                            "hour": 18,
                            "percentage": 64
                        },
                        {
                            "hour": 19,
                            "percentage": 54
                        },
                        {
                            "hour": 20,
                            "percentage": 32
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": []
                },
                {
                    "day": "Tue",
                    "hours": []
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 32
                        },
                        {
                            "hour": 12,
                            "percentage": 38
                        },
                        {
                            "hour": 13,
                            "percentage": 35
                        },
                        {
                            "hour": 14,
                            "percentage": 0
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 9
                        },
                        {
                            "hour": 18,
                            "percentage": 35
                        },
                        {
                            "hour": 19,
                            "percentage": 58
                        },
                        {
                            "hour": 20,
                            "percentage": 32
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 25
                        },
                        {
                            "hour": 12,
                            "percentage": 38
                        },
                        {
                            "hour": 13,
                            "percentage": 38
                        },
                        {
                            "hour": 14,
                            "percentage": 0
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 6
                        },
                        {
                            "hour": 18,
                            "percentage": 16
                        },
                        {
                            "hour": 19,
                            "percentage": 25
                        },
                        {
                            "hour": 20,
                            "percentage": 19
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 58
                        },
                        {
                            "hour": 12,
                            "percentage": 77
                        },
                        {
                            "hour": 13,
                            "percentage": 61
                        },
                        {
                            "hour": 14,
                            "percentage": 0
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 35
                        },
                        {
                            "hour": 18,
                            "percentage": 51
                        },
                        {
                            "hour": 19,
                            "percentage": 54
                        },
                        {
                            "hour": 20,
                            "percentage": 45
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 35
                        },
                        {
                            "hour": 12,
                            "percentage": 70
                        },
                        {
                            "hour": 13,
                            "percentage": 96
                        },
                        {
                            "hour": 14,
                            "percentage": 87
                        },
                        {
                            "hour": 15,
                            "percentage": 51
                        },
                        {
                            "hour": 16,
                            "percentage": 25
                        },
                        {
                            "hour": 17,
                            "percentage": 35
                        },
                        {
                            "hour": 18,
                            "percentage": 51
                        },
                        {
                            "hour": 19,
                            "percentage": 58
                        },
                        {
                            "hour": 20,
                            "percentage": 45
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "wwIuVp394Hh-OjSu2PlPyg",
            "likes": null,
            "location": {
                "lat": 37.331686351783,
                "lng": -121.857492602516
            },
            "name": "Enjoy Seoul",
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105715856693226478353/photos\">Anne Wong</a>"
                    ],
                    "photo_reference": "CmRaAAAAOGeboNBk6HEsRxNb5ZPQBxKtXy1k-UPp17-2xFb05T1NpWlFBu8ufadoBAipAjneuQF2Cr4jHM0Lt3Sd06b-dlD7eNvgeGqh4ufz5btl5OU9b1CGbiwNOd-SuKbDHKlJEhDIEG3LE40qZbp2B2eJs9C2GhTigMcqLbPMHZ0_FSUV0fV5KQwZ4w",
                    "width": 4032
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105505929818478530204/photos\">Vincent Chan</a>"
                    ],
                    "photo_reference": "CmRaAAAApWoPPDdjDs9dKZO5o5MZQnSAKkfb2dyZffAcg3VwAnquQGQo7AKHZfyr9CIM1CQeDHihW_Jgw_Qe8eBaGzj6TqJtROHRMrKxP4yhh0LLKyN4LfTY4B8E_fD3373lktWkEhDBFJspCPS8UJeCVtnjpo9TGhTsCMbBvO41Tzvwx1Utx3sfXBNvnQ",
                    "width": 4048
                },
                {
                    "height": 2688,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105850299848495352316/photos\">Vernon Liang</a>"
                    ],
                    "photo_reference": "CmRaAAAAo3a7JLKKpvK78icg39Qo_CHRY3NQgpu5bUHKtZz8h1ltE7juslbmhFj7uV12iG0QxIMJ1zN2m_XiAqy5XU31MLU5gFeQka2R4W0H1Ia285FP2NNiKSMWYfYn00l9A7HrEhCkl48NycKPTqaVArYpOnCpGhTWonv4Tr7f6nmuDORZCffLH7kFfA",
                    "width": 1512
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108596133484506922514/photos\">Ngan Nguyen</a>"
                    ],
                    "photo_reference": "CmRaAAAAlPDbpdPK26gEYnFNGBuXdg3gDr8N9PIIWt196ezCbvrP7ZPkZwj6q-g76pJ3HDHBjQ9tRu06j13vMW3iZOboNJNv-F3GSVptn7KI07rEjv5vLBfU8LWhOmwZKMUROMBrEhBQD0NQaYtu1mSuaB-GiwfdGhQ9g7KqpEwAg-fxBDRsnU4DEXoT9g",
                    "width": 5312
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116200925914091731929/photos\">Steven Junio</a>"
                    ],
                    "photo_reference": "CmRaAAAAdq-6v3_8aUkNaol2Fg448xN30LKxuUuoKg3TZnCHEs5TMuvwsc4JvOE_GocA8g1rwPHiEuzdMYkHsTZfxE22hfNxBV4uk9rRuhdgcJszKeyZeDFlwXz46BxkcLtRXXf7EhDDFXryOasdJ9OBezvFhKTIGhQ38fRt_JupcuvBJMRrwHWbLvrrJA",
                    "width": 3024
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108400577116128700020/photos\">tan le hoang</a>"
                    ],
                    "photo_reference": "CmRaAAAArOaPl-V7uYNbmxX5xcuPksEj67tEcsQNdufi7aySI5dnamX-24RDRjdQ713nxJc8MA47uC8b986V2DuZ7lk40OBbb3a0i4idtwb7hCQpARV3ljsxH05LcOwOWfJ_J4evEhA4xyVWZKWV7hMxQ3iBQ5w-GhQxEe-hOqitfE4dFtmsNKWOawot-A",
                    "width": 3024
                },
                {
                    "height": 2448,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106065649609247188228/photos\">Hai Truong</a>"
                    ],
                    "photo_reference": "CmRaAAAA0SmWk7E21Wd8Ov_lZUPoOWWKJGyIWowdWA-b3AQGcPT5sccFGTjfeKBubIl8BvBbSVvMjYR8whXXKCKFENzsQNycWTHt4qksKvp5bvxx_si5q16mwuioP8ufaVWiwQmPEhAbGelH9avB7HvZs4E_TbruGhTesiCtVIXoUcKWkhHZQb15P6UAxg",
                    "width": 3264
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105505929818478530204/photos\">Vincent Chan</a>"
                    ],
                    "photo_reference": "CmRaAAAAH2veyoWJ-sv6F0qPVqO8C8f64dpqBUs3bhI0unXH497fuCk0f4nFmFWxTmfGhxwmmCnAXC47AoBAozizYsoJLhzq-DfSkmgvj6VdrSk_aS68tct2koKv8MGEMGIdKfXoEhDtmymSJ54zx3PymCHb3jd6GhQjeQZEqnnPro69KKPlHjGdBXVtjA",
                    "width": 4048
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105252091061670838773/photos\">Lilybeth Luis Liu</a>"
                    ],
                    "photo_reference": "CmRaAAAAm9zEYaTsvy7pzABly9LXsGCYRP_KkxTyBQTwGp_aH__uMs3kV-BGai5zxxGN3Qm7GqfDkvHYLzIHEjFWRkwD8YymTLtnobxMX3yY43N7OvZ7nYNJZXbyAKlX8jpzlNnrEhC8gwxiXtyn-waPwIOMoBhDGhTodVempiLaqWAT6k93iY9aiOuOgw",
                    "width": 3024
                },
                {
                    "height": 2610,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100365357386716747579/photos\">Tim Nguyen</a>"
                    ],
                    "photo_reference": "CmRaAAAA5_fmYV2N9Dn0dbAu52GXiYUc4irvwTmRAV3My2PY0u6zzYzU0AzD7_hkbUGI0GyqLz4LNPbD8u-971psZ_0bnLtXcwxBdXG1aFyxTKMsBSNQC8Axm4wHrs3V7bjynN2JEhBrFtynJ_l9zWQIsXUqVL6UGhShZIfCAjio82I_gRE0ixH8uQKaJg",
                    "width": 4640
                }
            ],
            "price": 2,
            "rating": 4,
            "types": [
                {
                    "alias": "korean",
                    "title": "Korean"
                },
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "japanese",
                    "title": "Japanese"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "2.0 mi",
                    "value": 3215
                },
                "duration": {
                    "text": "8 mins",
                    "value": 456
                },
                "durationInTraffic": {
                    "text": "9 mins",
                    "value": 521
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 2.9503698348999023,
            "predicted_action": 2
        },
        {
            "_id": "5c78444c6ba2e3aece082344",
            "place_id": "ChIJPYLd4irNj4ARuzi4P15SEQ0",
            "address": "1210 Story Rd, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 4,
                            "percentage": 0
                        },
                        {
                            "hour": 5,
                            "percentage": 2
                        },
                        {
                            "hour": 6,
                            "percentage": 5
                        },
                        {
                            "hour": 7,
                            "percentage": 13
                        },
                        {
                            "hour": 8,
                            "percentage": 26
                        },
                        {
                            "hour": 9,
                            "percentage": 42
                        },
                        {
                            "hour": 10,
                            "percentage": 60
                        },
                        {
                            "hour": 11,
                            "percentage": 76
                        },
                        {
                            "hour": 12,
                            "percentage": 86
                        },
                        {
                            "hour": 13,
                            "percentage": 86
                        },
                        {
                            "hour": 14,
                            "percentage": 81
                        },
                        {
                            "hour": 15,
                            "percentage": 73
                        },
                        {
                            "hour": 16,
                            "percentage": 63
                        },
                        {
                            "hour": 17,
                            "percentage": 52
                        },
                        {
                            "hour": 18,
                            "percentage": 36
                        },
                        {
                            "hour": 19,
                            "percentage": 23
                        },
                        {
                            "hour": 20,
                            "percentage": 13
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 4,
                            "percentage": 0
                        },
                        {
                            "hour": 5,
                            "percentage": 13
                        },
                        {
                            "hour": 6,
                            "percentage": 31
                        },
                        {
                            "hour": 7,
                            "percentage": 23
                        },
                        {
                            "hour": 8,
                            "percentage": 13
                        },
                        {
                            "hour": 9,
                            "percentage": 18
                        },
                        {
                            "hour": 10,
                            "percentage": 26
                        },
                        {
                            "hour": 11,
                            "percentage": 36
                        },
                        {
                            "hour": 12,
                            "percentage": 44
                        },
                        {
                            "hour": 13,
                            "percentage": 50
                        },
                        {
                            "hour": 14,
                            "percentage": 50
                        },
                        {
                            "hour": 15,
                            "percentage": 47
                        },
                        {
                            "hour": 16,
                            "percentage": 39
                        },
                        {
                            "hour": 17,
                            "percentage": 31
                        },
                        {
                            "hour": 18,
                            "percentage": 21
                        },
                        {
                            "hour": 19,
                            "percentage": 13
                        },
                        {
                            "hour": 20,
                            "percentage": 7
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 4,
                            "percentage": 0
                        },
                        {
                            "hour": 5,
                            "percentage": 2
                        },
                        {
                            "hour": 6,
                            "percentage": 7
                        },
                        {
                            "hour": 7,
                            "percentage": 13
                        },
                        {
                            "hour": 8,
                            "percentage": 18
                        },
                        {
                            "hour": 9,
                            "percentage": 26
                        },
                        {
                            "hour": 10,
                            "percentage": 34
                        },
                        {
                            "hour": 11,
                            "percentage": 36
                        },
                        {
                            "hour": 12,
                            "percentage": 39
                        },
                        {
                            "hour": 13,
                            "percentage": 36
                        },
                        {
                            "hour": 14,
                            "percentage": 31
                        },
                        {
                            "hour": 15,
                            "percentage": 26
                        },
                        {
                            "hour": 16,
                            "percentage": 18
                        },
                        {
                            "hour": 17,
                            "percentage": 13
                        },
                        {
                            "hour": 18,
                            "percentage": 7
                        },
                        {
                            "hour": 19,
                            "percentage": 28
                        },
                        {
                            "hour": 20,
                            "percentage": 21
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 4,
                            "percentage": 0
                        },
                        {
                            "hour": 5,
                            "percentage": 2
                        },
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 2
                        },
                        {
                            "hour": 8,
                            "percentage": 5
                        },
                        {
                            "hour": 9,
                            "percentage": 15
                        },
                        {
                            "hour": 10,
                            "percentage": 31
                        },
                        {
                            "hour": 11,
                            "percentage": 47
                        },
                        {
                            "hour": 12,
                            "percentage": 57
                        },
                        {
                            "hour": 13,
                            "percentage": 60
                        },
                        {
                            "hour": 14,
                            "percentage": 50
                        },
                        {
                            "hour": 15,
                            "percentage": 34
                        },
                        {
                            "hour": 16,
                            "percentage": 18
                        },
                        {
                            "hour": 17,
                            "percentage": 7
                        },
                        {
                            "hour": 18,
                            "percentage": 7
                        },
                        {
                            "hour": 19,
                            "percentage": 50
                        },
                        {
                            "hour": 20,
                            "percentage": 28
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 4,
                            "percentage": 0
                        },
                        {
                            "hour": 5,
                            "percentage": 13
                        },
                        {
                            "hour": 6,
                            "percentage": 34
                        },
                        {
                            "hour": 7,
                            "percentage": 7
                        },
                        {
                            "hour": 8,
                            "percentage": 5
                        },
                        {
                            "hour": 9,
                            "percentage": 13
                        },
                        {
                            "hour": 10,
                            "percentage": 26
                        },
                        {
                            "hour": 11,
                            "percentage": 36
                        },
                        {
                            "hour": 12,
                            "percentage": 44
                        },
                        {
                            "hour": 13,
                            "percentage": 39
                        },
                        {
                            "hour": 14,
                            "percentage": 28
                        },
                        {
                            "hour": 15,
                            "percentage": 15
                        },
                        {
                            "hour": 16,
                            "percentage": 10
                        },
                        {
                            "hour": 17,
                            "percentage": 26
                        },
                        {
                            "hour": 18,
                            "percentage": 60
                        },
                        {
                            "hour": 19,
                            "percentage": 44
                        },
                        {
                            "hour": 20,
                            "percentage": 7
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 4,
                            "percentage": 0
                        },
                        {
                            "hour": 5,
                            "percentage": 2
                        },
                        {
                            "hour": 6,
                            "percentage": 10
                        },
                        {
                            "hour": 7,
                            "percentage": 21
                        },
                        {
                            "hour": 8,
                            "percentage": 23
                        },
                        {
                            "hour": 9,
                            "percentage": 26
                        },
                        {
                            "hour": 10,
                            "percentage": 34
                        },
                        {
                            "hour": 11,
                            "percentage": 47
                        },
                        {
                            "hour": 12,
                            "percentage": 55
                        },
                        {
                            "hour": 13,
                            "percentage": 55
                        },
                        {
                            "hour": 14,
                            "percentage": 44
                        },
                        {
                            "hour": 15,
                            "percentage": 31
                        },
                        {
                            "hour": 16,
                            "percentage": 18
                        },
                        {
                            "hour": 17,
                            "percentage": 10
                        },
                        {
                            "hour": 18,
                            "percentage": 21
                        },
                        {
                            "hour": 19,
                            "percentage": 50
                        },
                        {
                            "hour": 20,
                            "percentage": 50
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 4,
                            "percentage": 0
                        },
                        {
                            "hour": 5,
                            "percentage": 7
                        },
                        {
                            "hour": 6,
                            "percentage": 18
                        },
                        {
                            "hour": 7,
                            "percentage": 26
                        },
                        {
                            "hour": 8,
                            "percentage": 28
                        },
                        {
                            "hour": 9,
                            "percentage": 23
                        },
                        {
                            "hour": 10,
                            "percentage": 23
                        },
                        {
                            "hour": 11,
                            "percentage": 44
                        },
                        {
                            "hour": 12,
                            "percentage": 76
                        },
                        {
                            "hour": 13,
                            "percentage": 100
                        },
                        {
                            "hour": 14,
                            "percentage": 92
                        },
                        {
                            "hour": 15,
                            "percentage": 63
                        },
                        {
                            "hour": 16,
                            "percentage": 47
                        },
                        {
                            "hour": 17,
                            "percentage": 47
                        },
                        {
                            "hour": 18,
                            "percentage": 50
                        },
                        {
                            "hour": 19,
                            "percentage": 39
                        },
                        {
                            "hour": 20,
                            "percentage": 21
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "mnDJLArt1LP8gkkKqcjh4A",
            "likes": null,
            "location": {
                "lat": 37.33283,
                "lng": -121.85272
            },
            "name": "Banh Mi Oven",
            "photos": [
                {
                    "height": 673,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110436763752946130673/photos\">Banh Mi Oven</a>"
                    ],
                    "photo_reference": "CmRaAAAAXKCzOpkmSNnC0cCpz1bFoI7p1HTU0rH5njtFIaEkEkrhgIuMWnslqGoOu0upirdRuBQ73C1MX01mdZ104uh1nnL-UsxnZgO2NssD4lakRpGkjxwNh1rZ19nfEzjvAOEaEhBmJJRSsbrr3qHFMVflBeIyGhRR6pi_fAdouPwdR-rKzrHbsG-lwQ",
                    "width": 1200
                },
                {
                    "height": 3096,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107721404123505875377/photos\">Albert L.</a>"
                    ],
                    "photo_reference": "CmRaAAAAQebOLjovUuA9fLHfGqQIsPLOv5Qt-FLnYi1GhpZHlp7SkyVS0rWiMneDVn3HTog7Cy69jgc_Mu9Qo3EH4SiaSgL1jV4CMA0Ei-JOgfurMqLEkKkI9iqWUXedFr2_l-RBEhBJyY3RroG4h5VqYxMC6BuwGhR7eDMUWVY2dpEcolq9JaRDc8Lc1w",
                    "width": 4128
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108320224573839197933/photos\">Randy F.</a>"
                    ],
                    "photo_reference": "CmRaAAAADELimbRgwjm325dpJLw0BJNXK_pG12CnWVlO1NIv1RErbAwEI0bH2Vok8M_AWZBms94b5ztLsCD81WW-afCSgr5krGHqqtiG9LQ2ANKA58zQCIme2s8TAv8CZ5wOGm2PEhDsTE0oej__i1svl1MCiBPBGhTEk5cIHsyezV4k3XGaRTBZX79O2w",
                    "width": 4608
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102528923927978099938/photos\">Ben Nguyen</a>"
                    ],
                    "photo_reference": "CmRaAAAA4jYdOlqgdnQJUHX88Xn2H3rWrOddKpOeUirpXKsI19t-QGuCT4hu8_YH5syosLTvr4-zXPrsgKNMpwagd9ARJHWHYAlAjwi8Jwam0zls07FMwplonKp-kNAQ-qrrxfniEhBAfYHc4p2nEEsEMoe5P-DqGhSLC4fYjjKU45xE2BpLX6cX7MHdsQ",
                    "width": 4032
                },
                {
                    "height": 1033,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110436763752946130673/photos\">Banh Mi Oven</a>"
                    ],
                    "photo_reference": "CmRaAAAAmZjDrA5BzKCPCeKEuMS972M0EwSwfvufLHw7PUJTCmV_ojxXZDEgE-QKqOqu5xd2gLNTuWmjIYrJN_WB4aUWLUAelgN0RU7nsWnoU2xX5ehtbFroQoqUQp6oEUPf02_SEhBwcLRlye3xZ5d9z8C63LQTGhTj5VHUEGXaE9x7b8HE9NM-VpOaVA",
                    "width": 1032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102319808565524021569/photos\">Coy Tran</a>"
                    ],
                    "photo_reference": "CmRaAAAAWpdLDvmR8Q0nFwJHck-DQA7ICemKAnUa9mjZpYx0YDATkRpuqIN6fIENA5258S54RAj6bvgWdHOOLiWabQ32ktQuxj2V59CjFP7QLVZEfpZ4CTxUUPr8qPsxDvgAFiHkEhCEspdtjdzZTwJeXtGpT24sGhScLeVZWwVoDEETkVptZzZk70tlAw",
                    "width": 4032
                },
                {
                    "height": 2304,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108481046464471306006/photos\">John Dyke</a>"
                    ],
                    "photo_reference": "CmRaAAAAk2G7uUGT8e4kXXLkmYXLF9qXsveqJViTQn4EjMDQKjXJwdIc6bhXaOOYHnoo6UsvPv2HrzEO_m6lZc9B1IjPk088qQUkcRxqxRle0UgInUmKpvit2IiZ-58AD0QcIOjVEhCKrvVgiwr0cz-33TwMXx4iGhSn8LDhRgyzsd2hlOacZSF9RWmPXg",
                    "width": 3456
                },
                {
                    "height": 2097,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112394774744666742006/photos\">THIEN-VU DINH</a>"
                    ],
                    "photo_reference": "CmRaAAAAWU9d52tKejwpKhfevCxcuuyTj46Z00MAJ5agrOU60rfQO_w7f6g-wix-UQ5CZnUFpy_k0fyEcYoQhBADJpPyrm8GJlfa44FaP4GgUkhQJtclMA_okL7O-Yg1o4Qk8lp-EhAhvQMYNKG5n0lb5TZZ4duIGhRXAJ-4QDcS8otX23gZC9jkXIkIuw",
                    "width": 2491
                },
                {
                    "height": 2304,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108481046464471306006/photos\">John Dyke</a>"
                    ],
                    "photo_reference": "CmRaAAAAQ58KXt-9e6dBt5aXpU7-QOJVDTtBo4Zm3MFKHRtqTefqlsUbwSWx7avkyjL2sRgzNZY0vvs6GuSlfjBQTu2pbwd-awgQtVCRk61jiaR8NbH8oa3Rlmy9kzDQnaROFYcCEhAYUGoTjwp6dBULfPqjsVLEGhSjPF7hTEZGHgw395578YZsT0Duiw",
                    "width": 3456
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103266873820945161126/photos\">William Bryson</a>"
                    ],
                    "photo_reference": "CmRaAAAAP7ncF8jiBACc7tiGlj9zFuCwLBOsJPc3Umhxt7LnJVaSntC7CvazGhKNKxUzuCcdieJa0gjpxtct0B3r90iSIWXBoAm7BJ18THHhcz1L_ZXsBShtSALsCDF3uv3LHyfPEhAScTrKoULAWZKylsinQv38GhQKXnwgpPdn2vQ7qQdZEyk9D7ipaA",
                    "width": 4032
                }
            ],
            "price": 1,
            "rating": 4,
            "types": [
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "vietnamese",
                    "title": "Vietnamese"
                },
                {
                    "alias": "desserts",
                    "title": "Desserts"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "2.0 mi",
                    "value": 3208
                },
                "duration": {
                    "text": "6 mins",
                    "value": 384
                },
                "durationInTraffic": {
                    "text": "6 mins",
                    "value": 378
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 2.921337604522705,
            "predicted_action": 2
        },
        {
            "_id": "5c7844976ba2e3aece0824a2",
            "place_id": "ChIJlYWdjX0tjoAR1wVtANUY9LQ",
            "address": "2980 Aborn Square Rd, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 34
                        },
                        {
                            "hour": 11,
                            "percentage": 66
                        },
                        {
                            "hour": 12,
                            "percentage": 80
                        },
                        {
                            "hour": 13,
                            "percentage": 68
                        },
                        {
                            "hour": 14,
                            "percentage": 58
                        },
                        {
                            "hour": 15,
                            "percentage": 64
                        },
                        {
                            "hour": 16,
                            "percentage": 70
                        },
                        {
                            "hour": 17,
                            "percentage": 70
                        },
                        {
                            "hour": 18,
                            "percentage": 68
                        },
                        {
                            "hour": 19,
                            "percentage": 58
                        },
                        {
                            "hour": 20,
                            "percentage": 35
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 14
                        },
                        {
                            "hour": 11,
                            "percentage": 31
                        },
                        {
                            "hour": 12,
                            "percentage": 46
                        },
                        {
                            "hour": 13,
                            "percentage": 49
                        },
                        {
                            "hour": 14,
                            "percentage": 38
                        },
                        {
                            "hour": 15,
                            "percentage": 25
                        },
                        {
                            "hour": 16,
                            "percentage": 31
                        },
                        {
                            "hour": 17,
                            "percentage": 59
                        },
                        {
                            "hour": 18,
                            "percentage": 79
                        },
                        {
                            "hour": 19,
                            "percentage": 63
                        },
                        {
                            "hour": 20,
                            "percentage": 28
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 8
                        },
                        {
                            "hour": 11,
                            "percentage": 45
                        },
                        {
                            "hour": 12,
                            "percentage": 88
                        },
                        {
                            "hour": 13,
                            "percentage": 74
                        },
                        {
                            "hour": 14,
                            "percentage": 47
                        },
                        {
                            "hour": 15,
                            "percentage": 44
                        },
                        {
                            "hour": 16,
                            "percentage": 39
                        },
                        {
                            "hour": 17,
                            "percentage": 31
                        },
                        {
                            "hour": 18,
                            "percentage": 46
                        },
                        {
                            "hour": 19,
                            "percentage": 64
                        },
                        {
                            "hour": 20,
                            "percentage": 45
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 27
                        },
                        {
                            "hour": 11,
                            "percentage": 47
                        },
                        {
                            "hour": 12,
                            "percentage": 58
                        },
                        {
                            "hour": 13,
                            "percentage": 51
                        },
                        {
                            "hour": 14,
                            "percentage": 37
                        },
                        {
                            "hour": 15,
                            "percentage": 30
                        },
                        {
                            "hour": 16,
                            "percentage": 41
                        },
                        {
                            "hour": 17,
                            "percentage": 62
                        },
                        {
                            "hour": 18,
                            "percentage": 70
                        },
                        {
                            "hour": 19,
                            "percentage": 57
                        },
                        {
                            "hour": 20,
                            "percentage": 32
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 15
                        },
                        {
                            "hour": 11,
                            "percentage": 43
                        },
                        {
                            "hour": 12,
                            "percentage": 72
                        },
                        {
                            "hour": 13,
                            "percentage": 72
                        },
                        {
                            "hour": 14,
                            "percentage": 44
                        },
                        {
                            "hour": 15,
                            "percentage": 22
                        },
                        {
                            "hour": 16,
                            "percentage": 27
                        },
                        {
                            "hour": 17,
                            "percentage": 53
                        },
                        {
                            "hour": 18,
                            "percentage": 76
                        },
                        {
                            "hour": 19,
                            "percentage": 70
                        },
                        {
                            "hour": 20,
                            "percentage": 42
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 9
                        },
                        {
                            "hour": 11,
                            "percentage": 51
                        },
                        {
                            "hour": 12,
                            "percentage": 91
                        },
                        {
                            "hour": 13,
                            "percentage": 58
                        },
                        {
                            "hour": 14,
                            "percentage": 42
                        },
                        {
                            "hour": 15,
                            "percentage": 48
                        },
                        {
                            "hour": 16,
                            "percentage": 60
                        },
                        {
                            "hour": 17,
                            "percentage": 82
                        },
                        {
                            "hour": 18,
                            "percentage": 100
                        },
                        {
                            "hour": 19,
                            "percentage": 91
                        },
                        {
                            "hour": 20,
                            "percentage": 60
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 32
                        },
                        {
                            "hour": 11,
                            "percentage": 63
                        },
                        {
                            "hour": 12,
                            "percentage": 88
                        },
                        {
                            "hour": 13,
                            "percentage": 88
                        },
                        {
                            "hour": 14,
                            "percentage": 65
                        },
                        {
                            "hour": 15,
                            "percentage": 46
                        },
                        {
                            "hour": 16,
                            "percentage": 53
                        },
                        {
                            "hour": 17,
                            "percentage": 78
                        },
                        {
                            "hour": 18,
                            "percentage": 89
                        },
                        {
                            "hour": 19,
                            "percentage": 72
                        },
                        {
                            "hour": 20,
                            "percentage": 40
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "fVGN3trS_Qe58lNtnRL_Jw",
            "likes": null,
            "location": {
                "lat": 37.3116332741621,
                "lng": -121.810017563403
            },
            "name": "Tacos A La Parrilla",
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101246088088939622848/photos\">Tony Nguyen</a>"
                    ],
                    "photo_reference": "CmRaAAAAwNMIhMUbQqivMXcZzFlaF5zP0Beu2tAJsJwX_antr2EqCJ_5r1Urq1bHnwftlCZlIghs79WEWr-WJZFhSNtp6DPHDkCy1eZ88ffe85l0_fv7IdrNkdaML7ZSrF3u_gRWEhBuzcUQUWl2VQtyP1CJrXqYGhTqJQGBIvOyUFPe_eBvZqqGdIS9qg",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100595909932505051476/photos\">Anthony Godoy</a>"
                    ],
                    "photo_reference": "CmRaAAAAREo9qFRwF-9yXrdnSPzBRGHj6qCpVg7fiKOdwWM_CijVVPqmGFn0WJVVh3O8zkx5XQ5UBh_7ZXxciyv65hi_BhMPCZlaYMW2kb8g_OmdhzZy1RozuDW3ZYo9iYESzUM3EhB4LMC8r-0kryHN8vxtHjGCGhR2rrWq5d0dXFrl90lJNvItVSLfiA",
                    "width": 3024
                },
                {
                    "height": 5312,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117894126576947241915/photos\">Steven Contreras</a>"
                    ],
                    "photo_reference": "CmRaAAAABh3gyIxW5ATThDW9GVVPR_NGZZstxRDQkfAOGWuiQ9s4UyQ5oHIcITKlzvhCHee9bg8LttAj6bzRL97WQUUv9Vtp2248jxu1H-BBHyjyaEqaOqlON3ut0Nvj-foFTygUEhC2Yc5N_-g9Kfd3eJ7Q5c63GhRqJfeVCkAD7HAUYUpYysXLFp342A",
                    "width": 2988
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100236902183476448060/photos\">Billy Minogue</a>"
                    ],
                    "photo_reference": "CmRaAAAAWvy7vDDzhbI99n3mI1sFFGIIb1LKo3Hd1EEqmYAQxOZZy4moTbblKv-kJogo0uzcFTdE9l_S6e2G61diR82NNFjN7_BctGv16LstB9t_eAmPVyhWxA_FTKR6tXg0TKlwEhCMggh7VwTZaEcw9gTwsGUjGhSDxPlMJFz5GikVWVW9RLdz2G9UxA",
                    "width": 4032
                },
                {
                    "height": 2112,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110548956358875749797/photos\">Charles Ling</a>"
                    ],
                    "photo_reference": "CmRaAAAAlnvTKWpD4paNNX866pGGqW-rh_Wa4M0s_rQtQzo7kyy_vbiA8mGdbMAJbhi0SqrIwy0M5i45pg3TMJW5uqeax7sZf37fEw5EGGB0a-gr5U8aMVC9vXRmt0w3VagErLGkEhBaofJA1G4k7eHxow6Qj6XwGhT-sfQMFhej7o8zMkt_UPhpuHy_qg",
                    "width": 1611
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100595909932505051476/photos\">Anthony Godoy</a>"
                    ],
                    "photo_reference": "CmRaAAAAmwOy6DAoKtYnu596jR26X7lCSZZxz_xMP4-xjuicoPHlmxXt70tZvQU58DihuAAhaWdOB5LTJPQAVAVvJkxDDXg8PpxIHP38CntxenizCdX5iwGP5amap0V7ZYFllSFTEhBPVtlP0qs8RRWgy_HIVZG2GhRjbiGBJUnkv4L0FIQX6VkDqZdCPg",
                    "width": 4032
                },
                {
                    "height": 2218,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103185277956111524344/photos\">Jessica Angelini</a>"
                    ],
                    "photo_reference": "CmRaAAAAmHyuffLo2UM-E_Er1ZusGfEsrzUmWAwdoPrEVf1iNPH9pEkDij25novcZvUJxlbJMwJBOY35AmuibzLyldjEWU-JpSf1cZA6wpewHkFG5A2B4c8yvk5jnSQyssV8sr5XEhAW-emolqwKIPzfEDA2v0LYGhS4APtI5TO9Mk1Kj8DncQnuzCyv3g",
                    "width": 4656
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110548956358875749797/photos\">Charles Ling</a>"
                    ],
                    "photo_reference": "CmRaAAAAgFuNLCdDJ13yNXIYN1SIGFqUxht8-6X62LF6rcyAxRVnqPLVyz2b-VkGZtzKU9nbqlXdrwQCFQGJlzmLvwTZAzTNuUkuB5MiOGmiQdfPGKgN-LBMbYUcw1jGkzabkeFfEhDMpu_6GhyStt4yox2VEh5AGhTGJmyFHwSqcU5W95VINV23sUwvJA",
                    "width": 4608
                },
                {
                    "height": 3264,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108485530462827379802/photos\">Brett Litman</a>"
                    ],
                    "photo_reference": "CmRaAAAA5tqA7hpDhexjKMFdM-GZh96UBrOcwiULl7uE6C0KqkvkEiwTTo77Fn-dMqQkpDHwXlZyEywi7Rv9o7kj9x2NZi7GGpbiUZrFoxRe_8rtrYWjnGoTilcQUncFQYu0QmKOEhCHgQsy1itFhizeB3YBzuJsGhTxXIsfmQsM4lX0KVKFxIKO59XuCQ",
                    "width": 1836
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117894126576947241915/photos\">Steven Contreras</a>"
                    ],
                    "photo_reference": "CmRaAAAArNA9aG4fzmdQeUgHuRMIeQjtNYK90X9V5MTTJfENTLvz4Ia5WP4YbZE0LOVXLM-Ele5SkQ37d-WpVdxeq4eRVmOpqa425OOqlbeTiVcc0LgrEDWVvEdU1IbAR-BZzQH6EhBnzA-9RRgwo20agxGSDZxWGhQO6YDuNeI8Wyv0sVwAPUm_ghSdRA",
                    "width": 5312
                }
            ],
            "price": 1,
            "rating": 4.5,
            "types": [
                {
                    "alias": "mexican",
                    "title": "Mexican"
                }
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "3.0 mi",
                    "value": 4853
                },
                "duration": {
                    "text": "8 mins",
                    "value": 488
                },
                "durationInTraffic": {
                    "text": "8 mins",
                    "value": 492
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_rating": 4.1041460037231445,
            "predicted_action": 2
        },
        {
            "_id": "5c7844976ba2e3aece0824b4",
            "place_id": "ChIJZdQ8U0PMj4AR_ukCSP1sQqE",
            "address": "1710 Berryessa Road Ste 102, San Jose",
            "busy_hours": null,
            "dislikes": null,
            "favorited": null,
            "id": "e171d8874ecff4e9d1753adf4871664c6328f87e",
            "likes": null,
            "location": {
                "lat": 37.3728132,
                "lng": -121.8734193
            },
            "name": "Domino's Pizza",
            "photos": [
                {
                    "height": 682,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110177573688041547397/photos\">Domino&#39;s Pizza</a>"
                    ],
                    "photo_reference": "CmRaAAAADeuBkuZ8P_yFu_q824suVkLrIqxAcPbF2Me5BbUskGaxf2B71zGFECTzUrKZGVhbV7wachhwrrbGADPs1wDhrymVX9JF5CsycSmappBGlKqwLamNbkLBJItjQyp-20v6EhA5vbkweOuvqowokP9uazm8GhQ1PfOeL31ofkoWhs-VU7gmX_xKPw",
                    "width": 1024
                },
                {
                    "height": 650,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110177573688041547397/photos\">Domino&#39;s Pizza</a>"
                    ],
                    "photo_reference": "CmRaAAAASrpu4mjfiJsiewSRM0RjBlMob6oDWzWi9_Io_jcd_ZIUZ-NpC4mwamFCJjG89Rm0yTzlgwetM2TOq6ap5VyQoJQD3xJ_rT603FIiZ1XxYc432WvTqjbkijhOTyQ0hDzjEhC-BX76ERKKGdE69offFj-gGhTSoIwDdfA6CpdcL30P6zqIioo19A",
                    "width": 650
                },
                {
                    "height": 3264,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113905663818584450678/photos\">Anthony Lee</a>"
                    ],
                    "photo_reference": "CmRaAAAAyHG05vLuq2iquRrpEOsARQR3TWq0f86rsQyEy23lsHDzqkHo-yKyLfIirGRHUTlM1XhCGZ-Inm90uH-CZ1IH6YTpEh8YlrADq1U9hsW2T8thA0gwJDgvpIfdnEhBseTJEhAiAPhNZfMsrjwZLsTnRs4dGhTt-j2kdmgJRcgSppSFgl-74qKQpQ",
                    "width": 2448
                },
                {
                    "height": 3264,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113905663818584450678/photos\">Anthony Lee</a>"
                    ],
                    "photo_reference": "CmRaAAAAOlb0UuilbCDNHRLmnxbC30BsCmGh2TyDGN2sW713XzR0we4FeAMXOD5X1wsxB5m3Sulr5_mGRHxdD9OwkBWyYTpnu3IxG5YMh_HFVSsgYu7kUq6nPKsN5dF-uv1gAWzZEhCgkOhJR-uZFi-LNBvjUbhOGhT46YeNy0yqZAJ3KLZqBASVYoBTCw",
                    "width": 2448
                },
                {
                    "height": 768,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110177573688041547397/photos\">Domino&#39;s Pizza</a>"
                    ],
                    "photo_reference": "CmRaAAAA5tkgUva6yto7_CYN_v-VdwoB8yrIo9rzHQr1cH41peERQkmiRtKlyCfeojguQf6J8t1CaCDbSmCJhOMiTF4_FevX8gxylgrmfbqDXnl2mDf8fIpGNlOmI31yN_LiLOWyEhD31ky6WLHl6Ht1-RQ_1YgoGhSPH3-2ArbC9teYUGUhgObftf9DIQ",
                    "width": 1024
                },
                {
                    "height": 768,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110177573688041547397/photos\">Domino&#39;s Pizza</a>"
                    ],
                    "photo_reference": "CmRaAAAAX8IGBoWsyAN06NdmDqng3-ua6AlaboPKvx1jfoEShpGXL3oTQcUFr_E27NSYObMyCs-vpk6a9OPHuY-iGIxEqE6XQ5ruru17IlFn4TSty_IR5mS13Dk_atEtupg6lgZiEhAkyD54MICkb19AmQlui7ELGhSdvNm8gl1eiUr2OGH7wVQtI_nO7Q",
                    "width": 1024
                },
                {
                    "height": 2432,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106318286058253753146/photos\">Derik Vo</a>"
                    ],
                    "photo_reference": "CmRaAAAAxn73TDTG5VnqXQhDLLHLyrjdwShUQPyzxl8NFVt2E1tckPN2SQA4yqReg7dLCYWaYksa8gk9aQopjTHcCQFC2kp9rv6cs-h54W9IOQeCMmjnxNf8O0roX3mHQ5DJotrhEhBFo3-83WIMCNdt38qkZ5ZFGhTyTP--uy29coTDmaTpo2UeOAqdQw",
                    "width": 3286
                },
                {
                    "height": 3264,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113905663818584450678/photos\">Anthony Lee</a>"
                    ],
                    "photo_reference": "CmRaAAAA2SOY2hUyIboW5bz5NRKUY2Hwi5yssDmqmaapubrkLmo76bxpwc991vtGteZMqh4ZbbxzoG2f6xp4Gml24M1IExKLvkC-TPKg793O3YpBudhxFQTDDAmEy95d5IEK-9kNEhDOrebpqKh9pgW7AK_ziGskGhRQaFVMJpTCnyJvHSILTO_YZ7FhTg",
                    "width": 2448
                },
                {
                    "height": 674,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110177573688041547397/photos\">Domino&#39;s Pizza</a>"
                    ],
                    "photo_reference": "CmRaAAAAnDqWc7l0jI92Q8Ir6EOpLWPRq_UY4vqKF0JNDzEigt4TTE3mkFsWbtNz1ri2NC_fn8jRHuB3M28yn7kylzL4KZrYUDptfmK3pIcisvj2mu7p_xBLSfYDsh2sz6SNiVWMEhBvARvcC6ByGHFHPHh3eeWrGhQOG0e7AE3MocH2MGcK1ytGTVCXgQ",
                    "width": 1024
                },
                {
                    "height": 3264,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113905663818584450678/photos\">Anthony Lee</a>"
                    ],
                    "photo_reference": "CmRaAAAALYmWWqbiEwjIk13jvzoVzBaS_R8NfSkbZYtU_hocr47jWHBiko_A3NQqhImelTX7ik1gijkohWfzb5Gwuk7qihQttvHZXgMi4T6nIjBJp87EvBUxI-lOZ9FHnW0FFWbuEhCvAiJQ2ZmLMO2sKOG4hPFyGhRd8n9JP-bQ9U1cnGpNOxm2Q7gdag",
                    "width": 2448
                }
            ],
            "price": 1,
            "rating": 3.3,
            "types": [
                "meal_delivery",
                "meal_takeaway",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "7.0 mi",
                    "value": 11294
                },
                "duration": {
                    "text": "12 mins",
                    "value": 731
                },
                "durationInTraffic": {
                    "text": "12 mins",
                    "value": 734
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c78c0776ba2e3aece09f1af",
            "place_id": "ChIJKUL3Y0bKj4ARCg7Kd1owiG4",
            "address": "2006 El Camino Real, Santa Clara",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 31
                        },
                        {
                            "hour": 12,
                            "percentage": 44
                        },
                        {
                            "hour": 13,
                            "percentage": 49
                        },
                        {
                            "hour": 14,
                            "percentage": 46
                        },
                        {
                            "hour": 15,
                            "percentage": 46
                        },
                        {
                            "hour": 16,
                            "percentage": 55
                        },
                        {
                            "hour": 17,
                            "percentage": 69
                        },
                        {
                            "hour": 18,
                            "percentage": 79
                        },
                        {
                            "hour": 19,
                            "percentage": 78
                        },
                        {
                            "hour": 20,
                            "percentage": 64
                        },
                        {
                            "hour": 21,
                            "percentage": 45
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 44
                        },
                        {
                            "hour": 12,
                            "percentage": 51
                        },
                        {
                            "hour": 13,
                            "percentage": 37
                        },
                        {
                            "hour": 14,
                            "percentage": 24
                        },
                        {
                            "hour": 15,
                            "percentage": 25
                        },
                        {
                            "hour": 16,
                            "percentage": 36
                        },
                        {
                            "hour": 17,
                            "percentage": 49
                        },
                        {
                            "hour": 18,
                            "percentage": 56
                        },
                        {
                            "hour": 19,
                            "percentage": 56
                        },
                        {
                            "hour": 20,
                            "percentage": 49
                        },
                        {
                            "hour": 21,
                            "percentage": 36
                        },
                        {
                            "hour": 22,
                            "percentage": 24
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 39
                        },
                        {
                            "hour": 12,
                            "percentage": 50
                        },
                        {
                            "hour": 13,
                            "percentage": 48
                        },
                        {
                            "hour": 14,
                            "percentage": 36
                        },
                        {
                            "hour": 15,
                            "percentage": 30
                        },
                        {
                            "hour": 16,
                            "percentage": 40
                        },
                        {
                            "hour": 17,
                            "percentage": 64
                        },
                        {
                            "hour": 18,
                            "percentage": 81
                        },
                        {
                            "hour": 19,
                            "percentage": 77
                        },
                        {
                            "hour": 20,
                            "percentage": 56
                        },
                        {
                            "hour": 21,
                            "percentage": 30
                        },
                        {
                            "hour": 22,
                            "percentage": 10
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 78
                        },
                        {
                            "hour": 12,
                            "percentage": 100
                        },
                        {
                            "hour": 13,
                            "percentage": 69
                        },
                        {
                            "hour": 14,
                            "percentage": 37
                        },
                        {
                            "hour": 15,
                            "percentage": 36
                        },
                        {
                            "hour": 16,
                            "percentage": 54
                        },
                        {
                            "hour": 17,
                            "percentage": 77
                        },
                        {
                            "hour": 18,
                            "percentage": 89
                        },
                        {
                            "hour": 19,
                            "percentage": 83
                        },
                        {
                            "hour": 20,
                            "percentage": 62
                        },
                        {
                            "hour": 21,
                            "percentage": 36
                        },
                        {
                            "hour": 22,
                            "percentage": 17
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 68
                        },
                        {
                            "hour": 12,
                            "percentage": 88
                        },
                        {
                            "hour": 13,
                            "percentage": 92
                        },
                        {
                            "hour": 14,
                            "percentage": 81
                        },
                        {
                            "hour": 15,
                            "percentage": 67
                        },
                        {
                            "hour": 16,
                            "percentage": 65
                        },
                        {
                            "hour": 17,
                            "percentage": 73
                        },
                        {
                            "hour": 18,
                            "percentage": 77
                        },
                        {
                            "hour": 19,
                            "percentage": 68
                        },
                        {
                            "hour": 20,
                            "percentage": 48
                        },
                        {
                            "hour": 21,
                            "percentage": 26
                        },
                        {
                            "hour": 22,
                            "percentage": 10
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 54
                        },
                        {
                            "hour": 12,
                            "percentage": 63
                        },
                        {
                            "hour": 13,
                            "percentage": 58
                        },
                        {
                            "hour": 14,
                            "percentage": 46
                        },
                        {
                            "hour": 15,
                            "percentage": 39
                        },
                        {
                            "hour": 16,
                            "percentage": 41
                        },
                        {
                            "hour": 17,
                            "percentage": 53
                        },
                        {
                            "hour": 18,
                            "percentage": 62
                        },
                        {
                            "hour": 19,
                            "percentage": 60
                        },
                        {
                            "hour": 20,
                            "percentage": 48
                        },
                        {
                            "hour": 21,
                            "percentage": 30
                        },
                        {
                            "hour": 22,
                            "percentage": 15
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 31
                        },
                        {
                            "hour": 12,
                            "percentage": 45
                        },
                        {
                            "hour": 13,
                            "percentage": 43
                        },
                        {
                            "hour": 14,
                            "percentage": 39
                        },
                        {
                            "hour": 15,
                            "percentage": 46
                        },
                        {
                            "hour": 16,
                            "percentage": 62
                        },
                        {
                            "hour": 17,
                            "percentage": 73
                        },
                        {
                            "hour": 18,
                            "percentage": 77
                        },
                        {
                            "hour": 19,
                            "percentage": 72
                        },
                        {
                            "hour": 20,
                            "percentage": 62
                        },
                        {
                            "hour": 21,
                            "percentage": 49
                        },
                        {
                            "hour": 22,
                            "percentage": 32
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "dcc314560b69f47b6a9160781dc82ed3994c3456",
            "likes": null,
            "location": {
                "lat": 37.3519945,
                "lng": -121.9611718
            },
            "name": "Boston Market",
            "photos": [
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107165196471842483651/photos\">Rick Hayden</a>"
                    ],
                    "photo_reference": "CmRaAAAAep6MvOqZ8JO-4QiNFLKo2k_C0fyCLPW6XE2InV_CrrChKMMHwDJM9dr7boxwRxSB3w60MtlgCpPtxsxe34sbZbcfcmflEqOXO42Gs0lAHN8Yj5qPYSAktbHwpnuN79FgEhAPQZgxe_4-AlSIPtk4Wk1AGhQv6K_-vDmXgFJPgK34ETOsMIglhA",
                    "width": 4048
                },
                {
                    "height": 1836,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111122174127511407193/photos\">Susan Gutrugianios</a>"
                    ],
                    "photo_reference": "CmRaAAAAH2-vM5UKAi9MXvZqTPL8j_sbITL_kdTtWdU8ovoGQRGdy1ZJWkpYCBj8DFtslnIHahmIvwY1jUarYA6MSPdRQkTGozlJPKc2Ncb9Yc5z0WAzLpwxlm8IVtnKow_bFQ_FEhD0I-4-LUADAu2yy2wZxDdtGhSKHHtMc0c94s0MeJrB7-t9N8e4pA",
                    "width": 3264
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116976417488826345286/photos\">Max Goldberg</a>"
                    ],
                    "photo_reference": "CmRaAAAAhq4a5hYGeTvCV6y896cpjRaZafpZFipq9cM8lAsVcEIZkL3S1zDcludPKRuvAQA0uHD80vSfE_5CNreoTqaggCRr_wfFmLOp6XfbpnL54new5MM-puFt-mBqHR2SOmSwEhAizFBFqzaAHxcaiGQwImGlGhTXPyoWX-a1wpRDKAiNYbQtEwmHFg",
                    "width": 3984
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108594278443445096461/photos\">Brenda Liu</a>"
                    ],
                    "photo_reference": "CmRaAAAAIHkSIdtnnw9hrc13NmTqLI2-2VBHSIbzh9B1ESAgzg28Ph-0bC87sq6jhHeszY36voKQDC0D5TrXIRJ9d2wY3DEPItvTHZ8jbsly6TqYjsrp8e8I4knYeciXo0rE11CTEhCYV-CTqH0rz_jQDNz7PKu3GhRIWO7Sq4UO0GYX9TKrC21dZfMKHQ",
                    "width": 4048
                },
                {
                    "height": 1512,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105850299848495352316/photos\">Vernon Liang</a>"
                    ],
                    "photo_reference": "CmRaAAAAR9fZlIdbiXk_QnNzCWJEIJ1IRep2MSiUcvelPRRtb2GPRvYUA0T6rUxPrSTWJCKHg7o7U8-ymGgNQq7L22_DXLyOHHGQiJXr2X8ZOBVYsdV-7Mk-cP3gOehmkww-86sFEhAUeaOmqEu2x4k_VSvVVUY1GhSK6CGLVsM-G_oFjzgbU63ulxCd0w",
                    "width": 2688
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116976417488826345286/photos\">Max Goldberg</a>"
                    ],
                    "photo_reference": "CmRaAAAAiu3E4bjxifRA1ZN4D-2YoSeLPkeyjFfR4UPO9FBVMtl_qUGhWSP9sJTYfXNPPwM0l4jacG5BCE4uO-HFk2DEC_gpMIAfXurOzufuMR0-9R-YyDMbHIMM__Um430cJ3cXEhCBKkIxbMJMcpptOaLytPslGhTC-uQAiewk3tZ3xcq04TDUt8fe2w",
                    "width": 3984
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110889359600338463075/photos\">Merry Yen</a>"
                    ],
                    "photo_reference": "CmRaAAAAgFWsywL0Z_z44acSK4ojzENI3ZObK-xmBYGzPshtGCr4yRqiMBeu56z1xPh6dhKImhTpftRW1_Dw9H0UQGL2lSOM7_ExWQ4xDCB-uCMch8iHM-8M_uJie_BJl9V2v4ZDEhAU2ORpXn0Yg9V237k5cQyXGhTCdMHo9vmNzhY0PEBOwtOmBoq0ZA",
                    "width": 4048
                },
                {
                    "height": 2340,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103158427196594413963/photos\">Ricochet Orange</a>"
                    ],
                    "photo_reference": "CmRaAAAAl-HIAmNxWmQzJnxLJDHGetGhZqgfZd34IYYJfhpaYdkr5TRWJ4nTHb27JHi8879GbexAL5-V0CE2lliEaD7B9o_JFfe1KHsR33Bpt_YNAbhz5JfG0J6pMKStuFB_hw3AEhCIQ24FeiNXpBf9ocfjIEavGhS3rCFsnJ8MthgFdBNUXEJhEnmGSA",
                    "width": 4160
                },
                {
                    "height": 900,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106502024062324660295/photos\">Boston Market</a>"
                    ],
                    "photo_reference": "CmRaAAAAQcwx59sDnOiMz9fOkmcg3SDMDgHtbt74x-XIIJOQZGFXu40x0K5FNCKBK2445p7_SuVYseti1v_-JcC6_8aZDwUdgdeqlGC6kUw2Pb_KdYEroVhti50EW-KBrGiTxEkVEhCp29_1eL4F5SRsydCqtzSGGhRvMUNKvL8o9JeLZsy7pVacxoUw_A",
                    "width": 1725
                },
                {
                    "height": 585,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106502024062324660295/photos\">Boston Market</a>"
                    ],
                    "photo_reference": "CmRaAAAAIH6RQUE5BN5sPy1iXzw4E4lcRk2ho3o1FY43tfMrOHNJSwkC0G4gYJX9GofCAlvt885uBcVOlSbIUKVXvletChSG4dOMCC-VH2md6jrpkgP6ReCmunwwUCcQz6JQoNQxEhA-9oTVD8efy2WjVXvOucgeGhRkCZjMrmmS4cgr067ynCjFX5-Ueg",
                    "width": 1080
                }
            ],
            "price": 1,
            "rating": 4.1,
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "12.7 mi",
                    "value": 20374
                },
                "duration": {
                    "text": "18 mins",
                    "value": 1106
                },
                "durationInTraffic": {
                    "text": "19 mins",
                    "value": 1124
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c75c9276ba2e3aecefe6be7",
            "place_id": "ChIJzz5T0N_Kj4ARcGtZ8nXSYkA",
            "address": "3055 Olin Avenue Suite 1000, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 19
                        },
                        {
                            "hour": 11,
                            "percentage": 38
                        },
                        {
                            "hour": 12,
                            "percentage": 57
                        },
                        {
                            "hour": 13,
                            "percentage": 67
                        },
                        {
                            "hour": 14,
                            "percentage": 64
                        },
                        {
                            "hour": 15,
                            "percentage": 57
                        },
                        {
                            "hour": 16,
                            "percentage": 57
                        },
                        {
                            "hour": 17,
                            "percentage": 66
                        },
                        {
                            "hour": 18,
                            "percentage": 76
                        },
                        {
                            "hour": 19,
                            "percentage": 73
                        },
                        {
                            "hour": 20,
                            "percentage": 57
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 13
                        },
                        {
                            "hour": 12,
                            "percentage": 17
                        },
                        {
                            "hour": 13,
                            "percentage": 18
                        },
                        {
                            "hour": 14,
                            "percentage": 17
                        },
                        {
                            "hour": 15,
                            "percentage": 15
                        },
                        {
                            "hour": 16,
                            "percentage": 18
                        },
                        {
                            "hour": 17,
                            "percentage": 30
                        },
                        {
                            "hour": 18,
                            "percentage": 48
                        },
                        {
                            "hour": 19,
                            "percentage": 58
                        },
                        {
                            "hour": 20,
                            "percentage": 52
                        },
                        {
                            "hour": 21,
                            "percentage": 34
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 18
                        },
                        {
                            "hour": 12,
                            "percentage": 26
                        },
                        {
                            "hour": 13,
                            "percentage": 28
                        },
                        {
                            "hour": 14,
                            "percentage": 23
                        },
                        {
                            "hour": 15,
                            "percentage": 19
                        },
                        {
                            "hour": 16,
                            "percentage": 22
                        },
                        {
                            "hour": 17,
                            "percentage": 36
                        },
                        {
                            "hour": 18,
                            "percentage": 54
                        },
                        {
                            "hour": 19,
                            "percentage": 62
                        },
                        {
                            "hour": 20,
                            "percentage": 54
                        },
                        {
                            "hour": 21,
                            "percentage": 36
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 18
                        },
                        {
                            "hour": 12,
                            "percentage": 29
                        },
                        {
                            "hour": 13,
                            "percentage": 34
                        },
                        {
                            "hour": 14,
                            "percentage": 31
                        },
                        {
                            "hour": 15,
                            "percentage": 24
                        },
                        {
                            "hour": 16,
                            "percentage": 24
                        },
                        {
                            "hour": 17,
                            "percentage": 37
                        },
                        {
                            "hour": 18,
                            "percentage": 57
                        },
                        {
                            "hour": 19,
                            "percentage": 70
                        },
                        {
                            "hour": 20,
                            "percentage": 65
                        },
                        {
                            "hour": 21,
                            "percentage": 45
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 29
                        },
                        {
                            "hour": 12,
                            "percentage": 38
                        },
                        {
                            "hour": 13,
                            "percentage": 40
                        },
                        {
                            "hour": 14,
                            "percentage": 36
                        },
                        {
                            "hour": 15,
                            "percentage": 29
                        },
                        {
                            "hour": 16,
                            "percentage": 28
                        },
                        {
                            "hour": 17,
                            "percentage": 41
                        },
                        {
                            "hour": 18,
                            "percentage": 63
                        },
                        {
                            "hour": 19,
                            "percentage": 77
                        },
                        {
                            "hour": 20,
                            "percentage": 71
                        },
                        {
                            "hour": 21,
                            "percentage": 47
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 31
                        },
                        {
                            "hour": 12,
                            "percentage": 47
                        },
                        {
                            "hour": 13,
                            "percentage": 55
                        },
                        {
                            "hour": 14,
                            "percentage": 48
                        },
                        {
                            "hour": 15,
                            "percentage": 33
                        },
                        {
                            "hour": 16,
                            "percentage": 29
                        },
                        {
                            "hour": 17,
                            "percentage": 50
                        },
                        {
                            "hour": 18,
                            "percentage": 81
                        },
                        {
                            "hour": 19,
                            "percentage": 84
                        },
                        {
                            "hour": 20,
                            "percentage": 68
                        },
                        {
                            "hour": 21,
                            "percentage": 62
                        },
                        {
                            "hour": 22,
                            "percentage": 45
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 25
                        },
                        {
                            "hour": 12,
                            "percentage": 45
                        },
                        {
                            "hour": 13,
                            "percentage": 61
                        },
                        {
                            "hour": 14,
                            "percentage": 66
                        },
                        {
                            "hour": 15,
                            "percentage": 61
                        },
                        {
                            "hour": 16,
                            "percentage": 60
                        },
                        {
                            "hour": 17,
                            "percentage": 71
                        },
                        {
                            "hour": 18,
                            "percentage": 89
                        },
                        {
                            "hour": 19,
                            "percentage": 100
                        },
                        {
                            "hour": 20,
                            "percentage": 91
                        },
                        {
                            "hour": 21,
                            "percentage": 66
                        },
                        {
                            "hour": 22,
                            "percentage": 38
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "c916249a7f06dbde0fb9dfbd7b3679d4c722a33f",
            "likes": null,
            "location": {
                "lat": 37.320802,
                "lng": -121.9497097
            },
            "name": "Maggiano's Little Italy",
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104027151676078068627/photos\">George Shih</a>"
                    ],
                    "photo_reference": "CmRaAAAAiZ061_R502chcv3_yt2GMXO4iwYkgHR3cRDGsvax4JZq-D-mj6MmJK19jgs-h32ivPuyGh4030r928esH04nliiNV2Yt-pxL0O9-7Gm8uP5XsK5gkSCeV3nxv4j9TMrzEhBe0f1SUmRMyaZxhPXW2rWdGhTgoxiDFbAxmega3mg5z_4dotcEIg",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116178129405114433899/photos\">Christina T</a>"
                    ],
                    "photo_reference": "CmRaAAAAYee_2F-dewQZ3h9DwK1G2PCZ9OynFoRwC7fprAJSXpQ0QwykHbMzguKAswWVF7Nhi-50Oeusuc3w_be0C6eHyBhmrs3RgRWnQ0OMioP22Q5Yt7dJo8sEynUwvLSnf3WsEhBgDe15pQFCr2dYj8bTU_7YGhRNCOTN-80MV7OQP3oCcixGh82_fg",
                    "width": 4032
                },
                {
                    "height": 4008,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112020374712501867277/photos\">Tim OConnell</a>"
                    ],
                    "photo_reference": "CmRaAAAAJDK1gSibd3pBLpto5iH1DQ88K61bIr1cSvX83NjddqsSgM4sojSVe2mwa6ZFYeA2UDQLJ9JpcyQNc8dK4iPgiBuzrM-TpBNFMG1ylkrt0sRmrapa6QEQwUMWYLLJhRS0EhC16v3yiutwuqtmxrr6BWMYGhSz2fO8_yHml78Vv3PNrEOnLdYDKw",
                    "width": 5344
                },
                {
                    "height": 3088,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117875987563872032638/photos\">Marilyn Ritter</a>"
                    ],
                    "photo_reference": "CmRaAAAAegvO6o9958fQIyGnvZrqfURlyOgHnHrKU94eNGKh_D0FIVPZb2u3wI4DoupmmHoaII8xdmK84jGhVbjQI8AICRkP8dyQRWWv6UKPrDhDJBcQ8Iw9TXD-71swf3aDBJUrEhBHsiVFNhamPsBpljYYxx2sGhSNzP_RLTnVTQnIzuZSgO6SA872WQ",
                    "width": 4160
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110590771746320166813/photos\">Xiaoye Jin</a>"
                    ],
                    "photo_reference": "CmRaAAAAK5Hmt_JjXjLUNYLpM2-VZwa-ThmqrOn1roPCWxV0hfFUS2xgFoKfQbjjPOwq6IpJSjhzz89Thkao_AjDr7e6OtUpHk--cjfEENylSQReDAtygA2nL1jMVwXpsBbJBBAXEhD2PcMJOGDKcIKVsXbpuDk7GhSqccgU4OcxPHZDCxxq264z7ZK20g",
                    "width": 3024
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109580006601861393029/photos\">Nien Nien</a>"
                    ],
                    "photo_reference": "CmRaAAAAiIYCI9TZyHH-gtdTDmEyyg00FfDWdtrTOcypzjgaGybwMlZxLAfcMdqsXWpqvHwLcdcY-lZ1vs4Gg6A47kJgN_3i8GXxPt8MXqIonSNfavtpPOLkgM7UiOqSOY3l6TAjEhAGIJ9g-V5n9CC4F2ddvyGNGhQgsQiOr9lQ9wN2Dk8iLHPCb3s9NQ",
                    "width": 5312
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106611542896568892056/photos\">Nell Pham</a>"
                    ],
                    "photo_reference": "CmRaAAAA4QDYATUAdnhsaFlElVtIeF8KyTaj4hs9nyhjocq5t4onkmbhvbvBWeAW0CqJYwCznq1vle8kWan8YSsdUt46DQgmMc1umD-J06o8fyGReBkJ8H3_RT3YzSGojPARplEvEhBF48HIy8g-gkh_LWibEXHyGhT3Kx7kcgD_Wd5rQ1oniZHdsHoAOA",
                    "width": 4032
                },
                {
                    "height": 1917,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112460321458178803978/photos\">Sary Man</a>"
                    ],
                    "photo_reference": "CmRaAAAAXEoI341nvq26PP9Z8J8A9W2KeEC9FC6xwieTDvdrcOvkhBPOXtZ6HvNNnyvX14-Io75_qBTUKOdyNj0vVROwXOsyFA9k0miRxJDDyNL_VnkMwIV9JgThIywc53a5mmD4EhDqvrAzOoenDkUGyyhFNJhCGhTiIsNgf4pyAhYxiuZ2QpS4frzrlQ",
                    "width": 2555
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115160784626405762549/photos\">Lee Wolfe</a>"
                    ],
                    "photo_reference": "CmRaAAAAG4AX4I1u6ZEYtg6u7voVFUDEZcLsUXaB9mcry_5NIgNo12v32MGXWIS7H2nHz7J2qCl8HoRy_qONOxS-eT6v19efu69MLMX4VhboCEWr7ssdFRKDNddkmwEQF639_JUcEhBSuSwD2E8xegBJVHxsN-RcGhQyY6rWlB4JxzNhcM1qoefbTy6Rmw",
                    "width": 4032
                },
                {
                    "height": 2448,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106650073773903979824/photos\">Hoshimi Ames</a>"
                    ],
                    "photo_reference": "CmRaAAAAVWovL9nBgMclytN_XrLFp3kiC8dEt9jFSHRZCqiAX2H4XNIiU8o0IJm2NrvOm6nfIi9YKA3feS-406tBZLRWktu-3BDxu_9KDcwVHIQWQPKtNyHW_gPL0MwWwxygmpE2EhDUB2AoBnwxzmbinvxAu_J2GhTqTGE_knSI1xqT2t5XL5V0iXicCA",
                    "width": 3264
                }
            ],
            "price": 2,
            "rating": 4.2,
            "types": [
                "restaurant",
                "bar",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "9.2 mi",
                    "value": 14839
                },
                "duration": {
                    "text": "16 mins",
                    "value": 958
                },
                "durationInTraffic": {
                    "text": "16 mins",
                    "value": 934
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c730d2f6ba2e3aecef3c868",
            "place_id": "ChIJd8PfV6vJj4ARKmK6Sw3NWmE",
            "address": "53 Headquarters Drive, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": []
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 2
                        },
                        {
                            "hour": 7,
                            "percentage": 8
                        },
                        {
                            "hour": 8,
                            "percentage": 11
                        },
                        {
                            "hour": 9,
                            "percentage": 12
                        },
                        {
                            "hour": 10,
                            "percentage": 29
                        },
                        {
                            "hour": 11,
                            "percentage": 72
                        },
                        {
                            "hour": 12,
                            "percentage": 98
                        },
                        {
                            "hour": 13,
                            "percentage": 71
                        },
                        {
                            "hour": 14,
                            "percentage": 29
                        },
                        {
                            "hour": 15,
                            "percentage": 14
                        },
                        {
                            "hour": 16,
                            "percentage": 23
                        },
                        {
                            "hour": 17,
                            "percentage": 39
                        },
                        {
                            "hour": 18,
                            "percentage": 50
                        },
                        {
                            "hour": 19,
                            "percentage": 49
                        },
                        {
                            "hour": 20,
                            "percentage": 35
                        },
                        {
                            "hour": 21,
                            "percentage": 19
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 1
                        },
                        {
                            "hour": 7,
                            "percentage": 7
                        },
                        {
                            "hour": 8,
                            "percentage": 9
                        },
                        {
                            "hour": 9,
                            "percentage": 12
                        },
                        {
                            "hour": 10,
                            "percentage": 28
                        },
                        {
                            "hour": 11,
                            "percentage": 59
                        },
                        {
                            "hour": 12,
                            "percentage": 82
                        },
                        {
                            "hour": 13,
                            "percentage": 75
                        },
                        {
                            "hour": 14,
                            "percentage": 47
                        },
                        {
                            "hour": 15,
                            "percentage": 25
                        },
                        {
                            "hour": 16,
                            "percentage": 24
                        },
                        {
                            "hour": 17,
                            "percentage": 39
                        },
                        {
                            "hour": 18,
                            "percentage": 55
                        },
                        {
                            "hour": 19,
                            "percentage": 57
                        },
                        {
                            "hour": 20,
                            "percentage": 44
                        },
                        {
                            "hour": 21,
                            "percentage": 25
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 4
                        },
                        {
                            "hour": 7,
                            "percentage": 12
                        },
                        {
                            "hour": 8,
                            "percentage": 16
                        },
                        {
                            "hour": 9,
                            "percentage": 16
                        },
                        {
                            "hour": 10,
                            "percentage": 26
                        },
                        {
                            "hour": 11,
                            "percentage": 59
                        },
                        {
                            "hour": 12,
                            "percentage": 95
                        },
                        {
                            "hour": 13,
                            "percentage": 88
                        },
                        {
                            "hour": 14,
                            "percentage": 47
                        },
                        {
                            "hour": 15,
                            "percentage": 18
                        },
                        {
                            "hour": 16,
                            "percentage": 17
                        },
                        {
                            "hour": 17,
                            "percentage": 35
                        },
                        {
                            "hour": 18,
                            "percentage": 56
                        },
                        {
                            "hour": 19,
                            "percentage": 62
                        },
                        {
                            "hour": 20,
                            "percentage": 47
                        },
                        {
                            "hour": 21,
                            "percentage": 24
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 1
                        },
                        {
                            "hour": 7,
                            "percentage": 2
                        },
                        {
                            "hour": 8,
                            "percentage": 8
                        },
                        {
                            "hour": 9,
                            "percentage": 21
                        },
                        {
                            "hour": 10,
                            "percentage": 41
                        },
                        {
                            "hour": 11,
                            "percentage": 61
                        },
                        {
                            "hour": 12,
                            "percentage": 71
                        },
                        {
                            "hour": 13,
                            "percentage": 66
                        },
                        {
                            "hour": 14,
                            "percentage": 49
                        },
                        {
                            "hour": 15,
                            "percentage": 32
                        },
                        {
                            "hour": 16,
                            "percentage": 27
                        },
                        {
                            "hour": 17,
                            "percentage": 37
                        },
                        {
                            "hour": 18,
                            "percentage": 53
                        },
                        {
                            "hour": 19,
                            "percentage": 57
                        },
                        {
                            "hour": 20,
                            "percentage": 45
                        },
                        {
                            "hour": 21,
                            "percentage": 25
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 5
                        },
                        {
                            "hour": 7,
                            "percentage": 12
                        },
                        {
                            "hour": 8,
                            "percentage": 16
                        },
                        {
                            "hour": 9,
                            "percentage": 15
                        },
                        {
                            "hour": 10,
                            "percentage": 28
                        },
                        {
                            "hour": 11,
                            "percentage": 65
                        },
                        {
                            "hour": 12,
                            "percentage": 100
                        },
                        {
                            "hour": 13,
                            "percentage": 94
                        },
                        {
                            "hour": 14,
                            "percentage": 56
                        },
                        {
                            "hour": 15,
                            "percentage": 29
                        },
                        {
                            "hour": 16,
                            "percentage": 30
                        },
                        {
                            "hour": 17,
                            "percentage": 49
                        },
                        {
                            "hour": 18,
                            "percentage": 68
                        },
                        {
                            "hour": 19,
                            "percentage": 72
                        },
                        {
                            "hour": 20,
                            "percentage": 57
                        },
                        {
                            "hour": 21,
                            "percentage": 35
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 1
                        },
                        {
                            "hour": 7,
                            "percentage": 6
                        },
                        {
                            "hour": 8,
                            "percentage": 17
                        },
                        {
                            "hour": 9,
                            "percentage": 30
                        },
                        {
                            "hour": 10,
                            "percentage": 45
                        },
                        {
                            "hour": 11,
                            "percentage": 61
                        },
                        {
                            "hour": 12,
                            "percentage": 75
                        },
                        {
                            "hour": 13,
                            "percentage": 80
                        },
                        {
                            "hour": 14,
                            "percentage": 71
                        },
                        {
                            "hour": 15,
                            "percentage": 56
                        },
                        {
                            "hour": 16,
                            "percentage": 49
                        },
                        {
                            "hour": 17,
                            "percentage": 54
                        },
                        {
                            "hour": 18,
                            "percentage": 62
                        },
                        {
                            "hour": 19,
                            "percentage": 60
                        },
                        {
                            "hour": 20,
                            "percentage": 46
                        },
                        {
                            "hour": 21,
                            "percentage": 27
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "009473d2f0b76fda202b130bbabd1e0b14b3697e",
            "likes": null,
            "location": {
                "lat": 37.415774,
                "lng": -121.953534
            },
            "name": "Chick-fil-A",
            "photos": [
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112957776763136920378/photos\">Niroth Keo</a>"
                    ],
                    "photo_reference": "CmRaAAAAIwcAVfPKe140TUhZqnCMDiFjrFshdF4yE7mUI6PqMXQBMIIYDXyHrZ4D4rMwd25dTAEKETLkuUAt3Tj8_DXqo8RQNGUbmLApn7b4ILUqMrFo3g9AEeRyxwlBzZQshwUbEhDCrkmJ9rXkm-cpQHntgrpMGhQ7es5b1DKv6vbkAJ87Hf3eu4S48g",
                    "width": 1920
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115980386408128896922/photos\">Natraj Krishnakumar</a>"
                    ],
                    "photo_reference": "CmRaAAAAV90w-sH6mx3T20dGviO1pdbX74YK25hespzceEjFLzgCBIGI4tujGaH6O_6pXFOfVIv1c9DVukd5P_SNjW3LXbWXHokJj-qE9bK18A9afQu00WnxZLXP5mRzvBWKgZdeEhCENvZ3sULVlOUeygVIE8aBGhQQRuwd963gOT2knIU5uuxM8RaGsg",
                    "width": 4032
                },
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104518075315547332649/photos\">Lisa Kiehl</a>"
                    ],
                    "photo_reference": "CmRaAAAAXGtgjhoLuIxa8D5_wvacXzoOTH69ucRJVqKq954Q5trVS4ZEmkQTOwsOiVUR43_gqP_SgOtYnr4BxOx945c0r-FYDasSbbCBy-aylHJpbAjwLkC-kg6OuOxdMCGUj58_EhD81wJgo3F1GuRo-AvDC5Z4GhRucDTgxjltMSXkkAceEVAcB0Qymg",
                    "width": 1920
                },
                {
                    "height": 288,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107905155361482379135/photos\">Chick-fil-A</a>"
                    ],
                    "photo_reference": "CmRaAAAAgNAyYK3KxtGd_zmqQQOMAlXaPlhl74bZ8HDErnplnaBghkTvY_jsl0iFeDnywu2c1feSCLK1wM6tjDxVJKJl4G4GLGmbYEDU_vq6ct8dRvFYCHNPeLOivvChXnsH7AFQEhCK5Yxa5pJQNo7SBYc-jqrZGhTUyyXccHnxz1TmcltupGHtzz31GA",
                    "width": 512
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101193681085164098642/photos\">Khalil Dabeet</a>"
                    ],
                    "photo_reference": "CmRaAAAAKS0CQbFIcYWkcgVFVZV9fiIhmX1uVr_X5-pN_-wrDHMRejZXxWB3vJkm-gJvnEFhAFqomR-SgPrad2iHekG-vYhtwlbIuzNu-XWaT2tLEd8ERjt6XoCkWiWZhLyC_xpqEhDvxolH98sMegiJsj4djqlgGhT4tUk62Lqt2jjurZT2KOfq3J1zIQ",
                    "width": 3024
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115881380074659444272/photos\">Mike Shearn</a>"
                    ],
                    "photo_reference": "CmRaAAAAVcQIOc5SLmE49cETBb5C0807kQmwCk9K0jJsFP7mm0JkvnNK3-Fy1fwPFiSGLSDbt13vI8sgopybYNcWP7EgaWVzBsdd5LQLEgWofb7KqhQWw-QAbEsFXnM7JogEqCpMEhB_ti5vb1yHK2W3BYr5IERwGhRo1F922kpEpXv4jmXwsRKpd5Oxrw",
                    "width": 3024
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100960252156547567925/photos\">Omar Yacoubi</a>"
                    ],
                    "photo_reference": "CmRaAAAAwleFLW3mGI_i01LmTLGVVT2pv4Ri_sIUyT2ts9PwFWcMKtIdwumo8a7R_z6OVF2jWQ461jEez2VL7T1zo1Kofj9DmK2DlZ3v3XS9k1JR_ktGGpTQGi16y2b_rs8FlXc8EhBcBHE4JgRQZdSeRBslLKUrGhRdB_9oFKXvCwuO1iT-3rFeoGbRFA",
                    "width": 3024
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108719844051000140346/photos\">Fung LAM</a>"
                    ],
                    "photo_reference": "CmRaAAAA4cC3SAug8617L62YWI78wFMar6Pp_69BTEE4bjfeDHhQQFafLbQFKLXzITIx6CCBKYXnal2fBtEfwjXfm4s-bZOhnQFJ8_vg_7p811IPox-CS7A7I_cOP1xErkc4vGSlEhCdD1S-A4DF4lPeh-D7p8AHGhTT58ST6GPzD0L3e2jhF0ajUkOnzg",
                    "width": 4048
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109455996645273866960/photos\">Yuxiang Wang</a>"
                    ],
                    "photo_reference": "CmRaAAAA3FsTNWQeICOfOV_pTIiuEDTTlpByxo_S6_R5yykVaojz2lEj-DXluxTxt7Uk9x80gXeI0qgW_ghug5f_JScFFLUxvy5DMmWeP7c67m6OxkCsIP8pP3OxLTfKeBTr_6flEhB1cClHYgcT8ikbC4e0VQ77GhSNNVPSW2ELdcar7UcCv322QSLxTQ",
                    "width": 4032
                },
                {
                    "height": 2448,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104284805237694691924/photos\">Masahiro Onchi</a>"
                    ],
                    "photo_reference": "CmRaAAAAyPn0Ihyh1ylfuMZDGN1yxOK-c1uGZ6KRuKwh48CtTWQMmM0WH9VJbrpbKCQVSL19Zgmx1AC9c7rguvob0Y1jg-7SxLy3mugoRPNw3UBCCLhLM-1efe9CQgrTdJMhs_XOEhA0VtbQBNA9cs1fbMeC5MS0GhRfkSZxEH4q1vsorGvjX1KQUWw8qQ",
                    "width": 3264
                }
            ],
            "price": 1,
            "rating": 4.4,
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "13.2 mi",
                    "value": 21179
                },
                "duration": {
                    "text": "19 mins",
                    "value": 1166
                },
                "durationInTraffic": {
                    "text": "19 mins",
                    "value": 1158
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c7451376ba2e3aecef8c27f",
            "place_id": "ChIJTZghkezJj4ARYiB5UzJzq7E",
            "address": "3935 Freedom Circle, Santa Clara",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 41
                        },
                        {
                            "hour": 11,
                            "percentage": 71
                        },
                        {
                            "hour": 12,
                            "percentage": 82
                        },
                        {
                            "hour": 13,
                            "percentage": 62
                        },
                        {
                            "hour": 14,
                            "percentage": 34
                        },
                        {
                            "hour": 15,
                            "percentage": 18
                        },
                        {
                            "hour": 16,
                            "percentage": 21
                        },
                        {
                            "hour": 17,
                            "percentage": 33
                        },
                        {
                            "hour": 18,
                            "percentage": 41
                        },
                        {
                            "hour": 19,
                            "percentage": 37
                        },
                        {
                            "hour": 20,
                            "percentage": 24
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 27
                        },
                        {
                            "hour": 12,
                            "percentage": 55
                        },
                        {
                            "hour": 13,
                            "percentage": 39
                        },
                        {
                            "hour": 14,
                            "percentage": 12
                        },
                        {
                            "hour": 15,
                            "percentage": 8
                        },
                        {
                            "hour": 16,
                            "percentage": 15
                        },
                        {
                            "hour": 17,
                            "percentage": 31
                        },
                        {
                            "hour": 18,
                            "percentage": 49
                        },
                        {
                            "hour": 19,
                            "percentage": 53
                        },
                        {
                            "hour": 20,
                            "percentage": 39
                        },
                        {
                            "hour": 21,
                            "percentage": 19
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 45
                        },
                        {
                            "hour": 12,
                            "percentage": 82
                        },
                        {
                            "hour": 13,
                            "percentage": 60
                        },
                        {
                            "hour": 14,
                            "percentage": 18
                        },
                        {
                            "hour": 15,
                            "percentage": 7
                        },
                        {
                            "hour": 16,
                            "percentage": 18
                        },
                        {
                            "hour": 17,
                            "percentage": 45
                        },
                        {
                            "hour": 18,
                            "percentage": 73
                        },
                        {
                            "hour": 19,
                            "percentage": 81
                        },
                        {
                            "hour": 20,
                            "percentage": 61
                        },
                        {
                            "hour": 21,
                            "percentage": 31
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 40
                        },
                        {
                            "hour": 12,
                            "percentage": 77
                        },
                        {
                            "hour": 13,
                            "percentage": 60
                        },
                        {
                            "hour": 14,
                            "percentage": 19
                        },
                        {
                            "hour": 15,
                            "percentage": 6
                        },
                        {
                            "hour": 16,
                            "percentage": 15
                        },
                        {
                            "hour": 17,
                            "percentage": 42
                        },
                        {
                            "hour": 18,
                            "percentage": 79
                        },
                        {
                            "hour": 19,
                            "percentage": 97
                        },
                        {
                            "hour": 20,
                            "percentage": 76
                        },
                        {
                            "hour": 21,
                            "percentage": 38
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 50
                        },
                        {
                            "hour": 12,
                            "percentage": 100
                        },
                        {
                            "hour": 13,
                            "percentage": 77
                        },
                        {
                            "hour": 14,
                            "percentage": 26
                        },
                        {
                            "hour": 15,
                            "percentage": 14
                        },
                        {
                            "hour": 16,
                            "percentage": 31
                        },
                        {
                            "hour": 17,
                            "percentage": 58
                        },
                        {
                            "hour": 18,
                            "percentage": 78
                        },
                        {
                            "hour": 19,
                            "percentage": 77
                        },
                        {
                            "hour": 20,
                            "percentage": 55
                        },
                        {
                            "hour": 21,
                            "percentage": 28
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 53
                        },
                        {
                            "hour": 12,
                            "percentage": 94
                        },
                        {
                            "hour": 13,
                            "percentage": 81
                        },
                        {
                            "hour": 14,
                            "percentage": 37
                        },
                        {
                            "hour": 15,
                            "percentage": 19
                        },
                        {
                            "hour": 16,
                            "percentage": 32
                        },
                        {
                            "hour": 17,
                            "percentage": 59
                        },
                        {
                            "hour": 18,
                            "percentage": 82
                        },
                        {
                            "hour": 19,
                            "percentage": 87
                        },
                        {
                            "hour": 20,
                            "percentage": 69
                        },
                        {
                            "hour": 21,
                            "percentage": 42
                        },
                        {
                            "hour": 22,
                            "percentage": 18
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 0
                        },
                        {
                            "hour": 12,
                            "percentage": 21
                        },
                        {
                            "hour": 13,
                            "percentage": 28
                        },
                        {
                            "hour": 14,
                            "percentage": 27
                        },
                        {
                            "hour": 15,
                            "percentage": 22
                        },
                        {
                            "hour": 16,
                            "percentage": 26
                        },
                        {
                            "hour": 17,
                            "percentage": 43
                        },
                        {
                            "hour": 18,
                            "percentage": 63
                        },
                        {
                            "hour": 19,
                            "percentage": 69
                        },
                        {
                            "hour": 20,
                            "percentage": 54
                        },
                        {
                            "hour": 21,
                            "percentage": 31
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "08370fb9eaff39f4e286e01f8ae607fa71031269",
            "likes": null,
            "location": {
                "lat": 37.3849301,
                "lng": -121.9708607
            },
            "name": "Pedro's",
            "photos": [
                {
                    "height": 2448,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100981623623537270772/photos\">Ilia Stolov</a>"
                    ],
                    "photo_reference": "CmRaAAAATJXRNbGDKA1xOUXMcE7LciSR-PjUKdLxT2WgkTwQSYet4yLwVIuQVpwGVRFo8_mniI0dCd8HNyCKFbZHZRyxvxj6dIPVN1o-JPbZTg0Y563wDoPg1yM4bpZlUJPLcUr7EhDNuWRFwRLmuujm0iE0qPrPGhRzCF_bJyUY3mFlKQsjFh8ffQVPUw",
                    "width": 3264
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109777890666799112655/photos\">Ishan Kaul</a>"
                    ],
                    "photo_reference": "CmRaAAAAfhVZB5-lAvI2recN6XGLgxYvYxRSq_H2ztKeopz_V4ixVy75IkHFvTxqMOAey2oDir6ex1-J4JFEMISKTcD9OmGdqgqtu1HYgEv1wMe3Ydo-8Ehhpy2QCb8ZNTp5nUh5EhDhfbKc8ndashRBARcaCmXBGhQi2bBrnhV8KjipSFqBHrdQwgCoZw",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107721511037729767520/photos\">Thanathip Moolvong</a>"
                    ],
                    "photo_reference": "CmRaAAAAPqCqVukyrz108SnWXtKbQP9daryGjlyOUopuPAtwQ5E5uPDo7d2SDLLq3l1t3jxCE13mzqEqNO-ay8y2RNj26oIZRe3L_pnb64wMmyUTIOnnL3iHTVl-dBVAAlnBXjrWEhBznRjGncPFW8Q8y_JJnoUGGhQAgOb6urYoP8w5rO9_snKzgnFfag",
                    "width": 4032
                },
                {
                    "height": 3480,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108608430682980932212/photos\">Jasmine Schladen</a>"
                    ],
                    "photo_reference": "CmRaAAAATbeR4_fmA1xhTSOGjRYBBYDuzwRYDZ3NqIkW6hAjTVBizqkcaKyAlJAOFrccstDGofE7c2aAZwzlnXS4rNg-GWGCqCVQETog5taYJZl9ZQryR1rB-137PereMhZ0ZomnEhB46X9CBXhhN-2YnMs-Ra4zGhT5x_JhFk9J6oFNyNIqkxM9mJZSiQ",
                    "width": 4640
                },
                {
                    "height": 2654,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102528923927978099938/photos\">Ben Nguyen</a>"
                    ],
                    "photo_reference": "CmRaAAAADNVjBoh5jOZwGT5K34vg2c3jbMrkZMUl-RG6Vh4Rlsr57jXPsmyNdTY7y0f76xaEjy8xjqm2EZj_Fe5mbj6REv8PdITS_TyztyGmrH1j3xuHI3Zsb4t8I11PXqKj4lQbEhBrCGoCO_np_716G5F_eyo6GhRB9-hwvLt4Is4qHFZCIcVcJZEKaQ",
                    "width": 9052
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113028476021582904205/photos\">Brecht François</a>"
                    ],
                    "photo_reference": "CmRaAAAA7aGwexNU6jLqx0ws9REH6kLgRjPve2wSZQZdkfNaEMgcfwo3OLBiJy_aSqF8msxodZhIFg1C7TzYipI5p6t47D95Ba38DEx4UOviZ3nsJcLGo1Wp4jhVSmHVznNUv0VWEhDqGrvtdqxv2cNRkHZM-0IYGhTYpZvIh8qru4ONwiRgwg_ta4IM2g",
                    "width": 4608
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111626903912354082384/photos\">mohan Sheshadri</a>"
                    ],
                    "photo_reference": "CmRaAAAAAxUmSv2K9KiXvYBZsCnL4Z8QnZ4XTchIZ6CBbZSkN4n_tlACy0cr2caFi7hHNry7Jdtr2inCJZddXn911tob97t61OYpssUlQR98vc5eLEg8xQG9zpi6B718B9sLIrJJEhDgH4wOG-k7gUv5EcRAj8aAGhRpKasP62ENksFWdj7Yr4pU7AtH-Q",
                    "width": 3024
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109148580517923316596/photos\">Abhishek M</a>"
                    ],
                    "photo_reference": "CmRaAAAAdgc0ia2BCX_ToGbVD7_-lZUhmgiBZFwYw1iqJUzdguI1-Spg49iYoJU8fhVOKkomDB3O1h7TH-qBLGMiVr2BnjLJwGi22ByDgtzOGNUOb0-56L2goJwqdeACr2XdUKOgEhCw8tFINQe9v6d3RPaiTUTYGhQPQ3J-vY_qaywB2ieMAMadbzSwHA",
                    "width": 3024
                },
                {
                    "height": 5312,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111796107130271147214/photos\">James Alexander Fontanilla</a>"
                    ],
                    "photo_reference": "CmRaAAAAdY5uWSYCqtvtGYJYEXWDMN4xKh2RPnDuUYuA4EdfTCSISRBiJqKoXeG4MwSLDjQW4rsyvuagXzQs6nMkg0IUhJO3RZHA3d4onMBEmmKyzpTHmgyjyQR73tBobaUA1qDzEhABzMSXswORjcSj92DsNaiJGhS4_WgwqvTlMcbzKDRQ5PNTL03AXg",
                    "width": 2988
                },
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104085603801790709162/photos\">Paul Chan</a>"
                    ],
                    "photo_reference": "CmRaAAAAzxwsHV8j3uk4jwRU4QdRLJoi4za7y7WD1DS7_Negrh8ntlUt7H3ZwRKsRiWjpULYF4wBPrCUEVRsuk3I5p_kQ_RBf4wNETbJT2VjigdwV8l1YSjiCz_4bJdSKhkV-x9IEhABZI2IkP2nEfPEQ3pGEeHlGhTMuNIJTnzRfUNshoNPCkpX4Xn9Lg",
                    "width": 4032
                }
            ],
            "price": 2,
            "rating": 4.1,
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "11.3 mi",
                    "value": 18125
                },
                "duration": {
                    "text": "15 mins",
                    "value": 885
                },
                "durationInTraffic": {
                    "text": "15 mins",
                    "value": 884
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c761fc56ba2e3aeceff8d3d",
            "place_id": "ChIJy5ey6wK2j4AR1_k5tlm9mKI",
            "address": "1210 Kifer Road, Sunnyvale",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 12
                        },
                        {
                            "hour": 11,
                            "percentage": 40
                        },
                        {
                            "hour": 12,
                            "percentage": 81
                        },
                        {
                            "hour": 13,
                            "percentage": 100
                        },
                        {
                            "hour": 14,
                            "percentage": 76
                        },
                        {
                            "hour": 15,
                            "percentage": 41
                        },
                        {
                            "hour": 16,
                            "percentage": 37
                        },
                        {
                            "hour": 17,
                            "percentage": 65
                        },
                        {
                            "hour": 18,
                            "percentage": 89
                        },
                        {
                            "hour": 19,
                            "percentage": 75
                        },
                        {
                            "hour": 20,
                            "percentage": 38
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 32
                        },
                        {
                            "hour": 12,
                            "percentage": 57
                        },
                        {
                            "hour": 13,
                            "percentage": 62
                        },
                        {
                            "hour": 14,
                            "percentage": 42
                        },
                        {
                            "hour": 15,
                            "percentage": 20
                        },
                        {
                            "hour": 16,
                            "percentage": 16
                        },
                        {
                            "hour": 17,
                            "percentage": 27
                        },
                        {
                            "hour": 18,
                            "percentage": 37
                        },
                        {
                            "hour": 19,
                            "percentage": 35
                        },
                        {
                            "hour": 20,
                            "percentage": 21
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 26
                        },
                        {
                            "hour": 12,
                            "percentage": 44
                        },
                        {
                            "hour": 13,
                            "percentage": 48
                        },
                        {
                            "hour": 14,
                            "percentage": 34
                        },
                        {
                            "hour": 15,
                            "percentage": 20
                        },
                        {
                            "hour": 16,
                            "percentage": 19
                        },
                        {
                            "hour": 17,
                            "percentage": 30
                        },
                        {
                            "hour": 18,
                            "percentage": 40
                        },
                        {
                            "hour": 19,
                            "percentage": 37
                        },
                        {
                            "hour": 20,
                            "percentage": 24
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 31
                        },
                        {
                            "hour": 12,
                            "percentage": 58
                        },
                        {
                            "hour": 13,
                            "percentage": 56
                        },
                        {
                            "hour": 14,
                            "percentage": 30
                        },
                        {
                            "hour": 15,
                            "percentage": 13
                        },
                        {
                            "hour": 16,
                            "percentage": 15
                        },
                        {
                            "hour": 17,
                            "percentage": 28
                        },
                        {
                            "hour": 18,
                            "percentage": 39
                        },
                        {
                            "hour": 19,
                            "percentage": 38
                        },
                        {
                            "hour": 20,
                            "percentage": 25
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 28
                        },
                        {
                            "hour": 12,
                            "percentage": 49
                        },
                        {
                            "hour": 13,
                            "percentage": 52
                        },
                        {
                            "hour": 14,
                            "percentage": 34
                        },
                        {
                            "hour": 15,
                            "percentage": 17
                        },
                        {
                            "hour": 16,
                            "percentage": 16
                        },
                        {
                            "hour": 17,
                            "percentage": 28
                        },
                        {
                            "hour": 18,
                            "percentage": 40
                        },
                        {
                            "hour": 19,
                            "percentage": 38
                        },
                        {
                            "hour": 20,
                            "percentage": 24
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 38
                        },
                        {
                            "hour": 12,
                            "percentage": 73
                        },
                        {
                            "hour": 13,
                            "percentage": 74
                        },
                        {
                            "hour": 14,
                            "percentage": 41
                        },
                        {
                            "hour": 15,
                            "percentage": 17
                        },
                        {
                            "hour": 16,
                            "percentage": 19
                        },
                        {
                            "hour": 17,
                            "percentage": 39
                        },
                        {
                            "hour": 18,
                            "percentage": 60
                        },
                        {
                            "hour": 19,
                            "percentage": 66
                        },
                        {
                            "hour": 20,
                            "percentage": 51
                        },
                        {
                            "hour": 21,
                            "percentage": 28
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 37
                        },
                        {
                            "hour": 12,
                            "percentage": 71
                        },
                        {
                            "hour": 13,
                            "percentage": 89
                        },
                        {
                            "hour": 14,
                            "percentage": 75
                        },
                        {
                            "hour": 15,
                            "percentage": 46
                        },
                        {
                            "hour": 16,
                            "percentage": 34
                        },
                        {
                            "hour": 17,
                            "percentage": 51
                        },
                        {
                            "hour": 18,
                            "percentage": 78
                        },
                        {
                            "hour": 19,
                            "percentage": 81
                        },
                        {
                            "hour": 20,
                            "percentage": 55
                        },
                        {
                            "hour": 21,
                            "percentage": 23
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "a9476af248fbaeb5aeb093622b29698d46feffb3",
            "likes": null,
            "location": {
                "lat": 37.37357240000001,
                "lng": -121.9944695
            },
            "name": "Sweet Tomatoes",
            "photos": [
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105434240508676484579/photos\">Ali Ayoub</a>"
                    ],
                    "photo_reference": "CmRaAAAA35tQb4oHQXTX6t-KqgK8iS7fWCpDg4H0ubvgLthSMitjhgDGrORi3nY-epzoTWPRxgwZdezQHSh8E3yraFkOQm5pJqqVR8Nl3_2w2F67yEXBPs_teWE0wNeNdF4xFNtmEhBrUw7__3kf5eW99qawwmE2GhTgM6RQipI5RwMgcih-HbrsT1DM4g",
                    "width": 1920
                },
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108629154491609269766/photos\">Tohru Kao</a>"
                    ],
                    "photo_reference": "CmRaAAAAjGKrpsFYFjf37uWRjhyd-KVWLkULhNR4VmWis7IcOY453__C5pkvPr0gfAAB6Sb0k5WFkUYmNEwkg9OqGGfPd0B26OySv4OJj0YXTIW363kjDo62_VpZpOWOvDLY9AwFEhC3G-XAdeReoUoKcOAyI1xaGhQRzNQkSlBUpGdAy8lnXY4Er7TeHg",
                    "width": 1080
                },
                {
                    "height": 3120,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104264461404217860863/photos\">Pranav Peshwe</a>"
                    ],
                    "photo_reference": "CmRaAAAAvUvfyNJqJmZmgyh793ie9c0ct1lo2PKMsG-ehCmpkQwwjgZ5j6Vvjc4OIXPAdsN7vs3CX3-ry4SDzn_Keagda65vabI2KrUiWHN84Ym3ixHxBmrOsofkI0xrBvnddbVBEhCBLlE_NYt6MwfiIerXJNPjGhQUPYHhtFq8mlSZsZhpX4KWgVDXSw",
                    "width": 4160
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117096957669196796245/photos\">Charles Srethabhakti</a>"
                    ],
                    "photo_reference": "CmRaAAAAHQGkIOBaFYdiAIHullj6AKUrekDzYQ3E2e1g7kDxI_Dg0QX2HYmRCGn8Pw8EYwjddxBVNPqUJcYrRUaEgnjqoFpxb0kQQDvSCAaAkZPDqFQT-lXlJWFQmoyEZwO0nOwMEhA_NR8dVTKQTsLnlPKEFSvhGhRsVIX0tw8KQKICeiWzjD2f-9Ufsg",
                    "width": 3024
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105434240508676484579/photos\">Ali Ayoub</a>"
                    ],
                    "photo_reference": "CmRaAAAAD46Ew22MD0ZLwff7aMcxQLFMMhchxZRo6jyHbnqYfy_ZQQwyRQVVgYso28yGvU0vPmwvYtzruRdO-ijdpN11zMQ8sgJL5VMcJpBaZy2e3DWTqmhYY_1Y2es0xQs5wcoOEhCMqRKiDLTJWfnBH7LLC0kwGhTZhC2jdzePMsKmMw7G0apSQy8c2w",
                    "width": 4048
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111874654560851488277/photos\">Nila Jeyapriya</a>"
                    ],
                    "photo_reference": "CmRaAAAAc3y3pbRtk-ejoiAbcfJAb_q5qOa0BTwu5fUGUSbEhedPnKpTCgf2Xtx66sWOcaJyOWJfS0mL1M5DzEGj7wifIyeS91rR2FOvP_HtBqQ93y0Ok8Ao7LLQYXaLmH7LcHS6EhBszISdAN5hk1BgO6FATQ5OGhR6ySaTdeotda-sNy8_SiczLJkHVg",
                    "width": 5312
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101273870739106093306/photos\">Yuchen Jiang</a>"
                    ],
                    "photo_reference": "CmRaAAAAqpMqBhYJkKrr0RTYS9IF59gZ1k9wRtWUH8XDQY6wPmkTWHOW5hcZhCAxEECaZ6Btc7gZ6AxXjwlquan6NxDVkDL4UvOlq-QQxWV3O2C527baXpKZiPIxw9ImzxWBv1k-EhDW8CFBBFsXnDo-NaQ4oaC5GhTahOAyXXX35ZtsbVFNct0PgcPhXg",
                    "width": 4032
                },
                {
                    "height": 1440,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109998851764042552807/photos\">Kartik Parate</a>"
                    ],
                    "photo_reference": "CmRaAAAAvzviBE3TrYXSdvUVKZG73Y9kAXaX-Ijf_x-ioNRUE4EdWaW-4f5e3izg2YCbUAO4J1_quCYF_hAOpKEfsYQNFIYCS338nBVEAMq6zPORibMgFqY971gLVl7G2atqhZbbEhBG1lzqwEK6f3G5sJo5uL4-GhQ0-HOrYLN99hX2_Pw37jVOT9FNSg",
                    "width": 2560
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101441604744494131040/photos\">Prashant Shamarao</a>"
                    ],
                    "photo_reference": "CmRaAAAAVNBFvi2swcIajKHvLgFR_Iv0knr4yELbUdLJU_KjFTykmv77D114W1jJkjmTZO3yAkrQXeVGvKjOFXOO3bPrjSB3ZKmwpk_Df-0lIFIs9fGyxWRkNqC8hdWeuTVXwJjzEhDGw3Pe3YCBfFybpF7XGUR7GhRkAiC07Xom50XMEen99SxSg0QiAA",
                    "width": 4032
                },
                {
                    "height": 3021,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108629154491609269766/photos\">Tohru Kao</a>"
                    ],
                    "photo_reference": "CmRaAAAA5MVtsZlHc9nDDp28ilwifScB7SAg0BbVYxkEpmK_d2Y5T6qrzJMMHYM62MFQ43Mgq-2KSgULgZmLa4ZIVq9xzD3s5Z8iYTQC2NvRMzD0DmjJgujpziPD6WBkCwuzn8osEhBn_wT4coajB248DjJURECnGhS-8Brd1LDIxYBw_5Xjb6TyMrHcUg",
                    "width": 3500
                }
            ],
            "price": 1,
            "rating": 4.1,
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "12.8 mi",
                    "value": 20569
                },
                "duration": {
                    "text": "19 mins",
                    "value": 1129
                },
                "durationInTraffic": {
                    "text": "19 mins",
                    "value": 1118
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c71fcc66ba2e3aeceefeb18",
            "place_id": "ChIJbeGGEqfMj4ARLsEQKwQohWM",
            "address": "91 South Autumn Street, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 5
                        },
                        {
                            "hour": 11,
                            "percentage": 23
                        },
                        {
                            "hour": 12,
                            "percentage": 34
                        },
                        {
                            "hour": 13,
                            "percentage": 23
                        },
                        {
                            "hour": 14,
                            "percentage": 21
                        },
                        {
                            "hour": 15,
                            "percentage": 34
                        },
                        {
                            "hour": 16,
                            "percentage": 48
                        },
                        {
                            "hour": 17,
                            "percentage": 53
                        },
                        {
                            "hour": 18,
                            "percentage": 46
                        },
                        {
                            "hour": 19,
                            "percentage": 31
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 3
                        },
                        {
                            "hour": 12,
                            "percentage": 11
                        },
                        {
                            "hour": 13,
                            "percentage": 11
                        },
                        {
                            "hour": 14,
                            "percentage": 5
                        },
                        {
                            "hour": 15,
                            "percentage": 2
                        },
                        {
                            "hour": 16,
                            "percentage": 10
                        },
                        {
                            "hour": 17,
                            "percentage": 27
                        },
                        {
                            "hour": 18,
                            "percentage": 42
                        },
                        {
                            "hour": 19,
                            "percentage": 39
                        },
                        {
                            "hour": 20,
                            "percentage": 22
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 8
                        },
                        {
                            "hour": 12,
                            "percentage": 10
                        },
                        {
                            "hour": 13,
                            "percentage": 9
                        },
                        {
                            "hour": 14,
                            "percentage": 6
                        },
                        {
                            "hour": 15,
                            "percentage": 4
                        },
                        {
                            "hour": 16,
                            "percentage": 10
                        },
                        {
                            "hour": 17,
                            "percentage": 32
                        },
                        {
                            "hour": 18,
                            "percentage": 56
                        },
                        {
                            "hour": 19,
                            "percentage": 56
                        },
                        {
                            "hour": 20,
                            "percentage": 45
                        },
                        {
                            "hour": 21,
                            "percentage": 32
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 7
                        },
                        {
                            "hour": 12,
                            "percentage": 9
                        },
                        {
                            "hour": 13,
                            "percentage": 9
                        },
                        {
                            "hour": 14,
                            "percentage": 6
                        },
                        {
                            "hour": 15,
                            "percentage": 5
                        },
                        {
                            "hour": 16,
                            "percentage": 10
                        },
                        {
                            "hour": 17,
                            "percentage": 25
                        },
                        {
                            "hour": 18,
                            "percentage": 42
                        },
                        {
                            "hour": 19,
                            "percentage": 47
                        },
                        {
                            "hour": 20,
                            "percentage": 36
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 5
                        },
                        {
                            "hour": 12,
                            "percentage": 9
                        },
                        {
                            "hour": 13,
                            "percentage": 10
                        },
                        {
                            "hour": 14,
                            "percentage": 7
                        },
                        {
                            "hour": 15,
                            "percentage": 6
                        },
                        {
                            "hour": 16,
                            "percentage": 14
                        },
                        {
                            "hour": 17,
                            "percentage": 34
                        },
                        {
                            "hour": 18,
                            "percentage": 55
                        },
                        {
                            "hour": 19,
                            "percentage": 55
                        },
                        {
                            "hour": 20,
                            "percentage": 34
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 12
                        },
                        {
                            "hour": 12,
                            "percentage": 15
                        },
                        {
                            "hour": 13,
                            "percentage": 13
                        },
                        {
                            "hour": 14,
                            "percentage": 9
                        },
                        {
                            "hour": 15,
                            "percentage": 10
                        },
                        {
                            "hour": 16,
                            "percentage": 20
                        },
                        {
                            "hour": 17,
                            "percentage": 40
                        },
                        {
                            "hour": 18,
                            "percentage": 65
                        },
                        {
                            "hour": 19,
                            "percentage": 82
                        },
                        {
                            "hour": 20,
                            "percentage": 79
                        },
                        {
                            "hour": 21,
                            "percentage": 59
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 10
                        },
                        {
                            "hour": 12,
                            "percentage": 16
                        },
                        {
                            "hour": 13,
                            "percentage": 18
                        },
                        {
                            "hour": 14,
                            "percentage": 16
                        },
                        {
                            "hour": 15,
                            "percentage": 17
                        },
                        {
                            "hour": 16,
                            "percentage": 36
                        },
                        {
                            "hour": 17,
                            "percentage": 74
                        },
                        {
                            "hour": 18,
                            "percentage": 100
                        },
                        {
                            "hour": 19,
                            "percentage": 93
                        },
                        {
                            "hour": 20,
                            "percentage": 77
                        },
                        {
                            "hour": 21,
                            "percentage": 62
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "45c845ba0ee0bdff173c58cce8b9d6b09f052e63",
            "likes": null,
            "location": {
                "lat": 37.3295778,
                "lng": -121.9003411
            },
            "name": "Poor House Bistro",
            "photos": [
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114504555266259111715/photos\">Eduardo Becerra</a>"
                    ],
                    "photo_reference": "CmRaAAAAQN-wgB6lNI1Ho4Hd1eji1iX8xhNow-qQHFB3nCac2QcBBCXuk22EOst_GQiWYiqlWVT63H3Ye-xRNG7sU_fPokLPRVWy_oK_53uqRmaF2v10Tzs7se9he-K01198h4IZEhDwCvvJCllcW-Pf2BnAir4HGhSCuEAO8AaydNA6LprYExavNp_egw",
                    "width": 1920
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100239756814902813194/photos\">Sarah C.</a>"
                    ],
                    "photo_reference": "CmRaAAAAuFnylYXwTDnZzougJbZmBu3SaAPIT2Auu8ECkZA_L8yZZUZVrVsL7sy6AhLZ3N8JhS2n7vIw2VSOBZWAWDwikoRHwjKexRBpIjJVhCHuY-K894sDRWTAMU6pLMTo47-SEhBOAnZQKwKT4-Sc-KI8R96IGhTeSAgfCDXZxq0SwO6s1gW5dpcbOw",
                    "width": 3024
                },
                {
                    "height": 3096,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103481808819105854492/photos\">Justin Cole</a>"
                    ],
                    "photo_reference": "CmRaAAAAjaZIkt7rrcK7dG6kMGrmNL6vhCHckFmKsCeSALnpLH7L793BIi9SyvcAfIdwdv48TQk7ILWBGmXMUGkgnNOLxJxBrIv0gdwrt7JWS3I_M7xEA31W0ubfGL1hgTD75CTzEhD1FNGYv8ozY9slZ_R6JJPjGhQQ8O9JX0pKE8gDpo4EIosg0QfhBA",
                    "width": 4128
                },
                {
                    "height": 4024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117720555087641740903/photos\">Dan Pritchett</a>"
                    ],
                    "photo_reference": "CmRaAAAAJAR7O08hm918rnMtoC-EUylWAqs4TpL8g0R4UTks1EyDapgd-H-O64KQHE6qQbcfeFPzTWEWq92ppmtrlQDn-QfYIxCYt2mOqerzc2DIV-dwOyePblGcn6oKfKxd1Yj1EhAv7Xo2lnU1wV_QyZjWUL-bGhRbe8q1a4z7urZH9jY9eerhY6G0AA",
                    "width": 6020
                },
                {
                    "height": 1440,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103960026898958587973/photos\">michael e</a>"
                    ],
                    "photo_reference": "CmRaAAAAgwu2MXgfUY1b1ImxPusrIM5ofM0bCOYHzkYYK3SrxK2yQCx1mMwHl1EvOeVYxJyZh7SlgzJ78arfyejEuXvXlsrfQg6TWTykgxMOQ49salHR8Qf_42aultkHIME-2j3FEhDhuMvJxSicp1R7-I_TdAMnGhQUbUVhCmEUHqTtXwtXRl2E_M1Pbg",
                    "width": 2560
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104042161450024783929/photos\">Michael Heffernan</a>"
                    ],
                    "photo_reference": "CmRaAAAAhiMJG1ZR2bRv9yapZDmLNTSR1YXPF4k_ehcL8myxT0R5Mne2Qq8oQ078WjN13F0VektOPoFmWmaHNfo8cnzGooBGTgeBxE8upy6h6mvTVwoz7QAsviDV-Q_fGUzrJVa0EhCw0WhBonwAFNT92uPSzpfyGhQybJAjSY5eA2pQSvgpjFzlfJg1tg",
                    "width": 3024
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114724554027294361522/photos\">Lisa Incatasciato</a>"
                    ],
                    "photo_reference": "CmRaAAAAdXrD3aKE8vxpFIIm9qaqRW-lglzM6OHO8VlB7puf73id7Ffzg12S_tfrwdOLSlcCcD8l3LPpqXWJxcda_JUgodlGtQSHpMoodQ0HVzb5XuPWN19tG0uuZHLBchfjpKksEhCgC2cWfSK4TeCscboMaRmqGhQNhV5sQOLaGEe08Es3RLE5AxUSeQ",
                    "width": 3024
                },
                {
                    "height": 640,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114788415605636600810/photos\">Pacific Hotels</a>"
                    ],
                    "photo_reference": "CmRaAAAAVYRvMNeKOd4ChGd7jcg3DEQYttAx_3Ml1F0_5jZiP8--xaslV7aQFOqQguJM5-Q-posPXg7f1eyCYwisH20GxeDBchrgfzVfG1JdpyaqYHplas9IhjZP_PidRHrEPEVCEhC8SjNwdqpU9CIzQ7lWJ5LBGhQ0WSE43Tolbm3HRYOkPfCmSiLF9A",
                    "width": 880
                },
                {
                    "height": 2160,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107589363117265981579/photos\">Leo Chen</a>"
                    ],
                    "photo_reference": "CmRaAAAA9M_eMTYBDTc82O_K3jpt0WZNUCGMQ2XzrKmbIQ1fae9yOOTlewvjjkeMj7zYcdLkyW01o3tUVs2wCBA1Tw1iXRlLCtBAkt5YKNS_1z4wNnttWvjXQ9mI2Qai4ZTLlrTiEhDQG0G6hR48UikiLcmlEvKtGhSlkI_8IrxTb2vqddMKh_LnqyoAHw",
                    "width": 3840
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101006656963836949517/photos\">Paul Herrera</a>"
                    ],
                    "photo_reference": "CmRaAAAAp2KdasQ2RD2U_vZI5M4HMwheHFhuz404XTkoqfaP64IfY1PXfMnseK0ngFPMyFPpi0CpU84RRB0dWFn4DUrl_5OkobwpgqwddoasJ36fFr81RnSZhPctKRMinnT1cYi5EhCXz7i-bYMoVdde1ypZtQoTGhQbotybg3Sn5SGWxIXCfT4hKr89sg",
                    "width": 3024
                }
            ],
            "price": 2,
            "rating": 4.4,
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "6.2 mi",
                    "value": 9970
                },
                "duration": {
                    "text": "11 mins",
                    "value": 644
                },
                "durationInTraffic": {
                    "text": "10 mins",
                    "value": 618
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c72faec6ba2e3aecef38584",
            "place_id": "ChIJOwQIQxbLj4AROEenlE5vOso",
            "address": "302 North Bascom Avenue, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 10
                        },
                        {
                            "hour": 7,
                            "percentage": 24
                        },
                        {
                            "hour": 8,
                            "percentage": 46
                        },
                        {
                            "hour": 9,
                            "percentage": 71
                        },
                        {
                            "hour": 10,
                            "percentage": 91
                        },
                        {
                            "hour": 11,
                            "percentage": 100
                        },
                        {
                            "hour": 12,
                            "percentage": 90
                        },
                        {
                            "hour": 13,
                            "percentage": 65
                        },
                        {
                            "hour": 14,
                            "percentage": 35
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 0
                        },
                        {
                            "hour": 18,
                            "percentage": 0
                        },
                        {
                            "hour": 19,
                            "percentage": 0
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 2
                        },
                        {
                            "hour": 7,
                            "percentage": 9
                        },
                        {
                            "hour": 8,
                            "percentage": 20
                        },
                        {
                            "hour": 9,
                            "percentage": 31
                        },
                        {
                            "hour": 10,
                            "percentage": 40
                        },
                        {
                            "hour": 11,
                            "percentage": 47
                        },
                        {
                            "hour": 12,
                            "percentage": 47
                        },
                        {
                            "hour": 13,
                            "percentage": 34
                        },
                        {
                            "hour": 14,
                            "percentage": 16
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 0
                        },
                        {
                            "hour": 18,
                            "percentage": 0
                        },
                        {
                            "hour": 19,
                            "percentage": 0
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 4
                        },
                        {
                            "hour": 7,
                            "percentage": 10
                        },
                        {
                            "hour": 8,
                            "percentage": 18
                        },
                        {
                            "hour": 9,
                            "percentage": 26
                        },
                        {
                            "hour": 10,
                            "percentage": 34
                        },
                        {
                            "hour": 11,
                            "percentage": 41
                        },
                        {
                            "hour": 12,
                            "percentage": 39
                        },
                        {
                            "hour": 13,
                            "percentage": 25
                        },
                        {
                            "hour": 14,
                            "percentage": 10
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 0
                        },
                        {
                            "hour": 18,
                            "percentage": 0
                        },
                        {
                            "hour": 19,
                            "percentage": 0
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 3
                        },
                        {
                            "hour": 7,
                            "percentage": 13
                        },
                        {
                            "hour": 8,
                            "percentage": 28
                        },
                        {
                            "hour": 9,
                            "percentage": 37
                        },
                        {
                            "hour": 10,
                            "percentage": 35
                        },
                        {
                            "hour": 11,
                            "percentage": 35
                        },
                        {
                            "hour": 12,
                            "percentage": 35
                        },
                        {
                            "hour": 13,
                            "percentage": 26
                        },
                        {
                            "hour": 14,
                            "percentage": 11
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 0
                        },
                        {
                            "hour": 18,
                            "percentage": 0
                        },
                        {
                            "hour": 19,
                            "percentage": 0
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 3
                        },
                        {
                            "hour": 7,
                            "percentage": 19
                        },
                        {
                            "hour": 8,
                            "percentage": 31
                        },
                        {
                            "hour": 9,
                            "percentage": 30
                        },
                        {
                            "hour": 10,
                            "percentage": 37
                        },
                        {
                            "hour": 11,
                            "percentage": 39
                        },
                        {
                            "hour": 12,
                            "percentage": 33
                        },
                        {
                            "hour": 13,
                            "percentage": 21
                        },
                        {
                            "hour": 14,
                            "percentage": 10
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 0
                        },
                        {
                            "hour": 18,
                            "percentage": 0
                        },
                        {
                            "hour": 19,
                            "percentage": 0
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 10
                        },
                        {
                            "hour": 7,
                            "percentage": 21
                        },
                        {
                            "hour": 8,
                            "percentage": 34
                        },
                        {
                            "hour": 9,
                            "percentage": 45
                        },
                        {
                            "hour": 10,
                            "percentage": 51
                        },
                        {
                            "hour": 11,
                            "percentage": 52
                        },
                        {
                            "hour": 12,
                            "percentage": 44
                        },
                        {
                            "hour": 13,
                            "percentage": 27
                        },
                        {
                            "hour": 14,
                            "percentage": 11
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 0
                        },
                        {
                            "hour": 18,
                            "percentage": 0
                        },
                        {
                            "hour": 19,
                            "percentage": 0
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 2
                        },
                        {
                            "hour": 7,
                            "percentage": 15
                        },
                        {
                            "hour": 8,
                            "percentage": 42
                        },
                        {
                            "hour": 9,
                            "percentage": 66
                        },
                        {
                            "hour": 10,
                            "percentage": 76
                        },
                        {
                            "hour": 11,
                            "percentage": 83
                        },
                        {
                            "hour": 12,
                            "percentage": 81
                        },
                        {
                            "hour": 13,
                            "percentage": 60
                        },
                        {
                            "hour": 14,
                            "percentage": 31
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 0
                        },
                        {
                            "hour": 18,
                            "percentage": 0
                        },
                        {
                            "hour": 19,
                            "percentage": 0
                        },
                        {
                            "hour": 20,
                            "percentage": 0
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "29bbd5343bb93e5fd03a33655359bbdb93bcc0f5",
            "likes": null,
            "location": {
                "lat": 37.3283632,
                "lng": -121.9318303
            },
            "name": "Bill's Cafe",
            "photos": [
                {
                    "height": 525,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100130401150036449954/photos\">Bill&#39;s Cafe</a>"
                    ],
                    "photo_reference": "CmRaAAAA3qSwOir3KclNLCU0gUF-DqiP9s8BvM9tHOmRX-tDWCPH3AhrDBUJhC-toT9U2XgZvrUBbfhDov1dHksuNAC2DwfOEmiO-05s_Di6UYeEjgCrDK_Gxa4tUqIGL34yf7DREhAbC35Ea5RaXZNMt9ob78D1GhR0tOTxwVhpV2i8h0yEMJtsBG_0GA",
                    "width": 700
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111509740307767367700/photos\">Yen Nguyen - LVC</a>"
                    ],
                    "photo_reference": "CmRaAAAAtBW0QJT4f1ZSXPvlKB-6GuY_Q_I14VNgN51unXoN-aql2bqII1w_bjuQUVGO2KXdon0LxHaCGYRsgKABpr0kd7KsLWTIZJ1WR1hxaDTQ-4_7TZH-De0R12Mk8fp9hE8kEhCQ-jKvPxoPGdbBYAI00QAlGhSxT6cBbVUXwqY6vX02Y9U79wWucA",
                    "width": 3024
                },
                {
                    "height": 2160,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100311098160072280849/photos\">OldMeanRoy</a>"
                    ],
                    "photo_reference": "CmRaAAAAZv7JBLmMbvLgEcqvgKuJ6DzbvixayvmqQ-jyHAiTecVWcu9wfQNdhM-sm-KZJ3xLfNcveMDpNetngIedhKnMHhiHzFlHw1pWEwNiTh4Is9h7fDagJqpZMcdCtM8Pq2J_EhAynjvhY1L_huKyUmwn8Cj3GhSkkKlYrSvaN088KeEWW5v4NyyXkA",
                    "width": 3840
                },
                {
                    "height": 2160,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100311098160072280849/photos\">OldMeanRoy</a>"
                    ],
                    "photo_reference": "CmRaAAAAGLqSxOo5lzza54lapdd4Jsc2KRe3LDFXQbNAt36vqgveys8X_3n0UGqdU2IEKSiSVUSFJy0HHO2z5_SJVzInheFKiRkVBQc3ls5n2aTz2gNjaUtINZU8-vzpZMVlKEgnEhCFERMKsbRBfV1vu_nuugoVGhSyNhAaKZBhYwP3aNG4ndwydsJ4_A",
                    "width": 3840
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111509740307767367700/photos\">Yen Nguyen - LVC</a>"
                    ],
                    "photo_reference": "CmRaAAAAPlIsrE71fUVTGqkz4N2d0StvzpSM7mY0TPCShNBRI0JkPEzqWpo1YadWVyDsNYeG6BgiaH5BhnkKCMAobqD4t14zs3Wuu0QGSSVkKJydFNhcGzWjmShAZ-EuKM9JD2vvEhBlL7y5fULOaxpDv85T4oaoGhSXgCOsBxBa6SAVBxvmy0lsKLiQCg",
                    "width": 3024
                },
                {
                    "height": 920,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100900173016100207992/photos\">Hyunjung Jung</a>"
                    ],
                    "photo_reference": "CmRaAAAAcPU41UhCpABXGxh1zCh-qSNLSeZ58OPlDV5zs5Xf3UHC1mOMHzv2pgH9BrYFLZIhYFQ20d0sv-h92R_pA5Qd24aeNGQTvmHoZWBT5MISLQXZkHe-n4_4SaBGBAz-xqd8EhB-jB3N4N5R9SciQJftNTE4GhSkNZ3gWLZeCu145h6Ek-SLenpsEA",
                    "width": 1242
                },
                {
                    "height": 4048,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105487810163363594161/photos\">Bradley Peterman</a>"
                    ],
                    "photo_reference": "CmRaAAAAwjn6z2cdRJmIoURADP9YymY6n5Ot3mET_ptJ7IW5cRxmankRXDkbLdPvuYU0GvRlYxZyTLuwlrihb17SCT1QJGxmaOiGDbFcSbGf2WZLXspkHlGWq1RXRhAuyzA7YFHxEhCUkH_zdq5i1Gk43oP8X5tdGhQiE3_ppctsw17WsDqPG7kHVgbjrA",
                    "width": 3036
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109341487277293794145/photos\">Clément Julliard</a>"
                    ],
                    "photo_reference": "CmRaAAAA-x_UQRkPRrcGgm4tfu0vu_5pIi4Dl3G4E5kpfkGATSY5Sbf6DPF-Ukme95BHLpBTx8V-5Bk8QZvh4y-aOOe7gdefoj0lI2QITBpA5vopC96T16wVo2rnQ1xeEP_1pVmxEhDcWCS2mbf2OG6y4Mp16ah-GhTqhKRPd89-97yPMQtvMSks_5cdyw",
                    "width": 4032
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111596469345324769909/photos\">Hardik Patel</a>"
                    ],
                    "photo_reference": "CmRaAAAAy9LWzFwX9TO4lK5VIITiBaMGaOP3mmCtcUHI-oQWJq953whbPPDkVrkvA-RLgyr2ZR8KaOdbLr9uEvqyEHm3os4-SgmPLSL8wCn126nUMhp9ioR43Wz1IR8uJp4yZtDXEhD-HXdHxO6zM0Nc4E4_J0a_GhQp8ZqDbPh640eFnJgz-iNFwBqzBA",
                    "width": 5312
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111509740307767367700/photos\">Yen Nguyen - LVC</a>"
                    ],
                    "photo_reference": "CmRaAAAAPJqmGGjxYF8kqCD_nrDdldlc3HbO_Zkj-mrJWiTuoWWmSX7Fbhrs9rZh7iVyv8uuGnOZS3ypqfAOH6kdihTXiNC3ajP1YkLL3vklm5Whti97_0yc2fZJDIghVtNZjXVKEhD2QzbqStw-aj-PGNiU_cyfGhQthAbAW4ZUXp7RoT5P6ef5TmxsYQ",
                    "width": 5312
                }
            ],
            "price": 2,
            "rating": 4.3,
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "9.3 mi",
                    "value": 14898
                },
                "duration": {
                    "text": "14 mins",
                    "value": 863
                },
                "durationInTraffic": {
                    "text": "14 mins",
                    "value": 831
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c6dd8d96ba2e3aecedff43c",
            "place_id": "ChIJR-8-Fva1j4ARNOEp6OoFzKs",
            "address": "3561 El Camino Real #10, Santa Clara",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 20
                        },
                        {
                            "hour": 12,
                            "percentage": 49
                        },
                        {
                            "hour": 13,
                            "percentage": 70
                        },
                        {
                            "hour": 14,
                            "percentage": 56
                        },
                        {
                            "hour": 15,
                            "percentage": 32
                        },
                        {
                            "hour": 16,
                            "percentage": 29
                        },
                        {
                            "hour": 17,
                            "percentage": 47
                        },
                        {
                            "hour": 18,
                            "percentage": 61
                        },
                        {
                            "hour": 19,
                            "percentage": 53
                        },
                        {
                            "hour": 20,
                            "percentage": 31
                        },
                        {
                            "hour": 21,
                            "percentage": 12
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 8
                        },
                        {
                            "hour": 12,
                            "percentage": 26
                        },
                        {
                            "hour": 13,
                            "percentage": 30
                        },
                        {
                            "hour": 14,
                            "percentage": 11
                        },
                        {
                            "hour": 15,
                            "percentage": 4
                        },
                        {
                            "hour": 16,
                            "percentage": 8
                        },
                        {
                            "hour": 17,
                            "percentage": 23
                        },
                        {
                            "hour": 18,
                            "percentage": 38
                        },
                        {
                            "hour": 19,
                            "percentage": 44
                        },
                        {
                            "hour": 20,
                            "percentage": 31
                        },
                        {
                            "hour": 21,
                            "percentage": 14
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 5
                        },
                        {
                            "hour": 12,
                            "percentage": 18
                        },
                        {
                            "hour": 13,
                            "percentage": 22
                        },
                        {
                            "hour": 14,
                            "percentage": 9
                        },
                        {
                            "hour": 15,
                            "percentage": 3
                        },
                        {
                            "hour": 16,
                            "percentage": 8
                        },
                        {
                            "hour": 17,
                            "percentage": 27
                        },
                        {
                            "hour": 18,
                            "percentage": 51
                        },
                        {
                            "hour": 19,
                            "percentage": 54
                        },
                        {
                            "hour": 20,
                            "percentage": 32
                        },
                        {
                            "hour": 21,
                            "percentage": 11
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 8
                        },
                        {
                            "hour": 12,
                            "percentage": 37
                        },
                        {
                            "hour": 13,
                            "percentage": 27
                        },
                        {
                            "hour": 14,
                            "percentage": 3
                        },
                        {
                            "hour": 15,
                            "percentage": 1
                        },
                        {
                            "hour": 16,
                            "percentage": 5
                        },
                        {
                            "hour": 17,
                            "percentage": 22
                        },
                        {
                            "hour": 18,
                            "percentage": 49
                        },
                        {
                            "hour": 19,
                            "percentage": 56
                        },
                        {
                            "hour": 20,
                            "percentage": 34
                        },
                        {
                            "hour": 21,
                            "percentage": 11
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 14
                        },
                        {
                            "hour": 12,
                            "percentage": 32
                        },
                        {
                            "hour": 13,
                            "percentage": 17
                        },
                        {
                            "hour": 14,
                            "percentage": 2
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 3
                        },
                        {
                            "hour": 17,
                            "percentage": 14
                        },
                        {
                            "hour": 18,
                            "percentage": 37
                        },
                        {
                            "hour": 19,
                            "percentage": 51
                        },
                        {
                            "hour": 20,
                            "percentage": 37
                        },
                        {
                            "hour": 21,
                            "percentage": 14
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 14
                        },
                        {
                            "hour": 12,
                            "percentage": 35
                        },
                        {
                            "hour": 13,
                            "percentage": 40
                        },
                        {
                            "hour": 14,
                            "percentage": 18
                        },
                        {
                            "hour": 15,
                            "percentage": 4
                        },
                        {
                            "hour": 16,
                            "percentage": 4
                        },
                        {
                            "hour": 17,
                            "percentage": 21
                        },
                        {
                            "hour": 18,
                            "percentage": 64
                        },
                        {
                            "hour": 19,
                            "percentage": 100
                        },
                        {
                            "hour": 20,
                            "percentage": 78
                        },
                        {
                            "hour": 21,
                            "percentage": 31
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 17
                        },
                        {
                            "hour": 12,
                            "percentage": 42
                        },
                        {
                            "hour": 13,
                            "percentage": 49
                        },
                        {
                            "hour": 14,
                            "percentage": 30
                        },
                        {
                            "hour": 15,
                            "percentage": 15
                        },
                        {
                            "hour": 16,
                            "percentage": 22
                        },
                        {
                            "hour": 17,
                            "percentage": 42
                        },
                        {
                            "hour": 18,
                            "percentage": 61
                        },
                        {
                            "hour": 19,
                            "percentage": 62
                        },
                        {
                            "hour": 20,
                            "percentage": 44
                        },
                        {
                            "hour": 21,
                            "percentage": 22
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "958fa4967b4fe2265d68cab49c43aa49d3519a52",
            "likes": null,
            "location": {
                "lat": 37.3536423,
                "lng": -121.99487
            },
            "name": "Jang Su Jang",
            "photos": [
                {
                    "height": 3096,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112626185513720563404/photos\">Hui Zhen Gao Cai</a>"
                    ],
                    "photo_reference": "CmRaAAAA6hHL8HuvGD_IZfXaI7OGQFrEs8XRl16XiW4gGcy9iabuB9jNaSVosea_L1MeJqKPlbdScOUBy4Jt_Qhm1nbrkzdKr6IfQbkC9IC1IsxQLqEocwj3_PST4kwsal2qa5CJEhCxUv2q5henWJBWwio6woxoGhSZd7buzzXO514jvwBULKdJWB97zg",
                    "width": 4128
                },
                {
                    "height": 1917,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112460321458178803978/photos\">Sary Man</a>"
                    ],
                    "photo_reference": "CmRaAAAAULMSS1BgCbyX_dTgIHHg0setPKZKRLOxoJf_fQXrFgYbZICkExwkHJxHT7gl091KgEdnAjR6nQEu77kDuXVwjHtXVaF1wKOwz-4UC42i8cox8-pfAPwv-ba5Nv1oXdI6EhBDE41cU-CqIjB-o4h1UBEPGhTdzPvJIuDf5qLr18XAgOxH_FKh2g",
                    "width": 2555
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110849545386955165019/photos\">A Kim</a>"
                    ],
                    "photo_reference": "CmRaAAAAZrlrs_D-n4Q1B3NkY5yswpHtxXZbsORh2J337CzvmAZJ-Hauo35qx5WaXBXFdSGIUbSGMKas90zxx0dUPTOS7TNYKOSoNUnifVIt1n13FW3VPVa9wHFNbch5PI2zsCQLEhCixrjEayFsnSQFpPVkCzBaGhSwMKleDd3pfEXnQeoL20iNDH9qvw",
                    "width": 4032
                },
                {
                    "height": 4048,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108119071073734167760/photos\">Daniel Lee</a>"
                    ],
                    "photo_reference": "CmRaAAAAOn7KaDZcOhiZmQxY1q2T-EQtGBJgBZNbFSOG2LjJ4N7xSIY_EFPf6f6TUMd7L_Rq45T_0M-Ag-7chjrjbUBj47jUNGONxmCrndUs_FuIGjW5wWggfIdxTZdJMX4f7VoQEhC17qCnK7H1ilkrlAUbx-KXGhTzluVIcyfN_UM2_4uPOdFSGofhJw",
                    "width": 3036
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114336161841417933120/photos\">Alyssa Welles</a>"
                    ],
                    "photo_reference": "CmRaAAAAby9yXbIT45mFFJodnDRRc_w7IyIdkeaPe5EaZfvsJC_BwOHeNdCoCIz_sYObe7QKtyd6laokibYtRjPD9N_WRd2sZOgo7RlXUGOtKae3hoOEcj0Py5XyZemOumaBVyrTEhAY3wc05M_Q8HUNK1w-zrrGGhSxLMVIGEadzReYwsZ4Bs3ajVVTIA",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106204536044108427557/photos\">Ed Weng</a>"
                    ],
                    "photo_reference": "CmRaAAAAmF1DspzM_vS6W8KRl_JUUIgO-9ljn7V3NAwx1iFVEqHcyjTb9WNxqxtSKqCf3dO8SshAGE-X1uNMjrqY43sT6s-ov9bLnSYH07sn2CVwcxhFGN-PxNqeRpWfpGQxePCXEhDwIw2pwpaL6JDLNmAYla_-GhRLuS6baQ-lqNKdUKKbwKncAGuQSQ",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110361669145290779325/photos\">Anya Cheng</a>"
                    ],
                    "photo_reference": "CmRaAAAApPEOqnL-s5kxZqZyWFX4bjieeS946-iCEBHCFzUmVuDq_Kk7CVK6S_vvhwVEsvp93G7GJRFdT9zAhJqQ0MUeYRVyEHV5wAqf0cdqbqi-UbHxUlsdWAZ_xct_fNaG8ZncEhB_ZKWhzX7Hx-h4iOrdsZUgGhSDFjWRYwBWF5EbYuwCy6G29Fd32g",
                    "width": 4032
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114653855981752716105/photos\">Mike Fourie</a>"
                    ],
                    "photo_reference": "CmRaAAAACba5lDmTbGZwNqozKhT_FH8Cyk9ONj-C7gLUfNzmH-MUyru8JvLtVqq3NLYO0Jfj5dJrjLEz6XRRb8SY88MzoMqtXKEJfJvIIlHuq2V7_idRQC2cSXw7VW6ugsgwigWUEhBeOeep8Nr-k3Lf3OCe3rx1GhQGAp5IbAIPndkea0ch-AYy0LuOQw",
                    "width": 4048
                },
                {
                    "height": 1917,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/112460321458178803978/photos\">Sary Man</a>"
                    ],
                    "photo_reference": "CmRaAAAAUCeNBAFCGw2g-_v3pzJ4wFipm9MwnM8YldbOFkiEyPsPq9Qtic0H0hCnCpwQweCxCcaEPJVfrM_SE26XZm0d8tZF8fPuCIEOrK_owMmo6IEqMiCZ0ZpaTfBQmpxFVfL-EhCCwp50ck5-qM1C7c11V__BGhT_0youTEWsfRUSXHlznryKEvL2Sw",
                    "width": 2555
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110509679079795639336/photos\">eddie williams</a>"
                    ],
                    "photo_reference": "CmRaAAAAYhQKQ8Dqddeeib0YUBsBAYbbQOK8H6vHtza5pVbaqJyIpGP3Xmp5e4vb80s9ndcV3WCeQlO_m0sNqumekLlfzIafPWnBro5t6vOm-BBzSleV7M5jy7NGEB6wdV3iu52dEhBQEW-rP-dsgDrFcLf-mAljGhQilDzVn5zYzSie4S_eZ7RYrobm5g",
                    "width": 4032
                }
            ],
            "price": 2,
            "rating": 4.3,
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "13.7 mi",
                    "value": 22012
                },
                "duration": {
                    "text": "21 mins",
                    "value": 1245
                },
                "durationInTraffic": {
                    "text": "20 mins",
                    "value": 1221
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c71fcc66ba2e3aeceefeb17",
            "place_id": "ChIJa6SeQ7vMj4AR3YpyhmuXvng",
            "address": "50 West San Fernando Street, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": []
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 2
                        },
                        {
                            "hour": 8,
                            "percentage": 7
                        },
                        {
                            "hour": 9,
                            "percentage": 14
                        },
                        {
                            "hour": 10,
                            "percentage": 22
                        },
                        {
                            "hour": 11,
                            "percentage": 29
                        },
                        {
                            "hour": 12,
                            "percentage": 32
                        },
                        {
                            "hour": 13,
                            "percentage": 29
                        },
                        {
                            "hour": 14,
                            "percentage": 23
                        },
                        {
                            "hour": 15,
                            "percentage": 19
                        },
                        {
                            "hour": 16,
                            "percentage": 23
                        },
                        {
                            "hour": 17,
                            "percentage": 32
                        },
                        {
                            "hour": 18,
                            "percentage": 39
                        },
                        {
                            "hour": 19,
                            "percentage": 38
                        },
                        {
                            "hour": 20,
                            "percentage": 28
                        },
                        {
                            "hour": 21,
                            "percentage": 15
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 11
                        },
                        {
                            "hour": 8,
                            "percentage": 26
                        },
                        {
                            "hour": 9,
                            "percentage": 30
                        },
                        {
                            "hour": 10,
                            "percentage": 24
                        },
                        {
                            "hour": 11,
                            "percentage": 29
                        },
                        {
                            "hour": 12,
                            "percentage": 40
                        },
                        {
                            "hour": 13,
                            "percentage": 43
                        },
                        {
                            "hour": 14,
                            "percentage": 36
                        },
                        {
                            "hour": 15,
                            "percentage": 32
                        },
                        {
                            "hour": 16,
                            "percentage": 40
                        },
                        {
                            "hour": 17,
                            "percentage": 56
                        },
                        {
                            "hour": 18,
                            "percentage": 67
                        },
                        {
                            "hour": 19,
                            "percentage": 62
                        },
                        {
                            "hour": 20,
                            "percentage": 44
                        },
                        {
                            "hour": 21,
                            "percentage": 24
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 8
                        },
                        {
                            "hour": 8,
                            "percentage": 18
                        },
                        {
                            "hour": 9,
                            "percentage": 27
                        },
                        {
                            "hour": 10,
                            "percentage": 32
                        },
                        {
                            "hour": 11,
                            "percentage": 34
                        },
                        {
                            "hour": 12,
                            "percentage": 35
                        },
                        {
                            "hour": 13,
                            "percentage": 31
                        },
                        {
                            "hour": 14,
                            "percentage": 28
                        },
                        {
                            "hour": 15,
                            "percentage": 35
                        },
                        {
                            "hour": 16,
                            "percentage": 57
                        },
                        {
                            "hour": 17,
                            "percentage": 85
                        },
                        {
                            "hour": 18,
                            "percentage": 100
                        },
                        {
                            "hour": 19,
                            "percentage": 90
                        },
                        {
                            "hour": 20,
                            "percentage": 63
                        },
                        {
                            "hour": 21,
                            "percentage": 33
                        },
                        {
                            "hour": 22,
                            "percentage": 13
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 7
                        },
                        {
                            "hour": 8,
                            "percentage": 13
                        },
                        {
                            "hour": 9,
                            "percentage": 22
                        },
                        {
                            "hour": 10,
                            "percentage": 30
                        },
                        {
                            "hour": 11,
                            "percentage": 37
                        },
                        {
                            "hour": 12,
                            "percentage": 40
                        },
                        {
                            "hour": 13,
                            "percentage": 39
                        },
                        {
                            "hour": 14,
                            "percentage": 33
                        },
                        {
                            "hour": 15,
                            "percentage": 27
                        },
                        {
                            "hour": 16,
                            "percentage": 30
                        },
                        {
                            "hour": 17,
                            "percentage": 50
                        },
                        {
                            "hour": 18,
                            "percentage": 70
                        },
                        {
                            "hour": 19,
                            "percentage": 70
                        },
                        {
                            "hour": 20,
                            "percentage": 64
                        },
                        {
                            "hour": 21,
                            "percentage": 55
                        },
                        {
                            "hour": 22,
                            "percentage": 32
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 9
                        },
                        {
                            "hour": 8,
                            "percentage": 16
                        },
                        {
                            "hour": 9,
                            "percentage": 25
                        },
                        {
                            "hour": 10,
                            "percentage": 36
                        },
                        {
                            "hour": 11,
                            "percentage": 45
                        },
                        {
                            "hour": 12,
                            "percentage": 50
                        },
                        {
                            "hour": 13,
                            "percentage": 49
                        },
                        {
                            "hour": 14,
                            "percentage": 44
                        },
                        {
                            "hour": 15,
                            "percentage": 36
                        },
                        {
                            "hour": 16,
                            "percentage": 32
                        },
                        {
                            "hour": 17,
                            "percentage": 40
                        },
                        {
                            "hour": 18,
                            "percentage": 56
                        },
                        {
                            "hour": 19,
                            "percentage": 64
                        },
                        {
                            "hour": 20,
                            "percentage": 61
                        },
                        {
                            "hour": 21,
                            "percentage": 63
                        },
                        {
                            "hour": 22,
                            "percentage": 46
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 0
                        },
                        {
                            "hour": 12,
                            "percentage": 0
                        },
                        {
                            "hour": 13,
                            "percentage": 0
                        },
                        {
                            "hour": 14,
                            "percentage": 0
                        },
                        {
                            "hour": 15,
                            "percentage": 0
                        },
                        {
                            "hour": 16,
                            "percentage": 0
                        },
                        {
                            "hour": 17,
                            "percentage": 33
                        },
                        {
                            "hour": 18,
                            "percentage": 57
                        },
                        {
                            "hour": 19,
                            "percentage": 79
                        },
                        {
                            "hour": 20,
                            "percentage": 83
                        },
                        {
                            "hour": 21,
                            "percentage": 63
                        },
                        {
                            "hour": 22,
                            "percentage": 34
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "b8b9cebc81f9f8ba100816bc160f2ca1a817c9fc",
            "likes": null,
            "location": {
                "lat": 37.3339453,
                "lng": -121.8893173
            },
            "name": "Silicon Valley Capital Club",
            "photos": [
                {
                    "height": 410,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111801041467537711803/photos\">Silicon Valley Capital Club</a>"
                    ],
                    "photo_reference": "CmRaAAAAuNlCc34bFeMhxJun7J2wSd8KeMEkWJ1dFy7B_UioTMuTEji27Y9VR7Kic_GzXNVGxnjKQcLhuYBDqWWrCyKrfH2Wuf_l3qAO6mNTrrUk0U2JiZ5Dsc8ZLWisxA8EYwbfEhD-XnwePjyBEdvXwHVMDaxDGhTsLgKl5zn6_0eGD6H92oJf-mjJYA",
                    "width": 728
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100732450358219722496/photos\">mrpablo68</a>"
                    ],
                    "photo_reference": "CmRaAAAAS0jXzpLbRs2_EY4TP-uRGJ3ccjM0W9KM8aZgumBPNu4vzjjK0YxDCskh6PgchqskN7PK_ZeqMTXj1hYFSgLmWB2Decpp_wChAeUf2RMVmd5WUh8K_lLDkC5yUU3zDc4zEhD1GqpWVMPcQTPFu9hpCfUbGhSkXr3gOepbtiEHuhtVLpAVw6xX0Q",
                    "width": 4032
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109655656033108839549/photos\">Jeff DeGroot</a>"
                    ],
                    "photo_reference": "CmRaAAAAQdkvq3hoKDKMykQidGlKMehIi14P40ITvCuYwpu3coGa8KRFGafDaZkRgjirLsAExBjXX1AdxPWwsenVAgBlY19CO_g00rN4pxgXDMWAsmzXubxNZnCtKxaBZ4-ZzFxsEhD6YYryGrI9CXHLZyEXoD9aGhQLayBNObv2-ztA7s6f_2NS6sQNCA",
                    "width": 4048
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100732450358219722496/photos\">mrpablo68</a>"
                    ],
                    "photo_reference": "CmRaAAAA74VHIsVSZOufjF-xZZ-N0SShvsThXPmm0HCqkI7CTvNPo_Q0xLxF8M7fBxzi2F8ZJMyQQNabnS0TV9ZIleRfuKvEblc_r_EI1nrnqSlzGudDBLGiD1-M5ieKSn-XS0zUEhAZNVD1yCZ-IsB6Kj83vPMKGhQp1jUgPfSkt4tVzFTUr0bw2hs5Ag",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102593810562950633101/photos\">Dominic Alvidrez</a>"
                    ],
                    "photo_reference": "CmRaAAAAWNejECC9h-e-DT9u3iRYghZ8CIvFhT2hl2mBcz6iaNanaOLbVtctk2Sik8zcHIbOGKAUr4bCgfrUlgibssGZYG4e43yMDt5HFgQxSwZAqrC0qk4V9dnAc_b7qogDHFsxEhDw6lShzWP0AFx_rYTMWrFOGhQbi-Hqz5ozTDzH0nVMvXJXFY2yPQ",
                    "width": 4032
                },
                {
                    "height": 410,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111801041467537711803/photos\">Silicon Valley Capital Club</a>"
                    ],
                    "photo_reference": "CmRaAAAAZb0WTAmJ0BFhoW4thANZBRLTwSmReMr-HXFxCHgNfoPrLzV82CtBiKp1FRmNxXvSZ82n0rP6qZgg4mr6TKFLTUSoHg0IO299IITdWOk_tBmQP2IE-Y4-uX9S3-imESmdEhDr_dxlsgutS9IfNEFo0J7gGhR7Gw61GUztFzEzk2iQktoGucpQag",
                    "width": 960
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100732450358219722496/photos\">mrpablo68</a>"
                    ],
                    "photo_reference": "CmRaAAAAjSuMSNc1jA-FXZuNlU8P1SCmh5_nAQsuy8obJikcM4YG-dBGO3Hl3Ow3tAlC4g5CU3FXlFAlVcWN3rr6UVn05rmTO02fhO2aXYhOw-0m_A0XIk5SsVxZB8GXPQYgkvtCEhDU4GPNBus2WncFm4eLbCNcGhRBJ-UphsyeRycFqrNFIZSeYHu-1g",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115521896543277067208/photos\">Jonathan Lorber</a>"
                    ],
                    "photo_reference": "CmRaAAAARurHDGaiPhOa525Hxi6j7nv-DrNL4IJnYSAL1gbCF6De1HG67hTvlGFk-qkRC4rfPdXQcTJozf0uVRRJFKnczhumljr-SlWLqGA94phnG890lN1iXooGy1mRUm4EnJL2EhBJlvzt5pZJ05Is3W63U_AYGhQXp45FzUUltohY4z62H-dCKNufrw",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115205880338581257253/photos\">Jeff Gadd</a>"
                    ],
                    "photo_reference": "CmRaAAAAo_ZizhsG3KjTHvaM90PwLT6V5SoaY4QSviU7lvj7MEWy-Sffg5_b8itGMdACmOr2RyrGAVJgKdpVEAEEf8qb8doHHdgPjaN2-8Pg856J39sDeXtZgIpGVXrmJawa_aQKEhA9XYRMJNpf-QiH5YRlFVuJGhRSixqWqHcSWhpAFPCK6H-9DfkIPg",
                    "width": 4032
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108876723966220262626/photos\">Victoria Napolitano</a>"
                    ],
                    "photo_reference": "CmRaAAAAkig4qVB3Hzo2-9mjxKDnVEQS6lzwVBksJz40Igvvl2aUdcC93nkN1CwRoSODjBnxvXCwp_XQK1ykABG1nDjhRVxB1wh2e-tI4l5SjPa0g8yv6jXT-R8sAWVaQ6EFdPspEhC9OeE0eKAfzTuqCmyq-nAaGhQG8IA4M77DQjVjpbngEI6ASmGmaA",
                    "width": 3024
                }
            ],
            "price": 0,
            "rating": 4.4,
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "6.4 mi",
                    "value": 10368
                },
                "duration": {
                    "text": "12 mins",
                    "value": 736
                },
                "durationInTraffic": {
                    "text": "12 mins",
                    "value": 712
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5ca449646ba2e3aeceabbe55",
            "place_id": "ChIJJxVjI7vMj4ARPYYHcC-20vo",
            "address": "170 South Market Street, San Jose",
            "busy_hours": null,
            "dislikes": null,
            "favorited": null,
            "id": "d55d6bc0ccd92ca5e1e25e404e8c15e423736327",
            "likes": null,
            "location": {
                "lat": 37.3329224,
                "lng": -121.8893101
            },
            "name": "Fairmont San Jose",
            "photos": [
                {
                    "height": 1365,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116319303957678878480/photos\">Fairmont San Jose</a>"
                    ],
                    "photo_reference": "CmRaAAAAiqc392wuCMS2ZpNPbdBYm2erbbfCh8g4ezZyWKz8346Oa90xTuhdDMF1UqZgGCSirSamMFLjCvGXpV_NfYeT79lOqm7bSB_IvkRraLPMl91G8CkkyNfburw4BRB7-9gXEhCBoKYlYqUKzcUl5CZ-c4RXGhRyadlAqBueiJS26kC3qnYgJr9cgw",
                    "width": 2048
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111117838905792978188/photos\">Christine Li</a>"
                    ],
                    "photo_reference": "CmRaAAAACYq319XE2wtqcepGwTgAb1DE-F_ygRqAUBVzlgDDWqAto_Rr09RPHwZUO2pEG3e-OLGlIDNz69whz2dgVxvwCbI2EF1JGBpq0ZpH5IYbL8leASAt0K2ZUgRlnucz-qHbEhBVZJuM6M_IeEZiQTCd07ezGhQdn6JBchXM2x13LqXkiwjSx6_hvA",
                    "width": 5312
                },
                {
                    "height": 3838,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116319303957678878480/photos\">Fairmont San Jose</a>"
                    ],
                    "photo_reference": "CmRaAAAAnmy9pIPnTZ3h8nzRhuXV8e5DCXFCj8njyigrQdp2DK6DCkJZL7daGAr_Z6w0XT9Qwm0oWfDHqFJHWavAYtpXAPUY5wd91gbFXAor-RYw339HZLO9fUZEkTu6rYZGDcTkEhAIOTVrqmSnLjF5Njrnq-H_GhRu83CB7z9cFbbUZz6j36zR-xhlWA",
                    "width": 4500
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109889047853497897519/photos\">Orpheo F. Resende</a>"
                    ],
                    "photo_reference": "CmRaAAAAkPM4B7W3I96_h_UoxVdQtOxR3CsfhbDH7CarChcHNjlhN2IVeeRR92FFT-2REwn_4_3EtWid4cL7_bwA_6apqsJ59t-vpjTZU9ffEhsjaB4hdodt906PqK_4BAIxu4I0EhAbc9Fark6FUIo8AIAcQ17kGhSYUELWIiIaBAZuBQ2wWJhiHXRVBA",
                    "width": 1960
                },
                {
                    "height": 3212,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116319303957678878480/photos\">Fairmont San Jose</a>"
                    ],
                    "photo_reference": "CmRaAAAAK9UoNbcYfY1F0H1LW06zT2f3YOjC0yl8AkRhaO4skHgvvIQyqUqTyuy6R3wnGtmNyD-sqTiiWWiSdi3WcufzuzYowbP5BoJJP9vVI776aCG0C2LWBKSH46oGqw-oTvpgEhBNmT33uP-IAbAHioUlNsbfGhQ7Mblw_92cVQHFv-BRUCZGAdF_aA",
                    "width": 6196
                },
                {
                    "height": 3305,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116319303957678878480/photos\">Fairmont San Jose</a>"
                    ],
                    "photo_reference": "CmRaAAAAO5133UCIaMF4RyCfwU9_9vcu3vKTeOYqetAsR4jNeOVGk2uk1i4WAETAGf-XhF6en8pKtSccmR41IU5THM9i_-2tfyeRN_BOLWcwH1Q-xXduvflPTVAperIfp98U26EmEhDdT4wm8Bq2P6-458V27_wsGhRNv2CG7FkveXRvoxt7jJFQmtajLQ",
                    "width": 4806
                },
                {
                    "height": 5760,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116319303957678878480/photos\">Fairmont San Jose</a>"
                    ],
                    "photo_reference": "CmRaAAAAytMzfrIB7h7DMFF_by8m5xMX-T7vO7upKwLo1ExHqnA1dw8OghveUmeQWdeoJ3IGuPKniqlMoy46NwfI9Nx2msAV_c07KoMQiVpNmQ1KKukIpCpZn6vziY0PRyR7BKcEEhC6-81bqSB8iUPR_RdIiy7LGhT9O4NwHoEYRfo-5d9pfN5Nnnhs6Q",
                    "width": 3840
                },
                {
                    "height": 5760,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116319303957678878480/photos\">Fairmont San Jose</a>"
                    ],
                    "photo_reference": "CmRaAAAAiNMECilPjdGK1Mm4FcRFTonWoLdSpflzZg5ER_BvvADssHQEMeHlQAIA5I4ibC_-9kYdVvYo5zJUa9MaqpqqKIKObuw5UpzBziXT0p8-UH0hRXVxd_JQuv6NDtDSPEnOEhDv_xBZZm6jgoxSLPuYnkuqGhQvuo8-6lsHuJOdeIM9fFL0fcR3hA",
                    "width": 4200
                },
                {
                    "height": 2600,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116319303957678878480/photos\">Fairmont San Jose</a>"
                    ],
                    "photo_reference": "CmRaAAAATRYATewXepa_680gGiOYPvqD3lY4OrsHORSPgEcRLXdRNI2D10JMM_ba8DUww8pE3P4oYXj5OvHnK-1sAEmQ6Z_6lwpqxZA6oxWOTb-BDHJ-YKI8EIG9rCimjLDCiKJbEhCmepEuZPyeWoc5RNTfwjwOGhR0POXePqcU4JIA07RQZfeBHOHwRQ",
                    "width": 3900
                },
                {
                    "height": 3012,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116319303957678878480/photos\">Fairmont San Jose</a>"
                    ],
                    "photo_reference": "CmRaAAAAXM73GA6S44TVp_SMTWai4A7nohXc8wmgWc_47QpTAB2HbXycogx6y2hUj21XrMiRFt1fac9UnH10WBJ3PYAVZp8orAHg0HBx_e1wyCkn9kkdHVsregfnKMdawMgFhqJJEhADD2GkMsogCesQ3lgCTE4IGhTpgMrJtvbEB3eP8eNWAZoLxm-NEw",
                    "width": 5616
                }
            ],
            "price": 4,
            "rating": 4.4,
            "types": [
                "night_club",
                "bar",
                "lodging",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "5.4 mi",
                    "value": 8693
                },
                "duration": {
                    "text": "13 mins",
                    "value": 777
                },
                "durationInTraffic": {
                    "text": "12 mins",
                    "value": 733
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c8bf17e6ba2e3aece5005c6",
            "place_id": "ChIJRTpWSzDNj4ARLhlyf19fzGM",
            "address": "1745 Story Road, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 5
                        },
                        {
                            "hour": 7,
                            "percentage": 13
                        },
                        {
                            "hour": 8,
                            "percentage": 26
                        },
                        {
                            "hour": 9,
                            "percentage": 42
                        },
                        {
                            "hour": 10,
                            "percentage": 57
                        },
                        {
                            "hour": 11,
                            "percentage": 70
                        },
                        {
                            "hour": 12,
                            "percentage": 81
                        },
                        {
                            "hour": 13,
                            "percentage": 92
                        },
                        {
                            "hour": 14,
                            "percentage": 100
                        },
                        {
                            "hour": 15,
                            "percentage": 98
                        },
                        {
                            "hour": 16,
                            "percentage": 91
                        },
                        {
                            "hour": 17,
                            "percentage": 81
                        },
                        {
                            "hour": 18,
                            "percentage": 70
                        },
                        {
                            "hour": 19,
                            "percentage": 52
                        },
                        {
                            "hour": 20,
                            "percentage": 32
                        },
                        {
                            "hour": 21,
                            "percentage": 15
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 9
                        },
                        {
                            "hour": 7,
                            "percentage": 14
                        },
                        {
                            "hour": 8,
                            "percentage": 21
                        },
                        {
                            "hour": 9,
                            "percentage": 29
                        },
                        {
                            "hour": 10,
                            "percentage": 40
                        },
                        {
                            "hour": 11,
                            "percentage": 50
                        },
                        {
                            "hour": 12,
                            "percentage": 57
                        },
                        {
                            "hour": 13,
                            "percentage": 59
                        },
                        {
                            "hour": 14,
                            "percentage": 60
                        },
                        {
                            "hour": 15,
                            "percentage": 65
                        },
                        {
                            "hour": 16,
                            "percentage": 71
                        },
                        {
                            "hour": 17,
                            "percentage": 73
                        },
                        {
                            "hour": 18,
                            "percentage": 65
                        },
                        {
                            "hour": 19,
                            "percentage": 50
                        },
                        {
                            "hour": 20,
                            "percentage": 32
                        },
                        {
                            "hour": 21,
                            "percentage": 17
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 10
                        },
                        {
                            "hour": 7,
                            "percentage": 19
                        },
                        {
                            "hour": 8,
                            "percentage": 24
                        },
                        {
                            "hour": 9,
                            "percentage": 27
                        },
                        {
                            "hour": 10,
                            "percentage": 33
                        },
                        {
                            "hour": 11,
                            "percentage": 41
                        },
                        {
                            "hour": 12,
                            "percentage": 46
                        },
                        {
                            "hour": 13,
                            "percentage": 46
                        },
                        {
                            "hour": 14,
                            "percentage": 46
                        },
                        {
                            "hour": 15,
                            "percentage": 50
                        },
                        {
                            "hour": 16,
                            "percentage": 57
                        },
                        {
                            "hour": 17,
                            "percentage": 62
                        },
                        {
                            "hour": 18,
                            "percentage": 58
                        },
                        {
                            "hour": 19,
                            "percentage": 45
                        },
                        {
                            "hour": 20,
                            "percentage": 29
                        },
                        {
                            "hour": 21,
                            "percentage": 15
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 9
                        },
                        {
                            "hour": 7,
                            "percentage": 16
                        },
                        {
                            "hour": 8,
                            "percentage": 23
                        },
                        {
                            "hour": 9,
                            "percentage": 29
                        },
                        {
                            "hour": 10,
                            "percentage": 36
                        },
                        {
                            "hour": 11,
                            "percentage": 44
                        },
                        {
                            "hour": 12,
                            "percentage": 49
                        },
                        {
                            "hour": 13,
                            "percentage": 49
                        },
                        {
                            "hour": 14,
                            "percentage": 49
                        },
                        {
                            "hour": 15,
                            "percentage": 52
                        },
                        {
                            "hour": 16,
                            "percentage": 59
                        },
                        {
                            "hour": 17,
                            "percentage": 63
                        },
                        {
                            "hour": 18,
                            "percentage": 60
                        },
                        {
                            "hour": 19,
                            "percentage": 48
                        },
                        {
                            "hour": 20,
                            "percentage": 32
                        },
                        {
                            "hour": 21,
                            "percentage": 17
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 13
                        },
                        {
                            "hour": 7,
                            "percentage": 23
                        },
                        {
                            "hour": 8,
                            "percentage": 29
                        },
                        {
                            "hour": 9,
                            "percentage": 32
                        },
                        {
                            "hour": 10,
                            "percentage": 37
                        },
                        {
                            "hour": 11,
                            "percentage": 47
                        },
                        {
                            "hour": 12,
                            "percentage": 55
                        },
                        {
                            "hour": 13,
                            "percentage": 55
                        },
                        {
                            "hour": 14,
                            "percentage": 52
                        },
                        {
                            "hour": 15,
                            "percentage": 51
                        },
                        {
                            "hour": 16,
                            "percentage": 53
                        },
                        {
                            "hour": 17,
                            "percentage": 53
                        },
                        {
                            "hour": 18,
                            "percentage": 48
                        },
                        {
                            "hour": 19,
                            "percentage": 38
                        },
                        {
                            "hour": 20,
                            "percentage": 26
                        },
                        {
                            "hour": 21,
                            "percentage": 15
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 15
                        },
                        {
                            "hour": 7,
                            "percentage": 21
                        },
                        {
                            "hour": 8,
                            "percentage": 24
                        },
                        {
                            "hour": 9,
                            "percentage": 28
                        },
                        {
                            "hour": 10,
                            "percentage": 36
                        },
                        {
                            "hour": 11,
                            "percentage": 45
                        },
                        {
                            "hour": 12,
                            "percentage": 50
                        },
                        {
                            "hour": 13,
                            "percentage": 50
                        },
                        {
                            "hour": 14,
                            "percentage": 49
                        },
                        {
                            "hour": 15,
                            "percentage": 53
                        },
                        {
                            "hour": 16,
                            "percentage": 58
                        },
                        {
                            "hour": 17,
                            "percentage": 60
                        },
                        {
                            "hour": 18,
                            "percentage": 55
                        },
                        {
                            "hour": 19,
                            "percentage": 44
                        },
                        {
                            "hour": 20,
                            "percentage": 30
                        },
                        {
                            "hour": 21,
                            "percentage": 18
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 5,
                            "percentage": 0
                        },
                        {
                            "hour": 6,
                            "percentage": 7
                        },
                        {
                            "hour": 7,
                            "percentage": 16
                        },
                        {
                            "hour": 8,
                            "percentage": 28
                        },
                        {
                            "hour": 9,
                            "percentage": 40
                        },
                        {
                            "hour": 10,
                            "percentage": 53
                        },
                        {
                            "hour": 11,
                            "percentage": 66
                        },
                        {
                            "hour": 12,
                            "percentage": 76
                        },
                        {
                            "hour": 13,
                            "percentage": 80
                        },
                        {
                            "hour": 14,
                            "percentage": 80
                        },
                        {
                            "hour": 15,
                            "percentage": 80
                        },
                        {
                            "hour": 16,
                            "percentage": 79
                        },
                        {
                            "hour": 17,
                            "percentage": 72
                        },
                        {
                            "hour": 18,
                            "percentage": 59
                        },
                        {
                            "hour": 19,
                            "percentage": 43
                        },
                        {
                            "hour": 20,
                            "percentage": 27
                        },
                        {
                            "hour": 21,
                            "percentage": 15
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "c153c596ec4eea8b582adb8959867616cd6763c7",
            "likes": null,
            "location": {
                "lat": 37.341155,
                "lng": -121.843096
            },
            "name": "Cardenas Markets",
            "photos": [
                {
                    "height": 608,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110025994736307329320/photos\">Cardenas Market</a>"
                    ],
                    "photo_reference": "CmRaAAAAk_-gnO7YanuS8tEKxCe-vcHrdJelWVoPKB8FEcP1Z_-jk0jOYVCQC8M6DaWflBVTNMwb37cllZaJrJuU61rW0K1g83Xhj3VctJw4xhxDCiHtxwfV02FKDrLcWW7bq7uaEhBStDqzdoBwhZndZ3Q_BXA1GhTTG5eDDFYLqbXSSNAhJR7xRVHFag",
                    "width": 1080
                },
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104793657165671025468/photos\">Oscar Rodriguez</a>"
                    ],
                    "photo_reference": "CmRaAAAAiZ72R0M1yIkyKvcmtp0tht5-QXqaKAOZv_bkxjCg4KfZVIETHgGeOBhjF4saYjG5jJvoaArM9wsvdL10ShsgMyam_ScMp2me54eHW5nqLvAkFWDhXayM9D96PlORIFELEhCyFUXipX70hfI1mQdy2sdEGhSmPPclROhd0FxM2NauXdYHzn6nUQ",
                    "width": 4032
                },
                {
                    "height": 300,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108170633324350329796/photos\">Jennifer Davis</a>"
                    ],
                    "photo_reference": "CmRaAAAA1PiXGQDQ6wtXz0nz1-94z9hzcQeWJvHA4t24s-uEbgzpeS5pri31eYQW0SR24t17dGgNQWmlIDOffC0wwQ5v8-PInJQnZB53E9UHOYmuKmIGaqNgXF0Ee2aIozhUJBuaEhDMLJPtgUmVlLi8NOTAz5emGhTtEBHM2k1OAHAdE0zd6Y6IPs1VVQ",
                    "width": 300
                },
                {
                    "height": 1201,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110025994736307329320/photos\">Cardenas Market</a>"
                    ],
                    "photo_reference": "CmRaAAAA9cvaRNGZiJTicL5C5t9WHCPXQRByQd1DzPp_Hl6bTdOtT4hEtnPZ4OPXm_-XQZn9mYjsjJLJuLW9GGeCdEfE7A5xY9in-XqhCu-NTzAkwY9cMOQnDcIpgzRuJXb_rDiWEhBdI7H506TsJ3L0c5bcp2yDGhT0N_R0aejDo4n-qAAGdbFtiZEeMg",
                    "width": 1201
                },
                {
                    "height": 5312,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109527147977436091057/photos\">BEATRIZ MONTIEL</a>"
                    ],
                    "photo_reference": "CmRaAAAAi5kXWdisslUEyNNXvojED8xZIYkZIu4qlyWzdMUSp70rw_GnBWKpOgHAmNXimj6QkLsk4SGtl-6aZIz-Ob5NfNWlYm10HkmNpPkJqEPhJZingVzP9Bj8mK0uXpquB9xREhCZ9E4EjWWSqQZcK3DM5w4VGhSH9slAbfIOPzPuME21SktNnxq6RQ",
                    "width": 2988
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107636158073682719610/photos\">Victor Fabian Flores Campos</a>"
                    ],
                    "photo_reference": "CmRaAAAADE1RE78LzguVmzlkRqg-1Oea_lw-0ImumQtwKBehRarkZwKLncxQMx8nuSpviT-FX8FU6xd9cXOzLlVNZ7aYARAwQSjllw3j0bCsDd_DRMkJzWkxNzmgM-NA2d7fxqEKEhBUnJ6p_wnnwxj4oOry-eVDGhRSoA-GyP4rKaxxM7UGq1JAzc1rCw",
                    "width": 4032
                },
                {
                    "height": 300,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108170633324350329796/photos\">Jennifer Davis</a>"
                    ],
                    "photo_reference": "CmRaAAAA6oYZCMctc_4JVTqqqRVszM1aFD6VAjwtQWNb2I03Km_qHR-xR--_xEYh7No0b0NqAyEWRkZe9DKcsU2hjqvHAMmcP0rkCFkdvZJjjOt36EQKQG6-6aMVCcAwwV9_4oo9EhCQwXkWjfV8PC6bAN9yEL3xGhSd31Bskereuj6CCRuiNI3HeC5dOw",
                    "width": 300
                },
                {
                    "height": 2358,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102235039151715809410/photos\">Diana Olivares</a>"
                    ],
                    "photo_reference": "CmRaAAAA9eoyg6N0JUYvZ0mUfLVuWhUgvA5BuUrcDJvRFjc6ASWDbuo60pBgbnyaQRTsuCqamROhOqx4QSDBrED_u2IBKXvA0odM7Q1BD5-q6gsy2NnV21OKnqesEN1d8dsN2Y1cEhCoMjdWW6y-MSfy2ZNR0XsLGhS3i7O3e8jCCw5XlSSk0fiJrq63TA",
                    "width": 4191
                },
                {
                    "height": 688,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110025994736307329320/photos\">Cardenas Market</a>"
                    ],
                    "photo_reference": "CmRaAAAAkOH7GYqrO38MqieDc4e-xjD6Wg4eIEqst8G76r6pIbcSoHTBhb5kl0ojcAjuWDdGqGSOujDlGAlnXQUVwtkzYQfUe-SaqnyL3_GE6eyraViamq-ZgcSeRRzG77cpZGwxEhCAtn1DkG5kZcQo0NRqV-PgGhSaQ1vCd42VP6UAC2ZJKl6WFNJ64A",
                    "width": 640
                },
                {
                    "height": 1960,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102408933881120020986/photos\">Sandra Rosas Olden</a>"
                    ],
                    "photo_reference": "CmRaAAAA0C-r8WY1kXyneswLUoN5ozXNnuRVgfvdX71_5grZL35LqAq_mKAiRlZSdYrYdvUVoxrLyMyAw6rsfc1txjqrsMpqvi62YXTGFeXYAsGHJK0eK0rCKCk1AqgTLBqacSYgEhDoOFQuezZIH7C9zeVi0zf2GhR0EJ6CIAiSN46ejt5wdeuk_BIkjw",
                    "width": 4032
                }
            ],
            "price": 0,
            "rating": 3.7,
            "types": [
                "bakery",
                "supermarket",
                "grocery_or_supermarket",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "2.9 mi",
                    "value": 4684
                },
                "duration": {
                    "text": "8 mins",
                    "value": 495
                },
                "durationInTraffic": {
                    "text": "8 mins",
                    "value": 471
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c78c0776ba2e3aece09f1ba",
            "place_id": "ChIJeQ-ozuLKj4ARMQNfslZXl1c",
            "address": "1144 North 4th Street, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 34
                        },
                        {
                            "hour": 12,
                            "percentage": 65
                        },
                        {
                            "hour": 13,
                            "percentage": 85
                        },
                        {
                            "hour": 14,
                            "percentage": 81
                        },
                        {
                            "hour": 15,
                            "percentage": 68
                        },
                        {
                            "hour": 16,
                            "percentage": 66
                        },
                        {
                            "hour": 17,
                            "percentage": 77
                        },
                        {
                            "hour": 18,
                            "percentage": 81
                        },
                        {
                            "hour": 19,
                            "percentage": 69
                        },
                        {
                            "hour": 20,
                            "percentage": 45
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 44
                        },
                        {
                            "hour": 12,
                            "percentage": 72
                        },
                        {
                            "hour": 13,
                            "percentage": 81
                        },
                        {
                            "hour": 14,
                            "percentage": 64
                        },
                        {
                            "hour": 15,
                            "percentage": 38
                        },
                        {
                            "hour": 16,
                            "percentage": 29
                        },
                        {
                            "hour": 17,
                            "percentage": 54
                        },
                        {
                            "hour": 18,
                            "percentage": 88
                        },
                        {
                            "hour": 19,
                            "percentage": 87
                        },
                        {
                            "hour": 20,
                            "percentage": 49
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 51
                        },
                        {
                            "hour": 12,
                            "percentage": 97
                        },
                        {
                            "hour": 13,
                            "percentage": 84
                        },
                        {
                            "hour": 14,
                            "percentage": 36
                        },
                        {
                            "hour": 15,
                            "percentage": 17
                        },
                        {
                            "hour": 16,
                            "percentage": 27
                        },
                        {
                            "hour": 17,
                            "percentage": 49
                        },
                        {
                            "hour": 18,
                            "percentage": 68
                        },
                        {
                            "hour": 19,
                            "percentage": 72
                        },
                        {
                            "hour": 20,
                            "percentage": 56
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 61
                        },
                        {
                            "hour": 12,
                            "percentage": 93
                        },
                        {
                            "hour": 13,
                            "percentage": 81
                        },
                        {
                            "hour": 14,
                            "percentage": 40
                        },
                        {
                            "hour": 15,
                            "percentage": 16
                        },
                        {
                            "hour": 16,
                            "percentage": 21
                        },
                        {
                            "hour": 17,
                            "percentage": 45
                        },
                        {
                            "hour": 18,
                            "percentage": 64
                        },
                        {
                            "hour": 19,
                            "percentage": 56
                        },
                        {
                            "hour": 20,
                            "percentage": 30
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 36
                        },
                        {
                            "hour": 12,
                            "percentage": 84
                        },
                        {
                            "hour": 13,
                            "percentage": 78
                        },
                        {
                            "hour": 14,
                            "percentage": 40
                        },
                        {
                            "hour": 15,
                            "percentage": 30
                        },
                        {
                            "hour": 16,
                            "percentage": 29
                        },
                        {
                            "hour": 17,
                            "percentage": 35
                        },
                        {
                            "hour": 18,
                            "percentage": 52
                        },
                        {
                            "hour": 19,
                            "percentage": 64
                        },
                        {
                            "hour": 20,
                            "percentage": 51
                        },
                        {
                            "hour": 21,
                            "percentage": 0
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 65
                        },
                        {
                            "hour": 12,
                            "percentage": 100
                        },
                        {
                            "hour": 13,
                            "percentage": 86
                        },
                        {
                            "hour": 14,
                            "percentage": 45
                        },
                        {
                            "hour": 15,
                            "percentage": 23
                        },
                        {
                            "hour": 16,
                            "percentage": 30
                        },
                        {
                            "hour": 17,
                            "percentage": 53
                        },
                        {
                            "hour": 18,
                            "percentage": 76
                        },
                        {
                            "hour": 19,
                            "percentage": 81
                        },
                        {
                            "hour": 20,
                            "percentage": 63
                        },
                        {
                            "hour": 21,
                            "percentage": 35
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 47
                        },
                        {
                            "hour": 12,
                            "percentage": 70
                        },
                        {
                            "hour": 13,
                            "percentage": 86
                        },
                        {
                            "hour": 14,
                            "percentage": 88
                        },
                        {
                            "hour": 15,
                            "percentage": 80
                        },
                        {
                            "hour": 16,
                            "percentage": 74
                        },
                        {
                            "hour": 17,
                            "percentage": 81
                        },
                        {
                            "hour": 18,
                            "percentage": 96
                        },
                        {
                            "hour": 19,
                            "percentage": 95
                        },
                        {
                            "hour": 20,
                            "percentage": 71
                        },
                        {
                            "hour": 21,
                            "percentage": 37
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "50dbd03e56dafe051363f133f96e35a17a9fe1bd",
            "likes": null,
            "location": {
                "lat": 37.3588488,
                "lng": -121.9028176
            },
            "name": "Smoking Pig BBQ Company",
            "photos": [
                {
                    "height": 1374,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108403243974651022610/photos\">Jonathan Collins</a>"
                    ],
                    "photo_reference": "CmRaAAAAdpjbGO6hIImd9sZj0oO_MVv8bSmLPUte5np9nXYEpCeG0oG2tBShPI-JIFb4xp72lsr5XtsgrUhBn5wZv8g4rEXzN9gc0cevDbL8O5Nm0Yutmzpv5R-2qhaAGQW-aLo7EhD09bBPTMylh6GZb1JJUHOsGhS8e-d_HDawnfeLyOaf3Ha4zgAoNA",
                    "width": 1832
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109468033213974870509/photos\">Ken Hartley</a>"
                    ],
                    "photo_reference": "CmRaAAAAB46K_7MwRQBiZgCMQ4JXRDdAADI3LEWTHrWJHTApSpLbJsXBr4lSFlla5KeRutb2VtuXS0v6TL1qrtIZ_sxai7txaT0R59ZfODanMcHEVT_GYUVZSA-O6kWuA8Zj7WzZEhAg8WsAZeaSV832VUP7y6kKGhQoOyZHhqCzC4-LYjVYKiEYRTYYuw",
                    "width": 5312
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106385522070678576392/photos\">Andrei Calinescu</a>"
                    ],
                    "photo_reference": "CmRaAAAAR-j8HgGZw9_SCD6ZbYspbtes-DgvVXbNYlIRRgJ2bS000Wlwuz_3DW5Y0-umiT8LWD-7cJgiYIF5lNjS3kUOkFGpFCrEmx2z9NFz-PqNJ45ikpUD2bskFmtOFKVbzLe_EhAWv-nr1vbC_ELGvPDKBudPGhTtfubhPdGo2U5qmViv9pY8TjJz4g",
                    "width": 4608
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113284780032254874702/photos\">Kent Buckingham</a>"
                    ],
                    "photo_reference": "CmRaAAAAGvudCqTiM-xNxGZGXLjYfxITSu91jDHB1YedD8AFHtXvlilhLuoH8Ie9ALjqSUziUXDaVOwSsPtLZUX9J9oDq5b9s4g3MckbLlZ4jNzr6-O9O_eCA19FGconD1TFhURYEhCXXpe7VUTKUNurjGOwRUXvGhQo8DBcaDZHg1c9D5JCdcKNXEr8ZQ",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110678056510358866740/photos\">Kevan Howard</a>"
                    ],
                    "photo_reference": "CmRaAAAAHn7gOIc1Y5bo3jKh2EpGGz5-Iba4j6BG1Awk88VR0BOWbnpPK0V1YTO4Oiwrs7iETuQKpFWl4Pm8mI3oIRLF1pN4NL988VXu02i7ZCDMh8mfomuWCkhxBR4TT0y51TdqEhA4AWCa-NjP9yNw1dNl_xYsGhRWBQ1Ptec7cl_zO4lSqtJnpq3g2g",
                    "width": 4032
                },
                {
                    "height": 4000,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114199186707525528386/photos\">Garo Bakirci</a>"
                    ],
                    "photo_reference": "CmRaAAAAuEjEo5yAsYFi_vlfXAxrZMedDVNgKHoiJgqycOJx8uBXfeQ3ZrjbAJXmDJUcOciykfgQZaamA-NkkAk6MdCCje3sjxgNvLepMK3SdmfzIvv1DUzDZzftE52_88SqZAItEhDQUMCXHCaO1KEdcEvB3UVZGhSkF01vMK92J3vbK_E73DjvE9powA",
                    "width": 6000
                },
                {
                    "height": 3036,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114867906163005033963/photos\">Ian Chang</a>"
                    ],
                    "photo_reference": "CmRaAAAABqes0aivFdLOV0X5SuX6L8dHXG2BWpQl4FELGfJNsh_-DhX1iwKwwJPsMpHlB8t2wp4M7GlV982aeS3y6Iw559wja9PsNv_6taJA1h5KAgsmWMG_beCOI9cbNCzQSRtKEhCvqPSYi0OFF1QdjqSE7fNWGhTP75uIXbRjU8UE6Ywr7_80Bb-I2w",
                    "width": 4048
                },
                {
                    "height": 3120,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111946195006849532962/photos\">Daniel Luong</a>"
                    ],
                    "photo_reference": "CmRaAAAAaETmlJFsRHg36PcLk4KoDhmj75tRE2ksNvpUt9eDoFqbr3tjbgpg2upc615SFga85TaJYoZOPJyFdsiV6y_BWdqKQZwtgBk69mNig7My8MVYRDSKbdzEmmGPByT7LVtoEhCuvb4SIM6FCgBRAY0b2iayGhREmcD1fVcvsISzQlA64A655QjUFw",
                    "width": 4160
                },
                {
                    "height": 2645,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102014199047243933283/photos\">Max Mabe</a>"
                    ],
                    "photo_reference": "CmRaAAAAwaSf3EbKCroSCWAhJDaiYqtuLZTVeVUCFiAKgrKs3UTqtSHBoIfB-tQ389y8mJL9quVE3HkPZocxzDdBthU1-P-oxHfyRnuanGmw2Im_JTci4WxsEM1xP9enrRVBkXHxEhCrApOixWD2s_iURHAq0vM8GhRF-JJOSOum0f8sqE-Sbi45ol_zfQ",
                    "width": 3670
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105671425403342133576/photos\">Rudolf Pham</a>"
                    ],
                    "photo_reference": "CmRaAAAAZwhuTvahaWj5E2708xixW3l0VLa34oL9MzLw-zCDbZDwDY14vfW2dFjiiV3O5PxCXophPyfVbaIgF1p9cXwQffzuPbhWK1804zljwB9FhITNkrHct4SsKMUSiSZ2waE-EhAem0jZited6abA2dgZ8rQ6GhRrRnR5DTgqJvVOd-CHKjY2QMsOzA",
                    "width": 4032
                }
            ],
            "price": 2,
            "rating": 4.4,
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "7.4 mi",
                    "value": 11901
                },
                "duration": {
                    "text": "12 mins",
                    "value": 692
                },
                "durationInTraffic": {
                    "text": "11 mins",
                    "value": 685
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c72faec6ba2e3aecef38560",
            "place_id": "ChIJX76EBeDKj4ARDMTabmSeUR8",
            "address": "333 Santana Row #1100, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 16
                        },
                        {
                            "hour": 12,
                            "percentage": 29
                        },
                        {
                            "hour": 13,
                            "percentage": 37
                        },
                        {
                            "hour": 14,
                            "percentage": 34
                        },
                        {
                            "hour": 15,
                            "percentage": 26
                        },
                        {
                            "hour": 16,
                            "percentage": 23
                        },
                        {
                            "hour": 17,
                            "percentage": 29
                        },
                        {
                            "hour": 18,
                            "percentage": 35
                        },
                        {
                            "hour": 19,
                            "percentage": 34
                        },
                        {
                            "hour": 20,
                            "percentage": 27
                        },
                        {
                            "hour": 21,
                            "percentage": 16
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 5
                        },
                        {
                            "hour": 12,
                            "percentage": 8
                        },
                        {
                            "hour": 13,
                            "percentage": 10
                        },
                        {
                            "hour": 14,
                            "percentage": 10
                        },
                        {
                            "hour": 15,
                            "percentage": 9
                        },
                        {
                            "hour": 16,
                            "percentage": 8
                        },
                        {
                            "hour": 17,
                            "percentage": 13
                        },
                        {
                            "hour": 18,
                            "percentage": 23
                        },
                        {
                            "hour": 19,
                            "percentage": 33
                        },
                        {
                            "hour": 20,
                            "percentage": 32
                        },
                        {
                            "hour": 21,
                            "percentage": 22
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 5
                        },
                        {
                            "hour": 12,
                            "percentage": 10
                        },
                        {
                            "hour": 13,
                            "percentage": 11
                        },
                        {
                            "hour": 14,
                            "percentage": 9
                        },
                        {
                            "hour": 15,
                            "percentage": 6
                        },
                        {
                            "hour": 16,
                            "percentage": 9
                        },
                        {
                            "hour": 17,
                            "percentage": 22
                        },
                        {
                            "hour": 18,
                            "percentage": 42
                        },
                        {
                            "hour": 19,
                            "percentage": 55
                        },
                        {
                            "hour": 20,
                            "percentage": 52
                        },
                        {
                            "hour": 21,
                            "percentage": 35
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 11
                        },
                        {
                            "hour": 12,
                            "percentage": 15
                        },
                        {
                            "hour": 13,
                            "percentage": 17
                        },
                        {
                            "hour": 14,
                            "percentage": 15
                        },
                        {
                            "hour": 15,
                            "percentage": 12
                        },
                        {
                            "hour": 16,
                            "percentage": 15
                        },
                        {
                            "hour": 17,
                            "percentage": 27
                        },
                        {
                            "hour": 18,
                            "percentage": 45
                        },
                        {
                            "hour": 19,
                            "percentage": 58
                        },
                        {
                            "hour": 20,
                            "percentage": 53
                        },
                        {
                            "hour": 21,
                            "percentage": 35
                        },
                        {
                            "hour": 22,
                            "percentage": 16
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 10
                        },
                        {
                            "hour": 12,
                            "percentage": 13
                        },
                        {
                            "hour": 13,
                            "percentage": 13
                        },
                        {
                            "hour": 14,
                            "percentage": 11
                        },
                        {
                            "hour": 15,
                            "percentage": 9
                        },
                        {
                            "hour": 16,
                            "percentage": 14
                        },
                        {
                            "hour": 17,
                            "percentage": 27
                        },
                        {
                            "hour": 18,
                            "percentage": 46
                        },
                        {
                            "hour": 19,
                            "percentage": 63
                        },
                        {
                            "hour": 20,
                            "percentage": 66
                        },
                        {
                            "hour": 21,
                            "percentage": 54
                        },
                        {
                            "hour": 22,
                            "percentage": 34
                        },
                        {
                            "hour": 23,
                            "percentage": 16
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 15
                        },
                        {
                            "hour": 12,
                            "percentage": 19
                        },
                        {
                            "hour": 13,
                            "percentage": 17
                        },
                        {
                            "hour": 14,
                            "percentage": 13
                        },
                        {
                            "hour": 15,
                            "percentage": 11
                        },
                        {
                            "hour": 16,
                            "percentage": 21
                        },
                        {
                            "hour": 17,
                            "percentage": 40
                        },
                        {
                            "hour": 18,
                            "percentage": 56
                        },
                        {
                            "hour": 19,
                            "percentage": 65
                        },
                        {
                            "hour": 20,
                            "percentage": 78
                        },
                        {
                            "hour": 21,
                            "percentage": 90
                        },
                        {
                            "hour": 22,
                            "percentage": 83
                        },
                        {
                            "hour": 23,
                            "percentage": 54
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 0
                        },
                        {
                            "hour": 11,
                            "percentage": 13
                        },
                        {
                            "hour": 12,
                            "percentage": 20
                        },
                        {
                            "hour": 13,
                            "percentage": 25
                        },
                        {
                            "hour": 14,
                            "percentage": 28
                        },
                        {
                            "hour": 15,
                            "percentage": 27
                        },
                        {
                            "hour": 16,
                            "percentage": 22
                        },
                        {
                            "hour": 17,
                            "percentage": 22
                        },
                        {
                            "hour": 18,
                            "percentage": 42
                        },
                        {
                            "hour": 19,
                            "percentage": 77
                        },
                        {
                            "hour": 20,
                            "percentage": 85
                        },
                        {
                            "hour": 21,
                            "percentage": 91
                        },
                        {
                            "hour": 22,
                            "percentage": 100
                        },
                        {
                            "hour": 23,
                            "percentage": 63
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "001ca812acfccdc80fa1d59bfb0ad472c0a56cbc",
            "likes": null,
            "location": {
                "lat": 37.32174919999999,
                "lng": -121.9482408
            },
            "name": "Straits Restaurant",
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104027151676078068627/photos\">George Shih</a>"
                    ],
                    "photo_reference": "CmRaAAAAKVV32V-aeUoTIRxkDojA9C_TKz0gUXqhWiEQRmJ5cvBUUNFIMmPdYSve3rlvoHcwPMYioSN8C-hdVcqd9S_pA95bcfFdyXsJvWt_HATqf_ZBAsARYtlSf2HQ4iYPaEFGEhBhKLETJfjXgSpaYF2duRy0GhTI7qt-50Jr80CnQQjvFN1tp5SF9w",
                    "width": 4032
                },
                {
                    "height": 2343,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/105452442078795199923/photos\">Deepu E G</a>"
                    ],
                    "photo_reference": "CmRaAAAACt9JBsWvLvS9LJq-m_JeqMD6DbqMVjKp5UbZJ9b_5xLOhecLqJODi18U-rlumeuA0NNQpvmR6wl8qFaK_urZtv54yW0GyaQqObY3U9kHo0T4M1T8ix344yQv8cSHrK8TEhCtDgO-TnoNcCC3WvcmdnEtGhRrDXmet9d18P3fqLRPbYb_s39OEQ",
                    "width": 1944
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117446481460862719184/photos\">Julien</a>"
                    ],
                    "photo_reference": "CmRaAAAAIYNymmXGEhfixrxB57SlgpXtFVIElZEAjgpJIiECUhAi8SBlNAwST0IL9FRHTkGycSgw4j5SbuptbR5McjMjTvSHtbqE95qvlbkXe_EuBPPDIedWHrAaAUCyDl7hABmXEhBJcurcLOxqbgf1NlD5ax-MGhRugrmYpGwhOb4o2Glgcq6uc-LMyQ",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104027151676078068627/photos\">George Shih</a>"
                    ],
                    "photo_reference": "CmRaAAAAbU_OgXiX-H24QFAVvHj9HKr50HUm-jIulCK5Y4RK6z8l4iaLMY0cEwc7MS4Buk1lctjP985Yo8tPzan61t5m11OZY4vRDiITPHMFmZQCuMPmg9q0yqRARFPsegr_KYq8EhCwGcCPMVn2wdbyyFt_DaEnGhSEGLLQHWJTXYUE9maiPy3-m874iQ",
                    "width": 4032
                },
                {
                    "height": 3168,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102119050734171212729/photos\">Liz Cantu Davenport</a>"
                    ],
                    "photo_reference": "CmRaAAAAb0Y3js3lMIFx_80NQ0eL485sbTN0FTtatUP7ukvpUbXPJ-tu6yQPNiPmv7egjAIEQyQEIDGPZdv0bj5jleee2O7wdXbxUh1uDQi7knK0-kTbg51SBL7M3UfFKnXzt5amEhCdOgwo5XE6j_WGBgpE7Dq6GhSGiiNLzgo55u9iw9ndEWJacMUReA",
                    "width": 4752
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/109849026903893201606/photos\">Jayasimha Nuggehalli</a>"
                    ],
                    "photo_reference": "CmRaAAAAFK9-14DvXdkGlhxaylI8ck1zD-ibPNWUeIsIkXanPGdP7TxwV3LfaDSw4jo3DkmvQgUmEKWHRcr13fTMAXxfk0qPHV9ACbG7qtJBc6Ro-_mFxUBJutq-jmbBTxKQ-cJFEhDo5YXd7NRbcgeHmxPn3ZQDGhTN2hOBiTwEm0t8abxDfrmd-9nClQ",
                    "width": 4032
                },
                {
                    "height": 2268,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117597793051200825990/photos\">Amir Ahmed Asif</a>"
                    ],
                    "photo_reference": "CmRaAAAAouzUQaega2Lp5wsSmD81mWi3dQjYf3pjp7SLAB8HaMK7ISqSdi9bERFsEwKGQ7wlIUS2sWY6MQuvu9TvfdY7e1pdbiAN4ZXmBeBkgP-vNJiMjs5EbdHgwMqqowo4wqSqEhDzLLXjVCb1sFQTy3PbWTjBGhQ9_3a_QHqvUTV4YQOCe5ou2xw16Q",
                    "width": 4032
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113956232303610618641/photos\">Aming Ang</a>"
                    ],
                    "photo_reference": "CmRaAAAA_1U7Eo8OEXwxuDDoOb9JYpVtw6CdLumf6pTV3W6B5BFyBBMbUj1F__znokn7lDAWZIYp3pRPH6MzL7x36FGfyr7cLUGSH51kBq6KoZQ1nOL2ZrYrTkqCrm916V8FGD8nEhAu75OaCSRn_ZqgqDtGSf2HGhTQka3i1z3IIrtHCTNoOn6A9iaU4w",
                    "width": 4032
                },
                {
                    "height": 3168,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102119050734171212729/photos\">Liz Cantu Davenport</a>"
                    ],
                    "photo_reference": "CmRaAAAAMWmg1B00WnDT7dzGmVWKVDtJaYodB9aHkXdOaiosghrm_IqLSE3NSUVn0g76Oz8SQ6yRvvsJLl6YJV5uc97nzHJmxxlXxS65WWg_FJQdF_1GSCaqTIzw587dHBrCFN4VEhAjG0q6TliUWuzcO74vfN0kGhSHK_x7Gr-wYVSx46OYpFJwm99bjg",
                    "width": 4752
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113956232303610618641/photos\">Aming Ang</a>"
                    ],
                    "photo_reference": "CmRaAAAAhSp-ELDw0cUx5f9G9Dwq2-5UHposaIc_sZfQ6esSqJfFdQeTK-epCbiWwtnY2PCdIaJSw1TNYZCb2P_pB-5NxZrARjI-Z3e6EDlF4JwyslNJBTcFP85CqNf80-XrGn9TEhCRBh2XU8RmbMYtafaQ4mDwGhTStHfr5M-ekVZZreNv4ZE-Y90t6w",
                    "width": 4032
                }
            ],
            "price": 2,
            "rating": 3.9,
            "types": [
                "bar",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "9.1 mi",
                    "value": 14663
                },
                "duration": {
                    "text": "15 mins",
                    "value": 888
                },
                "durationInTraffic": {
                    "text": "14 mins",
                    "value": 859
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c71fcc66ba2e3aeceefeb19",
            "place_id": "ChIJF_ZEyF3Lj4ARtEGSlq-F-B0",
            "address": "975 The Alameda Ste 10, San Jose",
            "busy_hours": [
                {
                    "day": "Sun",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 12
                        },
                        {
                            "hour": 11,
                            "percentage": 29
                        },
                        {
                            "hour": 12,
                            "percentage": 52
                        },
                        {
                            "hour": 13,
                            "percentage": 68
                        },
                        {
                            "hour": 14,
                            "percentage": 69
                        },
                        {
                            "hour": 15,
                            "percentage": 56
                        },
                        {
                            "hour": 16,
                            "percentage": 47
                        },
                        {
                            "hour": 17,
                            "percentage": 48
                        },
                        {
                            "hour": 18,
                            "percentage": 52
                        },
                        {
                            "hour": 19,
                            "percentage": 56
                        },
                        {
                            "hour": 20,
                            "percentage": 56
                        },
                        {
                            "hour": 21,
                            "percentage": 29
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Mon",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 19
                        },
                        {
                            "hour": 11,
                            "percentage": 54
                        },
                        {
                            "hour": 12,
                            "percentage": 90
                        },
                        {
                            "hour": 13,
                            "percentage": 86
                        },
                        {
                            "hour": 14,
                            "percentage": 48
                        },
                        {
                            "hour": 15,
                            "percentage": 20
                        },
                        {
                            "hour": 16,
                            "percentage": 19
                        },
                        {
                            "hour": 17,
                            "percentage": 38
                        },
                        {
                            "hour": 18,
                            "percentage": 65
                        },
                        {
                            "hour": 19,
                            "percentage": 80
                        },
                        {
                            "hour": 20,
                            "percentage": 65
                        },
                        {
                            "hour": 21,
                            "percentage": 36
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Tue",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 6
                        },
                        {
                            "hour": 11,
                            "percentage": 26
                        },
                        {
                            "hour": 12,
                            "percentage": 55
                        },
                        {
                            "hour": 13,
                            "percentage": 63
                        },
                        {
                            "hour": 14,
                            "percentage": 44
                        },
                        {
                            "hour": 15,
                            "percentage": 34
                        },
                        {
                            "hour": 16,
                            "percentage": 52
                        },
                        {
                            "hour": 17,
                            "percentage": 80
                        },
                        {
                            "hour": 18,
                            "percentage": 100
                        },
                        {
                            "hour": 19,
                            "percentage": 95
                        },
                        {
                            "hour": 20,
                            "percentage": 70
                        },
                        {
                            "hour": 21,
                            "percentage": 40
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Wed",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 24
                        },
                        {
                            "hour": 11,
                            "percentage": 52
                        },
                        {
                            "hour": 12,
                            "percentage": 79
                        },
                        {
                            "hour": 13,
                            "percentage": 83
                        },
                        {
                            "hour": 14,
                            "percentage": 65
                        },
                        {
                            "hour": 15,
                            "percentage": 44
                        },
                        {
                            "hour": 16,
                            "percentage": 43
                        },
                        {
                            "hour": 17,
                            "percentage": 60
                        },
                        {
                            "hour": 18,
                            "percentage": 76
                        },
                        {
                            "hour": 19,
                            "percentage": 75
                        },
                        {
                            "hour": 20,
                            "percentage": 55
                        },
                        {
                            "hour": 21,
                            "percentage": 30
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Thu",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 13
                        },
                        {
                            "hour": 11,
                            "percentage": 40
                        },
                        {
                            "hour": 12,
                            "percentage": 73
                        },
                        {
                            "hour": 13,
                            "percentage": 72
                        },
                        {
                            "hour": 14,
                            "percentage": 44
                        },
                        {
                            "hour": 15,
                            "percentage": 29
                        },
                        {
                            "hour": 16,
                            "percentage": 36
                        },
                        {
                            "hour": 17,
                            "percentage": 52
                        },
                        {
                            "hour": 18,
                            "percentage": 65
                        },
                        {
                            "hour": 19,
                            "percentage": 65
                        },
                        {
                            "hour": 20,
                            "percentage": 51
                        },
                        {
                            "hour": 21,
                            "percentage": 31
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Fri",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 9
                        },
                        {
                            "hour": 11,
                            "percentage": 33
                        },
                        {
                            "hour": 12,
                            "percentage": 73
                        },
                        {
                            "hour": 13,
                            "percentage": 96
                        },
                        {
                            "hour": 14,
                            "percentage": 76
                        },
                        {
                            "hour": 15,
                            "percentage": 39
                        },
                        {
                            "hour": 16,
                            "percentage": 29
                        },
                        {
                            "hour": 17,
                            "percentage": 48
                        },
                        {
                            "hour": 18,
                            "percentage": 65
                        },
                        {
                            "hour": 19,
                            "percentage": 58
                        },
                        {
                            "hour": 20,
                            "percentage": 51
                        },
                        {
                            "hour": 21,
                            "percentage": 41
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                },
                {
                    "day": "Sat",
                    "hours": [
                        {
                            "hour": 6,
                            "percentage": 0
                        },
                        {
                            "hour": 7,
                            "percentage": 0
                        },
                        {
                            "hour": 8,
                            "percentage": 0
                        },
                        {
                            "hour": 9,
                            "percentage": 0
                        },
                        {
                            "hour": 10,
                            "percentage": 12
                        },
                        {
                            "hour": 11,
                            "percentage": 27
                        },
                        {
                            "hour": 12,
                            "percentage": 45
                        },
                        {
                            "hour": 13,
                            "percentage": 51
                        },
                        {
                            "hour": 14,
                            "percentage": 40
                        },
                        {
                            "hour": 15,
                            "percentage": 29
                        },
                        {
                            "hour": 16,
                            "percentage": 31
                        },
                        {
                            "hour": 17,
                            "percentage": 51
                        },
                        {
                            "hour": 18,
                            "percentage": 76
                        },
                        {
                            "hour": 19,
                            "percentage": 84
                        },
                        {
                            "hour": 20,
                            "percentage": 68
                        },
                        {
                            "hour": 21,
                            "percentage": 39
                        },
                        {
                            "hour": 22,
                            "percentage": 0
                        },
                        {
                            "hour": 23,
                            "percentage": 0
                        }
                    ]
                }
            ],
            "dislikes": null,
            "favorited": null,
            "id": "8132858f62f8354ec364bb918ca3be3ea7840854",
            "likes": null,
            "location": {
                "lat": 37.3319068,
                "lng": -121.9086599
            },
            "name": "Chipotle Mexican Grill",
            "photos": [
                {
                    "height": 2112,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115812820044883077946/photos\">Devendra Ramchandani</a>"
                    ],
                    "photo_reference": "CmRaAAAAh26Iyer0Ge9rQIBMQkQsxL_fPra_m8jYiLns2swvt1BsuL0jr0IqI5c-vmRJW7bF-QxWzdvlvJETQdieLpGJUEDguSxpxngpgtXQkM3RI8J0D71WwDHjLWl_GpsQBHcuEhD5A0az0-Wcm6qaGE87RJpDGhSVl9MAcaT3qF4s280NAEYJZ01eJQ",
                    "width": 4608
                },
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110522990357151389177/photos\">Taylor Seaton</a>"
                    ],
                    "photo_reference": "CmRaAAAAdT1boGkQt_6YOnFAr17m2p0N8-y9U3eFs4VRtT8ghRa3d82y9YSdvwZFHn2z068Fo03sRDaIR31w2QlTMe9jBbDfWBVc4WDUtrZUSZdQqC2P_jXlBhdTDPAj791pNICGEhCjET8SrLrbzVN1pKWvMylRGhT6OlHPBxdXtHJ2yU4ZJ8eyfI9HRQ",
                    "width": 1920
                },
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110861930035484566545/photos\">Amy Lara</a>"
                    ],
                    "photo_reference": "CmRaAAAAL-xBb9jZ81N16nir5V_-hEfLVsAZyd2wqxOLkVe1gGYKlUHOm10CjJ8Uwm54SU8d4lQEE49M90lmuaGmEHSntCufy8h6jcitgvmyqJDPXnB_nkmiXpsTRuiXcrLEjlsMEhCt4PPh1ceFGdx0VvyClxyWGhTk9vcLTBJJNAh72piE46zbpvY5tA",
                    "width": 3024
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/115009627465941568946/photos\">Jonathan</a>"
                    ],
                    "photo_reference": "CmRaAAAAMzwTEDxD4NMURpKy4Y4ASahDnhOGYqDF4GJK3QraQcUMEH3-FCKGBmGLjo1qjvtARPjnIHDd-T53MY-Glle14ZGuqO0EFrzNZCdm5kfWi-lkL_Xfbxrbmuf-S1UIktotEhDQdzm4S3GBnj_MK6ubmQ3pGhR3SeTw4gRHSA35qFaZRUqTcFKs6w",
                    "width": 4032
                },
                {
                    "height": 1080,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110522990357151389177/photos\">Taylor Seaton</a>"
                    ],
                    "photo_reference": "CmRaAAAAXs37LFdvZsIa3yhAlqlp9WcmcC81AghhL_nzWdyxw4uejBiM7JIXbz3W7s6XRGHCZYAFqY2WvdbzdDpNi1X2nsGkeMwz2IjGEb3RzGeYVS5SYhr-eTDEcW8Td_kT0PouEhAUiUWr-anOAAJUT7mv-HbvGhTigj6tqZUn7MzbJXhs24kDjkqtCA",
                    "width": 1920
                },
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110626852290400090144/photos\">Mithun harikumar</a>"
                    ],
                    "photo_reference": "CmRaAAAASD0m4EmsbjZBLNwTAGsoGpnJZakkCl2F0lrRE0VK3I48eoGqs5Rm7bUEz_audPpCQ9HxcotP0FYa8LR1huTmQaVs2_hxxeh28HrfgXThR_PVmUcRSOxvY9IBwY7gm-srEhAvyii1ZV5rK0EETx724E96GhT5uP2zxhV6XXczhX4_BRDd2GooxQ",
                    "width": 5312
                },
                {
                    "height": 2448,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113592713483391160343/photos\">Shreyas Bhat</a>"
                    ],
                    "photo_reference": "CmRaAAAAXhKq5ERAZKzxH2jWjgtIkpOLUgIjxwRxagcpZPLE-UAyU9_j_x0gkYl1kOrDR42EXzS4IvyZ4Y1r3Fq6cMV_3JozSlyp0rjhg04nDWlonhs-Dwik2DlH_YOgqKxVW9fpEhBDxyJcUUms6PmCEteWDjDEGhQ4XXr-xnVEzJ7GeOAB7qC7WlYDow",
                    "width": 3264
                },
                {
                    "height": 3522,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111703835272265865456/photos\">Kay Em</a>"
                    ],
                    "photo_reference": "CmRaAAAAKFCHevZPea8rZMjjnttVMXb55nQgOIAq2gvZj9oEKhDcp0kxgb1Ati9cpL7EXJsHLE2QpEntqTaEX5MF1LY-mnSmHvtt-55bjthWqe8Lli_Z1RU2RpqRpT7dKz3A2BDSEhD00Ijsii6-aEWAEnww5cu5GhS8KOFKNE1wGwQ0Pbze2Xgkp-Kgxw",
                    "width": 2743
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113514765427047842351/photos\">Sushuruth Sadagopan</a>"
                    ],
                    "photo_reference": "CmRaAAAA3PXMj2JLbXvPs-gVX3lq2Q4YY1Q6lladY2SlMEwkMCRuqYR_v5tT-_0dx8lvejjjiF2ySsG7hvYlqzUy4sQMXmE3ZYKwrf73huhz-vkARJA3esBgDnHV7WTgF_iv5C0eEhDL1lyiX3Xvq36OnJcHrKojGhSuRajosiJhzYtZHEIGwj8t0iMJxg",
                    "width": 4608
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111397245873155621908/photos\">SACHIN GURUSWAMY</a>"
                    ],
                    "photo_reference": "CmRaAAAAbNCjB2HUoBYd6VwGCKIOeSYAKygebbfUYCbjGAELF8EskWnUyTguWfNaMo2kW_LjYJ3WeZo8Dy6dHD00VUD9z2qjXKa70PfncDhKQaCgZnb11qf_HnE8PmHYfuSpMyMeEhAlIrn7xu3R3hf56fDGjknOGhRt8wtpZsF2Nz3QGpBXo0v04zmT2g",
                    "width": 4032
                }
            ],
            "price": 1,
            "rating": 4,
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "6.6 mi",
                    "value": 10650
                },
                "duration": {
                    "text": "12 mins",
                    "value": 708
                },
                "durationInTraffic": {
                    "text": "11 mins",
                    "value": 660
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        },
        {
            "_id": "5c8bf1486ba2e3aece50047c",
            "place_id": "ChIJ7wHGUH3Mj4ARi0CkybsUfVM",
            "address": "875 North 13th Street, San Jose",
            "busy_hours": null,
            "dislikes": null,
            "favorited": null,
            "id": "771b1b949aef6d7df8bcd672fa370ab63cb28eb8",
            "likes": null,
            "location": {
                "lat": 37.358583,
                "lng": -121.890909
            },
            "name": "Quality Inn",
            "photos": [
                {
                    "height": 1365,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114696456220203383267/photos\">Quality Inn</a>"
                    ],
                    "photo_reference": "CmRaAAAATtsqvD6EsYdMRavvHe-eJ6ipj3XGDz6Pqw_WSzbE9yEBvMzGYlvGxBILjnhZIgjqLlGAGV8GoZ-ggSB74as7ulq6fwdYAVSobDRxeS2TLR_FM8WeCQa2aUgrs_WOsCcnEhCHGr_zd3nXZvvXBXuhIjjiGhRAJj43FBPaccvO_4fiJkkBNebcmg",
                    "width": 2048
                },
                {
                    "height": 1365,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114696456220203383267/photos\">Quality Inn</a>"
                    ],
                    "photo_reference": "CmRaAAAAiwbi_RaeXHLw9O1glW-sY7brSCSgOm3Vsfbj7FiZN_ICwIq5NJ-dCaTG8s05lYlPVCFgu_QPHu1m109kDzfIFpjrrMpV9CnbJ90PKlwTvce_a8mKNlwQBAs6iupXycVmEhBh8pBvPMUhJFV-N0tHXX8uGhRr5rWE5H7fMWL6xCuxPxsfLrQWdQ",
                    "width": 2048
                },
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114739234883526674289/photos\">Paul Connor</a>"
                    ],
                    "photo_reference": "CmRaAAAAJcgN5gjgw-MxuMgR09GRLE650wmpJEbo6jlwVeSCLSYL0uIVRsfMtS_21Lmjp7gz_ju_uQ7icY_3oD873cPcLp9nUgj52nD9so3tMR5tgPVCOJkYxd1cobrQAamBsRGcEhBJcpiwgJDmAyfvYwI3WL75GhTD3dponHN7lBbAORnWKBb1CW9FLQ",
                    "width": 4032
                },
                {
                    "height": 1365,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114696456220203383267/photos\">Quality Inn</a>"
                    ],
                    "photo_reference": "CmRaAAAAx_yNysCcG4WrMcF6eJpssw3ZrAv_o1N4nSXV5Yk-jqHEinU58OCUNCsho3YNZxEniSo30vz561HW5XHqC2uBsq7rj70K1JGlN_1ZSvaDOtGHeahBdpb8UHr6CNmQff5sEhBJps_SRRtA2szpbJWg9p2ZGhQzF6iNjDoTaSh3zjFHi3rAekVB8w",
                    "width": 2048
                },
                {
                    "height": 1365,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114696456220203383267/photos\">Quality Inn</a>"
                    ],
                    "photo_reference": "CmRaAAAA1V7BGhZVfh9ejOHJQS-HhnaeFFF0-7ESDIUv35J3fvMe81Zhe0ue4rm4ykWAmplH6kMU4x4YtAIE9s0O4UBq8jDyPMXJOuihjJc_qPL2CNC-exIFErdzcg3DkB1hiGGwEhANTPoucX6b16IT5I8YP22cGhQMlD6LF_zi0SqYHaDjK-o-fBGSyg",
                    "width": 2048
                },
                {
                    "height": 3456,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114696456220203383267/photos\">Quality Inn</a>"
                    ],
                    "photo_reference": "CmRaAAAAyXtD6tNsDc1TM5cCwN47TD3z8EQmOlh5P1KL8tlK5xw_vLyl1cAdbLECEWkFZjw-kpXokmz46lVVQGJI2VHRbLi8Ekwl1j1boMi3W5RXeKpAxkHKP2WDsHPpfW5H40l8EhAFs2CV5IitumOWZDTP1Ok6GhRwKN-ul8Q0gQ6a5xsY1N4Cee-b6w",
                    "width": 5184
                },
                {
                    "height": 1365,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114696456220203383267/photos\">Quality Inn</a>"
                    ],
                    "photo_reference": "CmRaAAAAOm-HZ9iM_ulgx051O6jHwTxSQNLPjLO9NXnH881tcxlNylNE5Vp_0dm9eS-f41aSj9flIoHzGLQteOSc5FDwGAbAUlnfY0oWKgp_9ZV9YyA6HNyhcXxiPRJS7r_RQF9BEhDT8lKIDOmKohN2loLqVc1fGhQ9k5fPNyg8M9hQHjVOTYVcAQcGBA",
                    "width": 2048
                },
                {
                    "height": 1365,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114696456220203383267/photos\">Quality Inn</a>"
                    ],
                    "photo_reference": "CmRaAAAAbOzy286DjQacbv_mzeuD3zARuO0yCxJLkAAkcitA4dRgNLJjxv75WOC5Jvjncdu1JwUZmOpjRz4nQFf_Ywi6uKfcJTh71q9Ty-Ouqb_BBZqUb47NmN088a-UFnN_XXW9EhDLSNW0mLDm-lumI4LKiwI5GhQ3NVJzWCTEDx_yx0sjijMQf7RewQ",
                    "width": 2048
                },
                {
                    "height": 1365,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114696456220203383267/photos\">Quality Inn</a>"
                    ],
                    "photo_reference": "CmRaAAAAuQxs8TfGO71BNGQaO3GU6cpW0AOo_EG3Sp1126eLajH9m5sbTYqLcnFyMZU6iKBKMCGQFAyi559k_RcskAZmk4aeCOfMwzLYEBBOsz0hwp-ZPGvYka15WvwH4EkkdIqPEhABpod39goPKdYwVoeFlDefGhTI3XHhUQ3sRqYNpj-f7D3n3UqvNQ",
                    "width": 2048
                },
                {
                    "height": 1365,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114696456220203383267/photos\">Quality Inn</a>"
                    ],
                    "photo_reference": "CmRaAAAAw1a7mDB1Kwrh_TSLRh-HYl825sDqvxgWv9Ns9apZ2yQ5haVHVFdVKq9qFrJXK3rkWVTBg9qsLwdJu5VrhpXVsufcujEAtEK53S-OX26qr70mrvrMr-hst1Zi0mgLRhVTEhCnNNQWpvwbxtDk2s9MTZwvGhQqAEz-qkUR1GHUfeI5Wa2iRbnq_w",
                    "width": 2048
                }
            ],
            "price": 0,
            "rating": 3.8,
            "types": [
                "lodging",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "views": null,
            "visits": null,
            "in_db": true,
            "open_now": true,
            "distance": {
                "distance": {
                    "text": "6.0 mi",
                    "value": 9647
                },
                "duration": {
                    "text": "10 mins",
                    "value": 601
                },
                "durationInTraffic": {
                    "text": "10 mins",
                    "value": 581
                }
            },
            "temperature": {
                "temp": 289.26,
                "pressure": 1018,
                "humidity": 72,
                "temp_min": 286.48,
                "temp_max": 291.48
            },
            "predicted_action": 1,
            "predicted_rating": 0
        }
    ]

class api {

  constructor() {

  }

  async searchRestaurants (lat, lng){

/*
   let query = {
      lat: lat,
      lng: lng,
      minPrice: 0,
      maxPrice: 3,
      radiusMiles: 8,
      maxWidth: 1000,
      maxHeight: 1000,
    };

    let url = END_POINT+`/api/restaurant/search?${querystring.stringify(query)}`;

    return fetch(url,{
      method: "GET",
      headers: {
        'Accept': 'text/html,application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'picker.token': global.userToken
      },
    })
    .then(res => res.json())
    .then(responseJSON =>{
      //console.log(responseJSON);
      if(responseJSON.pagetoken) {
        global.pagetoken = responseJSON.pagetoken;
        //console.log(global.pagetoken);
      }else global.pagetoken = undefined;
      if(responseJSON.offset) {
        global.offset = responseJSON.offset;
        //console.log(global.offset);
      }else global.offset = undefined;

      let restaurants = responseJSON.restaurants.map(restaurant => {
        let photos = restaurant.photos.map(photo =>{
          var endPoint = 'https://maps.googleapis.com/maps/api/place/photo?';
          let uri = {
                key: 'AIzaSyDMMHtsOh6B3rBgqu9Q1ZqsHntJfYiQ8NA',
                maxwidth: 1000,
                maxheight: 1000,
                photo_reference: photo.photo_reference
          };
          return {
            url:`${endPoint}${querystring.stringify(uri)}`,
            width: 1000,
            height: 1000,
          };
        })

        let category;
        let aliases = restaurant.types[0];
        if(aliases.alias !== undefined){
          category = aliases.alias;
        }
        console.log(category);
        return new Restaurant({name:restaurant.name, address: restaurant.address, id: restaurant.place_id, rating: restaurant.rating, category: category, photos:photos, price: restaurant.price, distance: restaurant.distance, temperature: restaurant.temperature, busy_hours: restaurant.busy_hours});
      })
      return restaurants;
    })
*/

    let restaurants = restaurantsTemp.map(restaurant => {
      let photos = restaurant.photos.map(photo =>{
        var endPoint = 'https://maps.googleapis.com/maps/api/place/photo?';
        let uri = {
              key: 'AIzaSyDMMHtsOh6B3rBgqu9Q1ZqsHntJfYiQ8NA',
              maxwidth: 1000,
              maxheight: 1000,
              photo_reference: photo.photo_reference
        };
        return {
          url:`${endPoint}${querystring.stringify(uri)}`,
          width: 1000,
          height: 1000,
        };
      })
      return new Restaurant({name:restaurant.name, address: restaurant.address, id: restaurant.place_id, photos:photos, price: restaurant.price, distance: restaurant.distance, temperature: {"dsds":"dsds"}, busy_hours: restaurant.busy_hours});
    })
/*
    let res1 = restaurants.slice(0);
    let res2 = restaurants.slice(0);
    let res3 = restaurants.slice(0);
    let res4 = restaurants.slice(0);
    let res5 = restaurants.slice(0);
    let res6 = restaurants.slice(0);
    let res7 = restaurants.concat(res1,res2,res3,res4,res5,res6);
*/
    return await new Promise(resolve => {
      setTimeout(() =>{
        resolve(restaurants);
      }, 500);
    });

  }

  getNextPage(lat, lng){
    if (global.pagetoken && global.offset){
      //console.log(global.pagetoken, global.offset);
    }else{
      return [];
    }
    let query = {
       lat: lat,
       lng: lng,
       minPrice: 0,
       maxPrice: 3,
       radiusMiles: 20,
       maxWidth: 1000,
       maxHeight: 1000,
       pagetoken: global.pagetoken,
       offset: global.offset
     };

     let url = END_POINT+`/api/restaurant/loadnextpage?${querystring.stringify(query)}`;
     console.log(url);
     return fetch(url,{
       method: "GET",
       headers: {
         'Accept': 'text/html,application/json',
         'Content-Type': 'application/x-www-form-urlencoded',
         'picker.token': global.userToken
       },
     })
     .then(res => res.json())
     .then(responseJSON =>{
       console.log(responseJSON);
       if(responseJSON.pagetoken) {
         global.pagetoken = responseJSON.pagetoken;
         //console.log(global.pagetoken);
       }else global.pagetoken = undefined;
       if(responseJSON.offset) {
         global.offset = responseJSON.offset;
         //console.log(global.offset);
       }else global.offset = undefined;

       let restaurants = responseJSON.restaurants.map(restaurant => {
         let photos = restaurant.photos.map(photo =>{
           var endPoint = 'https://maps.googleapis.com/maps/api/place/photo?';
           let uri = {
                 key: 'AIzaSyDMMHtsOh6B3rBgqu9Q1ZqsHntJfYiQ8NA',
                 maxwidth: 1000,
                 maxheight: 1000,
                 photo_reference: photo.photo_reference
           };
           return {
             url:`${endPoint}${querystring.stringify(uri)}`,
             width: 1000,
             height: 1000,
           };
         })

         let category;
         let aliases = restaurant.types[0];
         if(aliases.alias !== undefined){
           category = aliases.alias;
         }
         console.log(category);
         return new Restaurant({name:restaurant.name, address: restaurant.address, id: restaurant.place_id, rating: restaurant.rating, category: category, photos:photos, price: restaurant.price, distance: restaurant.distance, temperature: restaurant.temperature, busy_hours: restaurant.busy_hours});

       })
       return restaurants;
     })
  }

  createUser(facebook_id, short_lived_token){
    let url = END_POINT+'/api/user/create';
    let payload = {
      facebook_id: facebook_id,
      short_lived_token: short_lived_token,
    };
    return fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'text/html,application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify(payload)})
      .then(result =>{
        return result.json();
      })
      .then(result =>{
        console.log(result);
        return result.result;
      })

  }

  takeAction(lat, lng, userID, restaurant, action){
    //console.log(moment().format('ddd-MMM-D-YYYY,h-mm-ss-a'));
    let timeStamp = moment().format('ddd-MMM-D-YYYY,h-m-s-a').split(',');
    let url = END_POINT+'/api/connection/action';
    let payload = {
      lat: lat,
      lng: lng,
      user_id: userID,
      restaurant_id: restaurant.id,
      restaurant_price: restaurant.price,
      restaurant_rating: restaurant.rating,
      restaurant_category: restaurant.category,
      action: action,
      date: timeStamp[0],
      time: timeStamp [1],
      distance: JSON.stringify(restaurant.distance),
      temperature: JSON.stringify(restaurant.temperature),
      busyness: this.getBusyness(restaurant.busyness),
    };
    //console.log(querystring.stringify(payload));
    return fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'text/html',
        'Content-Type': 'application/x-www-form-urlencoded',
        'picker.token': global.userToken
      },
      body: querystring.stringify(payload)})
      .then(result =>{
        console.log(result);
      });
  }

  //this method is just for testing purposes
  logoutFacebook(userId, facebookToken){
    let url = 'https://graph.facebook.com/'+userId+'/permissions?access_token='+facebookToken;
    return fetch(url, {
      method: "DELETE",
      headers: {
        'Accept': 'text/html,application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      })
      .then(result =>{
        console.log(result);
      });
  }

  getBusyness(busyHours){
    let busyness = 0;
    if(busyHours === null || busyHours === undefined){
      return busyness;
    }
    let timeStamp = moment().format('ddd,h,a').split(',');
    if(timeStamp[2] === 'pm'){
      timeStamp[1] = (parseInt(timeStamp[1]) +12).toString();
    }
    busyHours.forEach(day => {
        if(day.day === timeStamp[0]) {
          day.hours.forEach(hour =>{
            if(hour.hour === parseInt(timeStamp[1])){
              busyness = hour.percentage
            }
          })
        }
    });

    return busyness;
  }

};


module.exports = new api();
