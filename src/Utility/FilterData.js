export const getDataByCategory = (data) => {
    
    const filteredData = [ ["Food", "Electronic", "Education", "Health", "Social Life"], [0,0,0,0,0]]
    data.forEach((myData) => {
        switch (myData.category) {
            case "food":
                filteredData[1][0] += myData.amount
                break;
            case "electronic":
                filteredData[1][1] += myData.amount
                break;

            case "education":
                filteredData[1][2] += myData.amount
                break;

            case "health":
                filteredData[1][3] += myData.amount
                break;

            case "sociallife":
                filteredData[1][4] += myData.amount
                break;

            default:
                break;
        }
    })
    return filteredData
}

