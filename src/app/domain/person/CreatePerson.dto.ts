import { IsEmail, Length, IsInt, Min, Max, isInt } from "class-validator";

import type { PersonInterface } from "./Person.types";

export class CreatePerson implements Omit<PersonInterface, "id">{
    @Length(2, 20)
    name: string;

    @IsEmail()
    email: string;

    @IsInt()
    @Min(18)
    @Max(99)
    age: number;
}