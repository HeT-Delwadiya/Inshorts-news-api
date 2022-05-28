const cheerio = require("cheerio");
const fetch = require('node-fetch');
var _ = require('lodash');

const getNews = (options, callback) => {

	var isDone = false;

	const URL = `https://inshorts.com/${options.lang}/read/${options.category}`;

	return fetch(URL)
	.then(response => response.text())
	.then(body=>{

		const posts = [];
		const $ = cheerio.load(body);
              const scriptData = $('script').last().html();
              const id = scriptData.match(/var min_news_id = (.*);/);
              const newsOffsetId = _.split(id[1], '\"', 3);
              const news_offset = newsOffsetId[1];
              
		$('.news-card').each((i, element)=>{
			const $element = $(element);

			const title = $element.find('div.news-card-title a.clickable span').text();

                     const image = $element.find('.news-card-image').attr('style').match(/'(.*)'/)[1];

			const author = $element.find('div.news-card-title div.news-card-author-time span.author').text();

			const time = $element.find('div.news-card-title div.news-card-author-time span.time').text();

			const date = $element.find('div.news-card-author-time span.date').text();

			const createdAt = `${time} on ${date}`;

			let content = $element.find('div.news-card-content div').text();
			content = content.substring(0, content.indexOf('\n'));

                     const readMore = $element.find('div.read-more a.source').attr('href');

			const postData = {
                            image: image,
				title: title,
				author: author,
				content: content,
				postedAt: createdAt,
				sourceURL: URL,
                            readMore: readMore==undefined ? "" : readMore
			}
			posts.push(postData);

		});
		if(!isDone){
			callback(posts, news_offset);
		}
		if(posts.length<1){
			callback({
				error: 'No data found!'
			});
		}
	})
	.catch(err=>{
		callback(err);
	})
};

module.exports.getNews = getNews;


const getMoreNews = (options, callback) => {

	var isDone = false;

	const URL = `https://www.inshorts.com/${options.lang}/ajax/more_news`;

       var details = {
              'category': options.category,
              'news_offset': options.news_offset
       };

       var formBody = [];
       for (var property in details) {
              var encodedKey = encodeURIComponent(property);
              var encodedValue = encodeURIComponent(details[property]);
              formBody.push(encodedKey + "=" + encodedValue);
       }
       formBody = formBody.join("&");

	return fetch(URL, {
                            method: 'POST',
                            headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                     },
                     body: formBody
              })
	.then(response => response.json())
	.then(data=>{
              
		const posts = [];
		const $ = cheerio.load(data.html);
              const news_offset = data.min_news_id;
              
		$('.news-card').each((i, element)=>{
			const $element = $(element);

			const title = $element.find('div.news-card-title a.clickable span').text();

                     const image = $element.find('.news-card-image').attr('style').match(/'(.*)'/)[1];

			const author = $element.find('div.news-card-title div.news-card-author-time span.author').text();

			const time = $element.find('div.news-card-title div.news-card-author-time span.time').text();

			const date = $element.find('div.news-card-author-time span.date').text();

			const createdAt = `${time} on ${date}`;

			let content = $element.find('div.news-card-content div').text();
			content = content.substring(0, content.indexOf('\n'));

                     const readMore = $element.find('div.read-more a.source').attr('href');

			const postData = {
                            image: image,
				title: title,
				author: author,
				content: content,
				postedAt: createdAt,
				sourceURL: URL,
                            readMore: readMore==undefined ? "" : readMore
			}
			posts.push(postData);
		});
		if(!isDone){
			callback(posts, news_offset);
		}
		if(posts.length<1){
			callback({
				error: 'No data found!'
			});
		}
	})
	.catch(err=>{
		callback(err);
	})
};

module.exports.getMoreNews = getMoreNews;