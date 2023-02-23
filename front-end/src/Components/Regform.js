import Navbar from "./Navbar";

const Regform = (props) => {
//   const {handleChange, handleSubmit} = props;
    return(
        <div>
            <Navbar/>

       <div>
        <h1>Register</h1>        
       </div>

       <form id="register" onSubmit={handleSubmit}>
         <div>
           <label>Name</label>
           <input
            onChange={handleChange}
            name="firstname"
            value={firstname}
           />
         </div>

         <div>
          <label>Email</label>
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