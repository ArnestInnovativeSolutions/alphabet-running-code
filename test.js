function isLastDayOfMonth(date){
  return date.getDate() == new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
}

/***
 * Find all invoice for the day and those are are not LDOM
 */
function findInvoicesOfGivenDate(day) {
  return lstartDates.filter(d => d.getDate() === day && !isLastDayOfMonth(d));
}
/***
 * Find all invoice of LDOM
 */
function findEOMInvoices() {
  return lstartDates.filter(d => isLastDayOfMonth(d));
}

const ldate = '2024-01-30';
const lstartDates = [new Date('2023-11-28'), new Date('2023-11-29'), new Date('2023-11-30'), 
new Date('2023-12-28'), new Date('2023-12-29'), new Date('2023-12-30'), new Date('2023-12-31'), 
new Date('2024-01-01'), new Date('2024-01-15'), new Date('2024-01-30'), new Date('2024-01-31'), 
new Date('2024-02-27'), new Date('2024-02-28'), new Date('2024-02-29')];
var date1 = new Date(ldate);

/**
 * TBD: ld is 28, 29, 30
 */
function testInvoiceGenerationSearch() {
  for (var i = 0; i < 700; i++) {
    const isNowLDOM = isLastDayOfMonth(date1);
    const dateNumber = date1.getDate();
    if (isNowLDOM) {
        console.log('LDOM invoices', date1.toLocaleString());
        const datesToProcess = [];
        const invs1 = findEOMInvoices();
        invs1.map(v => datesToProcess.push(v));
        if(date1.getMonth() === 1) { // handle for february
          // const invs = findInvoicesOfGivenDate(30);
          // invs.map(v => datesToProcess.push(v));
          for(var j = dateNumber; j < 31; j++) { 
            console.log('handle february', date1.getMonth(), dateNumber, j);
            // if Feb 28: handle: 30 dates of feb and , 
            // if Feb 29: handle: 30 date
            const invs = findInvoicesOfGivenDate(j);
            invs.map(v => datesToProcess.push(v));
          }
        }

        console.log(datesToProcess);
    } else {
        const datesToProcess = [];
        const invs1 = findInvoicesOfGivenDate(dateNumber);
        invs1.map(v => datesToProcess.push(v));
        if(datesToProcess.length > 0) {
          console.log('Matching day invoices', dateNumber, date1.toLocaleString());
          console.log(datesToProcess);
        }
      }

    date1 = new Date(date1.setDate(dateNumber + 1));
  }
}

testInvoiceGenerationSearch();

function getAllInvoiceDate() {
  const dateStart = new Date(ldate);
  const isLDOM = isLastDayOfMonth(dateStart);
  console.log(isLDOM ? 'LDOM': 'Every Month On', dateStart.toLocaleString(), '\n');
  
  for (var i = 0; i < 1000; i++) {
    const isNowLDOM = isLastDayOfMonth(date1);
    if (isLDOM) {
      if (isNowLDOM) {
        console.log(date1.toLocaleString());
      }
    } else {
      if (dateStart.getDate() === date1.getDate()) {
        console.log(date1.toLocaleString());
      }
    }

    date1 = new Date(date1.setDate(date1.getDate() + 1));
  }
}


function testRiddle1() {
/*
A priest went to temple with X number of flowers
When the priest enter the temple the flower doubled
The priest did archana with Y number of flowers
When Priest completed 3 days of archana the flower become 0
Find X and Y
*/
console.log("Started");
let answer = "";
const TestMax = 50;
for (let flowers_i = 1; flowers_i < TestMax; flowers_i++) {
  for (let used_flowers = 1; used_flowers < TestMax; used_flowers++) {
    let no_flowers = flowers_i; // initial
    for (k = 1; k <= 3; k++) {
      //   f = f * 2; // double
      //   f = f - j; // used j
      no_flowers = no_flowers * 2 - used_flowers; // double and used j
    }

    // check remaining is 0
    if (no_flowers == 0) {
      answer += "\n" + "  initial: " + flowers_i + "  used:" + used_flowers;
    }
  }
}

console.log("Answer", answer);
console.log("completed");
}