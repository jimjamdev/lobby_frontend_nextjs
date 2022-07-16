export function findValuesByKeys(object: any, keys: string[]): any[] {
  return keys.reduce((acc: any[], key: string) => {
    if (object[key]) {
      acc.push(object[key]);
    }
    return acc;
  }, []);
}
