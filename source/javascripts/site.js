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
