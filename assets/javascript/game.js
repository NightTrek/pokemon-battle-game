// first we want to define the character class 
var characterArray = [
    {
        "name": "pikachu",
        "type": "electric",
        "HP": "100",
        "energy": "100",
        "imgURL": "https://cdn.bulbagarden.net/upload/thumb/2/28/Spr_6o_025_C.png/165px-Spr_6o_025_C.png",
        "attack": {
            "strong": ["water", "flying"],
            "weak": ["electric", "grass"],
            "No": "ground"
        },
        "defence": {
            "resist": ["electric", "flying"],
            "weak": ["ground"],
            "no": "NA"
        },
        "moves": [
            {
                "name": "static",
                "damage": "20",
                "energy": "15"
            },
            {
                "name": "lightning rod",
                "damage": "40",
                "energy": "50"
            }
        ],
        "playerOption": "true",
        "playerPick": "false"
    },
    {
        "name": "bulbasaur",
        "type": "grass",
        "HP": "130",
        "energy": "100",
        "imgURL": "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/375px-001Bulbasaur.png",
        "attack": {
            "strong": ["water", "ground"],
            "weak": ["fire", "flying", "poison"],
            "No": "NA"
        },
        "defence": {
            "resist": ["ground", "water"],
            "weak": ["fire", "flying", "poison"],
            "no": "NA"
        },
        "moves": [
            {
                "name": "Overgrow",
                "damage": "40",
                "energy": "50"
            },
            {
                "name": "chlorophyl",
                "damage": "0",
                "energy": "-40"
            }
        ],
        "playerOption": "true",
        "playerPick": "false"
    },
    {
        "name": "charmander",
        "type": "fire",
        "HP": "100",
        "energy": "100",
        "imgURL": "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/375px-004Charmander.png",
        "attack": {
            "strong": ["grass", "poison", "flying"],
            "weak": ["water", "ground", "fire"],
            "No": "NA"
        },
        "defence": {
            "resist": ["fire", "grass"],
            "weak": ["ground", "water", "electric"],
            "no": "NA"
        },
        "moves": [
            {
                "name": "blaze",
                "damage": "25",
                "energy": "30"
            },
            {
                "name": "solar power",
                "damage": "10",
                "energy": "-25"
            }
        ],
        "playerOption": "true",
        "playerPick": "false"
    },
    {
        "name": "onix",
        "type": "ground",
        "HP": "100",
        "energy": "100",
        "imgURL": "https://cdn.bulbagarden.net/upload/thumb/9/9a/095Onix.png/375px-095Onix.png",
        "attack": {
            "strong": ["electric", "poison", "fire"],
            "weak": ["grass"],
            "No": "flying"
        },
        "defence": {
            "resist": ["poison", "ground"],
            "weak": ["grass", "water"],
            "no": "electric"
        },
        "moves": [
            {
                "name": "Rock Head",
                "damage": "60",
                "energy": "80"
            },
            {
                "name": "tunnel",
                "damage": "-20",
                "energy": "60"
            }
        ],
        "playerOption": "true",
        "playerPick": "false"
    },
    {
        "name": "blastoise",
        "type": "water",
        "HP": "100",
        "energy": "100",
        "imgURL": "https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/375px-009Blastoise.png",
        "attack": {
            "strong": ["ground", "fire"],
            "weak": ["water", "grass"],
            "No": "NA"
        },
        "defence": {
            "resist": ["fire", "water"],
            "weak": ["grass", "electric"],
            "no": "NA"
        },
        "moves": [
            {
                "name": "torrent",
                "damage": "40",
                "energy": "50"
            },
            {
                "name": "Rain dish",
                "damage": "-20",
                "energy": "75"
            }
        ],
        "playerOption": "true",
        "playerPick": "false"
    },
    {
        "name": "crobat",
        "type": "flying",
        "HP": "100",
        "energy": "100",
        "imgURL": "https://cdn.bulbagarden.net/upload/thumb/1/17/169Crobat.png/375px-169Crobat.png",
        "attack": {
            "strong": ["grass", "poison"],
            "weak": ["electric", "ground"],
            "No": "NA"
        },
        "defence": {
            "resist": ["grass", "poison"],
            "weak": ["fire", "electric"],
            "no": "ground"
        },
        "moves": [
            {
                "name": "Inner Focus",
                "damage": "20",
                "energy": "15"
            },
            {
                "name": "Infiltrate",
                "damage": "-20",
                "energy": "-10"
            }
        ],
        "playerOption": "false",
        "playerPick": "false"
    },
    {
        "name": "gastly",
        "type": "poison",
        "HP": "100",
        "energy": "100",
        "imgURL": "https://cdn.bulbagarden.net/upload/thumb/c/ca/092Gastly.png/375px-092Gastly.png",
        "attack": {
            "strong": ["grass"],
            "weak": ["poison", "ground"],
            "No": "NA"
        },
        "defence": {
            "resist": ["grass", "poison"],
            "weak": ["ground", "flying"],
            "no": "NA"
        },
        "moves": [
            {
                "name": "sleep",
                "damage": "0",
                "energy": "10"
            },
            {
                "name": "dream Eater",
                "damage": "50",
                "energy": "40"
            }
        ],
        "playerOption": "false",
        "playerPick": "false"
    }
];


