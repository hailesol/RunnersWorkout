const workouts = {
    "up to 30": {
        easy: [
            { title: "Gentle Shakeout", duration: "20 mins", session: "Easy jog to loosen up and shake out any stiffness. Z1 Heart Rate." },
            { title: "Sunset Stroll", duration: "25 mins", session: "Slow jog, relax and enjoy the scenery. Z1 Heart Rate." },
            { title: "Run-Walk Combo", duration: "30 mins", session: "5 min jog, 1 min walk (repeat 5x). Great for active recovery." },
            { title: "Mindful Miles", duration: "30 mins", session: "Focus on deep breathing and running relaxed. Z1 Heart Rate." },
            { title: "Cadence Focus", duration: "30 mins", session: "Easy run aiming for quick, light steps (~170-180 steps per min)." },
            { title: "Nature Run", duration: "30 mins", session: "Run on trails or grass at an easy pace to reduce impact." },
            { title: "Form Check Run", duration: "30 mins", session: "Focus on posture, arm swing, and light footstrike." },
            { title: "Heart Rate Cap", duration: "30 mins", session: "Keep HR below Z2, staying strictly aerobic." },
            { title: "Breathing Drill", duration: "30 mins", session: "Breathe in for 3 steps, out for 3 steps to control rhythm." },
            { title: "Short Out & Back", duration: "30 mins", session: "15 mins out, turn around, and run back easy." }
          ],
          moderate: [
            { title: "Negative Split", duration: "30 mins", session: "15 mins easy, 15 mins moderate. Z2-Z3 Heart Rate." },
            { title: "Steady-State Run", duration: "30 mins", session: "Controlled, steady pace throughout. Z3 Heart Rate." },
            { title: "Short Tempo", duration: "30 mins", session: "10 min warm-up, 15 min tempo, 5 min cooldown." },
            { title: "Pyramid Fartlek", duration: "30 mins", session: "1-2-3-2-1 min pickups, equal rest. Z3-Z4 Heart Rate." },
            { title: "Strides & Cruise", duration: "30 mins", session: "25 min steady, then 5x 15s strides." },
            { title: "Surge Run", duration: "30 mins", session: "10-sec fast surge every 3 mins while keeping effort controlled." },
            { title: "Progressive Finish", duration: "30 mins", session: "Start easy, pick up pace gradually, last 10 mins strong." },
            { title: "Turn-Up-the-Dial", duration: "30 mins", session: "Every 10 mins, increase pace slightly." },
            { title: "City Intervals", duration: "30 mins", session: "Run faster between every other stoplight." },
            { title: "Trail Challenge", duration: "30 mins", session: "Moderate effort run on hilly trails to build endurance." }
          ],
          hard: [
            { title: "Threshold Test", duration: "30 mins", session: "10 min warm-up, 15 min hard, 5 min cooldown." },
            { title: "Sprint Fartlek", duration: "30 mins", session: "8x 30s sprint, 1:30 recovery jog." },
            { title: "Speed Play", duration: "30 mins", session: "5x 2 min hard, 1 min easy jog between efforts." },
            { title: "Ladder Intervals", duration: "30 mins", session: "1-2-3-2-1 min hard, equal jog rest." },
            { title: "Short Race Effort", duration: "30 mins", session: "Run at 5K race pace, pushing effort." },
            { title: "Sprint Finish", duration: "30 mins", session: "Steady effort, last 5 mins all-out sprint." },
            { title: "Hill Attack", duration: "30 mins", session: "5x 45s uphill sprints, jog down recovery." },
            { title: "1-Minute Killers", duration: "30 mins", session: "10x 1 min fast, 1 min jog recovery." },
            { title: "500m Repeats", duration: "30 mins", session: "5x 500m at mile pace, 90s rest between." },
            { title: "Time Trial", duration: "30 mins", session: "Run as hard as you can sustain for the full 30 mins." }
          ]
    },
    "30-40": {
        easy: [
            { title: "Aerobic Base Run", duration: "35 mins", session: "Easy run with a few strides to finish. Z1-Z2 Heart Rate." },
            { title: "Relaxed Jog", duration: "40 mins", session: "Run at a conversational pace, focusing on relaxed form. Z1-Z2 Heart Rate." },
            { title: "Mindful Endurance", duration: "40 mins", session: "Focus on breathing and smooth pacing throughout." },
            { title: "Trail Explorer", duration: "40 mins", session: "Run on a mix of trails and paths at an easy effort." },
            { title: "Form Focus", duration: "40 mins", session: "Every 10 mins, focus on a different aspect of form (arms, posture, cadence, footstrike)." },
            { title: "Heart Rate Cap", duration: "40 mins", session: "Keep HR strictly in Z2, ensuring aerobic efficiency." },
            { title: "Out & Back", duration: "40 mins", session: "20 mins out at an easy effort, turn around and return at the same pace." },
            { title: "Sunset Jog", duration: "40 mins", session: "Relaxed jog to unwind, focusing on enjoyment and scenery." },
            { title: "Grass Run", duration: "35 mins", session: "Run on soft surfaces like grass or dirt to reduce impact." },
            { title: "Podcast Run", duration: "40 mins", session: "Listen to a podcast or audiobook while running at an easy effort." }
          ],
          moderate: [
            { title: "Tempo Workout", duration: "40 mins", session: "15 min easy warm-up, 20 min tempo, 5 min cool-down. Z3-Z4 Heart Rate." },
            { title: "Cruise Intervals", duration: "40 mins", session: "4x 5 min strong, 2 min easy recovery jog. Z3-Z4 Heart Rate." },
            { title: "Negative Split Run", duration: "40 mins", session: "Start easy for 20 mins, then increase pace every 10 mins." },
            { title: "Fartlek Session", duration: "40 mins", session: "6x 2 min faster effort, 2 min easy jog in between." },
            { title: "Progressive Run", duration: "40 mins", session: "Every 10 mins, gradually increase effort, finishing strong." },
            { title: "Hill Repeats", duration: "40 mins", session: "6x 45s uphill effort, jog down recovery, steady effort between hills." },
            { title: "Pyramid Fartlek", duration: "40 mins", session: "1-2-3-2-1 min surges, equal jog recovery." },
            { title: "Strides & Steady", duration: "40 mins", session: "35 min steady effort, finish with 6x 20s strides." },
            { title: "Zonal Run", duration: "40 mins", session: "First 15 mins Z2, next 15 mins Z3, final 10 mins back to Z2." },
            { title: "Hilly Steady Run", duration: "40 mins", session: "Run over rolling hills at a strong but controlled effort." }
          ],
          hard: [
            { title: "VO2 Max Session", duration: "40 mins", session: "6x 3 min hard, 90 sec jog recovery. Z4-Z5 Heart Rate." },
            { title: "Lactate Threshold", duration: "40 mins", session: "3x 8 min at strong effort, 2 min jog recovery." },
            { title: "Threshold Builder", duration: "40 mins", session: "10 min warm-up, 3x 6 min hard, 2 min jog recovery, cool-down." },
            { title: "Short Repeats", duration: "40 mins", session: "12x 1 min fast, 1 min jog recovery." },
            { title: "Race Pace Prep", duration: "40 mins", session: "20 min steady, 10 min race pace, 10 min cool-down." },
            { title: "Ladder Intervals", duration: "40 mins", session: "1-2-3-4-3-2-1 min hard, equal jog recovery." },
            { title: "Sprint Fartlek", duration: "40 mins", session: "8x 30s sprint, 1:30 recovery jog." },
            { title: "Hill Power", duration: "40 mins", session: "5x 1 min uphill hard effort, jog down recovery." },
            { title: "3-Minute Killers", duration: "40 mins", session: "5x 3 min fast effort, 2 min jog recovery." },
            { title: "Time Trial", duration: "40 mins", session: "Run as hard as you can sustain for 40 minutes." }
          ]
    },
    "40-50": {
      easy: [
        { title: "Steady State", duration: "45 mins", session: "Controlled, comfortable run." },
        { title: "Smooth Jog", duration: "50 mins", session: "Run relaxed, enjoy it." }
      ],
      moderate: [
        { title: "Strength Builder", duration: "50 mins", session: "10 min easy, 30 min moderate, 10 min easy." },
        { title: "Pyramid Workout", duration: "50 mins", session: "1-2-3-4-5 min efforts, equal jog recovery." }
      ],
      hard: [
        { title: "Tough Intervals", duration: "50 mins", session: "6x 4 min hard, 2 min jog." },
        { title: "Hill Repeats", duration: "50 mins", session: "8x 45s uphill, jog back down." }
      ]
    },
    "50-60": {
        easy: [
            { title: "Steady State", duration: "45 mins", session: "Controlled, comfortable run. Maintain a steady effort throughout. Z2 Heart Rate." },
            { title: "Smooth Jog", duration: "50 mins", session: "Run relaxed, enjoy it. Focus on light, effortless movement." },
            { title: "Easy Endurance", duration: "50 mins", session: "Keep the effort comfortable and sustainable. Ideal for aerobic base building." },
            { title: "Exploration Run", duration: "50 mins", session: "Take a new route or explore trails while keeping the effort easy." },
            { title: "Mindful Running", duration: "50 mins", session: "Focus on your breath, stride, and surroundings while running at an easy pace." },
            { title: "Heart Rate Control", duration: "50 mins", session: "Keep HR strictly in Z2 to maximize aerobic development." },
            { title: "Negative Split", duration: "50 mins", session: "Run the second half slightly faster than the first." },
            { title: "Out & Back", duration: "50 mins", session: "Run out for 25 mins, turn around, and try to match your return time." },
            { title: "Audio Companion Run", duration: "50 mins", session: "Listen to a podcast, audiobook, or music while keeping a relaxed effort." },
            { title: "Social Run", duration: "50 mins", session: "Run with a friend at an easy conversational pace." }
          ],
          moderate: [
            { title: "Strength Builder", duration: "50 mins", session: "10 min easy warm-up, 30 min moderate, 10 min cool-down." },
            { title: "Pyramid Workout", duration: "50 mins", session: "1-2-3-4-5 min strong efforts, equal jog recovery in between." },
            { title: "Progression Run", duration: "50 mins", session: "Start easy, increase effort every 10 minutes, finish strong." },
            { title: "Tempo Effort", duration: "50 mins", session: "15 min easy, 20 min at tempo pace, 15 min cool-down." },
            { title: "Fartlek Play", duration: "50 mins", session: "8x 2 min surge, 2 min easy jog recovery." },
            { title: "Hilly Tempo", duration: "50 mins", session: "Run on rolling terrain, sustaining a strong but controlled effort." },
            { title: "Threshold Intervals", duration: "50 mins", session: "3x 10 min at threshold pace, 3 min jog recovery." },
            { title: "Cruise Control", duration: "50 mins", session: "Run the middle 30 mins at a strong, controlled effort." },
            { title: "Fast Finish Run", duration: "50 mins", session: "Last 10 mins at a faster pace to build endurance and strength." },
            { title: "Surge Workout", duration: "50 mins", session: "Every 5 minutes, add a 30-second strong surge, then return to moderate pace." }
        ],
        hard: [
          { title: "Tough Intervals", duration: "50 mins", session: "6x 4 min hard effort, 2 min jog recovery." },
          { title: "Hill Repeats", duration: "50 mins", session: "8x 45s uphill sprints, jog back down for recovery." },
          { title: "VO2 Max Intervals", duration: "50 mins", session: "5x 5 min hard, 2 min easy recovery." },
          { title: "Race-Pace Workout", duration: "50 mins", session: "20 min easy, 3x 5 min at race pace, 5 min cool-down." },
          { title: "Short & Fast", duration: "50 mins", session: "12x 1 min hard, 1 min easy." },
          { title: "Ladder Intervals", duration: "50 mins", session: "1-2-3-4-3-2-1 min hard efforts, equal recovery." },
          { title: "Threshold Builder", duration: "50 mins", session: "4x 8 min at threshold pace, 2 min easy jog." },
          { title: "Sprint Finish", duration: "50 mins", session: "Last 5 mins at all-out effort to simulate race fatigue." },
          { title: "Decreasing Recovery", duration: "50 mins", session: "6x 3 min fast, with recovery getting shorter each round." },
          { title: "Mixed Speed Session", duration: "50 mins", session: "2x 8 min hard, 4x 2 min fast, 2 min easy between reps." }
        ]
    },
    "60+": {
        easy: [
            { title: "Long Slow Distance", duration: "75 mins", session: "Easy, enjoyable long run. Maintain a relaxed pace throughout." },
            { title: "Relaxed Endurance", duration: "90 mins", session: "Low-intensity endurance run to build aerobic capacity." },
            { title: "Mindful Long Run", duration: "90 mins", session: "Focus on form, breath, and relaxed movement." },
            { title: "Chatty Long Run", duration: "75-90 mins", session: "Run with a friend or a group at a conversational pace." },
            { title: "Exploration Run", duration: "90 mins", session: "Discover new routes and trails while maintaining a relaxed pace." },
            { title: "Even-Paced Long Run", duration: "75 mins", session: "Maintain a consistent effort without fluctuations in pace." },
            { title: "Rolling Hills", duration: "75-90 mins", session: "Run on undulating terrain to build strength and endurance." },
            { title: "Negative Split Long Run", duration: "90 mins", session: "Run the second half slightly faster than the first." },
            { title: "Sunset or Sunrise Run", duration: "75-90 mins", session: "Enjoy a scenic long run while keeping a relaxed effort." },
            { title: "Easy Effort, Long Duration", duration: "90+ mins", session: "The goal is time on feet, not pace." }
          ],
          moderate: [
            { title: "Steady Long Run", duration: "75 mins", session: "Comfortable but steady effort to build endurance." },
            { title: "Strong Finish", duration: "80 mins", session: "60 mins steady, last 20 mins at a stronger effort." },
            { title: "Progression Long Run", duration: "90 mins", session: "Start easy, gradually increase pace every 20-30 mins." },
            { title: "Surge Workout", duration: "75-90 mins", session: "Every 10 mins, add a 30-second controlled surge." },
            { title: "Fartlek Long Run", duration: "80 mins", session: "Include 6-8 moderate surges lasting 2-3 mins." },
            { title: "Marathon Effort", duration: "90 mins", session: "Run at an effort close to marathon pace." },
            { title: "Rolling Terrain Run", duration: "75-90 mins", session: "Run on varied terrain, keeping a steady effort." },
            { title: "Time-Based Effort", duration: "75-90 mins", session: "Run based on feel rather than distance." },
            { title: "Long Intervals", duration: "90 mins", session: "3x 20 min moderate, 5 min easy recovery." },
            { title: "Aerobic Builder", duration: "90 mins", session: "Sustained endurance effort to enhance stamina." }
          ],
          hard: [
            { title: "Threshold Builder", duration: "90 mins", session: "4x 15 min strong, 3 min jog recovery." },
            { title: "Marathon Simulation", duration: "90 mins", session: "60 min easy, 30 min at marathon pace." },
            { title: "Tempo Long Run", duration: "90 mins", session: "20 min easy, 40 min tempo, 30 min easy." },
            { title: "Hilly Effort", duration: "75-90 mins", session: "Run a hilly route with strong effort on the inclines." },
            { title: "Fast Finish", duration: "90 mins", session: "Last 20 mins at half-marathon pace." },
            { title: "Long Fartlek", duration: "90 mins", session: "6x 5 min strong, 3 min easy." },
            { title: "Alternating Paces", duration: "90 mins", session: "10 min steady, 5 min strong, repeat." },
            { title: "Endurance Intervals", duration: "90 mins", session: "3x 25 min at strong effort, 5 min easy." },
            { title: "Tough Progression", duration: "90 mins", session: "Start at easy effort, finish at 10K pace." },
            { title: "Lactate Threshold", duration: "90 mins", session: "5x 12 min at strong effort, 3 min recovery jog." }
          ]
    }
  };
  

