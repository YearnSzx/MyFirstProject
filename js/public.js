

//大屏状态下导航栏的出现与消失
$('.navbar-right2>li').mouseover(function(){
    $(this).children('ul').show();
}).mouseleave(function(){
    $(this).children('ul').hide();
})
$('.content h2').click(function () {
    $('html').animate({scrollTop: $(this).offset().top}, 500);
});



//左边滚动条事件
function scrollBehavior (arr){
    $(window).scroll(function () {//为页面添加页面滚动监听事件
        var wst = $(window).scrollTop(); //滚动条距离顶端值  
        for (var i = 0; i < arr.length; i++) {  //加循环
            if ($("#" + arr[i].id).offset().top <= wst +10 ){ //判断滚动条位置
                $('.menuSub a').removeClass('active')
                $("." + arr[i].id).addClass("active");
            }
        }
    });
}



$('.content h3').click(function () {
    $('html').animate({scrollTop: $(this).offset().top}, 500);
});

//点击左边导航栏触发效果
$('.menuSub a').click(function(){
    $('.menuSub a').removeClass('active')
    setTimeout(function(){
        $(this).addClass('active');
    },500) //在延迟后为左边导航栏a添加class
    $('html').animate({scrollTop: $("#" + this.name).offset().top}, 500);//添加滑动效果
})

//要添加一个页面刚打开就分析页面宽度的计时器
var StartOpen = setTimeout(() => {
    let screenWidth = $(window).width();
    if(screenWidth<900){//小于900px时的变化
        changeWindowWidth()
        MiniBarOpenAndClose()     //小屏幕状态下的导航栏的收缩和放出
    }else if(screenWidth<1300 && screenWidth>900){//大于900且小于1300时的样式
        reductionContent()
    }else{
        reductionContent()
        Contentreduction()
    }
}, 10);




//小屏幕状态下的导航栏的收缩和放出
function MiniBarOpenAndClose(){
    $('.menu-btn').click(function(){
        MiniLeftNavOpen()    
    })
    
        $('.content').click(function(){
            if($(window).width()<900){
                MiniLeftNavClose()
            }
        })
    
    function MiniLeftNavOpen(){
    $('.LeftNav').css({
        'left':'0',
    })
    }
    function MiniLeftNavClose(){
        $('.LeftNav').css({
            'left':'-300px',
        })
    }
    console.log(1212132132)
}




$(window).resize(function () {
    var screenWidth = $(window).width();//浏览器当前窗口可视区域宽度
    if(screenWidth<900){
        changeWindowWidth()
        MiniBarOpenAndClose()  //小屏幕状态下的导航栏的收缩和放出
    }else if(screenWidth<1300 && screenWidth>900){
        reductionContent()
        $('.LeftNav').css({
            'left':'0',
        })
    }else{
        reductionContent()
        Contentreduction()
    }
})
//屏幕小于900px的变化
function changeWindowWidth(){
    $('.MiniLeftNavBar').css('display','block')
    $('.container-fluid').css({
        'display':'none'
    })
    $('.minibar').css({
        'display':'block'
    })
    $('.LeftNav').css({
        'background':'rgb(249,249,249)',
        'top':'0'
    })
    $('.LeftNav').css({
        'left':'',
        'background':'rgb(249,249,249)',
        'top':'0',
        'box-shadow': '0 0 10px rgba(0,0,0,0.2)'
    })
    $('.specialSponsor>h2').css({
        'font-size':'1.5em',
    })
    $('.menuRoot a').css({
        'font-size':'14px'
    })
    $('.menuRoot h3').css({
        'font-size':'1.17em'
    })


    $('.main').css({
        'position':'static',
        'padding': '2em 1.4em 0'
    })
    //content的改变
    $('.content').css({
        'padding': '0',
        'margin-left': '0',
        'padding':'2.2em 0'
    })
    $('.content h1').css({
        'font-size':'2em'
    })
    $('.content h2').css({
        'font-size':'1.5em'
    })
    $('.content h3').css({
        'font-size':'1.17em'
    })
    $('.content p').css({
        'font-size':'14px'
    })
    $('.content h3>a::before').css({
        'left':'-20px'
    })
    $('.guild-link span a').css({
        'font-size':'14px'
    })
    $('footer').css({
        'font-size':'14px',
        'text-align':'center'
    })
    //广告的改变
    $('.TXnext').css({
        'position': 'relative',
        'float': 'right',
        'background-color': '#fff',
        'right': 0,
        'bottom': 0,
        'padding': '0 0 20px 30px'
    })
}
//屏幕小于1300px的变化
function reductionContent(){
    $('.MiniLeftNavBar').css('display','none')
    $('.LeftNav').css({
        'background':'#fff',
        'top':'0'
    })
    $('.LeftNav').css({
        'left':'0',
        'top':'61px',
        'box-shadow': 'none'
    })
    $('.specialSponsor>h2').css({
        'font-size':'25px',
    })
    $('.menuRoot a').css({
        'font-size':'16px'
    })
    $('.menuRoot h3').css({
        'font-size':'20px'
    })


    $('.container-fluid').css({
        'display':'block'
    })
    $('.minibar').css({
        'display':'none'
    })
    $('.LeftNav').css('display','block')
    $('.main').css({
        'position':'static',
        'padding': '0 60px 30px'
    })
    $('.content').css({
        'padding': '35px 0 0 50px',
        'margin-left': '290px'
    })
    //content的改变
    $('.content h1').css({
        'font-size':'2.2em'
    })
    $('.content h2').css({
        'font-size':'25px'
    })
    $('.content h3').css({
        'font-size':'20px'
    })
    $('.content p').css({
        'font-size':'16px'
    })
    $('.guild-link span a').css({
        'font-size':'16px'
    })
    $('footer').css({
        'font-size':'16px',
        'text-align':'left'
    })
    //广告的改变
    $('.TXnext').css({
        'position': 'fixed',
        'background-color': '#fff',
        'right': '10px',
        'bottom': '10px',
        'padding': '0'
    })
}
//变回原样
function Contentreduction(){
    $('.container-fluid').css({
        'display':'block'
    })
    $('.minibar').css({
        'display':'none'
    })
    $('.LeftNav').css('display','block')
    $('.main').css({
        'position':'static',
        'padding': '0 60px 30px'
    })
    $('.main').css({
        'position':'relative'
    })
    $('.content').css({
        'margin-left':'auto',
        'padding': '35px 0 0 50px'
    })
}

