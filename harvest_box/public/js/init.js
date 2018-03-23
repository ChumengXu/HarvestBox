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
     alert('Submitting form now!');
     $('#anna_form').submit();
     
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