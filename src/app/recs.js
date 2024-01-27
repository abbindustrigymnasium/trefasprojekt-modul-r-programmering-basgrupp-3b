import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image';
import { Link, router } from 'expo-router'
import * as React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import Card from '../Components/Card'
import { SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'
import { GestureHandlerRootView } from "react-native-gesture-handler";



const sampleTrackResponse  = [
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5Pwc4xIPtQLFEnJriah9YJ"
          },
          "href": "https://api.spotify.com/v1/artists/5Pwc4xIPtQLFEnJriah9YJ",
          "id": "5Pwc4xIPtQLFEnJriah9YJ",
          "name": "OneRepublic",
          "type": "artist",
          "uri": "spotify:artist:5Pwc4xIPtQLFEnJriah9YJ"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/20lOt6G8MHv8ZO7ViOmiP7"
      },
      "href": "https://api.spotify.com/v1/albums/20lOt6G8MHv8ZO7ViOmiP7",
      "id": "20lOt6G8MHv8ZO7ViOmiP7",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2739e2f95ae77cf436017ada9cb",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e029e2f95ae77cf436017ada9cb",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048519e2f95ae77cf436017ada9cb",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Native",
      "release_date": "2013-01-01",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:20lOt6G8MHv8ZO7ViOmiP7"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5Pwc4xIPtQLFEnJriah9YJ"
        },
        "href": "https://api.spotify.com/v1/artists/5Pwc4xIPtQLFEnJriah9YJ",
        "id": "5Pwc4xIPtQLFEnJriah9YJ",
        "name": "OneRepublic",
        "type": "artist",
        "uri": "spotify:artist:5Pwc4xIPtQLFEnJriah9YJ"
      }
    ],
    "disc_number": 1,
    "duration_ms": 257265,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71301306"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2tpWsVSb9UEmDRxAl1zhX1"
    },
    "href": "https://api.spotify.com/v1/tracks/2tpWsVSb9UEmDRxAl1zhX1",
    "id": "2tpWsVSb9UEmDRxAl1zhX1",
    "is_local": false,
    "is_playable": true,
    "name": "Counting Stars",
    "popularity": 90,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:2tpWsVSb9UEmDRxAl1zhX1"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
          },
          "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
          "id": "53XhwfbYqKCa1cC15pYq2q",
          "name": "Imagine Dragons",
          "type": "artist",
          "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/33pt9HBdGlAbRGBHQgsZsU"
      },
      "href": "https://api.spotify.com/v1/albums/33pt9HBdGlAbRGBHQgsZsU",
      "id": "33pt9HBdGlAbRGBHQgsZsU",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e025675e83f707f1d7271e5cf8a",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048515675e83f707f1d7271e5cf8a",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Evolve",
      "release_date": "2017-06-23",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:33pt9HBdGlAbRGBHQgsZsU"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
        },
        "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
        "id": "53XhwfbYqKCa1cC15pYq2q",
        "name": "Imagine Dragons",
        "type": "artist",
        "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
      }
    ],
    "disc_number": 1,
    "duration_ms": 204346,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71700626"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP"
    },
    "href": "https://api.spotify.com/v1/tracks/0pqnGHJpmpxLKifKRmU6WP",
    "id": "0pqnGHJpmpxLKifKRmU6WP",
    "is_local": false,
    "is_playable": true,
    "name": "Believer",
    "popularity": 90,
    "preview_url": null,
    "track_number": 4,
    "type": "track",
    "uri": "spotify:track:0pqnGHJpmpxLKifKRmU6WP"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x"
          },
          "href": "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x",
          "id": "5K4W6rqBFWDnAN6FQUkS6x",
          "name": "Kanye West",
          "type": "artist",
          "uri": "spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/7gsWAHLeT0w7es6FofOXk1"
      },
      "href": "https://api.spotify.com/v1/albums/7gsWAHLeT0w7es6FofOXk1",
      "id": "7gsWAHLeT0w7es6FofOXk1",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2732a7db835b912dc5014bd37f4",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e022a7db835b912dc5014bd37f4",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048512a7db835b912dc5014bd37f4",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "The Life Of Pablo",
      "release_date": "2016-06-10",
      "release_date_precision": "day",
      "total_tracks": 20,
      "type": "album",
      "uri": "spotify:album:7gsWAHLeT0w7es6FofOXk1"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x"
        },
        "href": "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x",
        "id": "5K4W6rqBFWDnAN6FQUkS6x",
        "name": "Kanye West",
        "type": "artist",
        "uri": "spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"
      }
    ],
    "disc_number": 1,
    "duration_ms": 135920,
    "explicit": true,
    "external_ids": {
      "isrc": "USUM71603067"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/4KW1lqgSr8TKrvBII0Brf8"
    },
    "href": "https://api.spotify.com/v1/tracks/4KW1lqgSr8TKrvBII0Brf8",
    "id": "4KW1lqgSr8TKrvBII0Brf8",
    "is_local": false,
    "is_playable": true,
    "name": "Father Stretch My Hands Pt. 1",
    "popularity": 90,
    "preview_url": null,
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:4KW1lqgSr8TKrvBII0Brf8"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
          },
          "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
          "id": "6eUKZXaKkcviH0Ku9w2n3V",
          "name": "Ed Sheeran",
          "type": "artist",
          "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3T4tUhGYeRNVUGevb0wThu"
      },
      "href": "https://api.spotify.com/v1/albums/3T4tUhGYeRNVUGevb0wThu",
      "id": "3T4tUhGYeRNVUGevb0wThu",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "÷ (Deluxe)",
      "release_date": "2017-03-03",
      "release_date_precision": "day",
      "total_tracks": 16,
      "type": "album",
      "uri": "spotify:album:3T4tUhGYeRNVUGevb0wThu"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
        },
        "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
        "id": "6eUKZXaKkcviH0Ku9w2n3V",
        "name": "Ed Sheeran",
        "type": "artist",
        "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
      }
    ],
    "disc_number": 1,
    "duration_ms": 263400,
    "explicit": false,
    "external_ids": {
      "isrc": "GBAHS1700024"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
    },
    "href": "https://api.spotify.com/v1/tracks/0tgVpDi06FyKpA1z0VMD4v",
    "id": "0tgVpDi06FyKpA1z0VMD4v",
    "is_local": false,
    "is_playable": true,
    "name": "Perfect",
    "popularity": 90,
    "preview_url": "https://p.scdn.co/mp3-preview/4e30857a3c7da3f8891483643e310bb233afadd2?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:0tgVpDi06FyKpA1z0VMD4v"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH"
          },
          "href": "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
          "id": "7Ln80lUS6He07XvHI8qqHH",
          "name": "Arctic Monkeys",
          "type": "artist",
          "uri": "spotify:artist:7Ln80lUS6He07XvHI8qqHH"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6645HGh7ZOZSUTpqW9iYLR"
      },
      "href": "https://api.spotify.com/v1/albums/6645HGh7ZOZSUTpqW9iYLR",
      "id": "6645HGh7ZOZSUTpqW9iYLR",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2730acf7f2eefe5bd36efbc26b4",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e020acf7f2eefe5bd36efbc26b4",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048510acf7f2eefe5bd36efbc26b4",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "AM",
      "release_date": "2013-01-01",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:6645HGh7ZOZSUTpqW9iYLR"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH"
        },
        "href": "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
        "id": "7Ln80lUS6He07XvHI8qqHH",
        "name": "Arctic Monkeys",
        "type": "artist",
        "uri": "spotify:artist:7Ln80lUS6He07XvHI8qqHH"
      }
    ],
    "disc_number": 1,
    "duration_ms": 272394,
    "explicit": false,
    "external_ids": {
      "isrc": "GBCEL1300362"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst"
    },
    "href": "https://api.spotify.com/v1/tracks/5FVd6KXrgO9B3JPmC8OPst",
    "id": "5FVd6KXrgO9B3JPmC8OPst",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3rq5w4bQGigXOfdN30ATJt"
      },
      "href": "https://api.spotify.com/v1/tracks/3rq5w4bQGigXOfdN30ATJt",
      "id": "3rq5w4bQGigXOfdN30ATJt",
      "type": "track",
      "uri": "spotify:track:3rq5w4bQGigXOfdN30ATJt"
    },
    "name": "Do I Wanna Know?",
    "popularity": 90,
    "preview_url": "https://p.scdn.co/mp3-preview/006bc465fe3d1c04dae93a050eca9d402a7322b8?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:5FVd6KXrgO9B3JPmC8OPst"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
          },
          "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
          "id": "1Xyo4u8uXC1ZmMpatF05PJ",
          "name": "The Weeknd",
          "type": "artist",
          "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/0P3oVJBFOv3TDXlYRhGL7s"
      },
      "href": "https://api.spotify.com/v1/albums/0P3oVJBFOv3TDXlYRhGL7s",
      "id": "0P3oVJBFOv3TDXlYRhGL7s",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2737fcead687e99583072cc217b",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e027fcead687e99583072cc217b",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048517fcead687e99583072cc217b",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Beauty Behind The Madness",
      "release_date": "2015-08-28",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:0P3oVJBFOv3TDXlYRhGL7s"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
        },
        "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
        "id": "1Xyo4u8uXC1ZmMpatF05PJ",
        "name": "The Weeknd",
        "type": "artist",
        "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
      }
    ],
    "disc_number": 1,
    "duration_ms": 242253,
    "explicit": true,
    "external_ids": {
      "isrc": "USUG11500737"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7fBv7CLKzipRk6EC6TWHOB"
    },
    "href": "https://api.spotify.com/v1/tracks/7fBv7CLKzipRk6EC6TWHOB",
    "id": "7fBv7CLKzipRk6EC6TWHOB",
    "is_local": false,
    "is_playable": true,
    "name": "The Hills",
    "popularity": 90,
    "preview_url": null,
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:7fBv7CLKzipRk6EC6TWHOB"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
          },
          "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
          "id": "0Y5tJX1MQlPlqiwlOH1tJY",
          "name": "Travis Scott",
          "type": "artist",
          "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/42WVQWuf1teDysXiOupIZt"
      },
      "href": "https://api.spotify.com/v1/albums/42WVQWuf1teDysXiOupIZt",
      "id": "42WVQWuf1teDysXiOupIZt",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273f54b99bf27cda88f4a7403ce",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02f54b99bf27cda88f4a7403ce",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851f54b99bf27cda88f4a7403ce",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Birds In The Trap Sing McKnight",
      "release_date": "2016-09-16",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:42WVQWuf1teDysXiOupIZt"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
        },
        "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
        "id": "0Y5tJX1MQlPlqiwlOH1tJY",
        "name": "Travis Scott",
        "type": "artist",
        "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
      }
    ],
    "disc_number": 1,
    "duration_ms": 243836,
    "explicit": true,
    "external_ids": {
      "isrc": "USSM11607555"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/6gBFPUFcJLzWGx4lenP6h2"
    },
    "href": "https://api.spotify.com/v1/tracks/6gBFPUFcJLzWGx4lenP6h2",
    "id": "6gBFPUFcJLzWGx4lenP6h2",
    "is_local": false,
    "is_playable": true,
    "name": "goosebumps",
    "popularity": 89,
    "preview_url": "https://p.scdn.co/mp3-preview/5c45fee2743d39984ed2c1e2493d04a42d626f81?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 9,
    "type": "track",
    "uri": "spotify:track:6gBFPUFcJLzWGx4lenP6h2"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr"
          },
          "href": "https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
          "id": "7n2wHs1TKAczGzO7Dd2rGr",
          "name": "Shawn Mendes",
          "type": "artist",
          "uri": "spotify:artist:7n2wHs1TKAczGzO7Dd2rGr"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3wBabo4pmzsYjALMSKY7Iq"
      },
      "href": "https://api.spotify.com/v1/albums/3wBabo4pmzsYjALMSKY7Iq",
      "id": "3wBabo4pmzsYjALMSKY7Iq",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ea3ef7697cfd5705b8f47521",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851ea3ef7697cfd5705b8f47521",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Illuminate (Deluxe)",
      "release_date": "2017-04-20",
      "release_date_precision": "day",
      "total_tracks": 16,
      "type": "album",
      "uri": "spotify:album:3wBabo4pmzsYjALMSKY7Iq"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr"
        },
        "href": "https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
        "id": "7n2wHs1TKAczGzO7Dd2rGr",
        "name": "Shawn Mendes",
        "type": "artist",
        "uri": "spotify:artist:7n2wHs1TKAczGzO7Dd2rGr"
      }
    ],
    "disc_number": 1,
    "duration_ms": 199440,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71702833"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7JJmb5XwzOO8jgpou264Ml"
    },
    "href": "https://api.spotify.com/v1/tracks/7JJmb5XwzOO8jgpou264Ml",
    "id": "7JJmb5XwzOO8jgpou264Ml",
    "is_local": false,
    "is_playable": true,
    "name": "There's Nothing Holdin' Me Back",
    "popularity": 89,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:7JJmb5XwzOO8jgpou264Ml"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C"
          },
          "href": "https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C",
          "id": "0du5cEVh5yTK9QJze8zA0C",
          "name": "Bruno Mars",
          "type": "artist",
          "uri": "spotify:artist:0du5cEVh5yTK9QJze8zA0C"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4PgleR09JVnm3zY1fW3XBA"
      },
      "href": "https://api.spotify.com/v1/albums/4PgleR09JVnm3zY1fW3XBA",
      "id": "4PgleR09JVnm3zY1fW3XBA",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02232711f7d66a1e19e89e28c5",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851232711f7d66a1e19e89e28c5",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "24K Magic",
      "release_date": "2016-11-17",
      "release_date_precision": "day",
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:4PgleR09JVnm3zY1fW3XBA"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C"
        },
        "href": "https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C",
        "id": "0du5cEVh5yTK9QJze8zA0C",
        "name": "Bruno Mars",
        "type": "artist",
        "uri": "spotify:artist:0du5cEVh5yTK9QJze8zA0C"
      }
    ],
    "disc_number": 1,
    "duration_ms": 206693,
    "explicit": false,
    "external_ids": {
      "isrc": "USAT21602948"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0KKkJNfGyhkQ5aFogxQAPU"
    },
    "href": "https://api.spotify.com/v1/tracks/0KKkJNfGyhkQ5aFogxQAPU",
    "id": "0KKkJNfGyhkQ5aFogxQAPU",
    "is_local": false,
    "is_playable": true,
    "name": "That's What I Like",
    "popularity": 89,
    "preview_url": "https://p.scdn.co/mp3-preview/93046e987d8c5bfdbeea2768ac1a8ecea17bd7e0?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 4,
    "type": "track",
    "uri": "spotify:track:0KKkJNfGyhkQ5aFogxQAPU"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/10exVja0key0uqUkk6LJRT"
          },
          "href": "https://api.spotify.com/v1/artists/10exVja0key0uqUkk6LJRT",
          "id": "10exVja0key0uqUkk6LJRT",
          "name": "Vance Joy",
          "type": "artist",
          "uri": "spotify:artist:10exVja0key0uqUkk6LJRT"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6rIbiUMmZJfqJRnXhVxFvg"
      },
      "href": "https://api.spotify.com/v1/albums/6rIbiUMmZJfqJRnXhVxFvg",
      "id": "6rIbiUMmZJfqJRnXhVxFvg",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d3ce97395ff522b0d70c1094",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d3ce97395ff522b0d70c1094",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d3ce97395ff522b0d70c1094",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Dream Your Life Away",
      "release_date": "2014-09-08",
      "release_date_precision": "day",
      "total_tracks": 13,
      "type": "album",
      "uri": "spotify:album:6rIbiUMmZJfqJRnXhVxFvg"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/10exVja0key0uqUkk6LJRT"
        },
        "href": "https://api.spotify.com/v1/artists/10exVja0key0uqUkk6LJRT",
        "id": "10exVja0key0uqUkk6LJRT",
        "name": "Vance Joy",
        "type": "artist",
        "uri": "spotify:artist:10exVja0key0uqUkk6LJRT"
      }
    ],
    "disc_number": 1,
    "duration_ms": 204280,
    "explicit": false,
    "external_ids": {
      "isrc": "AULI01385760"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7yq4Qj7cqayVTp3FF9CWbm"
    },
    "href": "https://api.spotify.com/v1/tracks/7yq4Qj7cqayVTp3FF9CWbm",
    "id": "7yq4Qj7cqayVTp3FF9CWbm",
    "is_local": false,
    "is_playable": true,
    "name": "Riptide",
    "popularity": 89,
    "preview_url": "https://p.scdn.co/mp3-preview/74698d907d114f4ba0b2c129bbf260724be80b64?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 4,
    "type": "track",
    "uri": "spotify:track:7yq4Qj7cqayVTp3FF9CWbm"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq"
          },
          "href": "https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq",
          "id": "4AK6F7OLvEQ5QYCBNiQWHq",
          "name": "One Direction",
          "type": "artist",
          "uri": "spotify:artist:4AK6F7OLvEQ5QYCBNiQWHq"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4gCNyS7pidfK3rKWhB3JOY"
      },
      "href": "https://api.spotify.com/v1/albums/4gCNyS7pidfK3rKWhB3JOY",
      "id": "4gCNyS7pidfK3rKWhB3JOY",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d304ba2d71de306812eebaf4",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d304ba2d71de306812eebaf4",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "FOUR (Deluxe)",
      "release_date": "2014-11-17",
      "release_date_precision": "day",
      "total_tracks": 16,
      "type": "album",
      "uri": "spotify:album:4gCNyS7pidfK3rKWhB3JOY"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq"
        },
        "href": "https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq",
        "id": "4AK6F7OLvEQ5QYCBNiQWHq",
        "name": "One Direction",
        "type": "artist",
        "uri": "spotify:artist:4AK6F7OLvEQ5QYCBNiQWHq"
      }
    ],
    "disc_number": 1,
    "duration_ms": 226600,
    "explicit": false,
    "external_ids": {
      "isrc": "GBHMU1400165"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/5O2P9iiztwhomNh8xkR9lJ"
    },
    "href": "https://api.spotify.com/v1/tracks/5O2P9iiztwhomNh8xkR9lJ",
    "id": "5O2P9iiztwhomNh8xkR9lJ",
    "is_local": false,
    "is_playable": true,
    "name": "Night Changes",
    "popularity": 89,
    "preview_url": "https://p.scdn.co/mp3-preview/359be833b46b250c696bbb64caa5dc91f2a38c6a?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 7,
    "type": "track",
    "uri": "spotify:track:5O2P9iiztwhomNh8xkR9lJ"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
          },
          "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
          "id": "6eUKZXaKkcviH0Ku9w2n3V",
          "name": "Ed Sheeran",
          "type": "artist",
          "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3T4tUhGYeRNVUGevb0wThu"
      },
      "href": "https://api.spotify.com/v1/albums/3T4tUhGYeRNVUGevb0wThu",
      "id": "3T4tUhGYeRNVUGevb0wThu",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851ba5db46f4b838ef6027e6f96",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "÷ (Deluxe)",
      "release_date": "2017-03-03",
      "release_date_precision": "day",
      "total_tracks": 16,
      "type": "album",
      "uri": "spotify:album:3T4tUhGYeRNVUGevb0wThu"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
        },
        "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
        "id": "6eUKZXaKkcviH0Ku9w2n3V",
        "name": "Ed Sheeran",
        "type": "artist",
        "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
      }
    ],
    "disc_number": 1,
    "duration_ms": 233712,
    "explicit": false,
    "external_ids": {
      "isrc": "GBAHS1600463"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3"
    },
    "href": "https://api.spotify.com/v1/tracks/7qiZfU4dY1lWllzX7mPBI3",
    "id": "7qiZfU4dY1lWllzX7mPBI3",
    "is_local": false,
    "is_playable": true,
    "name": "Shape of You",
    "popularity": 89,
    "preview_url": "https://p.scdn.co/mp3-preview/7339548839a263fd721d01eb3364a848cad16fa7?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 4,
    "type": "track",
    "uri": "spotify:track:7qiZfU4dY1lWllzX7mPBI3"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4IWBUUAFIplrNtaOHcJPRM"
          },
          "href": "https://api.spotify.com/v1/artists/4IWBUUAFIplrNtaOHcJPRM",
          "id": "4IWBUUAFIplrNtaOHcJPRM",
          "name": "James Arthur",
          "type": "artist",
          "uri": "spotify:artist:4IWBUUAFIplrNtaOHcJPRM"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/7oiJYvEJHsmYtrgviAVIBD"
      },
      "href": "https://api.spotify.com/v1/albums/7oiJYvEJHsmYtrgviAVIBD",
      "id": "7oiJYvEJHsmYtrgviAVIBD",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27320beb61f61fcbeb33b10a9ab",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0220beb61f61fcbeb33b10a9ab",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485120beb61f61fcbeb33b10a9ab",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Back from the Edge",
      "release_date": "2016-10-28",
      "release_date_precision": "day",
      "total_tracks": 17,
      "type": "album",
      "uri": "spotify:album:7oiJYvEJHsmYtrgviAVIBD"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4IWBUUAFIplrNtaOHcJPRM"
        },
        "href": "https://api.spotify.com/v1/artists/4IWBUUAFIplrNtaOHcJPRM",
        "id": "4IWBUUAFIplrNtaOHcJPRM",
        "name": "James Arthur",
        "type": "artist",
        "uri": "spotify:artist:4IWBUUAFIplrNtaOHcJPRM"
      }
    ],
    "disc_number": 1,
    "duration_ms": 211466,
    "explicit": false,
    "external_ids": {
      "isrc": "DEE861600586"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/5uCax9HTNlzGybIStD3vDh"
    },
    "href": "https://api.spotify.com/v1/tracks/5uCax9HTNlzGybIStD3vDh",
    "id": "5uCax9HTNlzGybIStD3vDh",
    "is_local": false,
    "is_playable": true,
    "name": "Say You Won't Let Go",
    "popularity": 89,
    "preview_url": "https://p.scdn.co/mp3-preview/2eed95a3c08cd10669768ce60d1140f85ba8b951?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:5uCax9HTNlzGybIStD3vDh"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6"
          },
          "href": "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6",
          "id": "1vCWHaC5f2uS3yhpwWbIA6",
          "name": "Avicii",
          "type": "artist",
          "uri": "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/1s9tU91VJt4sU5owi29GD3"
      },
      "href": "https://api.spotify.com/v1/albums/1s9tU91VJt4sU5owi29GD3",
      "id": "1s9tU91VJt4sU5owi29GD3",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2734cfcceb6f9b1aae8752810e7",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e024cfcceb6f9b1aae8752810e7",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048514cfcceb6f9b1aae8752810e7",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "True",
      "release_date": "2013-09-13",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:1s9tU91VJt4sU5owi29GD3"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6"
        },
        "href": "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6",
        "id": "1vCWHaC5f2uS3yhpwWbIA6",
        "name": "Avicii",
        "type": "artist",
        "uri": "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6"
      }
    ],
    "disc_number": 1,
    "duration_ms": 247426,
    "explicit": false,
    "external_ids": {
      "isrc": "SEUM71301326"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0nrRP2bk19rLc0orkWPQk2"
    },
    "href": "https://api.spotify.com/v1/tracks/0nrRP2bk19rLc0orkWPQk2",
    "id": "0nrRP2bk19rLc0orkWPQk2",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/4h8VwCb1MTGoLKueQ1WgbD"
      },
      "href": "https://api.spotify.com/v1/tracks/4h8VwCb1MTGoLKueQ1WgbD",
      "id": "4h8VwCb1MTGoLKueQ1WgbD",
      "type": "track",
      "uri": "spotify:track:4h8VwCb1MTGoLKueQ1WgbD"
    },
    "name": "Wake Me Up",
    "popularity": 89,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:0nrRP2bk19rLc0orkWPQk2"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
          },
          "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
          "id": "3TVXtAsR1Inumwj472S9r4",
          "name": "Drake",
          "type": "artist",
          "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/40GMAhriYJRO1rsY4YdrZb"
      },
      "href": "https://api.spotify.com/v1/albums/40GMAhriYJRO1rsY4YdrZb",
      "id": "40GMAhriYJRO1rsY4YdrZb",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e029416ed64daf84936d89e671c",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048519416ed64daf84936d89e671c",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Views",
      "release_date": "2016-05-06",
      "release_date_precision": "day",
      "total_tracks": 20,
      "type": "album",
      "uri": "spotify:album:40GMAhriYJRO1rsY4YdrZb"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
        },
        "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
        "id": "3TVXtAsR1Inumwj472S9r4",
        "name": "Drake",
        "type": "artist",
        "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3tVQdUvClmAT7URs9V3rsp"
        },
        "href": "https://api.spotify.com/v1/artists/3tVQdUvClmAT7URs9V3rsp",
        "id": "3tVQdUvClmAT7URs9V3rsp",
        "name": "Wizkid",
        "type": "artist",
        "uri": "spotify:artist:3tVQdUvClmAT7URs9V3rsp"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/77DAFfvm3O9zT5dIoG0eIO"
        },
        "href": "https://api.spotify.com/v1/artists/77DAFfvm3O9zT5dIoG0eIO",
        "id": "77DAFfvm3O9zT5dIoG0eIO",
        "name": "Kyla",
        "type": "artist",
        "uri": "spotify:artist:77DAFfvm3O9zT5dIoG0eIO"
      }
    ],
    "disc_number": 1,
    "duration_ms": 173986,
    "explicit": false,
    "external_ids": {
      "isrc": "USCM51600028"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/1zi7xx7UVEFkmKfv06H8x0"
    },
    "href": "https://api.spotify.com/v1/tracks/1zi7xx7UVEFkmKfv06H8x0",
    "id": "1zi7xx7UVEFkmKfv06H8x0",
    "is_local": false,
    "is_playable": true,
    "name": "One Dance",
    "popularity": 91,
    "preview_url": null,
    "track_number": 12,
    "type": "track",
    "uri": "spotify:track:1zi7xx7UVEFkmKfv06H8x0"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"
          },
          "href": "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
          "id": "2h93pZq0e7k5yf4dywlkpM",
          "name": "Frank Ocean",
          "type": "artist",
          "uri": "spotify:artist:2h93pZq0e7k5yf4dywlkpM"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf"
      },
      "href": "https://api.spotify.com/v1/albums/3mH6qwIy9crq0I9YQbOuDf",
      "id": "3mH6qwIy9crq0I9YQbOuDf",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851c5649add07ed3720be9d5526",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Blonde",
      "release_date": "2016-08-20",
      "release_date_precision": "day",
      "total_tracks": 17,
      "type": "album",
      "uri": "spotify:album:3mH6qwIy9crq0I9YQbOuDf"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"
        },
        "href": "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
        "id": "2h93pZq0e7k5yf4dywlkpM",
        "name": "Frank Ocean",
        "type": "artist",
        "uri": "spotify:artist:2h93pZq0e7k5yf4dywlkpM"
      }
    ],
    "disc_number": 1,
    "duration_ms": 184516,
    "explicit": false,
    "external_ids": {
      "isrc": "QZ5C81600003"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8"
    },
    "href": "https://api.spotify.com/v1/tracks/3xKsf9qdS1CyvXSMEid6g8",
    "id": "3xKsf9qdS1CyvXSMEid6g8",
    "is_local": false,
    "is_playable": true,
    "name": "Pink + White",
    "popularity": 91,
    "preview_url": "https://p.scdn.co/mp3-preview/0e3ca894e19c37cbbbd511d9eb682d8bee030126?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:3xKsf9qdS1CyvXSMEid6g8"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"
          },
          "href": "https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH",
          "id": "6qqNVTkY8uBg9cP3Jd7DAH",
          "name": "Billie Eilish",
          "type": "artist",
          "uri": "spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny"
          },
          "href": "https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny",
          "id": "6LuN9FCkKOj5PcnpouEgny",
          "name": "Khalid",
          "type": "artist",
          "uri": "spotify:artist:6LuN9FCkKOj5PcnpouEgny"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2sBB17RXTamvj7Ncps15AK"
      },
      "href": "https://api.spotify.com/v1/albums/2sBB17RXTamvj7Ncps15AK",
      "id": "2sBB17RXTamvj7Ncps15AK",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2738a3f0a3ca7929dea23cd274c",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e028a3f0a3ca7929dea23cd274c",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048518a3f0a3ca7929dea23cd274c",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "lovely (with Khalid)",
      "release_date": "2018-04-19",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:2sBB17RXTamvj7Ncps15AK"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"
        },
        "href": "https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH",
        "id": "6qqNVTkY8uBg9cP3Jd7DAH",
        "name": "Billie Eilish",
        "type": "artist",
        "uri": "spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6LuN9FCkKOj5PcnpouEgny"
        },
        "href": "https://api.spotify.com/v1/artists/6LuN9FCkKOj5PcnpouEgny",
        "id": "6LuN9FCkKOj5PcnpouEgny",
        "name": "Khalid",
        "type": "artist",
        "uri": "spotify:artist:6LuN9FCkKOj5PcnpouEgny"
      }
    ],
    "disc_number": 1,
    "duration_ms": 200185,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71804190"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0u2P5u6lvoDfwTYjAADbn4"
    },
    "href": "https://api.spotify.com/v1/tracks/0u2P5u6lvoDfwTYjAADbn4",
    "id": "0u2P5u6lvoDfwTYjAADbn4",
    "is_local": false,
    "is_playable": true,
    "name": "lovely (with Khalid)",
    "popularity": 91,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:0u2P5u6lvoDfwTYjAADbn4"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH"
          },
          "href": "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
          "id": "7Ln80lUS6He07XvHI8qqHH",
          "name": "Arctic Monkeys",
          "type": "artist",
          "uri": "spotify:artist:7Ln80lUS6He07XvHI8qqHH"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6645HGh7ZOZSUTpqW9iYLR"
      },
      "href": "https://api.spotify.com/v1/albums/6645HGh7ZOZSUTpqW9iYLR",
      "id": "6645HGh7ZOZSUTpqW9iYLR",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2730acf7f2eefe5bd36efbc26b4",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e020acf7f2eefe5bd36efbc26b4",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048510acf7f2eefe5bd36efbc26b4",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "AM",
      "release_date": "2013-01-01",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:6645HGh7ZOZSUTpqW9iYLR"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH"
        },
        "href": "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
        "id": "7Ln80lUS6He07XvHI8qqHH",
        "name": "Arctic Monkeys",
        "type": "artist",
        "uri": "spotify:artist:7Ln80lUS6He07XvHI8qqHH"
      }
    ],
    "disc_number": 1,
    "duration_ms": 161123,
    "explicit": false,
    "external_ids": {
      "isrc": "GBCEL1300370"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/086myS9r57YsLbJpU0TgK9"
    },
    "href": "https://api.spotify.com/v1/tracks/086myS9r57YsLbJpU0TgK9",
    "id": "086myS9r57YsLbJpU0TgK9",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/48q0vSHcJdhK3IiXH8C5WJ"
      },
      "href": "https://api.spotify.com/v1/tracks/48q0vSHcJdhK3IiXH8C5WJ",
      "id": "48q0vSHcJdhK3IiXH8C5WJ",
      "type": "track",
      "uri": "spotify:track:48q0vSHcJdhK3IiXH8C5WJ"
    },
    "name": "Why'd You Only Call Me When You're High?",
    "popularity": 91,
    "preview_url": "https://p.scdn.co/mp3-preview/be5453a4763510679fab61e39662ab0257458be6?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 9,
    "type": "track",
    "uri": "spotify:track:086myS9r57YsLbJpU0TgK9"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5"
          },
          "href": "https://api.spotify.com/v1/artists/6l3HvQ5sa6mXTsMTB19rO5",
          "id": "6l3HvQ5sa6mXTsMTB19rO5",
          "name": "J. Cole",
          "type": "artist",
          "uri": "spotify:artist:6l3HvQ5sa6mXTsMTB19rO5"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/7viNUmZZ8ztn2UB4XB3jIL"
      },
      "href": "https://api.spotify.com/v1/albums/7viNUmZZ8ztn2UB4XB3jIL",
      "id": "7viNUmZZ8ztn2UB4XB3jIL",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2736aca031ccc27d2e4dd829d14",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e026aca031ccc27d2e4dd829d14",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048516aca031ccc27d2e4dd829d14",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "2014 Forest Hills Drive",
      "release_date": "2014-12-09",
      "release_date_precision": "day",
      "total_tracks": 13,
      "type": "album",
      "uri": "spotify:album:7viNUmZZ8ztn2UB4XB3jIL"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5"
        },
        "href": "https://api.spotify.com/v1/artists/6l3HvQ5sa6mXTsMTB19rO5",
        "id": "6l3HvQ5sa6mXTsMTB19rO5",
        "name": "J. Cole",
        "type": "artist",
        "uri": "spotify:artist:6l3HvQ5sa6mXTsMTB19rO5"
      }
    ],
    "disc_number": 1,
    "duration_ms": 292799,
    "explicit": true,
    "external_ids": {
      "isrc": "USQX91402598"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/68Dni7IE4VyPkTOH9mRWHr"
    },
    "href": "https://api.spotify.com/v1/tracks/68Dni7IE4VyPkTOH9mRWHr",
    "id": "68Dni7IE4VyPkTOH9mRWHr",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/62vpWI1CHwFy7tMIcSStl8"
      },
      "href": "https://api.spotify.com/v1/tracks/62vpWI1CHwFy7tMIcSStl8",
      "id": "62vpWI1CHwFy7tMIcSStl8",
      "type": "track",
      "uri": "spotify:track:62vpWI1CHwFy7tMIcSStl8"
    },
    "name": "No Role Modelz",
    "popularity": 91,
    "preview_url": null,
    "track_number": 9,
    "type": "track",
    "uri": "spotify:track:68Dni7IE4VyPkTOH9mRWHr"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
          },
          "href": "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
          "id": "06HL4z0CvFAxyc27GXpf02",
          "name": "Taylor Swift",
          "type": "artist",
          "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv"
      },
      "href": "https://api.spotify.com/v1/albums/6DEjYFkNZh67HP7R9PSZvv",
      "id": "6DEjYFkNZh67HP7R9PSZvv",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02da5d5aeeabacacc1263c0f4b",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851da5d5aeeabacacc1263c0f4b",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "reputation",
      "release_date": "2017-11-10",
      "release_date_precision": "day",
      "total_tracks": 15,
      "type": "album",
      "uri": "spotify:album:6DEjYFkNZh67HP7R9PSZvv"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
        },
        "href": "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
        "id": "06HL4z0CvFAxyc27GXpf02",
        "name": "Taylor Swift",
        "type": "artist",
        "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
      }
    ],
    "disc_number": 1,
    "duration_ms": 211853,
    "explicit": false,
    "external_ids": {
      "isrc": "USCJY1750000"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/1P17dC1amhFzptugyAO7Il"
    },
    "href": "https://api.spotify.com/v1/tracks/1P17dC1amhFzptugyAO7Il",
    "id": "1P17dC1amhFzptugyAO7Il",
    "is_local": false,
    "is_playable": true,
    "name": "Look What You Made Me Do",
    "popularity": 88,
    "preview_url": null,
    "track_number": 6,
    "type": "track",
    "uri": "spotify:track:1P17dC1amhFzptugyAO7Il"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa"
          },
          "href": "https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa",
          "id": "00FQb4jTyendYWaN8pK0wa",
          "name": "Lana Del Rey",
          "type": "artist",
          "uri": "spotify:artist:00FQb4jTyendYWaN8pK0wa"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/1D92WOHWUI2AGQCCdplcXL"
      },
      "href": "https://api.spotify.com/v1/albums/1D92WOHWUI2AGQCCdplcXL",
      "id": "1D92WOHWUI2AGQCCdplcXL",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d7fb3e4c63020039d1cff6b2",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d7fb3e4c63020039d1cff6b2",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d7fb3e4c63020039d1cff6b2",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Young And Beautiful",
      "release_date": "2013-01-01",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:1D92WOHWUI2AGQCCdplcXL"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa"
        },
        "href": "https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa",
        "id": "00FQb4jTyendYWaN8pK0wa",
        "name": "Lana Del Rey",
        "type": "artist",
        "uri": "spotify:artist:00FQb4jTyendYWaN8pK0wa"
      }
    ],
    "disc_number": 1,
    "duration_ms": 236053,
    "explicit": false,
    "external_ids": {
      "isrc": "GBUM71301823"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2nMeu6UenVvwUktBCpLMK9"
    },
    "href": "https://api.spotify.com/v1/tracks/2nMeu6UenVvwUktBCpLMK9",
    "id": "2nMeu6UenVvwUktBCpLMK9",
    "is_local": false,
    "is_playable": true,
    "name": "Young And Beautiful",
    "popularity": 88,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:2nMeu6UenVvwUktBCpLMK9"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/540vIaP2JwjQb9dm3aArA4"
          },
          "href": "https://api.spotify.com/v1/artists/540vIaP2JwjQb9dm3aArA4",
          "id": "540vIaP2JwjQb9dm3aArA4",
          "name": "DJ Snake",
          "type": "artist",
          "uri": "spotify:artist:540vIaP2JwjQb9dm3aArA4"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/02sEJTj1sye1JaqxqpcSCp"
      },
      "href": "https://api.spotify.com/v1/albums/02sEJTj1sye1JaqxqpcSCp",
      "id": "02sEJTj1sye1JaqxqpcSCp",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273212d776c31027c511f0ee3bc",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02212d776c31027c511f0ee3bc",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851212d776c31027c511f0ee3bc",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Encore",
      "release_date": "2016-08-05",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:02sEJTj1sye1JaqxqpcSCp"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/540vIaP2JwjQb9dm3aArA4"
        },
        "href": "https://api.spotify.com/v1/artists/540vIaP2JwjQb9dm3aArA4",
        "id": "540vIaP2JwjQb9dm3aArA4",
        "name": "DJ Snake",
        "type": "artist",
        "uri": "spotify:artist:540vIaP2JwjQb9dm3aArA4"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
        },
        "href": "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
        "id": "1uNFoZAHBGtllmzznpCI3s",
        "name": "Justin Bieber",
        "type": "artist",
        "uri": "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
      }
    ],
    "disc_number": 1,
    "duration_ms": 205946,
    "explicit": false,
    "external_ids": {
      "isrc": "QMZSY1600015"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0lYBSQXN6rCTvUZvg9S0lU"
    },
    "href": "https://api.spotify.com/v1/tracks/0lYBSQXN6rCTvUZvg9S0lU",
    "id": "0lYBSQXN6rCTvUZvg9S0lU",
    "is_local": false,
    "is_playable": true,
    "name": "Let Me Love You",
    "popularity": 88,
    "preview_url": null,
    "track_number": 13,
    "type": "track",
    "uri": "spotify:track:0lYBSQXN6rCTvUZvg9S0lU"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
          },
          "href": "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
          "id": "4gzpq5DPGxSnKTe4SA8HAU",
          "name": "Coldplay",
          "type": "artist",
          "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2G4AUqfwxcV1UdQjm2ouYr"
      },
      "href": "https://api.spotify.com/v1/albums/2G4AUqfwxcV1UdQjm2ouYr",
      "id": "2G4AUqfwxcV1UdQjm2ouYr",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273f864bcdcc245f06831d17ae0",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02f864bcdcc245f06831d17ae0",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851f864bcdcc245f06831d17ae0",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Ghost Stories",
      "release_date": "2014-05-19",
      "release_date_precision": "day",
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:2G4AUqfwxcV1UdQjm2ouYr"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
        },
        "href": "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
        "id": "4gzpq5DPGxSnKTe4SA8HAU",
        "name": "Coldplay",
        "type": "artist",
        "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
      }
    ],
    "disc_number": 1,
    "duration_ms": 267866,
    "explicit": false,
    "external_ids": {
      "isrc": "GBAYE1400217"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0FDzzruyVECATHXKHFs9eJ"
    },
    "href": "https://api.spotify.com/v1/tracks/0FDzzruyVECATHXKHFs9eJ",
    "id": "0FDzzruyVECATHXKHFs9eJ",
    "is_local": false,
    "is_playable": true,
    "name": "A Sky Full of Stars",
    "popularity": 88,
    "preview_url": "https://p.scdn.co/mp3-preview/870ebba9927cd7c73467fc5772f398a8a8999344?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 8,
    "type": "track",
    "uri": "spotify:track:0FDzzruyVECATHXKHFs9eJ"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/69GGBxA162lTqCwzJG5jLp"
          },
          "href": "https://api.spotify.com/v1/artists/69GGBxA162lTqCwzJG5jLp",
          "id": "69GGBxA162lTqCwzJG5jLp",
          "name": "The Chainsmokers",
          "type": "artist",
          "uri": "spotify:artist:69GGBxA162lTqCwzJG5jLp"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4JPguzRps3kuWDD5GS6oXr"
      },
      "href": "https://api.spotify.com/v1/albums/4JPguzRps3kuWDD5GS6oXr",
      "id": "4JPguzRps3kuWDD5GS6oXr",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2730c13d3d5a503c84fcc60ae94",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e020c13d3d5a503c84fcc60ae94",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048510c13d3d5a503c84fcc60ae94",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Memories...Do Not Open",
      "release_date": "2017-04-07",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:4JPguzRps3kuWDD5GS6oXr"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/69GGBxA162lTqCwzJG5jLp"
        },
        "href": "https://api.spotify.com/v1/artists/69GGBxA162lTqCwzJG5jLp",
        "id": "69GGBxA162lTqCwzJG5jLp",
        "name": "The Chainsmokers",
        "type": "artist",
        "uri": "spotify:artist:69GGBxA162lTqCwzJG5jLp"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
        },
        "href": "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
        "id": "4gzpq5DPGxSnKTe4SA8HAU",
        "name": "Coldplay",
        "type": "artist",
        "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
      }
    ],
    "disc_number": 1,
    "duration_ms": 247160,
    "explicit": false,
    "external_ids": {
      "isrc": "USQX91700278"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/6RUKPb4LETWmmr3iAEQktW"
    },
    "href": "https://api.spotify.com/v1/tracks/6RUKPb4LETWmmr3iAEQktW",
    "id": "6RUKPb4LETWmmr3iAEQktW",
    "is_local": false,
    "is_playable": true,
    "name": "Something Just Like This",
    "popularity": 88,
    "preview_url": "https://p.scdn.co/mp3-preview/4e117abe76700eb13e9e0557fa2d9c44b565b9da?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:6RUKPb4LETWmmr3iAEQktW"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx"
          },
          "href": "https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx",
          "id": "3YQKmKGau1PzlVlkL1iodx",
          "name": "Twenty One Pilots",
          "type": "artist",
          "uri": "spotify:artist:3YQKmKGau1PzlVlkL1iodx"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3cQO7jp5S9qLBoIVtbkSM1"
      },
      "href": "https://api.spotify.com/v1/albums/3cQO7jp5S9qLBoIVtbkSM1",
      "id": "3cQO7jp5S9qLBoIVtbkSM1",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273de03bfc2991fd5bcfde65ba3",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02de03bfc2991fd5bcfde65ba3",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851de03bfc2991fd5bcfde65ba3",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Blurryface",
      "release_date": "2015-05-15",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:3cQO7jp5S9qLBoIVtbkSM1"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx"
        },
        "href": "https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx",
        "id": "3YQKmKGau1PzlVlkL1iodx",
        "name": "Twenty One Pilots",
        "type": "artist",
        "uri": "spotify:artist:3YQKmKGau1PzlVlkL1iodx"
      }
    ],
    "disc_number": 1,
    "duration_ms": 202333,
    "explicit": false,
    "external_ids": {
      "isrc": "USAT21500597"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3CRDbSIZ4r5MsZ0YwxuEkn"
    },
    "href": "https://api.spotify.com/v1/tracks/3CRDbSIZ4r5MsZ0YwxuEkn",
    "id": "3CRDbSIZ4r5MsZ0YwxuEkn",
    "is_local": false,
    "is_playable": true,
    "name": "Stressed Out",
    "popularity": 88,
    "preview_url": "https://p.scdn.co/mp3-preview/d01bb6b4b9952d95d2609632474cda8e632e044d?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:3CRDbSIZ4r5MsZ0YwxuEkn"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
          },
          "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
          "id": "1Xyo4u8uXC1ZmMpatF05PJ",
          "name": "The Weeknd",
          "type": "artist",
          "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3iVFKUpkS32p2YcLMA02u6"
      },
      "href": "https://api.spotify.com/v1/albums/3iVFKUpkS32p2YcLMA02u6",
      "id": "3iVFKUpkS32p2YcLMA02u6",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273bb9b84cecfc41da3b8c7d74b",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02bb9b84cecfc41da3b8c7d74b",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851bb9b84cecfc41da3b8c7d74b",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "My Dear Melancholy,",
      "release_date": "2018-03-29",
      "release_date_precision": "day",
      "total_tracks": 6,
      "type": "album",
      "uri": "spotify:album:3iVFKUpkS32p2YcLMA02u6"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
        },
        "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
        "id": "1Xyo4u8uXC1ZmMpatF05PJ",
        "name": "The Weeknd",
        "type": "artist",
        "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
      }
    ],
    "disc_number": 1,
    "duration_ms": 228373,
    "explicit": false,
    "external_ids": {
      "isrc": "USUG11800560"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/09mEdoA6zrmBPgTEN5qXmN"
    },
    "href": "https://api.spotify.com/v1/tracks/09mEdoA6zrmBPgTEN5qXmN",
    "id": "09mEdoA6zrmBPgTEN5qXmN",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1gm616Plq4ScqNi7TVkZ5N"
      },
      "href": "https://api.spotify.com/v1/tracks/1gm616Plq4ScqNi7TVkZ5N",
      "id": "1gm616Plq4ScqNi7TVkZ5N",
      "type": "track",
      "uri": "spotify:track:1gm616Plq4ScqNi7TVkZ5N"
    },
    "name": "Call Out My Name",
    "popularity": 88,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:09mEdoA6zrmBPgTEN5qXmN"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
          },
          "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
          "id": "53XhwfbYqKCa1cC15pYq2q",
          "name": "Imagine Dragons",
          "type": "artist",
          "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/33pt9HBdGlAbRGBHQgsZsU"
      },
      "href": "https://api.spotify.com/v1/albums/33pt9HBdGlAbRGBHQgsZsU",
      "id": "33pt9HBdGlAbRGBHQgsZsU",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e025675e83f707f1d7271e5cf8a",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048515675e83f707f1d7271e5cf8a",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Evolve",
      "release_date": "2017-06-23",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:33pt9HBdGlAbRGBHQgsZsU"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
        },
        "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
        "id": "53XhwfbYqKCa1cC15pYq2q",
        "name": "Imagine Dragons",
        "type": "artist",
        "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
      }
    ],
    "disc_number": 1,
    "duration_ms": 187146,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71704167"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/1zB4vmk8tFRmM9UULNzbLB"
    },
    "href": "https://api.spotify.com/v1/tracks/1zB4vmk8tFRmM9UULNzbLB",
    "id": "1zB4vmk8tFRmM9UULNzbLB",
    "is_local": false,
    "is_playable": true,
    "name": "Thunder",
    "popularity": 88,
    "preview_url": null,
    "track_number": 10,
    "type": "track",
    "uri": "spotify:track:1zB4vmk8tFRmM9UULNzbLB"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5IH6FPUwQTxPSXurCrcIov"
          },
          "href": "https://api.spotify.com/v1/artists/5IH6FPUwQTxPSXurCrcIov",
          "id": "5IH6FPUwQTxPSXurCrcIov",
          "name": "Alec Benjamin",
          "type": "artist",
          "uri": "spotify:artist:5IH6FPUwQTxPSXurCrcIov"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/0mRjvB3HLxs4Myma1f8vps"
      },
      "href": "https://api.spotify.com/v1/albums/0mRjvB3HLxs4Myma1f8vps",
      "id": "0mRjvB3HLxs4Myma1f8vps",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27309a88ba53f188d4e09a11b5c",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0209a88ba53f188d4e09a11b5c",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485109a88ba53f188d4e09a11b5c",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Let Me Down Slowly",
      "release_date": "2018-05-25",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:0mRjvB3HLxs4Myma1f8vps"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5IH6FPUwQTxPSXurCrcIov"
        },
        "href": "https://api.spotify.com/v1/artists/5IH6FPUwQTxPSXurCrcIov",
        "id": "5IH6FPUwQTxPSXurCrcIov",
        "name": "Alec Benjamin",
        "type": "artist",
        "uri": "spotify:artist:5IH6FPUwQTxPSXurCrcIov"
      }
    ],
    "disc_number": 1,
    "duration_ms": 169353,
    "explicit": false,
    "external_ids": {
      "isrc": "USAT21802284"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2qxmye6gAegTMjLKEBoR3d"
    },
    "href": "https://api.spotify.com/v1/tracks/2qxmye6gAegTMjLKEBoR3d",
    "id": "2qxmye6gAegTMjLKEBoR3d",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/2uaiyLKnYvazyfR0Ky3Kbk"
      },
      "href": "https://api.spotify.com/v1/tracks/2uaiyLKnYvazyfR0Ky3Kbk",
      "id": "2uaiyLKnYvazyfR0Ky3Kbk",
      "type": "track",
      "uri": "spotify:track:2uaiyLKnYvazyfR0Ky3Kbk"
    },
    "name": "Let Me Down Slowly",
    "popularity": 88,
    "preview_url": "https://p.scdn.co/mp3-preview/19007111a4e21096bcefef77842d7179f0cdf12a?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 4,
    "type": "track",
    "uri": "spotify:track:2qxmye6gAegTMjLKEBoR3d"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
          },
          "href": "https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60",
          "id": "246dkjvS1zLTtiykXe5h60",
          "name": "Post Malone",
          "type": "artist",
          "uri": "spotify:artist:246dkjvS1zLTtiykXe5h60"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1zNqQNIdeOUZHb8zbZRFMX"
          },
          "href": "https://api.spotify.com/v1/artists/1zNqQNIdeOUZHb8zbZRFMX",
          "id": "1zNqQNIdeOUZHb8zbZRFMX",
          "name": "Swae Lee",
          "type": "artist",
          "uri": "spotify:artist:1zNqQNIdeOUZHb8zbZRFMX"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/47LpgGVshd0tbFSbm9tTLb"
      },
      "href": "https://api.spotify.com/v1/albums/47LpgGVshd0tbFSbm9tTLb",
      "id": "47LpgGVshd0tbFSbm9tTLb",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273ef376d3257503f734de0eefc",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02ef376d3257503f734de0eefc",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851ef376d3257503f734de0eefc",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Sunflower (Spider-Man: Into the Spider-Verse)",
      "release_date": "2018-10-18",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:47LpgGVshd0tbFSbm9tTLb"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
        },
        "href": "https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60",
        "id": "246dkjvS1zLTtiykXe5h60",
        "name": "Post Malone",
        "type": "artist",
        "uri": "spotify:artist:246dkjvS1zLTtiykXe5h60"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1zNqQNIdeOUZHb8zbZRFMX"
        },
        "href": "https://api.spotify.com/v1/artists/1zNqQNIdeOUZHb8zbZRFMX",
        "id": "1zNqQNIdeOUZHb8zbZRFMX",
        "name": "Swae Lee",
        "type": "artist",
        "uri": "spotify:artist:1zNqQNIdeOUZHb8zbZRFMX"
      }
    ],
    "disc_number": 1,
    "duration_ms": 157560,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71814888"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0RiRZpuVRbi7oqRdSMwhQY"
    },
    "href": "https://api.spotify.com/v1/tracks/0RiRZpuVRbi7oqRdSMwhQY",
    "id": "0RiRZpuVRbi7oqRdSMwhQY",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1A6OTy97kk0mMdm78rHsm8"
      },
      "href": "https://api.spotify.com/v1/tracks/1A6OTy97kk0mMdm78rHsm8",
      "id": "1A6OTy97kk0mMdm78rHsm8",
      "type": "track",
      "uri": "spotify:track:1A6OTy97kk0mMdm78rHsm8"
    },
    "name": "Sunflower - Spider-Man: Into the Spider-Verse",
    "popularity": 88,
    "preview_url": null,
    "track_number": 12,
    "type": "track",
    "uri": "spotify:track:0RiRZpuVRbi7oqRdSMwhQY"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
          },
          "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
          "id": "2YZyLoL8N0Wb9xBt1NhZWg",
          "name": "Kendrick Lamar",
          "type": "artist",
          "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY"
      },
      "href": "https://api.spotify.com/v1/albums/4eLPsYPBmXABThSJ821sqY",
      "id": "4eLPsYPBmXABThSJ821sqY",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048518b52c6b9bc4e43d873869699",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "DAMN.",
      "release_date": "2017-04-14",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:4eLPsYPBmXABThSJ821sqY"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
        },
        "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
        "id": "2YZyLoL8N0Wb9xBt1NhZWg",
        "name": "Kendrick Lamar",
        "type": "artist",
        "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
      }
    ],
    "disc_number": 1,
    "duration_ms": 177000,
    "explicit": true,
    "external_ids": {
      "isrc": "USUM71703085"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7KXjTSCq5nL1LoYtL7XAwS"
    },
    "href": "https://api.spotify.com/v1/tracks/7KXjTSCq5nL1LoYtL7XAwS",
    "id": "7KXjTSCq5nL1LoYtL7XAwS",
    "is_local": false,
    "is_playable": true,
    "name": "HUMBLE.",
    "popularity": 87,
    "preview_url": null,
    "track_number": 8,
    "type": "track",
    "uri": "spotify:track:7KXjTSCq5nL1LoYtL7XAwS"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY"
          },
          "href": "https://api.spotify.com/v1/artists/7CajNmpbOovFoOoasH2HaY",
          "id": "7CajNmpbOovFoOoasH2HaY",
          "name": "Calvin Harris",
          "type": "artist",
          "uri": "spotify:artist:7CajNmpbOovFoOoasH2HaY"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we"
          },
          "href": "https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we",
          "id": "6M2wZ9GZgrQXHCFfjv46we",
          "name": "Dua Lipa",
          "type": "artist",
          "uri": "spotify:artist:6M2wZ9GZgrQXHCFfjv46we"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/7GEzhoTiqcPYkOprWQu581"
      },
      "href": "https://api.spotify.com/v1/albums/7GEzhoTiqcPYkOprWQu581",
      "id": "7GEzhoTiqcPYkOprWQu581",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d09f96d82310d4d77c14c108",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d09f96d82310d4d77c14c108",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d09f96d82310d4d77c14c108",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "One Kiss (with Dua Lipa)",
      "release_date": "2018-04-06",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:7GEzhoTiqcPYkOprWQu581"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY"
        },
        "href": "https://api.spotify.com/v1/artists/7CajNmpbOovFoOoasH2HaY",
        "id": "7CajNmpbOovFoOoasH2HaY",
        "name": "Calvin Harris",
        "type": "artist",
        "uri": "spotify:artist:7CajNmpbOovFoOoasH2HaY"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we"
        },
        "href": "https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we",
        "id": "6M2wZ9GZgrQXHCFfjv46we",
        "name": "Dua Lipa",
        "type": "artist",
        "uri": "spotify:artist:6M2wZ9GZgrQXHCFfjv46we"
      }
    ],
    "disc_number": 1,
    "duration_ms": 214846,
    "explicit": false,
    "external_ids": {
      "isrc": "GBARL1800368"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7ef4DlsgrMEH11cDZd32M6"
    },
    "href": "https://api.spotify.com/v1/tracks/7ef4DlsgrMEH11cDZd32M6",
    "id": "7ef4DlsgrMEH11cDZd32M6",
    "is_local": false,
    "is_playable": true,
    "name": "One Kiss (with Dua Lipa)",
    "popularity": 87,
    "preview_url": "https://p.scdn.co/mp3-preview/0c09da1fe6f1da091c05057835e6be2312e2dc18?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:7ef4DlsgrMEH11cDZd32M6"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI"
          },
          "href": "https://api.spotify.com/v1/artists/2wY79sveU1sp5g7SokKOiI",
          "id": "2wY79sveU1sp5g7SokKOiI",
          "name": "Sam Smith",
          "type": "artist",
          "uri": "spotify:artist:2wY79sveU1sp5g7SokKOiI"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3TJz2UBNYJtlEly0sPeNrQ"
      },
      "href": "https://api.spotify.com/v1/albums/3TJz2UBNYJtlEly0sPeNrQ",
      "id": "3TJz2UBNYJtlEly0sPeNrQ",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273005cd7d0ae87b081601f6cca",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02005cd7d0ae87b081601f6cca",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851005cd7d0ae87b081601f6cca",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "The Thrill Of It All (Special Edition)",
      "release_date": "2017-11-03",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:3TJz2UBNYJtlEly0sPeNrQ"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI"
        },
        "href": "https://api.spotify.com/v1/artists/2wY79sveU1sp5g7SokKOiI",
        "id": "2wY79sveU1sp5g7SokKOiI",
        "name": "Sam Smith",
        "type": "artist",
        "uri": "spotify:artist:2wY79sveU1sp5g7SokKOiI"
      }
    ],
    "disc_number": 1,
    "duration_ms": 201000,
    "explicit": false,
    "external_ids": {
      "isrc": "GBUM71704089"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/1mXVgsBdtIVeCLJnSnmtdV"
    },
    "href": "https://api.spotify.com/v1/tracks/1mXVgsBdtIVeCLJnSnmtdV",
    "id": "1mXVgsBdtIVeCLJnSnmtdV",
    "is_local": false,
    "is_playable": true,
    "name": "Too Good At Goodbyes",
    "popularity": 87,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:1mXVgsBdtIVeCLJnSnmtdV"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
          },
          "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
          "id": "3TVXtAsR1Inumwj472S9r4",
          "name": "Drake",
          "type": "artist",
          "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/1ATL5GLyefJaxhQzSPVrLX"
      },
      "href": "https://api.spotify.com/v1/albums/1ATL5GLyefJaxhQzSPVrLX",
      "id": "1ATL5GLyefJaxhQzSPVrLX",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02f907de96b9a4fbc04accc0d5",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851f907de96b9a4fbc04accc0d5",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Scorpion",
      "release_date": "2018-06-29",
      "release_date_precision": "day",
      "total_tracks": 25,
      "type": "album",
      "uri": "spotify:album:1ATL5GLyefJaxhQzSPVrLX"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
        },
        "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
        "id": "3TVXtAsR1Inumwj472S9r4",
        "name": "Drake",
        "type": "artist",
        "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
      }
    ],
    "disc_number": 1,
    "duration_ms": 198973,
    "explicit": true,
    "external_ids": {
      "isrc": "USCM51800004"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/6DCZcSspjsKoFjzjrWoCdn"
    },
    "href": "https://api.spotify.com/v1/tracks/6DCZcSspjsKoFjzjrWoCdn",
    "id": "6DCZcSspjsKoFjzjrWoCdn",
    "is_local": false,
    "is_playable": true,
    "name": "God's Plan",
    "popularity": 87,
    "preview_url": null,
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:6DCZcSspjsKoFjzjrWoCdn"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6vXTefBL93Dj5IqAWq6OTv"
          },
          "href": "https://api.spotify.com/v1/artists/6vXTefBL93Dj5IqAWq6OTv",
          "id": "6vXTefBL93Dj5IqAWq6OTv",
          "name": "French Montana",
          "type": "artist",
          "uri": "spotify:artist:6vXTefBL93Dj5IqAWq6OTv"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4c2p3TdN7NcQfCXyueCNnC"
      },
      "href": "https://api.spotify.com/v1/albums/4c2p3TdN7NcQfCXyueCNnC",
      "id": "4c2p3TdN7NcQfCXyueCNnC",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2738a31195a371b2233456f6c07",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e028a31195a371b2233456f6c07",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048518a31195a371b2233456f6c07",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Jungle Rules",
      "release_date": "2017-07-14",
      "release_date_precision": "day",
      "total_tracks": 18,
      "type": "album",
      "uri": "spotify:album:4c2p3TdN7NcQfCXyueCNnC"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6vXTefBL93Dj5IqAWq6OTv"
        },
        "href": "https://api.spotify.com/v1/artists/6vXTefBL93Dj5IqAWq6OTv",
        "id": "6vXTefBL93Dj5IqAWq6OTv",
        "name": "French Montana",
        "type": "artist",
        "uri": "spotify:artist:6vXTefBL93Dj5IqAWq6OTv"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1zNqQNIdeOUZHb8zbZRFMX"
        },
        "href": "https://api.spotify.com/v1/artists/1zNqQNIdeOUZHb8zbZRFMX",
        "id": "1zNqQNIdeOUZHb8zbZRFMX",
        "name": "Swae Lee",
        "type": "artist",
        "uri": "spotify:artist:1zNqQNIdeOUZHb8zbZRFMX"
      }
    ],
    "disc_number": 1,
    "duration_ms": 233901,
    "explicit": true,
    "external_ids": {
      "isrc": "USSM11703478"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3B54sVLJ402zGa6Xm4YGNe"
    },
    "href": "https://api.spotify.com/v1/tracks/3B54sVLJ402zGa6Xm4YGNe",
    "id": "3B54sVLJ402zGa6Xm4YGNe",
    "is_local": false,
    "is_playable": true,
    "name": "Unforgettable",
    "popularity": 87,
    "preview_url": "https://p.scdn.co/mp3-preview/f8d5e3c37feb980e60cac2df4256250d4b5cf5b5?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:3B54sVLJ402zGa6Xm4YGNe"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms"
          },
          "href": "https://api.spotify.com/v1/artists/1HY2Jd0NmPuamShAr6KMms",
          "id": "1HY2Jd0NmPuamShAr6KMms",
          "name": "Lady Gaga",
          "type": "artist",
          "uri": "spotify:artist:1HY2Jd0NmPuamShAr6KMms"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4VIvfOurcf0vuLRxLkGnIG"
          },
          "href": "https://api.spotify.com/v1/artists/4VIvfOurcf0vuLRxLkGnIG",
          "id": "4VIvfOurcf0vuLRxLkGnIG",
          "name": "Bradley Cooper",
          "type": "artist",
          "uri": "spotify:artist:4VIvfOurcf0vuLRxLkGnIG"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4sLtOBOzn4s3GDUv3c5oJD"
      },
      "href": "https://api.spotify.com/v1/albums/4sLtOBOzn4s3GDUv3c5oJD",
      "id": "4sLtOBOzn4s3GDUv3c5oJD",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273e2d156fdc691f57900134342",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02e2d156fdc691f57900134342",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851e2d156fdc691f57900134342",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "A Star Is Born Soundtrack",
      "release_date": "2018-10-05",
      "release_date_precision": "day",
      "total_tracks": 34,
      "type": "album",
      "uri": "spotify:album:4sLtOBOzn4s3GDUv3c5oJD"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms"
        },
        "href": "https://api.spotify.com/v1/artists/1HY2Jd0NmPuamShAr6KMms",
        "id": "1HY2Jd0NmPuamShAr6KMms",
        "name": "Lady Gaga",
        "type": "artist",
        "uri": "spotify:artist:1HY2Jd0NmPuamShAr6KMms"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4VIvfOurcf0vuLRxLkGnIG"
        },
        "href": "https://api.spotify.com/v1/artists/4VIvfOurcf0vuLRxLkGnIG",
        "id": "4VIvfOurcf0vuLRxLkGnIG",
        "name": "Bradley Cooper",
        "type": "artist",
        "uri": "spotify:artist:4VIvfOurcf0vuLRxLkGnIG"
      }
    ],
    "disc_number": 1,
    "duration_ms": 215733,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71813192"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2VxeLyX666F8uXCJ0dZF8B"
    },
    "href": "https://api.spotify.com/v1/tracks/2VxeLyX666F8uXCJ0dZF8B",
    "id": "2VxeLyX666F8uXCJ0dZF8B",
    "is_local": false,
    "is_playable": true,
    "name": "Shallow",
    "popularity": 87,
    "preview_url": null,
    "track_number": 12,
    "type": "track",
    "uri": "spotify:track:2VxeLyX666F8uXCJ0dZF8B"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
          },
          "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
          "id": "2YZyLoL8N0Wb9xBt1NhZWg",
          "name": "Kendrick Lamar",
          "type": "artist",
          "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"
          },
          "href": "https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP",
          "id": "7tYKF4w9nC0nq9CsPZTHyP",
          "name": "SZA",
          "type": "artist",
          "uri": "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3pLdWdkj83EYfDN6H2N8MR"
      },
      "href": "https://api.spotify.com/v1/albums/3pLdWdkj83EYfDN6H2N8MR",
      "id": "3pLdWdkj83EYfDN6H2N8MR",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273c027ad28821777b00dcaa888",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02c027ad28821777b00dcaa888",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851c027ad28821777b00dcaa888",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Black Panther The Album Music From And Inspired By",
      "release_date": "2018-02-09",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:3pLdWdkj83EYfDN6H2N8MR"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
        },
        "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
        "id": "2YZyLoL8N0Wb9xBt1NhZWg",
        "name": "Kendrick Lamar",
        "type": "artist",
        "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"
        },
        "href": "https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP",
        "id": "7tYKF4w9nC0nq9CsPZTHyP",
        "name": "SZA",
        "type": "artist",
        "uri": "spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"
      }
    ],
    "disc_number": 1,
    "duration_ms": 232186,
    "explicit": true,
    "external_ids": {
      "isrc": "USUM71713947"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3GCdLUSnKSMJhs4Tj6CV3s"
    },
    "href": "https://api.spotify.com/v1/tracks/3GCdLUSnKSMJhs4Tj6CV3s",
    "id": "3GCdLUSnKSMJhs4Tj6CV3s",
    "is_local": false,
    "is_playable": true,
    "name": "All The Stars (with SZA)",
    "popularity": 87,
    "preview_url": null,
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:3GCdLUSnKSMJhs4Tj6CV3s"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
          },
          "href": "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
          "id": "1uNFoZAHBGtllmzznpCI3s",
          "name": "Justin Bieber",
          "type": "artist",
          "uri": "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6Fr2rQkZ383FcMqFyT7yPr"
      },
      "href": "https://api.spotify.com/v1/albums/6Fr2rQkZ383FcMqFyT7yPr",
      "id": "6Fr2rQkZ383FcMqFyT7yPr",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02f46b9d202509a8f7384b90de",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851f46b9d202509a8f7384b90de",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Purpose (Deluxe)",
      "release_date": "2015-11-13",
      "release_date_precision": "day",
      "total_tracks": 19,
      "type": "album",
      "uri": "spotify:album:6Fr2rQkZ383FcMqFyT7yPr"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
        },
        "href": "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
        "id": "1uNFoZAHBGtllmzznpCI3s",
        "name": "Justin Bieber",
        "type": "artist",
        "uri": "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
      }
    ],
    "disc_number": 1,
    "duration_ms": 233720,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71516761"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/50kpGaPAhYJ3sGmk6vplg0"
    },
    "href": "https://api.spotify.com/v1/tracks/50kpGaPAhYJ3sGmk6vplg0",
    "id": "50kpGaPAhYJ3sGmk6vplg0",
    "is_local": false,
    "is_playable": true,
    "name": "Love Yourself",
    "popularity": 87,
    "preview_url": null,
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:50kpGaPAhYJ3sGmk6vplg0"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI"
          },
          "href": "https://api.spotify.com/v1/artists/2wY79sveU1sp5g7SokKOiI",
          "id": "2wY79sveU1sp5g7SokKOiI",
          "name": "Sam Smith",
          "type": "artist",
          "uri": "spotify:artist:2wY79sveU1sp5g7SokKOiI"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/08jWgM4vSkTose4blKBWov"
      },
      "href": "https://api.spotify.com/v1/albums/08jWgM4vSkTose4blKBWov",
      "id": "08jWgM4vSkTose4blKBWov",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273b11bdc91cb9ac6b14f5c1dae",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02b11bdc91cb9ac6b14f5c1dae",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851b11bdc91cb9ac6b14f5c1dae",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "In The Lonely Hour",
      "release_date": "2014-05-26",
      "release_date_precision": "day",
      "total_tracks": 10,
      "type": "album",
      "uri": "spotify:album:08jWgM4vSkTose4blKBWov"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI"
        },
        "href": "https://api.spotify.com/v1/artists/2wY79sveU1sp5g7SokKOiI",
        "id": "2wY79sveU1sp5g7SokKOiI",
        "name": "Sam Smith",
        "type": "artist",
        "uri": "spotify:artist:2wY79sveU1sp5g7SokKOiI"
      }
    ],
    "disc_number": 1,
    "duration_ms": 239316,
    "explicit": false,
    "external_ids": {
      "isrc": "GBUM71308836"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7795WJLVKJoAyVoOtCWqXN"
    },
    "href": "https://api.spotify.com/v1/tracks/7795WJLVKJoAyVoOtCWqXN",
    "id": "7795WJLVKJoAyVoOtCWqXN",
    "is_local": false,
    "is_playable": true,
    "name": "I'm Not The Only One",
    "popularity": 87,
    "preview_url": null,
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:7795WJLVKJoAyVoOtCWqXN"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
          },
          "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
          "id": "3TVXtAsR1Inumwj472S9r4",
          "name": "Drake",
          "type": "artist",
          "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/1lXY618HWkwYKJWBRYR4MK"
      },
      "href": "https://api.spotify.com/v1/albums/1lXY618HWkwYKJWBRYR4MK",
      "id": "1lXY618HWkwYKJWBRYR4MK",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2734f0fd9dad63977146e685700",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e024f0fd9dad63977146e685700",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048514f0fd9dad63977146e685700",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "More Life",
      "release_date": "2017-03-18",
      "release_date_precision": "day",
      "total_tracks": 22,
      "type": "album",
      "uri": "spotify:album:1lXY618HWkwYKJWBRYR4MK"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
        },
        "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
        "id": "3TVXtAsR1Inumwj472S9r4",
        "name": "Drake",
        "type": "artist",
        "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
      }
    ],
    "disc_number": 1,
    "duration_ms": 298940,
    "explicit": true,
    "external_ids": {
      "isrc": "USCM51700072"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/5mCPDVBb16L4XQwDdbRUpz"
    },
    "href": "https://api.spotify.com/v1/tracks/5mCPDVBb16L4XQwDdbRUpz",
    "id": "5mCPDVBb16L4XQwDdbRUpz",
    "is_local": false,
    "is_playable": true,
    "name": "Passionfruit",
    "popularity": 87,
    "preview_url": null,
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:5mCPDVBb16L4XQwDdbRUpz"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1URnnhqYAYcrqrcwql10ft"
          },
          "href": "https://api.spotify.com/v1/artists/1URnnhqYAYcrqrcwql10ft",
          "id": "1URnnhqYAYcrqrcwql10ft",
          "name": "21 Savage",
          "type": "artist",
          "uri": "spotify:artist:1URnnhqYAYcrqrcwql10ft"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4DdkRBBYG6Yk9Ka8tdJ9BW"
          },
          "href": "https://api.spotify.com/v1/artists/4DdkRBBYG6Yk9Ka8tdJ9BW",
          "id": "4DdkRBBYG6Yk9Ka8tdJ9BW",
          "name": "Offset",
          "type": "artist",
          "uri": "spotify:artist:4DdkRBBYG6Yk9Ka8tdJ9BW"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0iEtIxbK0KxaSlF7G42ZOp"
          },
          "href": "https://api.spotify.com/v1/artists/0iEtIxbK0KxaSlF7G42ZOp",
          "id": "0iEtIxbK0KxaSlF7G42ZOp",
          "name": "Metro Boomin",
          "type": "artist",
          "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/0MV1yCXcNNQBfwApqAVkH0"
      },
      "href": "https://api.spotify.com/v1/albums/0MV1yCXcNNQBfwApqAVkH0",
      "id": "0MV1yCXcNNQBfwApqAVkH0",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2730db43130a9aaa7bae56967ed",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e020db43130a9aaa7bae56967ed",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048510db43130a9aaa7bae56967ed",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Without Warning",
      "release_date": "2017-10-30",
      "release_date_precision": "day",
      "total_tracks": 10,
      "type": "album",
      "uri": "spotify:album:0MV1yCXcNNQBfwApqAVkH0"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4DdkRBBYG6Yk9Ka8tdJ9BW"
        },
        "href": "https://api.spotify.com/v1/artists/4DdkRBBYG6Yk9Ka8tdJ9BW",
        "id": "4DdkRBBYG6Yk9Ka8tdJ9BW",
        "name": "Offset",
        "type": "artist",
        "uri": "spotify:artist:4DdkRBBYG6Yk9Ka8tdJ9BW"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0iEtIxbK0KxaSlF7G42ZOp"
        },
        "href": "https://api.spotify.com/v1/artists/0iEtIxbK0KxaSlF7G42ZOp",
        "id": "0iEtIxbK0KxaSlF7G42ZOp",
        "name": "Metro Boomin",
        "type": "artist",
        "uri": "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp"
      }
    ],
    "disc_number": 1,
    "duration_ms": 172800,
    "explicit": true,
    "external_ids": {
      "isrc": "QZ45A1700064"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7sO5G9EABYOXQKNPNiE9NR"
    },
    "href": "https://api.spotify.com/v1/tracks/7sO5G9EABYOXQKNPNiE9NR",
    "id": "7sO5G9EABYOXQKNPNiE9NR",
    "is_local": false,
    "is_playable": true,
    "name": "Ric Flair Drip (with Metro Boomin)",
    "popularity": 87,
    "preview_url": "https://p.scdn.co/mp3-preview/89cee86b4663ac093731d7a433491dd71e286f61?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:7sO5G9EABYOXQKNPNiE9NR"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H"
          },
          "href": "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
          "id": "5pKCCKE2ajJHZ9KAiaK11H",
          "name": "Rihanna",
          "type": "artist",
          "uri": "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3Q149ZH46Z0f3oDR7vlDYV"
      },
      "href": "https://api.spotify.com/v1/albums/3Q149ZH46Z0f3oDR7vlDYV",
      "id": "3Q149ZH46Z0f3oDR7vlDYV",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27333de8537b313380d4f4c3ca6",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0233de8537b313380d4f4c3ca6",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485133de8537b313380d4f4c3ca6",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "ANTI",
      "release_date": "2016-01-28",
      "release_date_precision": "day",
      "total_tracks": 13,
      "type": "album",
      "uri": "spotify:album:3Q149ZH46Z0f3oDR7vlDYV"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H"
        },
        "href": "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
        "id": "5pKCCKE2ajJHZ9KAiaK11H",
        "name": "Rihanna",
        "type": "artist",
        "uri": "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H"
      }
    ],
    "disc_number": 1,
    "duration_ms": 224000,
    "explicit": true,
    "external_ids": {
      "isrc": "QM5FT1600120"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/5oO3drDxtziYU2H1X23ZIp"
    },
    "href": "https://api.spotify.com/v1/tracks/5oO3drDxtziYU2H1X23ZIp",
    "id": "5oO3drDxtziYU2H1X23ZIp",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/2aksifNn5ph8igDOkPBA02"
      },
      "href": "https://api.spotify.com/v1/tracks/2aksifNn5ph8igDOkPBA02",
      "id": "2aksifNn5ph8igDOkPBA02",
      "type": "track",
      "uri": "spotify:track:2aksifNn5ph8igDOkPBA02"
    },
    "name": "Love On The Brain",
    "popularity": 87,
    "preview_url": null,
    "track_number": 11,
    "type": "track",
    "uri": "spotify:track:5oO3drDxtziYU2H1X23ZIp"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
          },
          "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
          "id": "2YZyLoL8N0Wb9xBt1NhZWg",
          "name": "Kendrick Lamar",
          "type": "artist",
          "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY"
      },
      "href": "https://api.spotify.com/v1/albums/4eLPsYPBmXABThSJ821sqY",
      "id": "4eLPsYPBmXABThSJ821sqY",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2738b52c6b9bc4e43d873869699",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048518b52c6b9bc4e43d873869699",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "DAMN.",
      "release_date": "2017-04-14",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:4eLPsYPBmXABThSJ821sqY"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
        },
        "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
        "id": "2YZyLoL8N0Wb9xBt1NhZWg",
        "name": "Kendrick Lamar",
        "type": "artist",
        "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3qBKjEOanahMxlRojwCzhI"
        },
        "href": "https://api.spotify.com/v1/artists/3qBKjEOanahMxlRojwCzhI",
        "id": "3qBKjEOanahMxlRojwCzhI",
        "name": "Zacari",
        "type": "artist",
        "uri": "spotify:artist:3qBKjEOanahMxlRojwCzhI"
      }
    ],
    "disc_number": 1,
    "duration_ms": 213400,
    "explicit": true,
    "external_ids": {
      "isrc": "USUM71703088"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/6PGoSes0D9eUDeeAafB2As"
    },
    "href": "https://api.spotify.com/v1/tracks/6PGoSes0D9eUDeeAafB2As",
    "id": "6PGoSes0D9eUDeeAafB2As",
    "is_local": false,
    "is_playable": true,
    "name": "LOVE. FEAT. ZACARI.",
    "popularity": 87,
    "preview_url": null,
    "track_number": 10,
    "type": "track",
    "uri": "spotify:track:6PGoSes0D9eUDeeAafB2As"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/64KEffDW9EtZ1y2vBYgq8T"
          },
          "href": "https://api.spotify.com/v1/artists/64KEffDW9EtZ1y2vBYgq8T",
          "id": "64KEffDW9EtZ1y2vBYgq8T",
          "name": "Marshmello",
          "type": "artist",
          "uri": "spotify:artist:64KEffDW9EtZ1y2vBYgq8T"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7EQ0qTo7fWT7DPxmxtSYEc"
          },
          "href": "https://api.spotify.com/v1/artists/7EQ0qTo7fWT7DPxmxtSYEc",
          "id": "7EQ0qTo7fWT7DPxmxtSYEc",
          "name": "Bastille",
          "type": "artist",
          "uri": "spotify:artist:7EQ0qTo7fWT7DPxmxtSYEc"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/78EicdHZr5XBWD7llEZ1Jh"
      },
      "href": "https://api.spotify.com/v1/albums/78EicdHZr5XBWD7llEZ1Jh",
      "id": "78EicdHZr5XBWD7llEZ1Jh",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27304bfd5a5fd5aa6ca648f66aa",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0204bfd5a5fd5aa6ca648f66aa",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485104bfd5a5fd5aa6ca648f66aa",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Happier",
      "release_date": "2018-08-17",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:78EicdHZr5XBWD7llEZ1Jh"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/64KEffDW9EtZ1y2vBYgq8T"
        },
        "href": "https://api.spotify.com/v1/artists/64KEffDW9EtZ1y2vBYgq8T",
        "id": "64KEffDW9EtZ1y2vBYgq8T",
        "name": "Marshmello",
        "type": "artist",
        "uri": "spotify:artist:64KEffDW9EtZ1y2vBYgq8T"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7EQ0qTo7fWT7DPxmxtSYEc"
        },
        "href": "https://api.spotify.com/v1/artists/7EQ0qTo7fWT7DPxmxtSYEc",
        "id": "7EQ0qTo7fWT7DPxmxtSYEc",
        "name": "Bastille",
        "type": "artist",
        "uri": "spotify:artist:7EQ0qTo7fWT7DPxmxtSYEc"
      }
    ],
    "disc_number": 1,
    "duration_ms": 214289,
    "explicit": false,
    "external_ids": {
      "isrc": "USUG11801651"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7BqHUALzNBTanL6OvsqmC1"
    },
    "href": "https://api.spotify.com/v1/tracks/7BqHUALzNBTanL6OvsqmC1",
    "id": "7BqHUALzNBTanL6OvsqmC1",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/2dpaYNEQHiRxtZbfNsse99"
      },
      "href": "https://api.spotify.com/v1/tracks/2dpaYNEQHiRxtZbfNsse99",
      "id": "2dpaYNEQHiRxtZbfNsse99",
      "type": "track",
      "uri": "spotify:track:2dpaYNEQHiRxtZbfNsse99"
    },
    "name": "Happier",
    "popularity": 87,
    "preview_url": "https://p.scdn.co/mp3-preview/a23fe33122a12a302b97c443ab82473ce55df8fd?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:7BqHUALzNBTanL6OvsqmC1"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI"
          },
          "href": "https://api.spotify.com/v1/artists/2wY79sveU1sp5g7SokKOiI",
          "id": "2wY79sveU1sp5g7SokKOiI",
          "name": "Sam Smith",
          "type": "artist",
          "uri": "spotify:artist:2wY79sveU1sp5g7SokKOiI"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/08jWgM4vSkTose4blKBWov"
      },
      "href": "https://api.spotify.com/v1/albums/08jWgM4vSkTose4blKBWov",
      "id": "08jWgM4vSkTose4blKBWov",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273b11bdc91cb9ac6b14f5c1dae",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02b11bdc91cb9ac6b14f5c1dae",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851b11bdc91cb9ac6b14f5c1dae",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "In The Lonely Hour",
      "release_date": "2014-05-26",
      "release_date_precision": "day",
      "total_tracks": 10,
      "type": "album",
      "uri": "spotify:album:08jWgM4vSkTose4blKBWov"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2wY79sveU1sp5g7SokKOiI"
        },
        "href": "https://api.spotify.com/v1/artists/2wY79sveU1sp5g7SokKOiI",
        "id": "2wY79sveU1sp5g7SokKOiI",
        "name": "Sam Smith",
        "type": "artist",
        "uri": "spotify:artist:2wY79sveU1sp5g7SokKOiI"
      }
    ],
    "disc_number": 1,
    "duration_ms": 172723,
    "explicit": false,
    "external_ids": {
      "isrc": "GBUM71308833"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/5Nm9ERjJZ5oyfXZTECKmRt"
    },
    "href": "https://api.spotify.com/v1/tracks/5Nm9ERjJZ5oyfXZTECKmRt",
    "id": "5Nm9ERjJZ5oyfXZTECKmRt",
    "is_local": false,
    "is_playable": true,
    "name": "Stay With Me",
    "popularity": 87,
    "preview_url": null,
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:5Nm9ERjJZ5oyfXZTECKmRt"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms"
          },
          "href": "https://api.spotify.com/v1/artists/1HY2Jd0NmPuamShAr6KMms",
          "id": "1HY2Jd0NmPuamShAr6KMms",
          "name": "Lady Gaga",
          "type": "artist",
          "uri": "spotify:artist:1HY2Jd0NmPuamShAr6KMms"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4Rt6psVqmhnvrZLEoHocb6"
      },
      "href": "https://api.spotify.com/v1/albums/4Rt6psVqmhnvrZLEoHocb6",
      "id": "4Rt6psVqmhnvrZLEoHocb6",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2734aea834a7b3878bd43a8a4b4",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e024aea834a7b3878bd43a8a4b4",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048514aea834a7b3878bd43a8a4b4",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "The Fame Monster (Explicit Version)",
      "release_date": "2009-01-01",
      "release_date_precision": "day",
      "total_tracks": 8,
      "type": "album",
      "uri": "spotify:album:4Rt6psVqmhnvrZLEoHocb6"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms"
        },
        "href": "https://api.spotify.com/v1/artists/1HY2Jd0NmPuamShAr6KMms",
        "id": "1HY2Jd0NmPuamShAr6KMms",
        "name": "Lady Gaga",
        "type": "artist",
        "uri": "spotify:artist:1HY2Jd0NmPuamShAr6KMms"
      }
    ],
    "disc_number": 1,
    "duration_ms": 294573,
    "explicit": true,
    "external_ids": {
      "isrc": "USUM70918596"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0SiywuOBRcynK0uKGWdCnn"
    },
    "href": "https://api.spotify.com/v1/tracks/0SiywuOBRcynK0uKGWdCnn",
    "id": "0SiywuOBRcynK0uKGWdCnn",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1CZOrmHUUjeDP7N2B4Ba6S"
      },
      "href": "https://api.spotify.com/v1/tracks/1CZOrmHUUjeDP7N2B4Ba6S",
      "id": "1CZOrmHUUjeDP7N2B4Ba6S",
      "type": "track",
      "uri": "spotify:track:1CZOrmHUUjeDP7N2B4Ba6S"
    },
    "name": "Bad Romance",
    "popularity": 87,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:0SiywuOBRcynK0uKGWdCnn"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5y2Xq6xcjJb2jVM54GHK3t"
          },
          "href": "https://api.spotify.com/v1/artists/5y2Xq6xcjJb2jVM54GHK3t",
          "id": "5y2Xq6xcjJb2jVM54GHK3t",
          "name": "John Legend",
          "type": "artist",
          "uri": "spotify:artist:5y2Xq6xcjJb2jVM54GHK3t"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/1rPBcCACCx9lxTib5s2Mqc"
      },
      "href": "https://api.spotify.com/v1/albums/1rPBcCACCx9lxTib5s2Mqc",
      "id": "1rPBcCACCx9lxTib5s2Mqc",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273bdaaf09e0838ef5e78560eee",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02bdaaf09e0838ef5e78560eee",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851bdaaf09e0838ef5e78560eee",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Love In The Future (South Africa Tour Edition)",
      "release_date": "2012",
      "release_date_precision": "year",
      "total_tracks": 27,
      "type": "album",
      "uri": "spotify:album:1rPBcCACCx9lxTib5s2Mqc"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5y2Xq6xcjJb2jVM54GHK3t"
        },
        "href": "https://api.spotify.com/v1/artists/5y2Xq6xcjJb2jVM54GHK3t",
        "id": "5y2Xq6xcjJb2jVM54GHK3t",
        "name": "John Legend",
        "type": "artist",
        "uri": "spotify:artist:5y2Xq6xcjJb2jVM54GHK3t"
      }
    ],
    "disc_number": 1,
    "duration_ms": 269560,
    "explicit": false,
    "external_ids": {
      "isrc": "USSM11303954"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a"
    },
    "href": "https://api.spotify.com/v1/tracks/3U4isOIWM3VvDubwSI3y7a",
    "id": "3U4isOIWM3VvDubwSI3y7a",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3uhBIQ7tv8j1FME8cFGEfG"
      },
      "href": "https://api.spotify.com/v1/tracks/3uhBIQ7tv8j1FME8cFGEfG",
      "id": "3uhBIQ7tv8j1FME8cFGEfG",
      "type": "track",
      "uri": "spotify:track:3uhBIQ7tv8j1FME8cFGEfG"
    },
    "name": "All of Me",
    "popularity": 87,
    "preview_url": "https://p.scdn.co/mp3-preview/29f542e5e8b4b6bb7e4e71a52bc3ff35b6b962ad?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 6,
    "type": "track",
    "uri": "spotify:track:3U4isOIWM3VvDubwSI3y7a"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz"
          },
          "href": "https://api.spotify.com/v1/artists/4MCBfE4596Uoi2O4DtmEMz",
          "id": "4MCBfE4596Uoi2O4DtmEMz",
          "name": "Juice WRLD",
          "type": "artist",
          "uri": "spotify:artist:4MCBfE4596Uoi2O4DtmEMz"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2viWIVEItaDlFH2RXWKwS7"
      },
      "href": "https://api.spotify.com/v1/albums/2viWIVEItaDlFH2RXWKwS7",
      "id": "2viWIVEItaDlFH2RXWKwS7",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273466028b14d6d0023a862e50d",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02466028b14d6d0023a862e50d",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851466028b14d6d0023a862e50d",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Goodbye & Good Riddance",
      "release_date": "2018-05-23",
      "release_date_precision": "day",
      "total_tracks": 16,
      "type": "album",
      "uri": "spotify:album:2viWIVEItaDlFH2RXWKwS7"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz"
        },
        "href": "https://api.spotify.com/v1/artists/4MCBfE4596Uoi2O4DtmEMz",
        "id": "4MCBfE4596Uoi2O4DtmEMz",
        "name": "Juice WRLD",
        "type": "artist",
        "uri": "spotify:artist:4MCBfE4596Uoi2O4DtmEMz"
      }
    ],
    "disc_number": 1,
    "duration_ms": 239835,
    "explicit": true,
    "external_ids": {
      "isrc": "USUG11800685"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/285pBltuF7vW8TeWk8hdRR"
    },
    "href": "https://api.spotify.com/v1/tracks/285pBltuF7vW8TeWk8hdRR",
    "id": "285pBltuF7vW8TeWk8hdRR",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/0s3nnoMeVWz3989MkNQiRf"
      },
      "href": "https://api.spotify.com/v1/tracks/0s3nnoMeVWz3989MkNQiRf",
      "id": "0s3nnoMeVWz3989MkNQiRf",
      "type": "track",
      "uri": "spotify:track:0s3nnoMeVWz3989MkNQiRf"
    },
    "name": "Lucid Dreams",
    "popularity": 87,
    "preview_url": null,
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:285pBltuF7vW8TeWk8hdRR"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
          },
          "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
          "id": "6eUKZXaKkcviH0Ku9w2n3V",
          "name": "Ed Sheeran",
          "type": "artist",
          "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6NoBzYmh5gUusGPCfg0pct"
      },
      "href": "https://api.spotify.com/v1/albums/6NoBzYmh5gUusGPCfg0pct",
      "id": "6NoBzYmh5gUusGPCfg0pct",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d08209944468440145f01524",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d08209944468440145f01524",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d08209944468440145f01524",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "x (Wembley Edition)",
      "release_date": "2013",
      "release_date_precision": "year",
      "total_tracks": 24,
      "type": "album",
      "uri": "spotify:album:6NoBzYmh5gUusGPCfg0pct"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
        },
        "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
        "id": "6eUKZXaKkcviH0Ku9w2n3V",
        "name": "Ed Sheeran",
        "type": "artist",
        "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
      }
    ],
    "disc_number": 1,
    "duration_ms": 258986,
    "explicit": false,
    "external_ids": {
      "isrc": "GBAHS1400094"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL"
    },
    "href": "https://api.spotify.com/v1/tracks/1HNkqx9Ahdgi1Ixy2xkKkL",
    "id": "1HNkqx9Ahdgi1Ixy2xkKkL",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6fxVffaTuwjgEk5h9QyRjy"
      },
      "href": "https://api.spotify.com/v1/tracks/6fxVffaTuwjgEk5h9QyRjy",
      "id": "6fxVffaTuwjgEk5h9QyRjy",
      "type": "track",
      "uri": "spotify:track:6fxVffaTuwjgEk5h9QyRjy"
    },
    "name": "Photograph",
    "popularity": 87,
    "preview_url": "https://p.scdn.co/mp3-preview/d90f4e5f15d8ed411307945560b1db8cca6b253b?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 6,
    "type": "track",
    "uri": "spotify:track:1HNkqx9Ahdgi1Ixy2xkKkL"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
          },
          "href": "https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60",
          "id": "246dkjvS1zLTtiykXe5h60",
          "name": "Post Malone",
          "type": "artist",
          "uri": "spotify:artist:246dkjvS1zLTtiykXe5h60"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6trNtQUgC8cgbWcqoMYkOR"
      },
      "href": "https://api.spotify.com/v1/albums/6trNtQUgC8cgbWcqoMYkOR",
      "id": "6trNtQUgC8cgbWcqoMYkOR",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02b1c4b76e23414c9f20242268",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851b1c4b76e23414c9f20242268",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "beerbongs & bentleys",
      "release_date": "2018-04-27",
      "release_date_precision": "day",
      "total_tracks": 18,
      "type": "album",
      "uri": "spotify:album:6trNtQUgC8cgbWcqoMYkOR"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
        },
        "href": "https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60",
        "id": "246dkjvS1zLTtiykXe5h60",
        "name": "Post Malone",
        "type": "artist",
        "uri": "spotify:artist:246dkjvS1zLTtiykXe5h60"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1URnnhqYAYcrqrcwql10ft"
        },
        "href": "https://api.spotify.com/v1/artists/1URnnhqYAYcrqrcwql10ft",
        "id": "1URnnhqYAYcrqrcwql10ft",
        "name": "21 Savage",
        "type": "artist",
        "uri": "spotify:artist:1URnnhqYAYcrqrcwql10ft"
      }
    ],
    "disc_number": 1,
    "duration_ms": 218146,
    "explicit": true,
    "external_ids": {
      "isrc": "USUM71710087"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0e7ipj03S05BNilyu5bRzt"
    },
    "href": "https://api.spotify.com/v1/tracks/0e7ipj03S05BNilyu5bRzt",
    "id": "0e7ipj03S05BNilyu5bRzt",
    "is_local": false,
    "is_playable": true,
    "name": "rockstar (feat. 21 Savage)",
    "popularity": 86,
    "preview_url": null,
    "track_number": 6,
    "type": "track",
    "uri": "spotify:track:0e7ipj03S05BNilyu5bRzt"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa"
          },
          "href": "https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa",
          "id": "00FQb4jTyendYWaN8pK0wa",
          "name": "Lana Del Rey",
          "type": "artist",
          "uri": "spotify:artist:00FQb4jTyendYWaN8pK0wa"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2GGstjn2lepcltXd21I24t"
      },
      "href": "https://api.spotify.com/v1/albums/2GGstjn2lepcltXd21I24t",
      "id": "2GGstjn2lepcltXd21I24t",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273959280fee07d485cb5b56fe7",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02959280fee07d485cb5b56fe7",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851959280fee07d485cb5b56fe7",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Born To Die (Deluxe Version)",
      "release_date": "2011-01-01",
      "release_date_precision": "day",
      "total_tracks": 16,
      "type": "album",
      "uri": "spotify:album:2GGstjn2lepcltXd21I24t"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa"
        },
        "href": "https://api.spotify.com/v1/artists/00FQb4jTyendYWaN8pK0wa",
        "id": "00FQb4jTyendYWaN8pK0wa",
        "name": "Lana Del Rey",
        "type": "artist",
        "uri": "spotify:artist:00FQb4jTyendYWaN8pK0wa"
      }
    ],
    "disc_number": 1,
    "duration_ms": 265427,
    "explicit": false,
    "external_ids": {
      "isrc": "GBUM71111565"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3BJe4B8zGnqEdQPMvfVjuS"
    },
    "href": "https://api.spotify.com/v1/tracks/3BJe4B8zGnqEdQPMvfVjuS",
    "id": "3BJe4B8zGnqEdQPMvfVjuS",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1FEiijYPJtyswChfcpv3p0"
      },
      "href": "https://api.spotify.com/v1/tracks/1FEiijYPJtyswChfcpv3p0",
      "id": "1FEiijYPJtyswChfcpv3p0",
      "type": "track",
      "uri": "spotify:track:1FEiijYPJtyswChfcpv3p0"
    },
    "name": "Summertime Sadness",
    "popularity": 87,
    "preview_url": null,
    "track_number": 11,
    "type": "track",
    "uri": "spotify:track:3BJe4B8zGnqEdQPMvfVjuS"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/69GGBxA162lTqCwzJG5jLp"
          },
          "href": "https://api.spotify.com/v1/artists/69GGBxA162lTqCwzJG5jLp",
          "id": "69GGBxA162lTqCwzJG5jLp",
          "name": "The Chainsmokers",
          "type": "artist",
          "uri": "spotify:artist:69GGBxA162lTqCwzJG5jLp"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2"
          },
          "href": "https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2",
          "id": "26VFTg2z8YR0cCuwLzESi2",
          "name": "Halsey",
          "type": "artist",
          "uri": "spotify:artist:26VFTg2z8YR0cCuwLzESi2"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/0rSLgV8p5FzfnqlEk4GzxE"
      },
      "href": "https://api.spotify.com/v1/albums/0rSLgV8p5FzfnqlEk4GzxE",
      "id": "0rSLgV8p5FzfnqlEk4GzxE",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273495ce6da9aeb159e94eaa453",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02495ce6da9aeb159e94eaa453",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851495ce6da9aeb159e94eaa453",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Closer",
      "release_date": "2016-07-29",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:0rSLgV8p5FzfnqlEk4GzxE"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/69GGBxA162lTqCwzJG5jLp"
        },
        "href": "https://api.spotify.com/v1/artists/69GGBxA162lTqCwzJG5jLp",
        "id": "69GGBxA162lTqCwzJG5jLp",
        "name": "The Chainsmokers",
        "type": "artist",
        "uri": "spotify:artist:69GGBxA162lTqCwzJG5jLp"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/26VFTg2z8YR0cCuwLzESi2"
        },
        "href": "https://api.spotify.com/v1/artists/26VFTg2z8YR0cCuwLzESi2",
        "id": "26VFTg2z8YR0cCuwLzESi2",
        "name": "Halsey",
        "type": "artist",
        "uri": "spotify:artist:26VFTg2z8YR0cCuwLzESi2"
      }
    ],
    "disc_number": 1,
    "duration_ms": 244960,
    "explicit": false,
    "external_ids": {
      "isrc": "USQX91601347"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw"
    },
    "href": "https://api.spotify.com/v1/tracks/7BKLCZ1jbUBVqRi2FVlTVw",
    "id": "7BKLCZ1jbUBVqRi2FVlTVw",
    "is_local": false,
    "is_playable": true,
    "name": "Closer",
    "popularity": 86,
    "preview_url": "https://p.scdn.co/mp3-preview/cfd565c4d3c621771e6d25d99749b9fc200e396c?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:7BKLCZ1jbUBVqRi2FVlTVw"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2EMAnMvWE2eb56ToJVfCWs"
          },
          "href": "https://api.spotify.com/v1/artists/2EMAnMvWE2eb56ToJVfCWs",
          "id": "2EMAnMvWE2eb56ToJVfCWs",
          "name": "Bryson Tiller",
          "type": "artist",
          "uri": "spotify:artist:2EMAnMvWE2eb56ToJVfCWs"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6eZdwrhB97A3EYx9QppGfl"
      },
      "href": "https://api.spotify.com/v1/albums/6eZdwrhB97A3EYx9QppGfl",
      "id": "6eZdwrhB97A3EYx9QppGfl",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d5f3cea8affdca01a0dc754f",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d5f3cea8affdca01a0dc754f",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d5f3cea8affdca01a0dc754f",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "T R A P S O U L",
      "release_date": "2015-10-02",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:6eZdwrhB97A3EYx9QppGfl"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2EMAnMvWE2eb56ToJVfCWs"
        },
        "href": "https://api.spotify.com/v1/artists/2EMAnMvWE2eb56ToJVfCWs",
        "id": "2EMAnMvWE2eb56ToJVfCWs",
        "name": "Bryson Tiller",
        "type": "artist",
        "uri": "spotify:artist:2EMAnMvWE2eb56ToJVfCWs"
      }
    ],
    "disc_number": 1,
    "duration_ms": 198293,
    "explicit": true,
    "external_ids": {
      "isrc": "USRC11501051"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3pXF1nA74528Edde4of9CC"
    },
    "href": "https://api.spotify.com/v1/tracks/3pXF1nA74528Edde4of9CC",
    "id": "3pXF1nA74528Edde4of9CC",
    "is_local": false,
    "is_playable": true,
    "name": "Don't",
    "popularity": 86,
    "preview_url": "https://p.scdn.co/mp3-preview/f7e8de8a2a419c43ddf77af8572e6ad1e4cb64d4?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:3pXF1nA74528Edde4of9CC"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
          },
          "href": "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
          "id": "4gzpq5DPGxSnKTe4SA8HAU",
          "name": "Coldplay",
          "type": "artist",
          "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3cfAM8b8KqJRoIzt3zLKqw"
      },
      "href": "https://api.spotify.com/v1/albums/3cfAM8b8KqJRoIzt3zLKqw",
      "id": "3cfAM8b8KqJRoIzt3zLKqw",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2738ff7c3580d429c8212b9a3b6",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e028ff7c3580d429c8212b9a3b6",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048518ff7c3580d429c8212b9a3b6",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "A Head Full of Dreams",
      "release_date": "2015-12-04",
      "release_date_precision": "day",
      "total_tracks": 11,
      "type": "album",
      "uri": "spotify:album:3cfAM8b8KqJRoIzt3zLKqw"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
        },
        "href": "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
        "id": "4gzpq5DPGxSnKTe4SA8HAU",
        "name": "Coldplay",
        "type": "artist",
        "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
      }
    ],
    "disc_number": 1,
    "duration_ms": 258266,
    "explicit": false,
    "external_ids": {
      "isrc": "GBAYE1500979"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3RiPr603aXAoi4GHyXx0uy"
    },
    "href": "https://api.spotify.com/v1/tracks/3RiPr603aXAoi4GHyXx0uy",
    "id": "3RiPr603aXAoi4GHyXx0uy",
    "is_local": false,
    "is_playable": true,
    "name": "Hymn for the Weekend",
    "popularity": 86,
    "preview_url": "https://p.scdn.co/mp3-preview/cb0aa0a64ef56a161fbe2b298174cd69d8a71a9d?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:3RiPr603aXAoi4GHyXx0uy"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq"
          },
          "href": "https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq",
          "id": "4AK6F7OLvEQ5QYCBNiQWHq",
          "name": "One Direction",
          "type": "artist",
          "uri": "spotify:artist:4AK6F7OLvEQ5QYCBNiQWHq"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6cunQQ7YZisYOoiFu2ywIq"
      },
      "href": "https://api.spotify.com/v1/albums/6cunQQ7YZisYOoiFu2ywIq",
      "id": "6cunQQ7YZisYOoiFu2ywIq",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2734a5584795dc73860653a9a3e",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e024a5584795dc73860653a9a3e",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048514a5584795dc73860653a9a3e",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Up All Night",
      "release_date": "2012-05-25",
      "release_date_precision": "day",
      "total_tracks": 18,
      "type": "album",
      "uri": "spotify:album:6cunQQ7YZisYOoiFu2ywIq"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq"
        },
        "href": "https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq",
        "id": "4AK6F7OLvEQ5QYCBNiQWHq",
        "name": "One Direction",
        "type": "artist",
        "uri": "spotify:artist:4AK6F7OLvEQ5QYCBNiQWHq"
      }
    ],
    "disc_number": 1,
    "duration_ms": 199986,
    "explicit": false,
    "external_ids": {
      "isrc": "GBHMU1100018"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/4cluDES4hQEUhmXj6TXkSo"
    },
    "href": "https://api.spotify.com/v1/tracks/4cluDES4hQEUhmXj6TXkSo",
    "id": "4cluDES4hQEUhmXj6TXkSo",
    "is_local": false,
    "is_playable": true,
    "name": "What Makes You Beautiful",
    "popularity": 86,
    "preview_url": "https://p.scdn.co/mp3-preview/3abcba42a4cb3566c4840c29fd6695459065b1ae?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:4cluDES4hQEUhmXj6TXkSo"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY"
          },
          "href": "https://api.spotify.com/v1/artists/7CajNmpbOovFoOoasH2HaY",
          "id": "7CajNmpbOovFoOoasH2HaY",
          "name": "Calvin Harris",
          "type": "artist",
          "uri": "spotify:artist:7CajNmpbOovFoOoasH2HaY"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H"
          },
          "href": "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
          "id": "5pKCCKE2ajJHZ9KAiaK11H",
          "name": "Rihanna",
          "type": "artist",
          "uri": "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3pEgGUv379EDinvg1TN7Kt"
      },
      "href": "https://api.spotify.com/v1/albums/3pEgGUv379EDinvg1TN7Kt",
      "id": "3pEgGUv379EDinvg1TN7Kt",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d9aa52355e062f5de060adbf",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d9aa52355e062f5de060adbf",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d9aa52355e062f5de060adbf",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "This Is What You Came For",
      "release_date": "2016-04-29",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:3pEgGUv379EDinvg1TN7Kt"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY"
        },
        "href": "https://api.spotify.com/v1/artists/7CajNmpbOovFoOoasH2HaY",
        "id": "7CajNmpbOovFoOoasH2HaY",
        "name": "Calvin Harris",
        "type": "artist",
        "uri": "spotify:artist:7CajNmpbOovFoOoasH2HaY"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H"
        },
        "href": "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
        "id": "5pKCCKE2ajJHZ9KAiaK11H",
        "name": "Rihanna",
        "type": "artist",
        "uri": "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H"
      }
    ],
    "disc_number": 1,
    "duration_ms": 222160,
    "explicit": false,
    "external_ids": {
      "isrc": "GBARL1600460"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0azC730Exh71aQlOt9Zj3y"
    },
    "href": "https://api.spotify.com/v1/tracks/0azC730Exh71aQlOt9Zj3y",
    "id": "0azC730Exh71aQlOt9Zj3y",
    "is_local": false,
    "is_playable": true,
    "name": "This Is What You Came For",
    "popularity": 86,
    "preview_url": "https://p.scdn.co/mp3-preview/14138fec09bb5940b1ee11c3207663906970cf9b?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:0azC730Exh71aQlOt9Zj3y"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6DIS6PRrLS3wbnZsf7vYic"
          },
          "href": "https://api.spotify.com/v1/artists/6DIS6PRrLS3wbnZsf7vYic",
          "id": "6DIS6PRrLS3wbnZsf7vYic",
          "name": "WALK THE MOON",
          "type": "artist",
          "uri": "spotify:artist:6DIS6PRrLS3wbnZsf7vYic"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3mNoFlD1wsoXfkljfFzExT"
      },
      "href": "https://api.spotify.com/v1/albums/3mNoFlD1wsoXfkljfFzExT",
      "id": "3mNoFlD1wsoXfkljfFzExT",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27343294cfa2688055c9d821bf3",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0243294cfa2688055c9d821bf3",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485143294cfa2688055c9d821bf3",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "TALKING IS HARD",
      "release_date": "2014-12-02",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:3mNoFlD1wsoXfkljfFzExT"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6DIS6PRrLS3wbnZsf7vYic"
        },
        "href": "https://api.spotify.com/v1/artists/6DIS6PRrLS3wbnZsf7vYic",
        "id": "6DIS6PRrLS3wbnZsf7vYic",
        "name": "WALK THE MOON",
        "type": "artist",
        "uri": "spotify:artist:6DIS6PRrLS3wbnZsf7vYic"
      }
    ],
    "disc_number": 1,
    "duration_ms": 199080,
    "explicit": false,
    "external_ids": {
      "isrc": "USRC11401949"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/4kbj5MwxO1bq9wjT5g9HaA"
    },
    "href": "https://api.spotify.com/v1/tracks/4kbj5MwxO1bq9wjT5g9HaA",
    "id": "4kbj5MwxO1bq9wjT5g9HaA",
    "is_local": false,
    "is_playable": true,
    "name": "Shut Up and Dance",
    "popularity": 86,
    "preview_url": "https://p.scdn.co/mp3-preview/4309fadd9a0d573c1fafcca507e024b3bb51266b?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:4kbj5MwxO1bq9wjT5g9HaA"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/26dSoYclwsYLMAKD3tpOr4"
          },
          "href": "https://api.spotify.com/v1/artists/26dSoYclwsYLMAKD3tpOr4",
          "id": "26dSoYclwsYLMAKD3tpOr4",
          "name": "Britney Spears",
          "type": "artist",
          "uri": "spotify:artist:26dSoYclwsYLMAKD3tpOr4"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/0z7pVBGOD7HCIB7S8eLkLI"
      },
      "href": "https://api.spotify.com/v1/albums/0z7pVBGOD7HCIB7S8eLkLI",
      "id": "0z7pVBGOD7HCIB7S8eLkLI",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273efc6988972cb04105f002cd4",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02efc6988972cb04105f002cd4",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851efc6988972cb04105f002cd4",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "In The Zone",
      "release_date": "2003-11-13",
      "release_date_precision": "day",
      "total_tracks": 13,
      "type": "album",
      "uri": "spotify:album:0z7pVBGOD7HCIB7S8eLkLI"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/26dSoYclwsYLMAKD3tpOr4"
        },
        "href": "https://api.spotify.com/v1/artists/26dSoYclwsYLMAKD3tpOr4",
        "id": "26dSoYclwsYLMAKD3tpOr4",
        "name": "Britney Spears",
        "type": "artist",
        "uri": "spotify:artist:26dSoYclwsYLMAKD3tpOr4"
      }
    ],
    "disc_number": 1,
    "duration_ms": 198800,
    "explicit": false,
    "external_ids": {
      "isrc": "USJI10301005"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/6I9VzXrHxO9rA9A5euc8Ak"
    },
    "href": "https://api.spotify.com/v1/tracks/6I9VzXrHxO9rA9A5euc8Ak",
    "id": "6I9VzXrHxO9rA9A5euc8Ak",
    "is_local": false,
    "is_playable": true,
    "name": "Toxic",
    "popularity": 86,
    "preview_url": "https://p.scdn.co/mp3-preview/6de2791f84c1d637a0e24734b6df3997cc742da4?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 6,
    "type": "track",
    "uri": "spotify:track:6I9VzXrHxO9rA9A5euc8Ak"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3hv9jJF3adDNsBSIQDqcjp"
          },
          "href": "https://api.spotify.com/v1/artists/3hv9jJF3adDNsBSIQDqcjp",
          "id": "3hv9jJF3adDNsBSIQDqcjp",
          "name": "Mark Ronson",
          "type": "artist",
          "uri": "spotify:artist:3hv9jJF3adDNsBSIQDqcjp"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3vLaOYCNCzngDf8QdBg2V1"
      },
      "href": "https://api.spotify.com/v1/albums/3vLaOYCNCzngDf8QdBg2V1",
      "id": "3vLaOYCNCzngDf8QdBg2V1",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273e419ccba0baa8bd3f3d7abf2",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02e419ccba0baa8bd3f3d7abf2",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851e419ccba0baa8bd3f3d7abf2",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Uptown Special",
      "release_date": "2015-01-12",
      "release_date_precision": "day",
      "total_tracks": 11,
      "type": "album",
      "uri": "spotify:album:3vLaOYCNCzngDf8QdBg2V1"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3hv9jJF3adDNsBSIQDqcjp"
        },
        "href": "https://api.spotify.com/v1/artists/3hv9jJF3adDNsBSIQDqcjp",
        "id": "3hv9jJF3adDNsBSIQDqcjp",
        "name": "Mark Ronson",
        "type": "artist",
        "uri": "spotify:artist:3hv9jJF3adDNsBSIQDqcjp"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C"
        },
        "href": "https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C",
        "id": "0du5cEVh5yTK9QJze8zA0C",
        "name": "Bruno Mars",
        "type": "artist",
        "uri": "spotify:artist:0du5cEVh5yTK9QJze8zA0C"
      }
    ],
    "disc_number": 1,
    "duration_ms": 269666,
    "explicit": true,
    "external_ids": {
      "isrc": "GBARL1401524"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS"
    },
    "href": "https://api.spotify.com/v1/tracks/32OlwWuMpZ6b0aN2RZOeMS",
    "id": "32OlwWuMpZ6b0aN2RZOeMS",
    "is_local": false,
    "is_playable": true,
    "name": "Uptown Funk (feat. Bruno Mars)",
    "popularity": 86,
    "preview_url": "https://p.scdn.co/mp3-preview/3074e956e6794c0eadea660b9cef671db6b27234?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 4,
    "type": "track",
    "uri": "spotify:track:32OlwWuMpZ6b0aN2RZOeMS"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
          },
          "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
          "id": "1Xyo4u8uXC1ZmMpatF05PJ",
          "name": "The Weeknd",
          "type": "artist",
          "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/0P3oVJBFOv3TDXlYRhGL7s"
      },
      "href": "https://api.spotify.com/v1/albums/0P3oVJBFOv3TDXlYRhGL7s",
      "id": "0P3oVJBFOv3TDXlYRhGL7s",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2737fcead687e99583072cc217b",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e027fcead687e99583072cc217b",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048517fcead687e99583072cc217b",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Beauty Behind The Madness",
      "release_date": "2015-08-28",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:0P3oVJBFOv3TDXlYRhGL7s"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
        },
        "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
        "id": "1Xyo4u8uXC1ZmMpatF05PJ",
        "name": "The Weeknd",
        "type": "artist",
        "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
      }
    ],
    "disc_number": 1,
    "duration_ms": 213520,
    "explicit": false,
    "external_ids": {
      "isrc": "USUG11500741"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/22VdIZQfgXJea34mQxlt81"
    },
    "href": "https://api.spotify.com/v1/tracks/22VdIZQfgXJea34mQxlt81",
    "id": "22VdIZQfgXJea34mQxlt81",
    "is_local": false,
    "is_playable": true,
    "name": "Can't Feel My Face",
    "popularity": 86,
    "preview_url": null,
    "track_number": 7,
    "type": "track",
    "uri": "spotify:track:22VdIZQfgXJea34mQxlt81"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6VuMaDnrHyPL1p4EHjYLi7"
          },
          "href": "https://api.spotify.com/v1/artists/6VuMaDnrHyPL1p4EHjYLi7",
          "id": "6VuMaDnrHyPL1p4EHjYLi7",
          "name": "Charlie Puth",
          "type": "artist",
          "uri": "spotify:artist:6VuMaDnrHyPL1p4EHjYLi7"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/0mZIUXje90JtHxPNzWsJNR"
      },
      "href": "https://api.spotify.com/v1/albums/0mZIUXje90JtHxPNzWsJNR",
      "id": "0mZIUXje90JtHxPNzWsJNR",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273897f73256b9128a9d70eaf66",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02897f73256b9128a9d70eaf66",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851897f73256b9128a9d70eaf66",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Voicenotes",
      "release_date": "2018-05-11",
      "release_date_precision": "day",
      "total_tracks": 13,
      "type": "album",
      "uri": "spotify:album:0mZIUXje90JtHxPNzWsJNR"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6VuMaDnrHyPL1p4EHjYLi7"
        },
        "href": "https://api.spotify.com/v1/artists/6VuMaDnrHyPL1p4EHjYLi7",
        "id": "6VuMaDnrHyPL1p4EHjYLi7",
        "name": "Charlie Puth",
        "type": "artist",
        "uri": "spotify:artist:6VuMaDnrHyPL1p4EHjYLi7"
      }
    ],
    "disc_number": 1,
    "duration_ms": 208786,
    "explicit": false,
    "external_ids": {
      "isrc": "USAT21700928"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/5cF0dROlMOK5uNZtivgu50"
    },
    "href": "https://api.spotify.com/v1/tracks/5cF0dROlMOK5uNZtivgu50",
    "id": "5cF0dROlMOK5uNZtivgu50",
    "is_local": false,
    "is_playable": true,
    "name": "Attention",
    "popularity": 86,
    "preview_url": "https://p.scdn.co/mp3-preview/db76d34af2f966975e0c1b8b9e43dca882e27229?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:5cF0dROlMOK5uNZtivgu50"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4gwpcMTbLWtBUlOijbVpuu"
          },
          "href": "https://api.spotify.com/v1/artists/4gwpcMTbLWtBUlOijbVpuu",
          "id": "4gwpcMTbLWtBUlOijbVpuu",
          "name": "Capital Cities",
          "type": "artist",
          "uri": "spotify:artist:4gwpcMTbLWtBUlOijbVpuu"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3WrufJir7I61NkvkDwxero"
      },
      "href": "https://api.spotify.com/v1/albums/3WrufJir7I61NkvkDwxero",
      "id": "3WrufJir7I61NkvkDwxero",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27313c6cb6a81c8db4dbc8b9924",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0213c6cb6a81c8db4dbc8b9924",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485113c6cb6a81c8db4dbc8b9924",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "In A Tidal Wave Of Mystery (Deluxe Edition)",
      "release_date": "2013",
      "release_date_precision": "year",
      "total_tracks": 16,
      "type": "album",
      "uri": "spotify:album:3WrufJir7I61NkvkDwxero"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4gwpcMTbLWtBUlOijbVpuu"
        },
        "href": "https://api.spotify.com/v1/artists/4gwpcMTbLWtBUlOijbVpuu",
        "id": "4gwpcMTbLWtBUlOijbVpuu",
        "name": "Capital Cities",
        "type": "artist",
        "uri": "spotify:artist:4gwpcMTbLWtBUlOijbVpuu"
      }
    ],
    "disc_number": 1,
    "duration_ms": 192789,
    "explicit": false,
    "external_ids": {
      "isrc": "USCA21203108"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/6Z8R6UsFuGXGtiIxiD8ISb"
    },
    "href": "https://api.spotify.com/v1/tracks/6Z8R6UsFuGXGtiIxiD8ISb",
    "id": "6Z8R6UsFuGXGtiIxiD8ISb",
    "is_local": false,
    "is_playable": true,
    "name": "Safe And Sound",
    "popularity": 86,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:6Z8R6UsFuGXGtiIxiD8ISb"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL"
          },
          "href": "https://api.spotify.com/v1/artists/73sIBHcqh3Z3NyqHKZ7FOL",
          "id": "73sIBHcqh3Z3NyqHKZ7FOL",
          "name": "Childish Gambino",
          "type": "artist",
          "uri": "spotify:artist:73sIBHcqh3Z3NyqHKZ7FOL"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4xnq1L6P551Qcb9gBXNMK7"
      },
      "href": "https://api.spotify.com/v1/albums/4xnq1L6P551Qcb9gBXNMK7",
      "id": "4xnq1L6P551Qcb9gBXNMK7",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2730b97e56ffad7c6211aa848f8",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e020b97e56ffad7c6211aa848f8",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048510b97e56ffad7c6211aa848f8",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "\"Awaken, My Love!\"",
      "release_date": "2016-12-02",
      "release_date_precision": "day",
      "total_tracks": 11,
      "type": "album",
      "uri": "spotify:album:4xnq1L6P551Qcb9gBXNMK7"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/73sIBHcqh3Z3NyqHKZ7FOL"
        },
        "href": "https://api.spotify.com/v1/artists/73sIBHcqh3Z3NyqHKZ7FOL",
        "id": "73sIBHcqh3Z3NyqHKZ7FOL",
        "name": "Childish Gambino",
        "type": "artist",
        "uri": "spotify:artist:73sIBHcqh3Z3NyqHKZ7FOL"
      }
    ],
    "disc_number": 1,
    "duration_ms": 326933,
    "explicit": true,
    "external_ids": {
      "isrc": "USYAH1600107"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0WtDGnWL2KrMCk0mI1Gpwz"
    },
    "href": "https://api.spotify.com/v1/tracks/0WtDGnWL2KrMCk0mI1Gpwz",
    "id": "0WtDGnWL2KrMCk0mI1Gpwz",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/3kxfsdsCpFgN412fpnW85Y"
      },
      "href": "https://api.spotify.com/v1/tracks/3kxfsdsCpFgN412fpnW85Y",
      "id": "3kxfsdsCpFgN412fpnW85Y",
      "type": "track",
      "uri": "spotify:track:3kxfsdsCpFgN412fpnW85Y"
    },
    "name": "Redbone",
    "popularity": 86,
    "preview_url": "https://p.scdn.co/mp3-preview/14918511e11a9e46fa170413821e5f89bd31872a?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 6,
    "type": "track",
    "uri": "spotify:track:0WtDGnWL2KrMCk0mI1Gpwz"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
          },
          "href": "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
          "id": "1uNFoZAHBGtllmzznpCI3s",
          "name": "Justin Bieber",
          "type": "artist",
          "uri": "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6Fr2rQkZ383FcMqFyT7yPr"
      },
      "href": "https://api.spotify.com/v1/albums/6Fr2rQkZ383FcMqFyT7yPr",
      "id": "6Fr2rQkZ383FcMqFyT7yPr",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02f46b9d202509a8f7384b90de",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851f46b9d202509a8f7384b90de",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Purpose (Deluxe)",
      "release_date": "2015-11-13",
      "release_date_precision": "day",
      "total_tracks": 19,
      "type": "album",
      "uri": "spotify:album:6Fr2rQkZ383FcMqFyT7yPr"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
        },
        "href": "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
        "id": "1uNFoZAHBGtllmzznpCI3s",
        "name": "Justin Bieber",
        "type": "artist",
        "uri": "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
      }
    ],
    "disc_number": 1,
    "duration_ms": 200786,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71516760"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF"
    },
    "href": "https://api.spotify.com/v1/tracks/09CtPGIpYB4BrO8qb1RGsF",
    "id": "09CtPGIpYB4BrO8qb1RGsF",
    "is_local": false,
    "is_playable": true,
    "name": "Sorry",
    "popularity": 86,
    "preview_url": null,
    "track_number": 4,
    "type": "track",
    "uri": "spotify:track:09CtPGIpYB4BrO8qb1RGsF"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"
          },
          "href": "https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH",
          "id": "6qqNVTkY8uBg9cP3Jd7DAH",
          "name": "Billie Eilish",
          "type": "artist",
          "uri": "spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2DfPdWWXknoGKrfa2Eicyw"
      },
      "href": "https://api.spotify.com/v1/albums/2DfPdWWXknoGKrfa2Eicyw",
      "id": "2DfPdWWXknoGKrfa2Eicyw",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27304b3aa9683e334b8140d19e7",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0204b3aa9683e334b8140d19e7",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485104b3aa9683e334b8140d19e7",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "when the party's over",
      "release_date": "2018-10-17",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:2DfPdWWXknoGKrfa2Eicyw"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"
        },
        "href": "https://api.spotify.com/v1/artists/6qqNVTkY8uBg9cP3Jd7DAH",
        "id": "6qqNVTkY8uBg9cP3Jd7DAH",
        "name": "Billie Eilish",
        "type": "artist",
        "uri": "spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH"
      }
    ],
    "disc_number": 1,
    "duration_ms": 196077,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71815958"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/43zdsphuZLzwA9k4DJhU0I"
    },
    "href": "https://api.spotify.com/v1/tracks/43zdsphuZLzwA9k4DJhU0I",
    "id": "43zdsphuZLzwA9k4DJhU0I",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/14JzyD6FlBD5z0wV5P07YI"
      },
      "href": "https://api.spotify.com/v1/tracks/14JzyD6FlBD5z0wV5P07YI",
      "id": "14JzyD6FlBD5z0wV5P07YI",
      "type": "track",
      "uri": "spotify:track:14JzyD6FlBD5z0wV5P07YI"
    },
    "name": "when the party's over",
    "popularity": 86,
    "preview_url": null,
    "track_number": 7,
    "type": "track",
    "uri": "spotify:track:43zdsphuZLzwA9k4DJhU0I"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5"
          },
          "href": "https://api.spotify.com/v1/artists/6l3HvQ5sa6mXTsMTB19rO5",
          "id": "6l3HvQ5sa6mXTsMTB19rO5",
          "name": "J. Cole",
          "type": "artist",
          "uri": "spotify:artist:6l3HvQ5sa6mXTsMTB19rO5"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/7viNUmZZ8ztn2UB4XB3jIL"
      },
      "href": "https://api.spotify.com/v1/albums/7viNUmZZ8ztn2UB4XB3jIL",
      "id": "7viNUmZZ8ztn2UB4XB3jIL",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2736aca031ccc27d2e4dd829d14",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e026aca031ccc27d2e4dd829d14",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048516aca031ccc27d2e4dd829d14",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "2014 Forest Hills Drive",
      "release_date": "2014-12-09",
      "release_date_precision": "day",
      "total_tracks": 13,
      "type": "album",
      "uri": "spotify:album:7viNUmZZ8ztn2UB4XB3jIL"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5"
        },
        "href": "https://api.spotify.com/v1/artists/6l3HvQ5sa6mXTsMTB19rO5",
        "id": "6l3HvQ5sa6mXTsMTB19rO5",
        "name": "J. Cole",
        "type": "artist",
        "uri": "spotify:artist:6l3HvQ5sa6mXTsMTB19rO5"
      }
    ],
    "disc_number": 1,
    "duration_ms": 239266,
    "explicit": true,
    "external_ids": {
      "isrc": "USQX91402592"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/4tqcoej1zPvwePZCzuAjJd"
    },
    "href": "https://api.spotify.com/v1/tracks/4tqcoej1zPvwePZCzuAjJd",
    "id": "4tqcoej1zPvwePZCzuAjJd",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6Ius4TC0L3cN74HT7ENE6e"
      },
      "href": "https://api.spotify.com/v1/tracks/6Ius4TC0L3cN74HT7ENE6e",
      "id": "6Ius4TC0L3cN74HT7ENE6e",
      "type": "track",
      "uri": "spotify:track:6Ius4TC0L3cN74HT7ENE6e"
    },
    "name": "Wet Dreamz",
    "popularity": 86,
    "preview_url": null,
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:4tqcoej1zPvwePZCzuAjJd"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR"
          },
          "href": "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
          "id": "66CXWjxzNUsdJxJ2JdwvnR",
          "name": "Ariana Grande",
          "type": "artist",
          "uri": "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/41zTgMSJC9mF6NyBkXXxZr"
      },
      "href": "https://api.spotify.com/v1/albums/41zTgMSJC9mF6NyBkXXxZr",
      "id": "41zTgMSJC9mF6NyBkXXxZr",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27334933308ad8af9d87cd504dc",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0234933308ad8af9d87cd504dc",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485134933308ad8af9d87cd504dc",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "My Everything",
      "release_date": "2014-08-24",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:41zTgMSJC9mF6NyBkXXxZr"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR"
        },
        "href": "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
        "id": "66CXWjxzNUsdJxJ2JdwvnR",
        "name": "Ariana Grande",
        "type": "artist",
        "uri": "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR"
      }
    ],
    "disc_number": 1,
    "duration_ms": 197266,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71409723"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7xoUc6faLbCqZO6fQEYprd"
    },
    "href": "https://api.spotify.com/v1/tracks/7xoUc6faLbCqZO6fQEYprd",
    "id": "7xoUc6faLbCqZO6fQEYprd",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1CAksvEO6oRHd9bBKWAfuY"
      },
      "href": "https://api.spotify.com/v1/tracks/1CAksvEO6oRHd9bBKWAfuY",
      "id": "1CAksvEO6oRHd9bBKWAfuY",
      "type": "track",
      "uri": "spotify:track:1CAksvEO6oRHd9bBKWAfuY"
    },
    "name": "One Last Time",
    "popularity": 86,
    "preview_url": null,
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:7xoUc6faLbCqZO6fQEYprd"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6LqNN22kT3074XbTVUrhzX"
          },
          "href": "https://api.spotify.com/v1/artists/6LqNN22kT3074XbTVUrhzX",
          "id": "6LqNN22kT3074XbTVUrhzX",
          "name": "Kesha",
          "type": "artist",
          "uri": "spotify:artist:6LqNN22kT3074XbTVUrhzX"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/5peRwC6pQh8eaoIPtvmmOB"
      },
      "href": "https://api.spotify.com/v1/albums/5peRwC6pQh8eaoIPtvmmOB",
      "id": "5peRwC6pQh8eaoIPtvmmOB",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2737e531970051e341bfbbdc115",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e027e531970051e341bfbbdc115",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048517e531970051e341bfbbdc115",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Animal",
      "release_date": "2010",
      "release_date_precision": "year",
      "total_tracks": 15,
      "type": "album",
      "uri": "spotify:album:5peRwC6pQh8eaoIPtvmmOB"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6LqNN22kT3074XbTVUrhzX"
        },
        "href": "https://api.spotify.com/v1/artists/6LqNN22kT3074XbTVUrhzX",
        "id": "6LqNN22kT3074XbTVUrhzX",
        "name": "Kesha",
        "type": "artist",
        "uri": "spotify:artist:6LqNN22kT3074XbTVUrhzX"
      }
    ],
    "disc_number": 1,
    "duration_ms": 199693,
    "explicit": false,
    "external_ids": {
      "isrc": "USRC10900433"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0HPD5WQqrq7wPWR7P7Dw1i"
    },
    "href": "https://api.spotify.com/v1/tracks/0HPD5WQqrq7wPWR7P7Dw1i",
    "id": "0HPD5WQqrq7wPWR7P7Dw1i",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6nYoTBmGFNgfTyRC8x1Fvp"
      },
      "href": "https://api.spotify.com/v1/tracks/6nYoTBmGFNgfTyRC8x1Fvp",
      "id": "6nYoTBmGFNgfTyRC8x1Fvp",
      "type": "track",
      "uri": "spotify:track:6nYoTBmGFNgfTyRC8x1Fvp"
    },
    "name": "TiK ToK",
    "popularity": 86,
    "preview_url": "https://p.scdn.co/mp3-preview/ea95bec21bd6c4979cc91f5d5528b533d879905c?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:0HPD5WQqrq7wPWR7P7Dw1i"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq"
          },
          "href": "https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq",
          "id": "4AK6F7OLvEQ5QYCBNiQWHq",
          "name": "One Direction",
          "type": "artist",
          "uri": "spotify:artist:4AK6F7OLvEQ5QYCBNiQWHq"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/7p1fX8aUySrBdx4WSYspOu"
      },
      "href": "https://api.spotify.com/v1/albums/7p1fX8aUySrBdx4WSYspOu",
      "id": "7p1fX8aUySrBdx4WSYspOu",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2732f76b797c382bedcafdf45e1",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e022f76b797c382bedcafdf45e1",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048512f76b797c382bedcafdf45e1",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Midnight Memories (Deluxe)",
      "release_date": "2013-11-25",
      "release_date_precision": "day",
      "total_tracks": 18,
      "type": "album",
      "uri": "spotify:album:7p1fX8aUySrBdx4WSYspOu"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq"
        },
        "href": "https://api.spotify.com/v1/artists/4AK6F7OLvEQ5QYCBNiQWHq",
        "id": "4AK6F7OLvEQ5QYCBNiQWHq",
        "name": "One Direction",
        "type": "artist",
        "uri": "spotify:artist:4AK6F7OLvEQ5QYCBNiQWHq"
      }
    ],
    "disc_number": 1,
    "duration_ms": 245493,
    "explicit": false,
    "external_ids": {
      "isrc": "GBHMU1300210"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/4nVBt6MZDDP6tRVdQTgxJg"
    },
    "href": "https://api.spotify.com/v1/tracks/4nVBt6MZDDP6tRVdQTgxJg",
    "id": "4nVBt6MZDDP6tRVdQTgxJg",
    "is_local": false,
    "is_playable": true,
    "name": "Story of My Life",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/9c3f89f926a702034ae182e723b2d601c2bd754d?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:4nVBt6MZDDP6tRVdQTgxJg"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4O15NlyKLIASxsJ0PrXPfz"
          },
          "href": "https://api.spotify.com/v1/artists/4O15NlyKLIASxsJ0PrXPfz",
          "id": "4O15NlyKLIASxsJ0PrXPfz",
          "name": "Lil Uzi Vert",
          "type": "artist",
          "uri": "spotify:artist:4O15NlyKLIASxsJ0PrXPfz"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/733e1ZfktLSwj96X5rsMeE"
      },
      "href": "https://api.spotify.com/v1/albums/733e1ZfktLSwj96X5rsMeE",
      "id": "733e1ZfktLSwj96X5rsMeE",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27341b41e6f7924e530a9b00f9c",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0241b41e6f7924e530a9b00f9c",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485141b41e6f7924e530a9b00f9c",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Luv Is Rage 2",
      "release_date": "2017-08-25",
      "release_date_precision": "day",
      "total_tracks": 16,
      "type": "album",
      "uri": "spotify:album:733e1ZfktLSwj96X5rsMeE"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4O15NlyKLIASxsJ0PrXPfz"
        },
        "href": "https://api.spotify.com/v1/artists/4O15NlyKLIASxsJ0PrXPfz",
        "id": "4O15NlyKLIASxsJ0PrXPfz",
        "name": "Lil Uzi Vert",
        "type": "artist",
        "uri": "spotify:artist:4O15NlyKLIASxsJ0PrXPfz"
      }
    ],
    "disc_number": 1,
    "duration_ms": 182706,
    "explicit": true,
    "external_ids": {
      "isrc": "USAT21703440"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7GX5flRQZVHRAGd6B4TmDO"
    },
    "href": "https://api.spotify.com/v1/tracks/7GX5flRQZVHRAGd6B4TmDO",
    "id": "7GX5flRQZVHRAGd6B4TmDO",
    "is_local": false,
    "is_playable": true,
    "name": "XO Tour Llif3",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/115d957b81400862451425d9591dfa938da476da?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 16,
    "type": "track",
    "uri": "spotify:track:7GX5flRQZVHRAGd6B4TmDO"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5Rl15oVamLq7FbSb0NNBNy"
          },
          "href": "https://api.spotify.com/v1/artists/5Rl15oVamLq7FbSb0NNBNy",
          "id": "5Rl15oVamLq7FbSb0NNBNy",
          "name": "5 Seconds of Summer",
          "type": "artist",
          "uri": "spotify:artist:5Rl15oVamLq7FbSb0NNBNy"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2D0Hi3Jj6RFnpWDcSa0Otu"
      },
      "href": "https://api.spotify.com/v1/albums/2D0Hi3Jj6RFnpWDcSa0Otu",
      "id": "2D0Hi3Jj6RFnpWDcSa0Otu",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27341aa6776dc15fbd71a2b4557",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0241aa6776dc15fbd71a2b4557",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485141aa6776dc15fbd71a2b4557",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Youngblood (Deluxe)",
      "release_date": "2018-06-15",
      "release_date_precision": "day",
      "total_tracks": 16,
      "type": "album",
      "uri": "spotify:album:2D0Hi3Jj6RFnpWDcSa0Otu"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5Rl15oVamLq7FbSb0NNBNy"
        },
        "href": "https://api.spotify.com/v1/artists/5Rl15oVamLq7FbSb0NNBNy",
        "id": "5Rl15oVamLq7FbSb0NNBNy",
        "name": "5 Seconds of Summer",
        "type": "artist",
        "uri": "spotify:artist:5Rl15oVamLq7FbSb0NNBNy"
      }
    ],
    "disc_number": 1,
    "duration_ms": 203417,
    "explicit": false,
    "external_ids": {
      "isrc": "GBUM71800366"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2iUXsYOEPhVqEBwsqP70rE"
    },
    "href": "https://api.spotify.com/v1/tracks/2iUXsYOEPhVqEBwsqP70rE",
    "id": "2iUXsYOEPhVqEBwsqP70rE",
    "is_local": false,
    "is_playable": true,
    "name": "Youngblood",
    "popularity": 85,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:2iUXsYOEPhVqEBwsqP70rE"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7"
          },
          "href": "https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7",
          "id": "31TPClRtHm23RisEBtV3X7",
          "name": "Justin Timberlake",
          "type": "artist",
          "uri": "spotify:artist:31TPClRtHm23RisEBtV3X7"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/0O82niJ0NpcptYRxogeEZu"
      },
      "href": "https://api.spotify.com/v1/albums/0O82niJ0NpcptYRxogeEZu",
      "id": "0O82niJ0NpcptYRxogeEZu",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273db1d1cdc927a07825a2ed244",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02db1d1cdc927a07825a2ed244",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851db1d1cdc927a07825a2ed244",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "The 20/20 Experience (Deluxe Version)",
      "release_date": "2013-03-15",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:0O82niJ0NpcptYRxogeEZu"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7"
        },
        "href": "https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7",
        "id": "31TPClRtHm23RisEBtV3X7",
        "name": "Justin Timberlake",
        "type": "artist",
        "uri": "spotify:artist:31TPClRtHm23RisEBtV3X7"
      }
    ],
    "disc_number": 1,
    "duration_ms": 484146,
    "explicit": false,
    "external_ids": {
      "isrc": "USRC11300059"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/4rHZZAmHpZrA3iH5zx8frV"
    },
    "href": "https://api.spotify.com/v1/tracks/4rHZZAmHpZrA3iH5zx8frV",
    "id": "4rHZZAmHpZrA3iH5zx8frV",
    "is_local": false,
    "is_playable": true,
    "name": "Mirrors",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/46994b2d9a44ac2bae88959e424bf960a42ede13?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 9,
    "type": "track",
    "uri": "spotify:track:4rHZZAmHpZrA3iH5zx8frV"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1RyvyyTE3xzB2ZywiAwp0i"
          },
          "href": "https://api.spotify.com/v1/artists/1RyvyyTE3xzB2ZywiAwp0i",
          "id": "1RyvyyTE3xzB2ZywiAwp0i",
          "name": "Future",
          "type": "artist",
          "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3jJKDKdlwRS584zUlHV2Ly"
      },
      "href": "https://api.spotify.com/v1/albums/3jJKDKdlwRS584zUlHV2Ly",
      "id": "3jJKDKdlwRS584zUlHV2Ly",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273626745b3aa04899001a924ad",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02626745b3aa04899001a924ad",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851626745b3aa04899001a924ad",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "EVOL",
      "release_date": "2016-04-13",
      "release_date_precision": "day",
      "total_tracks": 12,
      "type": "album",
      "uri": "spotify:album:3jJKDKdlwRS584zUlHV2Ly"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1RyvyyTE3xzB2ZywiAwp0i"
        },
        "href": "https://api.spotify.com/v1/artists/1RyvyyTE3xzB2ZywiAwp0i",
        "id": "1RyvyyTE3xzB2ZywiAwp0i",
        "name": "Future",
        "type": "artist",
        "uri": "spotify:artist:1RyvyyTE3xzB2ZywiAwp0i"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
        },
        "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
        "id": "1Xyo4u8uXC1ZmMpatF05PJ",
        "name": "The Weeknd",
        "type": "artist",
        "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
      }
    ],
    "disc_number": 1,
    "duration_ms": 313546,
    "explicit": true,
    "external_ids": {
      "isrc": "USSM11600557"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7EiZI6JVHllARrX9PUvAdX"
    },
    "href": "https://api.spotify.com/v1/tracks/7EiZI6JVHllARrX9PUvAdX",
    "id": "7EiZI6JVHllARrX9PUvAdX",
    "is_local": false,
    "is_playable": true,
    "name": "Low Life (feat. The Weeknd)",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/768b128e81b92fac4e7a3f5fa7aba411935a7129?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 10,
    "type": "track",
    "uri": "spotify:track:7EiZI6JVHllARrX9PUvAdX"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
          },
          "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
          "id": "6sFIWsNpZYqfjUpaCgueju",
          "name": "Carly Rae Jepsen",
          "type": "artist",
          "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6SSSF9Y6MiPdQoxqBptrR2"
      },
      "href": "https://api.spotify.com/v1/albums/6SSSF9Y6MiPdQoxqBptrR2",
      "id": "6SSSF9Y6MiPdQoxqBptrR2",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d3ee4bf67c2ac2154006ad72",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d3ee4bf67c2ac2154006ad72",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d3ee4bf67c2ac2154006ad72",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Kiss",
      "release_date": "2012-01-01",
      "release_date_precision": "day",
      "total_tracks": 17,
      "type": "album",
      "uri": "spotify:album:6SSSF9Y6MiPdQoxqBptrR2"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
        },
        "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
        "id": "6sFIWsNpZYqfjUpaCgueju",
        "name": "Carly Rae Jepsen",
        "type": "artist",
        "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
      }
    ],
    "disc_number": 1,
    "duration_ms": 193400,
    "explicit": false,
    "external_ids": {
      "isrc": "CAB391100615"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/20I6sIOMTCkB6w7ryavxtO"
    },
    "href": "https://api.spotify.com/v1/tracks/20I6sIOMTCkB6w7ryavxtO",
    "id": "20I6sIOMTCkB6w7ryavxtO",
    "is_local": false,
    "is_playable": true,
    "name": "Call Me Maybe",
    "popularity": 85,
    "preview_url": null,
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:20I6sIOMTCkB6w7ryavxtO"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
          },
          "href": "https://api.spotify.com/v1/artists/1KCSPY1glIKqW2TotWuXOR",
          "id": "1KCSPY1glIKqW2TotWuXOR",
          "name": "P!nk",
          "type": "artist",
          "uri": "spotify:artist:1KCSPY1glIKqW2TotWuXOR"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2Q9oTK48eb85waX1fFJsvj"
      },
      "href": "https://api.spotify.com/v1/albums/2Q9oTK48eb85waX1fFJsvj",
      "id": "2Q9oTK48eb85waX1fFJsvj",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2739d0f0d226987b449808e7b6f",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e029d0f0d226987b449808e7b6f",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048519d0f0d226987b449808e7b6f",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "The Truth About Love",
      "release_date": "2012-09-18",
      "release_date_precision": "day",
      "total_tracks": 17,
      "type": "album",
      "uri": "spotify:album:2Q9oTK48eb85waX1fFJsvj"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
        },
        "href": "https://api.spotify.com/v1/artists/1KCSPY1glIKqW2TotWuXOR",
        "id": "1KCSPY1glIKqW2TotWuXOR",
        "name": "P!nk",
        "type": "artist",
        "uri": "spotify:artist:1KCSPY1glIKqW2TotWuXOR"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1qUjOF5fzrpoNycD36b2jZ"
        },
        "href": "https://api.spotify.com/v1/artists/1qUjOF5fzrpoNycD36b2jZ",
        "id": "1qUjOF5fzrpoNycD36b2jZ",
        "name": "Nate Ruess",
        "type": "artist",
        "uri": "spotify:artist:1qUjOF5fzrpoNycD36b2jZ"
      }
    ],
    "disc_number": 1,
    "duration_ms": 242733,
    "explicit": false,
    "external_ids": {
      "isrc": "USRC11200786"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/1mKXFLRA179hdOWQBwUk9e"
    },
    "href": "https://api.spotify.com/v1/tracks/1mKXFLRA179hdOWQBwUk9e",
    "id": "1mKXFLRA179hdOWQBwUk9e",
    "is_local": false,
    "is_playable": true,
    "name": "Just Give Me a Reason (feat. Nate Ruess)",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/15d9c5b414a7bdd68492800e76ad51a3bc8db576?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 4,
    "type": "track",
    "uri": "spotify:track:1mKXFLRA179hdOWQBwUk9e"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY"
          },
          "href": "https://api.spotify.com/v1/artists/7CajNmpbOovFoOoasH2HaY",
          "id": "7CajNmpbOovFoOoasH2HaY",
          "name": "Calvin Harris",
          "type": "artist",
          "uri": "spotify:artist:7CajNmpbOovFoOoasH2HaY"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/48zisMeiXniWLzOQghbPqS"
      },
      "href": "https://api.spotify.com/v1/albums/48zisMeiXniWLzOQghbPqS",
      "id": "48zisMeiXniWLzOQghbPqS",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273063c048e9ef6bd021b744756",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02063c048e9ef6bd021b744756",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851063c048e9ef6bd021b744756",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Motion",
      "release_date": "2014-10-31",
      "release_date_precision": "day",
      "total_tracks": 15,
      "type": "album",
      "uri": "spotify:album:48zisMeiXniWLzOQghbPqS"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY"
        },
        "href": "https://api.spotify.com/v1/artists/7CajNmpbOovFoOoasH2HaY",
        "id": "7CajNmpbOovFoOoasH2HaY",
        "name": "Calvin Harris",
        "type": "artist",
        "uri": "spotify:artist:7CajNmpbOovFoOoasH2HaY"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0X2BH1fck6amBIoJhDVmmJ"
        },
        "href": "https://api.spotify.com/v1/artists/0X2BH1fck6amBIoJhDVmmJ",
        "id": "0X2BH1fck6amBIoJhDVmmJ",
        "name": "Ellie Goulding",
        "type": "artist",
        "uri": "spotify:artist:0X2BH1fck6amBIoJhDVmmJ"
      }
    ],
    "disc_number": 1,
    "duration_ms": 227266,
    "explicit": false,
    "external_ids": {
      "isrc": "GBARL1401201"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7MmG8p0F9N3C4AXdK6o6Eb"
    },
    "href": "https://api.spotify.com/v1/tracks/7MmG8p0F9N3C4AXdK6o6Eb",
    "id": "7MmG8p0F9N3C4AXdK6o6Eb",
    "is_local": false,
    "is_playable": true,
    "name": "Outside (feat. Ellie Goulding)",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/258a571c0ae04c58dad7ff59c49b0bd39cb1986b?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 6,
    "type": "track",
    "uri": "spotify:track:7MmG8p0F9N3C4AXdK6o6Eb"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms"
          },
          "href": "https://api.spotify.com/v1/artists/1HY2Jd0NmPuamShAr6KMms",
          "id": "1HY2Jd0NmPuamShAr6KMms",
          "name": "Lady Gaga",
          "type": "artist",
          "uri": "spotify:artist:1HY2Jd0NmPuamShAr6KMms"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4VIvfOurcf0vuLRxLkGnIG"
          },
          "href": "https://api.spotify.com/v1/artists/4VIvfOurcf0vuLRxLkGnIG",
          "id": "4VIvfOurcf0vuLRxLkGnIG",
          "name": "Bradley Cooper",
          "type": "artist",
          "uri": "spotify:artist:4VIvfOurcf0vuLRxLkGnIG"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3edjzMAVB9RYRd4UcZBchx"
      },
      "href": "https://api.spotify.com/v1/albums/3edjzMAVB9RYRd4UcZBchx",
      "id": "3edjzMAVB9RYRd4UcZBchx",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273b5d4b4ed17ec86c4b3944af2",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02b5d4b4ed17ec86c4b3944af2",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851b5d4b4ed17ec86c4b3944af2",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "A Star Is Born Soundtrack (Without Dialogue)",
      "release_date": "2018-10-05",
      "release_date_precision": "day",
      "total_tracks": 19,
      "type": "album",
      "uri": "spotify:album:3edjzMAVB9RYRd4UcZBchx"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms"
        },
        "href": "https://api.spotify.com/v1/artists/1HY2Jd0NmPuamShAr6KMms",
        "id": "1HY2Jd0NmPuamShAr6KMms",
        "name": "Lady Gaga",
        "type": "artist",
        "uri": "spotify:artist:1HY2Jd0NmPuamShAr6KMms"
      }
    ],
    "disc_number": 1,
    "duration_ms": 210200,
    "explicit": false,
    "external_ids": {
      "isrc": "USUM71813195"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2rbDhOo9Fh61Bbu23T2qCk"
    },
    "href": "https://api.spotify.com/v1/tracks/2rbDhOo9Fh61Bbu23T2qCk",
    "id": "2rbDhOo9Fh61Bbu23T2qCk",
    "is_local": false,
    "is_playable": true,
    "name": "Always Remember Us This Way",
    "popularity": 85,
    "preview_url": null,
    "track_number": 9,
    "type": "track",
    "uri": "spotify:track:2rbDhOo9Fh61Bbu23T2qCk"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
          },
          "href": "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
          "id": "06HL4z0CvFAxyc27GXpf02",
          "name": "Taylor Swift",
          "type": "artist",
          "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6DEjYFkNZh67HP7R9PSZvv"
      },
      "href": "https://api.spotify.com/v1/albums/6DEjYFkNZh67HP7R9PSZvv",
      "id": "6DEjYFkNZh67HP7R9PSZvv",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02da5d5aeeabacacc1263c0f4b",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851da5d5aeeabacacc1263c0f4b",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "reputation",
      "release_date": "2017-11-10",
      "release_date_precision": "day",
      "total_tracks": 15,
      "type": "album",
      "uri": "spotify:album:6DEjYFkNZh67HP7R9PSZvv"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
        },
        "href": "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
        "id": "06HL4z0CvFAxyc27GXpf02",
        "name": "Taylor Swift",
        "type": "artist",
        "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
      }
    ],
    "disc_number": 1,
    "duration_ms": 208186,
    "explicit": false,
    "external_ids": {
      "isrc": "USCJY1750003"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2yLa0QULdQr0qAIvVwN6B5"
    },
    "href": "https://api.spotify.com/v1/tracks/2yLa0QULdQr0qAIvVwN6B5",
    "id": "2yLa0QULdQr0qAIvVwN6B5",
    "is_local": false,
    "is_playable": true,
    "name": "...Ready For It?",
    "popularity": 85,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:2yLa0QULdQr0qAIvVwN6B5"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/137W8MRPWKqSmrBGDBFSop"
          },
          "href": "https://api.spotify.com/v1/artists/137W8MRPWKqSmrBGDBFSop",
          "id": "137W8MRPWKqSmrBGDBFSop",
          "name": "Wiz Khalifa",
          "type": "artist",
          "uri": "spotify:artist:137W8MRPWKqSmrBGDBFSop"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6VuMaDnrHyPL1p4EHjYLi7"
          },
          "href": "https://api.spotify.com/v1/artists/6VuMaDnrHyPL1p4EHjYLi7",
          "id": "6VuMaDnrHyPL1p4EHjYLi7",
          "name": "Charlie Puth",
          "type": "artist",
          "uri": "spotify:artist:6VuMaDnrHyPL1p4EHjYLi7"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/5FXIqS1XqbpfOKNoi5VUwS"
      },
      "href": "https://api.spotify.com/v1/albums/5FXIqS1XqbpfOKNoi5VUwS",
      "id": "5FXIqS1XqbpfOKNoi5VUwS",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2734e5df11b17b2727da2b718d8",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e024e5df11b17b2727da2b718d8",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048514e5df11b17b2727da2b718d8",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "See You Again (feat. Charlie Puth)",
      "release_date": "2015",
      "release_date_precision": "year",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:5FXIqS1XqbpfOKNoi5VUwS"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/137W8MRPWKqSmrBGDBFSop"
        },
        "href": "https://api.spotify.com/v1/artists/137W8MRPWKqSmrBGDBFSop",
        "id": "137W8MRPWKqSmrBGDBFSop",
        "name": "Wiz Khalifa",
        "type": "artist",
        "uri": "spotify:artist:137W8MRPWKqSmrBGDBFSop"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6VuMaDnrHyPL1p4EHjYLi7"
        },
        "href": "https://api.spotify.com/v1/artists/6VuMaDnrHyPL1p4EHjYLi7",
        "id": "6VuMaDnrHyPL1p4EHjYLi7",
        "name": "Charlie Puth",
        "type": "artist",
        "uri": "spotify:artist:6VuMaDnrHyPL1p4EHjYLi7"
      }
    ],
    "disc_number": 1,
    "duration_ms": 229525,
    "explicit": false,
    "external_ids": {
      "isrc": "USAT21703595"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2JzZzZUQj3Qff7wapcbKjc"
    },
    "href": "https://api.spotify.com/v1/tracks/2JzZzZUQj3Qff7wapcbKjc",
    "id": "2JzZzZUQj3Qff7wapcbKjc",
    "is_local": false,
    "is_playable": true,
    "name": "See You Again (feat. Charlie Puth)",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/69c2ac6f1501e5c8bc6970273da5d06fb97a2e76?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:2JzZzZUQj3Qff7wapcbKjc"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3"
          },
          "href": "https://api.spotify.com/v1/artists/6KImCVD70vtIoJWnq6nGn3",
          "id": "6KImCVD70vtIoJWnq6nGn3",
          "name": "Harry Styles",
          "type": "artist",
          "uri": "spotify:artist:6KImCVD70vtIoJWnq6nGn3"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/1FZKIm3JVDCxTchXDo5jOV"
      },
      "href": "https://api.spotify.com/v1/albums/1FZKIm3JVDCxTchXDo5jOV",
      "id": "1FZKIm3JVDCxTchXDo5jOV",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2736c619c39c853f8b1d67b7859",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e026c619c39c853f8b1d67b7859",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048516c619c39c853f8b1d67b7859",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Harry Styles",
      "release_date": "2017-05-12",
      "release_date_precision": "day",
      "total_tracks": 10,
      "type": "album",
      "uri": "spotify:album:1FZKIm3JVDCxTchXDo5jOV"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3"
        },
        "href": "https://api.spotify.com/v1/artists/6KImCVD70vtIoJWnq6nGn3",
        "id": "6KImCVD70vtIoJWnq6nGn3",
        "name": "Harry Styles",
        "type": "artist",
        "uri": "spotify:artist:6KImCVD70vtIoJWnq6nGn3"
      }
    ],
    "disc_number": 1,
    "duration_ms": 340706,
    "explicit": false,
    "external_ids": {
      "isrc": "USSM11703595"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/5Ohxk2dO5COHF1krpoPigN"
    },
    "href": "https://api.spotify.com/v1/tracks/5Ohxk2dO5COHF1krpoPigN",
    "id": "5Ohxk2dO5COHF1krpoPigN",
    "is_local": false,
    "is_playable": true,
    "name": "Sign of the Times",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/3f885fdef493aadb403fc2657a605d2f5623b111?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:5Ohxk2dO5COHF1krpoPigN"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
          },
          "href": "https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60",
          "id": "246dkjvS1zLTtiykXe5h60",
          "name": "Post Malone",
          "type": "artist",
          "uri": "spotify:artist:246dkjvS1zLTtiykXe5h60"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/5s0rmjP8XOPhP6HhqOhuyC"
      },
      "href": "https://api.spotify.com/v1/albums/5s0rmjP8XOPhP6HhqOhuyC",
      "id": "5s0rmjP8XOPhP6HhqOhuyC",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27355404f712deb84d0650a4b41",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0255404f712deb84d0650a4b41",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485155404f712deb84d0650a4b41",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Stoney (Deluxe)",
      "release_date": "2016-12-09",
      "release_date_precision": "day",
      "total_tracks": 18,
      "type": "album",
      "uri": "spotify:album:5s0rmjP8XOPhP6HhqOhuyC"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
        },
        "href": "https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60",
        "id": "246dkjvS1zLTtiykXe5h60",
        "name": "Post Malone",
        "type": "artist",
        "uri": "spotify:artist:246dkjvS1zLTtiykXe5h60"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0VRj0yCOv2FXJNP47XQnx5"
        },
        "href": "https://api.spotify.com/v1/artists/0VRj0yCOv2FXJNP47XQnx5",
        "id": "0VRj0yCOv2FXJNP47XQnx5",
        "name": "Quavo",
        "type": "artist",
        "uri": "spotify:artist:0VRj0yCOv2FXJNP47XQnx5"
      }
    ],
    "disc_number": 1,
    "duration_ms": 220293,
    "explicit": true,
    "external_ids": {
      "isrc": "USUM71614484"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3a1lNhkSLSkpJE4MSHpDu9"
    },
    "href": "https://api.spotify.com/v1/tracks/3a1lNhkSLSkpJE4MSHpDu9",
    "id": "3a1lNhkSLSkpJE4MSHpDu9",
    "is_local": false,
    "is_playable": true,
    "name": "Congratulations",
    "popularity": 85,
    "preview_url": null,
    "track_number": 12,
    "type": "track",
    "uri": "spotify:track:3a1lNhkSLSkpJE4MSHpDu9"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4"
          },
          "href": "https://api.spotify.com/v1/artists/15UsOTVnJzReFVN1VCnxy4",
          "id": "15UsOTVnJzReFVN1VCnxy4",
          "name": "XXXTENTACION",
          "type": "artist",
          "uri": "spotify:artist:15UsOTVnJzReFVN1VCnxy4"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2Ti79nwTsont5ZHfdxIzAm"
      },
      "href": "https://api.spotify.com/v1/albums/2Ti79nwTsont5ZHfdxIzAm",
      "id": "2Ti79nwTsont5ZHfdxIzAm",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273806c160566580d6335d1f16c",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02806c160566580d6335d1f16c",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851806c160566580d6335d1f16c",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "?",
      "release_date": "2018-03-16",
      "release_date_precision": "day",
      "total_tracks": 18,
      "type": "album",
      "uri": "spotify:album:2Ti79nwTsont5ZHfdxIzAm"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4"
        },
        "href": "https://api.spotify.com/v1/artists/15UsOTVnJzReFVN1VCnxy4",
        "id": "15UsOTVnJzReFVN1VCnxy4",
        "name": "XXXTENTACION",
        "type": "artist",
        "uri": "spotify:artist:15UsOTVnJzReFVN1VCnxy4"
      }
    ],
    "disc_number": 1,
    "duration_ms": 135090,
    "explicit": true,
    "external_ids": {
      "isrc": "USUG11800209"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0JP9xo3adEtGSdUEISiszL"
    },
    "href": "https://api.spotify.com/v1/tracks/0JP9xo3adEtGSdUEISiszL",
    "id": "0JP9xo3adEtGSdUEISiszL",
    "is_local": false,
    "is_playable": true,
    "name": "Moonlight",
    "popularity": 85,
    "preview_url": null,
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:0JP9xo3adEtGSdUEISiszL"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
          },
          "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
          "id": "0TnOYISbd1XYRBk9myaseg",
          "name": "Pitbull",
          "type": "artist",
          "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2F7tejLHzTqFq2XLol9ZGy"
      },
      "href": "https://api.spotify.com/v1/albums/2F7tejLHzTqFq2XLol9ZGy",
      "id": "2F7tejLHzTqFq2XLol9ZGy",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273f2486b438645e97b523e4f90",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02f2486b438645e97b523e4f90",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851f2486b438645e97b523e4f90",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Global Warming: Meltdown (Deluxe Version)",
      "release_date": "2012",
      "release_date_precision": "year",
      "total_tracks": 17,
      "type": "album",
      "uri": "spotify:album:2F7tejLHzTqFq2XLol9ZGy"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
        },
        "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
        "id": "0TnOYISbd1XYRBk9myaseg",
        "name": "Pitbull",
        "type": "artist",
        "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6LqNN22kT3074XbTVUrhzX"
        },
        "href": "https://api.spotify.com/v1/artists/6LqNN22kT3074XbTVUrhzX",
        "id": "6LqNN22kT3074XbTVUrhzX",
        "name": "Kesha",
        "type": "artist",
        "uri": "spotify:artist:6LqNN22kT3074XbTVUrhzX"
      }
    ],
    "disc_number": 1,
    "duration_ms": 204160,
    "explicit": false,
    "external_ids": {
      "isrc": "USRC11301695"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3cHyrEgdyYRjgJKSOiOtcS"
    },
    "href": "https://api.spotify.com/v1/tracks/3cHyrEgdyYRjgJKSOiOtcS",
    "id": "3cHyrEgdyYRjgJKSOiOtcS",
    "is_local": false,
    "is_playable": true,
    "name": "Timber (feat. Ke$ha)",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/54825c719d56bd5b737ac7c1aa3ce41ad3eef338?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 13,
    "type": "track",
    "uri": "spotify:track:3cHyrEgdyYRjgJKSOiOtcS"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6T5tfhQCknKG4UnH90qGnz"
          },
          "href": "https://api.spotify.com/v1/artists/6T5tfhQCknKG4UnH90qGnz",
          "id": "6T5tfhQCknKG4UnH90qGnz",
          "name": "DNCE",
          "type": "artist",
          "uri": "spotify:artist:6T5tfhQCknKG4UnH90qGnz"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3Wv4X8OA65pGpFzBkuUgAh"
      },
      "href": "https://api.spotify.com/v1/albums/3Wv4X8OA65pGpFzBkuUgAh",
      "id": "3Wv4X8OA65pGpFzBkuUgAh",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2738d0a75346badc30c8b845be9",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e028d0a75346badc30c8b845be9",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048518d0a75346badc30c8b845be9",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "DNCE",
      "release_date": "2016-11-18",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:3Wv4X8OA65pGpFzBkuUgAh"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6T5tfhQCknKG4UnH90qGnz"
        },
        "href": "https://api.spotify.com/v1/artists/6T5tfhQCknKG4UnH90qGnz",
        "id": "6T5tfhQCknKG4UnH90qGnz",
        "name": "DNCE",
        "type": "artist",
        "uri": "spotify:artist:6T5tfhQCknKG4UnH90qGnz"
      }
    ],
    "disc_number": 1,
    "duration_ms": 219146,
    "explicit": true,
    "external_ids": {
      "isrc": "USUM71514637"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/76hfruVvmfQbw0eYn1nmeC"
    },
    "href": "https://api.spotify.com/v1/tracks/76hfruVvmfQbw0eYn1nmeC",
    "id": "76hfruVvmfQbw0eYn1nmeC",
    "is_local": false,
    "is_playable": true,
    "name": "Cake By The Ocean",
    "popularity": 85,
    "preview_url": null,
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:76hfruVvmfQbw0eYn1nmeC"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"
          },
          "href": "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
          "id": "2h93pZq0e7k5yf4dywlkpM",
          "name": "Frank Ocean",
          "type": "artist",
          "uri": "spotify:artist:2h93pZq0e7k5yf4dywlkpM"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf"
      },
      "href": "https://api.spotify.com/v1/albums/3mH6qwIy9crq0I9YQbOuDf",
      "id": "3mH6qwIy9crq0I9YQbOuDf",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851c5649add07ed3720be9d5526",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Blonde",
      "release_date": "2016-08-20",
      "release_date_precision": "day",
      "total_tracks": 17,
      "type": "album",
      "uri": "spotify:album:3mH6qwIy9crq0I9YQbOuDf"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM"
        },
        "href": "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
        "id": "2h93pZq0e7k5yf4dywlkpM",
        "name": "Frank Ocean",
        "type": "artist",
        "uri": "spotify:artist:2h93pZq0e7k5yf4dywlkpM"
      }
    ],
    "disc_number": 1,
    "duration_ms": 249191,
    "explicit": true,
    "external_ids": {
      "isrc": "QZ5C81600002"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2ZWlPOoWh0626oTaHrnl2a"
    },
    "href": "https://api.spotify.com/v1/tracks/2ZWlPOoWh0626oTaHrnl2a",
    "id": "2ZWlPOoWh0626oTaHrnl2a",
    "is_local": false,
    "is_playable": true,
    "name": "Ivy",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/3eb4d77b749c0f49037e6aee78536eb35b5c88c7?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:2ZWlPOoWh0626oTaHrnl2a"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5ZsFI1h6hIdQRw2ti0hz81"
          },
          "href": "https://api.spotify.com/v1/artists/5ZsFI1h6hIdQRw2ti0hz81",
          "id": "5ZsFI1h6hIdQRw2ti0hz81",
          "name": "ZAYN",
          "type": "artist",
          "uri": "spotify:artist:5ZsFI1h6hIdQRw2ti0hz81"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
          },
          "href": "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
          "id": "06HL4z0CvFAxyc27GXpf02",
          "name": "Taylor Swift",
          "type": "artist",
          "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2i54PoQ1ENZSYsZZE8haRr"
      },
      "href": "https://api.spotify.com/v1/albums/2i54PoQ1ENZSYsZZE8haRr",
      "id": "2i54PoQ1ENZSYsZZE8haRr",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273030af18a6a1612a6b880b4ea",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02030af18a6a1612a6b880b4ea",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851030af18a6a1612a6b880b4ea",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "I Don’t Wanna Live Forever (Fifty Shades Darker)",
      "release_date": "2016-12-09",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:2i54PoQ1ENZSYsZZE8haRr"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5ZsFI1h6hIdQRw2ti0hz81"
        },
        "href": "https://api.spotify.com/v1/artists/5ZsFI1h6hIdQRw2ti0hz81",
        "id": "5ZsFI1h6hIdQRw2ti0hz81",
        "name": "ZAYN",
        "type": "artist",
        "uri": "spotify:artist:5ZsFI1h6hIdQRw2ti0hz81"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
        },
        "href": "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
        "id": "06HL4z0CvFAxyc27GXpf02",
        "name": "Taylor Swift",
        "type": "artist",
        "uri": "spotify:artist:06HL4z0CvFAxyc27GXpf02"
      }
    ],
    "disc_number": 1,
    "duration_ms": 247160,
    "explicit": false,
    "external_ids": {
      "isrc": "USQ4E1602586"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/55n9yjI6qqXh5F2mYvUc2y"
    },
    "href": "https://api.spotify.com/v1/tracks/55n9yjI6qqXh5F2mYvUc2y",
    "id": "55n9yjI6qqXh5F2mYvUc2y",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6yIdwnpDHufLWgQcveTPMk"
      },
      "href": "https://api.spotify.com/v1/tracks/6yIdwnpDHufLWgQcveTPMk",
      "id": "6yIdwnpDHufLWgQcveTPMk",
      "type": "track",
      "uri": "spotify:track:6yIdwnpDHufLWgQcveTPMk"
    },
    "name": "I Don’t Wanna Live Forever (Fifty Shades Darker)",
    "popularity": 85,
    "preview_url": null,
    "track_number": 10,
    "type": "track",
    "uri": "spotify:track:55n9yjI6qqXh5F2mYvUc2y"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
          },
          "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
          "id": "0Y5tJX1MQlPlqiwlOH1tJY",
          "name": "Travis Scott",
          "type": "artist",
          "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/5qeikHFUgeO8f8HXm8k4cA"
      },
      "href": "https://api.spotify.com/v1/albums/5qeikHFUgeO8f8HXm8k4cA",
      "id": "5qeikHFUgeO8f8HXm8k4cA",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2730eb9240c0c5bbba4a0495587",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e020eb9240c0c5bbba4a0495587",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048510eb9240c0c5bbba4a0495587",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "ASTROWORLD",
      "release_date": "2018-08-02",
      "release_date_precision": "day",
      "total_tracks": 17,
      "type": "album",
      "uri": "spotify:album:5qeikHFUgeO8f8HXm8k4cA"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
        },
        "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
        "id": "0Y5tJX1MQlPlqiwlOH1tJY",
        "name": "Travis Scott",
        "type": "artist",
        "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
      }
    ],
    "disc_number": 1,
    "duration_ms": 190557,
    "explicit": false,
    "external_ids": {
      "isrc": "USSM11704799"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2cYqizR4lgvp4Qu6IQ3qGN"
    },
    "href": "https://api.spotify.com/v1/tracks/2cYqizR4lgvp4Qu6IQ3qGN",
    "id": "2cYqizR4lgvp4Qu6IQ3qGN",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/6xcJyGpfZbuuiequtnlKt4"
      },
      "href": "https://api.spotify.com/v1/tracks/6xcJyGpfZbuuiequtnlKt4",
      "id": "6xcJyGpfZbuuiequtnlKt4",
      "type": "track",
      "uri": "spotify:track:6xcJyGpfZbuuiequtnlKt4"
    },
    "name": "BUTTERFLY EFFECT",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/68cba40a7199c972c7a2ad0df063c4d1f5e3dc73?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 15,
    "type": "track",
    "uri": "spotify:track:2cYqizR4lgvp4Qu6IQ3qGN"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6VuMaDnrHyPL1p4EHjYLi7"
          },
          "href": "https://api.spotify.com/v1/artists/6VuMaDnrHyPL1p4EHjYLi7",
          "id": "6VuMaDnrHyPL1p4EHjYLi7",
          "name": "Charlie Puth",
          "type": "artist",
          "uri": "spotify:artist:6VuMaDnrHyPL1p4EHjYLi7"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6E0p38TjcK490itZ1Ns7bD"
      },
      "href": "https://api.spotify.com/v1/albums/6E0p38TjcK490itZ1Ns7bD",
      "id": "6E0p38TjcK490itZ1Ns7bD",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273c0e28105f0533c52717c46c2",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02c0e28105f0533c52717c46c2",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851c0e28105f0533c52717c46c2",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Nine Track Mind",
      "release_date": "2015-11-05",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:6E0p38TjcK490itZ1Ns7bD"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6VuMaDnrHyPL1p4EHjYLi7"
        },
        "href": "https://api.spotify.com/v1/artists/6VuMaDnrHyPL1p4EHjYLi7",
        "id": "6VuMaDnrHyPL1p4EHjYLi7",
        "name": "Charlie Puth",
        "type": "artist",
        "uri": "spotify:artist:6VuMaDnrHyPL1p4EHjYLi7"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx"
        },
        "href": "https://api.spotify.com/v1/artists/0C8ZW7ezQVs4URX5aX7Kqx",
        "id": "0C8ZW7ezQVs4URX5aX7Kqx",
        "name": "Selena Gomez",
        "type": "artist",
        "uri": "spotify:artist:0C8ZW7ezQVs4URX5aX7Kqx"
      }
    ],
    "disc_number": 1,
    "duration_ms": 217706,
    "explicit": false,
    "external_ids": {
      "isrc": "USAT21502909"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/06KyNuuMOX1ROXRhj787tj"
    },
    "href": "https://api.spotify.com/v1/tracks/06KyNuuMOX1ROXRhj787tj",
    "id": "06KyNuuMOX1ROXRhj787tj",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/68EMU2RD1ECNeOeJ5qAXCV"
      },
      "href": "https://api.spotify.com/v1/tracks/68EMU2RD1ECNeOeJ5qAXCV",
      "id": "68EMU2RD1ECNeOeJ5qAXCV",
      "type": "track",
      "uri": "spotify:track:68EMU2RD1ECNeOeJ5qAXCV"
    },
    "name": "We Don't Talk Anymore (feat. Selena Gomez)",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/0af9ac246a60236b73e34854631a6c3de5cca602?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:06KyNuuMOX1ROXRhj787tj"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H"
          },
          "href": "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
          "id": "5pKCCKE2ajJHZ9KAiaK11H",
          "name": "Rihanna",
          "type": "artist",
          "uri": "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3Q149ZH46Z0f3oDR7vlDYV"
      },
      "href": "https://api.spotify.com/v1/albums/3Q149ZH46Z0f3oDR7vlDYV",
      "id": "3Q149ZH46Z0f3oDR7vlDYV",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27333de8537b313380d4f4c3ca6",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0233de8537b313380d4f4c3ca6",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485133de8537b313380d4f4c3ca6",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "ANTI",
      "release_date": "2016-01-28",
      "release_date_precision": "day",
      "total_tracks": 13,
      "type": "album",
      "uri": "spotify:album:3Q149ZH46Z0f3oDR7vlDYV"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H"
        },
        "href": "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
        "id": "5pKCCKE2ajJHZ9KAiaK11H",
        "name": "Rihanna",
        "type": "artist",
        "uri": "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H"
      }
    ],
    "disc_number": 1,
    "duration_ms": 191600,
    "explicit": true,
    "external_ids": {
      "isrc": "QM5FT1600118"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/4pAl7FkDMNBsjykPXo91B3"
    },
    "href": "https://api.spotify.com/v1/tracks/4pAl7FkDMNBsjykPXo91B3",
    "id": "4pAl7FkDMNBsjykPXo91B3",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1Tt4sE4pXi57mTD1GCzsqm"
      },
      "href": "https://api.spotify.com/v1/tracks/1Tt4sE4pXi57mTD1GCzsqm",
      "id": "1Tt4sE4pXi57mTD1GCzsqm",
      "type": "track",
      "uri": "spotify:track:1Tt4sE4pXi57mTD1GCzsqm"
    },
    "name": "Needed Me",
    "popularity": 85,
    "preview_url": null,
    "track_number": 7,
    "type": "track",
    "uri": "spotify:track:4pAl7FkDMNBsjykPXo91B3"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
          },
          "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
          "id": "6eUKZXaKkcviH0Ku9w2n3V",
          "name": "Ed Sheeran",
          "type": "artist",
          "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/6NoBzYmh5gUusGPCfg0pct"
      },
      "href": "https://api.spotify.com/v1/albums/6NoBzYmh5gUusGPCfg0pct",
      "id": "6NoBzYmh5gUusGPCfg0pct",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273d08209944468440145f01524",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02d08209944468440145f01524",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851d08209944468440145f01524",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "x (Wembley Edition)",
      "release_date": "2013",
      "release_date_precision": "year",
      "total_tracks": 24,
      "type": "album",
      "uri": "spotify:album:6NoBzYmh5gUusGPCfg0pct"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
        },
        "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
        "id": "6eUKZXaKkcviH0Ku9w2n3V",
        "name": "Ed Sheeran",
        "type": "artist",
        "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
      }
    ],
    "disc_number": 1,
    "duration_ms": 281560,
    "explicit": false,
    "external_ids": {
      "isrc": "GBAHS1400099"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f"
    },
    "href": "https://api.spotify.com/v1/tracks/34gCuhDGsG4bRPIf9bb02f",
    "id": "34gCuhDGsG4bRPIf9bb02f",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/1Slwb6dOYkBlWal1PGtnNg"
      },
      "href": "https://api.spotify.com/v1/tracks/1Slwb6dOYkBlWal1PGtnNg",
      "id": "1Slwb6dOYkBlWal1PGtnNg",
      "type": "track",
      "uri": "spotify:track:1Slwb6dOYkBlWal1PGtnNg"
    },
    "name": "Thinking out Loud",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/7b5d54ffb3c4e5c28adafe19532de22508d62851?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 11,
    "type": "track",
    "uri": "spotify:track:34gCuhDGsG4bRPIf9bb02f"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
          },
          "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
          "id": "1Xyo4u8uXC1ZmMpatF05PJ",
          "name": "The Weeknd",
          "type": "artist",
          "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe"
      },
      "href": "https://api.spotify.com/v1/albums/2ODvWsOgouMbaA5xf0RkJe",
      "id": "2ODvWsOgouMbaA5xf0RkJe",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048514718e2b124f79258be7bc452",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Starboy",
      "release_date": "2016-11-25",
      "release_date_precision": "day",
      "total_tracks": 18,
      "type": "album",
      "uri": "spotify:album:2ODvWsOgouMbaA5xf0RkJe"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
        },
        "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
        "id": "1Xyo4u8uXC1ZmMpatF05PJ",
        "name": "The Weeknd",
        "type": "artist",
        "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
        },
        "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
        "id": "4tZwfgrHOc3mvqYlEYSvVi",
        "name": "Daft Punk",
        "type": "artist",
        "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
      }
    ],
    "disc_number": 1,
    "duration_ms": 230453,
    "explicit": true,
    "external_ids": {
      "isrc": "USUG11600976"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB"
    },
    "href": "https://api.spotify.com/v1/tracks/7MXVkk9YMctZqd1Srtv4MB",
    "id": "7MXVkk9YMctZqd1Srtv4MB",
    "is_local": false,
    "is_playable": true,
    "name": "Starboy",
    "popularity": 95,
    "preview_url": null,
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:7MXVkk9YMctZqd1Srtv4MB"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4npEfmQ6YuiwW1GpUmaq3F"
          },
          "href": "https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F",
          "id": "4npEfmQ6YuiwW1GpUmaq3F",
          "name": "Ava Max",
          "type": "artist",
          "uri": "spotify:artist:4npEfmQ6YuiwW1GpUmaq3F"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/7CdLU3GgPy1PH5FVsrPlyA"
      },
      "href": "https://api.spotify.com/v1/albums/7CdLU3GgPy1PH5FVsrPlyA",
      "id": "7CdLU3GgPy1PH5FVsrPlyA",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273c5015d2a9270865a5979f56b",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02c5015d2a9270865a5979f56b",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851c5015d2a9270865a5979f56b",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Sweet but Psycho",
      "release_date": "2018-08-17",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:7CdLU3GgPy1PH5FVsrPlyA"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4npEfmQ6YuiwW1GpUmaq3F"
        },
        "href": "https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F",
        "id": "4npEfmQ6YuiwW1GpUmaq3F",
        "name": "Ava Max",
        "type": "artist",
        "uri": "spotify:artist:4npEfmQ6YuiwW1GpUmaq3F"
      }
    ],
    "disc_number": 1,
    "duration_ms": 187436,
    "explicit": false,
    "external_ids": {
      "isrc": "USAT21802011"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7DnAm9FOTWE3cUvso43HhI"
    },
    "href": "https://api.spotify.com/v1/tracks/7DnAm9FOTWE3cUvso43HhI",
    "id": "7DnAm9FOTWE3cUvso43HhI",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/25sgk305KZfyuqVBQIahim"
      },
      "href": "https://api.spotify.com/v1/tracks/25sgk305KZfyuqVBQIahim",
      "id": "25sgk305KZfyuqVBQIahim",
      "type": "track",
      "uri": "spotify:track:25sgk305KZfyuqVBQIahim"
    },
    "name": "Sweet but Psycho",
    "popularity": 85,
    "preview_url": "https://p.scdn.co/mp3-preview/fab7f8e87979878248e78a3cdb7e28222d45dcec?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 16,
    "type": "track",
    "uri": "spotify:track:7DnAm9FOTWE3cUvso43HhI"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
          },
          "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
          "id": "0TnOYISbd1XYRBk9myaseg",
          "name": "Pitbull",
          "type": "artist",
          "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4EUf4YyNjuXypWY6W5wEDm"
      },
      "href": "https://api.spotify.com/v1/albums/4EUf4YyNjuXypWY6W5wEDm",
      "id": "4EUf4YyNjuXypWY6W5wEDm",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2731e340d1480e7bb29a45e3bd7",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e021e340d1480e7bb29a45e3bd7",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048511e340d1480e7bb29a45e3bd7",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Globalization",
      "release_date": "2014-11-21",
      "release_date_precision": "day",
      "total_tracks": 11,
      "type": "album",
      "uri": "spotify:album:4EUf4YyNjuXypWY6W5wEDm"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
        },
        "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
        "id": "0TnOYISbd1XYRBk9myaseg",
        "name": "Pitbull",
        "type": "artist",
        "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/21E3waRsmPlU7jZsS13rcj"
        },
        "href": "https://api.spotify.com/v1/artists/21E3waRsmPlU7jZsS13rcj",
        "id": "21E3waRsmPlU7jZsS13rcj",
        "name": "Ne-Yo",
        "type": "artist",
        "uri": "spotify:artist:21E3waRsmPlU7jZsS13rcj"
      }
    ],
    "disc_number": 1,
    "duration_ms": 229360,
    "explicit": true,
    "external_ids": {
      "isrc": "USRC11402647"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2bJvI42r8EF3wxjOuDav4r"
    },
    "href": "https://api.spotify.com/v1/tracks/2bJvI42r8EF3wxjOuDav4r",
    "id": "2bJvI42r8EF3wxjOuDav4r",
    "is_local": false,
    "is_playable": true,
    "name": "Time of Our Lives",
    "popularity": 84,
    "preview_url": "https://p.scdn.co/mp3-preview/d508371276a297486ace8d4ff596c54ae9e65260?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 4,
    "type": "track",
    "uri": "spotify:track:2bJvI42r8EF3wxjOuDav4r"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
          },
          "href": "https://api.spotify.com/v1/artists/3AQRLZ9PuTAozP28Skbq8V",
          "id": "3AQRLZ9PuTAozP28Skbq8V",
          "name": "The Script",
          "type": "artist",
          "uri": "spotify:artist:3AQRLZ9PuTAozP28Skbq8V"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/7JOCOjZTcLysDMkZGWlcIj"
      },
      "href": "https://api.spotify.com/v1/albums/7JOCOjZTcLysDMkZGWlcIj",
      "id": "7JOCOjZTcLysDMkZGWlcIj",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2732e3049fef96abebf336b7366",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e022e3049fef96abebf336b7366",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048512e3049fef96abebf336b7366",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "#3 Deluxe Version",
      "release_date": "2012-09-10",
      "release_date_precision": "day",
      "total_tracks": 17,
      "type": "album",
      "uri": "spotify:album:7JOCOjZTcLysDMkZGWlcIj"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
        },
        "href": "https://api.spotify.com/v1/artists/3AQRLZ9PuTAozP28Skbq8V",
        "id": "3AQRLZ9PuTAozP28Skbq8V",
        "name": "The Script",
        "type": "artist",
        "uri": "spotify:artist:3AQRLZ9PuTAozP28Skbq8V"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/085pc2PYOi8bGKj0PNjekA"
        },
        "href": "https://api.spotify.com/v1/artists/085pc2PYOi8bGKj0PNjekA",
        "id": "085pc2PYOi8bGKj0PNjekA",
        "name": "will.i.am",
        "type": "artist",
        "uri": "spotify:artist:085pc2PYOi8bGKj0PNjekA"
      }
    ],
    "disc_number": 1,
    "duration_ms": 202533,
    "explicit": false,
    "external_ids": {
      "isrc": "GBARL1201055"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/7wMq5n8mYSKlQIGECKUgTX"
    },
    "href": "https://api.spotify.com/v1/tracks/7wMq5n8mYSKlQIGECKUgTX",
    "id": "7wMq5n8mYSKlQIGECKUgTX",
    "is_local": false,
    "is_playable": true,
    "name": "Hall of Fame (feat. will.i.am)",
    "popularity": 84,
    "preview_url": "https://p.scdn.co/mp3-preview/466ad3f7e7b495b95cc49fdf7eef90fde9ee7cc8?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:7wMq5n8mYSKlQIGECKUgTX"
  },
  {
    "album": {
      "album_type": "SINGLE",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx"
          },
          "href": "https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx",
          "id": "3YQKmKGau1PzlVlkL1iodx",
          "name": "Twenty One Pilots",
          "type": "artist",
          "uri": "spotify:artist:3YQKmKGau1PzlVlkL1iodx"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3J8W9AOjQhnBLCX33m3atT"
      },
      "href": "https://api.spotify.com/v1/albums/3J8W9AOjQhnBLCX33m3atT",
      "id": "3J8W9AOjQhnBLCX33m3atT",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2732ca3ba8f334ca5a5f0312efb",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e022ca3ba8f334ca5a5f0312efb",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048512ca3ba8f334ca5a5f0312efb",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Heathens",
      "release_date": "2016-06-16",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:3J8W9AOjQhnBLCX33m3atT"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx"
        },
        "href": "https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx",
        "id": "3YQKmKGau1PzlVlkL1iodx",
        "name": "Twenty One Pilots",
        "type": "artist",
        "uri": "spotify:artist:3YQKmKGau1PzlVlkL1iodx"
      }
    ],
    "disc_number": 1,
    "duration_ms": 195920,
    "explicit": false,
    "external_ids": {
      "isrc": "USAT21601930"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/6i0V12jOa3mr6uu4WYhUBr"
    },
    "href": "https://api.spotify.com/v1/tracks/6i0V12jOa3mr6uu4WYhUBr",
    "id": "6i0V12jOa3mr6uu4WYhUBr",
    "is_local": false,
    "is_playable": true,
    "name": "Heathens",
    "popularity": 84,
    "preview_url": "https://p.scdn.co/mp3-preview/31b8d72a9480d06d28846b843539b8b5e58696db?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 1,
    "type": "track",
    "uri": "spotify:track:6i0V12jOa3mr6uu4WYhUBr"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3Isy6kedDrgPYoTS1dazA9"
          },
          "href": "https://api.spotify.com/v1/artists/3Isy6kedDrgPYoTS1dazA9",
          "id": "3Isy6kedDrgPYoTS1dazA9",
          "name": "Sean Paul",
          "type": "artist",
          "uri": "spotify:artist:3Isy6kedDrgPYoTS1dazA9"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/5xrOcCoO3jkXRjHQjfESM6"
      },
      "href": "https://api.spotify.com/v1/albums/5xrOcCoO3jkXRjHQjfESM6",
      "id": "5xrOcCoO3jkXRjHQjfESM6",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2732d564195ed3dd7b70d64862c",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e022d564195ed3dd7b70d64862c",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048512d564195ed3dd7b70d64862c",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Mad Love The Prequel",
      "release_date": "2018-06-29",
      "release_date_precision": "day",
      "total_tracks": 9,
      "type": "album",
      "uri": "spotify:album:5xrOcCoO3jkXRjHQjfESM6"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3Isy6kedDrgPYoTS1dazA9"
        },
        "href": "https://api.spotify.com/v1/artists/3Isy6kedDrgPYoTS1dazA9",
        "id": "3Isy6kedDrgPYoTS1dazA9",
        "name": "Sean Paul",
        "type": "artist",
        "uri": "spotify:artist:3Isy6kedDrgPYoTS1dazA9"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we"
        },
        "href": "https://api.spotify.com/v1/artists/6M2wZ9GZgrQXHCFfjv46we",
        "id": "6M2wZ9GZgrQXHCFfjv46we",
        "name": "Dua Lipa",
        "type": "artist",
        "uri": "spotify:artist:6M2wZ9GZgrQXHCFfjv46we"
      }
    ],
    "disc_number": 1,
    "duration_ms": 221176,
    "explicit": false,
    "external_ids": {
      "isrc": "GBUM71604557"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/48QmG1dfvMuYLxMPt7KSRA"
    },
    "href": "https://api.spotify.com/v1/tracks/48QmG1dfvMuYLxMPt7KSRA",
    "id": "48QmG1dfvMuYLxMPt7KSRA",
    "is_local": false,
    "is_playable": true,
    "name": "No Lie",
    "popularity": 84,
    "preview_url": null,
    "track_number": 9,
    "type": "track",
    "uri": "spotify:track:48QmG1dfvMuYLxMPt7KSRA"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
          },
          "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
          "id": "1Xyo4u8uXC1ZmMpatF05PJ",
          "name": "The Weeknd",
          "type": "artist",
          "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/2ODvWsOgouMbaA5xf0RkJe"
      },
      "href": "https://api.spotify.com/v1/albums/2ODvWsOgouMbaA5xf0RkJe",
      "id": "2ODvWsOgouMbaA5xf0RkJe",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048514718e2b124f79258be7bc452",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Starboy",
      "release_date": "2016-11-25",
      "release_date_precision": "day",
      "total_tracks": 18,
      "type": "album",
      "uri": "spotify:album:2ODvWsOgouMbaA5xf0RkJe"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
        },
        "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
        "id": "1Xyo4u8uXC1ZmMpatF05PJ",
        "name": "The Weeknd",
        "type": "artist",
        "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
      }
    ],
    "disc_number": 1,
    "duration_ms": 249213,
    "explicit": true,
    "external_ids": {
      "isrc": "USUG11600997"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/4F7A0DXBrmUAkp32uenhZt"
    },
    "href": "https://api.spotify.com/v1/tracks/4F7A0DXBrmUAkp32uenhZt",
    "id": "4F7A0DXBrmUAkp32uenhZt",
    "is_local": false,
    "is_playable": true,
    "name": "Party Monster",
    "popularity": 84,
    "preview_url": null,
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:4F7A0DXBrmUAkp32uenhZt"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1Hsdzj7Dlq2I7tHP7501T4"
          },
          "href": "https://api.spotify.com/v1/artists/1Hsdzj7Dlq2I7tHP7501T4",
          "id": "1Hsdzj7Dlq2I7tHP7501T4",
          "name": "Niall Horan",
          "type": "artist",
          "uri": "spotify:artist:1Hsdzj7Dlq2I7tHP7501T4"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/7ahctQBwcSxDdP0fRAPo2p"
      },
      "href": "https://api.spotify.com/v1/albums/7ahctQBwcSxDdP0fRAPo2p",
      "id": "7ahctQBwcSxDdP0fRAPo2p",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2735bac234d5511248b248caf36",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e025bac234d5511248b248caf36",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048515bac234d5511248b248caf36",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Flicker (Deluxe)",
      "release_date": "2017-10-20",
      "release_date_precision": "day",
      "total_tracks": 13,
      "type": "album",
      "uri": "spotify:album:7ahctQBwcSxDdP0fRAPo2p"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1Hsdzj7Dlq2I7tHP7501T4"
        },
        "href": "https://api.spotify.com/v1/artists/1Hsdzj7Dlq2I7tHP7501T4",
        "id": "1Hsdzj7Dlq2I7tHP7501T4",
        "name": "Niall Horan",
        "type": "artist",
        "uri": "spotify:artist:1Hsdzj7Dlq2I7tHP7501T4"
      }
    ],
    "disc_number": 1,
    "duration_ms": 232852,
    "explicit": false,
    "external_ids": {
      "isrc": "USUG11601029"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/0qvzXomUDJVaUboy2wMfiS"
    },
    "href": "https://api.spotify.com/v1/tracks/0qvzXomUDJVaUboy2wMfiS",
    "id": "0qvzXomUDJVaUboy2wMfiS",
    "is_local": false,
    "is_playable": true,
    "name": "This Town",
    "popularity": 84,
    "preview_url": null,
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:0qvzXomUDJVaUboy2wMfiS"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/5f7VJjfbwm532GiveGC0ZK"
          },
          "href": "https://api.spotify.com/v1/artists/5f7VJjfbwm532GiveGC0ZK",
          "id": "5f7VJjfbwm532GiveGC0ZK",
          "name": "Lil Baby",
          "type": "artist",
          "uri": "spotify:artist:5f7VJjfbwm532GiveGC0ZK"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/7yf9ZJyHRbp8sHtpDKfPpt"
      },
      "href": "https://api.spotify.com/v1/albums/7yf9ZJyHRbp8sHtpDKfPpt",
      "id": "7yf9ZJyHRbp8sHtpDKfPpt",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2736cab41f8c84d6164976400d4",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e026cab41f8c84d6164976400d4",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048516cab41f8c84d6164976400d4",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Harder Than Ever",
      "release_date": "2018-05-18",
      "release_date_precision": "day",
      "total_tracks": 17,
      "type": "album",
      "uri": "spotify:album:7yf9ZJyHRbp8sHtpDKfPpt"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5f7VJjfbwm532GiveGC0ZK"
        },
        "href": "https://api.spotify.com/v1/artists/5f7VJjfbwm532GiveGC0ZK",
        "id": "5f7VJjfbwm532GiveGC0ZK",
        "name": "Lil Baby",
        "type": "artist",
        "uri": "spotify:artist:5f7VJjfbwm532GiveGC0ZK"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
        },
        "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
        "id": "3TVXtAsR1Inumwj472S9r4",
        "name": "Drake",
        "type": "artist",
        "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
      }
    ],
    "disc_number": 1,
    "duration_ms": 142273,
    "explicit": true,
    "external_ids": {
      "isrc": "USUM71806749"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/6vN77lE9LK6HP2DewaN6HZ"
    },
    "href": "https://api.spotify.com/v1/tracks/6vN77lE9LK6HP2DewaN6HZ",
    "id": "6vN77lE9LK6HP2DewaN6HZ",
    "is_local": false,
    "is_playable": true,
    "name": "Yes Indeed",
    "popularity": 84,
    "preview_url": null,
    "track_number": 5,
    "type": "track",
    "uri": "spotify:track:6vN77lE9LK6HP2DewaN6HZ"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY"
          },
          "href": "https://api.spotify.com/v1/artists/7CajNmpbOovFoOoasH2HaY",
          "id": "7CajNmpbOovFoOoasH2HaY",
          "name": "Calvin Harris",
          "type": "artist",
          "uri": "spotify:artist:7CajNmpbOovFoOoasH2HaY"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/48zisMeiXniWLzOQghbPqS"
      },
      "href": "https://api.spotify.com/v1/albums/48zisMeiXniWLzOQghbPqS",
      "id": "48zisMeiXniWLzOQghbPqS",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273063c048e9ef6bd021b744756",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02063c048e9ef6bd021b744756",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851063c048e9ef6bd021b744756",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Motion",
      "release_date": "2014-10-31",
      "release_date_precision": "day",
      "total_tracks": 15,
      "type": "album",
      "uri": "spotify:album:48zisMeiXniWLzOQghbPqS"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7CajNmpbOovFoOoasH2HaY"
        },
        "href": "https://api.spotify.com/v1/artists/7CajNmpbOovFoOoasH2HaY",
        "id": "7CajNmpbOovFoOoasH2HaY",
        "name": "Calvin Harris",
        "type": "artist",
        "uri": "spotify:artist:7CajNmpbOovFoOoasH2HaY"
      }
    ],
    "disc_number": 1,
    "duration_ms": 222533,
    "explicit": false,
    "external_ids": {
      "isrc": "GBARL1400296"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/6YUTL4dYpB9xZO5qExPf05"
    },
    "href": "https://api.spotify.com/v1/tracks/6YUTL4dYpB9xZO5qExPf05",
    "id": "6YUTL4dYpB9xZO5qExPf05",
    "is_local": false,
    "is_playable": true,
    "name": "Summer",
    "popularity": 84,
    "preview_url": "https://p.scdn.co/mp3-preview/a6fc9fe137bd7d0b3377309f8235eddf449866e5?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 8,
    "type": "track",
    "uri": "spotify:track:6YUTL4dYpB9xZO5qExPf05"
  },
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx"
          },
          "href": "https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx",
          "id": "3YQKmKGau1PzlVlkL1iodx",
          "name": "Twenty One Pilots",
          "type": "artist",
          "uri": "spotify:artist:3YQKmKGau1PzlVlkL1iodx"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3cQO7jp5S9qLBoIVtbkSM1"
      },
      "href": "https://api.spotify.com/v1/albums/3cQO7jp5S9qLBoIVtbkSM1",
      "id": "3cQO7jp5S9qLBoIVtbkSM1",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273de03bfc2991fd5bcfde65ba3",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02de03bfc2991fd5bcfde65ba3",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851de03bfc2991fd5bcfde65ba3",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Blurryface",
      "release_date": "2015-05-15",
      "release_date_precision": "day",
      "total_tracks": 14,
      "type": "album",
      "uri": "spotify:album:3cQO7jp5S9qLBoIVtbkSM1"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3YQKmKGau1PzlVlkL1iodx"
        },
        "href": "https://api.spotify.com/v1/artists/3YQKmKGau1PzlVlkL1iodx",
        "id": "3YQKmKGau1PzlVlkL1iodx",
        "name": "Twenty One Pilots",
        "type": "artist",
        "uri": "spotify:artist:3YQKmKGau1PzlVlkL1iodx"
      }
    ],
    "disc_number": 1,
    "duration_ms": 214506,
    "explicit": false,
    "external_ids": {
      "isrc": "USAT21500598"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2Z8WuEywRWYTKe1NybPQEW"
    },
    "href": "https://api.spotify.com/v1/tracks/2Z8WuEywRWYTKe1NybPQEW",
    "id": "2Z8WuEywRWYTKe1NybPQEW",
    "is_local": false,
    "is_playable": true,
    "name": "Ride",
    "popularity": 84,
    "preview_url": "https://p.scdn.co/mp3-preview/b571ceecaadc03941bdf4e683ea26e4e6d3f7c17?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 3,
    "type": "track",
    "uri": "spotify:track:2Z8WuEywRWYTKe1NybPQEW"
  }
]



