const _ = require("lodash");
const fetch = require('node-fetch');

const getGeneralNews = async (lang, news_offset) => {
    if (_.isEmpty(news_offset)) {
        try {
            const response = await fetch(`https://inshorts.com/api/${lang}/news?category=top_stories&max_limit=10&include_card_data=true`);
            const responseData = await response.json();
            return {
                news: responseData?.data?.news_list ?? [],
                news_offset: responseData?.data?.min_news_id
            }
        } catch (error) {
            console.log("Error while getting first page of general news", error);
            throw new Error(error);
        }
    } else {
        try {
            const response = await fetch(`https://inshorts.com/api/${lang}/news?category=top_stories&max_limit=10&include_card_data=true&news_offset=${news_offset}`);
            const responseData = await response.json();
            return {
                news: responseData?.data?.news_list ?? [],
                news_offset: responseData?.data?.min_news_id
            }
        } catch (error) {
            console.log(`Error while getting general news with offset: ${news_offset}`, error);
            throw new Error(error);
        }
    }
}

module.exports.getGeneralNews = getGeneralNews;