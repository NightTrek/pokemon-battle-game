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
        "playerOption": "true"
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
        "playerOption": "true"
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
        "playerOption": "true"
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
        "playerOption": "true"
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
        "playerOption": "true"
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
                "energy": "10"
            }
        ],
        "playerOption": "false"
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
        "playerOption": "false"
    }
];


/// Character Data END -------------------------------------------------------------------------------------------------------------------
console.log(characterArray);

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
        this.ID = `#${this.name}`
        this.render();
    }

    render() {
        this.nameDiv.text(this.name);
        this.charBoxDiv.append(this.nameDiv);
        this.imgDiv.attr("src", this.img).attr("width", "100px");
        this.charBoxDiv.append(this.imgDiv);
        this.bottomRow.text(`HP:${this.hp} E:${this.E}`);
        this.charBoxDiv.append(this.bottomRow);
        this.m1.text(`${this.moves[0].name} D:${this.moves[0].damage} E:${this.moves[0].energy}`);
        this.m2.text(`${this.moves[1].name} D:${this.moves[1].damage} E:${this.moves[1].energy}`);

        this.charBoxDiv.append(this.m1);
        this.charBoxDiv.append(this.m2);
        this.charBoxDiv.attr("class", "shadow jumbotron col-sm-2 mr-3 pr-2 card button character-Option").attr("id", `#${this.name}`);
        //----
        console.log(this.allowed);
        if (this.allowed == "true" || this.targetElem == "#Battle") {
            this.targetElem.append(this.charBoxDiv);
        }

    }


    //Handle what to do when a game character is clicked in the selector menue
    renderSelected() {
        this.charBoxDiv.attr("style", "background-color: rgb(224, 188, 26)");
    }
    
    changeTarget(target){
        this.targetElem = target
    }

    printAll() {
        console.log(this);
    }


}

// end Game Character Class -----------------------------------------------------------------------------
//var test = new GameCharacter(characterArray[0], "#character-select");
//test.printAll();

//gameState objects which keeps score and keeps
//player score
//game Level 
//
//stages {select-character} {battle-character} 
class BattleGame {
    //constructor
    constructor(GameCharacters, characterdisplay, battledisplay, scoredisplay) {
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


    }
    //end of constructor

    getCharacterById(id) {
        console.log("getting character id")
        for (var count = 0; count < this.clength; count++) {
            if (this.GameCharacterArray[count].ID == id) {
                return count;
            }
        }
    }

    CharacterSelectionHandler(id) {
        let index = this.getCharacterById(id);
        var SelectedChar = this.GameCharacterArray[index];
        console.log(`selected character ${SelectedChar.name} select1 ${this.select1} select2 ${this.select2}`)
        if (this.select1 == undefined) {
            SelectedChar.renderSelected();
            this.select1 = index;
        }
        if (this.select2 == undefined && this.select1 != index) {
            SelectedChar.renderSelected();
            this.select2 = index;
        }
        if (this.select1 !== undefined && this.select2 !== undefined) {
            setTimeout(function () { alert("you have selected your characters "); }, 500);
            this.playerCharacters.push(this.GameCharacterArray[this.select1]);
            this.playerCharacters.push(this.GameCharacterArray[this.select2]);
            console.log(this.playerCharacters);
        }
    }

    BegingBattle(){

    }

}
//end of battlegame class 
$(document).ready(function () {

    const test2 = new BattleGame(characterArray, "#character-select", "#character-select", "#character-select");






    $('.character-Option').click(function () {
        var id = $(this).attr('id');
        console.log(id);
        switch (test2.Stage) {
            case "select-character":
                test2.CharacterSelectionHandler(id);
                break;

            default:
                break;
        }
    });



    //END OF DOCUMENT READY FUNCTION
});