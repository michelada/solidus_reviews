//= require jquery.rating
//= require spree/frontend

// Navigating to a page with ratings via TurboLinks shows the radio buttons
if (Turbolinks.supported) {
  document.addEventListener("turbolinks:load", function() {
    $('input[type=radio].star').rating();
  })
} else {
  $(document).on('page:load', function () {
    $('input[type=radio].star').rating();
  });
}
