var APP_DATA = {
  "scenes": [
    {
      "id": "0-im-view-foh",
      "name": "IM view FoH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.13747440753798124,
        "pitch": 0.19441923710275688,
        "fov": 1.5316272577411574
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-lx-view-foh",
      "name": "lx view FoH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.06385176114942404,
        "pitch": 0.021192326836667164,
        "fov": 1.5316272577411574
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-set-view",
      "name": "set view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -0.33346514200115607,
        "pitch": 0.03467835300548572,
        "fov": 1.5316272577411574
      },
      "linkHotspots": [
        {
          "yaw": -1.5632245342007582,
          "pitch": 0.03960357619972399,
          "rotation": 1.5707963267948966,
          "target": "3-foh"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4274154810063475,
          "pitch": 0.04132989367333728,
          "title": "To Front of house<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-foh",
      "name": "FoH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.10091708244770992,
        "pitch": 0.3082520267152127,
        "fov": 1.5316272577411574
      },
      "linkHotspots": [
        {
          "yaw": 0.9997054368417952,
          "pitch": 0.013217338582199645,
          "rotation": 0.7853981633974483,
          "target": "1-lx-view-foh"
        },
        {
          "yaw": -0.38456491853797736,
          "pitch": 0.48200280687659713,
          "rotation": 0.7853981633974483,
          "target": "0-im-view-foh"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "YOTT Tech",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
