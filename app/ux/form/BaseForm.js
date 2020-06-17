Ext.define("app.ux.form.BaseForm", {
    extend: 'Ext.form.Panel',
    xtype: 'baseform',

    requires: [
        'Ext.form.field.*',
        'Ext.toolbar.*',
        'Ext.button.*',
        'Ext.state.*'
    ],

    viewModel: {
        data: {
            isEdit: false
        }
    },


    waitMsg: I18N.SaveWaitMsg,
    waitTitle: I18N.Save,
    
    /**
     * 列的默认配置
     * labelWidth：标签的默认宽度
     */
    fieldDefaults: {
        labelWidth: 80,
        anchor: '0'
    },
    border: false,
    trackResetOnLoad: true,
    defaultType: 'textfield',
    bodyPadding: 10,

    saved: null,
    /**
     * 保存信息
     * @param button
     */
    onSave: function (button) {
        var me = this,
            f = me.getForm();
        if (button) me.saved = button.saved;
        if (f.isValid()) {
            f.submit({
                submitEmptyText: false,
                url: me.url,
                waitMsg: me.waitMsg,
                waitTitle: me.waitTitle,
                success: me.onSubmitSuccess,
                failure: me.onSubmitFailure,
                scope: me
            });
        }
    },

    /**
     * 提交失败
     * @param form
     * @param action
     * @returns
     */
    onSubmitFailure: function (form, action) {
        var me = this;
        FAILED.form(form, action);
    },

    /**
     * 保存按钮
     */
    saveButton: 'button[formBind=true]',
    
    /**
     * 页面初始化
     */
    initComponent: function () {
        var me = this;
        me.callParent(arguments);
        me.bindButtonEvent();
    },

    //重置按钮
    resetButton: 'resetButton',
    /**
     * 重置方法
     * @returns
     */
    onReset: function () {
        var me = this;
        me.getForm().reset();
        me.initFocus();
    },
    /**
     * 初始化聚焦
     * @returns
     */
    initFocus: function () {
        var me = this,
            field = me.down(me.defaultFocus);
        if (field) {
            field.focus(true, 10);
        }
    },

    /**
     * 按钮事件
     * @returns
     */
    bindButtonEvent: function () {
        var me = this,
            saveButton = me.saveButton,
            resetButton = me.resetButton,
            i, ln;
        if (Ext.isString(saveButton)) {
            saveButton = me.query(saveButton);
            ln = saveButton.length;
            for (i = 0; i < ln; i++) {
                saveButton[i].on('click', me.onSave, me);
            }
            me.saveButton = saveButton;
        }
        if (Ext.isString(resetButton)) {
            resetButton = me.down('#' + resetButton);
            me.resetButton = resetButton;
            resetButton.on('click', me.onReset, me);
        }
    },

    /**
     * 返回保存相关的信息
     * @param saved 保存
     */
    getSavedMessage: function (saved) {
        return saved === 'new'
            ? I18N.SavedAndNew
            : saved === 'close' ? I18N.SavedAndClose : I18N.SavedAndNothing;
    },

    /**
     * 提交成功
     * 更新记录
     */
    onSubmitSuccess: function (form, eOpts) {
        var me = this,
            saved = me.saved, msg, fn,
            record = me.getRecord(),
            isEdit = me.getViewModel().get('isEdit');
        me.hasSaved = true;
        me.updateRecord();
        if (!isEdit) {
            record.set(eOpts.result.data);
            me.hasNew = true;
        }
        record.commit();
        me.fireEvent('recordupdate', me, record, isEdit, eOpts);
        TOAST.toast(me.getSavedMessage(saved), me.el, null,
            saved === 'close' ? me.onFormClose : me.initFocus,
            me);
        if (me.saved === 'new') me.addRecord();
        if (me.saved === 'custom') me.fireEvent('aftersaved', me, record, isEdit, eOpts);
    },

    /**
     * 表单关闭事件
     */
    onFormClose: function () {
        var me = this;
        me.up(me.closeCmp).close();
    },

    /**
     * 设置标题
     */
    titleCmp: 'window',
    switchTitle: function (title) {
        var me = this,
            titleCmp = me.titleCmp;
        if (Ext.isEmpty(titleCmp)) return;
        if(Ext.isString(titleCmp)){
            if (titleCmp === 'self') {
                titleCmp = me;
            } else {
                titleCmp = me.up(titleCmp);
            }
            me.titleCmp = titleCmp;
        }
        titleCmp.setTitle(title);
    },

    /**
     * 初始化状态
     * @returns
     */
    initState: function () {
        var me = this;
        me.hasSaved = false;
        me.hasNew = false;
    },

    entityName: '',
    config: {
        defaultModelValue: {}
    },
    /**
     * 添加记录
     * @param initState
     * @returns
     */
    addRecord: function (initState) {
        var me = this,
            model = me.baseModel,
            entityName = me.entityName;
        if (initState === true) me.initState();
        if (Ext.isEmpty(model)) Ext.raise('没有定义baseModel');
        if (Ext.isEmpty(entityName)) Ext.raise('没有定义entityName');
        me.fireEvent('beforeaddrecord', me);
        me.switchTitle(I18N.Add + I18N[entityName] );
        me.loadRecord(Ext.create(model, Ext.apply({}, me.getDefaultModelValue())));
        me.url = URI.get(entityName.toLocaleLowerCase(), 'create');
        me.getViewModel().set('isEdit', false);
        me.onReset();
        me.fireEvent('afteraddrecord', me);
    },

    /**
     * 是否允许修改记录
     */
    editRecord: function (initState) {
        var me = this,
            entityName = me.entityName;
        if (Ext.isEmpty(entityName)) Ext.raise('没有定义entityName');
        if (initState === true) me.initState();
        me.switchTitle(I18N.Edit + I18N[entityName]);
        me.url = URI.get(entityName.toLocaleLowerCase(), 'update');
        me.getViewModel().set('isEdit', true);
        me.onReset();
    }

});
