/**
 * 系统的主界面
 */
Ext.define('app.view.main.MainContainerWrap', {
    extend: 'Ext.container.Container',
    xtype: 'maincontainerwrap',

    requires : [
        'Ext.layout.container.HBox'
    ],

    scrollable: 'y',

    layout: {
        type: 'hbox',
        align: 'stretchmax',

        // Tell the layout to animate the x/width of the child items.
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    },

    beforeLayout : function() {
        // We setup some minHeights dynamically to ensure we stretch to fill the height
        // of the viewport minus the top toolbar

        var me = this,
            height = Ext.Element.getViewportHeight() - I18N.NavigationBarCollapsedWidth,  // offset by topmost toolbar height
            // We use itemId/getComponent instead of "reference" because the initial
            // layout occurs too early for the reference to be resolved
            navTree = me.getComponent('navigationTreeList');

        me.minHeight = height;

        navTree.setStyle({
            'min-height': height + 'px'
        });

        me.callParent(arguments);
    }
});
