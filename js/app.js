class Matrix {

    static generateMatrix() {
        const matrixStart = [
            [0,0,0,1,0,0,1,0,0,0],
            [0,5,0,1,0,0,1,1,1,0],
            [0,0,1,1,0,1,0,3,1,0],
            [0,0,0,2,0,1,0,0,0,0],
            [0,0,1,0,0,1,0,0,0,0],
            [0,2,1,0,0,1,3,0,0,0],
            [0,1,1,1,1,1,0,1,0,1],
            [0,0,1,0,1,0,0,1,0,0],
            [0,0,1,3,1,0,0,0,1,0],
            [0,0,0,0,0,0,0,1,0,4]
        ];
        return matrixStart;
    }

    static generateTable() {
        const matrix = this.generateMatrix();
        const table = document.createElement("table");
        for(let i = 0; i < matrix.length; i++) {
           const row = document.createElement("tr");
           for(let j = 0; j < matrix[i].length; j++) {
                const field = document.createElement("td");
                switch(matrix[i][j]) {
                    case 1: 
                        field.classList.add("wall");
                        break
                    case 2: 
                        field.classList.add("boost");
                        field.innerHTML = `<img src="/img/boost.jpg"></img>`;
                        break
                    case 3:
                        field.classList.add("enemy");
                        field.innerHTML = `<img src=/img/enemies.jpg></img>`;
                        break
                    case 4:
                        field.classList.add("goal");
                        field.innerHTML = `<img src=/img/goal.jpg></img>`;
                        break
                    case 5:
                        field.classList.add("player");
                        field.innerHTML = `<img src=/img/r2d2.jpg></img>`;
                        break
                }
                row.appendChild(field);
                table.appendChild(row);
            }
        }
        table.classList.add("board");
        document.body.appendChild(table);
        return matrix
    }
}


class R2D2 {
    //ovde constructor, baterija, pomeranje x i y, ako je baterija 0, nema pomeranja, dole ocitavam.

    constructor() {
        this.x = 1;
        this.y = 1;
        this.battery = "100%"
    }

    static move() {
        const player = `<img src=/img/r2d2.jpg></img>`;
        const matrix = Matrix.generateMatrix();
        // let counterX = 1;
        // let counterY = 1;
        // let currentPosHtml;
        // let newPosHtml;
        document.body.addEventListener("keydown", function(e){
            if (e.keyCode !== 123) {
                e.preventDefault();
            }
            switch(e.keyCode) {
                case 32: 
                    console.log("space pressed");
                    break
                case 37:
                    console.log("left pressed");
                    // counterX--;
                    // console.log(counterX);
                    // matrix[1][counterX] = 5;
                    // matrix[1][counterX + 1] = 0;
                    // currentPosHtml = document.querySelector("table").children[counterY].children[counterX + 1]
                    // currentPosHtml.classList.remove("player");
                    // currentPosHtml.innerHTML = "";
                    // newPosHtml = document.querySelector("table").children[counterY].children[counterX]
                    // newPosHtml.classList.add("player");
                    // newPosHtml.innerHTML = player;
                    break
                case 39:
                    console.log("right pressed");
                    // counterX++;
                    // console.log(counterX);
                    // matrix[counterY][counterX] = 5;
                    // matrix[counterY][counterX + 1] = 0;
                    // currentPosHtml = document.querySelector("table").children[counterY].children[counterX -1]
                    // currentPosHtml.classList.remove("player");
                    // currentPosHtml.innerHTML = "";
                    // newPosHtml = document.querySelector("table").children[counterY].children[counterX]
                    // newPosHtml.classList.add("player");
                    // newPosHtml.innerHTML = player;
                    break
                case 38:
                    console.log("up arrow pressed");
                    break
                case 40: 
                    console.log("down arrow pressed");
                    break
            }
        });
    }
}

class UI {
    static initUI() {
        const startContainer = document.querySelector(".container-start");
        startContainer.style.display = "none";
        Matrix.generateTable();
    }
}


const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", function(){
    UI.initUI();
    R2D2.move();
});

