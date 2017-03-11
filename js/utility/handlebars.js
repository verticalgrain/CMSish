app.handlebars = (function($){
  'use strict';

  function loadData(data,tabletop) {
    var template = $('#body').html();
    var templateScript = Handlebars.compile(template);
    var html = templateScript(data[0]);
    $('body').append(html);
  }

  return {
    loadData: loadData
  }

})(jQuery);