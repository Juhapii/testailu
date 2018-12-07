import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
})

const notes = [
  {
    id: 1,
    content: 'HTMLlläää',
    date: '2017-12-10T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Javaskriptiiiii',
    date: '2017-12-10T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'Reactiiii',
    date: '2017-12-10T19:20:14.298Z',
    important: true
  }
]

const result = notes.map(note => note.content)
console.log(result)

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)