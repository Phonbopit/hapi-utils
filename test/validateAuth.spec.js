const { validateAuth } = require('../lib')

test('should return isValid with TRUE', async () => {
  const User = {
    findById: () => ({
      exec: () => Promise.resolve({ _id: 1, name: 'found user' })
    })
  }

  const validate = validateAuth(User)

  const result = await validate({ sub: 1 })

  expect(result).toEqual({ isValid: true })
})

test('should return isValid with FALSE', async () => {
  const User = {
    findById: () => ({
      exec: () => Promise.resolve(null)
    })
  }

  const validate = validateAuth(User)

  const result = await validate({ sub: 1 })

  expect(result).toEqual({ isValid: false })
})

test('should return FALSE when query error', async () => {
  const validate = validateAuth({})

  const result = await validate({})
  expect(result).toEqual({ isValid: false })
})
