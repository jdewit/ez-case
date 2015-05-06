angular.module('ez.case', []).filter('ezCase', [function () {
  return function(str, method) {
    if (!str) {
      return str;
    }

    var methods = {
      camel: function(str) {
        return str.toLowerCase().replace(/(-(.)|_(.)|\s(.))/g, function(match, group1) {
          return group1.replace(/(-|_|\s)/, '').toUpperCase();
        });
      },
      pascal: function(str) {
        return methods.ucfirst(methods.camel(str));
      },
      underscore: function(str) {
        return methods.lcfirst(str).replace(/(-|\s)/g, '_').replace(/[A-Z]/g, '_$&').toLowerCase();
      },
      dash: function(str) {
        return methods.lcfirst(str).replace(/(_|\s)/g, '-').replace(/[A-Z]/g, '-$&').toLowerCase();
      },
      title: function(str) {
        return methods.ucfirst(str.replace(/(-(.)|_(.)|\s(.))/g, function(match, group1) {
          return group1.replace(/(-|_|\s)/, '').toUpperCase();
        }).replace(/([A-Z])/g, ' $&')).trim();
      },
      word: function(str) {
        return methods.title(str).toLowerCase();
      },
      ucfirst: function(str) {
        return str.charAt(0).toUpperCase() + str.substr(1);
      },
      lcfirst: function(str) {
        return str.charAt(0).toLowerCase() + str.substr(1);
      },
      lower: function(str) {
        return str.toLowerCase();
      },
      upper: function(str) {
        return str.toUpperCase();
      },
      properWithAcronyms: function(str) {
        return methods.ucfirst(str.replace(/(-(.)|_(.)|\s(.))/g, function(match, group1) {
          return group1.replace(/(-|_|\s)/, '\u001D').toUpperCase();
        }).replace(/\u001D([A-Z])/g, ' $1')).trim();
      }
    };

    if (!methods.hasOwnProperty(method)) {
      throw new Error(method + ' is not a valid conversion method');
    }

    return methods[method](str);
  };
}])

.directive('ezCase', ['ezCaseFilter', function (ezCaseFilter) {
  return {
    restrict: 'EA',
    require: 'ngModel',
    scope: {
      type: '@ezCase'
    },
    link: function(scope, element, attrs, ctrl) {
      ctrl.$parsers.push(function(val) {
        if (val) {

          val = ezCaseFilter(val, scope.type);

          element.val(val);

          return val;
        }
      });
    }
  };
}]);
