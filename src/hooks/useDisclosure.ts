import { useState } from "react"

export type Disclosure = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
  setIsOpen: (isOpen: boolean) => void
}

/**
 * Use a disclosure to help with UI elements that need visibility to toggle open and closed.
 *  The disclosure will manage the boolean states and expose the state setters in a convenient way.
 *  See more: https://github.com/chakra-ui/chakra-ui/blob/master/packages/chakra-ui/src/useDisclosure/index.js
 *
 * @param isDefaultOpen - Boolean is default open
 */
export const useDisclosure = (isDefaultOpen?: boolean): Disclosure => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen || false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onToggle = () => setIsOpen(!isOpen)
  return { isOpen, onOpen, onClose, onToggle, setIsOpen }
}
