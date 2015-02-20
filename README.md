# Mozaïk twitter widgets

[![Travis CI](https://img.shields.io/travis/plouc/mozaik-ext-twitter.svg?style=flat-square)](https://travis-ci.org/plouc/mozaik-ext-twitter)

## Twitter Client Configuration

In order to use the Mozaïk twitter widgets, you **must** configure its **client**.

### parameters

key              | description
-----------------|-------------------------
`consumerKey`    | *twitter consumer key*
`consumerSecret` | *twitter consumer secret*
`accessTokenKey` | *twitter access token key*
`accessTokenKey` | *twitter access token key*

### usage

```javascript
{
  //…
  api: {
    twitter: {
      consumerKey:       'xxxxx',
      consumerSecret:    'xxxxx',
      accessTokenKey:    'xxxxx',
      accessTokenSecret: 'xxxxx'
    }
  }
}
```



## Twitter hashtags pie

![twitter hashtags pie](https://raw.githubusercontent.com/plouc/mozaik-ext-twitter/master/preview/twitter.hashtags_pie.png)

> Display a pie chart showing stats for a given list of hashtags

### parameters

key        | required | description
-----------|----------|---------------
`layout`   | no       | *layout (legends placement), can be `top` `right` `bottom` `left`, default is `right`*
`hashtags` | yes      | *a list of hashtags with an associated color*

### usage

```javascript
{
    type:     'twitter.hashtags_pie',
    layout:   'right',
    hashtags: [
        { color: '#6bc2c8', text: 'apple'      },
        { color: '#5f8cc0', text: 'google'     },
        { color: '#525487', text: 'twitter'    },
        { color: '#376aa2', text: 'facebook'   },
        { color: '#383b72', text: 'instagram'  }
    ],
    columns: 2, rows: 1, x: 0, y: 0
}
```