export function SideMenu() {
  return (
    <div id="side-menu">
      <section>
        <h2>Contact Form</h2>
        <form id="sectione-left-menu">
          <div id="Email">
            <label htmlFor="e">Email: </label>
            <input type="email" id="e" name="e," required placeholder="example@yahoo.com" />
          </div>
          <div id="UserName">
            <label htmlFor="n"> Name: </label>
            <input type="text" id="Name" name="na" required placeholder="Full Name" />
          </div>

          <div className="Contact-Us">
            <button>Contact us</button>
          </div>
        </form>
      </section>
    </div>
  );
}
