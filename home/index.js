// 获取点击的li，传data-type请求对应借口
function clickSidebarFun() {
  $('.siderbar li').click(function (e) {
    var type = $(this).data('type')
    console.log(type)

    if (!type) return

    // type 不传时默认取1
    // getCardList(type)
  })
}

// 调接口获取数据，url中拼参数？xx=123&xx=2314
function getCardList(type = 1) {
  $.ajax({
    url: "",
    type: "get",
    async: true,
    dataType: "json",
    success: function(res) {
      console.log(res)
    }
  })
}

$(function() {
  clickSidebarFun()
})