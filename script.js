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
    "date" : "04/19/18",
    "story": "Praesent bibendum odio id euismod scelerisque. In tempor, ligula nec porta egestas, magna ipsum sodales libero, sit amet ultrices lorem ex vitae justo."
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
