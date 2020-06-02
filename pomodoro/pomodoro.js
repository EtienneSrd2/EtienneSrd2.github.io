
let m = 29;    /* minutes*/
let s = 59;    /* secondes*/

let pauses = false;  /* pause selector */




function timer() {


    if (pauses == false) {
        document.getElementById('min').innerHTML = m;
        document.getElementById('sec').innerHTML = s;


        setTimeout(sec, 1000);
        setTimeout(timer, 1000);

    }

    pauses = false;

}


function pause() {



    if (pauses = true || document.getElementById('btn2').addEventListener('click', restart())) {


        console.log(pauses);

    }


}


function sec() {

    // console.log(s);
    s--;

    if (s == 0) {

        s = 59;
        m--;
    };

}


function reset() {

    window.location.reload();


}


if (m === 0 || s === 1) {
    alert('temps écoulé');
};
