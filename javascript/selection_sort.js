function selectionSort(arr) {
  return arr.sort((a, b) => a - b)
}

if (require.main === module) {
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  let start = performance.now()

  const longInput = [];
  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const end = performance.now()

  console.log(`Total runtime: ${(end - start) / 100} ms`)
}

module.exports = selectionSort;