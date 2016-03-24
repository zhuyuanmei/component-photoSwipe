/**
* 浮层上的图片滑动模块
* @author zym
* @version 1.0
* @since 2016-03-23
*/
define(function(require, exports, module) {
    //引用依赖库
    var photoSwipe = require('photoSwipe');
    var photoSwipeUi = require('photoSwipeUi');

    var tpl = {
        previewHtml: [
            '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">',
                '<div class="pswp__bg"></div>',
                '<div class="pswp__scroll-wrap">',
                    '<div class="pswp__container">',
                        '<div class="pswp__item"></div>',
                        '<div class="pswp__item"></div>',
                        '<div class="pswp__item"></div>',
                    '</div>',
                    '<div class="pswp__ui pswp__ui--hidden">',
                        '<div class="pswp__top-bar">',
                            '<div class="pswp__counter"></div>',
                            '<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>',
                            '<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>',
                            '<div class="pswp__preloader">',
                                '<div class="pswp__preloader__icn">',
                                    '<div class="pswp__preloader__cut">',
                                        '<div class="pswp__preloader__donut"></div>',
                                    '</div>',
                                '</div>',
                            '</div>',
                        '</div>',
                        '<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">',
                            '<div class="pswp__share-tooltip"></div>',
                        '</div>',
                        '<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>',
                        '<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>',
                        '<div class="pswp__caption">',
                            '<div class="pswp__caption__center"></div>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>'
        ]
    };

    var PhotoSwipeInit = function(options) {
        this.settings = $.extend({}, PhotoSwipeInit.defaults, options);
        this.init();
    };

    PhotoSwipeInit.prototype ={
        /**
         * 初始化
         */
        init : function() {
            this.create();
        },

        /**
         * 创建
         */
        create: function() {
            var _this = this;

            var previewHtml = tpl.previewHtml.join('');

            //将浮层结构追加至<body>
            $('body').append(previewHtml);

            // 事件绑定
            _this.bindEvent();
        },

        /**
         * 事件绑定
         */
        bindEvent: function(){
            var _this = this;

            if(_this.settings.imgArrData.length){
                var pswpElement = document.querySelectorAll('.pswp')[0];

                var options = {
                    history: false,
                    focus: false,
                    showAnimationDuration: 0,
                    hideAnimationDuration: 0
                };

                _this.settings.operatorObj.on('click',function(){
                    var curIndex = parseInt($(this).attr('data-index'));

                    var gallery = new photoSwipe( pswpElement, photoSwipeUi, _this.settings.imgArrData, options);
                    gallery.init();
                    gallery.goTo(curIndex);
                });
            }
        }
    };

    // 默认配置
    PhotoSwipeInit.defaults = {
        // 图片数组数据
        imgArrData: [],

        // 图片点击对象
        operatorObj: null
    };

    var rPhotoSwipeInit = function(options) {
        new PhotoSwipeInit(options);
    };

    window.rPhotoSwipeInit = $.rPhotoSwipeInit = $.photoSwipeInit = rPhotoSwipeInit;
});