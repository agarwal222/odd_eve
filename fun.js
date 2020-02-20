var choice,c,wl_f,p1s=-1,p2s=-1,ran,amp=0,ap,blc=1,win_st=0;
var clsn = document.getElementsByClassName("num");
var stat = document.getElementById('my_ch');

var abc = function(a){
    c = parseInt(a, 10);
 }

function enb_num(){
    for (i = 0; i < clsn.length; i++){
        clsn[i].disabled = false;
    }
}

function dsb_num(){
    for (i = 0; i < clsn.length; i++){
        clsn[i].disabled = true;
    }
}
 
document.querySelector('.btnn').addEventListener("click", function(){
    document.querySelector('.pnl-1').classList.toggle("fader");
    setTimeout(() => {
        document.querySelector('.pnl-1').style.display = 'none';
        document.querySelector('.pnl-2').style.display = 'grid';
    }, 500);
    document.querySelector('.pnl-2').classList.toggle("inner");
});

document.getElementById('btnn_o').addEventListener("click", () => {
    choice = document.getElementById('btnn_o').value;
    console.log(choice);
    play(choice);
});

document.getElementById('btnn_e').addEventListener("click", () => {
    choice = document.getElementById('btnn_e').value;
    console.log(choice);
    play(choice);
});

document.getElementById('bat').addEventListener("click", () => {
    document.querySelector('.win_ch').style.display = "none";
    document.querySelector('.won').style.display = "none";
    var pl_c = 0;
    enb_num();
    play_cir(pl_c);
});

document.getElementById('boll').addEventListener("click", () => {
    document.querySelector('.win_ch').style.display = "none";
    document.querySelector('.won').style.display = "none";
    var pl_c = 1;
    enb_num();
    play_cir(pl_c);
});

function play (ch){
    document.querySelector('.pnl-2').classList.toggle("fader");
    setTimeout(() => {
        document.querySelector('.pnl-2').style.display = 'none';
        document.querySelector('.pnl-3').style.display = 'grid';
    }, 500);
    document.querySelector('.pnl-3').classList.toggle("inner");
    document.getElementById('my_ch').innerHTML = "YOU CHOOSE "+ ch;
}

for (i = 0; i < clsn.length; i++){
    clsn[i].addEventListener("click", odd_eve);
}

function odd_eve(){
    var x = c;
    document.getElementById("scrp").innerHTML = x;
    var y = Math.floor(Math.random() * 6) +1;
    document.getElementById("scrc").innerHTML = y;
    console.log(y);
    var z = y + x;
    console.log(z);
    var sts = document.getElementById("won");
    if (z%2 === 0 && choice === "EVEN") {
        z = 0;
        wl_f = 1;
        sts.innerHTML = "YOU WON";
        stp_2();
        document.querySelector('.win_ch').style.display = "block";
    }else if (z%2 === 0 && choice === "ODD") {
        z = 0;
        wl_f = 0;
        sts.innerHTML = "YOU LOST";
        stp_2();
    } else if (z%2 !== 0 && choice === "ODD") {
        z = 0;
        wl_f = 1;
        sts.innerHTML = "YOU WON";
        stp_2();
        document.querySelector('.win_ch').style.display = "block";
    } else {
        z = 0;
        wl_f = 0;
        sts.innerHTML = "YOU LOST";
        stp_2();
    }
}

function stp_2(){
    for (i = 0; i < clsn.length; i++){
        if(wl_f == 1){
            clsn[i].disabled = true;
            clsn[i].removeEventListener("click", odd_eve);
            clsn[i].addEventListener("click", game);
        }else{
            clsn[i].removeEventListener("click", odd_eve);
            clsn[i].addEventListener("click", game);
        }
    }
    document.querySelector('.win_ch').classList.toggle("inner");
    if (wl_f == 0) {
        var pc_c = Math.floor(Math.random()*2);
        console.log(pc_c);
        play_cir(pc_c);
        document.querySelector('.win_ch').style.display = "none";
        document.querySelector('.won').style.display = "none";
    }
}

