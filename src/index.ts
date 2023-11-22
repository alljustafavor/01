class User {
    email: string;
    name: string;
    city: string = "";
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;

    };
}

const joe = new User("j@j.com","Joe")
joe.city = "Louisville"

console.log(joe) 

