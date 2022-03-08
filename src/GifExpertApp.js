import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

 
    const [categorias, setCategorias] = useState(['Dragon Ball']);
    


    return ( 
        <>
            <h2 className="titulo">GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            

           
            <ol>
                {
                    categorias.map(c => 
                         <GifGrid 
                         key={c}
                         categoria={c}
                         
                         />
                    )
                }
            </ol>
        </>
     );
}
 
export default GifExpertApp;