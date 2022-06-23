
$(document).ready(function () {
  const renderTweets = function (data) {
    data.forEach(element => {
      const tweet = createTweetElement(element);
      $("#tweet-holder").prepend(tweet);
    });
  };

  const createTweetElement = function (data) {
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
    let message = $('textarea').val();
    if (!message) {
      alert("Tweet Empty");
    } else if (message.length > 140) {
      alert("Tweet too long");
    } else {
      $.post("/tweets", data, () => {
        $.get("/tweets", (tweet) => {
          const newTweet = tweet[tweet.length - 1];
          $("#tweet-holder").prepend(createTweetElement(newTweet));
        });
      });
    }
  });
  const loadTweets = function() {
    $.get("/tweets", (data) => {
      renderTweets(data);
    });
  };
  loadTweets();
});