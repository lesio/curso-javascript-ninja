(function() {
    var myObject = {
        myProperty: 1,
        init: function init() {
            return this;
        }
    };
    console.log('myObject', myObject.init(), myObject.init() === myObject);

    function myFunction() {
        return this;
    };
    console.log('myFunction', myFunction(), myFunction === window);

    function MyConstructor() {
        this.prop1 = "prop1";
        this.prop2 = "prop2";
        return 'qualquer coisa';

    }
    var constructor = new MyConstructor();
    console.log('newObject', constructor);
    console.log(prop1)

})();
