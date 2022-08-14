import axios from "axios";

export function getTodos(page) {
  return axios.get(`https://secure-retreat-96804.herokuapp.com/data?_page=${page}&_limit=5`);
}

export function deleteTodo(id) {
  return axios({
    url: `https://secure-retreat-96804.herokuapp.com/data/${id}`,
    method: "DELETE",
  });
}

export function addTodo({ title, status }) {
  return axios({
    url: `https://secure-retreat-96804.herokuapp.com/data`,
    method: "POST",
    data: {
      title,
      status,
    },
  });
}

export function toggleTodoStatus({ id, newStatus }) {
  return axios({
    url: `https://secure-retreat-96804.herokuapp.com/data/${id}`,
    method: "PATCH",

    data: {
      status: newStatus,
    },
  });
}