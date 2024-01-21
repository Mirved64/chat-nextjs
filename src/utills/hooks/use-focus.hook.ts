import { useState } from 'react'

export const useFocus = (): [
  focus: boolean,
  focusProps: { onFocus: () => void; onBlur: () => void },
] => {
  const [focus, setFocus] = useState<boolean>(false)

  const focusProps = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
  }

  return [focus, focusProps]
}
