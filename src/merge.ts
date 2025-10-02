export function merge(c1: number[], c2: number[], c3: number[]): number[] {
  const c2Asc = c2.slice().reverse();

  const mergedC1C2 = mergeTwo(c1, c2Asc);

  const finalResult = mergeTwo(mergedC1C2, c3);

  return finalResult;
}

function mergeTwo(a: number[], b: number[]): number[] {
  let i = 0;
  let j = 0;
  const result: number[] = [];

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }

  while (i < a.length) {
    result.push(a[i]);
    i++;
  }

  while (j < b.length) {
    result.push(b[j]);
    j++;
  }

  return result;
}
