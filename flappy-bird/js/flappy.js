
function startGame() {
    var pseudo = document.getElementById('pseudo').value;
    var beforeGame = document.getElementById("before");
    var game = document.getElementById("game");

        console.log(pseudo);
        beforeGame.style.display = "none";
        game.style.display = "block";
        
}

function jump(){
    var cursor = document.getElementById('cursor');
    var i = 1.3;

    window.addEventListener("keypress", function(evt) {
        let y = -65;
        // Le keyCode 32 correspond à la bare espace
        if(evt.keyCode === 32){
            console.log('Jumped!');
            let pos = cursor.style.position;
            cursor.animate([
                // keyframes
                { transform: 'translateY('+ pos +'px)' }, 
                { transform: 'translateY('+ y * i + 'px)' },
                { transform: 'translateY(150px)' }
              ], { 
                // timing options
                duration:900,
                iterations: 1  
              });
          
              console.log(y);
              console.log(i);
              i = i * 2;
              setTimeout(function(){ i = 1.3; }, 800);
            }
        }, false);
    }

let pipe = 0;

function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
