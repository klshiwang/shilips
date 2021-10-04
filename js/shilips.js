$(function(){

    function resizeBanner(){
        let windowWidth = $(window).width()  //窗口宽度
        //700/2000  是背景图片的高宽比
        let bannerHeight = (windowWidth-30)  * (700/2000); 
        $(".banner").css("height",bannerHeight+"px");  //设置banner的高度
    }

    resizeBanner();   //调用函数

    //给window绑定窗口大小改变的事件
    window.onresize=function(){
        // console.log("窗口大小改变了.")
        resizeBanner();
    }


    //sidebar
    $('.sidebar').click(function(){
        $('.sidebar').stop().animate({right:0})
    }).mouseleave(function(){
        console.log(123);
        $('.sidebar').stop().animate({right:'-50px'})
    })

    // 返回顶部按钮 
    addEventListener('mousewheel',function(){
        // console.log("滚动了.");
        let scrollDis = document.documentElement.scrollTop || document.body.scrollTop  ;
        //判断滚动距离,是否显示按钮
        if(scrollDis >= 200){
            //显示返回顶部按钮
            $('.back-top').css('display','block');
        }else{
            //隐藏按钮 
            $('.back-top').css('display','none');
        }
    });

    //兼容火狐浏览器,使用下面的方式
    addEventListener('DOMMouseScroll',function(){
        console.log("火狐滚动了.");
        let scrollDis = document.documentElement.scrollTop || document.body.scrollTop;
        //判断滚动距离,是否显示按钮
        if(scrollDis >= 200){
            //显示返回顶部按钮
            $('.back-top').css('display','block');
        }else{
            //隐藏按钮 
            $('.back-top').css('display','none');
        }
    });

    $('.back-top').click(function(){
        //返回到页面顶部
        document.documentElement.scrollTop  = 0;
        //隐藏按钮
        $('.back-top').css('display','none');
    })
    

})