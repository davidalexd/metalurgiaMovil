export const organizeElementsInRows = (elements, numberCols) => {
    const rows = [];
    let currentRow = [];
    let currentIndex = 0;

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        currentRow.push(element);

        currentIndex += element.span;

        if (currentIndex >= numberCols || i === elements.length - 1) {
            rows.push(currentRow);
            currentRow = [];
            currentIndex = 0;
        }
    }

    return rows;
};