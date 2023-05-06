

<template>
  <main
  class="d-flex flex-column align-items-center"
  @keydown.up="move('up', movementAvailable)" 
  @keydown.left="move('left', movementAvailable)" 
  @keydown.right="move('right', movementAvailable)" 
  @keydown.down="move('down', movementAvailable)" 
  >
    <h1 class="title">The Noodle of Danger</h1>

    <button @click="startGame" class="btn btn-primary mb-2">Play</button>
    <div id="boardContainer" class="d-flex flex-column align-items-center" style="width: 300px" v-if="board.length > 0">
      
     
      <div class="d-flex mb-5" style="min-height: 40px">
        <img v-for="coin in coins" :key="coin" src="/projectAssets/Images/coin.png" style="width: 30px; height: 30px;" />
        <img v-if="treasure && coins !== 3" src="/projectAssets/Images/chest_empty_open.png" style="width: 30px; height: 30px;" alt="">
        <img v-if="treasure && coins == 3" src="/projectAssets/Images/chest_full_open.png" style="width: 30px; height: 30px;" alt="">
      </div>

      <table>
        <tbody>
          <tr v-for="(row, i) in board" :key="i">
            <td v-for="(space, j) in row" :key="i * 10 + j" :class="[
              ((i + j % 2) == 0)?'dirt1':'dirt2',
              ((coin1X == j && coin1Y == i) || (coin2X == j && coin2Y == i) || (coin3X == j && coin3Y == i))?'coin':'',
               ( treasureX == j && treasureY === i && coins >= 3) && !treasure?'treasure':'',
               
             ]">
              <span v-if="playerX !== j || playerY !== i" >{{space}}</span>
              <i class="fa-solid fa-dragon" id="hero" v-else></i>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="controls" v-if="gameStarted && !win && !loss" class="d-flex w-100 mt-5 flex-column align-items-center justify-content-center">
        <div class="row w-100 px-5">
          <div class="col-4"></div>
          <button v-if="evaluateMovement('up', movementAvailable)" @click="move('up', movementAvailable)" class="col-4 btn btn-primary"><i class="fa-solid fa-arrow-up"></i></button><div class="col-4" v-else></div>
          <div class="col-4"></div>
        </div>
        <div class="row w-100 px-5">
          <button v-if="evaluateMovement('left', movementAvailable)" @click="move('left', movementAvailable)"  class="col-4 btn btn-primary"><i class="fa-solid fa-arrow-left"></i></button><div class="col-4" v-else></div>
          <div class="col-4  d-flex justify-content-center"><h4 class="fw-bold fs-3"> {{movementAvailable}}</h4></div>
          <button v-if="evaluateMovement('right', movementAvailable)" @click="move('right', movementAvailable)"  class="col-4 btn btn-primary"><i class="fa-solid fa-arrow-right"></i></button><div class="col-4" v-else></div>
        </div>
        <div class="row w-100 px-5">
          <div class="col-4"></div>
          <button v-if="evaluateMovement('down', movementAvailable)" @click="move('down', movementAvailable)" class="col-4 btn btn-primary"><i class="fa-solid fa-arrow-down"></i></button><div class="col-4" v-else></div>
          <div class="col-4"></div>
        </div>
      </div>
      <div v-else-if="win" class="d-flex flex-column align-items-center">
        <h3 >You Win!</h3>
        <img v-if="treasure && coins == 3" src="/projectAssets/Images/chest_full_open.png" style="width: 30px; height: 30px;" alt="">
        <p>Moves: {{moves}}</p>
        <button class="btn btn-primary"  @click="startGame">Play Again?</button>
      </div>
      
      
      <h1 v-else-if="loss || playerMovement < 1">You Lose!</h1>
    </div>  
  </main>
  
</template>

