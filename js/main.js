"use strict";
function KarachiObj(head, des, link) {
    this.head = head;
    this.des = des;
    this.link = link;
}
function LahoreObj(head, des, link) {
    this.head = head;
    this.des = des;
    this.link = link;
}
function IslamabadObj(head, des, link) {
    this.head = head;
    this.des = des;
    this.link = link;
}
// function IslamabadObj(head, des, link){
//     this.head=head;
//     this.des=des;
//     this.link=link;
// }
var karachiObjs = [];
var lahoreObjs = [];
var islamabadObjs = [];
var temp;
var idPrev;
(function () {
    //adding Karachi Places
    var Objs = new KarachiObj('Char Minaar Chowrangi', 'This roundabout in Karachi has featured in a list of the world’s most beautiful roundabouts by a UK based Roundabout Appreciation Society.', 'charminar');
    karachiObjs.push(Objs);
    Objs = new KarachiObj('Masjid Tooba or Gol Masjid', 'Masjid e Tooba is located in Karachi, Sindh, Pakistan, and locally known as the Gol Masjid. It was built in 1969 in Defence Housing Society Karachi. It is often claimed to be the largest single-dome mosque in the world. It is also major tourist attraction in Karachi.', 'Gol');
    karachiObjs.push(Objs);
    Objs = new KarachiObj('Mohatta Palace Museum', "The Mohatta Palace Museum is a source of pride for the citizens of Karachi as it aspires to become a museum of international standing and a beacon of hope and commitment to the city. The palace was used as the residence of Quid-e-Azam's sister, Fatima Jinnah until her death in 1967", 'mohatta');
    karachiObjs.push(Objs);

    //adding Lahore Places
    Objs = new LahoreObj('Minar-e-Pakistan', 'Minar-e-Pakistan (Pakistan Day Memorial) is a minar which was built to commemorate the day when the Pakistan resolution was passed on March 23, 1940.', 'lahore');
    lahoreObjs.push(Objs);
    Objs = new LahoreObj('Badshahi Mosque', 'Badshahi Mosque is the second largest mosque of Pakistan, located in provincial capital Lahore of Punjab. It was built in 1673 A.D. by the sixth Mughal Emperor Aurangzeb Alamgir. The mosque remained the largest mosque of the world from 1673 to 1986.', 'badshahi');
    lahoreObjs.push(Objs);
    Objs = new LahoreObj('Lahore Fort', "The Lahore Fort, or the Shahi Qila, is a brilliant and stand-out Mughal structure. This must-visit recorded royal residence was worked by the incredible Mahmood of Ghazni in the eleventh century.", 'fort');
    lahoreObjs.push(Objs);

    //adding Islamabad Places
    Objs = new IslamabadObj('The Pakistan Monument', 'The Pakistan Monument stands erect as a petal-closed flower, arching its pointed granite blocks together towards the sky just as sports players embrace each other before a game. This harmonic convergence symbolizes Pakistan’s national unification and solidarity as one people.', 'monument');
    islamabadObjs.push(Objs);
    Objs = new IslamabadObj('Faisal Mosque', 'Recognized as one the most iconic structures of Islamabad in travel photography, the desert-tented mosque holds one of Islam’s most divine places of worship as it stretches above a surface area of 5000 square meters. Flanked with four towering spires on each corner, the sacred temple stands as an illuminated beacon from any vantage point across the city.', 'faisal');
    islamabadObjs.push(Objs);
    Objs = new IslamabadObj('Margalla Hills', "The Margalla Hills is a hill range which is part of the Himalayan foothills located within the Margalla Hills National Park, north of Islamabad, Pakistan. The Margalla range has an area of 12,605 hectares. The hills are a part of Murree hills.", 'margalla');
    islamabadObjs.push(Objs);

}());

