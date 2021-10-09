const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
const ground = new Image();
ground.src = "img/field.png"

const foodImg = new Image();
foodImg.src = "img/food1.png";
let box = 32;
let score = 0;
let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box,
}

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box,
}
document.addEventListener("keydown", direction);
let dir;

function direction(event) {
    if (event.keyCode == 37 && dir != "right") {
        dir = "left"
    } else if (event.keyCode == 38 && dir != "down") {
        dir = "up"
    } else if (event.keyCode == 39 && dir != "left") {
        dir = "right"
    } else if (event.keyCode == 40 && dir != "up") {
        dir = "down"
    }
}

let snakeX = snake[0].x;
let snakeY = snake[0].y;


function draw() {
    ctx.drawImage(ground, 0, 0)
    ctx.drawImage(foodImg, food.x, food.y,)
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? "red" : "blue"


        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(score, box * 2.5, box * 1.5);
    if (snakeX == food.x && snakeY == food.y) {
        score++
        var foodType = Math.floor((Math.random() * 10 + 1))
        switch (foodType) {
            case 1:
                foodImg.src = "img/food1.png";
                break
            case 2:
                foodImg.src = "img/food2.png";
                break
            case 3:
                foodImg.src = "img/food3.png";
                break
            case 4:
                foodImg.src = "img/food4.png";
                break
            case 5:
                foodImg.src = "img/food5.png";
                break
            case 6:
                foodImg.src = "img/food6.png";
                break
            case 7:
                foodImg.src = "img/food7.png";
                break
            case 8:
                foodImg.src = "img/food8.png";
                break
            case 9:
                foodImg.src = "img/food9.png";
                break
            case 10:
                foodImg.src = "img/food10.png";
                break

        }
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
        }
    } else {
        snake.pop();
    }
    if (snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17) {
        clearInterval(game)
    }


    if (dir == "left") snakeX -= box;
    if (dir == "right") snakeX += box;
    if (dir == "up") snakeY -= box;
    if (dir == "down") snakeY += box;

    function eatTail(head, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (head.x == arr[i].x && head.y == arr[i].y) {
                clearInterval(game)
            }
        }
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    eatTail(newHead, snake)
    snake.unshift(newHead)
}


let game = setInterval(draw, 150)
