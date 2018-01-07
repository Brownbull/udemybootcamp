function outer(){
    var outerData ="outer data ";
    return function inner(){
        var innerData = "inner data";
        return outerData + innerData;
    } // eof return function inne
} // eof function outer

outer(); // output
// function inner(){
//     var innerData = "inner data";
//     return outerData + innerData;
// }

outer()(); // output
// outer data inner data

