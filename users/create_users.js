
db.createUser(
  {
    user: "ejemplo",
    pwd: "66abc70c773a9cfdfc9ecea8",
    roles: [{"role":"standard","db":"cineCampusS"}]
  }
);

db.createUser(
  {
    user: "miguelin",
    pwd: "66a03843efbbe5d5d5ed702f",
    roles: [{"role":"vip","db":"cineCampusS"}]
  }
);

db.createUser(
  {
    user: "samuel10",
    pwd: "66abc644929766273ae4bb81",
    roles: [{"role":"dbOwner","db":"cineCampusS"}]
  }
);
