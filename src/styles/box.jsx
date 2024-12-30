import styled, { css } from 'styled-components';

const mainColor = '#1F17FF';

<<<<<<< HEAD
export const InputBox = styled.input`
  padding: 1.5rem;
  border: 1px solid #ededed;
  /* width: 100%; */
`; //InputBox

export const FormBox = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 4rem;
  }
  width: 50%;
  background-color: #fff;
  margin: 0 auto;
  padding: 4rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 4rem 0;
    .input-wrap {
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      input[type='radio'] {
        width: 3rem;
        padding-left: 1rem;
      }
      span {
        width: 12rem;
        font-size: 1.6rem;
      }
    }
    .submit-btn {
      padding: 2rem;
      font-size: 1.4rem;
    }
  }
=======
const Box = {
  ContentBox: css`
    width: 110rem;
    margin: 0 auto;
    margin-bottom: 10rem;
  `,
};

const Input = {
  InputBox: css`
    padding: 1.5rem;
    border: 1px solid #ededed;
  `,
  MaxInputBox: css`
    padding: 1.5rem;
    border: 1px solid #ededed;
    width: 100%;
  `,
};

const Form = {
  FormBox: css`
    h3 {
      font-size: 2rem;
      margin-bottom: 4rem;
    }
    width: 50%;
    background-color: #fff;
    margin: 0 auto;
    padding: 4rem;
    form {
      display: flex;
      flex-direction: column;
      gap: 4rem 0;
      .input-wrap {
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        input[type="radio"] {
          width: 3rem;
          padding-left: 1rem;
        }
        span {
          width: 12rem;
          font-size: 1.6rem;
        }
      }
      .submit-btn {
        padding: 2rem;
        font-size: 1.4rem;
      }
    }
  `,
};

export const DivBox = styled.div`
  ${(props) => Box[props.divStyles] || Box.ContentBox}
`;

export const InputBox = styled.input`
  ${(props) => Input[props.inputStyles] || Input.InputBox}
`;

export const FormBox = styled.form`
  ${(props) => Form[props.FormStyles] || Form.FormBox}
>>>>>>> feature/product
`;
