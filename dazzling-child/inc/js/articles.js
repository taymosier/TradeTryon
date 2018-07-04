/*
  JS file containing functions related to the articles posted on the front page,
  and may act on the article elements themselves and/or inner elements contained within
  article elements.

  These actions may affect element styling, response to certain user actions, and calculations
  for element attributes.
*/

// TODO - fix infinite scroll bug (? loading non-existent posts)

var screenSize = determineScreenSize();

 function adjustImageSizes(waitTime){
  setTimeout(function(){
    jQuery('.post').each(function(){
      let margins = [];
      let image = getChildImage(this);
      resetMaxHeightAndWidth(image);
      let heightToWidthRatio = getOriginalImageDimensions(image);
      let imageSource = getImageSource(image);
      let imageFileName = trimSrcToFileName(imageSource);
      //sets a custom width for the image
      let imageWidth = determineImageWidth(imageFileName, image);
      image.css('max-width', imageWidth);
      imageWidth = image.width();
      let imageHeight = scaleHeight(imageWidth, heightToWidthRatio);
      margins = setMarginsAccordingToScreenSize(screenSize, image, imageWidth, imageHeight);
      setMargins(image, margins);
    });
  }, waitTime);
}

function getChildImage(parent){
  // parent = 'this' .post
  return jQuery(parent).children('.image-container').children('img');
}

function resetMaxHeightAndWidth(image){
  //sets max width and height equal to the size of its parent container
  image.css('max-width', '180px')
  image.css('max-height', '125px');
}

function getOriginalImageDimensions(image){
  // image = jQuery(parent).children('.image-container').children('img')
  let width = image[0]['naturalWidth'];
  let height = image[0]['naturalHeight'];
  return (height/width).toFixed(2);
}

function getImageSource(image){
  return jQuery(image).attr('src');
}

function trimSrcToFileName(src){
 let startingIndexOfFileName = src.lastIndexOf("//") + 2;
 let imageFileName = src.slice(startingIndexOfFileName, -4);
 return imageFileName;
}

//sets customized widths for specific images
//called in articles.js
function determineImageWidth(imageFile, image){
  if(screenSize === 'xsmall'){
    //used for wide images
    // TODO checkWidthToHeightRatio(image.width, image.height)
    if(image.width()/image.height() >= 1.75){
      return 90;
    }
    //defaults image width for small screens to 50px
    return 50;
  } else {
    switch(imageFile){
      case 'wcnc':
        return 115;
        break;
      case 'wbtv':
        return 65;
        break;
      case 'cltobsb':
        return 170;
        break;
      case 'specnews':
        return 100;
        break;
      case 'csr':
        return 70;
        break;
      case 'c5':
        break;
      case 'creative':
        break;
      case 'clture':
        return 100;
        break;
      case 'fox46':
        return 110;
        break;
      case 'wccb':
        return 70;
        break;
      case 'wsoc':
        return 65;
        break;
      case 'panthers':
        return 145;
        break;
      case 'cbj':
      return 125;
        break;
      case 'cltmag':
        return 125;
        break;
      case 'ca':
        return 53;
        break;
      case 'cltstories':
        return 65;
        break;
      default:
        break;
    }
  }
}

function setImageWidth(image, width){
  image.css('min-width', width);
  image.css('max-width', width);
}

function scaleHeight(width, ratio){
  return width*ratio;
}

function setMarginsAccordingToScreenSize(screenSize, image, imageWidth, imageHeight){
  switch(screenSize){
    case 'xlarge':
      return calculateImageMarginsForXLScreens(imageWidth, imageHeight);
      break;
    case 'large':
      return calculateImageMarginsForLargeScreens(imageWidth, imageHeight);
      break;
    case 'medium':
      return calculateImageMarginsForMediumScreens(imageWidth, imageHeight);
      break;
    case 'small':
      return calculateImageMarginsForSmallScreens(imageWidth, imageHeight);
      break;
    case 'xsmall':
      setImageHeight(image, imageHeight);
      return calculateImageMarginsForXSmallScreens(imageWidth, imageHeight);
      break;
    default:
      return null;
      break;
  }
}

function calculateImageMarginsForXLScreens(imageWidth, imageHeight){
  var margins = []
  margins[0] = ((180-imageWidth)/2);
  margins[1] = ((126-imageHeight)/2);
  return margins;
}

function calculateImageMarginsForLargeScreens(imageWidth, imageHeight){
  var margins = []
  margins[0] = ((180-imageWidth)/2);
  margins[1] = ((126-imageHeight)/2);
  return margins;
}

function calculateImageMarginsForMediumScreens(imageWidth, imageHeight){
  var margins = []
  margins[0] = ((180-imageWidth)/2);
  margins[1] = ((126-imageHeight)/2);
  return margins;
}

function calculateImageMarginsForSmallScreens(imageWidth, imageHeight){
  var margins = []
  margins[0] = ((180-imageWidth)/2);
  margins[1] = ((126-imageHeight)/2);
  return margins;
}

function calculateImageMarginsForXSmallScreens(imageWidth, imageHeight){
  var margins = []
  margins[0] = ((120-imageWidth)/2);
  margins[1] = ((60-imageHeight)/2);
  margins[2] = 10;
  return margins;
}

function setImageHeight(image, height){
  image.css('min-height', height);
  image.css('max-height', height);
}

function setMargins(image, margins){
  image.css('margin-top', margins[1]);
  image.css('margin-right', margins[0]);
  image.css('margin-bottom', margins[1]);
  image.css('margin-left', margins[0]);
  if(margins.length === 3){
    image.css('margin-left', margins[2]);
  }
}
