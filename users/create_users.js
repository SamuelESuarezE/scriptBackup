
db.createUser(
  {
    user: "ejemplo",
    pwd: "",
    roles: [{"role":"standard","db":"cineCampus"}]
  }
);

db.createUser(
  {
    user: "miguelin",
    pwd: "",
    roles: [{"role":"vip","db":"cineCampus"}]
  }
);

db.createUser(
  {
    user: "samuel10",
    pwd: "",
    roles: [{"role":"dbOwner","db":"cineCampus"}]
  }
);
