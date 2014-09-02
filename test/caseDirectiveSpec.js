describe('caseFilterSpec', function() {

  var el, _scope;

  beforeEach(module('ez.case'));

  beforeEach(inject(function($rootScope, $compile) {

    _scope = $rootScope.$new();

    _scope.value = '';

    el = angular.element('<input type="text" ng-model="value" ez-case="title" />');

    $compile(el)(_scope);
  }));

  it('should work', function() {
    $(el).val('test value').trigger('change');

    _scope.$apply();

    assert.equal(_scope.value, 'Test Value');
  });

});
