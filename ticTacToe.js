// this function checks for the winner
let score = 0;
const gameFunction = ()=>{
    let div1 = document.getElementById('div1_').innerText
    let div2 = document.getElementById('div2_').innerText
    let div3 = document.getElementById('div3_').innerText
    let div4 = document.getElementById('div4_').innerText
    let div5 = document.getElementById('div5_').innerText
    let div6 = document.getElementById('div6_').innerText
    let div7 = document.getElementById('div7_').innerText
    let div8 = document.getElementById('div8_').innerText
    let div9 = document.getElementById('div9_').innerText
    let result = document.getElementById('result_container')

    if(div1==='X' && div2==='X' && div3==='X'){
        result.innerHTML = `<h1>Game over!! X won</h1>`
        score+=1
        //dormant()
    }else if(div4==='X' && div5==='X' && div6==='X'){
        result.innerHTML = `<h1>Game over!! X won</h1>`
        score+=1
        
    }else if(div7==='X' && div8==='X' && div9==='X'){
        result.innerHTML = `<h1>Game over!! X won</h1>`
        score+=1
       
    }
    else if(div1==='O' && div2==='O' && div3==='O'){
        result.innerHTML = `<h1>Game over!! O won</h1>`
        score+=1
        
    }else if(div4==='O' && div5==='O' && div6==='O'){
        result.innerHTML = `<h1>Game over!! O won</h1>`
        score+=1
    }else if(div7==='O' && div8==='O' && div9==='O'){
        result.innerHTML = `<h1>Game over!! O won</h1>`
        score+=1
        
    }else if(div1==='X'&& div5==='X'&& div9==='X'){
        result.innerHTML = `<h1>Game over!! X won</h1>`
        score+=1
        
    }else if(div3==='X'&& div5==='X'&&div7==='X'){
        result.innerHTML = `<h1>Game over!! X won</h1>`
        score+=1
        
    }else if(div1==='O'&& div5==='O'&& div9==='O'){
        result.innerHTML = `<h1>Game over!! O won</h1>`
        score+=1
        
    }else if(div3==='O'&& div5==='O'&&div7==='O'){
        result.innerHTML = `<h1>Game over!! O won</h1>`
        score+=1
        
    }else if(div1==='X'&&div4==='X'&&div7==='X'){
        result.innerHTML = `<h1>Game over!! X won</h1>`
        score+=1
        
    }else if(div2==='X'&& div5==='X'&& div8==='X'){
        result.innerHTML = `<h1>Game over!! X won</h1>`
        score+=1
        
    }else if(div3==='X'&& div6==='X'&& div9==='X'){
        result.innerHTML = `<h1>Game over!! X won</h1>`
        score+=1
        
    }else if(div2==='O'&& div5==='O'&& div8==='O'){
        result.innerHTML = `<h1>Game over!! O won</h1>`
        score+=1
        
    }
}
//count object to keep record of times a 'div' button is clicked 
const count = {
    'div1':1,
    'div2':1,
    'div3':1,
    'div4':1,
    'div5':1,
    'div6':1,
    'div7':1,
    'div8':1,
    'div9':1,
}
//after the game is over the button should remain unclickable or 'dormant'
const dormant=()=>{
    let buttons = document.querySelectorAll('.squares--')
    return buttons.forEach(button=>{
        button.addEventListener('click', function(){
                button.disabled=true
        })
    })
}
// to do
const dormant2=()=>{
    let buttons = document.querySelectorAll('.squares--')
    if(score==1){
        return buttons.forEach(button=>{
            if(count[button.value]>1){
                button.disabled=false
            }else{
                button.disabled=true
            }
        })
    }
}


//if flag is 1 the button value should be x and vice versa
let flag = 1
const Func1=()=>{
    let div1 = document.getElementById('div1_')
    if(count['div1']===1){
        count['div1']++
        if(flag==1){
            div1.innerHTML = `<h1>X</h1>`
            flag=0;
        }else{
            div1.innerHTML=`<h1>O</h1>`
            flag=1
        }
    }else{
        this.onclick=null
    }
}

