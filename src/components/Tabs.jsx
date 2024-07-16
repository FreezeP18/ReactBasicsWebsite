export default function Tabs(props) {
  const ButtonContainer = props.buttonsContainer;
    return (
    <>
      <ButtonContainer>{props.buttons}</ButtonContainer>
      {props.children}
    </>
  );
}
