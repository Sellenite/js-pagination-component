# js-pagination-component
An pagination component depend on javascript and jquery


#### 使用方法：
```javascript
var pagination = new Pagination() / var pagination = $.pagination()
paginaiton.init({
     container: $element,
     pageNum: 1,
     pages: 10,
     pageRange: 3,
     hasPreviousPage: true,
     hasNextPage: true,
     onSelectChange: function
})
```
 
具体实例看js/index.js，可用AMD，commonJS，browser规范引入
