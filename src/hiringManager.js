import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HiringManagerPortal = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        const fetchPortfolios = async () => {
            const response = await axios.get('http://localhost:5000/api/students');
            console.log(response);
            setPortfolios(response.data);
        };
        fetchPortfolios();
    }, []);

    const handleDelete = (id) =>{
        console.log("Delete button clicked");

        axios.delete(`/api/student`, {
            id: `${id}`
        })
            .then((res)=>{
                console.log(res);
                alert("data deleted");
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return (
        <div>
            <h1 >All Student Portfolios</h1>
            {portfolios.map((portfolio, index) => (
                <div key={index}>
                    <h3>{portfolio.name}</h3>
                    <p>{portfolio.marks10}</p>
                    <p>{portfolio.marks12}</p>
                    <p>{portfolio.gpa}</p>
                    <p>{portfolio.futureInterests}</p>
                    <p>{portfolio.extraActivities}</p>
                    <button onClick={()=>handleDelete(portfolio._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default HiringManagerPortal;


//code-1
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const HiringManagerPortal = () => {
//     const [portfolios, setPortfolios] = useState([]);

//     useEffect(() => {
//         const fetchPortfolios = async () => {
//             const response = await axios.get('http://localhost:5000/hiringManager/portfolios');
//             setPortfolios(response.data);
//         };
//         fetchPortfolios();
//     }, []);

//     return (
//         <div>
//             <h1>All Student Portfolios</h1>
//             {portfolios.map((portfolio, index) => (
//                 <div key={index}>
//                     <h3>{portfolio.name}</h3>
//                     <p>{portfolio.portfolio}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default HiringManagerPortal;
