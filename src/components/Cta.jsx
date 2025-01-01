import React from "react";
import EastIcon from "@mui/icons-material/East";

function Cta() {
  return (
    <>
      <section className="cta-section">
        <div className="cta-container">
          <p className="text-3xl font-semibold text-slate-50">
            Do you have a Project idea?
          </p>
          <p className="text-3xl font-semibold text-slate-50">
            Let's discuss your project !
          </p>

          <a href="#contact">
            <button className="text-md font-semibold text-slate-50">
              Let’s work Together <EastIcon fontSize="small" />
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Cta;
