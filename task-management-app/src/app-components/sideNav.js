import { BookFilled, PlusOutlined } from "@ant-design/icons";
import { Button ,Input,Modal,Form} from "antd";
import React ,{useEffect, useState,useRef} from "react";

export default function SideNav() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [boards,setBoards]=useState([])
    const [numOfCols,setNumOfCols]=useState(1)
    const STORAGE_REF=useRef(false)
    useEffect(()=>{
        console.log(STORAGE_REF.current)
        // localStorage.removeItem("boards")
        if(STORAGE_REF.current===false)
        {

        //    console.log(JSON.parse(localStorage.getItem("boards")).length)
           if(localStorage.getItem("boards")!==null)
           {

               setBoards(JSON.parse(localStorage.getItem("boards")))

           }
            STORAGE_REF.current=10;
        
        }

            else{
                if(boards.length>0)
                {
                    
                    localStorage.setItem('boards',JSON.stringify(boards))
                    console.log(boards)
                }
            }
        

},[boards])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleAddBoard=()=>{
  }

  var colss=[]
  const handleFormSubmit=(values)=>{

       (Object.keys(values)).map((item,i)=>{
        
        if(i>0)
        {
            colss.push(values[item])
        }
    
    })
    const isAdded=boards.some((item)=>{
        return item.name === values.name
    })
    if(isAdded)
    {
        alert('aleady here')
    }
    else{

        setBoards(prevVal=>[...prevVal,{name:values.name,col:colss}])
    }
    setNumOfCols(1)
    setIsModalOpen(false)
  }
//   console.log(localStorage.getItem('board'))

  return (
    
    <div
      style={{
        height: "100vh",
        background: "#3E3F4E",
        color: "white",
        borderTop: "1px solid #eee",
      }}
    >

      <div className="text-start px-4 py-2">
        <div className="my-2">
          <h5>ALL BOARDS ({boards.length})</h5>
        </div>
       
        {console.log(boards.length)}
         {
            boards.length>0?(
                boards.map((board,i)=>{
                    return(
                        
                             <div key={i}
              className="d-flex align-items-center p-3 my-2"
              style={{
                // background: "#8471F2",
                borderRadius: "0 20px 20px 0",
                height: "10vh",
            }}
            >
                 <div className="my-3">
                <h5 className="d-flex align-items-center">
                  <BookFilled />
                </h5>
              </div>
              <div className="mx-2">
                <h5 className="d-flex align-items-center">{board.name}</h5>
              </div>
            
                </div>
                        
                    )
                })
            ):null
           
         }
       

        <Button onClick={showModal} className="d-flex align-items-center" style={{ backgroundColor:'transparent',color: "#8471F2" ,border:'0'}}>
          <div className="my-3">
            <h5 className="d-flex align-items-center">
              <PlusOutlined />
            </h5>
          </div>
          <div className="mx-2">
            <h5 className="d-flex align-items-center">Create new board</h5>
          </div>
        </Button>
      </div>
      <Modal destroyOnClose={true} footer={null} style={{color:"white"}} title="Add New Board" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form onFinish={(val)=>handleFormSubmit(val)}>
         
        
        <div className="my-1" >
        <p>Name</p>
            <Form.Item name="name">
          <Input required={true} />
            </Form.Item>
        </div>

        <div className="m-1">
        <p>Columns</p>
        {
            [...Array(numOfCols)].map((item,i)=>{
              return(
                <Form.Item key={i} name={`col-${i}`}>
                <Input />
                  </Form.Item>
              )
            })
            
         }          
           
        </div>
        <Button onClick={()=>setNumOfCols(prevVal=>prevVal+1)} className="my-1" style={{background:"white",border:'0' ,borderRadius:'10px',color:'#8471F2'}} block>+Add New Columns</Button>
        <Form.Item>

        <Button htmlType="submit" className="my-1" style={{background:"#8471F2",border:'0' ,borderRadius:'10px'}} block>Create New Board</Button>
        </Form.Item>
        </Form>
      </Modal>
    </div>
    
  );
}
