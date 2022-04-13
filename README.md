# Captcha Bot
This bot is a example for using canvas to make captchas. Maybe I make a node module for this functions soon!

Time: [![wakatime](https://wakatime.com/badge/user/6dcad35f-5e14-44f1-8e50-62062cfd7011/project/03effdb2-1415-4f41-8a8c-5463d1abdf40.svg)](https://wakatime.com/@Funty) *yes i'm new to canvas*  
Language: JavaScript

### Before you start:
install all used node modules with ``npm i``

## captcha function arguments:
ALL arguments are optional but all arguments can personalize your captcha!    
  
Example:  
``createCaptcha({length: 6, bgColor: '#000000', bgColorDiff: {R: 20, G: 20, B: 20}, decoys: {amount : 40, sizeMin: 10, sizeMax: 25}, randomCharOrder: true, characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()', imageSize: {xMin: 600, xMax: 700, yMin: 400, yMax:500}, characterColor: "#FF0000", lineColor: "#00FF00", decoyColor: "#0000FF"});``

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
**Name:** length  
**Type:** Number  
**Default:** ``5``  
**Description:** how many characters the captcha should have  

### <ins>bgColor</ins>
**Name:** bgColor  
**Type:** String  
**Default:** random (could be bad for people with colorblindness)  
**Description:** Background color of the captcha  

### <ins>bgColorDiff</ins>
**Name:** bgColorDiff  
**Default:** ``{R : 20, G : 20, B : 20}``  

| Sub-Option | Type   | Description                                                                  | Default (value if you don't give any) |
| ---------- | ------ | ---------------------------------------------------------------------------- | ------------------------------------- |
| R          | Number | the minimum difference between R(red) in the colorcode from the characters   | 20                                    |
| G          | Number | the minimum difference between G(green) in the colorcode from the characters | 20                                    |
| B          | Number | the minimum difference between B(blue) in the colorcode from the characters  | 20                                    |

### <ins>decoys</ins>
**Name:** decoys  
**Default:** ``{amount : 40, sizeMin: 10, sizeMax: 25}``  

| Sub-Option | Type   | Description                                             | Default (value if you don't give any) |
| ---------- | ------ | ------------------------------------------------------- | ------------------------------------- |
| amount     | Number | the amount of decoys to add                             | 40                                    |
| sizeMin    | Number | the minimum of the random character size for the decoys | 10                                    |
| sizeMax    | Number | the maximum of the random character size for the decoys | 10                                    |

### <ins>characters</ins>
**Name:** characters  
**Type:** String  
**Default:** ``'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'``   
**Description:** the characters that the image is allowed to include  

### <ins>randomCharOrder</ins>
**Name:** randomCharOrder  
**Type:** Boolean  
**Default:** ``true``  
**Description:** if it should pick random characters out of the provided string. If you want a custom, non-random string, the length should be equal to the string argument lenght  

### <ins>imageSize</ins>
**Name:** imageSize  
**Default:** ``{xMin: 600, xMax: 700, yMin: 400, yMax:500}``  

| Sub-Option | Type   | Description                                                     | Default (value if you don't give any) |
| ---------- | ------ | --------------------------------------------------------------- | ------------------------------------- |
| xMin       | Number | The minimum value for the random image size at the x coordinate | 600                                   |
| xMax       | Number | The maximum value for the random image size at the x coordinate | 700                                   |
| yMin       | Number | The minimum value for the random image size at the y coordinate | 400                                   |
| yMax       | Number | The maximum value for the random image size at the y coordinate | 500                                   |

_if you don't want it to be random, just let minimum and maximum be the same value_

### <ins>characterColor</ins>
**Name:** characterColor  
**Type:** String  
**Default:** ``undefined``  
**Description:** sets the character color for each character to the specified hex code. Use undefined to use a randomly generated color for each character

### <ins>lineColor</ins>
**Name:** lineColor  
**Type:** String  
**Default:** ``undefined``  
**Description:** sets the line color for to the specified hex code. Use undefined to use a randomly generated color  

### <ins>decoyColor</ins>
**Name:** decoyColor  
**Type:** String  
**Default:** ``undefined``  
**Description:** sets the decoy color for to the specified hex code. Use undefined to use the [lineColor](#lineColor)  

## captcha function errors
So far, only a text is returned for simple errors. For some errors also nothing or a wrong image is returned. To improve it is on my ToDo list!
