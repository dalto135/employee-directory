import axios from "axios";

export default {
    getList: function() {
      return axios.get('https://randomuser.me/api/?results=10');
    },
    getSort: function() {
      return axios.get('https://randomuser.me/api/?results=10&inc=name,location,email');
    },
    getFilter: function() {
      return axios.get('https://randomuser.me/api/?results=10&inc=name,location,email&gender=female');
    }
  };
