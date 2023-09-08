import { FC } from "react"

interface Props {
  children: React.ReactNode
}
export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: '10px',
      borderRadius: '12px',
    }}>

      <h3>Dark Layout</h3>
      <div>
      <p>{ children }</p>
      </div>

    </div>    
  )
}
