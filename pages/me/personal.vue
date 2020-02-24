<template>
	<view class="top">
		<view>
			<image src="../../static/back.png" @click="back()" class="back"></image>
		</view>
		<view @click="invFocusAdd" class="focas-fans">
			<view class="item-focas" v-if="sign" :class="{yzms: sign === true }" >已关注</view>
			<view class="item-focas" v-else  :class="{yzms: sign === false }" >+关注</view>
			<view class="item-fans"  @tap="sendMsg">私信</view>
		</view>
		<view  class="personPic" >
			<view class="item-img">
				<image v-if="user.image != null && user.image != ''" :src="user.image"></image>
				<image v-else src="http://fc-feed.cdn.bcebos.com/0/pic/9107b498a0cbea000842763091e833b6.jpg"></image>
			</view>
			<view class="item-other">
				<text v-if="user.nickname != null && user.nickname != ''" class="item-name">{{user.nickname}}</text>
				<text v-else class="item-name">{{user.username}}</text>
				<image v-if="user.sex === 1" src="../../static/male.png" class="item-sex"></image>
				<image v-if="user.sex === 2" src="../../static/female.png" class="item-sex"></image>
			</view>
		</view>
		<text class="msg">{{user.signature}}</text>
		<view class="otherMsg">
			<text class="item">{{like}} 获赞</text>
			<text v-if="user.fans != null" class="item">{{user.fans}} 粉丝</text>
			<text v-else class="item">0 粉丝</text>
			<text v-if="user.focus != null" class="item">{{user.focus}} 关注</text>
			<text v-else class="item">0 关注</text>
		</view>
	</view>
	
	<!-- <list>
	    <cell v-for="num in lists">
	      <text>{{num}}</text>
	    </cell>
	</list> -->
	
</template>

<script>
	import common from "@/common/common.js";
	export default {
		components: {
		},
		data() {
			return {
				sign : false,
				userId: 0,
				friendId: 0,
				like: 0,
				user: {},
				lists: ['A', 'B', 'C', 'D', 'E']
			}
		},
		onLoad(options){
			var that = this;
			that.friendId = options.userId;
			
			//获取登录人信息
			uni.getStorage({  
			    key: 'user',  
			    success: function(ress) {
					that.userId = ress.data.id;
			    }
			});
			
			//加载详情
			that.loadUserDetail();
			
			//更新关注状态
			that.loadFocusStatus();
			
		},
		methods: {
			//加载详情
			loadUserDetail(){
				var that = this;
				var url = common.apiHost+'/user/tUser/front/get/'+that.friendId;
				var method = "GET";
				common.request(url,null,method).then(data => {
					if(data.data.code == 1){
						that.user = data.data.data;
					}
					
				}).catch(err => {
					uni.showToast({
					  title:"服务器错误，请稍后再试...",
					  duration:2000
					})
				});
			},
			//关注
			invFocusAdd(){
				var that = this;
				if(that.sign){
					//取消关注
					var reqData = {
						userId: that.userId,
						friendId: that.friendId,
					}
					var url = common.apiHost+'/user/tFocusFans/focus/move';
					var method = "POST";
					common.request(url,reqData,method).then(data => {
						if(data.data.code == 1){
							that.sign = false;
							uni.showToast({
							  title:"取消关注成功",
							  duration:2000
							})
						}
						
						//重新加载
						that.loadUserDetail();
						
					});
				}else{
					//关注
					var reqData = {
						userId: that.userId,
						friendId: that.friendId,
					}
					var url = common.apiHost+'/user/tFocusFans/focus/add';
					var method = "POST";
					common.request(url,reqData,method).then(data => {
						if(data.data.code == 1){
							that.sign = true;
							uni.showToast({
							  title:"关注成功",
							  duration:2000
							})
						}
						
						//重新加载
						that.loadUserDetail();
						
					});
				}
				
			},
			//关注的状态
			loadFocusStatus(){
				var that = this;
				var reqData = {
					userId: that.userId,
					friendId: that.friendId,
				}
				var url = common.apiHost+'/user/tFocusFans/focus/or';
				var method = "POST";
				common.request(url,reqData,method).then(data => {
					if(data.data.code == 1){
						that.sign = data.data.data;
						console.log("关注状态："+that.sign);
					}
					
				});
			},
			back: function(e){
				uni.navigateBack(1);
			},
			sendMsg: function(){
				//发起私信
				var data = {
					userid: this.userId,
					friendid: this.friendId
				}
				var reqData = JSON.stringify(data); // 这里转换成 字符串
				uni.navigateTo({
					url:"../netty/chat/chat/chat?socketTask="+reqData
				})
			},
			
			
		}
	}
</script>

<style lang='scss' scoped>
	
	.top {
		width: 100%;
		height: 500upx;
		background-color: #8bcae6;
	}
	
	.back {
		width: 50upx;
		height: 50upx;
		margin-top: 20upx;
		margin-left: 20upx;
	}
	
	.focas-fans {
		display: flex;
		flex-direction: row;
		float: right;
		width: 100%;
		height: 0;
		margin-left: 300upx;
		
		.item-focas {
			color: #FFFFFF;
			font-size: 30upx;
			text-align: center;
			line-height: 60upx;
			margin-left: 30upx;
			margin-top: 20upx;
			width:150upx;
			height:64upx;
			border:1upx solid #3B7ED5;
			border-radius: 50upx;
			background-color: rgba(0, 0, 0, 0.5)

		}
		
		.item-fans {
			color: #FFFFFF;
			font-size: 30upx;
			text-align: center;
			line-height: 60upx;
			margin-left: 40upx;
			margin-top: 20upx;
			width:150upx;
			height:64upx;
			border:1upx solid #3B7ED5;
			border-radius: 50upx;
			background-color: rgba(0, 0, 0, 0.5)
		}
	}
	
	
	.yzms {
		color: #000000;
		border:1upx solid #000000;
	}
	
	.personPic {
		display: flex; 
		flex-direction: column;
		margin-top: 0upx;
		
		.item-img {
			margin-top: 100upx;
			margin-left: 20upx;
			width: 100upx;
			height: 100upx;
			border-radius:50%;
			overflow:hidden ;
		}
		
		.item-other{
			display: flex;
			flex-direction: row;
			.item-name {
				margin-left: 25upx;
				margin-top: 10upx;
				font-size: 40upx;
				color: #FFFFFF;
			}
			
			.item-sex {
				margin-left: 25upx;
				margin-top: 20upx;
				width: 40upx;
				height: 40upx;
			}
		}
		
		
	}
	
	.msg {
		margin-left: 25upx;
		margin-top: 10upx;
		font-size: 30upx;
		color: #FFFFFF;
	}
	
	.otherMsg {
		display: flex;
		flex-direction: row;
		margin-top: 30upx;
		font-size: 33upx;
		color: #FFFFFF;
		
		.item {
			margin-left: 25upx;
		}
	}

</style>
