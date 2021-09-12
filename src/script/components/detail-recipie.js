class DetailRecipie extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */`
      <div class='w-full h-auto mb-16 bg-orange-soft p-8 xl:p-16'>
        <div class='flex flex-col items-center'>
          <div class='max-w-5xl w-full sm:w-8/12 hover:shadow-orange rounded-xl'>
            <div class='overflow-hidden rounded-xl'>
              <img src='https://www.masakapahariini.com/wp-content/uploads/2018/08/nugget-tempe-MAHI-780x440.jpg' alt='' class='rounded-xl scale-125 hover:scale-110 transform ease-in-out duration-100 '>
            </div>
            <div class='rounded-xl flex flex-col gap-y-3 bg-white px-4 py-8 mt-4'>
              <h2 class='text-black opacity-80 font-ubuntu font-semibold text-2xl'>Resep Nugget Tempe Mozzarella, Camilan Baru untuk Keluarga di Rumah</h2>
              <p class='text-black opacity-80 font-poppins font-medium text-base'>Tim MAHI - Agustus 13, 2018</p>
              <h4 class='text-black opacity-80 font-poppins font-semibold text-lg mt-3'>bahan - bahan :</h4>
              <ul class='flex flex-col gap-y-3'>
                <li class='text-base opacity-80 font-medium font-poppins'>1 papan tempe</li>
                <li class='text-base opacity-80 font-medium font-poppins'>3 siung bawang putih, cincang</li>
                <li class='text-base opacity-80 font-medium font-poppins'>1 batang seledri, cincang</li>
                <li class='text-base opacity-80 font-medium font-poppins'>1 butir kuning telur</li>
                <li class='text-base opacity-80 font-medium font-poppins'>2 sdm Royco Kaldu Ayam</li>
                <li class='text-base opacity-80 font-medium font-poppins'>1 batang daun ketumbar, cincang</li>
                <li class='text-base opacity-80 font-medium font-poppins'>minyak goreng</li>
                <li class='text-base opacity-80 font-medium font-poppins'>1 butir putih telur</li>
                <li class='text-base opacity-80 font-medium font-poppins'>1 kotak keju mozzarella</li>
                <li class='text-base opacity-80 font-medium font-poppins'>100 g tepung panir</li>
              </ul>
              <h4 class='text-black opacity-80 font-poppins font-semibold text-lg mt-3'>Cara membuat :</h4>
              <ul class='flex flex-col gap-y-3'>
                <li class='text-base opacity-80 font-medium font-poppins'>1 Kukus tempe sampai lunak.</li>
                <li class='text-base opacity-80 font-medium font-poppins'>2 Masukkan semua bahan kecuali putih telur ke dalam food processor atau ulekan. Haluskan.</li>
                <li class='text-base opacity-80 font-medium font-poppins'>3 Bentuk seperti nugget, celup ke dalam putih telur dan tepung panir. Sisipkan keju mozarella yang sudah dipotong dadu.</li>
                <li class='text-base opacity-80 font-medium font-poppins'>4 Goreng tempe hingga keemasan. Angkat dan sisihkan.</li>
                <li class='text-base opacity-80 font-medium font-poppins'>5 Sajikan dengan saus tomat serta labu siam dan wortel berukuran mini yang telah kukus.</li>
              </ul>
            </div>
          </div>
          <button class='sticky bg-orange-primary opacity-70 font-ubuntu font-bold p-2 hover:opacity-100 hover:shadow-orange rounded-md text-white self-end bottom-5'>Simpan</button>
        </div>
      </div>
    `
  }
}

customElements.define('detail-recipie', DetailRecipie)
