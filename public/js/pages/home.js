/**
 * 移动官网
 * @since 2016.03.23
 */
define(function (require, exports, module) {
    //'浮层上的图片滑动'模块
    if($('#J_PhotoSwipe').length){
        require('photoSwipeInit');

        var imgArr = $('#J_ImgArr').val();

        var imgArrs = imgArr.split('&&');

        var imgArrData = [];

        $.each(imgArrs,function(i,n){
            imgArrData.push({src: n.split('||')[0],w:n.split('||')[1],h:n.split('||')[2]});
        });

        $.photoSwipeInit({
            // 图片数组数据
            imgArrData: imgArrData,

            // 图片点击对象
            operatorObj: $('.J_ScaleImg')
        });
    }
});