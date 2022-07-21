import Card from 'react-bootstrap/Card';
import'./user.css';
  
// email:'John@gmail.com',
// username:'johnd',
// password:'m38rmF$',
// name:{
//     firstname:'John',
//     lastname:'Doe'
// },
// address:{
//     city:'kilcoole',
//     street:'7835 new road',
//     number:3,
//     zipcode:'12926-3874',
//     geolocation:{
//         lat:'-37.3159',
//         long:'81.1496'
//     }
// },
// phone:'1-570-236-7033'


export default function UserCard(props) {
    const Details=props.details;
  return (
    <Card className='card-container '>
      <Card.Img variant="top" className='image bg-light' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nr9pGY3TnYIKa2ypx75EB9lPL70WJAJpvw&usqp=CAU"  />
      <Card.Body>
        <Card.Title className='name text-center'>{Details.name.firstname} {Details.name.lastname}</Card.Title>
        <Card.Text>
        id:<span className='text'>{Details.id}</span><br/>
       Address:-<br/>
        <span className='text'>
        City    :{Details.address.city}  <br/> Zipcode:{Details.address.zipcode}<br/>
        Street  :{Details.address.street} <br/>Number :{Details.address.number}<br/></span>
         
        Geolocation:-<br/>  <span className='text'>
        lat:{Details.address.geolocation.lat} <br/>
        long:{Details.address.geolocation.long}<br/></span>
        Phone:<span className='link'>{Details.phone}</span><br/>
        email:<span className='link'>{Details.email}</span> </Card.Text>
      </Card.Body>
    </Card>
  )
}

