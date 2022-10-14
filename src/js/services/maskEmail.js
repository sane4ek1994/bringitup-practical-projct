export const maskEmail = () => {
  const mailInputs = document.querySelectorAll('[type="email"]')
  mailInputs.forEach(input => {
    input.addEventListener('keypress', event => {
      // разрешаем  только латиницу и @ и .
      if (event.key.match(/[^a-z 0-9 @ \.]/gi)) {
        event.preventDefault()
      }
    })
  })
}
