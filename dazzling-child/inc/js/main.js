var screenSize = determineScreenSize();
var currentURL = window.location.href;

//TODO add image to header / menu

jQuery(document).ready(function($) {
  //delayAction function is defined in helpers and needs
  // to be generalized in order to use different actions
  makeArticlesOpaqueAfterSetTime(1000);
  var scroll_pos = 0;
  var screenWidth = jQuery(window).width();
  screenSize = getScreenSize(screenWidth);
  if( getScreenWidth() <= 565){
    jQuery('.site-title a').html("TRADE & TRYON");
  } else {
    jQuery('.site-title a').html('<span>TRADE</span><br /><span>& TRYON</span>');
  }
  // setMenuIcon();
  adjustImageSizes(1000);
  jQuery('.widget-title').remove();

  //recalculates the screen size variable everytime the window is resized
  jQuery(window).resize(function(){
    screenWidth = jQuery(window).outerWidth(true);
    screenSize = getScreenSize(screenWidth);
    if( getScreenWidth() <= 565 ){
      jQuery('.site-title a').html("TRADE & TRYON");
    } else {
      jQuery('.site-title a').html('<span>TRADE</span><br /><span>& TRYON</span>');
    }

    // setLogoLeftMargin();
    // setMenuIcon();
    adjustImageSizes(500);
  });
});

// function setLogoLeftMargin(){
//   let margin = getScreenWidth()-180;
//   return margin;
// }

function determineScreenSize(){
  let screenWidth = jQuery(window).outerWidth(true);
  return getScreenSize(screenWidth);
}

//returns a string descriptor of the screen size. Defaults to xlarge
function getScreenSize(width){
  if(width >= 1200){
    return 'xlarge';
  } else if (width >= 992 && width <= 1199 ){
    return 'large';
  } else if (width >=768 && width <= 991){
    return 'medium';
  } else if (width >= 576 && width <= 767){
    return 'small';
  } else if (width <= 575){
    return 'xsmall'
  } else {
    return 'xlarge';
  }
}

function navbarBrandHoverEffects(){
  jQuery('.navbar-brand').hover(function(){
    jQuery('.button-toggle-menu').css('box-shadow', '-8px -4px 5px 6.5px #BA7B3D');
  }, function(){
    jQuery('.button-toggle-menu').css('box-shadow', 'none');
  });
}

function removeNavbarBrandHoverEffects(){
  jQuery('.navbar-brand').hover(function(){
    jQuery('.button-toggle-menu').css('box-shadow', 'none');
  }, function(){
    jQuery('.button-toggle-menu').css('box-shadow', 'none');
  });
}
