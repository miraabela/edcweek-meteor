import React from 'react';

export default function Day (props) {
  return (
      <div>
        <p style = {{color: "white", marginBottom:"-5px"}}>{props.d}</p>
        <p style = {{color: "white", fontWeight:"bold", fontSize:"24px", marginBottom:"-15px"}}> {props.m}</p>
        <p style = {{color: props.c, fontWeight:"bold", fontSize:"42px"}}>{props.n}</p>
      </div>
  )
}
