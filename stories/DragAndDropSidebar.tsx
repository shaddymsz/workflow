import * as React from 'react'
import styled from 'styled-components'
import { FlowChartWithState } from '../src'
import { Content, Page, Sidebar, SidebarItem } from './components'
import { chartSimple } from './misc/exampleChartState'
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import MenuItem from '@material-ui/core/MenuItem';

// const Message = styled.div`
// margin: 10px;
// padding: 10px;
// background: rgba(0,0,0,0.05);
// `
const Card = styled.div`
margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: 0px;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  border-radius: 8px;
  box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, 0.05);
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background-color: #fff;
  background-clip: border-box;
`

export const DragAndDropSidebar = () => (
  <Page>
    <Content>
      <FlowChartWithState initialValue={chartSimple} />
    </Content>
    <Sidebar>
      {/* <Message>
        Drag and drop these items onto the canvas.
      </Message> */}
{/*    
      <FormControl >
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}


      {/* <SidebarItem
        type="top/bottom"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      />
      <SidebarItem
        type="bottom-only"
        ports={ {
          port1: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        }}
      />
      <SidebarItem
        type="left-right"
        ports={ {
          port1: {
            id: 'port1',
            type: 'left',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port2',
            type: 'right',
            properties: {
              custom: 'property',
            },
          },
        }}
      />
      <SidebarItem
        type="all-sides"
        ports={ {
          port1: {
            id: 'port1',
            type: 'left',

          },
          port2: {
            id: 'port2',
            type: 'right',
          },
          port3: {
            id: 'port3',
            type: 'top',
          },
          port4: {
            id: 'port4',
            type: 'bottom',
          },
        }}
      />
      <SidebarItem
        type="lots-of-ports"
        ports={ {
          port1: {
            id: 'port1',
            type: 'left',

          },
          port2: {
            id: 'port2',
            type: 'right',
          },
          port3: {
            id: 'port3',
            type: 'top',
          },
          port4: {
            id: 'port4',
            type: 'bottom',
          },
          port5: {
            id: 'port5',
            type: 'left',
          },
          port6: {
            id: 'port6',
            type: 'right',
          },
          port7: {
            id: 'port7',
            type: 'top',
          },
          port8: {
            id: 'port8',
            type: 'bottom',
          },
          port9: {
            id: 'port9',
            type: 'left',
          },
          port10: {
            id: 'port10',
            type: 'right',
          },
          port11: {
            id: 'port11',
            type: 'top',
          },
          port12: {
            id: 'port12',
            type: 'bottom',
          },
        }}
      /> */}
     <Card>
       <Card>
       <h4>Triggers</h4>
       </Card>
       <SidebarItem
        type="Incoming-SMS"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      />
      <SidebarItem
        type="Contact-Subscribed"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      /> 
       <SidebarItem
        type="Contact-Tagged"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      />
      <Card>
        <h4>Conditions</h4>
      </Card>
      <SidebarItem
        type="Message"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      />
      <SidebarItem
        type="Contact"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      />
      <SidebarItem
        type="Time"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      />
      <SidebarItem
        type="Date-Time"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      />
      <SidebarItem
        type="Day"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      />
      <SidebarItem
        type="AB-Split"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      />
      <Card>
        <h4>Actions</h4>
        </Card>
        <SidebarItem
        type="Send-Email"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      />
      <SidebarItem
        type="Send-SMS-Message"
        ports={ {
          port1: {
            id: 'port1',
            type: 'top',
            properties: {
              custom: 'property',
            },
          },
          port2: {
            id: 'port1',
            type: 'bottom',
            properties: {
              custom: 'property',
            },
          },
        } }
        properties={ {
          custom: 'property',
        }}
      />
      
     </Card>
    </Sidebar>
    <hr></hr>
    
  </Page>
)
