export const organizeElementsInRows = (items, numberCols) => {
    const rows = [];
    let currentRow = [];
    let currentIndex = 0;

    
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        currentRow.push(item);
        currentIndex += item.span;

        if (currentIndex >= numberCols || i === items.length - 1) {
            rows.push(currentRow);
            currentRow = [];
            currentIndex = 0;
        }
    }

    return rows;
};

export const organizeInitialValues = (items) => {
    const initialValuesForm = items.reduce((obj, item) => {
        if (item.type !== "label") {
            obj[item.id] = '';
        }
    }, {});
    return initialValuesForm
}


