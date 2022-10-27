$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let playerHP = 100;
let playerAP = 100;


function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    $('.attack-btn.arcane-sceptre').on('click', arcaneSpecter);

    // - Updates state which is ->
    // - Rendered to the DOM
}

function arcaneSpecter(){
    console.group('arcane sceptre');
    // AP Cost: 12
    let costAP = 12;
    let damageHP = 14;
    // if player has enough AP render attack; else fail attack.
    if (checkAP(costAP)){ 
        console.log('Attack');
        fungusDamaged(damageHP);
    }else {
        //attack failed due to lack of playerAp
    }
    console.groupEnd();
}

function entangle(){
    //AP Cost: 23
    //HP Damage: 9
}

function dragonBlade(){
    //AP Cost: 38
    costAP = 38;
    //HP Damage: 47
    damageHP = 47
    //fungusAttacked(damageHP);
    //playerAPCost(costAP);
}

function starFire(){
    //AP cost: 33
    //HP damage: 25
}

function fungusDamaged(damageHP){
    //fungusHP = fungusHP - HPdamage
    console.log('Fungus damage for: ', damageHP);
    fungusHP -= damageHP;
}
function playerAPCost(){
    //playerAP = PlayerAP - costAP
}

function playerAttacked(){
    // playerHP = playerHP - HPdamage
}

function checkAP(attackAPCost){
    if (attackAPCost > playerAP){
        console.log('Attack failed: ', attackAPCost, ' > ', playerAP);
        return false;
    } else {
        console.log('Attack successful: ', attackAPCost, ' < ', playerAP)
        return true;
    }
}

