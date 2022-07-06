class DonutMaker {

    constructor (numDonuts, numAutoClickers, autoClickerCost, numMultipliers, multiplierCost, userClick){
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickerCost = autoClickerCost;
        this.numMultipliers = numMultipliers;
        this.multiplierCost = multiplierCost;
        this.userClick = 1;
      
    }
    
    addDonut(){
        this.numDonuts =this.numAutoClickers + this.userClick;
    }

    getTotalDonuts(){
        return this.numDonuts
    }

    getTotalAutoClicks(){
        return this.numAutoClickers
    }

    addAutoClicker(){
        if(this.numDonuts >=this.autoClickerCost){
            this.numDonuts -=this.autoClickerCost;
            this.numAutoClickers ++;
        }
        if(this.addAutoClicker >1){
            this.autoClickerCost = this.autoClickerCost*1.1
        }                
        }

    runAutoClicker(){
        if(this.numAutoClickers >=1){
        this.userClick ++;
        }
        }    

    getTotalMultipliers(){
        return this.numMultipliers;
        }

    addDonutMultiplier(){
        if(this.numDonuts >=this.multiplierCost){
            this.numDonuts -=this.multiplierCost;
            this.numMultipliers ++;
            }
        if(this.addDonutMultiplier >1){
            this.multiplierCost = this.multiplierCost*1.1
            }
        }

    increaseNumberOfDonutsWithMultiplier(){
        this.numDonuts = this.numDonuts*1.2**this.numMultipliers
    }

    increaseValueOfAuticlicker

    getMultiplierCost(){
        return this.multiplierCost 
        }

    }

export default DonutMaker;