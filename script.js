var newsItem = [
  {
    "date" : "07/16/2022",
    "story": "Gravitas: Chinese citizens boycott mortgages in 86 cities"
  },
  {
    "date" : "05/13/18",
    "story": "Sed quis mauris suscipit, vehicula lacus sit amet, volutpat libero. Curabitur nec scelerisque orci."
  },
  {
    "date" : "04/28/18",
    "story": "Praesent lacinia elit ut neque ornare vestibulum ac et dolor. Cras vel urna sed elit porta fringilla eget id nulla."
  },
  {
    "date" : "07/18/2022",
    "story": "China Developers Rise as Banks Urged to Tackle Mortgage Crisis"
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
