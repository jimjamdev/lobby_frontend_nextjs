import styled from 'styled-components';

export const DefaultTemplateContainer = styled.main`
  display: grid;
  grid-template-areas: "headerArea" "topNavArea" "contentArea" "footerArea" "mobileNavArea";
  grid-template-rows: auto auto 1fr auto auto;
  min-height: 100%;
`;
