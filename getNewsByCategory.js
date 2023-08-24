const _ = require("lodash");
const fetch = require("node-fetch");

const getNewsByCategory = async (lang, category, news_offset) => {
    let pageNumber = news_offset ?? 1;
    try {
        const response = await fetch(
            `https://inshorts.com/api/${lang}/search/trending_topics/${category}?page=${pageNumber}&type=NEWS_CATEGORY`
        )
        const responseData = await response.json();
        return {
            news: responseData?.data?.news_list ?? [],
            news_offset: pageNumber + 1,
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports.getNewsByCategory = getNewsByCategory;