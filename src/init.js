import axios from 'axios';
const API_BASE_URL = 'https://todo-app-csoc.herokuapp.com/';
import {getCard} from "./main.js";

function getTasks() {
  axios({
    headers: {
      Authorization: "Token " + localStorage.getItem("token"),
    },
    url: API_BASE_URL + "todo/",
    method: "GET",
  }).then(function ({ data }) {
    data.forEach((card) => {
      getCard(card)
    });
  })

}

axios({
  headers: {
    Authorization: 'Token ' + localStorage.getItem('token'),
  },
  url: API_BASE_URL + 'auth/profile/',
  method: 'get',
}).then(function ({ data, status }) {
  document.getElementById('avatar-image').src = 'https://ui-avatars.com/api/?name=' + data.name + '&background=fff&size=33&color=007bff';
  document.getElementById('profile-name').innerHTML = data.name;
  getTasks();
})

