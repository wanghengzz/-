// pages/video/video.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
   videGroupList:[], //导航标签和数据
   navId:""   //导航的标识
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     
    this.getVideoGroupList()
  },
  // 获取导航数据
  async getVideoGroupList(){
    let VideoGroupListData=await request("/video/group/list")
    this.setData({
      videGroupList:VideoGroupListData.data.slice(0,14),
      navId:VideoGroupListData.data[0].id
    })
  },
  // 获取视频列表数据
  // 点击切换导航的回调
  changeNav(event){
    let navId=event.currentTarget.id;
    this.setData({
      navId
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