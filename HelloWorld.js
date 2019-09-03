var HelloWorld = (function () {
    function HelloWorld(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.firstname + ' ' + this.lastname + '!');
    };
    return HelloWorld;
})();
var myHelloClassInstance = new HelloWorld('Victor', 'Lo');
myHelloClassInstance.sayHello();
