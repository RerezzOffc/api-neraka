module.exports = (req, res) => {
  const motivasiList = [
    "Aku yang berjuang untuk mu lalu orang lain yang mendapatkan mu",
    "Aku masih menantimu sampai saat ini",
    "Terkadang kamu harus merelakan agar bisa lebih bahagia",
    "Hidup itu pilihan, pilihlah yang terbaik untuk dirimu"
  ];

  // Pilih motivasi secara acak
  const randomMotivasi = motivasiList[Math.floor(Math.random() * motivasiList.length)];

  // Mengirim respons JSON
  res.status(200).json({ motivasi: randomMotivasi });
};
