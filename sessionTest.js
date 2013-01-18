if (Meteor.isClient) {
  Handlebars.registerHelper('sessionEquals',function(first, second){
    console.log(typeof first);
    return Session.equals(first,second);
  });

  Session.set('foo','bar');
}
