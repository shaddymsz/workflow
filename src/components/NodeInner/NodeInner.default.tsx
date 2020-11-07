import * as React from 'react'
import styled from 'styled-components'
import { IConfig, INode } from '../../'

export interface INodeInnerDefaultProps {
  className?: string
  config: IConfig
  node: INode
}

const Outer = styled.div`
  padding: 2px 10px;
`

export const NodeInnerDefault = ({ node,className }: INodeInnerDefaultProps) => {
  return (
    <Outer className={className}>
      <div>
      <h4>{node.type}</h4>
      <hr></hr>
      <p>Type the msg</p>
      </div>
      
    </Outer>
  )
}
