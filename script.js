//usernams & passwords
let Logan = {
  user: "12577",
  password: "20Patchy"
};

document.getElementById("button").onclick = function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === Logan.user && password === Logan.password) {
    document.write("<a href= 'https://lzw26l.csb.app/'>Click me</a>");
  }
};
