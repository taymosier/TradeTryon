/*

  This file adds a css class specific to the page the user is currently on.
  It does this by first checking whether or not the user is on the home page
  or viewing the articles list in paged form.

  If the url does not meet either of those criteria, it will remove all classes
  from the '#main' element, and add a class specific to the page the user is
  currently on. (i.e., Going to the 'About' page will add an 'about-page' class
  to the '#main' element)

*/

var paginatedURL = /https:\/\/tradetryon.com\/page\/[0-9]+/g
var urlPointsAtPaginatedArticleList = paginatedURL.test(currentURL);

jQuery(document).ready(function() {
  if( !ActivePageIsHome() && !urlPointsAtPaginatedArticleList ){
    removeClassesFromMainElement();
    addActivePageID();
  }
});

function ActivePageIsHome(){
  return currentURL.toString() === 'https://tradetryon.com/';
}

function removeClassesFromMainElement(){
  let oldClassList = jQuery('#content')[0]['className'];
  jQuery('#content').removeClass(oldClassList);
}

function addActivePageID(){
  let ActivePage = getActivePage();
  let pageID = ActivePage + '-content';
  jQuery('#content').attr('id', `${pageID}`);
}

function getActivePage(){
  return currentURL.slice(23, currentURL.length-1);
}
