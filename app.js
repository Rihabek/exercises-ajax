const express = require('express')
const app = express()

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/user', function (req, res) {
  if (!req.body.name) {
    return res.status(500).send("Le nom n'est pas valide !");
  }

  let sex, type

  if (req.body.sex == 1) {
    sex = "Homme"
  } else if (req.body.sex == 2) {
    sex = "Femme"
  }

  if (!sex) {
    return res.status(500).send("Le sexe n'est pas valide !");
  }

  if (req.body.type == 1) {
    type = "FrontEnd"
  } else if (req.body.type == 2) {
    type = "BackEnd"
  } else if (req.body.type == 2) {
    type = "FullStack"
  }

  if (!type) {
    return res.status(500).send("Le type n'est pas valide !");
  }

  res.send('
    <div class="bg-light p-2 rounded">
      <div><strong>Name</strong> : ${req.body.name}</div>
      <div><strong>Sexe</strong> : ${sex}</div>
      <div><strong>Type</strong> : ${type}</div>
    </div>
  ')
});

app.listen(3000, function () {
  console.log(`Server running at http://127.0.0.1:3000/`);
})
  $.ajax({
    url : "/user",
    method : "POST",
    data : data,

    success : function(html){
      $("#formulaire").html(html);
    }


  });
  });

  var hours = parseInt($("#h").text());
  var minutes = parseInt($("#m").text());
  var secondes = parseInt($("#s").text());

  secondes = secondes + 1

  if (secondes == 60){
  minutes = minutes + 1
  secondes = 0
  }

  if (minutes == 60){
  hours = hours +1
  minutes = 0
  }

  if (hours >23){
  hours = 0
  }

  if (hours < 10){
  hours= '0'+ hours;
  }
  if (minutes < 10){
  minutes = '0'+ minutes;
  }

  if (secondes < 10){
  secondes= '0'+secondes;
  }

  $("#h2").html(hours);
  $("#m2").html(minutes);
  $("#s2").html(secondes);