const Func2=()=>{
    let div2 = document.getElementById('div2_')
    if(count['div2']===1){
        count['div2']++
        if(flag==1){
            div2.innerHTML = `<h1>X</h1>`
            flag=0;
        }else{
            div2.innerHTML=`<h1>O</h1>`
            flag=1
        }
    }else{
        this.onclick=null
    }
}
const Func3=()=>{
    let div3 = document.getElementById('div3_')
    if(count['div3']===1){
        count['div3']++
        if(flag==1){
            div3.innerHTML = `<h1>X</h1>`
            flag=0;
        }else{
            div3.innerHTML=`<h1>O</h1>`
            flag=1
        }
    }else{
        this.onclick=null
    }
}
const Func4=()=>{
    let div4 = document.getElementById('div4_')
    if(count['div4']===1){
        count['div4']++
        if(flag==1){
            div4.innerHTML = `<h1>X</h1>`
            flag=0;
        }else{
            div4.innerHTML=`<h1>O</h1>`
            flag=1
        }
    }else{
        this.onclick=null
    }
}
const Func5=()=>{
    let div5 = document.getElementById('div5_')
    if(count['div5']===1){
        count['div5']++
        if(flag==1){
            div5.innerHTML = `<h1>X</h1>`
            flag=0;
        }else{
            div5.innerHTML=`<h1>O</h1>`
            flag=1
        }
    }else{
        this.onclick=null
    }
}
const Func6=()=>{
    let div6 = document.getElementById('div6_')
    if(count['div6']===1){
        count['div6']++
        if(flag==1){
            div6.innerHTML = `<h1>X</h1>`
            flag=0;
        }else{
            div6.innerHTML=`<h1>O</h1>`
            flag=1
        }
    }else{
        this.onclick=null
    }
}
const Func7=()=>{
    let div7 = document.getElementById('div7_')
    if(count['div7']===1){
        count['div7']++
        if(flag==1){
            div7.innerHTML = `<h1>X</h1>`
            flag=0;
        }else{
            div7.innerHTML=`<h1>O</h1>`
            flag=1
        }
    }else{
        this.onclick=null
    }
}
const Func8=()=>{
    let div8 = document.getElementById('div8_')
    if(count['div8']===1){
        count['div8']++
        if(flag==1){
            div8.innerHTML = `<h1>X</h1>`
            flag=0;
        }else{
            div8.innerHTML=`<h1>O</h1>`
            flag=1
        }
    }else{
        this.onclick=null
    }
}
const Func9=()=>{
    let div9 = document.getElementById('div9_')
    if(count['div9']===1){
        count['div9']++
        if(flag==1){
            div9.innerHTML = `<h1>X</h1>`
            flag=0;
        }else{
            div9.innerHTML=`<h1>O</h1>`
            flag=1
        }
    }else{
        this.onclick=null
    }
}

//reset button resets everything and starts teh game new
const reset=()=>{
    let div1 = document.getElementById('div1_')
    let div2 = document.getElementById('div2_')
    let div3 = document.getElementById('div3_')
    let div4 = document.getElementById('div4_')
    let div5 = document.getElementById('div5_')
    let div6 = document.getElementById('div6_')
    let div7 = document.getElementById('div7_')
    let div8 = document.getElementById('div8_')
    let div9 = document.getElementById('div9_')
    let result = document.getElementById('result_container')

    div1.innerHTML=''
    div2.innerHTML=''
    div3.innerHTML=''
    div4.innerHTML=''
    div5.innerHTML=''
    div6.innerHTML=''
    div7.innerHTML=''
    div8.innerHTML=''
    div9.innerHTML=''
    result.innerHTML=''
    count['div1']=1
    count['div2']=1
    count['div3']=1
    count['div4']=1
    count['div5']=1
    count['div6']=1
    count['div7']=1
    count['div8']=1
    count['div9']=1
    flag=1
    score=0
    let buttons = document.querySelectorAll('.squares--')
    return buttons.forEach(button=>{
        button.addEventListener('click', function(){
            button.disabled=false
        })
    })
}



