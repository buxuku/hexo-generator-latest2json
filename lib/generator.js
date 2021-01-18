'use strict';
const {pick} = require('lodash');

module.exports = function (locals) {
    const {
        number = 10,
        order_by = '-date',
        path = 'latest.json',
        fields = ['title', 'date', 'path']
    } = this.config.latest2json || {};
    const latest = locals.posts.sort(order_by).data.slice(0, number).map(item => pick(item, fields));
    return {
        path,
        data: latest
    }
}