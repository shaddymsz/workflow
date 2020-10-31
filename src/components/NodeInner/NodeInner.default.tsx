import * as React from 'react'
import styled from 'styled-components'
import { IConfig, INode } from '../../'

export interface INodeInnerDefaultProps {
  className?: string
  config: IConfig
  node: INode
}

const Outer = styled.div`
  padding: 40px 30px;
`

export const NodeInnerDefault = ({ node,className }: INodeInnerDefaultProps) => {
  return (
    <Outer className={className}>
      <h3>Message type</h3>
      <hr></hr>
      <div>Typeinggggggggggg: {node.type}</div>
    </Outer>
  )
}
