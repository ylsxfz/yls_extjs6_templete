Ext.define('app.ux.container.FixedHeightOfFirstItem', {
	//使用容器Container
    extend: 'Ext.container.Container',
    xtype: 'fixedHeightOfFirstItem',
    requires: [
        'Ext.layout.container.VBox'
    ],

    
    //布局方式
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    /**
     * 组件初始化
     */
    initComponent: function () {
        var me = this,
            items = me.items,
            height = Ext.Element.getViewportHeight() - 64;
        items[0]['height'] = height;
        items.push({ xtype: 'box', flex: 1 });
        me.callParent(arguments);
    },

    /**
     * 布局之前
     */
    beforeLayout: function () {

        var me = this,
            height = Ext.Element.getViewportHeight() - 64,
            item = me.items.getAt(0);
        item.setHeight(height);

        me.callParent(arguments);
    }

});
