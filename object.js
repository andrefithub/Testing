const user = {
  name: "Andre",
  age: 30,
  address: "Jati bening",
  isMarried: false
}

const users = [
  {
    name: "Andre",
    age: 30,
    address: "Jati bening",
    isMarried: false
  },
  {
    name: "Husnul",
    age: 25,
    address: "Kuningan",
    isMarried: false
  }
]

users[0].isMarried = true

// console.log(users[0])
console.log(users.length) // bisa cari di internet. Keyword javascript array object method


const requestLogin = {
  email: "andre@gmail.com",
  password: "admin",
  age: "   21"
}

function isValid(req) {
  if (req["password"] === "admin") return true
  return false
}

function checkAge(req) {
  console.log(typeof req.age)
  let age = parseInt(req.age)
  console.log(typeof age)
  if (age <= 20) return false
  return true
}

// console.log(isValid(requestLogin))
console.log(checkAge(requestLogin))
