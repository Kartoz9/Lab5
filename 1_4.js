function someFunction(...args) {
    let sum = 0;
    let sentence = '';
  
    for (const arg of args) {
      if (typeof arg === 'number') {
        sum += arg;
      } else if (typeof arg === 'string') {
        if (sentence) {
          sentence += ' ' + arg;
        } else {
          sentence += arg;
        }
      }
    }
  
    console.log('sum =', sum);
    console.log(sentence);
  }
  
  someFunction('Jane', 1, 3, 'like', 5, 9, 'read', 4, 'book');
  