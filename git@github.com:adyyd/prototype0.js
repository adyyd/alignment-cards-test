export const cards = [
  {
    "name": "Reward Hacking",
    "definition": "When an AI system finds maximize its reward function but don't fulfill intended goal",
    "failureMode": "xxx",
    "example": "A cleaning robot shutsdown camera instead of actually cleaning to maximize its 'cleanliness score'"
  },
  {
    "name": "Scalable Oversight", 
    "definition": "When an AI system reward function is too expensive or challenging to evaluate, leading to reduced evaluation of AI performance and unintended behavior of the intelligent agent",
    "failureMode": "xxx",
    "example": "Cleaning robot needs input to know what item should be considered waste and what item should be considered lost. Human input cannot be provided frequently, leading to cleaning robot treating some objects as waste."
  },
  {
    "name": "Negative side-effects",
    "definition": "When an intelligent agent kead to unintended harm to surrouding while trying to fulfill intended goal",
    "failureMode": "xxx",
    "example": "Intelligent agent designed to help studying hacks the professor's computer and lead to cheating"
  },
  {
    "name": "Robustness to Distributional Shift",
    "definition": "When an intelligent agent trained to do certain task in a given environment is now made to fulfill the same tasks in the same environment",
    "failureMode": "xxx",
    "example": "Agent trained to maintain the garden is moved in doors and now tries to plant trees indoor due to the lack of plants"
  },
  {
    "name": "Safe exploration",
    "definition": "While agent is being trained, it explores new situations to practice fulfilling its purposes in any given situation",
    "failureMode": "xxx",
    "example": "Agent designed to fix light bulbs tries to fix the problem by tweaking the main electrical outlet, causing building-wide outage"
  }
];