<script >
import pathfinder from '../../pathfinder'
export default {

  name: 'Board',
  data() {
    return {
      board: [],
      gameStarted: false,
      playerX: 0,
      playerY: 0,
      treasureX: 0,
      treasureY: 0,
      movementAvailable: 0,
      coin1X: 0,
      coin1Y: 0,
      coin2X: 0,
      coin2Y: 0,
      coin3X: 0,
      coin3Y: 0,
      win: false,
      loss: false,
      mode: 0,
      modes: ['Treasure Hunt', 'Escape', 'Endless'],
      coins: 0,
      treasure: false,
      moves: 0,
    }

  },
  methods:{
    startGame() {
      this.gameStarted = false
      this.board = [];
      this.playerX = 0
      this.playerY = 0;
      this.coin1X = 0 
      this.coin1Y = 0
      this.coin2X = 0
      this.coin2Y = 0
      this.coin3X = 0
      this.coin3Y = 0
      this.coins = 0
      this.treasure = false;
      this.moves = 0;
      this.win = false
      this.loss = false
      this.generateBoard();
      this.placePlayer();
      
      // this.generatePathAlgorithm();
      this.gameStarted = true;
      this.tryCount = 0
    },
    generateBoard() {
      
      const newBoard = pathfinder(
        [this.treasureX, this.treasureY],
        [this.coin1X, this.coin1Y],
        [this.coin2X, this.coin2Y],
        [this.coin2X, this.coin2Y],
        [this.playerX, this.playerY],
      )
      
      console.table(newBoard)
      this.board = newBoard
    },
    move(direction, amount) {
      if (this.evaluateMovement(direction, amount)) {
        switch(direction) {
        case 'up' :
          this.playerY -= amount 
          break
        case 'left' :
          this.playerX -= amount 
          break
        case 'right' :
          this.playerX += amount;
          break
        case 'down' :
          this.playerY += amount;      }
        const currentMovement = this.board[this.playerY][this.playerX]
        this.movementAvailable = currentMovement
        this.board[this.playerY][this.playerX] = null 
        if (this.playerX == this.treasureX && this.playerY == this.treasureY) {
          this.treasure = true
          
        }
        if ((this.playerX == this.coin1X && this.playerY == this.coin1Y)) {
          this.coin1X = null;
          this.coin1Y == null;
          this.coins++
        }
        if  (this.playerX == this.coin2X && this.playerY == this.coin2Y) {
          this.coin2X = null;
          this.coin2Y == null;
          this.coins++
        }
        if (this.playerX == this.coin3X && this.playerY == this.coin3Y) {
          this.coin3X = null;
          this.coin3Y == null;
          this.coins++
          }
        if (this.coins == 3 && this.treasure == true) {
          this.win = true
        }
        if (this.playerMovement == null) {
          this.lose = true
        }
        this.moves++
      }
    },
    evaluateMovement(direction, amount, x, y) {
      // console.log(x, y)
      let good = true;
      let pX = x || this.playerX;
      let pY = y || this.playerY;
      switch(direction) {
        case 'up' :
          good = pY - amount >= 0
          //  && (this.board[pY - amount][pX] >= 0)
           ; 
          break
        case 'left' :
          good = pX - amount >= 0
          //  && (this.board[pX-amount][pY] >= 0)
            ; 
          break
        case 'right' :
          good = pX + amount < 10
          //  && (this.board[pX + amount][pY] >= 0)
           ;
          break
        case 'down' :
          good =  pY + amount < 10
          //  && (this.board[pY+amount][pX] >= 0)
           ;
      }
      return good
    },
    evlauatePlacement(dir, distance, x, y) {
      let good = false
      switch(dir) {
        case 'up': 
          if (y - distance >= 0) {
            good = true
          }
          break;
        case 'down':
          if (y + distance < 10) {
            good = true
          }
          break;
        case 'left':
          if (x - distance >= 0) {
            good = true
          }
          break;
        case 'right':
          if (x + distance < 10) {
            good = true
          }
          break;
      }
      return good
    },
    placePlayer() {
      // this.treasureX = this.rand(10, 0) 
      // this.treasureY = this.rand(10, 0)  
      this.playerX = this.rand(10, 0)
      this.playerY = this.rand(10, 0);
      
      const currentMovement = this.board[this.playerY][this.playerX]
      this.movementAvailable = currentMovement
      this.board[this.playerY][this.playerX] = null
      this.setBoardPieces()
    },
    rand(max, min) {
      return Math.floor(Math.random() * max) + min
    },

    setBoardPieces() {
      switch(this.mode) {
        case 0: 
          this.treasureX = this.rand(10, 0);
          this.treasureY = this.rand(10, 0);
          this.coin1X = this.rand(10, 0);
          this.coin1Y = this.rand(10, 0);
          this.coin2X = this.rand(10, 0);
          this.coin2Y = this.rand(10, 0);
          this.coin3X = this.rand(10, 0);
          this.coin3Y = this.rand(10, 0);

          break;  
      }
      console.log(this.treasureX, this.treasureY)
      if ((this.playerX == this.treasureX && this.playerY == this.treasureY) ||
          (this.playerX == this.coin1X && this.playerY == this.coin1Y) || 
          (this.playerX == this.coin2X && this.playerY == this.coin2Y) || 
          (this.playerX == this.coin3X && this.playerY == this.coin3Y) ) {
        this.setBoardPieces()
      } else {
        this.gameStarted = true
        // this.generatePathAlgorithm()
      }
    },
    tryPath(x, y, pX, pY) {
      let dirArr = ['up', 'down', 'left', 'right']
      let dir = dirArr[this.rand(4, 0)]
      let num = this.rand(5, 1)
      
      if (this.playerY == x && this.playerY == y) {
        return
      } else {
        if (this.evaluateMovement(dir, num, x, y)) {
          console.log(x, y)
          this.board[x][y] = num;
          if (dir == 'up') {
            this.tryPath(x, y+num, x, y)
          } else if (dir == 'down') {
            this.tryPath(x, y-num, x, y)
          } else if (dir == 'left') {
            this.tryPath(x+num, y, x, y)
          } else {
            this.tryPath(x-num, y, x, y)
          }
          console.table(this.board)
        } else {
          
          this.tryCount ++;
          if (this.tryCount > 10000000) {
            console.log('MAX REACHED')
            return 
          } else {
            this.tryPath(pX, pY, this.rand(10, 0), this.rand(10, 0))
          }
        }
      }
      
      
    },

    generatePathAlgorithm() {
      this.tryPath(this.treasureX, this.treasureY,this.treasure, this.treasureY)
    }
  },
 
}
</script>

<style scoped>
table {
  border: 4px solid black;

}

td {
  width: 30px;
  height: 30px;
  text-align: center;
  color: white;
  font-weight: 700;
}
.dirt1{
  background-image: url(/projectAssets/Images/Dirt1.png);
}
.dirt2 {

  background-image: url(/projectAssets/Images/Dirt2.png);
}
.coin {
  background-image:  url(/projectAssets/Images/coin.png), url(/projectAssets/Images/Dirt1.png) !important;
  background-repeat: no-repeat;
  background-size: 30px 30px;
  color: darkblue
}
.treasure {
  background-image:  url(/projectAssets/Images/chest_closed.png), url(/projectAssets/Images/Dirt1.png) !important;
  background-repeat: no-repeat;
  background-size: 30px 30px;

}

.bigCoin {
  background-color: gold !important;
  padding: 3px 8px;
  
  border-radius: 50%;
  padding: 20px; 
}

#hero {
  color: green
}

</style>
