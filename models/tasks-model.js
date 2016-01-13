Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
    Meteor.publish('tasks', () => Tasks.find());

    Meteor.startup(() => {
        Tasks.remove({});

        Tasks.insert({ description: 'This is task 1',
            created: moment().format() });
        Tasks.insert({ description: 'This is task 2',
            created: moment().format() });
        Tasks.insert({ description: 'This is task 3',
            created: moment().format() });
    });
}

if (Meteor.isClient) {
    Meteor.subscribe('tasks');
}

Meteor.methods({
    'Tasks.add': 		task => Tasks.insert(_.extend(task,
        { created: moment().format() })),

    'Tasks.remove': 	_id => Tasks.remove({ _id }),

    'Tasks.setChecked': (_id, checked) =>
        Tasks.update( _id, { $set: { checked } })
});