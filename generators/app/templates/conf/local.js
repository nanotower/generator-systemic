module.exports = {
    mongodb: {
        url: 'mongodb://127.0.0.1/example',
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1000,
                    connectTimeoutMS: 5000,
                    socketTimeoutMS: 5000
                }
            }
        }
    },
    redis: {
        url: 'redis://localhost:6379/1'
    },
    postgres: {
        database: 'postgres',
        user: 'postgres'
    },
<% if (setup.indexOf('basics') > -1) { %>
    logger: {
        transport: 'console'
    }
<% } %>
}
