import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// 重整資料會消失要裝這個
// npm install --save vuex-persistedstate
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const art = {
	namespaced: true,
	actions: {
		// 顯示每項tr
		displayAPI(context, apiPath){
			// 取得PHP資料
			return axios.get(`../backend/php/${apiPath}`).then(
				response => {
					let tempData = {}
					let arrData = []
					// 只取要的資料
					// 找陣列中每個art物件
					for (const item of response.data) {
	
						// 去掉art物件中不需要的屬性(1~12)
						for (const key in item) {
							// 判斷是否為1~12，不是則加到新的物件中
							if( !parseInt(key) && parseInt(key) !== 0){
								tempData[key] = item[key]
							}
						}
						// 再將該物件加入新陣列
						arrData.unshift(tempData)
						// 把暫存物件資料歸零
						tempData = {}
					}
					// 將處理完的傳給mutations displayAPI方法
					context.commit('displayAPI', arrData);
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 刪除功能
		deleteAPI(context, data){
			return axios.post(`../backend/php/${data.useAPI.deleteAPI}`, data.finalCheckedArr).then(
				response => {
					alert('刪除成功')
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 上架功能
		upStatusAPI(context, data){
			return axios.post(`../backend/php/${data.useAPI.upStatusAPI}`, data.finalCheckedArr).then(
				response => {
					alert('上架成功')
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 下架功能
		downStatusAPI(context, data){
			return axios.post(`../backend/php/${data.useAPI.downStatusAPI}`, data.finalCheckedArr).then(
				response => {
					alert('下架成功')
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 上傳檔案
		filesUploadAPI(context, data){
			return axios({
				url: `../backend/php/${data.useAPI.uploadAPI}`,
				method: 'post', 
				data: data.createFormFile
			}).then(
				response => {
					// console.log(response.data);
				},
				error => {
					alert('上傳檔案失敗')
				}
			)
		},
		// 新增資料進資料庫
		createAPI(context, data){
			return axios({
				url: `../backend/php/${data.useAPI.createAPI}`,
				method: 'post', 
				data: data.createFormValue
			}).then(
				response => {
					alert('新增成功');
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 編輯功能(暫時)
		updateAPI(context, data){
			return axios({
				url: `../backend/php/${data.apiPath}`,
				method: 'post',
				data: data.formValue
			}).then(
				response => {
					// console.log(response.data);
					alert('儲存編輯成功');
				},
				error => {}
			)
		}
	},
	mutations: {
		// 收到資料後存入state中
		displayAPI(state, data){
			state.tableData = data;
		},
	},
	state: {
		tableData: [],
	},
	getters:{
		// 回傳tableData
		getTableData(state){
			return state.tableData
		}
	}
}
const course = {
	namespaced: true,
	actions: {
		// 顯示每項tr
		displayAPI(context, apiPath){
			// 取得PHP資料
			return axios.get(`../backend/php/${apiPath}`).then(
				response => {
					let tempData = {}
					let arrData = []
					// 只取要的資料
					// 找陣列中每個art物件
					for (const item of response.data) {
	
						// 去掉art物件中不需要的屬性(1~12)
						for (const key in item) {
							// 判斷是否為1~12，不是則加到新的物件中
							if( !parseInt(key) && parseInt(key) !== 0){
								tempData[key] = item[key]
							}
						}
						// 再將該物件加入新陣列
						arrData.unshift(tempData)
						// 把暫存物件資料歸零
						tempData = {}
					}
					// 將處理完的傳給mutations displayAPI方法
					context.commit('displayAPI', arrData);
				},
				error => {
					console.log(error.message);
				}
			)
		},
	},
	mutations: {
		// 收到資料後存入state中
		displayAPI(state, data){
			state.tableData = data;
		},
	},
	state: {
		tableData: [],
	},
	getters:{
		// 回傳tableData
		getTableData(state){
			return state.tableData
		}
	}
}
const course_update = {
	namespaced: true,
	actions: {
		// 顯示該課程類型的內容
		displayFormAPI(context, data){
			console.log();
			// 取得PHP資料
			return axios({
				url: `../backend/php/${data.apiPath}`,
				method: 'post',
				data: data.cid
			}).then(
				response => {

					let tempData = {}
					// 只取要的資料
					// 找陣列中每個art物件
					for (const item of response.data) {
	
						// 去掉art物件中不需要的屬性(1~12)
						for (const key in item) {
							// 判斷是否為1~12，不是則加到新的物件中
							if( !parseInt(key) && parseInt(key) !== 0){
								tempData[key] = item[key]
							}
						}
					}
					// 將處理完的傳給mutations displayAPI方法
					context.commit('displayFormAPI', tempData);
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 顯示每項tr
		displayAPI(context, data){
			// 取得PHP資料
			return axios({
				url:`../backend/php/${data.apiPath}`,
				method: 'post',
				data: data.cid
			}).then(
				response => {

					let tempData = {}
					let arrData = []
					// 只取要的資料
					// 找陣列中每個art物件
					for (const item of response.data) {
	
						// 去掉art物件中不需要的屬性(1~12)
						for (const key in item) {
							// 判斷是否為1~12，不是則加到新的物件中
							if( !parseInt(key) && parseInt(key) !== 0){
								tempData[key] = item[key]
							}
						}
						// 再將該物件加入新陣列
						arrData.push(tempData)
						// 把暫存物件資料歸零
						tempData = {}
					}
					// 將處理完的傳給mutations displayAPI方法
					context.commit('displayAPI', arrData);
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 課程類別資料修改
		courseTypeUpdataAPI(context, data){
			return axios({
				url: `../backend/php/${data.apiPath}`,
				method: 'post',
				data: {
					cid: data.cid,
					formData: data.formData
				}
			}).then(
				response => {
					alert('儲存成功');
				},
				error => {}
			)
		},
		// 刪除功能
		deleteAPI(context, data){
			console.log(data);
			return axios.post(`../backend/php/${data.useAPI.deleteAPI}`, data.finalCheckedArr).then(
				response => {
					alert('刪除成功')
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 上架功能
		upStatusAPI(context, data){
			return axios.post(`../backend/php/${data.useAPI.upStatusAPI}`, data.finalCheckedArr).then(
				response => {
					alert('上架成功')
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 下架功能
		downStatusAPI(context, data){
			return axios.post(`../backend/php/${data.useAPI.downStatusAPI}`, data.finalCheckedArr).then(
				response => {
					alert('下架成功')
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 新增功能
		createAPI(context, data){
			return axios({
				url: `../backend/php/${data.useAPI.createAPI}`,
				method: 'post', 
				data: {
					createFormValue: data.createFormValue,
					COURSE_TYPE_ID: data.COURSE_TYPE_ID
				}
			}).then(
				response => {
					alert('新增成功');
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 課程修改
		courseUpdateAPI(context, data){
			return axios({
				url: `../backend/php/${data.apiPath}`,
				method: 'post',
				data: data.formValue
			}).then(
				response => {
					alert('儲存編輯成功');
				},
				error => {}
			)
		}

	},
	mutations: {
		displayFormAPI(state, data){
			state.formData = data;
		},
		// 收到資料後存入state中
		displayAPI(state, data){
			state.tableData = data;
		},
	},
	state: {
		formData: [],
		tableData: [],
	},
	getters:{
		// 回傳formData
		getFormData(state){
			return state.formData
		},
		// 回傳tableData
		getTableData(state){
			return state.tableData
		}
	}
}

const member = {
	namespaced:true,
	state:{
		data:[]
	},
	actions:{
		getAll:function(context,apiPath){
			
			return axios.post(`../backend/php/ho/${apiPath}`, {
				// datas to send into php
				// action: "fetchall",
				page: "member",
			})
			.then(function(response){
				context.commit('displayAPI', response.data);
        	});
		},
		toggle:(context,args) => {
			return axios
				.post(`../backend/php/ho/toggle.php`,
				{
					// action:"toggle",
					ToDo:args.act,
					MemberID:args.id
				})
				.then(()=>{
					alert(`成功對 ${args.Member} 的帳號執行動作`);
				})
		},
	},
	mutations:{
		displayAPI(state, data){
			state.tableData = data;
		},
	},
	getters:{
		// 回傳tableData
		getTableData(state){
			return state.tableData;
		}
	}
}

const order = {
	namespaced:true,
	state:{
		data:[],
		order:[],
		details:[]
	},
	actions:{
		getAll:function(context){
			return axios.post('../backend/php/ho/getOrders.php', {
				// datas to send into php
				// action: "getOrders",
			})
			.then(function(response){
				context.commit('displayAPI', response.data);
        	});
		},
		getOne:function(context, orderID){
			return axios.post('../backend/php/ho/getOrder.php', {
				// datas to send into php
				// action: "getOrder",
				orderID: orderID
			})
			.then(function(response){
				context.commit('getOrder', response.data);
        	});
		},
		getDetail:function(context, orderID){
			return axios.post('../backend/php/ho/getDetail.php', {
				// datas to send into php
				// action: "getDetail",
				orderID: orderID
			})
			.then(function(response){
				context.commit('getDetails', response.data);
        	});
		},
	},
	mutations:{
		displayAPI(state, data){
			state.tableData = data;
		},
		getOrder(state,data){
			state.order = data;
		},
		getDetails(state,data){
			state.details = data;
		},
	},
	getters:{
		// 回傳tableData
		getTableData(state){
			return state.tableData;
		},
		getOrderData(state){
			return state.order;
		},
		getDetailData(state){
			return state.details;
		}
	}
}

const products = {
	namespaced: true,
	actions: {
		// 顯示每項tr
		displayAPI(context, apiPath){
			console.log("OK1");
			// 取得PHP資料
			return axios.get(`../backend/php/${apiPath}`).then(
				response => {
					let tempData = {}
					let arrData = []
					// 只取要的資料
					// 找陣列中每個art物件
					for (const item of response.data) {
	
						// 去掉art物件中不需要的屬性(1~12)
						for (const key in item) {
							// 判斷是否為1~12，不是則加到新的物件中
							if( !parseInt(key) && parseInt(key) !== 0){
								tempData[key] = item[key]
							}
						}
						// 再將該物件加入新陣列
						arrData.unshift(tempData)
						// 把暫存物件資料歸零
						tempData = {}
					}
					// 將處理完的傳給mutations displayAPI方法
					context.commit('displayAPI', arrData);
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 刪除功能
		deleteAPI(context, data){
			console.log("OK3");
			return axios.post(`../backend/php/${data.useAPI.deleteAPI}`, data.finalCheckedArr).then(
				response => {
					alert('刪除成功')
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 上架功能
		upStatusAPI(context, data){
			console.log("Ok4");
			return axios.post(`../backend/php/${data.useAPI.upStatusAPI}`, data.finalCheckedArr).then(
				response => {
					alert('上架成功')
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 下架架功能
		downStatusAPI(context, data){
			console.log("OK5");
			return axios.post(`../backend/php/${data.useAPI.downStatusAPI}`, data.finalCheckedArr).then(
				response => {
					alert('下架成功')
				},
				error => {
					console.log(error.message);
				}
			)
		},
		
		// 上傳檔案
		filesUploadAPI(context, data){
			return axios({
				url: `../backend/php/${data.useAPI.uploadAPI}`,
				method: 'post', 
				data: data.createFormFile
			}).then(
				response => {
					console.log(response.data);
				},
				error => {
					alert('上傳檔案失敗')
				}
			)
		},
		// 新增資料進資料庫
		createAPI(context, data){
			return axios({
				url: `../backend/php/${data.useAPI.createAPI}`,
				method: 'post', 
				data: data.createFormValue
			}).then(
				response => {
					console.log(response.data);
					alert('新增成功');
				},
				error => {
					console.log(error.message);
				}
			)
		},
		// 編輯功能(暫時)
		updateAPI(context, data){
			return axios({
				url: `../backend/php/${data.apiPath}`,
				method: 'post',
				data: data.formValue
			}).then(
				response => {
					console.log(response.data);
					alert('儲存編輯成功');
				},
				error => {}
			)
		}

	},
	mutations: {
		// 收到資料後存入state中
		displayAPI(state, data){
			state.tableData = data;
		},
	},
	state: {
		tableData: [],
	},
	getters:{
		// 回傳tableData
		getTableData(state){
		 return state.tableData
		}
	}
	  
	
}



export default new Vuex.Store({
	modules:{
		art,
		member,
		order,
		products,
		course,
		course_update
	},
	plugins: [createPersistedState()],
})