// prisma.config.ts
import * as dotenv from 'dotenv'; // Import dotenv
import { defineConfig, env } from 'prisma/config';

dotenv.config(); // Load environment variables from .env file

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
      // This should now be defined
  },
});