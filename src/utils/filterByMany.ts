export function filterByMany(obj: Record<string, any>, ...args: string[]) {
  return Object.keys(obj).filter((key) => args.includes(key));
}
