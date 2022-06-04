// code your solution here
let record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "N/A"},
    { year: "2009", result: "N/A"},
    { year: "2008", result: "N/A"},
    { year: "2007", result: "N/A"},
]


  function superbowlWin(records) {
    const win =  records.find(superbowl)
    if (win) {
        return win.year
    }
    else {
        return undefined
    }
    
 }
 
 function superbowl(records) { 
    return records.result === "W"
    
 }