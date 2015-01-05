meteor-namespace
================

A simple javascript namespacing utility that allows the easy creation of **global** namespaces. 
This package functions by creating the namespace and attaching it to ```GLOBAL``` if it's on the server
or ```window``` if it's on the client. 

### Usage

Calling the Namespace function creates a global namespace and returns the namespace to be edited
```js
Namespace('my.app.namespace').test = 'hello world';
console.log(my.app.namespace.test); // Prints out 'hello world'
```

When passing in a function 'this' is bound to the specified namespace
```js
Namespace('my.app.namespace', function() {
  this.test2 = 'hello again!';
});
console.log(my.app.namespace.test2); // Prints out 'hello again!'
```

If passing in a object literal the key/value pairs will be added to the namespace
```js
Namespace('my.app.namespace', {
  test3: 'goodbye!'
});
console.log(my.app.namespace.test3); // Prints out 'goodbye!'
```

A namespace can be limited to the client or server by specifying the location as the second argument
```js
Namespace('my.app.namespace', 'server', function() {
  this.serverVal = my.app.do.secret.thing();
});
```
