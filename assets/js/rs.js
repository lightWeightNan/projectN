/**********
 *****
 *** Author: Jay Zhao
 *** Time:20180513
 *** Email:jayhowe2014@163.com
 *****
 */

var mySwiper = new Swiper('.swiper-container-father',{
        loop: false,
        // autoplay: 3000,
        direction : 'vertical',
        observer:true,
        observeParents:true,
        onTransitionEnd: function(swiper){
                $(".swiper-slide").children().removeClass("show");
                $(".swiper-slide-active").children().addClass("show");
        }
    });
var mySwiperSon = new Swiper('.swiper-container-son',{
        loop: false,
        // autoplay: 3000,
        direction : 'horizontal',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        pagination : '.swiper-pagination',
        onInit: function(swiper2){
                $(".container5 .content").removeClass('show');
                $(".swiper-pagination").on("click",".swiper-pagination-bullet",function(){
                    swiper2.slideTo($(this).index());
                });
        }
    });




(function(){

//***************************图片预加载*********************************//
function loading(percent) {
        percent = (percent);
        var loadingColorBg = document.getElementById('loadPer');
        loadingColorBg.innerHTML = percent + "%";
}

function loadingEffect() {
        var le = function() {
                if (currentPercent <= loadPercent) {
                        preloadImages();
                        loading(currentPercent);
                        currentPercent++;
                }
                if (currentPercent > 100) {
                        clearInterval(intervalId);
                        if(wx.ready) {
                            wx.ready(function(){
                                playbksound();
                            });
                        }else{
                            playbksound();
                        }
                            playbksound();
                        

                        document.getElementById('loading').style.display = "none";
                        // $(".container1").removeClass("hide");
                        $(".container1").children('.content').addClass('show');
                }
        }
        intervalId = setInterval(le, 15);
}


function preloadImages() {
        if (imgsrc.length <= 0) {} else {
                var res = imgsrc[0];
                imgsrc.splice(0, 1);
                var Img = new Image();
                Img.src = res.src;
                Img.onload = function() {
                        loadPercent = res.per;
                }
                Img.onerror = function() {
                        loadPercent = res.per;
                }
        }
}
var intervalId = false;
var loadPercent = 0;
var currentPercent = 0;
var imgsrc = [
        {src: "assets/images/arrow1.png",id: "",per: "1"},
        {src: "assets/images/arrow2.png",id: "",per: "2"},
        {src: "assets/images/arrow3.png",id: "",per: "3"},
        {src: "assets/images/arrow-bg.png",id: "",per: "4"},
        {src: "assets/images/arrow-tips.png",id: "",per: "5"},
        {src: "assets/images/logo.png",id: "",per: "6"},
        {src: "assets/images/music-play.png",id: "",per: "7"},
        {src: "assets/images/page1-bg1.jpg",id: "",per: "8"},
        {src: "assets/images/page1-bg2.jpg",id: "",per: "9"},
        {src: "assets/images/page1-bg3.jpg",id: "",per: "10"},
        {src: "assets/images/page1-bg1-graph.png",id: "",per: "11"},
        {src: "assets/images/page1-bg2-graph.png",id: "",per: "12"},
        {src: "assets/images/page1-bg3-graph.png",id: "",per: "13"},
        {src: "assets/images/page2-bg.jpg",id: "",per: "14"},
        {src: "assets/images/page3-bg.jpg",id: "",per: "15"},
        {src: "assets/images/page4-bg.jpg",id: "",per: "16"},
        {src: "assets/images/page5-bg.jpg",id: "",per: "17"},
        {src: "assets/images/page6-bg.jpg",id: "",per: "18"},
        {src: "assets/images/page7-bg.jpg",id: "",per: "19"},
        {src: "assets/images/page1-title.png",id: "",per: "20"},
        {src: "assets/images/page2-icon1.png",id: "",per: "21"},
        {src: "assets/images/page2-icon2.png",id: "",per: "22"},
        {src: "assets/images/page2-icon3.png",id: "",per: "23"},
        {src: "assets/images/page2-icon4.png",id: "",per: "24"},
        {src: "assets/images/page3-nav.png",id: "",per: "25"},
        {src: "assets/images/page4-nav.png",id: "",per: "26"},
        {src: "assets/images/page6-nav.png",id: "",per: "27"},
        {src: "assets/images/page7-nav.png",id: "",per: "28"},
        {src: "assets/images/page3-txt1.png",id: "",per: "29"},
        {src: "assets/images/page3-txt2.png",id: "",per: "30"},
        {src: "assets/images/page3-txt3.png",id: "",per: "31"},
        {src: "assets/images/page3-txt4.png",id: "",per: "32"},
        {src: "assets/images/page4-turnpage.png",id: "",per: "33"},
        {src: "assets/images/page4-txt1.png",id: "",per: "34"},
        {src: "assets/images/page4-txt2.png",id: "",per: "35"},
        {src: "assets/images/page4-txt3.png",id: "",per: "36"},
        {src: "assets/images/page4-txt4.png",id: "",per: "37"},
        {src: "assets/images/page4-txt5.png",id: "",per: "38"},
        {src: "assets/images/page5-icon1.jpg",id: "",per: "39"},
        {src: "assets/images/page5-icon2.jpg",id: "",per: "40"},
        {src: "assets/images/page5-icon3.jpg",id: "",per: "41"},
        {src: "assets/images/page5-icon4.jpg",id: "",per: "42"},
        {src: "assets/images/page5-left.png",id: "",per: "43"},
        {src: "assets/images/page5-right.png",id: "",per: "44"},
        {src: "assets/images/page5-list1.png",id: "",per: "45"},
        {src: "assets/images/page5-list2.png",id: "",per: "46"},
        {src: "assets/images/page5-list3.png",id: "",per: "47"},
        {src: "assets/images/page5-list4.png",id: "",per: "48"},
        {src: "assets/images/page5-txt1.png",id: "",per: "49"},
        {src: "assets/images/page5-txt2.png",id: "",per: "50"},
        {src: "assets/images/page5-txt3.png",id: "",per: "51"},
        {src: "assets/images/page5-txt4.png",id: "",per: "52"},
        {src: "assets/images/page5-txt5.png",id: "",per: "53"},
        {src: "assets/images/page6-txt1.png",id: "",per: "54"},
        {src: "assets/images/page6-txt2.png",id: "",per: "55"},
        {src: "assets/images/page6-txt3.png",id: "",per: "56"},
        {src: "assets/images/page6-txt4.png",id: "",per: "57"},
        {src: "assets/images/page6-txt5.png",id: "",per: "58"},
        {src: "assets/images/page6-txt6.png",id: "",per: "59"},
        {src: "assets/images/page7-txt1.png",id: "",per: "60"},
        {src: "assets/images/page7-txt2.png",id: "",per: "61"},
        {src: "assets/images/page7-txt3.png",id: "",per: "62"},
        {src: "assets/images/page7-txt4.png",id: "",per: "63"},
        {src: "assets/images/page7-txt5.png",id: "",per: "64"},
        {src: "assets/images/page7-txt6.png",id: "",per: "65"},
        {src: "assets/images/page7-txt7.png",id: "",per: "100"}

];


//***************************音乐播放*********************************//
var gSound = 'assets/music/bgm.mp3';
window.isPlayMusic = true,
window.audioBgm='',
window.audioBgR;

function switchsound() {
        //var au = $('audio'),
        au = document.getElementById('bgsound');
        audioBgR = document.getElementById('sound_image');
        console.log(isPlayMusic);

        if (isPlayMusic) {
                au.pause();
                audioBgR.src = "assets/images/music-stop.png";
        } else {
                au.play();
                audioBgR.src = "assets/images/music-play.png";
        }
        isPlayMusic = !isPlayMusic;
}

function playbksound() {
        var audiocontainer = document.getElementById('audiocontainer');
        audiocontainer.innerHTML = '<audio id="bgsound" autoplay="autoplay"> <source src="' + gSound + '" /> </audio>';
        audioBgm = document.getElementById('bgsound');
        audioBgm.play();
        audioBgm.addEventListener('ended', function() {
                audioBgm.play();
        }, false);
        if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
                WeixinJSBridge.invoke('getNetworkType', {}, function (res) {
                        // 在这里拿到 e.err_msg, 这里面就包含了所有的网络类型
                        audioBgm.play();
                });
        }
        sound_div = document.createElement("div");
        sound_div.setAttribute("ID", "cardsound");
        sound_div.style.cssText = "position: absolute;right: 2%;top: 3%;padding: 2% 0;width: 11%;z-index: 5000;text-align: center;";
        box_htm = "<div id='note_box' style='height:100px;width:44px;position:absolute;left:-20px;top:-80px'></div>";
        bg_htm = "<img id='sound_image' src='assets/images/music-play.png'>";
        txt_htm = "<div id='music_txt' style='color:white;position:absolute;left:-40px;top:30px;width:60px'></div>"
        sound_div.innerHTML = bg_htm;
        document.body.appendChild(sound_div);
        $("#cardsound").on("click", function() {
                switchsound();
        });
}

        loadingEffect();



 

        

         function mytouchmove(evId,fn1,fn2){
                var _start=0, _end=0, _div = document.getElementById(evId);
                _div.addEventListener("touchstart", touchStart, false);
                _div.addEventListener("touchmove", touchMove, false);
                _div.addEventListener("touchend", touchEnd, false);
                function touchStart(ev){
                 var touch = event.touches[0];
                 _start = touch.pageY;
                }

                    function touchMove(ev){
                        ev.preventDefault();
                         var touch = event.touches[0];
                        _end = (_start-touch.pageY);
                    }
                
                function touchEnd(ev){
                    // ev.preventDefault();
                     if(_end>35){ 
                            fn1();
                            _end=0;
                     }
                    else if(_end<-35) {
                            fn2();
                            _end=0;

                        }
                }
            }
            // mytouchmove("container9",
            //   function(ev){
            //     // mySwiper.slideNext();
            //   },
            //   function(ev){
            //     mySwiper.slidePrev()
            //   }
            // )

            function page1Animation(){
                var bgIndex=1;
                setInterval(function(){
                        $(".page1-bg").hide();
                        if(bgIndex<3) {
                                bgIndex+=1;
                        }else {
                                bgIndex=1;
                        }
                        $(".page1-bg"+bgIndex).show();
                },300);
            }
            page1Animation();

            $(".page-nav").on("click",function(){
                mySwiper.slideTo(1)
            });

            $(".page2-list1").on("click",function(){
                mySwiper.slideTo(2);
                $(this).addClass("active");
            });
            $(".page2-list2").on("click",function(){
                mySwiper.slideTo(3);
                $(this).addClass("active");
            });
            $(".page2-list3").on("click",function(){
                mySwiper.slideTo(5);
                $(this).addClass("active");
            });
            $(".page2-list4").on("click",function(){
                mySwiper.slideTo(6);
                $(this).addClass("active");
            });

        var page4Txt5Top=0;
        $(".container4 .scroll-content").scroll(function() {
            if(!page4Txt5Top){
                page4Txt5Top=$(".page4-txt5-1").offset().top
            }

    		if($(this).scrollTop()>=($(".page4-bg").height()-$(window).height()+4)) {
    			mySwiper.slideNext();
    		}
            if($(this).scrollTop()>=($(".page4-bg").height()-page4Txt5Top)) {
                $(".page4-txt5-1").addClass("active");
            }

        });

        var page5Txt4=0,
            page5Txt5=0;
        $(".container5 .scroll-content").scroll(function() {
            if(!page5Txt4){
                page5Txt4=$(".page5-txt4").offset().top
            }
            if(!page5Txt5){
                page5Txt5=$(".page5-txt5").offset().top
            }

            if($(this).scrollTop()>=($(".page5-bg").height()-page5Txt4)) {
                $(".page5-txt4").addClass("active");
            }
            if($(this).scrollTop()>=($(".page5-bg").height()-page5Txt5)) {
                $(".page5-txt5").addClass("active");
            }

        });


        var page6Txt5=0,
            page6Txt6=0;
        $(".container6 .scroll-content").scroll(function() {
            if(!page6Txt5){
                page6Txt5=$(".page6-txt5").offset().top
            }
            if(!page6Txt6){
                page6Txt6=$(".page6-txt6").offset().top
            }

            if($(this).scrollTop()>=($(".page6-bg").height()-page6Txt5)) {
                $(".page6-txt5").addClass("active");
            }
            if($(this).scrollTop()>=($(".page6-bg").height()-page6Txt6)) {
                $(".page6-txt6").addClass("active");
            }

        });
}());




