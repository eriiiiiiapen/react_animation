import { motion } from "framer-motion";

const ModalComponents = {
  Modal: function Modal() {
    return (
      <div>
      <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
    );
  }
}


function Page() {
  let counter = 10
  setInterval(() => {
      if(counter === 0){
        counter = 10;
      }
      if(counter > 0){
        counter--
      }
      document.getElementById('counterElement').style.setProperty('--value', counter)
  }, 500)

  return (
    <>
      <article>
        <p>
          スクロールしてスクロールしてスクロールしてスクロールしてスクロールしてスクロールして
        </p>
        <p>
        スクロールしてスクロールしてスクロールして
          Fringilla quam urna. スクロールしてras turpis elit, euismod eget ligula quis,
          imperdiet sagittis jusスクロールしてto. In viverra fermスクロールしてentum ex ac vestibulum.
          Aliquam eleifスクロールしてスクロールしてスクロールしてスクロールしてスクロールして
          blandit, at iaculis odio ultrices. Nlum cursus
          ipsum tellus, eu tincidunt nequeスクロールしてスクロールしてスクロールして tincidunt a.
        </p>
        <h2>Sub-header</h2>
        <p>
          In eget sodales arcu, coスクロールしてnsectetur efficitur metus. Duis efficitur
          tincidunt スクロールしてodio, sit amet laスクロールしてoreet massa fringilla eu.
          スクロールしてスクロールしてスクロールしてスクロールしてスクロールしてスクロールしてスクロールして
        </p>
        <p>
        スクロールしてスクロールしてスクロールしてスクロールしてスクロールしてスクロールして
        スクロールしてスクロールしてスクロールしてスクロールしてスクロールしてスクロールしてスクロールして
        スクロールしてスクロールしてスクロールしてスクロールしてスクロールしてスクロールしてスクロールしてスクロールして
        スクロールしてスクロールしてスクロールしてスクロールしてスクロールしてスクロールしてスクロールして
        スクロールしてスクロールしてスクロールしてスクロールして
        スクロールしてスクロールしてスクロールしてスクロールしてスクロールして
        </p>
        <motion.div
            className="w-full bg-yellow-400 h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 'all' }}
            transition={{ duration: 1 }}
          >
        <p>最深部</p>
        </motion.div>
      </article>

    <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 'all' }}
            transition={{ duration: 1 }}
          >
      <div className="mockup-phone">
      <div className="camera"></div> 
      <div className="display">
        <div className="artboard artboard-demo phone-1 overflow-x-auto" style={{'backgroundColor': '#1b1b32'}}>
          <div className="text-white">こんにちは</div>
          <span className="countdown font-mono text-6xl">
            <span id="counterElement" style={{'--value':'10', 'background': 'red'}}></span>
          </span>
          </div>
        </div>
      </div>
      </motion.div>
    </>
    )
  }

export default Page;