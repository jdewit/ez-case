ez-case
==========

A flexible Angular case conversion filter.

Convert from any case to your desired case.

Pull requests welcomed.

##Usage

Add ez.case to your apps list of modules.
Use like a standard angular filter

```js 
angular.module('myApp', ['ez.case'])

.controller('MyCtrl', function(EzCaseFilter) {
  console.log(EzCaseFilter('title', 'some_var'));  // prints "Some Var"
  console.log(EzCaseFilter('camel', 'some-var'));  // prints "someVar"
  console.log(EzCaseFilter('dash', 'someVar'));  // prints "some-var"
  console.log(EzCaseFilter('word', 'Some_Var'));  // prints "some var"
});

```

Add ez-alert markup to your html and include the dist files

```html 
  <body ng-app="myApp">

    {{ 'some_var' | ezCase('title') }}

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular.js"></script>
    <script src="bower_componentns/ez-case/dist/ez-case.min.js"></script>
  </body>
```


