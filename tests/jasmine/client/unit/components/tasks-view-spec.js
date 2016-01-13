'use strict';

describe('Tasks viewmodel', () => {

    it('should contain three tasks', () => {

        let component	= new TasksView(),
            tasks  = component.tasks;

        expect(tasks[0].description).toEqual('This is task 1');
        expect(tasks[1].description).toEqual('This is task 2');
        expect(tasks[2].description).toEqual('This is task 3');
    });
});