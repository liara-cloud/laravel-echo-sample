const Echo = require('laravel-echo-server');

const clients = [
  {
    appId: process.env.CLIENT_ID,
    key: process.env.CLIENT_KEY,
  }
];

const options = {
  clients,
	port: 6001,
	database: "sqlite",
	databaseConfig: {
		"redis": {},
		"sqlite": {
			"databasePath": "/sqlite_db/laravel-echo-server.sqlite"
		}
	},
	"subscribers": {
		"http": true,
		"redis": false
	},
	"apiOriginAllow": {
		"allowCors": true,
		"allowOrigin": "*",
		"allowMethods": "GET, POST",
		"allowHeaders": "Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization, X-CSRF-TOKEN, X-Socket-Id"
	},
};

Echo.run(options);
