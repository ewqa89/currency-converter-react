import { useState } from "react";
import "./style.css";

const currencys = [
    {
        name: "Euro",
        short: "EUR",
        course: 4.6648
    },
    {
        name: "Dolar amerykański",
        short: "USD",
        course: 4.3947
    },
    {
        name: "Jen",
        short: "JPY",
        course: 3.3377
    },
    {
        name: "Frank szwajcarski",
        short: "CHF",
        course: 4.7443
    },
];

const Form = () => {

    const [amount, setAmount] = useState("");

    const [currency, setCurrency] = useState(currencys[0].short);

    const [result, setResult] = useState(null);

    const calculate = (amount, currency) => {

        const { course, short } = currencys.find(({ short }) => short === currency);
        setResult((amount / course).toFixed(2) + ' ' + short);
    };

    const foundCourse = (currency) => {
        const actualSetValue = currencys.find(element => element.short === currency)
        return actualSetValue.course;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculate(amount, currency);
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <fieldset className="form__fildset">
                <legend className="form__legend">
                    Kalkulator walut
                </legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Kwota PLN jaką chcesz wymienić:
                        </span>
                        <input
                            className="form__input"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            step="any"
                            min="0"
                            autofocus />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz walutę:</span>

                        <select
                            className="form__select"
                            name="currency"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencys.map((currency) => (
                                <option
                                    key={currency.short}
                                    value={currency.short}>
                                    {currency.name}
                                </option>
                            ))};
                        </select>
                        <span> *Kurs: {foundCourse(currency)}
                        </span>
                    </label>
                </p>
            </fieldset><p>
                <button
                    className="form__button"
                >
                    Przelicz
                </button>
            </p><fieldset className="form__fildset form__fildset--result">
                <p>
                    <label className="form__label">
                        Po przeliczeniu otrzymasz: <strong>{result}</strong>
                    </label>
                </p>
                <p className="form__paragraph">*Kurs z dnia 21.12.2022</p>
            </fieldset>
        </form>
    );
};

export default Form;