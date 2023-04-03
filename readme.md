
                                Desing System

                                first class


1.
create folder in designsystem => scss=>src=>4 folder and one file
 scss
    src
        atoms
        foundation
        molecules
        organisms
    global.scss

2.foundataion folder e kiso file add korte hobe
    scss=>src=>foundation=>
        1._colors.scss
        2._mixins.scss
        3.typography.scss
        4._variable.scss
3.foundaton=>_varable.scss file kiso variable define korbe.ai gola direct project e use hobe nah.ai gola teke new variable banabo.jodi kno pore change ashe ai kane change korle full change hoiye jabe.variable file ta amon hobe.pore lagle aro define korbo
_variable.scss =>
    /*=============================================
    #Variables
=============================================*/

/**
 * TABLE OF CONTENTS
 * 
 * COLORS
 * Brand colors...................These are the main brand colors. They will be used the most
 * Neutral colors.................White and black, gray scale, secondary colors.
 * Utility colors.................Other colors to represent states: info, warning, success, etc.
 * 
 * TYPOGRAPHY
 * Font families..................The fonts used in the design system.
 * Font weights...................Font weights
 * Sizes..........................Font sizing for body text, paragraphs, inputs
 * Heading sizes..................Font sizing for page headings
 *
 * BREAKPOINTS
 * Breakpoints....................Global responsive breakpoints definitions.
 *
 * SPACING
 * Spacing........................Global fixed set of spacing variables
 * 
 * SHADOW
 * Shadows........................Global fixed set of shadows
 */

/*=============================================
=            Colors                           =
=============================================*/

/* Brand Color */

$green: #5ece7b;
$green-light: #9ee2b0;

$dark: #1d1f22;
$dark-light: #737680;

/* Neutral Colors */

$gray: #a3a5ad;
$gray-light: #bebfc4;

$white: #fff;
$white-dark: #f1f2f3;

/* Utility Colors */

$red: #d12727;
$red-light: #f8dedf;

$blue: #0468db;
$blue-light: #b4d2f4;

/*=====  End of Colors  ======*/

/*=============================================
=                 Typography                  =
=============================================*/

/* Font Families */

/**
 *
 * 1) The playfair font. We'll use this for headings mostly.
 *     https://fonts.google.com/specimen/Playfair+Display
 *
 * 2) The raleway font. We'll use this for the body text.
 *     https://fonts.google.com/specimen/Raleway
 */

$playfair: 'Playfair Display', serif; /* 1 */
$raleway: 'Raleway', 'HelveticaNeue', 'Helvetica', sans-serif; /* 2 */

/* Font Sizes */

$fs-xs: 0.75rem; // 12px
$fs-sm: 0.875rem; // 14px
$fs-base: 1rem; // 16px
$fs-lg: 1.125rem; // 18px
$fs-xl: 1.5rem; // 24px

$fs: (
	xs: 0.75rem,
	sm: 0.875rem,
	base: 1rem,
	lg: 1.125rem,
	xl: 1.5rem,
);

/* Heading Font Sizes */

$h-1: 1.5rem; // 24px
$h-2: 1.375rem; // 22px
$h-3: 1.125rem; // 18px
$h-4: 1rem; // 16px
$h-5: 0.75rem; // 12px
$h-6: 0.75rem; // 12px

$h: (
	1: 1.5rem,
	2: 1.375rem,
	3: 1.125rem,
	4: 1rem,
	5: 0.875rem,
	6: 0.75rem,
);

/* Font Weights */

$fw-light: 300;
$fw-normal: 400;
$fw-medium: 500;
$fw-semibold: 600;
$fw-bold: 700;
$fw-extrabold: 800;
$fw-black: 900;

/*=====  End of Typography  ======*/

/*=============================================
=                 Breakpoints                 =
=============================================*/

$breakpoints: (
	md: 48rem,
	// 768px
	lg: 64rem,
	// 1024px
	xl: 80rem,
	// 1280px
);

/*=====  End of Breakpoints  ======*/

/*=============================================
=            Spacing                          =
=============================================*/

$spacing: (
	none: 0,
	xxxs: 0.25rem,
	// 4px
	xxs: 0.5rem,
	// 8px
	xs: 0.75rem,
	// 12px
	sm: 1rem,
	// 16px
	md: 1.5rem,
	// 24px
	lg: 2rem,
	// 32px
	xl: 3rem,
	// 48px
	xxl: 4.5rem,
	// 72px
	xxxl: 6rem,
	// 96px
) !default;

/*=====  End of Spacing  ======*/

/*=============================================
=                  Shadows                    =
=============================================*/

