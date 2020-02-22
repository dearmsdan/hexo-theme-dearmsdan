function x(){
	
			debugger;console.log('请勿非法调试,有问题请联系Email: dearmsdan@outlook.com');
}
		(function noDebuger(){
    function testDebuger(){
 				/*你们听说了吗？ 有个人想偷窥代码 （○｀ 3′○）*/
        var d=new Date();
 		/*谁, 究竟是谁 ˋ︿ˊ*/
        x();
        if(new Date()-d>10){
 				/*还能有谁呀  <(￣︶￣)/ */
            return true;
				    /* 不...不 我是无辜(〒▽〒) 的*/
        }
        return false;
		/*不是我干的 Σ(°△°||)︴*/
    }
 
    function start(){
        while(testDebuger()){
            testDebuger();
			/*消灭偷窥者动感光波！！！( ￣O￣)ノノ……∞∞OOO ) ) )  */
        }
    }
    if(!testDebuger()) {
        window.onblur = function(){
            setTimeout(function(){
                start();
            },500)
        }
    }
    else{
        start();
    }
 
})();