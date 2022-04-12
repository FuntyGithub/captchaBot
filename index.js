const Discord = require('discord.js');
const { createCanvas } = require('canvas')
const client = new Discord.Client({intents: 4609});

client.login("YOUR TOKEN HERE"); // your client token

client.on('messageCreate', async(message) => {
    if(message.author.bot) return; //Don´t answer to bots!

    //example command
    if(message.content.startsWith("!captcha")){

        //get captcha data
        let captchaArray = await captcha({length: 5, randomBgColor: '#000000', bgColorDiff: {R: 20, G: 20, B: 20}, decoys: {amount : 40, sizeMin: 10, sizeMax: 25}});// Readm the README.md for more info
        let solution = captchaArray[0]; //the solution is the first element of the array
        let image = captchaArray[1];    //the captcha image is the second element of the array

        //send captcha in the channel
        message.channel.send({files: [image]});
        message.channel.send("||``" + solution + "``||");
    }

})



//Important functions:
async function captcha({length = 5, randomBgColor = "#"+randomInt(0,16777215).toString(16), bgColorDiff = {R : 20, G : 20, B : 20}, decoys = {amount : 40, sizeMin: 10, sizeMax: 25}, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'}){

    var solution = "";
    for (var i = 0; i < length; i++ ) {
        solution += characters.charAt(randomInt(0, characters.length - 1));
    }
 
    //create canvas
    const canvas = createCanvas(600, 400);
    const captcha = canvas.getContext('2d')

    //Background
    captcha.fillStyle = randomBgColor; 
    captcha.fillRect(0, 0, canvas.width, canvas.height);
    var width = canvas.width/length;

    //get random colors for the lines
    do {
        lineColor = await randomColor(randomBgColor, captcha.fillStyle, bgColorDiff);
    } while (lineColor == captcha.fillStyle);
    if(lineColor != captcha.fillStyle) captcha.strokeStyle = lineColor
    else return "ERROR: could not generate line color";

    //start drawing lines
    captcha.lineWidth = randomInt(2,4);
    captcha.beginPath();
    captcha.moveTo(0, 0);

    //write the characters
    for (var i = 0; i < length; i++ ) {

        let char = solution.charAt(i);
        fontsize = randomInt(110-(length*9)-20,110-(length*9));
        var buffer = fontsize*0.7;
        captcha.font = fontsize+"px Arial";
        charColor = captcha.fillStyle;
        captcha.textAlign = 'center';
        
        //get random colors for the characters
        do {
            charColor = await randomColor(randomBgColor, captcha.fillStyle, bgColorDiff);
        } while (charColor == captcha.fillStyle);
        if(charColor != captcha.fillStyle) captcha.fillStyle = charColor
        else return "ERROR: could not generate char color";
        
        //add a random rotation to the characters
        let rotation = randomInt(-3,3);
        captcha.rotate(rotation*Math.PI/180);

        //get random positions for the characters
        var xMin = width*i
        var xMax = width*i+width-(2*buffer)
        if(i == 0) xMin = buffer;
        var x = randomInt(xMin,xMax);

        var yMin = buffer;
        var yMax = canvas.height-buffer*2;
        var y = randomInt(yMin,yMax);

        captcha.fillText(char,x, y); //draw the characters

        captcha.rotate(-rotation*Math.PI/180); //rotate back
        
        captcha.lineTo(x, y); //draw the lines
        
    }
    captcha.stroke();

    //add decoys
    for(var i = 0; i < decoys.amount; i++){
        fontsize = randomInt(decoys.sizeMin,decoys.sizeMax);
        var buffer = fontsize*0.7;
        captcha.font = fontsize+"px Arial";
        captcha.fillStyle = lineColor

        //get decoy characters and rotate them
        let char = characters.charAt(randomInt(0, characters.length - 1));
        let rotation = randomInt(-3,3);
        captcha.rotate(rotation*Math.PI/180);
        captcha.textAlign = 'center';

        //get random positions for the decoy characters
        var width = canvas.width/decoys.amount;
        var xMin = width*i
        var xMax = width*i+width-(2*buffer)
        if(i == 0) xMin = buffer;
        var x = randomInt(xMin,xMax);

        var yMin = buffer;
        var yMax = canvas.height-buffer*2;
        var y = randomInt(yMin,yMax);

        captcha.fillText(char,x, y);   //draw the decoy characters
        captcha.rotate(-rotation*Math.PI/180); //rotate back
    }
    
    captcha.textAlign = 'end';
    captcha.font = "15px Arial";
    captcha.fillText("made by Funty", 110, 25); //add credits
    let image = new Discord.MessageAttachment(canvas.toBuffer(), 'captcha.png'); //create the image
    let returnValue = [solution, image]; //return the solution and the image
    return returnValue;
}

//function to get a random color
function randomColor(randomBgColor, bgColor, bgColorDiff) {
    do {
        charColor = "#"+randomInt(0,16777215).toString(16);

        charColorR = parseInt(charColor.substring(1,3),16);
        charColorG = parseInt(charColor.substring(3,5),16);
        charColorB = parseInt(charColor.substring(5,7),16);

        randomBgColorR = parseInt(randomBgColor.substring(1,3),16);
        randomBgColorG = parseInt(randomBgColor.substring(3,5),16);
        randomBgColorB = parseInt(randomBgColor.substring(5,7),16);

        if(bgColorDiff.R > Math.abs(randomBgColorR - charColorR) || bgColorDiff.G > Math.abs(randomBgColorG - charColorG) || bgColorDiff.B > Math.abs(randomBgColorB - charColorB)){
            charColor = bgColor;
        }

    } while (charColor == bgColor);
    return charColor;
}

//function to get a random integer between min and max
function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}