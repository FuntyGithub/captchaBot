# Captcha Bot
This bot is a example for using canvas to make captchas. Maybe I make a node module for this functions soon!

Language: JavaScript

### Before you start:
install all used node modules with ``npm i``

## captcha function arguments:
ALL arguments are optional but all arguments can personalize your captcha!    
  
Example:  
``captcha({length = 5, randomBgColor = "#"+randomInt(0,16777215).toString(16), bgColorDiff = {R : 20, G : 20, B : 20}, decoys = {amount : 40, sizeMin: 10, sizeMax: 25}, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'})``

Name  | Description  | Default (value if you don´t give any)
------------- | ------------- | -------------
length  | how many characters the captcha should have | 5
randomBgColor  | Background color of the captcha | it´s generate a random if you don't specify any(could be bad for people with colorblindness)
bgColorDiff  | the minimum difference between R(red), G(green) and B(blue) in the colorcode from the characters | {R : 20, G : 20, B : 20}
decoys  | settings for the decoy characters -> amount = amount of decoys sizeMin/sizeMax = minimum/maximum of the character size | {amount : 40, sizeMin: 10, sizeMax: 25}
characters  | the characters that the image is allowed to include | 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