document.addEventListener("DOMContentLoaded", function () {
    console.log("Custom Workout Generator Ready...");
  
    const generateWorkoutBtn = document.getElementById("generateWorkoutBtn");
    const timeSelect = document.getElementById("timeSelect");
    const intensitySelect = document.getElementById("intensitySelect");
    const workoutDisplay = document.getElementById("workoutDisplay");
  
    generateWorkoutBtn.addEventListener("click", function () {
      const timeChoice = timeSelect.value;
      const intensityChoice = intensitySelect.value;
  
      if (!timeChoice || !intensityChoice) {
        alert("Please select both time and intensity.");
        return;
      }
  
      const selectedWorkouts = workouts[timeChoice][intensityChoice];
      if (!selectedWorkouts || selectedWorkouts.length === 0) {
        workoutDisplay.innerHTML = `<p>No workouts found for this option.</p>`;
        return;
      }
  
      // Select a random workout from the list
      const randomWorkout = selectedWorkouts[Math.floor(Math.random() * selectedWorkouts.length)];
  
      // Display the workout in the **same style** as the other pages
      workoutDisplay.innerHTML = `
          <h3>${randomWorkout.title}</h3>
          <p><strong>Duration:</strong> ${randomWorkout.duration}</p>
          <p><strong>Session:</strong> ${randomWorkout.session}</p>
          `;
    });
  });

  
    
document.addEventListener("DOMContentLoaded", function () {
    const customWorkoutBtn = document.getElementById("backBtn");
  
    if (customWorkoutBtn) {
        customWorkoutBtn.addEventListener("click", function () {
            window.location.href = "index.html"; // Redirect to custom workout page
        });
    }
  });
  