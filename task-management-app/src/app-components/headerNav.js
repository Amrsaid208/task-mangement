import { Button, Col, Row } from 'antd'
import {PlusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import React from 'react'

export default function HeaderNav() {
  return (
    <div className="head-nav">
        <Row style={{backgroundColor:"#2b2c37",height:"5rem"}} className="d-flex align-items-center">
        <Col style={{height:'100%'}} span={4}>
            <div className='d-flex align-items-center justify-content-center' style={{borderRight:'1px solid #ddd',height:"100%"}}>

            <h1>Kanban</h1>
            </div>
        </Col>
        <Col span={20}>
           <div className="d-flex" >
            <div className='d-flex justify-content-between align-items-center px-3' style={{width:"100%"}}>
           <h3>PlatForm Launch</h3>
                <Button size="large" className='d-flex align-items-center p-4 text-center' style={{borderRadius:'20px',backgroundColor:"#8471F2" ,border:"0",color:"white"}}>Add New Task <PlusOutlined/> </Button>
            </div>

           </div>
        </Col>
    </Row>
    </div>
  )
}
