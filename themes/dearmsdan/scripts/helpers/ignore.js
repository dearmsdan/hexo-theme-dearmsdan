
module.exports = function(hexo) {
    const config = require('../../dearmsdan');

    function parse(data) {
        var source = data.source;
        var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
    
        if (ext !== '.md') {
          return;
        }
        
        // !``` demo  ````!  匹配忽略
        data.content = data.content.replace(/\!```\!/g, function (raw1, content) {
          return '';
        }); 
    }
  
    hexo.extend.filter.register('before_post_render', parse, 9);
}