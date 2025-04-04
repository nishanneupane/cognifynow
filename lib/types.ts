export type Feature = {
  title: string;
  points: string[];
};

export type FeatureData = {
  features: {
    cognitive: Feature;
    ai_problem_solving: Feature;
    dynamic_paths: Feature;
    ai_mentor: Feature;
  };
};

export type FeaturesData = {
  features: Feature[];
};
