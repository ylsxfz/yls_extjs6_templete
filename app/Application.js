/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('app.Application', {
    extend: 'Ext.app.Application',
    
    name: 'app',

    requires:[
    	'app.locale.*',
    	'app.util.*',
    	'app.ux.*'
    ],
    
    stores: [
        // TODO: add global / shared stores here
        'NavigationTree'
    ],
    
    launch: function () {
    	 //修改Ext.util.Format.defaultValue方法
    	 Ext.util.Format.defaultValue = function (value, defaultValue) {
             return Ext.isEmpty(value) ? defaultValue : value;
         }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
