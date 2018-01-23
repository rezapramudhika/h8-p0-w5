/*Problem
Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi 
dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, 
Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, 
lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. 
Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan 
berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] 
maka output:

Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 } 
*/

/**PSEUDOCODE
 * 1. Initialize 'currentTime' to call new function Date()
 * 2. Initialize 'year' to currentTime.getFullYear()
 * 3. Function changeMe(arr)
 *      Initialize 'output' to empty string;
 *      Initialize 'obj' to {
 *          firstName: '',
 *          lastName: '',
 *          gender: '',
 *          age: ''
 *      }
 *      IF the length of 'arr' is equal to 0, THEN:
 *          PRINT ''
 *      ELSE
 *          Set moveCount to 1
 *          FOR each row in arr:
 *              IF arr[position][3] is undefined OR arr[position][3] more than 'year', THEN:
 *                  Set 'obj' to {
 *                      firstName: value of arr[position][0]
 *                      lastName: value of arr[position][1]
 *                      gender: value of arr[position][2]
 *                      age: 'Invalid Birth Year'
 *                  }
 *              ELSE
 *                  Set 'obj' to {
 *                      firstName: value of arr[position][0]
 *                      lastName: value of arr[position][1]
 *                      gender: value of arr[position][2]
 *                      age: value of arr[position][3]
 *                  }
 *              ENDIF
 *              Set 'output' to "(position+1)+'. '+obj.firstName+' '+obj.lastName+':'"
 *              PRINT 'output '   
 *              PRINT 'obj'
 *          ENDFOR
 *      ENDIF
 */

var currentTime = new Date();
var year = currentTime.getFullYear();

function changeMe(arr) { 
    var output = '';
    var obj = {
        firstName: '',
        lastName: '',
        gender: '',
        age: ''
    };
    var temp = [];
    if (arr.length === 0){
        console.log('');
    }else{
        for (var i=0; i<=arr.length-1; i++){
            if (arr[i][3] === undefined || arr[i][3]>year){
                obj = {
                    firstName: arr[i][0],
                    lastName: arr[i][1],
                    gender: arr[i][2],
                    age: 'Invalid Birth Year'
                };
            }else{
                obj = {
                    firstName: arr[i][0],
                    lastName: arr[i][1],
                    gender: arr[i][2],
                    age: year-arr[i][3]
                };
            }
            output = i+1+'. '+obj.firstName+' '+obj.lastName+':'
            console.log(output);
            console.log(obj);
            temp.push(obj)
        }
    }
    // console.log(temp);
    return temp;
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""