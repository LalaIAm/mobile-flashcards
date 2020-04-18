export const initialDecks = {
  React: {
    title: "React",
    questions: [
      {
        question: "Is React declarative or imperative?",
        answer:
          "It's declarative. You say what you want to have happen rather than give step by step instructions.",
      },
      {
        question: "Does case matter in naming React components?",
        answer:
          "Yes, they must be uppercase or React will treat them as DOM tags",
      },
      {
        question: "What is a 'controlled component'?",
        answer:
          "An input form where React controls state, e.g. input value = {this.state.value}.",
      },
      {
        question: "When is a component constructor function called?",
        answer:
          "Once, the first time the component is mounted (i.e. instantiated)",
      },
    ],
  },
  Design: {
    title: "Design",
    questions: [
      {
        question: "What is the purpose of graphic design?",
        answer: "To inform, influence and persuade. To communicate.",
      },
      {
        question: "What is the difference between art and design?",
        answer:
          "Art is self-expression and design appeals to a particular audience.",
      },
      {
        question: "Why do emotions play an important role in graphic design?",
        answer:
          "People are captivated by things that appeal to their emotions. When they connect with a design or idea, they are more than likely to remember it and engage with it if they feel an emotional connection.",
      },
    ],
  },
};
