// Registration.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Тут можно вставить логику регистрации
    // После успешной регистрации переходим на следующую страницу
    navigate('/next'); // переход по маршруту
  };

  return (
    <div>
      {/* Ваша форма регистрации */}
      <form onSubmit={handleRegister}>
        {/* поля формы */}
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;

