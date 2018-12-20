'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};
  console.log(appInfo.baseDir);
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543830459630_4741';

  // add your config here
  config.middleware = [];

  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.invite = {
    serverUrl: 'http://10.43.1.103:19988/api-gateway/redPack/top10',
  };

  config.view = {
    cache: false,
    mapping: {
      '.nj': 'nunjucks',
    },
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
  };

  return config;
};
