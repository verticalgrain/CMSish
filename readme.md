# cmsish

🔴 UPDATE: Unfortunately, cmsish has stopped working, since Google deprecated the API method that is used by cmsish. I'll try to find some time to create a V2 with the new google sheets API. 🔴 

cmsish is the most simple CMS in the world. Demo: [https://verticalgrain.github.io/CMSish/](https://verticalgrain.github.io/CMSish/)


### Step 1: Create a google spreadsheet and enter some data. Select "File / Publish to the web" and copy the url in the pop-up.

![cmsish_spreadsheet_screenshot.png](https://verticalgrain.github.io/CMSish/demo/images/publish-to-web.png)


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


### Step 4: Add content from the spreadsheet to your template with handlebars expressions. Handlebars expressions look like this: `{{ title }}` 

Make your expressions by combining the spreadsheet sheet name and column name, separated by a period: `{{sheet-name.column-name}}`. Replace spaces with dashes, but leave the case the same as in your spreadsheet.

For example:

```
{{About-Us.Title}}
```

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

### Loop through a collection. 

To make a collection, create a new sheet, and add multiple rows for each column.

![cmsish_rows.png](https://verticalgrain.github.io/CMSish/demo/images/rows.png)

Loop through a collection with the #each helper, using the name of the sheet as the collection name:

```
{{#each Posts}}
  <li>
    <p>Post title: {{Title}}</p>
    <p>Post author: {{Author}}</p>
    <p>Post subtitle: {{Subtitle}}</p>
    <p>Post main content: {{Main-Content}}</p>
    <p>Post testimonial: {{Testimonial}}</p>
    <img src="{{{Image}}}" />
    <br/>
  </li>
{{/each}}
```

Access a single row of a collection by referring to it's index. Posts are zero indexed, so the first one is 0, the second 1, etc

```
Post title for post #2: {{Posts.1.Title}}
```