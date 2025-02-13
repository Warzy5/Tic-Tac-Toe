const $newGameScreenPickPlayerIcons = document.querySelectorAll(".new-game-screen-pick-player-icon")
const $newGameScreenNewGameCpuPlayer = document.querySelector(".new-game-screen-new-game-buttons__button")
const $newGameScreen = document.querySelector(".new-game-screen")
const $gameScreen = document.querySelector(".game-screen")
const $gameScreenGridCells = document.querySelectorAll(".game-screen-grid__cell")
const $roundImage = document.querySelector(".game-screen-header-icons__oval")

let currentPlayer = "o"

const ovalIcon = `
<svg
            width="40"
            height="40"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="game-screen-header-icons__oval"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.9704 15.8706C31.9704 7.10551 24.8649 0 16.0998 0C7.33476 0 0.229248 7.10551 0.229248 15.8706C0.229248 24.6357 7.33476 31.7412 16.0998 31.7412C24.8649 31.7412 31.9704 24.6357 31.9704 15.8706ZM9.63405 15.8706C9.63405 12.2996 12.5289 9.4048 16.0998 9.4048C19.6708 9.4048 22.5656 12.2996 22.5656 15.8706C22.5656 19.4416 19.6708 22.3364 16.0998 22.3364C12.5289 22.3364 9.63405 19.4416 9.63405 15.8706Z"
            />
          </svg>
`


$newGameScreenPickPlayerIcons.forEach(function($newGameScreenPickPlayerIcon) {
    $newGameScreenPickPlayerIcon.addEventListener("click", function() {   
    for (let i = 0; i < $newGameScreenPickPlayerIcons.length; i++) {
        $newGameScreenPickPlayerIcons[i].classList.remove("new-game-screen-pick-player-icon--selected")
    }

        $newGameScreenPickPlayerIcon.classList.add("new-game-screen-pick-player-icon--selected")
        currentPlayer = $newGameScreenPickPlayerIcon.getAttribute("data-player")

        console.log(currentPlayer)
    })
})

$newGameScreenNewGameCpuPlayer.addEventListener("click", function() {
    $newGameScreen.classList.add("hidden")
    $gameScreen.classList.remove("hidden")
})

$gameScreenGridCells.forEach(function($gameScreenGridCell) {
    $gameScreenGridCell.innerHTML = ""
})


$gameScreenGridCells.forEach(function($gameScreenGridCell) {
    $gameScreenGridCell.addEventListener("click", function() {
        console.log($gameScreenGridCell)
    })
})

$gameScreenGridCells.forEach(function($gameScreenGridCell) {
    $gameScreenGridCell.addEventListener("click", function() {
        $gameScreenGridCell.innerHTML = ovalIcon
    })
})