function maxIndex(arreglo) {
  let max = arreglo[0];
  let posicion = 0;
  if (arreglo.length === 0) {
    return "-1";
  }

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > max) {
      max = arreglo[1];
      posicion = i;
    }
  }
  return posicion;
}

// escribe la función maxIndex acá

console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(maxIndex([])); // -1
