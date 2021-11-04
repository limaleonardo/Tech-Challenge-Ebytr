import { MongoClient } from 'mongodb';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb+srv://'
  + 'devenv:gsTeU1dvYnfBAFPo'
  + '@cluster0.u2koe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const DB_NAME = 'ToDo';

let db = null;

const connection = () => (db 
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    })
);

export default connection;
