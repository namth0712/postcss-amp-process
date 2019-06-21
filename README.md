# PostCSS Amp Process [![Build Status][ci-img]][ci]

[PostCSS] plugin Process css for AMP for twig.
Create css for AMP to using with twig template.

### Replace strings in value.

```
/* before */
.thumb {
  background-image: url(../images/thumb.png);
}

/* after */
.thumb {
  background-image: url({{ your_static_path|raw }}/images/thumb.png);
}

/* or */

.thumb {
  background-image: url(http://sample.com/images/thumb.png);
}
```

### Add space to minified css

To avoid an error with '{#' (twig start comment) or '%}' (just for sure)

```
/* before */
@media (max-width:991px){#header{height:100px}#footer{height:50%}}

/* after */
@media (max-width:991px){ #header{height:100px}#footer{height:50% }}
```

## Usage

Add [PostCSS Amp Process] to your build tool:

```bash
npm install postcss-amp-process --save-dev
```

#### PostCSS

Load [PostCSS Amp Process] as a PostCSS plugin:

```js
postcss([
  require('postcss-amp-process')({
    /* options */
  }),
]);
```

## Options

You can define your own array strings replace

```js
require('postcss-unmq')({
  replace: [['find', 'replace'], [/\.\.\//g, '{{ your_static_path|raw }}/']],
});
```

[postcss]: https://github.com/postcss/postcss
[postcss amp process]: https://github.com/namth0712/postcss-amp-process
