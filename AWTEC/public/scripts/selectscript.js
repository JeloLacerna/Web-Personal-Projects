date = new Date()

let monthSelect = document.getElementById("month-select")
let dateSelect = document.getElementById("date-select")
monthSelect.onchange = function () {dateCheck()}

$(document).ready(() => {
    console.log("Date functions starting")

    addYears()
    currentMonth()
    currentDate()
})

function addYears() {
    let yearSelect = document.getElementById('year-select')

    let yearStart = 1970
    let yearEnd = date.getFullYear()

    // for appending all the option tags
    for (i = 0; i <= (yearEnd - yearStart); i++) {
        let option = document.createElement('option')
        option.innerHTML = yearStart + i
        option.value = yearStart + i
        
        // the last option tag to be created
        // is the default selected
        // that is the year now
        if ( i === (yearEnd - yearStart)) {
            option.selected = true
            console.log("Current year selected")
        }
        yearSelect.append(option)
    }
    console.log("Year options added")
}

function currentMonth() {
    let monthNow = date.getMonth()

    monthOptions = document.getElementsByClassName("month-option")

    // for selecting the default month now
    for (i = 0; i < monthOptions.length; i++) {
        if (monthOptions[i].value === monthNow.toString()) {
            monthOptions[i].selected = true
            console.log("Current month selected")
        }
    }
}

function currentDate() {
    let datenow = date.getDate()

    dateOptions = document.getElementsByClassName("date-option")

    // for selecting the default month now
    for (i = 0; i < dateOptions.length; i++) {
        if (dateOptions[i].value === datenow.toString()) {
            dateOptions[i].selected = true
            console.log("Current date selected")
        }
    }
}

function dateCheck() {
    // add removed dates first
    addRmvdDates()

    // February
    if (monthSelect.value === "1") {
        for (i = 0; i < 3; i++) {
            dateSelect.options[dateSelect.options.length - 1] = null;
        }
    }

    // for months with 30 days
    if (monthSelect.value === "3" || monthSelect.value === "5" || monthSelect.value === "8" || monthSelect.value === "10") {
        dateSelect.options[dateSelect.options.length - 1] = null;
    }
}

function addRmvdDates() {
    for (i = dateSelect.options.length; i < 31; i++) {
        dateSelect.options[dateSelect.options.length] = new Option(i+1, i+1);
    }
}