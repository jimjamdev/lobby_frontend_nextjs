export type TError = {
  data?: {
    status?: number;
    error?: {
      message?: string;
      name?: string;
      status?: number;
    }
  }
};
