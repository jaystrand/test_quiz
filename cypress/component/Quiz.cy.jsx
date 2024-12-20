import Quiz from '../../src/components/Quiz';
import { getQuestions } from '../../src/services/questionApi.ts';

const mockQuestions = [{
  question: "Q1",
  answers: [{ text: "A1", isCorrect: true }]
}];

describe('Quiz', () => {
  it('completes quiz flow', () => {
    cy.stub({ getQuestions }).resolves(mockQuestions);
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.contains('A1').click();
    cy.contains('Your score: 1/1').should('be.visible');
  });
});