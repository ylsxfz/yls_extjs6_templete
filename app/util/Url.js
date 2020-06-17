/**
Operation mode
 * 访问地址类
 */
Ext.define('app.util.Url', {
	//类的别名
    alternateClassName: 'URI',
    //单例
    singleton: true,
    //设置
    config: {
    },
    ROOTPATH:"http://localhost:8080/yls_extjs6/",
    /**
     * 构造方法
     * @param config 默认设置
     * @returns
     */
    constructor: function (config) {
        this.initConfig(config);
        this.callParent(arguments);
    },
    //默认的action
    defaultActions: {
        create: 'create',
        read: 'list',
        update: 'update',
        destroy: 'delete',
        details: 'details'
    },
    //action列表
    actions: {},
    //格式化方式
    urlFormat: '{0}/{1}/{2}',
    
    /**
     * 获取请求地址
     * @param controller 控制器
     * @param action 请求地址
     * @returns
     */
    get: function (controller, action) {
        var me = this;
        if (!Ext.isString(controller) || Ext.isEmpty(controller)) Ext.raise('非法的控制器名称');
        if (!Ext.isString(action) && !Ext.isNumber(action)) Ext.raise('非法的操作名称');
        return Ext.String.format(me.urlFormat, me.ROOTPATH, controller, me.defaultActions[action] || me.actions[action] || action);
    },

    //增删改查
    crud: {
        c: 'create',
        r: 'read',
        u: 'update',
        d: 'destroy'
    },

    /**
     * 获取地址
     * @param controller 控制器
     * @param action 请求地址
     * @returns
     */
    getApi: function (controller, action) {
        var me = this, act, ln, i, result = {};
        action = Ext.isString(action) ? action.toLowerCase() : '';
        ln = action.length;
        for (i = 0; i < ln; i++) {
            act = me.crud[action[i]];
            if (act) {
                result[act] = me.get(controller, act);
            }
        }
        return result;
    },
    
    DEBUG: true,
    
    //资源列表
    resources: {
        logo: 'resources/images/company-logo.png'
    },

    /**
     * 加载资源
     * @param res 资源的key
     * @returns
     */
    getResource: function (res) {
        var me = this;
        return me.ROOTPATH + (me.DEBUG ? '/sencha/' : '/') + me.resources[res];
    }

});
