
let jumlahKeranjang = 0;

function tambahKeranjang() {

    jumlahKeranjang++;

    document.getElementById("cart-count").innerText =
        jumlahKeranjang;

    alert("Produk berhasil ditambahkan ke keranjang!");
}
