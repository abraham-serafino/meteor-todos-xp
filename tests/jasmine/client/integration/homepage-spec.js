'use strict';

describe('home page', () => {

    it('should display a list of tasks', done => {
        Meteor.setTimeout(() => done(), 600);
        expect($('div.card').length).toBeGreaterThan(0);
    });
});