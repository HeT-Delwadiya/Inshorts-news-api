const _ = require('lodash');
const { getGeneralNews } = require("./getGeneralNews");
const { getNewsByCategory } = require("./getNewsByCategory");

const getNews = async (options) => {
	let newsData;
	try {
		if (_.isEmpty(options.category)) {
			newsData = await getGeneralNews(options.language, options.news_offset);
		} else {
			newsData = await getNewsByCategory(options.language, options.category, options.news_offset);
		}
	} catch (error) {
		newsData = { error }
	}

	return newsData;
}

module.exports.getNews = getNews;