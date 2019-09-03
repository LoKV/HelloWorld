class HelloWorld {

    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstname + ' ' + this.lastname + '.');
    }

}

const myHelloClassInstance = new HelloWorld('Victor', 'Lo');
myHelloClassInstance.sayHello();