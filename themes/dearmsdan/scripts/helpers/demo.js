module.exports = function (hexo) {
  const config = require('../../dearmsdan');
  // 分割
  var placeholder = config.demo
    .split('')
    .map(function (char) {
      return '\\' + char;
    })
    .join('');

  var reg = new RegExp(placeholder + '(.*?)' + placeholder, 'g');

  function parse(data) {
    var source = data.source;
    var ext = source.substring(source.lastIndexOf('.')).toLowerCase();

    if (ext !== '.md') {
      return;
    }

    // 29^th^ => 29<sup>th</sup>
    data.content = data.content.replace(reg, function (raw, content) {
      return '<span class="article-flag-sup">' + content + '</span>';
    });
  }

  hexo.extend.filter.register('before_post_render', parse, 9);
}