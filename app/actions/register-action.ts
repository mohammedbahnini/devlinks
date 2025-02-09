'use server'

import { auth } from "@/auth";
import { authClient } from "@/lib/aut-client";
import { RegisterFormDataType } from "@/lib/schemas";
import { APIError } from "better-auth/api";
import axios from 'axios';



type registerResultType = {
    success: boolean
    message?: string
    error?: string
}


const errorReturn: registerResultType = {
    success: false,
    error: 'An error has occured '
}
export const register = async (values: RegisterFormDataType): Promise<registerResultType | null> => {

    try {

        console.log(values);
        const { email, password } = values;

        const response = await auth.api.signUpEmail({
            body: {
                email,
                password
            }
        });

        console.log(response);

        // add some checks ( zod safeParse , user already exists, ... ), but now lets just keep it simple

        // var data = JSON.stringify({
        //     //"name": "jhon doe",
        //     email,
        //     password
        // });

        // var config = {
        //     method: 'post',
        //     url: 'http://localhost:3000/api/auth/sign-up/email',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     data: data
        // };


        // axios.post('http://localhost:3000/api/auth/sign-up/email', data)
        //     .then(({ data }) => console.log(data))
        //     .catch(e => console.log(e.response.data))



        /*         axios(config)
                    .then(function (response) {
                        //console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                        console.log(error.response.data.message);
                    });
        
         */



        /*        const response = await auth.api.signUpEmail({
                   body: {
                       email,
                       name,
                       password
                   }
               })
               console.log(response);
        */

        // if (data.user) {
        //     return {
        //         success: true,
        //         message: 'You have creatd an account'
        //     }
        // } else
        //     return errorReturn

        return {
            success: false,
            error: 'error',
            message: 'error'
        }

    } catch (error) {
        console.log(error.stack)
        return errorReturn
    }


}