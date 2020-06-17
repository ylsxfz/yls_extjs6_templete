Ext.define('app.locale.zh_CN',{
    override: 'app.locale.Locale',

    statics: {
        ApplicationUpdate: '应用程序更新',
        ApplicationUpdateMsg: '应用程序已经更新，重新加载？',

        DaterangeText: '开始日期必须小于结束日期',
        PasswordText: '两次输入的密码不同',
		
		LockScreenTitle: '锁屏',
		LockScreenTip: '由于长时间未操作，已锁屏，请输入密码继续。',
		RedirectToLogin: '使用账户密码登录',
		
			
        FailedTitle: '错误信息',
        Failed404: '错误的请求地址',
        Failed500: '服务器内部错误',
        FailedOtherCode:'错误代码：{0}<br\>响应：{1}',
		FailureProcessTitle:'表单信息错误',

        AppTitle: '大数据管理系统',
        GetUserInfo: '正在加载用户信息......',
        StateRestoreWait: '正在恢复状态信息...',
        EmptyText: '没有任何数据',
		DefaultMessageTitle: '信息',

        ComingSoon: '即将推出！',
        StayTunedForUpdates: '敬请期待。',
        Error404HTML: '<div>页面不存在</div><div>尝试返回<a href="/">首页</a></div>',
        Error500HTML: '<div>服务器内部错误</div><div>尝试返回<a href="/">首页</a></div>',

		//默认的日期格式
        DefaultDatetimeFormat: 'Y-m-d H:i:s',
        DefaultDateFormat: 'Y-m-d',

		//左侧导航栏的宽度和收缩后的宽度
        NavigationBarWidth:220,
		NavigationBarCollapsedWidth:64,
		
		//删除
		DeleteNoSelection: '请选择要删除的{0}',
		DeleteWaitMsg: '正在删除，请等待……',
		DeleteConfirmMessageTitle: '删除',
		DeleteConfirmMessage: '<p>确定要删除以下{0}？</p>{1}',
		
		//密码修改相关
		NewPassword: '新密码',
        PasswordRegexText: '密码必须由字母和数字组成,且长度至少为6位',
        ConfirmPassword: '确认密码',
		PasswordResetTitle: '修改密码',
        PasswordResetLabel: '输入以下字段以修改密码',
        PasswordResetSuccess: '密码已修改，请重新登录',
        OldPasswordEqualNew: '新密码不能与旧密码相同',
		PasswordNoEqual: '两次输入的密码不同',
		
		
		//保存
		Save: '保存',
        SaveWaitMsg: '正在保存，请等待......',
        SavedAndClose: '数据已成功保存，窗口将关闭',
        SavedAndNothing: '数据已成功保存',
        SavedAndNew: '数据已成功保存，可继续添加新的数据',
        Reset: '重置',
        Return: '返回',
        Required: '该输入项为必输项',
        Count: '共{count}条',
		SaveAndNewButtonText: '保存和新建',
		SaveButtonText: '保存',
		
		//媒体
		SelectedMedia: '选择媒体',
		InsertMedia: '从媒体库插入媒体',
		
		
		//常用图标按钮
		Add: '新建',
        Edit: '编辑',
        Delete: '删除',
        Details: '详细信息',
        Refresh: '刷新',
        Search: '查询',
        Cancel: '取消',
        Selected: '确定',
		ShowDetails:'查看详细信息',
		
		NoModel: '没有定义模型',
		NoSelection: '请选择{0}，再{1}',
		Loading: '正在加载数据，请等待......',
		
        PasswordNoChange: '注意：如果不修改密码，可留空',
        Sorter: '排序',
        SorterASC: '正序',
        SorterDESC: '倒序',
        EmptyValue: '无',
        HasChild: '节点下还有子节点，不允许删除',
        NoDrop: '拖放操作失败，当前节点不是有效的类别',
		
		
		
		//登录相关
		LoginTitle: '登录',
        LoginLabel: '使用帐号登录',
		UserId: '用户名',
		Password: '密码',
		VerifyCode: '验证码',
        VerifyCodeAlt: '单击图片可刷新验证码',
        LoginSubmitWaitMsg: '正在登录，请等待......',
        LoginSubmitWaitTitle: '正在登录',
		RememberMe: '记住我',
    }
})