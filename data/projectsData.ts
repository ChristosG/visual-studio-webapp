// /data/projectsData.ts

export interface Project {
    id: number;
    name: string;
    description: string;
    githubUrl: string;
    previewImage?: string; // optional
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      name: 'AI Chatbot',
      description: 'A GPT-based chatbot with real-time Q&A and sentiment analysis.',
      githubUrl: 'https://github.com/YourUsername/ai-chatbot',
      previewImage: '/images/ai-chatbot.png',
    },
    {
      id: 2,
      name: 'Microservices',
      description: 'Dockerized microservice architecture with Kubernetes orchestration.',
      githubUrl: 'https://github.com/YourUsername/microservices',
      previewImage: '/images/microservices.png',
    },
    {
      id: 3,
      name: 'Face Recognition',
      description: 'Facial recognition using PyTorch CNNs for identity detection.',
      githubUrl: 'https://github.com/YourUsername/face-recognition',
    },
    {
      id: 4,
      name: 'Realtime Analytics',
      description: 'Kafka + Spark streaming pipeline with React dashboards.',
      githubUrl: 'https://github.com/YourUsername/realtime-analytics',
    },
    // ... add your 10+ projects ...
  ];
  