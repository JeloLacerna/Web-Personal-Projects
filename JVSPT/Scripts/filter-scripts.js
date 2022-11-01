/* This Script file is for filtering things only */

var flag

activateFilters()
clearActive()

// just some event listeners
function activateFilters() {
    document.addEventListener("click", filterCategoryChars)
    document.addEventListener("click", filterCategoryArts)
    document.addEventListener("click", filterCategoryWeaps)
    document.addEventListener("click", filterCategoryItems)
}

// clear activate states for filter buttons
// also clear all filters
function clearActive() {
    const buttons = document.getElementsByClassName("filter-button")
    for (i = 0; i < buttons.length; i++) {
        buttons[i].dataset.state = ""
    }
}

/* This part is for filtering characters */

// set a filter button active for character filter when pressed
// and clear a previous active button - element
function setElementActive(target) {
    var buttons = document.getElementById("element-filter").querySelectorAll("[data-state]")
        for (i = 0; i < buttons.length; i++) {
            buttons[i].dataset.state = ""
        }
    document.querySelector(target).dataset.state = "active"
}

// set a filter button active for character filter when pressed
// and clear a previous active button - weapon type
function setWeaponActive(target) {
    var buttons = document.getElementById("weapon-filter").querySelectorAll("[data-state]")
        for (i = 0; i < buttons.length; i++) {
            buttons[i].dataset.state = ""
        }
    document.querySelector(target).dataset.state = "active"
}

// set a filter button active for character filter when pressed
// and clear a previous active button - rarity
function setRankActive(target) {
    var buttons = document.getElementById("rarity-filter").querySelectorAll("[data-state]")
        for (i = 0; i < buttons.length; i++) {
            buttons[i].dataset.state = ""
        }
    document.querySelector(target).dataset.state = "active"
}

// Filter/search characters by name
function charSearch() {
    var input, filter, charList, chars, a, i, txtValue
    input = document.getElementById("char-search")
    filter = input.value.toUpperCase()
    charList = document.getElementById("character-list")
    chars = charList.getElementsByClassName("grid-cells")
    for (i = 0; i < chars.length; i++) {
        a = chars[i].getElementsByClassName("character-link")[0]
        txtValue = a.id
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            chars[i].style.display = ""
        } else {
            chars[i].style.display = "none"
        }
    }
}

// Determine which button is pressed - character filter
function filterCategoryChars(e) {
    if (e.target.matches("[data-element-filter-electro]") && e.target.matches("[data-filter-char]")) {
        if (flag != 1) {
            flag = 1
            filterChars("[data-electro]")
        }
        else {
            clearFilters()
            filterChars("[data-electro]")
        }
        setElementActive("[data-element-filter-electro]")
        return
    }

    if (e.target.matches("[data-element-filter-pyro]") && e.target.matches("[data-filter-char]")) {
        if (flag != 1) {
            flag = 1
            filterChars("[data-pyro]")
        }
        else {
            clearFilters()
            filterChars("[data-pyro]")
        }
        setElementActive("[data-element-filter-pyro]")
        return
    }

    if (e.target.matches("[data-element-filter-cryo]") && e.target.matches("[data-filter-char]")) {
        
        if (flag != 1) {
            flag = 1
            filterChars("[data-cryo]")
        }
        else {
            clearFilters()
            filterChars("[data-cryo]")
        }
        setElementActive("[data-element-filter-cryo]")
        return
    }

    if (e.target.matches("[data-element-filter-geo]") && e.target.matches("[data-filter-char]")) {
        
        if (flag != 1) {
            flag = 1
            filterChars("[data-geo]")
        }
        else {
            clearFilters()
            filterChars("[data-geo]")
        }
        setElementActive("[data-element-filter-geo]")
        return
    }

    if (e.target.matches("[data-element-filter-hydro]") && e.target.matches("[data-filter-char]")) {
        
        if (flag != 1) {
            flag = 1
            filterChars("[data-hydro]")
        }
        else {
            clearFilters()
            filterChars("[data-hydro]")
        }
        setElementActive("[data-element-filter-hydro]")
        return
    }

    if (e.target.matches("[data-element-filter-anemo]") && e.target.matches("[data-filter-char]")) {
        
        if (flag != 1) {
            flag = 1
            filterChars("[data-anemo]")
        }
        else {
            clearFilters()
            filterChars("[data-anemo]")
        }
        setElementActive("[data-element-filter-anemo]")
        return
    }

    if (e.target.matches("[data-filter-bow]") && e.target.matches("[data-filter-char]")) {
        
        if (flag != 2) {
            flag = 2
            filterChars("[data-bow]")
        }
        else {
            clearFilters()
            filterChars("[data-bow]")
        }
        setWeaponActive("[data-filter-bow]")
        return
    }

    if (e.target.matches("[data-filter-catalyst]") && e.target.matches("[data-filter-char]")) {
        
        if (flag != 2) {
            flag = 2
            filterChars("[data-catalyst]")
        }
        else {
            clearFilters()
            filterChars("[data-catalyst]")
        }
        setWeaponActive("[data-filter-catalyst]")
        return
    }

    if (e.target.matches("[data-filter-claymore]") && e.target.matches("[data-filter-char]")) {
        
        if (flag != 2) {
            flag = 2
            filterChars("[data-claymore]")
        }
        else {
            clearFilters()
            filterChars("[data-claymore]")
        }
        setWeaponActive("[data-filter-claymore]")
        return
    }

    if (e.target.matches("[data-filter-polearm]") && e.target.matches("[data-filter-char]")) {
        
        if (flag != 2) {
            flag = 2
            filterChars("[data-polearm]")
        }
        else {
            clearFilters()
            filterChars("[data-polearm]")
        }
        setWeaponActive("[data-filter-polearm]")
        return
    }

    if (e.target.matches("[data-filter-sword]") && e.target.matches("[data-filter-char]")) {
       
        if (flag != 2) {
            flag = 2
            filterChars("[data-sword]")
        }
        else {
            clearFilters()
            filterChars("[data-sword]")
        }
        setWeaponActive("[data-filter-sword]")
        return
    }

    if (e.target.matches("[data-filter-five]") && e.target.matches("[data-filter-char]")) {
        
        if (flag != 3) {
            flag = 3
            filterChars("[data-five]")
        }
        else {
            clearFilters()
            filterChars("[data-five]")
        }
        setRankActive("[data-filter-five]")
        return
    }

    if (e.target.matches("[data-filter-four]") && e.target.matches("[data-filter-char]")) {
        
        if (flag != 3) {
            flag = 3
            filterChars("[data-four]")
        }
        else {
            clearFilters()
            filterChars("[data-four]")
        }
        setRankActive("[data-filter-four]")
        return
    }
}

