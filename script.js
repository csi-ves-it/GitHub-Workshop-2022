fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      document.getElementById("data").innerHTML +=
        "Name: " +
        data[i].Name +
        "<br> " +
        "GitHub: " +
        data[i].user_id +
        "<br><br>";
    }
  });
