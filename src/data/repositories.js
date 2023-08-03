export default [
    {
        id: 1,
        topic: "Balance Metalúrgico",
        subtopic: "Calculos en el balance Metalúrgico",
        module: 3,
        operation: 4,
        calculation: 5,
        description: "Mass balance is a fundamental concept in metallurgy and other engineering disciplines. It involves the accounting of mass or material flow through a system to ensure that the total mass of inputs is equal to the total mass of outputs",
        image_url: require('../assets/img1.webp'),
        calculations: [
            {
                id: 'balance-metalurgico-concentrado1',
                title: "1 Concentrado",
                metals: [{
                    id: 'con1Metal1',
                    title: "1 Metal",
                    cal_image: require('../assets/img2.webp'),
                    subtitle: "Crusher",
                    description: 'The concentrate value is a critical factor in the economic viability of a mining project or mineral',
                    efficiency: 0.85,
                    loss: 100,
                    numberCols: 3,
                    elements: [
                        { id: 'con1-metal1-lb-circuito', name: 'Alimento del circuito', type: "label", span: 1 },
                        { id: 'con1Metal1f', name: 'valor Alimento del circuito 1', type: "input", span: 2 },
                        { id: 'con1-metal1-lb-unidades', name: 'Unidades', type: "label", span: 1 },
                        { id: 'con1Metal1conversion', name: 'Unidad', type: "select",span: 2, values: ['%', 'g/TM', 'Oz/TM', 'Oz/TC'] },
                        { id: 'con1-metal1-lb-producto', name: 'Producto', type: "label", span: 1 },
                        { id: 'con1Metal1metal', name: 'Metal', type: "select", span: 2,values: ['Cu', 'Pb', 'Zn', 'Al', 'Fe', 'Au', 'Ag', 'Sn', 'Mo'] },
                        { id: 'con1-metal1-lb-alimento', name: 'Alimento', type: "label", span: 1 },
                        { id: 'con1Metal1m1', name: 'valor Alimento 1', type: "input", span: 2 },
                        { id: 'con1-metal1-lb-concentrado', name: 'Concentrado del Metal', type: "label", span: 1 },
                        { id: 'con1Metal1m2', name: 'Valor Concentrado 1', type: "input", span: 2 },
                        { id: 'con1-metal1-lb-relave', name: 'Relave', type: "label", span: 1 },
                        { id: 'con1Metal1m3', name: 'Valor Relave 1', type: "input", span: 2 },
                    ],
                    resElements:[
                        { id: 'concentrado1meta1-resp-lb-tonelaje', name: `Tonelaje`, type: "label", span: 3 },
                        { id: 'concentrado1-meta1-resp-lb-concentrado', name: `Concentrado del metal (T/h)`, type: "label", span: 1 },
                        { id: 'concentrado1-meta1-resp-lbv-concentrado', name: 'concentrated value', type: "input", span: 2 },
                        { id: 'concentrado1-meta1-resp-lb-tailings', name: 'Relave (T/h)', type: "label", span: 1 },
                        { id: 'concentrado1-meta1-resp-lbv-tailings', name: 'tailings value',  type: "input", span: 2 },
                        { id: 'concentrado1meta1-resp-lb-recuperaciones', name: `Recuperaciones`, type: "label", span: 3 },
                        { id: 'concentrado1-meta1-resp-lb-recovery', name: `%Recup. del metal`, type: "label", span: 1 },
                        { id: 'concentrado1-meta1-resp-lbv-recovery', name: 'recovery value', type: "input", span: 2 },
                        { id: 'concentrado1meta1-resp-lb-Ratio', name: `Ratio`, type: "label", span: 3 },
                        { id: 'concentrado1-meta1-resp-lb-concentrationRatio', name: `Ratio Concentración`, type: "label", span: 1 },
                        { id: 'concentrado1-meta1-resp-lbv-concentrationRatio', name: 'concentrationRatio value', type: "input", span: 2 },
                    ]
                }]
            },
            {
                id: 'balance-metalurgico-concentrado2',
                title: "2 Concentrado",
                metals: [{
                    id: 'con2Metal2',
                    title: "2 Metales",
                    cal_image: require('../assets/img3.webp'),
                    subtitle: "Crusher",
                    description: 'The concentrate value is a critical factor in the economic viability of a mining project or mineral processing operation. Miners and metallurgical companies must optimize the beneficiation process to achieve higher concentrate grades and maximize the value of the final product',
                    efficiency: 0.85,
                    loss: 100,
                    numberCols: 3,
                    elements: [
                        { id: 'con2-metal2-lb-circuito', name: 'Alimento del circuito', type: "label", span: 1 },
                        { id: 'con2Metal2f', name: 'valor Alimento del circuito 1', type: "input", span: 2 },
                        { id: 'con2-metal2-lb-unidades', name: 'Unidades', type: "label", span: 1 },
                        { id: 'con2Metal2conversionmetal1', name: 'Unidad Metal 1', type: "select", span: 1, values: ['%', 'g/TM', 'Oz/TM', 'Oz/TC'] },
                        { id: 'con2Metal2conversionmetal2', name: 'Unidad Metal 2', type: "select", span: 1, values: ['%', 'g/TM', 'Oz/TM', 'Oz/TC'] },
                        { id: 'con2-metal2-lb-producto', name: 'Producto', type: "label", span: 1 },
                        { id: 'con2Metal2metal1', name: 'Metal 1', type: "select", span: 1, values: ['Cu', 'Pb', 'Zn', 'Al', 'Fe', 'Au', 'Ag', 'Sn', 'Mo'] },
                        { id: 'con2Metal2metal2', name: 'Metal 2', type: "select", span: 1, values: ['Cu', 'Pb', 'Zn', 'Al', 'Fe', 'Au', 'Ag', 'Sn', 'Mo'] },
                        { id: 'con2-metal2-lb-alimento', name: 'Alimento', type: "label", span: 1 },
                        { id: 'con2Metal2m1', name: 'valor alimento 1', type: "input", span: 1 },
                        { id: 'con2Metal2n1', name: 'valor alimento 2', type: "input", span: 1 },
                        { id: 'con2-metal2-lb-concentrado1', name: 'Concentrado Metal 1', type: "label", span: 1 },
                        { id: 'con2Metal2m2', name: 'valor Concentrado Metal 1', type: "input", span: 1 },
                        { id: 'con2Metal2n2', name: 'valor Concentrado Metal 2', type: "input", span: 1 },
                        { id: 'con2-metal2-lb-concentrado2', name: 'Concentrado Metal 2', type: "label", span: 1 },
                        { id: 'con2Metal2m3', name: 'valor Concentrado Metal 1', type: "input", span: 1},
                        { id: 'con2Metal2n3', name: 'valor Concentrado Metal 2', type: "input", span: 1 },
                        { id: 'con2-metal2-lb-relave', name: 'Relave', type: "label", span: 1 },
                        { id: 'con2Metal2m4', name: 'valor Relave Metal 1', type: "input", span: 1 },
                        { id: 'con2Metal2n4', name: 'valor Relave Metal 2', type: "input", span: 1},
                    ],
                    resElements:[
                        { id: 'concentrado2meta2-resp-lb-tonelaje', name: `Tonelaje`, type: "label", span: 3 },
                        { id: 'concentrado2meta2-resp-lb-concentradometal1', name: `Concentrado del metal 1(T/h)`, type: "label", span: 1 },
                        { id: 'concentrado2meta2-resp-v-concentradometal1', name: 'concentratedMetal1 value', type: "input", span: 2},
                        { id: 'concentrado2meta2-resp-lb-concentradometal2', name: `Concentrado metal 2 (T/h)`, type: "label", span: 1 },
                        { id: 'concentrado2meta2-resp-v-concentradometal2', name: 'concentratedMetal2 value', type: "input", span: 2},
                        { id: 'concentrado2meta2-resp-lb-tailings', name:  'Relave (T/h)', type: "label", span: 1 },
                        { id: 'concentrado2meta2-resp-v-tailings', name: 'tailings value', type: "input", span: 2},
                        { id: 'concentrado2meta2-resp-lb-recuperaciones', name: `Recuperaciones`, type: "label", span: 3 },
                        { id: 'concentrado2meta2-resp-lb-recoverymetal1', name: `%Recup. del metal 1 Conc`, type: "label", span: 1 },
                        { id: 'concentrado2meta2-resp-v-recoverymetal1', name: 'recoveryMetal1 value', type: "input", span: 2},
                        { id: 'concentrado2meta2-resp-lb-recoverymetal2', name: `%Recup.  del metal 2 Conc`, type: "label", span: 1 },
                        { id: 'concentrado2meta2-resp-v-recoverymetal2', name: 'recoveryMetal2 value',type: "input", span: 2},
                        { id: 'concentrado2meta2-resp-lb-Ratio', name: `Ratio`, type: "label", span: 3 },
                        { id: 'concentrado2meta2-resp-lb-ratiometal1', name: `Ratio del metal 1`, type: "label", span: 1 },
                        { id: 'concentrado2meta2-resp-v-ratiometal1', name: 'ratioMetal1 value',type: "input", span: 2},
                        { id: 'concentrado2meta2-resp-lb-ratiometal2', name: `Ratio del metal 2`, type: "label", span: 1 },
                        { id: 'concentrado2meta2-resp-v-ratiometal2', name: 'ratioMetal2 value',type: "input", span: 2},
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
