$(document).ready(function () {
  $("#tweet-text").on('input', function (event) {
    let $input = $(this);
    let length = $input.val().length;
    let charsRemaining = 140 - length;
    const $form = $input.closest('form');
    const $counter = $form.find('#count');
    $counter.html(charsRemaining);

    if (charsRemaining < 0) {
      $counter.addClass('red');
      return;
    }
    $counter.removeClass('red');
  });
});