// Filter characters
function filterChars(msg) {
    var charList, chars
    charList = document.getElementById("character-list")
    chars = charList.getElementsByClassName("grid-cells")
    for (i = 0; i < chars.length; i++) {
        if (chars[i].style.display == "") {
            if (chars[i].matches(msg)) {
                chars[i].style.display = ""
            } else {
                chars[i].style.display = "none"
            }
        }
    }
    displayLog("filtered " + msg)
}

// Clear Filters for chars
function clearFilters() {
    document.getElementById("char-search").value = ""
    var charList, chars
    charList = document.getElementById("character-list")
    chars = charList.getElementsByClassName("grid-cells")
    for (i = 0; i < chars.length; i++) {
        chars[i].style.display = ""
    }
    clearActive()
}

/* This part is for filtering artifacts */

// Clear Filters for artis
function clearFiltersArti() {
    document.getElementById("artifact-search").value = ""
    var artiList, artis
    artiList = document.getElementById("arti-list")
    artis = artiList.getElementsByClassName("grid-cells")
    for (i = 0; i < artis.length; i++) {
        artis[i].style.display = ""
    }
    clearActive()
}

// set a filter button active for artifact filter
function setRankActiveArtis(msg) {
    var buttons = document.getElementById("rarity-filter").getElementsByClassName("rarity-button")
        for (i = 0; i < buttons.length; i++) {
            buttons[i].dataset.state = ""
        }
    document.querySelector(msg).dataset.state = "active"
    displayLog("changed active rank filter")
}

// Filter/search artis by name
function artiSearch() {
    var input, filter, artiList, artis, a, i, txtValue
    input = document.getElementById("artifact-search")
    filter = input.value.toUpperCase()
    artiList = document.getElementById("arti-list")
    artis = artiList.getElementsByClassName("grid-cells")
    for (i = 0; i < artis.length; i++) {
        a = artis[i].getElementsByTagName("h3")[0]
        txtValue = a.textContent || a.innerHTML
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            artis[i].style.display = ""
        } else {
            artis[i].style.display = "none"
        }
    }
}

// Determine which button is pressed
function filterCategoryArts(e) {
    if (e.target.matches("[data-filter-five-a]")) {
        filterArts("[data-five]")
        setRankActiveArtis("[data-filter-five-a]")
        return
    }

    if (e.target.matches("[data-filter-four-a]")) {
        filterArts("[data-four]")
        setRankActiveArtis("[data-filter-four-a]")
        return
    }

    if (e.target.matches("[data-filter-three-a]")) {
        filterArts("[data-three]")
        setRankActiveArtis("[data-filter-three-a]")
        return
    }
}

// filter artifacts
function filterArts(msg) {
    var artiList, artis
    artiList = document.getElementById("arti-list")
    artis = artiList.getElementsByClassName("grid-cells")
    for (i = 0; i < artis.length; i++) {
        if (artis[i].matches(msg)) {
            artis[i].style.display = ""
        } else {
            artis[i].style.display = "none"
        }
    }
    displayLog("filtered " + msg)
}


