$(document).ready(function() {

  $('.parent-photos').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {enabled: true},
    titleSrc: 'title'
  });

  $('.link-preview').on('hover', function() {

  });


  $('.link-preview').hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );

  // $('.parent-photos').masonry({
  //   // options
  //   itemSelector: '.child-photo',
  //   columnWidth: 200
  // });

});
