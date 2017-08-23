// This is where it all goes :)
$(function(){
  var pageTop = $("#page_top_button");
  pageTop.hide();
  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $(window).scroll(function () {
    if($(this).scrollTop() >= 20) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
});
