const logger = require('hexo-log')();

Function.prototype.getMultiLine = function () {
		var lines = new String(this);
		lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
		return lines;
}
var str = function () {
/*
=====================================================================
     _                                         _               
    | | It gives people a sense of emptiness  | |              
  __| |  ___   __ _  _ __  _ __ ___   ___   __| |  __ _  _ __  
 / _` | / _ \ / _` || '__|| '_ ` _ \ / __| / _` | / _` || '_ \ 
| (_| ||  __/| (_| || |   | | | | | |\__ \| (_| || (_| || | | |
 \__,_| \___| \__,_||_|   |_| |_| |_||___/ \__,_| \__,_||_| |_|
                                                               
 :) welcoming you to...
 hexo-theme-dearmsdan (https://github.com/ZHD99/hexo-theme-dearmsdan)
                       
=====================================================================
*/
}
logger.info(str.getMultiLine());
