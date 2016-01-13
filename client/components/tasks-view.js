TasksView = (() => {
    'use strict';

    class _TasksView {

        constructor() {
            this.tasks = [
                { description: 'This is task 1' },
                { description: 'This is task 2' },
                { description: 'This is task 3' }
            ];
        }
    }

    return _TasksView;
})();

Template.tasks.viewmodel(new TasksView());