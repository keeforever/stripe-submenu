import {FaCreditCard,FaBook,FaMedkit} from 'react-icons/fa';

export const submenu=[
  {
    id:1,
    menu:'Products',
    icon:<FaCreditCard className="c-in"/>,
    menuItems:[
      {page:'Payment',link:'/payment'},
      {page:'Terminal',link:'/terminal'},
      {page:'Connect',link:'/connect'}
    ]
  },
  {
    id:2,
    menu:'Developers',
    icon:<FaBook className="c-in"/>,
    menuItems:[{page:'Plugins',link:'/plugins'},
    {page:'Libraries',link:'/libraries'},
    {page:'Help',link:'/help'},
    {page:'Billing',link:'/billing'}
  ]
  },
  {
    id:3,
    menu:'Company',
    icon:<FaMedkit className="c-in"/>,
    menuItems:[{page:'About',link:'/about'},
    {page:'Customers',link:'/customers'}
  ]
  }
]

export const stripeInfo={
  text:'Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.'
}