import {useState} from 'react';

export default function Accordion({data}) {
    const [currOpen,setCurrOpen] = useState(null)
    return (
        <div className="accordion">
            {data.map((el,idx)=>(
                <AccordionItem 
                    currOpen={currOpen} 
                    onOpen={setCurrOpen} 
                    number={idx} 
                    title={el.title} 
                    key={el.title}
                >
                     {el.text}
                </AccordionItem>
            ))}

                <AccordionItem 
                    currOpen={currOpen} 
                    onOpen={setCurrOpen} 
                    number={23} 
                    title="Test 1" 
                    key="test 1"
                >
                     <p>Allows React Developers to:</p>
                     <ul>
                        <li>Break up UI into components</li>
                        <li>Make components reusable</li>
                        <li>Place state efficiently</li>
                     </ul>
                </AccordionItem>
        </div>
    ) 
  }


  function AccordionItem({number,title,currOpen,onOpen, children}){
    
    const isOpen = number === currOpen ;

    function handleToggle() {
      onOpen(isOpen ? null : number)
    }
    return(
        <div className={`item ${isOpen ? 'open' : ''} `} onClick={handleToggle}>
            <p className="number">{number < 9 ? `0${number+1}` : number+1 }</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? '-' : '+'}</p>
            {isOpen && <div className="content-box">{children}</div>}
            
        </div>
    )

  }
  