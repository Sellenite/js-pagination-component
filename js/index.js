var pageNum_All = 2
var pages_All = 20
var pagination

function loadPagination(pageInfo) {
    pagination ? '' : pagination = new Pagination()
    pagination.init($.extend({}, pageInfo, {
        container: $('#pagination'),
        onSelectChange: function (pageNum, pages) {
            pageNum_All = pageNum,
                pages_All = pages,
                $('#pageInfo').html(pageNum + '-' + pages)
            loadList()
        }
    }))
}

function loadList() {
    // 请求后端得到pageNum和pages，缓存在前端
    loadPagination({
        pageNum: pageNum_All,
        pages: pages_All,
        pageRange: 3
    })
}

loadList()