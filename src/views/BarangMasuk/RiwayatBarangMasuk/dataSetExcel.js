export const getDataSet = (data) => {
  return [
    {
      columns: [
        {
          title: "Tanggal",
          style: {
            alignment: { vertical: "center", horizontal: "center" },
            font: { bold: true },
            fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          title: "Barang",
          width: { wpx: 150 },
          style: {
            alignment: { vertical: "center", horizontal: "center" },
            font: { bold: true },
            fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          title: "Merk",
          width: { wpx: 100 },
          style: {
            alignment: { vertical: "center", horizontal: "center" },
            font: { bold: true },
            fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          title: "Ke Bidang",
          width: { wpx: 200 },
          style: {
            alignment: { vertical: "center", horizontal: "center" },
            font: { bold: true },
            fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          title: "Jml. Baik",
          width: { wpx: 80 },
          style: {
            alignment: { vertical: "center", horizontal: "center" },
            font: { bold: true },
            fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          title: "Jml. Rusak",
          width: { wpx: 80 },
          style: {
            alignment: { vertical: "center", horizontal: "center" },
            font: { bold: true },
            fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          title: "Jml. Rusak Ringan",
          width: { wpx: 80 },
          style: {
            alignment: { vertical: "center", horizontal: "center" },
            font: { bold: true },
            fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          title: "Keterangan",
          width: { wpx: 300 },
          style: {
            alignment: { vertical: "center", horizontal: "center" },
            font: { bold: true },
            fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
      ],
      data: data.map((item) => [
        {
          value: item.createdAt,
          style: {
            alignment: { vertical: "top" },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          value: item.barang.nama_barang,
          style: {
            alignment: { vertical: "top" },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          value: item.barang.merk,
          style: {
            alignment: { vertical: "top" },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          value: item.id_barang_detail,
          style: {
            alignment: { vertical: "top" },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          value: item.jumlah_baik,
          style: {
            alignment: { vertical: "top", horizontal: "center" },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          value: item.jumlah_rusak,
          style: {
            alignment: { vertical: "top", horizontal: "center" },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          value: item.jumlah_rusak_ringan,
          style: {
            alignment: { vertical: "top", horizontal: "center" },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          value: item.keterangan,
          style: {
            alignment: { vertical: "top" },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
      ]),
    },
  ];
};
