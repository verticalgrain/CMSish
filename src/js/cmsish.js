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

      // if (!data.hasOwnProperty(sheet)) continue;

      // Create object of sheet data
      var obj = data[sheet];

      // Replaces spaces in sheet name with dashes
      var sheetName = obj.name.replace(/\s+/g, '-');

      // Fill the sitecontent object with data from the spreadsheet
      // If sheet has only one row of content, set sitecontent to only that object
      if ( obj['elements'].length <= 1 ) {
        sitecontent[ sheetName ] = obj['elements'][0];
      } else { // If sheet has more than one row, set sitecontent to an array of objects
        sitecontent[ sheetName ] = obj['elements'];
      }

    }

    // TO DO: If sheet IS specified on templateElement, load only the data from that sheet

    // Select template
    var source = templateElement.innerHTML;
    // Compile template 
    var template = Handlebars.compile(source);
    // Add data to the template
    var compiledHtml = template(sitecontent);
    // Select the element to insert populated template into
    var target = document.getElementById('content');
    // Insert template into element
    target.innerHTML= compiledHtml;
  }

  document.addEventListener("DOMContentLoaded", function() {
    bootstrap();
  });

  return {
    init: init
  }

})();