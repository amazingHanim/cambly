//content01
$(document).ready(function () {


    $("#btn_wrap").on("mouseenter", onEnter);
    $("#btn_wrap").on("mouseleave", onOut);
    $("#btn_wrap>p").hide()


    function onEnter() {

        $(".start_btn_bg").addClass("ct1_on");
        $(".start_btn").addClass("move");

        $("#btn_wrap>p").stop();
        $("#btn_wrap>p").show(500, "easeOutubic");

    }

    function onOut() {
        $(".start_btn_bg").removeClass("ct1_on")
        $(".start_btn").removeClass("move");

        $("#btn_wrap>p").stop();
        $("#btn_wrap>p").hide();

    }

    $(".recent_tutor").on("mouseover", function () {
        $(".recent_tutor>a").removeClass("on2")
        $(this).addClass("on2");
    });
    $(".recent_tutor").on("mouseleave", function () {
        $(this).removeClass("on2");
    });


})
//content02
$(document).ready(function () {

    var $scrollHeight;


    $(document).on("scroll", onScroll)


    function onScroll() {

        $scrollHeight = $(window).scrollTop();

        console.log($scrollHeight);

        if ($scrollHeight > 700) {
            $(".fr_right").addClass("chartmove2");
            $(".fr_left").addClass("chartmove");

        } else {
            $(".fr_right").removeClass("chartmove2");
            $(".fr_left").removeClass("chartmove");
        }
    }

})
//content03
$(document).ready(function () {

    var $visualInner
    var $visualList
    var $visualItem
    var $btn

    var $visualImgNum
    var $visualImgWidth


    var nextIndex
    var currentIndex = 0;
    //    -----------------------
    var $visualInner2
    var $visualList2
    var $visualItem2


    var $visualImgNum2
    var $visualImgWidth2


    var nextIndex2
    var currentIndex2 = 0;


    init()
    inEvent();
    visualReset();


    function init() {


        $visualInner = $(".curri_info_frame");
        $visualList = $(".infos");
        $visualItem = $(".curri_info");
        $btn = $(".next_btn");

        $visualImgNum = $visualList.children().size();
        //        ------------
        $visualInner2 = $(".curri_img_frame");
        $visualList2 = $(".curri_img_list");
        $visualItem2 = $(".curri_img");

        $visualImgNum2 = $visualList2.children().size();





        //        alert($visualImgNum);

    }


    function visualReset() {
        $visualImgWidth = $visualItem.innerWidth();
        //        alert($visualImgWidth);
        $visualItem.css({
            "left": $visualImgWidth
        });

        $visualItem.eq(currentIndex).css({
            "left": 0
        })
        //        ------------------------
        $visualImgWidth2 = $visualItem2.innerWidth();
        //                alert($visualImgWidth2);
        $visualItem2.css({
            "left": $visualImgWidth2
        });

        $visualItem2.eq(currentIndex2).css({
            "left": 0
        })

    }

    function inEvent() {

        $btn.on("click", onNextSlide);

    }

    function onNextSlide() {

        nextIndex = currentIndex + 1;//nextIndex??? currentIndex??? 1??? ?????? ??????

        if (nextIndex >= $visualImgNum) {
            nextIndex = 0; //nextIndex??? ????????? ??? ????????? ????????? ???????????? 0?????? ?????????.(nextIndex??? ????????? ??? ???????????? ?????? ??? ??????.)
        }
        $visualItem.eq(currentIndex).animate({
            "left": -$visualImgWidth
        }, 300, "easeOutCubic");
        //???????????????????????? eq(currentIndex)??? ????????? ????????? ??????????????? ????????????$visualImgWidth????????? ??????????????? ?????????.

        $visualItem.eq(nextIndex).css({
            "left": $visualImgWidth
        });
        //eq(nextIndex)??? ????????? ??????????????????.????????? ???????????? ???????????? ??????????????? ???????????? ??????.


        $visualItem.eq(nextIndex).animate({
            "left": 0
        }, 500, "easeOutCubic");
        //eq(nextIndex)??? ???????????? ???????????? ?????????????????? ?????????.

        currentIndex = nextIndex;
        //currentIndex ????????? nextIndex?????? ?????????.



        //        -------------------------------------


        nextIndex2 = currentIndex2 + 1;

        if (nextIndex2 >= $visualImgNum2) {
            nextIndex2 = 0;
        }
        $visualItem2.eq(currentIndex2).animate({
            "left": -$visualImgWidth2
        }, 300, "easeOutCubic");

        $visualItem2.eq(nextIndex2).css({
            "left": $visualImgWidth2
        });


        $visualItem2.eq(nextIndex2).animate({
            "left": 0
        }, 500, "easeOutCubic");

        currentIndex2 = nextIndex2;
    }
})

//content05


$(document).ready(function () {
    $(".class_list .cls").on("mouseenter", onActive);

    function onActive() {
        $(".class_list li").removeClass("on");
        $(this).addClass("on")

    }

})