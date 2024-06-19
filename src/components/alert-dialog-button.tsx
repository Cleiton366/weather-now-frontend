import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import AlertDialogProps from "@/interfaces/alert-dialog-props"

export function AlertDialogButton(props: AlertDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={props.buttonStyle} variant="outline">{props.buttonText}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#2E2E38]">
        <AlertDialogHeader>
          <AlertDialogTitle>{props.tittle}</AlertDialogTitle>
          <AlertDialogDescription className="text-white">{props.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={props.buttonAction}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
