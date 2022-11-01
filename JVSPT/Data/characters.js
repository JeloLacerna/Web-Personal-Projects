

var currentID, charList
const API_URL = "https://api.genshin.dev/characters"
const CHAR_URL = "https://api.genshin.dev/characters/"
const container = document.getElementById("splash")

startInteraction()
function startInteraction() {
    getChars();
    const charLinks = document.getElementsByClassName("character-link")
    //console.log(charLinks.length)
    for (i = 0; i < charLinks.length; i++) {
        charLinks[i].addEventListener('click', handleClick)
    }
}

// Defining async function
async function getChars() {
    
    // Storing response
    const response = await fetch(API_URL)
    
    // Storing data in form of JSON
    charList = await response.json()
    //console.log(charList)
}

function handleClick() {
    console.log(this.id)
    container.innerHTML = ''
    container.style.display = ''
    currentID = this.id
    for (i = 0; i < charList.length; i++) {
        if (charList[i] === currentID) {
            //printCharacter(charList[i])
            console.log(charList[i])
            getCharacter(charList[i])
            //console.log(CHAR_URL + charList[i])
            
        }
    }
    container.scrollIntoView(
        { behavior: 'smooth' , block: 'start', inline: 'nearest'}
    )
}

async function getCharacter(name) {

    const response = await fetch(CHAR_URL + name)
    
    const activeChar = await response.json()
    printCharacter(activeChar)
    //console.log(activeChar.name)
}

var content


function printCharacter(character) {
    // Construct card and its content
    const card = document.createElement('div')

    card.classList = 'shaded-bg col flex-display block-display char-details'
    const bg_image_url = "url(Media/Gacha_arts/" + character.name.replace(' ', '-') + ".webp)"
    card.style.backgroundImage = bg_image_url
    card.style.backgroundPosition = 'center'
  
    content = `
    <span class="close-btn" onclick="closeCard()">&times;</span>
    <div class="char-name-main ta-center shaded-bg-hi">
        
        <h2 class="white-text border-b">${character.name}</h2>
        <p>${character.description}</p>
        <div class="ta-center">
            <h2 class="border-b">${character.affiliation}</h2>
            <p>Affiliation</p>
        </div>
        <div class="ta-center">
            <h2 class="border-b">${character.constellation}</h2>
            <p>Constellation</p>
        </div>
        <div class="ta-center">
            <h2 class="border-b">${character.birthday.substring(5)}</h2>
            <p>Birthday</p>
        </div>
    </div>
    `;

    //Appending to parent html
    card.innerHTML += content
    container.append(card)
}

function closeCard() {
    container.innerHTML = ''
    //container.style.display = 'none'
}