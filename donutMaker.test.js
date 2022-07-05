import { TestWatcher } from 'jest';
import DonutMaker from './DonutMaker';


describe('DonutMaker',() =>{

    test('Add one donuts when click Add a donuts and retrive total count', () =>{
        const underTest = new DonutMaker(0,0,0,0,0,1);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(1);
      })
    test('Add one donuts when click Add a donuts and autoclick is running retrive total count', () =>{
      const underTest = new DonutMaker(0,2,0,0,0,1);
      underTest.addDonut();
      expect(underTest.numDonuts).toEqual(3);
      })   

      test('Retrive total donuts', () =>{
        const underTest = new DonutMaker(100,0,0);
        underTest.getTotalDonuts();
        expect(underTest.numDonuts).toEqual(100);
      })
      
      test('Retrive total number of Autoclicks', () =>{
        const underTest = new DonutMaker(100, 4, 100, 2, 1000);
        underTest.getTotalAutoClicks();
        expect(underTest.numAutoClickers).toEqual(4);
      })

      test('Able to add autoclicker when donuts are 100 donuts', () =>{
        const underTest = new DonutMaker(100, 0, 100);
        underTest.addAutoClicker();
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClickers).toEqual(1);
      })

      test('Should not be able to purchase autoclickers if total donuts is lower than 100', () => {
        const underTest = new DonutMaker(97, 0);
        underTest.addAutoClicker();
        expect(underTest.numDonuts).toEqual(97);
        expect(underTest.numAutoClickers).toEqual(0);
      })


      test ('Increase the cost of the second autoclicker in 10%', () =>{
        const underTest = new DonutMaker(100, 2, 110);
        underTest.addAutoClicker();
        expect(underTest.autoClickerCost).toEqual(110);
        
      })


      test ('Increase the cost of every aditional autoclicker in 10%', () =>{
        const underTest = new DonutMaker(100, 3, 121);
        underTest.addAutoClicker();
        expect(underTest.autoClickerCost).toEqual(121);
        
      })

    test ('The amount of auto clicker affects the amount of donuts added', () =>{
      const underTest = new DonutMaker(0, 3, 121,0,0,1);
      underTest.addDonut();
      expect(underTest.numDonuts).toEqual(4);
    })

  test ('Should retrive the multiplier count', () =>{
    const underTest = new DonutMaker(100, 0, 100, 2, 1000,1);
    underTest.getTotalMultipliers();
    expect(underTest.numMultipliers).toEqual(2);
    

  })

  test('Able to add donut Multiplier when donuts are 1000 donuts', () =>{
    const underTest = new DonutMaker(1000, 0, 100, 0, 1000,1);
    underTest.addDonutMultiplier()
    expect(underTest.numDonuts).toEqual(0);
    expect(underTest.numMultipliers).toEqual(1);
  })

  test('increase the click value multiplier to 1.2 to the xth power(x = amount of Donut multipliers count)', () =>{
    const underTest = new DonutMaker(2, 1, 10, 2, 10,1);
    underTest.increaseNumberOfDonutsWithMultiplier();
    expect(underTest.numDonuts).toEqual(2.88);
    
  })

  

})
