const request = require('postman-request');

const getNews = (callback)=>{
  
    const URL = 'https://newsapi.org/v2/top-headlines?language=en&sortBy=publishedAt&apiKey=af00c7eef7c74c9c9300434acb5e9159'

    request({url: URL, json: true}, (error, response, body)=>{
        callback(undefined, {
            body
        })
        

    })
}

module.exports = {getNews}