export default [
    {
        id: 1,
        topic: "Mass Balance",
        subtopic: "Calculations Mass Balance",
        module: 3,
        operation: 4,
        calculation: 5,
        description: "Mass balance is a fundamental concept in metallurgy and other engineering disciplines. It involves the accounting of mass or material flow through a system to ensure that the total mass of inputs is equal to the total mass of outputs",
        image_url: require('../assets/img1.webp'),
        calculations: [
            {
                id: 'mass-cal-1',
                title: "1 Concentrado",
                metals: [{
                    id: 'con1-metal-1',
                    title: "1 Metal",
                    cal_image: require('../assets/img2.webp'),
                    subtitle: "Crusher",
                    description: 'The concentrate value is a critical factor in the economic viability of a mining project or mineral',
                    efficiency: 0.85,
                    loss: 100,
                    numberCols: 3,
                    elements: [
                        { id: 'con1-metal1-ele-1', name: 'Alimento del circuito', type: "label", span: 1 },
                        { id: 'con1-metal1-ele-2', name: 'valor Alimento del circuito 1', type: "input", span: 2 },
                        { id: 'con1-metal1-ele-3', name: 'Producto', type: "label", span: 1 },
                        { id: 'con1-metal1-ele-4', name: 'Metal', type: "select", span: 1, values: ['Cu', 'Pb', 'Zn', 'Al', 'Fe', 'Au', 'Ag', 'Sn', 'Mo'] },
                        { id: 'con1-metal1-ele-5', name: 'Porcentaje', type: "select", span: 1, values: ['%', 'g/TM', 'Oz/TM', 'Oz/TC'] },
                        { id: 'con1-metal1-ele-6', name: 'Alimento', type: "label", span: 1 },
                        { id: 'con1-metal1-ele-7', name: 'valor Alimento 1', type: "input", span: 2 },
                        { id: 'con1-metal1-ele-8', name: 'Concentrado', type: "label", span: 1 },
                        { id: 'con1-metal1-ele-9', name: 'Valor Concentrado 1', type: "input", span: 2 },
                        { id: 'con1-metal1-ele-10', name: 'Relave', type: "label", span: 1 },
                        { id: 'con1-metal1-ele-11', name: 'Valor Relave 1', type: "input", span: 2 },
                    ]
                }]
            },
            {
                id: 'mass-cal-2',
                title: "2 Concentrado",
                metals: [{
                    id: 'con2-metal-2',
                    title: "2 Metales",
                    cal_image: require('../assets/img3.webp'),
                    subtitle: "Crusher",
                    description: 'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
                    efficiency: 0.85,
                    loss: 100,
                    numberCols: 3,
                    elements: [
                        { id: 'con2-metal2-ele-1', name: 'Producto', type: "label", span: 1 },
                        { id: 'con2-metal2-ele-2', name: '%Cu', type: "label", span: 1 },
                        { id: 'con2-metal2-ele-3', name: '%Pb', type: "label", span: 1 },
                        { id: 'con2-metal2-ele-4', name: 'Alimento', type: "label", span: 1 },
                        { id: 'con2-metal2-ele-5', name: 'valor alimento 1', type: "input", span: 1 },
                        { id: 'con2-metal2-ele-6', name: 'valor alimento 2', type: "input", span: 1 },
                        { id: 'con2-metal2-ele-7', name: 'Concentrado Cu', type: "label", span: 1 },
                        { id: 'con2-metal2-ele-8', name: 'valor Concentrado 1', type: "input", span: 1 },
                        { id: 'con2-metal2-ele-9', name: 'valor Concentrado 2', type: "input", span: 1 },
                        { id: 'con2-metal2-ele-10', name: 'Concentrado Pb', type: "label", span: 1 },
                        { id: 'con2-metal2-ele-11', name: 'valor Concentrado Pb 1', type: "input", span: 1},
                        { id: 'con2-metal2-ele-12', name: 'valor Concentrado Pb 2', type: "input", span: 1 },
                        { id: 'con2-metal2-ele-13', name: 'Relave', type: "label", span: 1 },
                        { id: 'con2-metal2-ele-14', name: 'valor Relave 1', type: "input", span: 1 },
                        { id: 'con2-metal2-ele-15', name: 'valor Relave 2', type: "input", span: 1},
                    ]
                }]
            },
            // {
            //     id:'mass-cal-2',
            //     cal_image:require('../assets/img2.webp'),
            //     title: "Material A",
            //     subtitle: "Crusher",
            //     description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
            //     efficiency: 0.85,
            //     loss: 100,
            // },
            // {
            //     id:'mass-cal-3',
            //     cal_image:require('../assets/img3.webp'),
            //     title: "Material A",
            //     subtitle: "Crusher",
            //     description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
            //     efficiency: 0.85,
            //     loss: 100,
            // },
            // {
            //     id:'mass-cal-4',
            //     cal_image:require('../assets/img1.webp'),
            //     title: "Material A",
            //     subtitle: "Crusher",
            //     description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
            //     efficiency: 0.85,
            //     loss: 100,
            // },
            // {
            //     id:'mass-cal-5',
            //     cal_image:require('../assets/img2.webp'),
            //     title: "Material A",
            //     subtitle: "Crusher",
            //     description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
            //     efficiency: 0.85,
            //     loss: 100,
            // },
            // {
            //     id:'mass-cal-6',
            //     cal_image:require('../assets/img3.webp'),
            //     title: "Material A",
            //     subtitle: "Crusher",
            //     description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
            //     efficiency: 0.85,
            //     loss: 100,
            // },

        ],
    },
    // {
    //     id:2,
    //     topic: "Equipment sizing",
    //     subtopic:"Calculations Equipment sizing",
    //     module:3,
    //     operation:4,
    //     calculation:5,
    //     description:"Equipment sizing is a critical aspect of metallurgical engineering, particularly in the design and optimization of various unit operations and processing plants. Properly sizing equipment ensures that it can handle the required throughput and perform efficiently to meet production goals",
    //     image_url:require('../assets/img2.webp'),
    //     calculations:[
    //         {
    //             id:'equipment-cal-1',
    //             cal_image:require('../assets/img1.webp'),
    //             title: "Material A",
    //             subtitle: "Crusher",
    //             description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
    //             efficiency: 0.85,
    //             loss: 100,
    //         },
    //         {
    //             id:'equipment-cal-2',
    //             cal_image:require('../assets/img2.webp'),
    //             title: "Material A",
    //             subtitle: "Crusher",
    //             description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
    //             efficiency: 0.85,
    //             loss: 100,
    //         },
    //         {
    //             id:'equipment-cal-3',
    //             cal_image:require('../assets/img3.webp'),
    //             title: "Material A",
    //             subtitle: "Crusher",
    //             description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
    //             efficiency: 0.85,
    //             loss: 100,
    //         },
    //         {
    //             id:'equipment-cal-4',
    //             cal_image:require('../assets/img1.webp'),
    //             title: "Material A",
    //             subtitle: "Crusher",
    //             description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
    //             efficiency: 0.85,
    //             loss: 100,
    //         },
    //         {
    //             id:'equipment-cal-5',
    //             cal_image:require('../assets/img2.webp'),
    //             title: "Material A",
    //             subtitle: "Crusher",
    //             description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
    //             efficiency: 0.85,
    //             loss: 100,
    //         },
    //         {
    //             id:'equipment-cal-6',
    //             cal_image:require('../assets/img3.webp'),
    //             title: "Material A",
    //             subtitle: "Crusher",
    //             description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
    //             efficiency: 0.85,
    //             loss: 100,
    //         },

    //     ],
    // },
    // {
    //     id:3,
    //     topic: "Concentrate Value",
    //     subtopic:"Calculations Concentrate Value",
    //     module:3,
    //     operation:4,
    //     calculation:5,
    //     description:"Concentrate value is a crucial concept in metallurgy, especially in the context of mineral processing and ore beneficiation. Concentrate refers to the valuable portion of the ore that has been separated and concentrated from the gangue or waste material during the beneficiation process.",
    //     image_url:require('../assets/img3.webp'),
    //     calculations:[
    //         {
    //             id:'concentrate-cal-1',
    //             cal_image:require('../assets/img1.webp'),
    //             title: "Material A",
    //             subtitle: "Crusher",
    //             description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
    //             efficiency: 0.85,
    //             loss: 100,
    //         },
    //         {

    //             id:'concentrate-cal-2',
    //             cal_image:require('../assets/img2.webp'),
    //             title: "Material A",
    //             subtitle: "Crusher",
    //             description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
    //             efficiency: 0.85,
    //             loss: 100,
    //         },
    //         {
    //             id:'concentrate-cal-3',
    //             cal_image:require('../assets/img3.webp'),
    //             title: "Material A",
    //             subtitle: "Crusher",
    //             description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
    //             efficiency: 0.85,
    //             loss: 100,
    //         },
    //         {
    //             id:'concentrate-cal-4',
    //             cal_image:require('../assets/img1.webp'),
    //             title: "Material A",
    //             subtitle: "Crusher",
    //             description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
    //             efficiency: 0.85,
    //             loss: 100,
    //         },
    //         {
    //             id:'concentrate-cal-5',
    //             cal_image:require('../assets/img2.webp'),
    //             title: "Material A",
    //             subtitle: "Crusher",
    //             description:'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
    //             efficiency: 0.85,
    //             loss: 100,
    //         },

    //     ],
    // },
];
