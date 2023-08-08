import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="text-gray-700 bg-blue-50">
      <div className="footer-top bg-white shadow-md">
        <div className="container px-4 py-12 mx-auto text-center">
          <div className="row space-y-4 md:space-y-0 md:grid md:grid-cols-3">

            {/* Contact */}
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3 className="text-lg font-bold mb-6">VitalCare</h3>
              <p className="text-base text-gray-500 leading-6">
                Avenida Roca 550 <br />
                San Miguel de Tucumán<br />
                Tucumán, Argentina <br /><br />
                <strong>Phone:</strong> +54 381 455 1234<br />
                <strong>Email:</strong> info@vitalcare.com.ar<br />
              </p>
            </div>

            {/* Enlaces Útiles */}
            <div className="col-lg-2 col-md-6 footer-links space-y-4">
              <h4 className="text-base font-bold pb-3">Enlaces Útiles</h4>
              <ul className="space-y-2 text-base text-gray-500 leading-6">
                <li><a href="#" className="hover:text-blue-700 transition-all">Inicio</a></li>
                {/* ...otros enlaces... */}
              </ul>
            </div>

            {/* Nuestros Servicios */}
            <div className="col-lg-3 col-md-6 footer-links space-y-4">
              <h4 className="text-base font-bold pb-3">Nuestros Servicios</h4>
              <ul className="space-y-2 text-base text-gray-500 leading-6">
                <li><a href="#" className="hover:text-blue-700 transition-all">Atención Médica</a></li>
                {/* ...otros enlaces... */}
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4 text-center">
        <div className="me-md-auto text-center text-md-start space-y-2 mx-auto">
          <div className="copyright">
            &copy; Copyright <strong><span>VitalCare</span></strong>. Todos los derechos reservados
          </div>
          <div className="credits">
            <p>Made with ❤️ and a lot of ☕ </p>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0 space-x-2">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          {/* ...otros enlaces sociales... */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
