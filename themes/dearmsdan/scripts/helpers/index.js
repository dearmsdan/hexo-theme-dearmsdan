
// 辅助标签 - 角标
//require('./demo')(hexo);
module.exports = function(hexo) {
// 块
    // 引用
    require('./block/blockquote')(hexo);
    // 标记
    require('./block/tagging')(hexo);
// 文本元素
    require('./text/element')(hexo);
// 列表元素
    // 描述 
    require('./list/details')(hexo);
// 匹配忽略
    require('./ignore')(hexo);
}