var cmsish = (function(){
  'use strict';

  var templateElement = document.getElementById("entry-template");

  function init(googleSpreadsheetUrl) {
    Tabletop.init({ 
      key: googleSpreadsheetUrl,
      callback: loadData,
      simpleSheet: false
    })
  }

  function bootstrap() {
    var spreadsheetUrl = templateElement.getAttribute('data-spreadsheet-url');
    init(spreadsheetUrl);
  }

  function loadData(data,tabletop) {

    // If no sheet is specified on templateElement, load all data from google spreadsheet

    // Instantiate sitecontent object
    var sitecontent = {};
    
    // For each sheet in spreadsheet
    for (var sheet in data) {

      if (!data.hasOwnProperty(sheet)) continue;
      // Create object of sheet data
      var obj = data[sheet];
      // Replaces spaces in sheet name with dashes
      var sheetName = obj.name.replace(/\s+/g, '-');
      // Populate sitecontent object with object of sheet data
      sitecontent[ sheetName ] = obj['elements'][0];
    }

    // TO DO: If sheet IS specified on templateElement, load only the data from that sheet

    // Compile handlebars
    var source = templateElement.innerHTML;
    var template = Handlebars.compile(source);
    var compiledHtml = template(sitecontent);
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