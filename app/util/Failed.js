/**
 * 统一处理失败时的具体代码
 */
Ext.define('app.util.Failed', {
	//单例
    singleton: true,
    //类的备用名称
    alternateClassName: 'FAILED',
    //引用
    requires: [
        'app.locale.Locale'
    ],

    /**
     * ajax请求信息
     * @param response 响应信息
     * @param options
     * @returns
     * Successful Client Requests成功的客户端请求
     * 200 OK——成功
     * 201 Created——已创建
     * 202 Accepted——接受
     * 203 Non-Authorative Information——非Authorative信息
     * 204 No Content——无内容
     * 205 Reset Content——重置内容
     * 206 Partial Content——部分内容

     * Client Request Redirected——客户端请求重定向
     * 300 Multiple Choices——多种选择
     * 301 Moved Permanently——永久移动
     * 302 Moved Temporarily——临时移动
     * 303 See Other——参见其他
     * 304 Not Modified——未修改
     * 305 Use Proxy——使用代理

     * Client Request Errors——客户端请求错误
     * 400 Bad Request——错误的请求
     * 401 Authorization Required——需要授权
     * 402 Payment Required (not used yet)——需要付款（尚未使用）
     * 403 Forbidden——禁止
     * 404 Not Found——未找到
     * 405 Method Not Allowed——不允许的方法
     * 406 Not Acceptable (encoding)——不接受（编码）
     * 407 Proxy Authentication Required——需要代理授权
     * 408 Request Timed Out——请求超时
     * 409 Conflicting Request——冲突的请求
     * 410 Gone——消失
     * 411 Content Length Required——内容所需长度
     * 412 Precondition Failed——前提条件失败
     * 413 Request Entity Too Long——请求实体过长
     * 414 Request URI Too Long——请求URI太长
     * 415 Unsupported Media Type——不支持的媒体类型
     * 416——所请求的范围无法满足
     * 417——执行失败
     * 418——锁定的错误

     * Server Errors——服务器错误
     * 500 Internal Server Error——内部服务器错误
     * 501 Not Implemented——未实现
     * 502 Bad Gateway——错误网关
     * 503 Service Unavailable——服务不可用
     * 504 Gateway Timeout——网关超时
     * 505 HTTP Version Not Supported——HTTP版本不受支持
     */
    ajax: function (response, options) {
        var title = I18N.FailedTitle;
        if (response.status === 404) {
            Ext.Msg.alert(title, I18N.Failed404);
        } else if (response.status === 500) {
            Ext.Msg.alert(title, I18N.Failed500);
        } else if (!Ext.isEmpty(response.responseText)) {
            Ext.Msg.alert(title, Ext.String.format(I18N.FailedOtherCode, response.status, response.responseText));
        }
    },

    /**
     * 代理
     * @param proxy
     * @param response 响应信息
     * @param options
     * @param epots
     * @returns
     */
    proxy: function (proxy, response, options, epots) {
        var status = response.status;
        //状态码200：成功
        if (status === 200 && !Ext.isEmpty(options.error)) {
            Ext.Msg.alert(I18N.FailedTitle, options.error);
        } else {
            FAILED.ajax(response, options);
        }
    },

    /**
     * form的错误信息提示
     * @param form 表单信息
     * @param action
     * @returns
     */
    form: function (form, action) {
        if (action.result) {
            if (action.result.errors) return;
            if (!Ext.isEmpty(action.result.msg)) {
                Ext.Msg.alert(I18N.FailureProcessTitle, action.result.msg);
                return;
            }
        }
        FAILED.ajax(action.response);
    }

});
