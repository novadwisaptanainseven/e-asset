export const getDataSet = (data) => {
  return [
    {
      columns: [
        {
          title: "No. Barang",
          height: { hpx: 100 },
          style: {
            alignment: { vertical: "top" },
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
          title: "Nama Barang",
          width: { wpx: 150 },
          style: {
            alignment: { vertical: "top" },
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
            alignment: { vertical: "top" },
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
          title: "Ukuran",
          width: { wpx: 80 },
          style: {
            alignment: { vertical: "top" },
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
          title: "Bahan",
          width: { wpx: 80 },
          style: {
            alignment: { vertical: "top" },
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
          title: "Tahun",
          width: { wpx: 80 },
          style: {
            alignment: { vertical: "top" },
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
          title: "Harga",
          width: { wpx: 80 },
          style: {
            alignment: { vertical: "top" },
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
            alignment: { vertical: "top" },
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
          value: item.no_barang,
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
          value: item.nama_barang,
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
          value: item.merk,
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
          value: item.ukuran,
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
          value: item.bahan,
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
          value: item.tahun,
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
          value: item.harga,
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
