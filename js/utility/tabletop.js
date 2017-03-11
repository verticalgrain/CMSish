app.tabletop = (function($){
  'use strict';

  function init() {
    Tabletop.init({ 
      key: app.config.vars.spreadsheetUrl,
      callback: app.handlebars.loadData,
      simpleSheet: true 
    })
  }

  $(window).on('load', init);

})(jQuery);
