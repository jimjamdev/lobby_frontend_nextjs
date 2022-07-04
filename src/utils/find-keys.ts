export function findKeysInArray(array: any[], key: string): string[] {
  return array.reduce((acc: string[], item: any) => {
    if (item[key]) {
      acc.push(item[key]);
    }
    return acc;
  }, []);
}

export function findKeysInObject(object: any, key: string): string[] {
  return Object.keys(object).reduce((acc: string[], item: string) => {
    if (object[item][key]) {
      acc.push(object[item][key]);
    }
    return acc;
  }, []);
}

export function findValuesByKeys(object: any, keys: string[]): any[] {
  return keys.reduce((acc: any[], key: string) => {
    if (object[key]) {
      acc.push(object[key]);
    }
    return acc;
  }, []);
}
