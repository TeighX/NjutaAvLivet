import React from 'react'
import Form from '../components/form'
import "./kontakt.css"

function kontakt() {
  return (
    <>
     <div className='kontakt-info' >
     <h2>Varmt välkommen att kontakta oss! </h2>
     <p>
Tack för att du valt att fylla i vårt kontaktformulär! Vi uppskattar ditt intresse för vår hemtjänst <br />
 och är glada att få möjligheten att vara till hjälp. <br /> <br />

Vänligen fyll i formuläret med dina uppgifter och övrig relevant information nedan. <br />
 När vi mottagit din förfrågan kommer vi att gå igenom den noggrant och kontakta dig <br />
 så snart som möjligt för att diskutera vidare och svara på eventuella frågor du kan ha. <br /> <br />
</p>

<p>_________________</p>
</div>


 <Form />

 </>
    )
}

export default kontakt