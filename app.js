//. app.js
var settings = require( './settings' );

var db_service_name = 'CLOUDANT';

//. env values
process.env[db_service_name + '_AUTH_TYPE'] = settings.db_auth_type;
process.env[db_service_name + '_URL'] = settings.db_url;
process.env[db_service_name + '_APIKEY'] = settings.db_apikey;
process.env[db_service_name + '_USERNAME'] = settings.db_username;
process.env[db_service_name + '_PASSWORD'] = settings.db_password;

//. DB
var { CloudantV1 } = require( '@ibm-cloud/cloudant' );

//. 環境変数 CLOUDANT_AUTH_TYPE を見て、その内容によって CLOUDANT_URL や CLOUDANT_APIKEY を参照して接続する
var client = CloudantV1.newInstance( { serviceName: db_service_name, disableSslVerification: true } );  //. disableSslVerification は BASIC 認証時に必須（ないとエラー）

client.getServerInformation().then( function( info ){
  console.log( { info } );
  process.exit( 0 );
}).catch( function( err ){
  console.log( { err } );
  process.exit( 0 );
});
