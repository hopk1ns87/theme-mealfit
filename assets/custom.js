BOLD.options.app.on('option_products_loaded', function(data){
  console.log('option_products_loaded!');
  $('.bold_option.bold_option_checkbox + .bold_option_checkboxmulti').addClass('bold_option_checkbox_extras');

  var $defaultCheckboxGroups = $('.bold_option_checkboxmulti:not(.bold_option_checkbox_extras)');

  for (var i = 0; i < $defaultCheckboxGroups.length; i++) {
    // add hidden error message
    $( $defaultCheckboxGroups[i] ).find('.bold_option_title').append('<span class="error hide">Can\'t select more than 2</span>');

    $( $defaultCheckboxGroups[i] ).on('click', 'input[type="checkbox"]', function(e) {
      var target = e.delegateTarget;
      var checkedQuantity = $(target).find('input:checked').length;

      // check each default checkbox group for max 2 checks
      if (checkedQuantity > 2) {
        e.preventDefault();
        $(target).find('.error').removeClass('hide');
      } else {
        $(target).find('.error').addClass('hide');
      }
    });
  }
});