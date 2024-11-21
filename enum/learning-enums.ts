enum Direction{
    bn,
    cn,
    dn,
    fn,
    gn
}

enum Nomms {
    BB='jhh',
    GH='lkj'
}

// // const enum

const enum Size{
    small,
    kl,
    jkkh
}

// console.log(Size['jkkh']);


// function getTrafficLightAction(light: string): string {
//     if (light === "Red") {
//       return "Stop";
//     } else if (light === "Yellow") {
//       return "Get Ready";
//     } else if (light === "Green") {
//       return "Go";
//     } else {
//       return "Invalid light";
//     }
//   }
  
//   console.log(getTrafficLightAction("Red"));    // Output: "Stop"
//   console.log(getTrafficLightAction("Yellow")); // Output: "Get Ready"
//   console.log(getTrafficLightAction("Blue"));   // Output: "Invalid light" (Oops! No type checking)
  


// Define an enum for Traffic Lights
enum TrafficLight {
    Red = "Red",       // Red light
    Yellow = "Yellow", // Yellow light
    Green = "Green"    // Green light
  }
  
  // Function that accepts only TrafficLight values
  function getTrafficLightAction(light: TrafficLight): string {
    if (light === TrafficLight.Red) {
      return "Stop";
    } else if (light === TrafficLight.Yellow) {
      return "Get Ready";
    } else if (light === TrafficLight.Green) {
      return "Go";
    } else {
      return "Invalid light"; // Technically unnecessary due to type safety
    }
  }
  
  console.log(getTrafficLightAction(TrafficLight.Red));    // Output: "Stop"
  console.log(getTrafficLightAction(TrafficLight.Yellow)); // Output: "Get Ready"
  console.log(getTrafficLightAction(TrafficLight.Green));  // Output: "Go"
//   console.log(getTrafficLightAction("Blue")); // Error: Argument of type '"Blue"' is not assignable to parameter of type 'TrafficLight'
  

// // when use to enum 
/**
 * Use enums when you need a fixed set of related named constants.
 * Use union types for simpler cases where only type-checking is 
 required without extra functionality like reverse mapping.
 */
