# CSS Fadeshow
This is a fadeshow (slideshow with fade effect) made in CSS only. The slideshow is built in SCSS which provides customization and easy adaption to your site. All you have to do is to change the variables in css-slideshow.scss.

**For a stable version, always download from the Release page.**

**Demo: http://alexerlandsson.github.io/css-fadeshow/demo/demo.html**  

## Why use CSS Fadeshow?

- No JavaScript is needed (HTML and CSS only)
- Great browser support
- Easy to customize
- Easy to add custom themes
- Lightweight (3.4KB gzipped with 5 slides and all modifiers included, 2.4KB with autoplay disabled)
- Modular Addons (Modifiers)

## Quick start

### 1. Create the HTML markup
The default markup looks like this:

```html
<div data-fadeshow="quick-nav prev-next-nav slide-counter autoplay ken-burns">

  <!-- Radio -->
  <input type="radio" name="css-fadeshow" id="fs-slide-1" />
  <input type="radio" name="css-fadeshow" id="fs-slide-2" />
  <input type="radio" name="css-fadeshow" id="fs-slide-3" />

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
    <label class="fs-quick-btn" for="fs-slide-1"></label>
    <label class="fs-quick-btn" for="fs-slide-2"></label>
    <label class="fs-quick-btn" for="fs-slide-3"></label>
  </div>

  <!-- Prev Navigation -->
  <div class="fs-prev-nav">
    <label class="fs-prev-btn" for="fs-slide-1"></label>
    <label class="fs-prev-btn" for="fs-slide-2"></label>
    <label class="fs-prev-btn" for="fs-slide-3"></label>
  </div>

  <!-- Next Navigation -->
  <div class="fs-next-nav">
    <label class="fs-next-btn" for="fs-slide-1"></label>
    <label class="fs-next-btn" for="fs-slide-2"></label>
    <label class="fs-next-btn" for="fs-slide-3"></label>
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
<div data-fadeshow="quick-nav"></div>
```

##### 2.2.2 prev-next-nav
Decides if the prev/next buttons should be used or not. If set, the buttons will be used. Example:

```html
<div data-fadeshow="prev-next-nav"></div>
```

##### 2.2.3 slide-counter
This modifier adds a slide counter to the fadeshow. This will be displayed as "1/5" when on the first slide etc. Example:

```html
<div data-fadeshow="slide-counter"></div>
```

##### 2.2.4 ken-burns
This modifier adds Ken Burns effect to the slide's images. Example:

```html
<div data-fadeshow="ken-burns"></div>
```

##### 2.2.5 autoplay
Add autoplay to the gallery. Interaction with navigation will result in cancelation of autoplay. Autoplay will work on load. When autoplay is active, Prev/Next Navigation and Slide Counter won't be visible. The only way to cancel the autoplay is to use Quick Navigation to navigate to another slide. When the autoplay is canceled, Prev/Next Navigation and Slide Counter will be displayed if added to the fadeshow. Example:

```html
<div data-fadeshow="autoplay"></div>
```

### 3. Include the CSS to the HTML
Add the following line to your HTML file in the head tag:
```html
<link rel="stylesheet" href="YOUR_PATH/css-fadeshow.min.css">
```

## Customized Installation
To customize the installation, download the folder named `scss` and include the file `css-fadeshow.scss` in your project. This way of implementation is highly recommended due to the possibility to customize the styling. SCSS is required when using the fadeshow in this way.

Global variables and mixins are used and should be taking into consideration before including the scss files into your project. All variables and mixins are prefixed with "fs-".

### Settings
All settings are managed from `/global/settings.scss`. In this file you will find variables used through the project.

The first variables are labeled "Modifiers to include". These defines which modifiers you want to use in your implementation. If you're planning to not use some of the modifiers – set these to false. This will result in a smaller CSS. The same goes for number of slides – the more slides you want to have, the larger the CSS file will be.

