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

Tinytest.add('Client only test', function(test) {
  Namespace.client('clientOnly', {
    test: true
  });

  if (Meteor.isClient)
    test.equal(clientOnly.test, true);
  else
    test.isUndefined(GLOBAL['clientOnly']);
});


Tinytest.add('Server only test', function(test) {
  Namespace.server('serverOnly', {
    test: true
  });

  if (Meteor.isServer)
    test.equal(serverOnly.test, true);
  else
    test.isUndefined(window['serverOnly']);
});
