class DonutMaker {

    constructor (user, numDonuts, numAutoClickers, autoClickerCost, numMultipliers, multiplierCost, userClick){
        this.user=user;
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickerCost = autoClickerCost;
        this.numMultipliers = numMultipliers;
        this.multiplierCost = multiplierCost;
        this.userClick = 1;
      
    }
    
    addDonut(){
        this.numDonuts =this.numDonuts + this.numAutoClickers+ this.numMultipliers+this.userClick;
    }

    calculatingValuePerClick(){
        this.userClick = this.numAutoClickers + this.numMultipliers + this.userClick
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
            this.increaseAutoClickerCost()
        }
    }
    increaseAutoClickerCost() {
            this.autoClickerCost = this.autoClickerCost*1.1       
        }
    
    addDonutMultiplier(){
        if(this.numDonuts >=this.multiplierCost){
            this.numDonuts -=this.multiplierCost;
            this.numMultipliers ++;
            this.increaseMultiplierCost()
            // this.increaseNumberOfDonutsWithMultiplier()
                
            }
        }
    
    increaseMultiplierCost() {
        this.multiplierCost = this.multiplierCost*1.1
        }  
    increaseNumberOfDonutsWithMultiplier(){
        this.numDonuts = this.numDonuts*1.2**this.numMultipliers
        }            
    



    getCostAutoClicker (){
        return this.autoClickerCost*1.1
    }

        
    runAutoClicker(){
        if(this.numAutoClickers >=1){
        this.numDonuts =this.numDonuts + this.autoClickerCost*1;
        }
        }  
        
    // activateAutoclicker(){
    //     if(this.numAutoClickers >= 1){
    //         setInterval(() => {
    //             this.numDonuts += this.numDonuts + (this.numMultipliers * this.numAutoClickers);
                    
    //             }, 1000);
                 
    //         }
    //     }

    getTotalMultipliers(){
        return this.numMultipliers;
        }

   
          
    getMultiplierCost(){
        return this.multiplierCost*1.1
        }

    }

export default DonutMaker;