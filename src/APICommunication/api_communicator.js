const url = 'https://api.spotify.com/v1'

const token = 'BQDjE81_N1KS2QcjA9NvSOnUMII_daqKHcDQGe_-aGv4_PY0xq_vHPxsRmQnrW45UqwMrfle4aa-IHq2hNlQZsXN9sUi3Rg3a3XhwJI3tRqccGbWxr4'

export const spotifyRequest = async (endpoint) => {
  return {
    "artists": {
      "href": "https://api.spotify.com/v1/search?query=ole&type=artist&offset=0&limit=50",
      "items": [{
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3iXeAZ8862AyoZ5ZGg800O"
        },
        "followers": {
          "href": null,
          "total": 8072
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/3iXeAZ8862AyoZ5ZGg800O",
        "id": "3iXeAZ8862AyoZ5ZGg800O",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb13c2646716f24811b82b6d6c",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab6761610000517413c2646716f24811b82b6d6c",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f17813c2646716f24811b82b6d6c",
          "width": 160
        }],
        "name": "Ole 60",
        "popularity": 41,
        "type": "artist",
        "uri": "spotify:artist:3iXeAZ8862AyoZ5ZGg800O"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1RRY8KBuZYuhAAJRgdDlP9"
        },
        "followers": {
          "href": null,
          "total": 2052
        },
        "genres": ["background piano"],
        "href": "https://api.spotify.com/v1/artists/1RRY8KBuZYuhAAJRgdDlP9",
        "id": "1RRY8KBuZYuhAAJRgdDlP9",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb8bd703c434812d1377722975",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051748bd703c434812d1377722975",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1788bd703c434812d1377722975",
          "width": 160
        }],
        "name": "Ole-Bjørn Talstad",
        "popularity": 54,
        "type": "artist",
        "uri": "spotify:artist:1RRY8KBuZYuhAAJRgdDlP9"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7038Bglq6YmpBu6wPvQJiz"
        },
        "followers": {
          "href": null,
          "total": 57096
        },
        "genres": ["post-grunge", "sacramento indie"],
        "href": "https://api.spotify.com/v1/artists/7038Bglq6YmpBu6wPvQJiz",
        "id": "7038Bglq6YmpBu6wPvQJiz",
        "images": [{
          "height": 762,
          "url": "https://i.scdn.co/image/d9634806cadfe2307c75202fb9c43d5a6d93d6c4",
          "width": 1000
        }, {
          "height": 488,
          "url": "https://i.scdn.co/image/fb00aa650f92c6efd57d3bbdac61a3462a1b90a9",
          "width": 640
        }, {
          "height": 152,
          "url": "https://i.scdn.co/image/658c9c0555d4b7f90cde74f5b659ffc776944f56",
          "width": 199
        }, {
          "height": 49,
          "url": "https://i.scdn.co/image/90f7bd1826dc11e50b4601152d11a684a06bd2b9",
          "width": 64
        }],
        "name": "Oleander",
        "popularity": 35,
        "type": "artist",
        "uri": "spotify:artist:7038Bglq6YmpBu6wPvQJiz"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1BMb6sQJVkmUyCuodmRs2g"
        },
        "followers": {
          "href": null,
          "total": 173234
        },
        "genres": ["quiet storm"],
        "href": "https://api.spotify.com/v1/artists/1BMb6sQJVkmUyCuodmRs2g",
        "id": "1BMb6sQJVkmUyCuodmRs2g",
        "images": [{
          "height": 1460,
          "url": "https://i.scdn.co/image/f3a5a2bb529dd60a3a871a7958d395c9331679e7",
          "width": 1000
        }, {
          "height": 934,
          "url": "https://i.scdn.co/image/5cb6eb53db51c1c1e6c719cc710f0a97a957f1c7",
          "width": 640
        }, {
          "height": 292,
          "url": "https://i.scdn.co/image/900b26ff385f322240ecb702a5a6dfd31a098a3f",
          "width": 200
        }, {
          "height": 93,
          "url": "https://i.scdn.co/image/31e218c53ea578ab73a6c4120f0ce4c061dfd3ef",
          "width": 64
        }],
        "name": "Oleta Adams",
        "popularity": 51,
        "type": "artist",
        "uri": "spotify:artist:1BMb6sQJVkmUyCuodmRs2g"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0m34JtkojthW5WYugFm0e3"
        },
        "followers": {
          "href": null,
          "total": 37249
        },
        "genres": ["hopebeat", "indie rockism"],
        "href": "https://api.spotify.com/v1/artists/0m34JtkojthW5WYugFm0e3",
        "id": "0m34JtkojthW5WYugFm0e3",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebf8b218512aa9c45c0ffb1ca0",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174f8b218512aa9c45c0ffb1ca0",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178f8b218512aa9c45c0ffb1ca0",
          "width": 160
        }],
        "name": "Olen",
        "popularity": 38,
        "type": "artist",
        "uri": "spotify:artist:0m34JtkojthW5WYugFm0e3"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/50NoVNy9GU1lCrDV8iGpyu"
        },
        "followers": {
          "href": null,
          "total": 1011712
        },
        "genres": ["east coast hip hop", "hardcore hip hop", "hip hop"],
        "href": "https://api.spotify.com/v1/artists/50NoVNy9GU1lCrDV8iGpyu",
        "id": "50NoVNy9GU1lCrDV8iGpyu",
        "images": [{
          "height": 693,
          "url": "https://i.scdn.co/image/cdcf0ecd5b041452681badedca98f7d3b8494c52",
          "width": 1000
        }, {
          "height": 443,
          "url": "https://i.scdn.co/image/e3e39e2ee5b5929aed7d2b33791f0d8089217954",
          "width": 640
        }, {
          "height": 139,
          "url": "https://i.scdn.co/image/459d62eea68686dd2fe8be21173f9cd1e448eb83",
          "width": 200
        }, {
          "height": 44,
          "url": "https://i.scdn.co/image/c073d8d9f384061615625887756c771f2bab4209",
          "width": 64
        }],
        "name": "Ol' Dirty Bastard",
        "popularity": 64,
        "type": "artist",
        "uri": "spotify:artist:50NoVNy9GU1lCrDV8iGpyu"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2Z9KL8Zmqx5Sg3cd7Fldhl"
        },
        "followers": {
          "href": null,
          "total": 923182
        },
        "genres": ["german drill", "german hip hop"],
        "href": "https://api.spotify.com/v1/artists/2Z9KL8Zmqx5Sg3cd7Fldhl",
        "id": "2Z9KL8Zmqx5Sg3cd7Fldhl",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebb8cc41e9d93c4de774e77c45",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174b8cc41e9d93c4de774e77c45",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178b8cc41e9d93c4de774e77c45",
          "width": 160
        }],
        "name": "Olexesh",
        "popularity": 64,
        "type": "artist",
        "uri": "spotify:artist:2Z9KL8Zmqx5Sg3cd7Fldhl"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5DwJFJIziTFfRfVQUsMb7D"
        },
        "followers": {
          "href": null,
          "total": 2648
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/5DwJFJIziTFfRfVQUsMb7D",
        "id": "5DwJFJIziTFfRfVQUsMb7D",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb2216987957e941399e985e5a",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051742216987957e941399e985e5a",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1782216987957e941399e985e5a",
          "width": 160
        }],
        "name": "Olexy",
        "popularity": 43,
        "type": "artist",
        "uri": "spotify:artist:5DwJFJIziTFfRfVQUsMb7D"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7saBzqUvDSqREDUUWkl0rO"
        },
        "followers": {
          "href": null,
          "total": 34877
        },
        "genres": ["deep soft rock", "modern funk"],
        "href": "https://api.spotify.com/v1/artists/7saBzqUvDSqREDUUWkl0rO",
        "id": "7saBzqUvDSqREDUUWkl0rO",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27309fb472675339666c5e8cd87",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0209fb472675339666c5e8cd87",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485109fb472675339666c5e8cd87",
          "width": 64
        }],
        "name": "Ole Børud",
        "popularity": 33,
        "type": "artist",
        "uri": "spotify:artist:7saBzqUvDSqREDUUWkl0rO"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3G1r8pCwc2IwDZULk4TmFS"
        },
        "followers": {
          "href": null,
          "total": 816
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/3G1r8pCwc2IwDZULk4TmFS",
        "id": "3G1r8pCwc2IwDZULk4TmFS",
        "images": [],
        "name": "Olesya Rulin",
        "popularity": 43,
        "type": "artist",
        "uri": "spotify:artist:3G1r8pCwc2IwDZULk4TmFS"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5FKvaEKPzl3Z5n2GtxpkSp"
        },
        "followers": {
          "href": null,
          "total": 52
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/5FKvaEKPzl3Z5n2GtxpkSp",
        "id": "5FKvaEKPzl3Z5n2GtxpkSp",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273606f61db9aa1be0b47712680",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02606f61db9aa1be0b47712680",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851606f61db9aa1be0b47712680",
          "width": 64
        }],
        "name": "Ole",
        "popularity": 8,
        "type": "artist",
        "uri": "spotify:artist:5FKvaEKPzl3Z5n2GtxpkSp"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5N4JPCILHmKjyrhr97DOpG"
        },
        "followers": {
          "href": null,
          "total": 5683
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/5N4JPCILHmKjyrhr97DOpG",
        "id": "5N4JPCILHmKjyrhr97DOpG",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb4529d05f6ecb52d4f9aa9069",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051744529d05f6ecb52d4f9aa9069",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1784529d05f6ecb52d4f9aa9069",
          "width": 160
        }],
        "name": "Olexandr Ignatov",
        "popularity": 39,
        "type": "artist",
        "uri": "spotify:artist:5N4JPCILHmKjyrhr97DOpG"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7m9yK07LzbtyQCfhtNkUEd"
        },
        "followers": {
          "href": null,
          "total": 710
        },
        "genres": ["japanese chill rap"],
        "href": "https://api.spotify.com/v1/artists/7m9yK07LzbtyQCfhtNkUEd",
        "id": "7m9yK07LzbtyQCfhtNkUEd",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebd112aed79998930d14b5eef4",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174d112aed79998930d14b5eef4",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178d112aed79998930d14b5eef4",
          "width": 160
        }],
        "name": "Ole",
        "popularity": 13,
        "type": "artist",
        "uri": "spotify:artist:7m9yK07LzbtyQCfhtNkUEd"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/52EUm8vx7p9n2KGf7rBXAk"
        },
        "followers": {
          "href": null,
          "total": 178
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/52EUm8vx7p9n2KGf7rBXAk",
        "id": "52EUm8vx7p9n2KGf7rBXAk",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebdeaeff9b39ece83a261b01c7",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174deaeff9b39ece83a261b01c7",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178deaeff9b39ece83a261b01c7",
          "width": 160
        }],
        "name": "Olex Stephen",
        "popularity": 31,
        "type": "artist",
        "uri": "spotify:artist:52EUm8vx7p9n2KGf7rBXAk"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5yJUqBHmc54b05SWzuk1w4"
        },
        "followers": {
          "href": null,
          "total": 376
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/5yJUqBHmc54b05SWzuk1w4",
        "id": "5yJUqBHmc54b05SWzuk1w4",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebcee1c0487cb5b27359e0aa46",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174cee1c0487cb5b27359e0aa46",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178cee1c0487cb5b27359e0aa46",
          "width": 160
        }],
        "name": "Ole",
        "popularity": 17,
        "type": "artist",
        "uri": "spotify:artist:5yJUqBHmc54b05SWzuk1w4"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/14F3jEeosuaJHvcu2el861"
        },
        "followers": {
          "href": null,
          "total": 1754
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/14F3jEeosuaJHvcu2el861",
        "id": "14F3jEeosuaJHvcu2el861",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb1d0129b14bb3bc11b2d8416a",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051741d0129b14bb3bc11b2d8416a",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1781d0129b14bb3bc11b2d8416a",
          "width": 160
        }],
        "name": "Oleksa Lozowchuk",
        "popularity": 36,
        "type": "artist",
        "uri": "spotify:artist:14F3jEeosuaJHvcu2el861"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1a3xop7ljQNNakSQ7QZPtJ"
        },
        "followers": {
          "href": null,
          "total": 25
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/1a3xop7ljQNNakSQ7QZPtJ",
        "id": "1a3xop7ljQNNakSQ7QZPtJ",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27386dcff0291194b3b1b5b1952",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0286dcff0291194b3b1b5b1952",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485186dcff0291194b3b1b5b1952",
          "width": 64
        }],
        "name": "Ole",
        "popularity": 2,
        "type": "artist",
        "uri": "spotify:artist:1a3xop7ljQNNakSQ7QZPtJ"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5aQCrqgWkrOGdG7qb2FMVT"
        },
        "followers": {
          "href": null,
          "total": 151
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/5aQCrqgWkrOGdG7qb2FMVT",
        "id": "5aQCrqgWkrOGdG7qb2FMVT",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebb3aa1d1013852b88fe46cf0b",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174b3aa1d1013852b88fe46cf0b",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178b3aa1d1013852b88fe46cf0b",
          "width": 160
        }],
        "name": "Oleg Caetani",
        "popularity": 36,
        "type": "artist",
        "uri": "spotify:artist:5aQCrqgWkrOGdG7qb2FMVT"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5FDidrmyhbESECdXPyFZhQ"
        },
        "followers": {
          "href": null,
          "total": 255
        },
        "genres": ["talentschau"],
        "href": "https://api.spotify.com/v1/artists/5FDidrmyhbESECdXPyFZhQ",
        "id": "5FDidrmyhbESECdXPyFZhQ",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27311dd5717b6a2627d58af1c2f",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0211dd5717b6a2627d58af1c2f",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485111dd5717b6a2627d58af1c2f",
          "width": 64
        }],
        "name": "Ole",
        "popularity": 7,
        "type": "artist",
        "uri": "spotify:artist:5FDidrmyhbESECdXPyFZhQ"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2KT4MdzTYsdkG74TURBJLP"
        },
        "followers": {
          "href": null,
          "total": 356
        },
        "genres": ["ukrainian classical piano"],
        "href": "https://api.spotify.com/v1/artists/2KT4MdzTYsdkG74TURBJLP",
        "id": "2KT4MdzTYsdkG74TURBJLP",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb9780a7810918cdd8ae70b8bc",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051749780a7810918cdd8ae70b8bc",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1789780a7810918cdd8ae70b8bc",
          "width": 160
        }],
        "name": "Olena Kushpler",
        "popularity": 33,
        "type": "artist",
        "uri": "spotify:artist:2KT4MdzTYsdkG74TURBJLP"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1rpVbVai5RlsiuOsMCh8ld"
        },
        "followers": {
          "href": null,
          "total": 0
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/1rpVbVai5RlsiuOsMCh8ld",
        "id": "1rpVbVai5RlsiuOsMCh8ld",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb582a5725b0a7fa777264a730",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174582a5725b0a7fa777264a730",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178582a5725b0a7fa777264a730",
          "width": 160
        }],
        "name": "OLÉ",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:1rpVbVai5RlsiuOsMCh8ld"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/09cPATQt0ncKDtIizw6lGH"
        },
        "followers": {
          "href": null,
          "total": 5195
        },
        "genres": ["bard", "classic russian pop"],
        "href": "https://api.spotify.com/v1/artists/09cPATQt0ncKDtIizw6lGH",
        "id": "09cPATQt0ncKDtIizw6lGH",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273617c82d66eb261f80df54e18",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02617c82d66eb261f80df54e18",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851617c82d66eb261f80df54e18",
          "width": 64
        }],
        "name": "Oleg Anofriyev",
        "popularity": 39,
        "type": "artist",
        "uri": "spotify:artist:09cPATQt0ncKDtIizw6lGH"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1I4O80fPPS35J01cHmNTju"
        },
        "followers": {
          "href": null,
          "total": 9
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/1I4O80fPPS35J01cHmNTju",
        "id": "1I4O80fPPS35J01cHmNTju",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d0da81b22a52f32bbb79b3c3",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d0da81b22a52f32bbb79b3c3",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d0da81b22a52f32bbb79b3c3",
          "width": 64
        }],
        "name": "ole",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:1I4O80fPPS35J01cHmNTju"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7BjwFCiX6K7FlfVsN2uXUf"
        },
        "followers": {
          "href": null,
          "total": 1973
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/7BjwFCiX6K7FlfVsN2uXUf",
        "id": "7BjwFCiX6K7FlfVsN2uXUf",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb1612fa4313e30ac811717edc",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051741612fa4313e30ac811717edc",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1781612fa4313e30ac811717edc",
          "width": 160
        }],
        "name": "Oleksandr Chukhlib",
        "popularity": 33,
        "type": "artist",
        "uri": "spotify:artist:7BjwFCiX6K7FlfVsN2uXUf"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/71oHLPgdSmL7BMmM0EoXUA"
        },
        "followers": {
          "href": null,
          "total": 1646
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/71oHLPgdSmL7BMmM0EoXUA",
        "id": "71oHLPgdSmL7BMmM0EoXUA",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebc2727c45fd6ec84e28e80bea",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174c2727c45fd6ec84e28e80bea",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178c2727c45fd6ec84e28e80bea",
          "width": 160
        }],
        "name": "Ole",
        "popularity": 4,
        "type": "artist",
        "uri": "spotify:artist:71oHLPgdSmL7BMmM0EoXUA"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1HCdWr0KNt2DJXCvoTVrWK"
        },
        "followers": {
          "href": null,
          "total": 1313
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/1HCdWr0KNt2DJXCvoTVrWK",
        "id": "1HCdWr0KNt2DJXCvoTVrWK",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d4a2149d0b6c86a5baf97e2c",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d4a2149d0b6c86a5baf97e2c",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d4a2149d0b6c86a5baf97e2c",
          "width": 64
        }],
        "name": "Oleg Kirilkov",
        "popularity": 34,
        "type": "artist",
        "uri": "spotify:artist:1HCdWr0KNt2DJXCvoTVrWK"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3Z4Ely2Iu0JpbyXp2TjrnW"
        },
        "followers": {
          "href": null,
          "total": 970
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/3Z4Ely2Iu0JpbyXp2TjrnW",
        "id": "3Z4Ely2Iu0JpbyXp2TjrnW",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273dc45b0464cae7cf75bc5391f",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02dc45b0464cae7cf75bc5391f",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851dc45b0464cae7cf75bc5391f",
          "width": 64
        }],
        "name": "Ole",
        "popularity": 5,
        "type": "artist",
        "uri": "spotify:artist:3Z4Ely2Iu0JpbyXp2TjrnW"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5xx4TcY0hFg0p61aqxJp3L"
        },
        "followers": {
          "href": null,
          "total": 187
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/5xx4TcY0hFg0p61aqxJp3L",
        "id": "5xx4TcY0hFg0p61aqxJp3L",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb0432bc25250094735f63916d",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051740432bc25250094735f63916d",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1780432bc25250094735f63916d",
          "width": 160
        }],
        "name": "Oleg Burov",
        "popularity": 30,
        "type": "artist",
        "uri": "spotify:artist:5xx4TcY0hFg0p61aqxJp3L"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0gSBrgKldrS4btpbWT5vyQ"
        },
        "followers": {
          "href": null,
          "total": 17
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/0gSBrgKldrS4btpbWT5vyQ",
        "id": "0gSBrgKldrS4btpbWT5vyQ",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb11ed124234bd6d6d38d94df0",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab6761610000517411ed124234bd6d6d38d94df0",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f17811ed124234bd6d6d38d94df0",
          "width": 160
        }],
        "name": "Ole",
        "popularity": 4,
        "type": "artist",
        "uri": "spotify:artist:0gSBrgKldrS4btpbWT5vyQ"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2VhoK5L78oQvoUJIDT4eHY"
        },
        "followers": {
          "href": null,
          "total": 936
        },
        "genres": ["covertronica"],
        "href": "https://api.spotify.com/v1/artists/2VhoK5L78oQvoUJIDT4eHY",
        "id": "2VhoK5L78oQvoUJIDT4eHY",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb4d408a01991c608613c1ed30",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051744d408a01991c608613c1ed30",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1784d408a01991c608613c1ed30",
          "width": 160
        }],
        "name": "Oleria",
        "popularity": 44,
        "type": "artist",
        "uri": "spotify:artist:2VhoK5L78oQvoUJIDT4eHY"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6RyzQxSn4Ky2UP64t9suKQ"
        },
        "followers": {
          "href": null,
          "total": 1
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/6RyzQxSn4Ky2UP64t9suKQ",
        "id": "6RyzQxSn4Ky2UP64t9suKQ",
        "images": [],
        "name": "Ole",
        "popularity": 1,
        "type": "artist",
        "uri": "spotify:artist:6RyzQxSn4Ky2UP64t9suKQ"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0tKxkHvnDulyGf7uTy1HQK"
        },
        "followers": {
          "href": null,
          "total": 48781
        },
        "genres": ["classic russian pop", "russian pop"],
        "href": "https://api.spotify.com/v1/artists/0tKxkHvnDulyGf7uTy1HQK",
        "id": "0tKxkHvnDulyGf7uTy1HQK",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebe10609907a08f9995b91c263",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174e10609907a08f9995b91c263",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178e10609907a08f9995b91c263",
          "width": 160
        }],
        "name": "Oleg Gazmanov",
        "popularity": 38,
        "type": "artist",
        "uri": "spotify:artist:0tKxkHvnDulyGf7uTy1HQK"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7eZFjvlOQ1eRIjhpZ1K5os"
        },
        "followers": {
          "href": null,
          "total": 61
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/7eZFjvlOQ1eRIjhpZ1K5os",
        "id": "7eZFjvlOQ1eRIjhpZ1K5os",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb556af3f4f8dd6a0d81766d76",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174556af3f4f8dd6a0d81766d76",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178556af3f4f8dd6a0d81766d76",
          "width": 160
        }],
        "name": "OLE",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:7eZFjvlOQ1eRIjhpZ1K5os"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5aei1t4S0Oken8HLL5glv5"
        },
        "followers": {
          "href": null,
          "total": 24
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/5aei1t4S0Oken8HLL5glv5",
        "id": "5aei1t4S0Oken8HLL5glv5",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eba49d1bf83a2b884d8d13c893",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174a49d1bf83a2b884d8d13c893",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178a49d1bf83a2b884d8d13c893",
          "width": 160
        }],
        "name": "OlE",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:5aei1t4S0Oken8HLL5glv5"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7qHvHD5y98by1dMKGHT1kY"
        },
        "followers": {
          "href": null,
          "total": 85582
        },
        "genres": ["spanish new wave", "spanish pop", "spanish synthpop"],
        "href": "https://api.spotify.com/v1/artists/7qHvHD5y98by1dMKGHT1kY",
        "id": "7qHvHD5y98by1dMKGHT1kY",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2738b75844bfd47d6ea72690ece",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e028b75844bfd47d6ea72690ece",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048518b75844bfd47d6ea72690ece",
          "width": 64
        }],
        "name": "Ole Ole",
        "popularity": 40,
        "type": "artist",
        "uri": "spotify:artist:7qHvHD5y98by1dMKGHT1kY"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6DfVs5ii1vtCzu3X8J0qRZ"
        },
        "followers": {
          "href": null,
          "total": 0
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/6DfVs5ii1vtCzu3X8J0qRZ",
        "id": "6DfVs5ii1vtCzu3X8J0qRZ",
        "images": [],
        "name": "Ole",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:6DfVs5ii1vtCzu3X8J0qRZ"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1pURiZE9DV9cyxv7dTWYAE"
        },
        "followers": {
          "href": null,
          "total": 62
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/1pURiZE9DV9cyxv7dTWYAE",
        "id": "1pURiZE9DV9cyxv7dTWYAE",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273f4a485602fca077377e89b33",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02f4a485602fca077377e89b33",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851f4a485602fca077377e89b33",
          "width": 64
        }],
        "name": "Alexander Olennikov",
        "popularity": 46,
        "type": "artist",
        "uri": "spotify:artist:1pURiZE9DV9cyxv7dTWYAE"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4JyRoHkWZ1apwgeD6wH6xx"
        },
        "followers": {
          "href": null,
          "total": 170
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/4JyRoHkWZ1apwgeD6wH6xx",
        "id": "4JyRoHkWZ1apwgeD6wH6xx",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273616ae369002f41a3d712e562",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02616ae369002f41a3d712e562",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851616ae369002f41a3d712e562",
          "width": 64
        }],
        "name": "Ole",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:4JyRoHkWZ1apwgeD6wH6xx"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1G3F8cXP6aDZ3e94YB7spp"
        },
        "followers": {
          "href": null,
          "total": 16048
        },
        "genres": ["bard", "classic russian pop"],
        "href": "https://api.spotify.com/v1/artists/1G3F8cXP6aDZ3e94YB7spp",
        "id": "1G3F8cXP6aDZ3e94YB7spp",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb9b66095f5862a30f7f0d644e",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051749b66095f5862a30f7f0d644e",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1789b66095f5862a30f7f0d644e",
          "width": 160
        }],
        "name": "Oleg Mityaev",
        "popularity": 29,
        "type": "artist",
        "uri": "spotify:artist:1G3F8cXP6aDZ3e94YB7spp"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2ok82Qe6qmsK5uN7NmzQdk"
        },
        "followers": {
          "href": null,
          "total": 3
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/2ok82Qe6qmsK5uN7NmzQdk",
        "id": "2ok82Qe6qmsK5uN7NmzQdk",
        "images": [],
        "name": "Ole",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:2ok82Qe6qmsK5uN7NmzQdk"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6h0qX1yFST67tTRZi0YaFS"
        },
        "followers": {
          "href": null,
          "total": 31610
        },
        "genres": ["russian dance", "russian dance pop", "russian pop"],
        "href": "https://api.spotify.com/v1/artists/6h0qX1yFST67tTRZi0YaFS",
        "id": "6h0qX1yFST67tTRZi0YaFS",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb5f15d9da39c6620d9d5dcf8f",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051745f15d9da39c6620d9d5dcf8f",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1785f15d9da39c6620d9d5dcf8f",
          "width": 160
        }],
        "name": "Oleg Miami",
        "popularity": 38,
        "type": "artist",
        "uri": "spotify:artist:6h0qX1yFST67tTRZi0YaFS"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3yZ5hw5RcF97EbseDE45tb"
        },
        "followers": {
          "href": null,
          "total": 19
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/3yZ5hw5RcF97EbseDE45tb",
        "id": "3yZ5hw5RcF97EbseDE45tb",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb8a13a44f960c9fb904c9cf5d",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051748a13a44f960c9fb904c9cf5d",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1788a13a44f960c9fb904c9cf5d",
          "width": 160
        }],
        "name": "olé",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:3yZ5hw5RcF97EbseDE45tb"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1cLnJI3RJwDH9Gt2CTM0zY"
        },
        "followers": {
          "href": null,
          "total": 1512
        },
        "genres": ["norwegian classical"],
        "href": "https://api.spotify.com/v1/artists/1cLnJI3RJwDH9Gt2CTM0zY",
        "id": "1cLnJI3RJwDH9Gt2CTM0zY",
        "images": [{
          "height": 1000,
          "url": "https://i.scdn.co/image/5e55a668efad920aeb1b1f416ea4a5f3da005621",
          "width": 1000
        }, {
          "height": 640,
          "url": "https://i.scdn.co/image/80699c33d934b07e1b398c0f5101768dfbde0054",
          "width": 640
        }, {
          "height": 200,
          "url": "https://i.scdn.co/image/7f958521a3a1cc5f921a6b6141cb26e1c3b0d109",
          "width": 200
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/95c27d9fdbfc24778c4dce28f388fb424eb2b09c",
          "width": 64
        }],
        "name": "Ole Bull",
        "popularity": 26,
        "type": "artist",
        "uri": "spotify:artist:1cLnJI3RJwDH9Gt2CTM0zY"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4SDLSIkjWslpVR64PDntle"
        },
        "followers": {
          "href": null,
          "total": 8
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/4SDLSIkjWslpVR64PDntle",
        "id": "4SDLSIkjWslpVR64PDntle",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb49479fe928c051f6db9615d6",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab6761610000517449479fe928c051f6db9615d6",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f17849479fe928c051f6db9615d6",
          "width": 160
        }],
        "name": "OLE",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:4SDLSIkjWslpVR64PDntle"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6e8OnFLQi4iMkpLh9vbGZZ"
        },
        "followers": {
          "href": null,
          "total": 5960
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/6e8OnFLQi4iMkpLh9vbGZZ",
        "id": "6e8OnFLQi4iMkpLh9vbGZZ",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb593bc0d5cd207ae47367d54a",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174593bc0d5cd207ae47367d54a",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178593bc0d5cd207ae47367d54a",
          "width": 160
        }],
        "name": "Ole Jørgensen",
        "popularity": 20,
        "type": "artist",
        "uri": "spotify:artist:6e8OnFLQi4iMkpLh9vbGZZ"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3hN6SOHR8ZFxce6Wemnjm9"
        },
        "followers": {
          "href": null,
          "total": 5
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/3hN6SOHR8ZFxce6Wemnjm9",
        "id": "3hN6SOHR8ZFxce6Wemnjm9",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2730491d08856ceddf031c10cc4",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e020491d08856ceddf031c10cc4",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048510491d08856ceddf031c10cc4",
          "width": 64
        }],
        "name": "OLE",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:3hN6SOHR8ZFxce6Wemnjm9"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4aXja3fAUHCtIr2H4geJzD"
        },
        "followers": {
          "href": null,
          "total": 27070
        },
        "genres": ["russian dance"],
        "href": "https://api.spotify.com/v1/artists/4aXja3fAUHCtIr2H4geJzD",
        "id": "4aXja3fAUHCtIr2H4geJzD",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebf48fd73ac36d9bd9a32fe611",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174f48fd73ac36d9bd9a32fe611",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178f48fd73ac36d9bd9a32fe611",
          "width": 160
        }],
        "name": "Oleg Kenzov",
        "popularity": 35,
        "type": "artist",
        "uri": "spotify:artist:4aXja3fAUHCtIr2H4geJzD"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0b3PZhMdpiOA9K43Cypd5L"
        },
        "followers": {
          "href": null,
          "total": 3
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/0b3PZhMdpiOA9K43Cypd5L",
        "id": "0b3PZhMdpiOA9K43Cypd5L",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb9978134598af51cfe1769bd4",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051749978134598af51cfe1769bd4",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1789978134598af51cfe1769bd4",
          "width": 160
        }],
        "name": "Ole",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:0b3PZhMdpiOA9K43Cypd5L"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0K8TKuQQiLgtlhKzFK62sd"
        },
        "followers": {
          "href": null,
          "total": 415
        },
        "genres": ["detskie rasskazy"],
        "href": "https://api.spotify.com/v1/artists/0K8TKuQQiLgtlhKzFK62sd",
        "id": "0K8TKuQQiLgtlhKzFK62sd",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273605690570ae6b29f4eef3bef",
          "width": 640
        }, {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02605690570ae6b29f4eef3bef",
          "width": 300
        }, {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048517c52a2b80dd37ccbd8ce007d",
          "width": 64
        }],
        "name": "Oleg Tabakov",
        "popularity": 31,
        "type": "artist",
        "uri": "spotify:artist:0K8TKuQQiLgtlhKzFK62sd"
      }, {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/31ViSzGwajnOxlSE6WzTAW"
        },
        "followers": {
          "href": null,
          "total": 88
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/31ViSzGwajnOxlSE6WzTAW",
        "id": "31ViSzGwajnOxlSE6WzTAW",
        "images": [{
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb712a490903818cba6d000059",
          "width": 640
        }, {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174712a490903818cba6d000059",
          "width": 320
        }, {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178712a490903818cba6d000059",
          "width": 160
        }],
        "name": "ole",
        "popularity": 0,
        "type": "artist",
        "uri": "spotify:artist:31ViSzGwajnOxlSE6WzTAW"
      }],
      "limit": 50,
      "next": "https://api.spotify.com/v1/search?query=ole&type=artist&offset=50&limit=50",
      "offset": 0,
      "previous": null,
      "total": 1000
    },
    "tracks": {
      "href": "https://api.spotify.com/v1/search?query=ole&type=track&offset=0&limit=50",
      "items": [{
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1UTPBmNbXNTittyMJrNkvw"
            },
            "href": "https://api.spotify.com/v1/artists/1UTPBmNbXNTittyMJrNkvw",
            "id": "1UTPBmNbXNTittyMJrNkvw",
            "name": "Blake Shelton",
            "type": "artist",
            "uri": "spotify:artist:1UTPBmNbXNTittyMJrNkvw"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GD", "GW", "HT", "JM", "LS", "LR", "MW", "ML", "FM", "NA", "NE", "PG", "SM", "ST", "SN", "SC", "SL", "KN", "LC", "VC", "TL", "TT", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4BRHk20nhD24APuvO9PvC8"
          },
          "href": "https://api.spotify.com/v1/albums/4BRHk20nhD24APuvO9PvC8",
          "id": "4BRHk20nhD24APuvO9PvC8",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731716c34342160479d07aef9c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021716c34342160479d07aef9c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511716c34342160479d07aef9c",
            "width": 64
          }],
          "name": "Blake Shelton",
          "release_date": "2001-07-31",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:4BRHk20nhD24APuvO9PvC8"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1UTPBmNbXNTittyMJrNkvw"
          },
          "href": "https://api.spotify.com/v1/artists/1UTPBmNbXNTittyMJrNkvw",
          "id": "1UTPBmNbXNTittyMJrNkvw",
          "name": "Blake Shelton",
          "type": "artist",
          "uri": "spotify:artist:1UTPBmNbXNTittyMJrNkvw"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GD", "GW", "HT", "JM", "LS", "LR", "MW", "ML", "FM", "NA", "NE", "PG", "SM", "ST", "SN", "SC", "SL", "KN", "LC", "VC", "TL", "TT", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 221266,
        "explicit": false,
        "external_ids": {
          "isrc": "USGI10000132"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5wane5dFpp8xgriui6y0c7"
        },
        "href": "https://api.spotify.com/v1/tracks/5wane5dFpp8xgriui6y0c7",
        "id": "5wane5dFpp8xgriui6y0c7",
        "is_local": false,
        "name": "Ol' Red",
        "popularity": 67,
        "preview_url": "https://p.scdn.co/mp3-preview/60d936a6fa435c7c5f3503a16258844bea4f9014?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:5wane5dFpp8xgriui6y0c7"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0e86yPdC41PGRkLp2Q1Bph"
            },
            "href": "https://api.spotify.com/v1/artists/0e86yPdC41PGRkLp2Q1Bph",
            "id": "0e86yPdC41PGRkLp2Q1Bph",
            "name": "Mother Mother",
            "type": "artist",
            "uri": "spotify:artist:0e86yPdC41PGRkLp2Q1Bph"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3ZUS8xzEYnqstEf4lHSeVe"
          },
          "href": "https://api.spotify.com/v1/albums/3ZUS8xzEYnqstEf4lHSeVe",
          "id": "3ZUS8xzEYnqstEf4lHSeVe",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273a966e24dd07fcb269976a430",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02a966e24dd07fcb269976a430",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851a966e24dd07fcb269976a430",
            "width": 64
          }],
          "name": "Eureka",
          "release_date": "2011-03-15",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:3ZUS8xzEYnqstEf4lHSeVe"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0e86yPdC41PGRkLp2Q1Bph"
          },
          "href": "https://api.spotify.com/v1/artists/0e86yPdC41PGRkLp2Q1Bph",
          "id": "0e86yPdC41PGRkLp2Q1Bph",
          "name": "Mother Mother",
          "type": "artist",
          "uri": "spotify:artist:0e86yPdC41PGRkLp2Q1Bph"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 200600,
        "explicit": false,
        "external_ids": {
          "isrc": "CAL451028711"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3hNy5TMbsmBVv4MmV2hdy7"
        },
        "href": "https://api.spotify.com/v1/tracks/3hNy5TMbsmBVv4MmV2hdy7",
        "id": "3hNy5TMbsmBVv4MmV2hdy7",
        "is_local": false,
        "name": "Oleander",
        "popularity": 56,
        "preview_url": "https://p.scdn.co/mp3-preview/7db69957fe3f2b6821bf90d2229e38ab453f7fea?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 11,
        "type": "track",
        "uri": "spotify:track:3hNy5TMbsmBVv4MmV2hdy7"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3iXeAZ8862AyoZ5ZGg800O"
            },
            "href": "https://api.spotify.com/v1/artists/3iXeAZ8862AyoZ5ZGg800O",
            "id": "3iXeAZ8862AyoZ5ZGg800O",
            "name": "Ole 60",
            "type": "artist",
            "uri": "spotify:artist:3iXeAZ8862AyoZ5ZGg800O"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1KTvTGon7YPfnAAEGnSHBc"
          },
          "href": "https://api.spotify.com/v1/albums/1KTvTGon7YPfnAAEGnSHBc",
          "id": "1KTvTGon7YPfnAAEGnSHBc",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bae1c1d3921d9424b041ca49",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bae1c1d3921d9424b041ca49",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bae1c1d3921d9424b041ca49",
            "width": 64
          }],
          "name": "three twenty four",
          "release_date": "2023-08-29",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:1KTvTGon7YPfnAAEGnSHBc"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3iXeAZ8862AyoZ5ZGg800O"
          },
          "href": "https://api.spotify.com/v1/artists/3iXeAZ8862AyoZ5ZGg800O",
          "id": "3iXeAZ8862AyoZ5ZGg800O",
          "name": "Ole 60",
          "type": "artist",
          "uri": "spotify:artist:3iXeAZ8862AyoZ5ZGg800O"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 189048,
        "explicit": false,
        "external_ids": {
          "isrc": "QZRP52336489"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1QvDl9tBq6PsMVE7Bf2ZOV"
        },
        "href": "https://api.spotify.com/v1/tracks/1QvDl9tBq6PsMVE7Bf2ZOV",
        "id": "1QvDl9tBq6PsMVE7Bf2ZOV",
        "is_local": false,
        "name": "smoke & a light",
        "popularity": 58,
        "preview_url": "https://p.scdn.co/mp3-preview/a90001500df6f4b33d387d146e858983d267e520?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:1QvDl9tBq6PsMVE7Bf2ZOV"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1ybINI1qPiFbwDXamRtwxD"
            },
            "href": "https://api.spotify.com/v1/artists/1ybINI1qPiFbwDXamRtwxD",
            "id": "1ybINI1qPiFbwDXamRtwxD",
            "name": "Smino",
            "type": "artist",
            "uri": "spotify:artist:1ybINI1qPiFbwDXamRtwxD"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6dtDTbVBQ9QwsNaqEnjsOT"
          },
          "href": "https://api.spotify.com/v1/albums/6dtDTbVBQ9QwsNaqEnjsOT",
          "id": "6dtDTbVBQ9QwsNaqEnjsOT",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273d7bae4ad0b91f65e0dd910c8",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02d7bae4ad0b91f65e0dd910c8",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851d7bae4ad0b91f65e0dd910c8",
            "width": 64
          }],
          "name": "Luv 4 Rent",
          "release_date": "2022-10-28",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:6dtDTbVBQ9QwsNaqEnjsOT"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1ybINI1qPiFbwDXamRtwxD"
          },
          "href": "https://api.spotify.com/v1/artists/1ybINI1qPiFbwDXamRtwxD",
          "id": "1ybINI1qPiFbwDXamRtwxD",
          "name": "Smino",
          "type": "artist",
          "uri": "spotify:artist:1ybINI1qPiFbwDXamRtwxD"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 143640,
        "explicit": true,
        "external_ids": {
          "isrc": "USUG12207597"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2qApuf4yp1c6sTMj9BJ8bo"
        },
        "href": "https://api.spotify.com/v1/tracks/2qApuf4yp1c6sTMj9BJ8bo",
        "id": "2qApuf4yp1c6sTMj9BJ8bo",
        "is_local": false,
        "name": "Ole Ass Kendrick",
        "popularity": 53,
        "preview_url": null,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:2qApuf4yp1c6sTMj9BJ8bo"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6099nBykoBLimTjVIETAHR"
            },
            "href": "https://api.spotify.com/v1/artists/6099nBykoBLimTjVIETAHR",
            "id": "6099nBykoBLimTjVIETAHR",
            "name": "Fans and Supporters",
            "type": "artist",
            "uri": "spotify:artist:6099nBykoBLimTjVIETAHR"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0aDt2Sikq5beMv9o9OuArH"
          },
          "href": "https://api.spotify.com/v1/albums/0aDt2Sikq5beMv9o9OuArH",
          "id": "0aDt2Sikq5beMv9o9OuArH",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27335d7e9cf8e0890f00c346747",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0235d7e9cf8e0890f00c346747",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485135d7e9cf8e0890f00c346747",
            "width": 64
          }],
          "name": "The Greatest World Cup Football Anthems",
          "release_date": "2022-09-23",
          "release_date_precision": "day",
          "total_tracks": 21,
          "type": "album",
          "uri": "spotify:album:0aDt2Sikq5beMv9o9OuArH"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6099nBykoBLimTjVIETAHR"
          },
          "href": "https://api.spotify.com/v1/artists/6099nBykoBLimTjVIETAHR",
          "id": "6099nBykoBLimTjVIETAHR",
          "name": "Fans and Supporters",
          "type": "artist",
          "uri": "spotify:artist:6099nBykoBLimTjVIETAHR"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1O98dc21hBlnURY68qh5bk"
          },
          "href": "https://api.spotify.com/v1/artists/1O98dc21hBlnURY68qh5bk",
          "id": "1O98dc21hBlnURY68qh5bk",
          "name": "DJ Kane",
          "type": "artist",
          "uri": "spotify:artist:1O98dc21hBlnURY68qh5bk"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 186866,
        "explicit": false,
        "external_ids": {
          "isrc": "UKW3Z2201967"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/40h0TtkYnudiBBkWZomokb"
        },
        "href": "https://api.spotify.com/v1/tracks/40h0TtkYnudiBBkWZomokb",
        "id": "40h0TtkYnudiBBkWZomokb",
        "is_local": false,
        "name": "Ole Ole Ole",
        "popularity": 29,
        "preview_url": "https://p.scdn.co/mp3-preview/83e264768867df1b1be9d13c59b8b14795fd3a4e?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:40h0TtkYnudiBBkWZomokb"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2oTW5kYNj4eIgp68Z5W4D9"
            },
            "href": "https://api.spotify.com/v1/artists/2oTW5kYNj4eIgp68Z5W4D9",
            "id": "2oTW5kYNj4eIgp68Z5W4D9",
            "name": "hannah bahng",
            "type": "artist",
            "uri": "spotify:artist:2oTW5kYNj4eIgp68Z5W4D9"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/09JlCYQ9z7cCoFoBQMqUN7"
          },
          "href": "https://api.spotify.com/v1/albums/09JlCYQ9z7cCoFoBQMqUN7",
          "id": "09JlCYQ9z7cCoFoBQMqUN7",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731ccae05cfc0a4def5804bb60",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021ccae05cfc0a4def5804bb60",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511ccae05cfc0a4def5804bb60",
            "width": 64
          }],
          "name": "perfect blues",
          "release_date": "2023-07-14",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:09JlCYQ9z7cCoFoBQMqUN7"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2oTW5kYNj4eIgp68Z5W4D9"
          },
          "href": "https://api.spotify.com/v1/artists/2oTW5kYNj4eIgp68Z5W4D9",
          "id": "2oTW5kYNj4eIgp68Z5W4D9",
          "name": "hannah bahng",
          "type": "artist",
          "uri": "spotify:artist:2oTW5kYNj4eIgp68Z5W4D9"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 175666,
        "explicit": true,
        "external_ids": {
          "isrc": "QZY6N2300002"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2AGa0N0dDwpi50w58BIMe7"
        },
        "href": "https://api.spotify.com/v1/tracks/2AGa0N0dDwpi50w58BIMe7",
        "id": "2AGa0N0dDwpi50w58BIMe7",
        "is_local": false,
        "name": "OLeander",
        "popularity": 57,
        "preview_url": "https://p.scdn.co/mp3-preview/25b3d20048ebc98578c469d7f606560c3441a3c2?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:2AGa0N0dDwpi50w58BIMe7"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0ZvsEkINadmEV4qzS4ollh"
            },
            "href": "https://api.spotify.com/v1/artists/0ZvsEkINadmEV4qzS4ollh",
            "id": "0ZvsEkINadmEV4qzS4ollh",
            "name": "Qing Madi",
            "type": "artist",
            "uri": "spotify:artist:0ZvsEkINadmEV4qzS4ollh"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3zaDigUwjHvjOkSn0NDf9x"
            },
            "href": "https://api.spotify.com/v1/artists/3zaDigUwjHvjOkSn0NDf9x",
            "id": "3zaDigUwjHvjOkSn0NDf9x",
            "name": "Bnxn",
            "type": "artist",
            "uri": "spotify:artist:3zaDigUwjHvjOkSn0NDf9x"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1ob2YtI9F9r54JXKXt7lhX"
          },
          "href": "https://api.spotify.com/v1/albums/1ob2YtI9F9r54JXKXt7lhX",
          "id": "1ob2YtI9F9r54JXKXt7lhX",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27314aa80a73e4ea58f6b06d620",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0214aa80a73e4ea58f6b06d620",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485114aa80a73e4ea58f6b06d620",
            "width": 64
          }],
          "name": "Ole",
          "release_date": "2023-07-21",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:1ob2YtI9F9r54JXKXt7lhX"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0ZvsEkINadmEV4qzS4ollh"
          },
          "href": "https://api.spotify.com/v1/artists/0ZvsEkINadmEV4qzS4ollh",
          "id": "0ZvsEkINadmEV4qzS4ollh",
          "name": "Qing Madi",
          "type": "artist",
          "uri": "spotify:artist:0ZvsEkINadmEV4qzS4ollh"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3zaDigUwjHvjOkSn0NDf9x"
          },
          "href": "https://api.spotify.com/v1/artists/3zaDigUwjHvjOkSn0NDf9x",
          "id": "3zaDigUwjHvjOkSn0NDf9x",
          "name": "Bnxn",
          "type": "artist",
          "uri": "spotify:artist:3zaDigUwjHvjOkSn0NDf9x"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 170000,
        "explicit": false,
        "external_ids": {
          "isrc": "USQX92304282"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7onM6Fbiu7ufnMQnbd5oZJ"
        },
        "href": "https://api.spotify.com/v1/tracks/7onM6Fbiu7ufnMQnbd5oZJ",
        "id": "7onM6Fbiu7ufnMQnbd5oZJ",
        "is_local": false,
        "name": "Ole (feat. BNXN)",
        "popularity": 64,
        "preview_url": "https://p.scdn.co/mp3-preview/af909b71d2bddfbca0f8af5ac7cb7457e4c7c256?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7onM6Fbiu7ufnMQnbd5oZJ"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7zpvy5B9gb5KprNUzNCOEE"
            },
            "href": "https://api.spotify.com/v1/artists/7zpvy5B9gb5KprNUzNCOEE",
            "id": "7zpvy5B9gb5KprNUzNCOEE",
            "name": "Miel San Marcos",
            "type": "artist",
            "uri": "spotify:artist:7zpvy5B9gb5KprNUzNCOEE"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3tGDxfvq1cBSlBFr302jMU"
          },
          "href": "https://api.spotify.com/v1/albums/3tGDxfvq1cBSlBFr302jMU",
          "id": "3tGDxfvq1cBSlBFr302jMU",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ccae232fe2441a4f7aa60429",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ccae232fe2441a4f7aa60429",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ccae232fe2441a4f7aa60429",
            "width": 64
          }],
          "name": "Proezas",
          "release_date": "2012-11-10",
          "release_date_precision": "day",
          "total_tracks": 21,
          "type": "album",
          "uri": "spotify:album:3tGDxfvq1cBSlBFr302jMU"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7zpvy5B9gb5KprNUzNCOEE"
          },
          "href": "https://api.spotify.com/v1/artists/7zpvy5B9gb5KprNUzNCOEE",
          "id": "7zpvy5B9gb5KprNUzNCOEE",
          "name": "Miel San Marcos",
          "type": "artist",
          "uri": "spotify:artist:7zpvy5B9gb5KprNUzNCOEE"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2CbtwylZWjiihnTSvxWCZw"
          },
          "href": "https://api.spotify.com/v1/artists/2CbtwylZWjiihnTSvxWCZw",
          "id": "2CbtwylZWjiihnTSvxWCZw",
          "name": "Ovidio Barrios",
          "type": "artist",
          "uri": "spotify:artist:2CbtwylZWjiihnTSvxWCZw"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 101866,
        "explicit": false,
        "external_ids": {
          "isrc": "TCABK1237725"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/56W5sxRrdEjCgAO0ZrWWVK"
        },
        "href": "https://api.spotify.com/v1/tracks/56W5sxRrdEjCgAO0ZrWWVK",
        "id": "56W5sxRrdEjCgAO0ZrWWVK",
        "is_local": false,
        "name": "Óleo De Alegría (feat. Ovidio Barrios)",
        "popularity": 56,
        "preview_url": "https://p.scdn.co/mp3-preview/63f1fc1d15c052c9586176075b06c4e5775ae0f9?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:56W5sxRrdEjCgAO0ZrWWVK"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
            },
            "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
            "id": "0TnOYISbd1XYRBk9myaseg",
            "name": "Pitbull",
            "type": "artist",
            "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4EUf4YyNjuXypWY6W5wEDm"
          },
          "href": "https://api.spotify.com/v1/albums/4EUf4YyNjuXypWY6W5wEDm",
          "id": "4EUf4YyNjuXypWY6W5wEDm",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731e340d1480e7bb29a45e3bd7",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021e340d1480e7bb29a45e3bd7",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511e340d1480e7bb29a45e3bd7",
            "width": 64
          }],
          "name": "Globalization",
          "release_date": "2014-11-21",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:4EUf4YyNjuXypWY6W5wEDm"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
          },
          "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
          "id": "0TnOYISbd1XYRBk9myaseg",
          "name": "Pitbull",
          "type": "artist",
          "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2DlGxzQSjYe5N6G9nkYghR"
          },
          "href": "https://api.spotify.com/v1/artists/2DlGxzQSjYe5N6G9nkYghR",
          "id": "2DlGxzQSjYe5N6G9nkYghR",
          "name": "Jennifer Lopez",
          "type": "artist",
          "uri": "spotify:artist:2DlGxzQSjYe5N6G9nkYghR"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2OjoIDVPQKT9B7loZbPEfp"
          },
          "href": "https://api.spotify.com/v1/artists/2OjoIDVPQKT9B7loZbPEfp",
          "id": "2OjoIDVPQKT9B7loZbPEfp",
          "name": "Claudia Leitte",
          "type": "artist",
          "uri": "spotify:artist:2OjoIDVPQKT9B7loZbPEfp"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 222520,
        "explicit": false,
        "external_ids": {
          "isrc": "USRC11400285"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1PCvKFPWnTXAe2oaReVUcr"
        },
        "href": "https://api.spotify.com/v1/tracks/1PCvKFPWnTXAe2oaReVUcr",
        "id": "1PCvKFPWnTXAe2oaReVUcr",
        "is_local": false,
        "name": "We Are One (Ole Ola) [The Official 2014 FIFA World Cup Song] (feat. Jennifer Lopez & Claudia Leitte)",
        "popularity": 74,
        "preview_url": "https://p.scdn.co/mp3-preview/1eab08cf70c31ca1ba3d8d63f67cca536086118a?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 11,
        "type": "track",
        "uri": "spotify:track:1PCvKFPWnTXAe2oaReVUcr"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7B4hKK0S9QYnaoqa9OuwgX"
            },
            "href": "https://api.spotify.com/v1/artists/7B4hKK0S9QYnaoqa9OuwgX",
            "id": "7B4hKK0S9QYnaoqa9OuwgX",
            "name": "Eazy-E",
            "type": "artist",
            "uri": "spotify:artist:7B4hKK0S9QYnaoqa9OuwgX"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/57q7XUCfH3DU0J9sohwaDJ"
          },
          "href": "https://api.spotify.com/v1/albums/57q7XUCfH3DU0J9sohwaDJ",
          "id": "57q7XUCfH3DU0J9sohwaDJ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27302b40ead55ae84ecafab65dd",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0202b40ead55ae84ecafab65dd",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485102b40ead55ae84ecafab65dd",
            "width": 64
          }],
          "name": "Str8 off Tha Streetz of Muthaphukkin Compton",
          "release_date": "1996-01-30",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:57q7XUCfH3DU0J9sohwaDJ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7B4hKK0S9QYnaoqa9OuwgX"
          },
          "href": "https://api.spotify.com/v1/artists/7B4hKK0S9QYnaoqa9OuwgX",
          "id": "7B4hKK0S9QYnaoqa9OuwgX",
          "name": "Eazy-E",
          "type": "artist",
          "uri": "spotify:artist:7B4hKK0S9QYnaoqa9OuwgX"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4kf7SKmUMiNmNvPgV9Uncb"
          },
          "href": "https://api.spotify.com/v1/artists/4kf7SKmUMiNmNvPgV9Uncb",
          "id": "4kf7SKmUMiNmNvPgV9Uncb",
          "name": "Gangsta Dresta",
          "type": "artist",
          "uri": "spotify:artist:4kf7SKmUMiNmNvPgV9Uncb"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0gwtYWiJ1xK3wfDvkEWwad"
          },
          "href": "https://api.spotify.com/v1/artists/0gwtYWiJ1xK3wfDvkEWwad",
          "id": "0gwtYWiJ1xK3wfDvkEWwad",
          "name": "B.G. Knocc Out",
          "type": "artist",
          "uri": "spotify:artist:0gwtYWiJ1xK3wfDvkEWwad"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5DNDRWUULP2I2HbyWE5kog"
          },
          "href": "https://api.spotify.com/v1/artists/5DNDRWUULP2I2HbyWE5kog",
          "id": "5DNDRWUULP2I2HbyWE5kog",
          "name": "Sylk",
          "type": "artist",
          "uri": "spotify:artist:5DNDRWUULP2I2HbyWE5kog"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 240880,
        "explicit": true,
        "external_ids": {
          "isrc": "US23S9833102"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2xPWZ3yqoFmTkxlL2FlzNx"
        },
        "href": "https://api.spotify.com/v1/tracks/2xPWZ3yqoFmTkxlL2FlzNx",
        "id": "2xPWZ3yqoFmTkxlL2FlzNx",
        "is_local": false,
        "name": "Ole School Shit (feat. Gangsta Dresta, B.G. Knocc Out & Sylk)",
        "popularity": 47,
        "preview_url": "https://p.scdn.co/mp3-preview/f3a702218388bcba7774c237f7b88d116a6a0083?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:2xPWZ3yqoFmTkxlL2FlzNx"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3mvTAjG7rcyk7DQzLwauzV"
            },
            "href": "https://api.spotify.com/v1/artists/3mvTAjG7rcyk7DQzLwauzV",
            "id": "3mvTAjG7rcyk7DQzLwauzV",
            "name": "The Bouncing Souls",
            "type": "artist",
            "uri": "spotify:artist:3mvTAjG7rcyk7DQzLwauzV"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/56CbFyDsG65LI1Eoh7hsOT"
          },
          "href": "https://api.spotify.com/v1/albums/56CbFyDsG65LI1Eoh7hsOT",
          "id": "56CbFyDsG65LI1Eoh7hsOT",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c5c27a0c632634cc6247dfb9",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c5c27a0c632634cc6247dfb9",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c5c27a0c632634cc6247dfb9",
            "width": 64
          }],
          "name": "Hopeless Romantic",
          "release_date": "1999-05-04",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:56CbFyDsG65LI1Eoh7hsOT"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3mvTAjG7rcyk7DQzLwauzV"
          },
          "href": "https://api.spotify.com/v1/artists/3mvTAjG7rcyk7DQzLwauzV",
          "id": "3mvTAjG7rcyk7DQzLwauzV",
          "name": "The Bouncing Souls",
          "type": "artist",
          "uri": "spotify:artist:3mvTAjG7rcyk7DQzLwauzV"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 184293,
        "explicit": false,
        "external_ids": {
          "isrc": "USEP40343309"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2McQQA5nCLVL0XvzcxWhFC"
        },
        "href": "https://api.spotify.com/v1/tracks/2McQQA5nCLVL0XvzcxWhFC",
        "id": "2McQQA5nCLVL0XvzcxWhFC",
        "is_local": false,
        "name": "Ole",
        "popularity": 42,
        "preview_url": "https://p.scdn.co/mp3-preview/83ead1f2508413cf652003ba977dc8d79198a73f?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:2McQQA5nCLVL0XvzcxWhFC"
      }, {
        "album": {
          "album_type": "compilation",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7B4hKK0S9QYnaoqa9OuwgX"
            },
            "href": "https://api.spotify.com/v1/artists/7B4hKK0S9QYnaoqa9OuwgX",
            "id": "7B4hKK0S9QYnaoqa9OuwgX",
            "name": "Eazy-E",
            "type": "artist",
            "uri": "spotify:artist:7B4hKK0S9QYnaoqa9OuwgX"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/63e4jpPrJzjGsTxM4QOOFb"
          },
          "href": "https://api.spotify.com/v1/albums/63e4jpPrJzjGsTxM4QOOFb",
          "id": "63e4jpPrJzjGsTxM4QOOFb",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273298c8b57e26b95bf2cd822b6",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02298c8b57e26b95bf2cd822b6",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851298c8b57e26b95bf2cd822b6",
            "width": 64
          }],
          "name": "Gangsta Memorial",
          "release_date": "2007-01-01",
          "release_date_precision": "day",
          "total_tracks": 17,
          "type": "album",
          "uri": "spotify:album:63e4jpPrJzjGsTxM4QOOFb"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7B4hKK0S9QYnaoqa9OuwgX"
          },
          "href": "https://api.spotify.com/v1/artists/7B4hKK0S9QYnaoqa9OuwgX",
          "id": "7B4hKK0S9QYnaoqa9OuwgX",
          "name": "Eazy-E",
          "type": "artist",
          "uri": "spotify:artist:7B4hKK0S9QYnaoqa9OuwgX"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 242106,
        "explicit": true,
        "external_ids": {
          "isrc": "USNPD0500340"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5ZPzHLzi0ohJbMAKkJ8APZ"
        },
        "href": "https://api.spotify.com/v1/tracks/5ZPzHLzi0ohJbMAKkJ8APZ",
        "id": "5ZPzHLzi0ohJbMAKkJ8APZ",
        "is_local": false,
        "name": "Ole School Shit",
        "popularity": 52,
        "preview_url": null,
        "track_number": 16,
        "type": "track",
        "uri": "spotify:track:5ZPzHLzi0ohJbMAKkJ8APZ"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6LoYm8FA3XDdBH6Nq6zeFt"
            },
            "href": "https://api.spotify.com/v1/artists/6LoYm8FA3XDdBH6Nq6zeFt",
            "id": "6LoYm8FA3XDdBH6Nq6zeFt",
            "name": "Kempo",
            "type": "artist",
            "uri": "spotify:artist:6LoYm8FA3XDdBH6Nq6zeFt"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6EnOmSg5QzDn3yDo81IaCV"
          },
          "href": "https://api.spotify.com/v1/albums/6EnOmSg5QzDn3yDo81IaCV",
          "id": "6EnOmSg5QzDn3yDo81IaCV",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27386cf7c1fb4457c3efdc0b970",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0286cf7c1fb4457c3efdc0b970",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485186cf7c1fb4457c3efdc0b970",
            "width": 64
          }],
          "name": "Oleku",
          "release_date": "2024-01-26",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:6EnOmSg5QzDn3yDo81IaCV"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6LoYm8FA3XDdBH6Nq6zeFt"
          },
          "href": "https://api.spotify.com/v1/artists/6LoYm8FA3XDdBH6Nq6zeFt",
          "id": "6LoYm8FA3XDdBH6Nq6zeFt",
          "name": "Kempo",
          "type": "artist",
          "uri": "spotify:artist:6LoYm8FA3XDdBH6Nq6zeFt"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 150752,
        "explicit": true,
        "external_ids": {
          "isrc": "QZ5FN2444777"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3N7qkbUxEPUwqFyDLBqxRb"
        },
        "href": "https://api.spotify.com/v1/tracks/3N7qkbUxEPUwqFyDLBqxRb",
        "id": "3N7qkbUxEPUwqFyDLBqxRb",
        "is_local": false,
        "name": "Oleku",
        "popularity": 45,
        "preview_url": "https://p.scdn.co/mp3-preview/a28e511412be3fbcf9507759c5bb46a837193872?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3N7qkbUxEPUwqFyDLBqxRb"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3iXeAZ8862AyoZ5ZGg800O"
            },
            "href": "https://api.spotify.com/v1/artists/3iXeAZ8862AyoZ5ZGg800O",
            "id": "3iXeAZ8862AyoZ5ZGg800O",
            "name": "Ole 60",
            "type": "artist",
            "uri": "spotify:artist:3iXeAZ8862AyoZ5ZGg800O"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1KTvTGon7YPfnAAEGnSHBc"
          },
          "href": "https://api.spotify.com/v1/albums/1KTvTGon7YPfnAAEGnSHBc",
          "id": "1KTvTGon7YPfnAAEGnSHBc",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bae1c1d3921d9424b041ca49",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bae1c1d3921d9424b041ca49",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bae1c1d3921d9424b041ca49",
            "width": 64
          }],
          "name": "three twenty four",
          "release_date": "2023-08-29",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:1KTvTGon7YPfnAAEGnSHBc"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3iXeAZ8862AyoZ5ZGg800O"
          },
          "href": "https://api.spotify.com/v1/artists/3iXeAZ8862AyoZ5ZGg800O",
          "id": "3iXeAZ8862AyoZ5ZGg800O",
          "name": "Ole 60",
          "type": "artist",
          "uri": "spotify:artist:3iXeAZ8862AyoZ5ZGg800O"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 245928,
        "explicit": true,
        "external_ids": {
          "isrc": "QZRP52336487"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3TL32j8ZM0oXiyZlWdTHdp"
        },
        "href": "https://api.spotify.com/v1/tracks/3TL32j8ZM0oXiyZlWdTHdp",
        "id": "3TL32j8ZM0oXiyZlWdTHdp",
        "is_local": false,
        "name": "walls",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/47a10b601f191baf173ae67abae4c57487418311?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3TL32j8ZM0oXiyZlWdTHdp"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3gnDrRehqMUXOrKU6mBUOe"
            },
            "href": "https://api.spotify.com/v1/artists/3gnDrRehqMUXOrKU6mBUOe",
            "id": "3gnDrRehqMUXOrKU6mBUOe",
            "name": "808Riot",
            "type": "artist",
            "uri": "spotify:artist:3gnDrRehqMUXOrKU6mBUOe"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0Epr18ivdFx8FNUb8gCO34"
            },
            "href": "https://api.spotify.com/v1/artists/0Epr18ivdFx8FNUb8gCO34",
            "id": "0Epr18ivdFx8FNUb8gCO34",
            "name": "ilyaugust",
            "type": "artist",
            "uri": "spotify:artist:0Epr18ivdFx8FNUb8gCO34"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/30qmmqC6z8T2vJyBM9CxZL"
          },
          "href": "https://api.spotify.com/v1/albums/30qmmqC6z8T2vJyBM9CxZL",
          "id": "30qmmqC6z8T2vJyBM9CxZL",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2733b631464589cb5b98872983b",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e023b631464589cb5b98872983b",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048513b631464589cb5b98872983b",
            "width": 64
          }],
          "name": "Olé",
          "release_date": "2022-01-28",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:30qmmqC6z8T2vJyBM9CxZL"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3gnDrRehqMUXOrKU6mBUOe"
          },
          "href": "https://api.spotify.com/v1/artists/3gnDrRehqMUXOrKU6mBUOe",
          "id": "3gnDrRehqMUXOrKU6mBUOe",
          "name": "808Riot",
          "type": "artist",
          "uri": "spotify:artist:3gnDrRehqMUXOrKU6mBUOe"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0Epr18ivdFx8FNUb8gCO34"
          },
          "href": "https://api.spotify.com/v1/artists/0Epr18ivdFx8FNUb8gCO34",
          "id": "0Epr18ivdFx8FNUb8gCO34",
          "name": "ilyaugust",
          "type": "artist",
          "uri": "spotify:artist:0Epr18ivdFx8FNUb8gCO34"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 121894,
        "explicit": true,
        "external_ids": {
          "isrc": "SE6I32168162"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6cXs9qkrtyZsK1a5qOgvwf"
        },
        "href": "https://api.spotify.com/v1/tracks/6cXs9qkrtyZsK1a5qOgvwf",
        "id": "6cXs9qkrtyZsK1a5qOgvwf",
        "is_local": false,
        "name": "Olé",
        "popularity": 47,
        "preview_url": "https://p.scdn.co/mp3-preview/467b5fd3749a660fe5d83bb43b18ff39f53d1582?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6cXs9qkrtyZsK1a5qOgvwf"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1VEzN9lxvG6KPR3QQGsebR"
            },
            "href": "https://api.spotify.com/v1/artists/1VEzN9lxvG6KPR3QQGsebR",
            "id": "1VEzN9lxvG6KPR3QQGsebR",
            "name": "Sonny Rollins",
            "type": "artist",
            "uri": "spotify:artist:1VEzN9lxvG6KPR3QQGsebR"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0WV96viWEehix3AQN5RjTl"
          },
          "href": "https://api.spotify.com/v1/albums/0WV96viWEehix3AQN5RjTl",
          "id": "0WV96viWEehix3AQN5RjTl",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273a8007375c62854a6240de405",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02a8007375c62854a6240de405",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851a8007375c62854a6240de405",
            "width": 64
          }],
          "name": "Ken Burns Jazz: Definitive Sonny Rollins",
          "release_date": "2000-11-07",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:0WV96viWEehix3AQN5RjTl"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0kbYTNQb4Pb1rPbbaF0pT4"
          },
          "href": "https://api.spotify.com/v1/artists/0kbYTNQb4Pb1rPbbaF0pT4",
          "id": "0kbYTNQb4Pb1rPbbaF0pT4",
          "name": "Miles Davis",
          "type": "artist",
          "uri": "spotify:artist:0kbYTNQb4Pb1rPbbaF0pT4"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 314160,
        "explicit": false,
        "external_ids": {
          "isrc": "USFI85400026"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6fsZCPBQRHQioxyzg5vG1x"
        },
        "href": "https://api.spotify.com/v1/tracks/6fsZCPBQRHQioxyzg5vG1x",
        "id": "6fsZCPBQRHQioxyzg5vG1x",
        "is_local": false,
        "name": "Oleo",
        "popularity": 22,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6fsZCPBQRHQioxyzg5vG1x"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1RRY8KBuZYuhAAJRgdDlP9"
            },
            "href": "https://api.spotify.com/v1/artists/1RRY8KBuZYuhAAJRgdDlP9",
            "id": "1RRY8KBuZYuhAAJRgdDlP9",
            "name": "Ole-Bjørn Talstad",
            "type": "artist",
            "uri": "spotify:artist:1RRY8KBuZYuhAAJRgdDlP9"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5E4l2ZFHmlQZMYmN39cOLI"
          },
          "href": "https://api.spotify.com/v1/albums/5E4l2ZFHmlQZMYmN39cOLI",
          "id": "5E4l2ZFHmlQZMYmN39cOLI",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737e3335afc0e7d736e2891111",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027e3335afc0e7d736e2891111",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517e3335afc0e7d736e2891111",
            "width": 64
          }],
          "name": "Stille Sjø",
          "release_date": "2023-07-14",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5E4l2ZFHmlQZMYmN39cOLI"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1RRY8KBuZYuhAAJRgdDlP9"
          },
          "href": "https://api.spotify.com/v1/artists/1RRY8KBuZYuhAAJRgdDlP9",
          "id": "1RRY8KBuZYuhAAJRgdDlP9",
          "name": "Ole-Bjørn Talstad",
          "type": "artist",
          "uri": "spotify:artist:1RRY8KBuZYuhAAJRgdDlP9"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 151829,
        "explicit": false,
        "external_ids": {
          "isrc": "FRIDO2312543"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1f12vrnCzIvlJ4zyCDTYvp"
        },
        "href": "https://api.spotify.com/v1/tracks/1f12vrnCzIvlJ4zyCDTYvp",
        "id": "1f12vrnCzIvlJ4zyCDTYvp",
        "is_local": false,
        "name": "Stille Sjø",
        "popularity": 66,
        "preview_url": "https://p.scdn.co/mp3-preview/968cd05ee20f32c5c7f2517968de122b83e2b1f7?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1f12vrnCzIvlJ4zyCDTYvp"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7038Bglq6YmpBu6wPvQJiz"
            },
            "href": "https://api.spotify.com/v1/artists/7038Bglq6YmpBu6wPvQJiz",
            "id": "7038Bglq6YmpBu6wPvQJiz",
            "name": "Oleander",
            "type": "artist",
            "uri": "spotify:artist:7038Bglq6YmpBu6wPvQJiz"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3DxLga8esIW4kag2FGPWMI"
          },
          "href": "https://api.spotify.com/v1/albums/3DxLga8esIW4kag2FGPWMI",
          "id": "3DxLga8esIW4kag2FGPWMI",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f4199fadfc587e5bb6e93ca9",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f4199fadfc587e5bb6e93ca9",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f4199fadfc587e5bb6e93ca9",
            "width": 64
          }],
          "name": "February Son",
          "release_date": "1999-01-01",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:3DxLga8esIW4kag2FGPWMI"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7038Bglq6YmpBu6wPvQJiz"
          },
          "href": "https://api.spotify.com/v1/artists/7038Bglq6YmpBu6wPvQJiz",
          "id": "7038Bglq6YmpBu6wPvQJiz",
          "name": "Oleander",
          "type": "artist",
          "uri": "spotify:artist:7038Bglq6YmpBu6wPvQJiz"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 238093,
        "explicit": false,
        "external_ids": {
          "isrc": "USUR19801562"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0hgOGzUYKKQbQcWDoJpM6H"
        },
        "href": "https://api.spotify.com/v1/tracks/0hgOGzUYKKQbQcWDoJpM6H",
        "id": "0hgOGzUYKKQbQcWDoJpM6H",
        "is_local": false,
        "name": "Why I'm Here",
        "popularity": 52,
        "preview_url": null,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:0hgOGzUYKKQbQcWDoJpM6H"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3Rq3YOF9YG9YfCWD4D56RZ"
            },
            "href": "https://api.spotify.com/v1/artists/3Rq3YOF9YG9YfCWD4D56RZ",
            "id": "3Rq3YOF9YG9YfCWD4D56RZ",
            "name": "Nujabes",
            "type": "artist",
            "uri": "spotify:artist:3Rq3YOF9YG9YfCWD4D56RZ"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5Fmr3KeGe2IAVFmMxUq1sD"
            },
            "href": "https://api.spotify.com/v1/artists/5Fmr3KeGe2IAVFmMxUq1sD",
            "id": "5Fmr3KeGe2IAVFmMxUq1sD",
            "name": "fat jon",
            "type": "artist",
            "uri": "spotify:artist:5Fmr3KeGe2IAVFmMxUq1sD"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3uNaLrScYulpXLRmQquP9I"
          },
          "href": "https://api.spotify.com/v1/albums/3uNaLrScYulpXLRmQquP9I",
          "id": "3uNaLrScYulpXLRmQquP9I",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27359ef99ed996b4e537ed2e6a3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0259ef99ed996b4e537ed2e6a3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485159ef99ed996b4e537ed2e6a3",
            "width": 64
          }],
          "name": "samurai champloo music record departure",
          "release_date": "2004-06-23",
          "release_date_precision": "day",
          "total_tracks": 17,
          "type": "album",
          "uri": "spotify:album:3uNaLrScYulpXLRmQquP9I"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5Fmr3KeGe2IAVFmMxUq1sD"
          },
          "href": "https://api.spotify.com/v1/artists/5Fmr3KeGe2IAVFmMxUq1sD",
          "id": "5Fmr3KeGe2IAVFmMxUq1sD",
          "name": "fat jon",
          "type": "artist",
          "uri": "spotify:artist:5Fmr3KeGe2IAVFmMxUq1sD"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 207766,
        "explicit": false,
        "external_ids": {
          "isrc": "JPVI00424700"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1pD2Zq8WCl8GHHuRGDmdjb"
        },
        "href": "https://api.spotify.com/v1/tracks/1pD2Zq8WCl8GHHuRGDmdjb",
        "id": "1pD2Zq8WCl8GHHuRGDmdjb",
        "is_local": false,
        "name": "ole",
        "popularity": 44,
        "preview_url": "https://p.scdn.co/mp3-preview/bcd1c117b7af44e107551cdfdb1fe4176b27deb1?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:1pD2Zq8WCl8GHHuRGDmdjb"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3oEJM6BrpycUL5L8J5YXL5"
            },
            "href": "https://api.spotify.com/v1/artists/3oEJM6BrpycUL5L8J5YXL5",
            "id": "3oEJM6BrpycUL5L8J5YXL5",
            "name": "Dilip Sen- Sameer Sen",
            "type": "artist",
            "uri": "spotify:artist:3oEJM6BrpycUL5L8J5YXL5"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3Ie0MgmTKE4kkyq5MCh94N"
          },
          "href": "https://api.spotify.com/v1/albums/3Ie0MgmTKE4kkyq5MCh94N",
          "id": "3Ie0MgmTKE4kkyq5MCh94N",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27396a950e102101ee8451c16ce",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0296a950e102101ee8451c16ce",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485196a950e102101ee8451c16ce",
            "width": 64
          }],
          "name": "Yeh Dillagi (Original Motion Picture Soundtrack)",
          "release_date": "1994-05-06",
          "release_date_precision": "day",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:3Ie0MgmTKE4kkyq5MCh94N"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2ZRrPOjBIWoKK5rHedLijj"
          },
          "href": "https://api.spotify.com/v1/artists/2ZRrPOjBIWoKK5rHedLijj",
          "id": "2ZRrPOjBIWoKK5rHedLijj",
          "name": "Abhijeet",
          "type": "artist",
          "uri": "spotify:artist:2ZRrPOjBIWoKK5rHedLijj"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 270840,
        "explicit": false,
        "external_ids": {
          "isrc": "INT109900051"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4cHkNpAIlCFbNQKGHfMVaw"
        },
        "href": "https://api.spotify.com/v1/tracks/4cHkNpAIlCFbNQKGHfMVaw",
        "id": "4cHkNpAIlCFbNQKGHfMVaw",
        "is_local": false,
        "name": "Ole Ole",
        "popularity": 66,
        "preview_url": "https://p.scdn.co/mp3-preview/5f32fc110750578114d4f7ca700bef473348d2ae?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:4cHkNpAIlCFbNQKGHfMVaw"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4rUyBlggM5tZUH5QZn9ZuO"
            },
            "href": "https://api.spotify.com/v1/artists/4rUyBlggM5tZUH5QZn9ZuO",
            "id": "4rUyBlggM5tZUH5QZn9ZuO",
            "name": "Silvio Rodríguez",
            "type": "artist",
            "uri": "spotify:artist:4rUyBlggM5tZUH5QZn9ZuO"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4WEu5ZKJLZ9bOEav4ELwpd"
          },
          "href": "https://api.spotify.com/v1/albums/4WEu5ZKJLZ9bOEav4ELwpd",
          "id": "4WEu5ZKJLZ9bOEav4ELwpd",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273524e56c2cc65b709d457ea7c",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02524e56c2cc65b709d457ea7c",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851524e56c2cc65b709d457ea7c",
            "width": 64
          }],
          "name": "Al Final de Este Viaje...",
          "release_date": "1978-01-01",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:4WEu5ZKJLZ9bOEav4ELwpd"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4rUyBlggM5tZUH5QZn9ZuO"
          },
          "href": "https://api.spotify.com/v1/artists/4rUyBlggM5tZUH5QZn9ZuO",
          "id": "4rUyBlggM5tZUH5QZn9ZuO",
          "name": "Silvio Rodríguez",
          "type": "artist",
          "uri": "spotify:artist:4rUyBlggM5tZUH5QZn9ZuO"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 144632,
        "explicit": false,
        "external_ids": {
          "isrc": "ESAAI0205374"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1w6mcMacExya7bvbElMuar"
        },
        "href": "https://api.spotify.com/v1/tracks/1w6mcMacExya7bvbElMuar",
        "id": "1w6mcMacExya7bvbElMuar",
        "is_local": false,
        "name": "Óleo de Mujer Con Sombrero",
        "popularity": 65,
        "preview_url": "https://p.scdn.co/mp3-preview/b215414e9f6751861df11f41831de812c17bbe14?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:1w6mcMacExya7bvbElMuar"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1VEzN9lxvG6KPR3QQGsebR"
            },
            "href": "https://api.spotify.com/v1/artists/1VEzN9lxvG6KPR3QQGsebR",
            "id": "1VEzN9lxvG6KPR3QQGsebR",
            "name": "Sonny Rollins",
            "type": "artist",
            "uri": "spotify:artist:1VEzN9lxvG6KPR3QQGsebR"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "MK", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1vrL33aprfuGToazTDUeie"
          },
          "href": "https://api.spotify.com/v1/albums/1vrL33aprfuGToazTDUeie",
          "id": "1vrL33aprfuGToazTDUeie",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273908ca9aac90a62a832f83458",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02908ca9aac90a62a832f83458",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851908ca9aac90a62a832f83458",
            "width": 64
          }],
          "name": "Oleo",
          "release_date": "1959",
          "release_date_precision": "year",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:1vrL33aprfuGToazTDUeie"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1VEzN9lxvG6KPR3QQGsebR"
          },
          "href": "https://api.spotify.com/v1/artists/1VEzN9lxvG6KPR3QQGsebR",
          "id": "1VEzN9lxvG6KPR3QQGsebR",
          "name": "Sonny Rollins",
          "type": "artist",
          "uri": "spotify:artist:1VEzN9lxvG6KPR3QQGsebR"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "MK", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET"],
        "disc_number": 1,
        "duration_ms": 194826,
        "explicit": false,
        "external_ids": {
          "isrc": "NLEM80814704"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1kSoWg2hMVklqtngOba5sK"
        },
        "href": "https://api.spotify.com/v1/tracks/1kSoWg2hMVklqtngOba5sK",
        "id": "1kSoWg2hMVklqtngOba5sK",
        "is_local": false,
        "name": "Oleo",
        "popularity": 25,
        "preview_url": "https://p.scdn.co/mp3-preview/ab4a7041b76f7ce58941601e46d6b87163048aaf?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1kSoWg2hMVklqtngOba5sK"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5Y1YwWzFX7BIxBbdAOXOEJ"
            },
            "href": "https://api.spotify.com/v1/artists/5Y1YwWzFX7BIxBbdAOXOEJ",
            "id": "5Y1YwWzFX7BIxBbdAOXOEJ",
            "name": "Klur",
            "type": "artist",
            "uri": "spotify:artist:5Y1YwWzFX7BIxBbdAOXOEJ"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1RRY8KBuZYuhAAJRgdDlP9"
            },
            "href": "https://api.spotify.com/v1/artists/1RRY8KBuZYuhAAJRgdDlP9",
            "id": "1RRY8KBuZYuhAAJRgdDlP9",
            "name": "Ole-Bjørn Talstad",
            "type": "artist",
            "uri": "spotify:artist:1RRY8KBuZYuhAAJRgdDlP9"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/01gAuQyr7X51xepWCsi4az"
          },
          "href": "https://api.spotify.com/v1/albums/01gAuQyr7X51xepWCsi4az",
          "id": "01gAuQyr7X51xepWCsi4az",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2736304ad16edcfeba83aa04a70",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e026304ad16edcfeba83aa04a70",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048516304ad16edcfeba83aa04a70",
            "width": 64
          }],
          "name": "Entangled (Ole-Bjørn Talstad Rework)",
          "release_date": "2022-07-27",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:01gAuQyr7X51xepWCsi4az"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5Y1YwWzFX7BIxBbdAOXOEJ"
          },
          "href": "https://api.spotify.com/v1/artists/5Y1YwWzFX7BIxBbdAOXOEJ",
          "id": "5Y1YwWzFX7BIxBbdAOXOEJ",
          "name": "Klur",
          "type": "artist",
          "uri": "spotify:artist:5Y1YwWzFX7BIxBbdAOXOEJ"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1RRY8KBuZYuhAAJRgdDlP9"
          },
          "href": "https://api.spotify.com/v1/artists/1RRY8KBuZYuhAAJRgdDlP9",
          "id": "1RRY8KBuZYuhAAJRgdDlP9",
          "name": "Ole-Bjørn Talstad",
          "type": "artist",
          "uri": "spotify:artist:1RRY8KBuZYuhAAJRgdDlP9"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 133487,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKQU2263615"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3ZvBA6TQA4CTOZNOyxou90"
        },
        "href": "https://api.spotify.com/v1/tracks/3ZvBA6TQA4CTOZNOyxou90",
        "id": "3ZvBA6TQA4CTOZNOyxou90",
        "is_local": false,
        "name": "Entangled - Ole-Bjørn Talstad Rework",
        "popularity": 64,
        "preview_url": "https://p.scdn.co/mp3-preview/e41b0115e6a632691de2ed5f8747dc254b31ef1a?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3ZvBA6TQA4CTOZNOyxou90"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/71Ur25Abq58vksqJINpGdx"
            },
            "href": "https://api.spotify.com/v1/artists/71Ur25Abq58vksqJINpGdx",
            "id": "71Ur25Abq58vksqJINpGdx",
            "name": "Miles Davis Quintet",
            "type": "artist",
            "uri": "spotify:artist:71Ur25Abq58vksqJINpGdx"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0dyIXPKoUBt1vFJHX57dqt"
          },
          "href": "https://api.spotify.com/v1/albums/0dyIXPKoUBt1vFJHX57dqt",
          "id": "0dyIXPKoUBt1vFJHX57dqt",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ab2083ab4b97f7948ff163a1",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ab2083ab4b97f7948ff163a1",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ab2083ab4b97f7948ff163a1",
            "width": 64
          }],
          "name": "Relaxin' With The Miles Davis Quintet",
          "release_date": "1958",
          "release_date_precision": "year",
          "total_tracks": 6,
          "type": "album",
          "uri": "spotify:album:0dyIXPKoUBt1vFJHX57dqt"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/71Ur25Abq58vksqJINpGdx"
          },
          "href": "https://api.spotify.com/v1/artists/71Ur25Abq58vksqJINpGdx",
          "id": "71Ur25Abq58vksqJINpGdx",
          "name": "Miles Davis Quintet",
          "type": "artist",
          "uri": "spotify:artist:71Ur25Abq58vksqJINpGdx"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 378333,
        "explicit": false,
        "external_ids": {
          "isrc": "USFI85800052"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/05HiUL6YLZgxdxe7DzsxVQ"
        },
        "href": "https://api.spotify.com/v1/tracks/05HiUL6YLZgxdxe7DzsxVQ",
        "id": "05HiUL6YLZgxdxe7DzsxVQ",
        "is_local": false,
        "name": "Oleo - Edited Without False Start",
        "popularity": 34,
        "preview_url": null,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:05HiUL6YLZgxdxe7DzsxVQ"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1bBZcz4jP7CoPlqpCFh4gz"
            },
            "href": "https://api.spotify.com/v1/artists/1bBZcz4jP7CoPlqpCFh4gz",
            "id": "1bBZcz4jP7CoPlqpCFh4gz",
            "name": "Johnny Horton",
            "type": "artist",
            "uri": "spotify:artist:1bBZcz4jP7CoPlqpCFh4gz"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5kHMuIlNGbEMHsDDTWNmgN"
          },
          "href": "https://api.spotify.com/v1/albums/5kHMuIlNGbEMHsDDTWNmgN",
          "id": "5kHMuIlNGbEMHsDDTWNmgN",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2734971e41391323fb2b8c5c4ba",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e024971e41391323fb2b8c5c4ba",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048514971e41391323fb2b8c5c4ba",
            "width": 64
          }],
          "name": "The Essential Johnny Horton",
          "release_date": "2013-06-04",
          "release_date_precision": "day",
          "total_tracks": 36,
          "type": "album",
          "uri": "spotify:album:5kHMuIlNGbEMHsDDTWNmgN"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1bBZcz4jP7CoPlqpCFh4gz"
          },
          "href": "https://api.spotify.com/v1/artists/1bBZcz4jP7CoPlqpCFh4gz",
          "id": "1bBZcz4jP7CoPlqpCFh4gz",
          "name": "Johnny Horton",
          "type": "artist",
          "uri": "spotify:artist:1bBZcz4jP7CoPlqpCFh4gz"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 2,
        "duration_ms": 139066,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM16000004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4BM9vQSwPsGf3xQ9FIAWFB"
        },
        "href": "https://api.spotify.com/v1/tracks/4BM9vQSwPsGf3xQ9FIAWFB",
        "id": "4BM9vQSwPsGf3xQ9FIAWFB",
        "is_local": false,
        "name": "Ole Slew Foot",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/5101fe222df36592cf53ae0ede2f4c5f4630ef33?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 13,
        "type": "track",
        "uri": "spotify:track:4BM9vQSwPsGf3xQ9FIAWFB"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1sSt1DqqqFLkPwfrqafVyn"
            },
            "href": "https://api.spotify.com/v1/artists/1sSt1DqqqFLkPwfrqafVyn",
            "id": "1sSt1DqqqFLkPwfrqafVyn",
            "name": "Ice Prince",
            "type": "artist",
            "uri": "spotify:artist:1sSt1DqqqFLkPwfrqafVyn"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2mHvknGmv5MyUlTeoD7KBc"
          },
          "href": "https://api.spotify.com/v1/albums/2mHvknGmv5MyUlTeoD7KBc",
          "id": "2mHvknGmv5MyUlTeoD7KBc",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273b00f0c7365af1c3ccebe9d4d",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02b00f0c7365af1c3ccebe9d4d",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851b00f0c7365af1c3ccebe9d4d",
            "width": 64
          }],
          "name": "Oleku (feat. Brymo)",
          "release_date": "2010-09-21",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:2mHvknGmv5MyUlTeoD7KBc"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1sSt1DqqqFLkPwfrqafVyn"
          },
          "href": "https://api.spotify.com/v1/artists/1sSt1DqqqFLkPwfrqafVyn",
          "id": "1sSt1DqqqFLkPwfrqafVyn",
          "name": "Ice Prince",
          "type": "artist",
          "uri": "spotify:artist:1sSt1DqqqFLkPwfrqafVyn"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/094nOQ29vLC8FjZ3PhnM2u"
          },
          "href": "https://api.spotify.com/v1/artists/094nOQ29vLC8FjZ3PhnM2u",
          "id": "094nOQ29vLC8FjZ3PhnM2u",
          "name": "Brymo",
          "type": "artist",
          "uri": "spotify:artist:094nOQ29vLC8FjZ3PhnM2u"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 291363,
        "explicit": false,
        "external_ids": {
          "isrc": "TCAAU1165959"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0mDRuZmReEm6DquPLJlcEm"
        },
        "href": "https://api.spotify.com/v1/tracks/0mDRuZmReEm6DquPLJlcEm",
        "id": "0mDRuZmReEm6DquPLJlcEm",
        "is_local": false,
        "name": "Oleku (feat. Brymo)",
        "popularity": 47,
        "preview_url": "https://p.scdn.co/mp3-preview/be20ed8ee3c72f614034d419f5f6cb002575f9ee?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0mDRuZmReEm6DquPLJlcEm"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2mrDlMyuF6dqVFJmjUJU0R"
            },
            "href": "https://api.spotify.com/v1/artists/2mrDlMyuF6dqVFJmjUJU0R",
            "id": "2mrDlMyuF6dqVFJmjUJU0R",
            "name": "Hitman",
            "type": "artist",
            "uri": "spotify:artist:2mrDlMyuF6dqVFJmjUJU0R"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3uy1s3SfvnndRJfiLSLZJQ"
          },
          "href": "https://api.spotify.com/v1/albums/3uy1s3SfvnndRJfiLSLZJQ",
          "id": "3uy1s3SfvnndRJfiLSLZJQ",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273dfad030c2abd6a3f47bd403e",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02dfad030c2abd6a3f47bd403e",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851dfad030c2abd6a3f47bd403e",
            "width": 64
          }],
          "name": "Ole Country Boy",
          "release_date": "2021-12-10",
          "release_date_precision": "day",
          "total_tracks": 16,
          "type": "album",
          "uri": "spotify:album:3uy1s3SfvnndRJfiLSLZJQ"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2mrDlMyuF6dqVFJmjUJU0R"
          },
          "href": "https://api.spotify.com/v1/artists/2mrDlMyuF6dqVFJmjUJU0R",
          "id": "2mrDlMyuF6dqVFJmjUJU0R",
          "name": "Hitman",
          "type": "artist",
          "uri": "spotify:artist:2mrDlMyuF6dqVFJmjUJU0R"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 216476,
        "explicit": true,
        "external_ids": {
          "isrc": "QZRP52176709"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5CtVTVi2Ul8aje2jhg00qJ"
        },
        "href": "https://api.spotify.com/v1/tracks/5CtVTVi2Ul8aje2jhg00qJ",
        "id": "5CtVTVi2Ul8aje2jhg00qJ",
        "is_local": false,
        "name": "Ole Country Boy",
        "popularity": 39,
        "preview_url": "https://p.scdn.co/mp3-preview/1b5d678d0365c1731101a19a763c401a277b3ed8?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:5CtVTVi2Ul8aje2jhg00qJ"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4XAsg7uclewySpdLcD81LJ"
            },
            "href": "https://api.spotify.com/v1/artists/4XAsg7uclewySpdLcD81LJ",
            "id": "4XAsg7uclewySpdLcD81LJ",
            "name": "Los Canelos De Durango",
            "type": "artist",
            "uri": "spotify:artist:4XAsg7uclewySpdLcD81LJ"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5yES0KtLLEHthuIzr58hOY"
          },
          "href": "https://api.spotify.com/v1/albums/5yES0KtLLEHthuIzr58hOY",
          "id": "5yES0KtLLEHthuIzr58hOY",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737a9847b59808e723f66df820",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027a9847b59808e723f66df820",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517a9847b59808e723f66df820",
            "width": 64
          }],
          "name": "Los Ultimos Corridos del Compa Pepe",
          "release_date": "2013-11-05",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:5yES0KtLLEHthuIzr58hOY"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4XAsg7uclewySpdLcD81LJ"
          },
          "href": "https://api.spotify.com/v1/artists/4XAsg7uclewySpdLcD81LJ",
          "id": "4XAsg7uclewySpdLcD81LJ",
          "name": "Los Canelos De Durango",
          "type": "artist",
          "uri": "spotify:artist:4XAsg7uclewySpdLcD81LJ"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 262986,
        "explicit": false,
        "external_ids": {
          "isrc": "QMDA71322354"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0ViuAMJj4IasOYe8GtKLhv"
        },
        "href": "https://api.spotify.com/v1/tracks/0ViuAMJj4IasOYe8GtKLhv",
        "id": "0ViuAMJj4IasOYe8GtKLhv",
        "is_local": false,
        "name": "Olegario Chaidez",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/c86f888b5c4b5fd499bedb18b185704ddda83013?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:0ViuAMJj4IasOYe8GtKLhv"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/32LHRiof0sa4taYew9i3Fa"
            },
            "href": "https://api.spotify.com/v1/artists/32LHRiof0sa4taYew9i3Fa",
            "id": "32LHRiof0sa4taYew9i3Fa",
            "name": "Dinah Washington",
            "type": "artist",
            "uri": "spotify:artist:32LHRiof0sa4taYew9i3Fa"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/19tw1MckQmVNrGJYcCva7f"
          },
          "href": "https://api.spotify.com/v1/albums/19tw1MckQmVNrGJYcCva7f",
          "id": "19tw1MckQmVNrGJYcCva7f",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c19aeb01497090cf94ad7e12",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c19aeb01497090cf94ad7e12",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c19aeb01497090cf94ad7e12",
            "width": 64
          }],
          "name": "The Complete Dinah Washington On Mercury Vol. 6 (1958-1960)",
          "release_date": "1989-01-01",
          "release_date_precision": "day",
          "total_tracks": 73,
          "type": "album",
          "uri": "spotify:album:19tw1MckQmVNrGJYcCva7f"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/32LHRiof0sa4taYew9i3Fa"
          },
          "href": "https://api.spotify.com/v1/artists/32LHRiof0sa4taYew9i3Fa",
          "id": "32LHRiof0sa4taYew9i3Fa",
          "name": "Dinah Washington",
          "type": "artist",
          "uri": "spotify:artist:32LHRiof0sa4taYew9i3Fa"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 2,
        "duration_ms": 165160,
        "explicit": false,
        "external_ids": {
          "isrc": "USPR38982260"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6MpmfCUaLKb4MsrbmTwRx0"
        },
        "href": "https://api.spotify.com/v1/tracks/6MpmfCUaLKb4MsrbmTwRx0",
        "id": "6MpmfCUaLKb4MsrbmTwRx0",
        "is_local": false,
        "name": "Ole Santa",
        "popularity": 47,
        "preview_url": null,
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:6MpmfCUaLKb4MsrbmTwRx0"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0e2fF4oRhJRn7GvLbPsdLL"
            },
            "href": "https://api.spotify.com/v1/artists/0e2fF4oRhJRn7GvLbPsdLL",
            "id": "0e2fF4oRhJRn7GvLbPsdLL",
            "name": "DJ Michel",
            "type": "artist",
            "uri": "spotify:artist:0e2fF4oRhJRn7GvLbPsdLL"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1dOSsnDIaS4KLCjzNrEkcg"
          },
          "href": "https://api.spotify.com/v1/albums/1dOSsnDIaS4KLCjzNrEkcg",
          "id": "1dOSsnDIaS4KLCjzNrEkcg",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27360dbc762999c7ea27a1b3c0d",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0260dbc762999c7ea27a1b3c0d",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485160dbc762999c7ea27a1b3c0d",
            "width": 64
          }],
          "name": "24 GROOVE",
          "release_date": "2024-02-09",
          "release_date_precision": "day",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:1dOSsnDIaS4KLCjzNrEkcg"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0e2fF4oRhJRn7GvLbPsdLL"
          },
          "href": "https://api.spotify.com/v1/artists/0e2fF4oRhJRn7GvLbPsdLL",
          "id": "0e2fF4oRhJRn7GvLbPsdLL",
          "name": "DJ Michel",
          "type": "artist",
          "uri": "spotify:artist:0e2fF4oRhJRn7GvLbPsdLL"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7kYh4aJ1wzORt9hqML1IWZ"
          },
          "href": "https://api.spotify.com/v1/artists/7kYh4aJ1wzORt9hqML1IWZ",
          "id": "7kYh4aJ1wzORt9hqML1IWZ",
          "name": "JAMZ",
          "type": "artist",
          "uri": "spotify:artist:7kYh4aJ1wzORt9hqML1IWZ"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 210005,
        "explicit": false,
        "external_ids": {
          "isrc": "ZA56E2315539"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2tuHX57OOUwZK4efbFgvqL"
        },
        "href": "https://api.spotify.com/v1/tracks/2tuHX57OOUwZK4efbFgvqL",
        "id": "2tuHX57OOUwZK4efbFgvqL",
        "is_local": false,
        "name": "OLE (feat. JAMZ)",
        "popularity": 40,
        "preview_url": "https://p.scdn.co/mp3-preview/77d290e151465998bd9a8412f34bdb0a42a6b5c3?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:2tuHX57OOUwZK4efbFgvqL"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6Ghvu1VvMGScGpOUJBAHNH"
            },
            "href": "https://api.spotify.com/v1/artists/6Ghvu1VvMGScGpOUJBAHNH",
            "id": "6Ghvu1VvMGScGpOUJBAHNH",
            "name": "Deftones",
            "type": "artist",
            "uri": "spotify:artist:6Ghvu1VvMGScGpOUJBAHNH"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7rLUzHOq0d0mRGGEIqKfli"
          },
          "href": "https://api.spotify.com/v1/albums/7rLUzHOq0d0mRGGEIqKfli",
          "id": "7rLUzHOq0d0mRGGEIqKfli",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27358df6181041c38412db1b253",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0258df6181041c38412db1b253",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485158df6181041c38412db1b253",
            "width": 64
          }],
          "name": "Covers",
          "release_date": "2011-04-16",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:7rLUzHOq0d0mRGGEIqKfli"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6Ghvu1VvMGScGpOUJBAHNH"
          },
          "href": "https://api.spotify.com/v1/artists/6Ghvu1VvMGScGpOUJBAHNH",
          "id": "6Ghvu1VvMGScGpOUJBAHNH",
          "name": "Deftones",
          "type": "artist",
          "uri": "spotify:artist:6Ghvu1VvMGScGpOUJBAHNH"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 124173,
        "explicit": false,
        "external_ids": {
          "isrc": "USMV20500178"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4HpIh5wWfkq5sSuCLLSwYR"
        },
        "href": "https://api.spotify.com/v1/tracks/4HpIh5wWfkq5sSuCLLSwYR",
        "id": "4HpIh5wWfkq5sSuCLLSwYR",
        "is_local": false,
        "name": "Please Please Please Let Me Get What I Want - 2005 Remaster",
        "popularity": 77,
        "preview_url": "https://p.scdn.co/mp3-preview/a6a279b6bca6af5b0017901be6ea54cabf406079?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:4HpIh5wWfkq5sSuCLLSwYR"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3M4ThdJR28z9eSMcQHAZ5G"
            },
            "href": "https://api.spotify.com/v1/artists/3M4ThdJR28z9eSMcQHAZ5G",
            "id": "3M4ThdJR28z9eSMcQHAZ5G",
            "name": "The Fratellis",
            "type": "artist",
            "uri": "spotify:artist:3M4ThdJR28z9eSMcQHAZ5G"
          }],
          "available_markets": ["CA", "US"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6R6pjR9ocMYuqSuNx5e4mg"
          },
          "href": "https://api.spotify.com/v1/albums/6R6pjR9ocMYuqSuNx5e4mg",
          "id": "6R6pjR9ocMYuqSuNx5e4mg",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27390b7c466e878862b5a9cece3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0290b7c466e878862b5a9cece3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485190b7c466e878862b5a9cece3",
            "width": 64
          }],
          "name": "Costello Music",
          "release_date": "2007-01-01",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:6R6pjR9ocMYuqSuNx5e4mg"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3M4ThdJR28z9eSMcQHAZ5G"
          },
          "href": "https://api.spotify.com/v1/artists/3M4ThdJR28z9eSMcQHAZ5G",
          "id": "3M4ThdJR28z9eSMcQHAZ5G",
          "name": "The Fratellis",
          "type": "artist",
          "uri": "spotify:artist:3M4ThdJR28z9eSMcQHAZ5G"
        }],
        "available_markets": ["CA", "US"],
        "disc_number": 1,
        "duration_ms": 194333,
        "explicit": false,
        "external_ids": {
          "isrc": "GBUM70601747"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2l0z5kb3CQESq8ol7wX5ql"
        },
        "href": "https://api.spotify.com/v1/tracks/2l0z5kb3CQESq8ol7wX5ql",
        "id": "2l0z5kb3CQESq8ol7wX5ql",
        "is_local": false,
        "name": "Ole Black 'n' Blue Eyes",
        "popularity": 37,
        "preview_url": null,
        "track_number": 13,
        "type": "track",
        "uri": "spotify:track:2l0z5kb3CQESq8ol7wX5ql"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4gF2OluaMxcC4qrGbPaB7S"
            },
            "href": "https://api.spotify.com/v1/artists/4gF2OluaMxcC4qrGbPaB7S",
            "id": "4gF2OluaMxcC4qrGbPaB7S",
            "name": "Lauren Watkins",
            "type": "artist",
            "uri": "spotify:artist:4gF2OluaMxcC4qrGbPaB7S"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7xZb3Il98QIiag803YmofH"
          },
          "href": "https://api.spotify.com/v1/albums/7xZb3Il98QIiag803YmofH",
          "id": "7xZb3Il98QIiag803YmofH",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e028c6a2d65e67f6a90b160f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e028c6a2d65e67f6a90b160f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e028c6a2d65e67f6a90b160f",
            "width": 64
          }],
          "name": "Introducing: Lauren Watkins",
          "release_date": "2023-04-21",
          "release_date_precision": "day",
          "total_tracks": 7,
          "type": "album",
          "uri": "spotify:album:7xZb3Il98QIiag803YmofH"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4gF2OluaMxcC4qrGbPaB7S"
          },
          "href": "https://api.spotify.com/v1/artists/4gF2OluaMxcC4qrGbPaB7S",
          "id": "4gF2OluaMxcC4qrGbPaB7S",
          "name": "Lauren Watkins",
          "type": "artist",
          "uri": "spotify:artist:4gF2OluaMxcC4qrGbPaB7S"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 175516,
        "explicit": false,
        "external_ids": {
          "isrc": "QZ22S2300047"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6MrBlV3qntjmstAXDudrew"
        },
        "href": "https://api.spotify.com/v1/tracks/6MrBlV3qntjmstAXDudrew",
        "id": "6MrBlV3qntjmstAXDudrew",
        "is_local": false,
        "name": "Ole Miss",
        "popularity": 36,
        "preview_url": "https://p.scdn.co/mp3-preview/f2d4b737a4b2679c1813a6fc7a06b9c82dc83316?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:6MrBlV3qntjmstAXDudrew"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1qUNuw7pQl8Eg8HHkjOcr5"
            },
            "href": "https://api.spotify.com/v1/artists/1qUNuw7pQl8Eg8HHkjOcr5",
            "id": "1qUNuw7pQl8Eg8HHkjOcr5",
            "name": "Marcellus TheSinger",
            "type": "artist",
            "uri": "spotify:artist:1qUNuw7pQl8Eg8HHkjOcr5"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7GlRufG1FMxigQppl3o7nU"
          },
          "href": "https://api.spotify.com/v1/albums/7GlRufG1FMxigQppl3o7nU",
          "id": "7GlRufG1FMxigQppl3o7nU",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273a355a355ee7a4f6a0f82d8c3",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02a355a355ee7a4f6a0f82d8c3",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851a355a355ee7a4f6a0f82d8c3",
            "width": 64
          }],
          "name": "Music Therapy",
          "release_date": "2023-07-13",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:7GlRufG1FMxigQppl3o7nU"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1qUNuw7pQl8Eg8HHkjOcr5"
          },
          "href": "https://api.spotify.com/v1/artists/1qUNuw7pQl8Eg8HHkjOcr5",
          "id": "1qUNuw7pQl8Eg8HHkjOcr5",
          "name": "Marcellus TheSinger",
          "type": "artist",
          "uri": "spotify:artist:1qUNuw7pQl8Eg8HHkjOcr5"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 243288,
        "explicit": true,
        "external_ids": {
          "isrc": "AUMEV2378461"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2jvp7Q2WIhh6Gm0MrG01eg"
        },
        "href": "https://api.spotify.com/v1/tracks/2jvp7Q2WIhh6Gm0MrG01eg",
        "id": "2jvp7Q2WIhh6Gm0MrG01eg",
        "is_local": false,
        "name": "Ole Ahh Uncle",
        "popularity": 36,
        "preview_url": "https://p.scdn.co/mp3-preview/ee0c48a807c91f81acb1adb96b0c947535bbab6e?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:2jvp7Q2WIhh6Gm0MrG01eg"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0kbYTNQb4Pb1rPbbaF0pT4"
            },
            "href": "https://api.spotify.com/v1/artists/0kbYTNQb4Pb1rPbbaF0pT4",
            "id": "0kbYTNQb4Pb1rPbbaF0pT4",
            "name": "Miles Davis",
            "type": "artist",
            "uri": "spotify:artist:0kbYTNQb4Pb1rPbbaF0pT4"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3rs2Wq1755vGmXxIioU7Xo"
          },
          "href": "https://api.spotify.com/v1/albums/3rs2Wq1755vGmXxIioU7Xo",
          "id": "3rs2Wq1755vGmXxIioU7Xo",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27342a04303e6eb1100df3ea036",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0242a04303e6eb1100df3ea036",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485142a04303e6eb1100df3ea036",
            "width": 64
          }],
          "name": "Bags' Groove (Rudy Van Gelder Remaster)",
          "release_date": "1957-01-01",
          "release_date_precision": "day",
          "total_tracks": 7,
          "type": "album",
          "uri": "spotify:album:3rs2Wq1755vGmXxIioU7Xo"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0kbYTNQb4Pb1rPbbaF0pT4"
          },
          "href": "https://api.spotify.com/v1/artists/0kbYTNQb4Pb1rPbbaF0pT4",
          "id": "0kbYTNQb4Pb1rPbbaF0pT4",
          "name": "Miles Davis",
          "type": "artist",
          "uri": "spotify:artist:0kbYTNQb4Pb1rPbbaF0pT4"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1VEzN9lxvG6KPR3QQGsebR"
          },
          "href": "https://api.spotify.com/v1/artists/1VEzN9lxvG6KPR3QQGsebR",
          "id": "1VEzN9lxvG6KPR3QQGsebR",
          "name": "Sonny Rollins",
          "type": "artist",
          "uri": "spotify:artist:1VEzN9lxvG6KPR3QQGsebR"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5ZATfKurLqflrBhv2FLht5"
          },
          "href": "https://api.spotify.com/v1/artists/5ZATfKurLqflrBhv2FLht5",
          "id": "5ZATfKurLqflrBhv2FLht5",
          "name": "Horace Silver",
          "type": "artist",
          "uri": "spotify:artist:5ZATfKurLqflrBhv2FLht5"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7xwlN7fhoOwNgDmRTwYZOa"
          },
          "href": "https://api.spotify.com/v1/artists/7xwlN7fhoOwNgDmRTwYZOa",
          "id": "7xwlN7fhoOwNgDmRTwYZOa",
          "name": "Kenny Clarke",
          "type": "artist",
          "uri": "spotify:artist:7xwlN7fhoOwNgDmRTwYZOa"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0vKbTTNdtagd8xiERj6Szb"
          },
          "href": "https://api.spotify.com/v1/artists/0vKbTTNdtagd8xiERj6Szb",
          "id": "0vKbTTNdtagd8xiERj6Szb",
          "name": "Percy Heath",
          "type": "artist",
          "uri": "spotify:artist:0vKbTTNdtagd8xiERj6Szb"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 312480,
        "explicit": false,
        "external_ids": {
          "isrc": "USC4R0720004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6xPwn3TDhmKr2LWwg15a3i"
        },
        "href": "https://api.spotify.com/v1/tracks/6xPwn3TDhmKr2LWwg15a3i",
        "id": "6xPwn3TDhmKr2LWwg15a3i",
        "is_local": false,
        "name": "Oleo - RVG Remaster",
        "popularity": 34,
        "preview_url": null,
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:6xPwn3TDhmKr2LWwg15a3i"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4tjh0ZcX8OFoBcAJpLmdeY"
            },
            "href": "https://api.spotify.com/v1/artists/4tjh0ZcX8OFoBcAJpLmdeY",
            "id": "4tjh0ZcX8OFoBcAJpLmdeY",
            "name": "KBXBIT",
            "type": "artist",
            "uri": "spotify:artist:4tjh0ZcX8OFoBcAJpLmdeY"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3TrVtSqMR2qCfFvVqOsFX3"
          },
          "href": "https://api.spotify.com/v1/albums/3TrVtSqMR2qCfFvVqOsFX3",
          "id": "3TrVtSqMR2qCfFvVqOsFX3",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273103e3a9a16a4576d1b24ff34",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02103e3a9a16a4576d1b24ff34",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851103e3a9a16a4576d1b24ff34",
            "width": 64
          }],
          "name": "Ole ole gee",
          "release_date": "2023-08-13",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:3TrVtSqMR2qCfFvVqOsFX3"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4tjh0ZcX8OFoBcAJpLmdeY"
          },
          "href": "https://api.spotify.com/v1/artists/4tjh0ZcX8OFoBcAJpLmdeY",
          "id": "4tjh0ZcX8OFoBcAJpLmdeY",
          "name": "KBXBIT",
          "type": "artist",
          "uri": "spotify:artist:4tjh0ZcX8OFoBcAJpLmdeY"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 74716,
        "explicit": false,
        "external_ids": {
          "isrc": "QZPLS2369211"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1pjAstCe8be7kKm2Mzwksa"
        },
        "href": "https://api.spotify.com/v1/tracks/1pjAstCe8be7kKm2Mzwksa",
        "id": "1pjAstCe8be7kKm2Mzwksa",
        "is_local": false,
        "name": "Ole ole gee",
        "popularity": 36,
        "preview_url": "https://p.scdn.co/mp3-preview/93f4a8c8a9a195bf734b50df5e9d6557fd762f75?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1pjAstCe8be7kKm2Mzwksa"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6w971ABEzbDRQVUfcbYrl9"
            },
            "href": "https://api.spotify.com/v1/artists/6w971ABEzbDRQVUfcbYrl9",
            "id": "6w971ABEzbDRQVUfcbYrl9",
            "name": "Grupo H-100",
            "type": "artist",
            "uri": "spotify:artist:6w971ABEzbDRQVUfcbYrl9"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "BJ", "MG", "MU", "MZ", "AO", "DJ", "ZM", "CG", "TJ", "VE", "ET"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2z2CgbcDTzP7MxAYjQDfZx"
          },
          "href": "https://api.spotify.com/v1/albums/2z2CgbcDTzP7MxAYjQDfZx",
          "id": "2z2CgbcDTzP7MxAYjQDfZx",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273ee686e9b0a67885a11610459",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02ee686e9b0a67885a11610459",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851ee686e9b0a67885a11610459",
            "width": 64
          }],
          "name": "Las Favoritas de los Viejos (En Vivo)",
          "release_date": "2017-12-08",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:2z2CgbcDTzP7MxAYjQDfZx"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6w971ABEzbDRQVUfcbYrl9"
          },
          "href": "https://api.spotify.com/v1/artists/6w971ABEzbDRQVUfcbYrl9",
          "id": "6w971ABEzbDRQVUfcbYrl9",
          "name": "Grupo H-100",
          "type": "artist",
          "uri": "spotify:artist:6w971ABEzbDRQVUfcbYrl9"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "BJ", "MG", "MU", "MZ", "AO", "DJ", "ZM", "CG", "TJ", "VE", "ET"],
        "disc_number": 1,
        "duration_ms": 266997,
        "explicit": false,
        "external_ids": {
          "isrc": "TCADJ1796980"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1CyNqgTLZ29WhWI2ao6T8x"
        },
        "href": "https://api.spotify.com/v1/tracks/1CyNqgTLZ29WhWI2ao6T8x",
        "id": "1CyNqgTLZ29WhWI2ao6T8x",
        "is_local": false,
        "name": "Olegario Chaidez - En Vivo",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/6204fe33896345825bf2f20f77a188968b509943?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1CyNqgTLZ29WhWI2ao6T8x"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7038Bglq6YmpBu6wPvQJiz"
            },
            "href": "https://api.spotify.com/v1/artists/7038Bglq6YmpBu6wPvQJiz",
            "id": "7038Bglq6YmpBu6wPvQJiz",
            "name": "Oleander",
            "type": "artist",
            "uri": "spotify:artist:7038Bglq6YmpBu6wPvQJiz"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3DxLga8esIW4kag2FGPWMI"
          },
          "href": "https://api.spotify.com/v1/albums/3DxLga8esIW4kag2FGPWMI",
          "id": "3DxLga8esIW4kag2FGPWMI",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f4199fadfc587e5bb6e93ca9",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f4199fadfc587e5bb6e93ca9",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f4199fadfc587e5bb6e93ca9",
            "width": 64
          }],
          "name": "February Son",
          "release_date": "1999-01-01",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:3DxLga8esIW4kag2FGPWMI"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7038Bglq6YmpBu6wPvQJiz"
          },
          "href": "https://api.spotify.com/v1/artists/7038Bglq6YmpBu6wPvQJiz",
          "id": "7038Bglq6YmpBu6wPvQJiz",
          "name": "Oleander",
          "type": "artist",
          "uri": "spotify:artist:7038Bglq6YmpBu6wPvQJiz"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 249773,
        "explicit": false,
        "external_ids": {
          "isrc": "USUR19801563"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2Y4WG7WshrpVpFh3Uveypx"
        },
        "href": "https://api.spotify.com/v1/tracks/2Y4WG7WshrpVpFh3Uveypx",
        "id": "2Y4WG7WshrpVpFh3Uveypx",
        "is_local": false,
        "name": "I Walk Alone",
        "popularity": 47,
        "preview_url": null,
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:2Y4WG7WshrpVpFh3Uveypx"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/181bsRPaVXVlUKXrxwZfHK"
            },
            "href": "https://api.spotify.com/v1/artists/181bsRPaVXVlUKXrxwZfHK",
            "id": "181bsRPaVXVlUKXrxwZfHK",
            "name": "Megan Thee Stallion",
            "type": "artist",
            "uri": "spotify:artist:181bsRPaVXVlUKXrxwZfHK"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/26jEIrN7WSAnVQXXUmLRSN"
          },
          "href": "https://api.spotify.com/v1/albums/26jEIrN7WSAnVQXXUmLRSN",
          "id": "26jEIrN7WSAnVQXXUmLRSN",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2736cf50daf249842c725cef102",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e026cf50daf249842c725cef102",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048516cf50daf249842c725cef102",
            "width": 64
          }],
          "name": "Tina Snow",
          "release_date": "2018-12-21",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:26jEIrN7WSAnVQXXUmLRSN"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/181bsRPaVXVlUKXrxwZfHK"
          },
          "href": "https://api.spotify.com/v1/artists/181bsRPaVXVlUKXrxwZfHK",
          "id": "181bsRPaVXVlUKXrxwZfHK",
          "name": "Megan Thee Stallion",
          "type": "artist",
          "uri": "spotify:artist:181bsRPaVXVlUKXrxwZfHK"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 214850,
        "explicit": true,
        "external_ids": {
          "isrc": "USXQS1821741"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3YEbLhXRDPTtctnb3ddg8g"
        },
        "href": "https://api.spotify.com/v1/tracks/3YEbLhXRDPTtctnb3ddg8g",
        "id": "3YEbLhXRDPTtctnb3ddg8g",
        "is_local": false,
        "name": "Big Ole Freak",
        "popularity": 65,
        "preview_url": "https://p.scdn.co/mp3-preview/f521f3fe56fd128ab347874b582a204f11831c86?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:3YEbLhXRDPTtctnb3ddg8g"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1BMb6sQJVkmUyCuodmRs2g"
            },
            "href": "https://api.spotify.com/v1/artists/1BMb6sQJVkmUyCuodmRs2g",
            "id": "1BMb6sQJVkmUyCuodmRs2g",
            "name": "Oleta Adams",
            "type": "artist",
            "uri": "spotify:artist:1BMb6sQJVkmUyCuodmRs2g"
          }],
          "available_markets": ["MX", "US"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2U6BLZitsauouOL80Avn7f"
          },
          "href": "https://api.spotify.com/v1/albums/2U6BLZitsauouOL80Avn7f",
          "id": "2U6BLZitsauouOL80Avn7f",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27397e6bb927764c2f8000ed192",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0297e6bb927764c2f8000ed192",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485197e6bb927764c2f8000ed192",
            "width": 64
          }],
          "name": "Circle Of One",
          "release_date": "1990-01-01",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2U6BLZitsauouOL80Avn7f"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1BMb6sQJVkmUyCuodmRs2g"
          },
          "href": "https://api.spotify.com/v1/artists/1BMb6sQJVkmUyCuodmRs2g",
          "id": "1BMb6sQJVkmUyCuodmRs2g",
          "name": "Oleta Adams",
          "type": "artist",
          "uri": "spotify:artist:1BMb6sQJVkmUyCuodmRs2g"
        }],
        "available_markets": ["MX", "US"],
        "disc_number": 1,
        "duration_ms": 276733,
        "explicit": false,
        "external_ids": {
          "isrc": "GBF089090003"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1KT3ndndHOGXePgC4o0Jq9"
        },
        "href": "https://api.spotify.com/v1/tracks/1KT3ndndHOGXePgC4o0Jq9",
        "id": "1KT3ndndHOGXePgC4o0Jq9",
        "is_local": false,
        "name": "Get Here",
        "popularity": 48,
        "preview_url": null,
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1KT3ndndHOGXePgC4o0Jq9"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3iXeAZ8862AyoZ5ZGg800O"
            },
            "href": "https://api.spotify.com/v1/artists/3iXeAZ8862AyoZ5ZGg800O",
            "id": "3iXeAZ8862AyoZ5ZGg800O",
            "name": "Ole 60",
            "type": "artist",
            "uri": "spotify:artist:3iXeAZ8862AyoZ5ZGg800O"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1KTvTGon7YPfnAAEGnSHBc"
          },
          "href": "https://api.spotify.com/v1/albums/1KTvTGon7YPfnAAEGnSHBc",
          "id": "1KTvTGon7YPfnAAEGnSHBc",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bae1c1d3921d9424b041ca49",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bae1c1d3921d9424b041ca49",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bae1c1d3921d9424b041ca49",
            "width": 64
          }],
          "name": "three twenty four",
          "release_date": "2023-08-29",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:1KTvTGon7YPfnAAEGnSHBc"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3iXeAZ8862AyoZ5ZGg800O"
          },
          "href": "https://api.spotify.com/v1/artists/3iXeAZ8862AyoZ5ZGg800O",
          "id": "3iXeAZ8862AyoZ5ZGg800O",
          "name": "Ole 60",
          "type": "artist",
          "uri": "spotify:artist:3iXeAZ8862AyoZ5ZGg800O"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 190056,
        "explicit": false,
        "external_ids": {
          "isrc": "QZRP52336490"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6B9wZc2c0UDcq6zvFayGuI"
        },
        "href": "https://api.spotify.com/v1/tracks/6B9wZc2c0UDcq6zvFayGuI",
        "id": "6B9wZc2c0UDcq6zvFayGuI",
        "is_local": false,
        "name": "dust 2 dust",
        "popularity": 46,
        "preview_url": "https://p.scdn.co/mp3-preview/e09a079f43a6a94b28916d4b988a2479d72b5279?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:6B9wZc2c0UDcq6zvFayGuI"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4AAGqhXf0H3FXHXkQzgLOi"
            },
            "href": "https://api.spotify.com/v1/artists/4AAGqhXf0H3FXHXkQzgLOi",
            "id": "4AAGqhXf0H3FXHXkQzgLOi",
            "name": "Las Tres Abejas",
            "type": "artist",
            "uri": "spotify:artist:4AAGqhXf0H3FXHXkQzgLOi"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1mJRv18DBOxzSBiYHC3xvC"
          },
          "href": "https://api.spotify.com/v1/albums/1mJRv18DBOxzSBiYHC3xvC",
          "id": "1mJRv18DBOxzSBiYHC3xvC",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2737bb09f6f29d7021f5e930a6d",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e027bb09f6f29d7021f5e930a6d",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048517bb09f6f29d7021f5e930a6d",
            "width": 64
          }],
          "name": "Olessa",
          "release_date": "2022-04-22",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:1mJRv18DBOxzSBiYHC3xvC"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4AAGqhXf0H3FXHXkQzgLOi"
          },
          "href": "https://api.spotify.com/v1/artists/4AAGqhXf0H3FXHXkQzgLOi",
          "id": "4AAGqhXf0H3FXHXkQzgLOi",
          "name": "Las Tres Abejas",
          "type": "artist",
          "uri": "spotify:artist:4AAGqhXf0H3FXHXkQzgLOi"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 187000,
        "explicit": false,
        "external_ids": {
          "isrc": "US66W2200441"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3uWeyoRHCWz52lhK37mYmT"
        },
        "href": "https://api.spotify.com/v1/tracks/3uWeyoRHCWz52lhK37mYmT",
        "id": "3uWeyoRHCWz52lhK37mYmT",
        "is_local": false,
        "name": "Olessa",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/c7ebfb2366785b64930783b344cad93218df633f?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3uWeyoRHCWz52lhK37mYmT"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4bthk9UfsYUYdcFyqxmSUU"
            },
            "href": "https://api.spotify.com/v1/artists/4bthk9UfsYUYdcFyqxmSUU",
            "id": "4bthk9UfsYUYdcFyqxmSUU",
            "name": "Tears For Fears",
            "type": "artist",
            "uri": "spotify:artist:4bthk9UfsYUYdcFyqxmSUU"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4M0DNIYXbpCdKnVV4LoD9X"
          },
          "href": "https://api.spotify.com/v1/albums/4M0DNIYXbpCdKnVV4LoD9X",
          "id": "4M0DNIYXbpCdKnVV4LoD9X",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2731499a35b746104aaa751b855",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e021499a35b746104aaa751b855",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048511499a35b746104aaa751b855",
            "width": 64
          }],
          "name": "The Seeds Of Love",
          "release_date": "1989-09-25",
          "release_date_precision": "day",
          "total_tracks": 8,
          "type": "album",
          "uri": "spotify:album:4M0DNIYXbpCdKnVV4LoD9X"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4bthk9UfsYUYdcFyqxmSUU"
          },
          "href": "https://api.spotify.com/v1/artists/4bthk9UfsYUYdcFyqxmSUU",
          "id": "4bthk9UfsYUYdcFyqxmSUU",
          "name": "Tears For Fears",
          "type": "artist",
          "uri": "spotify:artist:4bthk9UfsYUYdcFyqxmSUU"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1BMb6sQJVkmUyCuodmRs2g"
          },
          "href": "https://api.spotify.com/v1/artists/1BMb6sQJVkmUyCuodmRs2g",
          "id": "1BMb6sQJVkmUyCuodmRs2g",
          "name": "Oleta Adams",
          "type": "artist",
          "uri": "spotify:artist:1BMb6sQJVkmUyCuodmRs2g"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 390906,
        "explicit": false,
        "external_ids": {
          "isrc": "GBF088900129"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1ydGjYPl6SkTBwy6yhRCJT"
        },
        "href": "https://api.spotify.com/v1/tracks/1ydGjYPl6SkTBwy6yhRCJT",
        "id": "1ydGjYPl6SkTBwy6yhRCJT",
        "is_local": false,
        "name": "Woman In Chains",
        "popularity": 68,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1ydGjYPl6SkTBwy6yhRCJT"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4jXfFzeP66Zy67HM2mvIIF"
            },
            "href": "https://api.spotify.com/v1/artists/4jXfFzeP66Zy67HM2mvIIF",
            "id": "4jXfFzeP66Zy67HM2mvIIF",
            "name": "Bill Evans",
            "type": "artist",
            "uri": "spotify:artist:4jXfFzeP66Zy67HM2mvIIF"
          }],
          "available_markets": ["AD", "AE", "AR", "AT", "AU", "BA", "BD", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CW", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FR", "GB", "GN", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JO", "JP", "KH", "KR", "KW", "LA", "LB", "LI", "LK", "LT", "LU", "LV", "LY", "MA", "MC", "ME", "MK", "MT", "MU", "MX", "MY", "NG", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PT", "PY", "QA", "RO", "RS", "RW", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "VE", "VN", "XK", "ZA"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2zSAVheEFBPMuUozd6C9gt"
          },
          "href": "https://api.spotify.com/v1/albums/2zSAVheEFBPMuUozd6C9gt",
          "id": "2zSAVheEFBPMuUozd6C9gt",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27386ae75aef90b01b817da4378",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0286ae75aef90b01b817da4378",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485186ae75aef90b01b817da4378",
            "width": 64
          }],
          "name": "Everybody Digs Bill Evans",
          "release_date": "1959",
          "release_date_precision": "year",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:2zSAVheEFBPMuUozd6C9gt"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4jXfFzeP66Zy67HM2mvIIF"
          },
          "href": "https://api.spotify.com/v1/artists/4jXfFzeP66Zy67HM2mvIIF",
          "id": "4jXfFzeP66Zy67HM2mvIIF",
          "name": "Bill Evans",
          "type": "artist",
          "uri": "spotify:artist:4jXfFzeP66Zy67HM2mvIIF"
        }],
        "available_markets": ["AD", "AE", "AR", "AT", "AU", "BA", "BD", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CW", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FR", "GB", "GN", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JO", "JP", "KH", "KR", "KW", "LA", "LB", "LI", "LK", "LT", "LU", "LV", "LY", "MA", "MC", "ME", "MK", "MT", "MU", "MX", "MY", "NG", "NI", "NL", "NO", "OM", "PA", "PE", "PH", "PL", "PT", "PY", "QA", "RO", "RS", "RW", "SA", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "UA", "US", "VE", "VN", "XK", "ZA"],
        "disc_number": 1,
        "duration_ms": 249440,
        "explicit": false,
        "external_ids": {
          "isrc": "USFI80700087"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3llGYv9Qdg9WbWlsL3hTjz"
        },
        "href": "https://api.spotify.com/v1/tracks/3llGYv9Qdg9WbWlsL3hTjz",
        "id": "3llGYv9Qdg9WbWlsL3hTjz",
        "is_local": false,
        "name": "Oleo",
        "popularity": 31,
        "preview_url": null,
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:3llGYv9Qdg9WbWlsL3hTjz"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2QWIScpFDNxmS6ZEMIUvgm"
            },
            "href": "https://api.spotify.com/v1/artists/2QWIScpFDNxmS6ZEMIUvgm",
            "id": "2QWIScpFDNxmS6ZEMIUvgm",
            "name": "Julieta Venegas",
            "type": "artist",
            "uri": "spotify:artist:2QWIScpFDNxmS6ZEMIUvgm"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3pNoZEMsLO0HZygvwaXANB"
          },
          "href": "https://api.spotify.com/v1/albums/3pNoZEMsLO0HZygvwaXANB",
          "id": "3pNoZEMsLO0HZygvwaXANB",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273c0071a27b79e46c09eef7caa",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02c0071a27b79e46c09eef7caa",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851c0071a27b79e46c09eef7caa",
            "width": 64
          }],
          "name": "Si",
          "release_date": "2003-11-18",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:3pNoZEMsLO0HZygvwaXANB"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2QWIScpFDNxmS6ZEMIUvgm"
          },
          "href": "https://api.spotify.com/v1/artists/2QWIScpFDNxmS6ZEMIUvgm",
          "id": "2QWIScpFDNxmS6ZEMIUvgm",
          "name": "Julieta Venegas",
          "type": "artist",
          "uri": "spotify:artist:2QWIScpFDNxmS6ZEMIUvgm"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 193866,
        "explicit": false,
        "external_ids": {
          "isrc": "MXF010300347"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2cIO8gKMYHKe7JjIoictxl"
        },
        "href": "https://api.spotify.com/v1/tracks/2cIO8gKMYHKe7JjIoictxl",
        "id": "2cIO8gKMYHKe7JjIoictxl",
        "is_local": false,
        "name": "Oleada",
        "popularity": 47,
        "preview_url": "https://p.scdn.co/mp3-preview/834d6484c59e5e44aa6c9d283d23d42e4ce77dd6?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 10,
        "type": "track",
        "uri": "spotify:track:2cIO8gKMYHKe7JjIoictxl"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3iXeAZ8862AyoZ5ZGg800O"
            },
            "href": "https://api.spotify.com/v1/artists/3iXeAZ8862AyoZ5ZGg800O",
            "id": "3iXeAZ8862AyoZ5ZGg800O",
            "name": "Ole 60",
            "type": "artist",
            "uri": "spotify:artist:3iXeAZ8862AyoZ5ZGg800O"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1KTvTGon7YPfnAAEGnSHBc"
          },
          "href": "https://api.spotify.com/v1/albums/1KTvTGon7YPfnAAEGnSHBc",
          "id": "1KTvTGon7YPfnAAEGnSHBc",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273bae1c1d3921d9424b041ca49",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02bae1c1d3921d9424b041ca49",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851bae1c1d3921d9424b041ca49",
            "width": 64
          }],
          "name": "three twenty four",
          "release_date": "2023-08-29",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:1KTvTGon7YPfnAAEGnSHBc"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3iXeAZ8862AyoZ5ZGg800O"
          },
          "href": "https://api.spotify.com/v1/artists/3iXeAZ8862AyoZ5ZGg800O",
          "id": "3iXeAZ8862AyoZ5ZGg800O",
          "name": "Ole 60",
          "type": "artist",
          "uri": "spotify:artist:3iXeAZ8862AyoZ5ZGg800O"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 254063,
        "explicit": false,
        "external_ids": {
          "isrc": "QZRP52336488"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2QMLTeT75rdkWikD8SjNIR"
        },
        "href": "https://api.spotify.com/v1/tracks/2QMLTeT75rdkWikD8SjNIR",
        "id": "2QMLTeT75rdkWikD8SjNIR",
        "is_local": false,
        "name": "insane",
        "popularity": 46,
        "preview_url": "https://p.scdn.co/mp3-preview/bd45c9227d3acd0218839fba007779594dffe921?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:2QMLTeT75rdkWikD8SjNIR"
      }, {
        "album": {
          "album_type": "album",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0ZvsEkINadmEV4qzS4ollh"
            },
            "href": "https://api.spotify.com/v1/artists/0ZvsEkINadmEV4qzS4ollh",
            "id": "0ZvsEkINadmEV4qzS4ollh",
            "name": "Qing Madi",
            "type": "artist",
            "uri": "spotify:artist:0ZvsEkINadmEV4qzS4ollh"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/03pDzWfMzVVQL3BRVIutJn"
          },
          "href": "https://api.spotify.com/v1/albums/03pDzWfMzVVQL3BRVIutJn",
          "id": "03pDzWfMzVVQL3BRVIutJn",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273db422b5094566155b5d12c25",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02db422b5094566155b5d12c25",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851db422b5094566155b5d12c25",
            "width": 64
          }],
          "name": "Qing Madi",
          "release_date": "2023-11-17",
          "release_date_precision": "day",
          "total_tracks": 7,
          "type": "album",
          "uri": "spotify:album:03pDzWfMzVVQL3BRVIutJn"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0ZvsEkINadmEV4qzS4ollh"
          },
          "href": "https://api.spotify.com/v1/artists/0ZvsEkINadmEV4qzS4ollh",
          "id": "0ZvsEkINadmEV4qzS4ollh",
          "name": "Qing Madi",
          "type": "artist",
          "uri": "spotify:artist:0ZvsEkINadmEV4qzS4ollh"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3zaDigUwjHvjOkSn0NDf9x"
          },
          "href": "https://api.spotify.com/v1/artists/3zaDigUwjHvjOkSn0NDf9x",
          "id": "3zaDigUwjHvjOkSn0NDf9x",
          "name": "Bnxn",
          "type": "artist",
          "uri": "spotify:artist:3zaDigUwjHvjOkSn0NDf9x"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 170322,
        "explicit": false,
        "external_ids": {
          "isrc": "USQX92304282"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6GkFuU6FVfx866bhM1T1Iz"
        },
        "href": "https://api.spotify.com/v1/tracks/6GkFuU6FVfx866bhM1T1Iz",
        "id": "6GkFuU6FVfx866bhM1T1Iz",
        "is_local": false,
        "name": "Ole (feat. BNXN)",
        "popularity": 62,
        "preview_url": "https://p.scdn.co/mp3-preview/872be1634e3c67714d5af1b44340f98ed9356d72?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:6GkFuU6FVfx866bhM1T1Iz"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
            },
            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
            "id": "0LyfQWJT6nXafLPZqxe9Of",
            "name": "Various Artists",
            "type": "artist",
            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4G3LgNCIT4yHn2pF4AfrsR"
          },
          "href": "https://api.spotify.com/v1/albums/4G3LgNCIT4yHn2pF4AfrsR",
          "id": "4G3LgNCIT4yHn2pF4AfrsR",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273e71155473679ad4b78f94edf",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02e71155473679ad4b78f94edf",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851e71155473679ad4b78f94edf",
            "width": 64
          }],
          "name": "Jawaani Jaaneman (Original Motion Picture Soundtrack)",
          "release_date": "2020-01-15",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:4G3LgNCIT4yHn2pF4AfrsR"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2LgKrgRJcbJlt14i1LTzDU"
          },
          "href": "https://api.spotify.com/v1/artists/2LgKrgRJcbJlt14i1LTzDU",
          "id": "2LgKrgRJcbJlt14i1LTzDU",
          "name": "Amit Mishra",
          "type": "artist",
          "uri": "spotify:artist:2LgKrgRJcbJlt14i1LTzDU"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2ZRrPOjBIWoKK5rHedLijj"
          },
          "href": "https://api.spotify.com/v1/artists/2ZRrPOjBIWoKK5rHedLijj",
          "id": "2ZRrPOjBIWoKK5rHedLijj",
          "name": "Abhijeet",
          "type": "artist",
          "uri": "spotify:artist:2ZRrPOjBIWoKK5rHedLijj"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 144543,
        "explicit": false,
        "external_ids": {
          "isrc": "INT101903164"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4v1iuf9rFqnzru36khzHen"
        },
        "href": "https://api.spotify.com/v1/tracks/4v1iuf9rFqnzru36khzHen",
        "id": "4v1iuf9rFqnzru36khzHen",
        "is_local": false,
        "name": "Ole Ole 2.0",
        "popularity": 54,
        "preview_url": "https://p.scdn.co/mp3-preview/454399f94bf0ee9318e60297752ed8341178fb82?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:4v1iuf9rFqnzru36khzHen"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2Z9KL8Zmqx5Sg3cd7Fldhl"
            },
            "href": "https://api.spotify.com/v1/artists/2Z9KL8Zmqx5Sg3cd7Fldhl",
            "id": "2Z9KL8Zmqx5Sg3cd7Fldhl",
            "name": "Olexesh",
            "type": "artist",
            "uri": "spotify:artist:2Z9KL8Zmqx5Sg3cd7Fldhl"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6FlJleUXbFb19c0U2BocbM"
            },
            "href": "https://api.spotify.com/v1/artists/6FlJleUXbFb19c0U2BocbM",
            "id": "6FlJleUXbFb19c0U2BocbM",
            "name": "MEL",
            "type": "artist",
            "uri": "spotify:artist:6FlJleUXbFb19c0U2BocbM"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/70WlgrBpuQds43whbj3ORV"
          },
          "href": "https://api.spotify.com/v1/albums/70WlgrBpuQds43whbj3ORV",
          "id": "70WlgrBpuQds43whbj3ORV",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273f5c5ff591598e3193b42e03f",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02f5c5ff591598e3193b42e03f",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851f5c5ff591598e3193b42e03f",
            "width": 64
          }],
          "name": "Schutzengel",
          "release_date": "2024-02-08",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:70WlgrBpuQds43whbj3ORV"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2Z9KL8Zmqx5Sg3cd7Fldhl"
          },
          "href": "https://api.spotify.com/v1/artists/2Z9KL8Zmqx5Sg3cd7Fldhl",
          "id": "2Z9KL8Zmqx5Sg3cd7Fldhl",
          "name": "Olexesh",
          "type": "artist",
          "uri": "spotify:artist:2Z9KL8Zmqx5Sg3cd7Fldhl"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6FlJleUXbFb19c0U2BocbM"
          },
          "href": "https://api.spotify.com/v1/artists/6FlJleUXbFb19c0U2BocbM",
          "id": "6FlJleUXbFb19c0U2BocbM",
          "name": "MEL",
          "type": "artist",
          "uri": "spotify:artist:6FlJleUXbFb19c0U2BocbM"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 157995,
        "explicit": true,
        "external_ids": {
          "isrc": "DEVY22400001"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/26WNwITdE1JFiMuHhBpgpt"
        },
        "href": "https://api.spotify.com/v1/tracks/26WNwITdE1JFiMuHhBpgpt",
        "id": "26WNwITdE1JFiMuHhBpgpt",
        "is_local": false,
        "name": "Schutzengel",
        "popularity": 66,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:26WNwITdE1JFiMuHhBpgpt"
      }, {
        "album": {
          "album_type": "single",
          "artists": [{
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0ZvsEkINadmEV4qzS4ollh"
            },
            "href": "https://api.spotify.com/v1/artists/0ZvsEkINadmEV4qzS4ollh",
            "id": "0ZvsEkINadmEV4qzS4ollh",
            "name": "Qing Madi",
            "type": "artist",
            "uri": "spotify:artist:0ZvsEkINadmEV4qzS4ollh"
          }, {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3zaDigUwjHvjOkSn0NDf9x"
            },
            "href": "https://api.spotify.com/v1/artists/3zaDigUwjHvjOkSn0NDf9x",
            "id": "3zaDigUwjHvjOkSn0NDf9x",
            "name": "Bnxn",
            "type": "artist",
            "uri": "spotify:artist:3zaDigUwjHvjOkSn0NDf9x"
          }],
          "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1ob2YtI9F9r54JXKXt7lhX"
          },
          "href": "https://api.spotify.com/v1/albums/1ob2YtI9F9r54JXKXt7lhX",
          "id": "1ob2YtI9F9r54JXKXt7lhX",
          "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27314aa80a73e4ea58f6b06d620",
            "width": 640
          }, {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e0214aa80a73e4ea58f6b06d620",
            "width": 300
          }, {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d0000485114aa80a73e4ea58f6b06d620",
            "width": 64
          }],
          "name": "Ole",
          "release_date": "2023-07-21",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:1ob2YtI9F9r54JXKXt7lhX"
        },
        "artists": [{
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0ZvsEkINadmEV4qzS4ollh"
          },
          "href": "https://api.spotify.com/v1/artists/0ZvsEkINadmEV4qzS4ollh",
          "id": "0ZvsEkINadmEV4qzS4ollh",
          "name": "Qing Madi",
          "type": "artist",
          "uri": "spotify:artist:0ZvsEkINadmEV4qzS4ollh"
        }, {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3zaDigUwjHvjOkSn0NDf9x"
          },
          "href": "https://api.spotify.com/v1/artists/3zaDigUwjHvjOkSn0NDf9x",
          "id": "3zaDigUwjHvjOkSn0NDf9x",
          "name": "Bnxn",
          "type": "artist",
          "uri": "spotify:artist:3zaDigUwjHvjOkSn0NDf9x"
        }],
        "available_markets": ["AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID", "JP", "TH", "VN", "RO", "IL", "ZA", "SA", "AE", "BH", "QA", "OM", "KW", "EG", "MA", "DZ", "TN", "LB", "JO", "PS", "IN", "BY", "KZ", "MD", "UA", "AL", "BA", "HR", "ME", "MK", "RS", "SI", "KR", "BD", "PK", "LK", "GH", "KE", "NG", "TZ", "UG", "AG", "AM", "BS", "BB", "BZ", "BT", "BW", "BF", "CV", "CW", "DM", "FJ", "GM", "GE", "GD", "GW", "GY", "HT", "JM", "KI", "LS", "LR", "MW", "MV", "ML", "MH", "FM", "NA", "NR", "NE", "PW", "PG", "WS", "SM", "ST", "SN", "SC", "SL", "SB", "KN", "LC", "VC", "SR", "TL", "TO", "TT", "TV", "VU", "AZ", "BN", "BI", "KH", "CM", "TD", "KM", "GQ", "SZ", "GA", "GN", "KG", "LA", "MO", "MR", "MN", "NP", "RW", "TG", "UZ", "ZW", "BJ", "MG", "MU", "MZ", "AO", "CI", "DJ", "ZM", "CD", "CG", "IQ", "LY", "TJ", "VE", "ET", "XK"],
        "disc_number": 1,
        "duration_ms": 141414,
        "explicit": false,
        "external_ids": {
          "isrc": "USQX92304305"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0qOt4e94WKsVJn0fO6eL6n"
        },
        "href": "https://api.spotify.com/v1/tracks/0qOt4e94WKsVJn0fO6eL6n",
        "id": "0qOt4e94WKsVJn0fO6eL6n",
        "is_local": false,
        "name": "Ole (feat. BNXN) (Sped Up)",
        "popularity": 54,
        "preview_url": "https://p.scdn.co/mp3-preview/51d49a3f6c7e5cc8cca2838df82956fecb9a1cd9?cid=dd196a2f15604b5b8ac6fbb485be2036",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:0qOt4e94WKsVJn0fO6eL6n"
      }],
      "limit": 50,
      "next": "https://api.spotify.com/v1/search?query=ole&type=track&offset=50&limit=50",
      "offset": 0,
      "previous": null,
      "total": 1000
    }
  }


  // try {
  //   const response = await fetch(url + endpoint, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     }
  //   });

  //   if (!response.ok) {
  //     //alert("HTTP ERROR")
  //     throw new Error(`HTTP error! Status: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error('Error fetching data from Spotify:', error);
  // }
}

export const spotifyRequestCustom = async (endpoint, method, custom_headers) => {
  custom_headers['Authorization'] = `Bearer ${token}`
  try {
    const response = await fetch(url + endpoint, {
      method: method,
      headers: custom_headers
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data from Spotify:', error)
  }
}