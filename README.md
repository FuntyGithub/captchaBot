# Captcha Bot
This bot is a example for using canvas to make captchas.
![](https://cdn.discordapp.com/attachments/679392991533858858/964546316585824346/captcha.png)

Time: [![wakatime](https://wakatime.com/badge/user/6dcad35f-5e14-44f1-8e50-62062cfd7011/project/03effdb2-1415-4f41-8a8c-5463d1abdf40.svg)](https://wakatime.com/@Funty) *yes i'm new to canvas*  
Language: JavaScript/Node.js

### Before you start:
Install the used node modules with `npm i canvas discord.js`

## captcha function arguments:
ALL arguments are optional but they can personalize the result captcha!<br><br>

Example:  
```js
const captcha = await createCaptcha({
  length: 5,
  bgColor: "#00000000",
  bgColorDiff: {R: 20, G: 20, B: 20},
  decoys: {amount: 40, sizeMin: 10, sizeMax: 25},
  randomCharOrder: true,
  characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()",
  width: 600,
  height: 400,
  minCharacterSize: 30,
  maxCharacterSize: 100,
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
  * [width](#width)
  * [height](#height)
  * [minCharacterSize](#minCharacterSize)
  * [maxCharacterSize](#maxCharacterSize)
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

### <ins>width</ins>
**Name:** width<br>
**Type:** Integer<br>
**Default:** `600`<br>
**Description:** sets the minimum size of the canvas in the X direction

### <ins>height</ins>
**Name:** height<br>
**Type:** Integer<br>
**Default:** `400`<br>
**Description:** sets the minimum size of the canvas in the Y direction

### <ins>minCharacterSize</ins>
**Name:** minCharacterSize<br>
**Type:** Integer<br>
**Default:** `30`<br>
**Description:** sets the minimum size of each character. Sometimes if the `length` value is too high the characters can be too small to read

### <ins>maxCharacterSize</ins>
**Name:** maxCharacterSize<br>
**Type:** Integer<br>
**Default:** `undefined`<br>
**Description:** sets the maximum size of each character. Recommended to set if `length` is small.

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

## ToDo:
* maybe a npm module