$shadows: (
	base: 0 4px 11px rgba(157, 157, 157, 0.21),
);

/*=====  End of Shadows  ======*/

4.ai variable gola kaje lagai akon actual variable make korbe 
    src=>foundation=>_colors.scss=>
                    /*=============================================
            =            Foundation - colors              =
            =============================================*/

            /**
            * This file defines the actual colors that will be used for styling. They will default to the palette
            * we defined in the _variable.scss file. This is our default palette, and devs can override this
            * with their own variables.
            */

            /**
            *
            * Defining a SCSS Variable: [Instructions]
            * 1. define a name
            * 2. value of the variable will be a css var, 
            *    so the consumer of the design system won't have to use scss
            * 3. default value will be a scss variable that we declared previously
            * 4. added !default flag so consumer of the design system can override the scss variable 
            * 5. the --dse prefix of the variable name is a namespace (project name)
            * [dse - design system for engineering]
            */

            /*=============================================
            =            Global text colors               =
            =============================================*/

            $body-text-color: var(--dse-body-text-color, $dark) !default;
            $body-bg-color: var(--dse-body-bg-color, $white) !default;

            /*=====  End of Text Color  ======*/

            /*=============================================
            =                   Buttons                   =
            =============================================*/

            $btn-primary-color: var(--dse-btn-primary-color, $white) !default;
            $btn-primary-bg-color: var(--dse-btn-primary-bg-color, $green) !default;
            $btn-primary-bg-hover: var(--dse-btn-primary-bg-hover, $green-light) !default;

            /*=====  End of Buttons  ======*/

            /*=============================================
            =                    Forms                    =
            =============================================*/
            $form-border-color: var(--dse-form-border-color, $white-dark) !default;
            $form-bg-color: var(--dse-form-bg-color, $white) !default;
            $form-bg-option-selected: var(--dse-form-bg-option-selected, $green) !default;
            $form-color-option-selected: var(
                --dse-form-color-option-selected,
                $white
            ) !default;
            $form-bg-color-hover: var(--dse-form-bg-color-hover, $white-dark) !default;
            $form-color: var(--dse-form-color, $dark) !default;
            $form-bg: var(--dse-form-bg, $white) !default;
            $form-error-color: var(--dse-form-error-color, $red) !default;
            $form-error-border: var(--dse-form-error-border, $red) !default;
            $form-border-focus-color: var(--dse-form-border-focus-color, $green) !default;
5.exatly amra typography te o add korbo
 src
    foundation
        _typography.scss
                        /*=============================================
            =        Foundation - Typography              =
            =============================================*/

            /**
            * This file defines the default font sizes to be used on headings and texts. The defaults come
            * from the palette defined in _variables.scss.
            */

            /*=============================================
            =            Body font family                  =
            =============================================*/
            $body-font-family: var(--dse-body-font-family, $playfair) !default;

            /*=============================================
            =            Body font sizes                  =
            =============================================*/

            $body-font-size: var(--dse-body-font-size, $fs-sm) !default;
            $body-font-weight: var(--dse-body-font-weight, $fw-normal) !default;

            /*=============================================
            =            Heading font sizes               =
            =============================================*/

            $h-1-font-size: var(--dse-h1-font-size, $h-1) !default;
            $h-2-font-size: var(--dse-h2-font-size, $h-2) !default;
            $h-3-font-size: var(--dse-h3-font-size, $h-3) !default;
            $h-4-font-size: var(--dse-h4-font-size, $h-4) !default;
            $h-5-font-size: var(--dse-h5-font-size, $h-5) !default;
            $h-6-font-size: var(--dse-h6-font-size, $h-6) !default;

            /*=============================================
            =            Head font weights                =
            =============================================*/

            $h-1-font-weight: var(--dse-h1-text-weight, $fw-black) !default;
            $h-2-font-weight: var(--dse-h2-text-weight, $fw-semibold) !default;
            $h-3-font-weight: var(--dse-h3-text-weight, $fw-bold) !default;
            $h-4-font-weight: var(--dse-h4-text-weight, $fw-medium) !default;
            $h-5-font-weight: var(--dse-h5-text-weight, $fw-normal) !default;
            $h-6-font-weight: var(--dse-h6-text-weight, $fw-light) !default;

