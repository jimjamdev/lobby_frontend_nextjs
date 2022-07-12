import { useAppSelector } from '~store/store';
import { TBaseComponentWithChildren } from '~types/base-component.type';

export function AppContainer({ children }: TBaseComponentWithChildren) {
  const currentModal = useAppSelector((state) => state?.modals?.current);
  const ModalComponent = currentModal?.Component;
  const ModalProps = currentModal?.props;

  return (
    <>
      {children}
      { ModalComponent && <ModalComponent {...ModalProps} /> }
    </>
  );
}
