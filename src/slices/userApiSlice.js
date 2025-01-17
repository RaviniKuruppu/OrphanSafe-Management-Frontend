import { apiSlice } from "./apiSlice";
import {
  LOGIN_URL,
  LOGOUT_URL,
  PATCH_FCM_TOKEN_URL,
  ORPHANAGE_REGISTER_URL,
  GET_ROLES_LIST_URL,
} from "../config";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: LOGIN_URL,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: LOGOUT_URL,
        method: "POST",
      }),
    }),
    registerOrphanage: builder.mutation({
      query: (data) => ({
        url: ORPHANAGE_REGISTER_URL,
        method: "POST",
        body: data,
      }),
    }),
    patchToken: builder.mutation({
      query: (data) => ({
        url: PATCH_FCM_TOKEN_URL,
        method: "PATCH",
        body: data,
      }),
    }),
    getRolesList: builder.query({
      query: (data) => ({
        url: GET_ROLES_LIST_URL,
        method: "GET",
      }),
    }),
    deleteRole: builder.mutation({
      query: (data) => ({
        url: GET_ROLES_LIST_URL,
        method: "DELETE",
        body: data
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  usePatchTokenMutation,
  useRegisterOrphanageMutation,
  useGetRolesListQuery,
  useDeleteRoleMutation
} = userApiSlice;
