$(document).ready(function(){
   $('.modal').modal();
   // $('#anna_form').on('submit', function(){
   //   console.log('Modal code executed.');
   //   $('#submit_modal').modal();
   // });

   //debug
   // $('#anna_button').on('click', function(){
   //   console.log('Modal code executed.');
   //   $('#submit_modal').open();
   // });


   $('#final_submission').on('click', function(){
     console.log('Submitting form now!');
     // $('#anna_form').submit();

     $.ajax({
          type: "POST",
          /*url: "process.php", //process to mail
          data: $('form.contact').serialize(),*/
          success: function (msg) {
              //window.location.replace("/submit_resolved.php");
          },
          complete: function() {
              alert ("Form Submitted!");
              window.location.replace("/analytics");
          }
          // error: function () {
          //     alert("error");
          // }
      });
   });


   $('#anna_import_button').on('click', function(){
    alert('Importing sales history data now!');
    $.ajax({
      type: "POST",
      /*url: "process.php", //process to mail
      data: $('form.contact').serialize(),*/
      success: function (msg) {
          //window.location.replace("/submit_resolved.php");
      },
      complete: function() {
          window.location.replace("/analytics_sales");
      }
      // error: function () {
      //     alert("error");
      // }
  });
    
  });

  });
