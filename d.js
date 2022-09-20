const dynamicContent=document.getElementById("dynamic-text");
console.log(dynamicContent)

const phrases=["Software Engineer...","Student...","Introvert..."]
let phraseIndex=0;
let letterindex=0;
const typing_speed=100;
const erasing_speed=100;
function printLetters(phrases){
    // for(let index=0; index<phrases.length;index++){
    //     console.log(phrases.charAt(index));
    // }
    if(letterindex==phrases.length){
        clearletters()
    }
    else if (letterindex<phrases.length){
    dynamicContent.textContent+=phrases.charAt(letterindex);
    letterindex+=1;
    setTimeout(function(){
        printLetters(phrases)
    },typing_speed)
    }
}
function clearletters(){
    if (letterindex==-1){
        phraseIndex=(phraseIndex+1)%phrases.length;
        letterindex=0;
        printLetters(phrases[phraseIndex])

    }
    else if(letterindex>-1){
        let updatedPhrase="";
        for (let index=0; index<letterindex; index++){
            updatedPhrase+=phrases[phraseIndex].charAt(index);
        }
        console.log(updatedPhrase);
        dynamicContent.textContent=updatedPhrase;
        letterindex-=1;
        setTimeout(clearletters,erasing_speed)
    }
}
printLetters(phrases[phraseIndex])
