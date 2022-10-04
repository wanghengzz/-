// pages/personal/personal.js
let startY=0;  //手指起始的位置
let moveY=0;   //手指移动的坐标
let moveDistance=0;   //手指移动的距离
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     coverTransform:'translateY(0)',
     coverTransition:'',
     userInfo:{},  //用户信息
     recentPlayList:[] //用户的播放纪录
  },
  handleTouchStart(event){
       startY=event.touches[0].clientY,
       this.setData({
        coverTransition:'transform 1.5s linear'
      })
  },
  hanleTouchMove(event){
       moveY=event.touches[0].clientY
       moveDistance=moveY-startY
       console.log(moveDistance);
       if(moveDistance<=0){
         return
       }
       if(moveDistance>=80){
          moveDistance=80;
          this.setData({
           coverTransform:`translateY(${moveDistance}rpx)`
         })
       }
  },
  hanleTouchEnd(){
    this.setData({
      coverTransform:`translateY(0rpx)`,
      coverTransition:'transform 1s linear'
    })
  },
  // 跳转至登录路由
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 读取用户信息
    let userInfo=wx.getStorageSync('userInfo')
    if(userInfo){
      // 更新用户的状态
        this.setData({
          userInfo:JSON.parse(userInfo)
        })
        // 获取用户播放记录
        this.getUserRecentPlayList(this.data.userInfo.userId)
    }
  },
  
  // 获取用户播放记录的函数
  async getUserRecentPlayList(userId){
     let RecentPlayListData=await request('/user/record',{uid:userId,type:0})
     let index=0;
     let recent= RecentPlayListData.allData.slice(0,10).map(item=>{
       item.id=index++;
       return item
     })
     this.setData({
       recentPlayList:recent
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