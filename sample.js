
ej.base.enableRipple(true);

let gridData = [
    {
        OrderID: 10248,
        CustomerID: "VINET",
        Field1: 5,
        OrderDate: new Date(8364186e5),
        Field2: "Vins et alcools Chevalier",
        Field3: "Reims",
        Field4: "59 rue de l Abbaye Ave. Carlos Soublette #8-35",
        Field5: "CJ",
        ShipPostalCode: "51100",
        ShipCountry: "France",
        Freight: 32.38,
        Field7: !0,
        Field6: 1,
        Field8: 1,
        Field9: 1,
        Field10: 1,
    },
    {
        OrderID: 10249,
        CustomerID: "TOMSP",
        Field1: 6,
        OrderDate: new Date(836505e6),
        Field2: "Toms Spezialitäten",
        Field3: "Münster",
        Field4: "Luisenstr. 48 Ave.",
        Field5: "CJ",
        ShipPostalCode: "44087",
        ShipCountry: "Germany",
        Freight: 11.61,
        Field7: !1,
        Field6: 2,
        Field8: 2,
        Field9: 2,
        Field10: 2,
    },
    {
        OrderID: 10250,
        CustomerID: "HANAR",
        Field1: 2,
        OrderDate: new Date(8367642e5),
        Field2: "Hanari Carnes",
        Field3: "Rio de Janeiro",
        Field4: "Rua do Paço, 67 Ave",
        Field5: "RJ",
        ShipPostalCode: "05454-876",
        ShipCountry: "Brazil",
        Freight: 65.83,
        Field7: !0,
        Field6: 3,
        Field8: 3,
        Field9: 3,
        Field10: 3,
    },
    {
        OrderID: 10251,
        CustomerID: "VICTE",
        Field1: 3,
        OrderDate: new Date(8367642e5),
        Field2: "Victuailles en stock",
        Field3: "Lyon",
        Field4: "2, rue du Commerce Ave. Carlos Soublette #8-35",
        Field5: "CJ",
        ShipPostalCode: "69004",
        ShipCountry: "France",
        Freight: 41.34,
        Field7: !0,
        Field6: 4,
        Field8: 4,
        Field9: 4,
        Field10: 4,
    },
    {
        OrderID: 10252,
        CustomerID: "SUPRD",
        Field1: 4,
        OrderDate: new Date(8368506e5),
        Field2: "Suprêmes délices",
        Field3: "Charleroi",
        Field4: "Boulevard Tirou, 25 Ave",
        Field5: "CJ",
        ShipPostalCode: "B-6000",
        ShipCountry: "Belgium",
        Freight: 51.3,
        Field7: !0,
        Field6: 5,
        Field8: 5,
        Field9: 5,
        Field10: 5,
    },
    {
        OrderID: 10253,
        CustomerID: "HANAR",
        Field1: 3,
        OrderDate: new Date(836937e6),
        Field2: "Hanari Carnes",
        Field3: "Rio de Janeiro",
        Field4: "Rua do Paço, 6 Ave. Carlos Soublette #8-357",
        Field5: "RJ",
        ShipPostalCode: "05454-876",
        ShipCountry: "Brazil",
        Freight: 58.17,
        Field7: !0,
        Field6: 6,
        Field8: 6,
        Field9: 6,
        Field10: 6,
    },
    {
        OrderID: 10254,
        CustomerID: "CHOPS",
        Field1: 5,
        OrderDate: new Date(8370234e5),
        Field2: "Chop-suey Chinese",
        Field3: "Bern",
        Field4: "Hauptstr. 31 Ave. Carlos Soublette #8-35",
        Field5: "CJ",
        ShipPostalCode: "3012",
        ShipCountry: "Switzerland",
        Freight: 22.98,
        Field7: !1,
        Field6: 7,
        Field8: 7,
        Field9: 7,
        Field10: 7,
    },
    {
        OrderID: 10255,
        CustomerID: "RICSU",
        Field1: 9,
        OrderDate: new Date(8371098e5),
        Field2: "Richter Supermarkt",
        Field3: "Genève",
        Field4: "Starenweg 5 Ave.",
        Field5: "CJ",
        ShipPostalCode: "1204",
        ShipCountry: "Switzerland",
        Freight: 148.33,
        Field7: !0,
        Field6: 8,
        Field8: 8,
        Field9: 8,
        Field10: 8,
    },
    {
        OrderID: 10256,
        CustomerID: "WELLI",
        Field1: 3,
        OrderDate: new Date(837369e6),
        Field2: "Wellington Importadora",
        Field3: "Resende",
        Field4: "Rua do Mercado, 12 Ave.#8-35",
        Field5: "SP",
        ShipPostalCode: "08737-363",
        ShipCountry: "Brazil",
        Freight: 13.97,
        Field7: !1,
        Field6: 9,
        Field8: 9,
        Field9: 9,
        Field10: 9,
    },
    {
        OrderID: 10257,
        CustomerID: "HILAA",
        Field1: 4,
        OrderDate: new Date(8374554e5),
        Field2: "HILARION-Abastos",
        Field3: "San Cristóbal",
        Field4: "Carrera 22 con Ave. Carlos #8-35",
        Field5: "Táchira",
        ShipPostalCode: "5022",
        ShipCountry: "Venezuela",
        Freight: 81.91,
        Field7: !0,
        Field6: 9,
        Field8: 9,
        Field9: 9,
        Field10: 9,
    },
    {
        OrderID: 10258,
        CustomerID: "ERNSH",
        Field1: 1,
        OrderDate: new Date(8375418e5),
        Field2: "Ernst Handel",
        Field3: "Graz",
        Field4: "Kirchgasse 6",
        Field5: "CJ",
        ShipPostalCode: "8010",
        ShipCountry: "Austria",
        Freight: 140.51,
        Field7: !0,
        Field6: 10,
        Field8: 10,
        Field9: 10,
        Field10: 10,
    },
    {
        OrderID: 10259,
        CustomerID: "CENTC",
        Field1: 7,
        OrderDate: new Date(8376282e5),
        Field2: "Centro comercial Moctezuma",
        Field3: "México D.F.",
        Field4: "Sierras de Granada 9993",
        Field5: "CJ",
        ShipPostalCode: "05022",
        ShipCountry: "Mexico",
        Freight: 3.25,
        Field7: !1,
        Field6: 11,
        Field8: 11,
        Field9: 11,
        Field10: 11,
    },
    {
        OrderID: 10260,
        CustomerID: "OTTIK",
        Field1: 4,
        OrderDate: new Date(8377146e5),
        Field2: "Ottilies Käseladen",
        Field3: "Köln",
        Field4: "Mehrheimerstr. 369",
        Field5: "CJ",
        ShipPostalCode: "50739",
        ShipCountry: "Germany",
        Freight: 55.09,
        Field7: !0,
        Field6: 12,
        Field8: 12,
        Field9: 12,
        Field10: 12,
    },
    {
        OrderID: 10261,
        CustomerID: "QUEDE",
        Field1: 2,
        OrderDate: new Date(8377146e5),
        Field2: "Que Delícia",
        Field3: "Rio de Janeiro",
        Field4: "Rua da Panificadora, 12",
        Field5: "RJ",
        ShipPostalCode: "02389-673",
        ShipCountry: "Brazil",
        Freight: 3.05,
        Field7: !1,
        Field6: 13,
        Field8: 13,
        Field9: 13,
        Field10: 13,
    },
    {
        OrderID: 10262,
        CustomerID: "RATTC",
        Field1: 8,
        OrderDate: new Date(8379738e5),
        Field2: "Rattlesnake Canyon Grocery",
        Field3: "Albuquerque",
        Field4: "2817 Milton Dr.",
        Field5: "NM",
        ShipPostalCode: "87110",
        ShipCountry: "USA",
        Freight: 48.29,
        Field7: !0,
        Field6: 14,
        Field8: 14,
        Field9: 14,
        Field10: 14,
    },
];
for (var i = 0; i < 200; i++) {
    gridData.push({
        OrderID: i + 1,
        CustomerID: "RATTC",
        Field1: 8,
        OrderDate: new Date(8379738e5),
        Field2: "Rattlesnake Canyon Grocery",
        Field3: "Albuquerque",
        Field4: "2817 Milton Dr Ave. Carlos Soublette #8-35.",
        Field5: "NM",
        ShipPostalCode: "87110",
        ShipCountry: "USA",
        Freight: 48.29,
        Field7: !0,
        Field6: 15,
        Field8: 15,
        Field9: 15,
        Field10: 15,
    });
}

