// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Step 1': function (browser) {
    browser
      .url('http://202.99.45.97:9052/CIS-CHSSF/login')
      .waitForElementPresent('img[name="captcha"]', 1000)
  },
  'Step 2': function (client) {
    console.log('step 2............')
    var range = {}
    client
      .getElementSize('img[name="captcha"]', (result) => {
        range.height = result.value.height
        range.width = result.value.width
      })
      .getLocation('img[name="captcha"]', (result) => {
        range.x = result.value.x
        range.y = result.value.y
        console.log(range)
      })
  }
}
