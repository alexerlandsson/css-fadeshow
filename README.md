# CSS Fadeshow
This is a fadeshow (slideshow with fade effect) made in CSS only. The slideshow is built in SCSS which provides customization and easy adaption to your site. All you have to do is to change the variables in css-slideshow.scss.

**For a stable version, always download from the Release page.**

**Demo: [https://alexerlandsson.com/github/css-fadeshow/](https://alexerlandsson.com/github/css-fadeshow/)**  

## Why use CSS Fadeshow?

- No JavaScript is needed (HTML and CSS only)
- Great browser support
- Easy to customize
- Easy to add custom themes
- Lightweight (2.2KB gzipped, 5 slides and all modifiers included)
- Modular Addons (Modifiers)

## Quick start
### 1. Create the HTML markup
The default markup looks like this:

```html
<div data-am-fadeshow="quick-nav prev-next-nav slide-counter autoplay ken-burns">

  <!-- Radio -->
  <input type="radio" name="css-fadeshow" id="slide-1" />
  <input type="radio" name="css-fadeshow" id="slide-2" />
  <input type="radio" name="css-fadeshow" id="slide-3" />

  <!-- Slides -->
  <div class="fs-slides">
    <div class="fs-slide">
      <div class="fs-slide-bg" style="background-image: url();"></div>
      <!-- Other content goes here... -->
    </div>
    <div class="fs-slide">
      <div class="fs-slide-bg" style="background-image: url();"></div>
      <!-- Other content goes here... -->
    </div>
    <div class="fs-slide">
      <div class="fs-slide-bg" style="background-image: url();"></div>
      <!-- Other content goes here... -->
    </div>
  </div>

  <!-- Quick Navigation -->
  <div class="fs-quick-nav">
    <label class="fs-quick-btn" for="slide-1"></label>
    <label class="fs-quick-btn" for="slide-2"></label>
    <label class="fs-quick-btn" for="slide-3"></label>
  </div>

  <!-- Prev Navigation -->
  <div class="fs-prev-nav">
    <label class="fs-prev-btn" for="slide-1"></label>
    <label class="fs-prev-btn" for="slide-2"></label>
    <label class="fs-prev-btn" for="slide-3"></label>
  </div>

  <!-- Next Navigation -->
  <div class="fs-next-nav">
    <label class="fs-next-btn" for="slide-1"></label>
    <label class="fs-next-btn" for="slide-2"></label>
    <label class="fs-next-btn" for="slide-3"></label>
  </div>

  <!-- Slide Counter (only one required) -->
  <div class="fs-slide-counter">
    <span class="fs-slide-counter-current"></span>/<span class="fs-slide-counter-total"></span>
  </div>

</div>
```

### 2. Modify the markup

#### 2.1 Add Slides, Quick Navigation, Prev/Next Navigation and Slide Counter
The fadeshow contains of six sections (radio, slides, quick navigation, prev navigation, next navigation and slide counter). To add a slide, you need to add one if each but slide container (as markup shows above). It is important to keep the same structure and order. The CSS will check for the nth-child inside it's containers, so be sure to not change the class names.

The markup inside `.fs-slide` is optional and could be anything. The `.fs-slide-bg` class is however target for Ken Burns effect, so if you want that feature, that class name is necessary.

#### 2.2 Select Modifiers
Modifiers are used to add functions in a modular way. You can choose which modifiers to use or not. All different combinations are possible!

##### 2.2.1 quick-nav
Quick Navigation is the navigation showed at the bottom. This navigation lets you navigate between any slides instantly. Example:

```html
<div data-am-fadeshow="quick-nav"></div>
```

##### 2.2.2 prev-next-nav
Decides if the prev/next buttons should be used or not. If set, the buttons will be used. Example:

```html
<div data-am-fadeshow="prev-next-nav"></div>
```

##### 2.2.3 slide-counter
This modifier adds a slide counter to the fadeshow. This will be displayed as "1/5" when on the first slide etc. Example:

```html
<div data-am-fadeshow="slide-counter"></div>
```

##### 2.2.4 autoplay
Add autoplay to the gallery. Interaction with navigation will result in cancelation of autoplay. Autoplay will work on load. When autoplay is active, Prev/Next Navigation and Slide Counter won't be visible. The only way to cancel the autoplay is to use Quick Navigation to navigate to another slide. When the autoplay is canceled, Prev/Next Navigation and Slide Counter will be displayed if added to the fadeshow. Example:

```html
<div data-am-fadeshow="autoplay"></div>
```

### 3. Include the CSS to the HTML
Add the following line to your HTML file in the head tag:
```html
<link rel="stylesheet" href="YOUR_PATH/css-fadeshow.min.css">
```

## Customized Installation
To customize the installation, download the folder named `scss` and include the file `css-fadeshow.scss` in your project. This way of implementation is highly recommended due to the possibility to customize the output. SCSS is required when using the fadeshow in this way.

### Options
The first section of `css-fadeshow.scss` contains variables which are made to be modified to go with your preferences. __DO NOT__ change anything else in the file than the variables if you don't know what you are doing.

The first variables are labeled "Modifiers to include". These defines which modifiers you want to use in your implementation. If you're planning to not use some of the modifiers – set these to false. This will result in a smaller CSS. The same goes for number of slides – the more slides you want to have, the larger the CSS file will be.

| Variable                    | Description                 |
|-----------------------------| ----------------------------|
| $fs-include-autoplay        | Whether to include Autoplay or not. Default `true`. |
| $fs-include-prevnextnav     | Whether to include Prev/Next Navigation or not. Default `true`. |
| $fs-include-quicknav        | Whether to include Quick Navigation or not. Default `true`. |
| $fs-include-slidecounter    | Whether to include Slide Counter or not. Default `true`. |
| $fs-include-kenburns        | Whether to include Ken Burns effet to background image or not. Default `true`. |
| $fs-max-slides              | Defines the maximum of images allowed. There is no technical limit, but the higher number, the larger the CSS file will be. |
| $fs-fade-time               | Change to the desired transition time of the fade between images. Value counts in seconds. Default `1`. |
| $fs-fade-color              | Background color behind the images. Will be a part of the transitions between images. Default `#fff`. |
| $fs-prefix                  | Set to `false` if you don't want the compiled CSS to include prefixes. Default `true`. |
| $fs-breakpoint-small        | Set to the desired max-width for smaller screens. Default `500px`. |
| $fs-prevnextnav-loop        | Set to false to hide the prev button on first slide and the next button on last slide. Default true. |
| $fs-autoplay-duration       | Set the duration of each slide in autoplay mode. Value counts in seconds. Default `5`. |
| $fs-kenburns-duration       | Set the duration of Ken Burns effect. Value counts in seconds. Default `5`. |
| $fs-kenburns-scale          | Set the zoom of Ken Burns effect. Value set in decimal. Default `1.05` (5%). |

### Custom Theme
The theme of CSS Fadeshow comes separated from the core functionality. This makes is easy to apply your own theme. You'll find a theme template located in `/scss/themes`. Use these files to create your own theme. When you're done, name the theme folder and change the path to your theme in `theme.scss`.

**Important: Do not change name or remove any of the mixins used in the theme template. These are required.**

## Working in this Repository
If you want to fork this repository to work on your own modifications, it's easy to get started. The project uses Gulp to compile the SCSS files, so all you have to do is to run `npm install` from Terminal before you start. After all dependencies are installed, use `gulp`, `gulp sass` or `gulp watch` to compile the SCSS.

### Sass Lint

This project uses Sass Lint to ensure a good coding standard. To run the lint, run `npm run sass-lint` from Terminal after you have installed the dependencies with `npm install`. Sass Lint will output the result in the terminal.

## Browser Compatibility
| ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_64x64.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_64x64.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_64x64.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_64x64.png?raw=true) | ![IE](https://github.com/alrra/browser-logos/blob/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_64x64.png?raw=true) |
|-----|-----|-----|-----|-----|
| <div align="center">Yes</div> | <div align="center">Yes</div> | <div align="center">Yes</div> | <div align="center">Yes</div> | <div align="center">9*+</div> |

_* Internet Explorer 9 does not support css transitions and css animations. This means there will be no smooth transitions between slides and autoplay and Ken Burns functions will not work since these functions relies on the two methods._

## License
The MIT License (MIT)

Copyright (c) 2016 Alexander Erlandsson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
