// 一番上に行けるボタン
$(() => {
  const $window = $(window);
  const $pageTop = $('.page-top-button');

  $pageTop.hide();
  $pageTop.click(() => {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });

  $window.scroll(() => {
    if ($window.scrollTop() >= 20) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
});

// 一番下に行けるボタン
$(() => {
  const $window = $(window);
  const $pageBottom = $('.page-bottom-button');

  $pageBottom.hide();
  $pageBottom.click(() => {
    $('body, html').animate({ scrollTop: 1000 }, 500);
    return false;
  });

  $window.scroll(() => {
    if ($window.scrollTop() >= 50) {
      $pageBottom.fadeOut();
    } else {
      $pageBottom.fadeIn();
    }
  });
});

// 左のnaviのmenuのアニメーション
$(() => {
  $('.navi-block').hover(function(){
    $(this).animate({
      width: 200,
      height: 60
    });
  },function(){
    $(this).animate({
      width: 110,
      height: 60
    });
  });

  $('.navi-block').click(function(){
    window.location = $(this).find("a").attr("href");
    return false;
  });
});
