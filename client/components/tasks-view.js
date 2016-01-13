TasksView = (() => {
    'use strict';

    class _TasksView {

        tasks() {

            const sort = { sort: { description: 1 }};

            return Tasks.find({}, sort).fetch();
        }
    }

    return _TasksView;
})();

Template.tasks.viewmodel(new TasksView());