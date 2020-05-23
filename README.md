# 开箱即用的 VuePress 模板

> 本模板基于官方默认主题，[默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)

## 如何使用

### 模板拉取及依赖安装

```shell
git clone https://github.com/MrHanson/vuepress-template.git

cd vuepress-template

npm i
# or
yarn
```

### 目录结构说明

> docs 目录下为 vuepress 文档的所有相关代码

- **README.md**为网站首页

- **home.md**为目录页

- **guide**和**demo**文件夹为默认的两个模块（可根据需求自行更改），文件夹内为对应模块的文章

### 写作

1. 启动本地服务

```shell
npm run docs:dev
# or
yarn docs:dev
```

2. 在对应模块的文件夹内创建 markdown 文件并写作

## 将文档部署到 github pages

1. 构建文档

```shell
npm run docs:build
# or
yarn docs:build
```

2. 执行模板已经配置好相关的 npm script

```shell
# 执行如下指令其一即可
npm run docs:deploy
# or
yarn docs:deploy
```

3. 将该仓库的的 github pages 设置为 gh-pages 分支

## 欢迎提交 Issues 或者 PR
