import { maskEmail, maskPhone } from '../services'

export class Form {
  constructor({ forms, url }) {
    this.forms = document.querySelectorAll(forms)
    this.inits = document.querySelectorAll('input')
    this.message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы свами свяжемся',
      failure: 'Что-то пошло не так..'
    }
    this.path = url
  }

  clearInputs() {
    this.inits.forEach(input => {
      input.value = ''
    })
  }

  async postData(url, data) {
    const result = await fetch(url, {
      method: 'POST',
      body: data
    })

    return await result.text()
  }

  init() {
    maskEmail()
    maskPhone()

    this.forms.forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault()

        const statusMessage = document.createElement('div')
        statusMessage.style.cssText = `
            margin-top: 15px;
            font-size: 18px;
            color: grey;
        `
        form.parentNode.append(statusMessage)

        statusMessage.textContent = this.message.loading

        const formData = new FormData(form)

        this.postData(this.path, formData)
          .then(res => {
            console.log(res)
            statusMessage.textContent = this.message.success
          })
          .catch(() => {
            statusMessage.textContent = this.message.failure
          })
          .finally(() => {
            this.clearInputs()
            setTimeout(() => {
              statusMessage.remove()
            }, 6000)
          })
      })
    })
  }
}
