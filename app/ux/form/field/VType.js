/**
 * 
 */
Ext.define("app.ux.form.field.VTypes", {
    override: "Ext.form.field.VTypes",

    /**
     * 引用本地类
     */
    requires: [
        'app.locale.Locale'
    ],

    /**
     * 校验日期
     */
    daterange: function (val, field) {
        var date = field.parseDate(val);

        if (!date) {
            return false;
        }
        if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
            var start = field.up(field.parentXtype).down('#' + field.startDateField);
            start.setMaxValue(date);
            start.validate();
            this.dateRangeMax = date;
        }
        else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
            var end = field.up(field.parentXtype).down('#' + field.endDateField);
            end.setMinValue(date);
            end.validate();
            this.dateRangeMin = date;
        }
        return true;
    },

    daterangeText: I18N.DaterangeText,
    /**
     * 校验密码
     */
    password: function (val, field) {
        if (field.initialPassField) {
            var pwd = field.up('form').down('#' + field.initialPassField);
            return (val == pwd.getValue());
        }
        return true;
    },

    passwordText: I18N.PasswordText
});
