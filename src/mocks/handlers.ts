import {rest} from 'msw'

// To handle a rest API request, we need to specify its method, path & function that would return mock response
export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(ctx.status(200),
        ctx.json([
            {
                name: 'Bruce Wayne'
            },
            {
                name: 'Clark Kent'
            },
            {
                name: 'Princess Diana'
            }
        ]))
    })
]