#!/usr/bin/env node
export default function findWhere(array, keyValuePair) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const keys = Object.keys(keyValuePair);
    let match = true;

    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      if (element[key] !== keyValuePair[key]) {
        match = false;
        break;
      }
    }

    if (match) {
      return element;
    }
  }

  return null;
}
