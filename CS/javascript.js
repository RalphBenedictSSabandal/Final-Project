var x=0, a=0, b=0, c=0, d=0, e=0;

function start(){
    document.getElementById("item1").style.display="block";
    document.getElementById("start").style.display="none";
}

function item1(){
    var y = document.getElementById("ans1").value;
    switch(y){
        case 'A':
            x+=1;
            a+=1;
            document.getElementById("item2").style.display="block";
            document.getElementById("item1").style.display="none";
            document.getElementById("but1").style.display="none";
            document.getElementById("ans1").style.display="none";
            break;
        case 'B':
            document.getElementById("item2").style.display="block";
            document.getElementById("item1").style.display="none";
            document.getElementById("but1").style.display="none";
            document.getElementById("ans1").style.display="none";
            break;
        case 'C':
            document.getElementById("item2").style.display="block";
            document.getElementById("item1").style.display="none";
            document.getElementById("but1").style.display="none";
            document.getElementById("ans1").style.display="none";
            break;
        case 'D':
            document.getElementById("item2").style.display="block";
            document.getElementById("item1").style.display="none";
            document.getElementById("but1").style.display="none";
            document.getElementById("ans1").style.display="none";
            break;
    }
}

function item2(){
    var y = document.getElementById("ans2").value;
    switch(y){
        case 'A':
            document.getElementById("item3").style.display="block";
            document.getElementById("item2").style.display="none";
            document.getElementById("but2").style.display="none";
            document.getElementById("ans2").style.display="none";
            document.getElementById("back1").style.display="none";
            break;
        case 'B':
            document.getElementById("item3").style.display="block";
            document.getElementById("item2").style.display="none";
            document.getElementById("but2").style.display="none";
            document.getElementById("ans2").style.display="none";
            document.getElementById("back1").style.display="none";
            break;
        case 'C':
            x+=1;
            b+=1;
            document.getElementById("item3").style.display="block";
            document.getElementById("item2").style.display="none";
            document.getElementById("but2").style.display="none";
            document.getElementById("ans2").style.display="none";
            document.getElementById("back1").style.display="none";
            break;
        case 'D':
            document.getElementById("item3").style.display="block";
            document.getElementById("item2").style.display="none";
            document.getElementById("but2").style.display="none";
            document.getElementById("ans2").style.display="none";
            document.getElementById("back1").style.display="none";
            break;
    }
}

function back1(a){
    if(x==a){
        x-=1;
    }
    document.getElementById("item1").style.display="block";
    document.getElementById("item2").style.display="none";
    document.getElementById("but1").style.display="block";
    document.getElementById("ans1").style.display="block";
}

function item3(){
    var y = document.getElementById("ans3").value;
    switch(y){
        case 'A':
            document.getElementById("item4").style.display="block";
            document.getElementById("item3").style.display="none";
            document.getElementById("but3").style.display="none";
            document.getElementById("ans3").style.display="none";
            document.getElementById("back2").style.display="none";
            break;
        case 'B':
            document.getElementById("item4").style.display="block";
            document.getElementById("item3").style.display="none";
            document.getElementById("but3").style.display="none";
            document.getElementById("ans3").style.display="none";
            document.getElementById("back2").style.display="none";
            break;
        case 'C':
            document.getElementById("item4").style.display="block";
            document.getElementById("item3").style.display="none";
            document.getElementById("but3").style.display="none";
            document.getElementById("ans3").style.display="none";
            document.getElementById("back2").style.display="none";
            break;
        case 'D':
            x+=1;
            c+=1;
            document.getElementById("item4").style.display="block";
            document.getElementById("item3").style.display="none";
            document.getElementById("but3").style.display="none";
            document.getElementById("ans3").style.display="none";
            document.getElementById("back2").style.display="none";
            break;
    }
}

function back2(a){
    if(x==a){
        x-=1;
    }
    document.getElementById("item2").style.display="block";
    document.getElementById("item3").style.display="none";
    document.getElementById("but2").style.display="block";
    document.getElementById("ans2").style.display="block";
    document.getElementById("back1").style.display="block";
}

