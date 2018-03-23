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
     $('#anna_form').submit();
   });

 });