/* This part is for filtering weapons on the weapons page */

// button click event handling for weapons
function filterCategoryWeaps(e) {    
    if (e.target.matches("[data-filter-weapon]") && (e.target.matches("[data-filter-bow]"))) {
        if (flag != 1) {
            flag = 1
            filterWeapon('[data-weapon="bow"]')
        }
        else {
            clearFiltersWeaps()
            filterWeapon('[data-weapon="bow"]')
        }
        setWeaponActive("[data-filter-bow]")
        return
    }
    if (e.target.matches("[data-filter-weapon]") && (e.target.matches("[data-filter-catalyst]"))) {
        if (flag != 1) {
            flag = 1
            filterWeapon('[data-weapon="catalyst"]')
        }
        else {
            clearFiltersWeaps()
            filterWeapon('[data-weapon="catalyst"]')
        }
        setWeaponActive("[data-filter-catalyst]")
        return
    }
    if (e.target.matches("[data-filter-weapon]") && (e.target.matches("[data-filter-claymore]"))) {
        if (flag != 1) {
            flag = 1
            filterWeapon('[data-weapon="claymore"]')
        }
        else {
            clearFiltersWeaps()
            filterWeapon('[data-weapon="claymore"]')
        }
        setWeaponActive("[data-filter-claymore]")
        return
    }
    if (e.target.matches("[data-filter-weapon]") && (e.target.matches("[data-filter-polearm]"))) {
        if (flag != 1) {
            flag = 1
            filterWeapon('[data-weapon="polearm"]')
        }
        else {
            clearFiltersWeaps()
            filterWeapon('[data-weapon="polearm"]')
        }
        setWeaponActive("[data-filter-polearm]")
        return
    }
    if (e.target.matches("[data-filter-weapon]") && (e.target.matches("[data-filter-sword]"))) {
        if (flag != 1) {
            flag = 1
            filterWeapon('[data-weapon="sword"]')
        }
        else {
            clearFiltersWeaps()
            filterWeapon('[data-weapon="sword"]')
        }
        setWeaponActive("[data-filter-sword]")
        return
    }

    if (e.target.matches("[data-filter-rank]") && (e.target.matches("[data-filter-one]"))) {
        if (flag != 2) {
            flag = 2
            filterWeapon('[data-rarity="one"]')
        }
        else {
            clearFiltersWeaps()
            filterWeapon('[data-rarity="one"]')
        }
        setRankActive("[data-filter-one]")
        return
    }
    if (e.target.matches("[data-filter-rank]") && (e.target.matches("[data-filter-two]"))) {
        if (flag != 2) {
            flag = 2
            filterWeapon('[data-rarity="two"]')
        }
        else {
            clearFiltersWeaps()
            filterWeapon('[data-rarity="two"]')
        }
        setRankActive("[data-filter-two]")
        return
    }
    if (e.target.matches("[data-filter-rank]") && (e.target.matches("[data-filter-three]"))) {
        if (flag != 2) {
            flag = 2
            filterWeapon('[data-rarity="three"]')
        }
        else {
            clearFiltersWeaps()
            filterWeapon('[data-rarity="three"]')
        }
        setRankActive("[data-filter-three]")
        return
    }
    if (e.target.matches("[data-filter-rank]") && (e.target.matches("[data-filter-four]"))) {
        if (flag != 2) {
            flag = 2
            filterWeapon('[data-rarity="four"]')
        }
        else {
            clearFiltersWeaps()
            filterWeapon('[data-rarity="four"]')
        }
        setRankActive("[data-filter-four]")
        return
    }
    if (e.target.matches("[data-filter-rank]") && (e.target.matches("[data-filter-five]"))) {
        if (flag != 2) {
            flag = 2
            filterWeapon('[data-rarity="five"]')
        }
        else {
            clearFiltersWeaps()
            filterWeapon('[data-rarity="five"]')
        }
        setRankActive("[data-filter-five]")
        return
    }
}

// clearing filters for weapons
function clearFiltersWeaps() {
    document.getElementById("weap-search").value = ""
    var weapList, weaps
    weapList = document.getElementById("weapon-list")
    weaps = weapList.getElementsByClassName("grid-cells")
    for (i = 0; i < weaps.length; i++) {
        weaps[i].style.display = ""
    }
    clearActive()
}

// Filtering weapons with buttons
function filterWeapon(target) {
    var weapList, weapon
    weapList = document.getElementById("weapon-list")
    weapon = weapList.getElementsByClassName("grid-cells")
    for (i = 0; i < weapon.length; i++) {
        if (weapon[i].style.display == "") {
            if (weapon[i].matches(target)) {
                weapon[i].style.display = ""
            } else {
                weapon[i].style.display = "none"
            }
        }
    }
    
}

