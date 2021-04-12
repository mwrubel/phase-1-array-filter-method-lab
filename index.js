   const findMatching = (drivers, searchName) => {
    //This function takes an array of drivers' names and a `string`
    //as arguments, and returns the matching list of drivers. 
        return drivers.filter((driver) => {
            return driver.toLowerCase() === searchName.toLowerCase()
    })
}
    
    function fuzzyMatch(drivers, letters){
        return drivers.filter((driver) => {
            const slicedName = driver.slice(0,2).toLowerCase()
            return slicedName === letters.toLowerCase()
        })
    }
    //  takes an array of drivers' names and a `string` as arguments for querying
    //  the array, and returns all drivers whose names begin with the provided letters
      
    function matchName(driversArrObj, driver){
    /*takes an array of `driver` objects and a `string` as arguments. Each `driver` object 
      has two properties: `name` and `hometown`. The function should return each element whose 
      `name` property matches the provided `string` */
      let matchedName = driversArrObj.filter((driverObj) => {
        return driverObj.name === driver
      })
      /*return driversArrObj.filter((driverObj) => {
          
      })
      */
     return matchedName
    }