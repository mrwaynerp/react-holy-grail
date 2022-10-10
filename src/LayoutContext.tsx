import React from 'react'

export type LayoutContextType = {
  settings?: any;
  toggleLeftBar?: any;
  toggleRightBar?: any;
}[]

export const LayoutContext = React.createContext<LayoutContextType>([{}])

export const useLayout = () => React.useContext(LayoutContext)

export default function LayoutProvider(props: any) {

  const [layoutSettings, setLayoutSettings] = React.useState({
    settings: {
      leftActive: true,
      rightActive: true,
    }
  })

  const dispatchLayoutSettings: any = {
    toggleLeftBar: () => setLayoutSettings(state => ({ ...state, settings: { ...state.settings, leftActive: !state.settings.leftActive } })),
    toggleRightBar: () => setLayoutSettings(state => ({ ...state, settings: { ...state.settings, rightActive: !state.settings.rightActive } }))
  }

  return (
    <LayoutContext.Provider value={[layoutSettings, dispatchLayoutSettings]}>
      {props.children}
    </LayoutContext.Provider>
  )
}