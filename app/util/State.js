/**
 * 状态管理类
 */
Ext.define('app.util.State', {
	//类的备用名
    alternateClassName: 'STATE',
    //单例
    singleton: true,
    //引用类
    requires: [
        'Ext.state.*',
        'Ext.util.LocalStorage',
        'app.util.Url'
    ],
    //默认配置
    config: {
    },
   
    loaded: false,
    /**
     * 构造方法
     * 如果浏览器支持LocalStorage：使用LocalStorage
     * 否则使用Cookie作为存储器
     * @param config
     * @returns
     */
    constructor: function (config) {
        var me = this,
            provider = Ext.util.LocalStorage.supported ? new Ext.state.LocalStorageProvider() : new Ext.state.CookieProvider();
        me.initConfig(config);
        me.callParent(arguments);
        //设置LocalStorage作为存储器
        Ext.state.Manager.setProvider(provider);
        provider.on('statechange', me.onStateChange, me);
    },
    
    /**
     * 状态改变
     * @param provider
     * @param key
     * @param value
     * @returns
     */
    onStateChange: function (provider, key, value) {
        var me = this;
        if (!me.loaded) return;
        if (value) {
            Ext.Ajax.request({
                url: URI.get('state', 'save'),
                params: { key: key, value: Ext.encode(value) }
            });
        }
    },

    /**
     * 恢复状态
     */
    restore: function () {
        var me = this;
        Ext.Ajax.request({
            async: false,
            url: URI.get('state', 'restore'),
            scope: me,
            success: function (response, opts) {
                var me = this,
                    obj = Ext.decode(response.responseText),
                    stateMgr = Ext.state.Manager,
                    ln,
                    i,
                    key,
                    value,
                    orgValue,
                    data;
                if (obj.success && obj.data) {
                    data = obj.data;
                    ln = data.length;
                    for (i = 0; i < ln; i++) {
                        key = data[i].Key;
                        value = Ext.decode(data[i].Value);
                        orgValue = stateMgr.get(key);
                        if (orgValue && JSON.stringify(orgValue) === JSON.stringify(value)) continue;
                        stateMgr.set(key, value);
                    }
                    me.loaded = true;
                }
            }
        });
    }

});
