import React, { ReactNode } from 'react'

export type LayoutContextType = {
  settings: { leftPanelActive: boolean, rightPanelActive: boolean };
  toggleLeftBar: () => void;
  toggleRightBar: () => void;
}[]

export type LayoutProviderProps = {
  children: ReactNode;
}

export const LayoutContext = React.createContext<LayoutContextType>([{
  settings: { leftPanelActive: true, rightPanelActive: false },
  toggleLeftBar: () => console.log('no layout provider.'),
  toggleRightBar: () => console.log('no layout provider.'),
}])

export const useLayout = () => React.useContext(LayoutContext)

export default function LayoutProvider(props: LayoutProviderProps) {

  const [layoutSettings, setLayoutSettings] = React.useState({
    settings: {
      leftPanelActive: true,
      rightPanelActive: true,
    }
  })

  const dispatchLayoutSettings: any = {
    toggleLeftBar: () => setLayoutSettings(state => ({
      ...state, settings: {
        ...state.settings,
        leftPanelActive: !state.settings.leftPanelActive
      }
    })),
    toggleRightBar: () => setLayoutSettings(state => ({
      ...state, settings: {
        ...state.settings, rightPanelActive: !state.settings.rightPanelActive
      }
    }))
  }

  return (
    <LayoutContext.Provider value={[layoutSettings, dispatchLayoutSettings]}>
      {props.children}
    </LayoutContext.Provider>
  )
}