class Brod {
  constructor(ulov, id) {
    this.ulov = ulov;
    this.id = id;
  }
}

function getRandomUlov(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

class MaliBrod extends Brod {
  constructor(mid) {
    //   let randomUlov = Math.floor(Math.random() * 90+10 );
    super(getRandomUlov(10, 100), mid);
  }
  rasponUlova() {
    if (this.ulov >= 10 && this.ulov <= 100) {
      return this.ulov;
    } else return "nedovoljan ulov";
  }
}

class VelikiBrod extends Brod {
  constructor(id) {
    super(getRandomUlov(100, 300), id);
  }
}

let plovidba = document.querySelector(".btn1");
plovidba.addEventListener("click", (e) => {
  //   e.currentTarget.classList.add("blue");
  console.log("dugme 1 pritisnuto");
  kreiranjeBrodova();
});
function kreiranjeBrodova() {
  console.log("kreiranje Pozvano");
  // console.log(listaBrodova);
  // console.log("trenutni brodovi");
  listaBrodova = [];

  // console.log("prethodni trenutni brodovi");
  for (let i = 0; i < 10; i++) {
    // let napraviMaliBrod = Math.floor(Math.random()*100)%2== 1;

    let napraviMaliBrod = Math.random() < 0.5;

    if (napraviMaliBrod) {
      let mali = new MaliBrod(i);
      listaBrodova.push(mali);
    } else {
      let veliki = new VelikiBrod(i);
      listaBrodova.push(veliki);
    }
  }
  console.log(listaBrodova);
}

let isplovljavanje = document.querySelector(".btn2");
isplovljavanje.addEventListener("click", (a) => {
  linija();
  console.log("dugme 2 pritisnuto");
  lovljenje();
});
function lovljenje() {
  console.log("isplovljavanje pozvano");
  uLuci = [];
  isplovili = [];
  for (let i = 0; i < listaBrodova.length; i++) {
    if (listaBrodova[i].ulov < 10) {
      uLuci.push(listaBrodova[i]);
      // console.log(brodovi.length);
    } else {
      isplovili.push(listaBrodova[i]);
    }
  }
  console.log(`U Luci : ${uLuci.length}`);
  // console.log(uLuci);
  console.log(` Isplovili: ${isplovili.length}`);
  // console.log(isplovili);
}

let lovBrodova = document.querySelector(".btn3");
lovBrodova.addEventListener("click", () => {
  linija();
  console.log("dugme Lov pritisnuto");
  lov();
});

function lov() {
  console.log(`Lov funkicja pozvana`);
  maliLovi = [];
  velikiLovi = [];
  maliUlovio = [];
  velikiUlovio = [];

  for (let i = 0; i < isplovili.length; i++) {
    if (isplovili[i].ulov < 100) {
      maliLovi.push(isplovili[i]);
      maliUlovio.push(isplovili[i].ulov);
    } else {
      velikiLovi.push(isplovili[i]);
      velikiUlovio.push(isplovili[i].ulov);
    }
  }
  // console.log(`Mali Brodovi Ulovili ${maliUlovio}`);
  console.log(maliLovi);
  // console.log(`Veliki Brodovi Ulovili ${velikiUlovio}`)
  console.log(velikiLovi);
}

let povratakULuku = document.querySelector(".btn4");
povratakULuku.addEventListener("click", function () {
  linija();
  console.log("dugme povratak u luku pritisnuto");
  maliBrodLukaLov();
  velikiBrodLukaLov();
});

function maliBrodLukaLov() {
  maliManjeOd70 = [];
  maliVeceOd70 = [];
  trenutniULovMaliBrodovi = [];
  for (let i = 0; i < maliLovi.length; i++) {
    maliLovi[i].ulov < 70
      ? maliManjeOd70.push(maliLovi[i])
      : maliVeceOd70.push(maliLovi[i]);
    trenutniULovMaliBrodovi.push(maliLovi[i].ulov);
  }

  ispoloviliULov();
  console.log(maliManjeOd70);
  trenutnoULuci();
  console.log(maliVeceOd70);
  console.log(`Trenutni ulov mali brodovi: ${trenutniULovMaliBrodovi}`);
}

function velikiBrodLukaLov() {
  velikiManjeOd250 = [];
  velikiVeceOd250 = [];
  trenutniUlovVeliki = [];
  for (let i = 0; i < velikiLovi.length; i++) {
    velikiLovi[i].ulov < 250
      ? velikiManjeOd250.push(velikiLovi[i])
      : velikiVeceOd250.push(velikiLovi[i]);
    trenutniUlovVeliki.push(velikiLovi[i].ulov);
  }
  ispoloviliULov();
  console.log(velikiManjeOd250);
  trenutnoULuci();
  console.log(velikiVeceOd250);
  console.log(`trenutni ulov veliki brodovi: ${trenutniUlovVeliki}`);
}

let automatskiUlov = document.querySelector(".btn5");
automatskiUlov.addEventListener("click", function () {
  linija();
  console.log("dugme za automatsi ulov  pritisnuto");
  automatski();
});

function automatski() {

}

function trenutnoULuci() {
  console.log(`U LUCI: `);
}

function linija() {
  console.log(`----------------------------:`);
}
function ispoloviliULov() {
  console.log(`ISPLOVILI: `);
}


       




