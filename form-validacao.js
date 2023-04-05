// validação - desabilitando submissão de formulario se campos estiverem indisponivels
(() => {
  'use strict'

  // Validação - atualiza os formularios para aplicação 
  const forms = document.querySelectorAll('.needs-validation')

  // validação -impedindo a submissão
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
