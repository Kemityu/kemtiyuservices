import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contactus = () => {
  const form = useRef();

  // State pour gérer le Snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success", // success, error, warning, info
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1700u0u", // Remplacez par votre service_id
        "template_3g4k9w2", // Remplacez par votre template_id
        form.current,
        "kB6aoYotYoahaYinT" // Remplacez par votre public_key
      )
      .then(
        (result) => {
          console.log("Email envoyé avec succès :", result.text);
          setSnackbar({
            open: true,
            severity: "success",
            message: "Votre message a été envoyé avec succès !",
          });
        },
        (error) => {
          console.error("Erreur lors de l'envoi :", error.text);
          setSnackbar({
            open: true,
            severity: "error",
            message: "Une erreur s'est produite. Veuillez réessayer.",
          });
        }
      );

    // Réinitialiser le formulaire après soumission
    e.target.reset();
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div className="bg-[#ac9120]-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ac9120]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ac9120]"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ac9120]"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ac9120]"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#ac9120] text-white py-3 px-6 rounded-md hover:bg-[#ac9120]-600"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
            {/* Informations */}
            <div>
              <h4 className="text-lg font-semibold text-[#ac9120] mb-2">
                Nos contacts
              </h4>
              <p className="text-gray-700">+225  01 70 38 70 20</p>
              <p className="text-gray-700">+225 07 97 49 92 80</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#ac9120] mb-2">
                Ecrivez-nous
              </h4>
              <p className="text-gray-700">leseulkemtiyu@gmail.com</p>
              <p className="text-gray-700">vyapi45@gmail.com</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Suivez-nous
              </h4>
              <div className="flex space-x-4  justify-center">
                <a
                  href="#"
                  className="bg-black text-white p-2 rounded-full hover:bg-[#ac9120]"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="#"
                  className="bg-black text-white p-2 rounded-full hover:bg-[#ac9120]"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="#"
                  className="bg-black text-white p-2 rounded-full hover:bg-[#ac9120]"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="#"
                  className="bg-black text-white p-2 rounded-full hover:bg-[#ac9120]"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contactus;
