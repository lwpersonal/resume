export default {
  state: {
    tabInfo: [
      {name: '主页', icon: '#icon-tubiao115', routeName: 'home'},
      {name: '推荐', icon: '#icon-tushu', routeName: 'recommend'},
      {name: '阅读记录', icon: '#icon-shujia2', routeName: 'bookshelf'},
      {name: '我', icon: '#icon-user1', routeName: 'user'}
    ], // tab 配置项
    tabStatus: false // tab是否显示
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
