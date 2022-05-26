module.exports = function (hexo) {
    const config = require('../../../dearmsdan');
    // 分割
    var placeholder1 = config.list.details.this;
    var placeholder2 = config.list.details.summary;
    // 处理 placeholder 字符串
    var repl = new RegExp(config.RegExp, 'g');
    // /([*.?+\-$^(){}|\\/])/g
    placeholder1 = placeholder1.replace(repl, '\\$1');
    placeholder2 = placeholder2.replace(repl, '\\$1');
    // 匹配details正则表达式
    var reg1 = new RegExp('\n'+placeholder1 + '([.\\s\\S\n\r]*?)' + placeholder1, 'g');
    var reg2 = new RegExp('\n'+placeholder2 + '([.\\s\\S\n\r]*?)' + placeholder2, 'g');
    
    function parse(data) {
      var source = data.source;
      var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
  
      if (ext !== '.md') {
        return;
      }
  
      // 29^th^ => 29<sup>th</sup>
      data.content = data.content.replace(reg1/* /Sea\-sup([.\s\S\n\r]*?)Sea\-sup/g */, function (raw1, content) {
        content = content.replace(reg2/* /Sea\-([.\s\S\n\r]*?)Sea\-/g */, function (raw2, cent) {
          return '<summary>' + cent + '</summary>';
        });
        return '<details>' + content + '</details>';
      });
    }
  
    hexo.extend.filter.register('before_post_render', parse, 9);
  }