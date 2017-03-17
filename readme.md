#cmsish

cmsish is the most simple CMS in the world. Demo: [http://verticalgraindesign.com/CMSish/demo/](http://verticalgraindesign.com/CMSish/demo)


###Step 1: Create a google spreadsheet and enter some data. Select "File / Publish to the web" and copy the url in the pop-up.
![spreadsheet.png](https://image.ibb.co/fy7swF/spreadsheet.png)


###Step 2: Include cmsish.min.js in your project (found in dist/cmsish.min.js).
```
<script src="cmsish.min.js" type="text/javascript"></script>
```


###Step 3: In your HTML, wrap your content in handlebars script tags. Include a data attribute with the URL to your spreadsheet.
```
<body>
  <script id="entry-template" type="text/x-handlebars-template" data-spreadsheet-url="ADD_YOUR_GOOGLE_SPREADSHEET_URL_HERE">
    <!-- All your HTML goes between these script tags -->

    <!-- Stop your HTML now -->
  </script>
</body>
```


###Step 4: Add handlebars template tags to your markup, using the column names from the spreadsheet as the template tags
```
<body>
  <script id="entry-template" type="text/x-handlebars-template">
    <!-- All your HTML goes between these script tags -->

    <h1>{{Title}}</h1>
    
    <p>{{Introtext}}</p>
    
    <p>{{Phone}}</p>
    
    <p>{{Testimonial}}</p>

    <!-- Stop your HTML now -->
  </script>
</body>
```



##Other options:
###Initiate cmsish in JS instead of with a data-spreadsheet-url attribute:
```
<script type="text/javascript">
  var myCms = new cmsish.init('GOOGLE_SPREADSHEET_URL');
</script>
```