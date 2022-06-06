//usernams & passwords
let Logan = {
  user: "12577",
  password: "20Patchy"
};

document.getElementById("button").onclick = function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === Logan.user && password === Logan.password) {
    document.write(
      "<link href='style.css' rel='stylesheet' /> <a href= 'https://lzw26l.csb.app/'>Click me</a>"
    );
  } else if (username === "edit" && password === "edit") {
    document.write(
      "<link href='style.css' rel='stylesheet' /> <a href='https://4nq6dh.csb.app/'>Click here</a>"
    );
  } else {
    document.write(
      "<title>Error</title> <link href='style2.css' rel='stylesheet' /> <br><br><br><p>ERROR</p>"
    );
  }
};
