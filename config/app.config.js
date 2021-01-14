module.exports = {
    development: {
        mongodbUrl: process.env.MONGODB_URL || 'mongodb://root:root@localhost:27017/?authSource=admin',
        port: process.env.PORT || 3000
    }
}