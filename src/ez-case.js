angular.module('ez.case', []).filter('ezCase', [function () {
  return function(method, str) {
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
        return methods.ucfirst(str.replace(/(-(.)|_(.))/g, function(match, group1) {
          return group1.replace(/(-|_)/, '').toUpperCase();
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
      }
    };

    return methods[method](str);
  };

}]);
