import { findValuesByKeys } from '~utils/findKeys';

export function handleError(errorObj: any) {
  const errors = findValuesByKeys(errorObj, ['status', 'message', 'error']);
  const [status = ''] = errors;
  return status;
}
