if(typeof Meteor === 'undefined')
  modules.export = namespace;
else
  Namespace = namespace;

function namespace(scope, definition) {
  var item, root;
  root = typeof GLOBAL !== "undefined" ? GLOBAL : window;

  // Traverse scope and build an object tree as needed
  if( typeof scope === 'string' ) {
    scope = scope.split('.');
    for (var i = 0; i < scope.length; ++i) {
      item = scope[i];
      if (root[item] == null) {
        root[item] = {};
      }
      root = root[item];
    }
  } 
  
  else
    root = scope
      
  switch (typeof definition) {
    case 'function':
      definition.apply(root);
      break;
    case 'object':
      _.extend(root, definition);
  }
  return root;
};
