$(document).ready(function() {
   $("#error").hide();
   $("#mail").hide();

   pwd = document.getElementById('pwd');

   $("#bouton").click(function(){
      if (pwd.validity.valid == false){
         $("#error").show("fast");
      }
      else{
         $("#form").hide();
      }
      return false;
   });

   $("#oublimdp").click(function(){
      $("#login").hide();
      $("#mdp").hide();
      $("#oublimdp").hide();
      $("#check").hide();
      $("#mail").show("fast");
   });

   $("#bouton2").click(function(){
      $("#login").show();
      $("#mdp").show();
      $("#oublimdp").show();
      $("#check").show();
      $("#mail").hide("fast");
   });
});
