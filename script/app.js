// To do:
// - laad state erin bij quotes - net werk op traag om te testen 
// - Modules 
// - hash routes voor de focus state = als hash dit is moet er iets gebeuren
// - JS opschonen = console log eruit
// - read me compleet maken en laatste week wiki
// https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/week-4.md
// - flow control update en in readme


 

const url = 'https://quote.api.fdnd.nl/v1/quote'
  const data = await fetch(url)
 const response = await data.json()

console.log(response.status)


import { handleRoutes } from '../modules/router.js'


handleRoutes()





