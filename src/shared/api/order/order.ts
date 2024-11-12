import { title } from 'process';
import { backBaseApi } from 'shared/api';

const ORDER_URL = '/v1/products/';
const ORDER_REG = '/v1/auth/registration/fast_register/';
const ORDER_CREATE = '/v1/create_payload/';
const CHECK_PROMOCODE = '/v1/get_promo_code/'

const orderApi = backBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<{ data: any }, void>({
      query: () => ({
        method: 'GET',
        url: ORDER_URL,
        params:{
          type:'SUBSCRIPTION',
          subscription_type: 'PS_PLUS',
        }
      }),
    }),

    getPromocode: builder.query<{ data: any }, {title: string, type: string, id: number}>({
      query: ({title, type, id}) => ({
        method: 'GET',
        url: CHECK_PROMOCODE,
        params: {
          title: title,
          type: type,
          id: id
        },
      }),
    }),

    getStatusOrder: builder.query<{ data: any }, { id: number }>({
      query: ({id}) => ({
        method: 'GET',
        url: `${ORDER_URL}/${id}`,
      }),
    }),
    createUser: builder.mutation<any, {username: string, phone_number: string, email: string}> ({
      query: (data) => ({
        method: 'POST',
        url: ORDER_REG,
        data
      }),
    })    ,
    createOrder: builder.mutation<any, any> ({
      query: (data) => ({
        method: 'POST',
        url: ORDER_CREATE,
        data
      }),
    })
  }),
});

export const { useGetOrdersQuery,useGetStatusOrderQuery, useCreateUserMutation,useCreateOrderMutation, useGetPromocodeQuery } = orderApi;
