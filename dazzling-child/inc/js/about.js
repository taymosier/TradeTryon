jQuery(document).ready(function($){
  //screenSize value is defined on the first line of the main.js file
  let primaryAboutClasses = "content-area col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12";
  let originalClasses = jQuery('#primary').attr('class');
  jQuery('#primary').removeClass(originalClasses);
  jQuery('#primary').addClass(primaryAboutClasses);

});
