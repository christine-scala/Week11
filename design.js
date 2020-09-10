class MamboNumberFive {
    constructor() {
      this.lady = []
    }
      
    log(night) {
      this.lady.push(night.whichGirl)
      // do fancy code to send this log somewhere
    }
  }
  
  // this is the singleton
  class MamboNumberFiveSingleton {
    constructor() {
      if (!MamboNumberFiveSingleton.instance) {
        MamboNumberFiveSingleton.instance = new MamboNumberFive()
      }
    }
    
    getMamboNumberFiveInstance() {
      return MamboNumberFiveSingleton.instance
    }
  }
  
  module.exports = MamboNumberFiveSingleton