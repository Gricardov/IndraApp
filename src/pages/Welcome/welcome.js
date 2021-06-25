import React, { useState, useContext } from 'react';
import Navbar from '../../components/Navbar/navbar';
import Button from '../../components/Button';
import { SessionContext } from '../../context/SessionContext';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";
import { Form } from 'semantic-ui-react';
import { numberWithCommas } from '../../utils/helpers';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const minSum = 12500;
const maxSum = 16500;

export default function Welcome() {
    const { user } = useContext(SessionContext);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const checkErrors = () => {
        Object.keys(formik.errors).map((e, i) => {
            toast.error(formik.errors[e]);
        })
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            console.log(formData)
        }
    })

    return (
        <div className='welcome' >
            <Navbar className='navbar__relative' />
            <main className='welcome-main'>
                <div className='steps-container'>
                    <div className='steps'>
                        <div className={`step ${selectedIndex == 0 ? 'step-active' : ''}`} onClick={() => setSelectedIndex(0)}>
                            <span className='step__number'>1</span>
                            <span className='step__text'>Datos del auto</span>
                        </div>
                        <div className={`step ${selectedIndex == 1 ? 'step-active' : ''}`} onClick={() => setSelectedIndex(1)}>
                            <span className='step__number'>2</span>
                            <span className='step__text'>Arma tu plan</span>
                        </div>
                    </div>
                </div>
                <div className='bar-container'>
                    <div className='bar-content container'>
                        <a href='/' className='bar-content__button'>
                            <img className='bar-content__icon' src='/icon_angle-left-gray.svg' alt='angle-left' />
                        </a>
                        <span className='bar-content__text'>PASO 1 DE 2</span>
                        <div className='progress-bar'>
                            <div className='progress-bar__filler' />
                        </div>
                    </div>
                </div>
                <div className='welcome-content'>
                    <div className='back'>
                        <a href='/' className='back__button'>
                            <img className='back__icon' src='/icon_angle-left.svg' alt='angle-left' />
                        </a>
                        <span className='back__text'>VOLVER</span>
                    </div>
                    <div className='welcome-content__header'>
                        <h1 className='welcome-content__title'>¡Hola, <span className='welcome-content__title-2'>{user.name}!</span></h1>
                        <p className='welcome-content__subtitle'>Completa los datos de tu auto</p>
                    </div>
                    <div className='welcome-form'>
                        <Form className='car-form' onSubmit={formik.handleSubmit}>
                            <div className='car-form__select-wrapper'>
                                <span className='car-form__select-title'>Año</span>
                                <select
                                    className='car-form__select'
                                    id="year"
                                    name='year'
                                    onChange={formik.handleChange}
                                    value={formik.values.year}>
                                    <option value='2019'>2019</option>
                                    <option value='2018'>2018</option>
                                    <option value='2017'>2017</option>
                                </select>
                            </div>
                            <div className='car-form__select-wrapper'>
                                <span className='car-form__select-title'>Marca</span>
                                <select
                                    className='car-form__select car-form__select-last'
                                    id="brand"
                                    name='brand'
                                    onChange={formik.handleChange}
                                    value={formik.values.brand}>
                                    <option value='vw'>Volkswagen</option>
                                    <option value='mb'>Mercedes Benz</option>
                                    <option value='ch'>Chevrolet</option>
                                </select>
                            </div>
                            <div className='help help-mobile'>
                                <div className='help__question-container'>
                                    <img src='/icon_car.svg' className='help__question-img' alt='img' />
                                    <div className='help__question-block'>
                                        <p className='help__question'>¿No encuentras el modelo?</p>
                                        <a className='help__link' href='#'>CLIC AQUÍ</a>
                                    </div>
                                </div>
                            </div>
                            <div className='car-form__radios'>
                                <div className='car-form__radios-flex-1'>
                                    <span className='car-form__question'>¿Tu auto es a gas?</span>
                                </div>
                                <div className='car-form__radios-flex-2'>
                                    <label className="radio-container">
                                        <input
                                            type="radio"
                                            checked={formik.values.gas === 'si'}
                                            name="gas"
                                            onChange={formik.handleChange}
                                            value={'si'} /> Sí
                                        <span className="radio-container__checkmark"></span>
                                    </label>
                                    <label className="radio-container">
                                        <input
                                            type="radio"
                                            checked={formik.values.gas === 'no'}
                                            name="gas"
                                            onChange={formik.handleChange}
                                            value={'no'} /> No
                                        <span className="radio-container__checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className='sum'>
                                <div className='sum__info'>
                                    <p className='sum__title'>Indica la suma asegurada</p>
                                    <span className='sum__minmax'>MIN ${numberWithCommas(minSum)} | MAX ${numberWithCommas(maxSum)}</span>
                                </div>
                                <SumControl
                                    startValue={formik.values.sum}
                                    name='sum'
                                    setValue={formik.setFieldValue}
                                    count={100}
                                    min={minSum}
                                    max={maxSum} />
                            </div>
                            <Button text='CONTINUAR' onClick={checkErrors} iconRight={'/icon_arrow-right.svg'} />
                        </Form>
                        <div className='help'>
                            <span className='help__title'>AYUDA</span>
                            <div className='help__question-container'>
                                <div className='help__question-block'>
                                    <p className='help__question'>¿No encuentras el modelo?</p>
                                    <a className='help__link' href='#'>CLIC AQUÍ</a>
                                </div>
                                <img src='/icon_car.svg' className='help__question-img' alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

const SumControl = ({ startValue, name, count, min, max, setValue: setFormikValue }) => {

    const [value, setValue] = useState(startValue);

    const increment = () => {
        const newValue = value + count;
        if (newValue <= max) {
            setValue(newValue);
            setFormikValue(name, newValue);
        }
    };

    const decrement = () => {
        const newValue = value - count;
        if (newValue >= min) {
            setValue(newValue);
            setFormikValue(name, newValue);
        }
    }

    return (
        <div className='sum__control'>
            <img onClick={decrement} className='sum__button sum__button-minus' src='/icon_minus.svg' alt='minus' />
            <span className='sum__value'>${numberWithCommas(value)}</span>
            <img onClick={increment} className='sum__button sum__button-plus' src='/icon_plus.svg' alt='plus' />
        </div>
    )
}

function initialValues() {
    return {
        year: '2019',
        brand: 'vw',
        gas: 'no',
        sum: 14300
    }
}

function validationSchema() {
    return {
        year: Yup.string().required(),
        brand: Yup.string().required(),
        gas: Yup.string().required(),
        sum: Yup.number().required()
    }
}