/// Character Data END -------------------------------------------------------------------------------------------------------------------
console.log(characterArray);
//utility methods
let getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
}


//utils end

//the game character class ---------------------------------------------------------------------------
//name 
// type
//attack modifier object
//defence modifier object
//characterIMG jquery
//elemID Jquery 
//
class GameCharacter {
    //constructor takes a character obj and a elemID
    constructor(char, elemID, ) {
        this.targetElem = $(elemID);
        this.charBoxDiv = $("<div>");
        this.nameDiv = $("<h4>");
        this.imgDiv = $("<img>");
        this.bottomRow = $("<h6>");
        this.m1 = $("<p>");
        this.m2 = $("<p>");
        this.name = char.name;
        this.type = char.type;
        this.hp = char.HP;
        this.E = char.energy
        this.img = char.imgURL;
        this.attack = char.attack;
        this.defence = char.defence;
        this.moves = char.moves;
        this.allowed = char.playerOption;
        this.playerPick = char.playerPick;
        this.ID = `#${this.name}`;
        this.render();
    }

    render() {
        this.nameDiv.text(this.name);
        this.charBoxDiv.append(this.nameDiv);
        this.imgDiv.attr("src", this.img).attr("width", "100px").attr("class", "pokeimg character-Option").attr("id", `#${this.name}`);
        this.charBoxDiv.append(this.imgDiv);
        this.bottomRow.text(`HP:${this.hp} E:${this.E}`);
        this.charBoxDiv.append(this.bottomRow);
        this.m1.text(`${this.moves[0].name} D:${this.moves[0].damage} E:${this.moves[0].energy}`);
        this.m2.text(`${this.moves[1].name} D:${this.moves[1].damage} E:${this.moves[1].energy}`);

        this.charBoxDiv.append(this.m1);
        this.charBoxDiv.append(this.m2);
        this.charBoxDiv.attr("class", "shadow col-sm-2 mr-3 pr-2 jumbotron button pokemonCard");
        this.charBoxDiv.attr("style", "background-color: white");
        //----
        console.log(this.allowed);
        if (this.allowed == "true" || this.targetElem == "#Battle") {
            this.targetElem.append(this.charBoxDiv);
        }

    }


    //Handle what to do when a game character is clicked in the selector menue changes color yelow
    renderSelected() {
        this.charBoxDiv.attr("style", "background-color: rgb(224, 188, 26)");
    }
    //open the modal and set append the player characters to the modal
    renderInModal() {
        this.targetElem.append(this.charBoxDiv);
        this.charBoxDiv.attr("class", "shadow col-sm-6 pr-2 card button character-Option");
        this.charBoxDiv.attr("style", "background-color: white");
    }
    // render the enemy
    renderEnemy() {
        this.targetElem.append(this.charBoxDiv);
        this.charBoxDiv.attr("class", "shadow col-sm-3 m-auto my-3 card button character-Option");
        this.charBoxDiv.attr("style", "background-color: white");
    }

    renderFighter() {
        this.m1 = $(`<button>`);
        this.m2 = $(`<button>`);
        this.m1.text(`${this.moves[0].name} D:${this.moves[0].damage} E:${this.moves[0].energy}`).attr("id", "attack").attr("class", "rounded");
        this.m2.text(`${this.moves[1].name} D:${this.moves[1].damage} E:${this.moves[1].energy}`).attr("id", "attack2").attr("class", "rounded");
        this.charBoxDiv.append(this.m1);
        this.charBoxDiv.append(this.m2);

        this.targetElem.append(this.charBoxDiv);
        this.charBoxDiv.attr("class", "shadow col-sm-3 m-auto my-3 pb-2 card button");
        this.charBoxDiv.attr("style", "background-color: white");
    }
    //render the benched enemy or team mates into the target element
    renderbenched() {
        this.targetElem.append(this.charBoxDiv);
        this.charBoxDiv.attr("class", "shadow col-sm-4 mb-3 card button character-Option");
        this.charBoxDiv.attr("style", "background-color: white");
    }

    //requiered a jquery object to be input changes the Player target
    changeTarget(target) {
        this.targetElem = target
    }
    // print the GameCharacters object
    printAll() {
        console.log(this);
    }


}

