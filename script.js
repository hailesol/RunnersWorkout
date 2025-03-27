// Array of workouts with details for each button
const easyWorkouts = [
    {
      title: "Easy Jog",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Easy pace for the remainder",
      coolDown: "5 minutes walk"
    },
    {
      title: "Recovery Run",
      duration: "45 minutes",
      distance: "6-7 km",
      warmUp: "10 minutes easy jog",
      session: "Comfortable pace throughout",
      coolDown: "5 minutes easy jog"
    },
    {
      title: "Easy Pace Run with Intervals",
      duration: "20 minutes",
      distance: "3-4 km",
      warmUp: "5 minutes easy jog",
      session: "5-minute intervals of easy jog and walk",
      coolDown: "5 minutes walk"
    },  
    {
      title: "Easy Jog",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Easy pace for the remainder",
      coolDown: "5 minutes walk"
    },
    {
      title: "Relaxed Run",
      duration: "35 minutes",
      distance: "5-6 km",
      warmUp: "5 minutes easy jog",
      session: "Maintain an easy pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Light Jog",
      duration: "25 minutes",
      distance: "3-4 km",
      warmUp: "5 minutes easy jog",
      session: "Keep a relaxed pace throughout",
      coolDown: "5 minutes walk"
    },
    {
      title: "Gentle Run",
      duration: "40 minutes",
      distance: "6-7 km",
      warmUp: "5 minutes easy jog",
      session: "Easy, consistent pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Steady Jog",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Slightly faster than recovery pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Casual Run",
      duration: "35 minutes",
      distance: "5-6 km",
      warmUp: "5 minutes easy jog",
      session: "Maintain an easy pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Morning Jog",
      duration: "20 minutes",
      distance: "3 km",
      warmUp: "5 minutes easy jog",
      session: "Easy, relaxed pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Easy-paced Run",
      duration: "45 minutes",
      distance: "6-8 km",
      warmUp: "5 minutes easy jog",
      session: "Maintain a comfortable pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Beginner's Jog",
      duration: "20 minutes",
      distance: "2-3 km",
      warmUp: "5 minutes easy jog",
      session: "Jog at a slow pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Comfort Run",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Keep the pace easy and sustainable",
      coolDown: "5 minutes walk"
    },
    {
      title: "Slow Jog",
      duration: "25 minutes",
      distance: "3-4 km",
      warmUp: "5 minutes easy jog",
      session: "Jog at a comfortable pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Recovery Run",
      duration: "40 minutes",
      distance: "5-6 km",
      warmUp: "5 minutes easy jog",
      session: "Maintain a light, recovery pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Relaxed Jog",
      duration: "30 minutes",
      distance: "4 km",
      warmUp: "5 minutes easy jog",
      session: "Run at a very relaxed pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Calm Run",
      duration: "35 minutes",
      distance: "5 km",
      warmUp: "5 minutes easy jog",
      session: "Focus on comfort and relaxation",
      coolDown: "5 minutes walk"
    },
    {
      title: "Leisurely Jog",
      duration: "25 minutes",
      distance: "3 km",
      warmUp: "5 minutes easy jog",
      session: "Run at a slow and easy pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Easy Endurance",
      duration: "50 minutes",
      distance: "7-8 km",
      warmUp: "5 minutes easy jog",
      session: "Maintain a consistent, easy pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Gentle Recovery",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Maintain a relaxed, light pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Smooth Jog",
      duration: "40 minutes",
      distance: "5-6 km",
      warmUp: "5 minutes easy jog",
      session: "Focus on smooth, even effort",
      coolDown: "5 minutes walk"
    },
    {
      title: "Easy Run",
      duration: "45 minutes",
      distance: "6-7 km",
      warmUp: "5 minutes easy jog",
      session: "Run at a relaxed pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Jogging for Fun",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Maintain a comfortable pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Comfortable Jog",
      duration: "25 minutes",
      distance: "3-4 km",
      warmUp: "5 minutes easy jog",
      session: "Run at an easy pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Easy Pace Run",
      duration: "35 minutes",
      distance: "5-6 km",
      warmUp: "5 minutes easy jog",
      session: "Run at a pace you can comfortably sustain",
      coolDown: "5 minutes walk"
    },
    {
      title: "Breathing Jog",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Jog at a pace where you can talk comfortably",
      coolDown: "5 minutes walk"
    },
    {
      title: "Relaxing Run",
      duration: "40 minutes",
      distance: "6 km",
      warmUp: "5 minutes easy jog",
      session: "Relax and enjoy the pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Steady Recovery",
      duration: "35 minutes",
      distance: "5 km",
      warmUp: "5 minutes easy jog",
      session: "Focus on recovery and easy pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Gentle Jog",
      duration: "25 minutes",
      distance: "3-4 km",
      warmUp: "5 minutes easy jog",
      session: "Run at a very relaxed pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Light-paced Run",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Maintain a light, comfortable pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Smooth and Easy",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Jog at a consistent, smooth pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Slow and Steady",
      duration: "45 minutes",
      distance: "6-7 km",
      warmUp: "5 minutes easy jog",
      session: "Focus on slow and steady effort",
      coolDown: "5 minutes walk"
    },
    {
      title: "Free-flowing Jog",
      duration: "35 minutes",
      distance: "5 km",
      warmUp: "5 minutes easy jog",
      session: "Allow your body to find a natural rhythm",
      coolDown: "5 minutes walk"
    },
    {
      title: "Slow-paced Run",
      duration: "25 minutes",
      distance: "3-4 km",
      warmUp: "5 minutes easy jog",
      session: "Maintain a very relaxed pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Endurance Jog",
      duration: "40 minutes",
      distance: "5-6 km",
      warmUp: "5 minutes easy jog",
      session: "Run at a relaxed but sustainable pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Easy Tread",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Jog slowly and steadily",
      coolDown: "5 minutes walk"
    },
    {
      title: "Restorative Run",
      duration: "30 minutes",
      distance: "4 km",
      warmUp: "5 minutes easy jog",
      session: "Keep pace slow and restorative",
      coolDown: "5 minutes walk"
    },
    {
      title: "Light Recovery",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Maintain a recovery pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Casual Jog",
      duration: "35 minutes",
      distance: "5-6 km",
      warmUp: "5 minutes easy jog",
      session: "Jog at an easy-going pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Slow Easy Run",
      duration: "25 minutes",
      distance: "3-4 km",
      warmUp: "5 minutes easy jog",
      session: "Run at a pace that's easy to maintain",
      coolDown: "5 minutes walk"
    },
    {
      title: "Comfort Run",
      duration: "30 minutes",
      distance: "4-5 km",
      warmUp: "5 minutes easy jog",
      session: "Run at a comfortable, light pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Cruise Jog",
      duration: "40 minutes",
      distance: "5-6 km",
      warmUp: "5 minutes easy jog",
      session: "Jog at a consistent, comfortable pace",
      coolDown: "5 minutes walk"
    },
    {
      title: "Carefree Run",
      duration: "30 minutes",
      distance: "4 km",
      warmUp: "5 minutes easy jog",
      session: "Maintain a relaxed, carefree pace",
      coolDown: "5 minutes walk"
    }
  ];
  
  const intervalWorkouts = [
    {
      title: "400m Intervals",
      duration: "30 minutes",
      distance: "4 km",
      warmUp: "10 minutes easy jog",
      session: "12 x 400m at above 5K pace with 1-minute rest",
      coolDown: "10 minutes easy jog"
    },
    {
      title: "800m Intervals",
      duration: "40 minutes",
      distance: "6 km",
      warmUp: "15 minutes easy jog",
      session: "4 x 800m with 2-minute rest",
      coolDown: "10 minutes easy jog"
    },
    {
      title: "Sprint Intervals",
      duration: "30 minutes",
      distance: "4 km",
      warmUp: "5 minutes easy jog",
      session: "8 x 200m sprints with 1-minute rest",
      coolDown: "5 minutes walk"
    },
    {
        title: "Short Intervals",
        duration: "20 minutes",
        distance: "3-4 km",
        warmUp: "5 minutes easy jog",
        session: "8 x 30 seconds hard, 90 seconds easy jog between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Steady Intervals",
        duration: "30 minutes",
        distance: "4-5 km",
        warmUp: "5 minutes easy jog",
        session: "4 x 2 minutes hard, 2 minutes easy jog between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Hill Sprints",
        duration: "25 minutes",
        distance: "3-4 km",
        warmUp: "5 minutes easy jog",
        session: "10 x 20 seconds sprint uphill, walk down between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Pyramid Intervals",
        duration: "30 minutes",
        distance: "4-5 km",
        warmUp: "5 minutes easy jog",
        session: "1 minute hard, 1 minute easy jog, 2 minutes hard, 2 minutes easy jog, 3 minutes hard, 3 minutes easy jog",
        coolDown: "5 minutes walk"
      },
      {
        title: "Hill Repeats",
        duration: "30 minutes",
        distance: "4-5 km",
        warmUp: "5 minutes easy jog",
        session: "6 x 1-minute hill run, walk down between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Speed Intervals",
        duration: "25 minutes",
        distance: "3-4 km",
        warmUp: "5 minutes easy jog",
        session: "6 x 1-minute fast run, 2 minutes easy jog between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Hill Intervals",
        duration: "40 minutes",
        distance: "5-6 km",
        warmUp: "5 minutes easy jog",
        session: "5 x 3-minute uphill run, walk down between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Long Hill Climbs",
        duration: "45 minutes",
        distance: "6-7 km",
        warmUp: "5 minutes easy jog",
        session: "3 x 5-minute uphill run, walk down between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Fartlek Intervals",
        duration: "30 minutes",
        distance: "4-5 km",
        warmUp: "5 minutes easy jog",
        session: "Alternate 1-minute fast with 2 minutes easy jog, repeat for 20 minutes",
        coolDown: "5 minutes walk"
      },
      {
        title: "Hill Sprints with Recovery",
        duration: "25 minutes",
        distance: "3-4 km",
        warmUp: "5 minutes easy jog",
        session: "5 x 30 seconds sprint uphill, 3 minutes recovery jog between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Interval Set",
        duration: "30 minutes",
        distance: "4-5 km",
        warmUp: "5 minutes easy jog",
        session: "5 x 2 minutes hard, 2 minutes easy jog between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Hill Tempo Run",
        duration: "40 minutes",
        distance: "5-6 km",
        warmUp: "5 minutes easy jog",
        session: "3 x 5-minute uphill tempo run, walk down between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Sprints with Active Recovery",
        duration: "20 minutes",
        distance: "3 km",
        warmUp: "5 minutes easy jog",
        session: "10 x 20 seconds sprint, 40 seconds easy jog between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Fast Hill Intervals",
        duration: "30 minutes",
        distance: "4-5 km",
        warmUp: "5 minutes easy jog",
        session: "8 x 30 seconds fast uphill run, walk down between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Hill Endurance Run",
        duration: "50 minutes",
        distance: "7-8 km",
        warmUp: "5 minutes easy jog",
        session: "Run uphill for 20 minutes, steady pace, then 10 minutes downhill jog",
        coolDown: "5 minutes walk"
      },
      {
        title: "Speed Play",
        duration: "25 minutes",
        distance: "3-4 km",
        warmUp: "5 minutes easy jog",
        session: "Alternate 30 seconds fast with 90 seconds slow for 15 minutes",
        coolDown: "5 minutes walk"
      },
      {
        title: "Recovery Intervals",
        duration: "30 minutes",
        distance: "4-5 km",
        warmUp: "5 minutes easy jog",
        session: "5 x 1-minute hard, 3 minutes easy jog between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Hill Repeat Challenge",
        duration: "40 minutes",
        distance: "5-6 km",
        warmUp: "5 minutes easy jog",
        session: "4 x 2-minute uphill sprint, walk down between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Short Hill Intervals",
        duration: "25 minutes",
        distance: "3-4 km",
        warmUp: "5 minutes easy jog",
        session: "6 x 1-minute uphill run, walk down between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Speed Intervals with Hills",
        duration: "35 minutes",
        distance: "4-5 km",
        warmUp: "5 minutes easy jog",
        session: "4 x 2 minutes uphill run, 3 minutes easy jog between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Long Interval Set",
        duration: "40 minutes",
        distance: "5-6 km",
        warmUp: "5 minutes easy jog",
        session: "3 x 5 minutes hard run, 3 minutes easy jog between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Intervals with Hill Sprints",
        duration: "30 minutes",
        distance: "4-5 km",
        warmUp: "5 minutes easy jog",
        session: "4 x 2-minute hill sprints, 2 minutes easy jog between",
        coolDown: "5 minutes walk"
      },
      {
        title: "Power Hill Run",
        duration: "30 minutes",
        distance: "4-5 km",
        warmUp: "5 minutes easy jog",
        session: "5 x 1-minute uphill sprint, walk down between",
        coolDown: "5 minutes walk"
      }
  ];
  
  const longRunWorkouts = [
    {
      title: "Long Steady Run",
      duration: "1.5 hours",
      distance: "12-14 km",
      warmUp: "10 minutes easy jog",
      session: "Steady pace throughout",
      coolDown: "10 minutes easy jog"
    },
    {
      title: "Pace Work Long Run",
      duration: "2 hours",
      distance: "18-20 km",
      warmUp: "15 minutes easy jog",
      session: "Every 20 minutes, increase pace for 5 minutes",
      coolDown: "10 minutes easy jog"
    },
    {
      title: "Long Run with Progression",
      duration: "90 minutes",
      distance: "14-16 km",
      warmUp: "10 minutes easy jog",
      session: "Gradually increase pace every 20 minutes",
      coolDown: "10 minutes easy jog"
    },
    {
        title: "Paced Long Run",
        duration: "90 minutes",
        distance: "17 km",
        warmUp: "1 km easy jog",
        session: "5 x 1 km at slightly faster than marathon pace, 2 km easy jog between",
        coolDown: "1 km easy jog"
      },
      {
        title: "Tempo Long Run",
        duration: "100 minutes",
        distance: "16 km",
        warmUp: "1 km easy jog",
        session: "8 km at steady tempo pace, 4 km easy pace",
        coolDown: "1 km easy jog"
      },
      {
        title: "Marathon Pace Intervals",
        duration: "120 minutes",
        distance: "26 km",
        warmUp: "1 km easy jog",
        session: "6 x 2 km at marathon pace, 1km easy jog between",
        coolDown: "1 km easy jog"
      },
      {
        title: "Speed Endurance Long Run",
        duration: "120 minutes",
        distance: "20 km",
        warmUp: "1 km easy jog",
        session: "5 x 2 km at 10-20 seconds per km faster than marathon pace, 2 minutes easy jog between",
        coolDown: "1 km easy jog"
      },
      {
        title: "Mixed Long Run",
        duration: "100 minutes",
        distance: "16 km",
        warmUp: "1 km easy jog",
        session: "10 km steady pace, 5 x 1 minute faster pace with 2 minutes easy between",
        coolDown: "1 km easy jog"
      },
      {
        title: "Fartlek Long Run",
        duration: "110 minutes",
        distance: "17 km",
        warmUp: "1 km easy jog",
        session: "2 minutes hard, 2 minutes easy for 10 km, then 5 km easy pace",
        coolDown: "1 km easy jog"
      },
      {
        title: "Endurance Long Run",
        duration: "130 minutes",
        distance: "21 km",
        warmUp: "1 km easy jog",
        session: "18 km at a steady long run pace, focus on endurance",
        coolDown: "1 km easy jog"
      },
      {
        title: "Progressive Long Run",
        duration: "120 minutes",
        distance: "19 km",
        warmUp: "1 km easy jog",
        session: "6 km easy pace, 6 km at marathon pace, 6 km progressively faster",
        coolDown: "1 km easy jog"
      },
      {
        title: "Hill Endurance Run",
        duration: "140 minutes",
        distance: "22 km",
        warmUp: "1 km easy jog",
        session: "10 km hilly route, then 10 km steady pace",
        coolDown: "1 km easy jog"
      },
      {
        title: "Paced Threshold Run",
        duration: "115 minutes",
        distance: "18 km",
        warmUp: "1 km easy jog",
        session: "3 x 3 km at threshold pace, 2 minutes easy jog between",
        coolDown: "1 km easy jog"
      },
      {
        title: "Marathon Pace Long Run",
        duration: "130 minutes",
        distance: "20 km",
        warmUp: "1 km easy jog",
        session: "16 km at marathon pace, 3 km easy pace, 1 km marathon pace",
        coolDown: "1 km easy jog"
      },
      {
        title: "Long Run with Steady State",
        duration: "140 minutes",
        distance: "22 km",
        warmUp: "1 km easy jog",
        session: "12 km steady run, 6 km at half marathon pace, 3 km easy pace",
        coolDown: "1 km easy jog"
      },
      {
        title: "Interval Long Run",
        duration: "130 minutes",
        distance: "20 km",
        warmUp: "1 km easy jog",
        session: "4 x 3 km at slightly faster than marathon pace, 3 minutes easy jog between",
        coolDown: "1 km easy jog"
      },
      {
        title: "Long Run with Fartlek",
        duration: "140 minutes",
        distance: "21 km",
        warmUp: "1 km easy jog",
        session: "5 x 3 minutes hard, 3 minutes easy for 15 km, 5 km easy pace",
        coolDown: "1 km easy jog"
      },
      {
        title: "Long Run with Marathon Pace Effort",
        duration: "135 minutes",
        distance: "21 km",
        warmUp: "1 km easy jog",
        session: "10 km easy pace, 7 km at marathon pace, 3 km easy pace",
        coolDown: "1 km easy jog"
      }
  ];
  
  // Function to generate a formatted workout card
  function generateWorkoutCard(workout) {
    return `
      <div class="workout-card">
        <h3>${workout.title}</h3>
        <p><strong>Duration:</strong> ${workout.duration}</p>
        <p><strong>Distance:</strong> ${workout.distance}</p>
        <p><strong>Warm-up:</strong> ${workout.warmUp}</p>
        <p><strong>Session:</strong> ${workout.session}</p>
        <p><strong>Cool-down:</strong> ${workout.coolDown}</p>
      </div>
    `;
  }
  
  // Function to handle button clicks and display the workout
  function displayWorkout(workoutArray) {
    const workout = getRandomWorkout(workoutArray);
    console.log('Generated Workout:', workout);  // Debugging line to check the workout
    document.getElementById('workoutDisplay').innerHTML = generateWorkoutCard(workout);
  }
  
  // Function to get a random workout from the array
  function getRandomWorkout(workoutArray) {
    const randomIndex = Math.floor(Math.random() * workoutArray.length);
    return workoutArray[randomIndex];
  }
  
  // Add event listeners to buttons
  document.getElementById('easyRunBtn').addEventListener('click', function() {
    console.log('Easy Run Button Clicked');  // Debugging line to check if the button click is detected
    displayWorkout(easyWorkouts);
  });
  
  document.getElementById('intervalBtn').addEventListener('click', function() {
    console.log('Interval Button Clicked');  // Debugging line to check if the button click is detected
    displayWorkout(intervalWorkouts);
  });
  
  document.getElementById('longRunBtn').addEventListener('click', function() {
    console.log('Long Run Button Clicked');  // Debugging line to check if the button click is detected
    displayWorkout(longRunWorkouts);
  });
  // Function to randomly select a workout
