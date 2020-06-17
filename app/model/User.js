Ext.define('app.model.User', {
    extend: 'app.model.Base',

    fields: [
        { name: 'UserName', defaultValue: '' },
        { name: 'Roles', defaultValue: '编辑' },
        { name: 'Created', type: 'date', dateFormat: I18N.DefaultDatetimeFormat },
        { name: 'LastLogin', type: 'date', dateFormat: I18N.DefaultDatetimeFormat },
        { name: 'Lockout', type: 'bool', defaultValue: false },
        { name: 'IsApprove', type: 'bool', defaultValue: true }
    ]
        
})