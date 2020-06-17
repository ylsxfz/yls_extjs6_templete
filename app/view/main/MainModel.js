/**
 * 系统主界面的视图和控制层的连接对应MVVM的vm
 */
Ext.define('app.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
        currentView: null
    }
});