// end Game Character Class -----------------------------------------------------------------------------
//var test = new GameCharacter(characterArray[0], "#character-select");
//test.printAll();

//gameState objects which keeps score and and runs the game
//player score
//game Level 
//clength is the totally number of possible game characters player usable and not
//select1 and select2 int index are the players selections during the initial character selection stage
//stages string{select-character} {battle-character} 
//playerCharacters[] is an array of chosen player characters.
// enemyteam[] is the array of enemy team GameCharacter objects
//battle bool is true if the battle has started
//Functions-----------------------------------

//constructor( takes GameCharacters Array of JSON above, characterDisplay initial target) loops tthrough 
//gamecharacterArray and makes GameCharacter object.
//getCharacterById(takes id jquery) loops through gameCharacterArray and returns the GameCharacterArray index of the item
//CharacterSelectionHandler(id) selects 2 game characters and adds them to player choices array
//CharacterSelectionModal() pops up and shows you the two choices and allows you to reselect or continue to the battle
//GenerateEnemyTeam(level int) Generates an array of enemy team members that do not include the playersCharacters 
//generateControlButtons(target) switch character button and next turn button
//beginBattle() wipes and reRenders the screen with the battle arena and renders the initial characters and buttons.
class BattleGame {
    //constructor
    constructor(GameCharacters, characterdisplay) {
        //first we populate the characters from the attached json in GameCharacterArray
        this.GameCharacterArray = [];
        GameCharacters.forEach(element => {
            this.GameCharacterArray.push(new GameCharacter(element, characterdisplay));

        });
        this.clength = this.GameCharacterArray.length;
        this.select1;
        this.select2;
        this.Stage = "select-character"
        this.playerCharacters = [];
        this.enemyteam = [];
        this.battle = false;
        this.fighter;
        this.enemy;
        this.PlayerTurn = true;


    }
    //end of constructor

    //gets the idex of gameCharacter for that id
    getCharacterById(id) {
        console.log("getting character id")
        for (var count = 0; count < this.clength; count++) {
            if (this.GameCharacterArray[count].ID == id) {
                return count;
            }
        }
    }

    //handles Selection of Two Game Character object and builds the playerCharacter array as well as the select1 and select2 index
    CharacterSelectionHandler(id) {
        let index = this.getCharacterById(id);
        var SelectedChar = this.GameCharacterArray[index];
        console.log(`selected character ${SelectedChar.name} select1 ${this.select1} select2 ${this.select2}`)
        if (this.select1 == undefined) {
            SelectedChar.renderSelected();
            this.select1 = index;
            this.playerPick = true;
        }
        if (this.select2 == undefined && this.select1 != index) {
            SelectedChar.renderSelected();
            this.select2 = index;
            this.playerPick = true;
        }
        if (this.select1 != undefined && this.select2 != undefined && this.battle != true) {
            // setTimeout(function () {  }, 500);
            this.playerCharacters.push(this.GameCharacterArray[this.select1]);
            this.playerCharacters.push(this.GameCharacterArray[this.select2]);
            this.CharacterSelectionModal();
            console.log(this.playerCharacters);
        }
    }


    CharacterSelectionModal() {
        var modal = $("#ex1");
        modal.modal({
            fadeDuration: 1000,
            fadeDelay: 0.50
        });
        this.playerCharacters.forEach(element => {
            element.changeTarget($("#selectedCharacters"));
            element.renderInModal();

        });
    }

    //Generate The initial enemy team returns an array of team members
    GenerateEnemyTeam(level) {
        var output = [];
        console.log(`generating enemy team`);
        switch (level) {
            case 1:
                console.log("case 1");
                for (let x = 0; x < 2;) {
                    var choice = getRandomInt(this.clength);
                    console.log(choice);
                    if (this.GameCharacterArray[choice] != this.playerCharacters[0] && this.GameCharacterArray[choice] != this.playerCharacters[1] && this.GameCharacterArray[choice] != this.playerCharacters[2] && this.GameCharacterArray[choice] != output[0]) {
                        output.push(this.GameCharacterArray[choice]);
                        x++;
                    }
                }
                return output;
            case 2:
                console.log("case 2");
                output.push(this.GameCharacterArray[this.clength]);
                output.push(this.GameCharacterArray[this.clength - 1]);
                return output;

        }

    }

    //Generates the Control buttons and renders them to the target element
    generateControlButtons(target) {
        let empty = $(`<div`).attr("class", "col-sm-4");
        let switchchar = $(`<button>`);
        let nextTurn = $(`<button>`).attr("class", "col-sm-2 rounded shadow");
        switchchar.attr("class", "col-sm-2");

    }

