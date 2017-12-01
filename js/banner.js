/**
 * @Author : husky520
 * @Last saved : 2017-10-17
 * @version : v1.0
 */

//////////
// 名字空间 //
////////////
banner = {
    speed : 3000,

    position : 0,

    isPlay : false,


    leftSlide : function () {
        this.isPlay = true;
        this.position -= 100;
        if (this.position < 0) {this.position += 400;}
        $('.banner-body').stop();
        $('.banner-body').animate({marginLeft: '-' + this.position + '%'}, 800);
        // this.changeIndex();
        setTimeout(function(){
            banner.isPlay = false;
        }, 800);
    },

    rightSlide : function () {
        this.isPlay = true;
        this.position += 100;
        if (this.position > 300) {this.position -= 400}
        $('.banner-body').stop();
        $('.banner-body').animate({marginLeft: '-' + this.position + '%'}, 800);
        this.changeIndex();
        setTimeout(function(){
            banner.isPlay = false;
        }, 800);
    },

    changeIndex : function () {
        for (var i = 0; i < 4; i++) {
            $('.banner-order-index')[i].className = 'banner-order-index';
        }
        switch (this.position) {
            case 0 : $('.banner-order-index')[0].className += ' banner-order-active';
                break;
            case 100 : $('.banner-order-index')[1].className += ' banner-order-active';
                break;
            case 200 : $('.banner-order-index')[2].className += ' banner-order-active';
                break;
            case 300 : $('.banner-order-index')[3].className += ' banner-order-active';
                break;
            default : 
                break;
        }
    }

};



//////////
// 执行模块 //
//////////
(function () {
        

    // 自动轮播
    var timer = setInterval(function () {
        banner.rightSlide();
    }, banner.speed);


    
    // 点击左右按钮
    function next () {
        if (!banner.isPlay) {
            clearInterval(timer);

            banner.rightSlide();

            timer = setInterval(function () {
                banner.rightSlide();
            }, banner.speed);
        }
    }

    function prev() {
        if (!banner.isPlay) {
            clearInterval(timer);

            banner.leftSlide();

            timer = setInterval(function () {
                banner.rightSlide();
            }, banner.speed);
        }
    }

    $('.banner-btn-right').click(function () {
        next();
    });
    
    $('.banner-btn-left').click(function () {
        prev();
    });


    // 点击序号按钮
    for (var i = 0; i < 4; i++) {
        (function (index) {
            $('.banner-order-index')[index].onclick = function () {
                clearInterval(timer);

                banner.position = index * 100;
                banner.changeIndex();
                $('.banner-body').animate({marginLeft: '-' + banner.position + '%'}, 800);

                timer = setInterval(function () {
                    banner.rightSlide();
                }, banner.speed);
            }
            console.log(index);   
        } (i));
    }


    // 点击键盘左右
    // $('body').keypress(function (e) {
    //     console.log(e);
    // });
    $('body').keydown(function (e) {
        if (e.which === 37) {
            prev();
        } else if (e.which === 39) {
            next();
        }
    });

} (banner));