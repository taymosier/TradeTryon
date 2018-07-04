jQuery(document).ready(function($){
  //screenSize value is defined on the first line of the main.js file
  if(screenSize === 'medium'){
    jQuery('#contact-content .contact-form label:last').css('display', 'block');
    jQuery('#contact-content .contact-form label:last').css('float', 'none');
    jQuery('#primary').removeClass('col-md-8');
    jQuery('#primary').addClass('col-md-12');
  }
});
