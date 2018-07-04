// TODO only call mutation observer when on home page

var mutationObserver = new MutationObserver(function(mutations) {
  try {
    mutations.forEach(function(mutation){
      if (mutation.target.attributes[0].value === 'infinite-loader'){
        adjustImageSizes(1000);
      }
    });
  } catch(e){
    console.log(e);
  }

});

mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: false,
  childList: false,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: false,
});

var isPaginated = false;

jQuery(document).ready(function(){
  var pattern = /paged-\w/g;
  var result;
  var bodyClasses = getElementClasses('body');
    result = bodyClasses.match(pattern);
    if(result){
      isPaginated = true;
      console.log('found a match!');
      // iterates through each img element, manipulating the source path
      // unless it is the menu button icon
      jQuery('img').each(function(){
        if(jQuery(this).attr('class') != 'menu-icon'){
          changeElementSourceToParent(this);
          changeElementSourceToParent(this);
        } else {
          console.log(jQuery(this).attr('class'));
        }
      });
      adjustImageSizes(1000);
    }
});
