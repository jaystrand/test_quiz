import Quiz from '../../client/src/components/Quiz';
import { getQuestions } from '../../client/src/services/questionApi';

const mockQuestions = [{
  question: "Q1",
  answers: [{ text: "A1", isCorrect: true }]
}];

describe('Quiz', () => {
  it('completes quiz flow', () => {    
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.contains('1').click();
  });
});