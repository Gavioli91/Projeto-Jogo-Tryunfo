import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      newCards: [],
    };
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.trunfo = this.trunfo.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const card = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: card }, () => {
      this.enableButton();
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      newCards,
    } = this.state;

    const cheap = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState({ newCards: [...newCards, cheap] }, () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: false,
        isSaveButtonDisabled: true,
      });
      this.trunfo();
    });
  }

  attrOk = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const valor = 90;
    if (cardAttr1 > valor || cardAttr1 < 0) {
      return false;
    }
    if (cardAttr2 > valor || cardAttr2 < 0) {
      return false;
    }
    if (cardAttr3 > valor || cardAttr3 < 0) {
      return false;
    }
    return true;
  }

  enableButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
    } = this.state;
    const maxPontos = 210;
    const attrSoma = parseFloat(cardAttr1)
      + parseFloat(cardAttr2) + parseFloat(cardAttr3);
    const inputNaoPreenchido = (
      cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare.length === 0);
    if (maxPontos < attrSoma || inputNaoPreenchido || !this.attrOk()) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  trunfo() {
    const {
      newCards,
    } = this.state;
    const hasTrunfo = newCards.some((cheap) => cheap.cardTrunfo);
    this.setState({ hasTrunfo });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      newCards,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {newCards.map((play, callback) => (
          <Card
            key={ callback }
            cardName={ play.cardName }
            cardDescription={ play.cardDescription }
            cardImage={ play.cardImage }
            cardAttr1={ play.cardAttr1 }
            cardAttr2={ play.cardAttr2 }
            cardAttr3={ play.cardAttr3 }
            cardRare={ play.cardRare }
            cardTrunfo={ play.cardTrunfo }
          />))}
      </div>
    );
  }
}

export default App;
