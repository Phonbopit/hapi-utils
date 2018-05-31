const validateAuth = (Model, decodedKey = 'sub') => async (
  decoded,
  request
) => {
  try {
    const user = await Model.findById({ _id: decoded[decodedKey] }).exec()
    return { isValid: !!user }
  } catch (err) {
    return { isValid: false }
  }
}

const createRoute = (method, path) => (args = {
  options: {},
  handler: (req, h) => ({ message: 'TODO' })
}) => ({
  method,
  path,
  options: args.options,
  handler: args.handler
})

const combineRoutes = (...args) => [...args]

module.exports = {
  validateAuth,
  createRoute,
  combineRoutes
}
