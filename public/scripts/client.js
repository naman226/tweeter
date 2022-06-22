
$(document).ready(function() {
  const renderTweets = function(data) {
    data.forEach(element => {
      const tweet = createTweetElement(element);
      $("#tweet-holder").append(tweet);
    });
  };

  const createTweetElement = function(data) {
    const tweet =
      `<article class="tweet-display">
    <header class="head">
      <div class="avatar-name">
        <div class="avatar-pic">
          <img src=${data.user.avatars}>
        </div>
        <div class="tweet-name">${data.user.name}</div>
      </div>
      <div class="username">${data.user.handle}</div>
    </header>
    <p class="summary">${data.content.text}</p>
    <footer class="foot">
      <p>${timeago.format(data.created_at)}</p>
      <div class="key">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>`;
    return tweet;
  };


  $('form').submit((event) => {
    event.preventDefault();
    const data = $("textarea").serialize();
    $.post("/tweets", data);
  });
  const loadTweets = function() {
    $.get("/tweets", (data) => {
      renderTweets(data);
    });
  };
  loadTweets();
});