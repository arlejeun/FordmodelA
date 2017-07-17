/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
  'use strict'


  // Initialize the Gallery as video carousel:
  blueimp.Gallery([
    {
      title: 'Sintel',
      href: 'img/KCModelAFront_002.jpg'
    },
    {
      title: 'Big Buck Bunny',
      href: 'img/KCModelAFront_001.jpg'
    },
     {
      title: 'Sintel',
      href: 'img/KCModelAFront_002.jpg'
    },
    {
      title: 'Big Buck Bunny',
      href: 'img/KCModelAFront_001.jpg'
    },
     {
      title: 'Sintel',
      href: 'img/KCModelAFront_002.jpg'
    },
    {
      title: 'Big Buck Bunny',
      href: 'img/KCModelAFront_001.jpg'
    }
  ], {
    container: '#blueimp-image-carousel',
    carousel: true
  })
})
