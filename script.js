// const button = document.querySelector("button");
// const textZone= document.querySelector(".text-zone");

// const handleData =(data) =>{
//     const newData = data.map((item) =>{
//         return item
//     })
//     textZone.innerHTML =`<span>${newData}</span>`;

// }

// const getData = async () =>{
//     const result = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
//     const data = await result.json();
//     handleData(data)
//     // console.log(data)
// }
// button.addEventListener("click", getData);


const input = document.querySelector(".money-input");
const button = document.querySelector(".button");
const calculatorButton = document.querySelector(".calculator");
const cursesButton = document.querySelector(".curses");

const form1 = document.querySelector("#first-form");
const form2 = document.querySelector("#second-form")
const mainContainer = document.querySelector(".common-container")
const container = document.querySelector('.container');

calculatorButton.addEventListener('click',() =>{
    mainContainer.style.display = "none";
    cursesButton.classList.remove("color")
    calculatorButton.classList.add("color")
    form1.classList.add("form-active");
    form2.classList.add("form-active");
})
cursesButton.addEventListener('click',() =>{
    form1.classList.remove("form-active");
    form2.classList.remove("form-active");
    calculatorButton.classList.remove("color")
    mainContainer.style.display = "flex";
    cursesButton.classList.add("color");
})

input.addEventListener('click',()=>{
    const label = document.querySelector("#money");
    label.classList.add("transition");
    input.setAttribute("placeholder", "თანხა");

})


const convertMoney =  (data) =>{
    input.addEventListener('keyup',(e) =>{
        const secondOption =document.querySelector("#second-lister")
        const secondInput = document.querySelector(".second-input");
        const value = e.target.value;
        // console.log(value)
        const label = document.querySelector("#money");
        label.classList.add("transition");
        container.addEventListener('click',() =>{
            if(input.value === ""){
                // setTimeout(() =>{
               label.classList.remove("transition");
            // },100)
            }
    })
        const {rates} =data;
        const {GEL,GBP,USD,EUR} = rates;
        let option = secondOption.value;
        let multiply = 1;
        if (option === "USD") {
            multiply = input.value * USD;
            secondInput.setAttribute("placeholder", multiply);
        } else if (option === "GBP") {
            multiply = input.value * GBP;
            secondInput.setAttribute("placeholder", multiply);
        } else if (option === "EUR") {
            multiply = input.value * EUR;
            secondInput.setAttribute("placeholder", multiply);
        } else if (option === "GEL") {
            multiply = input.value * GEL;
            secondInput.setAttribute("placeholder", multiply);
        }
        secondOption.addEventListener('change', () => {
            const { rates } = data;
            const { GEL, GBP, USD, EUR } = rates;
            let option = secondOption.value;
            let multiply = 1;
            if (option === "USD") {
                multiply = input.value * USD;
                secondInput.setAttribute("placeholder", multiply);
            } else if (option === "GBP") {
                multiply = input.value * GBP;
                secondInput.setAttribute("placeholder", multiply);
            } else if (option === "EUR") {
                multiply = input.value * EUR;
                secondInput.setAttribute("placeholder", multiply);
            } else if (option === "GEL") {
                multiply = input.value * GEL;
                secondInput.setAttribute("placeholder", multiply);
            }
        })
})
}

// change gamoiyeneba select,optionebtan samushaod!!
const usdInGel =  (data) =>{
    const outerListItem = document.querySelector(".list-item");

    const{rates} = data;
    const{GEL,USD,EUR,GBP} =rates;
    const gela = 
    `${GEL}`
    
    const li = document.createElement("li");
    li.classList.add("inner-li");
    li.innerHTML = `${gela}`
    outerListItem.appendChild(li);
} 
const eurInGel =(data)=>{
    const outerListItem = document.querySelector(".list-item");

    const{rates} = data;
    const{GEL,USD,EUR,GBP} =rates;
    const gela = 
    `${GEL}`
    
    const li = document.createElement("li");
    li.classList.add("inner-li");
    li.innerHTML = `${gela}`
    outerListItem.appendChild(li);
}

const gbpInGEL = () =>{
    const outerListItem = document.querySelector(".list-item");

    const{rates} = data;
    const{GEL,USD,EUR,GBP} =rates;
    const gela = 
    `${GEL}`
    
    const li = document.createElement("li");
    li.classList.add("inner-li");
    li.innerHTML = `${gela}`
    outerListItem.appendChild(li);
}

const getCurrencyGEL = async () =>{
    try{
        const result = await fetch('https://api.exchangerate-api.com/v4/latest/GEL');
        const data = await result.json();
        if(!result.ok){
            const error =new Error(data.message);
            throw error;
        }
        convertMoney(data);
        localStorage.setItem("test4",JSON.stringify(data));
        const storeData4 = JSON.parse(localStorage.getItem("apiData"));
        console.log(storeData4);
    }
    catch(error){
        console.error(error)
    }
}

const getCurrencyUSD = async () =>{
    try{
        const result = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await result.json();
        if(!result.ok){
            const error =new Error(data.message);
            throw error;
        }
        eurInGel(data)
        localStorage.setItem("test3",JSON.stringify(data));
        const storeData3 = JSON.parse(localStorage.getItem("apiData"));
        console.log(storeData3);
    }
    catch(error){
        console.error(error)
    }
}
const getCurrencyEUR = async () =>{
    try{
        const result = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
        const data = await result.json();
        if(!result.ok){
            const error =new Error(data.message);
            throw error;
        }
        eurInGel(data)
        localStorage.setItem("test2",JSON.stringify(data));
        const storeData2 = JSON.parse(localStorage.getItem("apiData"));
        console.log(storeData2);
    }
    catch(error){
        console.error(error)
    }

}
const getCurrencyGBP = async () =>{
    try{const result = await fetch('https://api.exchangerate-api.com/v4/latest/GBP');
    const data = await result.json();
    if(!result.ok){
        const error = new Error(data.message)
        throw error;
    }
    console.log(data)
    console.log(result)
    eurInGel(data)
    localStorage.setItem("test",JSON.stringify(data))
    const srotedData = JSON.parse(localStorage.getItem("apiData"))
    console.log(srotedData);
    }catch(error){
        console.error(error)
    }
}

getCurrencyUSD();
getCurrencyEUR();
getCurrencyGBP();
getCurrencyGEL();