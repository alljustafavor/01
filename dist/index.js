"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
    ;
}
const joe = new User("j@j.com", "Joe");
joe.city = "Louisville";
console.log(joe);
