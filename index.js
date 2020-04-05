/* global hexo */

'use strict';

if (hexo.config.plugins.tj51la === true) {
  // when archive disabled pagination, per_page should be 0.
  let comId;
  let startDate;

  if (typeof hexo.config.statistic30days.comId === 'undefined') {
    comId = '20718523';
  } else {
    comId = hexo.config.statistic30days.comId;
  }
  if (typeof hexo.config.statistic30days.startDate === 'undefined') {
    startDate = '2020-01-01';
  } else {
    startDate = hexo.config.statistic30days.startDate;
  }


  hexo.config.statistic30days = Object.assign({
    comId: comId,
    startDate: startDate
  }, hexo.config.statistic30days);

  hexo.extend.generator.register('statistic30days', function(locals){
    return {
      path: 'statistic30days/index.html',
      data: locals.posts,
      layout: ['post']
    }
  });
}


