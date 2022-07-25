import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="name-input" />
        value=
        { cardName }
        onChange=
        { onInputChange }
        <input type="textarea" data-testid="description-input" />
        value=
        { cardDescription }
        onChange=
        { onInputChange }
        <input type="number" data-testid="attr1-input" />
        value=
        { cardAttr1 }
        onChange=
        { onInputChange }
        <input type="number" data-testid="attr2-input" />
        value=
        { cardAttr2 }
        onChange=
        { onInputChange }
        <input type="number" data-testid="attr3-input" />
        value=
        { cardAttr3 }
        onChange=
        { onInputChange }
        <input type="text" data-testid="image-input" />
        value=
        { cardImage }
        onChange=
        { onInputChange }
        <select name="options" id="" data-testid="rare-input">
          value=
          {cardRare }
          onChange=
          { onInputChange }
          <option value="normal"> </option>
          <option value="raro"> </option>
          <option value="muito raro"> </option>
        </select>
        <input type="checkbox" data-testid="trunfo-input" />
        checked=
        { cardTrunfo }
        onChange=
        { onInputChange }
        <input type="button" data-testid="save-button" />
        Salvar
        disabled=
        { isSaveButtonDisabled }
        onClick=
        { onSaveButtonClick }
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
