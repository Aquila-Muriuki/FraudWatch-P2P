import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text(' Ai powered public finance threat intelligence backend is running!')
})

export default app
