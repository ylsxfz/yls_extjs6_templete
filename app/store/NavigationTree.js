Ext.define('app.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    storeId: 'NavigationTree',
    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: '首页',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'indexpage',
                routeId: 'indexpage', // routeId defaults to viewType
                leaf: true
            },
            {
                text: '媒体管理',
                iconCls: 'x-fa fa-send',
                rowCls: 'nav-tree-badge nav-tree-badge-hot',
                viewType: 'mediaView',
                leaf: true
            },
            {
                text: '人员管理',
                iconCls: 'x-fa fa-user',
                viewType: 'users',
                leaf: true
            },
            {
                text: '文章管理',
                iconCls: 'x-fa fa-search',
                viewType: 'articleView',
                leaf: true
            },
            {
                text: '二级菜单',
                iconCls: 'x-fa fa-leanpub',
                expanded: false,
                selectable: false,
                children: [
                    {
                        text: '空白页面',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'pageblank',
                        leaf: true
                    },

                    {
                        text: '404页面',
                        iconCls: 'x-fa fa-exclamation-triangle',
                        viewType: 'page404',
                        leaf: true
                    },
					
					{
					    text: '500页面',
					    iconCls: 'x-fa fa-exclamation-triangle',
					    viewType: 'page500',
					    leaf: true
					},

					{
					    text: '登录页面',
					    iconCls: 'x-fa fa-exclamation-triangle',
					    viewType: 'login',
					    leaf: true
					},
					
					{
					    text: '修改密码',
					    iconCls: 'x-fa fa-exclamation-triangle',
					    viewType: 'passwordreset',
					    leaf: true
					},

					{
					    text: '锁屏',
					    iconCls: 'x-fa fa-exclamation-triangle',
					    viewType: 'lockscreen',
					    leaf: true
					},

                ]
            },
        ]
    }
});
