import { Dialog, DialogFooter, DialogType } from "@fluentui/react"
import { Button, FluentProvider } from "@fluentui/react-components"

import { DialogSpinner } from "./ConfirmDialog.styles"

export interface IConfirmDialogProps {
  hidden: boolean
  isProcessing?: boolean
  onConfirmed: () => void
  onClose: () => void
}

export const ConfirmDialog: React.FunctionComponent<IConfirmDialogProps> = ({
  hidden,
  isProcessing,
  children,
  onConfirmed,
  onClose,
}) => {
  return (
    <Dialog
      hidden={hidden}
      dialogContentProps={{
        type: DialogType.largeHeader,
        title: "Delete fencer?",
        subText: children as unknown as string,
        closeButtonAriaLabel: "Close",
      }}
    >
      <FluentProvider>
        <DialogFooter>
          {isProcessing && <DialogSpinner />}
          <Button
            appearance="primary"
            onClick={onConfirmed}
            disabled={isProcessing}
          >
            Delete
          </Button>
          <Button onClick={onClose} disabled={isProcessing}>
            Cancel
          </Button>
        </DialogFooter>
      </FluentProvider>
    </Dialog>
  )
}
