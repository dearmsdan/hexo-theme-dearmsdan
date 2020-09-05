/**
 * Created by bin on(腾讯团队) 2017/2/10.
 * canvas粒子类动画组件
 * 17.2.20更新:兼容性更新,兼容到ie9.
 * 17.2.28更新:兼容性更新,兼容到ie6.
 * ie8以下,引用组件实例化对象的变量,不能用和组件对外接口相同的名字
 * 17.4.6更新:去掉for in,预防有些人在原型里面加东西.
 * 17.9.27更新,加入延时注入粒子效果,未更新到UI里面,添加一个参数:
 * 参数名:{初始多少个粒子,固定多少帧加入,一次注入多少个粒子
 * delayFill{initNumber:10,fixed:3,oneTimesNumber:2,}
 * 17.9.27更新,在粒子重新进入屏幕的参数为:reverseDirection(从出生点延伸到屏幕边缘的位置)的时候,支持一开始就是从这里进入屏幕.
 * reverseDirection:'replaceInitPosition';
 */

(function () {
    /*点类*/
    var point = function (param, canvas) {
        /***单个点构造函数***/
        var tempPoint, tempReIn, tempposition, tempRota;
        //点原形
        var tempPoint = {
            type: param.type,
            reIn: param.reIn,
            cacheImage: null, //离屏缓存,减少API消耗.
            color: param.color,
            x: null,
            y: null,
            reInX: null,
            reInY: null,
            rota: {},
            zoom: param.zoom.min + (param.zoom.max - param.zoom.min) * Math.random(),
            speed: param.speed.min + (param.speed.max - param.speed.min) * Math.random(),
            size: null,
            flowAngle: param.flowAngle,
            mouseAngle: null,
            opc: param.op.min + (param.op.max - param.op.min) * Math.random(),
            angle: param.angle.value + (param.angle.float * Math.random() - param.angle.float / 2),
            img: null//为了兼容IE8以下,引入的excanvas不支持离屏缓存,每次都要实例一个img对象.所以这里存放一个实例,只实例一次,也避免了闪烁.
        }
        //初始化size
        tempPoint.size = this.dealSize(param.type, param.size);

        //初始化旋转属性
        if (param.rota.value !== 0) {
            tempRota = this.dealRota(param.rota);
            tempPoint.rota['value'] = tempRota.value;
            tempPoint.rota['speed'] = tempRota.speed;
        }
        //生成初始坐标
        tempposition = this.createPosition(param.area);
        tempPoint.x = tempposition.x;
        tempPoint.y = tempposition.y;

        //计算重新进入画布的坐标
        tempReIn = this.reIn(canvas, tempPoint.reIn, tempPoint.angle, tempPoint.x, tempPoint.y, tempPoint.size, tempPoint.speed,param,tempPoint);
        tempPoint.reInX = tempReIn.x>>0;
        tempPoint.reInY = tempReIn.y>>0;


        /*生成离屏缓存*/
        tempPoint.cacheImage = this.drawPoint(tempPoint.type, tempPoint.size, tempPoint.opc, tempPoint.color, tempPoint.zoom);
        //离屏缓存会改变size大小,重新获取一次
        tempPoint.size = tempPoint.cacheImage.width;
        return tempPoint;
    };
    point.prototype = {
        /*绘制单点离屏缓存图像*/
        drawPoint: function (type, size, opc, color, zoom) {
            var cacheCanvas, cacheCtx;
            //创建离屏
            cacheCanvas = document.createElement('canvas');
            //为了兼容ie8,引入了excanvas.js,但是动态创建canvas需要手动实例化
            if (window.G_vmlCanvasManager !== undefined) {
                cacheCanvas = window.G_vmlCanvasManager.initElement(cacheCanvas);
            }
            cacheCtx = cacheCanvas.getContext('2d');
            switch (type.typeName) {
                case 'circle': {
                    //设置离屏缓存大小
                    cacheCanvas.width = size * 2;
                    cacheCanvas.height = size * 2;
                    //设置透明度,因为只操作这一个,不用保存和恢复画布
                    cacheCtx.globalAlpha = opc;
                    //设置颜色
                    cacheCtx.fillStyle = color;
                    //开始绘制
                    cacheCtx.beginPath();
                    cacheCtx.arc(size, size, size, 0, Math.PI * 2, true);
                    cacheCtx.closePath();
                    cacheCtx.fill();
                    break;
                }
                case 'image': {
                    cacheCanvas.width = size;
                    cacheCanvas.height = size;
                    cacheCtx.globalAlpha = opc;
                    var img = new Image();
                    img.src = type.url;
                    if (img.complete) {
                        cacheCtx.drawImage(img, 0, 0, size, size);
                    } else {
                        img.onload = function () {
                            cacheCtx.drawImage(img, 0, 0, size, size);
                        };
                        img.onerror = function () {
                            console.log(type.url + '加载失败，请重试');
                        };
                    }
                    break;
                }
                case 'shape': {
                    size = size * zoom;
                    cacheCanvas.width = size;
                    cacheCanvas.height = size;

                    cacheCtx.globalAlpha = opc;
                    cacheCtx.fillStyle = color;
                    cacheCtx.strokeStyle = color;
                    cacheCtx.lineWidth = type.lineWidth;

                    var tempVertexData;
                    tempVertexData = type.vertexData;
                    cacheCtx.scale(zoom, zoom);
                    cacheCtx.beginPath();
                    cacheCtx.moveTo(tempVertexData[0][0], tempVertexData[0][1]);
                    for (var j = tempVertexData.length, i = 1; i < j; ++i) {
                        cacheCtx.lineTo(tempVertexData[i][0], tempVertexData[i][1]);
                    }
                    cacheCtx.lineTo(tempVertexData[0][0], tempVertexData[0][1]);
                    cacheCtx.stroke();
                    cacheCtx.fill();
                    cacheCtx.closePath();

                }
                default: {
                    break;
                }
            }
            //绘制完成返回
            return cacheCanvas;
        }
        ,
        /*计算重新进入画布的位置*/
        reIn: function (canvas, way, angle, initX, initY, size, speed,param,tempPoint) {
            var rX, rY, tempX, tempY, radian, opAngle;
            switch (way) {
                /*根据角度去找点移出屏幕之后,重新进入屏幕的点.*/
                case 'reverseDirection': { //找到相反的方向
                    if (angle > 180) {
                        opAngle = angle - 180;
                    } else {
                        opAngle = angle - 180;
                    }
                    //相反方向对应的弧度
                    radian = opAngle / 180 * Math.PI;
                    //根据相反的方向弧度去计算重新进入屏幕时的坐标
                    for (var j = 1; j <= canvas.width; j += speed) {
                        tempX = initX + Math.cos(radian) * j;
                        tempY = initY + Math.sin(radian) * j;
                        if (angle > 270 && angle <= 360) {
                            if (tempX <= 0 || tempY >= canvas.height) {
                                tempX -= size;
                                tempY += size;
                                break;
                            }
                        } else if (angle > 180 && angle <= 270) {
                            if (tempX >= canvas.width || tempY >= canvas.height) {
                                tempX += size;
                                tempY += size;
                                break;
                            }
                        } else if (angle > 90 && angle <= 180) {
                            if (tempX >= canvas.width || tempY <= 0) {
                                tempX += size;
                                tempY -= size;
                                break;
                            }
                        } else {
                            if (tempX <= 0 || tempY <= 0) {
                                tempX -= size;
                                tempY -= size;
                                break;
                            }
                        }
                    }
                    rX = tempX;
                    rY = tempY;
                    if(param.reverseDirection === 'replaceInitPosition'){
                        tempPoint.x = tempX>>0;
                        tempPoint.y = tempY>>0;
                    }
                    break;
                }
                default: {
                    rX = initX;
                    rY = initY;
                    break;
                }
            }
            return {x: rX>>0, y: rY>>0};
        }
        ,
        /*随机生成初始点*/
        createPosition: function (area) {
            var x, y;
            x = Math.random() * (area.rightBottom[0] - area.leftTop[0]) + area.leftTop[0] >> 0;
            y = Math.random() * (area.rightBottom[1] - area.leftTop[1]) + area.leftTop[1] >> 0;
            return {x: x, y: y};
        },
        /*处理旋转信息*/
        dealRota: function (rota) {
            var value, speed;
            if (rota.floatValue)
                value = Math.random() * rota.floatValue - rota.floatValue / 2 + rota.value;
            if (rota.floatSpeed)
                speed = Math.random() * rota.floatSpeed - rota.floatSpeed / 2 + rota.speed;
            return {'value': value, 'speed': speed};
        },
        /*初始化size*/
        dealSize: function (tpye, size) {
            var tempSize;
            switch (tpye.typeName) {
                case 'shape': {
                    var temp, maxX, maxY;

                    temp = tpye.vertexData;
                    maxX = temp[0][0];
                    maxY = temp[0][1];

                    for (var i = temp.length - 1; i >= 0; --i) {
                        //找出最大X
                        if (temp[i][0] > maxX) {
                            maxX = temp[i][0];
                        }
                        //找出最大Y
                        if (temp[i][0] > maxY) {
                            maxY = temp[i][1];
                        }
                    }
                    //现在找出的最大的值作为正方形的高宽,还不能支持矩形,减少性能消耗,后期改进
                    if (maxX > maxY) {
                        tempSize = maxX;
                    } else {
                        tempSize = maxY;
                    }
                    break;
                }
                default: {
                    tempSize = size.min + (size.max - size.min) * Math.random();
                    break;
                }
            }
            return tempSize;
        }
    };
    /*组件类*/
    var particleCanvas = function (canvasId, paramArray) {
        /***组件构造函数***/
        /*获取canvas画布*/
        this.canvasE = document.getElementById(canvasId);
        this.ctx = this.canvasE.getContext('2d');
        //获取画布宽高
        this.canvasWidth = this.canvasE.width;
        this.canvasHeight = this.canvasE.height;
        particleCanvas.defaultParameter.area.rightBottom[0] = this.canvasWidth;
        particleCanvas.defaultParameter.area.rightBottom[1] = this.canvasHeight;

        /*格式化参数*/
        if (paramArray.length !== 0) { //获取列表参数
            var temp;
            //获取canvas的id
            this.canvasId = canvasId;
            //获取定义的点数组参数
            temp = [];
            for (var i = 0, j = paramArray.length; i < j; ++i) {
                temp.push(paramArray[i]);
            }
            //把传入的点相关参数和默认参数合并到最终使用的"使用参数"
            this.useParameter = this.formatParameter(temp);
        } else { //没有参数列表,报错跳出.
            console.log("没有找到组件实例化参数");
            return;
        }

        /*生成点数组,未加入绘制的粒子*/
        this.unDrawPoint = this.createpointGroup();
        //正在绘制的数组点
        this.pointGroup = [];

        //处理第一次注入绘制点
        this.dealInitFill();

        //获取开启了鼠标响应的点数组下标
        this.mouseArrayIndex = this.onMouse();
        /*绘制*/
        if (this.pointGroup.length > 0) {
            //通知绘制函数绘制
            this.draw(this);
        } else {
            console.log("没有可绘制的图像,检测number参数是否大于0");
        }
    };
    particleCanvas.prototype = {
        /*格式化参数*/
        formatParameter: function (data) {
            var temp, tempUseParameter, data;
            tempUseParameter = [];
            data = data || {};
            //把参数合并,没有填的参数使用默认参数
            for (var index = 0; index < data.length; ++index) {
                temp = {};
                for (var key in particleCanvas.defaultParameter) {
                    temp[key] = (data[index][key]) ? data[index][key] : particleCanvas.defaultParameter[key];
                }
                tempUseParameter.push(temp);
            }
            return tempUseParameter;
        },
        /*创建点数组*/
        createpointGroup: function () {
            var temp, tempArray, tempPoints;
            tempArray = []; //全部点数组的集合
            for (var index = 0; index < this.useParameter.length; ++index) {
                tempPoints = []; //某一组的点集合
                temp = this.useParameter[index];
                //根据这一组对应的number生成点
                for (var i = temp.number; i > 0; --i) {
                    tempPoints.push(new point(temp, this.canvasE));
                }
                tempArray.push(tempPoints);
            }
            return tempArray;
        },
        /*处理第一次批次注入*/
        dealInitFill:function () {
            for(var pi=0,pj=this.unDrawPoint.length;pi<pj;++pi){
                var index = pi,tempParameter=this.useParameter[pi];
                var fillNumber = (tempParameter['delayFill']=='undefined')? this.unDrawPoint[index].length : tempParameter.delayFill.initNumber;

                if(fillNumber === this.unDrawPoint[index].length){
                    this.pointGroup[index] = this.unDrawPoint[index];
                    continue;
                }
                this.pointGroup[index]=[];
                for(var i=0,j=fillNumber;i<j;++i){
                    //如果未绘制的数组里面没有粒子,跳出函数,不用再执行了
                    if(this.unDrawPoint[index].length<=0)return;

                    this.pointGroup[index].push(this.unDrawPoint[index].pop());
                }
            }
        },
        /*处理延时注入*/
        dealDelayFill : function (index,tempParameter) {
            var tpd = tempParameter.delayFill;
            //如果未绘制的数组里面没有粒子,跳出
            if(this.unDrawPoint[index].length<=0)return;
            //判断是否有帧数记录器了
            (typeof(tempParameter['nowFrame']) == 'undefined') && (tempParameter.nowFrame = 0);

            //判断是否到达了应该注入的帧数了
            if(tempParameter.nowFrame === tpd.fixed){
                //到了,根据数量加入

                this.pointGroup[index].push.apply(this.pointGroup[index],this.unDrawPoint[index].splice(0,tpd.oneTimesNumber));

                //复位
                tempParameter.nowFrame=0;
            }
            ++tempParameter.nowFrame;
        },
        /*更新图像点数据*/
        update: function () {
            var tempArray, tempPoint;
            if (this.mouseArrayIndex !== null) {
                for (var i = this.mouseArrayIndex.length - 1; i >= 0; --i) {
                    var tempPointGroup = this.pointGroup[this.mouseArrayIndex[i]];
                    for (var j = tempPointGroup.length - 1; j >= 0; --j) {
                        if (window.particleCanvasMouseAngle !== undefined) {
                            tempPointGroup[j].mouseAngle = window.particleCanvasMouseAngle;
                        }
                    }
                }
            }
            for (var index = 0; index < this.pointGroup.length; ++index) {
                tempArray = this.pointGroup[index];
                for (var i = tempArray.length - 1; i >= 0; --i) {
                    tempPoint = tempArray[i];
                    //更新位置信息
                    if (tempPoint.x < -tempPoint.size - tempPoint.speed - 10 ||
                        tempPoint.y < -tempPoint.size - tempPoint.speed - 10 ||
                        tempPoint.x > this.canvasWidth + tempPoint.size + tempPoint.speed + 10 ||
                        tempPoint.y > this.canvasHeight + tempPoint.size + tempPoint.speed + 10) {
                        //如果超出屏幕了,回到重进画布的位置
                        tempPoint.x = tempPoint.reInX;
                        tempPoint.y = tempPoint.reInY;
                    } else {
                        //没有超出屏幕,继续移动
                        tempPoint.x += Math.cos(tempPoint.angle / 180 * Math.PI) * tempPoint.speed;
                        tempPoint.y += Math.sin(tempPoint.angle / 180 * Math.PI) * tempPoint.speed;
                    }
                    //更新旋转信息
                    if (tempPoint.rota.value !== 0) {
                        tempPoint.rota.value += tempPoint.rota.speed;
                    } else if (tempPoint.flowAngle === 'on') {
                    }
                }
            }

        },
        /*绘制函数*/
        draw: function (data) {
            //如果启用了excanvas就使用低版本浏览器绘制函数
            if (window.G_vmlCanvasManager !== undefined) {
                this.draw = this.drawLow;
            } else {
                this.draw = this.drawHigh;
            }
            this.draw(data);
        },
        /*高版本浏览器绘制函数*/
        drawHigh: function (data) {
            //这里把原对象作为data传递进来,解决requestAnimationFrame执行函数时,this指向了window
            var temp, tempArray, tempSize, tempParameter;
            //清理画布
            this.canvasE.width = this.canvasE.width;

            //循环绘制
            for (var index = 0; index < this.pointGroup.length; ++index) {
                //处理延迟注入
                tempParameter = this.useParameter[index];
                tempParameter['delayFill'] && this.dealDelayFill(index,tempParameter);

                //拿到这个组的批次
                tempArray = this.pointGroup[index];
                for (var i = tempArray.length - 1; i >= 0; --i) {
                    temp = tempArray[i];
                    //如果开启了鼠标响应,把鼠标的角度传递给现在的角度
                    if (temp.mouseAngle !== null) {
                        temp.angle = temp.mouseAngle;
                    }
                    //如果没有旋转
                    if (temp.rota.speed === 0) {
                        this.ctx.drawImage(temp.cacheImage, temp.x - temp.size, temp.y - temp.size);
                    }
                    //如果有角度跟随
                    else if (temp.flowAngle == 'on') {
                        this.ctx.save();
                        tempSize = temp.size / 2;
                        this.ctx.translate(temp.x + tempSize, temp.y + tempSize);
                        this.ctx.rotate(temp.angle * Math.PI / 180);
                        this.ctx.translate(-temp.x - tempSize, -temp.y - tempSize);
                        this.ctx.drawImage(temp.cacheImage, temp.x, temp.y);
                        this.ctx.restore();
                    }
                    else {
                        this.ctx.save();
                        tempSize = temp.size / 2;
                        this.ctx.translate(temp.x + tempSize, temp.y + tempSize);
                        this.ctx.rotate(temp.rota.value * Math.PI / 180);
                        this.ctx.translate(-temp.x - tempSize, -temp.y - tempSize);
                        this.ctx.drawImage(temp.cacheImage, temp.x, temp.y);
                        this.ctx.restore();
                    }
                }
            }
            //绘制完成,更新数据
            this.update();
            //设置下一次绘制
            rAF(function () {
                data.draw(data);
            });
        },
        /*ie8及以下版本绘制函数*/
        drawLow: function (data) {
            var ctx, temp, size;
            ctx = this.ctx;
            this.canvasE.width = this.canvasE.width;
            for (var index = 0; index < this.pointGroup; ++index) {
                for (var j = this.pointGroup[index].length, i = 0; i < j; ++i) {
                    temp = this.pointGroup[index][i];
                    switch (temp.type.typeName) {
                        case 'circle': {
                            //设置透明度,因为只操作这一个,不用保存和恢复画布
                            ctx.globalAlpha = temp.opc;
                            //设置颜色
                            ctx.fillStyle = temp.color;
                            //开始绘制
                            ctx.beginPath();
                            ctx.arc(temp.x, temp.y, temp.size, 0, Math.PI * 2, true);
                            ctx.closePath();
                            ctx.fill();
                            break;
                        }
                        case 'image': {
                            //如果已经存在img对象,不用再实例
                            if (temp.img === null) {
                                var img = new Image();
                                img.src = temp.type.url;
                            }
                            ctx.drawImage(img, temp.x, temp.y, temp.size, temp.size);
                            break;
                        }
                        case 'shape': {
                            size = temp.size * temp.zoom;

                            ctx.globalAlpha = temp.opc;
                            ctx.fillStyle = temp.color;
                            ctx.strokeStyle = temp.color;
                            ctx.lineWidth = temp.type.lineWidth;

                            var tempVertexData;
                            tempVertexData = temp.type.vertexData;
                            ctx.save();
                            ctx.scale(temp.zoom, temp.zoom);
                            ctx.beginPath();
                            ctx.moveTo(temp.x + tempVertexData[0][0], temp.y + tempVertexData[0][1]);
                            for (var j = tempVertexData.length, i = 1; i < j; ++i) {
                                ctx.lineTo(temp.x + tempVertexData[i][0], temp.y + tempVertexData[i][1]);
                            }
                            ctx.lineTo(temp.x + tempVertexData[0][0], temp.y + tempVertexData[0][1]);
                            ctx.stroke();
                            ctx.fill();
                            ctx.closePath();
                            ctx.restore();
                        }
                        default: {
                            break;
                        }
                    }
                }
            }
            this.update();
            //设置下一次绘制
            rAF(function () {
                data.draw(data);
            });
        },
        onMouse: function () {
            var temp = [];//开启角度移动的组
            for (var i = this.useParameter.length - 1; i >= 0; --i) {
                if (this.useParameter[i].respondMouse === 'on') {
                    temp.push(i);
                }
            }
            //没有组开启鼠标响应,退出
            if (temp.length == 0) {
                return null;
            }
            else {//如果有,添加鼠标移动事件
                document.getElementById(this.canvasId).onmousemove = function () {
                    deal_mouse(event, 1000, 600);
                }
                return temp;
            }
        }
    };
    var deal_mouse = function (event, width, height) {
        var event = event || window.event;
        //阻止其他相同事件,IE10以下不支持则不阻止
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        //获取鼠标垫,兼容IE10以下不支持pageX/Y
        var touches = event.touches ? event.touches[0] : event;
        var x = (touches.pageX) ? touches.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        var y = (touches.pageY) ? touches.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

        //计算鼠标点与canvas中心点的角度
        var dx = x - width / 2,
            dy = y - height / 2,
            dd = Math.sqrt(dx * dx + dy * dy),
            acos = Math.acos(dx / dd);
        //因为acos接收的参数是-1~1.所以求出来的弧度也是在0-PI,不适合当前0-2PI(360度)的设定.所以需要早度数超过180的时候,也就是dy<0的时候,取180度的对角.
        if (dy >= 0) {
            window.particleCanvasMouseAngle = acos * 180 / Math.PI >> 0;
        } else {
            window.particleCanvasMouseAngle = 180 - (acos * 180 / Math.PI) + 180 >> 0;
        }
    }
    /*默认参数*/
    particleCanvas.defaultParameter = {
        area: {
            leftTop: [0, 0],
            rightBottom: [null, null]
        },
        number: 50, //点数量
        type: {
            typeName: 'circle'
        },
        rota: {
            value: 0,
            speed: 0,
            floatValue: 100,
            floatSpeed: .1
        },
        zoom: {
            min: 1,
            max: 1
        },
        reIn: 'reverseDirection',
        color: "#FF4040", //点颜色,支持16进制/RGB/RGBA
        size: { //点大小
            min: 2,
            max: 2
        },
        speed: { //移动速度
            min: 4,
            max: 4
        },
        angle: { //移动角度
            value: 30,
            float: 0
        },
        op: {
            min: 1,
            max: 1
        },
        reverseDirection:null,//'replaceInitPosition',
        respondMouse: 'off',
        flowAngle: 'off', //on
        delayFill:'undefined'
    };
    /*对外接口*/
    window.particleCanvas = particleCanvas;
    /*设置requestAnimationFrame兼容性*/
    window.rAF = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    /*兼容ie8以下支持canvas*/
    (function () {
        if (!document.createElement('canvas').getContext) {
            //创建canvas标签,以便IE8及下浏览器识别
            document.createElement('canvas');
            //把excanvas加入到head区域
            var sci_excanvas = document.createElement('script');
            sci_excanvas.src = 'js/excanvas.js';
            document.getElementsByTagName('head')[0].appendChild(sci_excanvas);
        }
    })();
})(window);