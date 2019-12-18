// 用来存放文章的相关操作

var article = {
    categorySearch: function (options) {
        $.ajax({
            url: CATEGORY_SEARCH,
            success: function (res) {
                // console.log(res);
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    },
    categoryAdd: function (options) {
        $.ajax({
            type: 'POST',
            url: CATEGORY_ADD,
            data: options.data,
            success: function (res) {
                // console.log(res);
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    categoryEdit: function (options) {
        $.ajax({
            type: 'POST',
            url: CATEGORY_EDIT,
            data: options.data,
            success: function (res) {
                // console.log(res);
                if (res.code === 200) {
                    options.success();
                }
            }
        })
    },
    categoryDelete: function (options) {
        $.ajax({
            type: 'POST',
            url: CATEGORY_DELETE,
            data: {
                id: options.data
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                }
            }
        })
    },
    articlePublish: function (options) {
        $.ajax({
            type: 'POST',
            url: ARTICLE_PUBLISH,
            data: options.data,
            contentType: false,
            processData: false,
            success: function (res) {
                // console.log(res);
                if (res.code === 201) {
                    options.success();
                }
            }
        })
    }
}