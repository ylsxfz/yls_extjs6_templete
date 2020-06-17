/**
 * 扩展代理接口
 */
Ext.define('app.ux.data.proxy.Format', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.format',

    /**
     * 引用失败的信息处理类
     */
    requires: [
        'app.util.Failed'
    ],

    /**
     * 读取器
     * type：数据类型
     * rootProperty：数据根节点
     * messageProperty：信息
     */
    reader: {
        type: 'json',
        rootProperty: "data",
        messageProperty: "msg"
    },

    /**
     * 编写器
     * type：数据类型
     * encode：
     * rootProperty：数据根节点
     * allowSingle：配置，false以确保即使将记录发送到一起，也始终将记录包装在一个数组中。
     * 			当有多个记录时，它们将始终被编码为一个数组。
     */
    writer: {
        type: "json",
        encode: true,
        rootProperty: "data",
        allowSingle: false
    },

    /**
     * 当服务器返回异常时激发。
     * 如果请求超时或已中止，也可以侦听此事件。
     */
    listeners: {
        exception: FAILED.proxy
    }


})
