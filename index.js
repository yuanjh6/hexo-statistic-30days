/* global hexo */

hexo.extend.generator.register('statistic30days', function(locals){
return {
  path: 'statistic30days/index.html',
  data: locals.posts,
  layout: ['post']
}
});
