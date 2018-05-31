const { createRoute } = require('../lib')

it('should return a function with object as argument', () => {
  const result = createRoute('GET', '/my/api/endpoint')

  expect(typeof result).toEqual('function')
})

it('should return routing properly', () => {
  const myHandler = {
    options: { auth: false },
    handler: (req, h) => ({ message: "It's work!" })
  }

  const { method, path, options, handler } = createRoute(
    'GET',
    '/my/api/endpoint'
  )(myHandler)

  expect({ method, path, options }).toEqual({
    method: 'GET',
    path: '/my/api/endpoint',
    options: { auth: false }
  })

  expect(typeof handler).toEqual('function')
  expect(handler()).toEqual({ message: "It's work!" })
})

it('should return default handler when not provided handler function', () => {
  const { handler } = createRoute('GET', '/')()
  expect(handler()).toEqual({ message: 'TODO' })
})