// For Searching weapons with keywords
function weapSearch() {
    var input, filter, weapList, weapons, a, i, txtValue
    input = document.getElementById("weap-search")
    filter = input.value.toUpperCase()

    weapList = document.getElementById("weapon-list")
    weapons = weapList.getElementsByClassName("grid-cells")
    for (i = 0; i < weapons.length; i++) {
        a = weapons[i].getElementsByClassName("weapon-link")[0]
        txtValue = a.id.replaceAll("_", " ")
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            weapons[i].style.display = ""
        } else {
            weapons[i].style.display = "none"
        }
    }
}


/* This part is for filtering items */

// Handle click event
function filterCategoryItems(e) {
    if (e.target.matches("[data-filter-rank-item]") && (e.target.matches("[data-filter-one]"))) {
        if (flag != 1) {
            flag = 1
            filterItem('[data-rarity="one"]')
        }
        else {
            clearFilterItems()
            filterItem('[data-rarity="one"]')
        }
        setRankActive("[data-filter-one]")
        return
    }
    if (e.target.matches("[data-filter-rank-item]") && (e.target.matches("[data-filter-two]"))) {
        if (flag != 1) {
            flag = 1
            filterItem('[data-rarity="two"]')
        }
        else {
            clearFilterItems()
            filterItem('[data-rarity="two"]')
        }
        setRankActive("[data-filter-two]")
        return
    }
    if (e.target.matches("[data-filter-rank-item]") && (e.target.matches("[data-filter-three]"))) {
        if (flag != 1) {
            flag = 1
            filterItem('[data-rarity="three"]')
        }
        else {
            clearFilterItems()
            filterItem('[data-rarity="three"]')
        }
        setRankActive("[data-filter-three]")
        return
    }
    if (e.target.matches("[data-filter-rank-item]") && (e.target.matches("[data-filter-four]"))) {
        if (flag != 1) {
            flag = 1
            filterItem('[data-rarity="four"]')
        }
        else {
            clearFilterItems()
            filterItem('[data-rarity="four"]')
        }
        setRankActive("[data-filter-four]")
        return
    }
    if (e.target.matches("[data-filter-rank-item]") && (e.target.matches("[data-filter-five]"))) {
        if (flag != 1) {
            flag = 1
            filterItem('[data-rarity="five"]')
        }
        else {
            clearFilterItems()
            filterItem('[data-rarity="five"]')
        }
        setRankActive("[data-filter-five]")
        return
    }
}

// Filter items in items.html
function filterItem(target) {
    var itemList, item
    itemList = document.getElementById("item-list")
    item = itemList.getElementsByClassName("grid-cells")
    for (i = 0; i < item.length; i++) {
        if (item[i].style.display == "") {
            if (item[i].matches(target)) {
                item[i].style.display = ""
            } else {
                item[i].style.display = "none"
            }
        }
    }
}

// Clearing filtered items
function clearFilterItems() {
    document.getElementById("item-search").value = ""
    document.getElementById("mat-types-selector").value = "all-items"
    var itemList, item
    itemList = document.getElementById("item-list")
    item = itemList.getElementsByClassName("grid-cells")
    for (i = 0; i < item.length; i++) {
        item[i].style.display = ""
    }
    clearActive()
}

// Search items using keywords
function itemSearch() {
    var input, filter, weapList, weapons, a, i, txtValue
    input = document.getElementById("item-search")
    filter = input.value.toUpperCase()

    weapList = document.getElementById("item-list")
    weapons = weapList.getElementsByClassName("grid-cells")
    for (i = 0; i < weapons.length; i++) {
        a = weapons[i].getElementsByClassName("item-link")[0]
        txtValue = a.id.replaceAll("_", " ")
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            weapons[i].style.display = ""
        } else {
            weapons[i].style.display = "none"
        }
    }
}

// Filter items using the Select element
function filterSelect() {

    clearFilterItemsForSelect()

    const value = document.getElementById("mat-types-selector").value

    if (value === "all-items") return

    var itemList, item, target
    target = '[data-type = "' + value +'"]'
    itemList = document.getElementById("item-list")
    item = itemList.getElementsByClassName("grid-cells")
    for (i = 0; i < item.length; i++) {
        if (item[i].style.display == "") {
            if (item[i].matches(target)) {
                item[i].style.display = ""
            } else {
                item[i].style.display = "none"
            }
        }
    }
}

function clearFilterItemsForSelect() {
    var itemList, item
    itemList = document.getElementById("item-list")
    item = itemList.getElementsByClassName("grid-cells")
    for (i = 0; i < item.length; i++) {
        item[i].style.display = ""
    }
    clearActive()
}





// for debugging
function displayLog(msg) {
    console.log(msg)
}

