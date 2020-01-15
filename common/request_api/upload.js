import appconfig from '@/common/config'
const defaultPrefix = appconfig.baseUrl.defaultPrefix
const baseUrl = process.env.NODE_ENV === 'development' ? appconfig.baseUrl.dev : appconfig.baseUrl.pro
let uploadTask;
export const uploadFile = async function(filePath) {
	uploadTask = uni.uploadFile({
		url: baseUrl + defaultPrefix + 'File/Upload', //仅为示例，换成自己的上传地址
		filePath: filePath,
		header: {
			"Authorization": "Bearer " + uni.getStorageSync('token')
		},
		name: 'file',
		formData: {
			'user': 'test'
		},
		success: (res) => {
			console.log("success:" + JSON.stringify(res));
		},
		fail: (error) => {
			console.log("error:" + JSON.stringify(error));
		},
		complete: (complete) => {
			console.log("complete:" + JSON.stringify(complete));
		}
	});
	uploadTask.onProgressUpdate((res) => {
		console.log('上传进度' + res.progress);
		console.log('已经上传的数据长度' + res.totalBytesSent);
		console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
	});
}
export const uploadAbort = function() {
	// 测试取消上传任务。
	if (res.progress > 50) {
		uploadTask.abort();
	}
}
