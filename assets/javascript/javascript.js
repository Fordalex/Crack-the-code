var lightOne = false;
var lightTwo = false;
var lightThree = false;
var codeOne = false;
var codeTwo = false;
var codeThree = false;
var codeFour = false;
var codeCracked = false;
var cashSymbol = '£';
var cash = 0;

refresh();

function refresh() {
    // lights on or off
    if (lightOne == false) {
        document.getElementById('lightOne').innerHTML = '<div class="light-off"></div>';
    } else {
        document.getElementById('lightOne').innerHTML = '<div class="light-on"></div>';
    }
    if (lightTwo == false) {
        document.getElementById('lightTwo').innerHTML = '<div class="light-off"></div>';
    } else {
        document.getElementById('lightTwo').innerHTML = '<div class="light-on"></div>';
    }
    if (lightThree == false) {
        document.getElementById('lightThree').innerHTML = '<div class="light-off"></div>';
    } else {
        document.getElementById('lightThree').innerHTML = '<div class="light-on"></div>';
    }
    // if right light sequence
    if (lightOne === false && lightTwo === true && lightThree === true) {
        document.getElementById('showCodeOne').innerHTML = '<p>You<span> </span></p>';
        codeOne = true;
    }
    if (lightOne === false && lightTwo === true && lightThree === false) {
        document.getElementById('showCodeTwo').innerHTML = '<p>Have<span> </span></p>';
        codeTwo = true;
    }
    if (lightOne === true && lightTwo === false && lightThree === false) {
        document.getElementById('showCodeThree').innerHTML = '<p>Won </p>';
        codeThree = true;
    }
    if (lightOne === true && lightTwo === true && lightThree === true) {
        document.getElementById('showCodeFour').innerHTML = '<p>£250</p>';
        codeFour = true;
    }
    // code cracked
    if (codeOne == true && codeTwo == true && codeThree == true && codeFour == true) {
        document.getElementById('codeCracked').innerHTML = '<p class="text-light">Well done challenge complete!</p>';
        codeCracked = true;
    }
    if (codeCracked === true) {
        cash = 250;
    }
    // fill cash
    document.getElementById('cash').innerHTML = cashSymbol + cash;
}

// light switch functions

function lightOneSwitchOnFunction() {
    lightOne = true;
    refresh();
}

function lightOneSwitchOffFunction() {
    lightOne = false;
    refresh();
}

function lightTwoSwitchOnFunction() {
    lightTwo = true;
    refresh();
}

function lightTwoSwitchOffFunction() {
    lightTwo = false;
    refresh();
}
function lightThreeSwitchOnFunction() {
    lightThree = true;
    refresh();
}

function lightThreeSwitchOffFunction() {
    lightThree = false;
    refresh();
}

// the winner function is played when the challenge is complete

function winner() {
    for (i = 0; i < 1000; i++) {
        lightOne = true;
        lightTwo = false;
        lightThree = true;
        refresh();
        for (j = 0; j < 1000; j++) {
            lightOne = false;
            lightTwo = true;
            lightThree = false;
            refresh();
        }
    }
}

