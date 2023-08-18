import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  includePaths: [join(__dirname, 'styles')],
  redirects: async function () {
    return [
      {
        source: '/',
        destination: '/beasts',
        permanent: true
      }
    ]
  }
}

export default nextConfig;