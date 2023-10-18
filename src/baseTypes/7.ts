/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };

function isWeekend(days: Days):boolean { 
  if (days === Days.Saturday || days === Days.Sunday) {
    return true
  } return false
};