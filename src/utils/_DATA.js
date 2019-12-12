let superUsers = ["dettma1", "oslon16"]

let categories = ["consumables", "non-consumables",
    "art supplies", "food", "dinner", "clothing", "decor", "campfire",
    "outdoor activities", "games", "themed events", "wrapping paper",
    "lights", "glow stuff", "seasonal decor", "giveaways"]

let items = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    owner: "dettma1",
    name: "spoons",
    count: 300,
    location: {room: "OSA", grid_loc: "A3"},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["consumables", "dinner"],
    checkouts: [],
    isFlammable: false,
  },
  "5c9qojr2d1738zlx09afby": {
    id: "5c9qojr2d1738zlx09afby",
    owner: "dettma1",
    name: "spike ball set",
    count: 2,
    location: {room: "viking", grid_loc: "A4"},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["outdoor activities", "games"],
    checkouts: [{borrower: "olson6", borrow_date: "10/21/2019", due_date: "10/24/2019", returned: true},],
    isFlammable: false,
  },
  "f4xzgapq7mu783k9t02ghx": {
    id: "f4xzgapq7mu783k9t02ghx",
    owner: "dettma1",
    name: "facepaint tubes",
    count: 8,
    location: {room: "OSA", grid_loc: "C4"},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["outdoor activities", "art supplies"],
    checkouts: [],
    isFlammable: false,
  },
  "hbsc73kzqi75rg7v1e0i6a": {
    id: "hbsc73kzqi75rg7v1e0i6a",
    owner: "dettma1",
    name: "giant tic tac toe set",
    count: 1,
    location: {room: "viking", grid_loc: "D4"},
    timestamp: 1518122597860,
    isCheckedOut: true,
    categories: ["outdoor activities", "games"],
    checkouts: [{borrower: "olson6", borrow_date: "10/21/2019", due_date: "10/24/2019", returned: false},],
    isFlammable: false,
  },
  "5w6k1n34dkp1x29cuzn2zn": {
    id: "5w6k1n34dkp1x29cuzn2zn",
    owner: "olson16",
    name: "crayons",
    count: 100,
    location: {room: "OSA", grid_loc: "B2"},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["art suplies"],
    checkouts: [],
    isFlammable: false,
  },
  "czpa59mg577x1oo45cup0d": {
    id: "czpa59mg577x1oo45cup0d",
    owner: "olson16",
    name: "marshmallow sticks",
    count: 10,
    location: {room: "OSA", grid_loc: "B2"},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["outdoor activities", "campfire"],
    checkouts: [{borrower: "olson6", borrow_date: "10/21/2019", due_date: "10/24/2019", returned: false},],
    isFlammable: false,
  },
  "2mb6re13q842wu8n106bhk": {
    id: "2mb6re13q842wu8n106bhk",
    owner: "olson16",
    name: "tombstone",
    count: 6,
    location: {room: "viking", grid_loc: "D3"},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["outdoor activities", "themed events", "seasonal decor"],
    checkouts: [],
    isFlammable: false,
  },
  "nnvkjqoevs8t02lzcc0ky": {
    id: "nnvkjqoevs8t02lzcc0ky",
    owner: "dettma1",
    name: "school tattoos",
    count: 150,
    location: {room: 'OSA', grid_loc: 'H2'},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["themed events", "art supplies"],
    checkouts: [],
    isFlammable: false,
  },
  "omdbjl68fxact38hk7ypy6": {
    id: "omdbjl68fxact38hk7ypy6",
    owner: "dettma1",
    name: "cow bells",
    location: {room: 'OSA', grid_loc: "H2"},
    count: 20,
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["art supplies"],
    checkouts: [],
    isFlammable: false,
  },
  "4pt0px8l0l9g6y69ylivti": {
    id: "4pt0px8l0l9g6y69ylivti",
    owner: "dettma1",
    name: "christmas stockings",
    count: 40,
    location: {room: 'OSA', grid_loc: 'J1'},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["giveaways", "seasonal decor"],
    checkouts: [],
    isFlammable: false,
  },
  "6h5ims9iks66d4m7kqizmv": {
    id: "6h5ims9iks66d4m7kqizmv",
    owner: "olson16",
    name: "plastic serving bowls",
    count: 3,
    location: {room: 'OSA', grid_loc: 'B4'},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["dining", "non consumables"],
    checkouts: [],
    isFlammable: false,
  },
  "fap8sdxppna8oabnxljzcv": {
    id: "fap8sdxppna8oabnxljzcv",
    owner: "dettma1",
    name: "wood",
    count: 15,
    location: {room: 'flammable closet'},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["outdoor activities", "campfire"],
    checkouts: [],
    isFlammable: true,
  },
  "3km0v4hf1ps92ajf4z2ytg": {
    id: "3km0v4hf1ps92ajf4z2ytg",
    owner: "dettma1",
    name: "chopsticks",
    count: 25,
    location: {room: 'OSA', grid_loc: 'B4'},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["dinner", "consumables"],
    checkouts: [],
    isFlammable: false,
  },
  "njv20mq7jsxa6bgsqc97": {
    id: "njv20mq7jsxa6bgsqc97",
    owner: "dettma1",
    name: "brushes",
    count: 10,
    location: {room: 'OSA', grid_loc: 'A3'},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["non consumables", "art supplies"],
    checkouts: [],
    isFlammable: false,
  },
  "leqp4lzfox7cqvsgdj0e7": {
    id: "f4xzgapq7mu783k9t02ghx",
    owner: "dettma1",
    name: "paints",
    count: 20,
    location: {room: 'OSA', grid_loc: 'A3'},
    timestamp: 1518122597860,
    isCheckedOut: false,
    categories: ["games", "consumables", "art supplies"],
    checkouts: [],
    isFlammable: false,
  },
}

export function _getItems() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...items }), 1000)
  })
}

export function _getSuperUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...superUsers }), 1000)
  })
}

export function _getCategories() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...categories }), 1000)
  })
}


function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatItem({ owner, name, count, location, categories, isFlammable }) {
  return {
    id: generateUID(),
    owner,
    name,
    count,
    location,
    timestamp: Date.now(),
    isCheckedOut: false,
    categories,
    checkouts: [],
    isFlammable,
  }
}

export function _saveCategory(category) {
  return new Promise((res, rej) => {
  
    setTimeout(() => {
      categories = {
        ...categories,
        category,
      }
      res(categories)
    }, 1000)
  })
  }

export function _saveItem({ owner, name, count, location, categories, isFlammable }) {
  return new Promise((res, rej) => {
    const formattedItem = formatItem({
      owner, 
      name, 
      count, 
      location, 
      categories, 
      isFlammable
    })

    setTimeout(() => {
      items = {
        ...items,
        [formattedItem.id]: formattedItem,
      }

      res(formattedItem)
    }, 1000)
  })
}
