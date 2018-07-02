import axios from 'axios';
import { Toast } from 'antd-mobile';

// intercept request
axios.interceptors.request.use(function(config){
  Toast.loading('Loading', 0);
  return config;
});

// intercept response
axios.interceptors.response.use(function(config){
  setTimeout(() => {
    Toast.hide();
  }, 1000)
  return config;
})
