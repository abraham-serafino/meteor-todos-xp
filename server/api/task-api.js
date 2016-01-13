Router.route('/api/task', { where: 'server' })

    .get(function getTasks() {
        this.response.statusCode = 200;
        this.response.end(JSON.stringify(Tasks.find().fetch()));
    })

    .post(function createTask() {
"debugger";
        let task = this.request.body;

        Meteor.call('Tasks.add', task);

        task = Tasks.findOne(task);
        this.response.statusCode = 200;
        this.response.end(JSON.stringify(task));
    });

Router.route('/api/task/:id', { where: 'server' })

    .get(function getTask() {

        let id 		= this.params.id,
            task 	= Tasks.findOne(id);

        if (!task) {
            this.response.statusCode = 404;
            this.response.end();
        }

        this.response.statusCode = 200;
        this.response.end(JSON.stringify(task));
    })

    .delete(function removeTask() {

        let id = this.params.id,
            task 	= Tasks.findOne(id);

        if (!task) {
            this.response.statusCode = 404;
            this.response.end();
        }

        Meteor.call('Tasks.remove', id);
        this.response.statusCode = 204;
        this.response.end();
    })

    .put(function setChecked() {

        let id 		= this.params.id,
            checked = this.request.query.checked,
            task 	= Tasks.findOne(id);

        if (!task) {
            this.response.statusCode = 404;
            this.response.end();
        }

        Meteor.call('Tasks.setChecked', id, checked);

        task = Tasks.findOne(task);
        this.response.statusCode = 200;
        this.response.end(JSON.stringify(task));
    });