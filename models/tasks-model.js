Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
    Meteor.publish('tasks', () => Tasks.find());

    Meteor.startup(() => Tasks.remove({}));
}

if (Meteor.isClient) {
    Meteor.subscribe('tasks');
}

Meteor.methods({
    'Tasks.add': 		task => Tasks.insert(_.extend(task,
        { created: moment().format() }))
});