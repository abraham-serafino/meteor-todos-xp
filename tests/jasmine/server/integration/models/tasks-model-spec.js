'use strict';

describe('Tasks Model', () => {

    let timestamp = '' + moment();

    beforeEach(() => {

        Meteor.call('Tasks.add', { description: 'This is a task',
            timestamp });
    });

    it('should find and create tasks', () => {

        var task = Tasks.findOne({ timestamp });

        expect(task).toBeDefined();
        expect(task).not.toBeNull();

        expect(task.description).toEqual('This is a task');
    });
});