$(".wzbd_list li").each(function () {
        // var textSpan = $(this).children('span').text().length;
        // console.log('span文字数量: ' + textSpan);
        // var textA = $(this).children('a').text().length;
        // console.log('a文字数量: ' + textA);

        // console.log($(this).children('a').text().length)

        if ($.trim($(this).children('span').text().length) > 5) {
            $(this).children('a').css({
                // 'width': '70%',
                'padding-top': '13px'
            })
            $(this).children('span').css({
                'padding-top': '13px'
            })
        }

        // 是否IE
        function isIE() {
            var ua = navigator.userAgent;
            if (ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1) {
                // IE 10 or older
                return true;
            }
            return false;
        }

        if (isIE()) {
            // 是IE浏览器
            console.log('这是IE浏览器');
            // 处理右侧文字报道
            if ($.trim($(this).children('a').text().length) > 21) {
                $(this).children('a').css("padding-top", "13px")
            } else {
                $(this).children('a').css("padding-top", "23px")
            }

            // 处理图文轮播
            $('.slide .swiper-container .swiper-slide .fit').css('display', 'none')
            $('.slide .swiper-container .swiper-slide img').css('height', '100%')
        } else {
            // 不是IE浏览器
            // console.log('这不是IE浏览器');
            if ($.trim($(this).children('a').text().length) > 46) {
                $(this).children('a').css("padding-top", "13px")
                // console.log($(this), 222);
            } else {
                $(this).children('a').css("padding-top", "23px")
            }

            // if ($.trim($(this).children('a').height()) > 21) {
            //     $(this).children('a').css("padding-top", "13px")
            // } else {
            //     $(this).children('a').css("padding-top", "23px")
            // }

        }

    })