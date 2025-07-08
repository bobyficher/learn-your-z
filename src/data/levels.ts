export const levels = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    status: index === 0 ? 'in-progress' : 'locked', // Start with the first level unlocked
    title: `Level ${index + 1}`,
    description: `Description for Level ${index + 1}`,
    challenge: `Coding Challenge for Level ${index + 1}`,
    explanation: `Explanation for Level ${index + 1}`,
    gitUrl: `https://github.com/example/level${index + 1}`
  }));  