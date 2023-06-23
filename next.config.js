const path = require("path");
const { DefinePlugin } = require("webpack");

const nextConfig = {};

module.exports = {
  ...nextConfig,
 
  env: {
    MapboxAccessToken:
      "pk.eyJ1IjoicnV0aGVybGVzIiwiYSI6ImNsaGF3bnJwMjBsY3kzZm4xcWYza3hka3cifQ.6Fz6MQnPiCgAUvTTyUd9mw",
  },


  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'painel.freteme.com',
        port: '',
        pathname: '/v1/storage/buckets/img/files/**',
      },
    ],
  },

  images: {
    domains: ['painel.freteme.com'],
  },
};