function getRandomWorkout() {
    const allWorkouts = [...easyWorkouts, ...intervalWorkouts, ...longRunWorkouts];
    const randomIndex = Math.floor(Math.random() * allWorkouts.length);
    return allWorkouts[randomIndex];
  }
  
  // Event listener for the "Give Me Anything" button
  document.getElementById("giveMeAnythingBtn").addEventListener("click", function() {
    const randomWorkout = getRandomWorkout();
  
    // Update the workout display with the random workout details
    document.querySelector("#workoutDisplay").innerHTML = `
      <h3>${randomWorkout.title}</h3>
      <p>Duration: <strong>${randomWorkout.duration}</strong></p>
      <p>Distance: <strong>${randomWorkout.distance}</strong></p>
      <p>Warm-up: <strong>${randomWorkout.warmUp}</strong></p>
      <p>Session: <strong>${randomWorkout.session}</strong></p>
      <p>Cool-down: <strong>${randomWorkout.coolDown}</strong></p>
    `;
  });
  
document.addEventListener("DOMContentLoaded", function () {
  const customWorkoutBtn = document.getElementById("customWorkoutBtn");

  if (customWorkoutBtn) {
      customWorkoutBtn.addEventListener("click", function () {
          window.location.href = "custom.html"; // Redirect to custom workout page
      });
  }
});
