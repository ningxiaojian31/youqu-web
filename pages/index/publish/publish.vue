<template>
	<view>
		<view class="cu-bar bg-white solid-bottom" style="height: 80upx; padding:25upx 10upx ; align-content: center;">
			<view style="display: inline;">
				<view class="round bg-black light fl" style="width: 100upx;float: left;">#话题</view>
				<view class="topic" style="float: left;padding-left: 10upx; width: 80%;">
					<picker class="topic" @change="bindPickerChange" :value="pickIndex" :range="topics">
						<view class="uni-input">{{topics[pickIndex]}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="cu-form-group" style="min-height: 280px;">
			<textarea maxlength="400" style="min-height: 280px;" v-model="content" @input="textareaAInput" placeholder="记录你的搞笑瞬间"></textarea>
		</view>
		<view class="padding  text-black">
			<!-- <text class="lg cuIcon-voicefill" style="padding: 20upx;" @touchstart="voiceClick"></text> -->
			<text class="lg cuIcon-picfill" style="padding: 20upx;" @touchstart="imageClick"></text>
			<text class="lg cuIcon-videofill" style="padding: 20upx;" @touchstart="videoClick"></text>
			<!-- #ifdef APP-PLUS -->
			<text class="lg cuIcon-camerafill" style="padding: 20upx;" @touchstart="cameraClick"></text>
			<!-- #endif -->
			<!-- <view class="cu-tag round bg-black light fr">#话题</view> -->
			<view class="action">
				<button class="cu-btn bg-red shadow" style="background-color: #3B7ED5;" @tap="PublishContent">发布</button>
			</view>
		</view>
		<view class="grid  col-3 grid-square" v-if="imagePath.length>0">
			<view class="bg-img" v-for="(path,index) in imagePath" :key="index" :style="[{ backgroundImage:'url('+path+')' }]">
				<view class="cu-tag badge" @click="imagePath.splice(index,1)">X</view>
			</view>
		</view>
		<view v-if="videoPath">
			<button class="cu-btn block line-orange" @click="videoPath='';">移 除</button>
			<video id="localPath" style="width: 100%;" :src="videoPath" danmu-btn controls>
			</video>
		</view>
	</view>
</template>

<script>
	import permision from "@/common/permission.js"
	import {
		uploadFile
	} from "@/common/request_api/upload.js"
	export default {
		name: "publish",
		components: {},
		data() {
			return {
				content: "",
				imagePath: [],
				videoPath: "",
				isPublish: false,
				topics: ["话题1", "话题2"],
				pickIndex: 0,
			}
		},
		onLoad() {
			// uni.switchTab({
			// 	url: '/pages/article/index'
			// });
		},
		methods: {
			bindPickerChange: function(e) {
			    this.pickIndex = e.target.value
			 },
			textareaAInput(e) {
				this.content = e.detail.value
			},
			PublishContent() {
				this.isPublish = true;
				if (this.imagePath.length > 0) { //发布图片
					uploadFile(this.imagePath[0]);
					this.isPublish = false;
				} else if (this.videoPath) { //发布视频
					uploadFile(this.videoPath);
					this.isPublish = false;
				}
			},
			// #ifdef APP-PLUS 
			// async checkPermission() {
			// 	let status = permision.isIOS ? await permision.requestIOS('record') :
			// 		await permision.requestAndroid('android.permission.RECORD_AUDIO');

			// 	if (status === null || status === 1) {
			// 		status = 1;
			// 	} else if (status === 2) {
			// 		uni.showModal({
			// 			content: "系统麦克风已关闭",
			// 			confirmText: "确定",
			// 			showCancel: false,
			// 			success: function(res) {}
			// 		})
			// 	} else {
			// 		uni.showModal({
			// 			content: "需要麦克风权限",
			// 			confirmText: "设置",
			// 			success: function(res) {
			// 				if (res.confirm) {
			// 					permision.gotoAppSetting();
			// 				}
			// 			}
			// 		})
			// 	}
			// 	return status;
			// },
			// async voiceClick() {
			// 	// #ifdef APP-PLUS
			// 	let status = await this.checkPermission();
			// 	console.log(status);
			// 	if (status !== 1) {
			// 		return;
			// 	}
			// 	// #endif 
			// 	// TODO ios 在没有请求过权限之前无法得知是否有相关权限，这种状态下需要直接调用语音，会弹出正在识别的toast
			// 	let _this = this;
			// 	plus.speech.startRecognize({
			// 		'engine': 'baidu'
			// 	}, function(s) {
			// 		_this.content += s;
			// 	}, function(e) {
			// 		console.log("语音识别失败：" + e.message);
			// 	});
			// },
			// #endif
			async imageClick() {
				var _this = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						_this.videoPath = "";
						if (_this.imagePath.length + res.tempFilePaths.length > 6)
							return _this.$uniToast.warning("最多上传6张图.");
						_this.imagePath = _this.imagePath.concat(res.tempFilePaths);
						console.log(JSON.stringify(res));
					}
				});
			},
			async videoClick() {
				let _this = this;
				uni.chooseVideo({
					count: 1,
					sourceType: ['album'],
					success: function(res) {
						_this.imagePath = [];
						_this.videoPath = res.tempFilePath;
						console.log(res.tempFilePath);
					}
				});
			},
			//#ifdef APP-PLUS 
			async cameraClick() {
				// #ifdef APP-PLUS
				let status = await this.checkPermission();
				console.log(status);
				if (status !== 1) {
					return;
				}
				// #endif 
				uni.showActionSheet({
					itemList: ['图片拍摄', '视频拍摄', '取  消'],
					success: function(res) {
						// 获取设备默认的摄像头对象 
						let cameraObj = plus.camera.getCamera();
						let resolution = cameraObj.supportedImageResolutions[0];
						let fmt = cameraObj.supportedImageFormats[0];
						console.log("Resolution: " + resolution + ", Format: " + fmt);
						if (res.tapIndex === 0)
							cameraObj.captureImage(function(path) {
									console.log("Capture image success: " + path);
								},
								function(error) {
									console.log("Capture image failed: " + error.message);
								}, {
									resolution: resolution,
									format: fmt
								}
							);
						if (res.tapIndex === 1)
							cameraObj.startVideoCapture(
								function(path) {
									console.log("Capture image success: " + path);
								},
								function(error) {
									console.log("Capture image failed: " + error.message);
								}, {
									resolution: resolution,
									format: fmt
								}
							);
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			// #endif
		}
	};
</script>
<style lang="scss" scoped>
	@import url('../../../colorui/main.css');
	@import url('../../../colorui/icon.css');

	.text-black {
		display: block;
	}

	.cu-bar {
		display: block;
	}


</style>
