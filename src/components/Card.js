import React, { Component } from "react";



class Card extends Component{

    render(){
      return (
          <div>
              {image.map(item => {                    
                  return <div>{item.name}</div>                    
              })}
          </div>
      )
    }
    }
export default Card;