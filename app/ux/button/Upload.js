/**
 * @class Ext.ux.upload.Button
 * @extends Ext.button.Button
 * 
 * @author Harald Hanek (c) 2011-2012
 * @license http://harrydeluxe.mit-license.org
 */
Ext.define('app.ux.button.Upload', {
    extend: 'Ext.button.Button',
    alias: 'widget.uploadbutton',
    requires: ['app.ux.button.UploadBasic'],
    disabled: true,

    listeners: {
        boxready: function () {
            var me = this;
            Ext.applyIf(me.config.uploader, {
                browse_button: me.config.id || me.getId()
            });

            me.uploader = me.createUploader();
            me.uploader.initialize();

            me.relayEvents(me.uploader, ['beforestart',
                'uploadready',
                'uploadstarted',
                'uploadcomplete',
                'uploaderror',
                'filesadded',
                'beforeupload',
                'fileuploaded',
                'updateprogress',
                'uploadprogress',
                'storeempty'
            ]);
        }
    },

    /**
     * @private
     */
    createUploader: function () {
        return Ext.create('app.ux.button.UploadBasic', this, Ext.applyIf({
            listeners: {}
        }, this.initialConfig));
    }
});