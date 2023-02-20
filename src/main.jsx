import React from 'react'
import ReactDOM from 'react-dom/client'

const navbar = (
  <nav>
      <h1>my website</h1>
      <ul>
          <li>pricing</li>
          <li>about</li>
          <li>contact</li>
      </ul>
  </nav>
)

ReactDOM.createRoot(document.getElementById('root')).render(navbar)