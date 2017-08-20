// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Step 1': function (browser) {
    var tesseract = require('node-tesseract')
    browser
      .url('http://202.99.45.97:9052/CIS-CHSSF/login')
      .waitForElementPresent('img[name="captcha"]', 1000)
      .setValue('input[name="username"]', '34b1y6u')
      .setValue('input[name="password"]', 'Meitainuo*1601', function (browser) {
        var fs = require('fs')
        var request = require('request')
        var imgUrl = 'captcha.jpg'
        var toPath = 'd:\\temp.jpg'
        request(encodeURI(imgUrl))
          .on('error', (err) => {
            console.log(err)
          })
          .pipe(fs.createWriteStream(toPath)
            .on('finish', () => {
              console.log('The %s has be saved to %s', imgUrl, toPath)
              tesseract.process(toPath, (err, result) => {
                if (err) {
                  console.log(err)
                } else {
                  console.log(result)
                }
              })
            }))
      })
  }
}
