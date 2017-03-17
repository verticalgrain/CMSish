var cmsish = (function(){
  'use strict';

  var templateElement = document.getElementById("entry-template");

  function init(googleSpreadsheetUrl) {
    Tabletop.init({ 
      key: googleSpreadsheetUrl,
      callback: loadData,
      simpleSheet: true
    })
  }

  function bootstrap() {
    var spreadsheetUrl = templateElement.getAttribute('data-spreadsheet-url');
    init(spreadsheetUrl);
  }

  function loadData(data,tabletop) {
    var source = templateElement.innerHTML;
    var template = Handlebars.compile(source);
    var compiledHtml = template(data[0]);
    
    var parser = new DOMParser();
    var convertedHtml = parser.parseFromString(compiledHtml, 'text/xml');
    templateElement.parentElement.appendChild(convertedHtml.documentElement);
  }

  document.addEventListener("DOMContentLoaded", function() {
    bootstrap();
  });

  return {
    init: init
  }

})();