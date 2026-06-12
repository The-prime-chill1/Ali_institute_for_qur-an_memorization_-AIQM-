// // // src/pages/Fees.jsx
// // import React, { useEffect } from 'react';
// // import { FaPhone, FaWhatsapp } from 'react-icons/fa';
// // import '../css/fees.css';

// // const Fees = () => {
// //   useEffect(() => {
// //     document.title = 'AIQM - Fees Structure | Ali Institute For Qur\'an Memorization';
// //   }, []);




// // const feeStructure = [
// //   { item: 'Application Fee', amount: '₦5,000' },
// //   { item: 'Uniform (4 Pairs)', amount: '₦60,000' },
// //   { item: 'Female Jumu\'ah Wear', amount: '₦15,000' },
// //   { item: 'Student ID', amount: '₦5,000' },
// //   { item: 'Full Boarding (per 3 months)', amount: '₦200,000' },
// //   { item: 'Full Boarding (One-off - 12 months)', amount: '₦780,000' },
// //   { item: 'Day Student (per month)', amount: '₦7,000' },
// //   { item: 'Weekend Boarding (per month)', amount: '₦30,000' }
// // ];

// //   return (
// //     <main className="fees-page">
// //       <div className="page-header">
// //         <div className="container">
// //           <h1>Fees Structure</h1>
// //           <p>Transparent and Affordable Fee Structure</p>
// //         </div>
// //       </div>

// //       <section className="fees-table-section section">
// //         <div className="container">
// //           <div className="fees-card">
// //             <h2>Fee Breakdown</h2>
// //             <div className="fee-items">
// //               {feeStructure.map((fee, index) => (
// //                 <div key={index} className="fee-row">
// //                   <span className="fee-item">{fee.item}</span>
// //                   <span className="fee-amount">{fee.amount}</span>
// //                 </div>
// //               ))}
// //             </div>
            
// //             <div className="notice-box">
// //                 <h3>Important Information</h3>
                
// //                 <div className="notice-section">
// //                   <h4>✅ What's Included:</h4>
// //                   <p>Full Boarding & Weekend Boarding: Accommodation, feeding, medicals, and tuition inclusive</p>
// //                 </div>
                
// //                 <div className="notice-section">
// //                   <h4>✅ Provisions:</h4>
// //                   <p><strong>Not allowed except:</strong> {provisions.join(', ')}</p>
// //                 </div>
                
// //                 <div className="notice-section">
// //                   <h4>✅ Payment Method:</h4>
// //                   <p>Payments are not processed through this website. Applicants and parents should contact the school administration for payment instructions after admission approval.</p>
// //                 </div>
// //               </div>
                          
// //             <div className="contact-buttons">
// //               <a href="tel:+2349039785732" className="btn btn-secondary">
// //                 <FaPhone /> Call School
// //               </a>
// //               <a href="https://wa.me/2349039785732" className="btn btn-primary">
// //                 <FaWhatsapp /> WhatsApp School
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default Fees;




// // src/pages/Fees.jsx
// import React, { useEffect } from 'react';
// import { FaPhone, FaWhatsapp } from 'react-icons/fa';
// import '../css/fees.css';

// const Fees = () => {
//   useEffect(() => {
//     document.title = 'AIQM - Fees Structure | Ali Institute For Qur\'an Memorization';
//   }, []);

//   const feeStructure = [
//     { item: 'Application Fee', amount: '₦5,000' },
//     { item: 'Uniform (4 Pairs)', amount: '₦60,000' },
//     { item: 'Female Jumu\'ah Wear', amount: '₦15,000' },
//     { item: 'Student ID', amount: '₦5,000' },
//     { item: 'Full Boarding (per 3 months)', amount: '₦200,000' },
//     { item: 'Full Boarding (One-off - 12 months)', amount: '₦780,000' },
//     { item: 'Day Student (per month)', amount: '₦7,000' },
//     { item: 'Weekend Boarding (per month)', amount: '₦30,000' }
    
//   ];

//   // ✅ Add this - the missing provisions array
//   const provisions = ['Garri', 'Groundnut', 'Sugar', 'Bread Spread'];

//   return (
//     <main className="fees-page">
//       <div className="page-header">
//         <div className="container">
//           <h1>Fees Structure</h1>
//           <p>Transparent and Affordable Fee Structure</p>
//         </div>
//       </div>

