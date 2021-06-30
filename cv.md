## Voloshina Liliya

## Contact info
* Discord: liliya#7076
* [Github](https://github.com/liliyavoloshina)

## About me
I am looking for a job as a front-end developer, where I could improve my skills and work on interesting projects

## My skills
* HTML
* CSS (also SASS)
* JavaScript
* Vue.js
* Tailwindcss

## Experience
For about six months I worked as a freelancer and completed many different projects. In the beginning it was just typical *HTML/CSS-task* (e.g.: [PEEPLZ](https://peeplz.online/id4/), [rocket-bot.trade](https://rocket-bot.trade/)).<br/>
Also i did some small javascript projects, and a bunch of pet-projects. E.g.: [Thrift Shop](https://thrift-shop.herokuapp.com/), [Simple Shop](https://simple-shop-sample.herokuapp.com/home) (*you can find more in my repository*).

## English Level
My level of English is B2

## Code example
My favorite piece of code is an example of data encryption:
```javascript
const text = 'An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.';
async function generateHash(message: string): Promise<string> {
  const encodedMessage = new TextEncoder().encode(message)
  const hashMessage = await crypto.subtle.digest('SHA-256', encodedMessage)
  const biteArray = Array.from(new Uint8Array(hashMessage))
  const hashHex = biteArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
```