function item4(){
    var y = document.getElementById("ans4").value;
    switch(y){
        case 'A':
            document.getElementById("item5").style.display="block";
            document.getElementById("item4").style.display="none";
            document.getElementById("but4").style.display="none";
            document.getElementById("ans4").style.display="none";
            document.getElementById("back3").style.display="none";
            break;
        case 'B':
            document.getElementById("item5").style.display="block";
            document.getElementById("item4").style.display="none";
            document.getElementById("but4").style.display="none";
            document.getElementById("ans4").style.display="none";
            document.getElementById("back3").style.display="none";
            break;
        case 'C':
            document.getElementById("item5").style.display="block";
            document.getElementById("item4").style.display="none";
            document.getElementById("but4").style.display="none";
            document.getElementById("ans4").style.display="none";
            document.getElementById("back3").style.display="none";
            break;
        case 'D':
            x+=1;
            d+=1;
            document.getElementById("item5").style.display="block";
            document.getElementById("item4").style.display="none";
            document.getElementById("but4").style.display="none";
            document.getElementById("ans4").style.display="none";
            document.getElementById("back3").style.display="none";
            break;
    }
}

function back3(a){
    if(x==a){
        x-=1;
    }
    document.getElementById("item3").style.display="block";
    document.getElementById("item4").style.display="none";
    document.getElementById("but3").style.display="block";
    document.getElementById("ans3").style.display="block";
    document.getElementById("back2").style.display="block";
}

function item5(){
    var y = document.getElementById("ans5").value;
    switch(y){
        case 'A':
            document.getElementById("item5").style.display="none";
            document.getElementById("but5").style.display="none";
            document.getElementById("ans5").style.display="none";
            document.getElementById("back4").style.display="none";
            break;
        case 'B':
            x+=1;
            e+=1;
            document.getElementById("item5").style.display="none";
            document.getElementById("but5").style.display="none";
            document.getElementById("ans5").style.display="none";
            document.getElementById("back4").style.display="none";
            break;
        case 'C':
            document.getElementById("item5").style.display="none";
            document.getElementById("but5").style.display="none";
            document.getElementById("ans5").style.display="none";
            document.getElementById("back4").style.display="none";
            break;
        case 'D':
            document.getElementById("item5").style.display="none";
            document.getElementById("but5").style.display="none";
            document.getElementById("ans5").style.display="none";
            document.getElementById("back4").style.display="none";
            break;
    }
    final(a, b, c, d, e);
    result.innerHTML="You scored " + x + " out of 5. " + evaluation(x);
    document.getElementById("restart").style.display="block";
}

function back4(a){
    if(x==a){
        x-=1;
    }
    document.getElementById("item4").style.display="block";
    document.getElementById("item5").style.display="none";
    document.getElementById("but4").style.display="block";
    document.getElementById("ans4").style.display="block";
    document.getElementById("back3").style.display="block";
}

function evaluation(a){
    if (a==5){
        return "That's a perfect score! You really know your waste management!";
    }
    else if(a>2){
        return "Just a little more and you'll get the perfect score!";
    }
    else if(a>0){
        return "Your waste management could use a little work. Just keep at it and you'll improve!";
    }
    else{
        return "Well. Everyone starts somewhere right? Try learning more about waste management online!";
    }
}

function final(a, b, c, d, e){
    document.getElementById("item1").style.display="block";
    document.getElementById("item2").style.display="block";
    document.getElementById("item3").style.display="block";
    document.getElementById("item4").style.display="block";
    document.getElementById("item5").style.display="block";
    
    if(a==1){
        document.getElementById("item1").style.color="green";
    }
    else{
        document.getElementById("item1").style.color="red";
    }

    if(b==1){
        document.getElementById("item2").style.color="green";
    }
    else{
        document.getElementById("item2").style.color="red";
    }

    if(c==1){
        document.getElementById("item3").style.color="green";
    }
    else{
        document.getElementById("item3").style.color="red";
    }

    if(d==1){
        document.getElementById("item4").style.color="green";
    }
    else{
        document.getElementById("item4").style.color="red";
    }

    if(e==1){
        document.getElementById("item5").style.color="green";
    }
    else{
        document.getElementById("item5").style.color="red";
    }
}

