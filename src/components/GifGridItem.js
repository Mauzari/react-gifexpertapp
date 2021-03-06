import React from 'react'

export const GifGridItem = ({id,title,url}) => {
  return (
    <div className="card animate__animated animate__zoomInDown">
        <img src={url} alt={title} />
        <p className="tituloGif">{title}</p>
    </div>
  )
}

