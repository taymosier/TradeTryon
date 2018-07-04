var menuCollapsed = true;

jQuery(document).ready(function(){
  scroll_pos = 0;

  jQuery(document).scroll(function(){
    scroll_pos = jQuery(this).scrollTop();
    if( menuIsCollapsedLeft() && !userHasScrolledPastBanner() && (getScreenWidth() > 575) ){
      changeButtonBackgroundToBlack();
      changeBrandTextToWhite();
    }
    if( userHasScrolledPastBanner() && (getScreenWidth() > 575)){
      changeButtonBackgroundToWhite();
      changeBrandTextToBlack();
    }
  });
  jQuery('.button-toggle-menu').click(function(){
    console.log("clicked");
    if(getScreenWidth() > 575){
      if( menuIsCollapsedLeft() ){
        jQuery('.navbar-brand').css('display', 'none');
        expandMenuMainContainer();
        setTimeout(function(){
          jQuery('.navbar-brand').css('display', 'block');
          jQuery('#navbar').removeClass('collapse')
        }, 350);
        expandMenuLeft();
        makeStylingChangesOnMenuExpand();
      } else if (menuIsExpandedLeft() ){
        jQuery('.navbar-brand').css('display', 'none');
        setTimeout(function(){
          jQuery('.navbar-brand').css('display', 'block');
        }, 350);
        collapseMenuLeft();
        makeStylingChangesOnMenuCollapse();
      }

    } else {
      if( menuIsCollapsedUp() ){
        expandMenuDown();
        expandMenuMainContainer();
        setTimeout(function(){
          jQuery('#navbar').removeClass('collapse')
          jQuery('#secondary aside').css('display', 'block')
          jQuery('.button-collapse-menu').css('visibility', 'visible');
        }, 300);
      } else if (menuIsExpandedDown() ){
        jQuery('#navbar').addClass('collapse');
        jQuery('#secondary aside').css('display', 'none');
        jQuery('.button-collapse-menu').css('visibility', 'hidden');
        collapseMenuUp();
      }
    }
  });

});

function makeStylingChangesOnMenuExpand(){
  jQuery('.navbar-brand').addClass('navbar-expanded');
  jQuery('.navbar-brand').html('<span>TRADE</span><span>&TRYON</span>');

  jQuery('#menu-main').css('visibility', 'visible');
  // removeMenuButtonContainerHoverStyling();
  jQuery('.button-toggle-menu').css('transition', '.235s ease-in-out');
  changeButtonBackgroundToWhite();
  changeBrandTextToBlack();
  decreaseMenuIconSize();
  // removeNavbarBrandHoverEffects();
  if(!userHasScrolledPastBanner()){
    changeButtonBackgroundToWhite();
  }
}

function makeStylingChangesOnMenuCollapse(){
  jQuery('.navbar-brand').removeClass('navbar-expanded');
  jQuery('.navbar-brand').html('<span>TRADE</span><br/><span>& TRYON</span>');
  // addMenuButtonContainerHoverStyling();
  jQuery('.button-toggle-menu').css('transition', 'none');
  jQuery('#menu-main').css('visibility', 'hidden');
  setTimeout(function(){
    if(userHasScrolledPastBanner()){
      changeButtonBackgroundToWhite();
    }
  }, 325);
  changeBrandTextToWhite();
  increaseMenuIconSize();
  collapseMenuMainContainer();
  // navbarBrandHoverEffects();

  if( !userHasScrolledPastBanner() ){
    changeButtonBackgroundToBlack();
    changeBrandTextToWhite();
  }
  if( userHasScrolledPastBanner() ){
    changeBrandTextToBlack();
  }
}

function collapseMenuMainContainer(){
  jQuery('.menu-main-container').css('width', '0px');
  jQuery('#menuMainContainer').css('width', '0px');
  jQuery('#menu-main-navbar').css('width', '0px');
}

function expandMenuMainContainer(){
  if( screenSize === "xsmall" || screenSize === "small" || screenSize === "medium"){
    jQuery('.menu-main-container').css('width', '100vw');
  } else {
    jQuery('.menu-main-container').css('width', '27.5vw');
  }
  jQuery('#menuMainContainer').css('width', '100vw');
  jQuery('#menu-main-navbar').css('width', '100vw');
}

