const { MongoClient } = require('mongodb');
const fs = require('fs');
const prompt = require("prompt")

console.log("------------------------------------------------------")
console.log("              MONGO BACKUP PROGRAM                    ")
console.log("------------------------------------------------------")


prompt.start();
prompt.get(["uri", "db_name"], (err, result) => {
  const {uri, db_name} = result
  console.log(result)
  exportCollections(uri, db_name) 
})


async function exportCollections(uri, db_name) {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    console.log("------------------------------------------------------")
    console.log('Connected to MongoDB');

    const db = client.db(db_name);
    const collections = await db.listCollections().toArray();

    for (const collectionInfo of collections) {
      const collectionName = collectionInfo.name;
      const collection = db.collection(collectionName);
      const cursor = collection.find({});

      // Export collection schema
      const collectionSchema = await collection.options();
      const writeStreamSchemas = fs.createWriteStream(`./schemas/${collectionName}_schema.json`);
      writeStreamSchemas.write(JSON.stringify(collectionSchema.validator, null, 2));
      writeStreamSchemas.end();

      // Export collection data
      const writeStream = fs.createWriteStream(`./data/${collectionName}.json`);

      console.log(`Exporting collection: ${collectionName}`);

      writeStream.write('[\n');
      await cursor.forEach((document) => {
        for (let [key, value] of Object.entries(document)) {
          if (key.slice(-3) == "_id") {
            document[key] = { "$oid": value };
          }
        }
        writeStream.write(JSON.stringify(document) + ',\n');
      });
      writeStream.write(']\n');

      writeStream.end();
      console.log(`Finished exporting ${collectionName}`);
    }

    console.log("------------------------------------------------------")
    await exportRolesAndUsers(uri, db_name);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await client.close();

  }
}

async function exportRolesAndUsers(uri, db_name) {
  const client = await MongoClient.connect(uri);
  const db = client.db(db_name);

  // Export roles
  const roles = await db.command({ rolesInfo: 1, showPrivileges: true });

  const writeStreamRoles = fs.createWriteStream('./roles/create_roles.js');
  for (const role of roles.roles) {
    console.log('Exportin role: ' + role.role);
    writeStreamRoles.write(`
db.createRole(
  {
    role: "${role.role}",
    privileges: ${JSON.stringify(role.privileges, null, 2)}
  }
);
`);
  }
  writeStreamRoles.end();
  console.log("------------------------------------------------------")

  // Export users
  const users = await db.command({ usersInfo: 1 });

  const writeStreamUsers = fs.createWriteStream('./users/create_users.js');
  for (const user of users.users) {
    console.log('Exportin user: ' + user.user);
    writeStreamUsers.write(`
db.createUser(
  {
    user: "${user.user}",
    pwd: "",
    roles: ${JSON.stringify(user.roles)}
  }
);
`);
  }
  writeStreamUsers.end();

  await client.close();
}



  

// const URI = "mongodb://samuel10:66abc644929766273ae4bb81@monorail.proxy.rlwy.net:49468/cineCampus"
// const DB_NAME = "cineCampus"


