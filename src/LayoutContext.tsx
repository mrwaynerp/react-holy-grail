import React, { ReactNode } from 'react'

// declare LayoutContext types
export type LayoutContextTypes = {
  settings: { leftPanelActive: boolean, rightPanelActive: boolean };
  toggleLeftBar: () => void;
  toggleRightBar: () => void;
}[]

// declare LayoutProviderProps
export type LayoutProviderProps = {
  children: ReactNode;
}

// define LayoutContext with defaults
export const LayoutContext = React.createContext<LayoutContextTypes>([{
  settings: { leftPanelActive: true, rightPanelActive: false },
  toggleLeftBar: () => console.log('no layout provider.'),
  toggleRightBar: () => console.log('no layout provider.'),
}])

// define context react hook
export const useLayout = () => React.useContext(LayoutContext)

// LayoutProvider will manage the state/methods
export default function LayoutProvider(props: LayoutProviderProps) {

  // state of this context provider
  const [layout, setLayout] = React.useState({
    settings: {
      leftPanelActive: true,
      rightPanelActive: true,
    }
  })

  // methods to change the state of this context provider
  const dispatchLayoutActions: any = {
    toggleLeftBar: () => setLayout(state => ({
      ...state, settings: {
        ...state.settings,
        leftPanelActive: !state.settings.leftPanelActive
      }
    })),
    toggleRightBar: () => setLayout(state => ({
      ...state, settings: {
        ...state.settings, rightPanelActive: !state.settings.rightPanelActive
      }
    }))
  }

  return (
    <LayoutContext.Provider value={[layout, dispatchLayoutActions]}>
      {props.children}
    </LayoutContext.Provider>
  )
}