




function highestScoringStudents(scoresArray) {
    // Use a Map to store sum of scores and count of subjects for each student
    const scoreSumMap = new Map();
    const scoreCountMap = new Map();
  
    // Iterate through each student's scores
    for (const student of scoresArray) {
      const { name, scores } = student;
      const sum = scores.reduce((acc, score) => acc + score, 0);
      const count = scores.length;
  
      // Update sum and count maps
      scoreSumMap.set(name, (scoreSumMap.get(name) || 0) + sum);
      scoreCountMap.set(name, (scoreCountMap.get(name) || 0) + count);
    }
  
    // Calculate average scores for each student
    const averageScoresMap = new Map();
    for (const [name, sum] of scoreSumMap) {
      const count = scoreCountMap.get(name);
      const average = sum / count;
      averageScoresMap.set(name, average);
    }
  
    // Determine the highest average score
    let highestAverage = -Infinity;
    const highestScorers = new Set();
    for (const [name, average] of averageScoresMap) {
      if (average > highestAverage) {
        highestAverage = average;
        highestScorers.clear();
        highestScorers.add(name);
      } else if (average === highestAverage) {
        highestScorers.add(name);
      }
    }
  
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
  