6.akon amra mixin.scss file e responsive er jonno kiso code like rakte pari
    _mixins.sccs
     

                /*=============================================
                =            Mixins                           =
                =============================================*/

                /**
                *
                * Helpful reusable function-like things that will be used to implement
                * styles for components.
                *
                */

                @mixin tablet {
                    @media (min-width: map-get($breakpoints, 'md')) {
                        @content;
                    }
                }

                @mixin laptop {
                    @media (min-width: map-get($breakpoints, 'lg')) {
                        @content;
                    }
                }

                @mixin desktop {
                    @media (min-width: map-get($breakpoints, 'xl')) {
                        @content;
                    }
                }

                @mixin padding($space) {
                    padding: map-get($spacing, $space);
                }

                @mixin margin($space) {
                    margin: map-get($spacing, $space);
                }

                @mixin shadow($key) {
                    box-shadow: map-get($shadows, $key);
                }


7.foundation=>e sob file import korer jonno akta file create kori
    foundation
        _all.scss
    akon all.scss e sob file gola order hishave import korbo
        _all.scss

            @import './variables';
            @import './colors';
            @import './typography';
            @import './mixins';

8. 
    1. akon src folder e je global.scss file nicilam tate foundation gola import   kora lagbe.jeheto all e import korsi tai all file ta import korle hobe.
    2.akon Base o add korte hobe.akon css reset korer jonno akta normal file create kore tate online teke code gola compy korlam.css normalize serch korle hobe.
    3.normalize file ta import korte hobe
    4.akon normalize file create korle src folder e base name akta folder create kori.tate normalize file code gola rakte hobe.
     
        src
            base
                normalize.scss

                 // =============================================================================
                    // Normalize.scss based on Nicolas Gallagher and Jonathan Neal's
                    // normalize.css v2.1.3 | MIT License | git.io/normalize
                    // =============================================================================

                    // =============================================================================
                    // Normalize.scss settings
                    // =============================================================================

                    // Set to true if you want to add support for IE6 and IE7
                    // Notice: setting to true might render some elements
                    // slightly differently than when set to false
                    $legacy_support_for_ie: false !default; // Used also in Compass

                    // Set the default font family here so you don't have to override it later
                    $normalized_font_family: sans-serif !default;

                    $normalize_headings: true !default;

                    $h1_font_size: 2em !default;
                    $h2_font_size: 1.5em !default;
                    $h3_font_size: 1.17em !default;
                    $h4_font_size: 1em !default;
                    $h5_font_size: 0.83em !default;
                    $h6_font_size: 0.75em !default;

                    $h1_margin: 0.67em 0 !default;
                    $h2_margin: 0.83em 0 !default;
                    $h3_margin: 1em 0 !default;
                    $h4_margin: 1.33em 0 !default;
                    $h5_margin: 1.67em 0 !default;
                    $h6_margin: 2.33em 0 !default;

                    $background: #fff !default;
                    $color: #000 !default;

                    // =============================================================================
                    // HTML5 display definitions
                    // =============================================================================

                    // Corrects block display not defined in IE6/7/8/9 & FF3

                    article,
                    aside,
                    details,
                    figcaption,
                    figure,
                    footer,
                    header,
                    hgroup,
                    nav,
                    section,
                    summary {
                        display: block;
                    }

                    // Corrects inline-block display not defined in IE6/7/8/9 & FF3

                    audio,
                    canvas,
                    video {
                        display: inline-block;
                        @if $legacy_support_for_ie {
                            *display: inline;
                            *zoom: 1;
                        }
                    }

                    // 1. Prevents modern browsers from displaying 'audio' without controls
                    // 2. Remove excess height in iOS5 devices

                    audio:not([controls]) {
                        display: none; // 1
                        height: 0; // 2
                    }

                    //
                    // Address `[hidden]` styling not present in IE 8/9.
                    // Hide the `template` element in IE, Safari, and Firefox < 22.
                    //

                    [hidden],
                    template {
                        display: none;
                    }

                    // =============================================================================
                    // Base
                    // =============================================================================

                    // 1. Corrects text resizing oddly in IE6/7 when body font-size is set using em units
                    //    http://clagnut.com/blog/348/#c790
                    // 2. Prevents iOS text size adjust after orientation change, without disabling user zoom
                    //    www.456bereastreet.com/archive/201012/controlling_text_size_in_safari_for_ios_without_disabling_user_zoom/

                    html {
                        @if $legacy_support_for_ie {
                            font-size: 100%; // 1
                        }
                        background: $background;
                        color: $color;
                        -webkit-text-size-adjust: 100%; // 2
                        -ms-text-size-adjust: 100%; // 2
                    }

                    // Addresses font-family inconsistency between 'textarea' and other form elements.

                    html,
                    button,
                    input,
                    select,
                    textarea {
                        font-family: $normalized_font_family;
                    }

                    // Addresses margins handled incorrectly in IE6/7

                    body {
                        margin: 0;
                    }

                    // =============================================================================
                    // Links
                    // =============================================================================

                    // 1. Remove the gray background color from active links in IE 10.
                    // 2. Addresses outline displayed oddly in Chrome
                    // 3. Improves readability when focused and also mouse hovered in all browsers
                    //    people.opera.com/patrickl/experiments/keyboard/test

                    a {
                        // 1

                        background: transparent;

                        // 2

                        &:focus {
                            outline: thin dotted;
                        }

                        // 3

                        &:hover,
                        &:active {
                            outline: 0;
                        }
                    }

                    // =============================================================================
                    // Typography
                    // =============================================================================

                    // Addresses font sizes and margins set differently in IE6/7
                    // Addresses font sizes within 'section' and 'article' in FF4+, Chrome, S5

                    @if $normalize_headings == true {
                        h1 {
                            font-size: $h1_font_size;
                            margin: $h1_margin;
                        }

                        h2 {
                            font-size: $h2_font_size;
                            margin: $h2_margin;
                        }

                        h3 {
                            font-size: $h3_font_size;
                            margin: $h3_margin;
                        }

                        h4 {
                            font-size: $h4_font_size;
                            margin: $h4_margin;
                        }

                        h5 {
                            font-size: $h5_font_size;
                            margin: $h5_margin;
                        }

                        h6 {
                            font-size: $h6_font_size;
                            margin: $h6_margin;
                        }
                    }

                    // Addresses styling not present in IE 8/9, S5, Chrome

                    abbr[title] {
                        border-bottom: 1px dotted;
                    }

                    // Addresses style set to 'bolder' in FF3+, S4/5, Chrome

                    b,
                    strong {
                        font-weight: bold;
                    }

                    @if $legacy_support_for_ie {
                        blockquote {
                            margin: 1em 40px;
                        }
                    }

                    // Addresses styling not present in S5, Chrome

                    dfn {
                        font-style: italic;
                    }

                    // Addresses styling not present in IE6/7/8/9

                    mark {
                        background: #ff0;
                        color: #000;
                    }

                    // Addresses margins set differently in IE6/7
                    @if $legacy_support_for_ie {
                        p,
                        pre {
                            margin: 1em 0;
                        }
                    }

                    // Corrects font family set oddly in IE6, S4/5, Chrome
                    // en.wikipedia.org/wiki/User:Davidgothberg/Test59

                    code,
                    kbd,
                    pre,
                    samp {
                        font-family: monospace, serif;
                        @if $legacy_support_for_ie {
                            _font-family: 'courier new', monospace;
                        }
                        font-size: 1em;
                    }

                    // Improves readability of pre-formatted text in all browsers

                    pre {
                        white-space: pre;
                        white-space: pre-wrap;
                        word-wrap: break-word;
                    }

                    // Set consistent quote types.

                    q {
                        quotes: '\201C''\201D''\2018''\2019';
                    }

                    // 1. Addresses CSS quotes not supported in IE6/7
                    // 2. Addresses quote property not supported in S4

                    // 1
                    @if $legacy_support_for_ie {
                        q {
                            quotes: none;
                        }
                    }

                    // 2
                    q {
                        &:before,
                        &:after {
                            content: '';
                            content: none;
                        }
                    }

                    // Address inconsistent and variable font size in all browsers.

                    small {
                        font-size: 80%;
                    }

                    // Prevents sub and sup affecting line-height in all browsers
                    // gist.github.com/413930

                    sub,
                    sup {
                        font-size: 75%;
                        line-height: 0;
                        position: relative;
                        vertical-align: baseline;
                    }

                    sup {
                        top: -0.5em;
                    }

                    sub {
                        bottom: -0.25em;
                    }

                    // =============================================================================
                    // Lists
                    // =============================================================================

                    // Addresses margins set differently in IE6/7
                    @if $legacy_support_for_ie {
                        dl,
                        menu,
                        ol,
                        ul {
                            margin: 1em 0;
                        }
                    }

                    @if $legacy_support_for_ie {
                        dd {
                            margin: 0 0 0 40px;
                        }
                    }

                    // Addresses paddings set differently in IE6/7
                    @if $legacy_support_for_ie {
                        menu,
                        ol,
                        ul {
                            padding: 0 0 0 40px;
                        }
                    }

                    // Corrects list images handled incorrectly in IE7

                    nav {
                        ul,
                        ol {
                            @if $legacy_support_for_ie {
                                list-style-image: none;
                            }
                        }
                    }

                    // =============================================================================
                    // Embedded content
                    // =============================================================================

                    // 1. Removes border when inside 'a' element in IE6/7/8/9, FF3
                    // 2. Improves image quality when scaled in IE7
                    //    code.flickr.com/blog/2008/11/12/on-ui-quality-the-little-things-client-side-image-resizing/

                    img {
                        border: 0; // 1
                        @if $legacy_support_for_ie {
                            -ms-interpolation-mode: bicubic; // 2
                        }
                    }

                    // Corrects overflow displayed oddly in IE9

                    svg:not(:root) {
                        overflow: hidden;
                    }

                    // =============================================================================
                    // Figures
                    // =============================================================================

                    // Addresses margin not present in IE6/7/8/9, S5, O11

                    figure {
                        margin: 0;
                    }

                    // =============================================================================
                    // Forms
                    // =============================================================================

                    // Corrects margin displayed oddly in IE6/7
                    @if $legacy_support_for_ie {
                        form {
                            margin: 0;
                        }
                    }

                    // Define consistent border, margin, and padding

                    fieldset {
                        border: 1px solid #c0c0c0;
                        margin: 0 2px;
                        padding: 0.35em 0.625em 0.75em;
                    }

                    // 1. Corrects color not being inherited in IE6/7/8/9
                    // 2. Remove padding so people aren't caught out if they zero out fieldsets.
                    // 3. Corrects text not wrapping in FF3
                    // 4. Corrects alignment displayed oddly in IE6/7

                    legend {
                        border: 0; // 1
                        padding: 0; // 2
                        white-space: normal; // 3
                        @if $legacy_support_for_ie {
                            *margin-left: -7px; // 4
                        }
                    }

                    // 1. Correct font family not being inherited in all browsers.
                    // 2. Corrects font size not being inherited in all browsers
                    // 3. Addresses margins set differently in IE6/7, FF3+, S5, Chrome
                    // 4. Improves appearance and consistency in all browsers

                    button,
                    input,
                    select,
                    textarea {
                        font-family: inherit; // 1
                        font-size: 100%; // 2
                        margin: 0; // 3
                        vertical-align: baseline; // 4
                        @if $legacy_support_for_ie {
                            *vertical-align: middle; // 4
                        }
                    }

                    // Addresses FF3/4 setting line-height on 'input' using !important in the UA stylesheet

                    button,
                    input {
                        line-height: normal;
                    }

                    // Address inconsistent `text-transform` inheritance for `button` and `select`.
                    // All other form control elements do not inherit `text-transform` values.
                    // Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.
                    // Correct `select` style inheritance in Firefox 4+ and Opera.

                    button,
                    select {
                        text-transform: none;
                    }

                    // 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
                    //    and `video` controls
                    // 2. Corrects inability to style clickable 'input' types in iOS
                    // 3. Improves usability and consistency of cursor style between image-type
                    //    'input' and others
                    // 4. Removes inner spacing in IE7 without affecting normal text inputs
                    //    Known issue: inner spacing remains in IE6

                    button,
                    html input[type="button"], // 1
                    input[type="reset"],
                    input[type="submit"] {
                        -webkit-appearance: button; // 2
                        cursor: pointer; // 3
                        @if $legacy_support_for_ie {
                            *overflow: visible; // 4
                        }
                    }

                    // Re-set default cursor for disabled elements

                    button[disabled],
                    input[disabled] {
                        cursor: default;
                    }

                    // Removes inner padding and border in FF3+
                    // www.sitepen.com/blog/2008/05/14/the-devils-in-the-details-fixing-dojos-toolbar-buttons/

                    button,
                    input {
                        &::-moz-focus-inner {
                            border: 0;
                            padding: 0;
                        }
                    }

                    // 1. Removes default vertical scrollbar in IE6/7/8/9
                    // 2. Improves readability and alignment in all browsers

                    textarea {
                        overflow: auto; // 1
                        vertical-align: top; // 2
                    }

                    // =============================================================================
                    // Tables
                    // =============================================================================

                    // Remove most spacing between table cells

                    table {
                        border-collapse: collapse;
                        border-spacing: 0;
                    }

                    input {
                        // 1. Addresses appearance set to searchfield in S5, Chrome
                        // 2. Addresses box-sizing set to border-box in S5, Chrome (include -moz to future-proof)
                        &[type='search'] {
                            -webkit-appearance: textfield; // 1
                            -moz-box-sizing: content-box;
                            -webkit-box-sizing: content-box; // 2
                            box-sizing: content-box;

                            // Remove inner padding and search cancel button in Safari 5 and Chrome
                            // on OS X.
                            &::-webkit-search-cancel-button,
                            &::-webkit-search-decoration {
                                -webkit-appearance: none;
                            }
                        }

                        // 1. Address box sizing set to `content-box` in IE 8/9/10.
                        // 2. Remove excess padding in IE 8/9/10.
                        // 3. Removes excess padding in IE7
                        //    Known issue: excess padding remains in IE6
                        &[type='checkbox'],
                        &[type='radio'] {
                            box-sizing: border-box; // 1
                            padding: 0; // 2
                            @if $legacy_support_for_ie {
                                *height: 13px; // 3
                                *width: 13px; // 3
                            }
                        }
                    }


    src=>
        global.scss
             
                /*------------------------------------*\
                    TABLE OF CONTENTS
                \*------------------------------------*/

                /**
                *
                * FOUNDATIONS................................................
                * BASE.......................................................
                */

                /*=============================================
                =                   Foundation                =
                =============================================*/

                @import './foundation/all';

                /*=============================================
                =                     Base                    =
                =============================================*/

                @import './base/normalize';
                @import './base/root';

