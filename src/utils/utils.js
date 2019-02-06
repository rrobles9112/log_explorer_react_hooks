var Database = require("ibm_db").Database
  , ibmdb = new Database();

function connection(){
    return new Promise(function (resolve, reject) {

        console.log(resolve, reject)

        ibmdb.open('DATABASE=SIGRI;SCHEMA=SALUD;HOSTNAME=172.25.2.10;UID=salfam;PWD=salfam2015;PORT=50000;PROTOCOL=TCPIP', function (err, res){
            if (err) {
                    reject(err);
                    console.log('Oops, an error occured %s', err);
            }
            else {
                      resolve(res);
                      return res;
              }
        });
    });
}


export default ibmdb;