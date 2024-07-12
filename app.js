function highestScoringStudents(scoresArray) {
  const scoreSumMap = new Map();
  const scoreCountMap = new Map();
  
  // Calculate sum and count for each student
  scoresArray.forEach(student => {
      const { name, scores } = student;
      const sum = scores.reduce((acc, score) => acc + score, 0);
      const count = scores.length;
      
      scoreSumMap.set(name, (scoreSumMap.get(name) || 0) + sum);
      scoreCountMap.set(name, (scoreCountMap.get(name) || 0) + count);
  });
  
  // Calculate average scores for each student
  const averageScoresMap = new Map();
  scoreSumMap.forEach((sum, name) => {
      const count = scoreCountMap.get(name);
      const average = sum / count;
      averageScoresMap.set(name, average);
  });
  
  // Determine the highest average score
  let highestAverage = -Infinity;
  const highestScorers = new Set();
  averageScoresMap.forEach((average, name) => {
      if (average > highestAverage) {
          highestAverage = average;
          highestScorers.clear();
          highestScorers.add(name);
      } else if (average === highestAverage) {
          highestScorers.add(name);
      }
  });
  
  return highestScorers;
}

// Example usage:
const scoresArray = [
  { name: 'Alice', scores: [85, 90, 92] },
  { name: 'Bob', scores: [89, 95, 86] },
  { name: 'Charlie', scores: [88, 91, 93] },
  { name: 'David', scores: [90, 88, 89] }
];

console.log(highestScoringStudents(scoresArray)); // Output: Set { 'Alice', 'Bob', 'Charlie' }
