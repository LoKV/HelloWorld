class HelloWorld {

    constructor(public firstname: string,  public lastname: string) {
        
    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstname + ' ' + this.lastname + '!');
    }

}

const myHelloClassInstance = new HelloWorld('Victor', 'Lo');
myHelloClassInstance.sayHello();