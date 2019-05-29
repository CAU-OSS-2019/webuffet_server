let username = "webuffet";
let password = "welovewebuffet";
let host = "localhost";
let port = 27017;
let database = "webuffet_db";

const db_config = {
  uri: "mongodb://" + username + ":" + password + "@" + host + ":" + port + "/" + database
};

export { db_config };
