# Captcha Bot
This bot is a example for using canvas to make captchas. Maybe I make a node module for this functions soon!
![](https://cdn.discordapp.com/attachments/679392991533858858/964546316585824346/captcha.png)

Time: [![wakatime](https://wakatime.com/badge/user/6dcad35f-5e14-44f1-8e50-62062cfd7011/project/03effdb2-1415-4f41-8a8c-5463d1abdf40.svg)](https://wakatime.com/@Funty) *yes i'm new to canvas*  
Language: JavaScript/Node.js

### Before you start:
install all used node modules with ``npm i``

## captcha function arguments:
ALL arguments are optional but all arguments can personalize your captcha!    
  
Example:  
```js
const captcha = await createCaptcha({
  length: 5,
  bgColor: "#00000000",
  bgColorDiff: {R: 20, G: 20, B: 20},
  decoys: {amount: 40, sizeMin: 10, sizeMax: 25},
  randomCharOrder: true,
  characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",
  imageSize: {xMin: 600, xMax: 700, yMin: 400, yMax: 500},
  characterColor: "#FF0000",
  lineColor: "#00FF00",
  decoyColor: "#0000FF"
});
```

[captcha function arguments:](#captcha-function-arguments)
  * [length](#length)
  * [bgColor](#bgColor)
  * [bgColorDiff](#bgColorDiff)
  * [decoys](#decoys)
  * [characters](#characters)
  * [randomCharOrder](#randomCharOrder)
  * [imageSize](#imageSize)
  * [characterColor](#characterColor)
  * [lineColor](#lineColor)
  * [decoyColor](#decoyColor)

### <ins>length</ins>
**Name:** length<br>
**Type:** Number<br>
**Default:** `5`<br>
**Description:** how many characters the captcha should have

### <ins>bgColor</ins>
**Name:** bgColor<br>
**Type:** String<br>
**Default:** random (could be bad for people with colorblindness)<br>
**Description:** Background color of the captcha

### <ins>bgColorDiff</ins>
**Name:** bgColorDiff<br>
**Type:** Object<br>
**Default:** ``{R: 20, G: 20, B: 20}``

| Sub-Option | Type   | Description                                                                  | Default (value if you don't give any) |
| ---------- | ------ | ---------------------------------------------------------------------------- | ------------------------------------- |
| R          | Number | the minimum difference between **R**ed in the colorcode of the characters   | 20                                    |
| G          | Number | the minimum difference between **G**reen in the colorcode of the characters | 20                                    |
| B          | Number | the minimum difference between **B**lue in the colorcode of the characters  | 20                                    |

### <ins>decoys</ins>
**Name:** decoys<br>
**Type:** Object<br>
**Default:** ``{amount: 40, sizeMin: 10, sizeMax: 25}``

| Sub-Option | Type   | Description                                             | Default (value if you don't give any) |
| ---------- | ------ | ------------------------------------------------------- | ------------------------------------- |
| amount     | Number | the amount of decoys to add                             | 40                                    |
| sizeMin    | Number | the minimum of the random character size for the decoys | 10                                    |
| sizeMax    | Number | the maximum of the random character size for the decoys | 10                                    |

### <ins>characters</ins>
**Name:** characters<br>
**Type:** String<br>
**Default:** `'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'`<br>
**Description:** the characters that the image is allowed to include

### <ins>randomCharOrder</ins>
**Name:** randomCharOrder<br>
**Type:** Boolean<br>
**Default:** ``true``<br>
**Description:** if it should pick random characters out of the provided string. If you want a custom, non-random string, the length should be equal to the string argument length

### <ins>imageSize</ins>
**Name:** imageSize<br>
**Type:** Object<br>
**Default:** ``{xMin: 600, xMax: 700, yMin: 400, yMax: 500}``  

| Sub-Option | Type   | Description                                                     | Default (value if you don't give any) |
| ---------- | ------ | --------------------------------------------------------------- | ------------------------------------- |
| xMin       | Number | The minimum value for the random image size at the x coordinate | 600                                   |
| xMax       | Number | The maximum value for the random image size at the x coordinate | 700                                   |
| yMin       | Number | The minimum value for the random image size at the y coordinate | 400                                   |
| yMax       | Number | The maximum value for the random image size at the y coordinate | 500                                   |

_if you don't want it to be random, just let minimum and maximum be the same value_

### <ins>characterColor</ins>
**Name:** characterColor<br>
**Type:** String<br>
**Default:** `undefined`<br>
**Description:** sets the character color for each character to the specified hex code. Use undefined to use a randomly generated color for each character

### <ins>lineColor</ins>
**Name:** lineColor<br>
**Type:** String<br>
**Default:** `undefined`<br>
**Description:** sets the line color for to the specified hex code. Use undefined to use a randomly generated color

### <ins>decoyColor</ins>
**Name:** decoyColor<br>
**Type:** String<br>
**Default:** `undefined`<br>
**Description:** sets the decoy color for to the specified hex code. Use undefined to use the [lineColor](#lineColor)

## captcha function errors
So far, only a text is returned for simple errors. For some errors also nothing or a wrong image is returned. To improve it is on my ToDo list!
