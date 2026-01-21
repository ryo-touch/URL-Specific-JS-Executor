// "content_scripts": [
  // {
  //   "matches": ["*://sales-analytics.bell-face.com/*"],
  //   "js": ["bellFace.js"]
  // }
// ]


(function() {
  document.querySelector("#Information").remove();
  document.querySelector('.video_wrapper').style.marginLeft = '0px';
  document.querySelector('.video_wrapper').style.width = '100%';
  console.log('JavaScript executed');
})();
