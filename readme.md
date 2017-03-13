#CMSish

CMSish is the most simple CMS in the world.


###Step 1: Create a google spreadsheet and enter some data. Select "File / Publish to the web" and copy the url in the pop-up.


###Step 2: Include cmsish.min.js in your project.


###Step 3: Initiate cmsish like so: 
```
var myCms = new CMSish.init('https://docs.google.com/spreadsheets/d/1G3RpoOuzoGA0VoG1Whei3PAvoyvbeaMR-2EPazT_f1g/pubhtml')
```


###Step 4: In your HTML, wrap your content in a handlebars script tag by entering 
```
<body>
  <script id="entry-template" type="text/x-handlebars-template">
    <!-- All your HTML goes between these script tags -->

    <!-- Stop your HTML now -->
  </script>
</body>
```


###Step 5: Add handlebars template tags to your markup, using the column names from the spreadsheet as the template tags
```
<h1>{{Title}}</h1>
<p>{{Introtext}}</p>
<p>{{Phone}}</p>
<p>{{Testimonial}}</p>
```