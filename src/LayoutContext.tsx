import React, { ReactNode } from 'react'

export type LayoutContextType = {
  settings: { leftActive: boolean, rightActive: boolean };
  toggleLeftBar: () => void;
  toggleRightBar: () => void;
}[]

export type LayoutProviderProps = {
  children: ReactNode;
}

export const LayoutContext = React.createContext<LayoutContextType>([{
  settings: { leftActive: true, rightActive: false },
  toggleLeftBar: () => console.log('no layout provider.'),
  toggleRightBar: () => console.log('no layout provider.'),
}])

export const useLayout = () => React.useContext(LayoutContext)

export default function LayoutProvider(props: LayoutProviderProps) {

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