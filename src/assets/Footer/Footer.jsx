import "../Footer/footer.css"
import ii from '../img/Icono-instagram.png'
import f from '../img/Icono-facebook.png';
import l from '../img/Icono-linkedin.png';
import t from '../img/Icono-telefono.png';
import w from '../img/Icono-web.png';

export default function Footer() {
  return (
    <div className="grid">
<a href="https://web.whatsapp.com/send?phone=5491158031184&text=" className="imagen-link">
  <img className="icono" src={t} alt="" />
</a>

<a href="https://www.facebook.com/segurosyuju" className="imagen-link">
  <img  className='icono' src={f} alt="" />
</a>

<a href="https://www.linkedin.com/company/nimbus-seguros/mycompany/" className="imagen-link">
  <img className="icono" src={l} alt="" />
</a>

<a href="https://www.instagram.com/segurosyuju/" className="imagen-link">
  <img className="icono" src={ii} alt="" />
</a>

<a href="https://yuju.com.ar/" className="imagen-link">
  <img className=" icono" src={w} alt="" />
</a>


    </div>
  )
}
