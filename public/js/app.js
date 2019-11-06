$(function() {
  $.ajax({
    url : 'ajax/content.html',
    Type : 'GET',

    success : function (html) {
      $("#replaceText").html(html);
    },

    error : function (error) {
      console.log("error");
    },

  });

  setTimeout(function (){

    $.ajax({
      url : 'ajax/delay5.html',
      type : 'GET',

      success : function(html){
        $("#blop").html(html);
      },

    })
  }, 5000)

  $("#buttonClick").on('click', function(){   //mieux d'utiliser la functoin on click a voir

    $.ajax({
      url : "ajax/info.html",
      type : 'GET',
      success : function(html){
        $("#button").html(html);
      },
    });

  });

  var data
  $("#form").submit(function () {
    var data = {
       name : $(this).find('[name="name"]').val(),
       sex :  $(this).find('[name="sex"]:checked').val(),
       type :  $(this).find('[name="type"]').val(),

    };
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





});
