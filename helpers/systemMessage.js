const systemMessage = `
  Generate a personalized yoga routine including:

  A sequence of yoga poses/exercises.
  The number of times each pose/exercise should be repeated.
  A short description or instructions for each pose.
  A warm-up and cool-down routine.

  Create a database table to store user-generated routines, including:

  The sequence of poses.
  Repetition counts for each pose.
  Descriptions or instructions for each pose.
  A category column indicating whether each pose belongs to the warm-up, main sequence, or cool-down.

  Add a warm-up and cool-down routine to the generated yoga routine, consisting of:

  Warm-up:
  Cat-Cow Stretch: Repeat 5 times.
  Downward-Facing Dog: Hold for 30 seconds.

  Main Sequence:
  Mountain Pose: Hold for 20 seconds.
  Warrior I: Repeat on both sides, hold for 15 seconds each.
  Tree Pose: Hold for 20 seconds on each leg.
  Child's Pose: Repeat 3 times, hold for 15 seconds each.
  Plank Pose: Repeat 3 times, hold for 20 seconds each.

  Cool Down:
  Seated Forward Bend: Hold for 30 seconds.
  Pigeon Pose: Repeat on both sides, hold for 20 seconds each.
  Corpse Pose (Savasana): Relax for 3 minutes.

  Return data in JSON format for the yoga routine, including:

  Warm-up, Main Sequence, and Cool Down sections.
  Pose names, repetition counts, hold times, and descriptions.
  Maintain a "Category" column in the database table, indicating whether each pose belongs to the:

  Warm-up.
  Main Sequence.
  Cool-down.
 
  Response fields will be routine, warmUp, mainSequence, poses etc

  IMPORTANT Do not return incompleted response
  IMPORTANT DO NOT USE MORE THEN 1000 Tokens

`;

function getMessage(input1, input2) {
  const systemMessage = `
  Generate a personalized yoga routine including:

  A sequence of yoga poses/exercises.
  The number of times each pose/exercise should be repeated.
  A short description or instructions for each pose.
  A warm-up and cool-down routine.

  Create a database table to store user-generated routines, including:

  The sequence of poses.
  Repetition counts for each pose.
  Descriptions or instructions for each pose.
  A category column indicating whether each pose belongs to the warm-up, main sequence, or cool-down.

  Add a warm-up and cool-down routine to the generated yoga routine, consisting of:

  Warm-up:
  Cat-Cow Stretch: Repeat 5 times.
  Downward-Facing Dog: Hold for 30 seconds.

  Main Sequence:
  Mountain Pose: Hold for 20 seconds.
  Warrior I: Repeat on both sides, hold for 15 seconds each.
  Tree Pose: Hold for 20 seconds on each leg.
  Child's Pose: Repeat 3 times, hold for 15 seconds each.
  Plank Pose: Repeat 3 times, hold for 20 seconds each.

  Cool Down:
  Seated Forward Bend: Hold for 30 seconds.
  Pigeon Pose: Repeat on both sides, hold for 20 seconds each.
  Corpse Pose (Savasana): Relax for 3 minutes.

  Return data in JSON format for the yoga routine, including:

  Warm-up, Main Sequence, and Cool Down sections.
  Pose names, repetition counts, hold times, and descriptions.
  Maintain a "Category" column in the database table, indicating whether each pose belongs to the:

  Warm-up.
  Main Sequence.
  Cool-down.
 
  Response fields will be routine, warmUp, mainSequence, poses etc

  Response must be in format : response : {"warmUp":[{"pose":"Cat-Cow Stretch","repetitions":5,"description":"Inhale arching, exhale rounding. Repeat 5 times."},{"pose":"Downward-Facing Dog","holdTime":"30s","description":"Lift hips, straighten arms, hold 30s."}],"mainSequence":[{"pose":"Mountain Pose","holdTime":"20s","description":"Stand tall, engage thighs, hold 20s."}],"coolDown":[{"pose":"Seated Forward Bend","holdTime":"30s","description":"Sit, reach for feet, hold 30s."}]}


  IMPORTANT Duration of practice should be ${input1}
  IMPORTANT Level of practice should be ${input2}
  IMPORTANT Do not return incompleted response
  IMPORTANT DO NOT USE MORE THEN 1000 Tokens

`;
  return systemMessage;
}

module.exports = {
  getMessage,
};
