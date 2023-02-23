import Navbar from "./Navbar";

const Regform = (props) => {
//   const {handleChange, handleSubmit} = props;
    return(
        <div>
            <Navbar/>

       <div>
        <h1>Login</h1>        
       </div>

       <form id="login" onSubmit={handleSubmit}>
         <div>
           <label>Name</label>
           <input
            onChange={handleChange}
            name="firstname"
            value={firstname}
           />
         </div>

         <div>
          <label>Student Id</label>
          <input type="email"
           onChange={handleChange}
           name="email"
           value={email}
          />
         </div>

        <div>
          <label>Password</label>
          <input 
          onChange={handleChange}
          name="password"
          value={password}
          />
        </div>

        <div>
         <button type="submit">Submit</button>
        </div>



       </form>


        </div>
        
        
    )
}

export default Regform