export default function Page () {

  const insets = useSafeAreaInsets();
  const sizes = useSharedValue({red: 100, green: 100})
  const [hideAllCards, setHideAllCards] = React.useState(false)
  


const [cardState, setCardState] = React.useState(0)
const [cardIndex, setCardIndex] = React.useState(0)
const [likedSongs, setLikedSongs] = React.useState([])
const [hatedSongs, setHatedSongs] = React.useState([])

function getCardState(state) {
  setCardState(state)
  if(Math.abs(state)>=2) {
    if(state===2) {
      setLikedSongs([...likedSongs, sampleTrackResponse[cardIndex]])
    }else if(state===-2) {
      setHatedSongs([...hatedSongs, sampleTrackResponse[cardIndex]])
    }
    setCardIndex(cardIndex+1)
  }

};

const animatedSmall = useAnimatedStyle(() => ({
  width: withSpring(50)
}));

const animatedLarge = useAnimatedStyle(() => ({
  width: withSpring(100)
}));

const filteredTrackResponse = React.useMemo(() => {
  return (sampleTrackResponse.filter((element, index) => {  
    return element.preview_url!=null
  }))
}, [sampleTrackResponse])


const cardList = filteredTrackResponse.map((element, index) => {
   return ((cardIndex === index && !hideAllCards)  ? ( <Card 
            key={index}
            index={index}
            trackObject={filteredTrackResponse[cardIndex]}
            getCardState={getCardState}
    >
</Card>) : null)
})




    return (
      
        <GestureHandlerRootView className="flex-1 items-center justify-end bg-all-black" style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
          <View className=" h-full w-full flex flex-row justify-between items-end">
            
                <Animated.View className="bg-red-500 h-12 rounded-r-full flex items-center justify-center "
                
                style={
                  cardState === -1 ? {width: 50} : animatedLarge
                }>
                  
                  <Text className="font-semibold text-xl">
                    {cardState === -1 ? '-' : hatedSongs.length}
                  </Text>

                </Animated.View>
                <Animated.View className="bg-spott-green h-12  rounded-l-full items-center justify-center "
                style={                  cardState === 1 ? {width: 50} : animatedLarge
                }>
                  <Text className="text-xl font-semibold">
                                            {cardState === 1 ? '+' : likedSongs.length}

                  </Text>

                </Animated.View>
            </View>
          <View className=" h-[85%] w-full flex-col items-center justify-center">
                  {cardList}
   

          </View>
              
          
          <Pressable
            onPress={() => {setHideAllCards(true); router.push("/playlist")}}
            className=" bg-spott-green w-5/6 max-w-[340px] py-5 flex rounded-2xl items-center justify-center">
            <Text className=" font-semibold text-2xl ">Done</Text>
              </Pressable>


            
        </GestureHandlerRootView>
    )
}
