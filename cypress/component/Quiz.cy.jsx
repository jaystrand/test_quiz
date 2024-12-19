describe('Score', () => {
    it('completing the quiz, should display your score', () => {
      cy.mount(
        <QuizComponent 
          totalQuestions={10} 
          correctAnswers={5} 
        />
      );
      
      // Verify score display
      cy.contains('3/5').should('be.visible');
    });
  });