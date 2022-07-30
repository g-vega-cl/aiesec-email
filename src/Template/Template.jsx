import styled from "styled-components";

const Template = () => {
  const handleSubmit = () => {};

  return (
    <Wrapper>
      <Form>
        Template
        <TextArea placeholder="Write your input here"></TextArea>
        <button>Submit</button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Helvetica", "Arial", sans-serif;
`;

const TextArea = styled.textarea`
  font-family: "Helvetica", "Arial", sans-serif;
  height: 300px;
  resize: none;
  margin: 20px 0px;
`;

export default Template;
