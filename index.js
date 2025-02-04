const axios = require("axios");
const cheerio = require('cheerio');
const ytdl = require("ytdl-core");
const {
  decode
} = require("html-entities");
const qs = require('qs');
const metadata = {
  'Author': "Mohammad Rahad",
  'message': "any problem please contact me",
  'Facebook': "https://www.facebook.com/md.rahad.hosain18"
};
async function rahadinsta(_0x11d409) {
  try {
    if (!_0x11d409) {
      return {
        'success': false,
        'error': "Missing URL parameter"
      };
    }
    const _0x3e9125 = ["b258ef723fmsh6e1c717e4da8c55p1a6aa6jsn0b568acec4ba", "aefdb0602bmsh108794901717a46p1633c1jsn158e610f3ec7", "2cc687a09fmsh03d743f2aa512a8p10abdcjsn78953f7f18eb", "1d37e77a02mshf3a6c1b1595c733p1a1bb5jsn95a79657b66a", '57f9a2103emshb5be9d95c8964bdp1d3620jsnd6716f0c155b', "250976cf63msh6da47b4f04c0fb2p199701jsn7f1e0a8fbd11", "5099af6297msh5cc9c6524d30a94p10d307jsn003307a68755", 'aea50f9b26msh5d25474550daf0ap1a6537jsncc77ca7a71b5'];
    const _0x36b7b5 = _0x3e9125[Math.floor(Math.random() * _0x3e9125.length)];
    const _0x3ed10f = {
      'method': "GET",
      'url': 'https://instagram-looter2.p.rapidapi.com/post',
      'params': {
        'link': _0x11d409
      },
      'headers': {
        'X-RapidAPI-Key': _0x36b7b5,
        'X-RapidAPI-Host': "instagram-looter2.p.rapidapi.com"
      }
    };
    const _0x43c473 = await axios.request(_0x3ed10f);
    const _0x391161 = {
      'status': true,
      'thumbnail_src': _0x43c473.data.thumbnail_src,
      'display_url': _0x43c473.data.display_url,
      'display_resources': _0x43c473.data.display_resources,
      'has_audio': _0x43c473.data.has_audio,
      'video_url': _0x43c473.data.video_url,
      'video_view_count': _0x43c473.data.video_view_count,
      'product_type': _0x43c473.data.product_type,
      'title': _0x43c473.data.title,
      'video_duration': _0x43c473.data.video_duration,
      'clips_music_attribution_info': _0x43c473.data.clips_music_attribution_info,
      'is_video': _0x43c473.data.is_video,
      'owner': _0x43c473.data.owner,
      'edge_media_to_caption': _0x43c473.data.edge_media_to_caption,
      'edge_media_to_comment': _0x43c473.data.edge_media_to_comment,
      'edge_media_preview_like': _0x43c473.data.edge_media_preview_like
    };
    return {
      'metadata': metadata,
      'data': _0x391161
    };
  } catch (_0x541cb4) {
    console.error("Error in Instagram Downloader:", _0x541cb4);
    return {
      'success': false,
      'error': "Internal Server Error",
      'details': _0x541cb4.message
    };
  }
}
async function rahadtikdl(_0x588e1a) {
  try {
    if (!_0x588e1a) {
      return {
        'success': false,
        'error': "Missing URL parameter"
      };
    }
    if (!_0x588e1a.includes("tiktok.com")) {
      return {
        'success': false,
        'error': "Please specify a valid TikTok URL"
      };
    }
    const _0x1b0e6a = await axios.post("https://www.tikwm.com/api/", {}, {
      'headers': {
        'accept': "application/json, text/javascript, */*; q=0.01",
        'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
        'sec-ch-ua': "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
        'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
      },
      'params': {
        'url': _0x588e1a,
        'count': 0xc,
        'cursor': 0x0,
        'web': 0x1,
        'hd': 0x1
      }
    });
    const _0x44be40 = _0x1b0e6a.data.data;
    const _0x341517 = {
      'msg': _0x1b0e6a.data.msg,
      'processed_time': _0x1b0e6a.data.processed_time,
      'title': _0x44be40.title,
      'play_count': _0x44be40.play_count,
      'react_count': _0x44be40.digg_count,
      'comment_count': _0x44be40.comment_count,
      'share_count': _0x44be40.share_count,
      'noWatermarkMp4': "https://www.tikwm.com/" + _0x44be40.play,
      'watermarkMp4': "https://www.tikwm.com/" + _0x44be40.wmplay,
      'originCover': _0x44be40.origin_cover,
      'musicInfo': {
        'title': _0x44be40.music_info.title,
        'music': _0x44be40.music_info.play,
        'cover': _0x44be40.music_info.cover,
        'author': _0x44be40.music_info.author,
        'original': _0x44be40.music_info.original,
        'duration': _0x44be40.music_info.duration,
        'album': _0x44be40.music_info.album
      },
      'region': _0x44be40.region,
      'download_count': _0x44be40.download_count,
      'create_time': _0x44be40.create_time,
      'avatar': "https://www.tikwm.com/" + _0x44be40.author.avatar,
      'images': _0x44be40.images,
      'cover': "https://www.tikwm.com/" + _0x44be40.cover
    };
    console.log("Response data:", _0x44be40);
    return {
      'metadata': metadata,
      'data': _0x341517
    };
  } catch (_0x24753d) {
    console.error("Error in TikTok Downloader:", _0x24753d);
    return {
      'success': false,
      'error': "Internal Server Error",
      'details': _0x24753d.message
    };
  }
}
async function rahadfbdl(_0x5d049e, _0x341948, _0x42068b) {
  try {
    const _0x32d20b = {
      'sec-fetch-user': '?1',
      'sec-ch-ua-mobile': '?0',
      'sec-fetch-site': "none",
      'sec-fetch-dest': "document",
      'sec-fetch-mode': 'navigate',
      'cache-control': "max-age=0",
      'authority': "www.facebook.com",
      'upgrade-insecure-requests': '1',
      'accept-language': 'en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6',
      'sec-ch-ua': "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
      'user-agent': _0x42068b || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 ",
      'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      'cookie': _0x341948 || "sb=Rn8BYQvCEb2fpMQZjsd6L382; datr=Rn8BYbyhXgw9RlOvmsosmVNT; c_user=100003164630629; _fbp=fb.1.1629876126997.444699739; wd=1920x939; spin=r.1004812505_b.trunk_t.1638730393_s.1_v.2_; xs=28%3A8ROnP0aeVF8XcQ%3A2%3A1627488145%3A-1%3A4916%3A%3AAcWIuSjPy2mlTPuZAeA2wWzHzEDuumXI89jH8a_QIV8; fr=0jQw7hcrFdas2ZeyT.AWVpRNl_4noCEs_hb8kaZahs-jA.BhrQqa.3E.AAA.0.0.BhrQqa.AWUu879ZtCw"
    };
    if (!_0x5d049e || !_0x5d049e.trim()) {
      return {
        'success': false,
        'error': "Please specify the Facebook URL"
      };
    }
    if (["facebook.com", "fb.watch"].every(_0x5df170 => !_0x5d049e.includes(_0x5df170))) {
      return {
        'success': false,
        'error': "Please enter the valid Facebook URL"
      };
    }
    const {
      data: _0x33ff78
    } = await axios.get(_0x5d049e, {
      'headers': _0x32d20b
    });
    const _0x11f7b6 = _0x33ff78.match(/"browser_native_sd_url":"(.*?)"/) || _0x33ff78.match(/"playable_url":"(.*?)"/) || _0x33ff78.match(/sd_src\s*:\s*"([^"]*)"/) || _0x33ff78.match(/(?<="src":")[^"]*(https:\/\/[^"]*)/);
    const _0x1f4c4e = _0x33ff78.match(/"browser_native_hd_url":"(.*?)"/) || _0x33ff78.match(/"playable_url_quality_hd":"(.*?)"/) || _0x33ff78.match(/hd_src\s*:\s*"([^"]*)"/);
    const _0x55e8cd = _0x33ff78.match(/<meta\sname="description"\scontent="([^"]*)"/);
    const _0xfa63bb = _0x33ff78.match(/"preferred_thumbnail":{"image":{"uri":"(.*?)"/);
    const _0x295b72 = _0x33ff78.match(/"playable_duration_in_ms":[0-9]+/gm);
    const _0x2c9252 = _0x508bde => {
      if (_0x508bde.length < 0x3) {
        return _0x508bde;
      } else {
        if (_0x508bde.length < 0x6) {
          const _0x3f034f = _0x508bde.split(':');
          return _0x508bde = +_0x3f034f[0x0] * 0x3c + +_0x3f034f[0x1];
        } else {
          const _0x5aefd5 = _0x508bde.split(':');
          return _0x508bde = +_0x5aefd5[0x0] * 0x3c * 0x3c + +_0x5aefd5[0x1] * 0x3c + +_0x5aefd5[0x2];
        }
      }
    };
    const _0x379f3c = _0x33ff78.match(/"reaction_count":\{"count":(\d+),.*?"edges"/);
    const _0xbffcc0 = _0x379f3c ? parseInt(_0x379f3c[0x1]) : 0x0;
    const _0xd65644 = _0x33ff78.match(/"reaction_count":\{"count":\d+,.*?"reactions":\[\{"reaction_type":"like","node":\{"reaction_type":"love","reaction_count":(\d+)/);
    const _0x558a16 = _0xd65644 ? parseInt(_0xd65644[0x1]) : 0x0;
    const _0x4342c2 = _0x33ff78.match(/"video_view_count":(\d+)/);
    const _0x1f92ab = _0x4342c2 ? parseInt(_0x4342c2[0x1]) : 0x0;
    const _0x59f431 = _0x33ff78.match(/"share_count":\{"count":(\d+)}\}/);
    const _0x361a48 = _0x59f431 ? parseInt(_0x59f431[0x1]) : 0x0;
    const _0x5c01d5 = {
      'msg': "success",
      'duration_ms': _0x2c9252(_0x295b72[0x0].split(':')[0x1]),
      'title': _0x55e8cd && _0x55e8cd[0x1] ? decode(_0x55e8cd[0x1]) : _0x33ff78.match(/<title>(.*?)<\/title>/)?.[0x1] ?? '',
      'sd': JSON.parse("{\"text\": \"" + _0x11f7b6[0x1] + "\"}").text,
      'hd': _0x1f4c4e && _0x1f4c4e[0x1] ? JSON.parse("{\"text\": \"" + _0x1f4c4e[0x1] + "\"}").text : '',
      'thumbnail': _0xfa63bb && _0xfa63bb[0x1] ? JSON.parse("{\"text\": \"" + _0xfa63bb[0x1] + "\"}").text : '',
      'like': _0xbffcc0,
      'love': _0x558a16,
      'views': _0x1f92ab,
      'shares': _0x361a48
    };
    return {
      'metadata': metadata,
      'data': _0x5c01d5
    };
  } catch (_0x3c7304) {
    console.error(_0x3c7304);
    return {
      'success': false,
      'error': "rahad-media-downloader server error Please contact Server Owner Mohammad Rahad fb:\n\n https://www.facebook.com/md.rahad.hosain18",
      'details': _0x3c7304.message
    };
  }
}
async function rahadytdl(_0x228944) {
  const _0x506388 = Date.now();
  try {
    if (!_0x228944) {
      return {
        'success': false,
        'error': "Missing URL parameter"
      };
    }
    const _0xb45908 = await ytdl.getInfo(_0x228944);
    const _0x50473c = _0xb45908.videoDetails.title;
    const _0x118fc0 = formatDuration(_0xb45908.videoDetails.lengthSeconds);
    const _0x3270f3 = _0xb45908.videoDetails.thumbnail?.["thumbnails"][0x0]?.["url"] || "Thumbnail URL not available";
    const _0x49d88e = _0xb45908.videoDetails.uploadDate;
    const _0xb32537 = _0xb45908.videoDetails.author.name;
    const _0x22a278 = _0xb45908.videoDetails.author.thumbnails[0x0]?.["url"] || "Channel avatar URL not available";
    const _0x1e42b5 = _0xb45908.videoDetails.channelThumbnail?.["thumbnails"][0x0]?.['url'] || "Channel cover URL not available";
    const _0x5003f9 = _0xb45908.videoDetails.viewCount;
    const _0x8f1294 = _0xb45908.videoDetails.likes;
    const _0x30e9b4 = _0xb45908.videoDetails.dislikes;
    const _0x101769 = _0xb45908.videoDetails.keywords;
    const _0x53736a = ytdl.chooseFormat(_0xb45908.formats, {
      'filter': "audioonly"
    });
    const _0x1e9ab1 = ytdl.filterFormats(_0xb45908.formats, "videoandaudio");
    const _0x9e4ef6 = _0x53736a ? _0x53736a.url : null;
    const _0x41f9fd = {};
    for (const _0x2ff30b of _0x1e9ab1) {
      _0x41f9fd[_0x2ff30b.quality] = _0x2ff30b.url;
    }
    const _0x2256bb = (Date.now() - _0x506388) / 0x3e8;
    let _0x5264c3;
    if (_0x2256bb >= 0x3c) {
      const _0x51ab63 = Math.floor(_0x2256bb / 0x3c);
      const _0x4d6353 = _0x2256bb % 0x3c;
      _0x5264c3 = _0x51ab63 + "m " + _0x4d6353.toFixed(0x2) + 's';
    } else {
      _0x5264c3 = _0x2256bb.toFixed(0x2) + 's';
    }
    const _0x2dbc35 = {
      'status': "success",
      'processingTime': _0x5264c3,
      'title': _0x50473c,
      'duration': _0x118fc0,
      'thumbnailUrl': _0x3270f3,
      'uploadTime': _0x49d88e,
      'channelName': _0xb32537,
      'channelAvatar': _0x22a278,
      'channelCover': _0x1e42b5,
      'viewCount': _0x5003f9,
      'likes': _0x8f1294,
      'dislikes': _0x30e9b4,
      'keywords': _0x101769,
      'audioLink': _0x9e4ef6,
      'videoLinks': _0x41f9fd
    };
    return {
      'metadata': metadata,
      'info': _0x2dbc35
    };
  } catch (_0x903ea2) {
    console.error(_0x903ea2);
    return {
      'success': false,
      'error': "rahad-media-downloader server error Please contact Server Owner Mohammad Rahad fb:\n\n https://www.facebook.com/md.rahad.hosain18",
      'details': _0x903ea2.message
    };
  }
}
function formatDuration(_0x340fd8) {
  const _0x5b9438 = Math.floor(_0x340fd8 / 0xe10);
  const _0x233c47 = Math.floor(_0x340fd8 % 0xe10 / 0x3c);
  const _0x45349f = _0x340fd8 % 0x3c;
  return _0x5b9438 + ':' + _0x233c47 + ':' + _0x45349f;
}
async function gdriveLink(_0x1c9d88) {
  if (!_0x1c9d88) {
    return {
      'success': false,
      'error': "Missing URL parameter"
    };
  }
  try {
    const _0x543ed9 = _0x1c9d88.match(/\/d\/([^/]+)/)[0x1];
    const _0x27590c = "https://drive.google.com/uc?export=download&id=" + _0x543ed9;
    const _0x5c484c = await axios.head(_0x27590c, {
      'maxRedirects': 0x5
    });
    const _0x1f0f99 = _0x5c484c.request.res.responseUrl;
    console.log("Response data:", _0x5c484c.data);
    return {
      'metadata': metadata,
      'data': _0x1f0f99
    };
  } catch (_0x112945) {
    console.error("Error handling Google Drive link:", _0x112945);
    return {
      'success': false,
      'error': "An error occurred while processing the Google Drive link"
    };
  }
}
async function twitter(_0x5aac4e) {
  return new Promise((_0x28e804, _0x2c5853) => {
    let _0x566ede = {
      'URL': _0x5aac4e
    };
    axios.post('https://twdown.net/download.php', qs.stringify(_0x566ede), {
      'headers': {
        'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        'sec-ch-ua': "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
        'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        'cookie': "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
      }
    }).then(({
      data: _0x3183ef
    }) => {
      const _0x4e8c3e = cheerio.load(_0x3183ef);
      let _0x53da9a = _0x4e8c3e("div:nth-child(1) > div:nth-child(2) > p").text().trim();
      let _0x18cfb1 = _0x4e8c3e("tbody > tr:nth-child(1) > td:nth-child(4) > a").attr("href");
      let _0x1c6d50 = _0x4e8c3e("tr:nth-child(2) > td:nth-child(4) > a").attr('href');
      const _0x413da1 = {
        'status': "success",
        'title': _0x53da9a,
        'url': [{
          'hd': _0x18cfb1
        }, {
          'sd': _0x1c6d50
        }]
      };
      _0x28e804({
        'metadata': metadata,
        'info': _0x413da1
      });
    })["catch"](_0x58d7f3 => {
      _0x2c5853(_0x58d7f3);
    });
  });
}
module.exports = {
  'rahadinsta': rahadinsta,
  'rahadtikdl': rahadtikdl,
  'rahadfbdl': rahadfbdl,
  'rahadytdl': rahadytdl,
  'gdriveLink': gdriveLink,
  'twitter': twitter
};
