import { curry } from 'ramda'
import { createRoute } from './src'

it('Should return a function that return an object', () => {
  // hapi handler
  const findById = (req, h) => { message: "It's work!", req.params }
  
  // hapi options
  const options = { auth: false }
  
  const e = curry(
    createRoute('GET', '/api/users/{id}',
    findById,
    options
  )
  
  const r = {
    method: 'GET',
    path: '/api/users/{id},
    handlers: (req, h) => { message: "It's work!" },
    options: {
      auth: false
    }
  }
  
  expect(e).toEqual(r)
})
