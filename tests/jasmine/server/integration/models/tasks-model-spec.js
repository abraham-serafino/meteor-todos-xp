'use strict';

describe('Tasks Model', () => {

    let timestamp = '' + moment();

    beforeEach(() => {

        Meteor.call('Tasks.add', { description: 'This is a task',
            timestamp });
    });

    afterEach(() => {

        var task = Tasks.findOne({ timestamp });

        Meteor.call('Tasks.remove', task._id);

        task = Tasks.findOne({ timestamp });
        expect(task).toBeUndefined();
    });

    it('should find and create tasks', () => {

        var task = Tasks.findOne({ timestamp });

        expect(task).toBeDefined();
        expect(task).not.toBeNull();

        expect(task.description).toEqual('This is a task');
    });

    it('should set the checked property on a given task', () => {

        var task = Tasks.findOne({ timestamp });

        Meteor.call('Tasks.setChecked', task._id, true);
        expect(Tasks.findOne(task._id).checked).toBe(true);
    });
});