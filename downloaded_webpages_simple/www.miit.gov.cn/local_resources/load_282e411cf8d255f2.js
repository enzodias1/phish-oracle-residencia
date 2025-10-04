require.config({
  paths:{
    "adv": '/plugins/advertise/js/adv',
    "advEjectWindow":'/plugins/advertise/js/adv/ejectWindow',
    "advBayWindow": '/plugins/advertise/js/adv/bayWindow',
    "advCouplets": '/plugins/advertise/js/adv/couplets',
    "accessiblereadingLoad": '/plugins/accessiblereading/load',
    "EasyReader": '/plugins/accessiblereading/js/EasyReader.min',
    "jplayer": '/plugins/accessiblereading/js/jquery.jplayer.min',
    "jqueryMd5": '/plugins/accessiblereading/js/jquery.md5.min',
    "jsbrowser": '/plugins/accessiblereading/js/jsbrowser',
    "barrierfree": '/plugins/accessiblereading/js/barrierfree',
    "articlePaginationLoad": '/plugins/libs/articlePagination/articlePaginationLoad',
    "articlePagenation": '/plugins/libs/articlePagination/articlePagination',
    "videoLoad": '/plugins/libs/video/videoLoad',
    "video": '/plugins/libs/video/video',
    "ckplayer": '/plugins/libs/video/ckplayer/ckplayer',
    "articleSlider": '/plugins/libs/articleSlider/articleSlider',
    "articleSliderLoad": '/plugins/libs/articleSlider/articleSliderLoad',
    "hanwebCssLoad": '/plugins/libs/hanwebCss/loadHanwebCss'
  }
});

require(['adv', 'accessiblereadingLoad', 'articlePaginationLoad', 'videoLoad', 'articleSliderLoad', 'hanwebCssLoad'], function (e) {
});
