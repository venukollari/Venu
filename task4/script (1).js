let container = document.querySelector("#container");

fetch("https://dummyjson.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then((data) => {

    data.users.forEach((user) => {

      let div = document.createElement("div");

      div.classList.add("card");

      div.innerHTML = `
        <img src="${user.image}" alt="${user.username}">
        <h3>${user.firstName} ${user.lastName}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
      `;

      container.appendChild(div);

    });

  })
  .catch((error) => {
    container.innerHTML = "<h2 style='color:white'>Failed to load users!</h2>";
    console.error(error);
  });