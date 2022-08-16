const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const hLinks = document.querySelectorAll("#hLink")
const moon = document.querySelector("#moon")
const mobileMoon = document.querySelector("#mobileMoon")
const body = document.querySelector("body")
const mydrawermenu = document.querySelector('#mydrawermenu')
const mydrawerbutton = document.querySelector('#mydrawerbutton')

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })

  hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
      menu.classList.toggle("hidden")
      hamburger.classList.toggle("bg-white")
    })
  });

  moon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
  })
  mobileMoon.addEventListener("click", ()=>{
    body.classList.toggle("dark")
  })
