<template>
	<view class="top">
		<view>
			<image src="../../static/back.png" @click="back()" class="back"></image>
		</view>
		<view class="focas-fans">
			<view class="item-focas" :class="{yzms: sign === true }" @tap="getFocas">+关注</view>
			<view class="item-fans"  @tap="sendMsg">私信</view>
		</view>
		<view  class="personPic" >
			<view class="item-img">
				<image :src="picture"></image>
			</view>
			<view class="item-other">
				<text class="item-name">{{username}}</text>
				<image v-if="sex === 1" src="../../static/male.png" class="item-sex"></image>
				<image v-if="sex === 0" src="../../static/female.png" class="item-sex"></image>
			</view>
		</view>
		<text class="msg">{{msg}}</text>
		<view class="otherMsg">
			<text class="item">{{like}} 获赞</text>
			<text class="item">{{fans}} 粉丝</text>
			<text class="item">{{focas}} 关注</text>
		</view>
	</view>
	
	<!-- <list>
	    <cell v-for="num in lists">
	      <text>{{num}}</text>
	    </cell>
	</list> -->
	
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				sign : false,
				sex: 0,
				picture: "http://fc-feed.cdn.bcebos.com/0/pic/9107b498a0cbea000842763091e833b6.jpg",
				username: "Justin",
				msg: "这家伙很懒，什么都没写~",
				like: 4000,
				fans: 100,
				focas: 30,
				lists: ['A', 'B', 'C', 'D', 'E']
			}
		},
		methods: {
			back: function(e){
				uni.navigateBack(1);
			},
			getFocas: function(){
				//关注
				sign == true;
			},
			sendMsg: function(){
				//私信
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
