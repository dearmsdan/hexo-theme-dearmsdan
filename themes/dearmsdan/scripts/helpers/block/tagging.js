
module.exports = function(hexo) {
    const config = require('../../../dearmsdan');
    var she = config.block.tagging.this;
    var info = config.block.tagging.info;
    var warning = config.block.tagging.warning;
    var bug = config.block.tagging.bug;
    // 处理 placeholder 字符串
    var repl = new RegExp(config.RegExp, 'g');
    // /([*.?+\-$^(){}|\\/])/g
    she = she.replace(repl, '\\$1');
    info = info.replace(repl, '\\$1');
    warning = warning.replace(repl, '\\$1');
    bug = bug.replace(repl, '\\$1');
    // RegExp
    var reg1 = new RegExp('\n'+ she + '([.\\s\\S\n\r]*?)' + she, 'g');
    var reg2 = new RegExp('\n'+ info + '([.\\s\\S\n\r]*?)' + info, 'g');
    var reg3 = new RegExp('\n'+ warning + '([.\\s\\S\n\r]*?)' + warning, 'g');
    var reg4 = new RegExp('\n'+ bug + '([.\\s\\S\n\r]*?)' + bug, 'g');

    function parse(data) {
        var source = data.source;
        var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
    
        if (ext !== '.md') {
          return;
        }

        data.content = data.content.replace(reg1, function (raw, content) {
          return '<div class="tagging">' + content + '</div>';
        });
        data.content = data.content.replace(reg2, function (raw, content) {
          return '<div class="tagging info">' + content + '</div>';
        });
        data.content = data.content.replace(reg3, function (raw, content) {
          return '<div class="tagging warning">' + content + '</div>';
        });
        data.content = data.content.replace(reg4, function (raw, content) {
          return '<div class="tagging bug">' + content + '</div>';
        });
    }
  
    hexo.extend.filter.register('before_post_render', parse, 9);
    
}