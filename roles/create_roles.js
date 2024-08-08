
db.createRole(
  {
    role: "standard",
    privileges: [
  {
    "resource": {
      "db": "cineCampus",
      "collection": "seats"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampus",
      "collection": "rooms"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampus",
      "collection": "screenings"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampus",
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
      "db": "cineCampus",
      "collection": "movies"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampus",
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
      "db": "cineCampus",
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
      "db": "cineCampus",
      "collection": "users"
    },
    "actions": [
      "find",
      "insert",
      "update"
    ]
  }
]
  }
);

db.createRole(
  {
    role: "vip",
    privileges: [
  {
    "resource": {
      "db": "cineCampus",
      "collection": "seats"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampus",
      "collection": "rooms"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampus",
      "collection": "screenings"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampus",
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
      "db": "cineCampus",
      "collection": "movies"
    },
    "actions": [
      "find"
    ]
  },
  {
    "resource": {
      "db": "cineCampus",
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
      "db": "cineCampus",
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
      "db": "cineCampus",
      "collection": "users"
    },
    "actions": [
      "find",
      "insert",
      "update"
    ]
  }
]
  }
);
