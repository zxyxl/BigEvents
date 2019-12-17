// 对项目中请求部分做存放

var user = {
    login: function (options) {
        $.ajax({
            type: 'POST',
            url: LOGIN,
            data: {
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    logout: function (options) {
        $.ajax({
            type: 'POST',
            url: LOGOUT,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    getuser: function (options) {
        $.ajax({
            url: GETUSER,
            success: function (res) {
                // options.success(res);
                if (res.code === 200) {
                    options.success(res);
                } else {
                    options.fail();
                }
            }
        })
    },
    userinfoGet: function (options) {
        $.ajax({
            url: USERINFO_GET,
            success: function (res) {
                // console.log(res);
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    },
    userinfoEdit: function (options) {
        $.ajax({
            type: 'POST',
            url: USERINFO_EDIT,
            data: options.data,
            contentType: false,
            processData: false,
            success: function (res) {
                // console.log(res);
                if (res.code === 200) {
                    options.success();
                }
            }
        })
    }
}