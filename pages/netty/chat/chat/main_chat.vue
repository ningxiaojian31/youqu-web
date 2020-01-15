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
				<view class="emptyData">暂无私信消息</view>
			</block>
			
			
		</view>
		
	</view>
</template>

<script>
	 
	import mtFooter from "@/components/footer.vue";
	import chatDb from "@/common/chatdb.js";
	import common from "@/common/common.js";
	 
	import chatMsg from "@/components/chatmsg.vue";
	export default {
		components:{
			// common,
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
				is_open_socket: false,
				ops:{
					url:null,
					data:null
				}
			}
		},
		onLoad() {
			console.log("onLoad====================");
			//初始化socket连接
			this.connectSocketInit();
			//更新消息
			this.loadChatSnapshot();
			
		},
		mounted() {
			this.test();
		},
		onShow(){
			if(this.isLoad){
				this.pmList();
			}
			
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
				var that = this;
				// 创建一个this.socketTask对象【发送、接收、关闭socket都由这个对象操作】
				this.socketTask = uni.connectSocket({
					// 【非常重要】必须确保你的服务器是成功的,如果是手机测试千万别使用ws://127.0.0.1:9099【特别容易犯的错误】
					url: common.wsHost,
					success(data) {
						console.log("websocket连接成功");
					},
				});
			 
			    // 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】
			    this.socketTask.onOpen((res) => {
				    console.log("WebSocket连接正常打开中...！");
					if(this.socketTask != null && this.socketTask != undefined){
						//对象挂载，声明为全局变量
						 Vue.prototype.socketTask = this.socketTask;
					}
				   
					// 注：只有连接正常打开中 ，才能正常成功发送消息
					var message = common.getMessage(common.MSG_TYPE_SEND, 1, 1, "我是客户端的消息", null, null);
					this.socketTask.send({
					    data: message,
						async success(){
							console.log("发送消息成功");
						},
						async fail() {
							console.log("发送消息失败");
						}

					});
				
					// 注：只有连接正常打开中 ，才能正常收到消息
					this.socketTask.onMessage((res) => {
						console.log("收到服务器内容：" + res.data);
					});
					
					//相隔8秒发送心跳信息
					setInterval(function(){
						that.keepalive();
					}, 10000);
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
			
			chat: function(msg) {
				var that = this;
				// 如果当前状态已经连接，无需再次初始化websocket
				if(this.socketTask != null && this.socketTask != undefined ) {
					console.log("发送心跳包================");
					that.socketTask.send({
						data:msg,
						success(){
							
						},
						fail(){
							
						}
					});
					
					// 只有发送聊天消息才重新加载好友快照
					if(JSON.parse(msg).type == common.MSG_TYPE_SEND) {
						// 重新加载好友快照
						that.loadChatSnapshot();
					}
				}
				else {
					// 重新连接
					that.connectSocketInit();
					//发送消息
					that.socketTask.send({
						data:msg,
						success(){
							
						},
						fail(){
							
						}
					});
				
				}
			},
			// 不停地发送心跳包
			keepalive: function() {
				// 构建对象
				var heartMessage = common.getMessage(common.MSG_TYPE_KEEPALIVE, null, null, null, null, null);
				this.chat(JSON.stringify(heartMessage));
			},
				
						
			//更新聊天快照
			loadChatSnapshot:function(){
				var url = common.apiHost+'/chatrecord/findUnreadByUserid?userid=1';
				var method = "GET";
				common.request(url,null,method).then(data => {
					console.log(JSON.stringify(data));
				  this.indexList = data.data;
				})
				
			}
				

		}
	}
</script>

<style>
	 
</style>
