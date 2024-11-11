import { createApi } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'shared/api/interceptor';
import { ETagTypes } from 'shared/interfaces';

import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

interface AxiosErrorResponse {
  status: boolean;
  message: string;
  errors: string[];
}

const AxiosBaseQuery = (): BaseQueryFn<AxiosRequestConfig, AxiosResponse, AxiosError<Partial<AxiosErrorResponse>>> => async (config) => {
  try {
    const res = await baseUrl(config);

    return { data: typeof res === 'object' ? res.data : res };
  } catch (error) {
    const typeError = error as AxiosError<Partial<AxiosErrorResponse>>;
    console.log('error in base url', error);
    console.log('error in base url, typeError', typeError);
    return {
      error: typeError,
    };
  }
};

export const backBaseApi = createApi({
  reducerPath: 'backApi',
  baseQuery: AxiosBaseQuery(),
  tagTypes: Object.values(ETagTypes),
  endpoints: () => ({}),
});
