import { SerializedError } from '@reduxjs/toolkit';

export type TError = SerializedError & {
  data?: {
    status?: number;
    error?: {
      message?: string;
      name?: string;
      status?: number;
    };
  };
};
