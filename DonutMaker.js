class DonutMaker {

    constructor (numDonuts, numAutoClickers, autoClickerCost, numMultipliers, multiplierCost){
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickerCost = autoClickerCost;
        this.numMultipliers = numMultipliers;
        this.multiplierCost = multiplierCost;

      
    }
    
    addDonut(){
        this.numDonuts =this.numAutoClickers + 1
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
            this.numAutoClickers +=1;
        }
        if(this.addAutoClicker >1){
            this.autoClickerCost = this.autoClickerCost*1.1
        }

                
        }

        getTotalMultipliers(){
            return this.numMultipliers;
        }

        addDonutMultiplier(){
            if(this.numDonuts >=this.multiplierCost){
                this.numDonuts -=this.multiplierCost;
                this.numMultipliers +=1;
            }
            if(this.addDonutMultiplier >1){
                this.autoClickerCost = this.autoClickerCost*1.1
                this.numDonuts = this.numDonuts*1.2
            }
        }

        getMultiplierCost(){
            return this.multiplierCost 
        }

    }

export default DonutMaker;