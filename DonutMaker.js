class DonutMaker {

    constructor (numDonuts, numAutoClickers, autoClickerCost){
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickerCost = autoClickerCost;

      
    }
    
    addDonut(){
        this.numDonuts =this.numAutoClickers + 1
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

    addMultiplier(){

    }

    


}

export default DonutMaker;