
module.exports = function (hexo) {
    const config = require('../../../dearmsdan');
    // 分割
    var discard = config.text.discard;
    var overline = config.text.overline;
    var underline = config.text.underline;
    var mark = config.text.mark;
    var small = config.text.small;
    var smalls = config.text.smalls;
    var b = config.text.b;
    var em = config.text.em;
    var sup = config.text.sup;
    var sub = config.text.sub;
    var sups = config.text.sups;
    var hi = config.text.hi;
    // 处理 placeholder 字符串
    var repl = new RegExp(config.RegExp, 'g');
    // /([*.?+\-$^(){}|\\/])/g
    discard = discard.replace(repl, '\\$1');
    overline = overline.replace(repl, '\\$1');
    underline = underline.replace(repl, '\\$1');
    mark = mark.replace(repl, '\\$1');
    small = small.replace(repl, '\\$1');
    smalls = smalls.replace(repl, '\\$1');
    b = b.replace(repl, '\\$1');
    em = em.replace(repl, '\\$1');
    sup = sup.replace(repl, '\\$1');
    sub = sub.replace(repl, '\\$1');
    sups = sups.replace(repl, '\\$1');
    hi = hi.replace(repl, '\\$1');
    // RegExp
    var reg1 = new RegExp(discard + '(?!\!```\!)(.*?)' + discard, 'g');
    var reg2 = new RegExp(overline + '(?!\!```\!)(.*?)' + overline, 'g');
    var reg3 = new RegExp(underline + '(?!\!```\!)(.*?)' + underline, 'g');
    var reg4 = new RegExp(mark + '(?!\!```\!)(.*?)' + mark, 'g');
    var reg5 = new RegExp(small + '(?!\!```\!)(.*?)' + small, 'g');
    var reg6 = new RegExp(smalls + '(?!\!```\!)(.*?)' + smalls, 'g');
    var reg7 = new RegExp(b + '(?!\!```\!)(.*?)' + b, 'g');
    var reg8 = new RegExp(em + '(?!\!```\!)(.*?)' + em, 'g');
    var reg9 = new RegExp(sup + '(?!\!```\!)(.*?)' + sup, 'g');
    var reg10 = new RegExp(sub + '(?!\!```\!)(.*?)' + sub, 'g');
    var reg11 = new RegExp(sups + '(?!\!```\!)(.*?)' + sups, 'g');
    var reg12 = new RegExp(hi + '(?!\!```\!)(.*?)' + hi, 'g');
    
    function parse(data) {
        var source = data.source;
        var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
    
        if (ext !== '.md') {
          return;
        }

        data.content = data.content.replace(reg1, function (raw, content) {
          return '<s>' + content + '</s>';
        });
        data.content = data.content.replace(reg2, function (raw, content) {
          return '<u>' + content + '</u>';
        });
        data.content = data.content.replace(reg3, function (raw, content) {
          return '<ins>' + content + '</ins>';
        });
        data.content = data.content.replace(reg4, function (raw, content) {
          return '<mark>' + content + '</mark>';
        });
        data.content = data.content.replace(reg5, function (raw, content) {
          return '<small>' + content + '</small>';
        });
        data.content = data.content.replace(reg6, function (raw, content) {
          return '<span><small>' + content + '</small></span>';
        });
        data.content = data.content.replace(reg7, function (raw, content) {
          return '<b>' + content + '</b>';
        });
        data.content = data.content.replace(reg8, function (raw, content) {
          return '<em>' + content + '</em>';
        });
        data.content = data.content.replace(reg9, function (raw, content) {
          return '<sup>' + content + '</sup>';
        });
        data.content = data.content.replace(reg10, function (raw, content) {
          return '<sub>' + content + '</sub>';
        });
        data.content = data.content.replace(reg11, function (raw, content) {
          return '<span class="article-flag-sup">' + content + '</span>';
        });
        data.content = data.content.replace(reg12, function (raw, content) {
          return '<span class="stress">' + content + '</span>';
        });

    }
    hexo.extend.filter.register('before_post_render', parse, 9);
}