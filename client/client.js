
Meteor.subscribe("userData");

/** Templates **/


Template.messages.rendered = function () {
  console.log("assssss")
  // var objDiv = document.getElementById("chat-box");
  // objDiv.scrollTop = objDiv.scrollHeight;
}

Template.messages.messages = function(){
  return Messages.find({}, { sort: {time: 1} });
}

Template.input.events = {
  'keydown input#message-box' : function (event) {
    if (event.which ==13) {//the enter key event
      if (Meteor.user()){
        var name = Meteor.user().profile.name
      } else {
        var name = 'Anonymous'
      }
      var message = document.getElementById('message-box');

      if (message.value != '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: new Date(),
          hours: (new Date()).getHours(),
          minutes: (new Date()).getMinutes(),
          seconds: (new Date()).getSeconds(),

        });

      document.getElementById('message-box').value = '';

      var objDiv = document.getElementById("chat-box");
      objDiv.scrollTop = objDiv.scrollHeight;


      }
    }
  }
}
