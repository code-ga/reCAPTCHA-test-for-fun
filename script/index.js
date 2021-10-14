var onloadCallback = function () {}
var verifyCallback = function (response) {
  alert(response)
}
var widgetId1
var widgetId2
var onloadCallback = function () {
  // Renders the HTML element with id 'example1' as a reCAPTCHA widget.
  // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
  widgetId1 = grecaptcha.render('example1', {
    sitekey: '6LdKyM0cAAAAAI6Nm_exRUZiUx7OQhz_yzRtpF6k',
    theme: 'light',
  })
  widgetId2 = grecaptcha.render(document.getElementById('example2'), {
    sitekey: '6LdKyM0cAAAAAI6Nm_exRUZiUx7OQhz_yzRtpF6k',
  })
  grecaptcha.render('example3', {
    sitekey: '6LdKyM0cAAAAAI6Nm_exRUZiUx7OQhz_yzRtpF6k',
    callback: verifyCallback,
    theme: 'dark',
  })
}
