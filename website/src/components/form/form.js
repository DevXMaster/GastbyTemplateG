import React from "react"
import "./form.scss"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const Form = ({ setCurrentNavItem }) => {
  const { ref: element, inView: appear } = useInView({
    /* Optional options */
    threshold: 1,
  })
  useEffect(() => {
    if (appear) {
      setCurrentNavItem(true)
    }else{
      setCurrentNavItem(false)
    }
  })
  return (
    <>
      <section className="section" style={{paddingLeft:0,paddingRight:0, paddingBottom: '0px',paddingTop:0}} ref={element} id='contact-section'>
        <div className="container is-fluid" id="contact" style={{paddingLeft:0,paddingRight:0}}>
          <div className="columns">
            <div className="column form-image"></div>
            <div className="column" style={{ backgroundColor: "#FAFAFA" }}>
              <div className="section">
                <h3 className="title">Contact</h3>
                <div className="block">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio ea reiciendis voluptatibus porro eos! Placeat libero minima fugit quas quo temporibus, earum culpa harum vero nobis magnam praesentium officia.
                  </p>
                </div>
                <div className="block">
                  <div className="field is-horizontal">
                    <div className="field-body">
                      <div className="field">
                        <p className="control is-expanded">
                          <input
                            className="input"
                            type="email"
                            placeholder=''
                          />
                        </p>
                      </div>
                      <div className="field">
                        <p className="control is-expanded ">
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                          />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-body">
                      <div className="field">
                        <p className="control is-expanded">
                          <input
                            className="input"
                            type="phone"
                            placeholder=""
                          />
                        </p>
                      </div>
                      <div className="field">
                        <p className="control is-expanded ">
                          <input
                            className="input"
                            type="text"
                            placeholder=""
                          />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder=""
                        rows="7"
                      ></textarea>
                    </div>
                  </div>

                  <div className="field">
                    <p className="control" style={{ display: "flex" }}>
                      <button
                        className="button is-success"
                        style={{ marginLeft: "auto" }}
                      >
                        Enviar
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Form
