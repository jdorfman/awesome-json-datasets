#!/usr/bin/env node

/*
CC0 1.0 Universal (https://wiki.creativecommons.org/wiki/CC0)
whitespace_test.js - Checks for trailing whitespace in markdown files
*/

var markdownlint = require('markdownlint')

var options = {
  'files': ['./README.md'],
  'config': require('./relaxed.json')
}

markdownlint(options, function callback (err, result) {
  if (result.toString().length > 1) {
    console.log(result.toString())
    process.exit(1)
  } else {
    console.log('Pass')
  }
})
