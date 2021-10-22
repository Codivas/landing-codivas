let contributorsTarget = document.querySelector(".contributors");

let settings = {
  url: "https://api.github.com/repos/Codivas/landing-codivas/contributors",
  method: "GET",
  timeout: 0,
  error: function () {
    let headerTag = document.getElementById("header");
    headerTag.innerHTML += "<h2>Github error. Please try again later.";
  },
};

$.ajax(settings).done(function (data) {
  let rowContent = "";
  let index = 0;
  let elementsPerRow = 5;
  for (let i = 0; i < Math.ceil(data.length / elementsPerRow); i++) {
    for (let j = 0; j < elementsPerRow; j++) {
      let avatarUrl = data[index]["avatar_url"];
      let accountUrl = data[index]["html_url"];
      let username = data[index]["login"];
      rowContent += putInContributorContainer(
        putInImageContainer(avatarUrl) + putInGithubHandle(username, accountUrl)
      );
      index++;
    }
    contributorsTarget.innerHTML += putInRow(rowContent);
    rowContent = "";
  }
});

function putInRow(element) {
  return `<div class="contributors-row"> ${element} </div>`;
}

function putInContributorContainer(element) {
  return `<div class="contributor"> ${element} </div>`;
}

function putInImageContainer(imgUrl) {
  return `<img class="contributor-img" src="${imgUrl}" />`;
}

function putInGithubHandle(username, url) {
  return `<a class="github-username" target="_blank" href="${url}"> ${username} </a>`;
}
