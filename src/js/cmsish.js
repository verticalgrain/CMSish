var cmsish = (function(){
  'use strict';

  function init(googleSpreadsheetUrl) {
    Tabletop.init({ 
      key: googleSpreadsheetUrl,
      callback: loadData,
      simpleSheet: true
    })
  }

  function loadData(data,tabletop) {
    var templateElement = document.getElementById("entry-template");
    var source = templateElement.innerHTML;
    var template = Handlebars.compile(source);
    var compiledHtml = template(data[0]);
    
    var parser = new DOMParser();
    var convertedHtml = parser.parseFromString(compiledHtml, 'text/xml');
    templateElement.parentElement.appendChild(convertedHtml.documentElement);
  }
  
  return {
    init: init
  }

})();