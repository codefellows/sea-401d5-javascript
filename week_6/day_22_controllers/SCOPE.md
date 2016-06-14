#### Index.html

```html
<body ng-app="ContactsApp">
  <div id="ctrl-exmpl" ng-controller="ContactsController">
    <label>Name:
      <input type="text" ng-model="name" />
    </label>
    <button ng-click="greet()">greet</button>
    <br/> Contact:
    <ul>
      <li ng-repeat="contact in contacts">
        <select ng-model="contact.type" id="select_{{$index}}">
          <option>phone</option>
          <option>email</option>
        </select>
        <input type="text" ng-model="contact.value" aria-labelledby="select_{{$index}}" />
        <button ng-click="clearContact(contact)">clear</button>
        <button ng-click="removeContact(contact)">X</button>
      </li>
      <li>[
        <button ng-click="addContact()">add</button> ]</li>
    </ul>
  </div>
</body>
```



#### Controller
``` javascript
module.exports = function(app) {
  app.controller('ContactsController', ['$scope', ContactsController]);
};

function ContactsController($scope) {
  $scope.name = 'John Smith';
  $scope.contacts = [{
    type: 'phone',
    value: '408 555 1212'
  }, {
    type: 'email',
    value: 'john.smith@example.org'
  }];

  $scope.greet = function() {
    alert($scope.name);
  };

  $scope.addContact = function() {
    $scope.contacts.push({
      type: 'email',
      value: 'yourname@example.org'
    });
  };

  $scope.removeContact = function(contactToRemove) {
    var index = $scope.contacts.indexOf(contactToRemove);
    $scope.contacts.splice(index, 1);
  };

  $scope.clearContact = function(contact) {
    contact.type = 'phone';
    contact.value = '';
  };
}
```
https://docs.angularjs.org/api/ng/directive/ngController
