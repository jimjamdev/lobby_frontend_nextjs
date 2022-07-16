import { findValuesByKeys } from '~utils/findValuesByKeys';

export function handleError(errorObj: any) {
  const errors = findValuesByKeys(errorObj, ['status', 'message', 'error']);
  const [status = ''] = errors;
  return status;
}
