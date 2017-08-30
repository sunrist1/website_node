(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('.modal').modal();

    var options = [
      {selector: '#staggered_first', offset: 200, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#staggered-second', offset: 100, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#staggered-third', offset: 100, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
    ];

    Materialize.scrollFire(options);

    // 导航栏，用户案例下拉列表
    $(".dropdown-button").dropdown({
      hover:true
    });

    // 图片点击放大
    // $('.materialboxed').materialbox();

  }); // end of document ready
})(jQuery); // end of jQuery name space