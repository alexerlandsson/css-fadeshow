# CSS Fadeshow
This is a fadeshow (slideshow with fade effect) made in CSS only. The slideshow is built in SCSS which provides customisation and easy adaption to your site. All you have to do is to change the variables in css-slideshow.scss.

**Demo: [https://alexerlandsson.com/github/css-fadeshow/](https://alexerlandsson.com/github/css-fadeshow/)**

## Quick start
### 1. Create the HTML markup
The default markup looks like this:

```html
<div data-am-fadeshow="3 next-prev-navigation">
	
	<!-- Radio -->
	<input type="radio" name="gallery" id="img-1" checked />
	<input type="radio" name="gallery" id="img-2" />
	<input type="radio" name="gallery" id="img-3" />
	
	<!-- Images -->
	<div class="images">
		<div class="image" style="background-image: url();"></div>
		<div class="image" style="background-image: url();"></div>
		<div class="image" style="background-image: url();"></div>
	</div>
	
	<!-- Navigation -->
	<div class="navigation">
		<label class="dot" for="img-1"></label>
		<label class="dot" for="img-2"></label>
		<label class="dot" for="img-3"></label>
	</div>
	
	<!-- Prev next navigation -->
	<div class="prev-container">
		<label class="prev" for="img-1"></label>
		<label class="prev" for="img-2"></label>
		<label class="prev" for="img-3"></label>
	</div>
	<div class="next-container">
		<label class="next" for="img-1"></label>
		<label class="next" for="img-2"></label>
		<label class="next" for="img-3"></label>
	</div>
	
</div>
```

### 2. Modify the markup
There are different modifiers you could add to `[data-am-fadeshow]`.

#### Number of images (int)
Set the number of images the fadeshow has. The fadeshow will work without this set, but the prev/next navigation won't. Example: If fadeshow contains three (3) images, add `3` as a modifier.

#### next-prev-navigation
Decides if the prev/next buttons should be used or not. If set, the buttons will be used. This also requires the number of images set as a modifier.


### 3. Include the CSS to the HTML
Add the following line to your HTML file in the head tag:
```html
<link rel="stylesheet" href="YOUR_PATH/fadeshow.min.css">
```

## Customize Installation
To customize the installation, download the SCSS file (fadeshow.scss) and include in in your project. If you're already using SCSS as preprocessor, include the file in your structure and concatenate into your main CSS file.

### Options
The first section of fadeshow.scss contains varaibles which are made to be modified to go with your preferences. DO NOT change anything else in the file than the varibles if you don't know what you are doing.

Variable | Description
-------- | --------
$max-images | Defines the maximum of images allowed. There is no technical limit, but the higher number, the larger the CSS file will be.
$prefix | Set to `false` if you don't want the compiled CSS to include prefixes. Default `true`.
$fade-time | Change to the desired transition time of the fade between images. May be set with ms or s unit. Default `1000ms`.
$prev-next-fontfamily | Set the CSS font-family for prev/next button's icons. Useful if you want to include icons from a font library. Default `sans-serif`.
$prev-next-icons-size | Set the font-size of prev/next button's icons. Default `3vw`.
$prev-icon | Icon to use for previous button.
$next-icon | Icon to use for next button.
$autohide-next-prev | Set to `false` if you want the prev/next buttons to be visible all the time. If true, the buttons will be visible on hover over the fadeshow. Default `true`.
$dot-color | Color of the inactive dots (navigation).
$dot-active-color | Color of the active dot (navigation).
$fade-color | Background color behind the iamges. Will be a part of the transitions between images. Default `#fff`.

## Browser Compatibility
Coming soon...

## License
The MIT License (MIT)

Copyright (c) 2016 Alexander Erlandsson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.