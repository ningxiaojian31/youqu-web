<template>
	<view>
		<view class="main-body">
			 
			<block v-if="indexList.length>0">
			<view v-for="(item,index) in indexList" :key="index" @click="goItem(item)" class="flex pd-10 bg-fff bdb">
				<block v-if="item.gid==0">
					<image class="wh-40 mgr-10 bd-radius-10" :src="item.user_head+'.100x100.jpg'"></image>
					<view class="flex-1">
						 
						<view class="cl1 mgb-5">{{item.friendid}}</view>
						 
						<chat-msg :content="item.message"></chat-msg>
					</view>
				</block>
				<block v-else>
					<image   class="wh-40 mgr-10 bd-radius-10" :src="item.imgurl+'.100x100.jpg'"></image>
					<view class="flex-1">
						 
						<view class="cl1 mgb-5" >{{item.friendid}}</view>
						 
						<chat-msg :content="item.message"></chat-msg>
					</view>
				</block>
				
				
				
				<view class="cl3">{{item.time}}</view>
			</view>
			</block>
			<block v-else>
				<view class="emptyData">还没消息，快去找人聊聊吧</view>
			</block>
			
			
		</view>
		<mt-footer tab="index"></mt-footer>
	</view>
</template>

<script>
	 
	// import common from '@/common/common.js';
	import mtFooter from "@/components/footer.vue";
	import chatDb from "@/common/chatdb.js";
	 
	import chatMsg from "@/components/chatmsg.vue";
	export default {
		components:{
			mtFooter,
			chatMsg,
		},
		data() {
			return {
				userList: [],
				groupList:[],
				indexList:[],
				isLoad:false ,
				//socket相关变量
				socketTask: null,
				// 确保websocket是打开状态
				is_open_socket: false
			}
		},
		mounted() {
			this.test();
		},
		onShow(){
			if(this.isLoad){
				this.pmList();
			}
			//初始化socket连接
			this.connectSocketInit();
			//更新消息
			this.loadChatSnapshot();
			
		},
		methods: {
			playMusic:function(url){
				audioClass.play(url);
			},
			goItem:function(item){
				if(item.gid!=0 || item.gid!=""){
					uni.navigateTo({
						url:"chat?socketTask="+"1"
					})
				}else{
					uni.navigateTo({
						url:"pm?uuid="+item.touserid
					})
				}
			},
			pmList:function(){
				var that=this;
				that.app.get({
					url:that.app.apiHost+"/module.php?m=im_msg_index",
					success:function(res){
						that.indexList=res.data.list;
					}
				})
			},
			
			
			//websocket
			// 进入这个页面的时候创建websocket连接【整个页面随时使用】
			connectSocketInit() {
				// 创建一个this.socketTask对象【发送、接收、关闭socket都由这个对象操作】
				this.socketTask = uni.connectSocket({
					// 【非常重要】必须确保你的服务器是成功的,如果是手机测试千万别使用ws://127.0.0.1:9099【特别容易犯的错误】
					url: "ws://10.74.158.31:9001/ws",
					success(data) {
						console.log("websocket连接成功");
					},
				});
			 
			// 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】
			this.socketTask.onOpen((res) => {
				console.log("WebSocket连接正常打开中...！");
				this.is_open_socket = true;
				// 注：只有连接正常打开中 ，才能正常成功发送消息
				this.socketTask.send({
					data:{
						type: 0,
						chatRecord: {
						id: "1",
						userid: "1",
						friendid: "1",
						message: "我是建立通道关联的消息",
					},
					ext: "000"
									        
				},
				async success() {
							console.log("消息发送成功");
						},
					});
					// 注：只有连接正常打开中 ，才能正常收到消息
					this.socketTask.onMessage((res) => {
						console.log("收到服务器内容：" + res.data);
					});
				})
				// 这里仅是事件监听【如果socket关闭了会执行】
				this.socketTask.onClose(() => {
						console.log("已经被关闭了")
					})
				},
				// 关闭websocket【离开这个页面的时候执行关闭】
				closeSocket:function() {
					this.socketTask.close({
						success(res) {
							this.is_open_socket = false;
							console.log("关闭成功", res)
						},
						fail(err) {
							console.log("关闭失败", err)
						}
					})
				},
				clickRequest:function() {
					if (this.is_open_socket) {
						// websocket的服务器的原理是:发送一次消息,同时返回一组数据【否则服务器会进去死循环崩溃】
						this.socketTask.send({
							data: "请求一次发送一次message",
							async success() {
								console.log("消息发送成功");
							},
						});
					}
				},
				leave() {
					this.$uniReLaunch("/pages/tabbar/wallet/wallet")
				},
						
						
				//更新聊天快照
				loadChatSnapshot:function(){
					uni.request({
						url: 'http://10.74.158.31:9000/chatrecord/findUnreadByUserid?userid=1', //仅为示例，并非真实接口地址。
						data: {
							
						},
						header: {
							'content-type': 'application/json' //自定义请求头信息
						},
						success: (res) => {
							// console.log(JSON.stringify(res.data));
							this.indexList = res.data;
						},
						fail: (res) =>{
							console.log(res.data);
						}
					});
				}
				

		}
	}
</script>

<style>
	 
</style>
