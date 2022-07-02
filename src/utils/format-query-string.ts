import qs from 'qs';

export const formatQueryString = (params: unknown) => qs.stringify(params);
