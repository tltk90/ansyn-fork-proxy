const {
  BASE_DOMAIN,
  ANSYN_PROD_PORT,
  ANSYN_DEV_PORT,
  ANSYN_DRONE_GEO_REFERENCER_CLIENT_PORT,
  ANSYN_STORAGE_SERVICE_PROD_PORT,
  ANSYN_STORAGE_SERVICE_DEV_PORT,
  ANSYN_MONGO_PORT
} = process.env

const config = {
  port: 8081,
  domain: BASE_DOMAIN || 'http://ansyn.webiks.com',
  proxyPorts: {
    'ansyn.webiks.com': ANSYN_PROD_PORT || 83,
    'ansyn.dev.webiks.com': ANSYN_DEV_PORT || 81,
    'ansyn.drone-geo-referencer-client.webiks.com': ANSYN_DRONE_GEO_REFERENCER_CLIENT_PORT || 84,
    'ansyn.dev.storage-service.webiks.com': ANSYN_STORAGE_SERVICE_PROD_PORT || 8080,
    'ansyn.storage-service.webiks.com': ANSYN_STORAGE_SERVICE_DEV_PORT || 8081,
    'ansyn.mongo.webiks.com': ANSYN_MONGO_PORT || 85
  }
}

module.exports = config