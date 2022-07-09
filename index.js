import DonutMaker from "./DonutMaker"


 

renderPage();

function renderPage() {
    runGame();
    autoClick()
    enableAutoClickerBtn()
    enableMultiplierBtn()
    
    
    
}

function runGame(){

    const nameInput = document.querySelector('#name');
    const startBtn = document.querySelector('#start');
    const resetBtn = document.querySelector("#reset")
    
    

    startBtn.addEventListener('click',()=> {
        const createUser = new DonutMaker(nameInput.value, 0,0,9,0,90,1);
        const userName = document.querySelector('#userName')
        const userInforPara = document.createElement('p');
        

        userInforPara.innerText = 'This is your moment ' +createUser.user + 
        ' Remember, your currency are Donuts '

        userName.appendChild(userInforPara);

        const numDonuts = document.querySelector("#numDonuts")
        const donutBtn = document.querySelector("#addDonutBtn")
        const donutRate = document.querySelector('#donutrate')
        const autoClickerBtn = document.querySelector("#addAutoClickerBtn")
        const autoClickerCost = document.querySelector('#costAutoclicker')
        const numAutoClickers = document.querySelector('#numAutoClikers')
        const numMultipliers = document.querySelector('#numMultipliers') 
        const multiplierBtn = document.querySelector('#addMultiplierBtn')
        const multipliersCost = document.querySelector('#costMultiplier')
        const userClick = document.querySelector('#valueperclick')

        const updateDonutCount = (numDonuts, createUser) =>{
            numDonuts.textContent = Math.round(createUser.getTotalDonuts())
        }

        const updateAutoClickerCount = (numAutoClickers, createUser) => {
            numAutoClickers.textContent = Math.round(createUser.getTotalAutoClicks())
          }

        const updateAutoClickerCost = (autoClickerCost, createUser) =>{
            autoClickerCost.textContent = Math.round(createUser.getCostAutoClicker())
        }
       
        
        const updateMultiplierCount = (numMultipliers, createUser) => {
            numMultipliers.textContent = Math.round(createUser.getTotalMultipliers())
          }
        
        const updateMultiplierCost = (multiplierCost, createUser) => {
            multiplierCost.textContent = Math.round(createUser.getMultiplierCost())
          }  
          
        const updateValuePerClick = (userClick, createUser) =>{
            userClick.textContent = Math.round(createUser.calculateValuePerClick())
        }  

         
        const makeResetBtn=(createUser)
        resetBtn.addEventListener('click', () =>{
            location.reload()
              })
             

        

        const makeDonutBtn = (donutBtn, numDonuts, createUser)
            donutBtn.addEventListener('click',()=>{
                createUser.addDonut()
                updateDonutCount(numDonuts, createUser)
            })
        
        const makeAutoclickerBtn = (autoClickerBtn, numDonuts, numAutoClickers, createUser)
            autoClickerBtn.addEventListener('click',()=>{
                createUser.addAutoClicker()
                updateDonutCount(numDonuts,createUser)
                updateAutoClickerCount(numAutoClickers, createUser)
                updateAutoClickerCost(autoClickerCost,createUser)
            })

        const makeMultiplierBtn = (multiplierBtn, numDonuts, numMultipliers, createUser)
            multiplierBtn.addEventListener('click',()=>{
                createUser.addDonutMultiplier()
                updateDonutCount(numDonuts,createUser)
                updateMultiplierCount(numMultipliers, createUser)
                updateMultiplierCost(multipliersCost, createUser)
            })

        // const valueForEachClick = (userClick, createUser)  
        //     createUser.calculatingValuePerClick()
        //     updateValuePerClick(userClick, createUser)

        const costsForAutoClickers = (numAutoClickers, createUser)
            createUser.getCostAutoClicker()
            updateAutoClickerCost(autoClickerCost,createUser)

        const costsForMultipliers = (numMultipliers, createUser)
            createUser.getMultiplierCost()
            updateMultiplierCost(multipliersCost,createUser)            
            

        const activateAutoClicker = setInterval(autoClick, 1000)  
        function autoClick() {
            updateDonutCount(donutCount, createUser)
            createUser.runAutoClicker()
            enableAutoClickerBtn()
            enableMultiplierBtn()
        }
        function enableAutoClickerBtn() {
                    if (createUser.numDonuts >= createUser.autoClickerCost) {
                        autoClickerBtn.removeAttribute("disabled")
                    } else {
                        autoClickerBtn.disabled = true
                    }
                }
        function enableMultiplierBtn() {
                    if (createUser.numDonuts >= createUser.multiplierCost) {
                      multiplierBtn.removeAttribute("disabled")
                    } else {
                      multiplierBtn.disabled = true
                    }
                  }     

        
                 



  
        })

        
    }
