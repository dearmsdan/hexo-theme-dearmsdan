var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jquery_jplayer_N",
    cssSelectorAncestor: "#jp_container_N"
},[{
    title: "东京不太热",
    artist: "封茗囧菌",
    mp3: "http://music.163.com/song/media/outer/url?id=34723470.mp3",
    poster: "http://p1.music.126.net/srjmIxgdjRlCXSjZtl2aaw==/109951163825045428.jpg?param=90y90"
},{
    title: "安娜的橱窗",
    artist: "封茗囧菌",
    mp3: "http://music.163.com/song/media/outer/url?id=537470060.mp3",
    poster: "http://p2.music.126.net/BJXxnpN2uKXUBxC7YvF7Cw==/109951163142278400.jpg?param=130y130"
},{
    title: "空山新雨后",
    artist: "冷十三",
    mp3: "http://music.163.com/song/media/outer/url?id=1397565121.mp3",
    poster: "http://p1.music.126.net/jio03zzjVqkuofI0054Syg==/109951164433163481.jpg?param=177y177"
},{
    title: "拜拜",
    artist: "小竖琴",
    mp3: "http://music.163.com/song/media/outer/url?id=1383594415.mp3",
    poster: "http://p1.music.126.net/aRpHnChT3GFQI7AsqCw6iA==/109951164284919406.jpg?param=130y130"
},{
    title: "冬眠",
    artist: "司南",
    mp3: "http://music.163.com/song/media/outer/url?id=1398663411.mp3",
    poster: "http://p1.music.126.net/4KDBaQXnQywQovmqvjx-8Q==/109951164444131697.jpg?param=130y130"
},{
    title: "我的名字",
    artist: "焦迈奇",
    mp3: "http://music.163.com/song/media/outer/url?id=554241732.mp3",
    poster: "http://p1.music.126.net/a_rb8pgC5R_hO-lfm7acSw==/109951164019567772.jpg?param=130y130"
},{
    title: "还是分开",
    artist: "张叶蕾",
    mp3: "http://music.163.com/song/media/outer/url?id=465921195.mp3",
    poster: "http://p1.music.126.net/tH5FdakJX47uy8mlM0GMWQ==/19218363741925314.jpg?param=130y130"
},{
    title: "云烟成雨",
    artist: "房东的猫",
    mp3: "http://music.163.com/song/media/outer/url?id=513360721.mp3",
    poster: "http://p1.music.126.net/DSTg1dR7yKsyGq4IK3NL8A==/109951163046050093.jpg?param=130y130"
},],{
    playlistOptions: {
        enableRemoveControls: true
    },
    swfPath: "js/",
    supplied: "webmv, ogv, m4v, oga, mp3",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: true
});
var latest = [{
    title: "默",
    artist: "那英",
    mp3: "http://music.163.com/song/media/outer/url?id=31473269.mp3 ",
    poster: "http://p1.music.126.net/OCGt5ln0lPPtPbVJ3VEKtA==/109951163020570422.jpg?param=130y130"
}];
var spirit = [{
    title: "M19+20",
    artist: "梶浦由記",
    mp3: "http://music.163.com/song/media/outer/url?id=591753.mp3 ",
    poster: "http://p1.music.126.net/lW4YKD6cMgm32nI66CzWVg==/5702067301704441.jpg?param=130y130"
}];
$("#latest li").find("a.playIcon").click(function() {
    var k = $(this).parent("li").index();
    myPlaylist.add({
        title: latest[k].title,
        artist: latest[k].artist,
        mp3: latest[k].mp3,
        poster: latest[k].poster
    });
    myPlaylist.play(-1);
});
$("#popular li").find("a.playIcon").click(function() {
    var k = $(this).parent("li").index();
    myPlaylist.add({
        title: popular[k].title,
        artist: popular[k].artist,
        mp3: popular[k].mp3,
        poster: popular[k].poster
    });
    myPlaylist.play(-1);
});
$("#rank li").find("a.playIcon").click(function() {
    var k = $(this).parent("li").index();
    myPlaylist.add({
        title: rank[k].title,
        artist: rank[k].artist,
        mp3: rank[k].mp3,
        poster: rank[k].poster
    });
    myPlaylist.play(-1);
});
$("#main li").find("a.playIcon").click(function() {
    var k = $(this).parent("li").index();
    myPlaylist.add({
        title: main[k].title,
        artist: main[k].artist,
        mp3: main[k].mp3,
        poster: main[k].poster
    });
    myPlaylist.play(-1);
});
$("#spirit li").find("a.playIcon").click(function() {
    var k = $(this).parent("li").index();
    myPlaylist.add({
        title: spirit[k].title,
        artist: spirit[k].artist,
        mp3: spirit[k].mp3,
        poster: spirit[k].poster
    });
    myPlaylist.play(-1);
});
$("#magic li").find("a.playIcon").click(function() {
    var m = $(this).parent("li").index();
    myPlaylist.add({
        title: magic[m].title,
        artist: magic[m].artist,
        mp3: magic[m].mp3,
        poster: magic[m].poster
    });
    myPlaylist.play(-1);
});
$("#playlist-remove").click(function() {
    myPlaylist.remove();
});
$("#listRemove").click(function() {
    myPlaylist.remove();
});
$("#playlist-next").click(function() {
    myPlaylist.next();
});
$("#playlist-previous").click(function() {
    myPlaylist.previous();
});
$("#playlist-play").click(function() {
    myPlaylist.play();
});
$("#playlist-play--2").click(function() {
    myPlaylist.play(-2);
});
$("#playlist-play--1").click(function() {
    myPlaylist.play(-1);
});
$("#playlist-play-0").click(function() {
    myPlaylist.play(0);
});
$("#playlist-play-1").click(function() {
    myPlaylist.play(1);
});
$("#playlist-play-2").click(function() {
    myPlaylist.play(2);
});
$("#playlist-pause").click(function() {
    myPlaylist.pause();
});
$("#playlist-option-autoPlay-true").click(function() {
    myPlaylist.option("autoPlay", true);
});
$("#playlist-option-autoPlay-false").click(function() {
    myPlaylist.option("autoPlay", false);
});
var $bar = $(".bar");
var $scrollBar = $(".scrollBar");
var $maxH = $scrollBar.innerHeight() - $bar.outerHeight();
var $ul = $(".jp-playlist ul");
var $li = $(".jp-playlist ul li");
var disY = 0;
var iScale = 0;
var iSpeed = 0;
$ul.height(1000);
$bar.mousedown(function(event) {
    var event = event || window.event;
    disY = event.clientY - $(this).position().top;
    $(document).bind("mousemove", function(event) {
        var event = event || window.event;
        var iH = event.clientY - disY;
        iH <= 0 && (iH = 0);
        iH >= $maxH && (iH = $maxH);
        $bar.css({
            top: iH + "px"
        });
        iScale = -iH / $maxH;
        $ul.css({
            top: iScale * ($ul.height() - $(".jp-playlist-box").height()) + "px"
        });
        return false;
    });
    $(document).bind("mouseup", function() {
        $(document).unbind("mousemove");
        $(document).unbind("mouseup");
    });
    return false;
});
$(".jp-playlist-box").mouseover(function() {
    addHandler(this, "mousewheel", mouseWheel);
    addHandler(this, "DOMMouseScroll", mouseWheel);
    return false;
});
function addHandler(element, type, handler) {
    return element.addEventListener ? element.addEventListener(type, handler, false) : element.attachEvent("on" + type, handler, false)
}
function mouseWheel(event) {
    var event = event || window.event;
    if (event.wheelDelta) {
        iSpeed = event.wheelDelta > 0 ? -3 : 3;
    } else if (event.detail) {
        iSpeed = event.detail < 0 ? -3 : 3;
    }
    move();
    if (event.preventDefault) {
        event.preventDefault();
    }
}
;function move() {
    var iH = $bar.position().top;
    iH = iH + iSpeed;
    iH <= 0 && (iH = 0);
    iH >= $maxH && (iH = $maxH);
    $bar.css({
        top: iH + "px"
    });
    iScale = -iH / $maxH;
    $ul.css({
        top: iScale * ($ul.height() - $(".jp-playlist-box").height()) + "px"
    });
    return false;
}
;var fold = true;
$(".jp-video").animate({
/*默认弹出*/
    /* left: 0 */
    left: "-480px"
}, "slow", function() {
    slideOut($(this));
}).delay(0).animate({
    left: "-480px"
}, 350, function() {
    slideIn($(this));
});
$("#btnfold").mouseover(function() {
    if (fold) {
        $(".jp-video").animate({
            left: "-480px"
        }, 350, function() {
            slideIn($(this));
        });
    } else {
        $(".jp-video").animate({
            left: 0
        }, 350, function() {
            slideOut($(this));
        });
    }
});
function slideOut(obj) {
    $("#btnfold").attr({
        "title": "点击收缩"
    });
    obj.find("span").css({
        "transform": "rotate(180deg)"
    });
    obj.find("span").css({
        "MozTransform": "rotate(180deg) translateX(2px)"
    });
    obj.find("span").css({
        "WebkitTransform": "rotate(180deg)"
    });
    fold = true;
}
;function slideIn(obj) {
    $("#btnfold").attr({
        "title": "点击展开"
    });
    obj.find("span").css({
        "transform": "rotate(0deg)"
    });
    obj.find("span").css({
        "MozTransform": "rotate(0deg) translateX(-2px)"
    });
    obj.find("span").css({
        "WebkitTransform": "rotate(0deg)"
    });
    fold = false;
}
;var iOpen = false;
$("#listClose").click(function() {
    if (iOpen) {
        $(".jp-playlist-box").animate({
            height: 0
        }, 100);
        $("#btnfold").css({
            top: "5px"
        });
        $("#listRemove").css({
            display: "none"
        });
        $(".scrollBar").css({
            display: "none"
        });
        $(".jp-video").animate({
            height: "94px",
            bottom: "20px"
        }, 100);
        iOpen = false;
    } else {
        $(".jp-playlist-box").animate({
            height: "80px"
        }, 100);
        $("#btnfold").css({
            top: "52px"
        });
        $("#listRemove").css({
            display: "block"
        });
        $(".scrollBar").css({
            display: "block"
        });
        $(".jp-video").animate({
            height: "175px",
            bottom: "20px"
        }, 100);
        iOpen = true;
    }
});
