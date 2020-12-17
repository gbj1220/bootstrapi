const stuff = document.querySelector(".button");
  stuff.addEventListener("click", () => {
  xhr.open("GET", "https://icanhazdadjoke.com");
  xhr.setRequestHeader("Accept", "application/json")
  xhr.send();

  const xhr = new XMLHttpRequest();
    xhr.addEventListener('loadend', () => {
    const storedData = JSON.parse(xhr.responseText);
    console.log(storedData)
    const joke = document.querySelector('p')
    joke.innerText = storedData.joke
    document.body.appendChild(joke)

    const newXHR = new XMLHttpRequest();
      newXHR.addEventListener("loadend", () => {
      const newXHR = new XMLHttpRequest();
      const data = JSON.parse(newXHR.responseText);
      console.log(data)
      const funnyData = querySelector('p')
      funnyData.innerText = data.joke
      document.body.appendChild(funnyData)

    })

  })

})