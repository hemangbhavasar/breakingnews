var newsItem = [
  {
    "date" : "07/16/2022",
    "story": "Gravitas: Chinese citizens boycott mortgages in 86 cities"
  },
  {
    "date" : "07/15/2022",
    "story": "Aljazeera: China’s economy slows sharply, fanning global recession fears"
  },
  {
    "date" : "04/28/18",
    "story": "Praesent lacinia elit ut neque ornare vestibulum ac et dolor. Cras vel urna sed elit porta fringilla eget id nulla."
  },
  {
    "date" : "07/18/2022",
    "story": "Bloomberg: China Developers Rise as Banks Urged to Tackle Mortgage Crisis"
  },
  {
    "date" : "04/12/18",
    "story": "This is a news story 5."
  }
];

for (i = 0; i < newsItem.length; i++) {
  $("#newsTicker p").append(
    "<span class='date'>" + newsItem[i].date + ":</span>" +
    "<span class='story'>" + newsItem[i].story + "</span>"
  );
}
