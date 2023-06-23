import { FC } from 'react'
interface LoadingProps { }
const Loading: FC<LoadingProps> = ({ }) => {
  return (
    <div className="lds-ripple"><div></div><div></div></div>
  )
}
export default Loading