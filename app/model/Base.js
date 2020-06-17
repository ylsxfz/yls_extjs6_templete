Ext.define('app.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.identifier.Negative',
        'app.locale.Locale'
    ],

    fields: [
        { name: 'Id', type: 'int' }
    ],
    idProperty: 'Id',

    identifier: 'negative',
    schema: {
        namespace: 'app.model'
    }
});
