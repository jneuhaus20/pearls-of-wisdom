module.exports = {
  "in-mem-db": {
    "name": "in-mem-db",
    "localStorage": "",
    "file": "",
    "connector": "memory"
  },

  "mongodb": {
    "name": "mongodb",
    "url": process.env.MONGODB_URI
  }
}