9.akon amra je variable declare korsilam oi kane css teke kiso variable ashbe amon kore raksilam.akon variable to akon nai.tai error to ashbe ter jonno root oi variable declare korte hobe.ar oi root file tai global e import korsi je


   1.src
        base
            _root.scss  

                                    /* Default CSS Variables */

                    /**
                    *
                    * ! Default CSS Variables
                    * As scss is not fully compatible with CSS,
                    * We need embed this variable
                    *
                    */

                    :root {
                        --dse-body-text-color: #{$dark};
                        --dse-body-bg-color: #{$white};

                        --dse-btn-primary-color: #{$white};
                        --dse-btn-primary-bg: #{$green};
                        --dse-btn-primary-bg-hover: #{$green-light};

                        --dse-btn-secondary-color: #{$white};
                        --dse-btn-secondary-bg: #{$dark};

                        --dse-form-color: #{$dark};
                        --dse-form-bg: #{$white};
                        --dse-form-error-color: #{$red};
                        --dse-form-error-border: #{$red};
                        --dse-form-border-focus-color: #{$green};

                        --dse-body-font-size: #{$fs-base};
                        --dse-body-font-weight: #{$fw-normal};

                        --dse-h1-font-size: #{$h-1};
                        --dse-h2-font-size: #{$h-2};
                        --dse-h3-font-size: #{$h-3};
                        --dse-h4-font-size: #{$h-4};
                        --dse-h5-font-size: #{$h-5};
                        --dse-h6-font-size: #{$h-6};

                        --dse-h1-font-weight: #{$fw-medium};
                        --dse-h2-font-weight: #{$fw-medium};
                        --dse-h3-font-weight: #{$fw-medium};
                        --dse-h4-font-weight: #{$fw-normal};
                        --dse-h5-font-weight: #{$fw-normal};
                        --dse-h6-font-weight: #{$fw-light};
                    }