function decreaseMenuIconSize(){
  jQuery('.menu-icon').height('40px');
  jQuery('.menu-icon').width('40px');
  jQuery('.menu-icon').css('margin', '10px 0 0 30px');
}

function increaseMenuIconSize(){
  jQuery('.menu-icon').height('50px');
  jQuery('.menu-icon').width('50px');
  jQuery('.menu-icon').css('margin', '5px 0 0 7.5px');
}

function removeMenuButtonContainerHoverStyling(){
  jQuery('.button-toggle-menu').hover(function(){
    jQuery('.button-toggle-menu').css('box-shadow', 'none');
  }, function(){
    jQuery('.button-toggle-menu').css('box-shadow', 'none');
  });
}

function addMenuButtonContainerHoverStyling(){
  jQuery('.button-toggle-menu').hover(function(){
    jQuery('.button-toggle-menu').css('box-shadow', '-8px -4px 5px 6.5px #BA7B3D');
  }, function(){
    jQuery('.button-toggle-menu').css('box-shadow', 'none');
  });
}

function changeButtonBackgroundToWhite(){
  jQuery('.button-toggle-menu').css('background', 'white');

}

function changeButtonBackgroundToBlack(){
  jQuery('.button-toggle-menu').css('background', 'black');
}


function changeBrandTextToWhite(){
  jQuery('.navbar-brand').css('color', 'white');
}

function changeBrandTextToBlack(){
  jQuery('.navbar-brand').css('color', 'black');
}

function userHasScrolledPastBanner(){
  return scroll_pos >= 140;
}

function menuIsCollapsedLeft(){
  let menuIsLeft = jQuery('.menu-main-container').css('left') === '-450px';
  if( menuIsLeft ){
    menuCollapsed = true;
    return true;
  }
  return false;
}

function menuIsCollapsedUp(){
  let height = jQuery('.menu-main-container').css('height').slice(0,-2);
  height = parseInt(height);
  console.log(height);
  //100 is an arbitrary number. be aware for future possible bugs
  if ( height <= 100){
    menuCollapsed = true;
    return true;
  }
  return false;
}

function menuIsExpandedLeft(){
  return jQuery('.menu-main-container').css('left') === '0px';
}

function menuIsExpandedDown(){
  let height = jQuery('.menu-main-container').css('height').slice(0, -2);
  height = parseInt(height);
  console.log(height);
  //100 is an arbitrary number. be aware for future possible bugs
  if ( height > 100){
    menuCollapsed = false;
    console.log('collapse menu is false');
    return true;
  }
  return false;
}

function collapseMenuLeft() {
  // jQuery('#menuMainContainer').css('left', '-450px');
  jQuery('.menu-main-slide-container').css('left', '-450px');
  jQuery('.menu-main-container').css('left', '-450px');
  changeMenuIconToLogo();
}

function collapseMenuUp(){
  console.log('collapse menu up');
  jQuery('.menu-main-container').height('60px');
}

function expandMenuLeft(){
  jQuery('.navbar-brand').css('color', 'black');
  // jQuery('#menuMainContainer').css('left', '0px');
  jQuery('.menu-main-slide-container').css('left', '0px');
  jQuery('.menu-main-container').css('left', '0px');
  changeMenuIconToExit();
}

function expandMenuDown(){
  console.log('expanding menu down')
  jQuery('.menu-main-container').height('100vh');
}

function changeMenuIconToLogo(){
  if(!isPaginated){
    jQuery(".menu-icon").attr("src","wp-content/themes/dazzling-child/images/tradetryon_logo.png");
  } else {
    jQuery(".menu-icon").attr("src","../wp-content/themes/dazzling-child/images/tradetryon_logo.png");
  }
}

function changeMenuIconToHamburger(){
  jQuery(".menu-icon").attr("src","wp-content/themes/dazzling-child/images/hamburger-black.png");
}

function changeMenuIconToExit(){
  jQuery(".menu-icon").attr("src","wp-content/themes/dazzling-child/images/exit.png");
}

function setMenuIcon(){
  if(screenSize === 'small' || screenSize === 'xsmall' ){
    changeMenuIconToHamburger();
  } else {
    changeMenuIconToLogo();
  }
}
