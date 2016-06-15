//Require in angular so your linter doesn't complain about an
//undeclared variable
const angular = require('angular');

//Require in your index file so that angular initializes your app.
require('../app/js/index.js');

//Require in angular mocks so that angular is aware of it. This gives
//you access to the method angular.mock which is what we'll use to create
//test versions of our controllers.
require('angular-mocks');

//We require things in like this rather than assigning them to variables
//because that's how Angular is used to seeing it. Angular showed up well
//before CommonJS (require) was a widespread practice so requiring files
//in sequentially like this is kind of like putting script tags in order
//in your html.

describe('controller tests', () => {
  //declare a variable for our controller in the describe scope so we can
  //access it in all of our tests.
  let firstctrl;

  beforeEach(() => {
    //Angular mock module with the name of your app creates a test version
    //of your app.
    angular.mock.module('SecondApp');

    //Like dependencty injection in our controllers angular.mock figures
    //out what you're looking for by the name of the argument you pass in.
    //$controller is a constructor version that takes the name of the
    //controller that you want to mock and returns a mock version of that
    //controller.
    angular.mock.inject(function($controller) {

      //set the mock controller to a variable in the describe scope so
      //we can test it. $controller is a constructor function that gives
      //us back an instance of the controller name that we pass in.
      firstctrl = new $controller('FirstController');
    });
  });

  it('should have a property val', () => {
    //the mocked controller should have all the properties and methods
    //that you assigned to it in your index. We can access them just like
    //we would access the properties of any other object.

    //We're using Jasmine for our assertion library here. Remember that
    //the syntax is a little different and consult the docs if needed.
    expect(firstctrl.val).toBe('HELLO');
  });


  it('should add a message', () => {
    //same goes for methods
    firstctrl.addMessage('test message');
    expect(firstctrl.messages[0]).toBe('test message');
  });
});