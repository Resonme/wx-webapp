<template>
	<div class="home">
		<!-- header -->
		<div class="home-header">
			<uni-swiper-dot :info="info" :current="current" mode="round">
				<swiper class="swiper-box" :autoplay="true" @change="change">
					<swiper-item v-for="(item, index) in info" :key="index">
						<view :class="item.colorClass" class="swiper-item"><image class="image" :src="item.url" mode="aspectFill" /></view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</div>

		<!-- form -->
		<div class="home-form">
			<div class="home-form-container">
				<div class="form-item">
					<div class="form-item-label">车辆类型</div>
					<div class="form-item-content">
						<div class="form-item-content__text"><span>请选择车辆类型</span></div>
						<uni-icons class="form-item-content__icon uni-icon-wrapper" :size="20" color="#333" type="arrowright" />
					</div>
				</div>
				<div class="form-item">
					<div class="form-item-label">品牌车系</div>
					<div class="form-item-content">
						<div class="form-item-content__text"><span>请选择品牌车系</span></div>
						<uni-icons class="form-item-content__icon uni-icon-wrapper" :size="20" color="#333" type="arrowright" />
					</div>
				</div>
				<div class="form-item">
					<div class="form-item-label">购车日期</div>
					<div class="form-item-content">
						<div class="form-item-content__text"><span>请选择购车日期</span></div>
						<uni-icons class="form-item-content__icon uni-icon-wrapper" :size="20" color="#333" type="arrowright" />
					</div>
				</div>
				<div class="form-item">
					<div class="form-item-label">行驶里程</div>
					<div class="form-item-content form-mileage">
						<input class="form-mileage-input" type="number" placeholder="请输入行驶里程" placeholder-style="color:#333;" value="" />
						<div class="form-mileage-unit">公里</div>
					</div>
				</div>
				<button class="form-submit" type="primary">立即询价</button>
			</div>
		</div>

		<!-- history -->
		<div class="home-history">
			<app-drivider title="询价记录"></app-drivider>
			<enquiry-list :datas="historyList"></enquiry-list>
		</div>
		<!--  -->
	</div>
</template>

<script>
import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue';
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import AppDrivider from '@/components/app-divider/index.vue';
import EnquiryList from '../components/enquiry-list/index.vue';

export default {
	components: {
		uniSwiperDot,
		uniIcons,
		AppDrivider,
		EnquiryList
	},
	data() {
		return {
			info: [
				{
					colorClass: 'uni-bg-red',
					url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
					content: '内容 A'
				},
				{
					colorClass: 'uni-bg-green',
					url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
					content: '内容 B'
				},
				{
					colorClass: 'uni-bg-blue',
					url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
					content: '内容 C'
				}
			],
			dotStyle: {},
			current: 0,
			historyList: [
				{ id: 'NO001', carName: '奥迪Q5', carPrice: '389900.00', personName: '张三', personPhone: '18732345934' },
				{ id: 'NO002', carName: '奥迪Q5', carPrice: '389900.00', personName: '张三', personPhone: '18732345934' }
			],
			form: {
				type: '',
				model: '',
				date: '',
				num: 0
			}
		};
	},
	methods: {
		change(e) {
			this.current = e.detail.current;
		}
	}
};
</script>

<style lang="scss" scoped>
.home-form {
	position: relative;
	margin: -30upx 30upx 30upx;
	background: #fff;
	box-shadow: 0 2upx 16upx 0 rgba(0, 0, 0, 0.06);
	border-radius: 20upx;
	z-index: 2;
	.home-form-container {
		padding: 10upx 30upx;
	}
	.form-item {
		padding: 30upx 0 20upx;
		border-bottom: 1upx solid #dfdfdf;
		&-label {
			margin-bottom: 40upx;
			font-size: 24upx;
			color: #666666;
			display: flex;
			align-items: center;
			&::before {
				content: '';
				display: block;
				width: 10upx;
				height: 10upx;
				margin-right: 22upx;
				border-radius: 50%;
				background-color: #4fc294;
			}
		}
		&-content {
			padding-left: 32upx;
			font-size: 32upx;
			color: #333333;
			display: flex;
			justify-content: space-between;
			&.form-mileage {
				display: flex;
				justify-content: space-between;
				align-items: center;
				&-input {
					flex: 1;
					font-size: 32upx;
					color: #333333;
					overflow: hidden;
				}
				&-unit {
					font-size: 32upx;
					color: #333333;
				}
			}
		}

		&:active {
			border-color: #999;
		}
	}

	.form-submit {
		height: 100upx;
		margin: 50upx 0 38upx;
		line-height: 100upx;
		font-size: 32upx;
		color: #ffffff;
		background-color: #4fc294;
		box-shadow: 0 10upx 10upx 0 rgba(83, 185, 151, 0.2);
		border-radius: 50upx;
		&:active {
			color: rgba(0, 0, 0, 0.6);
			background-color: #dedede;
		}
	}
}

// history
.home-history {
	margin-top: 10upx;
	padding: 30upx;
}
</style>