10.akon ai scss file k convert korer jonno compiler lagbe.so

    1.scss folder e package init korte hobe.so
       designSystemPrctse/scss$ npm init -y
    2.akon akta compiler scss add korlam.
        designSystemPrctse/scss$ yarn add scss
11.akon compiler korer jonno src=>script=>build.js name file nilam compiler jonno.
    src
        script
            build.js

                const fs = require('fs');
                const path = require('path');
                const sass = require('sass');

                /**
                * compile any scss file to css
                * @param {string} src source file;
                * @param {string} output output file
                */
                const compile = (src, output) => {
                    const result = sass.compile(path.resolve(src), {
                        style: 'expanded',
                        verbose: true,
                    });

                    fs.writeFileSync(path.resolve(output), result.css);
                };

                // compile the global css
                compile('src/global.scss', 'lib/global.css');

                /**
                * Get All Components from atoms, molecules and organisms
                * @returns Object[] return array of object containing src and output
                */
                const getComponents = () => {
                    let allComponents = [];

                    const types = ['atoms', 'molecules', 'organisms'];

                    types.forEach((type) => {
                        const allFiles = fs.readdirSync(`src/${type}`).map((file) => ({
                            src: `src/${type}/${file}`,
                            output: `lib/${file.slice(0, -5)}.css`,
                        }));

                        allComponents = [...allComponents, ...allFiles];
                    });

                    return allComponents;
                };

                // compile components
                getComponents().forEach((component) =>
                    compile(component.src, component.output)
                );

