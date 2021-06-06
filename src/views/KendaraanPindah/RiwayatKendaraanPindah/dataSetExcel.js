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
          title: "Merk",
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
          title: "Tipe",
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
          title: "Dari Pegawai",
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
          title: "Ke Pegawai",
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
          value: item.tanggal,
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
          value: item.kendaraan.merk,
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
          value: item.kendaraan.tipe,
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
          value: item.dari,
          style: {
            alignment: { vertical: "top", horizontal: "left" },
            border: {
              left: { style: "thin", color: { rgb: "000000" } },
              right: { style: "thin", color: { rgb: "000000" } },
              top: { style: "thin", color: { rgb: "000000" } },
              bottom: { style: "thin", color: { rgb: "000000" } },
            },
          },
        },
        {
          value: item.ke,
          style: {
            alignment: { vertical: "top", horizontal: "left" },
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
