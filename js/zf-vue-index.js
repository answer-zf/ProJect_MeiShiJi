Vue.component("float-bot", {
  template:
    '<div class="bottom_float navbar-fixed-bottom">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '            <div class="col-md-4 text-center col-xs-12">\n' +
    "                <i></i>\n" +
    "                <h5>\n" +
    "                    &nbsp;加盟热线：400-9977-258\n" +
    "                </h5>\n" +
    '                <a href="contact_us.html" class="bottom_float_hidden pull-right">\n' +
    "                <h5>立即预约</h5>\n" +
    "                </a>\n" +
    '                <i class="pull-right"></i>\n' +
    "            </div>\n" +
    '            <div class="col-md-8 hidden-xs">\n' +
    '            <form class="form-inline" id="navbar-fixed-bottom-form">\n' +
    '            <div class="form-group col-lg-5 index_md-3 align-self-center">\n' +
    '                <label for="bottom_float_name" class="pr-2">\n' +
    "                    姓名&nbsp;:&nbsp;&nbsp;\n" +
    "                </label>\n" +
    '                <input type="text" class="form-control" id="bottom_float_name" placeholder="您的姓名" />\n' +
    "            </div>\n" +
    '            <div class="form-group col-lg-5 index_md-3 align-self-center">\n' +
    '                <label for="bottom_float_phone" class="pr-2">手机&nbsp;:&nbsp;&nbsp;</label>\n' +
    '                <input type="text" class="form-control" id="bottom_float_phone" placeholder="您的手机号" />\n' +
    "            </div>\n" +
    '            <div class="col-lg-2 index_md-6 align-self-center">\n' +
    '                <button type="button" onclick="submitPhone()" class="btn btn-warning" >\n' +
    "                    在线预约\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    </div>"
});
Vue.component("footer-copy", {
  template:
    "<footer>\n" +
    '    <div class="footerTop">\n' +
    '        <div class="container">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-12 text-center">\n' +
    "              <h5></h5>\n" +
    "            </div>\n" +
    "          </div>\n" +
    '          <div class="row">\n' +
    '            <div class="col-md-12 text-center">\n' +
    '              <b>友情链接 ：<a href="javascript:;" target="_blank">尚京集团</a><a href="javascript:;" target="_blank">尚京集团</a><a href="javascript:;" target="_blank">尚京集团</a></b>\n' +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    '      <div class="footerContent">\n' +
    '        <div class="container">\n' +
    '          <div class="row footerContentMin">\n' +
    '            <div class="col-md-3 col-xs-3">\n' +
    '              <a href="product.html" target="_blank">\n' +
    '                <h6 class="text-center">特色菜品</h6>\n' +
    "              </a>\n" +
    "              <ul>\n" +
    '                <li><a href="./product.html?type=noodle" target="_blank">韩式冷面</a></li>\n' +
    '                <li><a href="./product.html?type=slate" target="_blank">韩式石板</a></li>\n' +
    '                <li><a href="./product.html?type=bibimbap" target="_blank">石锅拌饭</a></li>\n' +
    '                <li><a href="./product.html?type=soup" target="_blank">韩式参鸡汤</a></li>\n' +
    "              </ul>\n" +
    "            </div>\n" +
    '            <div class="col-md-3 col-xs-3">\n' +
    '              <a href="origin.html" target="_blank">\n' +
    '                <h6 class="text-center">关于我们</h6>\n' +
    "              </a>\n" +
    "              <ul>\n" +
    '                <li><a href="./origin.html?type=introduce" target="_blank">公司简介</a></li>\n' +
    '                <li><a href="./origin.html?type=culture" target="_blank">公司文化</a></li>\n' +
    '                <li><a href="./origin.html?type=honor" target="_blank">荣誉资质</a></li>\n' +
    '                <li><a href="./origin.html?type=companyFeature" target="_blank">公司风貌</a></li>\n' +
    "              </ul>\n" +
    "            </div>\n" +
    '            <div class="col-md-3 col-xs-3">\n' +
    '              <a href="service.html" target="_blank">\n' +
    '                <h6 class="text-center">合作加盟</h6>\n' +
    "              </a>\n" +
    "              <ul>\n" +
    '                <li><a href="./service.html?type=howJoin" target="_blank">如何加盟</a></li>\n' +
    '                <li><a href="./service.html?type=joinAdvantage" target="_blank">加盟优势</a></li>\n' +
    "              </ul>\n" +
    "            </div>\n" +
    '            <div class="col-md-3 col-xs-3">\n' +
    '              <a href="contact_us.html" target="_blank">\n' +
    '                <h6 class="text-center">联系我们</h6>\n' +
    "              </a>\n" +
    "              <ul>\n" +
    '                <li><a href="contact_us.html" target="_blank">联系我们</a></li>\n' +
    '                <li><a href="contact_us.html" target="_blank">在线留言</a></li>\n' +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    '          <div class="row">\n' +
    '            <div class="col-md-12 text-center"><span>公司地址：安徽省合肥市庐阳区寿春路156号古井百花大厦B座</span> <span>安徽尚京品牌管理股份有限公司版权所有皖ICP备18022821号-2</span></div>\n' +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </footer>"
});
new Vue({
  el: "#footer-zf"
});
