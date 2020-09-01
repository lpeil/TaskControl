import React from 'react'
import ReactDOM from 'react-dom'

import Initial from './initial.js'
import './locales/i18n';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Initial />,
    document.getElementById("root")
  )
})