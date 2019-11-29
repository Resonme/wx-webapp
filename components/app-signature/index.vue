<template>
	<view class="signature">
		<!-- header -->
		<view class="signature-header">
			<view class="signature-header-info">请在下方签名并提交</view>
			<view class="signature-header-btns">
				<button class="signature-btn" @tap="clearClick">重写</button>
				<button :loading="loading" :disabled="loading" class="signature-btn signature-btn--success" @tap="overSign">提交</button>
			</view>
		</view>

		<!-- 面板 -->
		<canvas
			class="signature-panel"
			canvas-id="firstCanvas"
			@touchmove="move"
			@touchstart="start($event)"
			@touchend="end"
			@touchcancel="cancel"
			@longtap="tap"
			disable-scroll="true"
			@error="error"
		></canvas>
	</view>
</template>

<script>
var content = null;
var touchs = [];
var canvasw = 0;
var canvash = 0;
var _that;
//获取系统信息
uni.getSystemInfo({
	success: function(res) {
		canvasw = res.windowWidth;
		canvash = res.windowHeight;
	}
});
export default {
	data() {
		return {
			signImage: '',
			isEnd: false // 是否签名
		};
	},
	//  生命周期函数--监听页面加载
	onLoad: function(options) {
		_that = this;
		content = wx.createCanvasContext('firstCanvas'); // 获得Canvas的上下文
		content.setStrokeStyle('#000'); // 设置线的颜色
		content.setLineWidth(5); // 设置线的宽度
		content.setLineCap('round'); // 设置线两端端点样式更加圆润
		content.setLineJoin('round'); // 设置两条线连接处更加圆润
	},
	methods: {
		overSign: function() {
			if (this.isEnd) {
				uni.canvasToTempFilePath({
					canvasId: 'firstCanvas',
					success: function(res) {
						console.log('完成签名' + res.tempFilePath);
						_that.signImage = res.tempFilePath;
						res.tempFilePath && this.$emit('finish', res.tempFilePath);
					}
				});
			} else {
				uni.showToast({
					title: '请先完成签名',
					icon: 'none',
					duration: 1500,
					mask: true
				});
			}
		},

		// 画布的触摸移动开始手势响应
		start: function(event) {
			let point = {
				x: event.changedTouches[0].x,
				y: event.changedTouches[0].y
			};
			touchs.push(point);
		},
		
		// 画布的触摸移动手势响应
		move: function(e) {
			let point = {
				x: e.touches[0].x,
				y: e.touches[0].y
			};
			// console.log(point)
			touchs.push(point);
			if (touchs.length >= 2) {
				this.draw(touchs);
			}
		},

		// 画布的触摸移动结束手势响应
		end: function(e) {
			console.log('触摸结束' + e);
			this.isEnd = true;
			for (let i = 0; i < touchs.length; i++) {
				touchs.pop();
			}
		},

		// 画布的触摸取消响应
		cancel: function(e) {
			// console.log('触摸取消' + e);
		},

		// 画布的长按手势响应
		tap: function(e) {
			// console.log('长按手势' + e);
		},

		error: function(e) {
			// console.log('画布触摸错误' + e);
		},

		//绘制
		draw: function(touchs) {
			// console.log(touchs[0], touchs[1]);
			let point1 = touchs[0];
			let point2 = touchs[1];
			touchs.shift();
			content.moveTo(point1.x, point1.y);
			content.lineTo(point2.x, point2.y);
			content.stroke();
			content.draw(true);
		},
		
		//清除操作
		clearClick: function() {
			this.isEnd = false;
			content.clearRect(0, 0, canvasw, canvash);
			content.draw(true);
		}
	}
};
</script>

<style lang="scss" scoped>
.signature {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: #fff;
	align-items: center;
	.signature-header {
		flex: 0 0 80rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
	}

	.signature-panel {
		flex: 1;
		width: 100%;
		overflow: hidden;
	}
}

.signature-header {
	&-info {
		margin-left: 50rpx;
		font-size: 14rpx;
		color: #666666;
	}

	&-btns {
		margin-right: 20rpx;
		flex: 1;
		display: flex;
		justify-content: flex-end;
	}
}

.signature-btn {
	margin: 0;
	padding: 0;
	flex: 0 0 100rpx;
	height: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5rpx;
	background: #ebebeb;
	color: #333;
	font-size: 15rpx;
	& + .signature-btn {
		margin-left: 20rpx;
	}
	&--success {
		background: #4fc294;
		color: #fff;
	}
	&:active {
		background: #ccc;
	}
}
</style>
