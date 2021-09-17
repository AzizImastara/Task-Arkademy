const ArkFood = (harga, voucher, jarak, pajak) => {
    let potongan = 0;
    let biayaAntar = 0;
    let biayaPajak = 0;

    // VOUCHER
    if((voucher = 'ARKAFOOD5')){
        if (harga >= 50000){
            potongan += (harga * 50) / 100;
            if (potongan >= 50000){
                potongan = 50000
            }
        } else {
            potongan = false;
        }
    } else if ((voucher = 'DITRAKTIRDEMY')){
        if (harga >= 25000){
            potongan += (harga * 60) / 100;
            if (potongan >= 30000){
                potongan = 30000
            }
        } else {
            potongan = false;
        }
    }

    // JARAK
    if (jarak > 2){
        biayaAntar += (jarak -2) * 3000 + 5000;
    } else if (jarak == 2){
        biayaAntar = 5000;
    } else {
        biayaAntar = 0;
    }

    // PAJAK
    if (pajak == true){
        biayaPajak += (harga * 5) / 100;
    } else {
        biayaPajak = false;
    }

    let total = harga - potongan + biayaAntar + biayaPajak;

    console.log(`Harga       : ${harga}
potongan    : ${potongan}
Biaya Antar : ${biayaAntar}
Biaya Pajak : ${biayaPajak}
Total       : ${total}`);

}


ArkFood(75000, 'ARKAFOOD5', 5, true);