describe('Python Quiz', () => {
    
      beforeEach(() => {        
        cy.visit('/');
      });
  
      it('clicking the start button will display a question', () => {
        cy.get('button').click();
        
      });

    //   it('when selecting an answer, it should move to the next question', () => {
        
    //   });

    //   it('when clicking take new quiz, a new quiz should start', () => {
        
    //   });
 
});