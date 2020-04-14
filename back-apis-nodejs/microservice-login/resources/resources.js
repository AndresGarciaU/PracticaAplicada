
/* Example request for user login estandart */
/* Example request for user login estandart */

{
    "user": "admezalo",
    "code": "1320014100"
}

/* Example request for user login external */
/* Example request for user login external */

{
    "mail": "jcperez@gmail.com",
    "name1": "Juan",
    "name2": "Carlos",
    "lastName1": "Corredor",
    "lastname2": "Perez",
    "typeUser": "invitado",
    "reason": "motivo-x"
}

/* Example document for codes */
/* Example document for codes */

{
    "_id": "5e7b79653613aa83b9037a67",
    "firstCode": 1001,
    "lastCode": 1
}

db.userExternalCodes.find().pretty()
db.userExternalCodes.insert({"firstCode": "1001", "lastCode": "001"})
db.userExternalCodes.update({"firstCode": 1001, "lastCode": 5}, {"firstCode": 1001, "lastCode": 1})

db.usersExternalRegister.find().pretty()
db.usersExternalRegister.remove({})

db.usersLogin.find().pretty()
db.usersLogin.remove({"user": "jcorredorco"})





