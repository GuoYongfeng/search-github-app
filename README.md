# React 应用实战开发

**本次课程所涵盖的技术盛宴：**
- git & github & github OpenAPI
- react & react-dom
- webpack & webpack-dev-server
- babel & ES6
- react-router
- axios

## 01-整体内容概览

- react-application-01-course-intro 课程内容介绍
- react-application-02-demand 应用需求分析
- react-application-03-dev-env 搭建开发环境
- react-application-04-router 跑通基本路由
- react-application-05-bootstrap 使用 bootstrap 来优化应用的样式
- react-application-06-search-github 实现搜索组件
- react-application-07-profile-and-indexroute IndexRoute的使用以及Profile相关组件嵌套
- react-application-08-axios 使用 axios 获取 GitHub 数据
- react-application-09-data-flow Data Flow 的实现
- react-application-10-UserProfile实现 UserProfile 组件的展示
- react-application-11-performance 组件的性能优化
- react-application-12-UserRepos 实现 UserRepos 组件的展示

## 02-应用需求分析

### 功能

- 通过特定路由可以访问对应用户的信息
- 通过搜索github上的用户名来检索该用户的基本信息
- 可以检索到该用户的github上的所有代码仓库信息
- 实现对用户进行留言评论

### 示意图

![enter image description here](http://guoyongfeng.github.io/idoc//img/notetaker/demo.png)

### 组件拆分

![enter image description here](http://guoyongfeng.github.io/idoc//img/notetaker/notetaker.png)


## 03-搭建开发环境

1. 创建 git 仓库
2. npm 初始化
3. 创建基本目录和所需文件
4. 进行 webpack 配置
5. 下载对应的 loader & plugin
6. babel 配置
7. 下载 react & react-dom
8. 编写基本组件
9. 配置 npm scripts 跑通环境

## 04-跑通基本路由

1. react-router：Router Route history
2. 新增目录
- routes 路由管理
- components 展示组件（如何显示，模板和样式，也称木偶组件）
- containers 容器组件（如何运作，数据获取，状态更新）

## 05-使用 bootstrap 来优化应用的样式

- 引入 bootstrap 实现进行基本样式
```
<link href="//cdn.bootcss.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
```
- 回顾组件内如何定义样式
- 重写 Main 组件的整体布局

## 06-实现搜索组件

- 实现 SearchGithub 组件样式
- 编写组件逻辑 & 定义规范组件
- 改变路由
	- browserHistory.push
	- this.context.router.push & contextTypes

## 07-IndexRoute的使用以及Profile相关组件嵌套

### 改进

- 优化 `Home` 组件
- 并且使用 `react-router` 的 `IndexRoute` 组件实现默认展示

### 组件间的嵌套：Profile 的子组件们

- 创建 `UserProfile` `UserRepos` `Notes` 三个组件
- 通过 props 在子组件中拿到数据（username）

## 08-使用 axios 获取 GitHub 数据

- axios是什么

> axios 是一个基于 promise 的 HTTP 库，可以工作于浏览器中，也可以在 node.js 中使用，提供了一个API用来处理 XMLHttpRequests 和 node 的 http 接口。

QA：为什么不用jquery的ajax？同类的库还有哪些？

- GitHub Developer 又是什么

> GitHub 的开发者中心，提供丰富的Open API，让开发者可以基于这个平台快速构建应用。

## 09-Data Flow 的实现

- 初始化 `state` 设置 & `setState` 改变组件内部的 `state`
- 通过 `props` 进行组件间数据传递
- `propTypes` 定义组件接口约束

## 10-实现 UserProfile 组件的展示

![enter image description here](http://guoyongfeng.github.io/idoc//img/notetaker/demo.png)

- 注意容错处理

## 11-组件的性能优化

> BUG 修复

- componentWillReceiveProps( nextProps, nextState )
- componentDidMount
- shouldComponentUpdate( nextProps, nextState )

## 12-实现 UserRepos 组件的展示