function play_cir(sl){
    if (wl_f == 0) {
        if (sl == 0) {
            stat.innerHTML = "NOW-> P.C: BAT";
            ap = 0;
            c = -1;
            game();
        } else {
            stat.innerHTML = "NOW-> P.C: BOLL";
            ap = 1;
            c = -1;
            game();
        }
    }else{
        if (sl == 0) {
            stat.innerHTML = "NOW-> YOU: BAT";
            ap = 1;
            c = -1;
            game();
        } else {
            stat.innerHTML = "NOW-> YOU: BOLL";
            ap = 0;
            c = -1;
            game();
        }
    }
}

// ap 0 = pc 
// ap 1 = you

function game(){
    if (amp < 2) {
        if (ap == 1 && win_st == 0) {
            enb_num();
            if(p2s > -1){
                document.getElementById("scrc").innerHTML = p2s;
            }else if(p2s == -1){
                document.getElementById("scrc").innerHTML = "?";
            }
            if (blc == 1) {
                ran = 0;
                p1s = 0;
                document.getElementById("scrp").innerHTML = "0";
                //document.getElementById('won').innerHTML = c +" / "+ ran;
                //document.getElementById('won').style.display = "block";
            }else{
                p1s += c;
                document.getElementById("scrp").innerHTML = p1s;
                ran = Math.floor(Math.random() * 6) +1;
                document.getElementById('won').innerHTML = c +" / "+ ran;
                document.getElementById('won').style.display = "block";
            }
            if (c == ran) {
                document.getElementById("won").innerHTML = "OUT";
                stat.innerHTML = "NOW-> P.C: BAT";
                p1s -=c;
                document.getElementById("scrp").innerHTML = p1s;
                dsb_num();
                setTimeout(() => {
                    amp++;
                    ap = 0;
                    ran = 0;
                    c = -1;
                    blc = 1;
                    game();
                }, 2000);
            }
            blc++;
        }else if (ap == 0 && win_st == 0) {
            enb_num();
            if (blc == 1) {
                ran = 0;
                p2s = 0;
                document.getElementById("scrc").innerHTML = "0";
            }else{
                ran = Math.floor(Math.random() * 6) +1;
                p2s += ran;
                document.getElementById("scrc").innerHTML = p2s;
                document.getElementById('won').innerHTML = c +" / "+ ran;
                document.getElementById('won').style.display = "block";
            }
            if(p1s > -1){
                document.getElementById("scrp").innerHTML = p1s;
            }else if(p1s == -1){
                document.getElementById("scrp").innerHTML = "?";
            }
            if (c == ran) {
                document.getElementById("won").innerHTML = "OUT";
                p2s -= ran;
                stat.innerHTML = "NOW-> YOU: BAT";
                document.getElementById("scrc").innerHTML = p2s;
                dsb_num();
                setTimeout(() =>{
                    amp++;
                    ap = 1;
                    c = -1;
                    blc = 1;
                    game();
                }, 2000);  
            }
            blc++;
        }
        win_ch();
    }else{
        if (p1s > p2s) {
            document.getElementById('won').innerHTML = "YOU WON";
            dsb_num();
        }else if (p2s > p1s) {
            document.getElementById('won').innerHTML = "PC WON";
            dsb_num();
        }
    }
}

function win_ch(){
    /*if (p1s > p2s && p1s != -1 && p2s != -1) {
        document.getElementById('won').innerHTML = "YOU WON";
        win_st = 1;
        dsb_num();
    }else if (p2s > p1s && p1s != -1 && p2s != -1) {
        document.getElementById('won').innerHTML = "PC WON";
        win_st = 1;
        dsb_num();
    }*/

    if (amp == 1) {
        if (ap == 0) {
            if (p2s > p1s) {
                document.getElementById('won').innerHTML = "PC WON";
                win_st = 1;
                dsb_num();
            }
        }else if(ap == 1){
            if (p1s > p2s) {
                document.getElementById('won').innerHTML = "YOU WON";
                win_st = 1;
                dsb_num();
            }
        }
    }
}
