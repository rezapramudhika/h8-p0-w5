/*Problem
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut */

/**PSEUDOCODE
 * Function countProfit(shoppers)
 *      Initialize 'listBarang' to 2D array that contains product name, product price, and product stock
 *      Initialize 'result' to empty array
 *      IF countProfit parameters is empty, THEN:
 *          RETURN 'result'
 *      ELSE 
 *          FOR each product in 'listBarang':
 *              Initialize report to {
 *                  product: '', 
 *                  shoppers: [],
 *                  leftOver: 0, 
 *                  totalProfit: 0 
 *              }
 *              Set product object in 'report' to product name in listBarang[position]
 *              Set leftOver object in 'report' to product stock in listBarang[position]
 *              FOR each shoppers:
 *                  IF value of product object in 'report' is equal to value of product object in shoppers[position], THEN:
 *                      IF value of leftOver object in 'report' is less than value of amount in shoppers[position], THEN:
 *                          Set leftOver object in 'report' to value of leftOver - value of amount in shoppers[position]
 *                          Push name object in shoppers[position] to shoppers object in 'report'
 *                          Set totalProfit object in 'report' to value of totalProfit + (value of amount in shoppers[position] * value of product price in listBarang[position])
 *                      ENDIF
 *                  ENDIF
 *              ENDFOR
 *              Push 'report' to 'result'
 *          ENDFOR
 *      ENDIF
 */                   

function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    
    var result = [];

    if (shoppers.length === 0){
        return result;
    }else{
        for (var i=0; i<=listBarang.length-1; i++){
            var report = {
                product: '',
                shoppers: [],
                leftOver: 0,
                totalProfit: 0
            }
            report.product = listBarang[i][0];
            report.leftOver = listBarang[i][2];
            for(var j=0; j<=shoppers.length-1; j++){
                if(report.product === shoppers[j].product){
                   if (report.leftOver>=shoppers[j].amount){
                    report.leftOver -= shoppers[j].amount;
                    report.shoppers.push(shoppers[j].name);
                    report.totalProfit += listBarang[i][1]*shoppers[j].amount;
                   }
                }
            }
            result.push(report);
        }
        return result; 
    }
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
  {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
  {name: 'Devi', product: 'Baju Zoro', amount: 1}, 
  {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]