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

// 获取url参数
function GetRequest() { 
  var url = location.search; //获取url中"?"符后的字串 
  var theRequest = new Object(); 
  if (url.indexOf("?") != -1) { 
      var str = url.substr(1); 
      var strs = str.split("&"); 
      for(var i = 0; i < strs.length; i ++) { 
          var pos = strs[i].indexOf("=");
          // theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]); 
          theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].substr(pos+1)); 
      } 
  } 
  return theRequest; 
} 