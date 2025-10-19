"use strict";
(() => {
  // Serie.ts
  var Serie = class {
    constructor(id, name, channel, seasons, description, webpage, imageUrl) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.webpage = webpage;
      this.imageUrl = imageUrl;
    }
  };

  // data.ts
  var series = [
    new Serie(
      1,
      "Breaking Bad",
      "AMC",
      5,
      "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer",
      "https://www.amc.com/shows/breaking-bad",
      "https://i.imgur.com/GGje0vc.jpg"
    ),
    new Serie(
      2,
      "Orange Is the New Black",
      "Netflix",
      6,
      "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary",
      "https://www.netflix.com/co/title/70242311",
      "https://i.imgur.com/EvKe48G.jpg"
    ),
    new Serie(
      3,
      "Game of Thrones",
      "HBO",
      7,
      "American fantasy drama",
      "https://www.hbo.com/game-of-thrones",
      "https://i.imgur.com/TDCEV1S.jpg"
    ),
    new Serie(
      4,
      "The Big Bang Theory",
      "CBS",
      12,
      "Leonard and Sheldon are brilliant physicists\u2014geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz\u2019s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
      "https://www.cbs.com/shows/big_bang_theory/about/",
      "https://i.imgur.com/uAEpVWk.jpg"
    ),
    new Serie(
      5,
      "Sherlock",
      "BBC",
      4,
      "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
      "https://www.bbc.co.uk/programmes/b018ttws",
      "https://i.imgur.com/02B7qhj.jpg"
    ),
    new Serie(
      6,
      "A Very English Scandal",
      "BBC",
      2,
      "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
      "https://www.bbc.co.uk/programmes/p065smy4",
      "https://i.imgur.com/D4y3DrQ.jpg"
    )
  ];

  // main.ts
  var tableBody = document.getElementById("series-tbody");
  var avgSeasonsElem = document.getElementById("avg-seasons");
  var cardImg = document.getElementById("card-img");
  var cardTitle = document.getElementById("card-title");
  var cardText = document.getElementById("card-text");
  var cardLink = document.getElementById("card-link");
  function renderTable(data) {
    if (!tableBody) return;
    tableBody.innerHTML = "";
    data.forEach((s) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <th scope="row">${s.id}</th>
        <td class="text-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover series-name" data-id="${s.id}" style="cursor:pointer">${s.name}</td>
        <td>${s.channel}</td>
        <td>${s.seasons}</td>
    `;
      tr.addEventListener("click", () => showCard(s));
      tableBody.appendChild(tr);
    });
  }
  function averageSeasons(data) {
    if (data.length === 0) return 0;
    const sum = data.reduce((acc, s) => acc + s.seasons, 0);
    return +(sum / data.length).toFixed(2);
  }
  function showCard(s) {
    if (cardImg) cardImg.src = s.imageUrl;
    if (cardImg) cardImg.alt = s.name;
    if (cardTitle) cardTitle.textContent = s.name;
    if (cardText) cardText.textContent = s.description;
    if (cardLink) {
      cardLink.href = s.webpage;
      cardLink.textContent = "Sitio oficial";
      cardLink.target = "_blank";
      cardLink.rel = "noopener noreferrer";
    }
  }
  renderTable(series);
  if (avgSeasonsElem) avgSeasonsElem.textContent = averageSeasons(series).toString();
  if (series.length) showCard(series[0]);
})();
