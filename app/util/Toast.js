/**
 * 重新封装Toast
 */
Ext.define('app.util.Toast', {
	//类的别名
    alternateClassName: 'TOAST',
    //单例
    singleton: true,

    /**
     * @param message 显示的信息
     * @param el 显示所在的容器
     * @param align 对齐方式
     * @param fn 回调函数
     * @param scope 传递给回调函数的作用域
     * @param args 传递给回调函数的参数
     * @returns
     */
    toast: function (message, el, align, fn, scope, args) {
        var toast = Ext.create('Ext.window.Toast',
            {
                html: message,
                closable: false,
                anchor: el || Ext.getBody(),
                align: align || 'bl',
                minWidth: 400
            });
        if (Ext.isFunction(fn)) {
            toast.on('close', fn, scope, { single: true, args: args });
        }
        toast.show();
    }
});
