/**
 * @description 根据docs下的自定义目录生成侧边栏配置
 * @example 
 *    如docs下有 docs/demo 和 docs/guide
 *    则生成如下对象
 *    {
        '/guide/': ['/guide/first', '/guide/second'],
        '/demo/': ['/demo/one', '/demo/two']
      }
      默认主题侧边栏生成规则请参考：
        https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
 */
const fs = require('fs')
function getCategorySidebar() {
  // 过滤docs根目录下的md文件
  const fileNameList = fs.readdirSync('./docs').filter(fileName => !/.md|.vuepress/.test(fileName))

  const sidebar = {}
  fileNameList.forEach(fileName => {
    const files = fs
      .readdirSync(`./docs/${fileName}`)
      .filter(f => /.md/.test(f))
      .map(f => f.replace('.md', ''))
    sidebar[`/${fileName}/`] = files.map(f => `/${fileName}/${f}`)
  })

  return sidebar
}

module.exports = {
  title: 'Hello VuePress',
  description: '开箱即用的 VuePress 模板',
  markdown: {
    lineNumbers: true, // 代码块的左侧显示行号
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' }, // 键和值对将被添加到指向外部链接的 <a> 标签，默认选项将在新窗口中打开外部链接
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' }, // 锚点配置
    toc: { includeLevel: [1, 2, 3] } // [[toc]]目录
  },
  themeConfig: {
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '目录', link: '/home' },
      { text: 'Google', link: 'https://google.com' }
    ],
    displayAllHeaders: false,
    sidebar: {
      '/home': [
        {
          // 对应guide文件夹
          title: '指南', // 必要的
          path: '/guide', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            ['/guide/first', 'first'],
            ['/guide/second', 'second']
          ]
        },
        {
          // 对应demo文件夹
          title: 'Demo',
          path: '/demo', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            ['/demo/one', 'one'],
            ['/demo/two', 'two']
          ]
        }
      ],
      ...getCategorySidebar()
    },
    sidebarDepth: 2
  }
}
