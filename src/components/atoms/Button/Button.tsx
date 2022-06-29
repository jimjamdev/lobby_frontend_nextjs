import { TBaseComponentWithChildren } from '~types/base-component.type';

export type TButton = TBaseComponentWithChildren;

export function Button({ children }: TButton) {
  const text: any = [];
  const someMap = [{ text: 'test1' }, { text: 'test2' }];
  for (let i = 0; i < someMap.length; i++) {
    text.push(someMap[i]);
  }

  console.log('text', text);
  return <button type="button">{children}</button>;
}
