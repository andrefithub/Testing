function exampleForLoop() {
  // cara 1
  for (let i = 0; i < 10; i++) {
    // console.log(i)
  }

  // cara 2
  const andreDetail = {
    name: "Andre",
    age: 30,
    address: "Jati bening",
    isMarried: false
  }

  for (let v in andreDetail) {
    // console.log(v + ":" + andreDetail[v])
  }

  // cara 3 (khusus array)
  const arr = [1, 2, 3, 4, 5, 6, 7]
  for (let x of arr) {
    // console.log(x)
  }

  // cara 4 
  arr.forEach((value, idx, arrValue) => {
    // console.log("value", value, "\n", "idx", idx, "\n", "arrValue", arrValue, "\n")
  })

  // cara 5
  let c1 = 10;
  while (c1 > 0) {
    // console.log(c1)
    if (c1 === 6) break
    c1--
  }

  // cara 6
  let c2 = 1;
  do {
    // console.log(c2)
    if (c2 === 6) break
    c2++
  } while (c2 <= 10);

  c3 = 1
  do {
    c3++
    if (c3 % 2 === 1) continue
    console.log(c3)
  } while (c3 <= 10);
}

exampleForLoop()