12.akon amra build korbo.ter age package.json build command ta add korbo

        package.json
             "build": "node ./src/scripts/build.js",
    akon error kaba.karon amra lib folder ta create kore dei ni.so kamta sari pelo.

wow genenrate hoiye gese 

13.akon amra alada akta button banai.jeno alada bave button er scss ta compile kori.
  src
    atoms
        button.scss


            @import '../foundation/all';

            .btn {
                border: none;
                border-radius: map-get($spacing, 'xxxs');
                font-family: $body-font-family;
                font-size: $body-font-size;
                padding: map-get($spacing, 'xxs') map-get($spacing, 'sm');
            }

            .btn-primary {
                background-color: $btn-primary-bg-color;
                color: $btn-primary-color;
            }

            .btn:hover {
                background-color: $btn-primary-bg-hover;
            }


14.wow compile hoise jeheto amra age sob file compiler jonno script liksi.akon amra atoms molecules ja issa make kore build korbo kaj sesh.
 class ta o sesh




                            second clas

monorepo niye git repository manage korer jonno doc ta pora

https://monorepo.tools/
https://semaphoreci.com/blog/what-is-monorepo

ai class ta git repositoy manage korer monorepo niye class
 monorepo er jonno best tool holo learna tools
  https://lerna.js.org/


