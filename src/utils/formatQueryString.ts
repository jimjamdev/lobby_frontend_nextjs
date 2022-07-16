import qs from 'qs';

export function formatQueryString(params: unknown) {
  return qs.stringify(params);
}
