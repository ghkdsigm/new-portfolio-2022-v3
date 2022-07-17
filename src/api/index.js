import axios from "axios";
//import store from '../store/index'


const api = {
    baseURL: "https://hshportfolio-api.herokuapp.com",
};

function MyInfoList() {
    return axios.get(`${api.baseURL}/portfolios`);
}

function MyOperationList() {
    return axios.get(`${api.baseURL}/operation`);
}

function MyFront() {
    return axios.get(`${api.baseURL}/fontdevelopment `);
}

export { MyInfoList, MyOperationList, MyFront };


// const axiosInstance = axios.create({
// })

// axiosInstance.interceptors.request.use(
//     config => {
//         store.commit('startSpinner');
//         return config;
//     },
//     error => {
//         alert('데이터 요청 실패');
//         return Promise.reject(error);
//     }
// );

// axiosInstance.interceptors.response.use(
//     response => {
//         store.commit('endSpinner');
//         return response;
//     },
//     error => {
//         alert('데이터 응답 실패');
//         return Promise.reject(error);
//     }
// )

// export default axiosInstance
