module.exports = {
  // 匹配正则表达式，格式化特殊符号 (格式化以下)
  RegExp: '([*.?\\+\\-\\$\\^\\(\\)\\{\\}|\\/])' 
  ,demo: 'Sea-sup'
  ,text: {
    discard: '``s``'
    ,overline: '``u``'
    ,underline: '``i``'
    ,mark: '``m``'
    ,small: '``small``'
    ,smalls: '``smalls``'
    ,b: '``b``'
    ,em: '``em``'
    ,sup: '``sup``'
    ,sub: '``sub``'
    ,sups: '``sups``'
    ,hi: '``hi``'
  }
  ,list: {
    details: {this: '```d```',summary: '```title```'}
  }
  ,block: {
    blockquote: {
      this: '```bq```'
      ,footer: '```f```'
      ,author: '``a``'
      ,'block-align': {
        initial: 'bc``'
        ,left: 'bl``'
        ,right: 'br``'
      }
      ,'text-align': {
        center: 'tc``'
        ,right: 'tr``'
      }
    }
    ,tagging: {
      this: '```>```'
      ,info: '```>>```'
      ,warning: '```>>>```'
      ,bug: '```!```'
    }
  }
}
// 提供以下匹配
  // !```!  匹配忽略 