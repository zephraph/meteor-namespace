Tinytest.add('Namespace Function', function (test) {
  Namespace('testing', function() {
    this.test1 = 'passed';
  });
  test.equal(testing.test1, 'passed');
});

Tinytest.add('Namespace Object', function (test) {
  Namespace('testing', {
    test2: 'passed'
  });
  test.equal(testing.test2, 'passed');
});

Tinytest.add('Multiple access test', function(test) {
  test.equal(Namespace('testing').test1, 'passed');
  test.equal(Namespace('testing').test2, 'passed');
});
