var mime = require('./')
var test = require('tape')

test('mime type lookup for browser video and audio', function (t) {
  t.equal(mime('mp3'), 'audio/mpeg')
  t.equal(mime('mp4'), 'video/mp4')
  t.equal(mime('.mp4'), 'video/mp4')
  t.equal(mime('.mp4'), 'video/mp4')
  t.throws(function () {
    mime()
  })
  t.end()
})
