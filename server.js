const fastify = require('fastify')({ logger: false })
const path = require('path')

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'client', 'dist'),
  prefix: '/',
})

fastify.setNotFoundHandler((request, reply) => {
  reply.sendFile('index.html')
})

const PORT = process.env.PORT || 3000
fastify.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) { console.error(err); process.exit(1) }
  console.log(`\n🚀 Server running at ${address}\n   Build: npm run build inside client/, then npm start\n`)
})
