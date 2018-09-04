# ghost-theme-simple

Ghost博客主题

> 一直都想自己做一个自己博客的主题，现在终于实现了，Simple - 一款ghost上的简便主题

###主要功能：

1. 总体
   1. 公共header，菜单
   2. 公共footer
2. 主页
   1. 文章列表
   2. 标签列表
3. 文章页
   1. 文章展示
   2. 文章滚动大纲
   3. 标签
   4. 作者信息
4. 谷歌统计

### TODOs

1. 文章阅读统计
2. 评论
   1. diqus评论
   2. gitment统计插件
3. 谷歌广告
4. 搜索
5. 社交分享
   1. facebook
   2. twitter
   3. 微信
   4. QQ
   5. 微博

### 技术栈

1. pure html + js + css
2. bulma css框架
3. nodejs
4. handerbars
5. ghost2.0

### 安装

下载[release](https://github.com/cmlanche/ghost-theme-simple/releases)压缩包，上传到你的ghost后台中，点击active激活

### 配置

1. 谷歌统计配置

   在你的ghost管理后台，`Code Injection`中添加js代码：

```javascript
<script>
var config = {
   "google_analytics_id": "your google analytics id"
}
</script>
```

点击保存即可