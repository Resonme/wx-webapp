<template>
	<div class="enquiry-list">
		<div class="enquiry-item" v-for="item in datas" :key="item.id">
			<div class="enquiry-item-info">
				<div class="enquiry-item-car">
					<span class="car-name">{{ item.carName }}</span>
					<span class="car-price">{{ item.carPhone }}</span>
				</div>
				<div class="enquiry-item-person">
					<span class="person-name">{{ item.personName }}</span>
					<span class="person-phone">{{ item.personPhone }}</span>
				</div>
			</div>
			<button class="enquiry-item-btn" type="primary" plain>继续购买</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		datas: {
			type: Array,
			default: function() {
				return [];
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.enquiry-list {
}
.enquiry-item {
	width: 100%;
	height: 160upx;
	padding: 30upx 34upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #ffffff;
	box-shadow: 0 2upx 16upx 0 rgba(0, 0, 0, 0.06);
	border-radius: 20upx;
	& + .enquiry-item {
		margin-top: 20upx;
	}
	.enquiry-item-info {
		flex: 1;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.enquiry-item-car {
			.car-name {
				font-size: 30upx;
				color: #333333;
			}
			.car-price {
				margin-left: 24upx;
				font-size: 30upx;
				color: #333333;
			}
		}

		.enquiry-item-person {
			margin-top: 20upx;
			.person-name {
				font-size: 24upx;
				color: #666;
			}
			.person-phone {
				margin-left: 12upx;
				font-size: 24upx;
				color: #4fc294;
			}
		}
	}

	.enquiry-item-btn {
		flex: 0 0 140upx;
		height: 50upx;
		line-height: 50upx;
		font-size: 24upx;
		color: #4fc294;
		border-color: #4fc294;
		border-radius: 25upx;
		&:active {
			border-color: #dedede;
			color: rgba(0, 0, 0, 0.6);
		}
	}
}
</style>
