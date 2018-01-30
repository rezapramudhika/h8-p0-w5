
/**PSEUDOCODE
 * 1. Initialize 'listBarang' to 2D array that each row contain item name and item cost
 * 2. Function shoppingTime (parm1, parm2)
 *      Initialize checkOut to an object that contain memberId, money, listPurchased and changeMoney
 *      IF parm1 is equal to empty string, THEN:
 *          return 'Mohon maaf, toko X hanya berlaku untuk member saja'
 *      ELSE IF parm1 and parm2 is undefined
 *          return 'Mohon maaf, toko X hanya berlaku untuk member saja'
 *      ELSE
 *          Initialize 'moneyTemp' to parm2
 *          FOR each value in 'listBarang':
 *              IF 'moneyTemp' is more than or equal to item cost in listBarang[position], THEN:
 *                  PUSH the item name in listBarang[position] to listPurchased object in 'checkOut' variable
 *                  subtract the value of 'moneyTemp' with the item cost
 *              ENDIF
 *          ENDFOR
 *          IF listPurchased object in 'checkOut' variable is empty, THEN:
 *              RETURN 'Mohon maaf, uang tidak cukup'
 *          ELSE
 *              Set memberId object in 'checkOut' variable to parm1
 *              Set money object in 'checkOut' variable to parm2
 *              Set changeMoney object in 'checkOut' variable to moneyTemp
 *              RETURN 'checkOut'
 *          ENDIF
 *      ENDIF
 */

function shoppingTime(memberId, money) {
    var listBarang =[['Sepatu Stacattu', 1500000], 
                 ['Baju Zoro', 500000], 
                 ['Baju H&M', 250000], 
                 ['Sweater Uniklooh', 175000], 
                 ['Casing Handphone', 50000]];
    var checkout = {
        memberId: '',
        money: 0,
        listPurchased: [],
        changeMoney: money
    }
    if(memberId === '' || memberId === undefined){
        return 'Mohon maaf, toko x hanya berlaku untuk member saja'
    }else if(money<50000){
        return 'Mohon maaf, uang tidak cukup'
    }else{
        checkout.memberId = memberId;
        checkout.money = money;
        for (var i=0; i<=listBarang.length-1; i++){
            if(money >= listBarang[i][1]){
                checkout.listPurchased.push(listBarang[i][0]);
                checkout.changeMoney -= listBarang[i][1];
            }
        }
        return checkout;
    }
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
