<template>
	<div class="user">
		<!-- header -->
		<div class="user-header">
			<div class="user-info">
				<image class="user-image" src="/static/user/user-unlogin.png" mode="scaleToFill"></image>
				<span class="user-name">登录</span>
			</div>
		</div>

		<!--  -->
		<div class="user-container">
			<!-- 统计 -->
			<div class="user-statistic">
				<div class="user-statistic-item">
					<span class="statistic-num">15</span>
					<span class="statistic-label">销售订单</span>
				</div>
				<div class="user-statistic-item">
					<span class="statistic-num">1152.00</span>
					<span class="statistic-label">销售总额（元）</span>
				</div>
			</div>
			
			<!-- items -->
			<uni-list class="user-menus">
				<uni-list-item title="报价记录" thumb="/static/user/price.png"  />
				<uni-list-item title="订单管理" thumb="/static/user/order.png"/>
				<uni-list-item title="邀请好友" thumb="/static/user/invitation.png" />
			</uni-list>
			
		</div>
		
		<!--  -->
	</div>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	
	export default{
		components:{
			uniList,
			uniListItem
		}
	}
</script>

<style lang="scss" scoped>
	.user-header{
		height: 320upx;
		background-color: #4FC294;
		.user-info{
			padding: 120upx 50upx;
			display: flex;
			align-items: center;
		}
		.user-image{
			width: 120upx;
			height: 120upx;
			margin-right: 30upx;
		}
		.user-name{
			line-height: 56upx;
			font-size: 40upx;
			color: #FFFFFF;
		}
	}
	
	.user-statistic{
		margin-top: -65upx;
		padding: 30upx 40upx;
		display: flex;
		justify-content: space-between;
		.user-statistic-item{
			width: 320upx;
			height: 180upx;
			background: #FFFFFF;
			box-shadow: 0 2upx 20upx 4upx rgba(58,150,114,0.15);
			border-radius: 20upx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.statistic-num{
			margin-bottom: 15upx;
			line-height: 70upx;;
			font-size: 50upx;
			color: #333333;
		}
		.statistic-label{
			font-size: 24upx;
			line-height: 32upx;
			color: #333333;
		}
	}
</style>