akon amra scss file ta k package folder e diye dibo.jar karone scss er package.json file e ai ta add korte hobe.
                    {
                    "name": "@dse/scss",
                    "version": "1.0.0",
                    "description": "",
                    "main": "index.js",
                    "scripts": {
                        "build": "node ./src/scripts/build.js"
                    },
                    "keywords": [],
                    "author": "",
                    "license": "ISC",
                    "dependencies": {
                        "sass": "^1.60.0"
                    }
                    }


1.akon DSE ROOT folder e akta init korte hobe.
    yarn init -y
     package.json
            {
            "name": "@dse/core",
            "version": "1.0.0",
            "main": "index.js",
            "license": "MIT"
            }

2.lerna add korte hobe
    yarn add -D lerna

    akon lerna add hoiye gese
3.akon lerna je add korsi ar use korsi ter jonno akta lerna init file lagbe.so
    yarn lerna init
    kiso error ashbe ja solve korer jonno ja package install korte bolbe tai kore niba.
4.akon lerna package kiso add korte hobe .ager ta ja ace tai tak
          { 
            "$schema": "node_modules/lerna/schemas/lerna-schema.json",
            "useWorkspaces": true,
            "version": "0.0.0",
            "packages":[
                "packages/*"
            ],
            "npmClient":"yarn",
            "stream":true
            }
5.akon package.json e kiso change korte hobe.
    ager ta tak 
        "workspaces": {
                    "packages": [
                    "packages/*",
                    "playground/*"    TERPOR O PLAYGROUND TA KAJ KORE NAHH
                    ]
                },
                "private": true,
                "scripts": {
                    "build": "yarn lerna run build",
                    "dev": "yarn lerna run dev"
                }

 joDi full package json ta hobe
                {
            "name": "@dse/core",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "devDependencies": {
                "lerna": "^6.6.1"
            },
            "dependencies": {
                "@lerna/child-process": "^6.6.1",
                "js-yaml": "^4.1.0",
                "nx": "^15.8.9",
                "rimraf": "^4.4.1"
            },
            "workspaces": {
                "packages": [
                "packages/*",
                "playgrounds"
                ]
            },
            "private": true,
            "scripts": {
                "build": "yarn lerna run build",
                "dev": "yarn lerna run dev"
            }
            }

6.akon jokon amra yarn command dibo akoon scss er node moules odow.karon akon ai sob node modelus lerna manage korse.lerna doc porle mon caile poro naw


7. ekon ekta library banabo mui er moto react diye typescript er sate.

                React folder

desingSystemPrctse
    package
        React

1.react e kiso package install korte hobe
    yarn add -D react typescript @types/react
    ai kane kiso error hobe.then react e akta yarn.lock empty file create korle solve
2.then akta tsconfig.json file create kora.
            {
            "compilerOptions": {
                "outDir": "lib",
                "module": "esnext",
                "lib": ["DOM", "ESNext"],
                "jsx": "react",
                "allowSyntheticDefaultImports": true,
                "target": "esnext",
                "noImplicitAny": true,
                "strictNullChecks": true,
                "noImplicitReturns": true,
                "noUnusedLocals": true,
                "noUnusedParameters": true,
                "declaration": true,
                "moduleResolution": "node"
            },
            "include": ["src"],
            "exclude": ["node_modules", "lib"]
        }
3.src te index.ts akta file create kore and kiso folder
    src
        index.ts
        atoms
        foundation
        molecules
4.
    atoms
        button
            button.tsx
