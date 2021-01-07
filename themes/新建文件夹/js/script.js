/*
 * @Author: your name
 * @Date: 2020-12-05 11:46:03
 * @LastEditTime: 2021-01-06 08:11:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹\js\script.js
 */
$(document).ready(function () {

  // Color Picker Tool Js
  const themeSwitchers = document.querySelectorAll('span');
 // const dynamicInputs = document.querySelectorAll('input.input-color-picker');
	

    // 缓存
    var bg = Cookies.get('bg');
    var colorC = Cookies.get('color');

    console.log('cookie:',bg,colorC);
  
  
  const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
      root.style.setProperty(key, cssVars[key]);
    });
  }


  if(!(bg == undefined && colorC == undefined)){
    handleThemeUpdate({
      '--primary-bg-color': bg,
      '--primary-color': colorC
    });
  
      $("input.input-color-picker[data-id='color']").val(colorC)
      $("input.input-color-picker[data-id='bg-color']").val(bg)
      $("nav").css('background',bg)
      
  
  }




  
  
  themeSwitchers.forEach((item) => {
    item.addEventListener('click', (e) => {
      const bgColor = e.target.getAttribute('data-bg-color')
      const color = e.target.getAttribute('data-color')
      handleThemeUpdate({
        '--primary-bg-color': bgColor,
        '--primary-color': color
      });
      
      
      $("input.input-color-picker[data-id='color']").val(color)
      $("input.input-color-picker[data-id='bg-color']").val(bgColor)
      $("nav").css('background',bgColor)
      _setColor(bgColor,color)


    });

    
  });
  /* 
  dynamicInputs.forEach((item) => {
    item.addEventListener('input', (e) => {
      const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
      console.log(cssPropName)
      handleThemeUpdate({
        [cssPropName]: e.target.value
      });
    });
  }); */
  

  function _setColor(bg,c) {
    var expires=new Date();
      expires.setTime(expires.getTime()+24*60*60*365*1000);
      var flag="bg="+bg;
      document.cookie=flag+";expires="+expires.toGMTString();
    
    var flags="color="+c;
      document.cookie=flags+";path=/;expires="+expires.toGMTString();

      
    
  }
  
});