    //Status Unkown
    //Depending on this.PlayerTurn will handle player attack based on move index input or enemy attack
    HandleAttack(x){
        if(this.PlayerTurn = true){
            if(this.enemy.defence.no == "NA"){
                for(let i = 0; i < this.enemy.defence.resist.length ;I++){
                    if(this.enemy.defence.resist[i] == this.fighter.type){
                        console.log(`the enemy resists`);
                        this.enemy.hp -= Math.floor(this.fighter.moves[x].damage*0.8);
                    }
                }
                for(let i = 0; i < this.enemy.defence.weak.length ;I++){
                    if(this.enemy.defence.weak[i] == this.fighter.type){
                        console.log(`Its super effective`);
                        this.enemy.hp -= Math.floor(this.fighter.moves[x].damage*1.2);
                    }
                }
            this.enemy.hp -= this.fighter.moves[x].damage;
            }
            this.fighter.E -= this.fighter.moves[x].energy;
            this.enemy.renderEnemy();
            this.fighter.renderFighter();
            this.PlayerTurn = false;
        }
        else{
            if(this.fighter.defence.no == "NA"){
                for(let i = 0; i < this.fighter.defence.resist.length ;I++){
                    if(this.fighter.defence.resist[i] == this.enemy.type){
                        console.log(`the enemy resists`);
                        this.fighter.hp -= Math.floor(this.enemy.moves[x].damage*0.8);
                    }
                }
                for(let i = 0; i < this.enemy.defence.weak.length ;I++){
                    if(this.fighter.defence.weak[i] == this.enemy.type){
                        console.log(`Its super effective`);
                        this.fighter.hp -= Math.floor(this.enemy.moves[x].damage*1.2);
                    }
                }
            this.fighter.hp -= this.enemy.moves[x].damage;
            }
            this.enemy.E -= this.enemy.moves[x].energy;
            this.enemy.renderEnemy();
            this.fighter.renderFighter();
            this.PlayerTurn = true;
        }
    }

    BegingBattle() {
        console.log("begin battle");
        this.battle = true;
        this.Stage = "battle";
        $("#container").html(`<div class="row bg-info p-2 pt-5 mt-1">
        <div class="col-sm-1">
        </div>
        <div class="col-sm-10">
            <div class="jumbotron" id="Battle">
                <div class="container">
                    <div class="row" id="enemy-select">

                    </div>
                    <!-- enemy bench above enemy fighter below -->
                    <div class="row" id="enemy">
                    
                    </div>
                    <div class="row m-1"></div>
                    <!-- player fighter below -->
                    <div class="row mb-5 pb-1" id="fighter">
                        
                    </div>
                    <!-- player bench -->
                    <div class="row" id="player-select">

                    </div>
                </div>

            </div>
        </div>
        <div class="col-sm-1"></div>
    </div>`);
        ///END OF HTML BATTLE AREA 
        this.enemyteam = this.GenerateEnemyTeam(1);
        for (let i = 0; i < this.enemyteam.length; i++) {
            if (i == 0) {
                this.enemyteam[i].changeTarget($("#enemy"));
                this.enemyteam[i].renderEnemy();
                this.enemy = this.enemyteam[i];
            }
            if (i > 0) {
                this.enemyteam[i].changeTarget($('#enemy-select'));
                this.enemyteam[i].renderbenched();
            }
        }
        for (let i = 0; i < this.playerCharacters.length; i++) {
            if (i == 0) {
                this.playerCharacters[i].changeTarget($("#fighter"));
                this.playerCharacters[i].renderFighter();
                this.fighter= this.playerCharacters[i];
            }
            if (i > 0) {
                this.playerCharacters[i].changeTarget($('#player-select'));
                this.playerCharacters[i].renderbenched();
            }
        }
        //this.generateControlButtons()
        $("#attack").click(function () {
            console.log("Attack2");
            this.HandleAttack(0);
        });
    
        $("#attack2").click(function () {
            console.log("Attack2");
            this.HandleAttack(1);
        });
    }

}
//end of battlegame class 


const game = new BattleGame(characterArray, "#character-select", "#character-select", "#character-select");

$(document).ready(function () {






    $('.character-Option').click(function () {
        var id = $(this).attr('id');
        switch (game.battle) {
            case false:
                game.CharacterSelectionHandler(id);
                break;
            default:
                break;
        }
    });



    $("#reselect").click(function () {
        console.log("Reslected")
        game.playerCharacters.forEach(element => {
            element.changeTarget($("#character-select"));
            element.render();


        });
        game.playerCharacters = [];
        game.select1 = undefined;
        game.select2 = undefined;
        $.modal.close();
    });

    $("#continue").click(function () {
        game.BegingBattle();
        $.modal.close();
    });




    //END OF DOCUMENT READY FUNCTION
});