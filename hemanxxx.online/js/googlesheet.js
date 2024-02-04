const scriptURL = 'https://script.google.com/macros/s/AKfycbxGwYfAEH6Vm5nPOxXz-JwcLw2ehicP0IZbGHxNKHWM4q8KI4sqsG_yj_ZPKbAqafbA/exec'

const form = document.forms['contactnew']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully. We will call back shorlty" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})