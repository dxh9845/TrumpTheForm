(function(win, doc, $, undefined) {
    'use strict';
    
    // Don't run if jQuery isn't loaded
    if (typeof window.jQuery === 'undefined') {
      return;
    }
    
    // Our code will go here.

    $('input[type=text]')
    	.val('Putin paid to do this')
    	.prev().find('input').prop('checked', true);
    $('textarea')
    .val('Boy oh boy here I go fillin these forms!! \
    	I love to fill these forms for my candidate! \
    	Really makes me feel good about their convictions, \
    	 you know, when they ask their constitutents what they should think!! \
    	 Oh boy.  ');


    $('#id_question_2866_2').prop('checked');
    $('input#id_full_name').val("Vladdy P");
    $('input#id_email').val('killmepls@gmail.com')
    $('input#id_postal_code').val('48169');

  }(window, window.document, window.jQuery));