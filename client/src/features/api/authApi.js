import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../authSlice";

const USER_API = "https://lms-learning-management-system-6h9z.onrender.com/api/v1/user/"

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:USER_API,
        credentials:'include',
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) => ({
                url:"register",
                method:"POST",
                body:inputData
            })
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
              url: "login",
              method: "POST",
              body: inputData,
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
              try {
                const result = await queryFulfilled;
          
                // ✅ Dispatch login to Redux state
                dispatch(userLoggedIn({ user: result.data.user }));
          
              } catch (error) {
                console.log("Login error:", error);
              }
            }
          }),
          logoutUser: builder.mutation({
            query: () => ({
              url: "logout",
              method: "GET",
            }),
            async onQueryStarted(_, {queryFulfilled, dispatch }) {
                try {
                    // ✅ Dispatch login to Redux state
                    dispatch(userLoggedOut());
                
                } catch (error) {
                  console.log("Login error:", error);
                }
              }
        }),
        loadUser: builder.query({
            query: () => ({
                url:"profile",
                method:"GET"
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                  const result = await queryFulfilled;
            
                  // ✅ Dispatch login to Redux state
                  dispatch(userLoggedIn({ user: result.data.user }));
            
                } catch (error) {
                  console.log("Login error:", error);
                }
              }
    }),

        updateUser:builder.mutation({
            query:(formData)=>({
                url:"profile/update",
                method:"PUT",
                body:formData,
                credentials:"include"
            })
        })
})
})
export const {
    useRegisterUserMutation,
    useLogoutUserMutation,
    useLoginUserMutation,
    useLoadUserQuery,
    useUpdateUserMutation
   
} = authApi;