// Note: this file gets copied around, make sure you edit
// the UIconfig located at `gekko/web/vue/dist/UIconfig.js`.

// This config is used by both the frontend as well as the web server.
// see https://gekko.wizb.it/docs/installation/installing_gekko_on_a_server.html#Configuring-Gekko

const CONFIG = {
  headless: true,
  api: {
    host: '127.0.0.1',
    port: 3000,
    timeout: 120000 // 2 minutes
  },
  ui: {
    ssl: false,
    host: 'localhost',
    port: 3000,
    path: '/'
  },
  adapter: 'postgresql',
 // postgresql = {
 //   path: 'plugins/postgresql',
 //   version: 0.1,
 //   connectionString: 'postgres://gekkodbuser:1234@localhost:5432', // if default port
 //   database: null, // if set, we'll put all tables into a single database.
 //   schema: 'public',
 //   dependencies: [{
 //     module: 'pg',
 //     version: '7.4.3'
 // }]
// }
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
