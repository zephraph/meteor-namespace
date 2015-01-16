// Meteor only functions

Namespace.server = function() {
  if(Meteor.isServer)
    Namespace.apply(this, arguments);
}

Namespace.client = function() {
  if(Meteor.isClient) 
    Namespace.apply(this, arguments);
}
