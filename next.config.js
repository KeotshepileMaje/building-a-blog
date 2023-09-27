const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     mongodb_username: 'keotshepilemaje',
//     mongodb_password: 'gZGT5QdpzsMChhUH',
//     mongodb_clustername: 'cluster0',
//     mongodb_database: 'my-blog',
//   }
// }

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'keotshepilemaje',
        mongodb_password: 'gZGT5QdpzsMChhUH',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-blog-dev',
      }
    }
  }
  
  return {
    env: {
      mongodb_username: 'keotshepilemaje',
      mongodb_password: 'gZGT5QdpzsMChhUH',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-blog',
    }
  }
}