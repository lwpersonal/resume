export default {
  state: {
    index: 0, // 当前是第几屏
    all: 5, // 最后一个的索引
    scrollWid: false, // 可视区域大小
    scrollHei: false,
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
      more: '喜欢设计、热爱前端，我无法用杠杆去撬动地球，但是却可以用canvas画出世界。',
      title: '资之深，则取之左右逢其源。'
    },
    moreInfo: {
      // 更多信息
      phone: 17648253663,
      Email: '1521624684@qq.com',
      blog: 'http://blog.csdn.net/qq_25243451',
      GitHub: 'https://github.com/lwpersonal'
    },
    skill: {
      // 专业技能
      Html: {
        degree: 90,
        tag: [ 'Html3', '语义化' ]
      },
      CSS: {
        degree: 90,
        tag: [ 'CSS3', '响应式' ]
      },
      JavaScript: {
        degree: 85,
        tag: [ '模块化', '维护性强' ]
      },
      height: {
        jQuery: {
          degree: 85,
          tag: [ ]
        },
        Vue2: {
          bold: true,
          degree: 85,
          tag: [ ]
        },
        ES6: {
          bold: true,
          degree: 80,
          tag: [ ]
        },
      },
      middle: {
        TypeScript : {
          degree: 85,
          tag: [ ]
        },
        ReactNative: {
          degree: 75,
          tag: [ ]
        },
        webpack: {
          degree: 80,
          tag: [ ]
        },
        stylus: {
          degree: 85,
          tag: [ ]
        },
        Sass: {
          degree: 85,
          tag: [ ]
        },
      },
      low: [ 'Git', '微信小程序', 'NodeJs', 'Http协议', 'PhotoShop' ]
    },
    school: {
      // 教育经历
      name: '内蒙古科技大学',
      time: '2013.09-2017.07',
      major: '软件工程（本科）',
      import: [ '网页设计与制作', '高级网站开发', '计算机网络', '软件工程', '算法分析', '数据库原理' ]
    }
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
