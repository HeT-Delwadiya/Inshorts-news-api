# Inshorts-news-api
 A node package to get news from Inshorts News.

## Installation
Install using npm:
```sh
npm install inshorts-news-api
```

## Usage
Require library
```javascript
const inshorts = require('inshorts-news-api');
```
```javascript
//specify language, category of news you want
var options = {
  language: 'language',
  category: 'category' 
}

//use getNews for first time, it will return first 10 posts and an unique id
const newsData = await inshorts.getNews(options);
console.log(newsData);

//to get next 10 news posts of that same category and language
var options = {
  language: 'language',
  category: 'category',
  news_offset: 'unique_key'
}

//use getNews with news_offset for next time, it will return next 10 posts and an unique id
const newsData = await inshorts.getNews(options);
console.log(newsData);
```
Pass the 'options' object as a parameter to this function. Define keys language, category for getNews and it will return 10 news posts with news_offset. this news_offset will be used for next call which will return next 10 news posts and updated news_offset.

Note: You have to store the news_offset provided from first call and you have to pass it in the next call to get next 10 news posts.

## Available Categories-
 - //Leave empty for getting all news
 - national (India)
 - business
 - sports
 - world
 - politics
 - technology
 - startup
 - entertainment
 - miscellaneous
 - hatke (unusual)
 - science
 - automobile


## Availabe Languages-
 - en (English)
 - hi (Hindi)

### Example Code Snippet
```javascript
var options = {
  language: 'en',
  category: ''
}

const newsData = await inshorts.getNews(options);
console.log(newsData);

//for next 10 news posts
var options = {
  language: 'en',
  category: '',
  news_offset: '87w7oet4-1'
}

const nextNewsData = await inshorts.getNews(options);
console.log(nextNewsData);
```

Response
```javascript
{
  {
    "hash_id": "5wojaibc-1",
    "news_type": "NEWS",
    "rank": 0,
    "version": 1,
    "type": "NEWS",
    "read_override": false,
    "fixed_rank": false,
    "news_obj": {
      "old_hash_id": "video-shows-isro-scientists-celebrate-as-chandrayaan3-lands-on-moon-1692794958763",
      "hash_id": "5wojaibc-1",
      "author_name": "Pragya Swastik",
      "content": "ISRO scientists clapped in joy as Chandrayaan-3's Vikram lander successfully landed on the Moon after power descent on Wednesday. With the successful landing, India has become the first country to successfully land a spacecraft near Moon's south pole. PM Narendra Modi, who's in South Africa for the BRICS Summit, virtually attended the launch and congratulated the scientists.",
      "source_url": "https://twitter.com/ANI/status/1694327784414519458?s=20&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "source_name": "Twitter",
      "title": "Video shows ISRO scientists celebrate as Chandrayaan-3 lands on Moon",
      "important": false,
      "image_url": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/08_aug/23_wed/img_1692794710788_785.jpg?",
      "shortened_url": "https://shrts.in/WLsyz",
      "created_at": 1692794958000,
      "score": 1000,
      "category_names": [
        "science",
        "national"
      ],
      "relevancy_tags": [
        "science",
        "national"
      ],
      "hash_tags": [
        "Chandrayaan3Lands"
      ],
      "tenant": "ENGLISH",
      "fb_object_id": "",
      "fb_like_count": 0,
      "country_code": "IN",
      "impressive_score": 15.379999999999999,
      "targeted_city": [],
      "gallery_image_urls": [],
      "full_gallery_urls": [],
      "bottom_headline": "To watch the video",
      "bottom_text": "Tap here",
      "darker_fonts": true,
      "bottom_panel_link": "https://twitter.com/ANI/status/1694327784414519458?s=20&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "bottom_type": "CARD_DECK",
      "footer_deck_id": "jhVpRLoM_hashtag",
      "footer_deck_tag_label": "#Chandrayaan3Lands",
      "byline_1": [
        {
          "type": "TEXT",
          "text": "swipe left for more at Twitter / "
        },
        {
          "type": "TIME"
        }
      ],
      "byline_2": [
        {
          "type": "TEXT",
          "text": "short by "
        },
        {
          "type": "TEXT",
          "text": "Pragya Swastik"
        }
      ],
      "version": 1,
      "position_start_time": "1970-01-01T00:00:00Z",
      "position_expire_time": "2023-08-24T12:47:28.593Z",
      "trackers": [],
      "dfp_tags": "score:1000,news:default,cat:science,cat:national,hash:2",
      "dont_show_ad": false,
      "poll_tenant": "ENGLISH",
      "video_opinion_enabled": true,
      "language": "english",
      "show_inshorts_brand_name": true,
      "crypto_coin_preference": null,
      "is_overlay_supported": false,
      "news_type": "NEWS",
      "is_muted": false,
      "video_audio_type": "USER_SPECIFIED_AUDIO",
      "auto_play_type": "AUTO_PLAY_USER_SPECIFIED",
      "show_in_video_feed_only": false,
      "similar_threshold": 15500,
      "is_similar_feed_available": true
    },
  }
  "news_offset": "87w7oet4-1"
}
```
## Demo
Live at https://newsclub.hetdelwadiya.dev

Repo - https://github.com/HeT-Delwadiya/NewsClub-Backend


## About Me

<a href="https://hetdelwadiya.dev" target="_blank">Het Delwadiya</a>
