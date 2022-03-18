import './App.css';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useState} from "react";


function App() {
    const [image1, setImage1] = useState(true);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);

    const fnimage1 = () => {
        setImage1(true)
        setImage2(false)
        setImage3(false)
        setImage4(false)
    }

    const fnimage2 = () => {
        setImage1(false)
        setImage2(true)
        setImage3(false)
        setImage4(false)
    }

    const fnimage3 = () => {
        setImage1(false)
        setImage2(false)
        setImage3(true)
        setImage4(false)
    }

    const fnimage4 = () => {
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(true)
    }

  return (
    <div className="App">
      <div className="Radio">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">images</FormLabel>
          <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
          >
            <FormControlLabel value="image1" control={<Radio onClick={fnimage1}/>} label="image1" />
            <FormControlLabel value="image2" control={<Radio onClick={fnimage2}/>} label="image2" />
            <FormControlLabel value="image3" control={<Radio onClick={fnimage3}/>} label="image3" />
            <FormControlLabel value="image4" control={<Radio onClick={fnimage4}/>} label="image4" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="App-header">
          { image1 &&
              <img className="image"  src={"../public/images/image1"}/>}
          {image2 &&
              <img className="image"  src={"../public/images/image2"}/>}
          {image3 &&
              <img className="image"  src={"../public/images/image3"}/>}
          {image4 &&
              <img className="image"  src={"../public/images/image4"}/>}
      </div>
    </div>
  );
}

export default App;
