describe('ez-case', function() {
  var ezCaseFilter;

  beforeEach(module('ez.case'));

  beforeEach(inject(function(_ezCaseFilter_) {
    ezCaseFilter = _ezCaseFilter_;
  }));

  it('Should convert to lcfirst', function() {
    assert.equal(ezCaseFilter('lcfirst', 'SomeVarDude'), 'someVarDude', 'from pascal');
  });

  it('Should convert to ucfirst', function() {
    assert.equal(ezCaseFilter('ucfirst', 'someVarDude'), 'SomeVarDude', 'from camel');
  });

  it('Should convert to lower case', function() {
    assert.equal(ezCaseFilter('lower', 'SomeVarDude'), 'somevardude', 'from pascal');
  });

  it('Should convert to upper', function() {
    assert.equal(ezCaseFilter('upper', 'someVarDude'), 'SOMEVARDUDE', 'from camel');
  });

  it('Should convert to camel case', function() {
    assert.equal(ezCaseFilter('camel', 'some-var-dude'), 'someVarDude', 'from dashed');
    assert.equal(ezCaseFilter('camel', 'some_var_dude'), 'someVarDude', 'from underscore');
    assert.equal(ezCaseFilter('camel', 'Some Var Dude'), 'someVarDude', 'from title');
  });

  it('Should convert to pascal case', function() {
    assert.equal(ezCaseFilter('pascal', 'some-var-dude'), 'SomeVarDude', 'from dashed');
    assert.equal(ezCaseFilter('pascal', 'some_var_dude'), 'SomeVarDude', 'from underscore');
    assert.equal(ezCaseFilter('pascal', 'Some Var Dude'), 'SomeVarDude', 'from title');
  });

  it('Should convert to title case', function() {
    assert.equal(ezCaseFilter('title', 'somevardude'), 'Somevardude', 'from single word');
    assert.equal(ezCaseFilter('title', 'some-var-dude'), 'Some Var Dude', 'from dashed');
    assert.equal(ezCaseFilter('title', 'some_var_dude'), 'Some Var Dude', 'from underscore');
    assert.equal(ezCaseFilter('title', 'someVarDude'), 'Some Var Dude', 'from camel');
    assert.equal(ezCaseFilter('title', 'SomeVarDude'), 'Some Var Dude', 'from pascal');
    assert.equal(ezCaseFilter('title', 'some var dude'), 'Some Var Dude', 'from spaces');
  });

  it('Should convert to underscore', function() {
    assert.equal(ezCaseFilter('underscore', 'some-var-dude'), 'some_var_dude', 'from dashed');
    assert.equal(ezCaseFilter('underscore', 'someVarDude'), 'some_var_dude', 'from camel');
    assert.equal(ezCaseFilter('underscore', 'SomeVarDude'), 'some_var_dude', 'from pascal');
  });

  it('Should convert to dashed', function() {
    assert.equal(ezCaseFilter('dash', 'some_var_dude'), 'some-var-dude', 'from underscore');
    assert.equal(ezCaseFilter('dash', 'someVarDude'), 'some-var-dude', 'from camel');
    assert.equal(ezCaseFilter('dash', 'SomeVarDude'), 'some-var-dude', 'from pascal');
  });

  it('Should convert to word', function() {
    assert.equal(ezCaseFilter('word', 'some_var_dude'), 'some var dude', 'from underscore');
    assert.equal(ezCaseFilter('word', 'some-var-dude'), 'some var dude', 'from dash');
    assert.equal(ezCaseFilter('word', 'someVarDude'), 'some var dude', 'from camel');
    assert.equal(ezCaseFilter('word', 'SomeVarDude'), 'some var dude', 'from pascal');
  });

});