//       <section className="fees-table-section section">
//         <div className="container">
//           <div className="fees-card">
//             <h2>Fee Breakdown</h2>
//             <div className="fee-items">
//               {feeStructure.map((fee, index) => (
//                 <div key={index} className="fee-row">
//                   <span className="fee-item">{fee.item}</span>
//                   <span className="fee-amount">{fee.amount}</span>
//                 </div>
//               ))}
//             </div>
            
//             <div className="notice-box">
//               <h3>Important Information</h3>
              
//               <div className="notice-section">
//                 <h4>✅ What's Included:</h4>
//                 <p>Full Boarding & Weekend Boarding: Accommodation, feeding, medicals, and tuition inclusive</p>
//               </div>
              
//               <div className="notice-section">
//                 <h4>✅ Provisions:</h4>
//                 <p><strong>Not allowed except:</strong> {provisions.join(', ')}</p>
//               </div>
              
//               <div className="notice-section">
//                 <h4>✅ Payment Method:</h4>
//                 <p>Payments are not processed through this website. Applicants and parents should contact the school administration for payment instructions after admission approval.</p>
//               </div>
//             </div>
                          
//             <div className="contact-buttons">
//               <a href="tel:+2349039785732" className="btn btn-secondary">
//                 <FaPhone /> Call School
//               </a>
//               <a href="https://wa.me/2349039785732" className="btn btn-primary">
//                 <FaWhatsapp /> WhatsApp School
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Fees;








// src/pages/Fees.jsx
import React, { useEffect } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import '../css/fees.css';

const Fees = () => {
  useEffect(() => {
    document.title = 'AIQM - Fees Structure | Ali Institute For Qur\'an Memorization';
  }, []);

  // ✅ CORRECTED fee structure based on the official image
  const feeStructure = [
    { item: 'Application Form', amount: '₦10,000,00' },
    { item: 'Uniform (4 Pairs)', amount: '₦80,000,00' },
    { item: 'Female Jumu\'ah Wear', amount: '₦20,000,00' },
    { item: 'Student ID', amount: '₦10,000,00' },
    { item: 'Full Boarding (per 3 months)', amount: '₦250,000,00' },
    { item: 'Full Boarding (per 6 months) ', amount: '₦500,000,00' },
    { item: 'Full Boarding (per 12 months) - One-off-payment', amount: '₦980,000,00' },
    { item: 'Weekend Boarding (per  month)', amount: '₦50,000,00' },
    { item: 'Daily Morning Classes (Per Month)', amount: '₦10,000,00' },
    { item: 'Daily Weekend Morning Classes(Per Month)', amount: '₦5,000,00' }
  ];

  const provisions = ['Garri', 'Groundnut', 'Sugar', 'Bread Spread'];

  return (
    <main className="fees-page">
      <div className="page-header">
        <div className="container">
          <h1>Fees Structure</h1>
          <p>Transparent and Affordable Fee Structure</p>
        </div>
      </div>

      <section className="fees-table-section section">
        <div className="container">
          <div className="fees-card">
            <h2>Fee Breakdown</h2>
            <div className="fee-items">
              {feeStructure.map((fee, index) => (
                <div key={index} className="fee-row">
                  <span className="fee-item">{fee.item}</span>
                  <span className="fee-amount">{fee.amount}</span>
                </div>
              ))}
            </div>
            
            <div className="notice-box">
              <h3>Important Information</h3>
              
              <p><strong>✅ What's Included:</strong><br />
              Full Boarding & Weekend Boarding: Accommodation, feeding, medicals, and tuition inclusive</p>
              
              <p><strong>✅ Provisions:</strong><br />
              Not allowed except: {provisions.join(', ')}</p>

              <p><strong>✅ Note:</strong><br />
               In any case of withdrawal before expiration of your child(ren)'s payment,
                you can only get refunds 3 months after withdrawal.</p>
              
              <p><strong>✅ Payment Method:</strong><br />
              Payments are not processed through this website. Applicants and parents should contact the school administration for payment instructions after admission approval.</p>
            </div>
                          
            <div className="contact-buttons">
              <a href="tel:+2349039785732" className="btn btn-secondary">
                <FaPhone /> Call School
              </a>
              <a href="https://wa.me/2349039785732" className="btn btn-primary">
                <FaWhatsapp /> WhatsApp School
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Fees;