function getUrl(){
  return window.location.href;
}

function logUrl(){
  console.log(window.location.href);
}

function getScreenWidth() {
  return jQuery(window).width();
}

function getElementClassesByClass(element) {
  element = element.toString();
  if( typeof pattern != String ){
    console.log('Element passed into getElementClassesByClass is not a string');
    return null;
  }
  element = element.prepend('.');
  return jQuery(element).classList;
}

function getElementClassesByID(element) {
  element = element.toString();
  if( typeof pattern != String ){
    console.log('Element passed into ggetElementClassesByID is not a string');
    return null;
  }
  element = element.prepend('#');
  return jQuery(element).classList;
}

function getElementClasses(element) {
  if( typeof element != 'string' ){
    console.log('Element passed into getElementClasses is not a string');
    return null;
  }
  return jQuery(element).attr('class');
}

function getEachInstanceOf(element){
  var array = jQuery(elemenet)
}

//works for finding .entry-image img elements
//TODO Generalize function
function getElementProperty(element, property){
  console.log(element)
  return jQuery(element)[0][`${property.toString()}`];
}

function changeElementSourceToParent(element){
  var source = '../' + jQuery(element).attr('src');
  jQuery(element).attr('src', source);
}

function isPaginated(){
  return isPaginated;
}

function hideElementForSetTime(element, time){
  jQuery(element).css('visibility', 'hidden');
  setTimeout(function(){
    jQuery(element).css('visibility', 'visible');
  }, time);
}

function makeArticlesOpaqueAfterSetTime(time){
  setTimeout(function(){
    jQuery('body #main').css('opacity', 1);
  }, time);
}

function isSinglePost(){
  return jQuery('body').hasClass('single');
}

function makeBrandVisible(){
  jQuery('.navbar-brand').css('visibility', 'visible');
}
