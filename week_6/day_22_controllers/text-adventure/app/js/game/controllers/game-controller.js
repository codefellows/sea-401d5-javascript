module.exports = function(app) {
  app.controller('GameController', ['$scope', function($scope) {
    $scope.model = {
      userLocation: 'start',
      userHasWeapon: false,
      command: '',
      gamelog: [],
      location: {
        'start': {
          commands: ['Enter ? for available commands at any time.'],
          prompt: 'Welcome to the Adventure. You are in a room with a monster.'
        },
        'weaponroom': {
          commands: ['take hammer', 'look for treasure', 'say <message>', 'walk through door'],
          prompt: 'You are in the weapon room. There is a large hammer in the corner.'
        },
        'monsterroomwithoutweapon': {
          commands: ['walk through door', 'say <message>'],
          prompt: 'You are in a room with a monster.'
        },
        'monsterroomwithweapon': {
          commands: ['throw hammer'],
          prompt: 'You are in a room with a monster and you have a weapon.'
        }
      }
    };
    $scope.startGame = function() {
      $scope.model.gamelog = []; //clear
      $scope.model.userLocation = 'start';
      $scope.model.userHasWeapon = false;
      $scope.model.command = '';
      $scope.model.gamelog.push({
        src: 'game',
        msg: $scope.model.location.start.prompt
      });
      $scope.model.location.start.commands.forEach(function(item) {
        $scope.model.gamelog.push({
          src: 'command',
          msg: item
        });
      });
      $scope.model.userLocation = 'monsterroomwithoutweapon';
    };
    $scope.processInput = function() {


      $scope.model.gamelog.push({
        src: 'user',
        msg: $scope.model.command
      });

      switch ($scope.model.command) {
      case '?':
        $scope.model.gamelog.push({
          src: 'game',
          msg: $scope.currentHelpMsg()
        });
        break;
      case 'walk through door':
          //set location
        var currentLocation = $scope.model.userLocation;
        if (currentLocation === 'weaponroom') {
          currentLocation = $scope.model.userLocation = $scope.model.userHasWeapon ? 'monsterroomwithweapon' : 'monsterroomwithoutweapon';
          $scope.model.gamelog.push({
            src: 'game',
            msg: $scope.model.location[currentLocation].prompt
          });
        } else {
          $scope.model.userLocation = 'weaponroom';            $scope.model.gamelog.push({
            src: 'game',
            msg: $scope.model.location.weaponroom.prompt
          });
        }


        $scope.model.gamelog.push({
          src: 'game',
          msg: $scope.currentHelpMsg()
        });
        break;

      case 'take hammer':
        $scope.model.userHasWeapon = true;
        break;

      default:

          //test for say <message>
        var sayArr = $scope.model.command.split(' ');
        if (sayArr[0] === 'say') {
          $scope.model.gamelog.push({
            src: 'game',
            msg: sayArr[1] || 'SAY SOMETHING!'
          });
        } else {
          $scope.model.gamelog.push({
            src: 'game',
            msg: 'BAD COMMAND: Enter ? to see commands'
          });
        }
      }
      $scope.model.command = ''; //clear command after processing

    };
    $scope.currentHelpMsg = function() {
      var str = '';
      switch ($scope.model.userLocation) {

      case 'weaponroom':
        $scope.model.location.weaponroom.commands.forEach(function(item, index) {
          str += index > 0 ? ' | ' : '';
          str += item;
        });
        break;

      case 'monsterroomwithoutweapon':
        $scope.model.location.monsterroomwithoutweapon.commands.forEach(function(item, index) {
          str += index > 0 ? ' | ' : '';
          str += item;
        });
        break;
      }
      return str;
    };

  }]);
};
