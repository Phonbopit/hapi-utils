import { combineRoutes } from './src'

it('should combine object into array', () => {
  const obj1 = { id: 1, name: 'One' }
  const obj2 = { id: 2, name: 'Two' }
  const obj3 = { id: 3, name: 'Three' }
  
  const e = combineRoutes(obj1, obj2, obj3)
  const r = [obj1, obj2, obj3]
  
  expect(Array.isArray(e)).toBe(true)
  expect(e).toEqual(r)
})
