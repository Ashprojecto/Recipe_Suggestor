import { useState} from "react";
import "./Form.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Form({updateDish}) {
  const [dish, setDish] = useState("");


  function yourDish(e) {
    setDish(e.target.value);
  }

  function handleSubmit(e){
      e.preventDefault()
    updateDish(dish)
    setDish("");
  }


  return (
    <form action="" className="Form">
      <input
        type="text"
        placeholder="Enter the dish"
        onChange={yourDish}
        value={dish}
      />
      {(dish.trim())===""?<Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />} size="large" className="btn" disabled>
        Send
      </Button>:<Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />} size="large" className="btn">
        Send
      </Button>}
    </form>
  );
}
