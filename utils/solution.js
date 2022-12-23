export default function genDiff(obj1, obj2) {
  const result = {};
  for (const key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      result[key] = 'deleted';
    } else if (obj1[key] !== obj2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchanged';
    }
  }

  for (const key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      result[key] = 'added';
    }
  }

  return result;
}
