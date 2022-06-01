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

// let listaBrodova = ["broddd"];
function kreiranjeBrodova() {
  console.log("kreiranje Pozvano");
  console.log(listaBrodova);
  console.log("trenutni brodovi");
  listaBrodova = [];
  console.log(listaBrodova);
  console.log("prethodni trenutni brodovi");
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
console.log(listaBrodova);
