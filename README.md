# hapi-utils

My Hapi.js Utility function

## Usage

<details>
    <summary>createRoute</summary>

Defind routing with handler function.


```
// Normal
server.route({
  method: 'GET',
  path: '/path/to/endpoint',
  options: {
    validate: {},
    auth: 'jwt'
  },
  handler: (req, h) => {}
})
```

with `createRoute`

```

// handlers.js
module.exports = {
  myHandler: {
    options: {},
    handler: (req, h) => {}
  }
}

// route.js
const { myHandler } = require('./handlers')
createRoute('GET', '/path/to/endpoint')(myHandler)
```

</details>

<details>
    <summary>combineRoutes</summary>

// TODO
</details>

<details>
    <summary>validateAuth</summary>

// TODO
</details>


## Example

// TODO
