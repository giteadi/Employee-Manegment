
import toast from 'react-hot-toast';

function App() {
  return (
    <div>
     <button onClick={
      (()=>{
        toast.success("Hello Ji..");
      })
     }>
      Click
     </button>
    </div>
  );
}

export default App;
