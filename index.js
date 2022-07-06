import DonutMaker from "./DonutMaker"


 

renderPage();

function renderPage() {
    runGame();
    
}

function runGame(){

    const nameInput = document.querySelector('#name');
    const startBtn = document.querySelector('#start');
    
    

    startBtn.addEventListener('click',()=> {
        const createUser = new DonutMaker(nameInput.value, 0,0,0,0,0);
        const userName = document.querySelector('#userName')
        const userInforPara = document.createElement('p');
        

        userInforPara.innerText = 'Gamer: ' +createUser.user + ' Total Donuts: '+createUser.numDonuts+ ' Total Autoclikers: '+createUser.numAutoClickers+
        ' Cost Autoclickers: '+createUser.autoClickerCost+ ' Total Multipliers: '+ createUser.numMultipliers+
        ' Cost Multiplier: '+createUser.multiplierCost

        userName.appendChild(userInforPara);

        const numDonuts = document.querySelector("#numDonuts")
        const donutBtn = document.querySelector("#addDonutBtn")
        const autoClickerBtn = document.querySelector("#addAutoClickerBtn")
        const numAutoClickers = document.querySelector('#numAutoClikers')
        const numMultipliers = document.querySelector('#numMultipliers') 
        const multiplierBtn = document.querySelector('#addMultiplierBtn')

        const updateDonutCount = (numDonuts, createUser) =>{
            numDonuts.textContent = Math.round(createUser.getTotalDonuts())
        }

        const updateAutoClickerCount = (numAutoClickers, createUser) => {
            numAutoClickers.textContent = Math.round(createUser.getTotalAutoClicks())
          }
        
        const updateMultiplierCount = (numMultipliers, createUser) => {
            numMultipliers.textContent = Math.round(createUser.getTotalMultipliers())
          }
        

        const makeDonutBtn = (donutBtn, numDonuts, createUser)
            donutBtn.addEventListener('click',()=>{
                createUser.addDonut()
                updateDonutCount(numDonuts, createUser)
            })
        
        const makeAutoclickerBtn = (autoClickerBtn, numDonuts, numAutoClickers, createUser)
            autoClickerBtn.addEventListener('click',()=>{
                createUser.addAutoClicker()
                //updateDonutCount(numDonuts,createUser)
                updateAutoClickerCount(numAutoClickers, createUser)
            })

        const makeMultiplierBtn = (multiplierBtn, numDonuts, numMultipliers, createUser)
            multiplierBtn.addEventListener('click',()=>{
                createUser.addDonutMultiplier()
                //updateDonutCount(numDonuts,createUser)
                updateMultiplierCount(numMultipliers, createUser)
            })

        })      
       
  
    }
