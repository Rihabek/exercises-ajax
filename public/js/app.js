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


  $("#form").submit(function () {
    var data = {
       name : $(this).find('[name="name"]').val(),
       sex :  $(this).find('[name="sex"]:checked').val(),
       type :  $(this).find('[name="type"]').val(),

    };
    console.log(data);
  })



});
