#### index.html
``` html
<body ng-app="ContactsApp">
  <div id="ctrl-as-exmpl" ng-controller="ContactsController as settings">
    <label>Name:
      <input type="text" ng-model="settings.name" />
    </label>
    <button ng-click="settings.greet()">greet</button>
    <br/> Contact:
    <ul>
      <li ng-repeat="contact in settings.contacts">
        <select ng-model="contact.type" aria-label="Contact method" id="select_{{$index}}">
          <option>phone</option>
          <option>email</option>
        </select>
        <input type="text" ng-model="contact.value" aria-labelledby="select_{{$index}}" />
        <button ng-click="settings.clearContact(contact)">clear</button>
        <button ng-click="settings.removeContact(contact)" aria-label="Remove">X</button>
      </li>
      <li>
        <button ng-click="settings.addContact()">add</button>
      </li>
    </ul>
  </div>
</body>
```
#### Controller
``` javascript
module.exports = function(app) {
  app.controller('ContactsController', ContactsController);
};
function ContactsController() {
  this.name = 'John Smith';
  this.contacts = [
    {type: 'phone', value: '408 555 1212'},
    {type: 'email', value: 'john.smith@example.org'} ];
}
ContactsController.prototype.greet = function() {
  alert(this.name);
};
ContactsController.prototype.addContact = function() {
  this.contacts.push({type: 'email', value: 'yourname@example.org'});
};
ContactsController.prototype.removeContact = function(contactToRemove) {
  var index = this.contacts.indexOf(contactToRemove);
  this.contacts.splice(index, 1);
};
ContactsController.prototype.clearContact = function(contact) {
  contact.type = 'phone';
  contact.value = '';
};
```
https://docs.angularjs.org/api/ng/directive/ngController
