import Vue from "vue";
import axios from "axios";

const BASE_URL = 'http://localhost:8087/api/';
const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        common:{
            'X-Requested-With': 'XMLHttpRequest'
        },
    }
});

Vue.prototype.$api= instance;