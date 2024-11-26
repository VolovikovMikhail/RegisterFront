import { useState } from 'react';
import { Flex } from 'antd';
import {  Button, Cascader,  DatePicker, Form,  Input, InputNumber,  Radio, Select,  Switch, TreeSelect } from 'antd';

const RegistrationForm = () => {
    const [status, setStatus] = useState(''); // Категория пользователя
    const [categreg, setCategreg] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [first_name_fa, setFirst_name_fa] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [snils, setSnils] = useState('');
    const [faculty, setFaculty] = useState('');
    const [group, setGroup] = useState('');
    const [number_school, setNumber_school] = useState('');
    const [class_school, setClass_school] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            // Отправка данных на сервер через fetch API
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status, first_name, last_name, first_name_fa, phone_number, snils, faculty, group, 
                    number_school, class_school, email, password })
            });
            
            if (!response.ok) {
                throw new Error(await response.text());
            }

            alert('Вы успешно зарегистрированы!');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    let inputFields;

    switch (categreg) {
      case 'register':
        switch (status) {
          case 'student':
            inputFields = (
              <>
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name">
                    Имя:
                  </label>
                  <Input
                    type="first_name"
                    id="first_name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="last_name">
                    Фамилия:
                  </label>
                  <Input
                    type="last_name"
                    id="last_name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name_fa">
                    Отчество:
                  </label>
                  <Input
                    type="first_name_fa"
                    id="first_name_fa"
                    value={first_name_fa}
                    onChange={(e) => setFirst_name_fa(e.target.value)}
                  />
                </div>

                <div className="input-group visible">
                  <label className="label" htmlFor="phone_number">
                    Номер телефона:
                  </label>
                  <Input
                    type="phone_number"
                    id="phone_number"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="faculty">
                    Факультет:
                  </label>
                  <Input
                    type="faculty"
                    id="faculty"
                    value={faculty}
                    onChange={(e) => setFaculty(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="group">
                    Группа:
                  </label>
                  <Input
                    type="group"
                    id="group"
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="email">
                    Электронная почта:
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="password">
                    Пароль:
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </>
            );
            break;
          case 'applicant':
            inputFields = (
              <>
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name">
                    Имя:
                  </label>
                  <Input
                    type="first_name"
                    id="first_name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="last_name">
                    Фамилия:
                  </label>
                  <Input
                    type="last_name"
                    id="last_name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name_fa">
                    Отчество:
                  </label>
                  <Input
                    type="first_name_fa"
                    id="first_name_fa"
                    value={first_name_fa}
                    onChange={(e) => setFirst_name_fa(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="phone_number">
                    Номер телефона:
                  </label>
                  <Input
                    type="phone_number"
                    id="phone_number"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="snils">
                    СНИЛС:
                  </label>
                  <Input
                    type="snils"
                    id="snils"
                    value={snils}
                    onChange={(e) => setSnils(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="email">
                    Электронная почта:
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="password">
                    Пароль:
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </>
            );
            break;
          case 'schoolboy':
            inputFields = (
              <>
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name">
                    Имя:
                  </label>
                  <Input
                    type="first_name"
                    id="first_name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="last_name">
                    Фамилия:
                  </label>
                  <Input
                    type="last_name"
                    id="last_name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name_fa">
                    Отчество:
                  </label>
                  <Input
                    type="first_name_fa"
                    id="first_name_fa"
                    value={first_name_fa}
                    onChange={(e) => setFirst_name_fa(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="phone_number">
                    Номер телефона:
                  </label>
                  <Input
                    type="phone_number"
                    id="phone_number"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="number_school">
                    Номер школы:
                  </label>
                  <Input
                    type="number_school"
                    id="number_school"
                    value={number_school}
                    onChange={(e) => setNumber_school(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="class_school">
                    Класс:
                  </label>
                  <Input
                    type="class_school"
                    id="class_school"
                    value={class_school}
                    onChange={(e) => setClass_school(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="email">
                    Электронная почта:
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="password">
                    Пароль:
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </>
            );
            break;
          default:
            inputFields = null;
        }
        break;
      case 'login':
        inputFields = (
          <>
            <div className="input-group visible">
              <label className="label" htmlFor="email">
                Электронная почта:
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
  
            <div className="input-group visible">
              <label className="label" htmlFor="password">
                Пароль:
              </label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </>
        );
        break;
      default:
        inputFields = null;
    }
  
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        {/*<h2 className="form-title">Регистрация</h2>*/}
  
        <div className="input-group visible">
          <div className="buttonreg-group">
            <span
            className={`category-label register-label ${categreg === 'register' && 'active'}`}
            onClick={() => setCategreg('register')}
            >
              Регистрация
            </span>
            <span
              className={`category-label login-label ${categreg === 'login' && 'active'}`}
              onClick={() => setCategreg('login')}
            >
              Вход
            </span>
          </div>
        </div>
  
        {categreg !== 'login' && (
          <div className="input-group visible">
            <div className="button-group">
              <button
                type="button"
                className={`status-button student-button ${
                  status === 'student' ? 'active' : ''
                }`}
                onClick={() => setStatus('student')}
              >
                Студент
              </button>
              <button
                type="button"
                className={`status-button applicant-button ${
                  status === 'applicant' ? 'active' : ''
                }`}
                onClick={() => setStatus('applicant')}
              >
                Абитуриент
              </button>
              <button
                type="button"
                className={`status-button schoolboy-button ${
                  status === 'schoolboy' ? 'active' : ''
                }`}
                onClick={() => setStatus('schoolboy')}
              >
                Школьник
              </button>
            </div>
          </div>
        )}
  
        {inputFields}
  
        {errorMessage && <p className="error-message">{errorMessage}</p>}
  
        <Flex gap="small" wrap>
          <Button type="primary">Зарегистрироваться</Button>
        </Flex>
      </form>
    );
  };
  
  export default RegistrationForm;