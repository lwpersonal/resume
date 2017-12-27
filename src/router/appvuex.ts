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
      { name: '工作经历', icon: '#icon-zhuangtai' },
      { name: '项目作品', icon: '#icon-gengduo' },
      { name: '联系我', icon: '#icon-youxiang' }
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
    infoArr: [
      // 第二页，更多信息
      {
        icon: '#icon-shengri',
        title: '生日/1995.6.2',
        id: 'birthday',
        content: [
          { icon: '#icon-user1', content: '温佳伟 | 男 | 汉 | ' + String(Number(new Date().getFullYear()) - 1995) + '岁' },
          { icon: '#icon-zuobiao', content: '内蒙古呼和浩特' },
          { icon: '#icon-techangaihao', content: '彩铅 | 电影 | 看书 | 旅游' },
          { icon: '#icon-icon3', content: '热爱前端，喜欢设计。厌倦一成不变的生活，希望以后可以依靠努力做自己想做的事' },
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
          { icon: '#icon-zuobiao', content: '北京 | ...' },
          { icon: '#icon-zhuangtai', content: '1.5年前端工作经验' },
          { icon: '#icon-21', content: '常驻移动端Web设计开发' },
          { icon: '#icon-mokuai', content: '多次使用Vue2构建网站' },
          { icon: '#icon-components', content: '习惯组件化模块化开发方式' },
        ]
      }
    ],
    skill: {
      // 专业技能，第三页
      base: {
        HTML: '熟练运用HTML5、页面结构合理、项目中常用语义化标签',
        CSS3: '熟练使用CSS3、参与多个移动端项目、有移动端布局兼容经验、响应式布局、flex布局、Rem适配、熟练使用Sass Stylus等CSS扩展语言',
        JavaScript: '模块化组件化开发、维护性扩展性强、熟悉正则表达式、熟悉ECMAScript 6、有良好的注释习惯'
      },
      expend: [
        '熟练运用Vue2框架开发SPA应用、嵌套路由、slot封装自由度高的组件、Vuex管理页面数据 状态、自定义指令',
        '熟悉React Native的运用、MobX管理页面数据 状态、可以解决RN开发中的常见问题',
        'webpack管理前端项目、TypeScript对代码进行静态类型检测、ESlint规范代码',
        '有Node.js开发经验、封装请求接口、连接MySql数据库'
      ],
      other: [
        '熟练使用chrome开发者工具调试网页',
        '熟练微信公共号网页开发、了解微信小程序开发',
        '对UI设计有了解、有设计移动端页面经验、熟练使用PhotoShop',
        '使用GitHub、码云托管代码',
        '对软件工程有一定了解、需求化设计网页',
      ]
    },
    experience: [
      // 经历，第四页
      {
        time: '2016.09-2018.01',
        title: '包头市易阅文化传媒有限责任公司',
        job: 'Web 前端工程师',
        tag: [
          { color: '#00d200', text: '微信平台' },
          { color: '#f77909', text: '移动端' },
          { color: 'rgb(40,164,186)', text: 'App' }
        ],
        skill: 'HTML5、CSS3、JavaScript、Zepto、Vue2、React Native等',
        content: [
          '负责设计构建移动端书城、App',
          '根据需求划分功能模块',
          '封装项目通用的组件，',
          '移动书城、PC网站维护更新'
        ],
        result: '设计的网页作为公司移动端书城网站，一直运行在微信公众号内，现在正在推广阶段，已经有10000+的注册用户，日盈利稳定',
        get: '工作期间得到大量的移动端Web经验，对组件化模块化有了深入理解'
      }
    ],
    demo: [
      {
        title: '移动书城重构',
        time: '',
        url: 'http://mobile.qczww.cn/view/QC@20170001/?#/',
        demoUrl: 'mobile.qczww.cn/view/QC@20170001/?#/',
        skill: 'Vue2 | TypeScript | Stylus | ESlint',
        introduce: '此项目是基于第一版移动书城的升级重构网站，满足用户在移动端，其中以阅读功能最为复杂， 使用语义化标签， 用 ESlint 规范代码，增加代码质量和可维护性。网站将会投放于微信公众平台，替代原网站运行。',
        myWork: '我负责此项目的软件分析设计、界面设计、网页制作、组件封装等工作'
      },
      {
        title: '移动书城重构',
        time: '',
        url: 'http://mobile.qczww.cn/view/QC@20170001/?#/',
        condition: '第一版网站由于没有按照模块化设计，导致后期维护困难，难以添加新功能。所以使用MVVM模式重构网站。',
        skill: 'Vue2 | TypeScript | Stylus | ESlint',
        introduce: '此项目是基于第一版移动书城的升级重构网站，满足用户在移动端，其中以阅读功能最为复杂， 使用语义化标签， 用 ESlint 规范代码，增加代码质量和可维护性。网站将会投放于微信公众平台，替代原网站运行。',
        myWork: '我负责此项目的软件分析设计、界面设计、网页制作、组件封装等工作'
      },
    ],
    contact: [
      { icon: '#icon-mmobilephone', content: 17648253663 },
      { icon: '#icon-youxiang', content: 'w1521624684@163.com' },
      { icon: '#icon-youxiang', content: '1521624684@qq.com' },
      { icon: '#icon-hicon1', content: 1521624684 },
      { icon: '#icon-weixin', content: 'w1521624684' },
    ],
    other: [
      { icon: '#icon-csdn', content: 'http://blog.csdn.net/qq_25243451' },
      { icon: '#icon-github', content: 'https://github.com/lwpersonal' }
    ]
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
