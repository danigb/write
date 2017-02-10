
const { html, app } = require('hyperapp')

const view = (model) => html`
  <p>Write!</p>
`

var root = document.getElementById('app')
root.innerHtml = ''
app({ view, root })
