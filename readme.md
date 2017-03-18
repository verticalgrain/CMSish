# cmsish

cmsish is the most simple CMS in the world. Demo: [http://verticalgraindesign.com/CMSish/demo/](http://verticalgraindesign.com/CMSish/demo)


### Step 1: Create a google spreadsheet and enter some data. Select "File / Publish to the web" and copy the url in the pop-up.

![cmsish_spreadsheet.png](https://s21.postimg.org/yowwjl2qf/cmsish_spreadsheet.png)


### Step 2: Include cmsish.min.js in your project (found in dist/cmsish.min.js).
```
<script src="cmsish.min.js" type="text/javascript"></script>
```


### Step 3: In your HTML, wrap your content in handlebars script tags. Include a data attribute with the URL to your spreadsheet.
```
<body>
  <script id="entry-template" type="text/x-handlebars-template" data-spreadsheet-url="ADD_YOUR_GOOGLE_SPREADSHEET_URL_HERE">
    <!-- All your HTML goes between these script tags -->

    <!-- Stop your HTML now -->
  </script>
</body>
```


### Step 4: Add content from the spreadsheet to your template with handlebars expressions. Handlebars expressions look like this: `{{title}}`. 

Make your expressions by combining the spreadsheet sheet name and column name, separated by a period: `{{sheet-name.column-name}}`. Replace spaces with dashes, but leave the case the same as in your spreadsheet.

For example:

{{About-Us.Title}}

```
<body>
  <script id="entry-template" type="text/x-handlebars-template">
    <!-- All your HTML goes between these script tags -->

    <h1>{{About-Us.Title}}</h1>
    
    <p>{{About-Us.Introtext}}</p>
    
    <p>{{About-Us.Phone}}</p>
    
    <p>{{About-Us.Testimonial}}</p>

    <!-- Stop your HTML now -->
  </script>
</body>
```



## Other options:

### Initiate cmsish in JS instead of with a data-spreadsheet-url attribute:
```
<script type="text/javascript">
  var myCms = new cmsish.init('GOOGLE_SPREADSHEET_URL');
</script>
```