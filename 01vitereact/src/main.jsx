import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'http://google.com',
//       target: 'blank'
//   },
//   Children: 'Click me to visit google.'
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'http://google.com', target:'_blank'},
  'Click to visit google'
)

createRoot(document.getElementById('root')).render(
    reactElement
)
