import { Dialog, DialogFooter, DialogType } from "@fluentui/react"
import { Button, FluentProvider } from "@fluentui/react-components"

import { DialogSpinner } from "./ConfirmDialog.styles"

export interface IConfirmDialogProps {
  hidden: boolean
  isProcessing?: boolean
  onConfirmed: () => void
  onClose: () => void
  confirmLabel: string
  title: string
}

export const ConfirmDialog: React.FunctionComponent<IConfirmDialogProps> = ({
  hidden,
  isProcessing,
  children,
  onConfirmed,
  onClose,
  confirmLabel,
  title,
}) => {
  return (
    <Dialog
      hidden={hidden}
      dialogContentProps={{
        type: DialogType.largeHeader,
        title,
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
            {confirmLabel}
          </Button>
          <Button onClick={onClose} disabled={isProcessing}>
            Cancel
          </Button>
        </DialogFooter>
      </FluentProvider>
    </Dialog>
  )
}
