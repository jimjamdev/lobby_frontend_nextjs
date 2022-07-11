import { TDefaultTemplate } from './DefaultTemplate.types';
import { DefaultTemplateContainer } from './DefaultTemplateContainer';
import { DefaultTemplateContent } from './DefaultTemplateContent';
import { DefaultTemplateFooter } from './DefaultTemplateFooter';
import { DefaultTemplateHeader } from './DefaultTemplateHeader';
import { DefaultTemplateMobileNav } from './DefaultTemplateMobileMenu';
import { DefaultTemplateNav } from './DefaultTemplateNav';

/**
 * We create our grid template just with normal styled-components.
 * We don't need to use styled-system to create our grid template, and
 * we have no props to evaluate. Faster.
 */

export function DefaultTemplate({
  children, header, topNav, footer, mobileNav,
}: TDefaultTemplate) {
  return (
    <DefaultTemplateContainer>
      {header && <DefaultTemplateHeader>{header}</DefaultTemplateHeader>}
      {topNav && <DefaultTemplateNav>{topNav}</DefaultTemplateNav>}
      <DefaultTemplateContent>{children}</DefaultTemplateContent>
      {footer && <DefaultTemplateFooter>{footer}</DefaultTemplateFooter>}
      {mobileNav && <DefaultTemplateMobileNav>{mobileNav}</DefaultTemplateMobileNav>}
    </DefaultTemplateContainer>
  );
}
