import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="error" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          {/* <p>Não foi possível</p> */}
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
