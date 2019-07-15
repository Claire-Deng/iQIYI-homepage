$(window).ready(function(){
    $("#upload").click(function(){
        $("#upload-list").slideToggle("3000");
    });

    $("#download").click(function(){
        $("#download-list").slideToggle("3000");
    });

    $("#news").click(function(){
        $(".news-panel").slideToggle("3000");
    });

    $("#first").hover(function(){
        $(".news-panel-body").html("您还没有收到新的更新消息");
    });

    $("#last").hover(function(){
        $(".news-panel-body").html("您还没有登录您登录后可以查看完整的通知列表");
    });

    $("#second").hover(function(){
        $(".news-panel-body").html("暂时还没有新的推荐");
    });

    $("#record").click(function(){
        $(".record-panel").slideToggle("3000");
    });

    var index = 0;
    var time=setInterval(move,3000);

    function move(){
        if(index===5)
            index=0;
        $(".img li").eq(index).stop().fadeIn(3000).siblings().stop().fadeOut(3000);
        $(".num li").eq(index).addClass("current").siblings().removeClass();
        index++;


    }

    $(".num li").hover(function(){
            /*console.log($(this).index());*/
            $(this).addClass("current");
            $(this).siblings().removeClass();
            $(".img li").eq($(this).index()).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
            clearInterval(time);
        },

    );

    $(".num li").mouseleave(function(){
        index=$(this).index()+1;
        time = setInterval(move,3000);
    });

    $(".btn").hover(function(){
            clearInterval(time);
            $(this).css({"cursor":"pointer",

            });
        },
        (function(){
            time = setInterval(move,3000);
        })
    );

    $(".right_btn").bind("click",function(){
        index++;
        if(index===6)
            index=1;

        $(".img li").eq(index-1).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        $(".num li").eq(index-1).addClass("current").siblings().removeClass();
        console.log(index);

    });


    $(".left_btn").bind("click",function(){
        index--;
        if(index===0)
            index=5;

        $(".img li").eq(index-1).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
        $(".num li").eq(index-1).addClass("current").siblings().removeClass();
        console.log(index);

    });

    var time2=setInterval(move2,5000);
    var index2=0;

    function move2(){
        if(index2 === 2)
            index2 = 0;
        $(".s-img li").eq(index2).fadeIn(2000).siblings().stop().fadeOut(2000);
        index2 = index2 + 1;
    };

    var time3=setInterval(move3,3000);
    var index3=0;

    function move3(){
        switch (index3) {
            case 0:
                $(".s-img2 li").eq(index3).show().siblings().hide();
                $(".left-pic-word h3").html("我们的演唱会");
                $(".left-pic-word p").html("大厂兄弟情！姚弛送卫生纸庆祝王喆搬新居");
                index3 = 1;
                break;
            case 1:
                $(".s-img2 li").eq(index3).show().siblings().hide();
                $(".left-pic-word h3").html("青春环游记");
                $(".left-pic-word p").html("王凯宋轶伪装者再聚首 魏大勋吴谨言大秀浮夸演技");
                index3 = 0;
                break;
        }

    }

    $(".variety-left-picbox").hover(function(){
        clearInterval(time3)
    }, function(){
        time3=setInterval(move3,3000)
    });

    $(".right_btn2").bind("click",function(){

        switch (index3) {
            case 0:
                $(".s-img2 li").eq(index3).show().siblings().hide();
                $(".left-pic-word h3").html("我们的演唱会");
                $(".left-pic-word p").html("大厂兄弟情！姚弛送卫生纸庆祝王喆搬新居");
                index3 = 1;
                break;
            case 1:
                $(".s-img2 li").eq(index3).show().siblings().hide();
                $(".left-pic-word h3").html("青春环游记");
                $(".left-pic-word p").html("王凯宋轶伪装者再聚首 魏大勋吴谨言大秀浮夸演技");
                index3 = 0;
                break;
        }

        console.log(index3);

    });


    $(".left_btn2").bind("click",function(){

        switch (index3) {
            case 0:
                $(".s-img2 li").eq(index3).show().siblings().hide();
                $(".left-pic-word h3").html("我们的演唱会");
                $(".left-pic-word p").html("大厂兄弟情！姚弛送卫生纸庆祝王喆搬新居");
                index3 = 1;
                break;
            case 1:
                $(".s-img2 li").eq(index3).show().siblings().hide();
                $(".left-pic-word h3").html("青春环游记");
                $(".left-pic-word p").html("王凯宋轶伪装者再聚首 魏大勋吴谨言大秀浮夸演技");
                index3 = 0;
                break;
        }

    });

    $(".pic-word").hover(function(){
        $(this).children("span").css("visibility","visible");
    },function(){
        $(this).children("span").css("visibility","hidden")
    });

    $(".movie-box").hover(function () {
            $(this).children(".hide").show();
        },
        function () {
            $(this).children(".hide").hide();
        });

    $(".wustar ul li").hover(function(){
        $(this).removeClass("wustar").addClass('hs');
        $(this).prevAll().removeClass("wustar").addClass('hs');
    },function(){
        $(this).removeClass('hs');
        $(this).prevAll().removeClass('hs');
    });

    $(".star ul li").click(function () {
        $(this).addClass('cs');
        $(this).prevAll().addClass('cs');
        $(this).nextAll().removeClass('cs');
    });

});