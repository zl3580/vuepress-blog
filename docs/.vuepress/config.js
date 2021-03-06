module.exports = {
  title: 'ZHOUXIAOLI',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/public/leaf.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      { text: 'VUE', link: '/pages/vue/' },
      { text: 'JAVASCRIPT', link: '/pages/js/' },
      { text: 'NODE', link: '/pages/node/' },
      { text: 'CSS', link: '/pages/css/' },
      { text: 'OTHERS', link: '/pages/others/' },
      { text: 'GitHub', link: 'https://github.com/zl3580' }
    ],
    sidebar: {
      "/pages/js/": [
        '',
        '1'
      ],
      "/pages/vue/": [
        '',
      ],
      "/pages/node/": [
        '',
      ],
      "/pages/css/": [
        '',
      ],
      "/pages/others/": [
        '',
      ],
    },
    sidebarDepth: 2, // 侧边栏显示2级
  }
};