_Tip: If you want the css as small as possible, I suggest you to disable autoplay since it generates a lot of code in order to work._

| Variable                    | Type                        | Default                      | Description                 |
|-----------------------------| ----------------------------| -----------------------------| ----------------------------|
| $fs-include-autoplay        | boolean                     | true                         | Whether to include Autoplay or not. |
| $fs-include-prevnextnav     | boolean                     | true                         | Whether to include Prev/Next Navigation or not. |
| $fs-include-quicknav        | boolean                     | true                         | Whether to include Quick Navigation or not. |
| $fs-include-slidecounter    | boolean                     | true                         | Whether to include Slide Counter or not. |
| $fs-include-kenburns        | boolean                     | true                         | Whether to include Ken Burns effect to background image or not. |
| $fs-max-slides              | integer                     | 5                            | Defines the maximum of images allowed. There is no technical limit, but the higher number, the larger the CSS file will be. |
| $fs-fade-time               | integer                     | 1                            | Change to the desired transition time of the fade between images. Value counts in seconds. |
| $fs-fade-color              | hex                         | #fff                         | Background color behind the images. Will be a part of the transitions between images. |
| $fs-prefix                  | boolean                     | true                         | Set to `false` if you don't want the compiled CSS to include prefixes. |
| $fs-prevnextnav-loop        | boolean                     | true                         | Set to false to hide the prev button on first slide and the next button on last slide. |
| $fs-quicknav-duration       | integer                     | 0.2                          | Set the transition duration of the Quick Navigation during autoplay. Value counts in seconds. |
| $fs-autoplay-duration       | integer                     | 5                            | Set the duration of each slide in autoplay mode. Value counts in seconds. |
| $fs-autoplay-prevnextnav    | boolean                     | true                         | Adds autoplay to Prev/Next Navigation while autoplay is running. |
| $fs-autoplay-quicknav       | boolean                     | true                         | Adds autoplay to Quick Navigation while autoplay is running. |
| $fs-autoplay-slidecounter   | boolean                     | false                        | Adds autoplay to Slide Counter while autoplay is running. Animating content in pseudo elements is poorly supported so be careful before activating this. |
| $fs-autoplay-kenburns       | boolean                     | true                         | Adds autoplay to Ken Burns effect while autoplay is running. |
| $fs-kenburns-duration       | integer                     | 5                            | Set the duration of Ken Burns effect. Value counts in seconds. |
| $fs-kenburns-scale          | decimal                     | 1.05 (5%)                    | Set the zoom of Ken Burns effect. |

### Custom Theme
The theme of CSS Fadeshow comes separated from the core functionality. This makes is easy to apply your own theme. You'll find a theme boilerplate located in `/scss/theme/themes/theme-boilerplate`. Use these files to create your own theme. When you're done, name the theme folder and change the path to your theme in `theme.scss`.

**Important: Do not change name or remove any of the mixins used in the theme template. These are required.**

## Working in this Repository
If you want to fork this repository to work on your own modifications, it's easy to get started. The project uses Gulp to compile the SCSS files, so all you have to do is to run `npm install` from Terminal before you start. After all dependencies are installed, use `gulp`, `gulp sass` or `gulp watch` to compile the SCSS.

### Sass Lint

This project uses Sass Lint to ensure a good coding standard. The rules can be found in `.sass-lint.yml`.

## Browser Compatibility
| ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_64x64.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_64x64.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_64x64.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_64x64.png?raw=true) | ![IE](https://github.com/alrra/browser-logos/blob/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_64x64.png?raw=true) |
|-----|-----|-----|-----|-----|
| <div align="center">Yes</div> | <div align="center">Yes</div> | <div align="center">Yes</div> | <div align="center">Yes</div> | <div align="center">9*+</div> |

_* Internet Explorer 9 does not support css transitions and css animations. This means there will be no smooth transitions between slides and autoplay and Ken Burns functions will not work since these functions relies on the two methods._
