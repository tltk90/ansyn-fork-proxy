const {
  BASE_DOMAIN,
  ANSYN_PROD_PORT,
  ANSYN_DEV_PORT,
  ANSYN_DRONE_GEO_REFERENCER_CLIENT_PORT,
  ANSYN_STORAGE_SERVICE_PROD_PORT,
  ANSYN_STORAGE_SERVICE_DEV_PORT,
  ANSYN_MONGO_PORT,
  ANSYN_API_PORT
} = process.env

const config = {
  port: 8081,
  domain: BASE_DOMAIN || 'http://ansyn.webiks.com',
  proxyPorts: {
    'ansyn.webiks.com': ANSYN_PROD_PORT || 83,
    'dev.ansyn.webiks.com': ANSYN_DEV_PORT || 81,
    'drone-geo-referencer-client.ansyn.webiks.com': ANSYN_DRONE_GEO_REFERENCER_CLIENT_PORT || 84,
    'storage-service.ansyn.webiks.com': ANSYN_STORAGE_SERVICE_PROD_PORT || 8080,
    'storage-service.dev.ansyn.webiks.com': ANSYN_STORAGE_SERVICE_DEV_PORT || 8081,
    'mongo.ansyn.webiks.com': ANSYN_MONGO_PORT || 85,
    'api.ansyn.webiks.com': ANSYN_API_PORT || 86
  }
}

module.exports = config