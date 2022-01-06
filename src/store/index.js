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
			axios.get(`http://localhost:8080/api/yoshi/backend/${apiPath}`).then(
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
		deleteAPI(context, data){
			console.log(data.finalCheckedArr);
			axios.post(`http://localhost:8080/api/yoshi/backend/${data.useAPI.deleteAPI}`, data.finalCheckedArr)
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

const member = {
	namespaced:true,
	state:{
		data:[]
	},
	actions:{
		getAll:function(context,apiPath){
			return axios.post(`http://localhost:8080/api/yoshi/backend/${apiPath}`, {
				// datas to send into php
				action: "fetchall",
				page: "member",
			})
			.then(function(response){
				context.commit('displayAPI', response.data);
        	});
		},
		toggle:(context,args) => {
			return axios
				.post(`http://localhost:8080/api/yoshi/backend/${args.address}`,
				{
					action:"toggle",
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


export default new Vuex.Store({
	modules:{
		art,
		member
	},
	plugins: [createPersistedState()],
})