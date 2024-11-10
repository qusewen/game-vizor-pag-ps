import { backBaseApi } from 'shared/api'
import { ETagTypes } from 'shared/interfaces'

const ORDER_URL = ''

const orderApi = backBaseApi.injectEndpoints({
  endpoints: (builder) => {
    builder.query<{ data: any[] }, void>({
      query: () => ({
        method: 'POST',
        url: ORDER_URL,
      }),
      providesTags: (_, __) => [{ type: ETagTypes.ORDER }],
    })
  },
})
