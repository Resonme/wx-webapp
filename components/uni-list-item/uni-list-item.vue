<template>
	<!-- #ifdef APP-NVUE -->
	<cell>
		<!-- #endif -->
		<view :class="disabled ? 'uni-list-item--disabled' : ''" :hover-class="disabled || showSwitch ? '' : 'uni-list-item--hover'" class="uni-list-item" @click="onClick">
			<view class="uni-list-item__container" :class="{'uni-list-item--first':isFirstChild}">
				<view v-if="thumb" class="uni-list-item__icon">
					<image :src="thumb" class="uni-list-item__icon-img" />
				</view>
				<view v-else-if="showExtraIcon" class="uni-list-item__icon">
					<uni-icons :color="extraIcon.color" :size="extraIcon.size" :type="extraIcon.type" class="uni-icon-wrapper" />
				</view>
				<view class="uni-list-item__content">
					<slot />
					<text class="uni-list-item__content-title">{{ title }}</text>
					<text v-if="note" class="uni-list-item__content-note">{{ note }}</text>
				</view>
				<view v-if="showBadge || showArrow || showSwitch" class="uni-list-item__extra">
					<uni-badge v-if="showBadge" :type="badgeType" :text="badgeText" />
					<switch v-if="showSwitch" :disabled="disabled" :checked="switchChecked" @change="onSwitchChange" />
					<uni-icons v-if="showArrow" :size="20" class="uni-icon-wrapper" color="#333" type="arrowright" />
				</view>
			</view>
		</view>
		<!-- #ifdef APP-NVUE -->
	</cell>
	<!-- #endif -->
</template>

<script>
	import uniIcons from '../uni-icons/uni-icons.vue'
	import uniBadge from '../uni-badge/uni-badge.vue'
	export default {
		name: 'UniListItem',
		components: {
			uniIcons,
			uniBadge
		},
		props: {
			title: {
				type: String,
				default: ''
			}, // 列表标题
			note: {
				type: String,
				default: ''
			}, // 列表描述
			disabled: {
				// 是否禁用
				type: [Boolean, String],
				default: false
			},
			showArrow: {
				// 是否显示箭头
				type: [Boolean, String],
				default: true
			},
			showBadge: {
				// 是否显示数字角标
				type: [Boolean, String],
				default: false
			},
			showSwitch: {
				// 是否显示Switch
				type: [Boolean, String],
				default: false
			},
			switchChecked: {
				// Switch是否被选中
				type: [Boolean, String],
				default: false
			},
			badgeText: {
				// badge内容
				type: String,
				default: ''
			},
			badgeType: {
				// badge类型
				type: String,
				default: 'success'
			},
			thumb: {
				// 缩略图
				type: String,
				default: ''
			},
			showExtraIcon: {
				// 是否显示扩展图标
				type: [Boolean, String],
				default: false
			},
			extraIcon: {
				type: Object,
				default () {
					return {
						type: 'contact',
						color: '#000000',
						size: 20
					}
				}
			}
		},
		inject: ['list'],
		data() {
			return {
				isFirstChild: false
			}
		},
		mounted() {
			if (!this.list.firstChildAppend) {
				this.list.firstChildAppend = true
				this.isFirstChild = true
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			},
			onSwitchChange(e) {
				this.$emit('switchChange', e.detail)
			}
		}
	}
</script>

<style scoped>
	.uni-list-item {
		font-size: 28upx;
		position: relative;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 30upx;
		padding-right: 30upx;
	}

	.uni-list-item--disabled {
		opacity: 0.3;
	}

	.uni-list-item--hover {
		background-color: #f1f1f1;
	}

	.uni-list-item__container {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 40upx 30upx;
		flex: 1;
		position: relative;
		justify-content: space-between;
		align-items: center;
		border-bottom-color: #DFDFDF;
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}

	/* .uni-list-item--first {
		border-top-width: 0px;
	} */

	.uni-list-item__content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		overflow: hidden;
		flex-direction: column;
		color: #333;

	}

	.uni-list-item__content-title {
		font-size: 28upx;
		color: #333;
		overflow: hidden;
	}

	.uni-list-item__content-note {
		margin-top: 6upx;
		color: #999;
		font-size: 24upx;
		overflow: hidden;
	}

	.uni-list-item__extra {
		/* width: 25%;
 */
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.uni-list-item__icon {
		margin-right: 28upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.uni-list-item__icon-img {
		height: 32upx;
		width: 32upx;
	}
</style>