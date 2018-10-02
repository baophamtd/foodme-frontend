import {FileSystem} from 'expo';
const querystring = require('querystring');
const Restaurant = require('./restaurant.object');

var api = {
  async searchRestaurants (){
    var url = 'http://localhost:3000/api/restaurant/search?lat=37.410511&lng=-122.120715&minPrice=0&maxPrice=3&radiusMiles=5&maxHeight=100&maxWidth=100';
    /*
    return fetch(url).then((res) => res.json()).then((responseJSON) =>{
      //prepare query for getting photos from google
      //console.log(responseJSON[0].photos);
      let testImage = responseJSON[0].photos[8].photo_reference;

      var end_point = 'https://maps.googleapis.com/maps/api/place/photo?';
      let query = {
            key: 'AIzaSyDMMHtsOh6B3rBgqu9Q1ZqsHntJfYiQ8NA',
            maxwidth: 1000,
            maxheight: 1000,
      };

      let restaurants = responseJSON.map(restaurant => {
        return new Restaurant({name:restaurant.name, id: restaurant.id, photos:restaurant.photos});
      })
      return restaurants;

    });*/

    let restaurants = results.map(restaurant => {
      let photos = restaurant.photos.map(photo =>{
        var endPoint = 'https://maps.googleapis.com/maps/api/place/photo?';
        let uri = {
              key: 'AIzaSyDMMHtsOh6B3rBgqu9Q1ZqsHntJfYiQ8NA',
              maxwidth: 1000,
              maxheight: 1000,
              photo_reference: photo.photo_reference
        };
        return `${endPoint}${querystring.stringify(uri)}`;
      })
      return new Restaurant({name:restaurant.name, id: restaurant.id, photos:photos});
    })
    return restaurants;
  }


};


