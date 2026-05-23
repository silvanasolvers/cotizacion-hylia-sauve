import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = Fastify({ logger: false });

await app.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/',
});

app.get('/health', async () => ({ ok: true, name: 'cotizacion-hylia-sauve' }));

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '0.0.0.0';
await app.listen({ port, host });