var grid = new ej.grids.Grid({
    dataSource: gridData,
    pageSettings: { pageSize: 20 },
    allowPaging: true,
    enableAutoFill: true,
    toolbar: ['Add', 'Update', 'Cancel'],
    selectionSettings: { type: 'Multiple', mode: 'Cell', cellSelectionMode: 'Box' },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
    columns: [
        {
            field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', textAlign: 'Right',
            validationRules: { required: true, number: true }, visible: true, width: 120,
        },
        {
            field: 'CustomerID', headerText: 'Customer ID',
            validationRules: { required: true }, width: 140,
        },
        { field: 'Field4', width: 160 },
        { field: 'Field1', width: 160, visible: true },
        {
            field: 'ShipCountry', headerText: 'Ship Country', visible: true, editType: 'dropdownedit', width: 150,
            edit: { params: { popupHeight: '300px' } }
        },
        { field: 'Field2', width: 180 },
        { field: 'Field3', width: 90 },
        { field: 'Field5', width: 140 },
        { field: 'Field6', width: 170 },
        { field: 'Field7', width: 150 },
        {
            field: 'Freight', headerText: 'Freight', textAlign: 'Right', editType: 'numericedit',
            width: 120, format: 'C2', validationRules: { required: true }
        },
        {
            field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', format: 'yMd',
            width: 170,
        },
        { field: 'Field8', width: 110 },
        { field: 'Field9', width: 110 },
        {
            field: 'Field10', width: 130,
        },
    ],
    aggregates: [{
        columns: [{
            type: 'Sum',
            field: 'Field1',
            footerTemplate: 'Sum: ${Sum}'
        }]
    }],
    height: 310,
    width: 800,
});
grid.appendTo('#Grid');

let checkbox1 = new ej.buttons.CheckBox({ label: 'Allow TextWrap', change: function (args) {
    grid.clearSelection();
    grid.allowTextWrap = args.checked;
} });
checkbox1.appendTo('#checkbox1');

let checkbox2 = new ej.buttons.CheckBox({ label: 'Allow RTL', change: function (args) {
    grid.clearSelection();
    grid.enableRtl = args.checked;
} });
checkbox2.appendTo('#checkbox2');

// initialize DropDownList component
let dropDownListObject = new ej.dropdowns.DropDownList({
    //set the data to dataSource property
    dataSource: ['25', '37', '50', null],
    // set placeholder to DropDownList input element
    placeholder: "Select rowHeight",
    width: 150,
    change: function (args) {
        grid.rowHeight = parseInt(args.value);
    }
});

// render initialized DropDownList
dropDownListObject.appendTo('#ddlelement');
