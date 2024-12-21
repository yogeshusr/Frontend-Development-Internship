// import React, { useState, useEffect,useMemo } from 'react';
// import { useInView } from 'react-intersection-observer';
// import '../styles/style.css';

// function AnimatedCounters() {
//   const counters = useMemo(() => [
//     { label: 'Active Buyers Globally', endValue: 26000000 },
//     { label: 'Product Inquiries Daily', endValue: 400000 },
//     { label: 'Countries and Regions Represented', endValue: 200 },
//   ],[]);

//   const [values, setValues] = useState(counters.map(() => 0));
//   const [hasAnimated, setHasAnimated] = useState(false);

//   const { ref, inView } = useInView({
//     triggerOnce: true, // Only animate once when in view
//     threshold: 0.5, // Trigger when 50% of the component is visible
//   });

//   useEffect(() => {
//     if (inView && !hasAnimated) {
//       const duration = 2000; // Animation duration in milliseconds
//       const steps = 60; // Number of animation steps
//       const interval = duration / steps;

//       const increments = counters.map((counter) => counter.endValue / steps);

//       let currentValues = [...values];
//       let stepCount = 0;

//       const animate = setInterval(() => {
//         if (stepCount >= steps) {
//           clearInterval(animate);
//           currentValues = counters.map((counter) => counter.endValue); // Ensure final values
//           setHasAnimated(true);
//         } else {
//           currentValues = currentValues.map(
//             (value, index) => value + increments[index]
//           );
//         }

//         setValues(currentValues);
//         stepCount++;
//       }, interval);

//       return () => clearInterval(animate); // Cleanup interval on unmount
//     }
//   }, [inView, hasAnimated, counters, values]);

//   const formatNumber = (number) => {
//     return number.toLocaleString();
//   };

//   return (
//     <div ref={ref} className="container banner">
//       <div className="row align-items-center">
//         {counters.map((counter, index) => (
//           <div key={index} className="col-md-4 text-center">
//             <h3>{formatNumber(Math.round(values[index]))}</h3>
//             <p>{counter.label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AnimatedCounters;
import React, { useState, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/style.css';

function AnimatedCounters() {
  const counters = useMemo(() => [
    { label: 'Active Buyers Globally', endValue: 26000000 },
    { label: 'Product Inquiries Daily', endValue: 400000 },
    { label: 'Countries and Regions Represented', endValue: 200 },
  ], []);

  const [values, setValues] = useState(counters.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once when in view
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const duration = 2000; // Animation duration in milliseconds
      const steps = 60; // Number of animation steps
      const interval = duration / steps; // Calculate interval time for each step

      // Calculate increments based on the target value and the number of steps
      const increments = counters.map((counter) => counter.endValue / steps);

      let currentValues = [...values];
      let stepCount = 0;

      const animate = setInterval(() => {
        if (stepCount >= steps) {
          clearInterval(animate); // Stop the animation after completing steps
          currentValues = counters.map((counter) => counter.endValue); // Ensure we reach the exact target values
          setHasAnimated(true); // Mark the animation as complete
        } else {
          // Increment values and check to avoid overshooting
          currentValues = currentValues.map((value, index) => {
            const newValue = value + increments[index];
            // Ensure the value doesn't exceed the target value
            return newValue > counters[index].endValue ? counters[index].endValue : newValue;
          });
        }

        setValues(currentValues);
        stepCount++;
      }, interval);

      return () => clearInterval(animate); // Cleanup interval on unmount
    }
  }, [inView, hasAnimated, counters, values]);

  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  return (
    <div ref={ref} className="container banner">
      <div className="row align-items-center">
        {counters.map((counter, index) => (
          <div key={index} className="col-md-4 text-center">
            <h3>{formatNumber(Math.round(values[index]))}</h3>
            <p>{counter.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedCounters;
