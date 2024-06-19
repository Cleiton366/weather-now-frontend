export default interface AlertDialogProps {
  tittle : string,
  description : string,
  buttonText : string,
  buttonStyle? : string,
  buttonAction? : () => void
}