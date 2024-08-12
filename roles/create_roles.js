
db.createRole(
  {
    role: "standard",
    privileges: [
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "seats"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "rooms"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "screenings"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "tickets"
    },
    "actions": [
      "find",
      "insert",
      "update"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "movies"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "payments"
    },
    "actions": [
      "find",
      "insert",
      "update"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "vip_cards"
    },
    "actions": [
      "find",
      "insert",
      "update"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "users"
    },
    "actions": [
      "find",
      "insert",
      "update"
    ]
  }
],
"roles": []
  }
);

db.createRole(
  {
    role: "vip",
    privileges: [
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "seats"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "rooms"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "screenings"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "tickets"
    },
    "actions": [
      "find",
      "insert",
      "update"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "movies"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "payments"
    },
    "actions": [
      "find",
      "insert",
      "update"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "vip_cards"
    },
    "actions": [
      "find",
      "insert",
      "update"
    ]
  },
  {
    "resource": {
      "db": "cineCampusS",
      "collection": "users"
    },
    "actions": [
      "find",
      "insert",
      "update"
    ]
  }
],
"roles": []
  }
);
