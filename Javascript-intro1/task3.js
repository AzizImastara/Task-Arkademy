const num = 5;

if (typeof num === 'number' && num > 0) {
  for (let i = num; i >= 1; i--) {
    let cetakSegitiga = ''
    for (let j = 1; j <= i; j++){
      cetakSegitiga += j    
    }
    console.log(cetakSegitiga);
  }
} 
else {
  console.log('Data harus number');
}