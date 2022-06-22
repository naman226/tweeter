/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

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
      <p>${data.created_at}</p>
      <div class="key">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>`;
  return tweet;
};

$(document).ready(function() {
  renderTweets(tweetData);
  $('form').submit((event) => {
    event.preventDefault();
    const data = $("textarea").serialize();
    $.post("/tweets", data);
  });
});