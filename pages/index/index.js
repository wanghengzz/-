// pages/index/index.js

import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     bannerList:[],   //轮播图数组
     recommendList:[],  //推荐数据
     topList:[]  //排行榜数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
      //  wx.request({
      //   //  http://localhost:3000/banner
      //    url: 'http://localhost:3000/banner',
      //    method:'GET',
      //    data:{type:2},
      //    success:(res)=>{
      //      console.log(res);
      //    },
      //    fail:(err)=>{
      //      console.log(err);
      //    }
      //  })
      // 发起轮播图请求
      let bannerListData=await request('/banner','GET',{type:2})
      this.setData({
        bannerList:bannerListData.banners
      })
      // 获取歌单数据
      let recommendListData=await request('/personalized',{limit:10})
      this.setData({
        recommendList:recommendListData.result
      })
      // 获取排行榜数据
      let resultArr=[]
        let topListData=await request('/toplist',{idx:1});
        let topListItem={name:topListData.list.name,tracks:topListData.list.slice(0,3)}
        resultArr.push(topListItem)
      // 更新toplist的值
      this.setData({
        topList:resultArr
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})