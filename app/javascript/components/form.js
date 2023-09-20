const scriptURL = 'https://script.google.com/macros/s/AKfycbzV9OmCTi364g1425T25kOaWguJrYK_V4EytzIc-bcgb6KPK1mAr63QeN5D_M37N3Uz/exec'
const form = document.forms["submit-to-google-sheet"]
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully!"
      setTimeout(function(){
        msg.innerHTML = ""
      }, 3000);
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
