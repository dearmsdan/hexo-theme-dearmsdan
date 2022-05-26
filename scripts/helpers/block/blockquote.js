module.exports = function (hexo) {
    const config = require('../../../dearmsdan');
    // 分割
    var she = config.block.blockquote.this;
    var footer = config.block.blockquote.footer;
    var author = config.block.blockquote.author;
    // block-align
    var b_left = config.block.blockquote['block-align'].left;
    var b_right = config.block.blockquote['block-align'].right;
    var b_initial = config.block.blockquote['block-align'].initial;
    // text-align
    var t_center = config.block.blockquote['text-align'].center;
    var t_right = config.block.blockquote['text-align'].right;
    // 处理 placeholder 字符串
    var repl = new RegExp(config.RegExp, 'g');
    // /([*.?+\-$^(){}|\\/])/g
    she = she.replace(repl, '\\$1');
    b_initial = b_initial.replace(repl, '\\$1');
    b_left = b_left.replace(repl, '\\$1');
    b_right = b_right.replace(repl, '\\$1');
    t_center = t_center.replace(repl, '\\$1');
    t_right = t_right.replace(repl, '\\$1');
    footer = footer.replace(repl, '\\$1');
    author = author.replace(repl, '\\$1');

    var reg1 = new RegExp('\n'+ she +'([.\\s\\S\n\r]*?)'+ she ,'g');
    var reg2 = new RegExp(footer +'([.\\s\\S\n\r]*?)'+ footer ,'g');
    var reg3 = new RegExp(author +'([.\\\s\\S\n\r]*?)'+ author ,'g');
    
    function parse(data) {
      var source = data.source;
      var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
  
      if (ext !== '.md') {
        return;
      }
      
      data.content = data.content.replace(reg1, function (raw1, content) {

        content = content.replace(reg2/* /```f```([.\s\S\n\r]*?)```f```/g */, function (raw2, cent) {
          cent = cent.replace(reg3/* /``a``([.\s\S\n\r]*?)``a``/g */, function (raw2, cen) {
            return '<cite>' + cen + '</cite>';
          });
          return '<code>' + cent + '</code>';
        });
        
        var sum = "";
        content = content.replace(b_left, function (raw2, cent) {
          sum = sum + " left";
          return '';
        });
        content = content.replace(b_right, function (raw2, cent) {
          sum = sum + " right";
          return '';
        });
        content = content.replace(b_initial, function (raw2, cent) {
          sum = sum + " initial";
          return '';
        });
        content = content.replace(t_center, function (raw2, cent) {
          sum = sum + " blockquote-center";
          return '';
        });
        content = content.replace(t_right, function (raw2, cent) {
          sum = sum + " blockquote-right";
          return '';
        });

        return '<blockquote class="'+sum+'">' + content + '</blockquote>';
      }); 





    } // register
  
    hexo.extend.filter.register('before_post_render', parse, 9);
  }