module.exports = function(app) {
  app.factory('services', [ function() {
    var customers = [{
      customerNumber: 1,
      firstname:'George',
      lastname:'Washington',
      zipcode:'98101'
    }];

    var obj = {};
    obj.getCustomers = function() {
      return customers;

    };

    obj.getCustomer = function(customerID) {
      var arr;
      arr = customers.filter(function(item) {
        return item.customerNumber == customerID;
      });
      return arr[0];
    };

    obj.insertCustomer = function(customer) {
      var id = 0;
      customers.map(function(item) {
        if (item.customerNumber > id) id = item.customerNumber;
      });
      customer.customerNumber = ++id; //get new id
      customers.push(customer);
      return customer;
    };

    obj.updateCustomer = function(id, customer) {
      var existingCustomer = obj.getCustomer(id);
      for (var key in customer) {
        existingCustomer[key] = customer[key];
      }
      return customer;
    };

    obj.deleteCustomer = function(id) {
      var index = customers.indexOf(obj.getCustomer(id));
      customers.splice(index, 1);
    };

    return obj;
  }]);
};
