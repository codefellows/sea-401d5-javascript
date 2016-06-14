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
