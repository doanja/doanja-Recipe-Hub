import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import RecipePreview from './RecipePreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface RecipeResultsProps {
  recipes: Array<Recipe>;
  loadSingleRecipe: loadSingleRecipe;
  previousRecipeResults: PreviousRecipeResults;
  nextRecipeResults: NextRecipeResults;
}

const RecipeResults: React.FC<RecipeResultsProps> = ({
  recipes,
  loadSingleRecipe,
  previousRecipeResults,
  nextRecipeResults,
}) => {
  return (
    <Container fluid className='my-3'>
      <h3>Search Results</h3>

      <hr />

      <div>
        {recipes.map((recipe, key) => (
          <RecipePreview key={key} recipe={recipe} loadSingleRecipe={loadSingleRecipe} />
        ))}
      </div>

      <hr />

      <div className='d-block'>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className='icon float-left'
          onClick={previousRecipeResults}
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          className='icon float-right'
          onClick={nextRecipeResults}
        />
      </div>
    </Container>
  );
};

export default RecipeResults;
