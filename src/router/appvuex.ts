export default {
  state: {
    index: 0, // 当前是第几屏
    all: 5, // 最后一个的索引
    scrollWid: false, // 可视区域大小
    scrollHei: false,
    version: false,
    nav: [
      { name: '首页', icon: '#icon-tubiao115' },
      { name: '我的信息', icon: '#icon-user1' },
      { name: '技能栈', icon: '#icon-jineng' },
      { name: '经历', icon: '#icon-shijian1' },
      { name: '项目作品', icon: '#icon-gengduo' },
      { name: '了解更多', icon: '#icon-others' }
    ],
    myInfo: {
      // 个人信息
      name: '温佳伟',
      sex: '男',
      birthday: '1995-06-02',
      nation: '汉',
      jobIntension: 'Web 前端工程师',
      more: 'w1521624684@163.com',
      // 希望本是无所谓有，无所谓无的。这正如地上的路；
      title: '其实地上本没有路，走的人多了，也便成了路。'
    },
    moreInfo: {
      // 更多信息
      phone: 17648253663,
      Email: 'w1521624684@163.com',
      blog: 'http://blog.csdn.net/qq_25243451',
      GitHub: 'https://github.com/lwpersonal'
    },
    skill: {
      // 专业技能
      base: {
        HTML: '熟练运用HTML5、页面结构合理、项目中常用语义化标签',
        CSS3: '熟练使用CSS3、参与多个移动端项目、有移动端布局兼容经验、响应式布局、flex布局、Rem适配、熟练使用Sass Stylus等CSS扩展语言',
        JavaScript: '模块化组件化开发、维护性扩展性强、熟悉正则表达式、熟悉ECMAScript 6、有良好的注释习惯'
      },
      expend: [
        '熟练运用Vue2框架开发SPA应用、嵌套路由、slot封装自由度高的组件、Vuex管理页面数据 状态、自定义指令',
        '熟悉React Native的运用、MobX管理页面数据 状态、可以解决RN开发中的常见问题',
        'webpack管理前端项目、TypeScript对代码进行静态类型检测、ESlint规范代码',
        '有Node.js开发经验、封装请求接口、连接MySql数据库进行多表联合查询'
      ],
      other: [
        '熟练使用chrome开发者工具调试网页',
        '熟悉微信公共号网页开发、了解微信小程序开发',
        '对软件工程有一定了解、对非前端开发有了解',
        '对UI设计有了解、有设计移动端网页经验、熟练使用PhotoShop',
        '使用GitHub、码云托管代码'
      ]
    },
    infoArr: [
      {
        icon: '#icon-shengri',
        title: '生日/1995.6.2',
        id: 'birthday',
        content: [
          { icon: '#icon-user1', content: '温佳伟 | 男 | 汉 | ' + String(Number(new Date().getFullYear()) - 1995) + '岁' },
          { icon: '#icon-mmobilephone', content: '17648253663' },
          { icon: '#icon-youxiang', content: 'w1521624684@163.com' },
          { icon: '#icon-youxiang', content: '1521624684@qq.com' },
          { icon: '#icon-techangaihao', content: '彩铅 | 电影 | 看书 | 旅游' },
        ]
      },
      {
        icon: '#icon-xueli',
        title: '学历/本科',
        id: 'Education',
        content: [
          { icon: '#icon-shijian', content: '2013.09-2017.07' },
          { icon: '#icon-xuexiao', content: '内蒙古科技大学' },
          { icon: '#icon-xueli', content: '软件工程 | 本科' },
          { icon: '#icon-xiangmu1', content: '主修课程：网页设计与制作、高级网站开发、计算机网络、软件工程、算法分析、数据库原理等' }
        ]
      },
      {
        icon: '#icon-zhuangtai',
        title: '职业/Web 前端',
        id: 'job',
        content: [
          { icon: '#icon-zuobiao', content: '北京' },
          { icon: '#icon-csdn', content: '我的CSDN博客', href: 'http://blog.csdn.net/qq_25243451' },
          { icon: '#icon-github', content: '我的GitHub', href: 'https://github.com/lwpersonal' },
          { icon: '#icon-21', content: '常驻移动端Web设计开发' },
          { icon: '#icon-mokuai', content: '根据需求，模块化设计网站' },
          { icon: '#icon-components', content: '封装复用性、配置性强的通用组件' },
        ]
      }
    ],
    experience: [
      {
        time: '2013.09-2017.07',
        title: ''
      }
    ],
    // { icon: '#icon-shijian', content: '2016.09-2018.01' },
    //       { icon: '#icon-gongsi', content: '包头市易阅文化传媒有限责任公司' },
    //       { icon: '#icon-gongzuo', content: 'Web 前端工程师' },
    //       { icon: '#icon-21', content: '移动书城和App的设计开发' },
    //       { icon: '#icon-pc', content: 'PC网站的更新维护' },
    //       { icon: '#icon-mokuai', content: '根据需求模块化设计网站' },
    //       { icon: '#icon-components', content: '封装复用性配置性强的通用组件' },
  },
  mutations: {
    /**
     * @description 更新数据状态
     * @param {any} state mutation
     * @param {any} data 参数
     */
    _appUpData: (state, data) => {
      for (const item of Object.keys(data)) {
        if (state[item] === undefined) {
          throw(new Error(item + ' is not defined!(Vuex)'))
        }
        state[item] = data[item] }
    }
  }
}
