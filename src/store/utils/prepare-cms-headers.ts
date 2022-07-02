import { config } from 'config';

export const prepareCmsHeaders = (headers: any) => {
  headers.set('Content-Type', 'application/json');
  headers.set('authorization', `Bearer ${config.cmsApiToken}`);
  return headers;
};
