Ext.define('app.view.authentication.LockScreen', {
    extend: 'app.view.authentication.LockingWindow',
    xtype: 'lockscreen',

    requires: [
        'app.view.authentication.Dialog',
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.form.field.Text',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox'
    ],

    //title: I18N.LockScreenTitle,

    defaultFocus : 'authdialog',  // Focus the Auth Form to force field focus as well

    items: [
        {
            xtype: 'authdialog',
            reference: 'authDialog',
            defaultButton : 'loginButton',
            autoComplete: false,
            width: 455,
            cls: 'auth-dialog-login',
            defaultFocus : 'textfield[inputType=password]',
            layout: {
                type  : 'vbox',
                align : 'stretch'
            },

            items: [
                {
                    xtype: 'container',
                    cls: 'auth-profile-wrap',
                    height : 120,
                    layout: {
                        type: 'hbox',
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: 'image',
                            height: 80,
                            margin: 20,
                            width: 80,
                            alt: 'lockscreen-image',
                            cls: 'lockscreen-profile-img auth-profile-img',
                            src: 'resources/images/user-profile/user.png'
                        },
                        {
                            xtype: 'box',
                            html: '<div class=\'user-name-text\'> Goff Smith </div><div class=\'user-post-text\'> Project manager </div>'
                        }
                    ]
                },

                {
                    xtype: 'container',
                    padding: '0 20',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },

                    defaults: {
                        margin: '10 0'
                    },

                    items: [
                        {
                            xtype: 'textfield',
                            labelAlign: 'top',
                            cls: 'lock-screen-password-textbox',
                            labelSeparator: '',
                            fieldLabel: I18N.LockScreenTip,
                            emptyText: I18N.Password,
                            inputType: 'password',
                            allowBlank: false,
                            triggers: {
                                glyphed: {
                                    cls: 'trigger-glyph-noop password-trigger'
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            reference: 'loginButton',
                            scale: 'large',
                            ui: 'soft-blue',
                            iconAlign: 'right',
                            iconCls: 'x-fa fa-angle-right',
                            text: I18N.LoginTitle,
                            formBind: true,
                            listeners: {
                                click: 'onLoginButton'
                            }
                        },
                        {
                            xtype: 'component',
                            html: '<div style="text-align:right">' +
                                '<a href="#login" class="link-forgot-password">'+
									I18N.RedirectToLogin +
                                    '</a>' +
                                '</div>'
                        }
                    ]
                }
            ]
        }
    ]
});
