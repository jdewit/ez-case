ez-case <img src="https://travis-ci.org/jdewit/ez-case.svg" data-bindattr-255="255" title="Build Status Images">
=======

Easy case conversion.

Pull requests welcomed.

##Usage

Add ez.case to your apps list of modules.

### Filter
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

Add ez-case markup to your html and include the dist files

```html 
  <body ng-app="myApp">

    {{ 'some_var' | ezCase('title') }}

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular.js"></script>
    <script src="bower_componentns/ez-case/dist/ez-case.min.js"></script>
  </body>
```


###Directive

Apply case conversion to input fields using a directive

```html
  <input ng-model="myVal" ez-case="title"/>
```