var results = [
    {
        "place_id": "ChIJIe9vfzC7j4ARKMPewN6Czv4",
        "id": "db8178a147741973967b873bd246b1f9f38a6224",
        "name": "Restaurant Soleil",
        "location": {
            "lat": 37.44056889999999,
            "lng": -122.1631209
        },
        "country": null,
        "state": null,
        "city": null,
        "zip": null,
        "address": "675 El Camino Real, Palo Alto",
        "price": 2,
        "rating": 4,
        "photos": [
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108880670051061128336/photos\">Jake</a>"
                ],
                "photo_reference": "CmRaAAAA0-rGLm7pqr1TwOX0s31i8Uu1OePPEVhN0JFRX3kPGr0PGYTe_P6GakDNgva1R2xvZQsdWpqnYuYaObHBTLyrP20L3Owt7B60ZPUDQXvZRMe9sd_InbiMNrgjyfRelPQDEhAEfPAv6bAXYGD2UXdPXGXpGhRLHuPtUrWs_CqUI1FpWJi8EmlAUQ",
                "width": 4048
            },
            {
                "height": 2432,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112558246117709843437/photos\">Sarah Chan</a>"
                ],
                "photo_reference": "CmRaAAAA0e0EFLn0l57ZqyocDAzPqKhw5tNHJnK_8uSsS0cPLL-LMz7xSxcFDWFq8aiYyfXb3DkqilzVJA-iX5FmZhassqTHWIfBg5g69OEs2WCvk_lr9YTZ1KHhHQanWxioAxjGEhAi0O8fgpe2kja7am8_a_ovGhSu2d6EpO8ViDHEIshhHnDoOX0BLQ",
                "width": 4320
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108880670051061128336/photos\">Jake</a>"
                ],
                "photo_reference": "CmRaAAAAwc7XVVgd9RsMz9ZGtl6UPQt4hhtAu5L4E_hFw4hsdrnACm1rozcT5tg7RmC6o6y96bfso-BNcrzzujR95zSJeT4_pP9GHHXpOZTF06x0BJrfOlP2AvAbO7u0SDC9DnPhEhA5ce1YPvV0pIrMXpzfNhMJGhRapNkqG5PxE4uf0tpt2NFU6dW7nQ",
                "width": 3036
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108880670051061128336/photos\">Jake</a>"
                ],
                "photo_reference": "CmRaAAAAXOag9gNrFsf8pb6pcHFZIbbDiRcctCbxeUMV2_L9ENQ1S4A6-pwWz5sLQruXm41uIkUng9W9xuqTXJwopY3MnT1psjmWiES--F0513OXUisM6Eianyq5fdr0l80YCIV4EhAT18MO2LRbsO4zn6pmt5Y6GhTdQvgP3amNonVM9Uwy02qiQZvq-Q",
                "width": 4048
            },
            {
                "height": 2432,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112558246117709843437/photos\">Sarah Chan</a>"
                ],
                "photo_reference": "CmRaAAAAkAMHPpnGiMPEepJ8MsELG1HrEAKgZEjIZWTr2QUZ0iJSlak5xlhcV3w3-s_imgsKN41jJHsySGTxGa8P2X_FtfPq-rWiu46Vgo96k3xUEhKIT3V4Uv9yzbIN1It70954EhAhbisDCL52VFLWdwpItIHfGhQzakuij6nN5uTF4-6lGDnUbJ4nvw",
                "width": 4320
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108880670051061128336/photos\">Jake</a>"
                ],
                "photo_reference": "CmRaAAAA9aAqow9gv6Zo_lb_7YfKhBf5Jls8FTT53XaEw7fJx2naCzIvPdJof0AisvKmVn1UIAItLsGXwvJy61mkZIzkneMM0x-RKd0sdjs3KYH8ZKX-gGu_8xIt2DTrvgPzJ4igEhD0DTIGQetY_7dw2cTr4RT2GhQD7RE7tgvG2N3D5FUTAH-y1UZbrA",
                "width": 4048
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108880670051061128336/photos\">Jake</a>"
                ],
                "photo_reference": "CmRaAAAAjBLhH4ktRMxBJNlF69bDsURMcwP4CNaHsSby8_isak2YT2pCJ5GbLT3zwMrIn-LaYpuhfTVJFbQDRpxYyS8aMzR85MRBkQxMrePrCkWPHeZOqnL4HbZL1HPOUiOeWSSoEhB6XLxV5_IdziVPtT1ig357GhQnabz7j72WUo76qBfTgkedFgvH5w",
                "width": 4048
            },
            {
                "height": 2432,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112558246117709843437/photos\">Sarah Chan</a>"
                ],
                "photo_reference": "CmRaAAAARo8lZrI8icyOdDpCYzcRZBt51JaeZcnGFcdg7hz6XzluLXmEPPS5eB1H-LGm7a1AP1pTCNh9wlLiVqEBcbjtlrrft7iv8wI4_SClKOorujC3D1J4lrpsam6RWjO-2ESaEhCKHniL1aBnADspbkUGOAytGhTJyPSbOntIRtqGnFY4DI6YB-StAA",
                "width": 4320
            },
            {
                "height": 2432,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112558246117709843437/photos\">Sarah Chan</a>"
                ],
                "photo_reference": "CmRaAAAAgYx5yCOUqI8Cp4PG_JFSUvXkKiwqKKiTaf1wz_dhkQ2Ak6r-DpYEnu_eHUiIwwI-qYwaUtRg_2dl4kYiwWdtYlIR7VOBO9PCuGxOgRx6qEp5Zaa3Z58QbM8UyIc-TOcjEhB0u_ezX39nIL36Gl6AZlj7GhTlPu-yIGfBU2weXhrKAezbMIdcrA",
                "width": 4320
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108880670051061128336/photos\">Jake</a>"
                ],
                "photo_reference": "CmRaAAAAzkyqFdnXRXRu3g5ebJx3wxgB-A-pzxuI-ZYOevTLjD5lQCIBDYWY7_zg9cvJucyv5_zeUa9IHQ2aZ27Qr58xmwWzZv9psHymnnx0--R7iQa6ijnYbLd8T2w9NlJj91kmEhBcU0G2NvjcWQelSRRo8pPQGhRsJcWP0A_NUzfpOF6uQBMRYrurDA",
                "width": 4048
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "categories": [],
        "favorited": 0,
        "likes": 0,
        "dislikes": 0,
        "views": 0,
        "visits": 0
    },
    {
        "place_id": "ChIJwWcdxzi7j4ARSPpV37nhr58",
        "id": "57f2ed24db60a6c2fc542d7ba703b50e14725b7d",
        "name": "Tamarine Restaurant & Gallery",
        "location": {
            "lat": 37.44888899999999,
            "lng": -122.158481
        },
        "country": null,
        "state": null,
        "city": null,
        "zip": null,
        "address": "546 University Avenue, Palo Alto",
        "price": 3,
        "rating": 4.4,
        "photos": [
            {
                "height": 1198,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111421460378105628572/photos\">Tamarine Restaurant &amp; Gallery</a>"
                ],
                "photo_reference": "CmRaAAAA5PMay1PZnRfnW3qzgfwnfnNv-qEX4KPuGSY7DG21dui3buHSU91XLkQS0Oqt78j7GGqYeth8-iMYYFOZmrRVaOaMvjeT16wSoJ1yeAdZRD5L-cxqGBG2M1CvCjbOGn5YEhCVGyyaAsKZDTddeVlKnDpjGhQKk29TsORay1-baZw9UBslGDbEiQ",
                "width": 1800
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113066751446679411805/photos\">nobu m</a>"
                ],
                "photo_reference": "CmRaAAAA0SLXIT-24SR6Tj2Zmv90S7oM1fRXa2hOojUdW2DjSG1-v7VVEJmLxzWDsziqwUsfTd1n8EqQzI1I9IEEj3LRepLF1CQOUydXP-MjXEcIhZrfI3HGkq_-jH7FLZHMnOH0EhD_ti8_Cs3rb2d1hLIkQA53GhRbbVtdNYMCvreLEAiq_wRqAPr_HQ",
                "width": 3024
            },
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113066751446679411805/photos\">nobu m</a>"
                ],
                "photo_reference": "CmRaAAAA0-qkvR2nJOBvdyTLChB1RxA9l-sKZ1MBJcaDoGaEvW0FlX7rRGXt6rELgibInboNkomCLpRlzhn2BJXiWwWIGn8XlrkYoMs0I_AenlHNQfS_GRc5Hl-EWUlukDf-f2ZWEhA5_9XPb772wApXtxJk2h-EGhRu5ta1LTk2TeridmGiiY93iJMsHw",
                "width": 3024
            },
            {
                "height": 2940,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113081236111947331574/photos\">Heng-Tze Cheng</a>"
                ],
                "photo_reference": "CmRaAAAAwZ8DIP7r75KXMSwhzpcvTsGDUvqfM_DAuGestGCZAU2VQsuv_Ho2hvo5ZHeBcTqsNTCEt8Rcc1Y6uQ_yxoOL7UR86q1YCKbE5r3QAFKB4s4rXrgfmDSki5LaHfQbOm9MEhBaOklz36ZakDmyZ7SUH204GhSP1CWrzVth91ALUxACKolPtLac2A",
                "width": 4032
            },
            {
                "height": 4000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\">ZAGAT</a>"
                ],
                "photo_reference": "CmRaAAAAOF2Non96LjNtnXkdewPYCTSnSwnzoua-werbCB79CPpqRFnX9Nf-V_K5xyFpY35t31ZIirp2vp8E6r_6CwY0zMv9zSpeXzQPf6_KiXPsXZastsnfW1DkeVh0vfJoosL9EhAEqbvv9w74Ap_6jA_c6Lh9GhT_AEPITZ1Ll1g339IclKzf0ZX1TQ",
                "width": 6000
            },
            {
                "height": 3549,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113081236111947331574/photos\">Heng-Tze Cheng</a>"
                ],
                "photo_reference": "CmRaAAAAUzOyKLy-zYvMZbm-marED3MJAPyTWhBZ3K6oc8grKi38hkz5GGeotRWm3biddzbSYjX4BG3pdUemfUWjDDgS1ZuGk8bAe37mO1HexCQWHvyyX6GhQ2yVeCOFlITdlRUgEhDlWzefLPnkZ1t3O03R16WbGhQ-G8cpdA6y6mzex7-JIXmm1jBv3w",
                "width": 3024
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/117774762962391313834/photos\">winston singh</a>"
                ],
                "photo_reference": "CmRaAAAAhBsaA9mwuNELQiBkjLSmFPpRhaVG062WKiGPDNe7HmhSgr-g5jDTWbbkm0Zfop3fWOH25aJFtgMpbiKe7OhAOttScVF3SK_72XcXWIk_0YRo0HSq2U6q_4LEWaSqlOVbEhDSaLl0Fgm5oMt-HlYV3Oq9GhQ-2TNosKZF5RqfPavbB1WLv6IUtA",
                "width": 4048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107373825755915282580/photos\">Elizabeth Reid</a>"
                ],
                "photo_reference": "CmRaAAAAXGVUOailo5fqwJtbkRHf3VJO0zhHgWjUo0M_2OBrFcgAddMuP1wMMoMWI9GD7qLoFTiUcgo0gvop4-MIEj-KSLzP-fl1KU9dJ1UigIFvnU17BZNRTX-M_-YnxW_qDEc2EhBIOB6xx36G1BVYsPlYtyjGGhTKSLs_KfifTwsXEhi2mWd3EtQxTQ",
                "width": 4032
            },
            {
                "height": 1960,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111421460378105628572/photos\">Tamarine Restaurant &amp; Gallery</a>"
                ],
                "photo_reference": "CmRaAAAAS8LdTMec_udJMeBlFndfhrWS5INmMylHjP2QniiYRVy4d-ylBj05Ot6nzxGUjgWHDbdv8dM8f3IE4Pb_jwfvuy1aypgcS4EzRqpo4sfKyKl1vMvyxqOLYEpSd0gYoRr1EhBYaYu_tPlBXZZDKnhVR2EuGhSCkSBMDFGNar5p_KCgVDE2CjRMbg",
                "width": 3008
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100497852192538160418/photos\">Shalini Singh</a>"
                ],
                "photo_reference": "CmRaAAAAEYs1d7AYmAfZZKXgK8rjN3abUgXJBvT49nlR6xlpBMW9CVdmGPb0kCvzThByG74Ha6xKvDle6_a5VdbokxXiSRQQyAFAwZqtDaBfQ_X5YYytdOPw_Uqa80zo_gLX-K0JEhC0CI1eKnxmouBHPrppOpMaGhS3m2bKZjXKe4C1R3TSkqOY3R9h3w",
                "width": 4032
            }
        ],
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "categories": [],
        "favorited": 0,
        "likes": 0,
        "dislikes": 0,
        "views": 0,
        "visits": 0
    },
    {
        "place_id": "ChIJ2VtDOzS7j4ARaKOgGvJXoJ4",
        "id": "32a50e0a52925328f3ff87c209b03739226d9e5f",
        "name": "Fleming’s Prime Steakhouse & Wine Bar",
        "location": {
            "lat": 37.4445953,
            "lng": -122.1704183
        },
        "country": null,
        "state": null,
        "city": null,
        "zip": null,
        "address": "180 El Camino Real, Palo Alto",
        "price": 4,
        "rating": 4.1,
        "photos": [
            {
                "height": 2359,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118158255214634761255/photos\">Dolores Pan</a>"
                ],
                "photo_reference": "CmRaAAAA-NY45fIV386x_BJ-Mw_4fEofouyMpa9YBybKglNhru4epHJJhG0syMSFA3nArQSqeH7tjBzL2TdJ_yx5vTt3xV5WAvzqbbouppsTAkcj0NnJO7sFxdBPgzCa7cneI6lzEhCKTUlaFTYeABbn3K64rC_YGhQqp5aDFqf-tKVNfor9F2jgjEfnNQ",
                "width": 4193
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103824208472766262634/photos\">Terry V Bush</a>"
                ],
                "photo_reference": "CmRaAAAAavcRv1LRRP69mQxR5k71coUZqFBXeWI9bVRpjzqWb2vQ274IQN3mtQfOtP1JBQLSjQpfpbwQYdCvamWnKfEpVM5-l7iEGfuc5HKgsH348in2sHg9E1iEyBbtRaXNp5oNEhDWCIqF6sDrAy2aRRU_cqKeGhR0YISvAAGqWUMczLi9Jclb2ZGWog",
                "width": 4048
            },
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101186634267073160192/photos\">Bobby Allee</a>"
                ],
                "photo_reference": "CmRaAAAA4EdD3Ktq_Hetf_iI7EixA9OtdflqzH4HDAZZyMqG54fhBNQuc-cPPnbMlQv2Wno0oMw6GI9dTUPzWsy9Eb8BLPn5fvB4MUcjQgsj9L9PufZ6SgUqMsoLO8hzMMjUkv6DEhDbhGDWL7ZCY2dIOetqeiGsGhSj3o3Ca7j5BJqWxZLLuoow2RJ54Q",
                "width": 4032
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100774868536935463388/photos\">Linda Lu</a>"
                ],
                "photo_reference": "CmRaAAAAlN5p_xZHSeFDzmcBzCpI2pgdKk0CmE76PXqJjIXswm96FZJW5YP444KmuhCNJ_Glg3OVrTzFL4weXM88rf_7sNcYl2ySSgV6wVYkqT2XL5THX-TSavR6tyqDMVglKgjIEhAVwOpm8r9gvWTGse02pnRLGhSNB72L_mJH2Hxw_Wc3DFPsgdTMjw",
                "width": 4048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104912287640644359992/photos\">Kesh Patel</a>"
                ],
                "photo_reference": "CmRaAAAATv_zV8QgLqRQB4H-mEVFnDMKmbxu5MeLRVS4s7HyHaWZRHJ7DrmY3TBX2bglRLeKi6ZD-eET-ckecg0E64zDXYoQS55YFXsxSfDZ1QPxzY1UcePut3yXgQgHajQ8BuwZEhBNyBymD-MAnMwEQwZIaPqnGhQ22Xq5-upR2Fro-tMAKxsyqedhbA",
                "width": 4032
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103824208472766262634/photos\">Terry V Bush</a>"
                ],
                "photo_reference": "CmRaAAAAXXDddplQTdQh5DsKd9I8h3H2X9IPTFaIrOaav3zNuRCz12wmWi8ddw6tG1uESWOXimgI1HmMiWh3UlUf8UduA2a9o95CsMNFY2GEOojwiyU3XD3_3bGyg7z1FmRG8LugEhCbOoeMqARJ7tA2guouK9eVGhTZmxHuiI3ihS0e-XVzFuiuNg3wfg",
                "width": 4048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108320224573839197933/photos\">Randy F.</a>"
                ],
                "photo_reference": "CmRaAAAAT2Rdii6B2vBJrsypwcu9A4SOQTatZSW5cyP7zQZ_bfmEPlWiDcxy9HFmt8CzsaigNWdJluhZjvAIvhMZX0wzvEQ7hTiNfP5KtnVZtMtUxGnak6lKcuVK4peH0vxunjgpEhC7_E62QjZHab6DLhNOKU7MGhROQZyfqGIMp-6DrXN5LU_0MuEcuw",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114583509569542094159/photos\">Kazuyo Nakatani</a>"
                ],
                "photo_reference": "CmRaAAAAz9Yqx-rc4LxlRn6U6C8IohfaGgKP5zAAb5u16I5OYlHbxEerfTcw12HCtAqTPIygOgGXOfWgpBsJt8ARhXWYYauxy_ui9rtKLS4h7pQJff91lsMbM4-7QlWjgAw70v7aEhDjfG6QNnz4wTwUG1IJa7glGhSpKDGBnGjxOkdGSZHI25TgH7NK8Q",
                "width": 4032
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100774868536935463388/photos\">Linda Lu</a>"
                ],
                "photo_reference": "CmRaAAAAllSRtiHZi72lfZ0I5ncgOJUY3FT2k9A3VH5H0ZDENIkNDuYTTy-m13sUCOw7p2N7R1XJuFXm-or2y7cFhlgmhcpUOgBJFE8oJQWJKtpTWMn9R4OHTjHAtb7C5sP9H1L-EhCTpPPMXC-FT6pk9qIfx3euGhSl0Qj1bmLIILJlqyAZDdENTOhUrw",
                "width": 4048
            },
            {
                "height": 960,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109594368838915383953/photos\">Fleming’s Prime Steakhouse &amp; Wine Bar</a>"
                ],
                "photo_reference": "CmRaAAAAG7btimyDjUHlcYz3OhgDCLupzuIef1Ad6hkADaqQQwo9GyzbWh-6SBQrFkVg_puTZBZCocBgPHLoy4Y-pn295Kwe5r9ZZT1gdMXOvOsZFaFO_cnkLqlsws_cF82osoTWEhDKhlt1cdiG1S_Jg5OBUd0lGhRckuYMB8QKkapflWIOXTP-r-ng3A",
                "width": 720
            }
        ],
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "categories": [],
        "favorited": 0,
        "likes": 0,
        "dislikes": 0,
        "views": 0,
        "visits": 0
    },
    {
        "place_id": "ChIJQ7QsMzq7j4ARidQmfZss-Wc",
        "id": "696d46fd5b0bf5cd04824e490d6393d1f3c6cfbb",
        "name": "Coconuts",
        "location": {
            "lat": 37.4439101,
            "lng": -122.1601889
        },
        "country": null,
        "state": null,
        "city": null,
        "zip": null,
        "address": "642 Ramona Street, Palo Alto",
        "price": 2,
        "rating": 4.2,
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116036279464096788637/photos\">Nathan Gildart</a>"
                ],
                "photo_reference": "CmRaAAAA0fJq6TYhpQsJENPe7BhkRQUcuaPnvgrzts4NyW1Q68-D0Psw11wV9Cuv8HZtAg93eaCTIfi3Bnwx5qPY7fgbzmvwz2Zgyd-P7JNsjp1wijXGa7VUUOJz7OrVoSMRs9jdEhCHY8QPPA7EO-TGNQRoqHXYGhS2MNPqlLaxP9xbUbdrns6iIT-CBA",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100273535183248056310/photos\">Phoom Chairatana</a>"
                ],
                "photo_reference": "CmRaAAAA2tQVHcRjZf6krOjLhxgAk_DdFM02yI_Ttn8MlY3lHX3Kv5PmJgzI_us_YhfNbvU325N4N0fLlBzhoxl1DGcZv6W6L8Cl68AoFg4dJtxRA7qwcTY2EqojPtJjCn4UK27_EhAx6K4bDQkvA8jaRR3oWQ97GhSZ6p_w7HZOFcEwv-tq2N8pNM0WcQ",
                "width": 4032
            },
            {
                "height": 4608,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111461864618419861814/photos\">田伟</a>"
                ],
                "photo_reference": "CmRaAAAAoYgzfQmPzWzWCvZHUDWQtjyKkSuaRQ805dCimP1IMJO8-jiNigRcAA6mCMQ8F6kyZNmnazjD02POMjDCjCtdwE4GQbyMSGx5jAHG9hFKd3xprTZAdB3t8YO4snGKGbqsEhBI7Wua-13xpoEoPXFtvBoNGhR00JK2gHygEg0WtWo_n0DbXhI71A",
                "width": 3456
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114616287378382452348/photos\">Leslie Liu</a>"
                ],
                "photo_reference": "CmRaAAAAAyfltV_3UJ-raDZzdw69Txg7YwXxEOnwDd79MdYjcC1BJefE_jSKOH1Fsz_ykf-VeYulGGFm7gvXHg54sCBws5y5bqOqAmx4Rxa86-08R_XP30fTmhV69xtFiJeqpVW-EhDmfEuuP2WL4nPTm66F3L8jGhTZvlHC4cKYAqjxxrglv3HBAj3z5Q",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116638576521367467010/photos\">Aditya Ranjan</a>"
                ],
                "photo_reference": "CmRaAAAA2NsN3w1qzp8Eh2IZVNiShXbnQqognuskJeoKafeOCnbJjzumOEWYGgJZvkyDXU0_Z7RW28JbpVJhl1MzgLk83Qi2i_OHeqf_ihjnH0FDEb-OK4lQv1pHlMbYqw8-MftWEhBUOenuRb5qZaridai6TPzCGhSg4oysOA5evTORq_VUEzv_3IU-DQ",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103397699546635750586/photos\">Suvrajit Saha</a>"
                ],
                "photo_reference": "CmRaAAAAw4zpaChaAvK_17VWVrkqj-DslBvIBmTryIMaABE9_GmqrdOR1SLlvN9iJKrceRXT1tS5IyJ9UEaOeDmrbrT8g2ARI9okBsdijktLkPaBPCpNTRRBBG3dt2kUqbQLF7GYEhDwWQjF5mHlm8aUfPr7tIe2GhSpWPFMyjqSWEkMZWkiTGLZEahbeQ",
                "width": 4032
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100274610549073271078/photos\">James Brotchie</a>"
                ],
                "photo_reference": "CmRaAAAAWwvGH-FxQBRRfuI7XvyGXDstfl8vtcXEP0XXzVFAuJCvAiyIdwbd31PEddwu4IXCof7ROwUxBzJioGagqHcZ3sciMSPvDM-cgte1aJ_FTeX68EseXRGaG93YOVSB_VpmEhCrUyzCMFVt0oqsTp48wFZJGhT47y_st-VNS-zSmswHx2X0PE1xUA",
                "width": 3036
            },
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108173204525226638433/photos\">Jessica Levake</a>"
                ],
                "photo_reference": "CmRaAAAAVns02UCWB7rcD8ufwtJnq7HUesq0zDzCYhw_B2bxvASCuc5RXzmyCXbyR3qiJ2psVzqUqFxDcMUhXltmpm4vaOIaoBNo1Rulh3DoAcwbqPAZ9OZh5i0lvcjttlMo0PQHEhBzYHQ4SAwyrJ_LMYja1IDDGhSs_fQ-ue_gLo-F1sp-dPFzzLChdg",
                "width": 3036
            },
            {
                "height": 720,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108496098296923738842/photos\">Tamara Farhat</a>"
                ],
                "photo_reference": "CmRaAAAAjzS-zCi-EUCKoiMAEmEk2NrWu0xvpn7u0iaEPkMsQHSgI_F9dv7fEyT9qDbX9Tb5vuspybv9_T9NCb2sDdDZxW1Nv-odbc8tCIJL8m7ltMHIcjXfAIHlqV8pEVNALtfIEhDdDFzNPdE_XZzSMsO2w54IGhS44SeYdMhYcLNZBoTXJZtX3n1PVA",
                "width": 1280
            },
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104474221634760147543/photos\">Joe Oggier</a>"
                ],
                "photo_reference": "CmRaAAAAoLYUldvBBdJsHq516ev34IN7TgazRX00uSPHNbyOR9tUH6tZYMblFJGWQe7tMoOudbqR0aELMRt0Sm3tRM3EWTygGSejQIHuF71Lzq3YbHy3yW9op1WAgUdoC6NjF7mQEhBTOTkyqtIwzPCrJcJTc4SYGhSxwyLcUOrVhcBmXNeoFk8AOE9iQw",
                "width": 4160
            }
        ],
        "types": [
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "categories": [],
        "favorited": 0,
        "likes": 0,
        "dislikes": 0,
        "views": 0,
        "visits": 0
    },
    {
        "place_id": "ChIJ5V-QXKiwj4ARv5e-BSB9fiA",
        "id": "0bcc1b956fb24beae439eccdc5db92ac3e2e87e6",
        "name": "In-N-Out Burger",
        "location": {
            "lat": 37.4209559,
            "lng": -122.093343
        },
        "country": null,
        "state": null,
        "city": null,
        "zip": null,
        "address": "1159 North Rengstorff Avenue, Mountain View",
        "price": 1,
        "rating": 4.4,
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107284523757413876964/photos\">Junta Nakanishi</a>"
                ],
                "photo_reference": "CmRaAAAAswD2VArp3cXVs_gsCzz96BvNf5oF6E-5Gsnf9NZ_AE4c6AUUPGhN8-SNvI7LYnYDwhWc-83vCH43G11QKFKXTJsiyGnkTEAQM5E5pqUDAAjerDBiwFfKHIaK8yimzZ8wEhB89_d_X3Xxmhro8kOmzC57GhRZUKIX_GJsI0I2GZdKIWhnWmJ0wQ",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111652916442822679118/photos\">Daniel Molinero Reguera</a>"
                ],
                "photo_reference": "CmRaAAAAEk0QvFOw3xeN6gyf2stcel695jv-Et3O0Td5WXQAapMgV71WPi_FlDueR-SxAixVGy-AprjeW0PjdP4e2_3QsEmNtDgAvNa4Q9RTF9vreecAuPfxmpDE1GByqEf4FedWEhAsCJFDjSscrmINXt5qTIkUGhSu1U5_gMjtEod3s7yf37emSo6nwA",
                "width": 4032
            },
            {
                "height": 4000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102770218430993212176/photos\">Nurcan Sonmez</a>"
                ],
                "photo_reference": "CmRaAAAAc9IUxtoSQdYTQD-GrrfDYiBW4RUa2lbD6HI4oE2flZSyovZwpXvUjuiw8U7d8upv-8Vn9aeX31R3GtrfflsBF5U6dwP_zkE3ODklp_nxmvkhh8ZVh0PL9NpMjzJwTIGzEhD9Qzc5J2PxqL79xaYVcPYcGhQNuGbfgQRea6QY89MYyGfefxhJzA",
                "width": 2992
            },
            {
                "height": 1944,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108580053757751183340/photos\">Low-Wee Heng</a>"
                ],
                "photo_reference": "CmRaAAAAzn28WWXMU6wz3Oz8Nf3ShLhaeTJYCxzlAlD3sSJjwRMCvQVnWeYnW4Z-zssTEey7Zh0LMuTGxltW_l9Drv6ZwcLAiJIF5hJnzK8rhihlLBOzHFi6f_ptz8EJf8zAPrK7EhC4ChGrr_09jeZCr7wlcfYVGhRC-8dzet6GKJFAKJhlqjZWwI8L9w",
                "width": 2592
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115906581965383703385/photos\">Gisela Qasim</a>"
                ],
                "photo_reference": "CmRaAAAAWooMX_Nq3JMylaAdv3KUweBi1ZgOSHnxvZxuGW2nDEyzxfFBfzWORvKhBHqcV88AlExt5Hd7OQqEo_920LGNDbRhJ-dK-JRtuzmTVA6ojlfHfqnJrudjKJbUpdUfbdmKEhBSk0cxFxQ3r1GzamHSVvmrGhSlAagUjGwb-48gV9zHdDfzoRHNGg",
                "width": 4032
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100134829339355860053/photos\">Kenichi Ishibashi</a>"
                ],
                "photo_reference": "CmRaAAAAOsioLQdNwVSAow7M7ApdS8k0yGua24c_J9fyDzew_lI7QF5Ns6udRvTzTV_CtTPGCo0bcAfq__6v8nGvdezAyQUGsQ2pvTZWYk_a2_2jkpr7jBGM39ZUFKR1V6M__cZWEhCelYx7DT-6PKJfKUiRBc48GhQwYHb1ItkYDsn1I24k7SbKoFe3cQ",
                "width": 4032
            },
            {
                "height": 2992,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113900850850474894576/photos\">Evan Sidarto</a>"
                ],
                "photo_reference": "CmRaAAAAVQDeoGTNSTwLxvid7Kv8-jNQkWVNNc8EolSQC3QVyIvMxz29c2FOXGMhqZluhu0jLJ3EXScClZuS0aiNvclrx1DEVHkfRdiDvUQzeY_Qpq0jd4r8c_tOEoPeytl_qttwEhDXeboJWxAINEDoeNTZuF2KGhTS0vRzqVyt9lb1M5Gk0JxNWHCWBQ",
                "width": 4000
            },
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100933172822786667501/photos\">Hideyuki Kikuma</a>"
                ],
                "photo_reference": "CmRaAAAAqmBwrT8h1oH_lzaIcYt1nBXynHttYvUqfpHtGXpSfB48fv9e1OBvNRDxTnvXy-QBxIFJ6k_wD8hx-8axT0a9NNydlp14wZZ2VgYP5hyUJVENxRwgXHFxDZ9NwJd9B_YwEhDK6w8iqD-RDAPnn4uxF7Q0GhQLgCCqwjg0eqItFlQirEQxJ2AUMw",
                "width": 4048
            },
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106357378390774314619/photos\">Jesse Radin</a>"
                ],
                "photo_reference": "CmRZAAAAyGKzMm4EyGIX-A2H68RZvsdX4K3PiD6ega-3VZtXG92-L9i7651FHlFnKqH7mtHblKwmJqPU6b7LtCuMFMm6fyeyfO4nfxW3YnabZLdalx2aGBW-ctx5JPays9YHE185EhDosE-EVJLW7wvJpLSkBgORGhT1bMt7WNAoDK4_ZgRGoTxC61Ewxg",
                "width": 4032
            },
            {
                "height": 2340,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109763038353177593396/photos\">이희민</a>"
                ],
                "photo_reference": "CmRaAAAAN4bjV4O-T-VfByeDBzhCmqltT1AaUpPWxcNSn_r8KirxQ_5skdMKfhToNoFlQjU1reRwVwIU1wluE4k0bWQYcY4n8lERUW7E4X70qg-b5Lc9MtbFZ3fT16mspRPu-XiBEhBabYIN1bg2loFGHwXzcBC_GhQehksME8m_qMvrGlkTX22ROrUPag",
                "width": 4160
            }
        ],
        "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "categories": [],
        "favorited": 0,
        "likes": 0,
        "dislikes": 0,
        "views": 0,
        "visits": 0
    }
]

module.exports = api;