(function () {
    var pos = 0;
    var temp = setInterval(function () {
        document.getElementsByClassName('card')[pos].style.animationName = 'scaling';
        pos++;
        if (pos > 3) {
            clearInterval(temp);
        }
    }, 1000);

}());
var arr = [];
arr[0] = base;
arr[1] = karachi;
arr[2] = lahore;
arr[3] = islamabad;
var pos = 0;
function wheel(ev) {
    if (ev.deltaY > 0) {
        //if scroll downward
        if (pos < arr.length - 1) { pos++; }
        arr[pos]();
    } else {
        //if scroll upward
        document.getElementsByClassName("container")[0].style.opacity = '1';
        if (pos > 0) {
            pos--;
        }
        arr[pos]();
    }
}
function delta(img) {
    var main = document.getElementsByClassName('container')[0];
    main.style.backgroundImage = 'url(../img/' + img + '.jpg)';
    main.style.backgroundSize = 'cover';
    if (img === 'Pakistan') {
        main.style.backgroundSize = '100% 100%';
    }
}
function enableCards() {
    var cards = document.getElementsByClassName('card');
    for (let index = 0; index < cards.length; index++) {
        cards[index].style.display = 'block';
    }
}
function disableCards() {
    var cards = document.getElementsByClassName('card');
    for (let index = 0; index < cards.length; index++) {
        cards[index].style.display = 'none';
    }
}
function enableLahories() {
    var lahories = document.getElementsByClassName('lahori');
    for (let index = 0; index < lahories.length; index++) {
        const element = lahories[index];
        element.style.display = 'block';
    }
}
function disableLahories() {
    var lahories = document.getElementsByClassName('lahori');
    for (let index = 0; index < lahories.length; index++) {
        const element = lahories[index];
        element.style.display = 'none';
    }
}
function enableKarachis() {
    var karachis = document.getElementsByClassName('karachi');
    for (let index = 0; index < karachis.length; index++) {
        const element = karachis[index];
        element.style.display = 'block';
    }
}
function disableKarachis() {
    var karachis = document.getElementsByClassName('karachi');
    for (let index = 0; index < karachis.length; index++) {
        const element = karachis[index];
        element.style.display = 'none';
    }
}
function enableIslamabad() {
    var abad = document.getElementsByClassName('abad');
    for (let index = 0; index < abad.length; index++) {
        const element = abad[index];
        element.style.display = 'block';
    }
}
function disableIslamabad() {
    var abad = document.getElementsByClassName('abad');
    for (let index = 0; index < abad.length; index++) {
        const element = abad[index];
        element.style.display = 'none';
    }
}
function karachi() {
    pos = 1;
    var id = 0;
    clearInterval(temp);
    disableCards();
    disableLahories();
    disableIslamabad();
    enableKarachis();
    document.getElementById('description').style.display = 'block';
    delta(karachiObjs[id].link);
    document.getElementById('description').innerHTML = '<h2>' + karachiObjs[id].head + '</h2><p>' + karachiObjs[id].des + '</p>';
    temp = setInterval(function () {
        if (id < karachiObjs.length - 1) {
            id++;
        } else {
            id = 0;
        }
        delta(karachiObjs[id].link);
        document.getElementById('description').innerHTML = '<h2>' + karachiObjs[id].head + '</h2><p>' + karachiObjs[id].des + '</p>';
        console.log(id);
    }, 8000);
}
function lahore() {
    clearInterval(temp);
    document.getElementById('description').style.display = 'block';
    pos = 2;
    var id = 0;
    delta('lahore');
    disableCards();
    disableIslamabad();
    disableKarachis();
    enableLahories();

    delta(lahoreObjs[id].link);
    document.getElementById('description').innerHTML = '<h2>' + lahoreObjs[id].head + '</h2><p>' + lahoreObjs[id].des + '</p>';
    temp = setInterval(function () {
        if (id < lahoreObjs.length - 1) {
            id++;
        } else {
            id = 0;
        }
        idPrev = id;
        delta(lahoreObjs[id].link);
        document.getElementById('description').innerHTML = '<h2>' + lahoreObjs[id].head + '</h2><p>' + lahoreObjs[id].des + '</p>';
        console.log(id);
    }, 8000);
}
function islamabad() {
    clearInterval(temp);
    document.getElementById('description').style.display = 'block';
    pos = 3;
    var id = 0;
    disableCards();
    disableKarachis();
    disableLahories();
    enableIslamabad();
    delta(islamabadObjs[id].link);
    document.getElementById('description').innerHTML = '<h2>' + islamabadObjs[id].head + '</h2><p>' + islamabadObjs[id].des + '</p>';
    temp = setInterval(function () {
        if (id < islamabadObjs.length - 1) {
            id++;
        } else {
            id = 0;
        }
        idPrev = id;
        delta(islamabadObjs[id].link);
        document.getElementById('description').innerHTML = '<h2>' + islamabadObjs[id].head + '</h2><p>' + islamabadObjs[id].des + '</p>';
        console.log(id);
    }, 8000);
}
function base() {
    clearInterval(temp);
    document.getElementById('description').style.display = 'none';
    pos = 0;
    delta('Pakistan');
    enableCards();
    disableIslamabad();
    disableKarachis();
    disableLahories();
}