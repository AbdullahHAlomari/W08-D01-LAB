import { TypeOf, z } from "zod";

export const RegisterTypes = z.object({
    body: z.object({
        name: z.string({
            required_error: "ID is required",
            invalid_type_error: "Invalid type error"
        }),
        age: z.number({
            required_error: "Age is required",
            invalid_type_error: "Invalid type error"
        }).min(8, "Your age should be older than 8 ").max(80, "Maximum Age is 80"),

        major: z.string({
            required_error: "ID is required",
            invalid_type_error: "Invalid type error"
        }),
    })
})

export type RegisterTypesSchema = TypeOf<typeof RegisterTypes>["body"]