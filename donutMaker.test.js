import { TestWatcher } from 'jest';
import DonutMaker from './DonutMaker';


describe('DonutMaker',() =>{

    test('Add one donuts when click Add a donuts and retrive total count', () =>{
        const underTest = new DonutMaker(0);
        underTest.addDonut();
        expect(underTest.numDonuts).toEqual(1);
      })

      test('Able to add autoclicker when donuts are 100 donuts', () =>{
        const underTest = new DonutMaker(100, 0);
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


    })


 