import { useAppSelector } from '~store/store';
import { TBaseComponentWithChildren } from '~types/base-component.type';

export function AppContainer({ children }: TBaseComponentWithChildren) {
  const activeModal = useAppSelector((state) => state?.modals?.current);
  const { props = {}, Component = undefined } = activeModal;

  return (
    <>
      {children}
      { Component && <Component {...props} /> }
    </>
  );
}
