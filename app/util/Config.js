/**
 * 全局配置类
 */
Ext.define('app.util.Config', {
	//定义此类的备用名
    alternateClassName: 'CFG',
    //单例模式
    singleton: true,
    /**
     * 配置选项列表及其默认值。
     * 注意：如果要定义自己的类或单例，则需要确保从构造函数中调用Ext.Base＃initConfig，
     * 除非要扩展Component。否则，生成的getter和setter方法将不会初始化。
	 * 如果类中没有显式定义的方法，则每个配置项都将在类创建期间在类原型内自动生成自己的setter和getter方法。
     * @param config
     */
    config: {
        userInfo: null
    },

    //构造方法
    constructor: function (config) {
        this.initConfig(config);
        this.callParent(arguments);
    },
    
    //会话视图，用于缓存视图列表
    dialogs: {},
    
    /**
     * 获取恢复视图：
     * 判断视图是不是存在
     * @param xtype
     * @returns
     */
    getDialog: function (xtype) {
        var me = this,
            dialog = me.dialogs[xtype];
        //判断视图是不是存在，如果不存在，则创建，否则直接加载
        if (!dialog) {
        	//别名获取
            dialog = Ext.ClassManager.getByAlias('widget.' + xtype);
            if (dialog === undefined) Ext.raise('没有找到xtype为' + xtype + '的类');
            if (typeof (dialog) === 'function') {
                dialog = Ext.create(dialog);
            };
            //添加到缓存视图列表中 
            me.dialogs[xtype] = dialog;
        }
        return dialog;
    }


});
