import { JsonController, Get, Post, Body, Param } from "routing-controllers";

import { PersonInterface } from "./Person.types";

const storedData: PersonInterface[] = [];

@JsonController("/person")
export default class Person {
  @Get()
  async getAll() {
    return storedData;
  }

  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<PersonInterface | {}> {
    const person = storedData.find((item) => {
      return item.id === id;
    });
      
      return person || {};
    }
    
    @Post()
    async setPerson(@Body() body: PersonInterface) {
        storedData.push(body);
    }
}