# Inshorts-news-api
 A node package to get news from Inshorts.

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
  lang: 'language',
  category: 'category'
}

//use getNews for first time, it will return first 25 posts and an unique id
inshorts.getNews(options, function(result, news_offset){
  console.log(result);
  console.log(news_offset); //it will be used in getMorePosts
});

//to get next 25 news posts of that same category and language
var options = {
  lang: 'language',
  category: 'category',
  news_offset: 'unique_key'
}

//use getMoreNews for next time, it will return next 25 posts and an unique id
inshorts.getMoreNews(options, function(result, news_offset){
  console.log(result);
  console.log(news_offset);
});
```
Pass the 'options' object as a parameter to this function. Define keys lang, category for getNews which will be called first time and will return 25 news posts with 1 unique key. this unique key will be used in getMorePosts which will return next 25 news posts and updated unique key.

Note: You have to store the unique key provided from getNews and you have to pass it in getMoreNews to get next 25 news posts. It will also return other unique key and it will be used again in getMoreNews for next 25 news posts and so on.

Default language is 'en'.

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
  lang: 'en',
  category: ''
}

inshorts.getNews(options ,function(result, news_offset){
  console.log(result);
  console.log(news_offset);
});

//for next 25 news posts
var options = {
  lang: 'en',
  category: '',
  news_offset:'87w7oet4-1'
}

inshorts.getMoreNews(options ,function(result, news_offset){
  console.log(result);
  console.log(news_offset);
});
```

Response
```javascript
{
    "posts": [
        {
            "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/03_mar/6_sun/img_1646567609860_138.jpg?",
            "title": "COVID-19 hit me like a tonne of bricks: Pregnant Harry Potter actress from hospital",
            "author": "Pragya Swastik",
            "content": "English actress Jessie Cave, who is pregnant with her fourth child, was rushed to hospital. In an Instagram post from the hospital, the 34-year-old actress asked, \"Anyone else had covid in 3rd trimester & had it hit them like a tonne of bricks for weeks?\" Jessie is best known to fans for playing Lavender Brown in the Harry Potter franchise.",
            "postedAt": "05:46 pm 06 Mar",
            "sourceURL": "https://inshorts.com/en/read/",
            "readMore": "https://www.mirror.co.uk/3am/celebrity-news/breaking-pregnant-harry-potter-star-26397584.amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "
        },
        {
            "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/03_mar/6_sun/img_1646570258491_132.jpg?",
            "title": "Got messages saying 'kill yourself': Bhavana who accused Dileep of sex assault",
            "author": "Sakshita Khosla",
            "content": "Malayalam actress Bhavana Menon, who was allegedly kidnapped and sexually assaulted by a group of men including actor Dileep in 2017, opened up about her struggles. Saying that she was 'victim-shamed' after the assault, Menon added, \"After I joined Instagram, I received messages like 'why don't you kill yourself'.\" She had earlier identified herself as the assault victim on Instagram.",
            "postedAt": "06:21 pm 06 Mar",
            "sourceURL": "https://inshorts.com/en/read/",
            "readMore": ""
        },
        {
            "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/03_mar/6_sun/img_1646563761460_208.jpg?",
            "title": "Sweden & Finland to step up security cooperation amid Ukraine crisis",
            "author": "Disha Jana",
            "content": "Sweden and Finland will strengthen their security cooperation amid Russia's military offensive against Ukraine, Finnish PM Sanna Marin and her Swedish counterpart Magdalena Andersson said on Saturday. Marin added that discussions on Finland's possible alliance with NATO will take place in parliament. Notably, Sweden and Finland share close military ties, including conducting joint drills.",
            "postedAt": "05:27 pm 06 Mar",
            "sourceURL": "https://inshorts.com/en/read/",
            "readMore": "https://www.reuters.com/world/europe/sweden-finland-further-strengthen-security-cooperation-2022-03-05/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "
        },
        {
            "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/03_mar/6_sun/img_1646566318490_204.jpg?",
            "title": "Fantastic landmark: Sachin on Ashwin overtaking Kapil Dev's 434 Test wickets",
            "author": "Anant Kaur",
            "content": "Reacting to India spinner Ravichandran Ashwin overtaking Kapil Dev's record of 434 Test wickets and becoming India's second-highest wicket-taker in Test cricket, Sachin Tendulkar tweeted, \"Fantastic landmark.\" He added, \"To go past Kapil paaji is an achievement in itself. The way you were going, it was only a matter of time.\" The 35-year-old has taken 436 Test wickets so far.",
            "postedAt": "05:59 pm 06 Mar",
            "sourceURL": "https://inshorts.com/en/read/",
            "readMore": "https://twitter.com/sachin_rt/status/1500398919183847426?utm_campaign=fullarticle&utm_medium=referral&cxt=HHwWhMCq9cK3vtIpAAAA&utm_source=inshorts "
        },
        {
            "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/03_mar/6_sun/img_1646564901160_624.jpg?",
            "title": "Girls made us mighty proud: Uthappa on India's win vs Pak in Women's WC",
            "author": "Anant Kaur",
            "content": "CSK batter Robin Uthappa took to Twitter to praise India after their 107-run win against Pakistan at 2022 Women's World Cup in New Zealand. \"Girls made us mighty proud. Phenomenal all-round performance to register a thumping win!! What a start to the World Cup campaign!\" he wrote. Ex-India spinner Harbhajan Singh tweeted, \"What a massive win by the girls...congratulations...well done.\"",
            "postedAt": "05:43 pm 06 Mar",
            "sourceURL": "https://inshorts.com/en/read/",
            "readMore": "https://twitter.com/robbieuthappa/status/1500389623604072450?utm_campaign=fullarticle&utm_medium=referral&cxt=HHwWhMDSubmautIpAAAA&utm_source=inshorts "
        },
        {
            "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/03_mar/6_sun/img_1646565863482_904.jpg?",
            "title": "I didn't think it'll get over in 3 days: Rohit on Mohali Test win vs Sri Lanka",
            "author": "Ankur Taliyan",
            "content": "After India defeated Sri Lanka by an innings and 222 runs in the Mohali Test, captain Rohit Sharma said he didn't think the match will get over in three days. He added, \"It was a great game of cricket from our perspective. We ticked all the boxes we wanted to...A lot of performances, landmark Test match for Virat Kohli.\" ",
            "postedAt": "05:17 pm 06 Mar",
            "sourceURL": "https://inshorts.com/en/read/",
            "readMore": "https://www.bcci.tv/events/52/sri-lanka-tour-of-india-test-series-2022/match/422/1st-test?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "
        },
        {
            "image": "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/03_mar/6_sun/img_1646563415208_517.jpg?",
            "title": "S Korea to impose sanctions against Belarus over support to Russia",
            "author": "Atharva Pande",
            "content": "South Korean foreign ministry on Sunday said it will impose export controls against Belarus for \"effectively supporting Russian invasion of Ukraine\". The ministry did not mention the details of the sanctions but said they will be enforced in a similar manner as they were imposed against Russia last week. Reportedly, the sanctions will come into effect from Monday, March 7.",
            "postedAt": "06:26 pm 06 Mar",
            "sourceURL": "https://inshorts.com/en/read/",
            "readMore": "https://aninews.in/news/world/asia/s-korea-to-impose-sanctions-against-belarus-for-its-support-of-russias-invasion-of-ukraine20220306145349/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "
        }
    ],
    "news_offset": "87w7oet4-1"
}
```
## About Me

<a href="https://www.linkedin.com/in/het-delwadiya/" target="_blank">Het Delwadiya</a>
