<template>
	<div class="centoer">
		
		<p class="title">
			<font class="primary"style="color:#000000">结果查看</font>
		</p>

		<div class="btns dn">
			<el-button type="primary" size="mini">保存并返回</el-button>
			<el-button type="primary" size="mini">保存并继续添加</el-button>
			<el-button size="mini" @click="$router.go(-1)">返回</el-button>
		</div>

		<div class="selecteds clearfix">
			<div class="fl">
				<div class="h35 lh35 fl"></div>
				<el-select @change="searchHandle" class="mgr20 " popper-class="el-select" clearable v-model="params.examType" placeholder="试题分类">
                	<el-option v-for="item in subjectModeList" :key="item.seq" :label="item.desc"
                           :value="item.seq"></el-option>
            	</el-select>
			</div>
			<el-input class="saerch_input fr" placeholder="搜索活动名称" v-model.trim="params.keyWord">
                <i class="el-icon-search" slot="suffix" @click="searchHandle"> </i>
            </el-input>
		</div>

		<div class="tablPerp">
			<table class="mtable">
				<tr>
					<td>活动名称</td>
					<td>试题分类</td>
					<td>活动时长</td>
					<td>总分</td>
					<td>及格人数</td>
					<td>参与总人数</td>
					<td>及格率</td>
					<td>操作</td>
				</tr>
				<tr v-for="item in list" :key="item.examId">
					<td> {{ item.examName ? item.examName : '-'}} </td>
					<td> {{ item.examType === 0?'问卷调查':item.examType == 1?'在线考试':'知识竞赛'}} </td>
					<td> {{ item.examTime ? item.examTime +'分钟': '-'}} </td>
					<td> {{ item.score ? item.score : '-'}} </td>
					<td> {{ (item.passCount || item.passCount ===0) && item.examType===1 ? item.passCount : '-'}} </td>
					<td> {{ item.total || item.total ===0 ? item.total : '-'}} </td>
					<td> {{ (item.pass || item.pass ===0) && item.examType===1 ? item.pass*100+'%' : '-'}} </td>
					<td>
						<router-link :to="{
							name:'score_users',
							params:{
								id:item.examId
							},
							query:{
								passCount:item.passCount,
								total:item.total,
								pass:item.pass,
							}
						}" style="color: #38C6B6">人员成绩</router-link>
					</td>
				</tr>
		</table>
	</div>

		<div>
		<pageVue :pageData="page" @chekdpageCallcak="changedPage"></pageVue>
	</div>
	</div>
</template>

<script>
	import {subjectModeList} from '@/utils/dict.js'

	export default {
		name: "score",
		data() {
			return {
				params:{
					pageNum: 1,
					limit: 10,
					keyWord: '',
					totalCount: 1,
					examType:''
				},
				list:[],
				subjectModeList,
			}
		},
		methods:{
			changedPage(index) {
				this.params.pageNum = index;
				initList.apply(this);
			},
			searchHandle(){
				this.params.pageNum = 1;
				
				initList.apply(this);
			}
		},
		computed: {
			page() {
				return {
                    curPage: this.params.pageNum,//当前页吗
                    totalCount: this.params.totalCount,//总条数
                    pageSize: this.params.limit,//页面大小
                }
            }
        },
        created(){
        	initList.apply(this);
        }
    }
function initList(){
	const params = {...this.params};
	params.examStatus = [1,2].join()
	if(params.examType < 0) delete params.examType
	this.$axios.get("/biz/score/list",{params}).then(res=>{
		if(res.success){
			this.list = res.obj.list;
			this.params.totalCount = res.obj.total;
		}
	})
}
</script>

<style scoped>

</style>