ekon ekta error.boro error typescript import hosse na deki solve kori age
ok error is solve.actually when i install package by npm.this is work.i think first e ami npm diye poject init korsilam.no no ai ta to npm diye kori ni.terpor o kno issu holo jani nah.


5.basic akta button componet create typescript diye and oi je scss package teke class add korte parbo;
                import * as React from 'react';
                ai kane css ta import kore pelbo noile je kane ai ta use korbo sei kane add kora lagbe.

            interface ButtonProps{
            title:string;
            children:React.ReactNode;
            onClick:()=>void;
            }
            const Button:React.FC<ButtonProps> = ({title,onClick,children}) => {
            return (
            <button className='btn btn-primary' title={title}>{children}</button>
            )
            }

            export default Button


6.akon amra button teke impor korbo nah karon pore confuse e pore jabo tai ai atom ke index e import export ak sate korbo 
    attoms
        index.ts
            export {default} from './Button'

7.akon ai atom ta amra use korte parbo nah.karon typescript e ace akon.typescript e takle sobai use korte pare nah.so akon rollup add korte obe
    1.yarn add -D rollup rollup-plugin-typescript2
8.akon rollop config korte hobe
    rollupconfig.js create
    react
        rollup.config.js

            const TS = require('rollup-plugin-typescript2');

            module.exports = {
                input: [
                    'src/index.ts',
                    'src/atoms/Button/index.ts',
                ],
                output: {
                    dir: 'lib',
                    format: 'esm',
                    sourcemap: true,
                    preserveModules: true,
                },
                plugins: [TS()],
                external: ['react', '@ds.e/foundation'],
            };
9.akon package.json e build add korte hobe
    "scripts": {
    "build": "rollup -c"
  }

akon yarn build kori but error karon src te index file e kiso kora hoi ni.so let start

10. src
        index.ts
             import Button from "./atoms/Button";

                export {Button}

lets start build
  
  ok akta error paisi boltese ts file module  e ESNext add korte boltese.commonjs not working

wow complete but akta erorr seta holo button e onclick declere korsi but use kori nai

11.akont rollup e kiso add korbo jeno vlo result pai
 
  'src/atoms/Button/index.ts',
  ja attom hobe ta ai bave like dibo.
library hoiye gese.




                    2.5 class libray ta use practise

1.we create one playground project yarn create vite
    aber ts coltese nah .ok ager moto npm diye @type/react ta install korlam.then solve
2.import Button form "@designSystemPrctse/react/lib"
 playgrond
    src
        app.tsx
            all ok but library teke componenet nite parse nah akta issu

3. this is working.but akta problm lerna command kaj kortesen nh karon ami first e yarn korsi akon npm e niye ashlam.yarn takle sob tik take but typescript kaj kore nh.so yarn kore kore ashbo.typescript er issu ta pore karo teke solve kore nibo.

            class 3 

1.ekto kani package e change ante hobe and akta scss folder e nodemon install korte hobe
    1.packages
        scss
            yarn add -D nodemon
    2.scss , react designsystem er package.json

            1.react
                "build": "rollup -c",
                "dev": "yarn build --watch",
            2.scss
                        "scripts": {
                        "build": "node ./src/scripts/build.js",
                        "dev": "nodemon --watch src --exec yarn build -e scss"
                        } ,
            3.designsystemprctse

                    "dev": "yarn lerna run dev"

2.akon kiso atoms and molecules create korbo.
    1.color e color.tsx e component create kora
    2.color e index.ts e teke import o export kor
    3.root index teke import o export kora
    4.rollup teke 'src/atoms/Color/index.ts', file ta add kora
3.akon scss filer design gola use korbo react component 
    1.scss file e atoms e utilis.scss file create korbo
    2.utilities.scss

                @import '../foundation/all';

                @each $size, $value in $spacing {
                    .dse-width-#{$size} {
                        width: $value;
                    }

                    .dse-height-#{$size} {
                        height: $value;
                    }
                }
4.akon amra ai variable gola react e use korbo.so foundation e akta file spacing file create kori
    react
        src
            foundation
                spacing.ts

                const spaces = {
                    none: 'none',
                    xxxs: 'xxxs',
                    xxs: 'xxs',
                    xs: 'xs',
                    sm: 'sm',
                    md: 'md',
                    lg: 'lg',
                    xl: 'xl',
                    xxl: 'xxl',
                    xxxl: 'xxxl',
                };

                export default Object.freeze(spaces);
5.src te index file teke import kore export kore then playgrond e use kora jave.

6.atoms er fondation ta ekata package banai rakbo so.
    baki ta jano tomi
7.kiso atoms make korsi baz class end

                    class 4
    

ai class e kiso molecules and atoms banabo

    
