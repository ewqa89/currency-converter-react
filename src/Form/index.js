import "./style.css";

const Form = () => (
    <form className="form js-form">
            <fieldset className="form__fildset">
                <legend className="form__legend">
                    Kalkulator walut
                </legend>
                <p>
                    <label>
                        <span className="form__labelText">Kwota jaką chcesz wymienić:</span>
                        <input className="form__input js-value" type="number" name="value" step="any" min="0" autofocus />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz walutę:</span>
                        <select className="form__select js-currency" name="currency">
                            <option value="4.7804">EUR</option>
                            <option value="4.9000">USD</option>
                            <option value="3.2463">JPY</option>
                            <option value="4.8520">CHF</option>
                        </select>
                        <p>
                            <span className="js-exchangeChoose">0</span>
                        </p>
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <fieldset className="form__fildset form__fildset--result">
                <p>
                    <label className="form__label">
                        Po przeliczeniu otrzymasz: <strong className="js-result"></strong> zł
                    </label>
                </p>
                <p className="form__paragraph">*Kurs z dnia 22.10.2022</p>
            </fieldset>
        </form>
);

export default Form;