import { useAppSelector } from '~store/store';
import { TBaseComponentWithChildren } from '~types/base-component.type';

export function LayoutContainer({ children }: TBaseComponentWithChildren) {
  const { portals } = useAppSelector((state) => state?.portals);
  function renderPortals() {
    return portals && portals?.length >= 0 && portals?.map((portal) => {
      const PortalComponent = portal?.component;
      const PortalProps = portal?.props;
      return <PortalComponent key={portal?.key} {...PortalProps} />;
    });
  }

  return (
    <>
      {children}
      { portals && renderPortals() }
    </>
  );
}
