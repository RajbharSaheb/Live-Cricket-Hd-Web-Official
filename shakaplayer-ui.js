const channelData = {
  "BBC1": {
    "file": "https://wp1-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09091/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "6401e1fead9d4f43910aaad360f46dd0",
        "key": "598f5e4f10d4e040d25579478cadc4ee"
      }
    }
  },
  "TVLA1": {
    "file": "https://mad02.cdn.avatel.tv/live/eds/la1/MPEG-DASH_Scrambled_High/la1.mpd",
    "drm": {
      "clearkey": {
        "keyId": "0b5e6af8d1f345828d9cfff8cbf903ee",
        "key": "99df7780551f38af550a637923bd4a31"
      }
    }
  },
  "SKY_251_IT": {
    "file": "https://linear311-it-dash1-prd.selector.skycdn.it/016a/31917/FHD/skysport251/master.mpd",
    "drm": {
      "clearkey": {
        "keyId": "00368000eaecbeeafd84c05b3b8243af",
        "key": "8f84185910e18ae0ca8a45004625a000"
      }
    }
  },
  "ITV1_GB": {
    "file": "https://wp2-obc1112-live-ch-prod.prod.cdn.dmdsdp.com/dash/SV09212/manifest.mpd",
    "drm": {
      "clearkey": {
        "keyId": "5d9937d586414096948337ac314d79c1",
        "key": "22ca2e250b729982c97209e0ff3f7e9b"
      }
    }
  },
  "ZDF_DE": {
    "file": "https://p7s1-live-001-prod.akamaized.net/45371d5a/t_009/zdf-de-hd/cenc-default.mpdF5wFAAKgAXABAACoAFoAMgAaABFACYAE8AKUAWwBcADaAIAAQkA_QD-AIGAUgA_YC8wAAAEhIAMAAQSnDQAYAAglOIgAwABBKcVABgACCU4yADAAEEpx0AGAAIJTkIAMAAQSnJQAYAAglOUgAwABBKcA.f_gAAAAAAAAA&UGDPR=1&DAdID=e76997ff-4695-4a78-9bb8-488e1631872a&requestuid=742b0983-cd7c-11ed-961f-a2691158f87a",
    "drm": {
      "clearkey": {
        "keyId": "7757d3fa8cdab673a2dd9f3ed7b41360",
        "key": "96e498b70eeecfc0164ed4e0a78e36f3"
      }
    }
  },
};

// Allowed domain
const allowedDomain = "livecrichdofficial.pages.dev";

// Check current domain
const currentDomain = window.location.hostname;

// Redirect if the current domain doesn't match the allowed domain
if (currentDomain !== allowedDomain) {
  window.location.href = "https://telegram.me/livecrichdofficial"; // Redirect to your preferred URL
}
