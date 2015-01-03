Tinytest.add('Namespace Function', function (test) {
  Namespace('testing', function() {
    this.test = 'passed';
  });
  test.equal(Namespace('testing').test, 'passed');
});

Tinytest.add('Namespace Object', function (test) {
  Namespace('testing', {
    test: 'passed'
  });
  test.equal(Namespace('testing').test, 'passed');
});
